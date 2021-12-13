import React, { useEffect, useState } from 'react';
import EditCard from '../../../../Modals/EditCardModal/EditCard';
import FollowIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import WatchIcon from '@mui/icons-material/AccessTimeOutlined';
import DescriptiondIcon from '@mui/icons-material/DescriptionOutlined';
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import CheckIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import {
	CardTitle,
	CommentContainer,
	Container,
	Cover,
	DateContainer,
	FooterContainer,
	IconGroupContainer,
	IconGroupWrapper,
	IconWrapper,
	Label,
	LabelContainer,
	Span,
	CheckContainer,
	MembersContainer,
	MembersWrapper,
	MemberAvatar,
} from './styled';
import { Draggable } from 'react-beautiful-dnd';
const Card = (props) => {
	const [openModal, setOpenModal] = useState(false);
	const card = props.info;
	const comment = card.activities.filter((act) => act.isComment).length;
	let checks = { c: 0, n: 0 };
	card.checklists.map((checklist) => {
		return checklist.items.map((item) => {
			if (item.completed) checks.c += 1;
			else checks.n += 1;
			return item;
		});
	});
	let labels = card.labels.filter(i=>i.selected);
	const handleOpenClose = () => {
		setOpenModal((current) => !current);
	};

	return (
		<>
			<Draggable draggableId={props.info._id} index={props.index}>
				{(provided, snapshot) => {
					return (
						<Container
							onClick={handleOpenClose}
							{...provided.dragHandleProps}
							{...provided.draggableProps}
							ref={provided.innerRef}
							isDragging={snapshot.isDragging}
							color={!card.cover.isSizeOne?card.cover.color:'#fff'}
							padding={card.cover.color&&card.cover.isSizeOne}
						>
							{card.cover.isSizeOne&&
							<Cover color={card.cover.color}/>}
							{labels && (
								<LabelContainer>
									{labels.map(label=>{
										return (<Label color={label.color}/>);
									})}
								</LabelContainer>
							)}
							
							<CardTitle>{card.title}</CardTitle>
							<FooterContainer>
								<IconGroupContainer>
									<IconGroupWrapper>
										{card.watchers.length > 0 && (
											<IconWrapper>
												<FollowIcon fontSize='0.5rem' />
											</IconWrapper>
										)}
										<DateContainer>
											<WatchIcon fontSize='0.5rem' />
											<Span>Nov 10</Span>
										</DateContainer>
										{card.description && <DescriptiondIcon fontSize='0.5rem' />}
										{comment > 0 && (
											<CommentContainer>
												<CommentIcon fontSize='0.5rem' />
												<Span>{comment}</Span>
											</CommentContainer>
										)}
										{card.checklists.length > 0 && (
											<CheckContainer>
												<CheckIcon fontSize='0.5rem' />
												<Span>
													{checks.c}/{checks.c + checks.n}
												</Span>
											</CheckContainer>
										)}
									</IconGroupWrapper>
								</IconGroupContainer>
								<MembersContainer>
									<MembersWrapper>
										{card.members &&
											card.members.map((member) => {
												return <MemberAvatar>{member.name[0]}</MemberAvatar>;
											})}
									</MembersWrapper>
								</MembersContainer>
							</FooterContainer>
						</Container>
					);
				}}
			</Draggable>
			{openModal && (
				<EditCard
					open={openModal}
					callback={handleOpenClose}
					ids={{ cardId: props.info._id, listId: props.listId, boardId: props.boardId }}
				/>
			)}
		</>
	);
};

export default Card;

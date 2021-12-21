import React, { useState } from 'react';
import EditCard from '../../../../Modals/EditCardModal/EditCard';
import FollowIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import WatchIcon from '@mui/icons-material/AccessTimeOutlined';
import DescriptiondIcon from '@mui/icons-material/DescriptionOutlined';
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import CheckIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import AttachmentIcon from '@mui/icons-material/InsertLinkRounded';
import {
	AttachmentContainer,
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
} from './styled';
import { Draggable } from 'react-beautiful-dnd';
import moment from 'moment';
import { Avatar } from '@mui/material';
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
	let labels = card.labels.filter((i) => i.selected);
	const handleOpenClose = () => {
		setOpenModal((current) => !current);
	};

	const formatDate = (date) => {
		if (moment(date).toDate().getFullYear() < new Date().getFullYear()) return moment(date).format('MMM DD, yyyy');
		else return moment(date).format('MMM DD');
	};

	function getStyle(style, snapshot) {
		if (!snapshot.isDropAnimating) {
			return style;
		}
		return {
			...style,
			transitionDuration: `80ms`,
		};
	}

	return (
		<>
			<Draggable draggableId={props.info._id} index={props.index}>
				{(provided, snapshot) => {
					return (
						<Container
							onClick={handleOpenClose}
							{...provided.dragHandleProps}
							{...provided.draggableProps}
							style={getStyle(provided.draggableProps.style, snapshot)}
							ref={provided.innerRef}
							isDragging={snapshot.isDragging}
							color={!card.cover.isSizeOne ? card.cover.color : '#fff'}
							padding={card.cover.color && card.cover.isSizeOne}
						>
							{card.cover.isSizeOne && <Cover color={card.cover.color} />}
							{labels && (
								<LabelContainer>
									{labels.map((label) => {
										return <Label key={label._id} color={label.color} />;
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
										{card.attachments.length > 0 && (
											<AttachmentContainer>
												<AttachmentIcon fontSize='small' />
												<Span>{card.attachments.length}</Span>
											</AttachmentContainer>
										)}

										{(card.date.dueDate || card.date.startDate) && ( //#ec9488, #eb5a46 #61bd4f
											<DateContainer
												backColor={
													card.date.completed
														? '#61bd4f'
														: moment(card.date.dueDate).toDate().getTime() <
														  new Date().getTime()
														? '#ec9488'
														: 'transparent'
												}
												hoverBg={
													card.date.completed
														? '#81dd6f'
														: moment(card.date.dueDate).toDate().getTime() <
														  new Date().getTime()
														? '#eb5a46'
														: 'lightgray'
												}
												color={
													card.date.completed ||
													moment(card.date.dueDate).toDate().getTime() < new Date().getTime()
														? 'white'
														: 'darkgray'
												}
											>
												<WatchIcon
													style={{
														color:
															card.date.completed ||
															moment(card.date.dueDate).toDate().getTime() <
																new Date().getTime()
																? 'white'
																: 'darkgray',
													}}
													fontSize='0.5rem'
												/>
												<Span
													color={
														card.date.completed ||
														moment(card.date.dueDate).toDate().getTime() <
															new Date().getTime()
															? 'white'
															: 'darkgray'
													}
												>{`${card.date.startDate ? formatDate(card.date.startDate) : ''}${
													card.date.startDate ? (card.date.dueDate ? ' - ' : '') : ''
												}${card.date.dueDate ? formatDate(card.date.dueDate) : ''}${
													card.date.dueTime ? ' at ' + card.date.dueTime : ''
												}`}</Span>
											</DateContainer>
										)}
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
								{card.members && (
									<MembersContainer>
										<MembersWrapper>
											{card.members &&
												card.members.map((member, i) => {
													return (
														<Avatar
															key={i}
															sx={{
																width: 28,
																height: 28,
																bgcolor: member.color,
																fontSize: '0.875rem',
																fontWeight: '800',
															}}
														>
															{member.name[0].toUpperCase()}
														</Avatar>
													);
												})}
										</MembersWrapper>
									</MembersContainer>
								)}
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

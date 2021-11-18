import React from 'react';
import FollowIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import WatchIcon from '@mui/icons-material/AccessTimeOutlined';
import DescriptiondIcon from '@mui/icons-material/DescriptionOutlined';
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import CheckIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import {
	CardTitle,
	CommentContainer,
	Container,
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
	return (
		<>
			<Draggable draggableId={props.info._id} index={props.index}>
				{(provided, snapshot) => {
					return(
					<Container
					{...provided.dragHandleProps}
						{...provided.draggableProps}
						ref={provided.innerRef}
						isDragging={snapshot.isDragging}
					>
						{/* <LabelContainer>
							<Label />
						</LabelContainer> */}
						<CardTitle>{props.info.title}</CardTitle>
						{/* <FooterContainer>
							<IconGroupContainer>
								<IconGroupWrapper>
									<IconWrapper>
										<FollowIcon fontSize='0.5rem' />
									</IconWrapper>
									<DateContainer>
										<WatchIcon fontSize='0.5rem' />
										<Span>Nov 10</Span>
									</DateContainer>
									<DescriptiondIcon fontSize='0.5rem' />
									<CommentContainer>
										<CommentIcon fontSize='0.5rem' />
										<Span>1</Span>
									</CommentContainer>
									<CheckContainer>
										<CheckIcon fontSize='0.5rem' />
										<Span>0/1</Span>
									</CheckContainer>
								</IconGroupWrapper>
							</IconGroupContainer>
							<MembersContainer>
								<MembersWrapper>
									<MemberAvatar>u</MemberAvatar>
								</MembersWrapper>
							</MembersContainer>
						</FooterContainer> */}
					</Container>

					);
				}}
			</Draggable>
		</>
	);
};

export default Card;

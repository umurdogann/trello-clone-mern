import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BottomButtonGroup from '../../../Pages/BoardPage/BoardComponents/BottomButtonGroup/BottomButtonGroup.js';
import {
	Container,
	LeftContainer,
	RightContainer,
	Title,
	CommentWrapper,
	ButtonContainer,
	CommentArea,
	LinkContainer,
	Link,
} from './styled';
import { commentDelete, commentUpdate } from '../../../../Services/cardService.js';
import { Avatar } from '@mui/material';

const Comment = (props) => {
	const [edit, setEdit] = useState(true);
	const [comment, setComment] = useState(props.text);
	const user = useSelector((state) => state.user.userInfo);
	const card = useSelector((state) => state.card);
	const dispatch = useDispatch();
	const handleSaveClick = async () => {
		setEdit(true);
		await commentUpdate(card.cardId, card.listId, card.boardId, comment, props._id, dispatch);
	};

	const handleDeleteClick = async () => {
		await commentDelete(card.cardId, card.listId, card.boardId, props._id, dispatch);
	};
	return (
		<>
			<Container>
				<LeftContainer>
					<Avatar
						sx={{ width: 28, height: 28, bgcolor: props.color, fontSize: '0.875rem', fontWeight: '800' }}
					>
						{props.userName[0].toUpperCase()}
					</Avatar>
				</LeftContainer>
				<RightContainer>
					<Title>{props.userName}</Title>
					<CommentWrapper>
						<CommentArea value={comment} onChange={(e) => setComment(e.target.value)} readOnly={edit} />
						<ButtonContainer show={!edit}>
							<BottomButtonGroup
								title='Save'
								clickCallback={handleSaveClick}
								closeCallback={() => {
									setEdit(true);
								}}
							/>
						</ButtonContainer>
						<LinkContainer show={edit && user.name === props.userName}>
							<Link onClick={() => setEdit(false)}>Edit</Link>
							<Link onClick={handleDeleteClick}>Delete</Link>
						</LinkContainer>
					</CommentWrapper>
				</RightContainer>
			</Container>
		</>
	);
};

export default Comment;

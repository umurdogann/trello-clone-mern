import React, { useEffect, useRef, useState } from 'react';
import {
	Container,
	LeftContainer,
	Avatar,
	RightContainer,
	Title,
	CommentWrapper,
	SaveButton,
	CommentArea,
	TitleWrapper,
} from './styled';
import MessageIcon from '@mui/icons-material/MessageOutlined';
import Comment from '../Comment/Comment';
import ActivityLog from '../ActivityLog/ActivityLog';
import Button from '../ReUsableComponents/Button';
import { useDispatch, useSelector } from 'react-redux';
import { comment } from '../../../../Services/cardService';

const Activity = () => {
	const dispatch = useDispatch();
	const ref = useRef();
	const card = useSelector((state) => state.card);
	const user = useSelector((state) => state.user);
	const [focusComment, setFocusComment] = useState(false);
	const [newComment, setNewComment] = useState('');
	const [details, setDetails] = useState(false);

	const handleSaveClick = async () => {
		await comment(card.cardId, card.listId, card.boardId, newComment, user.name, dispatch);
		setNewComment('');
	};

	const handleClickOutside = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setFocusComment(false);
		} else {
			setFocusComment(true);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	});
	return (
		<>
			<Container>
				<LeftContainer>
					<MessageIcon fontSize='small' />
					<Avatar>U</Avatar>
				</LeftContainer>
				<RightContainer ref={ref}>
					<TitleWrapper>
						<Title>Activity</Title>
						<Button
							clickCallback={() => setDetails((prev) => !prev)}
							title={details ? 'Hide details' : 'Show details'}
						/>
					</TitleWrapper>
					<CommentWrapper>
						<CommentArea
							value={newComment}
							onChange={(e) => setNewComment(e.target.value)}
							focus={focusComment}
							placeholder='Write a comment...'
						/>
						<SaveButton disabled={!newComment} onClick={handleSaveClick} show={focusComment}>
							Save
						</SaveButton>
					</CommentWrapper>
				</RightContainer>
			</Container>
			{card.activities.map((activity) => {
				if (activity.isComment) {
					return <Comment key={activity._id} {...activity} />;
				}
				return undefined;
			})}

			{details && <ActivityLog />}
		</>
	);
};

export default Activity;

import React, { useState } from 'react';
import {
	Container,
	LeftContainer,
	Avatar,
	RightContainer,
	Title,
	CommentWrapper,
	SaveButton,
	CommentArea,
} from './styled';
import MessageIcon from '@mui/icons-material/MessageOutlined';

const Activity = () => {
	const [focusComment, setFocusComment] = useState(false);
	const [comment, setComment] = useState("");
	return (
		<>
		<Container>
			<LeftContainer>
				<MessageIcon fontSize='small' />
				<Avatar>U</Avatar>
			</LeftContainer>
			<RightContainer>
				<Title>Activity</Title>
				<CommentWrapper>
					<CommentArea
						onFocus={() => {
							setTimeout(() => {
								setFocusComment(true);
							}, 130);
						}}
						value={comment}
						onChange={(e)=>setComment(e.target.value)}
						onBlur={() => setFocusComment(false)}
						placeholder='Write a comment...'
					/>
					<SaveButton disabled={!comment} show={focusComment}>Save</SaveButton>					
				</CommentWrapper>
			</RightContainer>			
		</Container>
		</>
	);
};

export default Activity;

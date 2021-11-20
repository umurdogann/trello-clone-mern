import React, { useState } from 'react';
import BottomButtonGroup from '../../../Pages/BoardPage/BoardComponents/BottomButtonGroup/BottomButtonGroup.js';
import {
	Container,
	LeftContainer,
	Avatar,
	RightContainer,
	Title,
	CommentWrapper,
	ButtonContainer,
	CommentArea,
	LinkContainer,
	Link,
} from './styled';

const Comment = () => {
	const [edit, setEdit] = useState(true);
	const [comment, setComment] = useState('Hey, i think it is a good job!');

	return (
		<>
			<Container>
				<LeftContainer>
					<Avatar>U</Avatar>
				</LeftContainer>
				<RightContainer>
					<Title>Umur</Title>
					<CommentWrapper>
						<CommentArea value={comment} onChange={(e) => setComment(e.target.value)} readOnly={edit} />
						<ButtonContainer show={!edit}>
							<BottomButtonGroup
								title='Save'
								closeCallback={() => {
									setEdit(true);
								}}
							/>
						</ButtonContainer>
						<LinkContainer show={edit}>
							<Link onClick={() => setEdit(false)}>Edit</Link>
							<Link>Delete</Link>
						</LinkContainer>
					</CommentWrapper>
				</RightContainer>
			</Container>
		</>
	);
};

export default Comment;

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
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

const Comment = (props) => {
	const [edit, setEdit] = useState(true);
	const [comment, setComment] = useState(props.text);
	const user = useSelector(state=>state.user.userInfo);
	
	const handleSaveClick=()=>{

	}

	return (
		<>
		<Container>
					<LeftContainer>
						<Avatar>{props.userName[0]}</Avatar>
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
							<LinkContainer show={edit&&(user.name === props.userName)}>
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

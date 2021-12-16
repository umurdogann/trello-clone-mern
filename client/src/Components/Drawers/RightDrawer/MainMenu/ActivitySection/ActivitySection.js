import React from 'react';
import ActivityIcon from '@mui/icons-material/MessageOutlined';
import {
	ActionContainer,
	Avatar,
	ActionWrapper,
	CommentTitle,
	Text,
	Date,
	CommentArea,
	Container,
	HeadWrapper,
	HeadTitle,
	Wrapper,
} from './styled';
import moment from 'moment';



const ActivitySection = () => {

	const formatDate = (date) => {
		if (moment(date).toDate().getFullYear() < new Date().getFullYear()) return moment(date).format('MMM DD, yyyy');
		else return moment(date).format('MMM DD');
	};
	
	const Comment = (props) => {
		return (
			<ActionContainer>
				<Avatar>u</Avatar>
				<ActionWrapper>
					<CommentTitle>
						<Text>
							<b style={{ fontSize: '0.875rem' }}>Umur</b> on asd
						</Text>
						<Date>5 minutes ago</Date>
					</CommentTitle>
					<CommentArea>This is a sample comment</CommentArea>
				</ActionWrapper>
			</ActionContainer>
		);
	};
	
	const Action = (props) => {
		return (
			<ActionContainer>
				<Avatar>u</Avatar>
				<ActionWrapper>
					<Text>
						<b style={{ fontSize: '0.875rem' }}>Umur</b> joined s
					</Text>
					<Date>yesterday at 5:23 AM</Date>
				</ActionWrapper>
			</ActionContainer>
		);
	};

	return (
		<Container>
			<HeadWrapper>
				<ActivityIcon fontSize='small' />
				<HeadTitle>Activity</HeadTitle>
			</HeadWrapper>
			<Wrapper>
				<Comment />
				<Action />
			</Wrapper>
		</Container>
	);
};

export default ActivitySection;

import React, { useEffect } from 'react';
import ActivityIcon from '@mui/icons-material/MessageOutlined';
import { useDispatch, useSelector } from 'react-redux';
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
	LoadingBox,
	HeadTitle,
	Wrapper,
} from './styled';
import moment from 'moment';
import { activityUpdate } from '../../../../../Services/boardService';
import  CardLoadingSvg  from '../../../../../Images/cardLoading.svg';

const ActivitySection = () => {
	const board = useSelector((state) => state.board);
	const dispatch = useDispatch();
	useEffect(() => {
		activityUpdate(board.id, dispatch);
	}, [board.id, dispatch]);

	const Comment = (props) => {
		return (
			<ActionContainer>
				<Avatar>{props.name[0]}</Avatar>
				<ActionWrapper>
					<CommentTitle>
						<Text>
							<b style={{ fontSize: '0.875rem' }}>{props.name}</b> on {props.cardTitle}
						</Text>
						<Date>{moment(props.date).fromNow()}</Date>
					</CommentTitle>
					<CommentArea>{props.action}</CommentArea>
				</ActionWrapper>
			</ActionContainer>
		);
	};

	const Action = (props) => {
		return (
			<ActionContainer>
				<Avatar>{props.name[0].toLowerCase()}</Avatar>
				<ActionWrapper>
					<Text>
						<b style={{ fontSize: '0.875rem' }}>{props.name}</b> {props.action}
					</Text>
					<Date>
						{moment(props.date).calendar().indexOf('Today') === -1
							? moment(props.date).calendar()
							: moment(props.date).fromNow()}
					</Date>
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
				{board.activityLoading ? (
					<LoadingBox image={CardLoadingSvg} />
				) : (
					board.activity.map((act) => {
						return act.actionType === 'action' ? (
							<Action key={act._id} {...act} />
						) : (
							<Comment key={act._id} {...act} />
						);
					})
				)}
			</Wrapper>
		</Container>
	);
};

export default ActivitySection;

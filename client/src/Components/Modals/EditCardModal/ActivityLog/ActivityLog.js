import { Avatar } from '@mui/material';
import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import { Container, LeftContainer, RightContainer, LogWrapper, Title, Date } from './styled';

const ActivityLog = () => {
	const card = useSelector((state) => state.card);
	return (
		<>
			{card.activities.map((activity, index) => {
				if (!activity.isComment)
					return (
						<Container key={index}>
							<LeftContainer>
								<Avatar
									sx={{
										width: 28,
										height: 28,
										bgcolor: activity.color,
										fontSize: '0.875rem',
										fontWeight: '800',
									}}
								>
									{activity.userName[0].toUpperCase()}
								</Avatar>
							</LeftContainer>
							<RightContainer>
								<LogWrapper>
									<Title>{activity.userName}</Title> {activity.text}
								</LogWrapper>
								<Date>{moment(activity.date).format('MMMM Do YYYY, h:mm:ss a')}</Date>
							</RightContainer>
						</Container>
					);
				return undefined;
			})}
		</>
	);
};

export default ActivityLog;

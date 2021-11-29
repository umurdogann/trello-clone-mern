import React from 'react';
import { useSelector } from 'react-redux';
import { Container, LeftContainer, Avatar, RightContainer, LogWrapper, Title, Date } from './styled';

const ActivityLog = () => {
	const card = useSelector((state) => state.card);
	return (
		<>
			{card.activities.map((activity,index) => {
				if (!activity.isComment)
					return (
						<Container key={index}>
							<LeftContainer>
								<Avatar>{activity.userName[0]}</Avatar>
							</LeftContainer>
							<RightContainer>
								<LogWrapper>
									<Title>{activity.userName}</Title> {activity.text}
								</LogWrapper>
								<Date>{activity.date}</Date>
							</RightContainer>
						</Container>
					);
				return undefined;
			})}
		</>
	);
};

export default ActivityLog;

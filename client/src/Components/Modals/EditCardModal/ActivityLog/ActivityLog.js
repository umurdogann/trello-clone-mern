import React from 'react';
import { Container, LeftContainer, Avatar, RightContainer, LogWrapper, Title, Date } from './styled';

const ActivityLog = () => {
	return (
		<>
			<Container>
				<LeftContainer>
					<Avatar>U</Avatar>
				</LeftContainer>
				<RightContainer>
					<LogWrapper>
						<Title>Umur</Title> deleted the cuma_umur_dogan_cv_tuHeyrkce.pdf attachment from this card
					</LogWrapper>
					<Date>Nov 19 at 5:03 AM</Date>
				</RightContainer>
			</Container>
		</>
	);
};

export default ActivityLog;

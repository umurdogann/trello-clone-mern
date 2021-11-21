import React from 'react';
import { Container, Title, SearchArea, ButtonContainer, BlueButton } from '../Labels/styled';
const ChecklistPopover = () => {
	return (
		<Container>
			<Title>Title</Title>
			<SearchArea placeholder='Title...' />
			<ButtonContainer>
				<BlueButton style={{width:"4rem"}}>Add</BlueButton>
			</ButtonContainer>
		</Container>
	);
};

export default ChecklistPopover;

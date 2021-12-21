import React from 'react';
import { ButtonWrapper, IconWrapper, TextWrapper, Title,DescriptionText } from './styled';
const MenuButton = (props) => {
	return (
		<ButtonWrapper onClick={props.clickCallback}>
			<IconWrapper>{props.icon}</IconWrapper>
			<TextWrapper>
				<Title>{props.title}</Title>
				<DescriptionText>{props.description}</DescriptionText>
			</TextWrapper>
		</ButtonWrapper>
	);
};

export default MenuButton;

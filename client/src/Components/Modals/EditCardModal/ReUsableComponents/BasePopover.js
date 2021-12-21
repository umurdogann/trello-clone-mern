import React from 'react';
import Popover from '@mui/material/Popover';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Container = styled.div`	
	/* width: ${props=>props.changeWidth}; */
	min-width: 16.3rem;
	height: fit-content;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding: 0.8rem;
	position: relative;
`;

const TitleWrapper = styled.div`
	width: 100%;
	text-align: center;
`;

const Title = styled.h3`
	font-size: 0.875rem;
	color: #5e6c84;
`;

const Hr = styled.hr`
	border: none;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.div`
	border: none;
	background-color: transparent;
	position: absolute;
	right: 0.5rem;
	top: 0.45rem;
	color: #5e6c84;
	cursor: pointer;
	&:hover {
		color: black;
	}
`;

const BackButton = styled.div`
	border: none;
	background-color: transparent;
	color: #5e6c84;
	cursor: pointer;
	position: absolute;
	top: 0.6rem;
	left: 0.9rem;
	font-size: 0.8rem;
	&:hover {
		color: black;
	}
`;

const ContentWrapper = styled.div`
	width: 100%;
`;

export default function BasePopover(props) {
	const { closeCallback, anchorElement, contents, title, backArrow, backClick } = props;

	return (
		<Popover
			open={Boolean(anchorElement)}
			anchorEl={anchorElement}
			onClose={closeCallback}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left',
			}}
		>
			<Container changeWidth={props.width?props.width:'20vw'}>
				<CloseButton onClick={closeCallback}>
					<CloseIcon fontSize='1.5rem' />
				</CloseButton>
				<TitleWrapper>
					<Title>{title}</Title>
					<Hr />
				</TitleWrapper>
				<ContentWrapper>{contents}</ContentWrapper>
				{backArrow && (
					<BackButton>
						<ArrowBackIosIcon onClick={()=>backClick()} fontSize='inherit' />
					</BackButton>
				)}
			</Container>
		</Popover>
	);
}

import styled from 'styled-components';
import { CommonButton } from './CommonStyles';
import { sm, xs } from '../../../BreakPoints';

export const Container = styled.div`
	outline: none;
	box-sizing: border-box;
	background-color: #f4f5f7;
	border-radius: 2px;
	width: 48rem;
	height: fit-content;
	margin: 3rem auto 5rem auto;
	padding: 0.5rem 0rem 1rem 0.25rem;
	${sm({
		width: '90%',
	})}
	${xs({
		width: '98%',
	})}
`;

export const CoverContainer = styled.div``;

export const TitleContainer = styled.div`
	width: 100%;
	margin-bottom: 2rem;
`;

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	${xs({
		flexDirection: 'column',
		paddingRight: '1rem',
		gap: '1rem',
	})}
`;

export const MainContainer = styled.div`
	flex: 3;
	min-height: 50vh;
	width: 100%;
	overflow-x: hidden;
	gap: 1.5rem;
	display: flex;
	flex-direction: column;
`;

export const FeaturesContainer = styled.div`
	width: 100%;
`;

export const DescriptionContainer = styled.div`
	width: 100%;
`;

export const AttachmentContainer = styled.div`
	width: 100%;
`;

export const ChecklistContainer = styled.div`
	width: 100%;
`;

export const ActivityContainer = styled.div`
	width: 100%;
`;

export const RightContainer = styled.div`
	display: flex;
	gap: 1.5rem;
	flex-direction: column;
	flex: 1;
`;

export const AddToCardContainer = styled.div``;

export const ActionsContainer = styled.div``;

export const LoadingScreen = styled.div`
background-image: url(${props=>props.image});
background-position:center;
background-repeat: no-repeat;
width:100%;
height:100%;
`;

import styled from 'styled-components';
import { sm, xs } from '../../../BreakPoints';

export const Container = styled.div`
	outline: none;
	box-sizing: border-box;
	background-color: #f4f5f7;
	border-radius: 3px;
	width: 48rem;
	min-height: 97vh;
	height: fit-content;
	margin: 3rem auto 5rem auto;
	padding: 0.5rem 0rem 1rem 0.25rem;
	position: relative;
	${sm({
		width: '90%',
	})}
	${xs({
		width: '98%',
	})}
`;

export const CoverContainer = styled.div`
	display: ${(props) => (props.color ? 'block' : 'none')};
	min-height: 7.25rem;
	background-color: ${(props) => props.color};
	margin: -0.5rem 0rem 0rem -0.25rem;
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
	position: relative;
`;

export const CoverButtonWrapper = styled.div`
	position: absolute;
	bottom: 0.5rem;
	right: 0.5rem;
	width: 5.5rem;
`;

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
	padding-right: 0.5rem;
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
	background-image: url(${(props) => props.image});
	background-position: center;
	background-repeat: no-repeat;
	width: 100%;
	height: 100%;
`;

export const CloseIconWrapper = styled.div`
	position: absolute;
	top: 0.4rem;
	right: 0.4rem;
	padding: 0.3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	cursor: pointer;
	&:hover {
		background-color: rgba(0, 0, 0, 0.065);
	}
	&:active {
		background-color: rgba(0, 0, 0, 0.15);
	}
`;

import styled from 'styled-components';
import { xs } from '../../../../../BreakPoints';

export const TopBar = styled.div`
	height: 52px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: space-between;
	padding: 0rem 1rem;
	justify-content: center;
	flex-wrap: wrap;
	gap: 0.3rem;

	${xs({
		gap: '0.1rem',
	})}
`;

export const LeftWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex: 3;
	width: 75%;
	align-items: center;
	justify-content: flex-start;
	height: 100%;
	gap: 1rem;
`;
export const RightWrapper = styled.div`
	display: flex;
	flex: 1;
	height: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
`;

export const InviteButton = styled.button`
	display: flex;
	border: none;
	height: 2rem;
	color: white;
	padding: 0rem 1rem;
	align-items: center;
	gap: 0.5rem;
	border-radius: 3px;
	background-color: #0079bf;
	cursor: pointer;
	transition: 250ms ease;
	&:hover {
		background-color: #00599f;
	}
`;

export const TextSpan = styled.span`
	font-size: 0.85rem;
	font-weight: 600;
	${xs({
		display: 'none',
	})}
`;

export const BoardNameInput = styled.input`
	height: 1.75rem;
	background-color: rgba(255, 255, 255, 0.25);
	border: none;
	border-radius: 1px;
	font-size: 1.1rem;
	text-align: center;
	min-width: 6.5rem;
	max-width: 10rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	width: ${(props) => props.value.length * 0.75 + 'rem'};
	font-weight: 600;
	color: white;
	outline: 2px solid rgba(255, 255, 255, 0.25);
	transition: 250ms ease;
	cursor: pointer;
	&:focus {
		background-color: white;
		outline: 2px solid #0079bf;
		color: black;
		cursor: text;
	}
	&:focus:hover {
		background-color: white;
		outline: 2px solid #0079bf;
		color: black;
		cursor: text;
	}
	&:hover {
		background-color: rgba(255, 255, 255, 0.5);
		outline: 2px solid rgba(255, 255, 255, 0.5);
	}
	&::placeholder {
		color: #d0d0d0;
	}

	${xs({
		maxWidth: '8rem',
	})}
`;

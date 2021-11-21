import styled from 'styled-components';
import { CommonButton } from '../CommonStyles';
import { sm, xs } from '../../../../BreakPoints';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: 1rem;
	width: 100%;
	gap: 1rem;
`;

export const RightContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	gap: 0.75rem;
`;

export const Title = styled.h3`
	margin: 0;
	padding: 0.2rem 0rem 0rem 0rem;
	display: inline;
	color: black;
	font-size: 1rem;
	font-weight: 800;
`;

export const DescriptionText = styled.p`
	box-sizing: border-box;
	width: 89%;
	padding: 0;
	margin: 0;
	word-wrap: break-word;
	cursor: pointer;
	font-size: 0.875rem;	
`;

export const DescriptionInput = styled.textarea`
	box-sizing: border-box;
	width: 96.7%;
	min-height: 2.5rem;
	background-color: rgba(0, 0, 0, 0.03);
	border: none;
	border-radius: 2px;
	box-shadow: none;
	font-size: 0.875rem;
	outline: 2px solid transparent;
	padding: 0.5rem 0.75rem;
	resize: none;
	cursor: pointer;
	transition: 150 ease-in;
	&:hover {
		background-color: rgba(0, 0, 0, 0.06);
	}
	&::placeholder {
		color: black;
	}
	&:focus {
		&::placeholder {
			color: gray;
		}
		background-color: #fff;
		outline: 2px solid #0079bf;
		min-height: 5.5rem;
	}
`;

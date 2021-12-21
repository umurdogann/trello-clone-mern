import styled from 'styled-components';
import { xs } from '../../../../../BreakPoints';

export const Container = styled.div`
	box-sizing: content-box;
	border: 1px solid white;
	height: fit-content;
	max-height: 98%;
	min-width: 15rem;
	width: 15rem;
	max-width: 16rem;
	margin: 0rem 0.2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 0.3rem;
	border-radius: 3px;
	background-color: #ebecf0;
	padding: 0.3rem ;	
`;

export const Header = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 0.3rem;
`;

export const TitlePlaceholder = styled.div`
	display: ${(props) => (props.show ? 'none' : 'block')};
	width: 100%;
	padding-left: 0.3rem;
	border: none;
	border-radius: 1px;
	background-color: transparent;
	font-size: 0.85rem;
	font-weight: 600;
	color: #000;
	outline: none;
	cursor: pointer;
`;

export const TitleInput = styled.input`
	display: ${(props) => (props.show ? 'block' : 'none')};
	width: 100%;
	padding-left: 0.3rem;
	padding-bottom: 0.2rem;
	border: none;
	border-radius: 1px;
	background-color: transparent;
	font-size: 0.85rem;
	font-weight: 600;
	color: #000;
	outline: none;
	cursor: pointer;
	&:focus {
		background-color: white;
		outline: 2px solid #0079bf;
		cursor: text;
	}
`;

export const CardContainer = styled.div`
	height: 100%;
	width: 100%;		
	box-sizing: content-box;
`;

export const CardWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: flex-start;
	box-sizing: content-box;
	overflow-x: hidden;
	overflow-y: auto;
	height:fit-content;
	max-height: ${props=> props.dock? "73.5vh" :"70.6vh"};
	justify-content: flex-start;
	padding: 0.1rem 0.1rem 0.1rem 0rem;		
	width: 100%;
	${xs({
		maxHeight: props=> props.dock? "74.6vh" :"70.6vh",
	})}
	::-webkit-scrollbar {
		-webkit-appearance: none;
		height: 0.75rem;
		width: 0.5rem;	
	}
	::-webkit-scrollbar-track {
		background: rgba(255, 255, 255, 0.4);		
		margin-left:5px;
		border-radius: 5px;
	}
	::-webkit-scrollbar-thumb {
		background: rgba(0, 0, 0, 0.2);
		border-radius: 5px;
	}
	::-webkit-scrollbar-thumb:hover {
		background: rgba(0, 0, 0, 0.2);
	}
`;

export const FooterButton = styled.button`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	background-color: transparent;
	border: none;
	border-radius: 3px;
	align-self: flex-end;
	justify-self: flex-end;
	cursor: pointer;
	gap: 0.3rem;
	color: #636363;
	transition: 150ms ease-in;
	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
`;

export const Span = styled.span`
	font-size: 0.85rem;
`;

export const AddTitleCardContainer = styled.div`
	box-sizing: border-box;
	margin-top: 0.2rem;
	padding: 0rem 0.2rem;			
	min-width: 14.7rem;
	width:100%;
	display: flex;
	flex-flow: column wrap;
	gap: 0.5rem;
`;

export const TitleNewCardInput = styled.textarea`
	border: 2px solid transparent;
	border-radius:3px;
	resize: none;
	font-size: 0.75rem;
	color: #000;
	padding: 0.4rem 0.5rem;
	min-height: 4rem;
	max-height: 7rem;	
	height: ${(props) => props.height};
	transition: 500ms ease-in;
	outline: none;
	&:focus{
		border: 2px solid #0079bf;
	}
	&::placeholder {
		font-weight: 600;
		color: rgba(0,0,0,0.5);
	}
`;

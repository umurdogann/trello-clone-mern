import styled from 'styled-components';

export const Container = styled.div`
	box-sizing: border-box;
	border: 1px solid white;
	height: fit-content;
	max-height: 98%;
	min-width: 16rem;
	max-width: 16rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 0.3rem;
	border-radius: 3px;
	background-color: #ebecf0;
	padding: 0.3rem;
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
`;

export const CardWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	overflow-x: hidden;
	overflow-y: auto;
	max-height: 5rem;
	justify-content: flex-start;
	padding: 0.1rem 0rem;
	gap: 0.3rem;
	width: 100%;
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
	width: 100%;
	display: flex;
	flex-flow: column wrap;
	gap: 0.5rem;
`;

export const TitleNewCardInput = styled.textarea`
	border: none;
	resize: none;
	font-size: 0.75rem;
	color: #000;
	padding: 0.4rem 0.5rem;
	min-height: 4rem;
	max-height: 7rem;
	height: ${(props) => props.height};
	transition: 500ms ease-in;
	box-shadow: 0 1px 0 #091e4240;
	outline: none;
	&::placeholder {
		font-weight: 600;
		color: #a3a3a3;
	}
`;

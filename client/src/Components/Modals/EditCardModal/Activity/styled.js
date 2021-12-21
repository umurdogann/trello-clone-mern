import styled from 'styled-components';

export const Container = styled.div`
	margin-left: 1rem;
	display: flex;
	flex-direction: row;
	gap: 1rem;
`;

export const LeftContainer = styled.div`
	padding-top: 0.3rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.4rem;
`;

export const RightContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
`;

export const TitleWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const Title = styled.div`
	margin: 0;
	padding: 0.2rem 0rem 0rem 0rem;
	display: inline;
	color: black;
	font-size: 1rem;
	font-weight: 800;
`;

export const CommentWrapper = styled.div`
	width: 100%;
	height: fit-content;
	position: relative;
`;

export const CommentArea = styled.textarea`
	box-sizing: border-box;
	width: 100%;
	margin: 0;
	resize: none;
	outline: none;
	border-radius: 2px;
	height: ${(props) => (props.focus ? '5.25rem' : '2.1rem')};
	font-size: 0.875rem;
	padding: 0.5rem 0.75rem;
	border: 1px solid lightgray;
	transition: 170ms ease-in;
	cursor: pointer;
	&:hover {
		border-bottom: 1px solid #afafaf;
	}
	&:focus {
		box-shadow: 0 4px 8px -2px #091e4240, 0 0 0 1px #091e4214;
	}
`;
export const SaveButton = styled.button`
	display: ${(props) => (props.show ? 'block' : 'none')};
	position: absolute;
	border: none;
	background-color: #0079bf;
	color: white;
	border-radius: 3px;
	padding: 0.375rem 0.75rem;
	cursor: pointer;
	z-index: 123;
	bottom: 1rem;
	left: 0.75rem;
	&:hover {
		background-color: #026aa7;
	}
	&:disabled {
		background-color: gray;
		cursor: not-allowed;
	}
`;

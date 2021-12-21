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
	gap: 1rem;
`;

export const RightContainer = styled.div`
	display: flex;
	flex-direction: column;

	gap: 0.3rem;
	width: 100%;
`;

export const Title = styled.div`
	margin: 0;
	padding: 0.45rem 0rem 0rem 0rem;
	display: inline;
	color: black;
	font-size: 0.85rem;
	font-weight: 800;
`;

export const CommentWrapper = styled.div`
	width: 100%;
	height: fit-content;
	position: relative;
`;

export const CommentArea = styled.textarea`
	margin: 0;
	box-sizing: border-box;
	width: 100%;
	resize: none;
	outline: none;
	border-radius: 2px;
	box-shadow: 0 4px 8px -2px #091e4240, 0 0 0 1px #091e4214;
	height: 5.25rem;
	font-size: 0.875rem;
	padding: 0.5rem 0.75rem;
	border: 1px solid lightgray;
	transition: 170ms ease-in;
	cursor: pointer;
	&:read-only {
		margin: 0;
		box-sizing: border-box;
		width: 100%;
		resize: none;
		outline: none;
		border-radius: 2px;
		height: 2.2rem;
		font-size: 0.875rem;
		padding: 0.5rem 0.75rem;
		border: 1px solid lightgray;
		transition: 170ms ease-in;
		box-shadow: none;
	}
`;
export const ButtonContainer = styled.div`
	padding-left: 0.1rem;
	display: ${(props) => (props.show ? 'block' : 'none')};
`;

export const LinkContainer = styled.div`
	display: ${(props) => (props.show ? 'flex' : 'none')};
	flex-direction: row;
	gap: 0.5rem;
	padding-left: 0.2rem;
`;

export const Link = styled.div`
	font-size: 0.75rem;
	color: #5e6c84;
	text-decoration: underline;
	cursor: pointer;
	&:hover {
		color: #172b4d;
	}
`;

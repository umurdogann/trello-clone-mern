import styled from 'styled-components';

export const Container = styled.div`
	padding-left: 1rem;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	width: 100%;
	height: fit-content;
	margin-bottom: 1rem;
`;

export const Row = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	align-items: center;
	gap: 1rem;
	cursor: ${(props) => (props.showHover ? 'pointer' : 'default')};
	transition: 150ms ease-in;
	&:hover {
		background-color: ${(props) => (props.showHover ? 'rgba(0,0,0,0.02)' : 'transparent')};
	}
`;

export const LeftColumn = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 2rem;
`;

export const RightColumn = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	align-items: center;
	gap: 0.5rem;
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

export const RowRightButtonsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	gap: 0.5rem;
`;

export const Percentage = styled.div`
	color: #5e6c84;
	font-size: 0.75rem;
	width: 1.5rem;
	text-align: center;
`;

export const CheckText = styled.div`
	text-decoration: ${(props) => (props.isChecked ? 'line-through' : 'none')};
	width: 100%;
	padding: 0.3rem 0rem;
	color: ${(props) => (props.isChecked ? '#5e6c84' : '#172b4d')};
	font-size: 0.875rem;
`;

export const IconWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 0.5rem;
	width: 1.2rem;
	height: 1.2rem;
	border-radius: 3px;
	color: #9f9f9f;
	cursor: pointer;
	&:hover {
		color: lightgray;
		background-color: rgba(0, 0, 0, 0.3);
	}
`;

export const TextAreaContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	gap: 0.5rem;
`;

export const TextArea = styled.textarea`
	box-sizing: border-box;
	width: 99.8%;
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
	}
`;

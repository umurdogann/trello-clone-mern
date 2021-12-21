import styled from 'styled-components';

export const Container = styled.div`	
	background-color: #fff;
	box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
	box-sizing: border-box;
	width: 14rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	padding: 0.3rem 0.3rem;
	width: 98%;
	margin: 0.2rem 0.2rem 0.2rem 0.2rem;
	border-radius: 3px;
	color: black;
	gap: 0.3rem;
	background-color: ${(props) => (props.color ? props.color : '#fff')};
	padding-top: ${(props) => (props.padding ? '2.3rem' : '0.3rem')};
	&:hover {
		cursor: pointer;
		filter: grayscale(20%) brightness(97%);
	}
	position: relative;
`;

export const Cover = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
	width: 100%;
	height: 2rem;
	background-color: ${(props) => props.color};
`;

export const LabelContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 0.2rem;
`;

export const Label = styled.div`
	width: 2.5rem;
	height: 0.5rem;
	background-color: ${(props) => props.color};
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 2rem;
`;

export const CardTitle = styled.div`
	font-size: 0.85rem;
	max-width: 100%;
	word-wrap: break-word;
	white-space: pre-wrap;
`;

export const FooterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items:center;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	height: auto;	
`;

export const AttachmentContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 0.2rem;
	width: fit-content;
	justify-content: center;
	align-items: center;	
`;

export const IconGroupContainer = styled.div`	
	display: flex;
	align-items: center;
	justify-content: center;
	width: fit-content;
	height: fit-content;
`;
export const IconGroupWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-flow: row wrap;
	width: fit-content;
	align-items: center;
	justify-content: flex-start;
	color: #5e6c84;
	gap: 0.3rem;
`;

export const IconWrapper = styled.div`
	margin-right: 4px;
	display: flex;
	align-items: center;
`;

export const DateContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	padding: 0.1rem 0.3rem;
	border-radius: 3px;
	gap: 0.2rem;
	background-color: ${(props) => props.backColor};
	color: ${(props) => props.color};
	cursor: pointer;
	color: white;
	&:hover {
		background-color: ${(props) => props.hoverBg};
	}
`;

export const Span = styled.div`
	font-size: 0.75rem;
	color: ${(props) => props.color};
`;

export const CommentContainer = styled.div`
	display: flex;
	flex-flow: row-wrap;
	gap: 0.2rem;
	align-items: center;
`;

export const CheckContainer = styled.div`
	display: flex;
	flex-flow: row-wrap;
	gap: 0.2rem;
	align-items: center;
`;

export const MembersContainer = styled.div`
	display: inline-block;
	margin-left: auto;
	width: fit-content;
`;

export const MembersWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 0.2rem;
`;



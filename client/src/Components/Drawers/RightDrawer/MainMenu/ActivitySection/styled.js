import styled from 'styled-components';

// For Section
export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
	height: fit-content;
`;

export const HeadWrapper = styled.div`
	padding: 0rem 0.5rem;
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.5rem;
`;

export const HeadTitle = styled.div`
	font-size: 0.875rem;
	font-weight: 600;
`;

export const Wrapper = styled.div`
	width: 100%;
	height:fit-content;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
`;

// For Comment
export const ActionContainer = styled.div`
	padding: 0rem 0.25rem;
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
`;

export const ActionWrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
`;

export const CommentTitle = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	gap: 0.5rem;
`;

export const Text = styled.p`
	margin: 0;
	padding: 0;
	font-size: 0.875rem;
	overflow-x:hidden;
	word-break: break-all;
`;

export const Date = styled.p`
	display: block;
	margin: 0;
	padding: 0;
	font-size: 0.75rem;
	color: #5e6c84;
`;

export const CommentArea = styled.div`
	width: 100%;
	background-color: white;
	text-align: left;
	padding: 0.5rem;
	border-radius: 3px;
	border: 2px solid rgba(0, 0, 0, 0.065);
	overflow-wrap: break-word;
	word-break: break-word;
	font-size: 0.875rem;
`;

export const LoadingBox = styled.div`
	height: 3rem;
	width: 8rem;
	padding: 0.5rem 3rem;
	margin-right:auto;
	margin-left:auto;
	background-image: url(${(props) => props.image});
	background-position: center;
	background-repeat: no-repeat;
`;
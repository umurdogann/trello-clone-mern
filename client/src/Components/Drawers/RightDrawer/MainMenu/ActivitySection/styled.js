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

export const Avatar = styled.div`
	padding: 0.25rem;
	border-radius: 50%;
	background-color: green;
	font-size: 1rem;
	height: 1.5rem;
	width: 1.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
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

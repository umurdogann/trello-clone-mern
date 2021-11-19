import styled from 'styled-components';

export const Container = styled.div`
	margin: 0.5rem 0rem 0rem 2rem;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	gap: 0.2rem;
`;

export const IconWrapper = styled.div`
	display: block;
	padding-top: 2px;
	width: fit-content;
	height: fit-content;
`;

export const TitleInput = styled.input`
	border: none;
	outline: 2px solid transparent;
	background-color: transparent;
	padding-left: 0.3rem;
	border-radius: 2px;
	overflow: auto;
	width: 95%;
	font-size: 1.25rem;
	font-weight: 800;
	&:focus {
		outline: 2px solid #0079bf;
		background-color: #fff;
	}
`;

export const Description = styled.p`
	margin: 0;
	padding: 0;
	color: #5e6c84;
	font-size: 0.85rem;
	margin-left: 0.4rem;
`;

export const Link = styled.p`
	display: inline;
	font-size: inherit;
	cursor: pointer;
	text-decoration: underline;
`;

export const RightContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

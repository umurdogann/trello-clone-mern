import styled from 'styled-components';

export const Container = styled.div`
	${(props) =>
		props.isImage ? 'background-image: url(' + props.bgImage + ');' : 'background-color: ' + props.bgImage + ';'}
	background-repeat: no-repeat;
	background-position: 50%;
	zoom: 1;
	padding-top: 3rem;
	height: fit-content;
	background-size: cover;
`;

export const ListContainer = styled.div`
	box-sizing: border-box;
	height: calc(100vh - 3rem - 52px);
	display: flex;
	flex-direction: row;
	padding: 0rem 1rem;
	overflow-x: auto;
	overflow-y: hidden;
	white-space: nowrap;
	zoom: 1;
	/* width */
	::-webkit-scrollbar {
		height: 0.75rem;
		width: 1rem;
		margin-bottom: 20px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: rgba(0, 0, 0, 0.2);
        margin:10rem;
        padding-bottom:1rem;
		border-radius: 5px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background-clip: padding-box;
		background: rgba(255, 255, 255, 0.4);

		border-radius: 5px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: rgba(255, 255, 255, 0.3);
	}
`;

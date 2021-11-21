import React from 'react';
import styled from 'styled-components';

export const ProgressBar = styled.div`
	width: 100%;
	height: 0.5rem;
	background-color: rgba(0, 0, 0, 0.06);
	border-radius: 1rem;
`;

export const ProgressBarFill = styled.div`
	height: 0.5rem;
	width: ${(props) => props.value}%;
	background-color: ${(props) => (props.complete ? '#61bd4f' : '#5ba4cf')};
	border-radius: 1rem;
	transition: 400ms ease-in;
`;

const Progressbar = (props) => {
	const { value } = props;
	return (
		<ProgressBar>
			<ProgressBarFill complete={value === 100 ? true : false} value={value} />
		</ProgressBar>
	);
};

export default Progressbar;

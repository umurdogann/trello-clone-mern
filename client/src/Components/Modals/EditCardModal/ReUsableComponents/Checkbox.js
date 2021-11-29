import React from 'react';
import styled from 'styled-components';
import CheckIcon from '@mui/icons-material/Check';

export const CheckBox = styled.div`
	display: ${props=>props.hidden?'none':'flex'};
	align-items: center;
	justify-content: center;
	margin-left: 0.1rem;
	height: 1rem;
	width: 1rem;
	border-radius: 3px;
	border: ${(props) => (props.checked ? '2px solid #4b94bf' : '2px solid lightgray')};
	background-color: ${(props) => (props.checked ? '#4b94bf' : 'rgba(255,255,255,0.9)')};
	cursor: pointer;
	transition: 200ms ease-in;
	color: white;
	&:hover {
		background-color: ${(props) => (props.checked ? '#5ba4cf' : 'rgba(0,0,0,0.1)')};
	}
`;

const Checkbox = (props) => {
	const { checked, clickCallback,hidden } = props;
	return (
		<CheckBox
			checked={checked}
			onClick={() => {
				clickCallback(!checked);
			}}
			hidden={hidden}
		>
			{checked && <CheckIcon fontSize='0.1rem' />}
		</CheckBox>
	);
};

export default Checkbox;

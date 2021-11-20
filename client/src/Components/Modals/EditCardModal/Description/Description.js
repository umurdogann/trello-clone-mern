import React, { useEffect, useRef, useState } from 'react';
import { Container, RightContainer, Title, DescriptionInput, DescriptionText } from './styled';
import DescriptionIcon from '@mui/icons-material/TextSnippetOutlined';
import BottomButtonGroup from '../../../Pages/BoardPage/BoardComponents/BottomButtonGroup/BottomButtonGroup.js';
const Description = () => {
	const [inputFocus, setInputFocus] = useState(false);
	const [description, setDescription] = useState('');
	const ref = useRef();

	useEffect(() => {
		if (inputFocus) {
			ref.current.focus();
		}
	}, [inputFocus]);

	return (
		<Container>
			<DescriptionIcon fontSize='small' />
			<RightContainer>
				<Title>Description</Title>
				{description && !inputFocus ? (
					<DescriptionText onClick={() => setInputFocus(true)}>{description}</DescriptionText>
				) : (
					<DescriptionInput
						ref={ref}
						onFocus={() => setInputFocus(true)}
						onBlur={() => setInputFocus(false)}
						placeholder='Add a more detailed description...'
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				)}
				<div style={{ display: inputFocus ? 'block' : 'none' }}>
					<BottomButtonGroup title='Save' />
				</div>
			</RightContainer>
		</Container>
	);
};

export default Description;

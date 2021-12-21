import React, { useEffect, useState } from 'react';
import { Container, IconWrapper, RightContainer, TitleInput, Description, Link } from './styled';
import TitleIcon from '@mui/icons-material/ChromeReaderMode';
import { titleUpdate } from '../../../../Services/cardService';
import { useDispatch, useSelector } from 'react-redux';

const Title = () => {
	const dispatch = useDispatch();
	const card = useSelector((state) => state.card);
	const [title, setTitle] = useState('');

	useEffect(() => {
		setTitle(card.title);
	}, [card.title]);

	const handleTitleAccept = async () => {
		await titleUpdate(card.cardId, card.listId, card.boardId, title, dispatch);
	};

	return (
		<Container>
			<IconWrapper>
				<TitleIcon fontSize='small' />
			</IconWrapper>
			<RightContainer>
				<TitleInput
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					onBlur={handleTitleAccept}
				></TitleInput>
				<Description>
					in list <Link>{card.listTitle}</Link>
				</Description>
			</RightContainer>
		</Container>
	);
};

export default Title;

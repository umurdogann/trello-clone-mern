import React, { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';
import {
	AddTitleCardContainer,
	CardContainer,
	Container,
	FooterButton,
	Header,
	Span,
	TitleInput,
	TitleNewCardInput,
} from './styled';
import { ClickableIcon } from '../../CommonStyled';
import BottomButtonGroup from '../BottomButtonGroup/BottomButtonGroup';
import Card from '../Card/Card';
const List = () => {
	const [clickFooter, setClickFooter] = useState(false);
	const [newCardTitle, setNewCardTitle] = useState('');
	const handleFooterClick = () => {
		setClickFooter(false);
	};
	const handleFooterCloseClick = () => {
		setClickFooter(false);
	};

	return (
		<>
			<Container>
				<Header>
					<TitleInput value="List Title" />
					<ClickableIcon color='#656565'>
						<MoreHorizIcon fontSize='0.1rem' onClick={() => {}} />
					</ClickableIcon>
				</Header>
				<CardContainer>
					<Card />
				</CardContainer>

				{!clickFooter ? (
					<FooterButton onClick={() => setClickFooter(true)}>
						<AddIcon fontSize='small' />
						<Span>Add a card</Span>
					</FooterButton>
				) : (
					<AddTitleCardContainer>
						<TitleNewCardInput
							value={newCardTitle}
							placeholder='Enter a title for this card...'
							height={Math.floor(newCardTitle.length / 16) + 'rem'}
							onChange={(e) => setNewCardTitle(e.target.value)}
						/>
						<BottomButtonGroup
							title='Add card'
							clickCallback={handleFooterClick}
							closeCallback={handleFooterCloseClick}
						/>
					</AddTitleCardContainer>
				)}
			</Container>
		</>
	);
};

export default List;

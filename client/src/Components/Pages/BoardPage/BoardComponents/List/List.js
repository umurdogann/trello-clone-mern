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
import { useDispatch} from 'react-redux';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import DeleteIcon from '@mui/icons-material/DeleteForeverOutlined';
import { DeleteList } from '../../../../../Services/boardService';
import { createCard } from '../../../../../Services/listService';

const List = (props) => {
	const dispatch = useDispatch();
	const [clickFooter, setClickFooter] = useState(false);
	const [newCardTitle, setNewCardTitle] = useState('');
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleFooterClick = () => {
		setNewCardTitle("");
		createCard(newCardTitle,props.info._id,props.info.owner,dispatch)
	};
	const handleFooterCloseClick = () => {
		setClickFooter(false);		
		setNewCardTitle("");
	};

	const handleTitleChange = () => {
		// TODO: change title
	};

	const handleDeleteClick = () => {
		DeleteList(props.info._id,props.info.owner,dispatch);
		
	}
	return (
		<>
			<Container>
				<Header>
					<TitleInput value={props.info.title} onChange={handleTitleChange} />
					<ClickableIcon
						color='#656565'
						aria-controls='basic-menu'
						aria-haspopup='true'
						aria-expanded={open ? 'true' : undefined}
						onClick={handleClick}
					>
						<MoreHorizIcon fontSize='0.1rem' onClick={() => {}} />
					</ClickableIcon>
					<Menu
						id='basic-menu'
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							'aria-labelledby': 'basic-button',							
						}}
					>
						<MenuItem onClick={handleDeleteClick} >
							<ListItemIcon>
								<DeleteIcon fontSize='small' />
							</ListItemIcon>
							<ListItemText>Delete</ListItemText>
						</MenuItem>
					</Menu>
				</Header>
				<CardContainer>{props.info.cards.map(card=> {
					return <Card key={card._id} info={card}/>
				})}</CardContainer>

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

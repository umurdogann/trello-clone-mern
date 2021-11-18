import React, { useRef, useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';
import {
	AddTitleCardContainer,
	CardContainer,
	CardWrapper,
	Container,
	FooterButton,
	Header,
	Span,
	TitleInput,
	TitlePlaceholder,
	TitleNewCardInput,
} from './styled';
import { ClickableIcon } from '../../CommonStyled';
import BottomButtonGroup from '../BottomButtonGroup/BottomButtonGroup';
import Card from '../Card/Card';
import { useDispatch } from 'react-redux';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import DeleteIcon from '@mui/icons-material/DeleteForeverOutlined';
import { DeleteList } from '../../../../../Services/boardService';
import { createCard } from '../../../../../Services/listService';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const List = (props) => {
	const dispatch = useDispatch();
	const [clickTitle, setClickTitle] = useState(false);
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
		setNewCardTitle('');
		createCard(newCardTitle, props.info._id, props.info.owner, dispatch);
	};
	const handleFooterCloseClick = () => {
		setClickFooter(false);
		setNewCardTitle('');
	};

	const handleTitleChange = () => {
		// TODO: change title
	};

	const handleDeleteClick = () => {
		DeleteList(props.info._id, props.info.owner, dispatch);
	};

	const handleTitleClick = () => {
		setClickTitle(true);
	};
	return (
		<>
			<Draggable draggableId={props.info._id} index={props.index}>
				{(provided, snapshot) => {
					return (
						<Container  {...provided.draggableProps}
						ref={provided.innerRef}
						isDragging={snapshot.isDragging}>
							<Header {...provided.dragHandleProps} isDragging={snapshot.isDragging}>
								<TitlePlaceholder show={clickTitle} onClick={() => setClickTitle(true)}>
									{props.info.title}
								</TitlePlaceholder>
								<TitleInput
									onBlur={() => setClickTitle(false)}
									ref={(input) => input && input.focus()}
									show={clickTitle}
									value={props.info.title}
									onChange={handleTitleChange}
								/>
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
									<MenuItem onClick={handleDeleteClick}>
										<ListItemIcon>
											<DeleteIcon fontSize='small' />
										</ListItemIcon>
										<ListItemText>Delete</ListItemText>
									</MenuItem>
								</Menu>
							</Header>
							<Droppable droppableId={props.info._id} direction='vertical'>
								{(provided, snapshot) => {
									return (
										<CardContainer
											{...provided.droppableProps}
											ref={provided.innerRef}
											isDraggingOver={snapshot.isDraggingOver}
										>
											<CardWrapper>
												{props.info.cards.map((card, index) => {
													return <Card key={card._id} index={index} info={card} />;
												})}
											</CardWrapper>
											{provided.placeholder}
										</CardContainer>
									);
								}}
							</Droppable>
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
					);
				}}
			</Draggable>
		</>
	);
};

export default List;

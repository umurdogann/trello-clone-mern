import React, { useEffect, useRef, useState } from 'react';
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
import { DeleteList, listTitleUpdate } from '../../../../../Services/boardService';
import { createCard } from '../../../../../Services/listService';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const List = (props) => {
	const dispatch = useDispatch();
	const [clickTitle, setClickTitle] = useState(false);
	const [clickFooter, setClickFooter] = useState(false);
	const [newCardTitle, setNewCardTitle] = useState('');
	const [currentListTitle, setCurrentListTitle] = useState(props.info.title);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const ref = useRef();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleFooterClick = async () => {
		setNewCardTitle('');
		await createCard(newCardTitle, props.info._id, props.info.owner, dispatch);
		ref && ref.current && ref.current.scrollIntoView({ behavior: 'smooth' });
	};
	const handleFooterCloseClick = () => {
		setClickFooter(false);
		setNewCardTitle('');
	};

	const handleOnChangeTitle = (e) => {
		setCurrentListTitle(e.target.value);
	};
	const handleChangeTitle = async () => {
		if (props.info.title !== currentListTitle)
			await listTitleUpdate(props.info._id, props.info.owner, currentListTitle, dispatch);
	};

	const handleDeleteClick = () => {
		DeleteList(props.info._id, props.info.owner, dispatch);
	};

	const handleClickOutside = (e) => {
		if (ref.current)
			if (!ref.current.contains(e.target)) {
				setClickFooter(false);
				setNewCardTitle('');
			}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	});

	useEffect(() => {
		if (clickFooter) {
			ref.current.scrollIntoView();
		}
	}, [clickFooter]);

	return (
		<>
			<Draggable draggableId={props.info._id} index={props.index}>
				{(provided, snapshot) => {
					return (
						<Container
							{...provided.draggableProps}
							ref={provided.innerRef}
							isDragging={snapshot.isDragging}
						>
							<Header {...provided.dragHandleProps} isDragging={snapshot.isDragging}>
								<TitlePlaceholder show={clickTitle} onClick={() => setClickTitle(true)}>
									{currentListTitle}
								</TitlePlaceholder>
								<TitleInput
									onBlur={() => {
										setClickTitle(false);
										handleChangeTitle();
									}}
									ref={(input) => input && input.focus()}
									show={clickTitle}
									value={currentListTitle}
									onChange={handleOnChangeTitle}
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
											<CardWrapper dock={clickFooter}>
												{props.info.cards.filter(card=>props.searchString?card.title.toLowerCase().includes(props.searchString.toLowerCase()):true).map((card, index) => {
													return (
														<Card
															boardId={props.boardId}
															listId={props.info._id}
															key={card._id}
															index={index}
															info={card}
														/>
													);
												})}
												{provided.placeholder}
												{clickFooter && (
													<AddTitleCardContainer ref={ref}>
														<TitleNewCardInput
															value={newCardTitle}
															autoFocus={true}
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
											</CardWrapper>
										</CardContainer>
									);
								}}
							</Droppable>
							{!clickFooter && (
								<FooterButton onClick={() => setClickFooter(true)}>
									<AddIcon fontSize='small' />
									<Span>Add a card</Span>
								</FooterButton>
							)}
						</Container>
					);
				}}
			</Draggable>
		</>
	);
};

export default List;

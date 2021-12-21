import React, { useState } from 'react';
import {
	Container,
	Row,
	LeftColumn,
	RightColumn,
	Title,
	Percentage,
	CheckText,
	RowRightButtonsWrapper,
	IconWrapper,
	TextAreaContainer,
	TextArea,
} from './styled';
import CheckIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import BottomButtonGroup from '../../../Pages/BoardPage/BoardComponents/BottomButtonGroup/BottomButtonGroup.js';
import Checkbox from '../ReUsableComponents/Checkbox';
import Button from '../ReUsableComponents/Button';
import Progressbar from '../ReUsableComponents/Progressbar';
import { useDispatch, useSelector } from 'react-redux';
import {
	checklistDelete,
	checklistItemAdd,
	checklistItemCompletedSet,
	checklistItemDelete,
	checklistItemTextSet,
} from '../../../../Services/cardService';
import DeleteIcon from '@mui/icons-material/DeleteForeverOutlined';

const Checklist = (props) => {
	const dispatch = useDispatch();
	const card = useSelector((state) => state.card);
	const [showAddItem, setShowAddItem] = useState(false);
	const [newItem, setNewItem] = useState('');
	const [hideItems, setHideItems] = useState(false);
	const percentage = () => {
		if (props.items.length === 0) return 0;
		const completed = props.items.filter((item) => item.completed);
		return Math.round(100 - ((props.items.length - completed.length) / props.items.length) * 100);
	};

	const handleChecklistDelete = async (checklistId) => {
		await checklistDelete(card.cardId, card.listId, card.boardId, checklistId, dispatch);
	};

	const handleAddChecklistItem = async (checklistId) => {
		setShowAddItem(false);
		await checklistItemAdd(card.cardId, card.listId, card.boardId, checklistId, newItem, dispatch);
		setNewItem('');
	};

	const ChecklistItem = (props) => {
		const [checked] = useState(props.completed);
		const [showEdit, setShowEdit] = useState(false);
		const [editedText, setEditedText] = useState(props.text);

		const handleChecklistItemDeleteClick = async () => {
			await checklistItemDelete(card.cardId, card.listId, card.boardId, props.checklistId, props._id, dispatch);
		};

		const handleCompletedChange = async () => {
			await checklistItemCompletedSet(
				card.cardId,
				card.listId,
				card.boardId,
				props.checklistId,
				props._id,
				!checked,
				dispatch
			);
		};

		const handleTextChange = async () => {
			await checklistItemTextSet(
				card.cardId,
				card.listId,
				card.boardId,
				props.checklistId,
				props._id,
				editedText,
				dispatch
			);
		};

		return (
			<Row showHover={true}>
				<LeftColumn>
					<Checkbox checked={checked} clickCallback={handleCompletedChange} />
				</LeftColumn>
				<RightColumn>
					{showEdit ? (
						<TextAreaContainer>
							<TextArea value={editedText} onChange={(e) => setEditedText(e.target.value)} />
							<BottomButtonGroup
								title='Save'
								clickCallback={handleTextChange}
								closeCallback={() => {
									setShowEdit(false);
								}}
							/>
						</TextAreaContainer>
					) : (
						<>
							<CheckText
								onClick={() => {
									setShowEdit(true);
								}}
								isChecked={checked}
							>
								{props.text}
							</CheckText>
							<IconWrapper onClick={handleChecklistItemDeleteClick}>
								<DeleteIcon fontSize='1rem' />
							</IconWrapper>
						</>
					)}
				</RightColumn>
			</Row>
		);
	};

	return (
		<Container>
			<Row >
				<LeftColumn>
					<CheckIcon fontSize='small' />
				</LeftColumn>
				<RightColumn makeColumn={true}>
					<Title>{props.title}</Title>
					<RowRightButtonsWrapper>
						<Button
							clickCallback={() => setHideItems((prev) => !prev)}
							title={hideItems ? 'Show checkeds' : 'Hide checkeds'}
						/>
						<Button clickCallback={() => handleChecklistDelete(props._id)} title='Delete' />
					</RowRightButtonsWrapper>
				</RightColumn>
			</Row>
			<Row>
				<LeftColumn>
					<Percentage>{percentage()}%</Percentage>
				</LeftColumn>
				<RightColumn>
					<Progressbar value={percentage()} />
				</RightColumn>
			</Row>

			{props.items.map((item) => {
				if (hideItems && item.completed) return undefined;
				return <ChecklistItem key={item._id} checklistId={props._id} {...item} />;
			})}

			<Row>
				<LeftColumn></LeftColumn>
				<RightColumn>
					{showAddItem ? (
						<TextAreaContainer>
							<TextArea
								value={newItem}
								onChange={(e) => setNewItem(e.target.value)}
								placeholder='Add an item'
							/>
							<BottomButtonGroup
								title='Add'
								clickCallback={() => handleAddChecklistItem(props._id)}
								closeCallback={() => setShowAddItem(false)}
							/>
						</TextAreaContainer>
					) : (
						<Button clickCallback={() => setShowAddItem(true)} title='Add an item' />
					)}
				</RightColumn>
			</Row>
		</Container>
	);
};

export default Checklist;

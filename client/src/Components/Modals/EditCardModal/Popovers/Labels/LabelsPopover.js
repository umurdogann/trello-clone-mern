import React, { useState } from 'react';
import Button from '../../ReUsableComponents/Button';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/EditOutlined';
import { useDispatch, useSelector } from 'react-redux';
import {
	Container,
	SearchArea,
	Title,
	Row,
	Colorbox,
	ColorText,
	IconWrapper,
	SmallColorsContainer,
	SmallColorBox,
	BlueButton,
	ButtonContainer,
	RedButton,
} from './styled';
import { labelCreate } from '../../../../../Services/cardService';

const LabelsPopover = (props) => {
	const { currentPage } = props;
	const dispatch = useDispatch();
	const thisCard = useSelector((state) => state.card);
	const [selectedCard, setSelectedCard] = useState({ _id: '', color: '', text: '' });
	const colors = [
		{ bg: '#61bd4f', hbg: '#519839' },
		{ bg: '#f2d600', hbg: '#d9b51c' },
		{ bg: '#ff9f1a', hbg: '#cd8313' },
		{ bg: '#eb5a46', hbg: '#b04632' },
		{ bg: '#c377e0', hbg: '#89609e' },
		{ bg: '#0079bf', hbg: '#055a8c' },
		{ bg: '#344563', hbg: '#172b4d' },
		{ bg: '#ff78cb', hbg: '#c75bad' },
	];

	const handleCreateClick = async (text, color, backColor) => {
		props.arrowCallback(false);
		props.titleCallback('Labels');
		await labelCreate(thisCard.cardId,thisCard.listId,thisCard.boardId,text,color,backColor,dispatch);
	};

	const LabelComponent = (props) => {
		return (
			<Row>
				<Colorbox bg={props.color} hbg={props.backColor}>
					<ColorText>{props.text}</ColorText>
					{props.selected && <DoneIcon fontSize='1rem' />}
				</Colorbox>
				<IconWrapper
					onClick={() => {
						setSelectedCard({ _id: props._id, color: props.color, text: props.text });
						props.arrowCallback(true);
						props.titleCallback('Change');
					}}
				>
					<EditIcon color='#091e42' fontSize='1rem' />
				</IconWrapper>
			</Row>
		);
	};

	const mainPage = (
		<Container>
			<SearchArea placeholder='Search labels...' />
			<Title>Labels</Title>
			{thisCard.labels.map((label) => {
				return (
					<LabelComponent
						key={label._id}
						{...label}
						arrowCallback={props.arrowCallback}
						titleCallback={props.titleCallback}
					/>
				);
			})}

			<br />
			<Button
				clickCallback={() => {
					props.arrowCallback(true);
					props.titleCallback('Create');
				}}
				title='Create a new label'
			/>
		</Container>
	);

	const CreatePage = () => {
		const [createText, setCreateText] = useState('');
		const [createColor, setCreateColor] = useState('');
		const [createBackColor, setCreateBackColor] = useState('');

		return (
			<Container>
				<Title>Name</Title>
				<SearchArea placeholder='Name...' value={createText} onChange={(e) => setCreateText(e.target.value)} />
				<Title>Select a color</Title>
				<SmallColorsContainer>
					{colors.map((color) => {
						return (
							<SmallColorBox
								key={color.bg}
								bg={color.bg}
								hbg={color.hbg}
								onClick={() => {
									setCreateColor(color.bg);
									setCreateBackColor(color.hbg);
								}}
							>
								{color.bg === createColor && <DoneIcon fontSize='1rem' />}
							</SmallColorBox>
						);
					})}
				</SmallColorsContainer>
				<ButtonContainer>
					<BlueButton
						onClick={() => {
							handleCreateClick(createText, createColor, createBackColor);
						}}
					>
						Create
					</BlueButton>
				</ButtonContainer>
			</Container>
		);
	};

	const ChangePage = () => {
		const [changeText, setChangeText] = useState(selectedCard.text);
		const [changeColor, setChangeColor] = useState(selectedCard.color);
		return (
			<Container>
				<Title>Name</Title>
				<SearchArea placeholder='Name...' value={changeText} onChange={(e) => setChangeText(e.target.value)} />
				<Title>Select a color</Title>
				<SmallColorsContainer>
					{colors.map((color) => {
						return (
							<SmallColorBox
								key={color.bg}
								bg={color.bg}
								hbg={color.hbg}
								onClick={() => setChangeColor(color.bg)}
							>
								{changeColor === color.bg && <DoneIcon fontSize='1rem' />}
							</SmallColorBox>
						);
					})}
				</SmallColorsContainer>
				<ButtonContainer>
					<BlueButton>Save</BlueButton>
					<RedButton> Delete</RedButton>
				</ButtonContainer>
			</Container>
		);
	};

	return <>{currentPage === 'Labels' ? mainPage : currentPage === 'Create' ? <CreatePage /> : <ChangePage />}</>;
};

export default LabelsPopover;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Container, SmallColorBox, SmallColorsContainer, Title } from '../Labels/styled';
import SizeTypeOne from './SizeTypeOne';
import SizeTypeTwo from './SizeTypeTwo';
import Button from '../../ReUsableComponents/Button';
import { coverUpdate } from '../../../../../Services/cardService';
const ColorBox = styled(SmallColorBox)`
	border: 2px solid ${(props) => (props.selected ? '#0079bf' : 'transparent')};
	border-radius: 3px;
`;

const SizeContainer = styled.div`
	display: flex;
	width: 100%;
	height: fit-content;
	flex-direction: row;
	align-items: center;
	justify-content: start;
	gap: 0.5rem;
`;

const SizeWrapper = styled.div`
	flex: 1;
	width: 100%;
	height: fit-content;
	cursor: ${(props) => (props.show ? 'pointer' : 'default')};
`;

const CoverPopover = () => {
	const dispatch = useDispatch();
	const card = useSelector((state) => state.card);

	const handleRemoveClick = async () => {
		await coverUpdate(card.cardId, card.listId, card.boardId, null, null, dispatch);
	};

	const handleColorClick = async (color, isSizeOne) => {
		await coverUpdate(card.cardId, card.listId, card.boardId, color, isSizeOne, dispatch);
	};

	return (
		<Container>
			<Title>Size</Title>
			<SizeContainer>
				<SizeWrapper onClick={() => handleColorClick(card.cover.color, true)} show={card.cover.color}>
					<SizeTypeOne
						selected={card.cover.color && card.cover.isSizeOne !== null && card.cover.isSizeOne}
						color={card.cover.color}
					/>
				</SizeWrapper>
				<SizeWrapper onClick={() => handleColorClick(card.cover.color, false)} show={card.cover.color}>
					<SizeTypeTwo
						selected={card.cover.color && card.cover.isSizeOne !== null && !card.cover.isSizeOne}
						color={card.cover.color}
					/>
				</SizeWrapper>
			</SizeContainer>
			<Title>Colors</Title>
			<SmallColorsContainer>
				{card.colors.map((color) => {
					return (
						<ColorBox
							onClick={() => {
								handleColorClick(color.bg, card.cover.isSizeOne === null ? true : card.cover.isSizeOne);
							}}
							selected={card.cover.color === color.bg ? true : false}
							key={color.bg}
							bg={color.bg}
							hbg={color.hbg}
						></ColorBox>
					);
				})}
			</SmallColorsContainer>
			<Button title='Remove' style={{ marginTop: '1rem' }} clickCallback={handleRemoveClick} />
		</Container>
	);
};

export default CoverPopover;

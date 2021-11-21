import React, { useState } from 'react';
import {
	Container,
	Row,
	LeftColumn,
	RightColumn,
	Title,
	Percentage,
	CheckText,
	TextAreaContainer,
	TextArea,
} from './styled';
import CheckIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import BottomButtonGroup from '../../../Pages/BoardPage/BoardComponents/BottomButtonGroup/BottomButtonGroup.js';
import Checkbox from '../ReUsableComponents/Checkbox';
import Button from '../ReUsableComponents/Button';
import Progressbar from '../ReUsableComponents/Progressbar';
const Checklist = () => {
	const [checked, setChecked] = useState(false);
	const [showAddItem, setShowAddItem] = useState(false);
	const [newItem, setNewItem] = useState('');
	return (
		<Container>
			<Row>
				<LeftColumn>
					<CheckIcon fontSize='small' />
				</LeftColumn>
				<RightColumn>
					<Title>CheckList</Title>
					<Button title='Delete' />
				</RightColumn>
			</Row>
			<Row>
				<LeftColumn>
					<Percentage>0%</Percentage>
				</LeftColumn>
				<RightColumn>
					<Progressbar value={50} />
				</RightColumn>
			</Row>

			<Row>
				<LeftColumn>
					<Checkbox checked={checked} clickCallback={setChecked} />
				</LeftColumn>
				<RightColumn>
					<CheckText isChecked={checked}>This is a sample check text.</CheckText>
				</RightColumn>
			</Row>

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
							<BottomButtonGroup title='Add' closeCallback={() => setShowAddItem(false)} />
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

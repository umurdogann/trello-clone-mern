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
const Checklist = (props) => {	
	const [showAddItem, setShowAddItem] = useState(false);
	const [newItem, setNewItem] = useState('');
	const percentage = () => {
		if (props.items.length === 0) return 0;
		const completed = props.items.filter((item) => item.completed);
		return ((props.items.length - completed) / props.items.length) * 100;
	};

	const ChecklistItem = (props)=>{
		const [checked, setChecked] = useState(props.completed);
		return (
		<Row >
			<LeftColumn>
				<Checkbox checked={checked} clickCallback={setChecked} />
			</LeftColumn>
			<RightColumn>
				<CheckText isChecked={checked}>{props.text}</CheckText>
			</RightColumn>
		</Row>
		);
	}


	return (
		<Container>
			<Row>
				<LeftColumn>
					<CheckIcon fontSize='small' />
				</LeftColumn>
				<RightColumn>
					<Title>{props.title}</Title>
					<Button title='Delete' />
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
				
				return (
					<ChecklistItem key={item._id} {...item}/>
				);
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

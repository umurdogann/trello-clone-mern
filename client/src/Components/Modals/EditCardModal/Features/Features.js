import React, { useState } from 'react';
import {
	Container,
	FeatureContainer,
	Title,
	RowContainer,
	Label,
	AddLabel,
	DateDropDown,
	DateText,
	CompleteLabel,
} from './styled';
import MembersFeature from './MembersFeature';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Checkbox from '../ReUsableComponents/Checkbox';
import { useSelector } from 'react-redux';

const Features = () => {
	const [dateCheck, setDateCheck] = useState(false);
	const card = useSelector((state) => state.card);
	return (
		<Container>
			{card.members.length > 0 && (
				<FeatureContainer>
				 <MembersFeature/>
				</FeatureContainer>
			)}
			{card.labels.length > 0 && (
				<FeatureContainer>
					<Title>Labels</Title>
					<RowContainer>
						<Label color='#61bd4f' hoverColor='#71cd5f'>
							Done
						</Label>
						<Label color='#61bd4f' hoverColor='#71cd5f'>
							Done
						</Label>
						<Label color='#61bd4f' hoverColor='#71cd5f'>
							Done
						</Label>
						<Label color='#61bd4f' hoverColor='#71cd5f'>
							Done
						</Label>
						<Label color='#61bd4f' hoverColor='#71cd5f'>
							Done
						</Label>
						<AddLabel>+</AddLabel>
					</RowContainer>
				</FeatureContainer>
			)}
			{card.date && (
				<FeatureContainer>
					<Title>Dates</Title>
					<RowContainer>
						<Checkbox checked={dateCheck} clickCallback={setDateCheck} />
						<DateDropDown>
							<DateText>Nov 17 - Nov 30 at 3:57 AM</DateText>
							<CompleteLabel show={dateCheck}>complete</CompleteLabel>
							<ArrowDownIcon style={{ marginBottom: '0.2rem' }} fontSize='small' />
						</DateDropDown>
					</RowContainer>
				</FeatureContainer>
			)}
		</Container>
	);
};

export default Features;

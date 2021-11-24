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
import BasePopover from '../ReUsableComponents/BasePopover';
import LabelsPopover from '../Popovers/Labels/LabelsPopover';

const Features = () => {
	const [dateCheck, setDateCheck] = useState(false);
	const [labelPopover, setLabelPopover] = React.useState(null);
	const [labelsBackArrow, setLabelsBackArrow] = React.useState(false);
	const [labelsTitle, setLabelsTitle] = React.useState('Labels');
	const card = useSelector((state) => state.card);
	const anySelectedLabel = () => {
		return card.labels.filter((label) => label.selected);
	};
	return (
		<Container>
			{card.members.length > 0 && (
				<FeatureContainer>
					<MembersFeature />
				</FeatureContainer>
			)}
			{anySelectedLabel().length > 0 && (
				<FeatureContainer>
					<Title>Labels</Title>
					<RowContainer>
						{anySelectedLabel().map((label) => {
							console.log(label._id);
							return (
								<Label
									onClick={(event) => setLabelPopover(event.currentTarget)}
									key={label._id}
									color={label.color}
									hoverColor={label.backColor}
								>
									{label.text}
								</Label>
							);
						})}

						<AddLabel onClick={(event) => setLabelPopover(event.currentTarget)}>+</AddLabel>
						{labelPopover && (
							<BasePopover
								anchorElement={labelPopover}
								closeCallback={() => {
									setLabelPopover(null);
									setLabelsTitle('Labels');
									setLabelsBackArrow(false);
								}}
								title={labelsTitle}
								backClick={() => {
									setLabelsTitle('Labels');
									setLabelsBackArrow(false);
								}}
								backArrow={labelsBackArrow}
								contents={
									<LabelsPopover
										currentPage={labelsTitle}
										titleCallback={(event) => setLabelsTitle(event)}
										arrowCallback={(event) => {
											setLabelsBackArrow(event);
										}}
									/>
								}
							/>
						)}
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

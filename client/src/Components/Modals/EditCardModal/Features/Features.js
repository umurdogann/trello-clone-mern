import React, { useEffect, useState, useRef } from 'react';
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
	OverDueLabel,
} from './styled';
import MembersFeature from './MembersFeature';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Checkbox from '../ReUsableComponents/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import BasePopover from '../ReUsableComponents/BasePopover';
import LabelsPopover from '../Popovers/Labels/LabelsPopover';
import moment from 'moment';
import { dateCompletedUpdate } from '../../../../Services/cardService';
import DatePopover from '../Popovers/Date/DatePopover';

const Features = (props) => {
	const dispatch = useDispatch();
	const card = useSelector((state) => state.card);
	const ref = useRef();
	const [dateCheck, setDateCheck] = useState(card.date.completed);
	const [labelPopover, setLabelPopover] = React.useState(null);
	const [labelsBackArrow, setLabelsBackArrow] = React.useState(false);
	const [labelsTitle, setLabelsTitle] = React.useState('Labels');
	const [datePopover, setDatePopover] = React.useState(null);	
	useEffect(() => {
		setDateCheck(card.date.completed);
	}, [card.date.completed]);

	const anySelectedLabel = () => {
		return card.labels.filter((label) => label.selected);
	};

	const handleDateCompletedClick = async (param) => {
		setDateCheck(param);
		await dateCompletedUpdate(card.cardId, card.listId, card.boardId, param, dispatch);
	};

	const formatDate = (date) => {
		if (moment(date).toDate().getFullYear() < new Date().getFullYear()) return moment(date).format('MMM DD, yyyy');
		else return moment(date).format('MMM DD');
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
					<Title ref={ref}>Labels</Title>
					<RowContainer >
						{anySelectedLabel().map((label) => {
							return (
								<Label
									onClick={(event) => {
										setLabelPopover(ref.current)}}
									key={label._id}
									color={label.color}
									hoverColor={label.backColor}
								>
									{label.text}
								</Label>
							);
						})}

						<AddLabel  onClick={(event) => setLabelPopover(event.currentTarget)}>+</AddLabel>
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
			{(card.date.startDate || card.date.dueDate) && (
				<FeatureContainer>
					<Title>{card.date.startDate ? (card.date.dueDate ? 'Dates' : 'Start date') : 'Due date'}</Title>
					<RowContainer>
						<Checkbox
							checked={dateCheck}
							clickCallback={handleDateCompletedClick}
							hidden={!card.date.dueDate ? true : false}
						/>
						<DateDropDown onClick={(event) => setDatePopover(event.currentTarget)}>
							<DateText>{`${card.date.startDate ? formatDate(card.date.startDate) : ''}${
								card.date.startDate ? (card.date.dueDate ? ' - ' : '') : ''
							}${card.date.dueDate ? formatDate(card.date.dueDate) : ''}${
								card.date.dueTime ? ' at ' + card.date.dueTime : ''
							}`}</DateText>
							{moment(card.date.dueDate).toDate().getTime() < new Date().getTime() ? (
								<OverDueLabel show={true}>overdue</OverDueLabel>
							) : (
								<CompleteLabel show={dateCheck}>complete</CompleteLabel>
							)}
							<ArrowDownIcon style={{ marginBottom: '0.2rem' }} fontSize='small' />
						</DateDropDown>
					</RowContainer>
				</FeatureContainer>
			)}
			{datePopover && (
				<BasePopover
					anchorElement={datePopover}
					closeCallback={() => {
						setDatePopover(null);
					}}
					title='Date'
					contents={
						<DatePopover
							closeCallback={() => {
								setDatePopover(null);
							}}
						/>
					}
				/>
			)}
		</Container>
	);
};

export default Features;

import React from 'react';
import { Container, Title } from './styled';
import Button from '../ReUsableComponents/IconButton';
import MemberIcon from '@mui/icons-material/PersonOutlineOutlined';
import LabelIcon from '@mui/icons-material/LabelOutlined';
import CheckIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import DateIcon from '@mui/icons-material/ScheduleOutlined';
import AttachmentIcon from '@mui/icons-material/AttachFileOutlined';
import CoverIcon from '@mui/icons-material/TableChartOutlined';
import BasePopover from '../ReUsableComponents/BasePopover';
import MembersPopover from '../Popovers/Members/MembersPopover';
import LabelsPopover from '../Popovers/Labels/LabelsPopover';
import ChecklistPopover from '../Popovers/Checklist/ChecklistPopover';

const AddToCard = () => {
	const [memberPopover, setMemberPopover] = React.useState(null);
	const [labelPopover, setLabelPopover] = React.useState(null);
	const [checklistPopover, setChecklistPopover] = React.useState(null);
	const [labelsBackArrow, setLabelsBackArrow] = React.useState(false);
	const [labelsTitle, setLabelsTitle] = React.useState('Labels');
	return (
		<Container>
			<Title>Add to card</Title>

			<Button
				clickCallback={(event) => setMemberPopover(event.currentTarget)}
				title='Members'
				icon={<MemberIcon fontSize='small' />}
			></Button>
			{memberPopover && (
				<BasePopover
					anchorElement={memberPopover}
					closeCallback={() => {
						setMemberPopover(null);
					}}
					title='Members'
					contents={<MembersPopover />}
				/>
			)}

			<Button
				clickCallback={(event) => setLabelPopover(event.currentTarget)}
				title='Labels'
				icon={<LabelIcon fontSize='small' />}
			></Button>
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

			<Button
				clickCallback={(event) => setChecklistPopover(event.currentTarget)}
				title='Checklist'
				icon={<CheckIcon fontSize='small' />}
			></Button>
			{checklistPopover && (
				<BasePopover
					anchorElement={checklistPopover}
					closeCallback={() => {
						setChecklistPopover(null);
					}}
					title='Checklist'
					contents={<ChecklistPopover closeCallback={() => {
						setChecklistPopover(null);
					}}/>}
				/>
			)}

			<Button title='Dates' icon={<DateIcon fontSize='small' />}></Button>

			<Button title='Attachment' icon={<AttachmentIcon fontSize='small' />}></Button>

			<Button title='Cover' icon={<CoverIcon fontSize='small' />}></Button>
		</Container>
	);
};

export default AddToCard;

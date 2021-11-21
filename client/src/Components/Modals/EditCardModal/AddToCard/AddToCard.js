import React from 'react';
import { Container, Title } from './styled';
import Button from "../ReUsableComponents/IconButton";
import MemberIcon from '@mui/icons-material/PersonOutlineOutlined';
import LabelIcon from '@mui/icons-material/LabelOutlined';
import CheckIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import DateIcon from '@mui/icons-material/ScheduleOutlined';
import AttachmentIcon from '@mui/icons-material/AttachFileOutlined';
import CoverIcon from '@mui/icons-material/TableChartOutlined';
const AddToCard = () => {
	return (
		<Container>
			<Title>Add to card</Title>
			<Button title="Members" icon={<MemberIcon fontSize="small"/>}></Button>
			<Button title="Labels" icon={<LabelIcon fontSize="small"/>}></Button>
			<Button title="Checklist" icon={<CheckIcon fontSize="small"/>}></Button>
			<Button title="Dates" icon={<DateIcon fontSize="small"/>}></Button>
			<Button title="Attachment" icon={<AttachmentIcon fontSize="small"/>}></Button>
			<Button title="Cover" icon={<CoverIcon fontSize="small"/>}></Button>			
		</Container>
	);
};

export default AddToCard;

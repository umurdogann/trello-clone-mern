import * as React from 'react';
import Modal from '@mui/material/Modal';
import Button from './ReUsableComponents/Button';
import Actions from './Actions/Actions';
import Activity from './Activity/Activity';
import AddToCard from './AddToCard/AddToCard';
import Attachments from './Attachments/Attachments';
import Checklist from './Checklist/Checklist';
import Description from './Description/Description';
import Features from './Features/Features';
import Title from './Title/Title';
import {
	Container,
	CoverContainer,
	MainContainer,
	TitleContainer,
	FeaturesContainer,
	DescriptionContainer,
	AttachmentContainer,
	ChecklistContainer,
	ActivityContainer,
	RightContainer,
	AddToCardContainer,
	ActionsContainer,
} from './styled';

export default function EditCard() {
	const [open, setOpen] = React.useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<div style={{ position: 'relative' }}>
			<button onClick={handleOpen}>Open Modal</button>
			<Modal open={open} onClose={handleClose} style={{ overflow: 'auto' }}>
				<Container>
					<CoverContainer></CoverContainer>
					<MainContainer>
						<TitleContainer></TitleContainer>
						<FeaturesContainer></FeaturesContainer>
						<DescriptionContainer></DescriptionContainer>
						<AttachmentContainer></AttachmentContainer>
						<ChecklistContainer></ChecklistContainer>
						<ActivityContainer></ActivityContainer>
					</MainContainer>

					<RightContainer>
						<AddToCardContainer>
							<Button title='Members'></Button>
							<Button title='Labels'></Button>
							<Button title='Checklist'></Button>
							<Button title='Dates'></Button>
							<Button title='Attachment'></Button>
							<Button title='Cover'></Button>
						</AddToCardContainer>
						<ActionsContainer>
							<Button title='Move'></Button>
							<Button title='Copy'></Button>
							<Button title='Make template'></Button>
							<Button title='Watch'></Button>
							<hr />
							<Button title='Archive'></Button>
							<Button title='Share'></Button>
						</ActionsContainer>
					</RightContainer>
				</Container>
			</Modal>
		</div>
	);
}

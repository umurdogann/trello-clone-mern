import * as React from 'react';
import Modal from '@mui/material/Modal';
import Actions from './Actions/Actions';
import Activity from './Activity/Activity';
import Comment from './Comment/Comment';
import AddToCard from './AddToCard/AddToCard';
import Attachments from './Attachments/Attachments';
import Checklist from './Checklist/Checklist';
import Description from './Description/Description';
import Features from './Features/Features';
import Title from './Title/Title';
import {
	Container,
	Wrapper,
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
					<TitleContainer>
						<Title title='Title' list='example'/>
					</TitleContainer>
					<Wrapper>
						<MainContainer>
							{/* <FeaturesContainer>
								<Features />
							</FeaturesContainer> */}
							<DescriptionContainer>
								<Description />
							</DescriptionContainer>
						{/* 	<AttachmentContainer>
								<Attachments />
							</AttachmentContainer>
							<ChecklistContainer>
								<Checklist />
							</ChecklistContainer> */}
							<ActivityContainer>
								<Activity />
								<Comment/>
							</ActivityContainer>
							
						</MainContainer>

						<RightContainer>
							<AddToCardContainer>
								<AddToCard />
							</AddToCardContainer>
							<ActionsContainer>
								<Actions />
							</ActionsContainer>
						</RightContainer>
					</Wrapper>
				</Container>
			</Modal>
		</div>
	);
}

import * as React from 'react';
import Modal from '@mui/material/Modal';
import Actions from './Actions/Actions';
import Activity from './Activity/Activity';
import AddToCard from './AddToCard/AddToCard';
import Checklist from './Checklist/Checklist';
import Description from './Description/Description';
import Features from './Features/Features';
import Title from './Title/Title';
import CardLoadingSvg from '../../../Images/cardLoading.svg';
import { getCard } from '../../../Services/cardService';
import { useSelector, useDispatch } from 'react-redux';
import {
	Container,
	Wrapper,
	CoverContainer,
	MainContainer,
	TitleContainer,
	FeaturesContainer,
	DescriptionContainer,
	ChecklistContainer,
	ActivityContainer,
	RightContainer,
	AddToCardContainer,
	ActionsContainer,
	LoadingScreen,
} from './styled';

export default function EditCard(props) {
	const { cardId, listId, boardId } = props.ids;
	const dispatch = useDispatch();
	const thisCard = useSelector((state) => state.card);

	React.useEffect(() => {
		if (props.open) {
			getCard(cardId, listId, boardId, dispatch);
		}
	}, [boardId, cardId, dispatch, listId, props.open]);

	return (
		<div style={{ position: 'relative' }}>
			<Modal open={props.open} onClose={props.callback} style={{ overflow: 'auto' }}>
				<Container>
					<CoverContainer></CoverContainer>

					<TitleContainer>{!thisCard.pending && <Title />}</TitleContainer>
					<Wrapper>
						<MainContainer>
							{!thisCard.pending ? (
								<>
									{(thisCard.date) && (
										<FeaturesContainer>
											<Features />
										</FeaturesContainer>
									)}
									<DescriptionContainer>
										<Description />
									</DescriptionContainer>
									{thisCard.checklists && (
										<ChecklistContainer>
											<Checklist />
										</ChecklistContainer>
									)}
									<ActivityContainer>
										<Activity />
									</ActivityContainer>
								</>
							) : (
								<LoadingScreen image={CardLoadingSvg} />
							)}
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

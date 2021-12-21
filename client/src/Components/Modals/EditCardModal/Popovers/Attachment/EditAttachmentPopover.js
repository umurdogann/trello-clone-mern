import React, { useState } from 'react';
import { SearchArea, Title, BlueButton } from '../Labels/styled';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { attachmentUpdate } from '../../../../../Services/cardService';
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	height: fit-content;
	width: 100%;
	padding-bottom: 0.5rem;
	gap: 0.2rem;
`;

const EditAttachmentPopover = (props) => {
	const dispatch = useDispatch();
	const card = useSelector((state) => state.card);
	const [link, setLink] = useState(props.link);
	const [linkName, setLinkName] = useState(props.name ? props.name : props.link);
	const handleAttachClick = async () => {
		props.closeCallback();
		await attachmentUpdate(card.cardId, card.listId, card.boardId, props._id, new RegExp(/^https?:\/\//).test(link) ? link : 'http://' + link, linkName, dispatch);
	};
	return (
		<Container>
			<Title>Link</Title>
			<SearchArea placeholder='Paste any link here...' value={link} onChange={(e) => setLink(e.target.value)} />
			{link && (
				<>
					<Title style={{ marginTop: '0.7rem' }}>Link name (optional)</Title>
					<SearchArea value={linkName} onChange={(e) => setLinkName(e.target.value)} />
				</>
			)}
			<BlueButton style={{ marginTop: '1rem' }} onClick={handleAttachClick}>
				Update
			</BlueButton>
		</Container>
	);
};

export default EditAttachmentPopover;

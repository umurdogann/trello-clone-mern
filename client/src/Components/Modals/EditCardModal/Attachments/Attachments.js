import React, { useState } from 'react';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import AttachmentIcon from '@mui/icons-material/InsertLinkRounded';
import Button from '../ReUsableComponents/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
	Container,
	RightWrapper,
	Title,
	Row,
	FaviconWrapper,
	AttachmentRightWrapper,
	AttachmentTitleWrapper,
	AttachmentTitle,
	AttachmentTitleIconWrapper,
	AttachmentFooterWrapper,
	AttachmentDate,
	AttachmentOperations,
} from './styled';
import { attachmentDelete } from '../../../../Services/cardService';
import BasePopover from '../ReUsableComponents/BasePopover';
import EditAttachmentPopover from '../Popovers/Attachment/EditAttachmentPopover';

const Attachments = (props) => {
	const card = useSelector((state) => state.card);
	const dispatch = useDispatch();
	const [editPopover, setEditPopover] = useState(null);
	const [popoverComponent, setPopoverComponent] = useState(null);

	const handleDeleteClick = async (attachmentId) => {
		await attachmentDelete(card.cardId, card.listId, card.boardId, attachmentId, dispatch);
	};
	return (
		<>
			<Container>
				<AttachmentIcon fontSize='small' />
				<RightWrapper>
					<Title>Attachments</Title>
					{card.attachments.map((attachment) => {
						const validateLink = () => {};
						validateLink();
						return (
							<Row key={attachment._id} onClick={() => window.open(attachment.link, '_blank')}>
								<FaviconWrapper>
									<AttachmentIcon fontSize='large' />
								</FaviconWrapper>
								<AttachmentRightWrapper>
									<AttachmentTitleWrapper>
										<AttachmentTitle>
											{attachment.name ? attachment.name : attachment.link}
										</AttachmentTitle>
										<AttachmentTitleIconWrapper>
											<NorthEastRoundedIcon fontSize='inherit' />
										</AttachmentTitleIconWrapper>
									</AttachmentTitleWrapper>
									<AttachmentFooterWrapper>
										<AttachmentDate>
											{'Added at Nov 12, 2021'}
											<AttachmentOperations
												onClick={(e) => {
													e.stopPropagation();
													handleDeleteClick(attachment._id);
												}}
											>
												Delete
											</AttachmentOperations>
											{' - '}
											<AttachmentOperations
												onClick={(e) => {
													e.stopPropagation();
													setPopoverComponent(attachment);
													setEditPopover(e.currentTarget);
												}}
											>
												Edit
											</AttachmentOperations>
										</AttachmentDate>
									</AttachmentFooterWrapper>
								</AttachmentRightWrapper>
							</Row>
						);
					})}
					<Button style={{ width: '9rem', marginTop: '0.7rem' }} title='Add an Attachment' />
				</RightWrapper>
			</Container>
			{editPopover && (
				<BasePopover
					anchorElement={editPopover}
					closeCallback={() => {
						setEditPopover(null);
					}}
					title='Edit'
					contents={
						<EditAttachmentPopover
							{...popoverComponent}
							closeCallback={() => {
								setEditPopover(null);
							}}
						/>
					}
				/>
			)}
		</>
	);
};

export default Attachments;

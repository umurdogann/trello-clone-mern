import React from 'react';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import AttachmentIcon from '@mui/icons-material/InsertLinkRounded';
import Button from '../ReUsableComponents/Button';
import { useSelector } from 'react-redux';
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

const Attachments = (props) => {
	const card = useSelector((state) => state.card);

	return (
		<>
			<Container>
				<AttachmentIcon fontSize='small' />
				<RightWrapper>
					<Title>Attachments</Title>
					{card.attachments.map((attachment) => {
						const validateLink  = ()=>{
				
						}
						validateLink();
						return (
							<Row key ={attachment._id} onClick={() => window.open(attachment.link, '_blank')}>
								<FaviconWrapper>
									<AttachmentIcon fontSize='large' />
								</FaviconWrapper>
								<AttachmentRightWrapper>
									<AttachmentTitleWrapper>
										<AttachmentTitle>{attachment.name?attachment.name:attachment.link}</AttachmentTitle>
										<AttachmentTitleIconWrapper>
											<NorthEastRoundedIcon fontSize='inherit' />
										</AttachmentTitleIconWrapper>
									</AttachmentTitleWrapper>
									<AttachmentFooterWrapper>
										<AttachmentDate>
											{'Added at Nov 12, 2021'}
											<AttachmentOperations>Delete</AttachmentOperations>
											{' - '}
											<AttachmentOperations
												onClick={(e) => {
													e.stopPropagation();
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
		</>
	);
};

export default Attachments;

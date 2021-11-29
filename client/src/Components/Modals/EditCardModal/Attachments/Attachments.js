import React from 'react';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import AttachmentIcon from '@mui/icons-material/InsertLinkRounded';
import Button from '../ReUsableComponents/Button';
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
	return (
		<>
			<Container>
				<AttachmentIcon fontSize='small' />
				<RightWrapper>
					<Title>Attachments</Title>
					<Row onClick={(()=> window.open(props.link, "_blank"))}>
						<FaviconWrapper>
							<AttachmentIcon fontSize='large' />
						</FaviconWrapper>
						<AttachmentRightWrapper>
							<AttachmentTitleWrapper>
								<AttachmentTitle>Example Title</AttachmentTitle>
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
					<Button style={{ width: '9rem', marginTop: '0.7rem' }} title='Add an Attachment' />
				</RightWrapper>
			</Container>
		</>
	);
};

export default Attachments;

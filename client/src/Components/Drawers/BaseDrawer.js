import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Container, HeadContainer, BackIconWrapper, Title, CloseIconWrapper, Hr, ContentWrapper } from './styled';
import BackIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
const BaseDrawer = (props) => {
	const [open, setOpen] = useState(false);
	useEffect(() => {
		if (props.show) setOpen(true);
	}, [props.show]);

	const toggleDrawer = (value) => (event) => {
		if (event.type === 'keydown') return;
		/* if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		} */
		setOpen(value);
		props.closeCallback(value);
	};

	return (
		<div>
			<Drawer anchor={'right'} open={open} onClose={toggleDrawer(false)}>
				<Box
					sx={{ width: 320 }}
					role='presentation'
					onKeyDown={toggleDrawer(false)}
					backgroundColor='#f4f5f7'
					height='100vh'
				>
					<Container>
						<HeadContainer>
							<BackIconWrapper
								style={{ visibility: props.showBackIcon ? 'visible' : 'hidden' }}
								onClick={props.backClickCallback}
							>
								<BackIcon fontSize='1rem' />
							</BackIconWrapper>
							<Title>{props.title}</Title>
							<CloseIconWrapper
								onClick={() => {
									setOpen(false);
									props.closeCallback(false);
								}}
							>
								<CloseIcon fontSize='small' />
							</CloseIconWrapper>
						</HeadContainer>
						<Hr />
						<ContentWrapper>{props.content}</ContentWrapper>
					</Container>
				</Box>
			</Drawer>
		</div>
	);
};

export default BaseDrawer;

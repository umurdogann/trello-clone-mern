import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import styled from 'styled-components';
const Icon = styled.img`
	width: 10vw;
`;

export default function LoadingScreen() {
	const [open] = React.useState(true);
	/*  const handleClose = () => {
    setOpen(false);
  }; */
	return (
		<div>
			<Backdrop
				sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={open}
				//onClick={handleClose}
			>
				<Icon src='https://a.trellocdn.com/prgb/dist/images/header-logo-spirit-loading.87e1af770a49ce8e84e3.gif' />
			</Backdrop>
		</div>
	);
}

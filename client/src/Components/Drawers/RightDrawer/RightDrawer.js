import React, { useEffect, useState } from 'react';
import BaseDrawer from '../BaseDrawer';
import MainMenu from './MainMenu/MainMenu';
const RightDrawer = (props) => {
	const [show, setShow] = useState(false);
	useEffect(() => {
		props.show && setShow(true);
	}, [props.show]);
	return (
		<BaseDrawer
			title='Menu'
			show={show}
			closeCallback={(param) => {
				setShow(param);
				props.closeCallback();
			}}
			showBackIcon={true}
			content={<MainMenu />}
		/>
	);
};

export default RightDrawer;

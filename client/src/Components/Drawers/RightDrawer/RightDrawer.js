import React, { useEffect, useState } from 'react';
import BaseDrawer from '../BaseDrawer';
import AboutMenu from './AboutMenu/AboutMenu';
import MainMenu from './MainMenu/MainMenu';
import BackgroundMenu from './BackgroundMenu/BackgroundMenu';
const RightDrawer = (props) => {
	const [show, setShow] = useState(false);
	const [sectionName, setSectionName] = useState('Menu');
	useEffect(() => {
		props.show && setShow(true);
	}, [props.show]);
	return (
		<BaseDrawer
			title={sectionName}
			show={show}
			closeCallback={(param) => {
				setShow(param);
				props.closeCallback();
			}}
			backClickCallback={(param) => {
				setSectionName('Menu');
			}}
			showBackIcon={true}
			content={
				sectionName === 'Menu' ? (
					<MainMenu
						menuCallback={(param) => {
							setSectionName(param);
						}}
					/>
				) : sectionName === 'About this board' ? (
					<AboutMenu />
				) : (
					<BackgroundMenu />
				)
			}
		/>
	);
};

export default RightDrawer;

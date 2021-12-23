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

	const handleBackClick = () => {
		if (sectionName === 'About this board' || sectionName === 'Change background') setSectionName('Menu');
		else setSectionName('Change background');
	};

	return (
		<BaseDrawer
			title={sectionName}
			show={show}
			closeCallback={(param) => {
				setShow(param);
				props.closeCallback();
			}}
			backClickCallback={handleBackClick}
			showBackIcon={sectionName!=="Menu"}
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
					<BackgroundMenu
						menuCallback={(param) => {
							setSectionName(param);
						}}
						sectionName={sectionName}
					/>
				)
			}
		/>
	);
};

export default RightDrawer;

import React, { useEffect, useState } from 'react';
import { Container, SubContainer, Image, Title, PhotosContainer, PhotosWrapper } from './styled';
import axios from 'axios';
import Skeleton from '@mui/material/Skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { boardBackgroundUpdate } from '../../../../Services/boardService';

const getImages = async () => {
	const newAxios = axios.create();
	delete newAxios.defaults.headers.common['Authorization'];
	const res = await newAxios.get(
		'https://trello.com/proxy/unsplash/collections/317099/photos?per_page=30&order_by=latest&page=4'
	);
	return res.data;
};

const DefaultMenu = (props) => {
	return (
		<Container>
			<SubContainer onClick={() => props.menuCallback('Photos by Unsplash')}>
				<Image link='https://a.trellocdn.com/prgb/dist/images/photos-thumbnail@3x.8f9c1323c9c16601a9a4.jpg' />
				<Title>Photos</Title>
			</SubContainer>
			<SubContainer onClick={() => props.menuCallback('Colors')}>
				<Image link='https://a.trellocdn.com/prgb/dist/images/colors@2x.ec32a2ed8dd8198b8ef0.jpg' />
				<Title>Colors</Title>
			</SubContainer>
		</Container>
	);
};

const PhotosMenu = (props) => {
	const [images, setImages] = useState([]);
	useEffect(() => {
		getImages().then((res) => {
			setTimeout(() => {
				setImages(res);
			}, 2000);
		});
	}, []);

	const handleClick = (background) => {
		boardBackgroundUpdate(props.boardId, background, true, props.dispatch);
	};

	return (
		<PhotosContainer>
			{images.length > 0
				? images.map((image) => {
						return (
							<PhotosWrapper key={image.id} onClick={() => handleClick(image.urls.full)}>
								<Image key={image.id} link={image.urls.small} />
							</PhotosWrapper>
						);
				  })
				: [...Array(18).keys()].map((l, i) => (
						<PhotosWrapper key={i}>
							<Skeleton variant='rectangular' width='100%' height='6rem' />
						</PhotosWrapper>
				  ))}
		</PhotosContainer>
	);
};

const ColorsMenu = (props) => {
	const colors = ['#0079bf', '#d29034', '#519839', '#b04632', '#89609e', '#cd5a91', '#4bbf6b', '#00aecc'];

	const handleClick = (background) => {
		boardBackgroundUpdate(props.boardId, background, false, props.dispatch);
	};

	return (
		<PhotosContainer>
			{colors.map((image) => {
				return (
					<PhotosWrapper key={image} onClick={() => handleClick(image)}>
						<Image key={image} bg={image} />
					</PhotosWrapper>
				);
			})}
		</PhotosContainer>
	);
};

const BackgroundMenu = (props) => {
	const dispatch = useDispatch();
	const boardId = useSelector((state) => state.board.id);
	return (
		<>
			{props.sectionName === 'Change background' ? (
				<DefaultMenu {...props} dispatch={dispatch} boardId={boardId} />
			) : props.sectionName === 'Photos by Unsplash' ? (
				<PhotosMenu {...props} dispatch={dispatch} boardId={boardId} />
			) : (
				<ColorsMenu {...props} dispatch={dispatch} boardId={boardId} />
			)}
		</>
	);
};

export default BackgroundMenu;

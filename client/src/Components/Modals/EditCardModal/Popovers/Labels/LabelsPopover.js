import React from 'react';
import Button from '../../ReUsableComponents/Button';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/EditOutlined';
import {
	Container,
	SearchArea,
	Title,
	Row,
	Colorbox,
	ColorText,
	IconWrapper,
	SmallColorsContainer,
	SmallColorBox,
	BlueButton,
	ButtonContainer,
	RedButton,
} from './styled';

const LabelsPopover = (props) => {
	const { currentPage } = props;
	const colors = [
		{ bg: '#61bd4f', hbg: '#519839' },
		{ bg: '#f2d600', hbg: '#d9b51c' },
		{ bg: '#ff9f1a', hbg: '#cd8313' },
		{ bg: '#eb5a46', hbg: '#b04632' },
		{ bg: '#c377e0', hbg: '#89609e' },
		{ bg: '#0079bf', hbg: '#055a8c' },
		{ bg: '#344563', hbg: '#172b4d' },
		{ bg: '#ff78cb', hbg: '#c75bad' },
	];
	const mainPage = (
		<Container>
			<SearchArea placeholder='Search labels...' />
			<Title>Labels</Title>
			{colors.map((color) => {
				return (
					<Row>
						<Colorbox bg={color.bg} hbg={color.hbg}>
							<ColorText>text1</ColorText>
							<DoneIcon fontSize='1rem' />
						</Colorbox>
						<IconWrapper>
							<EditIcon
								onClick={() => {
									props.arrowCallback(true);
									props.titleCallback('Change');
								}}
								color='#091e42'
								fontSize='1rem'
							/>
						</IconWrapper>
					</Row>
				);
			})}

			<br />
			<Button
				clickCallback={() => {
					props.arrowCallback(true);
					props.titleCallback('Create');
				}}
				title='Create a new label'
			/>
		</Container>
	);

	const createPage = (
		<Container>
			<Title>Name</Title>
			<SearchArea placeholder='Name...' />
			<Title>Select a color</Title>
			<SmallColorsContainer>
				{colors.map((color) => {
					return (
						<SmallColorBox bg={color.bg} hbg={color.hbg}>
							<DoneIcon fontSize='1rem' />
						</SmallColorBox>
					);
				})}
			</SmallColorsContainer>
			<ButtonContainer>
				<BlueButton>Create</BlueButton>
			</ButtonContainer>
		</Container>
	);

	const changePage = (
		<Container>
			<Title>Name</Title>
			<SearchArea placeholder='Name...' />
			<Title>Select a color</Title>
			<SmallColorsContainer>
				{colors.map((color) => {
					return (
						<SmallColorBox bg={color.bg} hbg={color.hbg}>
							<DoneIcon fontSize='1rem' />
						</SmallColorBox>
					);
				})}
			</SmallColorsContainer>
			<ButtonContainer>
				<BlueButton>Save</BlueButton>
				<RedButton> Delete</RedButton>
			</ButtonContainer>
		</Container>
	);

	return <>{currentPage === 'Labels' ? mainPage : currentPage === 'Create' ? createPage : changePage}</>;
};

export default LabelsPopover;

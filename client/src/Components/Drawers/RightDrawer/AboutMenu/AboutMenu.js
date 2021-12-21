import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Container,
	SectionContainer,
	MemberSectionContainer,
	MemberInfoContainer,
	SectionHeaderContainer,
	DescriptionSectionContainer,
	MemberEmail,
	IconWrapper,
	SectionTitle,
	MemberName,
	DescriptionInput,
	HiddenText,
} from './styled';
import MemberIcon from '@mui/icons-material/PersonOutlineOutlined';
import DescriptionIcon from '@mui/icons-material/TextSnippetOutlined';
import BottomButtonGroup from '../../../Pages/BoardPage/BoardComponents/BottomButtonGroup/BottomButtonGroup';
import { boardDescriptionUpdate } from '../../../../Services/boardService';
import { Avatar } from '@mui/material';
const AboutMenu = () => {
	const textAreaRef = useRef();
	const hiddenTextRef = useRef();
	const descriptionAreaRef = useRef();

	const dispatch = useDispatch();

	const board = useSelector((state) => state.board);
	const [description, setDescription] = useState(board.description);
	const [textareaFocus, setTextareaFocus] = useState(false);

	const onChangeHandler = function (e) {
		const target = e.target;
		setDescription(target.value);
		textAreaRef.current.style.height = '5.5rem';
		textAreaRef.current.style.height = `${target.scrollHeight}px`;
	};
	const handleSaveClick = () => {
		setTextareaFocus(false);
		boardDescriptionUpdate(board.id, description, dispatch);
	};

	const handleClickOutside = (e) => {
		if (descriptionAreaRef.current)
			if (!descriptionAreaRef.current.contains(e.target)) {
				setTextareaFocus(false);
				setDescription(board.description);
			}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	});

	return (
		<Container>
			<SectionContainer>
				<SectionHeaderContainer>
					<IconWrapper>
						<MemberIcon fontSize='inherit' />
					</IconWrapper>
					<SectionTitle>Board Admins</SectionTitle>
				</SectionHeaderContainer>
				{board.members
					.filter((member) => member.role === 'owner')
					.map((member) => {
						return (
							<MemberSectionContainer key={member.email}>
								<Avatar
									sx={{ width: '3rem', height: '3rem', bgcolor: member.color, fontWeight: '800' }}
								>
									{member.name[0].toUpperCase()}
								</Avatar>
								<MemberInfoContainer>
									<MemberName>{`${member.name.replace(
										/^./,
										member.name[0].toUpperCase()
									)} ${member.surname.toUpperCase()}`}</MemberName>
									<MemberEmail>{member.email}</MemberEmail>
								</MemberInfoContainer>
							</MemberSectionContainer>
						);
					})}
			</SectionContainer>
			<SectionContainer>
				<SectionHeaderContainer>
					<IconWrapper>
						<DescriptionIcon fontSize='inherit' />
					</IconWrapper>
					<SectionTitle>Description</SectionTitle>
				</SectionHeaderContainer>
				<DescriptionSectionContainer ref={descriptionAreaRef}>
					<DescriptionInput
						ref={textAreaRef}
						onChange={onChangeHandler}
						value={description}
						onFocus={() => setTextareaFocus(true)}
						textHeight={hiddenTextRef.current ? hiddenTextRef.current.scrollHeight : '1rem'}
						focused={textareaFocus}
						placeholder='It’s your board’s time to shine! Let people know what this board is used for and what they can expect to see.'
					/>
					{textareaFocus && (
						<BottomButtonGroup
							title='Save'
							clickCallback={handleSaveClick}
							closeCallback={() => setTextareaFocus(false)}
						/>
					)}
				</DescriptionSectionContainer>
			</SectionContainer>
			<HiddenText ref={hiddenTextRef}>{description}</HiddenText>
		</Container>
	);
};

export default AboutMenu;

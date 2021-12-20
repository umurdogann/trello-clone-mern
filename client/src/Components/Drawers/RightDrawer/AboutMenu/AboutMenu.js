import React, { useRef, useState } from 'react';
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
	Avatar,
	MemberName,
	DescriptionInput,
} from './styled';
import MemberIcon from '@mui/icons-material/PersonOutlineOutlined';
import DescriptionIcon from '@mui/icons-material/TextSnippetOutlined';
import BottomButtonGroup from '../../../Pages/BoardPage/BoardComponents/BottomButtonGroup/BottomButtonGroup';
const AboutMenu = () => {
    const textAreaRef = useRef();
    const [description,setDescription] = useState('');
    const [textareaFocus, setTextareaFocus] = useState(false);
    const onChangeHandler = function(e) {
        const target = e.target ;
        setDescription(target.value);
        textAreaRef.current.style.height = "5rem";
        textAreaRef.current.style.height = `${target.scrollHeight}px`;
       };
	return (
		<Container>
			<SectionContainer>
				<SectionHeaderContainer>
					<IconWrapper>
						<MemberIcon fontSize='inherit' />
					</IconWrapper>
					<SectionTitle>Board Admins</SectionTitle>
				</SectionHeaderContainer>
				<MemberSectionContainer>
					<Avatar>C</Avatar>
					<MemberInfoContainer>
						<MemberName>Cuma Umur DOĞAN</MemberName>
						<MemberEmail>umurdogann@gmail.com</MemberEmail>
					</MemberInfoContainer>
				</MemberSectionContainer>
			</SectionContainer>
			<SectionContainer>
				<SectionHeaderContainer>
					<IconWrapper>
						<DescriptionIcon fontSize='inherit' />
					</IconWrapper>
					<SectionTitle>Description</SectionTitle>
				</SectionHeaderContainer>
				<DescriptionSectionContainer>
					<DescriptionInput
                        ref={textAreaRef}
                        onChange={onChangeHandler}
                        value={description}
                        onFocus={()=>setTextareaFocus(true)}
                        onBlur={()=>setTextareaFocus(false)}
						placeholder='It’s your board’s time to shine! Let people know what this board is used for and what they can expect to see.'
					/>
                    {textareaFocus&&<BottomButtonGroup title='Save' closeCallback={()=>setTextareaFocus(false)}/>}
                    
				</DescriptionSectionContainer>
			</SectionContainer>
		</Container>
	);
};

export default AboutMenu;

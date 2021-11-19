import React, { useState } from 'react';
import { Container, IconWrapper, RightContainer, TitleInput, Description, Link } from './styled';
import TitleIcon from '@mui/icons-material/ChromeReaderMode';

const Title = (props) => {
	const [title, setTitle] = useState(props.title);

	const handleTitleAccept = () => {
		// TODO: Update title
	};

	return (
		<Container>
			<IconWrapper>
				<TitleIcon fontSize="small"/>
			</IconWrapper>
			<RightContainer>
				<TitleInput
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					onBlur={handleTitleAccept}
				></TitleInput>
				<Description>
					in list <Link>{props.list}</Link>
				</Description>
			</RightContainer>
		</Container>
	);
};

export default Title;

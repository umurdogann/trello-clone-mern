import React from 'react';
import styled from 'styled-components';
import DropdownMenu from './DropdownMenu';
import SearchBar from './SearchBar';
import { xs } from '../BreakPoints';
import ProfileBox from './ProfileBox';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
	height: 3rem;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(24px);
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0.5rem 1rem;
	gap: 0.5rem;
	${xs({
		padding: '0.5rem, 0rem',
	})}
`;

const LeftSide = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	gap: 1rem;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	${xs({
		gap: '0.1rem',
		width: 'fit-content',
	})}
`;

const RightSide = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
`;

const LogoContainer = styled.div`
	display: flex;
	align-items: center;
`;

const TrelloLogo = styled.img`
	width: 75px;
	height: 15px;
	cursor: pointer;
`;

const DropdownContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	${xs({
		display: 'none',
	})}
`;

const Navbar = (props) => {
	const history = useHistory();

	return (
		<Container>
			<LeftSide>
				<LogoContainer>
					<TrelloLogo
						onClick={() => {
							history.push('/boards');
						}}
						src='https://a.trellocdn.com/prgb/dist/images/header-logo-spirit-loading.87e1af770a49ce8e84e3.gif'
					/>
				</LogoContainer>
				<DropdownContainer>
					<DropdownMenu title='Your Boards' />
				</DropdownContainer>
			</LeftSide>
			<RightSide>
				<SearchBar searchString={props.searchString} setSearchString={props.setSearchString} />
				<ProfileBox />
			</RightSide>
		</Container>
	);
};

export default Navbar;

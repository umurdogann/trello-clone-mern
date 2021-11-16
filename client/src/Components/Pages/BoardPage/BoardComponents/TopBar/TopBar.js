import React, { useEffect } from 'react';
import * as style from './styled';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import * as common from '../../CommonStyled';
import { useSelector } from 'react-redux';
const TopBar = () => {
	const { title } = useSelector((state) => state.board);

	const handleTitleChange = (e) => {
		const newTitle = e.default.value;
	};
	return (
		<style.TopBar>
			<div>
				<style.InviteButton>
					<PersonAddAltIcon />
					<style.TextSpan>Invite</style.TextSpan>
				</style.InviteButton>
			</div>

			<div>
				<style.BoardNameInput
					placeholder='Board Name'
					value={title}
					onChange={(e) => handleTitleChange(e)}
				/>
			</div>

			<div>
				<common.Button>
					<MoreHorizIcon />
					<style.TextSpan>Show menu</style.TextSpan>
				</common.Button>
			</div>
		</style.TopBar>
	);
};

export default TopBar;

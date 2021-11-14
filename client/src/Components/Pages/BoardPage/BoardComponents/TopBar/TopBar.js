import React from 'react';
import * as style from './styled';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import * as common from '../../CommonStyled';
const TopBar = (props) => {
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
					value={props.boardName}
					onChange={(e) => props.callback(e.target.value)}
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

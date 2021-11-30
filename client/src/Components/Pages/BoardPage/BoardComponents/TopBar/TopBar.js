import React, { useEffect, useState } from 'react';
import * as style from './styled';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import * as common from '../../CommonStyled';
import { useDispatch, useSelector } from 'react-redux';
import { boardTitleUpdate } from '../../../../../Services/boardsService';

const TopBar = () => {
	const board = useSelector((state) => state.board);
	const [currentTitle, setCurrentTitle] = useState(board.title);
	const dispatch = useDispatch();
	useEffect(()=>{
		if(!board.loading)
			setCurrentTitle(board.title);
	},[board.loading, board.title]);
	const handleTitleChange = () => {
		boardTitleUpdate(currentTitle,board.id,dispatch);
	};
	return (
		<style.TopBar>
			<style.LeftWrapper>
				<style.InviteButton>
					<PersonAddAltIcon />
					<style.TextSpan>Invite</style.TextSpan>
				</style.InviteButton>

				<style.BoardNameInput
					placeholder='Board Name'
					value={currentTitle}
					onChange={(e) => setCurrentTitle(e.target.value)}
					onBlur={handleTitleChange}
				/>
			</style.LeftWrapper>

			<style.RightWrapper>
				<common.Button>
					<MoreHorizIcon />
					<style.TextSpan>Show menu</style.TextSpan>
				</common.Button>
			</style.RightWrapper>
		</style.TopBar>
	);
};

export default TopBar;

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import DownIcon from '@mui/icons-material/KeyboardArrowDown';
import styledComponent from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getBoards } from '../Services/boardsService';
const BootstrapButton = styled(Button)({
	boxShadow: 'none',
	textTransform: 'none',
	gap: '0.25rem',
	padding: '0.25rem 0.5rem',
	color: 'white',
	backgroundColor: 'transparent',
	border: 'none',
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-around',

	'&:hover': {
		backgroundColor: 'rgba(255, 255, 255, 0.2)',
	},
	'&:active': {
		backgroundColor: 'rgba(255, 255, 255, 0.2)',
	},
});

const Span = styledComponent.span`
font-size: 0.85rem;
display:block;
`;

const StyledIcon = styled(DownIcon)({
	display: 'block',
	fontSize: '1.3rem',
});

export default function DropdownMenu(props) {
	const boardsData = useSelector((state) => state.boards.boardsData);
	const history = useHistory();
	const dispatch = useDispatch();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	React.useEffect(() => {
		if (!Object.keys(boardsData).length) getBoards(dispatch);
	}, [boardsData, dispatch]);

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<BootstrapButton
				id='demo-positioned-button'
				aria-controls='demo-positioned-menu'
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				<Span>{props.title}</Span>
				<Span>
					<StyledIcon />
				</Span>
			</BootstrapButton>
			{Object.keys(boardsData).length > 0 && (
				<Menu
					id='demo-positioned-menu'
					aria-labelledby='demo-positioned-button'
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'right',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
				>
					{boardsData.map((item) => {
						return (
							<MenuItem
								key={item._id}
								onClick={() => {
									setAnchorEl(null);
									history.push('/board/' + item._id);
								}}
							>
								{item.title}
							</MenuItem>
						);
					})}
				</Menu>
			)}
		</div>
	);
}

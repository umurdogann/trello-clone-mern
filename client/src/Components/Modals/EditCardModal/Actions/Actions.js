import React from 'react';
import { Container, Title } from './styled';
import Button from '../ReUsableComponents/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CopyIcon from '@mui/icons-material/ContentCopy';
import WatchIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlineOutlined';
const Actions = () => {
	return (
		<Container>
			<Title>Actions</Title>
			<Button title='Move' icon={<ArrowForwardIcon fontSize='1rem' />}></Button>
			<Button title='Copy' icon={<CopyIcon fontSize='small' />}></Button>
			<Button title='Watch' icon={<WatchIcon fontSize='small' />}></Button>
			<Button title='Delete' icon={<DeleteIcon fontSize='small' />}></Button>
		</Container>
	);
};

export default Actions;

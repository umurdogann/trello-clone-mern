import React, { useEffect, useRef, useState } from 'react';
import * as style from './styled';
import AddIcon from '@mui/icons-material/Add';
import BottomButtonGroup from '../BottomButtonGroup/BottomButtonGroup';
import { TextSpan } from '../../CommonStyled';
import { useDispatch } from 'react-redux';
import { createList } from '../../../../../Services/boardService';

const AddList = (props) => {
	const dispatch = useDispatch();
	const [addList, setAddList] = useState(false);
	const [title, setTitle] = useState('');
	const ref = useRef();

	useEffect(() => {
		if(addList)
		ref.current.focus();
	}, [addList]);

	const handleCloseClick = () => {
		setAddList(false);
		setTitle('');
	};

	const handleAddClick = () => {
		setAddList(false);
		createList(title, props.boardId, dispatch);
		setTitle('');
	};

	return (
		<>
			<style.AddAnotherListContainer>
				<style.AddAnotherListButton show={addList} onClick={() => setAddList(true)}>
					<AddIcon />
					<TextSpan>Add another List</TextSpan>
				</style.AddAnotherListButton>
				<style.AddListContainer show={addList}>
					<style.AddListWrapper>
						<style.ListTitleInput
							ref={ref}
							placeholder='Enter list title'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
						<BottomButtonGroup
							title='Add list'
							clickCallback={handleAddClick}
							closeCallback={handleCloseClick}
						/>
					</style.AddListWrapper>
				</style.AddListContainer>
			</style.AddAnotherListContainer>
		</>
	);
};

export default AddList;

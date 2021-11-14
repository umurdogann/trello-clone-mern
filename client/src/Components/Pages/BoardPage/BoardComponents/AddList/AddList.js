import React, { useState } from 'react';
import * as style from './styled';
import AddIcon from '@mui/icons-material/Add';
import BottomButtonGroup from '../BottomButtonGroup/BottomButtonGroup';
import { TextSpan } from '../../CommonStyled';

const AddList = (prop) => {
	const [addList, setAddList] = useState(false);

	const handleCloseClick = () => {
		setAddList(false);
	};

	const handleAddClick = () => {
		setAddList(false);
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
						<style.ListTitleInput placeholder='Enter list title' />
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

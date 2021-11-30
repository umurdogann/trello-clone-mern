import axios from 'axios';
import { setLoading, successCreatingList, successDeletingList, successFetchingLists, updateListTitle } from '../Redux/Slices/listSlice';
import { openAlert } from '../Redux/Slices/alertSlice';

const listRoute = 'http://localhost:3001/list';

export const getLists = async (boardId, dispatch) => {
	dispatch(setLoading(true));
	try {
		const res = await axios.get(listRoute + '/' + boardId);
		dispatch(successFetchingLists(res.data));
		setTimeout(() => {
			dispatch(setLoading(false));
		}, 1000);
	} catch (error) {
		dispatch(setLoading(false));
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const createList = async (title, boardId, dispatch) => {
	dispatch(setLoading(true));
	try {
		const res = await axios.post(listRoute + '/create', {title:title, boardId:boardId});
		dispatch(successCreatingList(res.data));
		dispatch(setLoading(false));
	} catch (error) {
		dispatch(setLoading(false));
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}


};

export const DeleteList = async(listId,boardId,dispatch)=>{
	dispatch(setLoading(true));
	try {
		await axios.delete(listRoute + "/"+boardId+"/"+listId);
		await dispatch(successDeletingList(listId));
		dispatch(setLoading(false));
	} catch (error) {
		dispatch(setLoading(false));
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
}

export const listTitleUpdate = async(listId,boardId,title,dispatch)=>{	
	try {
		await dispatch(updateListTitle({listId:listId, title:title}));
		await axios.put(listRoute + "/"+boardId+"/"+listId + '/update-title',{title:title});		
	} catch (error) {		
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
}


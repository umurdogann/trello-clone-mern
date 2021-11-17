import axios from 'axios';
import { setLoading, successCreatingList, successDeletingList, successFetchingLists } from '../Redux/Slices/listSlice';
import { openAlert } from '../Redux/Slices/alertSlice';

const listRoute = 'http://localhost:3001/list';
const boardRoute = 'httpallList://localhost:3001/board';

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
		dispatch(successDeletingList(listId));
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

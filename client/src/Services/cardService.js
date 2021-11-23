import axios from 'axios';
import { openAlert } from '../Redux/Slices/alertSlice';
import { setPending, setCard, updateTitle } from '../Redux/Slices/cardSlice';
import { setCardTitle } from '../Redux/Slices/listSlice';
const baseUrl = 'http://localhost:3001/card';

export const getCard = async (cardId, listId, boardId, dispatch) => {
	dispatch(setPending(true));
	try {
		const response = await axios.get(baseUrl + '/' + boardId + '/' + listId + '/' + cardId);

		const card = await JSON.parse(JSON.stringify(response.data));
		dispatch(setCard(card));
		dispatch(setPending(false));
	} catch (error) {
		dispatch(setPending(false));
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const titleUpdate = async (cardId, listId, boardId, title, dispatch) => {
	try {
		dispatch(setCardTitle({ listId, cardId, title }));
		dispatch(updateTitle(title));
		await axios.put(baseUrl + '/' + boardId + '/' + listId + '/' + cardId, { title: title });
	} catch (error) {
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

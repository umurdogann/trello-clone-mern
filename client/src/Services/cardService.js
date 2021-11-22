import axios from 'axios';
import { openAlert } from '../Redux/Slices/alertSlice';
import { setPending, setCard } from '../Redux/Slices/cardSlice';

const baseUrl = 'http://localhost:3001/card';

export const getCard = async (cardId, listId, boardId, dispatch) => {
	dispatch(setPending(true));
	try {
		const response = await axios.get(baseUrl + '/' + boardId + '/' + listId + '/' + cardId);
        
        const card = await JSON.parse(JSON.stringify(response.data));
        console.log(card);
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
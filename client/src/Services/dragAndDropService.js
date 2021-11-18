import axios from 'axios';
import { updateCardDragDrop, updateListDragDrop } from '../Redux/Slices/listSlice';
import { openAlert } from '../Redux/Slices/alertSlice';

const baseUrl = 'http://localhost:3001/list';

//  Create promise to queue requests
let submitCall = Promise.resolve();

export const updateCardOrder = async (props, dispatch) => {
	// SavedList stores the allLists before manupulating because...
	// if the request will be failed, we need to restore allLists...
	// because of consistency between server and client.
	let savedList = JSON.parse(JSON.stringify(props.allLists));

	// Manupulate redux states first
	let tempList = JSON.parse(JSON.stringify(props.allLists));
	let cardItem = props.allLists
		.filter((list) => list._id === props.sourceId)[0]
		.cards.filter((card) => card._id === props.cardId)[0];
	if (props.sourceId === props.destinationId) {
		tempList = tempList.map((list) => {
			if (list._id === props.sourceId) {
				list.cards.splice(props.sourceIndex, 1);
				list.cards.splice(props.destinationIndex, 0, cardItem);
			}
			return list;
		});
	} else {
		tempList = tempList.map((list) => {
			if (list._id === props.sourceId) list.cards.splice(props.sourceIndex, 1);
			return list;
		});

		tempList = tempList.map((list) => {
			if (list._id === props.destinationId) {
				let temp = Array.from(list.cards);
				if (!temp) {
					temp = [cardItem];
				} else {
					temp.splice(props.destinationIndex, 0, cardItem);
					list.cards = temp;
				}
			}
			return list;
		});
	}
	await dispatch(updateCardDragDrop(tempList));

	// Server side requests

	submitCall = submitCall.then(() =>
		axios.post(baseUrl + '/change-card-order', {
			boardId: props.boardId,
			sourceId: props.sourceId,
			destinationId: props.destinationId,
			destinationIndex: props.destinationIndex,
			cardId: props.cardId,
		})
	);
	try {
		await submitCall;
	} catch (error) {
		await dispatch(updateCardDragDrop(savedList));
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const updateListOrder = async (props, dispatch) => {
	// savedOrder stores the lists order in the board before manupulating because...
	// if the request will be failed, we need to restore order...
	// because of consistency between server and client.
	let savedOrder = JSON.parse(JSON.stringify(props.allLists));

	// Manupulate the redux state first, we don't want to make the user wait because of the response time
	let tempList = JSON.parse(JSON.stringify(props.allLists));
	let list = props.allLists.filter((item) => item._id === props.listId)[0];
	tempList.splice(props.sourceIndex, 1);
	tempList.splice(props.destinationIndex, 0, list);

	await dispatch(updateListDragDrop(tempList));

	// Server side requests
	submitCall = submitCall.then(() =>
		axios.post(baseUrl + '/change-list-order', {
			boardId: props.boardId,
			sourceIndex: props.sourceIndex,
			destinationIndex: props.destinationIndex,
			listId: props.listId,
		})
	);
	try {
		await submitCall;
	} catch (error) {
		await dispatch(updateCardDragDrop(savedOrder));
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

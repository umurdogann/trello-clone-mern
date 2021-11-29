import axios from 'axios';
import { openAlert } from '../Redux/Slices/alertSlice';
import {
	setPending,
	setCard,
	updateTitle,
	updateDescription,
	addComment,
	updateComment,
	deleteComment,
	addMember,
	deleteMember,
	createLabel,
	updateLabel,
	deleteLabel,
	updateLabelSelection,
	updateCreatedLabelId,
	createChecklist,
	updateCreatedChecklist,
	deleteChecklist,
	addChecklistItem,
	updateAddedChecklistItemId,
	setChecklistItemCompleted,
	deleteChecklistItem,
	setChecklistItemText,
	updateStartDueDates,
	updateDateCompleted,
} from '../Redux/Slices/cardSlice';
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

export const descriptionUpdate = async (cardId, listId, boardId, description, dispatch) => {
	try {
		dispatch(updateDescription(description));
		await axios.put(baseUrl + '/' + boardId + '/' + listId + '/' + cardId, { description: description });
	} catch (error) {
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const comment = async (cardId, listId, boardId, text, userName, dispatch) => {
	try {
		dispatch(setPending(true));
		const response = await axios.post(baseUrl + '/' + boardId + '/' + listId + '/' + cardId + '/add-comment', {
			text: text,
		});
		dispatch(addComment(response.data));
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

export const commentUpdate = async (cardId, listId, boardId, text, commentId, dispatch) => {
	try {
		dispatch(updateComment(commentId, text));
		await axios.put(baseUrl + '/' + boardId + '/' + listId + '/' + cardId + '/' + commentId, {
			text: text,
		});
	} catch (error) {
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const commentDelete = async (cardId, listId, boardId, commentId, dispatch) => {
	try {
		dispatch(deleteComment(commentId));
		await axios.delete(baseUrl + '/' + boardId + '/' + listId + '/' + cardId + '/' + commentId);
	} catch (error) {
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const memberAdd = async (cardId, listId, boardId, memberId, memberName, dispatch) => {
	try {
		dispatch(addMember({ memberId, memberName }));
		await axios.post(baseUrl + '/' + boardId + '/' + listId + '/' + cardId + '/add-member', {
			memberId: memberId,
		});
	} catch (error) {
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const memberDelete = async (cardId, listId, boardId, memberId, memberName, dispatch) => {
	try {
		dispatch(deleteMember({ memberId }));
		await axios.delete(baseUrl + '/' + boardId + '/' + listId + '/' + cardId + '/' + memberId + '/delete-member');
	} catch (error) {
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const labelCreate = async (cardId, listId, boardId, text, color, backColor, dispatch) => {
	try {
		dispatch(createLabel({ _id: 'notUpdated', text, color, backColor, selected: true }));
		const response = await axios.post(baseUrl + '/' + boardId + '/' + listId + '/' + cardId + '/create-label', {
			text,
			color,
			backColor,
		});
		dispatch(updateCreatedLabelId(response.data.labelId));
	} catch (error) {
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const labelUpdate = async (cardId, listId, boardId, labelId, label, dispatch) => {
	try {
		dispatch(updateLabel({ labelId: labelId, text: label.text, color: label.color, backColor: label.backColor }));
		await axios.put(baseUrl + '/' + boardId + '/' + listId + '/' + cardId + '/' + labelId + '/update-label', label);
	} catch (error) {
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const labelDelete = async (cardId, listId, boardId, labelId, dispatch) => {
	try {
		dispatch(deleteLabel(labelId));
		await axios.delete(baseUrl + '/' + boardId + '/' + listId + '/' + cardId + '/' + labelId + '/delete-label');
	} catch (error) {
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const labelUpdateSelection = async (cardId, listId, boardId, labelId, selected, dispatch) => {
	try {
		dispatch(updateLabelSelection({ labelId: labelId, selected: selected }));
		await axios.put(
			baseUrl + '/' + boardId + '/' + listId + '/' + cardId + '/' + labelId + '/update-label-selection',
			{ selected: selected }
		);
	} catch (error) {
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const checklistCreate = async (cardId, listId, boardId, title, dispatch) => {
	try {
		dispatch(createChecklist({ _id: 'notUpdated', title }));
		const response = await axios.post(baseUrl + '/' + boardId + '/' + listId + '/' + cardId + '/create-checklist', {
			title,
		});
		dispatch(updateCreatedChecklist(response.data.checklistId));
	} catch (error) {
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const checklistDelete = async (cardId, listId, boardId, checklistId, dispatch) => {
	try {
		dispatch(deleteChecklist(checklistId));
		await axios.delete(
			baseUrl + '/' + boardId + '/' + listId + '/' + cardId + '/' + checklistId + '/delete-checklist'
		);
	} catch (error) {
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const checklistItemAdd = async (cardId, listId, boardId, checklistId, text, dispatch) => {
	try {
		dispatch(addChecklistItem({ checklistId: checklistId, _id: 'notUpdated', text: text }));
		const response = await axios.post(
			baseUrl + '/' + boardId + '/' + listId + '/' + cardId + '/' + checklistId + '/add-checklist-item',
			{
				text,
			}
		);
		dispatch(
			updateAddedChecklistItemId({ checklistId: checklistId, checklistItemId: response.data.checklistItemId })
		);
	} catch (error) {
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const checklistItemCompletedSet = async (
	cardId,
	listId,
	boardId,
	checklistId,
	checklistItemId,
	completed,
	dispatch
) => {
	try {
		dispatch(
			setChecklistItemCompleted({
				checklistId: checklistId,
				checklistItemId: checklistItemId,
				completed: completed,
			})
		);
		await axios.put(
			baseUrl +
				'/' +
				boardId +
				'/' +
				listId +
				'/' +
				cardId +
				'/' +
				checklistId +
				'/' +
				checklistItemId +
				'/set-checklist-item-completed',
			{
				completed,
			}
		);
	} catch (error) {
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const checklistItemTextSet = async (cardId, listId, boardId, checklistId, checklistItemId, text, dispatch) => {
	try {
		dispatch(setChecklistItemText({ checklistId: checklistId, checklistItemId: checklistItemId, text: text }));
		await axios.put(
			baseUrl +
				'/' +
				boardId +
				'/' +
				listId +
				'/' +
				cardId +
				'/' +
				checklistId +
				'/' +
				checklistItemId +
				'/set-checklist-item-text',
			{
				text,
			}
		);
	} catch (error) {
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const checklistItemDelete = async (cardId, listId, boardId, checklistId, checklistItemId, dispatch) => {
	try {
		dispatch(deleteChecklistItem({ checklistId: checklistId, checklistItemId: checklistItemId }));
		await axios.delete(
			baseUrl +
				'/' +
				boardId +
				'/' +
				listId +
				'/' +
				cardId +
				'/' +
				checklistId +
				'/' +
				checklistItemId +
				'/delete-checklist-item'
		);
	} catch (error) {
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const startDueDatesUpdate = async (cardId, listId, boardId, startDate, dueDate, dueTime, dispatch) => {
	try {
		dispatch(updateStartDueDates({ startDate,dueDate,dueTime }));
		await axios.put(
			baseUrl + '/' + boardId + '/' + listId + '/' + cardId + '/update-dates',
			{ startDate, dueDate,dueTime }
		);
	} catch (error) {
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const dateCompletedUpdate = async (cardId, listId, boardId, completed, dispatch) => {
	try {
		dispatch(updateDateCompleted(completed));
		await axios.put(
			baseUrl + '/' + boardId + '/' + listId + '/' + cardId + '/update-date-completed',
			{ completed}
		);
	} catch (error) {
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};


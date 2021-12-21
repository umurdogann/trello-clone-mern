const cardModel = require('../Models/cardModel');
const listModel = require('../Models/listModel');
const boardModel = require('../Models/boardModel');
const userModel = require('../Models/userModel');
const helperMethods = require('./helperMethods');

const create = async (title, listId, boardId, user, callback) => {
	try {
		// Get list and board
		const list = await listModel.findById(listId);
		const board = await boardModel.findById(boardId);

		// Validate the ownership
		const validate = await helperMethods.validateCardOwners(null, list, board, user, true);
		if (!validate) return callback({ errMessage: 'You dont have permission to add card to this list or board' });

		// Create new card
		const card = await cardModel({ title: title });
		card.owner = listId;
		card.activities.unshift({ text: `added this card to ${list.title}`, userName: user.name, color: user.color });
		card.labels = helperMethods.labelsSeed;
		await card.save();

		// Add id of the new card to owner list
		list.cards.push(card._id);
		await list.save();

		// Add log to board activity
		board.activity.unshift({
			user: user._id,
			name: user.name,
			action: `added ${card.title} to this board`,
			color: user.color,
		});
		await board.save();

		// Set data transfer object
		const result = await listModel.findById(listId).populate({ path: 'cards' }).exec();
		return callback(false, result);
	} catch (error) {
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

const deleteById = async (cardId, listId, boardId, user, callback) => {
	try {
		// Get models
		const card = await cardModel.findById(cardId);
		const list = await listModel.findById(listId);
		const board = await boardModel.findById(boardId);

		// Validate owner
		const validate = await helperMethods.validateCardOwners(card, list, board, user, false);
		if (!validate) {
			errMessage: 'You dont have permission to update this card';
		}

		// Delete the card
		const result = await cardModel.findByIdAndDelete(cardId);

		// Delete the list from lists of board
		list.cards = list.cards.filter((tempCard) => tempCard.toString() !== cardId);
		await list.save();

		// Add activity log to board
		board.activity.unshift({
			user: user._id,
			name: user.name,
			action: `deleted ${result.title} from ${list.title}`,
			color: user.color,
		});
		await board.save();

		return callback(false, { message: 'Success' });
	} catch (error) {
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

const getCard = async (cardId, listId, boardId, user, callback) => {
	try {
		// Get models
		const card = await cardModel.findById(cardId);
		const list = await listModel.findById(listId);
		const board = await boardModel.findById(boardId);

		// Validate owner
		const validate = await helperMethods.validateCardOwners(card, list, board, user, false);
		if (!validate) {
			errMessage: 'You dont have permission to update this card';
		}

		let returnObject = { ...card._doc, listTitle: list.title, listId: listId, boardId: boardId };

		return callback(false, returnObject);
	} catch (error) {
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

const update = async (cardId, listId, boardId, user, updatedObj, callback) => {
	try {
		// Get models
		const card = await cardModel.findById(cardId);
		const list = await listModel.findById(listId);
		const board = await boardModel.findById(boardId);

		// Validate owner
		const validate = await helperMethods.validateCardOwners(card, list, board, user, false);
		if (!validate) {
			errMessage: 'You dont have permission to update this card';
		}

		//Update card
		await card.updateOne(updatedObj);
		await card.save();

		return callback(false, { message: 'Success!' });
	} catch (error) {
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

const addComment = async (cardId, listId, boardId, user, body, callback) => {
	try {
		// Get models
		const card = await cardModel.findById(cardId);
		const list = await listModel.findById(listId);
		const board = await boardModel.findById(boardId);

		// Validate owner
		const validate = await helperMethods.validateCardOwners(card, list, board, user, false);
		if (!validate) {
			errMessage: 'You dont have permission to update this card';
		}

		//Add comment
		card.activities.unshift({
			text: body.text,
			userName: user.name,
			isComment: true,
			color: user.color,
		});
		await card.save();

		//Add comment to board activity
		board.activity.unshift({
			user: user._id,
			name: user.name,
			action: body.text,
			actionType: 'comment',
			cardTitle: card.title,
			color: user.color,
		});
		board.save();

		return callback(false, card.activities);
	} catch (error) {
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

const updateComment = async (cardId, listId, boardId, commentId, user, body, callback) => {
	try {
		// Get models
		const card = await cardModel.findById(cardId);
		const list = await listModel.findById(listId);
		const board = await boardModel.findById(boardId);

		// Validate owner
		const validate = await helperMethods.validateCardOwners(card, list, board, user, false);
		if (!validate) {
			errMessage: 'You dont have permission to update this card';
		}

		//Update card
		card.activities = card.activities.map((activity) => {
			if (activity._id.toString() === commentId.toString()) {
				if (activity.userName !== user.name) {
					return callback({ errMessage: "You can not edit the comment that you hasn't" });
				}
				activity.text = body.text;
			}
			return activity;
		});
		await card.save();

		//Add to board activity
		board.activity.unshift({
			user: user._id,
			name: user.name,
			action: body.text,
			actionType: 'comment',
			edited: true,
			color: user.color,
			cardTitle: card.title,
		});
		board.save();

		return callback(false, { message: 'Success!' });
	} catch (error) {
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

const deleteComment = async (cardId, listId, boardId, commentId, user, callback) => {
	try {
		// Get models
		const card = await cardModel.findById(cardId);
		const list = await listModel.findById(listId);
		const board = await boardModel.findById(boardId);

		// Validate owner
		const validate = await helperMethods.validateCardOwners(card, list, board, user, false);
		if (!validate) {
			errMessage: 'You dont have permission to update this card';
		}

		//Delete card
		card.activities = card.activities.filter((activity) => activity._id.toString() !== commentId.toString());
		await card.save();

		//Add to board activity
		board.activity.unshift({
			user: user._id,
			name: user.name,
			action: `deleted his/her own comment from ${card.title}`,
			color: user.color,
		});
		board.save();

		return callback(false, { message: 'Success!' });
	} catch (error) {
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

const addMember = async (cardId, listId, boardId, user, memberId, callback) => {
	try {
		// Get models
		const card = await cardModel.findById(cardId);
		const list = await listModel.findById(listId);
		const board = await boardModel.findById(boardId);
		const member = await userModel.findById(memberId);

		// Validate owner
		const validate = await helperMethods.validateCardOwners(card, list, board, user, false);
		if (!validate) {
			errMessage: 'You dont have permission to add member this card';
		}

		//Add member
		card.members.unshift({
			user: member._id,
			name: member.name,
			color: member.color,
		});
		await card.save();

		//Add to board activity
		board.activity.unshift({
			user: user._id,
			name: user.name,
			action: `added '${member.name}' to ${card.title}`,
			color: user.color,
		});
		board.save();

		return callback(false, { message: 'success' });
	} catch (error) {
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

const deleteMember = async (cardId, listId, boardId, user, memberId, callback) => {
	try {
		// Get models
		const card = await cardModel.findById(cardId);
		const list = await listModel.findById(listId);
		const board = await boardModel.findById(boardId);

		// Validate owner
		const validate = await helperMethods.validateCardOwners(card, list, board, user, false);
		if (!validate) {
			errMessage: 'You dont have permission to add member this card';
		}

		//delete member
		card.members = card.members.filter((a) => a.user.toString() !== memberId.toString());
		await card.save();

		//get member
		const tempMember = await userModel.findById(memberId);

		//Add to board activity
		board.activity.unshift({
			user: user._id,
			name: user.name,
			action:
				tempMember.name === user.name
					? `left ${card.title}`
					: `removed '${tempMember.name}' from ${card.title}`,
			color: user.color,
		});
		board.save();

		return callback(false, { message: 'success' });
	} catch (error) {
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

const createLabel = async (cardId, listId, boardId, user, label, callback) => {
	try {
		// Get models
		const card = await cardModel.findById(cardId);
		const list = await listModel.findById(listId);
		const board = await boardModel.findById(boardId);

		// Validate owner
		const validate = await helperMethods.validateCardOwners(card, list, board, user, false);
		if (!validate) {
			errMessage: 'You dont have permission to add label this card';
		}

		//Add label
		card.labels.unshift({
			text: label.text,
			color: label.color,
			backcolor: label.backColor,
			selected: true,
		});
		await card.save();

		const labelId = card.labels[0]._id;

		return callback(false, { labelId: labelId });
	} catch (error) {
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

const updateLabel = async (cardId, listId, boardId, labelId, user, label, callback) => {
	try {
		// Get models
		const card = await cardModel.findById(cardId);
		const list = await listModel.findById(listId);
		const board = await boardModel.findById(boardId);

		// Validate owner
		const validate = await helperMethods.validateCardOwners(card, list, board, user, false);
		if (!validate) {
			errMessage: 'You dont have permission to update this card';
		}

		//Update label
		card.labels = card.labels.map((item) => {
			if (item._id.toString() === labelId.toString()) {
				item.text = label.text;
				item.color = label.color;
				item.backColor = label.backColor;
			}
			return item;
		});
		await card.save();

		return callback(false, { message: 'Success!' });
	} catch (error) {
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

const deleteLabel = async (cardId, listId, boardId, labelId, user, callback) => {
	try {
		// Get models
		const card = await cardModel.findById(cardId);
		const list = await listModel.findById(listId);
		const board = await boardModel.findById(boardId);

		// Validate owner
		const validate = await helperMethods.validateCardOwners(card, list, board, user, false);
		if (!validate) {
			errMessage: 'You dont have permission to delete this label';
		}

		//Delete label
		card.labels = card.labels.filter((label) => label._id.toString() !== labelId.toString());
		await card.save();

		return callback(false, { message: 'Success!' });
	} catch (error) {
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

const updateLabelSelection = async (cardId, listId, boardId, labelId, user, selected, callback) => {
	try {
		// Get models
		const card = await cardModel.findById(cardId);
		const list = await listModel.findById(listId);
		const board = await boardModel.findById(boardId);

		// Validate owner
		const validate = await helperMethods.validateCardOwners(card, list, board, user, false);
		if (!validate) {
			errMessage: 'You dont have permission to update this card';
		}

		//Update label
		card.labels = card.labels.map((item) => {
			if (item._id.toString() === labelId.toString()) {
				item.selected = selected;
			}
			return item;
		});
		await card.save();

		return callback(false, { message: 'Success!' });
	} catch (error) {
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

const createChecklist = async (cardId, listId, boardId, user, title, callback) => {
	try {
		// Get models
		const card = await cardModel.findById(cardId);
		const list = await listModel.findById(listId);
		const board = await boardModel.findById(boardId);

		// Validate owner
		const validate = await helperMethods.validateCardOwners(card, list, board, user, false);
		if (!validate) {
			errMessage: 'You dont have permission to add Checklist this card';
		}

		//Add checklist
		card.checklists.push({
			title: title,
		});
		await card.save();

		const checklistId = card.checklists[card.checklists.length - 1]._id;

		//Add to board activity
		board.activity.unshift({
			user: user._id,
			name: user.name,
			action: `added '${title}' to ${card.title}`,
			color: user.color,
		});
		board.save();

		return callback(false, { checklistId: checklistId });
	} catch (error) {
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

const deleteChecklist = async (cardId, listId, boardId, checklistId, user, callback) => {
	try {
		// Get models
		const card = await cardModel.findById(cardId);
		const list = await listModel.findById(listId);
		const board = await boardModel.findById(boardId);

		// Validate owner
		const validate = await helperMethods.validateCardOwners(card, list, board, user, false);
		if (!validate) {
			errMessage: 'You dont have permission to delete this checklist';
		}
		let cl = card.checklists.filter((l) => l._id.toString() === checklistId.toString());
		//Delete checklist
		card.checklists = card.checklists.filter((list) => list._id.toString() !== checklistId.toString());
		await card.save();

		//Add to board activity
		board.activity.unshift({
			user: user._id,
			name: user.name,
			action: `removed '${cl.title}' from ${card.title}`,
			color: user.color,
		});
		board.save();

		return callback(false, { message: 'Success!' });
	} catch (error) {
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

const addChecklistItem = async (cardId, listId, boardId, user, checklistId, text, callback) => {
	try {
		// Get models
		const card = await cardModel.findById(cardId);
		const list = await listModel.findById(listId);
		const board = await boardModel.findById(boardId);

		// Validate owner
		const validate = await helperMethods.validateCardOwners(card, list, board, user, false);
		if (!validate) {
			errMessage: 'You dont have permission to add item this checklist';
		}

		//Add checklistItem
		card.checklists = card.checklists.map((list) => {
			if (list._id.toString() == checklistId.toString()) {
				list.items.push({ text: text });
			}
			return list;
		});
		await card.save();

		// Get to created ChecklistItem's id
		let checklistItemId = '';
		card.checklists = card.checklists.map((list) => {
			if (list._id.toString() == checklistId.toString()) {
				checklistItemId = list.items[list.items.length - 1]._id;
			}
			return list;
		});
		return callback(false, { checklistItemId: checklistItemId });
	} catch (error) {
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

const setChecklistItemCompleted = async (
	cardId,
	listId,
	boardId,
	user,
	checklistId,
	checklistItemId,
	completed,
	callback
) => {
	try {
		// Get models
		const card = await cardModel.findById(cardId);
		const list = await listModel.findById(listId);
		const board = await boardModel.findById(boardId);

		// Validate owner
		const validate = await helperMethods.validateCardOwners(card, list, board, user, false);
		if (!validate) {
			errMessage: 'You dont have permission to set complete of this checklist item';
		}
		let clItem = '';
		//Update completed of checklistItem
		card.checklists = card.checklists.map((list) => {
			if (list._id.toString() == checklistId.toString()) {
				list.items = list.items.map((item) => {
					if (item._id.toString() === checklistItemId) {
						item.completed = completed;
						clItem = item.text;
					}
					return item;
				});
			}
			return list;
		});
		await card.save();

		//Add to board activity
		board.activity.unshift({
			user: user._id,
			name: user.name,
			action: completed
				? `completed '${clItem}' on ${card.title}`
				: `marked as uncompleted to '${clItem}' on ${card.title}`,
			color: user.color,
		});
		board.save();

		return callback(false, { message: 'Success!' });
	} catch (error) {
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

const setChecklistItemText = async (cardId, listId, boardId, user, checklistId, checklistItemId, text, callback) => {
	try {
		// Get models
		const card = await cardModel.findById(cardId);
		const list = await listModel.findById(listId);
		const board = await boardModel.findById(boardId);

		// Validate owner
		const validate = await helperMethods.validateCardOwners(card, list, board, user, false);
		if (!validate) {
			errMessage: 'You dont have permission to set text of this checklist item';
		}

		//Update text of checklistItem
		card.checklists = card.checklists.map((list) => {
			if (list._id.toString() == checklistId.toString()) {
				list.items = list.items.map((item) => {
					if (item._id.toString() === checklistItemId) {
						item.text = text;
					}
					return item;
				});
			}
			return list;
		});
		await card.save();
		return callback(false, { message: 'Success!' });
	} catch (error) {
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

const deleteChecklistItem = async (cardId, listId, boardId, user, checklistId, checklistItemId, callback) => {
	try {
		// Get models
		const card = await cardModel.findById(cardId);
		const list = await listModel.findById(listId);
		const board = await boardModel.findById(boardId);

		// Validate owner
		const validate = await helperMethods.validateCardOwners(card, list, board, user, false);
		if (!validate) {
			errMessage: 'You dont have permission to delete this checklist item';
		}

		//Delete checklistItem
		card.checklists = card.checklists.map((list) => {
			if (list._id.toString() == checklistId.toString()) {
				list.items = list.items.filter((item) => item._id.toString() !== checklistItemId);
			}
			return list;
		});
		await card.save();
		return callback(false, { message: 'Success!' });
	} catch (error) {
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

const updateStartDueDates = async (cardId, listId, boardId, user, startDate, dueDate, dueTime, callback) => {
	try {
		// Get models
		const card = await cardModel.findById(cardId);
		const list = await listModel.findById(listId);
		const board = await boardModel.findById(boardId);

		// Validate owner
		const validate = await helperMethods.validateCardOwners(card, list, board, user, false);
		if (!validate) {
			errMessage: 'You dont have permission to update date of this card';
		}

		//Update dates
		card.date.startDate = startDate;
		card.date.dueDate = dueDate;
		card.date.dueTime = dueTime;
		if (dueDate === null) card.date.completed = false;
		await card.save();
		return callback(false, { message: 'Success!' });
	} catch (error) {
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

const updateDateCompleted = async (cardId, listId, boardId, user, completed, callback) => {
	try {
		// Get models
		const card = await cardModel.findById(cardId);
		const list = await listModel.findById(listId);
		const board = await boardModel.findById(boardId);

		// Validate owner
		const validate = await helperMethods.validateCardOwners(card, list, board, user, false);
		if (!validate) {
			errMessage: 'You dont have permission to update date of this card';
		}

		//Update date completed event
		card.date.completed = completed;

		await card.save();

		//Add to board activity
		board.activity.unshift({
			user: user._id,
			name: user.name,
			action: `marked the due date on ${card.title} ${completed ? 'complete' : 'uncomplete'}`,
			color: user.color,
		});
		board.save();

		return callback(false, { message: 'Success!' });
	} catch (error) {
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

const addAttachment = async (cardId, listId, boardId, user, link, name, callback) => {
	try {
		// Get models
		const card = await cardModel.findById(cardId);
		const list = await listModel.findById(listId);
		const board = await boardModel.findById(boardId);

		// Validate owner
		const validate = await helperMethods.validateCardOwners(card, list, board, user, false);
		if (!validate) {
			errMessage: 'You dont have permission to update date of this card';
		}

		//Add attachment
		const validLink = new RegExp(/^https?:\/\//).test(link) ? link : 'http://' + link;

		card.attachments.push({ link: validLink, name: name });
		await card.save();

		//Add to board activity
		board.activity.unshift({
			user: user._id,
			name: user.name,
			action: `attached ${validLink} to ${card.title}`,
			color: user.color,
		});
		board.save();

		return callback(false, { attachmentId: card.attachments[card.attachments.length - 1]._id.toString() });
	} catch (error) {
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

const deleteAttachment = async (cardId, listId, boardId, user, attachmentId, callback) => {
	try {
		// Get models
		const card = await cardModel.findById(cardId);
		const list = await listModel.findById(listId);
		const board = await boardModel.findById(boardId);

		// Validate owner
		const validate = await helperMethods.validateCardOwners(card, list, board, user, false);
		if (!validate) {
			errMessage: 'You dont have permission to delete this attachment';
		}

		let attachmentObj = card.attachments.filter(
			(attachment) => attachment._id.toString() === attachmentId.toString()
		);

		//Delete checklistItem
		card.attachments = card.attachments.filter(
			(attachment) => attachment._id.toString() !== attachmentId.toString()
		);
		await card.save();

		//Add to board activity
		board.activity.unshift({
			user: user._id,
			name: user.name,
			action: `deleted the ${attachmentObj[0].link} attachment from ${card.title}`,
			color: user.color,
		});
		board.save();

		return callback(false, { message: 'Success!' });
	} catch (error) {
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

const updateAttachment = async (cardId, listId, boardId, user, attachmentId, link, name, callback) => {
	try {
		// Get models
		const card = await cardModel.findById(cardId);
		const list = await listModel.findById(listId);
		const board = await boardModel.findById(boardId);

		// Validate owner
		const validate = await helperMethods.validateCardOwners(card, list, board, user, false);
		if (!validate) {
			errMessage: 'You dont have permission to update attachment of this card';
		}

		//Update date completed event
		card.attachments = card.attachments.map((attachment) => {
			if (attachment._id.toString() === attachmentId.toString()) {
				attachment.link = link;
				attachment.name = name;
			}
			return attachment;
		});

		await card.save();
		return callback(false, { message: 'Success!' });
	} catch (error) {
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

const updateCover = async (cardId, listId, boardId, user, color, isSizeOne, callback) => {
	try {
		// Get models
		const card = await cardModel.findById(cardId);
		const list = await listModel.findById(listId);
		const board = await boardModel.findById(boardId);

		// Validate owner
		const validate = await helperMethods.validateCardOwners(card, list, board, user, false);
		if (!validate) {
			errMessage: 'You dont have permission to update attachment of this card';
		}

		//Update date cover color
		card.cover.color = color;
		card.cover.isSizeOne = isSizeOne;

		await card.save();
		return callback(false, { message: 'Success!' });
	} catch (error) {
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

module.exports = {
	create,
	update,
	getCard,
	addComment,
	deleteById,
	updateComment,
	deleteComment,
	addMember,
	deleteMember,
	createLabel,
	updateLabel,
	deleteLabel,
	updateLabelSelection,
	createChecklist,
	deleteChecklist,
	addChecklistItem,
	setChecklistItemCompleted,
	setChecklistItemText,
	deleteChecklistItem,
	updateStartDueDates,
	updateDateCompleted,
	addAttachment,
	deleteAttachment,
	updateAttachment,
	updateCover,
};

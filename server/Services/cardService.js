const cardModel = require('../Models/cardModel');
const listModel = require('../Models/listModel');
const boardModel = require('../Models/boardModel');
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
		await card.save();

		// Add id of the new card to owner list
		list.cards.push(card._id);
		await list.save();

		// Add log to board activity
		board.activity.unshift({
			action: `${user.name + ' ' + user.surname} added ${card.title} to this board`,
		});
		await board.save();

		// Set data transfer object
		const result = await listModel.findById(listId).populate({ path: 'cards', select: 'title' }).exec();
		return callback(false, result);
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

		return callback(false, card);
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
		await card.update(updatedObj);
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
};

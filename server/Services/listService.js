const listModel = require('../Models/listModel');
const boardModel = require('../Models/boardModel');
const cardModel = require('../Models/cardModel');

const create = async (model, user, callback) => {
	try {
		// Create new List
		const tempList = await listModel(model);

		// Save the new List
		const newList = await tempList.save();

		// Get owner board
		const ownerBoard = await boardModel.findById(model.owner);

		// Add newList's id to owner board
		ownerBoard.lists.push(newList.id);

		// Add created activity to owner board activities
		ownerBoard.activity.unshift({
			user: user._id,
			name: user.name,
			action: `added ${newList.title} to this board`,
			color: user.color,
		});

		// Save changes
		ownerBoard.save();

		// Return new list
		return callback(false, newList);
	} catch (error) {
		// Return error message
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

const getAll = async (boardId, callback) => {
	try {
		//get lists whose owner id equals to boardId param
		let lists = await listModel
			.find({ owner: { $in: boardId } })
			.populate({ path: 'cards' }) /* { path: 'cards', select: 'title' }) */
			.exec();

		// Order the lists
		const board = await boardModel.findById(boardId);
		let responseObject = board.lists.map((listId) => {
			return lists.filter((listObject) => listObject._id.toString() === listId.toString())[0];
		});

		return callback(false, responseObject);
	} catch (error) {
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

const deleteById = async (listId, boardId, user, callback) => {
	try {
		// Get board to check the parent of list is this board
		const board = await boardModel.findById(boardId);

		// Validate the parent of the list
		const validate = board.lists.filter((list) => list.id === listId);
		if (!validate) return callback({ errMessage: 'List or board informations are wrong' });

		// Validate whether the owner of the board is the user who sent the request.
		if (!user.boards.filter((board) => board === boardId))
			return callback({ errMessage: 'You cannot delete a list that does not hosted by your boards' });

		// Delete the list
		const result = await listModel.findByIdAndDelete(listId);

		// Delete the list from lists of board
		board.lists = board.lists.filter((list) => list.toString() !== listId);

		// Add activity log to board
		board.activity.unshift({
			user: user._id,
			name: user.name,
			action: `deleted ${result.title} from this board`,
			color: user.color,
		});
		board.save();

		// Delete all cars in the list
		await cardModel.deleteMany({ owner: listId });

		return callback(false, result);
	} catch (error) {
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

const updateCardOrder = async (boardId, sourceId, destinationId, destinationIndex, cardId, user, callback) => {
	try {
		// Validate the parent board of the lists
		const board = await boardModel.findById(boardId);
		let validate = board.lists.filter((list) => list.id === sourceId);
		const validate2 = board.lists.filter((list) => list.id === destinationId);
		if (!validate || !validate2) return callback({ errMessage: 'List or board informations are wrong' });

		// Validate the parent list of the card
		const sourceList = await listModel.findById(sourceId);
		validate = sourceList.cards.filter((card) => card._id.toString() === cardId);
		if (!validate) return callback({ errMessage: 'List or card informations are wrong' });

		// Remove the card from source list and save
		sourceList.cards = sourceList.cards.filter((card) => card._id.toString() !== cardId);
		await sourceList.save();

		// Insert the card to destination list and save
		const card = await cardModel.findById(cardId);
		const destinationList = await listModel.findById(destinationId);
		const temp = Array.from(destinationList.cards);
		temp.splice(destinationIndex, 0, cardId);
		destinationList.cards = temp;
		await destinationList.save();

		// Add card activity
		if (sourceId !== destinationId)
			card.activities.unshift({
				text: `moved this card from ${sourceList.title} to ${destinationList.title}`,
				userName: user.name,
				color: user.color,
			});

		// Change owner board of card
		card.owner = destinationId;
		await card.save();

		return callback(false, { message: 'Success' });
	} catch (error) {
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

const updateListOrder = async (boardId, sourceIndex, destinationIndex, listId, callback) => {
	try {
		// Validate the parent board of the lists
		const board = await boardModel.findById(boardId);
		let validate = board.lists.filter((list) => list.id === listId);

		if (!validate) return callback({ errMessage: 'List or board informations are wrong' });

		// Change list order
		board.lists.splice(sourceIndex, 1);
		board.lists.splice(destinationIndex, 0, listId);
		await board.save();

		return callback(false, { message: 'Success' });
	} catch (error) {
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

const updateListTitle = async (listId, boardId, user, title, callback) => {
	try {
		// Get board to check the parent of list is this board
		const board = await boardModel.findById(boardId);
		const list = await listModel.findById(listId.toString());
		// Validate the parent of the list
		const validate = board.lists.filter((list) => list.id === listId);
		if (!validate) return callback({ errMessage: 'List or board informations are wrong' });

		// Validate whether the owner of the board is the user who sent the request.
		if (!user.boards.filter((board) => board === boardId))
			return callback({ errMessage: 'You cannot delete a list that does not hosted by your boards' });

		// Change title of list
		list.title = title;
		await list.save();

		return callback(false, { message: 'Success' });
	} catch (error) {
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

module.exports = {
	create,
	getAll,
	deleteById,
	updateCardOrder,
	updateListOrder,
	updateListTitle,
};

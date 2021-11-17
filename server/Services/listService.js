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
			action: `${user.name + ' ' + user.surname} added ${newList.title} to this board`,
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
		const lists = await listModel
			.find({ owner: { $in: boardId } })
			.populate({ path: 'cards', select: 'title' })
			.exec();

		return callback(false, lists);
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
			action: `${user.name + ' ' + user.surname} deleted ${result.title} from this board`,
		});
		board.save();

		// Delete all cars in the list
		await cardModel.deleteMany({owner: listId});

		return callback(false, result);
	} catch (error) {
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

module.exports = {
	create,
	getAll,
	deleteById,
};

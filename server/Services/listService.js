const listModel = require('../Models/listModel');
const boardModel = require('../Models/boardModel');

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
		const lists = await listModel.find({ owner: { $in: boardId } });

		return callback(false,lists);
	} catch (error) {
		return callback({ errMessage: 'Something went wrong', details: error.message });
	}
};

module.exports = {
	create,
	getAll,
};

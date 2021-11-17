const cardModel = require('../Models/cardModel');
const listModel = require('../Models/listModel');
const boardModel = require('../Models/boardModel');

const create = async (title, listId, boardId, user, callback) => {
	try {
		// Get list and board
		
		const list = await listModel.findById(listId);
		const board = await boardModel.findById(boardId);

		// Validate the ownership
		const validate = user.boards.filter((board) => board.toString() === boardId);
		const validate2 = board.lists.filter((list) => list.toString() === listId);
		if (!(validate && validate2))
			return callback({ errMessage: 'You dont have permission to add card to this list or board' });

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

module.exports = {
	create,
};

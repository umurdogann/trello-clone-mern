const cardModel = require('../Models/cardModel');
const listModel = require('../Models/listModel');
const boardModel = require('../Models/boardModel');

const validateCardOwners = async (card = null, list, board, user, isCreate = false) => {
	const validate = isCreate ? true : list.cards.filter((item) => item.toString() === card._id.toString());
	const validate2 = board.lists.filter((item) => item.toString() === list._id.toString());
	const validate3 = user.boards.filter((item) => item.toString() === board._id.toString());

	return validate && validate2 && validate3;
};

module.exports = {
	validateCardOwners,
};

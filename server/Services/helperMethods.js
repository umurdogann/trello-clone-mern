const cardModel = require('../Models/cardModel');
const listModel = require('../Models/listModel');
const boardModel = require('../Models/boardModel');

const validateCardOwners = async (card = null, list, board, user, isCreate = false) => {
	const validate = isCreate ? true : list.cards.filter((item) => item.toString() === card._id.toString());
	const validate2 = board.lists.filter((item) => item.toString() === list._id.toString());
	const validate3 = user.boards.filter((item) => item.toString() === board._id.toString());

	return validate && validate2 && validate3;
};

const labelsSeed = [
	{ text: '', color: '#61bd4f', backColor: '#519839', selected: false },
	{ text: '', color: '#f2d600', backColor: '#d9b51c', selected: false },
	{ text: '', color: '#ff9f1a', backColor: '#cd8313', selected: false },
	{ text: '', color: '#eb5a46', backColor: '#b04632', selected: false },
	{ text: '', color: '#c377e0', backColor: '#89609e', selected: false },
	{ text: '', color: '#0079bf', backColor: '#055a8c', selected: false },
];

const createRandomHexColor = () => {
	const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
	let hex = '#';

	for (let i = 0; i < 6; i++) {
		const index = Math.floor(Math.random() * values.length);
		hex += values[index];
	}
	return hex.toString();
};

module.exports = {
	validateCardOwners,
	labelsSeed,
	createRandomHexColor,
};

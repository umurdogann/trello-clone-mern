const boardModel = require('../Models/boardModel');
const userModel = require('../Models/userModel');

const create = async (req, callback) => {
	try {
		const { title, backgroundImageLink, members } = req.body;

		// Create and save new board
		const tempBoard = boardModel({ title, backgroundImageLink });
		const newBoard = await tempBoard.save();

		// Add this board to owner's boards
		const user = await userModel.findById(req.user.id);
		user.boards.unshift(newBoard.id);
		await user.save();

		// Add user to members of this board
		newBoard.members.push({ user: user.id, name: user.name, surname: user.surname, role: 'owner' });

		// Add created activity to activities of this board
		newBoard.activity.unshift({ action: `New board created by ${user.name}` });

		// Save newBoard's id to boards of members and,
		// Add ids of members to newBoard
		members.map(async (member) => {
			const newMember = await userModel.findOne({ email: member.email });
			newMember.boards.unshift(newBoard.id);
			newBoard.members.push({
				user: newMember.id,
				name: newMember.name,
				surname: newMember.surname,
				role: 'member',
			});
			newBoard.activity.unshift({ action: `${newMember.name} was added as a collaborator by ${user.name}` });
			await newMember.save();
			return newMember.id;
		});

		// Save new board
		const result = await newBoard.save();

		return callback(false, newBoard);
	} catch (error) {
		return callback({
			errMessage: 'Something went wrong',
			details: error.message,
		});
	}
};

const getAll = async (userId, callback) => {
	try {
		// Get user
		const user = await userModel.findById(userId);

		// Get board's ids of user
		const boardIds = user.boards;

		// Get boards of user
		const boards = await boardModel.find({ _id: { $in: boardIds } });

		// Delete unneccesary objects
		boards.forEach((board) => {
			board.activity = undefined;
			board.lists = undefined;
		});
		return callback(false, boards);
	} catch (error) {
		return callback({ msg: 'Something went wrong', details: error.message });
	}
};

const getById = async (id, callback) => {
	try {
		// Get board by id
		const board = await boardModel.findById(id);

		return callback(false, board);
	} catch (error) {
		return callback({ message: 'Something went wrong', details: error.message });
	}
};

module.exports = {
	create,
	getAll,
	getById,
};

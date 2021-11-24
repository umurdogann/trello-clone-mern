const cardService = require('../Services/cardService');

const create = async (req, res) => {
	// Deconstruct the params
	const { title, listId, boardId } = req.body;
	const user = req.user;

	// Validate the inputs
	if (!(title && listId && boardId))
		return res
			.status(400)
			.send({ errMessage: 'The create operation could not be completed because there is missing information' });

	//Call the card service
	await cardService.create(title, listId, boardId, user, (err, result) => {
		if (err) return res.status(500).send(err);
		return res.status(201).send(result);
	});
};

const getCard = async (req, res) => {
	// Get params
	const user = req.user;
	const { boardId, listId, cardId } = req.params;

	// Call the card service
	await cardService.getCard(cardId, listId, boardId, user, (err, result) => {
		if (err) return res.status(500).send(err);
		return res.status(200).send(result);
	});
};

const update = async (req, res) => {
	// Get params
	const user = req.user;
	const { boardId, listId, cardId } = req.params;

	// Call the card service
	await cardService.update(cardId, listId, boardId, user, req.body, (err, result) => {
		if (err) return res.status(500).send(err);
		return res.status(200).send(result);
	});
};

const addComment = async (req, res) => {
	// Get params
	const user = req.user;
	const { boardId, listId, cardId } = req.params;

	// Call the card service
	await cardService.addComment(cardId, listId, boardId, user, req.body, (err, result) => {
		if (err) return res.status(500).send(err);
		return res.status(200).send(result);
	});
};

const updateComment = async (req, res) => {
	// Get params
	const user = req.user;
	const { boardId, listId, cardId, commentId } = req.params;

	// Call the card service
	await cardService.updateComment(cardId, listId, boardId, commentId, user, req.body, (err, result) => {
		if (err) return res.status(500).send(err);
		return res.status(200).send(result);
	});
};

const deleteComment = async (req, res) => {
	// Get params
	const user = req.user;
	const { boardId, listId, cardId, commentId } = req.params;

	// Call the card service
	await cardService.deleteComment(cardId, listId, boardId, commentId, user, (err, result) => {
		if (err) return res.status(500).send(err);
		return res.status(200).send(result);
	});
};

const addMember = async (req, res) => {
	// Get params
	const user = req.user;
	const { boardId, listId, cardId } = req.params;

	// Call the card service
	await cardService.addMember(cardId, listId, boardId, user, req.body.memberId, (err, result) => {
		if (err) return res.status(500).send(err);
		return res.status(200).send(result);
	});
};

const deleteMember = async (req, res) => {
	// Get params
	const user = req.user;
	const { boardId, listId, cardId, memberId } = req.params;

	// Call the card service
	await cardService.deleteMember(cardId, listId, boardId, user, memberId, (err, result) => {
		if (err) return res.status(500).send(err);
		return res.status(200).send(result);
	});
};

module.exports = {
	create,
	getCard,
	update,
	addComment,
	updateComment,
	deleteComment,
	addMember,
	deleteMember,
};

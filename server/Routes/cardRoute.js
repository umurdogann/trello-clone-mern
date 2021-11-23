const cardController = require('../Controllers/cardController');
const express = require('express');
const router = express.Router();

router.post('/create', cardController.create);
router.get('/:boardId/:listId/:cardId', cardController.getCard);
router.put('/:boardId/:listId/:cardId', cardController.update);
router.post('/:boardId/:listId/:cardId/add-comment', cardController.addComment);
router.put('/:boardId/:listId/:cardId/:commentId', cardController.updateComment);
router.delete('/:boardId/:listId/:cardId/:commentId', cardController.deleteComment);

module.exports = router;

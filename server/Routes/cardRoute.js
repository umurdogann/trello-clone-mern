const cardController = require('../Controllers/cardController');
const express = require('express');
const router = express.Router();

router.post('/create', cardController.create);
router.get('/:boardId/:listId/:cardId', cardController.getCard);
router.put('/:boardId/:listId/:cardId', cardController.update);

module.exports = router;

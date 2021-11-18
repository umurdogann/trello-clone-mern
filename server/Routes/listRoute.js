const express = require('express');
const router = express.Router();
const listController = require('../Controllers/listController');

router.post('/create', listController.create);
router.get('/:id', listController.getAll);
router.delete('/:boardId/:listId', listController.deleteById);
router.post('/change-card-order', listController.updateCardOrder);

module.exports = router;

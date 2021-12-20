const express = require('express');
const boardController = require('../Controllers/boardController');
const route = express.Router();

route.put('/:boardId/update-board-description', boardController.updateBoardDescription);
route.put('/:boardId/update-board-title', boardController.updateBoardTitle);
route.post('/create', boardController.create);
route.get('/:id', boardController.getById);
route.get('/:id/activity', boardController.getActivityById);
route.get('/', boardController.getAll);

module.exports = route;

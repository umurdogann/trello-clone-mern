const cardController = require('../Controllers/cardController');
const express = require('express');
const router = express.Router();

router.delete('/:boardId/:listId/:cardId/:checklistId/delete-checklist', cardController.deleteChecklist);
router.post('/:boardId/:listId/:cardId/create-checklist', cardController.createChecklist);
router.put('/:boardId/:listId/:cardId/:labelId/update-label-selection', cardController.updateLabelSelection);
router.delete('/:boardId/:listId/:cardId/:labelId/delete-label', cardController.deleteLabel);
router.put('/:boardId/:listId/:cardId/:labelId/update-label', cardController.updateLabel);
router.post('/:boardId/:listId/:cardId/create-label', cardController.createLabel);
router.post('/:boardId/:listId/:cardId/add-member', cardController.addMember);
router.delete('/:boardId/:listId/:cardId/:memberId/delete-member', cardController.deleteMember);
router.post('/create', cardController.create);
router.get('/:boardId/:listId/:cardId', cardController.getCard);
router.put('/:boardId/:listId/:cardId', cardController.update);
router.post('/:boardId/:listId/:cardId/add-comment', cardController.addComment);
router.put('/:boardId/:listId/:cardId/:commentId', cardController.updateComment);
router.delete('/:boardId/:listId/:cardId/:commentId', cardController.deleteComment);

module.exports = router;

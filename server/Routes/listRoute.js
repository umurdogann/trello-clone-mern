const express = require('express');
const router = express.Router();
const listController = require('../Controllers/listController');

router.post('/create', listController.create);
router.get('/:id', listController.getAll);

module.exports = router;

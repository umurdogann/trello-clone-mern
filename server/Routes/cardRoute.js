const cardController = require('../Controllers/cardController');
const express = require('express');
const router = express.Router();

router.post('/create', cardController.create);

module.exports = router;

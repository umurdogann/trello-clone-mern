const express = require("express");
const boardController = require("../Controllers/boardController");
const route = express.Router();

route.post("/create", boardController.create);

module.exports = route;

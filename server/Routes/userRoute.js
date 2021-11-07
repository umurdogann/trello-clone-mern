const express = require("express");
const userController = require("../Controllers/userController");
const router = express.Router();

router.use("/register", userController.register);

module.exports = router;

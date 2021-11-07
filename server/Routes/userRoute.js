const express = require("express");
const userController = require("../Controllers/userController");
const router = express.Router();

router.use("/register", userController.register);
router.use("/login", userController.login);

module.exports = router;

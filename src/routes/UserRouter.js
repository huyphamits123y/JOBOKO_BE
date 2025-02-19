const express = require('express')
const router = express.Router();
const userController = require("../controller/UserController");


router.post('/sign-up', userController.createUser);
router.post('/sign-in', userController.loginUser);
router.get('/get-details/:id', userController.getDetailsUser);
module.exports = router
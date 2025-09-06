const express = require('express');
const userRouter = express.Router()
const User = require('../controllers/userController')

userRouter.post('/register', User.registerUser);
userRouter.post('/login', User.loginUser);

module.exports = userRouter;
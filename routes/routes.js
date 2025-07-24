const express = require('express');
const router = express.Router();
const {insert} = require('../controller/userController')


router.post('/register', insert)
module.exports = {router}
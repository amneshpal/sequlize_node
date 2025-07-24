const express = require('express');
const router = express.Router();
const {insert} = require('../controller/userController')


router.get('/register', insert)
module.exports = {router}
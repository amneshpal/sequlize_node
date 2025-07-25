// const express = require('express');
// const router = express.Router();
// // const {insert,testFunction} = require('../controller/userController')
// const {testFunction} =  require('../controller/testController')

// router.get('/register', insert)
// router.get('/test', testFunction)
// module.exports = {router}





const express = require('express');
const router = express.Router();
const { insert, testFunction } = require('../controller/userController'); // ✅ fixed

// router.get('/register', insert);   // ✅ now insert is defined
router.get('/test', testFunction);

module.exports = { router };

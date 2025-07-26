const express = require('express');
const {createUser, getUser,getUserById,updateUser,deleteUser, softDelete,restoresoftDelete} = require('../controller/userController');

const router =  express.Router();
//create a new user
router.post('/add', createUser);

// get all users 
router.get('/getallusers',getUser)

// get a user by id 
router.get('/getuser/:id',getUserById)

// update a user by id
router.put('/update/:id',updateUser)

//delete a user by id 
router.delete('/deleteuser/:id',deleteUser)


// soft delete api  
router.delete('/softdelete/:id',softDelete)


// restor soft delete api
router.delete('/restorsoftdelete/:id',restoresoftDelete)


module.exports ={router} 
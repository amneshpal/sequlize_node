const { validate } = require('joi')
const { userSchema } = require('../middleware/userValidate');
const UserModel = require('../model/userModel');

  // user ko create karne ke liye 
const createUser = async (req, res) => {

    try {
        // validate req
        const { error } = userSchema.validate(req.body);
        if (error) { return res.status(400).json(error.details[0].message) };


        const user = await UserModel.create(req.body)
        return res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message })
    }
}

// saree user ko show karne ke liye
const getUser = async (req, res) => {

    try {
        const users = await UserModel.findAll();
        // if (error) { return res.status(400).json(error.details[0].message) }
        return res.status(200).json(users);

    } catch (error) {
       return  res.status(500).json({ message: "Internal Server Error", error: error.message })
    }
}

// user ko show karne ke liya by id (find karne krne ke liye )
const getUserById =async (req, res) => {

    try {
        const users = await UserModel.findByPk( req.params.id );
        // if (error) { return res.status(400).json(error.details[0].message) }
        return res.status(200).json(users);

    } catch (error) {
       return  res.status(500).json({ message: "Internal Server Error", error: error.message })
    }

 }


const updateUser = (req, res) => { }


const deleteUser = (req, res) => { }



module.exports = { createUser, getUser, getUserById, updateUser, deleteUser };
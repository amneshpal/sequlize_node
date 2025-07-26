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
        return res.status(201).json({message: "user created",user});
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message })
    }
}

// saree user ko show karne ke liye
const getUser = async (req, res) => {

    try {
        const users = await UserModel.findAll();
        // if (error) { return res.status(400).json(error.details[0].message) }
        return res.status(200).json({message : "all usersers ",users});

    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error: error.message })
    }
}

// user ko show karne ke liya by id (find karne krne ke liye )

const getUserById = async (req, res) => {
    try {
        const user = await UserModel.findByPk(req.params.id);
        if (!user) return res.status(500).json({ error: 'user not found' })
            return res.status(200).json(user);

    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error: error.message })
    }
}


const updateUser = async (req, res) => {
    try {
        const user = await UserModel.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        await UserModel.update(req.body, {
            where: { id: req.params.id }  // Ensure you're updating the correct record
        });
        // return res.status(200).json(user);
        return res.status(200).json({ msg: 'User updated',user });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error: error.message })
    }
}


const deleteUser = async(req, res) => { 
try{
        const user = await UserModel.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
      
        await UserModel.destroy( {
            where: { id: req.params.id }  // Ensure you're updating the correct record
        });
        return res.status(200).json({ msg: 'User distroy',user});   

    }catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error: error.message })
    }
}


const softDelete = async (req, res) => {
    try {
        const user = await UserModel.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found"
            });
         
          user.isDeleted = 1;  // Mark the user as deleted
        await user.save();   // Save the changes to the database
        return res.status(200).json({ msg: 'User soft deleted' });    

        }catch(error){
            return res.status(500).json({ message: "Internal Server Error", error: error.messag})

        }  
    }


    
const restoresoftDelete = async (req, res) => {
    try {
        const user = await UserModel.findByPk(req.params.id);
        if (!user ||user.isDeleted===0) return res.status(404).json({ message: "User not found"
            });
         
          user.isDeleted = 0;  // Mark the user as deleted
        await user.save();   // Save the changes to the database
        return res.status(200).json({ msg: 'User restor',user });    

        }catch(error){
            return res.status(500).json({ message: "Internal Server Error", error: error.messag})

        }  
    }

module.exports = { createUser, getUser, getUserById, updateUser, deleteUser,softDelete, restoresoftDelete };
// const Joi  =  require('joi')

// const userSchema = Joi.object().keys({
//     firstName : Joi.string().required(),
//     lastName : Joi.string().required(),
//     email : Joi.string().email().required(),
//     password : Joi.string().min(6).required(),
//     age:Joi.number().integer().min(0).required(),
//     mobileNumber:Joi.string().min(0).required(),
//     isActive: Joi.boolean().default(true)


// })

// module.exports= {userSchema}


const Joi = require('joi');

const userSchema = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    age: Joi.number().integer().min(0).required(),
    mobileNumber: Joi.string().min(0).required(),
    isActive: Joi.boolean().default(true)
});

const userIdSchema = Joi.object({
    id: Joi.string().required()  // Validate the user ID in the request parameters
});

module.exports = { userSchema, userIdSchema };
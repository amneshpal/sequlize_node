const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const UserModel = sequelize.define('user', {
    // firstName: DataTypes.STRING,

    // gatter method 
    firstName: {
        type: DataTypes.STRING,
        get() {
            const rawValue = this.getDataValue('firstName');
            return rawValue ? "MR " + rawValue.toUpperCase() : null;
        },
    },

    //  db base validation 
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isLowercase: true,
        },
    },

    //  constrains 
    password: {
        type: DataTypes.STRING(),
        allowNull: false,
        validate: {
            len: [8, 16],
        },
    },


    // lastName: DataTypes.STRING,

    // setter method 
    // lastName: {
    //     type: DataTypes.STRING,
    //     set(value) {
    //         this.setDataValue('lastName', value + " From India");
    //     },
    // },



    //   virtual field  
    // firstName: DataTypes.STRING,
    // lastName: DataTypes.STRING,
    fullName: {
        type: DataTypes.VIRTUAL,
        get() {
            return `${this.firstName} ${this.lastName} ${this.age}`;
        },
        set(value) {
            throw new Error('Do not try to set the `fullName` value!');
        },
    },



    // email: DataTypes.STRING,
    // password: DataTypes.STRING,

    // age: DataTypes.INTEGER,  

    // custom validation  
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
        customValidator(value) {
            if (value <= 0) {
                throw new Error('Age must be a positive integer');
            }
        },
    },
},


    mobileNumber: DataTypes.STRING,


    isActive: {
        type: DataTypes.BOOLEAN,
    },


    isDeleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0  // Default to 0 (not deleted)
    }


}, {
    freezeTableName: true,
    paranoid: true,
})

module.exports = UserModel



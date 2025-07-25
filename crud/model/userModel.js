const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const UserModel = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER,
    mobileNumber: DataTypes.STRING,
    isActive: {
        type: DataTypes.BOOLEAN,
    }


},{
    freezeTableName:true
})

module.exports = UserModel



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
    },
      isDeleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0  // Default to 0 (not deleted)
        }


},{
    freezeTableName:true,
      paranoid: true,
})

module.exports = UserModel



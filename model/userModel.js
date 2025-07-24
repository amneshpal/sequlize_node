const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/dbConnect')

const User = sequelize.define(
    'User',
    {
        // Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
         email: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
    },
    {
        freezeTableName: true,   // model == db table same 
        // Other model options go here
        tableName: 'Users',
    },
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

module.exports = {User}
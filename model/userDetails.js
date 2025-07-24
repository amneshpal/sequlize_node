const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConnect')

const userDetails = sequelize.define(
    'userDetails',
    {
        // Model attributes are defined here
        name: DataTypes.TEXT,
        favoriteColor: {
            type: DataTypes.TEXT,
            defaultValue: 'red',
        },
        age: DataTypes.INTEGER,
        cash: DataTypes.INTEGER,
    },
    {
        freezeTableName: true
    },
);

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true


module.exports = { userDetails }
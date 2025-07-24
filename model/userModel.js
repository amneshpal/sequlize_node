const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConnect')
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
            defaultValue: 'pal',
        },
        email: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
    },
    {
        // freezeTableName: true,   // model == db table same 
        // Other model options go here
        tableName: 'Users',
        //   timestamps: false,  // if you use this then created at or updated at table me nahi show honge 
        
        //  agar  dono me se ak chij chate ho to  

        timestamps : true, // if you use this then created at or updated at table me nahi show hong
        createdAt: false,
        // updatedAt: true ,
        updatedAt : 'update' ,  // name change ho jayega updated at ka 
    },
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

module.exports = { User }
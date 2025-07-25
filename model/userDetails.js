const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConnect')
const userDetails = sequelize.define(
  'userDetails',
  {
    name: DataTypes.TEXT,
    favoriteColor: {
      type: DataTypes.TEXT,
      defaultValue: 'red',
    },
    isActive: {  // ✅ move it outside
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    age: DataTypes.INTEGER,
    cash: DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
  }
);


// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true



module.exports = { userDetails }
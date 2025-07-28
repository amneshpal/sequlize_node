const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('crud1', 'root', 'Amnesh@123', {
  host: 'localhost',
  port: 3307, // change if needed
  dialect: 'mysql',
});

const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected');
  } catch (err) {
    console.error('❌ Error in database connection:', err);
  }
};

module.exports = {
  dbConnection,
  sequelize
};

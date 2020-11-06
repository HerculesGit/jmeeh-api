const Sequelize = require('sequelize');
const { TEST } = require('./env/database-config');

const connection = new Sequelize(
  TEST.database.name,
  TEST.database.user,
  TEST.database.password,
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);

module.exports = connection;
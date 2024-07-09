const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mssql',
    dialectOptions: {
      options: {
        encrypt: true,
        enableArithAbort: true
      }
    },
    logging: false  // Set to true for SQL query logging
  }
);

module.exports = sequelize;

// const { Sequelize } = require('sequelize');
// const { getDatabaseConfig } = require('./config/env'); // Adjust the path as needed

// const databaseConfig = getDatabaseConfig();

// const sequelize = new Sequelize(
//   databaseConfig.database,
//   process.env.DB_USER,
//   process.env.DB_PASS,
//   {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     dialect: 'mssql',
//     dialectOptions: {
//       options: {
//         encrypt: true,
//         enableArithAbort: true
//       }
//     },
//     logging: false  // Set to true for SQL query logging
//   }
// );

// module.exports = sequelize;
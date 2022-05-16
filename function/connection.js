var mysql = require('mysql2');
require('dotenv').config();

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  port: process.env.DB_PORT,
});

connection.connect((err) => {
  !!err
    ? console.log('ERROR', err)
    : console.log('DB SERVER CONNECTED (function)');
});

module.exports = connection;

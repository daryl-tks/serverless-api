'use strict';
// const connection = require('./connection');
require('dotenv').config();
var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  port: process.env.DB_PORT,
});

module.exports = async (event, context) => {
  if (event.path == '/users') {
    return getUsers(event, context);
  }

  return context.status(200).succeed('Welcome to conversion API');
};

const getUsers = (_event, context) => {
  try {
    // const result = await connection
    //   .promise()
    //   .query('SELECT * FROM users')
    //   .then(([rows, _fields]) => rows)
    //   .catch((err) => console.error({ err }));

    // connection.connect((err) => {
    //   !!err ? console.log('ERROR', err) : console.log('DB SERVER CONNECTED');
    // // });

    const result = {
      data: [
        {
          user_id: 1,
          username: 'hello',
          created_at: '2022-05-15T17:29:04.000Z',
        },
      ],
    };

    return context
      .headers({ 'Content-Type': 'Application/Json' })
      .status(200)
      .succeed(JSON.stringify(result));
  } catch (error) {
    throw console.error({ get_users_error: error });
  }
};

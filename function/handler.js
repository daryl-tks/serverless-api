'use strict';
const connection = require('./connection');

module.exports = async (event, context) => {
  if (event.path == '/users') {
    return getUsers(event, context);
  }

  return context.status(200).succeed('Welcome to conversion API');
};

const getUsers = async (_event, context) => {
  try {
    const result = await connection
      .promise()
      .query('SELECT * FROM users')
      .then(([rows, _fields]) => rows)
      .catch((err) => console.error({ err }));

    return context
      .headers({ 'Content-Type': 'Application/Json' })
      .status(200)
      .succeed({ data: result });
  } catch (error) {
    throw console.error({ get_users_error: error });
  }
};

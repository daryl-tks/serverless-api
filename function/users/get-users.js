const res = require('express/lib/response');
const connection = require('../connection');

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
      .succeed(JSON.stringify({ data: result }));
  } catch (error) {
    throw console.error({ get_users_error: error });
  }
};

module.exports = getUsers;

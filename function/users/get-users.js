const connection = require('../connection');

const getUsers = async (_event, context) => {
  try {
    return connection
      .promise()
      .query('SELECT user_id, username, created_at FROM users')
      .then(([rows, _fields]) => rows);
  } catch (error) {
    throw console.error({ get_users_error: error });
  }
};

module.exports = getUsers;

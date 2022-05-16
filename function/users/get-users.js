const connection = require('../connection');

const getUsers = async (event, context, callback) => {
  try {
    const [result] = await connection
      .promise()
      .query('SELECT user_id, username, created_at FROM users')
      .then(async ([rows], _fields) => rows);

    return await context.status(200).succeed({ result });
  } catch (error) {
    throw console.error({ get_users_error: error });
  }
};

module.exports = getUsers;

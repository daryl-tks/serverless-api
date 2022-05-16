const connection = require('../connection');

const getUsers = async (_event, context) => {
  try {
    const result = await connection
      .promise()
      .query('SELECT user_id, username, created_at FROM users')
      .then(async ([rows], _fields) => JSON.stringify(rows));
    if (result.length) {
      return context
        .headers({ 'Content-Type': 'Application/Json' })
        .status(200)
        .succeed({ data: JSON.parse(result) });
    }
  } catch (error) {
    throw console.error({ get_users_error: error });
  }
};

module.exports = getUsers;

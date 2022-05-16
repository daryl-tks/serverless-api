const connection = require('../connection');

const getUsers = async (_event, context) => {
  try {
    const result = await connection
      .promise()
      .query('SELECT user_id, username, created_at FROM users')
      .then(([rows], _fields) => JSON.stringify(rows));

    if (result.length) {
      return context
        .headers({ 'Content-Type': 'Application/Json' })
        .status(200)
        .succeed({ data: JSON.parse(result) });
    }

    return context
      .headers({ 'Content-Type': 'Application/Json' })
      .status(200)
      .succeed({
        data: JSON.parse([
          {
            user_id: 1,
            username: 'hello',
            created_at: '2022-05-15T17:29:04.000Z',
          },
          {
            user_id: 2,
            username: 'world',
            created_at: '2022-05-15T19:55:14.000Z',
          },
        ]),
      });
  } catch (error) {
    throw console.error({ get_users_error: error });
  }
};

module.exports = getUsers;

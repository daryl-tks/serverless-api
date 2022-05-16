const res = require('express/lib/response');
const connection = require('../connection');

const getUsers = async (_event, context) => {
  try {
    // const result = await connection
    //   .promise()
    //   .query('SELECT * FROM users')
    //   .then(([rows, _fields]) => rows);

    return await context
      .headers({ 'Content-Type': 'Application/Json' })
      .status(200)
      .succeed(
        JSON.stringify({
          data: [
            {
              user_id: 1,
              username: 'hello',
              created_at: '2022-05-15T17:29:04.000Z',
            },
          ],
        })
      );
  } catch (error) {
    throw console.error({ get_users_error: error });
  }
};

module.exports = getUsers;

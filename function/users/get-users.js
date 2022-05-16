const connection = require('../connection');

const getUsers = async (_event, context) => {
  try {
    return await connection
      .promise()
      .query('SELECT * FROM users')
      .then(([rows, _fields]) =>
        context
          .headers({ 'Content-Type': 'Application/Json' })
          .status(200)
          .succeed(JSON.stringify({ data: rows }))
      );

    // return context
    //   .headers({ 'Content-Type': 'Application/Json' })
    //   .status(200)
    //   .succeed(JSON.stringify({ data: result }));
  } catch (error) {
    throw console.error({ get_users_error: error });
  }
};

module.exports = getUsers;

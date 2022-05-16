const connection = require('../connection');

const getUsers = async (_event, context) => {
  try {
    console.log('GET USErS');

    return await connection
      .promise()
      .query('SELECT * FROM users')
      .then(([rows, _fields]) => context.status(200).succeed({ data: rows }))
      .catch((err) => console.error({ err }));

    // console.log('result,', result);

    // return context.status(200).succeed(['Jean', 'Joe', 'jane']);
    // return context
    //   .headers({ 'Content-Type': 'Application/Json' })
    //   .status(200)
    //   .succeed({ data: result });
  } catch (error) {
    throw console.error({ get_users_error: error });
  }
};

module.exports = getUsers;

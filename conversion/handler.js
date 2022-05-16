'use strict';
// const { getUsers } = require('../services/users/get-users.js');
// const connection = require('../utils/connection.js');

// module.exports = async (event, context) => {

//   return context.status(200).succeed(result);
// };

module.exports = async (event, context) => {
  if (event.path == '/users') {
    return context.status(200).succeed(['Jean', 'Joe', 'jane']);
  }

  const result = {
    body: 'Welcome to conversion API (conversion)',
    'content-type': event.headers['content-type'],
  };

  return context.status(200).succeed(result);
};

function getUsers(event, context) {
  return context.status(200).succeed(['Jean', 'Joe', 'jane']);
}

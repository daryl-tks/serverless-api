'use strict';

// const { getUsers } = require('../services/users/get-users');

// module.exports = async (event, context) => {
//   const result = {
//     body: JSON.stringify(event.body),
//     'content-type': event.headers['content-type'],
//   };

//   return context.status(200).succeed(result);
// };

module.exports = (event, context) => {
  if (event.path == '/users') {
    return getUsers(event, context);
  }

  return context.status(200).succeed('Welcome to conversion API');
};

// function users(event, context) {
//   return context.status(200).succeed(['Jean', 'Joe', 'jane']);
// }

'use strict';

const getUsers = require('./users/get-users');

// module.exports = async (event, context) => {
//   if (event.path == '/users') {
//     return context.status(200).succeed(['Jean', 'Joe', 'jane']);
//   }

//   const result = {
//     body: 'Welcome to conversion API',
//     'content-type': event.headers['content-type'],
//   };

//   return context.status(200).succeed(result);
// };

// function getUsers(event, context) {
//   return context.status(200).succeed(['Jean', 'Joe', 'jane']);
// }

module.exports = async (event, context) => {
  if (event.path == '/users') {
    return await getUsers(event, context);
  }

  return context.status(200).succeed('Welcome to conversion API');
};

// function users(event, context) {
//   return context.status(200).succeed(['Jean', 'Joe', 'jane']);
// }

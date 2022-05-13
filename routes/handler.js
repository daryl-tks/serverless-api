'use strict';

const { getUsers } = require('../service/users/get-users');

// module.exports = async (event, context) => {
//   console.log('CONTEXT', context);

//   const result = {
//     body: { name: 'Daryl', age: 29 },
//     'content-type': 'application/json',
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

'use strict';

const getUsers = require('./users/get-users');

module.exports = async (event, context) => {
  if (event.path == '/users') {
    return await getUsers(event, context);
  }

  return context.status(200).succeed('Welcome to conversion API');
};

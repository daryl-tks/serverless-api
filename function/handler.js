'use strict';

const getUsers = require('./users/get-users');

module.exports = (event, context) => {
  if (event.path == '/users') {
    return getUsers(event, context);
  }

  return context.status(200).succeed('Welcome to conversion API (function)');
};

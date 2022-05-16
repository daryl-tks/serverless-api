'use strict';

const getUsers = require('./users/get-users');

module.exports = async (event, context, callback) => {
  if (event.path == '/users') {
    return await getUsers(event, context, callback);
  }

  if (event.path == '/') {
    callback('Welcome to conversion API [function]');
  }
};

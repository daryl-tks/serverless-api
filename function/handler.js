'use strict';

const getUsers = require('./users/get-users');

module.exports = async (event, context) => {
  if (event.path == '/users') {
    const data = await getUsers(event, context);

    if (data.length) {
      return context
        .headers({ 'Content-Type': 'Application/Json' })
        .status(200)
        .succeed(JSON.stringify({ data }));
    }
  }

  return context.status(200).succeed('Welcome to conversion API');
};

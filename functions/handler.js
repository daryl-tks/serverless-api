'use strict';

var express = require('express');
const getUsers = require('./users/get-users');

var app = express();

const main = async (event, context) => {
  console.log('event', event);
  console.log('context', context);

  const result = {
    body: JSON.stringify({ name: 'Daryl', position: 'Fullstack Developer' }),
    'content-type': event.headers['content-type'],
  };
  return context.status(200).succeed(result);
  // app.use('/users', getUsers);
};

module.exports = main;

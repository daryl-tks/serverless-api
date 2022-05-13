'use strict';

var express = require('express');
var router = express.Router();

// @DESC - GET users

module.exports = async (event, context) => {
  // const result = {
  //   body: JSON.stringify({ name: 'Daryl', position: 'Fullstack Developer' }),
  //   'content-type': event.headers['content-type'],
  // };

  const result = {
    body: JSON.stringify(event.body) + '123',
    'content-type': event.headers['content-type'],
  };

  return context.status(200).succeed(result);

  // return router.get('/', function (_, res) {
  //   res.send('HELLO USERS');
  //   // connection.query('SELECT * FROM users', (err, result) => {
  //   //   !err ? res.send({ data: result }) : res.status(400).send({ err_msg: err });
  //   // });
  // });
};

'use strict';

require('dotenv').config();
var path = require('path');
const cors = require('cors');
var mysql = require('mysql2');
var logger = require('morgan');
var express = require('express');
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var connection = require('./function/connection');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function (req, res, next) {
  res.send({ module: 'Conversion API v1.2.0' });
});

app.get('/users', function (req, res) {
  try {
    connection.query('SELECT * FROM users', (err, result) => {
      !err
        ? res.send({ data: result })
        : res.status(500).send({ err_msg: err });
    });
  } catch (error) {
    console.error({ error });
    throw error;
  }
});

app.post('/users', function (req, res) {
  const { username, isWeb } = req.body;

  connection.query(
    'SELECT username FROM users WHERE username = ?',
    [username],
    (err, result) => {
      if (result.length) {
        res.status(400).send({ error: 'Username already exist', code: 400 });
      } else {
        connection.query(
          'INSERT INTO users SET ?',
          [{ username, isWeb }],
          (error, result) =>
            result.insertId
              ? res
                  .status(201)
                  .send({ message: 'Successfully created new user' })
              : res.status(400).send({ error, code: 400 })
        );
      }
    }
  );
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.http_port || 3000;

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});

module.exports = app;

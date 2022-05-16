'use strict';

require('dotenv').config();
var path = require('path');
const cors = require('cors');
var mysql = require('mysql2');
var logger = require('morgan');
var express = require('express');
var createError = require('http-errors');
var cookieParser = require('cookie-parser');

// const connection = require('./utils/connection');
// var indexRouter = require('./services/index');
// var usersRouter = require('./services/users/get-users');

var app = express();

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  port: process.env.DB_PORT,
});

connection.connect((err) => {
  !!err ? console.log('ERROR', err) : console.log('DB SERVER CONNECTED');
});

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res, next) {
  res.send({ module: 'Conversion API v1' });
});

app.get('/users', function (req, res) {
  try {
    connection.query('SELECT * FROM users', (err, result) => {
      console.log('RESULT', result);
      console.log('Error', err);
      !err ? res.send({ data: result }) : res.send({ err_msg: err });
    });
  } catch (error) {
    console.error({ error });
  }
});

// app.use('/', );
// app.use('/users', usersRouter);

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

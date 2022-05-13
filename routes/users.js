var express = require('express');
var router = express.Router();
const connection = require('../connection');

// @DESC - GET users
router.get('/', function (_, res) {
  connection.query('SELECT * FROM users', (err, result) => {
    !err ? res.send({ data: result }) : res.status(400).send({ err_msg: err });
  });
});

// @DESC - POST users
router.post('/', function (req, res) {
  const username = req.body.username;

  connection.query(
    'SELECT username FROM users WHERE username = ?',
    [username],
    (err, result) => {
      if (result.length) {
        res.status(400).send({ error: 'Username already exist', code: 400 });
      } else {
        connection.query(
          'INSERT INTO users SET ?',
          [{ username }],
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

module.exports = router;

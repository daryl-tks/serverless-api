// const res = require('express/lib/response');
const connection = require('../../utils/connection');

// const getUsers = async (event, context) => {
//   try {
//     const result = await connection
//       .promise()
//       .query('SELECT * FROM users')
//       .then(([rows, fields]) => {
//         return rows;
//       })
//       .catch((err) => console.error({ err }));

//     return context
//       .headers({ 'Content-Type': 'Application/Json' })
//       .status(200)
//       .succeed({ data: result });
//   } catch (error) {
//     throw console.error({ get_users_error: error });
//   }
// };

// module.exports = { getUsers };

var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function (req, res, next) {
//   res.send({ name: 'USERS' });
// });

// @DESC - GET users
router.get('/', function (_, res) {
  connection.query('SELECT * FROM users', (err, result) => {
    !err ? res.send({ data: result }) : res.status(400).send({ err_msg: err });
  });
});

module.exports = router;

var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'daryl',
  password: '',
  database: '',
});

// connection.connect((err) => {
//   !!err ? console.log('ERROR', err) : console.log('DB SERVER CONNECTED');
// });

module.exports = connection;

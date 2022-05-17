var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send({ module: 'Conversion API v1.1.0' });
});

module.exports = router;

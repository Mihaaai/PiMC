var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pi Monitor & Control' , temp : 20, tempDot : 9, humidity : 20});
});

module.exports = router;

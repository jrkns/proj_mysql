var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('search_staff_s', { title: 'Search', user_val: req.user.username });
});

module.exports = router;
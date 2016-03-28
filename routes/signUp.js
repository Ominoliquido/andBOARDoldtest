var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('signUp/signUp', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  res.redirect('signUp/createProfile')
});

router.get('/createProfile', function(req, res, next) {
  res.render('signUp/createProfileAllUsers', { title: 'Express' });
});

module.exports = router;

var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

// router.get('/here/:username/:password/:email', function(req, res, next) {
//   //console.log("username: ",req.body.uname);
  
//  res.render('home',{title:`${req.params.username} ${req.params.password} `})
//  });

router.get('/dummy', function(req, res, next) {
  res.render('dummy');
});

module.exports = router;

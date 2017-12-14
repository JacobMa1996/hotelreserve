var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/show',function(req,res,next) {
  res.render('pages/show');
});

router.get('/view',function(req,res,next) {
  res.render('pages/view');
});

router.get('/panorama',function(req,res,next) {
  res.render('pages/panorama');
})

module.exports = router;

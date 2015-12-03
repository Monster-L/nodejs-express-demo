var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
					  	title: '首页',
					  	isHome:true ,
					  	items:[
						'http://placeholder.qiniudn.com/640x200',
						'http://placeholder.qiniudn.com/640x200',
						'http://placeholder.qiniudn.com/640x200']
					});
});

module.exports = router;

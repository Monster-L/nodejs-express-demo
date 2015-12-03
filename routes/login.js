var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/rsult', function(req, res, next) {
	var data = {
		msg:''
	}
	console.log('username:'+req.body.username+'  password:'+req.body.password);
	if (req.body.username == 'lc' && req.body.password == 11111) {
		data.msg = 'login success';
	}else{
		data.msg = 'login fail';
		console.log(data.msg);
	}
 	 res.render('login_result', data);
});

router.get('/',function(req,res,next){
	res.render('login',{});
})

module.exports = router;

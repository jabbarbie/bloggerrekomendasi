var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET home page. */
router.get('/', async function(req, res, next) {
	const artikel = await model.post.findAll({})
	const data = {
		'status': 'Not Found',
		'data' : {}
	}
	if (artikel.length > 0)
	{
		data.status = 'OK'
		data.data = artikel
	}
	res.render('index', { title : "Data", data : data } );

  // res.render('index', { title: 'Express' });
});

module.exports = router;

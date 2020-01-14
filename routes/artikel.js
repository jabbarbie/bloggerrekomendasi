var express = require('express');
var router = express.Router();
var model = require('../models/index');


router.post('/add', function(req, res) {
	const {
		judul
	} = req.body

	console.log(judul);
	const post = model.post.create({
		judul,
	})

	if (post)
	{
		res.redirect('back')
	}

})
router.post('/edit', async function(req, res){
	const {
		judul,
		opening,
		ending
	} = req.body
	model.post.update({
		judul,
		opening,
		ending
	},{ where: {id: req.body.id} })
	res.redirect('back')
})
router.get('/(:id)', async function(req, res) {

	const id = req.params.id
	const manga = await model.manga.findAll({order: ['judul'], include: ['mr']})
	const artikel = await model.post.findOne({where: {id: id}})

	// const rekomendasi = await model.rekomendasi.findAll({
	// 	where: {id_artikel: id},
	// 	order: [['posisi','DESC']],
	// 	include: ['m']
	// })
	res.json(manga)
	return

	console.log(rekomendasi);

	const data = {
		status: 'Not Found',
		data : {}
	}
	if(artikel)
	{
		data.status = 'OK'
		data.data = artikel
	}
	res.render('artikel', { title : "Post", data : data, manga: manga, rekomendasi: rekomendasi} );

})
router.get('/hapus/(:artikel)/(:id)', function(req, res) {
	const id = req.params.id
	const id_artikel = req.params.artikel
	// console.log(req.params);
	connection.query('DELETE FROM rekomendasi WHERE id = ' + id, function(err, result) {
		if(!err)
		{
			res.redirect('/artikel/' + id_artikel)
		}
	})
})
module.exports = router;

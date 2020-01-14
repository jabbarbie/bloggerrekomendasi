var express = require('express');
var router = express.Router();
var model = require('../models/index');


/* GET home page. */
router.get('/', async function(req, res, next) {
	const kategori = await model.label.findAll({order: ['label']})

	const data = {
		status: 'Not Found',
		data : {}
	}
	if(kategori.length > 0)
	{
		data.status = 'OK'
		data.data = kategori
	}
	res.render('genre', { title : "Genre, Kategori.. Labels", data : data } );

});

// router.get('/edit/(:id)', async function(req, res) {
// 	const kategori = await model.label.findAll({order: ['id']})
// 	const currentKategori = await model.relabel.findAll({attributes: ['id_label'], where: {id_manga: req.params.id}, order: ['id_label']})
	
// 	const current = []
// 	currentKategori.forEach(e => {
// 		current.push(e.id_label)
// 	})
// 	const manga = await model.Manga.findOne({where: {id: req.params.id}})
// 	console.log(currentKategori);

// 	const data = {
// 		status: 'Not Found',
// 		data : {}
// 	}
// 	if(manga)
// 	{
// 		data.status = 'OK'
// 		data.data = manga
// 	}
// 	res.render('mangaedit', { title : "Ubah ", data : data, kategori: kategori, currentKategori: current } );

// })
router.post('/add', function(req, res) {
	const {
		label,
	} = req.body

	const g = model.label.create({
		label
	})

	if (g)
	{
		res.redirect('back')
	}
})

// })
// router.post('/edit/', async function(req, res){
// 	const {
// 		id,
// 		judul,
// 		keterangan,
// 		gambar,
// 		type,
// 		alternative_name,
// 		review,
// 		kategori,
// 		chapter,

// 	} = req.body
// 	const manga = model.Manga.update({
// 		judul,
// 		keterangan,
// 		gambar,
// 		type,
// 		alternative_name,
// 		chapter,
// 		review
// 	}, {where: {id: id}})
// 	if(manga)
// 	{
// 		const k = []
// 		kategori.forEach((r, i) => {
// 			k.push({id_label:r , id_manga: id})
// 		})
// 		model.relabel.bulkCreate(k)
// 		console.log(k);
// 		res.redirect('/manga')
// 	}
// })
// router.get('/hapus/(:id)', function(req, res){
// 	const id = req.params.id
// 	model.Manga.destroy({where: {id: id}})
// 	res.redirect('/manga')
// })

module.exports = router;

var express = require('express');
var router = express.Router();
var model = require('../models/index');


/* GET home page. */
router.get('/', async function(req, res, next) {
	const kategori = await model.label.findAll({})
	const manga = await model.manga.findAll({order: ['judul']})

	const data = {
		status: 'Not Found',
		data : {}
	}
	if(manga.length > 0)
	{
		data.status = 'OK'
		data.data = manga
	}
	res.render('manga', { title : "manga", data : data, kategori: kategori } );

});

router.get('/edit/(:id)', async function(req, res) {
	const kategori = await model.label.findAll({order: ['id']})
	const currentKategori = await model.relabel.findAll({attributes: ['labelId'], where: {mangaId: req.params.id}, order: ['labelId']})
	
	const current = []
	currentKategori.forEach(e => {
		current.push(e.labelId)
	})
	const manga = await model.manga.findOne({where: {id: req.params.id}})
	console.log(currentKategori);

	const data = {
		status: 'Not Found',
		data : {}
	}
	if(manga)
	{
		data.status = 'OK'
		data.data = manga
	}
	res.render('mangaedit', { title : "Ubah ", data : data, kategori: kategori, currentKategori: current } );

})
router.post('/add', function(req, res) {
	const {
		judul,
		keterangan,
		gambar,
		type,
		alternative_name,
		review,
		kategori,
		chapter,
		bookmark,
		rating


	} = req.body

	const manga = model.manga.create({
		judul,
		keterangan,
		gambar,
		type,
		alternative_name,
		chapter,
		review,
		bookmark,
		rating
	})

	if (manga)
	{
		var d = []
		model.manga.findAll({
			limit: 1,
			order: [ [ 'createdAt', 'DESC' ]]
		}).then(rl => {
			// console.log('entries ', rl[0].id);
			if(kategori.length > 0){
				kategori.forEach((r,i) => {
					console.log('perulnagan ', r);
					d.push({id_kategori: r, mangaId: rl[0].id})
				})
			}

		})

		console.log('data D',d);
		model.relabel.bulkCreate(d)			

		res.redirect('/manga')
	}


})
router.post('/edit/', async function(req, res){
	const {
		id,
		judul,
		keterangan,
		gambar,
		type,
		alternative_name,
		review,
		kategori,
		chapter,

		bookmark,
		rating
	} = req.body
	const manga = model.manga.update({
		judul,
		keterangan,
		gambar,
		type,
		alternative_name,
		chapter,
		review,
		bookmark,
		rating
	}, {where: {id: id}})
	if(manga)
	{
		const k = []
		kategori.forEach((r, i) => {
			k.push({labelId:r , mangaId: id})
		})
		model.relabel.bulkCreate(k)
		console.log(k);
		res.redirect('/manga')
	}
})

router.post('/daftar', function(req,res) {
	const {
		mangaId,
		artikelId
	} = req.body
	console.log('okokokok', mangaId, artikelId);
	model.rekomendasi.create({
		artikelId,
		mangaId
	})
	res.redirect('back')

})

/* kondisi = naik / turun
**/
router.get('/posisi/(:kondisi)/(:artikelId)/(:id_rekomendasi)/(:posisinow)', async (req, res) => {

	const {
		artikelId,
		id_rekomendasi,
		posisinow,
		kondisi
	} = req.params


	const rekomendasi = await model.rekomendasi.findOne({
		where : {artikelId: artikelId },
		order: [['posisi','DESC']]
	})


	let posisi = posisinow
 if(posisinow > 0)
 	if(kondisi == 'up')
	 	posisi++
	 else
		 posisi--
	else
		 posisi = 1

	const id_sebelumnya = await model.rekomendasi.findOne({ where: {artikelId: artikelId, posisi: posisi} })
	const ubahposisi = await model.rekomendasi.update({
		posisi
	}, {
		where: {id: id_rekomendasi}
	})

	console.log('id', id_rekomendasi, 'posisi awal', posisinow ,' ke posisi', posisi);
	// 
	if(ubahposisi)
	{
		// ubah juga untuk mangan sebelumnya / sesudahnya (switch posisi)
		posisi = posisinow
		model.rekomendasi.update({
			posisi
		}, {
			where: {id: id_sebelumnya.id}
		})
		res.redirect('back')
	}
})
router.get('/hapus/(:id)', function(req, res){
	const id = req.params.id
	model.manga.destroy({where: {id: id}})
	res.redirect('/manga')
})

module.exports = router;

// var mysql = require('mysql')
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'asadako'
// })

// const Sequelize = require('sequelize');

// const sequelize =  new Sequelize('asadako', 'root','', {
// 	host: 'localhost',
// 	dialect: 'mysql',
// 	pool: {
// 		max: 5,
// 		min:0,
// 		idle: 10000
// 	}
// })
// connection.connect(function(err) {
// 	// if (err) throw err;
// 	console.log("terhubung");

// 	connection.query("CREATE DATABASES asadako", function(err, result) {
// 		// if (err) throw err;
// 		console.log("Databases dibuat");
// 	})
// })

// connection.connect()
// module.exports = connection
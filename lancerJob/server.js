var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var mongoose = require('mongoose');
var options = {
  db: { native_parser: true },
  server: { poolSize: 5 }
}
mongoose.connect('mongodb://localhost/LancerJobs', options);

var AppSchema = require('./schema.js').AppSchema;
var appSchemaInstance = new AppSchema(mongoose);

var CadastroService = require('./cadastroService.js').CadastroService;
var cadastroServiceInstance = new CadastroService(mongoose, appSchemaInstance);
//----------------CadastroService---- Ini-----------

app.post('/salvarCadastro', function (req, res) {
	cadastroServiceInstance.salvarContato(req.body, function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});
app.post('/editarCadastro', function (req, res) {
	cadastroServiceInstance.salvarContato(req.body, function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});

app.get("/listarCadastro", function(req,res){
	
	cadastroServiceInstance.listarCadastroService(req.body, function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});

app.post('/addCadastro', function (req, res) {
	cadastroServiceInstance.addCadastroService(req.body, function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});



//----------------CadastroService---- fim-----------
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
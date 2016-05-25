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

var ProjetoService = require('./projetoService.js').ProjetoService;
var projetoServiceInstance = new ProjetoService(mongoose, appSchemaInstance);
//----------------CadastroService---- Ini-----------
app.put('/editarCadastro', function (req, res) {
	cadastroServiceInstance.editarCadastro(req.body, function(response){
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



//----------------CadastroService---- Ini-----------
app.delete('/removerProjeto/:id', function (req, res) {
	
	projetoServiceInstance.removerProjetoService(req.params.id, function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});

app.get("/listarProjeto", function(req,res){
	
	projetoServiceInstance.listarProjetoService(req.body, function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});

app.post('/addProjeto', function (req, res) {
	projetoServiceInstance.addProjetoService(req.body, function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});

//----------------CadastroService---- fim-----------
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
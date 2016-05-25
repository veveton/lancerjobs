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

//Schemas IMPORT Everton
//var ProjetoSchema = require('./schema/projetoShema.js').ProjetoSchema;
//var projetoSchemaInstance = new ProjetoSchema(mongoose);
// appSchema
var AppSchema = require('./schema.js').AppSchema;
var appSchemaInstance = new AppSchema(mongoose);
//<<<<<<< HEAD
var CadastroService = require('./cadastroService.js').CadastroService;
var cadastroServiceInstance = new CadastroService(mongoose, appSchemaInstance);
//=======

//Services IMPORT
//var AvaliacaoService = require('./services/avaliacaoService.js').AvaliacaoService;
//var avaliacaoServiceInstance = new AvaliacaoService(mongoose, appSchemaInstance);

//var PerfilService = require('./services/perfilService.js').PerfilService;
//var perfilServiceInstance = new PerfilService(mongoose, appSchemaInstance);
//>>>>>>> branch 'master' of https://github.com/veveton/lancerjobs.git

//<<<<<<< HEAD
var ProjetoService = require('./projetoService.js').ProjetoService;
var projetoServiceInstance = new ProjetoService(mongoose, appSchemaInstance);

var InscricaoService = require('./inscricaoService.js').InscricaoService;
var inscricaoServiceInstance = new InscricaoService(mongoose, appSchemaInstance);
//----------------CadastroService---- Ini-----------

//app.put('/editarCadastro', function (req, res) {
//	cadastroServiceInstance.editarCadastro(req.body, function(response){
		
//=======
//servicos
app.post('/salvaAvaliacaor', function (req, res) {
	avaliacaoServiceInstance.salvarAvaliacao(req.body, function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});
/*
app.post('/salvaPerfil', function (req, res) {
	perfilServiceInstance.salvarPerfil(req.body, function(response){
//>>>>>>> branch 'master' of https://github.com/veveton/lancerjobs.git
		res.send(response);
	}, function(err){
		res.send(err);
	});
});
*/
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



//----------------ProjetoService---- Ini-----------
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

//----------------ProjetoService---- fim-----------
//----------------inscricaoService---- Ini-----------


app.get("/listarInscricao", function(req,res){
	
	inscricaoServiceInstance.listarInscricaoService(req.body, function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});

app.post('/addInscricao', function (req, res) {
	inscricaoServiceInstance.addInscricaoService(req.body, function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});


//----------------inscricaoService---- fim-----------
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static('public'));//SETAR PASTA INICIAL DO SISTEMA

var mongoose = require('mongoose');
var options = {
  db: { native_parser: true },
  server: { poolSize: 5 }
}
mongoose.connect('mongodb://localhost/LancerJobs', options);


var AppSchema = require('./schema/schema.js').AppSchema;
var appSchemaInstance = new AppSchema(mongoose);


//===SERVICES====

var AvaliacaoService = require('./services/avaliacaoService.js').AvaliacaoService;
var avaliacaoServiceInstance = new AvaliacaoService(mongoose, appSchemaInstance);

var PerfilService = require('./services/perfilService.js').PerfilService;
var perfilServiceInstance = new PerfilService(mongoose, appSchemaInstance);

var CadastroService = require('./services/cadastroService.js').CadastroService;
var cadastroServiceInstance = new CadastroService(mongoose, appSchemaInstance);

var ProjetoService = require('./services/projetoService.js').ProjetoService;
var projetoServiceInstance = new ProjetoService(mongoose, appSchemaInstance);

var InscricaoService = require('./services/inscricaoService.js').InscricaoService;
var inscricaoServiceInstance = new InscricaoService(mongoose, appSchemaInstance);

//===SERVICES====






//----------------CadastroService---- Ini-----------

//app.put('/editarCadastro', function (req, res) {
//	cadastroServiceInstance.editarCadastro(req.body, function(response){
		
//=======

//servicos
//-----------------------CadastroService------------INI----------------
app.put('/editarCadastro', function (req, res) {
	cadastroServiceInstance.editarCadastro(req.body, function(response){
	})
})
	


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
//-----------------------CadastroService------------FIM----------------

//-----------------------AvaliacaoService------------INI---------------
app.get("/listarAvaliacao", function(req,res){
	
	avaliacaoServiceInstance.listarAvaliacaoService(req.body, function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});

app.post('/salvaAvaliacao', function (req, res) {
	avaliacaoServiceInstance.salvarAvaliacao(req.body, function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});

//-----------------------AvaliacaoService------------FIM--------------

//-----------------------PerfilService------------INI-----------------

app.post('/salvaPerfil', function (req, res) {
	perfilServiceInstance.salvarPerfil(req.body, function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});

app.get("/listarPerfil", function(req,res){
	
	perfilServiceInstance.listarPerfilService(req.body, function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});

//-----------------------PerfilService------------FIM------------------






//----------------CadastroService---- fim-----------



//----------------ProjetoService----INI-----------
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

//----------------ProjetoService---- FIM-----------

//----------------InscricaoService----INI-------------------


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


//----------------InscricaoService----FIM-----------
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

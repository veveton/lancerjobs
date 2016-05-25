var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var mongoose = require('mongoose');
var options = {
  db: { native_parser: true },
  server: { poolSize: 5 }
}
mongoose.connect('mongodb://localhost/test', options);

//Schemas IMPORT
var ProjetoSchema = require('./schema/projetoShema.js').ProjetoSchema;
var projetoSchemaInstance = new ProjetoSchema(mongoose);


//Services IMPORT
var AvaliacaoService = require('./services/avaliacaoService.js').AvaliacaoService;
var avaliacaoServiceInstance = new AvaliacaoService(mongoose, projetoSchemaInstance);
var PerfilService = require('./services/perfilService.js').PerfilService;
var perfilServiceInstance = new PerfilService(mongoose, projetoSchemaInstance);

//servicos
app.post('/salvaAvaliacaor', function (req, res) {
	avaliacaoServiceInstance.salvarAvaliacao(req.body, function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});

app.post('/salvaPerfil', function (req, res) {
	perfilServiceInstance.salvarPerfil(req.body, function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
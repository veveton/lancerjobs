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

var AvaliacaoSchema = require('./esqueleto/avaliacaoSchema.js').AvaliacaoSchema;
var avaliacaoSchemaInstance = new AvaliacaoSchema(mongoose);

var AvaliacaoService = require('./services/avaliacaoService.js').AvaliacaoService;
var avaliacaoServiceInstance = 
					new AvaliacaoService(mongoose, avaliacaoSchemaInstance);

//servicos
app.post('/salvar', function (req, res) {
	avaliacaoServiceInstance.salvarAvaliacao(req.body, function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
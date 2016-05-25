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

var AppSchema = require('./schema.js').AppSchema;
var appSchemaInstance = new AppSchema(mongoose);

var ContatoService = require('./contatoService.js').ContatoService;
var contatoServiceInstance = 
					new ContatoService(mongoose, appSchemaInstance);

//servicos
app.post('/salvar', function (req, res) {
	contatoServiceInstance.salvarContato(req.body, function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
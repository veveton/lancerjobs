var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var options = {
  db: { native_parser: true },
  server: { poolSize: 5 }
};


/*
 * ECEMPLO DE AGRUPAMENTO POR ANO E MÊS
 * bd.projetos.aggregate(
{
	$group:{_id: {year: {$year:"$date"}, month:{$month:"$date"} },
	projetos:{$push:{_id:"$_id",nome: "$nome"} } }
}
)*/

mongoose.connect('mongodb://localhost/test', options);

app.use(express.static('public'));//SETAR PASTA INICIAL DO SISTEMA

var Schema = mongoose.Schema;

var contatoSchema = new Schema({
	nome: String,
	sobrenome:String,
	telefones: [{numero: String, tipo: String}],
	createdOn: {type: Date, default: Date.now}
});

var Contato = mongoose.model("Contato", contatoSchema);

app.use(bodyParser.json());

app.get('/getContato', function (req, res) {
	
	var query = {};
	Contato.find(query).exec(function (err,result){
		if(err) console.log(err);
		
		else res.json(result);
	});
});

app.post('/adicionarContato', function (req, res) {
	var obj = req.body;
		
	var contato = new Contato({nome: obj.nome,sobrenome:obj.sobrenome, 
								telefones: obj.telefones});
		
	contato.save(function (err, data){
		if (err) console.log(err);
		
		else res.json(data);
	});
});



app.put('/editarContato', function (req, res) {	
	var obj = req.body;
	
	Contato.update({_id: obj.id},
		{$set: {nome: obj.nome,sobrenome:obj.sobrenome}},		
		function (err, result){
			if (err) console.log(err);
		
			else res.json(result);
	});
});

app.delete('/deletarContato/:id', function (req, res) {	
	var id = req.params.id
	
	Contato.remove({_id: id}, function (err, result){
		if (err) console.log(err);
		
		else res.json(result);
	});
});

//----------TELEFONE-----------

app.get('/getTelefones', function (req, res) {
	
	var query = {};
	
	Contato.find(query).exec(function (err,result){
		if(err) console.log(err);
		
		else res.json(result);
	});
});

app.get('/getTelefone/:id', function (req, res) {
	var id = req.params.id
	var query = {_id:id};
	
	Contato.find(query).exec(function (err,result){
		if(err) console.log(err);
		
		else res.json(result);
	});
});

app.put('/adicionarTelefone', function (req, res) {	
	var obj = req.body;
	
	Contato.update({_id: obj.id},
		{$addToSet: {telefones: {numero: obj.numero, tipo: obj.tipo}}},		
		function (err, result){
			if (err) console.log(err);
		
			else res.json(result);
	});
});

app.put('/editarTelefone', function (req, res) {	
	var obj = req.body;
	
	Contato.update({"telefones._id": obj.id},
		{$set: {"telefones.$.numero":obj.numero , "telefones.$.tipo":obj.tipo}},		
		function (err, result){
			if (err) console.log(err);
		
			else res.json(result);
	});
});

app.delete('/deletarTelefone/:idContato/:idTelefone', function (req, res) {	
	var idContato = req.params.idContato;
	var idTelefone = req.params.idTelefone;
	
	Contato.update({_id: idContato},
		{$pull: {telefones: {_id: idTelefone}}},		
		function (err, result){
			if (err) console.log(err);
		
			else res.json(result);
	});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000! Module');
});
var express = require('express');
var app=express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(express.static('public'));

-------------------------------

server.js

app.listen(3000,function(){
	console.log('Example app listening on post 3000');
});
function CadastroService(mongoose, appSchema){
	
	var Cadastro = mongoose.model("Cadastro", appSchema.cadastroSchema);	
	
	this.addCadastroService = function(p_cadastro, successCallback, errorCallback){
		var cadastroSave = new Cadastro(p_cadastro);
		cadastroSave.save(function (err, data){
			if (err) errorCallback(err);
			
			else successCallback(data);
			});
	}
	this.listarCadastroService = function(p_Cadastro, successCallback, errorCallback){		
				Cadastro.find({}, function (err, data) {
					if (err) errorCallback(err);
					
					else successCallback(data);

				});	
			}
}
	/*
	this.editarCadastro = function(p_Cadastro, successCallback, errorCallback){		
		var obj = req.body;
		Cadastro.update({_id: obj.id},
				{$set: {senha: obj.senha}}),
				editarCadastro(function (err, data){
			if (err) errorCallback(err);
			
			else successCallback(data);
		});	
	}
}


function addCadastroService(mongoose, appSchema){
	var obj = req.body;

	var cadastro = new Cadastro({nome: obj.nome,cpf: obj.cpf,email: obj.email, senha: obj.senha});
	
cadastro.save(function (err, data){
	if (err) console.log(err);
	
	else res.json(data);
});
});

*/


module.exports.CadastroService = CadastroService;
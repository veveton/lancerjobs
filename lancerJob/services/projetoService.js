function ProjetoService(mongoose, appSchema){
	var Projeto = mongoose.model("Projeto", appSchema.projetoSchema);	
	var Cadastro = mongoose.model("Cadastro", appSchema.userSchema);

	this.addProjetoService = function(p_projeto, successCallback, errorCallback){		
		var addproj = {_id: p_projeto.params.id};	
		console.log(addproj);
		console.log(p_projeto.body);
		Cadastro.update(addproj,{$addToSet: {projeto: p_projeto.body}},		
				function (err, data){
			if (err) console.log(err);

			else successCallback(data);
		});
	};
};	
/*
	this.addProjetoService = function(p_projeto, successCallback, errorCallback){
		var projetoSave = new Projeto(p_projeto);

		projetoSave.save(function (err, data){
			if (err) errorCallback(err);

			else successCallback(data);
			});
	}*/

/*this.listarProjetoService = function(p_projeto,successCallback, errorCallback){		
				Projeto.find({}, function (err, data) {
					if (err) errorCallback(err);

					else successCallback(data);

				});	
	}
	this.removerProjetoService= function(id,successCallback, errorCallback){		


		Projeto.remove({_id: id}, function (err, data ){
			if (err) errorCallback(err);

			else successCallback(data);

		});	
}
}*/


module.exports.ProjetoService = ProjetoService;
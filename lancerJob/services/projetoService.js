function ProjetoService(mongoose, appSchema){
	var Projeto = mongoose.model("Projeto", appSchema.ProjetoSchema);	
	
	this.salvarProjeto = function(p_projeto, successCallback, errorCallback){
		var projetoSave = new Projeto(p_projeto);
		
		projetoSave.save(function (err, data){
			if (err) errorCallback(err);
			
			else successCallback(data);
		});	
	}
	this.listarProjetoService = function(successCallback, errorCallback){		
		Projeto.find({}, function (err, data) {
			if (err) errorCallback(err);
			
			else successCallback(data);

		});	
	}
}

module.exports.ProjetoService = ProjetoService;

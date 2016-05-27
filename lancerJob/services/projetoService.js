function ProjetoService(mongoose, appSchema){
	
	var Projeto = mongoose.model("Projeto", appSchema.projetoSchema);	
	
	this.addProjetoService = function(p_projeto, successCallback, errorCallback){
		var projetoSave = new Projeto(p_projeto);

		projetoSave.save(function (err, data){
			if (err) errorCallback(err);
			
			else successCallback(data);
			});
	}
	this.listarProjetoService = function(p_projeto,successCallback, errorCallback){		
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
}
			
	
module.exports.ProjetoService = ProjetoService;
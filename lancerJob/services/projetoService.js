function ProjetoService(mongoose, appSchema){
	
	var Projeto = mongoose.model("Projeto", appSchema.projetoSchema);	
	var Cadastro = mongoose.model("Cadastro", appSchema.userSchema);
	
	this.listarProjetoService = function(p_projeto,successCallback, errorCallback){		
		Cadastro.aggregate({
			 $group: {
				   _id: {
				     projetoList: "$projeto",
				   }
				 }}, function (err, data) {
			if (err) errorCallback(err);
			
			else successCallback(data);
			
			

		});	
	}
	
	this.addProjetoService = function(p_projeto, successCallback, errorCallback){
	
		var projetoSave = {_id:p_projeto.params.id};
		console.log(projetoSave);
		console.log(projetoSave.body);
		Cadastro.update(projetoSave,{$addToSet: {projeto: p_projeto.body}},		
				function (err, data){
					if (err) console.log(err);
				
					else successCallback(data);
			});
		};
	};
	
	

	this.removerProjetoService= function(id,successCallback, errorCallback){		
		
		
		Projeto.remove({_id: id}, function (err, data ){
			if (err) errorCallback(err);
			
			else successCallback(data);

		});	
		
	this.nomeprojeto= function(p_projeto,successCallback, errorCallback){	
		Cadastro.aggregate({
			 $group: {
				   _id: {
				     projetoList: "$projeto",
				   }
				 }}, function (err, data) {
			if (err) errorCallback(err);
			
			else successCallback(data);
			
			

		});	
	}
		
};

			
	
module.exports.ProjetoService = ProjetoService;

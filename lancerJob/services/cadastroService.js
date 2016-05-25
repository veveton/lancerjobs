function CadastroService(mongoose, appSchema){
	var Cadastro = mongoose.model("Cadastro", appSchema.cadastroSchema);	
	
	this.salvarCadastro = function(p_Cadastro, successCallback, errorCallback){
		var cadastroSave = new Cadastro(p_cadastro);
		
		cadastroSave.save(function (err, data){
			if (err) errorCallback(err);
			
			else successCallback(data);
		});	
	}
}




module.exports.CadastroService = CadastroService;
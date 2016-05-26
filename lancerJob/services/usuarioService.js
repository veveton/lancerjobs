function UsuarioService(mongoose, appSchema){
	
	var Cadastro = mongoose.model("Usuario", appSchema.userSchema);	
	
	this.addCadastroService = function(p_cadastro, successCallback, errorCallback){
		var cadastroSave = new Cadastro(p_cadastro);
		cadastroSave.save(function (err, data){
			if (err) errorCallback(err);
			
			else successCallback(data);
			});
	}
	this.listarCadastroService = function(successCallback, errorCallback){		
				Cadastro.find({}, function (err, data) {
					if (err) errorCallback(err);
					
					else successCallback(data);

				});	
	}
}
			
	
module.exports.UsuarioService = UsuarioService;
function PerfilService(mongoose, appSchema){
	var Perfil = mongoose.model("Perfil", appSchema.perfilSchema);	
	
	this.salvarPerfil = function(p_perfi, successCallback, errorCallback){
		var perfilSave = new Avaliacao(p_perfi);
		
		perfilSave.save(function (err, data){
			if (err) errorCallback(err);
			
			else successCallback(data);
		});	
	}
	
	this.listarPerfilService = function(successCallback, errorCallback){		
		Perfil.find({}, function (err, data) {
			if (err) errorCallback(err);
			
			else successCallback(data);

		});	
	}
	
	this.editarPerfilService = function(successCallback, errorCallback){		
		Perfil.find({}, function (err, data) {
			if (err) errorCallback(err);
			
			else successCallback(data);

		});	
	}
}

module.exports.PerfilService = PerfilService;

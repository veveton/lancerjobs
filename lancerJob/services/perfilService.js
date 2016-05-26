function PerfilService(mongoose, appSchema){
	var Perfil = mongoose.model("Perfil", appSchema.perfilSchema);	
	var Cadastro = mongoose.model("Cadastro", appSchema.userSchema);	
	
	this.salvarPerfil = function(p_perfi, successCallback, errorCallback){
		var perfilSave = new Perfil(p_perfi);
		
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
	this.addperfilCadService = function(p_perfil,successCallback, errorCallback){		
			Cadastro.update({_id: p_perfil.iduser},
			{$addToSet: {perfil: p_perfil._id}},		
			function (err, data){
				if (err) console.log(err);
			
				else successCallback(data);
		});
	};
};
	
	


module.exports.PerfilService = PerfilService;

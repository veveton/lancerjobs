function UserService(mongoose, appSchema){
	
	var Cadastro = mongoose.model("Cadastro", appSchema.cadastroSchema);	
	
	this.adduserService = function(p_cadastro, successCallback, errorCallback){
		var cadastroSave = new Cadastro(p_cadastro);
		cadastroSave.save(function (err, data){
			if (err) errorCallback(err);
			
			else successCallback(data);
			});
	}
	this.listarUserService = function(successCallback, errorCallback){		
				Cadastro.find({}, function (err, data) {
					if (err) errorCallback(err);
					
					else successCallback(data);

				});	
	}
}
			
	
module.exports.UserService = UserService;
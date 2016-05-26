function UserService(mongoose, appSchema){
	
	var Cadastro = mongoose.model("Cadastro", appSchema.userSchema);	
	
	this.addUserService = function(p_cadastro, successCallback, errorCallback){
		var cadastroSave = new Cadastro(p_cadastro);
		cadastroSave.save(function (err, data){
			if (err) errorCallback(err);
			
			else successCallback(data);
			});
	}
	
	this.listarUserService = function(p_cadastro,successCallback, errorCallback){		
		
		var query = {};		
		Cadastro.find(query).exec (function (err, data) {
					if (err) errorCallback(err);
					
					else successCallback(data);

				});	
	}
	
this.loguinService = function(p_cadastro,successCallback, errorCallback){	
	
		console.log(p_cadastro);
		var query = {email:p_cadastro.email,senha:p_cadastro.senha};		
		Cadastro.find(query).exec (function (err, data) {
					if (err) errorCallback(err);
					
					else successCallback(data);
						
				});	
	}
	
	
}
			
	
module.exports.UserService = UserService;

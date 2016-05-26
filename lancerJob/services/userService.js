function UserService(mongoose, appSchema){
	
	var Cadastro = mongoose.model("Cadastro", appSchema.userSchema);	
	
	this.addUserService = function(p_cadastro, successCallback, errorCallback){
		var cadastroSave = new Cadastro(p_cadastro);
		cadastroSave.save(function (err, data){
			if (err){ errorCallback(err);}
			
			else {successCallback(data);}
			});
	}
	this.listarUserService = function(p_cadastro,successCallback, errorCallback){		
				Cadastro.find({}, function (err, data) {
					if (err){ errorCallback(err);}
					
					else{successCallback(data);}

				});	
	}
	
};			
	
module.exports.UserService = UserService;
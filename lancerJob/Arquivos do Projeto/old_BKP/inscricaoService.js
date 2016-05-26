function InscricaoService(mongoose, appSchema){
	
	var Inscricao = mongoose.model("Inscricao", appSchema.inscricaoSchema);	
	
	this.addInscricaoService = function(p_inscricao, successCallback, errorCallback){
		var inscricaoSave = new Inscricao(p_inscricao);
		inscricaoSave.save(function (err, data){
			if (err) errorCallback(err);
			
			else successCallback(data);
			});
	}
	this.listarInscricaoService = function(p_inscricao, successCallback, errorCallback){		
		Inscricao.find({}, function (err, data) {
					if (err) errorCallback(err);
					
					else successCallback(data);

				});	
	}
}
			
	
module.exports.InscricaoService = InscricaoService;
function AvaliacaoService(mongoose, appSchema){
	var Avaliacao = mongoose.model("Avaliacao", appSchema.avaliacaoSchema);	
	
	this.salvarAvaliacao = function(p_avaliacao, successCallback, errorCallback){
		var avaliacaoSave = new Avaliacao(p_avaliacao);
		
		avaliacaoSave.save(function (err, data){
			if (err) errorCallback(err);
			
			else successCallback(data);
		});	
	}
}

module.exports.AvaliacaoService = AvaliacaoService;

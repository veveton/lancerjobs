function AppSchema(mongoose){
	var Schema = mongoose.Schema;
	
	this.avaliacaoSchema = new Schema({
		
		nota: Number,
		descricao: String,
		replica: String,
		createdOn: {type: Date, default: Date.now}
	});
	
	this.perfilSchema = new Schema({
		nome: String,
		especialidade: String,
		ranking: Number,
		projConcluido: String,
		dataRegistro: Date,
		resumoProfissional: String,
		perfil: String,
		habilidades: String,
		avaliacao:[this.avaliacaoSchema],
		areaInteresse: String,

	});//FALTA O CAMPO FOTO


	this.projetoSchema = new Schema({

		nomeproj: String,
		horas:String,
		prazofinal: String,
		categoria: String,
		requisitos: String,
		nivel: String,
		prioridade: String,
		descricao: String,
		valor: String,
		aprovadoStatus: Boolean,
		projetosAnuciado:Boolean,
		projetosConcluidos:Boolean,
		inscritos:[this.perfilSchema],
		proposta: String,
		createdOn: {type: Date, default: Date.now}
	});


	this.userSchema = new Schema({ // nome do schema mudou
		nome: String,
		cpf: String,
		email:String,
		senha: String,
		perfil:[this.perfilSchema],
		projeto:[this.projetoSchema],
		
		createdOn: {type: Date, default: Date.now}

	});



	
}


/*
this.inscricaoSchema = new Schema({
	idproj: String,
	idcadastro: String,
	status: Boolean,
	createdOn: {type: Date, default: Date.now}
});*/
module.exports.AppSchema = AppSchema;
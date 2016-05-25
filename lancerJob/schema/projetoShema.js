function ProjetoSchema(mongoose){
	var Schema = mongoose.Schema;

	this.projetoSchema = new Schema({
		idUser: String,
		nomeProjeto: String,
		horas: String,
		dataInicial: {type: Date, default: Date.now},
		dataFinal: Date,
		categoria: String,
		requisitos: String,
		nivel: String,
		prioridade: String,
		descri: String,
		valor: String,
		propostas: String
		
	});
	
	
	this.avaliacaoSchema = new Schema({
		idProj: String,
		idPerfil: String,
		nota: String,
		descricao: String,
		replica: String,
		createdOn: {type: Date, default: Date.now}
	});
	
	
	this.perfilSchema = new Schema({
		idUser: String,
		nome: String,
		especialidade: String,
		ranking: String,
		projetoConcluido: String,
		dataRegistro: {type: Date, default: Date.now},
		resumo: String,
		perfil: String,
		habilidades: String,
		areaInteresse: String
		
	});
	
	
	this.inscricaoSchema = new Schema({
		idProj: String,
		idUser: String,
		status: String
		
		
	});
	
}


module.exports.ProjetoSchema = ProjetoSchema;
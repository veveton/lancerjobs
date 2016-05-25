function AppSchema(mongoose){
	var Schema = mongoose.Schema;

	this.cadastroSchema = new Schema({
		nome: String,
		cpf: String,
		email:String,
		senha: String,
		createdOn: {type: Date, default: Date.now}
	});
	
	this.projetoSchema = new Schema({
		idcadastro: String,
		nomeproj: String,
		horas:String,
		prazofinal: String,
		categoria: String,
		requisitos: String,
		nivel: String,
		prioridade: String,
		descricao: String,
		valor: String,
		proposta: String,
		createdOn: {type: Date, default: Date.now}
	});
	this.inscricaoSchema = new Schema({
		idproj: String,
		idcadastro: String,
		status: Boolean,
		createdOn: {type: Date, default: Date.now}
	});
}


module.exports.AppSchema = AppSchema;
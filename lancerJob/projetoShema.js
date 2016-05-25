function AppSchema(mongoose){
	var Schema = mongoose.Schema;

	this.contatoSchema = new Schema({
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
}


module.exports.AppSchema = AppSchema;
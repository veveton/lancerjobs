function AvaliacaoSchema(mongoose){
	var Schema = mongoose.Schema;

	this.avaliacaoSchema = new Schema({
		idProj: String,
		idPerfil: String,
		nota: String,
		descricao: String,
		replica: String,
		createdOn: {type: Date, default: Date.now}
	});
}

module.exports.AvaliacaoSchema = AvaliacaoSchema;
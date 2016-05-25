function AppSchema(mongoose){
	var Schema = mongoose.Schema;

	this.contatoSchema = new Schema({
		idProj: String,
		idPerfil: String,
		nota: String,
		descricao: String,
		replica: String
		
	});
}

module.exports.AppSchema = AppSchema;
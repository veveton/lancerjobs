function AppSchema(mongoose){
	var Schema = mongoose.Schema;

	this.cadastroSchema = new Schema({
		nome: String,
		cpf: String,
		email:String,
		senha: String,
		createdOn: {type: Date, default: Date.now}
	});
}


module.exports.AppSchema = AppSchema;
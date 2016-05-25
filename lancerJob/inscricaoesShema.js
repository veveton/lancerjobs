function AppSchema(mongoose){
	var Schema = mongoose.Schema;

	this.contatoSchema = new Schema({
		idProj: String,
		idUser: String,
		status: String
		
		
	});
}

module.exports.AppSchema = AppSchema;
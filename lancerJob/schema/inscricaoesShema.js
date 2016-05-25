function InscricaoSchema(mongoose){
	var Schema = mongoose.Schema;

	this.inscricaoSchema = new Schema({
		idProj: String,
		idUser: String,
		status: String
		
		
	});
}

module.exports.InscricaoSchema = InscricaoSchema;
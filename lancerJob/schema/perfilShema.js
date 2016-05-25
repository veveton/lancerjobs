function AppSchema(mongoose){
	var Schema = mongoose.Schema;

	this.contatoSchema = new Schema({
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
}

/*Falta a foto*/
module.exports.AppSchema = AppSchema;
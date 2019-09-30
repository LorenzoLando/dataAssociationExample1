var mongoose = require("mongoose");
// //USER - email, name
// //1-definisco uno schema per i record user
// //2-utilizzo lo schema in un modello
// //3- definisco un attributo posts che conterra` un array di id  
// 	//3.1 - definisce l`oggetto che e` un mongoose object id
// 	//3.2 - che appartiene a un post

var userSchema = new mongoose.Schema({ //1 
	email: String,
	name: String,
	posts: [ //3
		{
			type: mongoose.Schema.Types.ObjectId,  //3.1
			ref: "Post"	 //3.2
		}
	]
});


//indico cosa voglio esportare, simile al return in una funzione
module.exports = mongoose.model("User", userSchema); //2
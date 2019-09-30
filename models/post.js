var mongoose = require("mongoose");

//POST - title, content
//1-definisco uno schema per i record POST
//2-utilizzo lo schema in un modello 
 
var postSchema = new mongoose.Schema({ //1
	title: String,
	content: String
});

var Post = mongoose.model("Post", postSchema); //2

//indico cosa voglio esportare, simile al return in una funzione
module.exports = mongoose.model("Post", postSchema);
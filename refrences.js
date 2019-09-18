//1- mongoose e` il pacchetto che permette di creare uno schema per i record che inseriremo nel database
//2- connesso al database
var mongoose = require("mongoose"); //1
mongoose.connect("mongodb://localhost/blog_demo_2"); //2

//POST - title, content
//1-definisco uno schema per i record POST
//2-utilizzo lo schema in un modello 
 
var postSchema = new mongoose.Schema({ //1
	title: String,
	content: String
});

var Post = mongoose.model("Post", postSchema); //2





//USER - email, name
//1-definisco uno schema per i record user
//2-utilizzo lo schema in un modello
//3- definisco un attributo posts che conterra` un array di id  
	//3.1 - definisce l`oggetto che e` un mongoose object id
	//3.2 - che appartiene a un post



var userSchema = new mongoose.Schema({ //1
	email: String,
	name: String,
	posts: [ //3
		{
			type: mongoose.Schema.Types.ObectId, //3.1
			ref: "Post" //3.2
		}
	]
});

var User = mongoose.model("User", userSchema); //2

User.create({
	email: "ciao@ciao.it",
	name: "La zucca"
	
}, (err, user)=> {
	if(err){
		console.log(err);
	} else {
		console.log(user);
	}
});






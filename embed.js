//1- mongoose e` il pacchetto che permette di creare uno schema per i record che inseriremo nel database
//2- connesso al database
var mongoose = require("mongoose"); //1
mongoose.connect("mongodb://localhost/blog_demo"); //2

//POST - title, content
//1-definisco uno schema per i record POST
//2-utilizzo lo schema in un modello 
 
var postSchema = new mongoose.Schema({ //1
	title: String,
	content: String
});

var Post = mongoose.model("Post", postSchema); //2


//crea una nuova instanza di Post e iseriscila nel database

// var newPost = new Post({title: "The Snoopy post", content: "This is the first post the regards Snoopy"});
// newPost.save((err, post)=>{
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(post);
// 	}
// });


//USER - email, name
//1-definisco uno schema per i record user
//2-utilizzo lo schema in un modello
//3- per associare i post agli users devo dare una key che contiene un array di users

var userSchema = new mongoose.Schema({ //1
	email: String,
	name: String,
	posts: [postSchema] //3
});

var User = mongoose.model("User", userSchema); //2



//crea una nuova instanza di user 

 // var newUser = new User({
 // email: "ciao@ciao.it", 
 // name: "Test Test"
 // });

//pusho il post all`interno dell`array di post 
//genero un nuovo record dello schema post 

// newUser.posts.push({
// 	title: "This is the post title",
// 	content: "This is the content of the post"
// });


//inserisci la nuva instanza di user ne database
// newUser.save((err, user)=>{
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(user);
// 	}
// });


//AGGIUNGERE UN NUOVO POST A UN RECORD ESISTENTE
//1-cerchiamo una istanza du user nel database con name: "Test Test"
//2- se viene trovata ci pusciamo un nuovo post
//3- la salviamo nel database
User.findOne({name: "Test Test"}, (err, user)=> { //1
	if(err){
		console.log(err);
	}else {
		console.log(user);
		user.posts.push({ //2
			title: "this is the second post test",
			content: "this is the content of the second test"
		});
		user.save((err, user)=> { //3
			if(err){
				console.log(err);
			} else {
				console.log(user);
			}
		});
	}
});











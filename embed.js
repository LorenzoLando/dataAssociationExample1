//1- mongoose e` il pacchetto che permette di creare uno schema per i record che inseriremo nel database
//2- connesso al database
//1- mongoose e` il pacchetto che permette di creare uno schema per i record che inseriremo nel database
//2- connesso al database
const express = require("express");
	  app = express(), //creo una istanza di esxpress
	  mongoose = require("mongoose"); //1

//POST - title, content
//1-definisco uno schema per i record POST
//2-utilizzo lo schema in un modello 
 
var postSchema = new mongoose.Schema({ //1
	title: String,
	content: String
});

var Post = mongoose.model("Post", postSchema); //2


//1- crea una nuova instanza di Post 
//2- la salvo nel database

// var newPost = new Post({title: "The Snoopy post", content: "This is the first post the regards Snoopy"}); //1
// newPost.save((err, post)=>{ //2
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(post);
// 	}
// });


//USER - email, name
//1-definisco uno schema per i record user
//2-utilizzo lo schema in un modello
//3- per associare i post agli users devo dare una key che contiene un array di posts

var userSchema = new mongoose.Schema({ //1
	email: String,
	name: String,
	posts: [postSchema] //3
});

var User = mongoose.model("User", userSchema); //2



//crea una nuova instanza di user 



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




//Mi connetto al server NB: questa riga puo` andare in qualunque posizione del file il metodo viene richiamato ogni volta 
//che viene fatta una richiesta in questo port.
//il codice apre il port a ricevere richieste http
app.listen(3000, () => {
  console.log("embeded app has started!!!!!");
});











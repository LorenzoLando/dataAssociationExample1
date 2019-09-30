//1- mongoose e` il pacchetto che permette di creare uno schema per i record che inseriremo nel database
//2- connesso al database
var mongoose = require("mongoose"); //1
mongoose.connect("mongodb://localhost/blog_demo_2"); //2

//richiedo il valore che mi torna dal file models/post e lo associo alla variabile Post
var Post = require("./models/post");


//richiedo il valore che mi torna dal file models/user e lo associo alla variabile User
var User = require("./models/user");



//1-Creo un post 
//2-cerco uno user specifico nel database
//3-aggiungo il nuovo post allo user
//4-salvo il nuovo post nel database
Post.create({  //1
	
	title: "Siamo tutti felici",
	content: "Cantami di questo tempo l`astio e il malcontento di chi e` sottovento"

}, (err, post)=> {
	 User.findOne({email: "lorenzo@lando.it"}, (err, foundUser) => { //2
			if(err) {
				console.log(err);
			} else {
				foundUser.posts.push(post); //3
				foundUser.save((err, data) => { //4
					if(err){
					   	console.log(err);
					   } else {
					   	console.log(data);
					   }
				});
			} 
	 });
});



//Find user
//1-find all posts of a user with a certain email
//2-lo popolo con tutti i post che trovo relativi agli id inseriti in quell user
//3-eseguo il codice
		//1									//2					//3
User.findOne({email:"lorenzo@lando.it"}).populate("posts").exec((err, user)=>{
	if(err) {
		console.log(err);
	} else {
		console.log(user);
	}
});
















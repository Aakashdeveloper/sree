var express = require('express');

var app = express();

var port = 5000;

app.use(express.static(__dirname+'/public'));

app.set('views', './src/views');
app.set('view engine', 'ejs');


app.get('/', function(req,res){
	//res.send("hello i am here");
	res.render('index', {title:"hello i am new",list:["home","about","contact"]})
});

app.get('/books',function(req,res){
	res.send("hello books");
})



app.listen(port, function(err){
	console.log("server running on port "+port);
});
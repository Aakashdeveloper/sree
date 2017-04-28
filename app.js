var express = require('express');

var app = express();

var port = 5000;

app.get('/', function(req,res){
	res.send("hello i am here")
});

app.get('/books',function(req,res){
	res.send("hello books")
})



app.listen(port, function(err){
	console.log("server running on port "+port);
});
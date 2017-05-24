var express = require("express"),
	app = express(),
	cons = require('consolidate'),
	http=require('http'),
	bodyParser = require('body-parser');

app.engine('html', cons.swig);
app.use(express.static(__dirname + '/public'));
app.set('views', './src/views');
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res, next){
	res.render("carpicker",{'cars':['bmw','audi','w']})
});

app.post('/fav_car',function(req,res,next){
	var fav = req.body.car;
	if(typeof fav == "undefined"){
		next(Error('select car'))
	} else{
		res.send("my fav car is "+fav)
	}
})

var server = http.createServer(app);
server.listen(2100);
console.log("running");

var express = require('express');

var app = express();

var port = 5000;

var nav = [{
        Links: '/Books',
        Text: 'Boook'
      }, {
        Links: '/Authors',
        Text: 'Authors'
      }]

var bookRouter = express.Router();
var bookRouter = require('./src/routes/bookRoutes')(nav);

app.use(express.static(__dirname + '/public'));

app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use('/Books', bookRouter);


app.get('/Authors', function(req, res) {
  //res.send("hello i am here");
  res.render('author', {
    title: "NodeJs",
    nav: nav
  });
});
app.get('/', function(req, res) {
  //res.send("hello i am here");
  res.render('index', {
    title: "NodeJs",
    nav: nav
  });
});

app.listen(port, function(err) {
  console.log("server running on port " + port);
});
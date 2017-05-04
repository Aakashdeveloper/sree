var express = require('express');

var app = express();

var port = 5000;
var bookRouter = express.Router();

app.use(express.static(__dirname + '/public'));

app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use('/Books', bookRouter);

bookRouter.route('/')
    .get(function(res, res){
      res.render('bookListView', {
    title: "NodeJs",
    nav: [{
      Links: '/Books',
      Text: 'Boook'
    }, {
      Links: '/Authors',
      Text: 'Authors'
    }]
   });
  });

bookRouter.route('/single')
    .get(function(req,res){
      res.send("i am single book")
    });

app.get('/Authors', function(req, res) {
  //res.send("hello i am here");
  res.render('author', {
    title: "NodeJs",
    nav: [{
      Links: '/Books',
      Text: 'Boook'
    }, {
      Links: '/Authors',
      Text: 'Authors'
    }]
  });
});
app.get('/', function(req, res) {
  //res.send("hello i am here");
  res.render('index', {
    title: "NodeJs",
    nav: [{
      Links: '/Books',
      Text: 'Boook'
    }, {
      Links: '/Authors',
      Text: 'Authors'
    }]
  });
});

/*app.get('/books', function(req, res) {
  res.send("hello books");
});
*/


app.listen(port, function(err) {
  console.log("server running on port " + port);
});
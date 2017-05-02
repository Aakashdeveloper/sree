var http = require('http');

var server = http.createServer(function(req, res){
	res.writeHead(200, {"Contant-type": "text/plain"} );
	res.end("hello, world");
});

server.listen(8000);
console.log("server running on port 8000");
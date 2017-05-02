var fs = require("fs");
console.log("going to write");
fs.writeFile('input.txt','this is pipe', function(err){
	if(err){
		return console.error(err);
	}
	fs.readFile('input.txt', function(err, data){
		if(err){
			return console.error(err);
		}
		console.log("response::::"+data.toString());
	});
});
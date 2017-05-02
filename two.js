var one = require('./one')

one.add(23, function(err, result){
	console.log(result)
});

console.log(one.giving);

console.log(one.foo);

console.log(one.count);
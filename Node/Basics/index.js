var add = require('./addition.js');
var Calc1 = require('./calculator.js');
var { sub }  = require('./calculator.js');
var Calc2 = require('./calculator2.js');
var { subtraction } = require('./calculator2.js');
var Person = require('./person.js');
var Son = require('./son.js');

var http = require('http');
var fs = require('fs');

console.log('Welcome to Demo');
console.log('Addition of 1 and 2 is ' + add(1, 2));
console.log('Addition of 2 and 4 is ' + Calc1.add(2, 4));
console.log('Subtraction of 2 and 4 is ' + sub(2, 4));
console.log('Addition of 2 and 4 is ' + Calc2.addition(2, 4));
console.log('Subtraction of 2 and 4 is ' + subtraction(2, 4));

var p1 = new Person();
p1.setName("Neha Singh");
console.log("Welcome to " + p1.getName());

var s1 = new Son();
console.log("Welcome to " + s1.getName() + "," + s1.getAge() + "," + s1.getGender());

/*
http.createServer(function(req, res){
	console.log('Server Running');
	res.end('Welcome to HTML Demo');
}).listen(3030);
*/

http.createServer(function(req, res) {
	fs.readFile('pages/demo7.html', function(error, response){
		if(error){
			res.writeHead(404);
			res.write('Content not found');
		}
		else {
			res.writeHead(200, { 'content-type': 'text/html'});
			res.write(response);
		}
		res.end();
	});
}).listen(3030);
/* jshint esversion: 6 */

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Travis!\n'); 
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

//Necessary library for Mocha framework to work
const expect = require('chai').expect;

//Basic test to check mocha is running as intended


var testVar = "hello world";

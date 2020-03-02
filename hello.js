/* jshint esversion: 6 */

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Travis!\n'); 
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

//Basic test to check mocha is running as intended



function question1A() {
  var names = ["Flash", "Anne", "Chelsee", "Corrie", "Des", "Zed"];
}

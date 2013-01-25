console.log('VERSIONS:',process.versions);
console.log('ENV:',process.env);

var http = require('http');
var port = process.env.PORT || 1337;
console.log('PORT:',port);
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port);
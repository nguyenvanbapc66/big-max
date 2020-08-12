const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // res.writeHead(200, { 'Content-Type': 'text/html' });
  const html = fs.readFileSync(__dirname + '/index.html', 'utf-8');
  res.end(html);

}).listen(3000)
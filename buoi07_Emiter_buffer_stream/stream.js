//P1: Làm quen stream
const fs = require('fs');
fs.createReadStream('node-log.log.1', { highWaterMark: 1024 })
  .on('data', function (data) {
    console.log('line 5', data.length, data.toString('utf-8', 0, 100));
    if (data.length == 109) {
      console.log('line 7', data.toString());
    }
  })
  .on('end', function () {
    console.log('line 8 end');
  })


//P2: Làm quen stream
const fs = require('fs');
var writable = fs.createWriteStream('copy-log.txt');
fs.createReadStream('node-log.log.1', { highWaterMark: 1024 })
  .on('data', function (data) {
    writable.write(data)
  })
  .on('end', function () {
    writable.end();
    console.log('line 8 end');
  })

//P3: pipe
const fs = require('fs');
var readable = fs.createReadStream('node-log.log.1', { highWaterMark: 1024 });
var writable = fs.createWriteStream('copy-log.txt');
readable.pipe(writable);

//P3: pipe nối tiếp
const fs = require('fs');
const zlib = require('zlib');
var readable = fs.createReadStream('node-log.log.1', { highWaterMark: 1024 });
var writable = fs.createWriteStream('copy-log.txt');
var compressed = fs.createWriteStream('copy-compressed.txt.gz');
var gzip = zlib.createGzip();

//copy
readable.pipe(writable);
//compress
readable.pipe(gzip).pipe(compressed);

//P4: ứng dụng pipe làm ứng dụng proxy
//http://www.google.com/images/srpr/logo11w.png
var http = require('http');

http.createServer(onRequest).listen(3000);

function onRequest(client_req, client_res) {
  console.log('serve: ' + client_req.url);

  var options = {
    hostname: 'www.google.com',
    port: 80,
    path: client_req.url,
    method: client_req.method,
    headers: client_req.headers
  };

  var proxy = http.request(options, function (res) {
    client_res.writeHead(res.statusCode, res.headers)
    res.pipe(client_res, {
      end: true
    });
  });

  client_req.pipe(proxy, {
    end: true
  });
}
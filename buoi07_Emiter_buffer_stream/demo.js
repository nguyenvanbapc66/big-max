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
var fs = require('fs'); // file system module

var readableStream = fs.createReadStream('input.txt'); // input stream

var data = '';

readableStream.setEncoding('utf-8');
readableStream.on('data', function(chunk) {
    data += chunk;
});
// asynchronous function
readableStream.on('end', () =>{
    console.log(data);
});


var writeData = "Hello World";
var writableStream = fs.createWriteStream('output.txt');
writableStream.write(writeData, 'utf-8');

writableStream.end();
writableStream.on('finish', function() {
    console.log("Write completed");
});
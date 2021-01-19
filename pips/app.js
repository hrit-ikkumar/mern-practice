var fs = require('fs');
var readableStream = fs.createReadStream('input.txt');
var writeableStream = fs.createWriteStream('output.txt');

readableStream.pipe(writeableStream); // pipe will write the content into the output.txt
// no need to manage any flow.

var fs = require('fs'); // file module
fs.readFile('input.txt', function(err, data){ // asynchronous
    if(err)
    {
        console.log("ERROR: ",err);
    }
    else
    {
        console.log("DATA: ", data.toString());
    }
});

var data = fs.readFileSync("input.txt"); //synchronous
console.log(data.toString());

console.log("This is the end");
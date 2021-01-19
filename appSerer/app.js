var http = require('http');
function onRequest(req,res) {
    console.log("Request has been recieved");
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write('Hello'); // message
    res.end(); // send the response
}


http.createServer(onRequest).listen(3000); // port 3000

console.log("Server is running at localhost port 3000");

var http = require('http');
var url = require('url'); // url class for the path name
const { start } = require('repl');

function startServer(route){
    function onRequest(req, res)
    {
        var pathname = url.parse(req.url).pathname; // path name from the url
        console.log("Request received", pathname);
        route(pathname);
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write("Hello World");
        res.end();
    }

    http.createServer(onRequest).listen(3000); 
    console.log("Server is running on localhost port 3000");
}

module.exports.startServer = startServer;
var server = require('./server'); // server module imported
var route = require('./route'); // route module imported

server.startServer(route.route); // running function from another module

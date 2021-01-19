var server = require('./server'); // server module imported
var route = require('./route'); // route module imported
var handler = require('./handler'); // handler module imported

var handle = {}; // dictionary key value pair
handle["/"] = handler.home
handle["/home"] = handler.home;
handle["/review"] = handler.review;

server.startServer(route.route, handle); // running function from another module

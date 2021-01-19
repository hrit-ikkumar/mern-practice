function route(pathname)
{
    console.log("Request has been sent to: ", pathname);
}

module.exports.route = route; // route function has been exported here
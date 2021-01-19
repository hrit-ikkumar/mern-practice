function route(handle, pathname)
{
    if(typeof handle[pathname] === 'function')
    {
        handle[pathname]();
    }
    else
    {
        console.log("No handler for "+pathname);
    }
}

module.exports.route = route; // route function has been exported here
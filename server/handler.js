function home() {
    console.log("Executing `home` handler");
}

function review() {
    console.log("Executing `review` handler"); 
}

module.exports.home = home; // home function has been exported
module.exports.review = review; // review function has been exported
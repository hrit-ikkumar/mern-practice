/*function hello(message) {
    console.log(message);
}
function temp(){
    console.log("Hello World");
}

module.exports.hello = hello;
module.exports.temp = temp; // export for outside this files
*/

module.exports = {
    hello: function(){
        console.log("This is hello function");
    },
    longJump: function() {
        console.log("This is longJump function");
    }
}
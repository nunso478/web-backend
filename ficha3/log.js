var log = "hello Module!";
var testfuncion = function(){
    console.log("hello function")
};
function FF() {
    console.log("FF");
}

var test = "hello test";
var obj = {message:"hello message",
            functionobj:function(info){
                return "this function " + info
 }
}
module.exports = obj;
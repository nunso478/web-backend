//executar em modo:"normal"
//executar em mode "debug"


function teste(msg) {
    console.log(msg + "  teste");
}
teste("hello");
teste(5);
teste(2.5);
var fn = function (){
    console.log("anonnymous");
}

function log (func) {
    func();
    
}
log(fn);
log(function(){
    console.log("anonnymous 2");
});



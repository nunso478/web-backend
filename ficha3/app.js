function started( ) {
    console.log("Started Download");
    
}
function update(value) {
        console.log(value +"% of Download completed")
 
}
function completed() {
    console.log("completed Download")
}
function performDownload(startedF,updateF,completedF) {
    startedF();
    for (let i = 0; i <= 100; i++) {   
          updateF(i);
    }
  
    completedF();
    
}
const arrayUtils = require("./ArrayUtils.js");
//performDownload(started,update,completed);

//============================================================================
var log = require("./ArrayUtils.js");
var array = [12,43,6,8,0];
console.log("o array está vazio? " + arrayUtils.isEmpty(array));
console.log("o maximo do array é: " + arrayUtils.max(array));
console.log("o minimo do array é: " + arrayUtils.min(array));
console.log("a media do array é: " + arrayUtils.avarege(array));
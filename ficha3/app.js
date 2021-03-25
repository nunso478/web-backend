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
var otherArray = [7,10];
console.log("o array está vazio? " + arrayUtils.isEmpty(array));
console.log("o maximo do array é: " + arrayUtils.max(array));
console.log("o minimo do array é: " + arrayUtils.min(array));
console.log("a media do array é: " + arrayUtils.avarege(array));
console.log("O indice do valor: " + 6 + " e: " + arrayUtils.indexOf(array,6));


var subarray = arrayUtils.subarray(array,3,5);
console.log("O sub-array é: " + subarray);

var sameSize = arrayUtils.isSameLength(array,otherArray);
console.log("Os arrays são do mesmo tamanho: "+ sameSize);

var inverteArray = arrayUtils.reverse(array);
console.log("O array invertido é: " + inverteArray);

var swapArray = arrayUtils.swap(array, 0, 9);
console.log("o array alterado: " + swapArray);

console.log("O array contém o valor: " + arrayUtils.contains(array,6));


var concatenateArray = arrayUtils.concatenate(array,otherArray);
console.log("o array alterado: " + concatenateArray);

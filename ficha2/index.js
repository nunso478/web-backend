//inputs ?
//peso e altura

//outputs
//imc
// assinatura da funçao
function calcularIMC(weigh,height){
    var imc = weigh / Math.pow(height,2);
    return imc;
}
function logIMC(weight,height){
    var imc = calcularIMC(weight, height);
    if(imc < 18.5){
        console.log("IMC: " + imc + ". Esta abaixo do peso");
    }
    else if(imc >= 18.5 && imc < 25){
        console.log("IMC: " + imc + ". Esta normal do peso");
    }
    else if(imc >= 25 && imc < 30){
        console.log("IMC: " + imc + ". Esta cima do peso");
    }
    else{
        console.log("IMC: " + imc + ". Esta obeso");
    }

} 
// invocação da função com argumentos e atribuiçao a variavel
var imc = calcularIMC(80 , 2);
// imprimir o resultado na consola 
console.log(imc);
logIMC(200,2);


//exercicio 2
// ognimaoD e ejoh
function invertsword(str){
    var inv = ""
    for (let index = str.length -1; index >= 0; index--) {
       inv += str[index];
        
    }
    return inv;
}
function invertstring(str,pattern){
    var inv = ""
    var split  = "hoje e Domingo".split(pattern);
    for (let index = 0; index < split.length; index++) {
         var word = invertsword(split[index]);
         inv += word + pattern;
          
        
    }
    return inv
}
var invertsstr = invertstring("hoje,e,Domingo",",");
console.log(invertsstr);

//exercicio 3 
function countConsnats(str){
    var count = 0;
    var vogals = ["a","e","i","o","u"]
    for (let index = 0; index < str.length; index++) {
       for (let j = 0; j < vogals.length; index++) {
            if (str[index] != vogals[j]) {
                count++;
                
            }
           
            
        }
        
    }
    return count;
}
var vogals = countvogols("hello");
console.log(vogals);
function countvogols(str){
    var count = 0;

    for (let index = 0; index < str.length; index++) {
        if (str[index] == "a" || str[index] == "e" || str[index] == "i" || str[index] == "o" || str[index] == "u") {
            count++;
        }
        
    }
    return count;
}

//exercicio 4
function countletter(str,letter) {
    str = str.toLowerCase();
    var count = 0;
    for (let index = 0; index < str.length; index++) {
        if (str[index] == letter) {
            count++;
        }
        
    }
    return count;
}
var count = countletter("hellE","e");
console.log(count);
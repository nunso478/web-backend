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
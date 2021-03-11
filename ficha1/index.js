var a = 10;
var b = 15;

var c = a + b;

console.log(c);



// ficha 1 linha 5
//Implemente uma função que calcule a nota final da disciplina dada a sua nota prática e teórica e imprima
//se o aluno está aprovado ou reprovado

var miniprof = 16;
var freq = 10;
var profetofinal = 12;


var notafinal = miniprof * 0.3 + freq * 0.3 + profetofinal * 0.4;
//Concatenar uma string
console.log("A avaliação é: "+ Math.round(notafinal) +" Valores");


//linha 6-Implemente uma função que receba como argumento o número do mês e imprima o nome por extenso

var month = -2;
//if (month == 1) {
//    console.log("janeiro")
//} else if (month == 2) { 
//    console.log("Fevereiro")
//} else if (month == 3) { 
 //   console.log("março")
//} else if (month == 4) { 
 //   console.log("abril")
//} else if (month == 5) { 
  //  console.log("maio")
//}
 switch(month){
    case 1:
         console.log("Janeiro");
         break;
    case 2:
        console.log("Feveriro")
        break;
    case 3:
         console.log("março")
        break;
    case 4:
         console.log("abril")
         break;
    case 5:
         console.log("maio")
         break;
    case 6:
        console.log("junho")
         break;
    default:
        console.log("Mes invalido")
        break


 }
var months = ["janeiro","Fevereiro","março","abril","maio"];
if(months[month -1] == undefined){
    console.log("invalido");
}
else{
    console.log(months[month -1]);
}
 if(month -1 > 12 || month -1 < 1){
     console.log("mes invalido");
} else {
    console.log(months[month -1]);
}
//Implemente uma função que receba dois números e uma operação ( + , - , * , / ou ^) 
//e imprima o resultado da operação sobre os números

var operador1 = 2;
var operador2 = 4;
var operado = "^";
var resultado = 0;
if(operado == "+"){
    resultado = operador1 +operador2;
    console.log("SOMA");
}
else if(operado == "-"){
    resultado = operador1 - operador2;
    console.log("SUBTRAÇAO");
}
else if(operado == "*"){
    resultado = operador1 * operador2;
    console.log("MULTIPLICAÇAO");
}
else if(operado == "/"){
    resultado = operador1 / operador2;
    console.log("DIVIDIR");
}
else if(operado == "^"){
    resultado = Math.pow(operador1, operador2);
    console.log("EXPOENTE");
}
console.log(resultado);
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
var operado = "-";
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
//console.log(resultado);

// Implemente uma função que imprima todos os múltiplos de 5 menores que 20;
console.log(" ");
//inicializaçao
var i = 0;
//guarda ou clndição
//while(i <= 20){
    //execuçao
  //  if(i % 5 == 0){
    //    console.log(i);
   // }
    //incrementaçao
   // i++;
//}
//for (let j = 0; j <= 20; j++) {
 //   if(j % 5 == 0) {
        //console.log(j);
  //  }
    
//}
//for (let j = 0; j <= 20; j+=5) {
 //      console.log(j);
       
//}
//9.Implemente uma função que imprima a soma dos primeiros 100 números inteiros.
var sum = 0;
for (let j = 0; j <= 100; j++) {
   
    sum = sum + j;
    
}
//console.log("total: "+ sum);
// 10. Implemente uma função que calcule e devolva o fatorial de um número.
//3! = 3 x 2 x 1 = 6
var fact = 1;
for (let j = 1; j <= 3; j++) {
   fact *=j
    
    
}
console.log(fact);
//11. Implemente várias funções para calcular o máximo, 
//o mínimo e a média de uma sequência de números positivos.

var array = [1,4,5,7,0,12];
var max = array[0];
for (let i = 1; i < array.length; i++) {
    if(array[i] > max) {
        max = array[i];
    }
     
    
}
console.log(max)
var min = array[0];
for (let i = 1; i < array.length; i++) {
    if(array[i] < min) {
        min = array[i];
    }
     
    
}
console.log(min);
var sum = 0
 var average = 0
for (let i = 1; i < array.length; i++) {
     sum += array[i]
     average = sum / array.length;
     
    
}
average = sum / array.length;
console.log(average);
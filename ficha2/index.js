//inputs ?
//peso e altura

//outputs
//imc
// assinatura da funçao
/* function calcularIMC(weigh,height){
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
console.log(count);  */
//EXERCICIO 5 ==============================================

/*function calcularWorking(he,me,se,hs,ms,ss){
    if (he < 8 || hs > 18) {
        console.log("horario nao permitido");
        return;
    }
var enteraInseconds = he * 3600 + me * 60 + se;
var exitInSeconds = hs * 3600 + ms * 60 + ss;

var timeInSeconds = exitInSeconds - enteraInseconds;

var remainderhours= timeInSeconds % 3600;

var hours = (timeInSeconds - remainderhours) / 3600;
var remainderminutes = remainderhours % 60;

var minutes = (remainderhours - remainderminutes) / 60;

console.log("tempo de trabalho: " + hours + ":"+ minutes +":"+ remainderminutes);



var seconds = 0;
 
}
calcularWorking(7,30,0,16,0,0);
//exercicio 6 ==========================================
/*function drawRectanngle(width,height){
  
   
    var line = "";
   
    for (let index = 0; index < width; index++) {
        line += "*";
         
       }
    for (let j = 0; j < height; j++) {
       console.log(line); 
       
    }
   
}
drawRectanngle(5,3);*/
// exercicio 7 ====================

/*function drawRectriangle(height){
    var line = "";
    for (let j = 0; j <= height; j++) {
        line += "*";
        console.log(line);
        
    }
    
   
}
drawRectriangle(5);*/

// exercicio 8 =======================´

/*function drawRectanngle(width,height){
 
    for (let index = 0; index < width; index++) {
        var line = "";
        for (let j = 0; j < height; j++) {
            if(index == 0 || index == height -1 || j == 0 || j == width -1){
                line +="*"
            }
            else{
                line += " "
            }
       
        }
        console.log(line)
   }
}
drawRectanngle(10,10);*/

// exercicio 9 ========================

var student1 = {firstName:"Pedro",LastName:"Perreira",age:20,grade:16.5, getGrade:function(){return this.firstName + " " + this.LastName + " com idade: " + this.age + " com nota:" + this.grade}};
var student2 = {firstName:"joao",LastName:"ferreira",age:21,grade:19,getGrade:function(){return this.firstName + " " + this.LastName + " com idade: " + this.age + " com nota:" + this.grade}};
var student3 = {firstName:"miguel",LastName:"Nunes",age:22,grade:12,getGrade:function(){return this.firstName + " " + this.LastName + " com idade: " + this.age + " com nota:" + this.grade}};
var student4 = {firstName:"andre",LastName:"Jorge",age:23,grade:15,getGrade:function(){return this.firstName + " " + this.LastName + " com idade: " + this.age + " com nota:" + this.grade}};
var student5 = {firstName:"camacho",LastName:"Rena",age:24,grade:8.5,getGrade:function(){return this.firstName + " " + this.LastName + " com idade: " + this.age + " com nota:" + this.grade}};
var student6 = {firstName:"joana",LastName:"Horta",age:20,grade:11,getGrade:function(){return this.firstName + " " + this.LastName + " com idade: " + this.age + " com nota:" + this.grade}};
var student7 = {firstName:"Micaela",LastName:"Perreira",age:24,grade:18,getGrade:function(){return this.firstName + " " + this.LastName + " com idade: " + this.age + " com nota:" + this.grade}};
var student8 = {firstName:"David",LastName:"Ferreira",age:19,grade:20,getGrade:function(){return this.firstName + " " + this.LastName + " com idade:" + this.age + " com nota:" + this.grade}};
var student9 = {firstName:"Ines",LastName:"Perreira",age:25,grade:10,getGrade:function(){return this.firstName + " " + this.LastName + " com idade: " + this.age + " com nota: " + this.grade}};


var studentarray = [];

studentarray.push(student1);
studentarray.push(student2);
studentarray.push(student3);
studentarray.push(student4);
studentarray.push(student5);
studentarray.push(student6);
studentarray.push(student7);
studentarray.push(student8);
studentarray.push(student9);

function displaygrade(array){
    for (let i = 0; i < array.length; i++) {
        const student = array[i];
        console.log(student.getGrade());
        
    }

}

displaygrade(studentarray);
//melhor nota 
function GetbestGrade(array){
    var max = array[0];
    for (let i = 1; i < array.length; i++) {
        if(array[i].grade > max.grade){
            max = array[i];
        }
       
        
    }
    return max;
}
var bestGrade = GetbestGrade(studentarray);
console.log('melhor nota');
console.log(bestGrade.getGrade());

//pior nota 
function piornota(array){
    var min = array[0];
    for (let i = 1; i < array.length; i++) {
        if(array[i].grade < min.grade){
            min = array[i];
        }
       
        
    }
    return min;
}
var minnota = piornota(studentarray);
console.log(' ');
console.log('pior nota');
console.log(minnota.getGrade());





// verificaçao da nota negativa  
function notanegativa (array){
    console.log(" ");
    console.log("nota negativas");
    console.log(" ");
    for (let i = 0; i < array.length; i++) {
        const student = array[i];
        if(array[i].grade < 9.5){
          
            console.log(student.getGrade());
        }
       
        
    }
     

}
var negGrade = notanegativa(studentarray);
 


// verificaçao da nota positiva  
function notapositiva (array){
    console.log(" ");
    console.log("nota positiva");
    console.log(" ");
    for (let i = 0; i < array.length; i++) {
        const student = array[i];
       
        if(array[i].grade >= 9.5){
           
            console.log(student.getGrade());
        }
    
        
    }

}
var posGrade = notapositiva(studentarray);

function getAverage(array) {
    var average = 0;
    for (let i = 0; i < array.length; i++) {
        average += array[i].grade;
    }
    average = average / array.length;
    return average;
}
function getClosestFromAverage(array) {
   var average = getAverage(array);
   var min = array[0];
   var index = 0;
   for (let i = 0; i < array.length; i++) {
       var diff = Math.abs(array[i].grade - average);
       if (diff < min) {
           min = diff;
           index = i;
       } 
   }
   return array[index];
}
var getClosest = getClosestFromAverage(studentarray);
console.log(' ');
console.log('media nota');
console.log(getClosest.getGrade());
 
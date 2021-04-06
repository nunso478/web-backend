function Person(FirstName,LastName,age){
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.age = age;
}
Person.prototype.gender = "N/A"
Person.prototype.greet = function() {
    console.log("helho " + this.FirstName + " " + this.LastName + " " + this.age + " " + this.gender);
}

var p1 = new  Person("Done","Jardia",23); //wyz111
var p2 = new  Person("Micaela","Ferreira",20); // wyz112
var p3 = p1; //wyz111
var p4 = new  Person("Micaela","Ferreira",20); //wyz113
console.log(p1 == p3);
console.log(p1 == p2);
console.log(p2 == p4);

var a = 10; // xyz114
var b = 10; // xyz115
console.log(a == b);
 // Tipos básicos 
 // int, float, double, char 
 
 
 // Tipos de referência 
 // arrray, object,string

p1.gender = "M";
p2.gender = "F"
p1.greet();
p2.greet();
console.log(p1.__proto__);
console.log(p2.__proto__);
console.log(p1.__proto__ == p2.__proto__)

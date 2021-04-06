function Person(FirstName,LastName,age){
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log("helho " + this.FirstName + " " + this.LastName + " " + this.age);
}

var p1 = new  Person("Done","Jardia",23);
p1.greet();
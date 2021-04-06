var person = {
    nome:"Done",
    age:23,
    gender:"male"
};
var PersonAsJSON = JSON.stringify(person);
console.log(PersonAsJSON);

//console.log(PersonAsJSON["age"])

var personASOBJECT = JSON.parse('{"nome":"Done","age":23,"gender":"male"}');

console.log(personASOBJECT.nome);
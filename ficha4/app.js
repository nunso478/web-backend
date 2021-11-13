var person = {
    nome:"Done",
    age:23,
    gender:"male"
};
var PersonAsJSON = JSON.stringify(person);
console.log(PersonAsJSON);
//Ee
//console.log(PersonAsJSON["age"])

var personASOBJECT = JSON.parse('{"nome":"Done","age":23,"gender":"male"}');

console.log(personASOBJECT.nome);
//==================================================
var Emiter = require("./emiter.js");
var constants = require("./config.js");

//criação de uma nova instância da classe Emitter
var emitter = new Emiter(); // instancia
// console.log(emitter.event);
// invocação do método on 
emitter.on(constants.events.LOGIN,function() {
    console.log("O evento login foi despoçetado")
});
emitter.on(constants.events.LOGIN,function() {
    console.log("O evento login 2 foi despoçetado")
});
emitter.on(constants.events.LOGOUT,function() {
    console.log("O evento logout foi despoçetado")
});
emitter.emit(constants.events.LOGIN);
emitter.emit(constants.events.LOGOUT);
//=================================================

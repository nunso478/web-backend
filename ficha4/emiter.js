class Emiter {
    constructor(){
        //propriedade
         this.event = {}; 
    }
  
}
// função ou método
Emiter.prototype.on = function(type,listener) {
    console.log("type " + type + " , listener: " + listener);
    
}
//propriedade -> Emiter.prototype.off = 20;
//console.log(emitter.off)


//criação de uma nova instância da classe Emitter
var emitter = new Emiter(); // instancia
// console.log(emitter.event);
// invocação do método on 
emitter.on("tipo","Ouvinte");
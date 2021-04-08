class Emiter {
    constructor(){
        //propriedade
         this.event = {
         }; 
    }
  
}
//array.push adicionar numero ou strings.


// função ou método                 funçao
Emiter.prototype.on = function(type,listener) {
    if(this.event[type] == undefined){
        this.event[type] = [];
    }
     this.event[type].push(listener);
}
Emiter.prototype.emit = function(type) {
    if(this.event[type] != undefined){
        this.event[type].forEach(function(listener) {
            listener();
        });
    }
   
}
//propriedade -> Emiter.prototype.off = 20;
//console.log(emitter.off)



module.exports = Emiter;







var x = 0;
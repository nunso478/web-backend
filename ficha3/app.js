function started( ) {
    console.log("Started Download");
    
}
function update(value) {
        console.log(value +"% of Download completed")
 
}
function completed() {
    console.log("completed Download")
}
function performDownload(startedF,updateF,completedF) {
    startedF();
    for (let i = 0; i <= 100; i++) {   
          updateF(i);
    }
  
    completedF();
    
}
//performDownload(started,update,completed);

//============================================================================
var log = require("./log.js");
 //log();
 console.log(log.message);

 console.log(log.functionobj("hello"));
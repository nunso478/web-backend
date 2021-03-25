var arrayUtils = {
    isEmpty: function(array){
        /*if (array.length == 0) {
            return true;
            
        }
        else{
            return false;
        }*/
        if (array != undefined && array != null)  {
            return array.length == 0;
        }
        else{
           return "array is undefined"
        }
     
    },
    max: function(array){
        var max = array[0];
        if (this.isEmpty(array)) {
            return 0;
        }
        else{
            for (let i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
                
            }
            
        }
          return max
        }
        
      
    },
    min: function(array){
        var min = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
                
            }
            
        }
        return min;
    },
    avarege: function(array){
        var avg = array[0];
        for (let i = 1; i < array.length; i++) {
            avg += array[i];
            
        }
        return avg / array.length;
    },
    indexOf: function(array,value){
        for (let i = 0; i < array.length; i++) {
           if(value == array[i]){
               return i;
           }
            
        }
        return  -1;
    },
    subarray: function(array,starindeex,endindex){
        var a = [];
        for (let i = starindeex; i <= endindex; i++) {
          a.push(array[i]);
        }
        return  a;
    },
    isSameLength: function(array,otherArray){
    return array.length == otherArray.length;
    },
    reverse: function(array){
        var r = [];
        for (let i = array.length -1; i >= array.length; i--) {
            r.push(array[i]);

        }
        return r;
    },
    swap: function(array,index1,index2){
        //obter um valor que está num determinado indice do array
         var val1 = array[index1];
         var val2 = array[index2];
         //alterar um determinado indice com outro valor 
         array[index1] = val2;
         array[index2] = val1;
        return array;
    },
    contains: function(array,value){
        /*for (let i = 0; i < array.length; i++) {
           if(value == array[i]){
               return true;
           }
            
        }
        return  false;*/
        return this.indexOf(array,value) != -1;
    },
    concatenate: function(array,otherArray){
        var concatenat = array;
        for (let i = 0; i < otherArray.length; i++) {
             concatenat.push(otherArray[i]);
            
        }
        return concatenat;
    },
};

module.exports = arrayUtils;
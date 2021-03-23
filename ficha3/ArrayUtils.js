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

};

module.exports = arrayUtils;
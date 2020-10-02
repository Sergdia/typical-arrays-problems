
exports.min = function min (array) {
    if (array == undefined) {
        return 0;
      } else if (array.length > 0) {
      array.sort((a, b) => (a - b));
      return array[0];
      } else {
         return 0;
      }
    }


exports.max = function max (array) {
    if (array == undefined) {
        return 0;
      } else if (array.length > 0) {
      array.sort((a, b) => (a - b));
      return array[(array.length - 1)];
      } else {
         return 0;
      }
    }


exports.avg = function avg (array) {
    if (array == undefined) {
      return 0;
      } else if (array.length > 0) {
        var count = 0;
        for(var i = 0; i < array.length; i++) {
      
          count = count + array[i];
          
      } return count/array.length;
      } else { return 0; }
}

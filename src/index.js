
exports.min = function min (array) {
  if (!array || !array.length){
    return 0;
  }else {
    var minValue = array[0];
    for (var i=0; i < array.length; i++) {
      if (minValue > array[i]) minValue = array[i]; 
    }
    return minValue;
  }
   
}

exports.max = function max (array) {
  if (!array || !array.length){
    return 0;
  }else {
    var maxValue = array[0];
    for (var i=0; i < array.length; i++) {
      if (maxValue < array[i]) maxValue = array[i]; 
    }
    return maxValue;
  }
   
}

exports.avg = function avg (array) {
  var sum = 0;
  if (!array || !array.length) return 0;
  else {
    var avgValue = array[0];
    for (var i=0; i < array.length; i++) {
      sum += array[i]
      avgValue = sum/(i+1);
    }
    return avgValue;
  }
   
 
}

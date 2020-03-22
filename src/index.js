exports.min = function min (array) {
  return Math.min(...array);
}

exports.max = function max (array) {
  return Math.max(...array);
}

exports.avg = function avg (array) {
    let count = 0;
    let sum = 0;
    array.reduce((a, b) => {
        sum += item;
        count++;
    }, 0);
    
    return sum / count;
}

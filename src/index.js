exports.min = function min (array) {
    if(arguments.length === 0) return 0;
    if(array.length === 0) return 0;
    return Math.min(...array);
}

exports.max = function max (array) {
    if(arguments.length === 0) return 0;
    if(array.length === 0) return 0;
    return Math.max(...array);
}

exports.avg = function avg (array) {
    if(arguments.length === 0) return 0;
    if(array.length === 0) return 0;
    let sum = 0;
    array.reduce((prev, item) => {
        sum += item;
    }, 0);
    
    return sum / array.length;
}

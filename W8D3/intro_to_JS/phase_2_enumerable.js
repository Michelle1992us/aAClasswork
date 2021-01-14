// Array#myEach(callback) - receives a callback function and executes the callback for each element in the array
// Note that JavaScript's forEach function has no return value (returns undefined)

Array.prototype.myEach = function(cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i]);
    }
}

function square(num) {
//const square = function (num) {
    return num * num;
}

console.log([1,2,3,4,5].myEach(square)) //[1,2,3,4,5]


// Array#myMap(callback) - receives a callback function, returns a new array of the results of calling the callback function on each element of the array
// should use myEach and a closure

Array.prototype.myMap = function(cb) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(cb(this[i]));
    }
    return arr;
}

console.log([1,2,3,4,5].myMap(square)) //[1,4,9,16,25]


// Array#myReduce(callback[, initialValue]) - (like Ruby's Array#inject) receives a callback function, and optional initial value, returns an accumulator by applying the callback function to each element and the result of the last invocation of the callback (or initial value if supplied)

Array.prototype.myReduce = function(cb, acc) {
    let start = 0;
    if (!acc) {
        acc = this[0];
        start = 1;
    }

    for (let i = start; i < this.length; i++) {
        acc += cb(this[i]);
    }
    return acc;
}

console.log([1,2,3,4,5].myReduce(square)) //[1,4,9,16,25]
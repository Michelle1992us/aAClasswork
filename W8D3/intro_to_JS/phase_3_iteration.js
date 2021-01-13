// Array#bubbleSort - receives an array, returns a sorted array by implementing bubble sort sorting algorithm

Array.prototype.bubbleSort = function () {
    let arr = [];
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < this.length - 1; i++) {
            if (this[i] > this[i+1]) {
                let num1 = this[i];
                let num2 = this[i+1];
                this[i] = num2;
                this[i + 1] = num1;
                // this[i], this[i+1] = this[i+1], this[i];
                sorted = false;
            }
        }
    } 
    return this
} 

// console.log([2, 5, 8, 7, 10, 1].bubbleSort())


// String#substrings - receives a string, returns an array of all substrings

String.prototype.substrings = function () {
    let substrings = []
    for (let i = 0; i < this.length; i++) {
        for (let j = i; j < this.length; j++) {
            substrings.push(this.slice(i, j + 1)); //exclusive, so add the +1. JS does not have ranges
        }
    }
    return substrings
}

console.log("bananable".substrings())
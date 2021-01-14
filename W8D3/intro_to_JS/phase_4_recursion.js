// range(start, end) - receives a start and end value, returns an array from start up to end

function range(start, end) {
    if (start === end) {
        return end;
    }

    let arr = [start];
    let ranges = range(start + 1, end);
    // console.log(ranges)
    // return ranges
    arr = arr.concat(ranges);
    // console.log(arr)
    return arr;
}

// console.log(range(2, 5))

// sumRec(arr) - receives an array of numbers and recursively sums them

function sumRec(arr) {
    if (arr.length === 0) {
        return 0
    } 
    // return arr[0] + sumRec(arr.slice(1, arr.length)); 
    return arr.pop() + sumRec(arr);


}
// console.log(sumRec([1, 5, 7, 10]))



// exponent(base, exp) - receives a base and exponent, returns the base raise to the power of the exponent (base ^ exp)
// write two versions:
// # this is math, not Ruby methods.

// # version 1
// exp(b, 0) = 1
// exp(b, n) = b * exp(b, n - 1)

function exponent(base, exp) {
    if (exp === 0) {
        return 1;
    } 
    // if (exp === 1) {
    //     return base;
    // } 
    return base*exponent(base, exp - 1);
}

// console.log(exponent(2, 5)) //=> 32

// # recursion 2
// exp(b, 0) = 1
// exp(b, 1) = b
// exp(b, n) = exp(b, n / 2) ** 2             [for even n]
// exp(b, n) = b * (exp(b, (n - 1) / 2) ** 2) [for odd n]

function exp(b, n) {
    if (n === 0) {
        return 1;
    } 
    if (n === 1) {
        return b;
    } 
    if (n % 2 === 0) {
        return Math.pow(exp(b, n / 2), 2); 
    } else {
        return b*((exp(b, (n - 1) / 2) * (exp(b, (n - 1) / 2))));
    }
}

// console.log(exp(2, 4)) //=> 32
// console.log(Math.pow(2, 5))

// fibonacci(n) - receives an integer, n, and returns the first n Fibonacci numbers
//[1, 1, 2, 3, 5, ...]

function fibonacci(n) {
    if (n === 1) {
        return [1];
    }

    if (n === 2) {
        return [1, 1];
    }

    let arr = fibonacci(n-1) //[1, 1, 2]
    arr.push(arr[n-2] + arr[n-3]) //[2] + [1] => [3] => [1, 1, 2, 3]
    // let arr = arr.concat(fibonacci(n-1) + fibonacci(n-2));
    return arr
    // return arr.push(fibonacci(n-1) + fibonacci(n-2))  
}

console.log(fibonacci(4))





// deepDup(arr) - deep dup of an Array!
//[1, 2, 3] 
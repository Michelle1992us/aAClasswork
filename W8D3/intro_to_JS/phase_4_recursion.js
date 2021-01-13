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

console.log(range(2, 5))

// sumRec(arr) - receives an array of numbers and recursively sums them





// exponent(base, exp) - receives a base and exponent, returns the base raise to the power of the exponent (base ^ exp)
// write two versions:
// # this is math, not Ruby methods.

// # version 1
// exp(b, 0) = 1
// exp(b, n) = b * exp(b, n - 1)

// # recursion 2
// exp(b, 0) = 1
// exp(b, 1) = b
// exp(b, n) = exp(b, n / 2) ** 2             [for even n]
// exp(b, n) = b * (exp(b, (n - 1) / 2) ** 2) [for odd n]


// fibonacci(n) - receives an integer, n, and returns the first n Fibonacci numbers





// deepDup(arr) - deep dup of an Array!
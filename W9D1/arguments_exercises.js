// sum
// Write a sum function that takes any number of arguments:

//1. Solve it first using the arguments keyword

function getSum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
}


// console.log(getSum(1, 2, 3, 4)) //=== 10;
// console.log(getSum(1, 2, 3, 4, 5)) //=== 15;


//2.  rewrite your solution to use the ... rest operator

function getSum2(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }

    return sum;
}

// console.log(getSum2(1, 2, 3, 4)) //=== 10;
// console.log(getSum2(1, 2, 3, 4, 5)) //=== 15;

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// bind with args
// Rewrite your myBind method so that it can take both bind-time arguments and call-time arguments.

//0a. No arguments. ES6
Function.prototype.myBind = function (ctx) {
    return () => {
        return this.apply(ctx); //calling the "this" function on the "ctx" (e.g. calling "meow" on the cat "Curie")
    }
}

//0b. With arguments. ES6

Function.prototype.myBind = function (ctx, ...bindArgs) { //first arg is ctx, all other args put into the rest operator array "...bindArgs"
    return (...callArgs) => { //array we're returning. collects unlimited args
        return this.apply(ctx, bindArgs.concat(callArgs)); 
        //ctx = first arg it takes (the "this" in the function), 
        //bindArgs = array of all the arguments to give to the "this" function we're calling ".apply" on
        //.concat concatinates both the callArgs + bindArgs arrays together
    }
}


//1. Solve it first using the arguments keyword. Within your myBind method, you'll have to define a new, anonymous function to be returned. There are two arrays of arguments you care about: the extra arguments passed to myBind, and the arguments passed when the bound function is called. DO NOT USE ES6 (fat arrow)

// Function.prototype.myBind = function (ctx) {
//     let bindArgs = [].slice.call(arguments, 1) //use .slice to create an array. Slicing 1 = first argument
//     let that = this //create variable for "this" b/c no longer using fat arrow, so "this" = "windows" if called in the function
//     return function() { //get rid of fat arrow
//         let callArgs = [].slice.call(arguments) //grab all of the arguments that came in
//         return that.apply(ctx, bindArgs.concat(callArgs)); 
//     }
// }


// class Cat {
//     constructor(name) {
//       this.name = name;
//     }
  
//     says(sound, person) {
//       console.log(`${this.name} says ${sound} to ${person}!`);
//       return true;
//     }
//   }
  
//   class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const markov = new Cat("Markov");
//   const pavlov = new Dog("Pavlov");
  
//   markov.says("meow", "Ned"); // Markov says meow to Ned!
  
//   // bind time args are "meow" and "Kush", no call time args
//   markov.says.myBind(pavlov, "meow", "Kush")(); // Pavlov says meow to Kush!
  
//   // no bind time args (other than context), call time args are "meow" and "a tree"
//   markov.says.myBind(pavlov)("meow", "a tree"); // Pavlov says meow to a tree!
  
//   // bind time arg is "meow", call time arg is "Markov"
//   markov.says.myBind(pavlov, "meow")("Markov"); // Pavlov says meow to Markov!
  
//   // no bind time args (other than context), call time args are "meow" and "me"
//   const notMarkovSays = markov.says.myBind(pavlov);
//   notMarkovSays("meow", "me"); // Pavlov says meow to me!


// //2. write a second version using the ... rest operator.

// // Function.prototype.myBind = function (ctx, ...bindArgs) {
// //     return(...callArgs) => this.apply(ctx, bindArgs.concat(callArgs)); 

// // }




//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//curriedSum
//Write a curriedSum function that takes an integer (how many numbers to sum) and returns a function that can be successively called with single arguments until it finally returns a sum. 

function curriedSum(numArgs){
    const numbers = [];

    function _curriedSum(num) {
        numbers.push(num);
        if (numbers.length === numArgs) {
            let total = 0;
            numbers.forEach((n) => {total += n })
            return total;
        }else{
            return _curriedSum;
        }
    }
    return _curriedSum;
}


// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56






//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



// Function.prototype.curry
// 1. Write a version that uses Function.prototype.apply 


Function.prototype.curry = function(numArgs) {
    const numbers = [];
    const that = this;
    function _curry(num) {
        numbers.push(num);
        if (numbers.length === numArgs) {
            console.log("numbers in curry", numbers)
            return that.call(that, ...numbers);
            // return that(numbers)
            //func.apply(thisArg, [ argsArray])
            //if no ctx to pass, put "null"
        } else {
            return _curry;
        }
    }
    return _curry;
}

function addStuff(array) {
    console.log(array)
    return array.reduce((acc, el) => acc + el)
}

console.log(addStuff.curry(3)(1)(2)(3)) //first arg (3) = # of args, next 3 are the args beings passed in
// const sum = Function.prototype.curry(4);
// console.log(sum(5)(30)(20)(1)); // => 56






//2. Write a version that uses ... (the spread operator).
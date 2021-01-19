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

Function.prototype.myBind = function (ctx) {
    let bindArgs = [].slice.call(arguments, 1) //use .slice to create an array. Slicing 1 = first argument
    let that = this //create variable for "this" b/c no longer using fat arrow, so "this" = "windows" if called in the function
    return function() { //get rid of fat arrow
        let callArgs = [].slice.call(arguments) //grab all of the arguments that came in
        return that.apply(ctx, bindArgs.concat(callArgs)); 
    }
}


class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");
  
  markov.says("meow", "Ned"); // Markov says meow to Ned!
  
  // bind time args are "meow" and "Kush", no call time args
  markov.says.myBind(pavlov, "meow", "Kush")(); // Pavlov says meow to Kush!
  
  // no bind time args (other than context), call time args are "meow" and "a tree"
  markov.says.myBind(pavlov)("meow", "a tree"); // Pavlov says meow to a tree!
  
  // bind time arg is "meow", call time arg is "Markov"
  markov.says.myBind(pavlov, "meow")("Markov"); // Pavlov says meow to Markov!
  
  // no bind time args (other than context), call time args are "meow" and "me"
  const notMarkovSays = markov.says.myBind(pavlov);
  notMarkovSays("meow", "me"); // Pavlov says meow to me!


//2. write a second version using the ... rest operator.


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//curriedSum
//Write a curriedSum function that takes an integer (how many numbers to sum) and returns a function that can be successively called with single arguments until it finally returns a sum. 





const sum = curriedSum(4);
sum(5)(30)(20)(1); // => 56



//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



// Function.prototype.curry
// 1. Write a version that uses Function.prototype.apply 






//2. Write a version that uses ... (the spread operator).
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


// bind with args
// Rewrite your myBind method so that it can take both bind-time arguments and call-time arguments.

//0a. No arguments
Function.prototype.myBind = function (ctx) {
    return () => {
        return this.apply(ctx); //calling the "this" function on the "ctx" (e.g. calling "meow" on the cat "Curie")
    }
}

//0b. With arguments

Function.prototype.myBind = function (ctx, ...bindArgs) { //first arg is ctx, all other args put into the rest operator array "...bindArgs"
    return (...callArgs) => { //array we're returning. collects unlimited args
        return this.apply(ctx, bindArgs.concat(callArgs)); 
        //ctx = first arg it takes (the "this" in the function), 
        //bindArgs = array of all the arguments to give to the "this" function we're calling ".apply" on
        //.concat concatinates both the callArgs + bindArgs arrays together
    }
}


//1. Solve it first using the arguments keyword. Within your myBind method, you'll have to define a new, anonymous function to be returned. There are two arrays of arguments you care about: the extra arguments passed to myBind, and the arguments passed when the bound function is called




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
  
  markov.says("meow", "Ned");
  // Markov says meow to Ned!
  // true
  
  // bind time args are "meow" and "Kush", no call time args
  markov.says.myBind(pavlov, "meow", "Kush")();
  // Pavlov says meow to Kush!
  // true
  
  // no bind time args (other than context), call time args are "meow" and "a tree"
  markov.says.myBind(pavlov)("meow", "a tree");
  // Pavlov says meow to a tree!
  // true
  
  // bind time arg is "meow", call time arg is "Markov"
  markov.says.myBind(pavlov, "meow")("Markov");
  // Pavlov says meow to Markov!
  // true
  
  // no bind time args (other than context), call time args are "meow" and "me"
  const notMarkovSays = markov.says.myBind(pavlov);
  notMarkovSays("meow", "me");
  // Pavlov says meow to me!
  // true



//2. write a second version using the ... rest operator.
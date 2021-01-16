// throttle function allows us to specify a minimum time interval that must pass between invocations

// setTimeout(function, milliseconds)
// Executes a function, after waiting a specified number of milliseconds.


Function.prototype.myThrottle = function(time) {
    let tooSoon = false;
    let that = this
    return function () {
        if (!tooSoon) {
            tooSoon = true;
            setTimeout(() => tooSoon = false, time);
            that();
        }
    }
}


// class Neuron {
//     fire() {
//         console.log("Firing!");
//     }
// }

// const neuron = new Neuron();
// // When we create a new Neuron,
// // we can call #fire as frequently as we want

// // The following code will try to #fire the neuron every 10ms. Try it in the console:

// neuron.fire = neuron.fire.myThrottle(500);


// const interval = setInterval(() => {
//     neuron.fire();
// }, 10);

class SearchBar {
    constructor() {
        this.query = "";

        this.type = this.type.bind(this);
        this.search = this.search.bind(this);
    }

    type(letter) {
        this.query += letter;
        this.search();
    }

    search() {
        console.log(`searching for ${this.query}`);
    }
}


const searchBar = new SearchBar();

const queryForHelloWorld = () => {
    searchBar.type("h");
    searchBar.type("e");
    searchBar.type("l");
    searchBar.type("l");
    searchBar.type("o");
    searchBar.type(" ");
    searchBar.type("w");
    searchBar.type("o");
    searchBar.type("r");
    searchBar.type("l");
    searchBar.type("d");
};




Function.prototype.myDebounce = function(time){
    let timeout = setTimeout(() => that(), time)
    let that = this
    return function () {
       clearTimeout(timeout)
       timeout = setTimeout(() => that(), time)
    }
}

searchBar.search = searchBar.search.myDebounce(500);

queryForHelloWorld();
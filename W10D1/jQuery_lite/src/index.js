const DomNodeCollection = require("./dom_node_collection.js");

let fns = [];

function $l(arg) {
    if (typeof arg === 'string') {
        // console.log(document.querySelectorAll(arg))
        let array = Array.from(document.querySelectorAll(arg));
        return new DomNodeCollection(array);
    } else if (arg instanceof HTMLElement) {
        return new DomNodeCollection(arg);
    } else if (arg instanceof Function) {
        fns.push(arg);
    }
}

document.addEventListener('DOMContentLoaded', function(e) {
    fns.forEach(fn => fn())
})

window.$l = $l;
$l(() => {
    console.log('hi')
})
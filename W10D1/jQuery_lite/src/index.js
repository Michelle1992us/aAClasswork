const DomNodeCollection = require("./dom_node_collection.js");

function $l(arg) {
    if (typeof arg === 'string') {
        // console.log(document.querySelectorAll(arg))
        let array = Array.from(document.querySelectorAll(arg));
        return new DomNodeCollection(array);
    } else if (arg instanceof HTMLElement) {
        return new DomNodeCollection(arg)
    }
}

window.$l = $l;
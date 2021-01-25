const DomNodeCollection = require("./dom_node_collection.js");

let fns = [];

let $l = function(arg) {
    if (typeof arg === 'string') {
        // console.log(document.querySelectorAll(arg))
        let array = Array.from(document.querySelectorAll(arg));
        return new DomNodeCollection(array);
    } else if (arg instanceof HTMLElement) {
        return new DomNodeCollection(arg);
    } else if (arg instanceof Function) {
        fns.push(arg);
    }
    return new DomNodeCollection([])
}
$l.extend = function(target, ...objects) {
    objects.forEach(object => {
        for(let key in object) {
            target[key] = object[key];
        }
    })
    return target;
}

$l.ajax = function(options) {
    const xhr = new XMLHttpRequest();
    let defaults = {
        success: function(data) {
            console.log(data)
        },
        error: function() {
            console.error('an error has occurred')
        },
        url: window.location.href,
        method: 'GET',
        data: {},
        contentType: 'application/x-www-form-urlencoded'
    }
    $l.extend(defaults, options)
    xhr.open(defaults.method, defaults.url);
    // xhr.setRequestHeader('Content-Type', 'application/xml')
    xhr.onload = function() {
        defaults.success(xhr.response)
        // defaults.error()
    }
    xhr.onerror = defaults.error
    xhr.send(defaults.data)
}

document.addEventListener('DOMContentLoaded', function(e) {
    fns.forEach(fn => fn())
})

window.$l = $l;
// $l(() => {
//     console.log('hi')
// })
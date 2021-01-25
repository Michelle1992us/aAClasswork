/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/***/ ((module) => {

eval("class DomNodeCollection {\n    constructor(elements) {\n        this.elements = elements;\n    }\n\n    html(string = null) {\n        if (string) {\n            this.elements.forEach((node) => {\n                node.innerHTML = string;\n            })\n        } else {\n            return this.elements[0].innerHTML;\n        }\n    }\n\n    empty() {\n        this.html(\"\");\n    }\n\n    append(arg) {\n        if (arg instanceof DomNodeCollection) {\n            this.elements.forEach(currentNode => {\n                arg.elements.forEach(newNode => {\n                    currentNode.innerHTML = newNode.outerHTML;\n                })\n            })\n        } else if (arg instanceof HTMLElement) {\n            this.elements.forEach(currentNode => currentNode.innerHTML = arg.outerHTML);\n        } else if (typeof arg === 'string') {\n            this.elements.forEach(currentNode => currentNode.innerHTML = arg);\n        }\n    }\n\n    attr(name, value = null) {\n        if (value) {\n            this.elements.forEach(node => node.setAttribute(name, value))\n        } else {\n            this.elements.forEach(node => console.log(node.getAttribute(name)))\n            \n        }\n    }\n\n    addClass(name) {\n        this.elements.forEach(node => node.classList.add(name));\n    }\n\n    removeClass(name) {\n        this.elements.forEach(node => node.classList.remove(name));\n    }\n\n    children() {\n        let arr = [];\n        this.elements.forEach(node => {\n            arr = arr.concat(Array.from(node.children))\n        })\n        arr.forEach(child => {\n            arr = arr.concat(Array.from(child.children))\n        })\n        return new DomNodeCollection(arr)\n    }\n\n    parent() {\n        let arr = [];\n        this.elements.forEach(node => {\n            arr.push(node.parentElement)\n        })\n        return new DomNodeCollection(arr)\n    }\n\n    find(selector) {\n        let elementList = [];\n        this.elements.forEach(node => {\n            node.querySelectorAll(selector).forEach(elementNode => elementList.push(elementNode));\n        })\n        return new DomNodeCollection(elementList)\n    }\n\n    remove() {\n        this.elements.forEach(node => node.remove())\n    }\n\n    on(eventType, cb){\n        this.elements.forEach(node => {\n            node.addEventListener(eventType, cb);\n        })\n    }\n\n    off(eventType, cb) {\n        this.elements.forEach(node => {\n            node.removeEventListener(eventType, cb);\n        })\n    }\n\n\n}\n\nmodule.exports = DomNodeCollection;\n\n//# sourceURL=webpack://jQuery_lite/./src/dom_node_collection.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("const DomNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\nlet fns = [];\n\nlet $l = function(arg) {\n    if (typeof arg === 'string') {\n        // console.log(document.querySelectorAll(arg))\n        let array = Array.from(document.querySelectorAll(arg));\n        return new DomNodeCollection(array);\n    } else if (arg instanceof HTMLElement) {\n        return new DomNodeCollection(arg);\n    } else if (arg instanceof Function) {\n        fns.push(arg);\n    }\n    return new DomNodeCollection([])\n}\n$l.extend = function(target, ...objects) {\n    objects.forEach(object => {\n        for(let key in object) {\n            target[key] = object[key];\n        }\n    })\n    return target;\n}\n\n$l.ajax = function(options) {\n    const xhr = new XMLHttpRequest();\n    let defaults = {\n        success: function(data) {\n            console.log(data)\n        },\n        error: function() {\n            console.error('an error has occurred')\n        },\n        url: window.location.href,\n        method: 'GET',\n        data: {},\n        contentType: 'application/x-www-form-urlencoded'\n    }\n    $l.extend(defaults, options)\n    xhr.open(defaults.method, defaults.url);\n    // xhr.setRequestHeader('Content-Type', 'application/xml')\n    xhr.onload = function() {\n        defaults.success(xhr.response)\n        // defaults.error()\n    }\n    xhr.onerror = defaults.error\n    xhr.send(defaults.data)\n}\n\ndocument.addEventListener('DOMContentLoaded', function(e) {\n    fns.forEach(fn => fn())\n})\n\nwindow.$l = $l;\n// $l(() => {\n//     console.log('hi')\n// })\n\n//# sourceURL=webpack://jQuery_lite/./src/index.js?");
})();

/******/ })()
;
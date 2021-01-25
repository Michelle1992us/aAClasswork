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

eval("class DomNodeCollection {\n    constructor(elements) {\n        this.elements = elements;\n    }\n\n    html(string = null) {\n        if (string) {\n            this.elements.forEach((node) => {\n                node.innerHTML = string;\n            })\n        } else {\n            return this.elements[0].innerHTML;\n        }\n    }\n\n    empty() {\n        this.html(\"\");\n    }\n\n    append(arg) {\n        if (arg instanceof DomNodeCollection) {\n            this.elements.forEach(currentNode => {\n                arg.elements.forEach(newNode => {\n                    currentNode.innerHTML = newNode.outerHTML;\n                })\n            })\n        } else if (arg instanceof HTMLElement) {\n            this.elements.forEach(currentNode => currentNode.innerHTML = arg.outerHTML);\n        } else if (typeof arg === 'string') {\n            this.elements.forEach(currentNode => currentNode.innerHTML = arg);\n        }\n    }\n\n    attr(name, value = null) {\n        if (value) {\n            this.elements.forEach(node => node.setAttribute(name, value))\n        } else {\n            this.elements.forEach(node => console.log(node.getAttribute(name)))\n            \n        }\n    }\n\n    addClass(name) {\n        this.elements.forEach(node => node.classList.add(name));\n    }\n\n    removeClass(name) {\n        this.elements.forEach(node => node.classList.remove(name));\n    }\n\n    children() {\n        let arr = [];\n        this.elements.forEach(node => {\n            arr = arr.concat(Array.from(node.children))\n        })\n        arr.forEach(child => {\n            arr = arr.concat(Array.from(child.children))\n        })\n        return new DomNodeCollection(arr)\n    }\n\n    parent() {\n        let arr = [];\n        this.elements.forEach(node => {\n            arr.push(node.parentElement)\n        })\n        return new DomNodeCollection(arr)\n    }\n\n    find(selector) {\n\n    }\n}\n\nmodule.exports = DomNodeCollection;\n\n//# sourceURL=webpack://jQuery_lite/./src/dom_node_collection.js?");

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
eval("const DomNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\nfunction $l(arg) {\n    if (typeof arg === 'string') {\n        // console.log(document.querySelectorAll(arg))\n        let array = Array.from(document.querySelectorAll(arg));\n        return new DomNodeCollection(array);\n    } else if (arg instanceof HTMLElement) {\n        return new DomNodeCollection(arg)\n    }\n}\n\nwindow.$l = $l;\n\n//# sourceURL=webpack://jQuery_lite/./src/index.js?");
})();

/******/ })()
;
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

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((module) => {

eval("class Router {\n    constructor (node) {\n        this.node = node;\n\n    }\n\n    start () {\n        window.addEventListener('hashchange', this.render.bind(this));\n        this.render();\n    }\n\n    activateRoute() {\n        return window.location.hash.slice(1)\n    }\n\n    render() {\n        this.node.innerHTML = \"\";\n        let route = this.activateRoute();\n        let p = document.createElement('p');\n        p.innerHTML = route;\n        this.node.appendChild(p);\n    }\n}\n\nmodule.exports = Router;\n\n//# sourceURL=webpack://Mail/./src/router.js?");

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
eval("const Router = __webpack_require__ (/*! ./router.js */ \"./src/router.js\")\n\nwindow.addEventListener(\"DOMContentLoaded\", function() {\n    let lis = Array.from(document.querySelectorAll(\".sidebar-nav li\"));\n    lis.forEach(li => {\n        li.addEventListener(\"click\", () => {\n            let location = li.innerText.toLowerCase();\n            window.location.hash = location;\n        })\n    })\n\n    let content = document.querySelector('.content');\n    let router = new Router(content)\n    router.start();\n})\n\n//# sourceURL=webpack://Mail/./src/index.js?");
})();

/******/ })()
;
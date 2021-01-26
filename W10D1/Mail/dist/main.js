/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("document.addEventListener(\"DOMContentLoaded\", function() {\n    let lis = Array.from(document.querySelectorAll(\".sidebar-nav li\"));\n    lis.forEach(li => {\n        li.addEventListener(\"click\", () => {\n            let location = li.innerText.toLowerCase();\n            window.location.hash = location;\n        })\n    })\n})\n\n//# sourceURL=webpack://Mail/./src/index.js?");
/******/ })()
;
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

/***/ "./src/displayOnClick.js":
/*!*******************************!*\
  !*** ./src/displayOnClick.js ***!
  \*******************************/
/***/ (() => {

eval("const buttons = document.querySelectorAll('.nav>li>a');\nconst allDivs = document.querySelectorAll('.show');\n// console.log(buttons);\n\nfunction displayField(e){\n    e.preventDefault();\n    // console.log(this.id);\n    buttons.forEach(button => button.style.border='none');\n    this.style.border = `2px solid white`;\n    allDivs.forEach(div => {\n        div.style.display='none';\n        if(div.id === this.id){\n            div.style.display='block';\n            \n        }\n    });\n    \n    \n    \n}\n\n\nallDivs.forEach(div => {\n    div.style.display='none';\n    if(div.id === 'home'){\n        div.style.display='block';\n    }\n    \n});\n\n\nbuttons.forEach(button => button.addEventListener('click',displayField));\n\n//# sourceURL=webpack://top-resturantpage/./src/displayOnClick.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navBar */ \"./src/navBar.js\");\n/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_navBar__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _displayOnClick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayOnClick */ \"./src/displayOnClick.js\");\n/* harmony import */ var _displayOnClick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_displayOnClick__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack://top-resturantpage/./src/index.js?");

/***/ }),

/***/ "./src/navBar.js":
/*!***********************!*\
  !*** ./src/navBar.js ***!
  \***********************/
/***/ (() => {

eval("const navBar = document.querySelector('#main');\nconst header = document.querySelector('header');\nconst content = document.querySelector('main');\nconst topOfNav = header.offsetHeight ;\n\nfunction makeNav(){\n    // console.log(navBar.offsetHeight);\n    if(window.scrollY > topOfNav){\n        content.style.paddingTop = navBar.offsetHeight + topOfNav + 'px';\n        navBar.classList.remove('main');\n        navBar.classList.add('main-fixed');\n    }\n    else{\n        content.style.paddingTop = 0;\n        navBar.classList.add('main');\n        navBar.classList.remove('main-fixed');\n    }\n}\nwindow.addEventListener('scroll',makeNav);\n\n\n//# sourceURL=webpack://top-resturantpage/./src/navBar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
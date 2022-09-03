/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/App.js":
/*!************************!*\
  !*** ./src/app/App.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App)\n/* harmony export */ });\nclass App {\n  todo;\n  event;\n\n  constructor(dates, accion) {\n    this.todo = dates;\n  }\n}\n\n\n//# sourceURL=webpack://todo-proyecto/./src/app/App.js?");

/***/ }),

/***/ "./src/core/Events.js":
/*!****************************!*\
  !*** ./src/core/Events.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Events\": () => (/* binding */ Events)\n/* harmony export */ });\nclass Events {\n\n  //siempre un evento para realizar una accion\n  click(selector, action) {\n    document.querySelector(selector).addEventListener(\"click\", action);\n  }\n  \n}\n\n\n//# sourceURL=webpack://todo-proyecto/./src/core/Events.js?");

/***/ }),

/***/ "./src/core/Persisted.js":
/*!*******************************!*\
  !*** ./src/core/Persisted.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Persisted\": () => (/* binding */ Persisted)\n/* harmony export */ });\nclass Persisted {\n  //metodos para localStorage\n  //en el localStotare se reciben 2 argumentos\n  //key y value...\n\n  setItem(key, value) {\n    console.log(\"ingresando al setItems\");\n    return window.localStorage.setItem(key, JSON.stringify(value));\n  }\n}\n\n\n//# sourceURL=webpack://todo-proyecto/./src/core/Persisted.js?");

/***/ }),

/***/ "./src/core/Todo.js":
/*!**************************!*\
  !*** ./src/core/Todo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\n  infoTarea;\n\n  constructor(persisted) {\n    this.infoTarea = persisted;\n  }\n\n  save(key, value) {\n    return this.infoTarea.setItem(key, value);\n  }\n  show() {}\n  update() {}\n  delete() {}\n}\n\n\n//# sourceURL=webpack://todo-proyecto/./src/core/Todo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/App */ \"./src/app/App.js\");\n/* harmony import */ var _core_Persisted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/Persisted */ \"./src/core/Persisted.js\");\n/* harmony import */ var _core_Events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/Events */ \"./src/core/Events.js\");\n/* harmony import */ var _core_Todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/Todo */ \"./src/core/Todo.js\");\n\n\n\n\n\n((app, events) => {\n  events.click(\"#btn\", () => {\n    console.log(app.todo.save(\"algo\", { hola: \"mundo\" }));\n  });\n  \n})(new _app_App__WEBPACK_IMPORTED_MODULE_0__.App(new _core_Todo__WEBPACK_IMPORTED_MODULE_3__.Todo(new _core_Persisted__WEBPACK_IMPORTED_MODULE_1__.Persisted)), new _core_Events__WEBPACK_IMPORTED_MODULE_2__.Events);\n\n\n//# sourceURL=webpack://todo-proyecto/./src/index.js?");

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
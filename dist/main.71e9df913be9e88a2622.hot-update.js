/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateglo_academy_glazing"]("main",{

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar timer = function timer(deadline) {\n  var timerBlocks = document.querySelectorAll('.count-wrap'),\n      daysOutputs = document.querySelectorAll('.count__1'),\n      hoursOutputs = document.querySelectorAll('.count__2'),\n      minutesOutputs = document.querySelectorAll('.count__3'),\n      secondsOutputs = document.querySelectorAll('.count__4');\n\n  var getTimeRemaining = function getTimeRemaining() {\n    var dateStop = new Date(deadline).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000,\n        seconds = Math.floor(timeRemaining % 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 60 / 60),\n        days = Math.floor(timeRemaining / 60 / 60 % 24);\n    return {\n      timeRemaining: timeRemaining,\n      days: days,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://glo-academy--glazing/./src/modules/timer.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9da72bbf7005df7fd5a7")
/******/ })();
/******/ 
/******/ }
);
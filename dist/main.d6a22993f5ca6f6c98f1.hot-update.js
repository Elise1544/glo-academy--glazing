/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateglo_academy_glazing"]("main",{

/***/ "./src/modules/callback.js":
/*!*********************************!*\
  !*** ./src/modules/callback.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar callback = function callback() {\n  var btnCallback = document.querySelectorAll('a[href^=\"#callback\"]'),\n      modal = document.querySelector('.header-modal'),\n      overlay = document.querySelector('.overlay');\n  btnCallback.forEach(function (button) {\n    button.addEventListener('click', function () {\n      modal.style.display = 'block';\n      overlay.style.display = 'block';\n    });\n  });\n  window.addEventListener('click', function (evt) {\n    var target = evt.target;\n\n    if (target.classList.contains('header-modal__close') || target.classList.contains('overlay')) {\n      modal.style.display = 'none';\n      overlay.style.display = 'none';\n    }\n  });\n  window.addEventListener('keydown', function (evt) {\n    if (evt.key === 'Escape') {\n      modal.style.display = 'none';\n      overlay.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (callback);\n\n//# sourceURL=webpack://glo-academy--glazing/./src/modules/callback.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("97559c8ee9d245f570c8")
/******/ })();
/******/ 
/******/ }
);
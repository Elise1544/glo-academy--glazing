/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateglo_academy_glazing"]("main",{

/***/ "./src/modules/measurer.js":
/*!*********************************!*\
  !*** ./src/modules/measurer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar measurer = function measurer() {\n  var measurerBtns = document.querySelectorAll('a[href^=\"#application\"]'),\n      measureModal = document.querySelector('.services-modal'),\n      overlay = document.querySelector('.overlay');\n  measurerBtns.forEach(function (button) {\n    button.addEventListener('click', function () {\n      measureModal.style.display = 'block';\n      overlay.style.display = 'block';\n    });\n  }); // measureModal.addEventListener('click', evt => {\n  // \tconst target = evt.target;\n  // \tif (target.classList.contains('services-modal__close')) {\n  // \t\tmeasureModal.style.display = 'none';\n  // \t\toverlay.style.display = 'none';\n  // \t}\n  // });\n\n  window.addEventListener('click', function (evt) {\n    var target = evt.target;\n\n    if (target.classList.contains('services-modal__close') || target.classList.contains('overlay')) {\n      measureModal.style.display = 'none';\n      overlay.style.display = 'none';\n    }\n  });\n  window.addEventListener('keydown', function (evt) {\n    if (evt.key === 'Escape') {\n      measureModal.style.display = 'none';\n      overlay.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (measurer);\n\n//# sourceURL=webpack://glo-academy--glazing/./src/modules/measurer.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("130b2c5aa6757c7f76f3")
/******/ })();
/******/ 
/******/ }
);
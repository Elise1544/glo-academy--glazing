/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateglo_academy_glazing"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_callback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/callback */ \"./src/modules/callback.js\");\n/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/carousel */ \"./src/modules/carousel.js\");\n/* harmony import */ var _modules_measurer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/measurer */ \"./src/modules/measurer.js\");\n/* harmony import */ var _modules_measurer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_measurer__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n(0,_modules_callback__WEBPACK_IMPORTED_MODULE_0__.default)();\n_modules_measurer__WEBPACK_IMPORTED_MODULE_2___default()();\nvar adventages = new _modules_carousel__WEBPACK_IMPORTED_MODULE_1__.default({\n  main: '.benefits-inner',\n  wrap: '.benefits-wrap',\n  prev: '.benefits__arrow--left',\n  next: '.benefits__arrow--right',\n  slidesToShow: 3,\n  responsive: [{\n    breakpoint: 768,\n    slidesToShow: 3\n  }, {\n    breakpoint: 576,\n    slidesToShow: 1\n  }],\n  infinity: true,\n  styleName: 'benefits'\n});\nadventages.init();\nvar services = new _modules_carousel__WEBPACK_IMPORTED_MODULE_1__.default({\n  main: '.services--row',\n  wrap: '.services--wrap',\n  prev: '.services__arrow--left',\n  next: '.services__arrow--right',\n  slidesToShow: 2,\n  responsive: [{\n    breakpoint: 768,\n    slidesToShow: 2\n  }, {\n    breakpoint: 576,\n    slidesToShow: 1\n  }],\n  infinity: true,\n  styleName: 'services'\n});\nservices.init();\n\n//# sourceURL=webpack://glo-academy--glazing/./src/index.js?");

/***/ }),

/***/ "./src/modules/measurer.js":
/*!*********************************!*\
  !*** ./src/modules/measurer.js ***!
  \*********************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://glo-academy--glazing/./src/modules/measurer.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("80f4dcd09b43fdb016a6")
/******/ })();
/******/ 
/******/ }
);
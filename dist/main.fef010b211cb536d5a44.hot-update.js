/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateglo_academy_glazing"]("main",{

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calc = function calc() {\n  var calcBlock = document.querySelector('#calc'),\n      type = document.querySelector('#calc-type'),\n      material = document.querySelector('#calc-type-material'),\n      calcInput = document.querySelector('#calc-input');\n\n  if (document.querySelector('#calc-total')) {\n    window.calc = document.querySelector('#calc-total');\n  } // let total = 0;\n  // const calcSum = () => {\n  //   calcInput.addEventListener('input', () => {\n  //     calcInput.value = calcInput.value.replace(/\\D/, '')\n  //   });\n  //   if (type.value && material.value) {\n  //     window.calc.value = type.value * material.value * calcInput.value;\n  //   } else {\n  //     window.calc.value = 0;\n  //   }\n  //   // window.calc.value = total;\n  // };\n\n\n  calcBlock.addEventListener('change', function (evt) {\n    var target = evt.target;\n\n    if (target === type || target === material || target === calcInput) {\n      calcInput.addEventListener('input', function () {\n        calcInput.value = calcInput.value.replace(/\\D/, '');\n      });\n\n      if (type.value && material.value) {\n        window.calc.value = type.value * material.value * calcInput.value;\n      } else {\n        window.calc.value = 0;\n      } // window.calc.value = total;\n\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://glo-academy--glazing/./src/modules/calc.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1855e74e0bf7d691dec9")
/******/ })();
/******/ 
/******/ }
);
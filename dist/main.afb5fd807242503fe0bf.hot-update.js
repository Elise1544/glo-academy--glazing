/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateglo_academy_glazing"]("main",{

/***/ "./src/modules/validation.js":
/*!***********************************!*\
  !*** ./src/modules/validation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar validation = function validation() {\n  var validationBlocks = document.querySelectorAll('.order-form'),\n      nameInput = document.querySelectorAll('.order-form input[name^=\"fio\"]'),\n      phoneInput = document.querySelectorAll('.order-form input[name^=\"phone\"]');\n\n  var validateName = function validateName() {\n    nameInput.forEach(function (name) {\n      name.addEventListener('input', function () {\n        // let regex = /^[а-яa-z]$/i;\n        // if (regex.test(name.value)) {\n        //   name.style.border = '1px solid green';\n        // } else {\n        //   name.value = '';\n        //   name.style.border = '1px solid red';\n        // }\n        name.value = name.value.replace(/[^а-яa-z]/i, '');\n      });\n    });\n  };\n\n  validateName();\n\n  var validatePhone = function validatePhone() {\n    phoneInput.forEach(function (phone) {\n      phone.addEventListener('input', function () {\n        // phone.style = 'none';\n        // let regex = /^(\\+7|8)([0-9]){1,15}/;\n        // if (regex.test(phone.value)) {\n        //   phone.style.border = '1px solid green';\n        // } else {\n        //   phone.value = '';\n        //   phone.style.border = '1px solid red';\n        // }\n        phone.value = phone.value.replace(/^\\+?(^[0-9])/, '');\n      });\n    });\n  };\n\n  validatePhone();\n  validationBlocks.forEach(function (block) {\n    block.addEventListener('submit', function (evt) {\n      evt.preventDefault();\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack://glo-academy--glazing/./src/modules/validation.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c0c3273f4a441f0a8f20")
/******/ })();
/******/ 
/******/ }
);
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateglo_academy_glazing"]("main",{

/***/ "./src/modules/carousel.js":
/*!*********************************!*\
  !*** ./src/modules/carousel.js ***!
  \*********************************/
/***/ (() => {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Carousel = /*#__PURE__*/function () {\n  function Carousel(_ref) {\n    var wrap = _ref.wrap,\n        prev = _ref.prev,\n        next = _ref.next,\n        slidesToShow = _ref.slidesToShow,\n        _ref$responsive = _ref.responsive,\n        responsive = _ref$responsive === void 0 ? [] : _ref$responsive;\n\n    _classCallCheck(this, Carousel);\n\n    this.wrap = document.querySelector(wrap);\n    this.slides = document.querySelectorAll(wrap).children;\n    this.prev = document.querySelector(prev);\n    this.next = document.querySelector(next);\n    this.slidesToShow = slidesToShow;\n    this.responsive = responsive;\n  }\n\n  _createClass(Carousel, [{\n    key: \"init\",\n    value: function init() {\n      this.addClasses();\n      this.addStyle();\n      this.controlSlider();\n\n      if (this.responsive) {\n        this.ResponseInit();\n      }\n    }\n  }, {\n    key: \"addClasses\",\n    value: function addClasses() {\n      this.wrap.classList.add('carousel-wrap');\n    }\n  }]);\n\n  return Carousel;\n}();\n\n//# sourceURL=webpack://glo-academy--glazing/./src/modules/carousel.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("35b51e7748a2464a8e96")
/******/ })();
/******/ 
/******/ }
);
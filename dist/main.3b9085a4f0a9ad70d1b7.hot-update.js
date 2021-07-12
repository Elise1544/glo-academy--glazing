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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Carousel = /*#__PURE__*/function () {\n  function Carousel(_ref) {\n    var main = _ref.main,\n        wrap = _ref.wrap,\n        prev = _ref.prev,\n        next = _ref.next,\n        _ref$infinity = _ref.infinity,\n        infinity = _ref$infinity === void 0 ? false : _ref$infinity,\n        _ref$position = _ref.position,\n        position = _ref$position === void 0 ? 0 : _ref$position,\n        _ref$slidesToShow = _ref.slidesToShow,\n        slidesToShow = _ref$slidesToShow === void 0 ? 3 : _ref$slidesToShow,\n        _ref$responsive = _ref.responsive,\n        responsive = _ref$responsive === void 0 ? [] : _ref$responsive;\n\n    _classCallCheck(this, Carousel);\n\n    this.main = document.querySelector(main);\n    this.wrap = document.querySelector(wrap);\n    this.slides = document.querySelector(wrap).children;\n    this.prev = document.querySelector(prev);\n    this.next = document.querySelector(next);\n    this.infinity = infinity;\n    this.position = position;\n    this.slidesToShow = slidesToShow;\n    this.widthSlide = Math.floor(100 / this.slidesToShow);\n    this.responsive = responsive;\n  }\n\n  _createClass(Carousel, [{\n    key: \"init\",\n    value: function init() {\n      this.addClasses();\n      this.addStyle();\n      this.controlSlider();\n\n      if (this.responsive) {\n        this.responseInit();\n      }\n    }\n  }, {\n    key: \"addClasses\",\n    value: function addClasses() {\n      this.main.classList.add('carousel');\n      this.wrap.classList.add('carousel-wrap');\n\n      var _iterator = _createForOfIteratorHelper(this.slides),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var item = _step.value;\n          item.classList.add('carousel-item');\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }\n  }, {\n    key: \"addStyle\",\n    value: function addStyle() {\n      var style = document.querySelector('.carousel-style');\n\n      if (!style) {\n        style = document.createElement('style');\n        style.classList.add('carousel-style');\n      }\n\n      style.textContent = \"\\n    .carousel {\\n      overflow: hidden;\\n    }\\n    .carousel-wrap {\\n      display: flex;\\n      max-width: 100%;\\n      transition: transform 0.5s;\\n      will-change: transform;\\n    }\\n    .carousel-item {\\n      flex: 0 0 \".concat(this.widthSlide, \"%;\\n      margin: auto 0;\\n      max-width: 100%;\\n    }\\n    \");\n      document.head.append(style);\n    }\n  }, {\n    key: \"controlSlider\",\n    value: function controlSlider() {\n      this.prev.addEventListener('click', this.prevSlide.bind(this));\n      this.next.addEventListener('click', this.nextSlide.bind(this));\n    }\n  }, {\n    key: \"prevSlide\",\n    value: function prevSlide() {\n      if (this.infinity || this.position > 0) {\n        --this.position;\n\n        if (this.position < 0) {\n          this.position = this.slides.length - this.slidesToShow;\n        }\n\n        this.wrap.style.transform = \"translateX(-\".concat(this.position * this.widthSlide, \"%)\");\n      }\n    }\n  }, {\n    key: \"nextSlide\",\n    value: function nextSlide() {\n      if (this.infinity || this.position < this.slides.length - this.slidesToShow) {\n        ++this.position;\n\n        if (this.position > this.slides.length - this.slidesToShow) {\n          this.position = 0;\n        }\n\n        this.wrap.style.transform = \"translateX(-\".concat(this.position * this.widthSlide, \"%)\");\n      }\n    }\n  }, {\n    key: \"responseInit\",\n    value: function responseInit() {\n      var _this = this;\n\n      var slidesToShowDefault = this.slidesToShow;\n      var allResponse = this.responsive.map(function (item) {\n        return item.breakpoint;\n      });\n      var maxResponse = Math.max.apply(Math, _toConsumableArray(allResponse));\n\n      var checkResponse = function checkResponse() {\n        if (document.documentElement.clientWidth < maxResponse) {\n          for (var i = 0; i < allResponse.length; i++) {\n            if (document.documentElement.clientWidth < allResponse[i]) {\n              _this.slidesToShow = _this.responsive[i].slidesToShow;\n              _this.widthSlide = Math.floor(100 / _this.slidesToShow);\n\n              _this.addStyle();\n            }\n          }\n        } else {\n          _this.slidesToShow = slidesToShowDefault;\n          _this.widthSlide = Math.floor(100 / _this.slidesToShow);\n\n          _this.addStyle();\n        }\n      };\n\n      window.addEventListener('resize', checkResponse);\n    }\n  }]);\n\n  return Carousel;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carousel);\n\n//# sourceURL=webpack://glo-academy--glazing/./src/modules/carousel.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("94abd250e3213c6de863")
/******/ })();
/******/ 
/******/ }
);
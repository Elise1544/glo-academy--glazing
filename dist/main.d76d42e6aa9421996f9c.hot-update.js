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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar timer = function timer(deadline) {\n  var daysOutputs, hoursOutputs, minutesOutputs, secondsOutputs;\n  var timerBlocks = document.querySelectorAll('.count-wrap'),\n      dayBlock = timerBlocks.forEach(function (item) {\n    daysOutputs = item.children[0].querySelector('span');\n    console.log('daysOutputs: ', daysOutputs);\n  }),\n      hourBlock = timerBlocks.forEach(function (item) {\n    daysOutputs = item.children[1].querySelector('span');\n  }),\n      minutesBlock = timerBlocks.forEach(function (item) {\n    daysOutputs = item.children[2].querySelector('span');\n  }),\n      secondsBlock = timerBlocks.forEach(function (item) {\n    daysOutputs = item.children[3].querySelector('span');\n  });\n\n  var _iterator = _createForOfIteratorHelper(daysOutputs),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var day = _step.value;\n      day.textContent = '1000';\n    } // console.log('daysOutputs: ', daysOutputs[0]);\n\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  var getTimeRemaining = function getTimeRemaining() {\n    var dateStop = new Date(deadline).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000,\n        seconds = Math.floor(timeRemaining % 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 60 / 60),\n        days = Math.floor(timeRemaining / 60 / 60 % 24);\n    return {\n      timeRemaining: timeRemaining,\n      days: days,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  };\n\n  var addZero = function addZero(time) {\n    if (time < 10) {\n      return \"0\".concat(time);\n    } else {\n      return time;\n    }\n  };\n\n  var updateClock = function updateClock() {\n    var time = getTimeRemaining();\n\n    if (time.timeRemaining > 0) {\n      daysOutputs[0].textContent = addZero(time.days);\n      hoursOutputs[0].textContent = addZero(time.hours);\n      minutesOutputs[0].textContent = addZero(time.minutes);\n      secondsOutputs[0].textContent = addZero(time.seconds);\n    } // } else {\n    //   timerBlocks.forEach(timerBlock => {\n    //     timerBlock.style.color = `red`;\n    //   });\n    //   daysOutputs.textContent = `00`;\n    //   hoursOutputs.textContent = `00`;\n    //   minutesOutputs.textContent = `00`;\n    //   secondsOutputs.textContent = `00`;\n    // }\n\n  }; // setInterval(updateClock, 1000);\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://glo-academy--glazing/./src/modules/timer.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c7237d02d31d77944ad6")
/******/ })();
/******/ 
/******/ }
);
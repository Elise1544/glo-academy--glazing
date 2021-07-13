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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar timer = function timer(deadline) {\n  var timerBlocks = document.querySelectorAll('.count-wrap'),\n      daysOutputs = document.querySelectorAll('.count_1').forEach(function (item) {\n    item.querySelector('span');\n  }),\n      hoursOutputs = document.querySelectorAll('.count_2').forEach(function (item) {\n    item.querySelector('span');\n  }),\n      minutesOutputs = document.querySelectorAll('.count_3').forEach(function (item) {\n    item.querySelector('span');\n  }),\n      secondsOutputs = document.querySelectorAll('.count_4').forEach(function (item) {\n    item.querySelector('span');\n  });\n\n  var getTimeRemaining = function getTimeRemaining() {\n    var dateStop = new Date(deadline).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000,\n        seconds = Math.floor(timeRemaining % 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 60 / 60),\n        days = Math.floor(timeRemaining / 60 / 60 % 24);\n    return {\n      timeRemaining: timeRemaining,\n      days: days,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  };\n\n  var addZero = function addZero(time) {\n    if (time < 10) {\n      return \"0\".concat(time);\n    } else {\n      return time;\n    }\n  };\n\n  var updateClock = function updateClock() {\n    var time = getTimeRemaining();\n\n    if (time.timeRemaining > 0) {\n      daysOutputs[0].textContent = addZero(time.days);\n      hoursOutputs[0].textContent = addZero(time.hours);\n      minutesOutputs[0].textContent = addZero(time.minutes);\n      secondsOutputs[0].textContent = addZero(time.seconds);\n    } // } else {\n    //   timerBlocks.forEach(timerBlock => {\n    //     timerBlock.style.color = `red`;\n    //   });\n    //   daysOutputs.textContent = `00`;\n    //   hoursOutputs.textContent = `00`;\n    //   minutesOutputs.textContent = `00`;\n    //   secondsOutputs.textContent = `00`;\n    // }\n\n  }; // setInterval(updateClock, 1000);\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://glo-academy--glazing/./src/modules/timer.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f9251d1df02fb586db1a")
/******/ })();
/******/ 
/******/ }
);
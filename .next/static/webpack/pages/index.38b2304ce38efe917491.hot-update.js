webpackHotUpdate_N_E("pages/index",{

/***/ "./network/axios.ts":
/*!**************************!*\
  !*** ./network/axios.ts ***!
  \**************************/
/*! exports provided: getPosts, createPost, getDefinitePost, deleteDefinitePost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPosts\", function() { return getPosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPost\", function() { return createPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDefinitePost\", function() { return getDefinitePost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteDefinitePost\", function() { return deleteDefinitePost; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n\n\n\nvar axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar getPosts = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios.get('https://simple-blog-api.crew.red/posts').then(function (response) {\n              return response.data;\n            })[\"catch\"](function (error) {\n              console.log(error);\n            });\n\n          case 2:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getPosts() {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar createPost = function createPost(_ref2) {\n  var title = _ref2.title,\n      body = _ref2.body;\n  axios.post('https://simple-blog-api.crew.red/posts', {\n    title: title,\n    body: body\n  }).then(function () {\n    alert('Successfully created!');\n  })[\"catch\"](function (error) {\n    console.log(error);\n    alert('Error! Check console.log');\n  });\n};\nvar getDefinitePost = /*#__PURE__*/function () {\n  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return axios.get(\"https://simple-blog-api.crew.red/posts/\".concat(id, \"?_embed=comments\")).then(function (response) {\n              return response.data;\n            })[\"catch\"](function (error) {\n              console.log(error);\n            });\n\n          case 2:\n            return _context2.abrupt(\"return\", _context2.sent);\n\n          case 3:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function getDefinitePost(_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\nvar deleteDefinitePost = /*#__PURE__*/function () {\n  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return axios[\"delete\"](\"https://simple-blog-api.crew.red/posts/\".concat(id, \"?_embed=comments\")).then(function (response) {\n              return response.data;\n            })[\"catch\"](function (error) {\n              console.log(error);\n            });\n\n          case 2:\n            return _context3.abrupt(\"return\", _context3.sent);\n\n          case 3:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function deleteDefinitePost(_x2) {\n    return _ref4.apply(this, arguments);\n  };\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbmV0d29yay9heGlvcy50cz82ZGQ4Il0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsImdldFBvc3RzIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZVBvc3QiLCJ0aXRsZSIsImJvZHkiLCJwb3N0IiwiYWxlcnQiLCJnZXREZWZpbml0ZVBvc3QiLCJpZCIsImRlbGV0ZURlZmluaXRlUG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsNENBQUQsQ0FBckI7O0FBRU8sSUFBTUMsUUFBUTtBQUFBLDhMQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNURixLQUFLLENBQUNHLEdBQU4sQ0FBVSx3Q0FBVixFQUNWQyxJQURVLENBQ0wsVUFBVUMsUUFBVixFQUF5QjtBQUM3QixxQkFBT0EsUUFBUSxDQUFDQyxJQUFoQjtBQUNELGFBSFUsV0FJSixVQUFVQyxLQUFWLEVBQXNCO0FBQzNCQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRCxhQU5VLENBRFM7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFSTCxRQUFRO0FBQUE7QUFBQTtBQUFBLEdBQWQ7QUFVQSxJQUFNUSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxRQUFvRDtBQUFBLE1BQWpEQyxLQUFpRCxTQUFqREEsS0FBaUQ7QUFBQSxNQUExQ0MsSUFBMEMsU0FBMUNBLElBQTBDO0FBQzVFWixPQUFLLENBQUNhLElBQU4sQ0FBVyx3Q0FBWCxFQUFxRDtBQUNuREYsU0FBSyxFQUFFQSxLQUQ0QztBQUVuREMsUUFBSSxFQUFFQTtBQUY2QyxHQUFyRCxFQUlHUixJQUpILENBSVEsWUFBWTtBQUNoQlUsU0FBSyxDQUFDLHVCQUFELENBQUw7QUFDRCxHQU5ILFdBT1MsVUFBVVAsS0FBVixFQUFzQjtBQUMzQkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQU8sU0FBSyxDQUFDLDBCQUFELENBQUw7QUFDRCxHQVZIO0FBV0QsQ0FaTTtBQWNBLElBQU1DLGVBQWU7QUFBQSwrTEFBRyxrQkFBT0MsRUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDaEJoQixLQUFLLENBQUNHLEdBQU4sa0RBQW9EYSxFQUFwRCx1QkFDVlosSUFEVSxDQUNMLFVBQVVDLFFBQVYsRUFBeUI7QUFDN0IscUJBQU9BLFFBQVEsQ0FBQ0MsSUFBaEI7QUFDRCxhQUhVLFdBSUosVUFBVUMsS0FBVixFQUFzQjtBQUMzQkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0QsYUFOVSxDQURnQjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWZRLGVBQWU7QUFBQTtBQUFBO0FBQUEsR0FBckI7QUFVQSxJQUFNRSxrQkFBa0I7QUFBQSwrTEFBRyxrQkFBT0QsRUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDbkJoQixLQUFLLFVBQUwsa0RBQXVEZ0IsRUFBdkQsdUJBQ1ZaLElBRFUsQ0FDTCxVQUFVQyxRQUFWLEVBQXlCO0FBQzdCLHFCQUFPQSxRQUFRLENBQUNDLElBQWhCO0FBQ0QsYUFIVSxXQUlKLFVBQVVDLEtBQVYsRUFBc0I7QUFDM0JDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNELGFBTlUsQ0FEbUI7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFsQlUsa0JBQWtCO0FBQUE7QUFBQTtBQUFBLEdBQXhCIiwiZmlsZSI6Ii4vbmV0d29yay9heGlvcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxuXG5leHBvcnQgY29uc3QgZ2V0UG9zdHMgPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkL3Bvc3RzJylcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2U6IGFueSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBvc3QgPSAoeyB0aXRsZSwgYm9keSB9OiB7dGl0bGU6IHN0cmluZywgYm9keTogc3RyaW5nfSkgPT4ge1xuICBheGlvcy5wb3N0KCdodHRwczovL3NpbXBsZS1ibG9nLWFwaS5jcmV3LnJlZC9wb3N0cycsIHtcbiAgICB0aXRsZTogdGl0bGUsXG4gICAgYm9keTogYm9keVxuICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGFsZXJ0KCdTdWNjZXNzZnVsbHkgY3JlYXRlZCEnKVxuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgIGFsZXJ0KCdFcnJvciEgQ2hlY2sgY29uc29sZS5sb2cnKVxuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCBnZXREZWZpbml0ZVBvc3QgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xuICByZXR1cm4gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL3NpbXBsZS1ibG9nLWFwaS5jcmV3LnJlZC9wb3N0cy8ke2lkfT9fZW1iZWQ9Y29tbWVudHNgKVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZTogYW55KSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlRGVmaW5pdGVQb3N0ID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIGF3YWl0IGF4aW9zLmRlbGV0ZShgaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvcG9zdHMvJHtpZH0/X2VtYmVkPWNvbW1lbnRzYClcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2U6IGFueSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./network/axios.ts\n");

/***/ })

})
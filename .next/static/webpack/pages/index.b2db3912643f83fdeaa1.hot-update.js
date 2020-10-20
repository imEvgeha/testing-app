webpackHotUpdate_N_E("pages/index",{

/***/ "./network/axios.ts":
/*!**************************!*\
  !*** ./network/axios.ts ***!
  \**************************/
/*! exports provided: getPosts, createPost, getDefinitePost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPosts\", function() { return getPosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPost\", function() { return createPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDefinitePost\", function() { return getDefinitePost; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n\n\n\nvar axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar getPosts = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios.get('https://simple-blog-api.crew.red/posts').then(function (response) {\n              return response.data;\n            })[\"catch\"](function (error) {\n              console.log(error);\n            });\n\n          case 2:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getPosts() {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar createPost = function createPost(_ref2) {\n  var title = _ref2.title,\n      body = _ref2.body;\n  axios.post('https://simple-blog-api.crew.red/posts', {\n    title: title,\n    body: body\n  }).then(function () {\n    alert('Successfully created!');\n  })[\"catch\"](function (error) {\n    console.log(error);\n    alert('Error! Check console.log');\n  });\n};\nvar getDefinitePost = /*#__PURE__*/function () {\n  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return axios.get(\"https://simple-blog-api.crew.red/posts/\".concat(id, \"?_embed=comments\")).then(function (response) {\n              return response.data;\n            })[\"catch\"](function (error) {\n              console.log(error);\n            });\n\n          case 2:\n            return _context2.abrupt(\"return\", _context2.sent);\n\n          case 3:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function getDefinitePost(_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbmV0d29yay9heGlvcy50cz82ZGQ4Il0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsImdldFBvc3RzIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZVBvc3QiLCJ0aXRsZSIsImJvZHkiLCJwb3N0IiwiYWxlcnQiLCJnZXREZWZpbml0ZVBvc3QiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFyQjs7QUFFTyxJQUFNQyxRQUFRO0FBQUEsOExBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1RGLEtBQUssQ0FBQ0csR0FBTixDQUFVLHdDQUFWLEVBQ1ZDLElBRFUsQ0FDTCxVQUFVQyxRQUFWLEVBQXlCO0FBQzdCLHFCQUFPQSxRQUFRLENBQUNDLElBQWhCO0FBQ0QsYUFIVSxXQUlKLFVBQVVDLEtBQVYsRUFBc0I7QUFDM0JDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNELGFBTlUsQ0FEUzs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVJMLFFBQVE7QUFBQTtBQUFBO0FBQUEsR0FBZDtBQVVBLElBQU1RLFVBQVUsR0FBRyxTQUFiQSxVQUFhLFFBQW9EO0FBQUEsTUFBakRDLEtBQWlELFNBQWpEQSxLQUFpRDtBQUFBLE1BQTFDQyxJQUEwQyxTQUExQ0EsSUFBMEM7QUFDNUVaLE9BQUssQ0FBQ2EsSUFBTixDQUFXLHdDQUFYLEVBQXFEO0FBQ25ERixTQUFLLEVBQUVBLEtBRDRDO0FBRW5EQyxRQUFJLEVBQUVBO0FBRjZDLEdBQXJELEVBSUdSLElBSkgsQ0FJUSxZQUFZO0FBQ2hCVSxTQUFLLENBQUMsdUJBQUQsQ0FBTDtBQUNELEdBTkgsV0FPUyxVQUFVUCxLQUFWLEVBQXNCO0FBQzNCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBTyxTQUFLLENBQUMsMEJBQUQsQ0FBTDtBQUNELEdBVkg7QUFXRCxDQVpNO0FBY0EsSUFBTUMsZUFBZTtBQUFBLCtMQUFHLGtCQUFPQyxFQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNoQmhCLEtBQUssQ0FBQ0csR0FBTixrREFBb0RhLEVBQXBELHVCQUNWWixJQURVLENBQ0wsVUFBVUMsUUFBVixFQUF5QjtBQUM3QixxQkFBT0EsUUFBUSxDQUFDQyxJQUFoQjtBQUNELGFBSFUsV0FJSixVQUFVQyxLQUFWLEVBQXNCO0FBQzNCQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRCxhQU5VLENBRGdCOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBZlEsZUFBZTtBQUFBO0FBQUE7QUFBQSxHQUFyQiIsImZpbGUiOiIuL25ldHdvcmsvYXhpb3MudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJylcblxuZXhwb3J0IGNvbnN0IGdldFBvc3RzID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL3NpbXBsZS1ibG9nLWFwaS5jcmV3LnJlZC9wb3N0cycpXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlOiBhbnkpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhXG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQb3N0ID0gKHsgdGl0bGUsIGJvZHkgfToge3RpdGxlOiBzdHJpbmcsIGJvZHk6IHN0cmluZ30pID0+IHtcbiAgYXhpb3MucG9zdCgnaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvcG9zdHMnLCB7XG4gICAgdGl0bGU6IHRpdGxlLFxuICAgIGJvZHk6IGJvZHlcbiAgfSlcbiAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBhbGVydCgnU3VjY2Vzc2Z1bGx5IGNyZWF0ZWQhJylcbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICBhbGVydCgnRXJyb3IhIENoZWNrIGNvbnNvbGUubG9nJylcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0RGVmaW5pdGVQb3N0ID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvcG9zdHMvJHtpZH0/X2VtYmVkPWNvbW1lbnRzYClcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2U6IGFueSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./network/axios.ts\n");

/***/ })

})
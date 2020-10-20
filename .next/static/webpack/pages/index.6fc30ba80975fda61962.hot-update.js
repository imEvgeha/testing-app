webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _components_Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Message */ \"./components/Message.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_actions_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions/main */ \"./redux/actions/main.js\");\n/* harmony import */ var _network_axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../network/axios */ \"./network/axios.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/user/Documents/MyDocuments/Projects/testing-app/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/* eslint-disable react/react-in-jsx-scope */\n\n\n\n\n\n\n\n\nfunction Home(props) {\n  _s();\n\n  var _this = this;\n\n  var getData = props.getData,\n      setData = props.setData;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    Object(_network_axios__WEBPACK_IMPORTED_MODULE_5__[\"getPosts\"])().then(function (response) {\n      setData(response);\n    })[\"catch\"](function (error) {\n      console.log(error);\n    });\n  }, []);\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"message-rete\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }, getData.reverse.map(function (elem) {\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      key: elem.id,\n      href: '/posts/[id]',\n      as: \"/posts/\".concat(elem.id),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 13\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 15\n      }\n    }, __jsx(_components_Message__WEBPACK_IMPORTED_MODULE_2__[\"Message\"], {\n      title: elem.title,\n      body: elem.body,\n      id: elem.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }\n    })));\n  })));\n}\n\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Home;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    getData: state.main.data\n  };\n};\n\nvar mapDispathToProps = {\n  setData: _redux_actions_main__WEBPACK_IMPORTED_MODULE_4__[\"setData\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapStateToProps, mapDispathToProps)(Home));\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwiZ2V0RGF0YSIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJnZXRQb3N0cyIsInRoZW4iLCJyZXNwb25zZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInJldmVyc2UiLCJtYXAiLCJlbGVtIiwiaWQiLCJ0aXRsZSIsImJvZHkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm1haW4iLCJkYXRhIiwibWFwRGlzcGF0aFRvUHJvcHMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFvQkEsU0FBU0EsSUFBVCxDQUFlQyxLQUFmLEVBQThCO0FBQUE7O0FBQUE7O0FBQUEsTUFDcEJDLE9BRG9CLEdBQ0NELEtBREQsQ0FDcEJDLE9BRG9CO0FBQUEsTUFDWEMsT0FEVyxHQUNDRixLQURELENBQ1hFLE9BRFc7QUFHNUJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxtRUFBUSxHQUNMQyxJQURILENBQ1EsVUFBVUMsUUFBVixFQUF5QjtBQUM3QkosYUFBTyxDQUFDSSxRQUFELENBQVA7QUFDRCxLQUhILFdBSVMsVUFBVUMsS0FBVixFQUFzQjtBQUMzQkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRCxLQU5IO0FBT0QsR0FSUSxFQVFOLEVBUk0sQ0FBVDtBQVVBLFNBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0lOLE9BQU8sQ0FBQ1MsT0FBUixDQUFnQkMsR0FBaEIsQ0FBb0IsVUFBQ0MsSUFBRCxFQUF3QjtBQUM1QyxXQUNFLE1BQUMsZ0RBQUQ7QUFBTSxTQUFHLEVBQUVBLElBQUksQ0FBQ0MsRUFBaEI7QUFBb0IsVUFBSSxFQUFFLGFBQTFCO0FBQXlDLFFBQUUsbUJBQVlELElBQUksQ0FBQ0MsRUFBakIsQ0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDJEQUFEO0FBQ0UsV0FBSyxFQUFFRCxJQUFJLENBQUNFLEtBRGQ7QUFFRSxVQUFJLEVBQUVGLElBQUksQ0FBQ0csSUFGYjtBQUdFLFFBQUUsRUFBRUgsSUFBSSxDQUFDQyxFQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLENBREY7QUFXRCxHQVpDLENBREosQ0FERixDQURGO0FBbUJEOztHQWhDUWQsSTs7S0FBQUEsSTs7QUFrQ1QsSUFBTWlCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsS0FBSztBQUFBLFNBQUs7QUFDaENoQixXQUFPLEVBQUVnQixLQUFLLENBQUNDLElBQU4sQ0FBV0M7QUFEWSxHQUFMO0FBQUEsQ0FBN0I7O0FBSUEsSUFBTUMsaUJBQWlCLEdBQUc7QUFDeEJsQixTQUFPLEVBQUVBLDJEQUFPQTtBQURRLENBQTFCO0FBSWVtQiwwSEFBTyxDQUFDTCxlQUFELEVBQWtCSSxpQkFBbEIsQ0FBUCxDQUE0Q3JCLElBQTVDLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9yZWFjdC1pbi1qc3gtc2NvcGUgKi9cbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9NZXNzYWdlJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgc2V0RGF0YSB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvbWFpbidcbmltcG9ydCB7IGdldFBvc3RzIH0gZnJvbSAnLi4vbmV0d29yay9heGlvcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IHR5cGUgVE1lc3NhZ2VEYXRhID0ge1xuICBib2R5OiBzdHJpbmcsXG4gIGNvbW1lbnRzPzogVENvbW1lbnRbXSxcbiAgaWQ6IG51bWJlcixcbiAgdGl0bGU6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBUQ29tbWVudCA9IHtcbiAgYm9keTogc3RyaW5nLFxuICBpZDogbnVtYmVyLFxuICBwb3N0SWQ6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBUUHJvcHMgPSB7XG4gIGdldERhdGE6IFRNZXNzYWdlRGF0YVtdLFxuICBzZXREYXRhOiAoZGF0YSkgPT4gdm9pZFxufVxuXG5mdW5jdGlvbiBIb21lIChwcm9wczogVFByb3BzKSB7XG4gIGNvbnN0IHsgZ2V0RGF0YSwgc2V0RGF0YSB9ID0gcHJvcHNcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFBvc3RzKClcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZTogYW55KSB7XG4gICAgICAgIHNldERhdGEocmVzcG9uc2UpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgfSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLXJldGVcIj5cbiAgICAgICAgeyBnZXREYXRhLnJldmVyc2UubWFwKChlbGVtOiBUTWVzc2FnZURhdGEpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpbmsga2V5PXtlbGVtLmlkfSBocmVmPXsnL3Bvc3RzL1tpZF0nfSBhcz17YC9wb3N0cy8ke2VsZW0uaWR9YH0+XG4gICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxNZXNzYWdlXG4gICAgICAgICAgICAgICAgICB0aXRsZT17ZWxlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIGJvZHk9e2VsZW0uYm9keX1cbiAgICAgICAgICAgICAgICAgIGlkPXtlbGVtLmlkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApXG4gICAgICAgIH0pIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGdldERhdGE6IHN0YXRlLm1haW4uZGF0YVxufSlcblxuY29uc3QgbWFwRGlzcGF0aFRvUHJvcHMgPSB7XG4gIHNldERhdGE6IHNldERhdGFcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGhUb1Byb3BzKShIb21lKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})
webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _components_Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Message */ \"./components/Message.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_actions_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions/main */ \"./redux/actions/main.js\");\n/* harmony import */ var _network_axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../network/axios */ \"./network/axios.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/user/Documents/MyDocuments/Projects/testing-app/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/* eslint-disable react/react-in-jsx-scope */\n\n\n\n\n\n\n\n\nfunction Home(props) {\n  _s();\n\n  var _this = this;\n\n  var getData = props.getData,\n      setData = props.setData;\n  console.log(Object(_network_axios__WEBPACK_IMPORTED_MODULE_5__[\"getDatas\"])(), '<><><><><><>');\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n    axios.get('https://simple-blog-api.crew.red/posts').then(function (response) {\n      setData(response.data);\n    })[\"catch\"](function (error) {\n      console.log(error);\n    });\n  }, []);\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"message-rete\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, getData.map(function (elem) {\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      key: elem.id,\n      href: '/posts/[id]',\n      as: \"/posts/\".concat(elem.id),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 13\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 15\n      }\n    }, __jsx(_components_Message__WEBPACK_IMPORTED_MODULE_2__[\"Message\"], {\n      title: elem.title,\n      body: elem.body,\n      id: elem.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }\n    })));\n  })));\n}\n\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Home;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    getData: state.main.data\n  };\n};\n\nvar mapDispathToProps = {\n  setData: _redux_actions_main__WEBPACK_IMPORTED_MODULE_4__[\"setData\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapStateToProps, mapDispathToProps)(Home));\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwiZ2V0RGF0YSIsInNldERhdGEiLCJjb25zb2xlIiwibG9nIiwiZ2V0RGF0YXMiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInJlcXVpcmUiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJtYXAiLCJlbGVtIiwiaWQiLCJ0aXRsZSIsImJvZHkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm1haW4iLCJtYXBEaXNwYXRoVG9Qcm9wcyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQW9CQSxTQUFTQSxJQUFULENBQWVDLEtBQWYsRUFBOEI7QUFBQTs7QUFBQTs7QUFBQSxNQUNwQkMsT0FEb0IsR0FDQ0QsS0FERCxDQUNwQkMsT0FEb0I7QUFBQSxNQUNYQyxPQURXLEdBQ0NGLEtBREQsQ0FDWEUsT0FEVztBQUU1QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlDLCtEQUFRLEVBQXBCLEVBQXdCLGNBQXhCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFyQjs7QUFFQUQsU0FBSyxDQUFDRSxHQUFOLENBQVUsd0NBQVYsRUFDR0MsSUFESCxDQUNRLFVBQVVDLFFBQVYsRUFBeUI7QUFDN0JULGFBQU8sQ0FBQ1MsUUFBUSxDQUFDQyxJQUFWLENBQVA7QUFDRCxLQUhILFdBSVMsVUFBVUMsS0FBVixFQUFzQjtBQUMzQlYsYUFBTyxDQUFDQyxHQUFSLENBQVlTLEtBQVo7QUFDRCxLQU5IO0FBT0QsR0FWUSxFQVVOLEVBVk0sQ0FBVDtBQVlBLFNBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0laLE9BQU8sQ0FBQ2EsR0FBUixDQUFZLFVBQUNDLElBQUQsRUFBd0I7QUFDcEMsV0FDRSxNQUFDLGdEQUFEO0FBQU0sU0FBRyxFQUFFQSxJQUFJLENBQUNDLEVBQWhCO0FBQW9CLFVBQUksRUFBRSxhQUExQjtBQUF5QyxRQUFFLG1CQUFZRCxJQUFJLENBQUNDLEVBQWpCLENBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywyREFBRDtBQUNFLFdBQUssRUFBRUQsSUFBSSxDQUFDRSxLQURkO0FBRUUsVUFBSSxFQUFFRixJQUFJLENBQUNHLElBRmI7QUFHRSxRQUFFLEVBQUVILElBQUksQ0FBQ0MsRUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERixDQURGO0FBV0QsR0FaQyxDQURKLENBREYsQ0FERjtBQW1CRDs7R0FuQ1FqQixJOztLQUFBQSxJOztBQXFDVCxJQUFNb0IsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNoQ25CLFdBQU8sRUFBRW1CLEtBQUssQ0FBQ0MsSUFBTixDQUFXVDtBQURZLEdBQUw7QUFBQSxDQUE3Qjs7QUFJQSxJQUFNVSxpQkFBaUIsR0FBRztBQUN4QnBCLFNBQU8sRUFBRUEsMkRBQU9BO0FBRFEsQ0FBMUI7QUFJZXFCLDBIQUFPLENBQUNKLGVBQUQsRUFBa0JHLGlCQUFsQixDQUFQLENBQTRDdkIsSUFBNUMsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3JlYWN0LWluLWpzeC1zY29wZSAqL1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9jb21wb25lbnRzL01lc3NhZ2UnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBzZXREYXRhIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9tYWluJ1xuaW1wb3J0IHsgZ2V0RGF0YXMgfSBmcm9tICcuLi9uZXR3b3JrL2F4aW9zJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgdHlwZSBUTWVzc2FnZURhdGEgPSB7XG4gIGJvZHk6IHN0cmluZyxcbiAgY29tbWVudHM/OiBUQ29tbWVudFtdLFxuICBpZDogbnVtYmVyLFxuICB0aXRsZTogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIFRDb21tZW50ID0ge1xuICBib2R5OiBzdHJpbmcsXG4gIGlkOiBudW1iZXIsXG4gIHBvc3RJZDogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIFRQcm9wcyA9IHtcbiAgZ2V0RGF0YTogVE1lc3NhZ2VEYXRhW10sXG4gIHNldERhdGE6IChkYXRhKSA9PiB2b2lkXG59XG5cbmZ1bmN0aW9uIEhvbWUgKHByb3BzOiBUUHJvcHMpIHtcbiAgY29uc3QgeyBnZXREYXRhLCBzZXREYXRhIH0gPSBwcm9wc1xuICBjb25zb2xlLmxvZyhnZXREYXRhcygpLCAnPD48Pjw+PD48Pjw+JylcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxuXG4gICAgYXhpb3MuZ2V0KCdodHRwczovL3NpbXBsZS1ibG9nLWFwaS5jcmV3LnJlZC9wb3N0cycpXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2U6IGFueSkge1xuICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgfSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLXJldGVcIj5cbiAgICAgICAgeyBnZXREYXRhLm1hcCgoZWxlbTogVE1lc3NhZ2VEYXRhKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMaW5rIGtleT17ZWxlbS5pZH0gaHJlZj17Jy9wb3N0cy9baWRdJ30gYXM9e2AvcG9zdHMvJHtlbGVtLmlkfWB9PlxuICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICA8TWVzc2FnZVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2VsZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICBib2R5PXtlbGVtLmJvZHl9XG4gICAgICAgICAgICAgICAgICBpZD17ZWxlbS5pZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKVxuICAgICAgICB9KSB9XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBnZXREYXRhOiBzdGF0ZS5tYWluLmRhdGFcbn0pXG5cbmNvbnN0IG1hcERpc3BhdGhUb1Byb3BzID0ge1xuICBzZXREYXRhOiBzZXREYXRhXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRoVG9Qcm9wcykoSG9tZSlcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})
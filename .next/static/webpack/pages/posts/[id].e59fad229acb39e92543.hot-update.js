webpackHotUpdate_N_E("pages/posts/[id]",{

/***/ "./pages/posts/[id].tsx":
/*!******************************!*\
  !*** ./pages/posts/[id].tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/main */ \"./redux/actions/main.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _network_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../network/axios */ \"./network/axios.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/user/Documents/MyDocuments/Projects/testing-app/pages/posts/[id].tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n      background: transparent;\\n      border-radius: 3px;\\n      border: 2px solid grey;\\n      color: grey;\\n      margin: 0.5em 1em;\\n      padding: 0.25em 1em;\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n/* eslint-disable react/react-in-jsx-scope */\n\n\n\n\n\n\n\n\nfunction Posts(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      body = _useState[0],\n      setBody = _useState[1];\n\n  var getMessage = props.getMessage,\n      setMessage = props.setMessage;\n  var id = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])().query.id;\n\n  var axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var Button = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].button(_templateObject());\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    Object(_network_axios__WEBPACK_IMPORTED_MODULE_6__[\"getDefinitePost\"])(id).then(function (response) {\n      setMessage(response);\n    });\n  }, []);\n\n  var handleDeleteClick = function handleDeleteClick() {\n    Object(_network_axios__WEBPACK_IMPORTED_MODULE_6__[\"deleteDefinitePost\"])(id).then(function () {\n      router.push({\n        pathname: '/'\n      });\n    });\n  };\n\n  var handleChange = function handleChange(event) {\n    event.preventDefault();\n    setBody(event.target.value);\n  };\n\n  var handleCommentSubmit = function handleCommentSubmit(event) {\n    event.preventDefault();\n    Object(_network_axios__WEBPACK_IMPORTED_MODULE_6__[\"createComment\"])({\n      id: id,\n      body: body\n    });\n    setBody('');\n  };\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"Layout\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"postInfo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, \"Message \\u2116\".concat(getMessage.id)), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, getMessage.title), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }, getMessage.body), __jsx(Button, {\n    onClick: handleDeleteClick,\n    className: \"delete-button\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }, \"Delete this message\"), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }, __jsx(\"form\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 11\n    }\n  }, __jsx(\"b\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }\n  }, \"Comment body:\"), __jsx(\"input\", {\n    className: 'styled-comment-input',\n    onChange: handleChange,\n    name: 'body',\n    value: body,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  }), __jsx(Button, {\n    onClick: handleCommentSubmit,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 13\n    }\n  }, \"Create\"))), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }, getMessage.comments && getMessage.comments.map(function (elem) {\n    return __jsx(\"div\", {\n      key: elem.id,\n      className: 'post-comment',\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 15\n      }\n    }, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 17\n      }\n    }, \"User \\u2116\".concat(elem.id)), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 17\n      }\n    }), __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 17\n      }\n    }, elem.body));\n  }))));\n}\n\n_s(Posts, \"iVUZ+SFvhQjVpip5zq2r0JjII78=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"], next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Posts;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    getMessage: state.main.openedMessage\n  };\n};\n\nvar mapDispathToProps = {\n  setMessage: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__[\"setMessage\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"connect\"])(mapStateToProps, mapDispathToProps)(Posts));\n\nvar _c;\n\n$RefreshReg$(_c, \"Posts\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvLnRzeD9iYmI0Il0sIm5hbWVzIjpbIlBvc3RzIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImJvZHkiLCJzZXRCb2R5IiwiZ2V0TWVzc2FnZSIsInNldE1lc3NhZ2UiLCJpZCIsInVzZVJvdXRlciIsInF1ZXJ5IiwiYXhpb3MiLCJyZXF1aXJlIiwicm91dGVyIiwiQnV0dG9uIiwic3R5bGVkIiwiYnV0dG9uIiwidXNlRWZmZWN0IiwiZ2V0RGVmaW5pdGVQb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiaGFuZGxlRGVsZXRlQ2xpY2siLCJkZWxldGVEZWZpbml0ZVBvc3QiLCJwdXNoIiwicGF0aG5hbWUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDb21tZW50U3VibWl0IiwiY3JlYXRlQ29tbWVudCIsInRpdGxlIiwiY29tbWVudHMiLCJtYXAiLCJlbGVtIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYWluIiwib3BlbmVkTWVzc2FnZSIsIm1hcERpc3BhdGhUb1Byb3BzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQU9BLFNBQVNBLEtBQVQsQ0FBZ0JDLEtBQWhCLEVBQXNDO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1pDLHNEQUFRLENBQVMsRUFBVCxDQURJO0FBQUEsTUFDN0JDLElBRDZCO0FBQUEsTUFDdkJDLE9BRHVCOztBQUFBLE1BRTVCQyxVQUY0QixHQUVESixLQUZDLENBRTVCSSxVQUY0QjtBQUFBLE1BRWhCQyxVQUZnQixHQUVETCxLQUZDLENBRWhCSyxVQUZnQjtBQUdwQyxNQUFNQyxFQUFFLEdBQUdDLDZEQUFTLEdBQUdDLEtBQVosQ0FBa0JGLEVBQTdCOztBQUNBLE1BQU1HLEtBQUssR0FBR0MsbUJB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RUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBTzJCLElBQUksQ0FBQy9CLElBQVosQ0FIRixDQURGO0FBT0QsR0FSdUIsQ0FEMUIsQ0FsQkYsQ0FERixDQURGO0FBa0NEOztHQTdFUUgsSztVQUdJUSxxRCxFQUVJQSxxRDs7O0tBTFJSLEs7O0FBK0VULElBQU1tQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ2hDL0IsY0FBVSxFQUFFK0IsS0FBSyxDQUFDQyxJQUFOLENBQVdDO0FBRFMsR0FBTDtBQUFBLENBQTdCOztBQUlBLElBQU1DLGlCQUFpQixHQUFHO0FBQ3hCakMsWUFBVSxFQUFFQSw4REFBVUE7QUFERSxDQUExQjtBQUlla0MsMEhBQU8sQ0FBQ0wsZUFBRCxFQUFrQkksaUJBQWxCLENBQVAsQ0FBNEN2QyxLQUE1QyxDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcG9zdHMvW2lkXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9yZWFjdC1pbi1qc3gtc2NvcGUgKi9cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgc2V0TWVzc2FnZSB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvbWFpbidcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHsgVE1lc3NhZ2VEYXRhIH0gZnJvbSAnLi4nXG5pbXBvcnQgeyBnZXREZWZpbml0ZVBvc3QsIGRlbGV0ZURlZmluaXRlUG9zdCwgY3JlYXRlQ29tbWVudCB9IGZyb20gJy4uLy4uL25ldHdvcmsvYXhpb3MnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgdHlwZSBUTWVzc2FnZVByb3BzID0ge1xuICBnZXRNZXNzYWdlOiBUTWVzc2FnZURhdGFbXSxcbiAgc2V0TWVzc2FnZTogKGRhdGEpID0+IHZvaWRcbn1cblxuZnVuY3Rpb24gUG9zdHMgKHByb3BzOiBUTWVzc2FnZVByb3BzKSB7XG4gIGNvbnN0IFtib2R5LCBzZXRCb2R5XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpXG4gIGNvbnN0IHsgZ2V0TWVzc2FnZSwgc2V0TWVzc2FnZSB9ID0gcHJvcHNcbiAgY29uc3QgaWQgPSB1c2VSb3V0ZXIoKS5xdWVyeS5pZFxuICBjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJylcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xuICAgICAgY29sb3I6IGdyZXk7XG4gICAgICBtYXJnaW46IDAuNWVtIDFlbTtcbiAgICAgIHBhZGRpbmc6IDAuMjVlbSAxZW07XG4gICAgYFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0RGVmaW5pdGVQb3N0KGlkKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlOiBhbnkpIHtcbiAgICAgICAgc2V0TWVzc2FnZShyZXNwb25zZSlcbiAgICAgIH0pXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUNsaWNrID0gKCkgPT4ge1xuICAgIGRlbGV0ZURlZmluaXRlUG9zdChpZClcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICAgIHBhdGhuYW1lOiAnLydcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBzZXRCb2R5KGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNvbW1lbnRTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY3JlYXRlQ29tbWVudCh7IGlkLCBib2R5IH0pXG4gICAgc2V0Qm9keSgnJylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdEluZm9cIj5cbiAgICAgICAgPGgxPntgTWVzc2FnZSDihJYke2dldE1lc3NhZ2UuaWR9YH08L2gxPlxuICAgICAgICA8aDI+e2dldE1lc3NhZ2UudGl0bGV9PC9oMj5cbiAgICAgICAgPGgyPntnZXRNZXNzYWdlLmJvZHl9PC9oMj5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEZWxldGVDbGlja30gY2xhc3NOYW1lPVwiZGVsZXRlLWJ1dHRvblwiPkRlbGV0ZSB0aGlzIG1lc3NhZ2U8L0J1dHRvbj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxiPkNvbW1lbnQgYm9keTo8L2I+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnc3R5bGVkLWNvbW1lbnQtaW5wdXQnfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBuYW1lPXsnYm9keSd9XG4gICAgICAgICAgICAgIHZhbHVlPXtib2R5fVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDb21tZW50U3VibWl0fT5DcmVhdGU8L0J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtnZXRNZXNzYWdlLmNvbW1lbnRzICYmIGdldE1lc3NhZ2UuY29tbWVudHMubWFwKChlbGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17ZWxlbS5pZH0gY2xhc3NOYW1lPXsncG9zdC1jb21tZW50J30+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2BVc2VyIOKEliR7ZWxlbS5pZH1gfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57ZWxlbS5ib2R5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgZ2V0TWVzc2FnZTogc3RhdGUubWFpbi5vcGVuZWRNZXNzYWdlXG59KVxuXG5jb25zdCBtYXBEaXNwYXRoVG9Qcm9wcyA9IHtcbiAgc2V0TWVzc2FnZTogc2V0TWVzc2FnZVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0aFRvUHJvcHMpKFBvc3RzKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[id].tsx\n");

/***/ })

})
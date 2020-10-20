webpackHotUpdate_N_E("pages/posts/new",{

/***/ "./pages/posts/new.tsx":
/*!*****************************!*\
  !*** ./pages/posts/new.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createMessage; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _components_Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Message */ \"./components/Message.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/user/Documents/MyDocuments/Projects/testing-app/pages/posts/new.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n      background: palevioletred;\\n      color: white;\\n    \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    background: transparent;\\n    border-radius: 3px;\\n    border: 2px solid palevioletred;\\n    color: palevioletred;\\n    margin: 0.5em 1em;\\n    padding: 0.25em 1em;\\n\\n    \", \"\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n/* eslint-disable react/react-in-jsx-scope */\n\n\n\n\nfunction createMessage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      title = _useState[0],\n      setTitle = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      body = _useState2[0],\n      setBody = _useState2[1];\n\n  var Button = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].button(_templateObject(), function (props) {\n    return props.primary && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject2());\n  });\n\n  var handleChange = function handleChange(event) {\n    event.preventDefault();\n    var inputValue = event.target.value;\n    event.target.name === 'body' ? setBody(inputValue) : setTitle(inputValue);\n  };\n\n  var handleSubmit = function handleSubmit(event) {\n    event.preventDefault();\n\n    var axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n    axios.post('https://simple-blog-api.crew.red/posts', {\n      title: title,\n      body: body\n    }).then(function () {\n      alert('Successfully created!');\n    })[\"catch\"](function (error) {\n      console.log(error);\n      alert('Error! Check console.log');\n    });\n    setTitle('');\n    setBody('');\n  };\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"new-message\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }, \"Create message\"), __jsx(\"form\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }, __jsx(\"b\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  }, \"Title\"), __jsx(\"input\", {\n    className: 'styled-input',\n    onChange: handleChange,\n    name: 'title',\n    value: title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 11\n    }\n  }), __jsx(\"b\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  }, \"Body\"), __jsx(\"input\", {\n    className: 'styled-input',\n    onChange: handleChange,\n    name: 'body',\n    value: body,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 11\n    }\n  }), __jsx(Button, {\n    onClick: handleSubmit,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 11\n    }\n  }, \"Create\")), __jsx(\"div\", {\n    className: \"line\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: \"messageExample\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 11\n    }\n  }, \"For exampe:\"), __jsx(_components_Message__WEBPACK_IMPORTED_MODULE_3__[\"Message\"], {\n    title: title === '' ? 'Title' : title,\n    id: \"0\",\n    body: body === '' ? 'Boby' : body,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }\n  }))));\n}\n\n_s(createMessage, \"qwG1af4LOHAgcSQ+L8KuMt9FIzc=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvbmV3LnRzeD8xNjBkIl0sIm5hbWVzIjpbImNyZWF0ZU1lc3NhZ2UiLCJ1c2VTdGF0ZSIsInRpdGxlIiwic2V0VGl0bGUiLCJib2R5Iiwic2V0Qm9keSIsIkJ1dHRvbiIsInN0eWxlZCIsImJ1dHRvbiIsInByb3BzIiwicHJpbWFyeSIsImNzcyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbnB1dFZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIiwiaGFuZGxlU3VibWl0IiwiYXhpb3MiLCJyZXF1aXJlIiwicG9zdCIsInRoZW4iLCJhbGVydCIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGFBQVQsR0FBMEI7QUFBQTs7QUFBQSxrQkFDYkMsc0RBQVEsQ0FBUyxFQUFULENBREs7QUFBQSxNQUNoQ0MsS0FEZ0M7QUFBQSxNQUN6QkMsUUFEeUI7O0FBQUEsbUJBRWZGLHNEQUFRLENBQVMsRUFBVCxDQUZPO0FBQUEsTUFFaENHLElBRmdDO0FBQUEsTUFFMUJDLE9BRjBCOztBQUl2QyxNQUFNQyxNQUFNLEdBQUdDLHlEQUFNLENBQUNDLE1BQVYsb0JBUVIsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsT0FBTixJQUFpQkMsNkRBQWpCLG9CQUFKO0FBQUEsR0FSRyxDQUFaOztBQWNBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBZ0I7QUFDbkNBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBLFFBQU1DLFVBQVUsR0FBR0YsS0FBSyxDQUFDRyxNQUFOLENBQWFDLEtBQWhDO0FBQ0FKLFNBQUssQ0FBQ0csTUFBTixDQUFhRSxJQUFiLEtBQXNCLE1BQXRCLEdBQStCYixPQUFPLENBQUNVLFVBQUQsQ0FBdEMsR0FBcURaLFFBQVEsQ0FBQ1ksVUFBRCxDQUE3RDtBQUNELEdBSkQ7O0FBTUEsTUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ04sS0FBRCxFQUFnQjtBQUNuQ0EsU0FBSyxDQUFDQyxjQUFOOztBQUNBLFFBQU1NLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFyQjs7QUFFQUQsU0FBSyxDQUFDRSxJQUFOLENBQVcsd0NBQVgsRUFBcUQ7QUFDbkRwQixXQUFLLEVBQUVBLEtBRDRDO0FBRW5ERSxVQUFJLEVBQUVBO0FBRjZDLEtBQXJELEVBSUdtQixJQUpILENBSVEsWUFBWTtBQUNoQkMsV0FBSyxDQUFDLHVCQUFELENBQUw7QUFDRCxLQU5ILFdBT1MsVUFBVUMsS0FBVixFQUFzQjtBQUMzQkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQUQsV0FBSyxDQUFDLDBCQUFELENBQUw7QUFDRCxLQVZIO0FBWUFyQixZQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0FFLFdBQU8sQ0FBQyxFQUFELENBQVA7QUFDRCxHQWxCRDs7QUFvQkEsU0FDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVFO0FBQ0UsYUFBUyxFQUFFLGNBRGI7QUFFRSxZQUFRLEVBQUVPLFlBRlo7QUFHRSxRQUFJLEVBQUUsT0FIUjtBQUlFLFNBQUssRUFBRVYsS0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEYsRUFVRTtBQUNFLGFBQVMsRUFBRSxjQURiO0FBRUUsWUFBUSxFQUFFVSxZQUZaO0FBR0UsUUFBSSxFQUFFLE1BSFI7QUFJRSxTQUFLLEVBQUVSLElBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLEVBaUJFLE1BQUMsTUFBRDtBQUFRLFdBQU8sRUFBRWUsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCRixDQUhGLEVBdUJFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZCRixFQXdCRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFLE1BQUMsMkRBQUQ7QUFDRSxTQUFLLEVBQUVqQixLQUFLLEtBQUssRUFBVixHQUFlLE9BQWYsR0FBeUJBLEtBRGxDO0FBRUUsTUFBRSxFQUFDLEdBRkw7QUFHRSxRQUFJLEVBQUVFLElBQUksS0FBSyxFQUFULEdBQWMsTUFBZCxHQUF1QkEsSUFIL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBeEJGLENBREYsQ0FERjtBQXFDRDs7R0FqRnVCSixhIiwiZmlsZSI6Ii4vcGFnZXMvcG9zdHMvbmV3LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3JlYWN0LWluLWpzeC1zY29wZSAqL1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWVzc2FnZSdcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1lc3NhZ2UgKCkge1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpXG4gIGNvbnN0IFtib2R5LCBzZXRCb2R5XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpXG5cbiAgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgcGFsZXZpb2xldHJlZDtcbiAgICBjb2xvcjogcGFsZXZpb2xldHJlZDtcbiAgICBtYXJnaW46IDAuNWVtIDFlbTtcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMWVtO1xuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5wcmltYXJ5ICYmIGNzc2BcbiAgICAgIGJhY2tncm91bmQ6IHBhbGV2aW9sZXRyZWQ7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgYH1cbiAgYFxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogYW55KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IGlucHV0VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWVcbiAgICBldmVudC50YXJnZXQubmFtZSA9PT0gJ2JvZHknID8gc2V0Qm9keShpbnB1dFZhbHVlKSA6IHNldFRpdGxlKGlucHV0VmFsdWUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJylcblxuICAgIGF4aW9zLnBvc3QoJ2h0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkL3Bvc3RzJywge1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgYm9keTogYm9keVxuICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFsZXJ0KCdTdWNjZXNzZnVsbHkgY3JlYXRlZCEnKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgYWxlcnQoJ0Vycm9yISBDaGVjayBjb25zb2xlLmxvZycpXG4gICAgICB9KVxuXG4gICAgc2V0VGl0bGUoJycpXG4gICAgc2V0Qm9keSgnJylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3LW1lc3NhZ2VcIj5cbiAgICAgICAgPGgxPkNyZWF0ZSBtZXNzYWdlPC9oMT5cblxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8Yj5UaXRsZTwvYj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17J3N0eWxlZC1pbnB1dCd9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgbmFtZT17J3RpdGxlJ31cbiAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGI+Qm9keTwvYj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17J3N0eWxlZC1pbnB1dCd9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgbmFtZT17J2JvZHknfVxuICAgICAgICAgICAgdmFsdWU9e2JvZHl9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fT5DcmVhdGU8L0J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VFeGFtcGxlXCI+XG4gICAgICAgICAgPGgxPkZvciBleGFtcGU6PC9oMT5cbiAgICAgICAgICA8TWVzc2FnZVxuICAgICAgICAgICAgdGl0bGU9e3RpdGxlID09PSAnJyA/ICdUaXRsZScgOiB0aXRsZX1cbiAgICAgICAgICAgIGlkPScwJ1xuICAgICAgICAgICAgYm9keT17Ym9keSA9PT0gJycgPyAnQm9ieScgOiBib2R5fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/new.tsx\n");

/***/ })

})
webpackHotUpdate_N_E("pages/posts/[id]",{

/***/ "./pages/posts/[id].tsx":
/*!******************************!*\
  !*** ./pages/posts/[id].tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/main */ \"./redux/actions/main.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _network_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../network/axios */ \"./network/axios.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/user/Documents/MyDocuments/Projects/testing-app/pages/posts/[id].tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n      background: transparent;\\n      border-radius: 3px;\\n      border: 2px solid grey;\\n      color: grey;\\n      margin: 0.5em 1em;\\n      padding: 0.25em 1em;\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n/* eslint-disable react/react-in-jsx-scope */\n\n\n\n\n\n\n\n\nfunction Posts(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      body = _useState[0],\n      setBody = _useState[1];\n\n  var getMessage = props.getMessage,\n      setMessage = props.setMessage;\n  var id = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])().query.id;\n\n  var axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var Button = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].button(_templateObject());\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    Object(_network_axios__WEBPACK_IMPORTED_MODULE_6__[\"getDefinitePost\"])(id).then(function (response) {\n      setMessage(response);\n    });\n  }, []);\n\n  var handleDeleteClick = function handleDeleteClick() {\n    Object(_network_axios__WEBPACK_IMPORTED_MODULE_6__[\"deleteDefinitePost\"])(id).then(function () {\n      router.push({\n        pathname: '/'\n      });\n    });\n  };\n\n  var handleChange = function handleChange(event) {\n    event.preventDefault();\n    setBody(event.target.value);\n  };\n\n  var handleCommentSubmit = function handleCommentSubmit(event) {\n    event.preventDefault();\n    axios.post('https://simple-blog-api.crew.red/comments', {\n      postId: id,\n      body: body\n    }).then(function () {\n      alert('Successfully created!');\n    })[\"catch\"](function (error) {\n      console.log(error);\n      alert('Error! Check console.log');\n    });\n    setBody('');\n  };\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"Layout\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"postInfo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }\n  }, \"Message \\u2116\".concat(getMessage.id)), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }, getMessage.title), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  }, getMessage.body), __jsx(Button, {\n    onClick: handleDeleteClick,\n    className: \"delete-button\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, \"Delete this message\"), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }, __jsx(\"form\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }\n  }, __jsx(\"b\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }, \"Comment body:\"), __jsx(\"input\", {\n    className: 'styled-comment-input',\n    onChange: handleChange,\n    name: 'body',\n    value: body,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }\n  }), __jsx(Button, {\n    onClick: handleCommentSubmit,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }\n  }, \"Create\"))), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 9\n    }\n  }, getMessage.comments && getMessage.comments.map(function (elem) {\n    return __jsx(\"div\", {\n      key: elem.id,\n      className: 'post-comment',\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 15\n      }\n    }, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 17\n      }\n    }, \"User \\u2116\".concat(elem.id)), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 17\n      }\n    }), __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 17\n      }\n    }, elem.body));\n  }))));\n}\n\n_s(Posts, \"iVUZ+SFvhQjVpip5zq2r0JjII78=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"], next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Posts;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    getMessage: state.main.openedMessage\n  };\n};\n\nvar mapDispathToProps = {\n  setMessage: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__[\"setMessage\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"connect\"])(mapStateToProps, mapDispathToProps)(Posts));\n\nvar _c;\n\n$RefreshReg$(_c, \"Posts\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvLnRzeD9iYmI0Il0sIm5hbWVzIjpbIlBvc3RzIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImJvZHkiLCJzZXRCb2R5IiwiZ2V0TWVzc2FnZSIsInNldE1lc3NhZ2UiLCJpZCIsInVzZVJvdXRlciIsInF1ZXJ5IiwiYXhpb3MiLCJyZXF1aXJlIiwicm91dGVyIiwiQnV0dG9uIiwic3R5bGVkIiwiYnV0dG9uIiwidXNlRWZmZWN0IiwiZ2V0RGVmaW5pdGVQb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiaGFuZGxlRGVsZXRlQ2xpY2siLCJkZWxldGVEZWZpbml0ZVBvc3QiLCJwdXNoIiwicGF0aG5hbWUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDb21tZW50U3VibWl0IiwicG9zdCIsInBvc3RJZCIsImFsZXJ0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJjb21tZW50cyIsIm1hcCIsImVsZW0iLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm1haW4iLCJvcGVuZWRNZXNzYWdlIiwibWFwRGlzcGF0aFRvUHJvcHMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBT0EsU0FBU0EsS0FBVCxDQUFnQkMsS0FBaEIsRUFBc0M7QUFBQTs7QUFBQTs7QUFBQSxrQkFDWkMsc0RBQVEsQ0FBUyxFQUFULENBREk7QUFBQSxNQUM3QkMsSUFENkI7QUFBQSxNQUN2QkMsT0FEdUI7O0FBQUEsTUFFNUJDLFVBRjRCLEdBRURKLEtBRkMsQ0FFNUJJLFVBRjRCO0FBQUEsTUFFaEJDLFVBRmdCLEdBRURMLEtBRkMsQ0FFaEJLLFVBRmdCO0FBR3BDLE1BQU1DLEVBQUUsR0FBR0MsNkRBQVMsR0FBR0MsS0FBWixDQUFrQkYs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Z0MsUUFBWCxDQUFvQkMsR0FBcEIsQ0FBd0IsVUFBQ0MsSUFBRCxFQUFVO0FBQ3hELFdBQ0U7QUFBSyxTQUFHLEVBQUVBLElBQUksQ0FBQ2hDLEVBQWY7QUFBbUIsZUFBUyxFQUFFLGNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUFnQmdDLElBQUksQ0FBQ2hDLEVBQXJCLEVBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU9nQyxJQUFJLENBQUNwQyxJQUFaLENBSEYsQ0FERjtBQU9ELEdBUnVCLENBRDFCLENBbEJGLENBREYsQ0FERjtBQWtDRDs7R0F6RlFILEs7VUFHSVEscUQsRUFFSUEscUQ7OztLQUxSUixLOztBQTJGVCxJQUFNd0MsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNoQ3BDLGNBQVUsRUFBRW9DLEtBQUssQ0FBQ0MsSUFBTixDQUFXQztBQURTLEdBQUw7QUFBQSxDQUE3Qjs7QUFJQSxJQUFNQyxpQkFBaUIsR0FBRztBQUN4QnRDLFlBQVUsRUFBRUEsOERBQVVBO0FBREUsQ0FBMUI7QUFJZXVDLDBIQUFPLENBQUNMLGVBQUQsRUFBa0JJLGlCQUFsQixDQUFQLENBQTRDNUMsS0FBNUMsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL3Bvc3RzL1tpZF0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcmVhY3QtaW4tanN4LXNjb3BlICovXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHNldE1lc3NhZ2UgfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL21haW4nXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IFRNZXNzYWdlRGF0YSB9IGZyb20gJy4uJ1xuaW1wb3J0IHsgZ2V0RGVmaW5pdGVQb3N0LCBkZWxldGVEZWZpbml0ZVBvc3QgfSBmcm9tICcuLi8uLi9uZXR3b3JrL2F4aW9zJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IHR5cGUgVE1lc3NhZ2VQcm9wcyA9IHtcbiAgZ2V0TWVzc2FnZTogVE1lc3NhZ2VEYXRhW10sXG4gIHNldE1lc3NhZ2U6IChkYXRhKSA9PiB2b2lkXG59XG5cbmZ1bmN0aW9uIFBvc3RzIChwcm9wczogVE1lc3NhZ2VQcm9wcykge1xuICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKVxuICBjb25zdCB7IGdldE1lc3NhZ2UsIHNldE1lc3NhZ2UgfSA9IHByb3BzXG4gIGNvbnN0IGlkID0gdXNlUm91dGVyKCkucXVlcnkuaWRcbiAgY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcbiAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgbWFyZ2luOiAwLjVlbSAxZW07XG4gICAgICBwYWRkaW5nOiAwLjI1ZW0gMWVtO1xuICAgIGBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldERlZmluaXRlUG9zdChpZClcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZTogYW55KSB7XG4gICAgICAgIHNldE1lc3NhZ2UocmVzcG9uc2UpXG4gICAgICB9KVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVEZWxldGVDbGljayA9ICgpID0+IHtcbiAgICBkZWxldGVEZWZpbml0ZVBvc3QoaWQpXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgICBwYXRobmFtZTogJy8nXG4gICAgICAgIH0pXG4gICAgICB9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2V0Qm9keShldmVudC50YXJnZXQudmFsdWUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVDb21tZW50U3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgYXhpb3MucG9zdCgnaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvY29tbWVudHMnLCB7XG4gICAgICBwb3N0SWQ6IGlkLFxuICAgICAgYm9keTogYm9keVxuICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFsZXJ0KCdTdWNjZXNzZnVsbHkgY3JlYXRlZCEnKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgYWxlcnQoJ0Vycm9yISBDaGVjayBjb25zb2xlLmxvZycpXG4gICAgICB9KVxuXG4gICAgc2V0Qm9keSgnJylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdEluZm9cIj5cbiAgICAgICAgPGgxPntgTWVzc2FnZSDihJYke2dldE1lc3NhZ2UuaWR9YH08L2gxPlxuICAgICAgICA8aDI+e2dldE1lc3NhZ2UudGl0bGV9PC9oMj5cbiAgICAgICAgPGgyPntnZXRNZXNzYWdlLmJvZHl9PC9oMj5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEZWxldGVDbGlja30gY2xhc3NOYW1lPVwiZGVsZXRlLWJ1dHRvblwiPkRlbGV0ZSB0aGlzIG1lc3NhZ2U8L0J1dHRvbj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxiPkNvbW1lbnQgYm9keTo8L2I+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnc3R5bGVkLWNvbW1lbnQtaW5wdXQnfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBuYW1lPXsnYm9keSd9XG4gICAgICAgICAgICAgIHZhbHVlPXtib2R5fVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDb21tZW50U3VibWl0fT5DcmVhdGU8L0J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtnZXRNZXNzYWdlLmNvbW1lbnRzICYmIGdldE1lc3NhZ2UuY29tbWVudHMubWFwKChlbGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17ZWxlbS5pZH0gY2xhc3NOYW1lPXsncG9zdC1jb21tZW50J30+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2BVc2VyIOKEliR7ZWxlbS5pZH1gfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57ZWxlbS5ib2R5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgZ2V0TWVzc2FnZTogc3RhdGUubWFpbi5vcGVuZWRNZXNzYWdlXG59KVxuXG5jb25zdCBtYXBEaXNwYXRoVG9Qcm9wcyA9IHtcbiAgc2V0TWVzc2FnZTogc2V0TWVzc2FnZVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0aFRvUHJvcHMpKFBvc3RzKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[id].tsx\n");

/***/ })

})
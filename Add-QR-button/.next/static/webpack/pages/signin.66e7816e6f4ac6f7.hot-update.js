"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signin",{

/***/ "./src/app/components/qrCode.tsx":
/*!***************************************!*\
  !*** ./src/app/components/qrCode.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qrcode.react */ \"./node_modules/qrcode.react/lib/esm/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Button/Button.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Code = (props)=>{\n    _s();\n    const { value } = props;\n    console.log(value);\n    const getDid = async ()=>{\n        const authRequest = await fetch(\"http://192.168.1.18:6543/api/v1/requests/auth\");\n        const res = JSON.stringify(await authRequest.json());\n        constdid;\n    };\n    // get the did\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                sx: {\n                    width: [\n                        400\n                    ]\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(qrcode_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    level: \"L\",\n                    size: 400,\n                    value: value\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User01\\\\Documents\\\\Bethel-exe\\\\client\\\\src\\\\app\\\\components\\\\qrCode.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User01\\\\Documents\\\\Bethel-exe\\\\client\\\\src\\\\app\\\\components\\\\qrCode.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                onClick: ()=>dispachEvent(value),\n                variant: \"contained\",\n                size: \"large\",\n                sx: {\n                    width: \"100%\",\n                    marginTop: \"15px\"\n                },\n                children: \" Polygon ID \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User01\\\\Documents\\\\Bethel-exe\\\\client\\\\src\\\\app\\\\components\\\\qrCode.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User01\\\\Documents\\\\Bethel-exe\\\\client\\\\src\\\\app\\\\components\\\\qrCode.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Code, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Code;\nconst dispachEvent = async (value)=>{\n    console.log(\"data to ext:\", value);\n    const msg = btoa(value);\n    const hrefValue = \"iden3comm://?request_uri=http://192.168.1.18:3002/v1/qr-store?id=a25a08f1-7a7a-4cba-abd6-259110fe493c\";\n    console.log(\"link to ext:\", hrefValue);\n    const _authEvent = new CustomEvent(\"authEvent\", {\n        detail: hrefValue\n    });\n    document.dispatchEvent(_authEvent);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Code);\nvar _c;\n$RefreshReg$(_c, \"Code\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2NvbXBvbmVudHMvcXJDb2RlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStEO0FBQzdCO0FBQ3FCO0FBTXZELE1BQU1LLE9BQXFDLENBQUNDOztJQUMxQyxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHRDtJQUNsQkUsUUFBUUMsR0FBRyxDQUFDRjtJQUVaLE1BQU1HLFNBQVM7UUFDYixNQUFNQyxjQUFjLE1BQU1DLE1BQU07UUFDaEMsTUFBTUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDLE1BQU1KLFlBQVlLLElBQUk7UUFDakRDO0lBQ0Y7SUFFQSxjQUFjO0lBQ2RqQixnREFBU0EsQ0FBQyxLQUdWLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDRSxxREFBU0E7OzBCQUNSLDhEQUFDQyxxREFBR0E7Z0JBQUNlLElBQUk7b0JBQUVDLE9BQU87d0JBQUM7cUJBQUk7Z0JBQUM7MEJBQ3RCLDRFQUFDbEIsb0RBQU1BO29CQUFDbUIsT0FBTztvQkFBS0MsTUFBTTtvQkFBS2QsT0FBT0E7Ozs7Ozs7Ozs7OzBCQUV4Qyw4REFBQ0gscURBQU1BO2dCQUFDa0IsU0FBUyxJQUFNQyxhQUFhaEI7Z0JBQ2xDaUIsU0FBUTtnQkFBWUgsTUFBSztnQkFBUUgsSUFBSTtvQkFDbkNDLE9BQU87b0JBQ1BNLFdBQVc7Z0JBQ2I7MEJBQUc7Ozs7Ozs7Ozs7OztBQUdYO0dBNUJNcEI7S0FBQUE7QUE4Qk4sTUFBTWtCLGVBQWUsT0FBT2hCO0lBQzFCQyxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCRjtJQUM1QixNQUFNbUIsTUFBTUMsS0FBS3BCO0lBQ2pCLE1BQU1xQixZQUFhO0lBQ25CcEIsUUFBUUMsR0FBRyxDQUFDLGdCQUFnQm1CO0lBRTVCLE1BQU1DLGFBQWEsSUFBSUMsWUFBWSxhQUFhO1FBQUVDLFFBQVFIO0lBQVU7SUFDcEVJLFNBQVNDLGFBQWEsQ0FBQ0o7QUFDekI7QUFFQSwrREFBZXhCLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3FyQ29kZS50c3g/NDYyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGdW5jdGlvbkNvbXBvbmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFFSQ29kZSBmcm9tICdxcmNvZGUucmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3gsIEJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuXG5pbnRlcmZhY2UgQ29kZVByb3BzIHtcbiAgdmFsdWU6IHN0cmluZztcbn1cblxuY29uc3QgQ29kZTogRnVuY3Rpb25Db21wb25lbnQ8Q29kZVByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHZhbHVlIH0gPSBwcm9wcztcbiAgY29uc29sZS5sb2codmFsdWUpXG5cbiAgY29uc3QgZ2V0RGlkID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGF1dGhSZXF1ZXN0ID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8xOTIuMTY4LjEuMTg6NjU0My9hcGkvdjEvcmVxdWVzdHMvYXV0aCcpXG4gICAgY29uc3QgcmVzID0gSlNPTi5zdHJpbmdpZnkoYXdhaXQgYXV0aFJlcXVlc3QuanNvbigpKVxuICAgIGNvbnN0ZGlkXG4gIH1cblxuICAvLyBnZXQgdGhlIGRpZFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG5cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEJveCBzeD17eyB3aWR0aDogWzQwMF0gfX0+XG4gICAgICAgIDxRUkNvZGUgbGV2ZWw9e1wiTFwifSBzaXplPXs0MDB9IHZhbHVlPXt2YWx1ZX0gLz5cbiAgICAgIDwvQm94PlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNwYWNoRXZlbnQodmFsdWUpfVxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCIgc2l6ZT1cImxhcmdlXCIgc3g9e3tcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgbWFyZ2luVG9wOiBcIjE1cHhcIlxuICAgICAgICB9fT4gUG9seWdvbiBJRCA8L0J1dHRvbj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmNvbnN0IGRpc3BhY2hFdmVudCA9IGFzeW5jICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdkYXRhIHRvIGV4dDonLCB2YWx1ZSk7XG4gIGNvbnN0IG1zZyA9IGJ0b2EodmFsdWUpO1xuICBjb25zdCBocmVmVmFsdWUgPSBgaWRlbjNjb21tOi8vP3JlcXVlc3RfdXJpPWh0dHA6Ly8xOTIuMTY4LjEuMTg6MzAwMi92MS9xci1zdG9yZT9pZD1hMjVhMDhmMS03YTdhLTRjYmEtYWJkNi0yNTkxMTBmZTQ5M2NgO1xuICBjb25zb2xlLmxvZygnbGluayB0byBleHQ6JywgaHJlZlZhbHVlKTtcblxuICBjb25zdCBfYXV0aEV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdhdXRoRXZlbnQnLCB7IGRldGFpbDogaHJlZlZhbHVlIH0pO1xuICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KF9hdXRoRXZlbnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb2RlO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIlFSQ29kZSIsIkNvbnRhaW5lciIsIkJveCIsIkJ1dHRvbiIsIkNvZGUiLCJwcm9wcyIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImdldERpZCIsImF1dGhSZXF1ZXN0IiwiZmV0Y2giLCJyZXMiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsImNvbnN0ZGlkIiwic3giLCJ3aWR0aCIsImxldmVsIiwic2l6ZSIsIm9uQ2xpY2siLCJkaXNwYWNoRXZlbnQiLCJ2YXJpYW50IiwibWFyZ2luVG9wIiwibXNnIiwiYnRvYSIsImhyZWZWYWx1ZSIsIl9hdXRoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImRvY3VtZW50IiwiZGlzcGF0Y2hFdmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/components/qrCode.tsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qrcode.react */ \"./node_modules/qrcode.react/lib/esm/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Button/Button.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Code = (props)=>{\n    _s();\n    const { value } = props;\n    const [did, setDid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // get the did\n    const getDid = async ()=>{\n        const authRequest = await fetch(\"http://192.168.1.18:6543/api/v1/requests/auth\");\n        const res = JSON.stringify(await authRequest.json());\n        console.log(\"this is response \", res);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getDid();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                sx: {\n                    width: [\n                        400\n                    ]\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(qrcode_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    level: \"L\",\n                    size: 400,\n                    value: value\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User01\\\\Documents\\\\Bethel-exe\\\\client\\\\src\\\\app\\\\components\\\\qrCode.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User01\\\\Documents\\\\Bethel-exe\\\\client\\\\src\\\\app\\\\components\\\\qrCode.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                onClick: ()=>dispachEvent(value),\n                variant: \"contained\",\n                size: \"large\",\n                sx: {\n                    width: \"100%\",\n                    marginTop: \"15px\"\n                },\n                children: \" Polygon ID \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User01\\\\Documents\\\\Bethel-exe\\\\client\\\\src\\\\app\\\\components\\\\qrCode.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User01\\\\Documents\\\\Bethel-exe\\\\client\\\\src\\\\app\\\\components\\\\qrCode.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Code, \"us5BMjuraRS2SIt4mMHHeg117hI=\");\n_c = Code;\nconst dispachEvent = async (value)=>{\n    console.log(\"data to ext:\", value);\n    const msg = btoa(value);\n    const hrefValue = \"iden3comm://?request_uri=http://192.168.1.18:3002/v1/qr-store?id=a25a08f1-7a7a-4cba-abd6-259110fe493c\";\n    console.log(\"link to ext:\", hrefValue);\n    const _authEvent = new CustomEvent(\"authEvent\", {\n        detail: hrefValue\n    });\n    document.dispatchEvent(_authEvent);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Code);\nvar _c;\n$RefreshReg$(_c, \"Code\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2NvbXBvbmVudHMvcXJDb2RlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStEO0FBQzdCO0FBQ3FCO0FBTXZELE1BQU1NLE9BQXFDLENBQUNDOztJQUMxQyxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHRDtJQUNsQixNQUFNLENBQUNFLEtBQUtDLE9BQU8sR0FBR1QsK0NBQVFBLENBQUM7SUFHL0IsY0FBYztJQUNkLE1BQU1VLFNBQVM7UUFDYixNQUFNQyxjQUFjLE1BQU1DLE1BQU07UUFDaEMsTUFBTUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDLE1BQU1KLFlBQVlLLElBQUk7UUFDakRDLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJMO0lBQ25DO0lBR0FkLGdEQUFTQSxDQUFDO1FBQ1JXO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNSLHFEQUFTQTs7MEJBQ1IsOERBQUNDLHFEQUFHQTtnQkFBQ2dCLElBQUk7b0JBQUVDLE9BQU87d0JBQUM7cUJBQUk7Z0JBQUM7MEJBQ3RCLDRFQUFDbkIsb0RBQU1BO29CQUFDb0IsT0FBTztvQkFBS0MsTUFBTTtvQkFBS2YsT0FBT0E7Ozs7Ozs7Ozs7OzBCQUV4Qyw4REFBQ0gscURBQU1BO2dCQUFDbUIsU0FBUyxJQUFNQyxhQUFhakI7Z0JBQ2xDa0IsU0FBUTtnQkFBWUgsTUFBSztnQkFBUUgsSUFBSTtvQkFDbkNDLE9BQU87b0JBQ1BNLFdBQVc7Z0JBQ2I7MEJBQUc7Ozs7Ozs7Ozs7OztBQUdYO0dBN0JNckI7S0FBQUE7QUErQk4sTUFBTW1CLGVBQWUsT0FBT2pCO0lBQzFCVSxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCWDtJQUM1QixNQUFNb0IsTUFBTUMsS0FBS3JCO0lBQ2pCLE1BQU1zQixZQUFhO0lBQ25CWixRQUFRQyxHQUFHLENBQUMsZ0JBQWdCVztJQUU1QixNQUFNQyxhQUFhLElBQUlDLFlBQVksYUFBYTtRQUFFQyxRQUFRSDtJQUFVO0lBQ3BFSSxTQUFTQyxhQUFhLENBQUNKO0FBQ3pCO0FBRUEsK0RBQWV6QixJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9xckNvZGUudHN4PzQ2MjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnVuY3Rpb25Db21wb25lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBRUkNvZGUgZnJvbSAncXJjb2RlLnJlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgQm94LCBCdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcblxuaW50ZXJmYWNlIENvZGVQcm9wcyB7XG4gIHZhbHVlOiBzdHJpbmc7XG59XG5cbmNvbnN0IENvZGU6IEZ1bmN0aW9uQ29tcG9uZW50PENvZGVQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB2YWx1ZSB9ID0gcHJvcHM7XG4gIGNvbnN0IFtkaWQsIHNldERpZF0gPSB1c2VTdGF0ZSgnJylcblxuXG4gIC8vIGdldCB0aGUgZGlkXG4gIGNvbnN0IGdldERpZCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBhdXRoUmVxdWVzdCA9IGF3YWl0IGZldGNoKCdodHRwOi8vMTkyLjE2OC4xLjE4OjY1NDMvYXBpL3YxL3JlcXVlc3RzL2F1dGgnKVxuICAgIGNvbnN0IHJlcyA9IEpTT04uc3RyaW5naWZ5KGF3YWl0IGF1dGhSZXF1ZXN0Lmpzb24oKSlcbiAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgcmVzcG9uc2UgXCIsIHJlcylcbiAgfVxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXREaWQoKTtcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEJveCBzeD17eyB3aWR0aDogWzQwMF0gfX0+XG4gICAgICAgIDxRUkNvZGUgbGV2ZWw9e1wiTFwifSBzaXplPXs0MDB9IHZhbHVlPXt2YWx1ZX0gLz5cbiAgICAgIDwvQm94PlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNwYWNoRXZlbnQodmFsdWUpfVxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCIgc2l6ZT1cImxhcmdlXCIgc3g9e3tcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgbWFyZ2luVG9wOiBcIjE1cHhcIlxuICAgICAgICB9fT4gUG9seWdvbiBJRCA8L0J1dHRvbj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmNvbnN0IGRpc3BhY2hFdmVudCA9IGFzeW5jICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdkYXRhIHRvIGV4dDonLCB2YWx1ZSk7XG4gIGNvbnN0IG1zZyA9IGJ0b2EodmFsdWUpO1xuICBjb25zdCBocmVmVmFsdWUgPSBgaWRlbjNjb21tOi8vP3JlcXVlc3RfdXJpPWh0dHA6Ly8xOTIuMTY4LjEuMTg6MzAwMi92MS9xci1zdG9yZT9pZD1hMjVhMDhmMS03YTdhLTRjYmEtYWJkNi0yNTkxMTBmZTQ5M2NgO1xuICBjb25zb2xlLmxvZygnbGluayB0byBleHQ6JywgaHJlZlZhbHVlKTtcblxuICBjb25zdCBfYXV0aEV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdhdXRoRXZlbnQnLCB7IGRldGFpbDogaHJlZlZhbHVlIH0pO1xuICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KF9hdXRoRXZlbnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb2RlO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUVJDb2RlIiwiQ29udGFpbmVyIiwiQm94IiwiQnV0dG9uIiwiQ29kZSIsInByb3BzIiwidmFsdWUiLCJkaWQiLCJzZXREaWQiLCJnZXREaWQiLCJhdXRoUmVxdWVzdCIsImZldGNoIiwicmVzIiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwic3giLCJ3aWR0aCIsImxldmVsIiwic2l6ZSIsIm9uQ2xpY2siLCJkaXNwYWNoRXZlbnQiLCJ2YXJpYW50IiwibWFyZ2luVG9wIiwibXNnIiwiYnRvYSIsImhyZWZWYWx1ZSIsIl9hdXRoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImRvY3VtZW50IiwiZGlzcGF0Y2hFdmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/components/qrCode.tsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qrcode.react */ \"./node_modules/qrcode.react/lib/esm/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Button/Button.js\");\n\n\n\nconst Code = (props)=>{\n    const { value } = props;\n    console.log(value);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                sx: {\n                    width: [\n                        400\n                    ]\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(qrcode_react__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    level: \"L\",\n                    size: 400,\n                    value: value\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User01\\\\Documents\\\\Bethel-exe\\\\client\\\\src\\\\app\\\\components\\\\qrCode.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User01\\\\Documents\\\\Bethel-exe\\\\client\\\\src\\\\app\\\\components\\\\qrCode.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onClick: ()=>dispachEvent(value),\n                variant: \"contained\",\n                size: \"large\",\n                sx: {\n                    width: \"100%\",\n                    marginTop: \"15px\"\n                },\n                children: \" Polygon ID \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User01\\\\Documents\\\\Bethel-exe\\\\client\\\\src\\\\app\\\\components\\\\qrCode.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User01\\\\Documents\\\\Bethel-exe\\\\client\\\\src\\\\app\\\\components\\\\qrCode.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Code;\nconst dispachEvent = async (value)=>{\n    console.log(\"data to ext:\", value);\n    const msg = btoa(\"fb040980-90ef-4e60-8933-e81ec6819a0e\");\n    const hrefValue = \"iden3comm://?i_m=fb040980-90ef-4e60-8933-e81ec6819a0e\";\n    console.log(\"link to ext:\", hrefValue);\n    const _authEvent = new CustomEvent(\"authEvent\", {\n        detail: hrefValue\n    });\n    document.dispatchEvent(_authEvent);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Code);\nvar _c;\n$RefreshReg$(_c, \"Code\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2NvbXBvbmVudHMvcXJDb2RlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ2tDO0FBQ3FCO0FBTXZELE1BQU1JLE9BQXFDLENBQUNDO0lBQzFDLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdEO0lBQ2xCRSxRQUFRQyxHQUFHLENBQUNGO0lBRVoscUJBQ0UsOERBQUNMLHFEQUFTQTs7MEJBQ1IsOERBQUNDLHFEQUFHQTtnQkFBQ08sSUFBSTtvQkFBRUMsT0FBTzt3QkFBQztxQkFBSTtnQkFBQzswQkFDdEIsNEVBQUNWLG9EQUFNQTtvQkFBQ1csT0FBTztvQkFBS0MsTUFBTTtvQkFBS04sT0FBT0E7Ozs7Ozs7Ozs7OzBCQUV4Qyw4REFBQ0gscURBQU1BO2dCQUFDVSxTQUFTLElBQU1DLGFBQWFSO2dCQUNsQ1MsU0FBUTtnQkFBWUgsTUFBSztnQkFBUUgsSUFBSTtvQkFDbkNDLE9BQU87b0JBQ1BNLFdBQVc7Z0JBQ2I7MEJBQUc7Ozs7Ozs7Ozs7OztBQUdYO0tBaEJNWjtBQWtCTixNQUFNVSxlQUFlLE9BQU9SO0lBQzFCQyxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCRjtJQUM1QixNQUFNVyxNQUFNQyxLQUFLO0lBQ2pCLE1BQU1DLFlBQWE7SUFDbkJaLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZ0JXO0lBRTVCLE1BQU1DLGFBQWEsSUFBSUMsWUFBWSxhQUFhO1FBQUVDLFFBQVFIO0lBQVU7SUFDcEVJLFNBQVNDLGFBQWEsQ0FBQ0o7QUFDekI7QUFFQSwrREFBZWhCLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3FyQ29kZS50c3g/NDYyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGdW5jdGlvbkNvbXBvbmVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBRUkNvZGUgZnJvbSAncXJjb2RlLnJlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgQm94LCBCdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcblxuaW50ZXJmYWNlIENvZGVQcm9wcyB7XG4gIHZhbHVlOiBzdHJpbmc7XG59XG5cbmNvbnN0IENvZGU6IEZ1bmN0aW9uQ29tcG9uZW50PENvZGVQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB2YWx1ZSB9ID0gcHJvcHM7XG4gIGNvbnNvbGUubG9nKHZhbHVlKVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxCb3ggc3g9e3sgd2lkdGg6IFs0MDBdIH19PlxuICAgICAgICA8UVJDb2RlIGxldmVsPXtcIkxcIn0gc2l6ZT17NDAwfSB2YWx1ZT17dmFsdWV9IC8+XG4gICAgICA8L0JveD5cbiAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gZGlzcGFjaEV2ZW50KHZhbHVlKX1cbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiIHNpemU9XCJsYXJnZVwiIHN4PXt7XG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgIG1hcmdpblRvcDogXCIxNXB4XCJcbiAgICAgICAgfX0+IFBvbHlnb24gSUQgPC9CdXR0b24+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5jb25zdCBkaXNwYWNoRXZlbnQgPSBhc3luYyAodmFsdWU6IHN0cmluZykgPT4ge1xuICBjb25zb2xlLmxvZygnZGF0YSB0byBleHQ6JywgdmFsdWUpO1xuICBjb25zdCBtc2cgPSBidG9hKFwiZmIwNDA5ODAtOTBlZi00ZTYwLTg5MzMtZTgxZWM2ODE5YTBlXCIpO1xuICBjb25zdCBocmVmVmFsdWUgPSBgaWRlbjNjb21tOi8vP2lfbT1mYjA0MDk4MC05MGVmLTRlNjAtODkzMy1lODFlYzY4MTlhMGVgO1xuICBjb25zb2xlLmxvZygnbGluayB0byBleHQ6JywgaHJlZlZhbHVlKTtcblxuICBjb25zdCBfYXV0aEV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdhdXRoRXZlbnQnLCB7IGRldGFpbDogaHJlZlZhbHVlIH0pO1xuICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KF9hdXRoRXZlbnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb2RlO1xuIl0sIm5hbWVzIjpbIlFSQ29kZSIsIkNvbnRhaW5lciIsIkJveCIsIkJ1dHRvbiIsIkNvZGUiLCJwcm9wcyIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInN4Iiwid2lkdGgiLCJsZXZlbCIsInNpemUiLCJvbkNsaWNrIiwiZGlzcGFjaEV2ZW50IiwidmFyaWFudCIsIm1hcmdpblRvcCIsIm1zZyIsImJ0b2EiLCJocmVmVmFsdWUiLCJfYXV0aEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJkb2N1bWVudCIsImRpc3BhdGNoRXZlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/components/qrCode.tsx\n"));

/***/ })

});
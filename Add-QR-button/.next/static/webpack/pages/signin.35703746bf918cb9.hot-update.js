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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qrcode.react */ \"./node_modules/qrcode.react/lib/esm/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Button/Button.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Code = (props)=>{\n    _s();\n    const { value } = props;\n    const [did, setDid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // get the did\n    const getDid = async ()=>{\n        const authRequest = await fetch(\"http://192.168.1.18:6543/api/v1/requests/auth\");\n        const res = JSON.stringify(await authRequest.json());\n        console.log(\"this is response \", res);\n    };\n    // use the did and get t\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getDid();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                sx: {\n                    width: [\n                        400\n                    ]\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(qrcode_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    level: \"L\",\n                    size: 400,\n                    value: value\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User01\\\\Documents\\\\Bethel-exe\\\\client\\\\src\\\\app\\\\components\\\\qrCode.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User01\\\\Documents\\\\Bethel-exe\\\\client\\\\src\\\\app\\\\components\\\\qrCode.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                onClick: ()=>dispachEvent(value),\n                variant: \"contained\",\n                size: \"large\",\n                sx: {\n                    width: \"100%\",\n                    marginTop: \"15px\"\n                },\n                children: \" Polygon ID \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User01\\\\Documents\\\\Bethel-exe\\\\client\\\\src\\\\app\\\\components\\\\qrCode.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User01\\\\Documents\\\\Bethel-exe\\\\client\\\\src\\\\app\\\\components\\\\qrCode.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Code, \"us5BMjuraRS2SIt4mMHHeg117hI=\");\n_c = Code;\nconst dispachEvent = async (value)=>{\n    console.log(\"data to ext:\", value);\n    const msg = btoa(value);\n    const hrefValue = \"iden3comm://?request_uri=http://192.168.1.18:3002/v1/qr-store?id=a25a08f1-7a7a-4cba-abd6-259110fe493c\";\n    console.log(\"link to ext:\", hrefValue);\n    const _authEvent = new CustomEvent(\"authEvent\", {\n        detail: hrefValue\n    });\n    document.dispatchEvent(_authEvent);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Code);\nvar _c;\n$RefreshReg$(_c, \"Code\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2NvbXBvbmVudHMvcXJDb2RlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStEO0FBQzdCO0FBQ3FCO0FBTXZELE1BQU1NLE9BQXFDLENBQUNDOztJQUMxQyxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHRDtJQUNsQixNQUFNLENBQUNFLEtBQUtDLE9BQU8sR0FBR1QsK0NBQVFBLENBQUM7SUFHL0IsY0FBYztJQUNkLE1BQU1VLFNBQVM7UUFDYixNQUFNQyxjQUFjLE1BQU1DLE1BQU07UUFDaEMsTUFBTUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDLE1BQU1KLFlBQVlLLElBQUk7UUFDakRDLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJMO0lBQ25DO0lBRUEsd0JBQXdCO0lBRXhCZCxnREFBU0EsQ0FBQztRQUNSVztJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDUixxREFBU0E7OzBCQUNSLDhEQUFDQyxxREFBR0E7Z0JBQUNnQixJQUFJO29CQUFFQyxPQUFPO3dCQUFDO3FCQUFJO2dCQUFDOzBCQUN0Qiw0RUFBQ25CLG9EQUFNQTtvQkFBQ29CLE9BQU87b0JBQUtDLE1BQU07b0JBQUtmLE9BQU9BOzs7Ozs7Ozs7OzswQkFFeEMsOERBQUNILHFEQUFNQTtnQkFBQ21CLFNBQVMsSUFBTUMsYUFBYWpCO2dCQUNsQ2tCLFNBQVE7Z0JBQVlILE1BQUs7Z0JBQVFILElBQUk7b0JBQ25DQyxPQUFPO29CQUNQTSxXQUFXO2dCQUNiOzBCQUFHOzs7Ozs7Ozs7Ozs7QUFHWDtHQTlCTXJCO0tBQUFBO0FBZ0NOLE1BQU1tQixlQUFlLE9BQU9qQjtJQUMxQlUsUUFBUUMsR0FBRyxDQUFDLGdCQUFnQlg7SUFDNUIsTUFBTW9CLE1BQU1DLEtBQUtyQjtJQUNqQixNQUFNc0IsWUFBYTtJQUNuQlosUUFBUUMsR0FBRyxDQUFDLGdCQUFnQlc7SUFFNUIsTUFBTUMsYUFBYSxJQUFJQyxZQUFZLGFBQWE7UUFBRUMsUUFBUUg7SUFBVTtJQUNwRUksU0FBU0MsYUFBYSxDQUFDSjtBQUN6QjtBQUVBLCtEQUFlekIsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvcXJDb2RlLnRzeD80NjI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZ1bmN0aW9uQ29tcG9uZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUVJDb2RlIGZyb20gJ3FyY29kZS5yZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIEJveCwgQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5cbmludGVyZmFjZSBDb2RlUHJvcHMge1xuICB2YWx1ZTogc3RyaW5nO1xufVxuXG5jb25zdCBDb2RlOiBGdW5jdGlvbkNvbXBvbmVudDxDb2RlUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdmFsdWUgfSA9IHByb3BzO1xuICBjb25zdCBbZGlkLCBzZXREaWRdID0gdXNlU3RhdGUoJycpXG5cblxuICAvLyBnZXQgdGhlIGRpZFxuICBjb25zdCBnZXREaWQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYXV0aFJlcXVlc3QgPSBhd2FpdCBmZXRjaCgnaHR0cDovLzE5Mi4xNjguMS4xODo2NTQzL2FwaS92MS9yZXF1ZXN0cy9hdXRoJylcbiAgICBjb25zdCByZXMgPSBKU09OLnN0cmluZ2lmeShhd2FpdCBhdXRoUmVxdWVzdC5qc29uKCkpXG4gICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHJlc3BvbnNlIFwiLCByZXMpXG4gIH1cblxuICAvLyB1c2UgdGhlIGRpZCBhbmQgZ2V0IHRcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldERpZCgpO1xuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8Qm94IHN4PXt7IHdpZHRoOiBbNDAwXSB9fT5cbiAgICAgICAgPFFSQ29kZSBsZXZlbD17XCJMXCJ9IHNpemU9ezQwMH0gdmFsdWU9e3ZhbHVlfSAvPlxuICAgICAgPC9Cb3g+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhY2hFdmVudCh2YWx1ZSl9XG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzaXplPVwibGFyZ2VcIiBzeD17e1xuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTVweFwiXG4gICAgICAgIH19PiBQb2x5Z29uIElEIDwvQnV0dG9uPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuY29uc3QgZGlzcGFjaEV2ZW50ID0gYXN5bmMgKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgY29uc29sZS5sb2coJ2RhdGEgdG8gZXh0OicsIHZhbHVlKTtcbiAgY29uc3QgbXNnID0gYnRvYSh2YWx1ZSk7XG4gIGNvbnN0IGhyZWZWYWx1ZSA9IGBpZGVuM2NvbW06Ly8/cmVxdWVzdF91cmk9aHR0cDovLzE5Mi4xNjguMS4xODozMDAyL3YxL3FyLXN0b3JlP2lkPWEyNWEwOGYxLTdhN2EtNGNiYS1hYmQ2LTI1OTExMGZlNDkzY2A7XG4gIGNvbnNvbGUubG9nKCdsaW5rIHRvIGV4dDonLCBocmVmVmFsdWUpO1xuXG4gIGNvbnN0IF9hdXRoRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2F1dGhFdmVudCcsIHsgZGV0YWlsOiBocmVmVmFsdWUgfSk7XG4gIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoX2F1dGhFdmVudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvZGU7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJRUkNvZGUiLCJDb250YWluZXIiLCJCb3giLCJCdXR0b24iLCJDb2RlIiwicHJvcHMiLCJ2YWx1ZSIsImRpZCIsInNldERpZCIsImdldERpZCIsImF1dGhSZXF1ZXN0IiwiZmV0Y2giLCJyZXMiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJzeCIsIndpZHRoIiwibGV2ZWwiLCJzaXplIiwib25DbGljayIsImRpc3BhY2hFdmVudCIsInZhcmlhbnQiLCJtYXJnaW5Ub3AiLCJtc2ciLCJidG9hIiwiaHJlZlZhbHVlIiwiX2F1dGhFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiZG9jdW1lbnQiLCJkaXNwYXRjaEV2ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/components/qrCode.tsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qrcode.react */ \"./node_modules/qrcode.react/lib/esm/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Button/Button.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Code = (props)=>{\n    _s();\n    const { value } = props;\n    const [QRLink, setQRLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // // get the schema id\n    // const getSchemaid = async () => {\n    //   const authRequest = await fetch('http://192.168.1.7:6543/v1/credentials/{id}')\n    //   const res = await authRequest.json()\n    //   setDid(res.from)\n    // }\n    // get the QR link data \n    const getQRLink = async ()=>{\n        const authRequest = await fetch(\"http://localhost:3002/v1/credentials/{schemeaId_goes_here}/qrcode\");\n        const res = await authRequest.json();\n        console.log(\"this is Qr link \", res.qrCodeLink);\n        setQRLink(res.qrCodeLink);\n    };\n    const dispachEvent = async (value)=>{\n        // console.log('data to ext:', value);\n        // const msg = btoa(value);\n        // const hrefValue = `iden3comm://?request_uri=http://192.168.1.18:3002/v1/qr-store?id=a25a08f1-7a7a-4cba-abd6-259110fe493c`;\n        const _authEvent = new CustomEvent(\"authEvent\", {\n            detail: QRLink\n        });\n        document.dispatchEvent(_authEvent);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getQRLink();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                sx: {\n                    width: [\n                        400\n                    ]\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(qrcode_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    level: \"L\",\n                    size: 400,\n                    value: QRLink\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User01\\\\Documents\\\\Bethel-exe\\\\client\\\\src\\\\app\\\\components\\\\qrCode.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User01\\\\Documents\\\\Bethel-exe\\\\client\\\\src\\\\app\\\\components\\\\qrCode.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                onClick: ()=>dispachEvent(),\n                variant: \"contained\",\n                size: \"large\",\n                sx: {\n                    width: \"100%\",\n                    marginTop: \"15px\"\n                },\n                children: \" Polygon ID \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User01\\\\Documents\\\\Bethel-exe\\\\client\\\\src\\\\app\\\\components\\\\qrCode.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User01\\\\Documents\\\\Bethel-exe\\\\client\\\\src\\\\app\\\\components\\\\qrCode.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Code, \"q+WrC6koQExRDgY4KK9hbjnleP8=\");\n_c = Code;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Code);\nvar _c;\n$RefreshReg$(_c, \"Code\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2NvbXBvbmVudHMvcXJDb2RlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStEO0FBQzdCO0FBQ3FCO0FBTXZELE1BQU1NLE9BQXFDLENBQUNDOztJQUMxQyxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHRDtJQUNsQixNQUFNLENBQUNFLFFBQVFDLFVBQVUsR0FBR1QsK0NBQVFBLENBQUM7SUFHckMsdUJBQXVCO0lBQ3ZCLG9DQUFvQztJQUNwQyxtRkFBbUY7SUFDbkYseUNBQXlDO0lBQ3pDLHFCQUFxQjtJQUNyQixJQUFJO0lBRUosd0JBQXdCO0lBQ3hCLE1BQU1VLFlBQVk7UUFDaEIsTUFBTUMsY0FBYyxNQUFNQyxNQUFPO1FBQ2pDLE1BQU1DLE1BQU0sTUFBTUYsWUFBWUcsSUFBSTtRQUNsQ0MsUUFBUUMsR0FBRyxDQUFDLG9CQUFvQkgsSUFBSUksVUFBVTtRQUM5Q1IsVUFBVUksSUFBSUksVUFBVTtJQUMxQjtJQUVBLE1BQU1DLGVBQWUsT0FBT1g7UUFDMUIsc0NBQXNDO1FBQ3RDLDJCQUEyQjtRQUMzQiw2SEFBNkg7UUFDN0gsTUFBTVksYUFBYSxJQUFJQyxZQUFZLGFBQWE7WUFBRUMsUUFBUWI7UUFBTztRQUNqRWMsU0FBU0MsYUFBYSxDQUFDSjtJQUN6QjtJQUlBcEIsZ0RBQVNBLENBQUM7UUFDUlc7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1IscURBQVNBOzswQkFDUiw4REFBQ0MscURBQUdBO2dCQUFDcUIsSUFBSTtvQkFBRUMsT0FBTzt3QkFBQztxQkFBSTtnQkFBQzswQkFDdEIsNEVBQUN4QixvREFBTUE7b0JBQUN5QixPQUFPO29CQUFLQyxNQUFNO29CQUFLcEIsT0FBT0M7Ozs7Ozs7Ozs7OzBCQUV4Qyw4REFBQ0oscURBQU1BO2dCQUFDd0IsU0FBUyxJQUFNVjtnQkFDckJXLFNBQVE7Z0JBQVlGLE1BQUs7Z0JBQVFILElBQUk7b0JBQ25DQyxPQUFPO29CQUNQSyxXQUFXO2dCQUNiOzBCQUFHOzs7Ozs7Ozs7Ozs7QUFHWDtHQTlDTXpCO0tBQUFBO0FBaUROLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9xckNvZGUudHN4PzQ2MjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnVuY3Rpb25Db21wb25lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBRUkNvZGUgZnJvbSAncXJjb2RlLnJlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgQm94LCBCdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcblxuaW50ZXJmYWNlIENvZGVQcm9wcyB7XG4gIHZhbHVlOiBzdHJpbmc7XG59XG5cbmNvbnN0IENvZGU6IEZ1bmN0aW9uQ29tcG9uZW50PENvZGVQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB2YWx1ZSB9ID0gcHJvcHM7XG4gIGNvbnN0IFtRUkxpbmssIHNldFFSTGlua10gPSB1c2VTdGF0ZSgnJylcblxuXG4gIC8vIC8vIGdldCB0aGUgc2NoZW1hIGlkXG4gIC8vIGNvbnN0IGdldFNjaGVtYWlkID0gYXN5bmMgKCkgPT4ge1xuICAvLyAgIGNvbnN0IGF1dGhSZXF1ZXN0ID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8xOTIuMTY4LjEuNzo2NTQzL3YxL2NyZWRlbnRpYWxzL3tpZH0nKVxuICAvLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGF1dGhSZXF1ZXN0Lmpzb24oKVxuICAvLyAgIHNldERpZChyZXMuZnJvbSlcbiAgLy8gfVxuXG4gIC8vIGdldCB0aGUgUVIgbGluayBkYXRhIFxuICBjb25zdCBnZXRRUkxpbmsgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYXV0aFJlcXVlc3QgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAyL3YxL2NyZWRlbnRpYWxzL3tzY2hlbWVhSWRfZ29lc19oZXJlfS9xcmNvZGVgKVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF1dGhSZXF1ZXN0Lmpzb24oKVxuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBRciBsaW5rIFwiLCByZXMucXJDb2RlTGluaylcbiAgICBzZXRRUkxpbmsocmVzLnFyQ29kZUxpbmspXG4gIH1cblxuICBjb25zdCBkaXNwYWNoRXZlbnQgPSBhc3luYyAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdkYXRhIHRvIGV4dDonLCB2YWx1ZSk7XG4gICAgLy8gY29uc3QgbXNnID0gYnRvYSh2YWx1ZSk7XG4gICAgLy8gY29uc3QgaHJlZlZhbHVlID0gYGlkZW4zY29tbTovLz9yZXF1ZXN0X3VyaT1odHRwOi8vMTkyLjE2OC4xLjE4OjMwMDIvdjEvcXItc3RvcmU/aWQ9YTI1YTA4ZjEtN2E3YS00Y2JhLWFiZDYtMjU5MTEwZmU0OTNjYDtcbiAgICBjb25zdCBfYXV0aEV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdhdXRoRXZlbnQnLCB7IGRldGFpbDogUVJMaW5rIH0pO1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoX2F1dGhFdmVudCk7XG4gIH1cblxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRRUkxpbmsoKTtcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEJveCBzeD17eyB3aWR0aDogWzQwMF0gfX0+XG4gICAgICAgIDxRUkNvZGUgbGV2ZWw9e1wiTFwifSBzaXplPXs0MDB9IHZhbHVlPXtRUkxpbmt9IC8+XG4gICAgICA8L0JveD5cbiAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gZGlzcGFjaEV2ZW50KCl9XG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzaXplPVwibGFyZ2VcIiBzeD17e1xuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTVweFwiXG4gICAgICAgIH19PiBQb2x5Z29uIElEIDwvQnV0dG9uPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBDb2RlO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUVJDb2RlIiwiQ29udGFpbmVyIiwiQm94IiwiQnV0dG9uIiwiQ29kZSIsInByb3BzIiwidmFsdWUiLCJRUkxpbmsiLCJzZXRRUkxpbmsiLCJnZXRRUkxpbmsiLCJhdXRoUmVxdWVzdCIsImZldGNoIiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJxckNvZGVMaW5rIiwiZGlzcGFjaEV2ZW50IiwiX2F1dGhFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiZG9jdW1lbnQiLCJkaXNwYXRjaEV2ZW50Iiwic3giLCJ3aWR0aCIsImxldmVsIiwic2l6ZSIsIm9uQ2xpY2siLCJ2YXJpYW50IiwibWFyZ2luVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/components/qrCode.tsx\n"));

/***/ })

});
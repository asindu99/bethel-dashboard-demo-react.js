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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qrcode.react */ \"./node_modules/qrcode.react/lib/esm/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Button/Button.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Code = (props)=>{\n    _s();\n    const { value } = props;\n    const [did, setDid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // get the did\n    const getDid = async ()=>{\n        const authRequest = await fetch(\"http://192.168.1.7:6543/api/v1/requests/auth\");\n        const res = await authRequest.json();\n        setDid(res.from);\n    };\n    // use the did and get the uuid\n    const getUUID = async ()=>{\n        const authRequest = await fetch(\"http://34.71.88.170:3002/v1/credentials?did=\".concat(did));\n        const res = await authRequest.json();\n        console.log(\"this is getuuid\", res);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getDid();\n        getUUID();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                sx: {\n                    width: [\n                        400\n                    ]\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(qrcode_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    level: \"L\",\n                    size: 400,\n                    value: value\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User01\\\\Documents\\\\Bethel-exe\\\\client\\\\src\\\\app\\\\components\\\\qrCode.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User01\\\\Documents\\\\Bethel-exe\\\\client\\\\src\\\\app\\\\components\\\\qrCode.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                onClick: ()=>dispachEvent(value),\n                variant: \"contained\",\n                size: \"large\",\n                sx: {\n                    width: \"100%\",\n                    marginTop: \"15px\"\n                },\n                children: \" Polygon ID \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User01\\\\Documents\\\\Bethel-exe\\\\client\\\\src\\\\app\\\\components\\\\qrCode.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User01\\\\Documents\\\\Bethel-exe\\\\client\\\\src\\\\app\\\\components\\\\qrCode.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Code, \"us5BMjuraRS2SIt4mMHHeg117hI=\");\n_c = Code;\nconst dispachEvent = async (value)=>{\n    console.log(\"data to ext:\", value);\n    const msg = btoa(value);\n    const hrefValue = \"iden3comm://?request_uri=http://192.168.1.18:3002/v1/qr-store?id=a25a08f1-7a7a-4cba-abd6-259110fe493c\";\n    console.log(\"link to ext:\", hrefValue);\n    const _authEvent = new CustomEvent(\"authEvent\", {\n        detail: hrefValue\n    });\n    document.dispatchEvent(_authEvent);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Code);\nvar _c;\n$RefreshReg$(_c, \"Code\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2NvbXBvbmVudHMvcXJDb2RlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStEO0FBQzdCO0FBQ3FCO0FBTXZELE1BQU1NLE9BQXFDLENBQUNDOztJQUMxQyxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHRDtJQUNsQixNQUFNLENBQUNFLEtBQUtDLE9BQU8sR0FBR1QsK0NBQVFBLENBQUM7SUFHL0IsY0FBYztJQUNkLE1BQU1VLFNBQVM7UUFDYixNQUFNQyxjQUFjLE1BQU1DLE1BQU07UUFDaEMsTUFBTUMsTUFBTSxNQUFNRixZQUFZRyxJQUFJO1FBQ2xDTCxPQUFPSSxJQUFJRSxJQUFJO0lBQ2pCO0lBRUEsK0JBQStCO0lBQy9CLE1BQU1DLFVBQVU7UUFDZCxNQUFNTCxjQUFjLE1BQU1DLE1BQU0sK0NBQW1ELE9BQUpKO1FBQy9FLE1BQU1LLE1BQU0sTUFBTUYsWUFBWUcsSUFBSTtRQUNsQ0csUUFBUUMsR0FBRyxDQUFDLG1CQUFtQkw7SUFDakM7SUFHQWQsZ0RBQVNBLENBQUM7UUFDUlc7UUFDQU07SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ2QscURBQVNBOzswQkFDUiw4REFBQ0MscURBQUdBO2dCQUFDZ0IsSUFBSTtvQkFBRUMsT0FBTzt3QkFBQztxQkFBSTtnQkFBQzswQkFDdEIsNEVBQUNuQixvREFBTUE7b0JBQUNvQixPQUFPO29CQUFLQyxNQUFNO29CQUFLZixPQUFPQTs7Ozs7Ozs7Ozs7MEJBRXhDLDhEQUFDSCxxREFBTUE7Z0JBQUNtQixTQUFTLElBQU1DLGFBQWFqQjtnQkFDbENrQixTQUFRO2dCQUFZSCxNQUFLO2dCQUFRSCxJQUFJO29CQUNuQ0MsT0FBTztvQkFDUE0sV0FBVztnQkFDYjswQkFBRzs7Ozs7Ozs7Ozs7O0FBR1g7R0FyQ01yQjtLQUFBQTtBQXVDTixNQUFNbUIsZUFBZSxPQUFPakI7SUFDMUJVLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZ0JYO0lBQzVCLE1BQU1vQixNQUFNQyxLQUFLckI7SUFDakIsTUFBTXNCLFlBQWE7SUFDbkJaLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZ0JXO0lBRTVCLE1BQU1DLGFBQWEsSUFBSUMsWUFBWSxhQUFhO1FBQUVDLFFBQVFIO0lBQVU7SUFDcEVJLFNBQVNDLGFBQWEsQ0FBQ0o7QUFDekI7QUFFQSwrREFBZXpCLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3FyQ29kZS50c3g/NDYyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGdW5jdGlvbkNvbXBvbmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFFSQ29kZSBmcm9tICdxcmNvZGUucmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3gsIEJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuXG5pbnRlcmZhY2UgQ29kZVByb3BzIHtcbiAgdmFsdWU6IHN0cmluZztcbn1cblxuY29uc3QgQ29kZTogRnVuY3Rpb25Db21wb25lbnQ8Q29kZVByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHZhbHVlIH0gPSBwcm9wcztcbiAgY29uc3QgW2RpZCwgc2V0RGlkXSA9IHVzZVN0YXRlKCcnKVxuXG5cbiAgLy8gZ2V0IHRoZSBkaWRcbiAgY29uc3QgZ2V0RGlkID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGF1dGhSZXF1ZXN0ID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8xOTIuMTY4LjEuNzo2NTQzL2FwaS92MS9yZXF1ZXN0cy9hdXRoJylcbiAgICBjb25zdCByZXMgPSBhd2FpdCBhdXRoUmVxdWVzdC5qc29uKClcbiAgICBzZXREaWQocmVzLmZyb20pXG4gIH1cblxuICAvLyB1c2UgdGhlIGRpZCBhbmQgZ2V0IHRoZSB1dWlkXG4gIGNvbnN0IGdldFVVSUQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYXV0aFJlcXVlc3QgPSBhd2FpdCBmZXRjaChgaHR0cDovLzM0LjcxLjg4LjE3MDozMDAyL3YxL2NyZWRlbnRpYWxzP2RpZD0ke2RpZH1gKVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF1dGhSZXF1ZXN0Lmpzb24oKVxuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBnZXR1dWlkXCIsIHJlcylcbiAgfVxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXREaWQoKTtcbiAgICBnZXRVVUlEKCk7XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxCb3ggc3g9e3sgd2lkdGg6IFs0MDBdIH19PlxuICAgICAgICA8UVJDb2RlIGxldmVsPXtcIkxcIn0gc2l6ZT17NDAwfSB2YWx1ZT17dmFsdWV9IC8+XG4gICAgICA8L0JveD5cbiAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gZGlzcGFjaEV2ZW50KHZhbHVlKX1cbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiIHNpemU9XCJsYXJnZVwiIHN4PXt7XG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgIG1hcmdpblRvcDogXCIxNXB4XCJcbiAgICAgICAgfX0+IFBvbHlnb24gSUQgPC9CdXR0b24+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5jb25zdCBkaXNwYWNoRXZlbnQgPSBhc3luYyAodmFsdWU6IHN0cmluZykgPT4ge1xuICBjb25zb2xlLmxvZygnZGF0YSB0byBleHQ6JywgdmFsdWUpO1xuICBjb25zdCBtc2cgPSBidG9hKHZhbHVlKTtcbiAgY29uc3QgaHJlZlZhbHVlID0gYGlkZW4zY29tbTovLz9yZXF1ZXN0X3VyaT1odHRwOi8vMTkyLjE2OC4xLjE4OjMwMDIvdjEvcXItc3RvcmU/aWQ9YTI1YTA4ZjEtN2E3YS00Y2JhLWFiZDYtMjU5MTEwZmU0OTNjYDtcbiAgY29uc29sZS5sb2coJ2xpbmsgdG8gZXh0OicsIGhyZWZWYWx1ZSk7XG5cbiAgY29uc3QgX2F1dGhFdmVudCA9IG5ldyBDdXN0b21FdmVudCgnYXV0aEV2ZW50JywgeyBkZXRhaWw6IGhyZWZWYWx1ZSB9KTtcbiAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChfYXV0aEV2ZW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29kZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlFSQ29kZSIsIkNvbnRhaW5lciIsIkJveCIsIkJ1dHRvbiIsIkNvZGUiLCJwcm9wcyIsInZhbHVlIiwiZGlkIiwic2V0RGlkIiwiZ2V0RGlkIiwiYXV0aFJlcXVlc3QiLCJmZXRjaCIsInJlcyIsImpzb24iLCJmcm9tIiwiZ2V0VVVJRCIsImNvbnNvbGUiLCJsb2ciLCJzeCIsIndpZHRoIiwibGV2ZWwiLCJzaXplIiwib25DbGljayIsImRpc3BhY2hFdmVudCIsInZhcmlhbnQiLCJtYXJnaW5Ub3AiLCJtc2ciLCJidG9hIiwiaHJlZlZhbHVlIiwiX2F1dGhFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiZG9jdW1lbnQiLCJkaXNwYXRjaEV2ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/components/qrCode.tsx\n"));

/***/ })

});
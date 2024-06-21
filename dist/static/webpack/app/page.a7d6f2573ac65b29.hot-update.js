"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n// Function to fetch advice from the API\nasync function fetchAdvice() {\n    try {\n        const res = await fetch(\"https://api.adviceslip.com/advice?timestamp=\".concat(new Date().getTime()), {\n            cache: \"no-store\"\n        });\n        if (!res.ok) {\n            throw new Error(\"Network response was not ok\");\n        }\n        const jsonData = await res.json();\n        const { id, advice } = jsonData.slip;\n        console.log(\"Fetched new advice:\", id, advice);\n        return {\n            id,\n            advice\n        };\n    } catch (error) {\n        console.error(\"Error fetching the advice:\", error);\n        return {\n            id: \"000\",\n            advice: \"Error fetching advice. Please try again later.\"\n        };\n    }\n}\nfunction Home() {\n    _s();\n    const [adviceData, setAdviceData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: \"000\",\n        advice: \"Loading...\"\n    });\n    const [isFetching, setIsFetching] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch initial advice on component mount\n        async function getInitialAdvice() {\n            const data = await fetchAdvice();\n            setAdviceData(data);\n        }\n        getInitialAdvice();\n    }, []);\n    const handleFetchNewAdvice = async ()=>{\n        if (isFetching) return;\n        setIsFetching(true);\n        const newAdvice = await fetchAdvice();\n        setAdviceData(newAdvice);\n        setIsFetching(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"dark-blue flex flex-wrap items-center justify-center h-screen w-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"sm:w-[90vw] lg:w-[700px] h-auto grayish-blue-dark rounded-xl flex flex-wrap flex-col justify-baseline items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-center neon-green m-10 font-bold tracking-[0.35rem] pt-4\",\n                    children: [\n                        \"ADVICE #\",\n                        adviceData.id\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Projects\\\\advice-generator\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"light-cyan text-center text-2xl md:text-4xl px-14 pb-12 font-bold\",\n                    children: adviceData.advice\n                }, void 0, false, {\n                    fileName: \"E:\\\\Projects\\\\advice-generator\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    src: \"/advice-generator/pattern-divider-desktop.svg\",\n                    width: 550,\n                    height: 10,\n                    className: \"sm:hidden md:block\",\n                    alt: \"Pattern Divider Desktop\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Projects\\\\advice-generator\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    src: \"/advice-generator/pattern-divider-mobile.svg\",\n                    width: 250,\n                    height: 10,\n                    className: \"sm:block md:hidden\",\n                    alt: \"Pattern Divider Mobile\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Projects\\\\advice-generator\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleFetchNewAdvice,\n                    className: \"w-[65px] h-[65px] neon-green-bg flex items-center justify-center rounded-full relative top-[35px] hover:scale-110\",\n                    \"aria-label\": \"Fetch new advice\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        src: \"/advice-generator/icon-dice.svg\",\n                        width: 25,\n                        height: 25,\n                        alt: \"Dice Icon\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projects\\\\advice-generator\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Projects\\\\advice-generator\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[65px] h-[65px] neon-green-bg flex items-center justify-center rounded-full relative top-[35px] hover:blur-md absolute\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Projects\\\\advice-generator\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Projects\\\\advice-generator\\\\src\\\\app\\\\page.js\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\advice-generator\\\\src\\\\app\\\\page.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"hU9fNcjDVzTp2lxDcDsH6yh0cSE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRW1EO0FBQ3BCO0FBRS9CLHdDQUF3QztBQUN4QyxlQUFlSTtJQUNiLElBQUk7UUFDRixNQUFNQyxNQUFNLE1BQU1DLE1BQU0sK0NBQW9FLE9BQXJCLElBQUlDLE9BQU9DLE9BQU8sS0FBTTtZQUM3RkMsT0FBTztRQUNUO1FBQ0EsSUFBSSxDQUFDSixJQUFJSyxFQUFFLEVBQUU7WUFDWCxNQUFNLElBQUlDLE1BQU07UUFDbEI7UUFDQSxNQUFNQyxXQUFXLE1BQU1QLElBQUlRLElBQUk7UUFDL0IsTUFBTSxFQUFFQyxFQUFFLEVBQUVDLE1BQU0sRUFBRSxHQUFHSCxTQUFTSSxJQUFJO1FBQ3BDQyxRQUFRQyxHQUFHLENBQUMsdUJBQXVCSixJQUFJQztRQUN2QyxPQUFPO1lBQUVEO1lBQUlDO1FBQU87SUFDdEIsRUFBRSxPQUFPSSxPQUFPO1FBQ2RGLFFBQVFFLEtBQUssQ0FBQyw4QkFBOEJBO1FBQzVDLE9BQU87WUFBRUwsSUFBSTtZQUFPQyxRQUFRO1FBQWlEO0lBQy9FO0FBQ0Y7QUFFZSxTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdyQiwrQ0FBUUEsQ0FBQztRQUFFYSxJQUFJO1FBQU9DLFFBQVE7SUFBYTtJQUMvRSxNQUFNLENBQUNRLFlBQVlDLGNBQWMsR0FBR3ZCLCtDQUFRQSxDQUFDO0lBRTdDQyxnREFBU0EsQ0FBQztRQUNSLDBDQUEwQztRQUMxQyxlQUFldUI7WUFDYixNQUFNQyxPQUFPLE1BQU10QjtZQUNuQmtCLGNBQWNJO1FBQ2hCO1FBQ0FEO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUUsdUJBQXVCO1FBQzNCLElBQUlKLFlBQVk7UUFDaEJDLGNBQWM7UUFDZCxNQUFNSSxZQUFZLE1BQU14QjtRQUN4QmtCLGNBQWNNO1FBQ2RKLGNBQWM7SUFDaEI7SUFFQSxxQkFDRSw4REFBQ0s7UUFBS0MsV0FBVTtrQkFDZCw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNFO29CQUFFRixXQUFVOzt3QkFBZ0U7d0JBQVNULFdBQVdQLEVBQUU7Ozs7Ozs7OEJBQ25HLDhEQUFDa0I7b0JBQUVGLFdBQVU7OEJBQ1ZULFdBQVdOLE1BQU07Ozs7Ozs4QkFFcEIsOERBQUNaLGtEQUFLQTtvQkFBQzhCLEtBQUk7b0JBQWdEQyxPQUFPO29CQUFLQyxRQUFRO29CQUFJTCxXQUFVO29CQUFxQk0sS0FBSTs7Ozs7OzhCQUN0SCw4REFBQ2pDLGtEQUFLQTtvQkFBQzhCLEtBQUk7b0JBQStDQyxPQUFPO29CQUFLQyxRQUFRO29CQUFJTCxXQUFVO29CQUFxQk0sS0FBSTs7Ozs7OzhCQUNySCw4REFBQ0M7b0JBQ0NDLFNBQVNYO29CQUNURyxXQUFVO29CQUNWUyxjQUFXOzhCQUVYLDRFQUFDcEMsa0RBQUtBO3dCQUNKOEIsS0FBSTt3QkFDSkMsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUkMsS0FBSTs7Ozs7Ozs7Ozs7OEJBR1IsOERBQUNMO29CQUFJRCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl2QjtHQTlDd0JWO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuLy8gRnVuY3Rpb24gdG8gZmV0Y2ggYWR2aWNlIGZyb20gdGhlIEFQSVxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hBZHZpY2UoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmFkdmljZXNsaXAuY29tL2FkdmljZT90aW1lc3RhbXA9JHtuZXcgRGF0ZSgpLmdldFRpbWUoKX1gLCB7XG4gICAgICBjYWNoZTogJ25vLXN0b3JlJ1xuICAgIH0pO1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xuICAgIH1cbiAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgY29uc3QgeyBpZCwgYWR2aWNlIH0gPSBqc29uRGF0YS5zbGlwO1xuICAgIGNvbnNvbGUubG9nKCdGZXRjaGVkIG5ldyBhZHZpY2U6JywgaWQsIGFkdmljZSk7XG4gICAgcmV0dXJuIHsgaWQsIGFkdmljZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHRoZSBhZHZpY2U6JywgZXJyb3IpO1xuICAgIHJldHVybiB7IGlkOiAnMDAwJywgYWR2aWNlOiAnRXJyb3IgZmV0Y2hpbmcgYWR2aWNlLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbYWR2aWNlRGF0YSwgc2V0QWR2aWNlRGF0YV0gPSB1c2VTdGF0ZSh7IGlkOiAnMDAwJywgYWR2aWNlOiAnTG9hZGluZy4uLicgfSk7XG4gIGNvbnN0IFtpc0ZldGNoaW5nLCBzZXRJc0ZldGNoaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEZldGNoIGluaXRpYWwgYWR2aWNlIG9uIGNvbXBvbmVudCBtb3VudFxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEluaXRpYWxBZHZpY2UoKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hBZHZpY2UoKTtcbiAgICAgIHNldEFkdmljZURhdGEoZGF0YSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxBZHZpY2UoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUZldGNoTmV3QWR2aWNlID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChpc0ZldGNoaW5nKSByZXR1cm47XG4gICAgc2V0SXNGZXRjaGluZyh0cnVlKTtcbiAgICBjb25zdCBuZXdBZHZpY2UgPSBhd2FpdCBmZXRjaEFkdmljZSgpO1xuICAgIHNldEFkdmljZURhdGEobmV3QWR2aWNlKTtcbiAgICBzZXRJc0ZldGNoaW5nKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImRhcmstYmx1ZSBmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1zY3JlZW4gdy1zY3JlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206dy1bOTB2d10gbGc6dy1bNzAwcHhdIGgtYXV0byBncmF5aXNoLWJsdWUtZGFyayByb3VuZGVkLXhsIGZsZXggZmxleC13cmFwIGZsZXgtY29sIGp1c3RpZnktYmFzZWxpbmUgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG5lb24tZ3JlZW4gbS0xMCBmb250LWJvbGQgdHJhY2tpbmctWzAuMzVyZW1dIHB0LTRcIj5BRFZJQ0UgI3thZHZpY2VEYXRhLmlkfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibGlnaHQtY3lhbiB0ZXh0LWNlbnRlciB0ZXh0LTJ4bCBtZDp0ZXh0LTR4bCBweC0xNCBwYi0xMiBmb250LWJvbGRcIj5cbiAgICAgICAgICB7YWR2aWNlRGF0YS5hZHZpY2V9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPEltYWdlIHNyYz1cIi9hZHZpY2UtZ2VuZXJhdG9yL3BhdHRlcm4tZGl2aWRlci1kZXNrdG9wLnN2Z1wiIHdpZHRoPXs1NTB9IGhlaWdodD17MTB9IGNsYXNzTmFtZT1cInNtOmhpZGRlbiBtZDpibG9ja1wiIGFsdD1cIlBhdHRlcm4gRGl2aWRlciBEZXNrdG9wXCIgLz5cbiAgICAgICAgPEltYWdlIHNyYz1cIi9hZHZpY2UtZ2VuZXJhdG9yL3BhdHRlcm4tZGl2aWRlci1tb2JpbGUuc3ZnXCIgd2lkdGg9ezI1MH0gaGVpZ2h0PXsxMH0gY2xhc3NOYW1lPVwic206YmxvY2sgbWQ6aGlkZGVuXCIgYWx0PVwiUGF0dGVybiBEaXZpZGVyIE1vYmlsZVwiIC8+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVGZXRjaE5ld0FkdmljZX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LVs2NXB4XSBoLVs2NXB4XSBuZW9uLWdyZWVuLWJnIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCByZWxhdGl2ZSB0b3AtWzM1cHhdIGhvdmVyOnNjYWxlLTExMFwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIkZldGNoIG5ldyBhZHZpY2VcIlxuICAgICAgICA+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9XCIvYWR2aWNlLWdlbmVyYXRvci9pY29uLWRpY2Uuc3ZnXCJcbiAgICAgICAgICAgIHdpZHRoPXsyNX1cbiAgICAgICAgICAgIGhlaWdodD17MjV9XG4gICAgICAgICAgICBhbHQ9XCJEaWNlIEljb25cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1bNjVweF0gaC1bNjVweF0gbmVvbi1ncmVlbi1iZyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgcmVsYXRpdmUgdG9wLVszNXB4XSBob3ZlcjpibHVyLW1kIGFic29sdXRlJz48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkltYWdlIiwiZmV0Y2hBZHZpY2UiLCJyZXMiLCJmZXRjaCIsIkRhdGUiLCJnZXRUaW1lIiwiY2FjaGUiLCJvayIsIkVycm9yIiwianNvbkRhdGEiLCJqc29uIiwiaWQiLCJhZHZpY2UiLCJzbGlwIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiSG9tZSIsImFkdmljZURhdGEiLCJzZXRBZHZpY2VEYXRhIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJnZXRJbml0aWFsQWR2aWNlIiwiZGF0YSIsImhhbmRsZUZldGNoTmV3QWR2aWNlIiwibmV3QWR2aWNlIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsInAiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJhcmlhLWxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});
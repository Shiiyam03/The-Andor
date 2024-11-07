/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/products/get-random/route";
exports.ids = ["app/api/products/get-random/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2Fget-random%2Froute&page=%2Fapi%2Fproducts%2Fget-random%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Fget-random%2Froute.js&appDir=D%3A%5CFinalYear%20Project%5CSites%5Cebay-clone%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CFinalYear%20Project%5CSites%5Cebay-clone&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2Fget-random%2Froute&page=%2Fapi%2Fproducts%2Fget-random%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Fget-random%2Froute.js&appDir=D%3A%5CFinalYear%20Project%5CSites%5Cebay-clone%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CFinalYear%20Project%5CSites%5Cebay-clone&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_FinalYear_Project_Sites_ebay_clone_app_api_products_get_random_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/products/get-random/route.js */ \"(rsc)/./app/api/products/get-random/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/products/get-random/route\",\n        pathname: \"/api/products/get-random\",\n        filename: \"route\",\n        bundlePath: \"app/api/products/get-random/route\"\n    },\n    resolvedPagePath: \"D:\\\\FinalYear Project\\\\Sites\\\\ebay-clone\\\\app\\\\api\\\\products\\\\get-random\\\\route.js\",\n    nextConfigOutput,\n    userland: D_FinalYear_Project_Sites_ebay_clone_app_api_products_get_random_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwcm9kdWN0cyUyRmdldC1yYW5kb20lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnByb2R1Y3RzJTJGZ2V0LXJhbmRvbSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnByb2R1Y3RzJTJGZ2V0LXJhbmRvbSUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDRmluYWxZZWFyJTIwUHJvamVjdCU1Q1NpdGVzJTVDZWJheS1jbG9uZSU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q0ZpbmFsWWVhciUyMFByb2plY3QlNUNTaXRlcyU1Q2ViYXktY2xvbmUmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2tDO0FBQy9HO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsid2VicGFjazovL2ViYXktY2xvbmUvP2ZkOTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkQ6XFxcXEZpbmFsWWVhciBQcm9qZWN0XFxcXFNpdGVzXFxcXGViYXktY2xvbmVcXFxcYXBwXFxcXGFwaVxcXFxwcm9kdWN0c1xcXFxnZXQtcmFuZG9tXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9wcm9kdWN0cy9nZXQtcmFuZG9tL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcHJvZHVjdHMvZ2V0LXJhbmRvbVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcHJvZHVjdHMvZ2V0LXJhbmRvbS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXEZpbmFsWWVhciBQcm9qZWN0XFxcXFNpdGVzXFxcXGViYXktY2xvbmVcXFxcYXBwXFxcXGFwaVxcXFxwcm9kdWN0c1xcXFxnZXQtcmFuZG9tXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2Fget-random%2Froute&page=%2Fapi%2Fproducts%2Fget-random%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Fget-random%2Froute.js&appDir=D%3A%5CFinalYear%20Project%5CSites%5Cebay-clone%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CFinalYear%20Project%5CSites%5Cebay-clone&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/products/get-random/route.js":
/*!**********************************************!*\
  !*** ./app/api/products/get-random/route.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _app_libs_Prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/libs/Prisma */ \"(rsc)/./app/libs/Prisma.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\nasync function GET() {\n    try {\n        const productsCount = await _app_libs_Prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].products.count();\n        const skip = Math.floor(Math.random() * productsCount);\n        const products = await _app_libs_Prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].products.findMany({\n            take: 5,\n            skip: skip,\n            orderBy: {\n                id: 'asc'\n            }\n        });\n        await _app_libs_Prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$disconnect();\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(products);\n    } catch (error) {\n        console.log(error);\n        await _app_libs_Prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$disconnect();\n        return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse('Something went wrong', {\n            status: 400\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Byb2R1Y3RzL2dldC1yYW5kb20vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVDO0FBQ0k7QUFFcEMsZUFBZUU7SUFDbEIsSUFBSTtRQUNBLE1BQU1DLGdCQUFnQixNQUFNSCx3REFBTUEsQ0FBQ0ksUUFBUSxDQUFDQyxLQUFLO1FBQ2pELE1BQU1DLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLTjtRQUV4QyxNQUFNQyxXQUFXLE1BQU1KLHdEQUFNQSxDQUFDSSxRQUFRLENBQUNNLFFBQVEsQ0FBQztZQUM1Q0MsTUFBTTtZQUNOTCxNQUFNQTtZQUNOTSxTQUFTO2dCQUFFQyxJQUFHO1lBQU07UUFDeEI7UUFFQSxNQUFNYix3REFBTUEsQ0FBQ2MsV0FBVztRQUN4QixPQUFPYixxREFBWUEsQ0FBQ2MsSUFBSSxDQUFDWDtJQUM3QixFQUFFLE9BQU9ZLE9BQU87UUFDWkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNaLE1BQU1oQix3REFBTUEsQ0FBQ2MsV0FBVztRQUN4QixPQUFPLElBQUliLHFEQUFZQSxDQUFDLHdCQUF3QjtZQUFDa0IsUUFBUTtRQUFJO0lBQ2pFO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lYmF5LWNsb25lLy4vYXBwL2FwaS9wcm9kdWN0cy9nZXQtcmFuZG9tL3JvdXRlLmpzP2ZlMTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9hcHAvbGlicy9QcmlzbWFcIjtcclxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0c0NvdW50ID0gYXdhaXQgcHJpc21hLnByb2R1Y3RzLmNvdW50KCk7XHJcbiAgICAgICAgY29uc3Qgc2tpcCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHByb2R1Y3RzQ291bnQpO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IHByaXNtYS5wcm9kdWN0cy5maW5kTWFueSh7XHJcbiAgICAgICAgICAgIHRha2U6IDUsXHJcbiAgICAgICAgICAgIHNraXA6IHNraXAsXHJcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgaWQ6J2FzYycgfSxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKTtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24ocHJvZHVjdHMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoJ1NvbWV0aGluZyB3ZW50IHdyb25nJywge3N0YXR1czogNDAwIH0pO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbInByaXNtYSIsIk5leHRSZXNwb25zZSIsIkdFVCIsInByb2R1Y3RzQ291bnQiLCJwcm9kdWN0cyIsImNvdW50Iiwic2tpcCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImZpbmRNYW55IiwidGFrZSIsIm9yZGVyQnkiLCJpZCIsIiRkaXNjb25uZWN0IiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/products/get-random/route.js\n");

/***/ }),

/***/ "(rsc)/./app/libs/Prisma.js":
/*!****************************!*\
  !*** ./app/libs/Prisma.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGlicy9QcmlzbWEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBQzdDLE1BQU1DLFNBQVMsSUFBSUQsd0RBQVlBO0FBQy9CLGlFQUFlQyxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWJheS1jbG9uZS8uL2FwcC9saWJzL1ByaXNtYS5qcz8zMmNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcclxuZXhwb3J0IGRlZmF1bHQgcHJpc21hOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/libs/Prisma.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2Fget-random%2Froute&page=%2Fapi%2Fproducts%2Fget-random%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Fget-random%2Froute.js&appDir=D%3A%5CFinalYear%20Project%5CSites%5Cebay-clone%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CFinalYear%20Project%5CSites%5Cebay-clone&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
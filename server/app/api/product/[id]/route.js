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
exports.id = "app/api/product/[id]/route";
exports.ids = ["app/api/product/[id]/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproduct%2F%5Bid%5D%2Froute&page=%2Fapi%2Fproduct%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproduct%2F%5Bid%5D%2Froute.js&appDir=D%3A%5CFinalYear%20Project%5CSites%5Cebay-clone%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CFinalYear%20Project%5CSites%5Cebay-clone&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproduct%2F%5Bid%5D%2Froute&page=%2Fapi%2Fproduct%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproduct%2F%5Bid%5D%2Froute.js&appDir=D%3A%5CFinalYear%20Project%5CSites%5Cebay-clone%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CFinalYear%20Project%5CSites%5Cebay-clone&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_FinalYear_Project_Sites_ebay_clone_app_api_product_id_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/product/[id]/route.js */ \"(rsc)/./app/api/product/[id]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/product/[id]/route\",\n        pathname: \"/api/product/[id]\",\n        filename: \"route\",\n        bundlePath: \"app/api/product/[id]/route\"\n    },\n    resolvedPagePath: \"D:\\\\FinalYear Project\\\\Sites\\\\ebay-clone\\\\app\\\\api\\\\product\\\\[id]\\\\route.js\",\n    nextConfigOutput,\n    userland: D_FinalYear_Project_Sites_ebay_clone_app_api_product_id_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwcm9kdWN0JTJGJTVCaWQlNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnByb2R1Y3QlMkYlNUJpZCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnByb2R1Y3QlMkYlNUJpZCU1RCUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDRmluYWxZZWFyJTIwUHJvamVjdCU1Q1NpdGVzJTVDZWJheS1jbG9uZSU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q0ZpbmFsWWVhciUyMFByb2plY3QlNUNTaXRlcyU1Q2ViYXktY2xvbmUmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQzJCO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsid2VicGFjazovL2ViYXktY2xvbmUvPzE1YzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkQ6XFxcXEZpbmFsWWVhciBQcm9qZWN0XFxcXFNpdGVzXFxcXGViYXktY2xvbmVcXFxcYXBwXFxcXGFwaVxcXFxwcm9kdWN0XFxcXFtpZF1cXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3Byb2R1Y3QvW2lkXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3Byb2R1Y3QvW2lkXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcHJvZHVjdC9baWRdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRDpcXFxcRmluYWxZZWFyIFByb2plY3RcXFxcU2l0ZXNcXFxcZWJheS1jbG9uZVxcXFxhcHBcXFxcYXBpXFxcXHByb2R1Y3RcXFxcW2lkXVxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproduct%2F%5Bid%5D%2Froute&page=%2Fapi%2Fproduct%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproduct%2F%5Bid%5D%2Froute.js&appDir=D%3A%5CFinalYear%20Project%5CSites%5Cebay-clone%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CFinalYear%20Project%5CSites%5Cebay-clone&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/product/[id]/route.js":
/*!***************************************!*\
  !*** ./app/api/product/[id]/route.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _app_libs_Prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/libs/Prisma */ \"(rsc)/./app/libs/Prisma.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\nasync function GET(req, context) {\n    try {\n        const { id } = context.params;\n        const product = await _app_libs_Prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].products.findFirst({\n            where: {\n                id: Number(id)\n            }\n        });\n        await _app_libs_Prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$disconnect();\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(product);\n    } catch (error) {\n        console.log(error);\n        await _app_libs_Prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$disconnect();\n        return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse('Something went wrong', {\n            status: 400\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Byb2R1Y3QvW2lkXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBdUM7QUFDSTtBQUVwQyxlQUFlRSxJQUFJQyxHQUFHLEVBQUVDLE9BQU87SUFDbEMsSUFBSTtRQUNBLE1BQU0sRUFBRUMsRUFBRSxFQUFFLEdBQUdELFFBQVFFLE1BQU07UUFFN0IsTUFBTUMsVUFBVSxNQUFNUCx3REFBTUEsQ0FBQ1EsUUFBUSxDQUFDQyxTQUFTLENBQUM7WUFDNUNDLE9BQU87Z0JBQUVMLElBQUlNLE9BQU9OO1lBQUk7UUFDNUI7UUFFQSxNQUFNTCx3REFBTUEsQ0FBQ1ksV0FBVztRQUN4QixPQUFPWCxxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDTjtJQUM3QixFQUFFLE9BQU9PLE9BQU87UUFDWkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNaLE1BQU1kLHdEQUFNQSxDQUFDWSxXQUFXO1FBQ3hCLE9BQU8sSUFBSVgscURBQVlBLENBQUMsd0JBQXdCO1lBQUNnQixRQUFRO1FBQUk7SUFDakU7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2ViYXktY2xvbmUvLi9hcHAvYXBpL3Byb2R1Y3QvW2lkXS9yb3V0ZS5qcz83OTFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSBcIkAvYXBwL2xpYnMvUHJpc21hXCI7XHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXEsIGNvbnRleHQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gY29udGV4dC5wYXJhbXNcclxuXHJcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IHByaXNtYS5wcm9kdWN0cy5maW5kRmlyc3Qoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogTnVtYmVyKGlkKSB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHByb2R1Y3QpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoJ1NvbWV0aGluZyB3ZW50IHdyb25nJywge3N0YXR1czogNDAwIH0pO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbInByaXNtYSIsIk5leHRSZXNwb25zZSIsIkdFVCIsInJlcSIsImNvbnRleHQiLCJpZCIsInBhcmFtcyIsInByb2R1Y3QiLCJwcm9kdWN0cyIsImZpbmRGaXJzdCIsIndoZXJlIiwiTnVtYmVyIiwiJGRpc2Nvbm5lY3QiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/product/[id]/route.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproduct%2F%5Bid%5D%2Froute&page=%2Fapi%2Fproduct%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproduct%2F%5Bid%5D%2Froute.js&appDir=D%3A%5CFinalYear%20Project%5CSites%5Cebay-clone%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CFinalYear%20Project%5CSites%5Cebay-clone&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
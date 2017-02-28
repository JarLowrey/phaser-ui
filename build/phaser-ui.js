(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["phaserUi"] = factory();
	else
		root["phaserUi"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Module failed because of a eslint error.\n\n\u001b[4m/home/james/Documents/phaser-ui/src/Misc/Graphics.js\u001b[24m\n   \u001b[2m7:5\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 2 spaces but found 4    \u001b[2mindent\u001b[22m\n   \u001b[2m8:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n   \u001b[2m9:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m11:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m12:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m14:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m15:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m16:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m17:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m19:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m22:5\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 2 spaces but found 4    \u001b[2mindent\u001b[22m\n  \u001b[2m23:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m25:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m26:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m28:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m29:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m32:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n\n\u001b[31m\u001b[1m✖ 17 problems (17 errors, 0 warnings)\n\u001b[22m\u001b[39m\n    at lint (/home/james/Documents/phaser-ui/node_modules/eslint-loader/index.js:131:17)\n    at Object.module.exports (/home/james/Documents/phaser-ui/node_modules/eslint-loader/index.js:197:3)");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Module failed because of a eslint error.\n\n\u001b[4m/home/james/Documents/phaser-ui/src/Misc/Toast.js\u001b[24m\n   \u001b[2m8:5\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 2 spaces but found 4    \u001b[2mindent\u001b[22m\n   \u001b[2m9:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m11:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m13:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m15:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m16:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m17:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m19:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m20:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m21:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m22:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m23:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m24:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m26:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m27:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m28:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m31:5\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 2 spaces but found 4    \u001b[2mindent\u001b[22m\n  \u001b[2m32:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m33:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m35:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m36:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m38:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m41:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m44:5\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 2 spaces but found 4    \u001b[2mindent\u001b[22m\n  \u001b[2m45:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m48:5\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 2 spaces but found 4    \u001b[2mindent\u001b[22m\n  \u001b[2m50:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m51:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m52:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m54:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m55:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m56:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m59:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m62:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m63:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m66:5\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 2 spaces but found 4    \u001b[2mindent\u001b[22m\n  \u001b[2m67:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m69:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m70:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n\n\u001b[31m\u001b[1m✖ 39 problems (39 errors, 0 warnings)\n\u001b[22m\u001b[39m\n    at lint (/home/james/Documents/phaser-ui/node_modules/eslint-loader/index.js:131:17)\n    at Object.module.exports (/home/james/Documents/phaser-ui/node_modules/eslint-loader/index.js:197:3)");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Module failed because of a eslint error.\n\n\u001b[4m/home/james/Documents/phaser-ui/src/Progress/Progress.js\u001b[24m\n    \u001b[2m9:5\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 2 spaces but found 4    \u001b[2mindent\u001b[22m\n   \u001b[2m10:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n   \u001b[2m12:5\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 2 spaces but found 4    \u001b[2mindent\u001b[22m\n   \u001b[2m13:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n   \u001b[2m14:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n   \u001b[2m16:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n   \u001b[2m18:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n   \u001b[2m20:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n   \u001b[2m23:5\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 2 spaces but found 4    \u001b[2mindent\u001b[22m\n   \u001b[2m24:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n   \u001b[2m25:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n   \u001b[2m27:5\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 2 spaces but found 4    \u001b[2mindent\u001b[22m\n   \u001b[2m28:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n   \u001b[2m31:5\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 2 spaces but found 4    \u001b[2mindent\u001b[22m\n   \u001b[2m32:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n   \u001b[2m35:5\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 2 spaces but found 4    \u001b[2mindent\u001b[22m\n   \u001b[2m36:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n   \u001b[2m37:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n   \u001b[2m38:17\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 14 spaces but found 16  \u001b[2mindent\u001b[22m\n   \u001b[2m41:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n   \u001b[2m43:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n   \u001b[2m46:5\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 2 spaces but found 4    \u001b[2mindent\u001b[22m\n   \u001b[2m54:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n   \u001b[2m55:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n   \u001b[2m57:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n   \u001b[2m58:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n   \u001b[2m60:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n   \u001b[2m61:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n   \u001b[2m65:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n   \u001b[2m67:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n   \u001b[2m68:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n   \u001b[2m71:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n   \u001b[2m74:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n   \u001b[2m75:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n   \u001b[2m76:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n   \u001b[2m78:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n   \u001b[2m79:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n   \u001b[2m80:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n   \u001b[2m82:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n   \u001b[2m83:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n   \u001b[2m84:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n   \u001b[2m86:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n   \u001b[2m87:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n   \u001b[2m88:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n   \u001b[2m91:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n   \u001b[2m92:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n   \u001b[2m93:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m126:5\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 2 spaces but found 4    \u001b[2mindent\u001b[22m\n  \u001b[2m127:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m129:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m130:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m133:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m134:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m135:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m136:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m139:5\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 2 spaces but found 4    \u001b[2mindent\u001b[22m\n  \u001b[2m140:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m142:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m144:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m145:17\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 14 spaces but found 16  \u001b[2mindent\u001b[22m\n  \u001b[2m146:17\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 14 spaces but found 16  \u001b[2mindent\u001b[22m\n  \u001b[2m147:21\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 18 spaces but found 20  \u001b[2mindent\u001b[22m\n  \u001b[2m148:21\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 18 spaces but found 20  \u001b[2mindent\u001b[22m\n  \u001b[2m152:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m154:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n\n\u001b[31m\u001b[1m✖ 65 problems (65 errors, 0 warnings)\n\u001b[22m\u001b[39m\n    at lint (/home/james/Documents/phaser-ui/node_modules/eslint-loader/index.js:131:17)\n    at Object.module.exports (/home/james/Documents/phaser-ui/node_modules/eslint-loader/index.js:197:3)");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Module failed because of a eslint error.\n\n\u001b[4m/home/james/Documents/phaser-ui/src/Progress/ProgressBar.js\u001b[24m\n   \u001b[2m5:5\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 2 spaces but found 4    \u001b[2mindent\u001b[22m\n  \u001b[2m12:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m13:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m13:23\u001b[22m  \u001b[31merror\u001b[39m  'Graphics' is not defined                       \u001b[2mno-undef\u001b[22m\n  \u001b[2m15:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m18:5\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 2 spaces but found 4    \u001b[2mindent\u001b[22m\n  \u001b[2m20:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m22:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m23:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m26:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m27:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m28:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m31:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m34:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m35:17\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 14 spaces but found 16  \u001b[2mindent\u001b[22m\n  \u001b[2m37:17\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 14 spaces but found 16  \u001b[2mindent\u001b[22m\n\n\u001b[31m\u001b[1m✖ 16 problems (16 errors, 0 warnings)\n\u001b[22m\u001b[39m\n    at lint (/home/james/Documents/phaser-ui/node_modules/eslint-loader/index.js:131:17)\n    at Object.module.exports (/home/james/Documents/phaser-ui/node_modules/eslint-loader/index.js:197:3)");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Module failed because of a eslint error.\n\n\u001b[4m/home/james/Documents/phaser-ui/src/Progress/ProgressPie.js\u001b[24m\n   \u001b[2m7:5\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 2 spaces but found 4    \u001b[2mindent\u001b[22m\n  \u001b[2m13:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m17:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m20:5\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 2 spaces but found 4    \u001b[2mindent\u001b[22m\n  \u001b[2m21:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m22:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m24:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m25:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m28:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m30:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m31:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m32:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m33:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m34:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m35:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m36:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m38:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n\n\u001b[31m\u001b[1m✖ 17 problems (17 errors, 0 warnings)\n\u001b[22m\u001b[39m\n    at lint (/home/james/Documents/phaser-ui/node_modules/eslint-loader/index.js:131:17)\n    at Object.module.exports (/home/james/Documents/phaser-ui/node_modules/eslint-loader/index.js:197:3)");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Module failed because of a eslint error.\n\n\u001b[4m/home/james/Documents/phaser-ui/src/Slider/ToggleSlider.js\u001b[24m\n   \u001b[2m9:5\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 2 spaces but found 4    \u001b[2mindent\u001b[22m\n  \u001b[2m11:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m14:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m15:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m16:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m18:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m19:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m20:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m21:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m22:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m23:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m24:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m27:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m28:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m29:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m30:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m31:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m32:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m33:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m35:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m36:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m37:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m38:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m39:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m40:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m43:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m44:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m45:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m47:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m51:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m52:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m54:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m55:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m57:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m58:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m59:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m60:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m62:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m64:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m65:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m68:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m69:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m72:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m73:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m76:5\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 2 spaces but found 4    \u001b[2mindent\u001b[22m\n  \u001b[2m77:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m78:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m79:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m82:5\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 2 spaces but found 4    \u001b[2mindent\u001b[22m\n  \u001b[2m83:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m84:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m87:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m88:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m89:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m91:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m92:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m94:9\u001b[22m   \u001b[31merror\u001b[39m  Expected indentation of 6 spaces but found 8    \u001b[2mindent\u001b[22m\n  \u001b[2m95:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n  \u001b[2m97:13\u001b[22m  \u001b[31merror\u001b[39m  Expected indentation of 10 spaces but found 12  \u001b[2mindent\u001b[22m\n\n\u001b[31m\u001b[1m✖ 59 problems (59 errors, 0 warnings)\n\u001b[22m\u001b[39m\n    at lint (/home/james/Documents/phaser-ui/node_modules/eslint-loader/index.js:131:17)\n    at Object.module.exports (/home/james/Documents/phaser-ui/node_modules/eslint-loader/index.js:197:3)");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Progress = __webpack_require__(2);

Object.defineProperty(exports, 'Progress', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Progress).default;
  }
});

var _ProgressPie = __webpack_require__(4);

Object.defineProperty(exports, 'ProgressPie', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ProgressPie).default;
  }
});

var _ProgressBar = __webpack_require__(3);

Object.defineProperty(exports, 'ProgressBar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ProgressBar).default;
  }
});

var _ToggleSlider = __webpack_require__(5);

Object.defineProperty(exports, 'ToggleSlider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ToggleSlider).default;
  }
});

var _Toast = __webpack_require__(1);

Object.defineProperty(exports, 'Toast', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Toast).default;
  }
});

var _Graphics = __webpack_require__(0);

Object.defineProperty(exports, 'Graphics', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Graphics).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })
/******/ ]);
});
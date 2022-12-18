/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/search-icon.svg */ "./src/images/search-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0;\n    font-family: 'Roboto', sans-serif;\n}\n\nmain {\n    position: relative;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nmain .background-video {\n    position: absolute;\n    z-index: -1;\n    min-width: 100%;\n    min-height: 100%;\n}\n\n/* Initial screen */\n\nmain#initial-screen {\n    justify-content: flex-start;\n}\n\nmain#initial-screen #title {\n    margin: 20% 0 0;\n    font-size: 4rem;\n    font-weight: 900;\n    color: white;\n}\n\nmain#initial-screen #search-bar {\n    font-size: 1.5rem;\n    width: min(500px, 80%);\n    margin-top: 10px;\n    border-radius: 20px;\n    padding: 10px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-size: 30px;\n    background-position-x: calc(100% - 10px);\n    background-position-y: center;\n}\n\n/* Information screen */\n\nmain#weather-information-screen {\n    color: white;\n}\n\nmain#weather-information-screen #go-back-button {\n    cursor: pointer;\n}\n\nmain#weather-information-screen img#weather-icon {\n    width: 50px;\n}\n\n#loading-animation {\n    background-color: blue;\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    top: 0;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,iCAAiC;AACrC;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,eAAe;IACf,gBAAgB;AACpB;;AAEA,mBAAmB;;AAEnB;IACI,2BAA2B;AAC/B;;AAEA;IACI,eAAe;IACf,eAAe;IACf,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,sBAAsB;IACtB,gBAAgB;IAChB,mBAAmB;IACnB,aAAa;IACb,yDAAiD;IACjD,4BAA4B;IAC5B,qBAAqB;IACrB,wCAAwC;IACxC,6BAA6B;AACjC;;AAEA,uBAAuB;;AAEvB;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,MAAM;AACV","sourcesContent":["body {\n    margin: 0;\n    font-family: 'Roboto', sans-serif;\n}\n\nmain {\n    position: relative;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nmain .background-video {\n    position: absolute;\n    z-index: -1;\n    min-width: 100%;\n    min-height: 100%;\n}\n\n/* Initial screen */\n\nmain#initial-screen {\n    justify-content: flex-start;\n}\n\nmain#initial-screen #title {\n    margin: 20% 0 0;\n    font-size: 4rem;\n    font-weight: 900;\n    color: white;\n}\n\nmain#initial-screen #search-bar {\n    font-size: 1.5rem;\n    width: min(500px, 80%);\n    margin-top: 10px;\n    border-radius: 20px;\n    padding: 10px;\n    background-image: url('./images/search-icon.svg');\n    background-repeat: no-repeat;\n    background-size: 30px;\n    background-position-x: calc(100% - 10px);\n    background-position-y: center;\n}\n\n/* Information screen */\n\nmain#weather-information-screen {\n    color: white;\n}\n\nmain#weather-information-screen #go-back-button {\n    cursor: pointer;\n}\n\nmain#weather-information-screen img#weather-icon {\n    width: 50px;\n}\n\n#loading-animation {\n    background-color: blue;\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    top: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/videos/clear-day.mp4":
/*!**********************************!*\
  !*** ./src/videos/clear-day.mp4 ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "videos/clear-day.mp4");

/***/ }),

/***/ "./src/videos/clear-night.mp4":
/*!************************************!*\
  !*** ./src/videos/clear-night.mp4 ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "videos/clear-night.mp4");

/***/ }),

/***/ "./src/videos/clouds-day.mp4":
/*!***********************************!*\
  !*** ./src/videos/clouds-day.mp4 ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "videos/clouds-day.mp4");

/***/ }),

/***/ "./src/videos/clouds-night.mp4":
/*!*************************************!*\
  !*** ./src/videos/clouds-night.mp4 ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "videos/clouds-night.mp4");

/***/ }),

/***/ "./src/videos/initial-screen-video.mp4":
/*!*********************************************!*\
  !*** ./src/videos/initial-screen-video.mp4 ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "videos/initial-screen-video.mp4");

/***/ }),

/***/ "./src/videos/mist-day.mp4":
/*!*********************************!*\
  !*** ./src/videos/mist-day.mp4 ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "videos/mist-day.mp4");

/***/ }),

/***/ "./src/videos/mist-night.mp4":
/*!***********************************!*\
  !*** ./src/videos/mist-night.mp4 ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "videos/mist-night.mp4");

/***/ }),

/***/ "./src/videos/rain-day.mp4":
/*!*********************************!*\
  !*** ./src/videos/rain-day.mp4 ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "videos/rain-day.mp4");

/***/ }),

/***/ "./src/videos/rain-night.mp4":
/*!***********************************!*\
  !*** ./src/videos/rain-night.mp4 ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "videos/rain-night.mp4");

/***/ }),

/***/ "./src/videos/snow-day.mp4":
/*!*********************************!*\
  !*** ./src/videos/snow-day.mp4 ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "videos/snow-day.mp4");

/***/ }),

/***/ "./src/videos/snow-night.mp4":
/*!***********************************!*\
  !*** ./src/videos/snow-night.mp4 ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "videos/snow-night.mp4");

/***/ }),

/***/ "./src/videos/thunderstorm.mp4":
/*!*************************************!*\
  !*** ./src/videos/thunderstorm.mp4 ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "videos/thunderstorm.mp4");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/javascript-modules/api-calls.js":
/*!*********************************************!*\
  !*** ./src/javascript-modules/api-calls.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeatherData)
/* harmony export */ });
const MY_API_KEY = '27c777166bf3f6fa04f43c0835cb89b1';

async function getCoordinates(location) {
    const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${MY_API_KEY}`,
        { mode: 'cors' }
    );

    return response.json();
}

async function getCurrentWeather({ lat, lon, unit }) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${MY_API_KEY}&units=${unit}`,
        { mode: 'cors' }
    );

    return response.json();
}

async function getWeatherData(location, unit) {
    const coordinatesData = await getCoordinates(location);
    const { lat, lon } = coordinatesData[0];

    const currentWeatherData = await getCurrentWeather({ lat, lon, unit });

    const weatherInfo = {
        city: coordinatesData[0].name,
        state: coordinatesData[0].state,
        countryCode: coordinatesData[0].country,
        weather: currentWeatherData.weather[0].main,
        weatherDescription: currentWeatherData.weather[0].description,
        weatherIconId: currentWeatherData.weather[0].icon,
        temperature: currentWeatherData.main.temp,
        feelsLike: currentWeatherData.main.feels_like,
        humidity: currentWeatherData.main.humidity,
        windSpeed: currentWeatherData.wind.speed
    };

    return weatherInfo;
}


/***/ }),

/***/ "./src/images/search-icon.svg":
/*!************************************!*\
  !*** ./src/images/search-icon.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ebed737705ab36a661ce.svg";

/***/ }),

/***/ "./src/images/weather-icons/01d.svg":
/*!******************************************!*\
  !*** ./src/images/weather-icons/01d.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "322c6cac4355d1d9c52a.svg";

/***/ }),

/***/ "./src/images/weather-icons/01n.svg":
/*!******************************************!*\
  !*** ./src/images/weather-icons/01n.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34a831c6035beb06e4ae.svg";

/***/ }),

/***/ "./src/images/weather-icons/02d.svg":
/*!******************************************!*\
  !*** ./src/images/weather-icons/02d.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2fbfa7511e2d71505193.svg";

/***/ }),

/***/ "./src/images/weather-icons/02n.svg":
/*!******************************************!*\
  !*** ./src/images/weather-icons/02n.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "19149a932565629220b4.svg";

/***/ }),

/***/ "./src/images/weather-icons/03d.svg":
/*!******************************************!*\
  !*** ./src/images/weather-icons/03d.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2af3ac85fa86c858088.svg";

/***/ }),

/***/ "./src/images/weather-icons/03n.svg":
/*!******************************************!*\
  !*** ./src/images/weather-icons/03n.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2af3ac85fa86c858088.svg";

/***/ }),

/***/ "./src/images/weather-icons/04d.svg":
/*!******************************************!*\
  !*** ./src/images/weather-icons/04d.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f9d38b756fee8e081a02.svg";

/***/ }),

/***/ "./src/images/weather-icons/04n.svg":
/*!******************************************!*\
  !*** ./src/images/weather-icons/04n.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc68b76b585403148dbe.svg";

/***/ }),

/***/ "./src/images/weather-icons/09d.svg":
/*!******************************************!*\
  !*** ./src/images/weather-icons/09d.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35f31a8ed33da3618abe.svg";

/***/ }),

/***/ "./src/images/weather-icons/09n.svg":
/*!******************************************!*\
  !*** ./src/images/weather-icons/09n.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35f31a8ed33da3618abe.svg";

/***/ }),

/***/ "./src/images/weather-icons/10d.svg":
/*!******************************************!*\
  !*** ./src/images/weather-icons/10d.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b9d593c8f5ae6cc42ab.svg";

/***/ }),

/***/ "./src/images/weather-icons/10n.svg":
/*!******************************************!*\
  !*** ./src/images/weather-icons/10n.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b9d593c8f5ae6cc42ab.svg";

/***/ }),

/***/ "./src/images/weather-icons/11d.svg":
/*!******************************************!*\
  !*** ./src/images/weather-icons/11d.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0bbf9d10f2424e9fced.svg";

/***/ }),

/***/ "./src/images/weather-icons/11n.svg":
/*!******************************************!*\
  !*** ./src/images/weather-icons/11n.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0bbf9d10f2424e9fced.svg";

/***/ }),

/***/ "./src/images/weather-icons/13d.svg":
/*!******************************************!*\
  !*** ./src/images/weather-icons/13d.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34a1b4b0dd73fb872556.svg";

/***/ }),

/***/ "./src/images/weather-icons/13n.svg":
/*!******************************************!*\
  !*** ./src/images/weather-icons/13n.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34a1b4b0dd73fb872556.svg";

/***/ }),

/***/ "./src/images/weather-icons/50d.svg":
/*!******************************************!*\
  !*** ./src/images/weather-icons/50d.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "916e135b1ed83b09fff1.svg";

/***/ }),

/***/ "./src/images/weather-icons/50n.svg":
/*!******************************************!*\
  !*** ./src/images/weather-icons/50n.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "916e135b1ed83b09fff1.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************************!*\
  !*** ./src/javascript-modules/index.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_calls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-calls */ "./src/javascript-modules/api-calls.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _images_weather_icons_01d_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/weather-icons/01d.svg */ "./src/images/weather-icons/01d.svg");
/* harmony import */ var _images_weather_icons_01n_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/weather-icons/01n.svg */ "./src/images/weather-icons/01n.svg");
/* harmony import */ var _images_weather_icons_02d_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/weather-icons/02d.svg */ "./src/images/weather-icons/02d.svg");
/* harmony import */ var _images_weather_icons_02n_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/weather-icons/02n.svg */ "./src/images/weather-icons/02n.svg");
/* harmony import */ var _images_weather_icons_03d_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/weather-icons/03d.svg */ "./src/images/weather-icons/03d.svg");
/* harmony import */ var _images_weather_icons_03n_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/weather-icons/03n.svg */ "./src/images/weather-icons/03n.svg");
/* harmony import */ var _images_weather_icons_04d_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/weather-icons/04d.svg */ "./src/images/weather-icons/04d.svg");
/* harmony import */ var _images_weather_icons_04n_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/weather-icons/04n.svg */ "./src/images/weather-icons/04n.svg");
/* harmony import */ var _images_weather_icons_09d_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/weather-icons/09d.svg */ "./src/images/weather-icons/09d.svg");
/* harmony import */ var _images_weather_icons_09n_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/weather-icons/09n.svg */ "./src/images/weather-icons/09n.svg");
/* harmony import */ var _images_weather_icons_10d_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/weather-icons/10d.svg */ "./src/images/weather-icons/10d.svg");
/* harmony import */ var _images_weather_icons_10n_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../images/weather-icons/10n.svg */ "./src/images/weather-icons/10n.svg");
/* harmony import */ var _images_weather_icons_11d_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../images/weather-icons/11d.svg */ "./src/images/weather-icons/11d.svg");
/* harmony import */ var _images_weather_icons_11n_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../images/weather-icons/11n.svg */ "./src/images/weather-icons/11n.svg");
/* harmony import */ var _images_weather_icons_13d_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../images/weather-icons/13d.svg */ "./src/images/weather-icons/13d.svg");
/* harmony import */ var _images_weather_icons_13n_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../images/weather-icons/13n.svg */ "./src/images/weather-icons/13n.svg");
/* harmony import */ var _images_weather_icons_50d_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../images/weather-icons/50d.svg */ "./src/images/weather-icons/50d.svg");
/* harmony import */ var _images_weather_icons_50n_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../images/weather-icons/50n.svg */ "./src/images/weather-icons/50n.svg");
/* harmony import */ var _videos_initial_screen_video_mp4__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../videos/initial-screen-video.mp4 */ "./src/videos/initial-screen-video.mp4");
/* harmony import */ var _videos_clear_day_mp4__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../videos/clear-day.mp4 */ "./src/videos/clear-day.mp4");
/* harmony import */ var _videos_clear_night_mp4__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../videos/clear-night.mp4 */ "./src/videos/clear-night.mp4");
/* harmony import */ var _videos_clouds_day_mp4__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../videos/clouds-day.mp4 */ "./src/videos/clouds-day.mp4");
/* harmony import */ var _videos_clouds_night_mp4__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../videos/clouds-night.mp4 */ "./src/videos/clouds-night.mp4");
/* harmony import */ var _videos_mist_day_mp4__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../videos/mist-day.mp4 */ "./src/videos/mist-day.mp4");
/* harmony import */ var _videos_mist_night_mp4__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../videos/mist-night.mp4 */ "./src/videos/mist-night.mp4");
/* harmony import */ var _videos_rain_day_mp4__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../videos/rain-day.mp4 */ "./src/videos/rain-day.mp4");
/* harmony import */ var _videos_rain_night_mp4__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../videos/rain-night.mp4 */ "./src/videos/rain-night.mp4");
/* harmony import */ var _videos_snow_day_mp4__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../videos/snow-day.mp4 */ "./src/videos/snow-day.mp4");
/* harmony import */ var _videos_snow_night_mp4__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../videos/snow-night.mp4 */ "./src/videos/snow-night.mp4");
/* harmony import */ var _videos_thunderstorm_mp4__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../videos/thunderstorm.mp4 */ "./src/videos/thunderstorm.mp4");



// import weather icons



















// import background videos













let lastSearch = null;

const container = document.querySelector('#content');
const main = document.querySelector('main');

const UNITS = {
    metric: { temperature: '°C', speed: 'km/h' },
    imperial: { temperature: '°F', speed: 'm/h' }
};

const DEFAULT_UNIT = 'metric';

let currentUnit = DEFAULT_UNIT;

const WEATHER_MEDIA = {
    '01d': { icon: _images_weather_icons_01d_svg__WEBPACK_IMPORTED_MODULE_2__, video: _videos_clear_day_mp4__WEBPACK_IMPORTED_MODULE_21__["default"] },
    '01n': { icon: _images_weather_icons_01n_svg__WEBPACK_IMPORTED_MODULE_3__, video: _videos_clear_night_mp4__WEBPACK_IMPORTED_MODULE_22__["default"] },
    '02d': { icon: _images_weather_icons_02d_svg__WEBPACK_IMPORTED_MODULE_4__, video: _videos_clouds_day_mp4__WEBPACK_IMPORTED_MODULE_23__["default"] },
    '02n': { icon: _images_weather_icons_02n_svg__WEBPACK_IMPORTED_MODULE_5__, video: _videos_clouds_night_mp4__WEBPACK_IMPORTED_MODULE_24__["default"] },
    '03d': { icon: _images_weather_icons_03d_svg__WEBPACK_IMPORTED_MODULE_6__, video: _videos_clouds_day_mp4__WEBPACK_IMPORTED_MODULE_23__["default"] },
    '03n': { icon: _images_weather_icons_03n_svg__WEBPACK_IMPORTED_MODULE_7__, video: _videos_clouds_night_mp4__WEBPACK_IMPORTED_MODULE_24__["default"] },
    '04d': { icon: _images_weather_icons_04d_svg__WEBPACK_IMPORTED_MODULE_8__, video: _videos_clouds_day_mp4__WEBPACK_IMPORTED_MODULE_23__["default"] },
    '04n': { icon: _images_weather_icons_04n_svg__WEBPACK_IMPORTED_MODULE_9__, video: _videos_clouds_night_mp4__WEBPACK_IMPORTED_MODULE_24__["default"] },
    '09d': { icon: _images_weather_icons_09d_svg__WEBPACK_IMPORTED_MODULE_10__, video: _videos_rain_day_mp4__WEBPACK_IMPORTED_MODULE_27__["default"] },
    '09n': { icon: _images_weather_icons_09n_svg__WEBPACK_IMPORTED_MODULE_11__, video: _videos_rain_night_mp4__WEBPACK_IMPORTED_MODULE_28__["default"] },
    '10d': { icon: _images_weather_icons_10d_svg__WEBPACK_IMPORTED_MODULE_12__, video: _videos_rain_day_mp4__WEBPACK_IMPORTED_MODULE_27__["default"] },
    '10n': { icon: _images_weather_icons_10n_svg__WEBPACK_IMPORTED_MODULE_13__, video: _videos_rain_night_mp4__WEBPACK_IMPORTED_MODULE_28__["default"] },
    '11d': { icon: _images_weather_icons_11d_svg__WEBPACK_IMPORTED_MODULE_14__, video: _videos_thunderstorm_mp4__WEBPACK_IMPORTED_MODULE_31__["default"] },
    '11n': { icon: _images_weather_icons_11n_svg__WEBPACK_IMPORTED_MODULE_15__, video: _videos_thunderstorm_mp4__WEBPACK_IMPORTED_MODULE_31__["default"] },
    '13d': { icon: _images_weather_icons_13d_svg__WEBPACK_IMPORTED_MODULE_16__, video: _videos_snow_day_mp4__WEBPACK_IMPORTED_MODULE_29__["default"] },
    '13n': { icon: _images_weather_icons_13n_svg__WEBPACK_IMPORTED_MODULE_17__, video: _videos_snow_night_mp4__WEBPACK_IMPORTED_MODULE_30__["default"] },
    '50d': { icon: _images_weather_icons_50d_svg__WEBPACK_IMPORTED_MODULE_18__, video: _videos_mist_day_mp4__WEBPACK_IMPORTED_MODULE_25__["default"] },
    '50n': { icon: _images_weather_icons_50n_svg__WEBPACK_IMPORTED_MODULE_19__, video: _videos_mist_night_mp4__WEBPACK_IMPORTED_MODULE_26__["default"] }
};

function displayErrorMessage() {
    const errorMessage = document.querySelector('p.error-message');
    if (errorMessage) {
        errorMessage.innerText = `Something went wrong.
        Make sure you enter a valid location!`;
    }
}

function displayLoadingAnimation() {
    const alreadyOnScreen = document.querySelector('#loading-animation');
    if (alreadyOnScreen) return;

    const loadingAnimation = document.createElement('section');
    loadingAnimation.id = 'loading-animation';
    container.appendChild(loadingAnimation);
}

function removeLoadingAnimation() {
    const loadingAnimation = document.querySelector('#loading-animation');
    if (loadingAnimation) loadingAnimation.remove();
}

function displayInitialScreen() {
    main.innerHTML = '';
    main.id = 'initial-screen';

    displayLoadingAnimation();

    const backgroundVideo = document.createElement('video');
    backgroundVideo.classList.add('background-video');
    backgroundVideo.id = 'initial-screen-video';
    backgroundVideo.src = _videos_initial_screen_video_mp4__WEBPACK_IMPORTED_MODULE_20__["default"];
    backgroundVideo.muted = true;
    backgroundVideo.autoplay = true;
    backgroundVideo.loop = true;
    backgroundVideo.onloadeddata = removeLoadingAnimation;
    main.appendChild(backgroundVideo);

    const title = document.createElement('p');
    title.id = 'title';
    title.innerText = "What's the weather like in...";
    main.appendChild(title);

    const searchBar = document.createElement('input');
    searchBar.id = 'search-bar';
    searchBar.type = 'text';
    searchBar.autocomplete = 'off';
    searchBar.placeholder = 'Enter a city';
    main.appendChild(searchBar);

    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error-message');
    main.appendChild(errorMessage);
}

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function displayWeatherInformationScreen(weatherData, unit) {
    main.innerHTML = '';
    main.id = 'weather-information-screen';

    const backgroundVideo = document.createElement('video');
    backgroundVideo.classList.add('background-video');
    backgroundVideo.src = WEATHER_MEDIA[weatherData.weatherIconId].video;
    backgroundVideo.muted = true;
    backgroundVideo.autoplay = true;
    backgroundVideo.loop = true;
    backgroundVideo.onloadeddata = removeLoadingAnimation;
    main.appendChild(backgroundVideo);

    const goBackArrow = document.createElement('i');
    goBackArrow.classList.add('fa-solid', 'fa-circle-chevron-left');
    goBackArrow.id = 'go-back-button';
    goBackArrow.title = 'GO BACK';
    goBackArrow.addEventListener('click', displayInitialScreen);
    main.appendChild(goBackArrow);

    const unitsToggle = document.createElement('p');
    unitsToggle.id = 'units-toggle';
    unitsToggle.innerText = `Display ${unit === 'metric' ? '°F' : '°C'}`;
    unitsToggle.addEventListener('click', toggleUnits);
    main.appendChild(unitsToggle);

    const cityTitle = document.createElement('p');
    cityTitle.id = 'city-title';
    // If it's the US, then show the state instead of the country
    cityTitle.innerText = `${weatherData.city}, ${
        weatherData.countryCode === 'US'
            ? weatherData.state
            : weatherData.countryCode
    }`;
    main.appendChild(cityTitle);

    const weatherIcon = document.createElement('img');
    weatherIcon.id = 'weather-icon';
    weatherIcon.src = WEATHER_MEDIA[weatherData.weatherIconId].icon;
    weatherIcon.alt = `${weatherData.weather} weather icon`;
    main.appendChild(weatherIcon);

    const weather = document.createElement('p');
    weather.id = 'weather';
    weather.innerText = weatherData.weather;
    main.appendChild(weather);

    const weatherDescription = document.createElement('p');
    weatherDescription.id = 'weather-description';
    weatherDescription.innerText = capitalize(weatherData.weatherDescription);
    main.appendChild(weatherDescription);

    const temperature = document.createElement('p');
    temperature.id = 'temperature';
    temperature.innerText = `${weatherData.temperature} ${UNITS[unit].temperature}`;
    main.appendChild(temperature);

    const feelsLike = document.createElement('p');
    feelsLike.id = 'feels-like';
    const feelsLikeTitle = document.createElement('span');
    feelsLikeTitle.classList.add('title');
    feelsLikeTitle.innerText = 'Feels like: ';
    feelsLike.appendChild(feelsLikeTitle);
    const feelsLikeValue = document.createElement('span');
    feelsLikeValue.classList.add('value');
    feelsLikeValue.innerText = `${weatherData.feelsLike} ${UNITS[unit].temperature}`;
    feelsLike.appendChild(feelsLikeValue);
    main.appendChild(feelsLike);

    const humidity = document.createElement('p');
    humidity.id = 'humidity';
    const humidityTitle = document.createElement('span');
    humidityTitle.classList.add('title');
    humidityTitle.innerText = 'Humidity: ';
    humidity.appendChild(humidityTitle);
    const humidityValue = document.createElement('span');
    humidityValue.classList.add('value');
    humidityValue.innerText = `${weatherData.humidity}%`;
    humidity.appendChild(humidityValue);
    main.appendChild(humidity);

    const windSpeed = document.createElement('p');
    windSpeed.id = 'wind-speed';
    const windSpeedTitle = document.createElement('span');
    windSpeedTitle.classList.add('title');
    windSpeedTitle.innerText = 'Wind speed: ';
    windSpeed.appendChild(windSpeedTitle);
    const windSpeedValue = document.createElement('span');
    windSpeedValue.classList.add('value');
    windSpeedValue.innerText = `${weatherData.windSpeed} ${UNITS[unit].speed}`;
    windSpeed.appendChild(windSpeedValue);
    main.appendChild(windSpeed);
}

async function getAndDisplayWeatherData(location, unit) {
    displayLoadingAnimation();
    try {
        const weatherData = await (0,_api_calls__WEBPACK_IMPORTED_MODULE_0__["default"])(location, unit);
        displayWeatherInformationScreen(weatherData, unit);
    } catch {
        removeLoadingAnimation();
        displayErrorMessage();
    }
}

window.addEventListener('keypress', (event) => {
    const notInInitialScreen = !document.querySelector('#initial-screen');
    if (notInInitialScreen) return;

    const enterKeyWasPressed = event.key === 'Enter';
    const searchBar = document.querySelector('#search-bar');
    const searchBarIsFocused = searchBar === document.activeElement;
    if (enterKeyWasPressed && searchBarIsFocused) {
        getAndDisplayWeatherData(searchBar.value, currentUnit);
        lastSearch = searchBar.value;
    }
});

function toggleUnits() {
    if (currentUnit === 'metric') {
        currentUnit = 'imperial';
    } else {
        currentUnit = 'metric';
    }
    getAndDisplayWeatherData(lastSearch, currentUnit);
}

displayInitialScreen();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdmlkZW9zL2NsZWFyLWRheS5tcDQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdmlkZW9zL2NsZWFyLW5pZ2h0Lm1wNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy92aWRlb3MvY2xvdWRzLWRheS5tcDQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdmlkZW9zL2Nsb3Vkcy1uaWdodC5tcDQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdmlkZW9zL2luaXRpYWwtc2NyZWVuLXZpZGVvLm1wNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy92aWRlb3MvbWlzdC1kYXkubXA0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3ZpZGVvcy9taXN0LW5pZ2h0Lm1wNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy92aWRlb3MvcmFpbi1kYXkubXA0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3ZpZGVvcy9yYWluLW5pZ2h0Lm1wNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy92aWRlb3Mvc25vdy1kYXkubXA0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3ZpZGVvcy9zbm93LW5pZ2h0Lm1wNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy92aWRlb3MvdGh1bmRlcnN0b3JtLm1wNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2phdmFzY3JpcHQtbW9kdWxlcy9hcGktY2FsbHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qYXZhc2NyaXB0LW1vZHVsZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3NlYXJjaC1pY29uLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxubWFpbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxubWFpbiAuYmFja2dyb3VuZC12aWRlbyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuLyogSW5pdGlhbCBzY3JlZW4gKi9cXG5cXG5tYWluI2luaXRpYWwtc2NyZWVuIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG5tYWluI2luaXRpYWwtc2NyZWVuICN0aXRsZSB7XFxuICAgIG1hcmdpbjogMjAlIDAgMDtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbm1haW4jaW5pdGlhbC1zY3JlZW4gI3NlYXJjaC1iYXIge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgd2lkdGg6IG1pbig1MDBweCwgODAlKTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNhbGMoMTAwJSAtIDEwcHgpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcXG59XFxuXFxuLyogSW5mb3JtYXRpb24gc2NyZWVuICovXFxuXFxubWFpbiN3ZWF0aGVyLWluZm9ybWF0aW9uLXNjcmVlbiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxubWFpbiN3ZWF0aGVyLWluZm9ybWF0aW9uLXNjcmVlbiAjZ28tYmFjay1idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm1haW4jd2VhdGhlci1pbmZvcm1hdGlvbi1zY3JlZW4gaW1nI3dlYXRoZXItaWNvbiB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4jbG9hZGluZy1hbmltYXRpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgdG9wOiAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUEsbUJBQW1COztBQUVuQjtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHlEQUFpRDtJQUNqRCw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLHdDQUF3QztJQUN4Qyw2QkFBNkI7QUFDakM7O0FBRUEsdUJBQXVCOztBQUV2QjtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLE1BQU07QUFDVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbm1haW4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbm1haW4gLmJhY2tncm91bmQtdmlkZW8ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIEluaXRpYWwgc2NyZWVuICovXFxuXFxubWFpbiNpbml0aWFsLXNjcmVlbiB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxubWFpbiNpbml0aWFsLXNjcmVlbiAjdGl0bGUge1xcbiAgICBtYXJnaW46IDIwJSAwIDA7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5tYWluI2luaXRpYWwtc2NyZWVuICNzZWFyY2gtYmFyIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHdpZHRoOiBtaW4oNTAwcHgsIDgwJSk7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvc2VhcmNoLWljb24uc3ZnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMzBweDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjYWxjKDEwMCUgLSAxMHB4KTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XFxufVxcblxcbi8qIEluZm9ybWF0aW9uIHNjcmVlbiAqL1xcblxcbm1haW4jd2VhdGhlci1pbmZvcm1hdGlvbi1zY3JlZW4ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbm1haW4jd2VhdGhlci1pbmZvcm1hdGlvbi1zY3JlZW4gI2dvLWJhY2stYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5tYWluI3dlYXRoZXItaW5mb3JtYXRpb24tc2NyZWVuIGltZyN3ZWF0aGVyLWljb24ge1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuXFxuI2xvYWRpbmctYW5pbWF0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHRvcDogMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInZpZGVvcy9jbGVhci1kYXkubXA0XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInZpZGVvcy9jbGVhci1uaWdodC5tcDRcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwidmlkZW9zL2Nsb3Vkcy1kYXkubXA0XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInZpZGVvcy9jbG91ZHMtbmlnaHQubXA0XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInZpZGVvcy9pbml0aWFsLXNjcmVlbi12aWRlby5tcDRcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwidmlkZW9zL21pc3QtZGF5Lm1wNFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ2aWRlb3MvbWlzdC1uaWdodC5tcDRcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwidmlkZW9zL3JhaW4tZGF5Lm1wNFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ2aWRlb3MvcmFpbi1uaWdodC5tcDRcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwidmlkZW9zL3Nub3ctZGF5Lm1wNFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ2aWRlb3Mvc25vdy1uaWdodC5tcDRcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwidmlkZW9zL3RodW5kZXJzdG9ybS5tcDRcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgTVlfQVBJX0tFWSA9ICcyN2M3NzcxNjZiZjNmNmZhMDRmNDNjMDgzNWNiODliMSc7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldENvb3JkaW5hdGVzKGxvY2F0aW9uKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtsb2NhdGlvbn0mbGltaXQ9MSZhcHBpZD0ke01ZX0FQSV9LRVl9YCxcbiAgICAgICAgeyBtb2RlOiAnY29ycycgfVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlcih7IGxhdCwgbG9uLCB1bml0IH0pIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPSR7TVlfQVBJX0tFWX0mdW5pdHM9JHt1bml0fWAsXG4gICAgICAgIHsgbW9kZTogJ2NvcnMnIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobG9jYXRpb24sIHVuaXQpIHtcbiAgICBjb25zdCBjb29yZGluYXRlc0RhdGEgPSBhd2FpdCBnZXRDb29yZGluYXRlcyhsb2NhdGlvbik7XG4gICAgY29uc3QgeyBsYXQsIGxvbiB9ID0gY29vcmRpbmF0ZXNEYXRhWzBdO1xuXG4gICAgY29uc3QgY3VycmVudFdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0Q3VycmVudFdlYXRoZXIoeyBsYXQsIGxvbiwgdW5pdCB9KTtcblxuICAgIGNvbnN0IHdlYXRoZXJJbmZvID0ge1xuICAgICAgICBjaXR5OiBjb29yZGluYXRlc0RhdGFbMF0ubmFtZSxcbiAgICAgICAgc3RhdGU6IGNvb3JkaW5hdGVzRGF0YVswXS5zdGF0ZSxcbiAgICAgICAgY291bnRyeUNvZGU6IGNvb3JkaW5hdGVzRGF0YVswXS5jb3VudHJ5LFxuICAgICAgICB3ZWF0aGVyOiBjdXJyZW50V2VhdGhlckRhdGEud2VhdGhlclswXS5tYWluLFxuICAgICAgICB3ZWF0aGVyRGVzY3JpcHRpb246IGN1cnJlbnRXZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgICB3ZWF0aGVySWNvbklkOiBjdXJyZW50V2VhdGhlckRhdGEud2VhdGhlclswXS5pY29uLFxuICAgICAgICB0ZW1wZXJhdHVyZTogY3VycmVudFdlYXRoZXJEYXRhLm1haW4udGVtcCxcbiAgICAgICAgZmVlbHNMaWtlOiBjdXJyZW50V2VhdGhlckRhdGEubWFpbi5mZWVsc19saWtlLFxuICAgICAgICBodW1pZGl0eTogY3VycmVudFdlYXRoZXJEYXRhLm1haW4uaHVtaWRpdHksXG4gICAgICAgIHdpbmRTcGVlZDogY3VycmVudFdlYXRoZXJEYXRhLndpbmQuc3BlZWRcbiAgICB9O1xuXG4gICAgcmV0dXJuIHdlYXRoZXJJbmZvO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBnZXRXZWF0aGVyRGF0YSBmcm9tICcuL2FwaS1jYWxscyc7XG5pbXBvcnQgJy4uL3N0eWxlLmNzcyc7XG5cbi8vIGltcG9ydCB3ZWF0aGVyIGljb25zXG5pbXBvcnQgY2xlYXJTa3lEYXkgZnJvbSAnLi4vaW1hZ2VzL3dlYXRoZXItaWNvbnMvMDFkLnN2Zyc7XG5pbXBvcnQgY2xlYXJTa3lOaWdodCBmcm9tICcuLi9pbWFnZXMvd2VhdGhlci1pY29ucy8wMW4uc3ZnJztcbmltcG9ydCBmZXdDbG91ZHNEYXkgZnJvbSAnLi4vaW1hZ2VzL3dlYXRoZXItaWNvbnMvMDJkLnN2Zyc7XG5pbXBvcnQgZmV3Q2xvdWRzTmlnaHQgZnJvbSAnLi4vaW1hZ2VzL3dlYXRoZXItaWNvbnMvMDJuLnN2Zyc7XG5pbXBvcnQgc2NhdHRlcmVkQ2xvdWRzRGF5IGZyb20gJy4uL2ltYWdlcy93ZWF0aGVyLWljb25zLzAzZC5zdmcnO1xuaW1wb3J0IHNjYXR0ZXJlZENsb3Vkc05pZ2h0IGZyb20gJy4uL2ltYWdlcy93ZWF0aGVyLWljb25zLzAzbi5zdmcnO1xuaW1wb3J0IGJyb2tlbkNsb3Vkc0RheSBmcm9tICcuLi9pbWFnZXMvd2VhdGhlci1pY29ucy8wNGQuc3ZnJztcbmltcG9ydCBicm9rZW5DbG91ZHNOaWdodCBmcm9tICcuLi9pbWFnZXMvd2VhdGhlci1pY29ucy8wNG4uc3ZnJztcbmltcG9ydCBzaG93ZXJSYWluRGF5IGZyb20gJy4uL2ltYWdlcy93ZWF0aGVyLWljb25zLzA5ZC5zdmcnO1xuaW1wb3J0IHNob3dlclJhaW5OaWdodCBmcm9tICcuLi9pbWFnZXMvd2VhdGhlci1pY29ucy8wOW4uc3ZnJztcbmltcG9ydCByYWluRGF5IGZyb20gJy4uL2ltYWdlcy93ZWF0aGVyLWljb25zLzEwZC5zdmcnO1xuaW1wb3J0IHJhaW5OaWdodCBmcm9tICcuLi9pbWFnZXMvd2VhdGhlci1pY29ucy8xMG4uc3ZnJztcbmltcG9ydCB0aHVuZGVyc3Rvcm1EYXkgZnJvbSAnLi4vaW1hZ2VzL3dlYXRoZXItaWNvbnMvMTFkLnN2Zyc7XG5pbXBvcnQgdGh1bmRlcnN0b3JtTmlnaHQgZnJvbSAnLi4vaW1hZ2VzL3dlYXRoZXItaWNvbnMvMTFuLnN2Zyc7XG5pbXBvcnQgc25vd0RheSBmcm9tICcuLi9pbWFnZXMvd2VhdGhlci1pY29ucy8xM2Quc3ZnJztcbmltcG9ydCBzbm93TmlnaHQgZnJvbSAnLi4vaW1hZ2VzL3dlYXRoZXItaWNvbnMvMTNuLnN2Zyc7XG5pbXBvcnQgbWlzdERheSBmcm9tICcuLi9pbWFnZXMvd2VhdGhlci1pY29ucy81MGQuc3ZnJztcbmltcG9ydCBtaXN0TmlnaHQgZnJvbSAnLi4vaW1hZ2VzL3dlYXRoZXItaWNvbnMvNTBuLnN2Zyc7XG5cbi8vIGltcG9ydCBiYWNrZ3JvdW5kIHZpZGVvc1xuaW1wb3J0IGluaXRpYWxTY3JlZW5WaWRlbyBmcm9tICcuLi92aWRlb3MvaW5pdGlhbC1zY3JlZW4tdmlkZW8ubXA0JztcbmltcG9ydCBjbGVhckRheVZpZGVvIGZyb20gJy4uL3ZpZGVvcy9jbGVhci1kYXkubXA0JztcbmltcG9ydCBjbGVhck5pZ2h0VmlkZW8gZnJvbSAnLi4vdmlkZW9zL2NsZWFyLW5pZ2h0Lm1wNCc7XG5pbXBvcnQgY2xvdWRzRGF5VmlkZW8gZnJvbSAnLi4vdmlkZW9zL2Nsb3Vkcy1kYXkubXA0JztcbmltcG9ydCBjbG91ZHNOaWdodFZpZGVvIGZyb20gJy4uL3ZpZGVvcy9jbG91ZHMtbmlnaHQubXA0JztcbmltcG9ydCBtaXN0RGF5VmlkZW8gZnJvbSAnLi4vdmlkZW9zL21pc3QtZGF5Lm1wNCc7XG5pbXBvcnQgbWlzdE5pZ2h0VmlkZW8gZnJvbSAnLi4vdmlkZW9zL21pc3QtbmlnaHQubXA0JztcbmltcG9ydCByYWluRGF5VmlkZW8gZnJvbSAnLi4vdmlkZW9zL3JhaW4tZGF5Lm1wNCc7XG5pbXBvcnQgcmFpbk5pZ2h0VmlkZW8gZnJvbSAnLi4vdmlkZW9zL3JhaW4tbmlnaHQubXA0JztcbmltcG9ydCBzbm93RGF5VmlkZW8gZnJvbSAnLi4vdmlkZW9zL3Nub3ctZGF5Lm1wNCc7XG5pbXBvcnQgc25vd05pZ2h0VmlkZW8gZnJvbSAnLi4vdmlkZW9zL3Nub3ctbmlnaHQubXA0JztcbmltcG9ydCB0aHVuZGVyc3Rvcm1WaWRlbyBmcm9tICcuLi92aWRlb3MvdGh1bmRlcnN0b3JtLm1wNCc7XG5cbmxldCBsYXN0U2VhcmNoID0gbnVsbDtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbmNvbnN0IFVOSVRTID0ge1xuICAgIG1ldHJpYzogeyB0ZW1wZXJhdHVyZTogJ8KwQycsIHNwZWVkOiAna20vaCcgfSxcbiAgICBpbXBlcmlhbDogeyB0ZW1wZXJhdHVyZTogJ8KwRicsIHNwZWVkOiAnbS9oJyB9XG59O1xuXG5jb25zdCBERUZBVUxUX1VOSVQgPSAnbWV0cmljJztcblxubGV0IGN1cnJlbnRVbml0ID0gREVGQVVMVF9VTklUO1xuXG5jb25zdCBXRUFUSEVSX01FRElBID0ge1xuICAgICcwMWQnOiB7IGljb246IGNsZWFyU2t5RGF5LCB2aWRlbzogY2xlYXJEYXlWaWRlbyB9LFxuICAgICcwMW4nOiB7IGljb246IGNsZWFyU2t5TmlnaHQsIHZpZGVvOiBjbGVhck5pZ2h0VmlkZW8gfSxcbiAgICAnMDJkJzogeyBpY29uOiBmZXdDbG91ZHNEYXksIHZpZGVvOiBjbG91ZHNEYXlWaWRlbyB9LFxuICAgICcwMm4nOiB7IGljb246IGZld0Nsb3Vkc05pZ2h0LCB2aWRlbzogY2xvdWRzTmlnaHRWaWRlbyB9LFxuICAgICcwM2QnOiB7IGljb246IHNjYXR0ZXJlZENsb3Vkc0RheSwgdmlkZW86IGNsb3Vkc0RheVZpZGVvIH0sXG4gICAgJzAzbic6IHsgaWNvbjogc2NhdHRlcmVkQ2xvdWRzTmlnaHQsIHZpZGVvOiBjbG91ZHNOaWdodFZpZGVvIH0sXG4gICAgJzA0ZCc6IHsgaWNvbjogYnJva2VuQ2xvdWRzRGF5LCB2aWRlbzogY2xvdWRzRGF5VmlkZW8gfSxcbiAgICAnMDRuJzogeyBpY29uOiBicm9rZW5DbG91ZHNOaWdodCwgdmlkZW86IGNsb3Vkc05pZ2h0VmlkZW8gfSxcbiAgICAnMDlkJzogeyBpY29uOiBzaG93ZXJSYWluRGF5LCB2aWRlbzogcmFpbkRheVZpZGVvIH0sXG4gICAgJzA5bic6IHsgaWNvbjogc2hvd2VyUmFpbk5pZ2h0LCB2aWRlbzogcmFpbk5pZ2h0VmlkZW8gfSxcbiAgICAnMTBkJzogeyBpY29uOiByYWluRGF5LCB2aWRlbzogcmFpbkRheVZpZGVvIH0sXG4gICAgJzEwbic6IHsgaWNvbjogcmFpbk5pZ2h0LCB2aWRlbzogcmFpbk5pZ2h0VmlkZW8gfSxcbiAgICAnMTFkJzogeyBpY29uOiB0aHVuZGVyc3Rvcm1EYXksIHZpZGVvOiB0aHVuZGVyc3Rvcm1WaWRlbyB9LFxuICAgICcxMW4nOiB7IGljb246IHRodW5kZXJzdG9ybU5pZ2h0LCB2aWRlbzogdGh1bmRlcnN0b3JtVmlkZW8gfSxcbiAgICAnMTNkJzogeyBpY29uOiBzbm93RGF5LCB2aWRlbzogc25vd0RheVZpZGVvIH0sXG4gICAgJzEzbic6IHsgaWNvbjogc25vd05pZ2h0LCB2aWRlbzogc25vd05pZ2h0VmlkZW8gfSxcbiAgICAnNTBkJzogeyBpY29uOiBtaXN0RGF5LCB2aWRlbzogbWlzdERheVZpZGVvIH0sXG4gICAgJzUwbic6IHsgaWNvbjogbWlzdE5pZ2h0LCB2aWRlbzogbWlzdE5pZ2h0VmlkZW8gfVxufTtcblxuZnVuY3Rpb24gZGlzcGxheUVycm9yTWVzc2FnZSgpIHtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwLmVycm9yLW1lc3NhZ2UnKTtcbiAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS5pbm5lclRleHQgPSBgU29tZXRoaW5nIHdlbnQgd3JvbmcuXG4gICAgICAgIE1ha2Ugc3VyZSB5b3UgZW50ZXIgYSB2YWxpZCBsb2NhdGlvbiFgO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheUxvYWRpbmdBbmltYXRpb24oKSB7XG4gICAgY29uc3QgYWxyZWFkeU9uU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvYWRpbmctYW5pbWF0aW9uJyk7XG4gICAgaWYgKGFscmVhZHlPblNjcmVlbikgcmV0dXJuO1xuXG4gICAgY29uc3QgbG9hZGluZ0FuaW1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBsb2FkaW5nQW5pbWF0aW9uLmlkID0gJ2xvYWRpbmctYW5pbWF0aW9uJztcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG9hZGluZ0FuaW1hdGlvbik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUxvYWRpbmdBbmltYXRpb24oKSB7XG4gICAgY29uc3QgbG9hZGluZ0FuaW1hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkaW5nLWFuaW1hdGlvbicpO1xuICAgIGlmIChsb2FkaW5nQW5pbWF0aW9uKSBsb2FkaW5nQW5pbWF0aW9uLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5SW5pdGlhbFNjcmVlbigpIHtcbiAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuICAgIG1haW4uaWQgPSAnaW5pdGlhbC1zY3JlZW4nO1xuXG4gICAgZGlzcGxheUxvYWRpbmdBbmltYXRpb24oKTtcblxuICAgIGNvbnN0IGJhY2tncm91bmRWaWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgYmFja2dyb3VuZFZpZGVvLmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmQtdmlkZW8nKTtcbiAgICBiYWNrZ3JvdW5kVmlkZW8uaWQgPSAnaW5pdGlhbC1zY3JlZW4tdmlkZW8nO1xuICAgIGJhY2tncm91bmRWaWRlby5zcmMgPSBpbml0aWFsU2NyZWVuVmlkZW87XG4gICAgYmFja2dyb3VuZFZpZGVvLm11dGVkID0gdHJ1ZTtcbiAgICBiYWNrZ3JvdW5kVmlkZW8uYXV0b3BsYXkgPSB0cnVlO1xuICAgIGJhY2tncm91bmRWaWRlby5sb29wID0gdHJ1ZTtcbiAgICBiYWNrZ3JvdW5kVmlkZW8ub25sb2FkZWRkYXRhID0gcmVtb3ZlTG9hZGluZ0FuaW1hdGlvbjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGJhY2tncm91bmRWaWRlbyk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aXRsZS5pZCA9ICd0aXRsZSc7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJXaGF0J3MgdGhlIHdlYXRoZXIgbGlrZSBpbi4uLlwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzZWFyY2hCYXIuaWQgPSAnc2VhcmNoLWJhcic7XG4gICAgc2VhcmNoQmFyLnR5cGUgPSAndGV4dCc7XG4gICAgc2VhcmNoQmFyLmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xuICAgIHNlYXJjaEJhci5wbGFjZWhvbGRlciA9ICdFbnRlciBhIGNpdHknO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoc2VhcmNoQmFyKTtcblxuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnZXJyb3ItbWVzc2FnZScpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZXJyb3JNZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVySW5mb3JtYXRpb25TY3JlZW4od2VhdGhlckRhdGEsIHVuaXQpIHtcbiAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuICAgIG1haW4uaWQgPSAnd2VhdGhlci1pbmZvcm1hdGlvbi1zY3JlZW4nO1xuXG4gICAgY29uc3QgYmFja2dyb3VuZFZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICBiYWNrZ3JvdW5kVmlkZW8uY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZC12aWRlbycpO1xuICAgIGJhY2tncm91bmRWaWRlby5zcmMgPSBXRUFUSEVSX01FRElBW3dlYXRoZXJEYXRhLndlYXRoZXJJY29uSWRdLnZpZGVvO1xuICAgIGJhY2tncm91bmRWaWRlby5tdXRlZCA9IHRydWU7XG4gICAgYmFja2dyb3VuZFZpZGVvLmF1dG9wbGF5ID0gdHJ1ZTtcbiAgICBiYWNrZ3JvdW5kVmlkZW8ubG9vcCA9IHRydWU7XG4gICAgYmFja2dyb3VuZFZpZGVvLm9ubG9hZGVkZGF0YSA9IHJlbW92ZUxvYWRpbmdBbmltYXRpb247XG4gICAgbWFpbi5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kVmlkZW8pO1xuXG4gICAgY29uc3QgZ29CYWNrQXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgZ29CYWNrQXJyb3cuY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtY2lyY2xlLWNoZXZyb24tbGVmdCcpO1xuICAgIGdvQmFja0Fycm93LmlkID0gJ2dvLWJhY2stYnV0dG9uJztcbiAgICBnb0JhY2tBcnJvdy50aXRsZSA9ICdHTyBCQUNLJztcbiAgICBnb0JhY2tBcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlJbml0aWFsU2NyZWVuKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGdvQmFja0Fycm93KTtcblxuICAgIGNvbnN0IHVuaXRzVG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHVuaXRzVG9nZ2xlLmlkID0gJ3VuaXRzLXRvZ2dsZSc7XG4gICAgdW5pdHNUb2dnbGUuaW5uZXJUZXh0ID0gYERpc3BsYXkgJHt1bml0ID09PSAnbWV0cmljJyA/ICfCsEYnIDogJ8KwQyd9YDtcbiAgICB1bml0c1RvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVVuaXRzKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHVuaXRzVG9nZ2xlKTtcblxuICAgIGNvbnN0IGNpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjaXR5VGl0bGUuaWQgPSAnY2l0eS10aXRsZSc7XG4gICAgLy8gSWYgaXQncyB0aGUgVVMsIHRoZW4gc2hvdyB0aGUgc3RhdGUgaW5zdGVhZCBvZiB0aGUgY291bnRyeVxuICAgIGNpdHlUaXRsZS5pbm5lclRleHQgPSBgJHt3ZWF0aGVyRGF0YS5jaXR5fSwgJHtcbiAgICAgICAgd2VhdGhlckRhdGEuY291bnRyeUNvZGUgPT09ICdVUydcbiAgICAgICAgICAgID8gd2VhdGhlckRhdGEuc3RhdGVcbiAgICAgICAgICAgIDogd2VhdGhlckRhdGEuY291bnRyeUNvZGVcbiAgICB9YDtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNpdHlUaXRsZSk7XG5cbiAgICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHdlYXRoZXJJY29uLmlkID0gJ3dlYXRoZXItaWNvbic7XG4gICAgd2VhdGhlckljb24uc3JjID0gV0VBVEhFUl9NRURJQVt3ZWF0aGVyRGF0YS53ZWF0aGVySWNvbklkXS5pY29uO1xuICAgIHdlYXRoZXJJY29uLmFsdCA9IGAke3dlYXRoZXJEYXRhLndlYXRoZXJ9IHdlYXRoZXIgaWNvbmA7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh3ZWF0aGVySWNvbik7XG5cbiAgICBjb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHdlYXRoZXIuaWQgPSAnd2VhdGhlcic7XG4gICAgd2VhdGhlci5pbm5lclRleHQgPSB3ZWF0aGVyRGF0YS53ZWF0aGVyO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQod2VhdGhlcik7XG5cbiAgICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgd2VhdGhlckRlc2NyaXB0aW9uLmlkID0gJ3dlYXRoZXItZGVzY3JpcHRpb24nO1xuICAgIHdlYXRoZXJEZXNjcmlwdGlvbi5pbm5lclRleHQgPSBjYXBpdGFsaXplKHdlYXRoZXJEYXRhLndlYXRoZXJEZXNjcmlwdGlvbik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh3ZWF0aGVyRGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGVtcGVyYXR1cmUuaWQgPSAndGVtcGVyYXR1cmUnO1xuICAgIHRlbXBlcmF0dXJlLmlubmVyVGV4dCA9IGAke3dlYXRoZXJEYXRhLnRlbXBlcmF0dXJlfSAke1VOSVRTW3VuaXRdLnRlbXBlcmF0dXJlfWA7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZSk7XG5cbiAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZmVlbHNMaWtlLmlkID0gJ2ZlZWxzLWxpa2UnO1xuICAgIGNvbnN0IGZlZWxzTGlrZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGZlZWxzTGlrZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgZmVlbHNMaWtlVGl0bGUuaW5uZXJUZXh0ID0gJ0ZlZWxzIGxpa2U6ICc7XG4gICAgZmVlbHNMaWtlLmFwcGVuZENoaWxkKGZlZWxzTGlrZVRpdGxlKTtcbiAgICBjb25zdCBmZWVsc0xpa2VWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBmZWVsc0xpa2VWYWx1ZS5jbGFzc0xpc3QuYWRkKCd2YWx1ZScpO1xuICAgIGZlZWxzTGlrZVZhbHVlLmlubmVyVGV4dCA9IGAke3dlYXRoZXJEYXRhLmZlZWxzTGlrZX0gJHtVTklUU1t1bml0XS50ZW1wZXJhdHVyZX1gO1xuICAgIGZlZWxzTGlrZS5hcHBlbmRDaGlsZChmZWVsc0xpa2VWYWx1ZSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChmZWVsc0xpa2UpO1xuXG4gICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaHVtaWRpdHkuaWQgPSAnaHVtaWRpdHknO1xuICAgIGNvbnN0IGh1bWlkaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgaHVtaWRpdHlUaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIGh1bWlkaXR5VGl0bGUuaW5uZXJUZXh0ID0gJ0h1bWlkaXR5OiAnO1xuICAgIGh1bWlkaXR5LmFwcGVuZENoaWxkKGh1bWlkaXR5VGl0bGUpO1xuICAgIGNvbnN0IGh1bWlkaXR5VmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgaHVtaWRpdHlWYWx1ZS5jbGFzc0xpc3QuYWRkKCd2YWx1ZScpO1xuICAgIGh1bWlkaXR5VmFsdWUuaW5uZXJUZXh0ID0gYCR7d2VhdGhlckRhdGEuaHVtaWRpdHl9JWA7XG4gICAgaHVtaWRpdHkuYXBwZW5kQ2hpbGQoaHVtaWRpdHlWYWx1ZSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChodW1pZGl0eSk7XG5cbiAgICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgd2luZFNwZWVkLmlkID0gJ3dpbmQtc3BlZWQnO1xuICAgIGNvbnN0IHdpbmRTcGVlZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHdpbmRTcGVlZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgd2luZFNwZWVkVGl0bGUuaW5uZXJUZXh0ID0gJ1dpbmQgc3BlZWQ6ICc7XG4gICAgd2luZFNwZWVkLmFwcGVuZENoaWxkKHdpbmRTcGVlZFRpdGxlKTtcbiAgICBjb25zdCB3aW5kU3BlZWRWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB3aW5kU3BlZWRWYWx1ZS5jbGFzc0xpc3QuYWRkKCd2YWx1ZScpO1xuICAgIHdpbmRTcGVlZFZhbHVlLmlubmVyVGV4dCA9IGAke3dlYXRoZXJEYXRhLndpbmRTcGVlZH0gJHtVTklUU1t1bml0XS5zcGVlZH1gO1xuICAgIHdpbmRTcGVlZC5hcHBlbmRDaGlsZCh3aW5kU3BlZWRWYWx1ZSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh3aW5kU3BlZWQpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRBbmREaXNwbGF5V2VhdGhlckRhdGEobG9jYXRpb24sIHVuaXQpIHtcbiAgICBkaXNwbGF5TG9hZGluZ0FuaW1hdGlvbigpO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEobG9jYXRpb24sIHVuaXQpO1xuICAgICAgICBkaXNwbGF5V2VhdGhlckluZm9ybWF0aW9uU2NyZWVuKHdlYXRoZXJEYXRhLCB1bml0KTtcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgcmVtb3ZlTG9hZGluZ0FuaW1hdGlvbigpO1xuICAgICAgICBkaXNwbGF5RXJyb3JNZXNzYWdlKCk7XG4gICAgfVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBub3RJbkluaXRpYWxTY3JlZW4gPSAhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luaXRpYWwtc2NyZWVuJyk7XG4gICAgaWYgKG5vdEluSW5pdGlhbFNjcmVlbikgcmV0dXJuO1xuXG4gICAgY29uc3QgZW50ZXJLZXlXYXNQcmVzc2VkID0gZXZlbnQua2V5ID09PSAnRW50ZXInO1xuICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtYmFyJyk7XG4gICAgY29uc3Qgc2VhcmNoQmFySXNGb2N1c2VkID0gc2VhcmNoQmFyID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIGlmIChlbnRlcktleVdhc1ByZXNzZWQgJiYgc2VhcmNoQmFySXNGb2N1c2VkKSB7XG4gICAgICAgIGdldEFuZERpc3BsYXlXZWF0aGVyRGF0YShzZWFyY2hCYXIudmFsdWUsIGN1cnJlbnRVbml0KTtcbiAgICAgICAgbGFzdFNlYXJjaCA9IHNlYXJjaEJhci52YWx1ZTtcbiAgICB9XG59KTtcblxuZnVuY3Rpb24gdG9nZ2xlVW5pdHMoKSB7XG4gICAgaWYgKGN1cnJlbnRVbml0ID09PSAnbWV0cmljJykge1xuICAgICAgICBjdXJyZW50VW5pdCA9ICdpbXBlcmlhbCc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudFVuaXQgPSAnbWV0cmljJztcbiAgICB9XG4gICAgZ2V0QW5kRGlzcGxheVdlYXRoZXJEYXRhKGxhc3RTZWFyY2gsIGN1cnJlbnRVbml0KTtcbn1cblxuZGlzcGxheUluaXRpYWxTY3JlZW4oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
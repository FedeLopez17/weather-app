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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/sprites/rotating-earth.png */ "./src/images/sprites/rotating-earth.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/sprites/rotating-sandal.png */ "./src/images/sprites/rotating-sandal.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/sprites/rotating-boot.png */ "./src/images/sprites/rotating-boot.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/search-icon.svg */ "./src/images/search-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    font-size: 16px;\n    font-family: 'Roboto', sans-serif;\n}\n\nbody {\n    margin: 0;\n    overflow: hidden;\n}\n\nbody.no-cursor {\n    cursor: none;\n}\n\nmain {\n    position: relative;\n    width: 100vw;\n    height: calc(100 * var(--vh));\n    overflow: hidden;\n}\n\nmain .background-video {\n    position: absolute;\n    z-index: -1;\n    min-width: 100%;\n    min-height: 100%;\n}\n\n/* Custom cursor */\n\n#custom-cursor {\n    pointer-events: none;\n    position: absolute;\n    width: 120px;\n    aspect-ratio: 1/1;\n    z-index: -1;\n    opacity: 1;\n    transition: opacity 1s;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    background-position-y: center;\n    background-repeat: no-repeat;\n    animation: traverse-sprite 2s steps(239) infinite;\n}\n\n#custom-cursor.hot {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    animation: traverse-sprite 2s steps(59) infinite;\n    width: 150px;\n}\n\n#custom-cursor.cold {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    animation: traverse-sprite 2s steps(47) infinite;\n}\n\n@keyframes traverse-sprite {\n    0% {\n        background-position-x: 0;\n    }\n    100% {\n        background-position-x: 100%;\n    }\n}\n\n#custom-cursor.hidden {\n    opacity: 0;\n}\n\n/* Initial screen */\n\n#initial-screen {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n#initial-screen #title {\n    margin: calc(40vh - 5.5rem) 0 0;\n    font-size: 4rem;\n    font-weight: 900;\n    color: white;\n}\n\n#initial-screen #search-bar {\n    background-color: transparent;\n    color: white;\n    caret-color: white;\n    font-size: 1.5rem;\n    width: min(500px, 80%);\n    margin-top: 10px;\n    padding: 10px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-repeat: no-repeat;\n    background-size: 30px;\n    background-position-x: calc(100% - 10px);\n    background-position-y: center;\n    border-style: none;\n    border-bottom: solid 4px white;\n}\n\n#initial-screen #search-bar::placeholder {\n    color: white;\n}\n\n#initial-screen #search-bar:focus-visible {\n    outline: none;\n}\n\n#initial-screen .error-message-container {\n    display: flex;\n    height: 2rem;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    background-color: rgba(0, 0, 0, 0.3);\n    padding: 0.5rem 1rem;\n    margin-top: 1rem;\n    backdrop-filter: blur(1px);\n    border-radius: 10px;\n    color: red;\n}\n\n#initial-screen .error-message-container.hidden {\n    display: none;\n}\n\n#initial-screen .error-message-icon {\n    width: 1.5rem;\n}\n\n#initial-screen #custom-cursor-toggle {\n    color: white;\n    position: absolute;\n    bottom: 1rem;\n    left: 1rem;\n    margin: 0;\n    background-color: rgba(0, 0, 0, 0.8);\n    backdrop-filter: blur(2px);\n    padding: 0.5rem;\n    border-radius: 0.5rem;\n    cursor: pointer;\n    opacity: 0.7;\n    transition: opacity 0.3s;\n}\n\nbody.no-cursor #initial-screen #custom-cursor-toggle {\n    border: solid 1px rgba(255, 255, 255, 0.8);\n}\n\n#initial-screen #custom-cursor-toggle:hover {\n    opacity: 1;\n}\n\n#initial-screen #custom-cursor-toggle:after {\n    content: '';\n    display: block;\n    height: 1px;\n    left: 50%;\n    position: absolute;\n    background: white;\n    transition: width 0.3s ease 0s, left 0.3s ease 0s;\n    width: 0;\n}\n\n#initial-screen #custom-cursor-toggle:hover:after {\n    width: 90%;\n    left: 5%;\n}\n\n/* Information screen */\n\n#weather-information-screen {\n    color: white;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: min-content minmax(min-content, 1fr) min-content;\n    grid-template-areas:\n        'top top'\n        'center center'\n        'bottom-left bottom-right';\n    box-sizing: border-box;\n    padding: 1.5rem;\n}\n\n#weather-information-screen .wrapper#top {\n    grid-area: top;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 1.5rem;\n    font-size: 2rem;\n    font-weight: 900;\n    filter: drop-shadow(0px 0px 2px rgb(60 60 60));\n}\n\n#weather-information-screen #go-back-button {\n    font-size: 2rem;\n    cursor: pointer;\n    filter: brightness(0.8);\n    transition: filter 0.2s;\n}\n\n#weather-information-screen p#city-title {\n    margin: 0;\n}\n\n#weather-information-screen #go-back-button:hover {\n    filter: brightness(1);\n}\n\n#weather-information-screen .wrapper#central {\n    grid-area: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    filter: drop-shadow(0px 0px 2px rgb(60 60 60));\n}\n\n#weather-information-screen img#weather-icon {\n    width: min(400px, 70%);\n}\n\n#weather-information-screen p#temperature {\n    margin: 0;\n    font-size: 4rem;\n    font-weight: 900;\n}\n\n#weather-information-screen p#units-toggle {\n    margin: 0;\n    cursor: pointer;\n    font-size: 1.2rem;\n    position: relative;\n}\n\n#weather-information-screen p#units-toggle:after {\n    content: '';\n    display: block;\n    height: 2px;\n    left: 50%;\n    position: absolute;\n    background: white;\n    transition: width 0.3s ease 0s, left 0.3s ease 0s;\n    width: 0;\n}\n\n#weather-information-screen p#units-toggle:hover:after {\n    width: 100%;\n    left: 0;\n}\n\n#weather-information-screen .wrapper#bottom-left {\n    grid-area: bottom-left;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: space-evenly;\n    gap: 1rem;\n    filter: drop-shadow(0px 0px 2px rgb(60 60 60));\n}\n\n#weather-information-screen .details {\n    display: flex;\n}\n\n#weather-information-screen .details-icon {\n    width: 2rem;\n    margin-right: 0.5rem;\n}\n\n#weather-information-screen .details > .title {\n    margin-right: 1rem;\n}\n\n#weather-information-screen .details > .value {\n    font-weight: 900;\n}\n\n#weather-information-screen .wrapper#bottom-right {\n    grid-area: bottom-right;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: flex-end;\n    filter: drop-shadow(0px 0px 2px rgb(60 60 60));\n}\n\n#weather-information-screen .wrapper#bottom-right #weather {\n    margin: 0;\n    font-size: 4rem;\n    font-weight: 900;\n}\n\n#weather-information-screen .wrapper#bottom-right #weather-description {\n    margin: 0;\n    font-size: 1.5rem;\n}\n\n/* Loading screen */\n\n#loading-screen {\n    position: absolute;\n    width: 100vw;\n    height: calc(100 * var(--vh));\n    top: 0;\n    animation: fade-in 0.05s ease-in forwards;\n    pointer-events: none;\n    background-color: rgba(0, 0, 0, 0.95);\n    backdrop-filter: blur(4px);\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    box-sizing: border-box;\n    padding: 1rem;\n    color: white;\n    font-size: 1.2rem;\n}\n\n@keyframes fade-in {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n.loading-text {\n    margin: 0;\n    animation: breath 1.5s linear infinite;\n}\n\n@keyframes breath {\n    0% {\n        opacity: 0;\n    }\n    40%,\n    60% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n/* Media queries for responsiveness */\n\n@media (orientation: portrait), (max-width: 600px) {\n    :root {\n        font-size: 10px;\n    }\n    #initial-screen #title {\n        font-size: 2.5rem;\n    }\n    #initial-screen #custom-cursor-toggle {\n        display: none;\n    }\n    body {\n        cursor: initial !important;\n    }\n    #custom-cursor {\n        display: none !important;\n    }\n    #loading-screen {\n        align-items: center;\n        justify-content: center;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    font-size: 16px;\n    font-family: 'Roboto', sans-serif;\n}\n\nbody {\n    margin: 0;\n    overflow: hidden;\n}\n\nbody.no-cursor {\n    cursor: none;\n}\n\nmain {\n    position: relative;\n    width: 100vw;\n    height: calc(100 * var(--vh));\n    overflow: hidden;\n}\n\nmain .background-video {\n    position: absolute;\n    z-index: -1;\n    min-width: 100%;\n    min-height: 100%;\n}\n\n/* Custom cursor */\n\n#custom-cursor {\n    pointer-events: none;\n    position: absolute;\n    width: 120px;\n    aspect-ratio: 1/1;\n    z-index: -1;\n    opacity: 1;\n    transition: opacity 1s;\n    background-image: url(./images/sprites/rotating-earth.png);\n    background-size: cover;\n    background-position-y: center;\n    background-repeat: no-repeat;\n    animation: traverse-sprite 2s steps(239) infinite;\n}\n\n#custom-cursor.hot {\n    background-image: url(./images/sprites/rotating-sandal.png);\n    animation: traverse-sprite 2s steps(59) infinite;\n    width: 150px;\n}\n\n#custom-cursor.cold {\n    background-image: url(./images/sprites/rotating-boot.png);\n    animation: traverse-sprite 2s steps(47) infinite;\n}\n\n@keyframes traverse-sprite {\n    0% {\n        background-position-x: 0;\n    }\n    100% {\n        background-position-x: 100%;\n    }\n}\n\n#custom-cursor.hidden {\n    opacity: 0;\n}\n\n/* Initial screen */\n\n#initial-screen {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n#initial-screen #title {\n    margin: calc(40vh - 5.5rem) 0 0;\n    font-size: 4rem;\n    font-weight: 900;\n    color: white;\n}\n\n#initial-screen #search-bar {\n    background-color: transparent;\n    color: white;\n    caret-color: white;\n    font-size: 1.5rem;\n    width: min(500px, 80%);\n    margin-top: 10px;\n    padding: 10px;\n    background-image: url('./images/search-icon.svg');\n    background-repeat: no-repeat;\n    background-size: 30px;\n    background-position-x: calc(100% - 10px);\n    background-position-y: center;\n    border-style: none;\n    border-bottom: solid 4px white;\n}\n\n#initial-screen #search-bar::placeholder {\n    color: white;\n}\n\n#initial-screen #search-bar:focus-visible {\n    outline: none;\n}\n\n#initial-screen .error-message-container {\n    display: flex;\n    height: 2rem;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    background-color: rgba(0, 0, 0, 0.3);\n    padding: 0.5rem 1rem;\n    margin-top: 1rem;\n    backdrop-filter: blur(1px);\n    border-radius: 10px;\n    color: red;\n}\n\n#initial-screen .error-message-container.hidden {\n    display: none;\n}\n\n#initial-screen .error-message-icon {\n    width: 1.5rem;\n}\n\n#initial-screen #custom-cursor-toggle {\n    color: white;\n    position: absolute;\n    bottom: 1rem;\n    left: 1rem;\n    margin: 0;\n    background-color: rgba(0, 0, 0, 0.8);\n    backdrop-filter: blur(2px);\n    padding: 0.5rem;\n    border-radius: 0.5rem;\n    cursor: pointer;\n    opacity: 0.7;\n    transition: opacity 0.3s;\n}\n\nbody.no-cursor #initial-screen #custom-cursor-toggle {\n    border: solid 1px rgba(255, 255, 255, 0.8);\n}\n\n#initial-screen #custom-cursor-toggle:hover {\n    opacity: 1;\n}\n\n#initial-screen #custom-cursor-toggle:after {\n    content: '';\n    display: block;\n    height: 1px;\n    left: 50%;\n    position: absolute;\n    background: white;\n    transition: width 0.3s ease 0s, left 0.3s ease 0s;\n    width: 0;\n}\n\n#initial-screen #custom-cursor-toggle:hover:after {\n    width: 90%;\n    left: 5%;\n}\n\n/* Information screen */\n\n#weather-information-screen {\n    color: white;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: min-content minmax(min-content, 1fr) min-content;\n    grid-template-areas:\n        'top top'\n        'center center'\n        'bottom-left bottom-right';\n    box-sizing: border-box;\n    padding: 1.5rem;\n}\n\n#weather-information-screen .wrapper#top {\n    grid-area: top;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 1.5rem;\n    font-size: 2rem;\n    font-weight: 900;\n    filter: drop-shadow(0px 0px 2px rgb(60 60 60));\n}\n\n#weather-information-screen #go-back-button {\n    font-size: 2rem;\n    cursor: pointer;\n    filter: brightness(0.8);\n    transition: filter 0.2s;\n}\n\n#weather-information-screen p#city-title {\n    margin: 0;\n}\n\n#weather-information-screen #go-back-button:hover {\n    filter: brightness(1);\n}\n\n#weather-information-screen .wrapper#central {\n    grid-area: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    filter: drop-shadow(0px 0px 2px rgb(60 60 60));\n}\n\n#weather-information-screen img#weather-icon {\n    width: min(400px, 70%);\n}\n\n#weather-information-screen p#temperature {\n    margin: 0;\n    font-size: 4rem;\n    font-weight: 900;\n}\n\n#weather-information-screen p#units-toggle {\n    margin: 0;\n    cursor: pointer;\n    font-size: 1.2rem;\n    position: relative;\n}\n\n#weather-information-screen p#units-toggle:after {\n    content: '';\n    display: block;\n    height: 2px;\n    left: 50%;\n    position: absolute;\n    background: white;\n    transition: width 0.3s ease 0s, left 0.3s ease 0s;\n    width: 0;\n}\n\n#weather-information-screen p#units-toggle:hover:after {\n    width: 100%;\n    left: 0;\n}\n\n#weather-information-screen .wrapper#bottom-left {\n    grid-area: bottom-left;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: space-evenly;\n    gap: 1rem;\n    filter: drop-shadow(0px 0px 2px rgb(60 60 60));\n}\n\n#weather-information-screen .details {\n    display: flex;\n}\n\n#weather-information-screen .details-icon {\n    width: 2rem;\n    margin-right: 0.5rem;\n}\n\n#weather-information-screen .details > .title {\n    margin-right: 1rem;\n}\n\n#weather-information-screen .details > .value {\n    font-weight: 900;\n}\n\n#weather-information-screen .wrapper#bottom-right {\n    grid-area: bottom-right;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: flex-end;\n    filter: drop-shadow(0px 0px 2px rgb(60 60 60));\n}\n\n#weather-information-screen .wrapper#bottom-right #weather {\n    margin: 0;\n    font-size: 4rem;\n    font-weight: 900;\n}\n\n#weather-information-screen .wrapper#bottom-right #weather-description {\n    margin: 0;\n    font-size: 1.5rem;\n}\n\n/* Loading screen */\n\n#loading-screen {\n    position: absolute;\n    width: 100vw;\n    height: calc(100 * var(--vh));\n    top: 0;\n    animation: fade-in 0.05s ease-in forwards;\n    pointer-events: none;\n    background-color: rgba(0, 0, 0, 0.95);\n    backdrop-filter: blur(4px);\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    box-sizing: border-box;\n    padding: 1rem;\n    color: white;\n    font-size: 1.2rem;\n}\n\n@keyframes fade-in {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n.loading-text {\n    margin: 0;\n    animation: breath 1.5s linear infinite;\n}\n\n@keyframes breath {\n    0% {\n        opacity: 0;\n    }\n    40%,\n    60% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n/* Media queries for responsiveness */\n\n@media (orientation: portrait), (max-width: 600px) {\n    :root {\n        font-size: 10px;\n    }\n    #initial-screen #title {\n        font-size: 2.5rem;\n    }\n    #initial-screen #custom-cursor-toggle {\n        display: none;\n    }\n    body {\n        cursor: initial !important;\n    }\n    #custom-cursor {\n        display: none !important;\n    }\n    #loading-screen {\n        align-items: center;\n        justify-content: center;\n    }\n}\n"],"sourceRoot":""}]);
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
        `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${MY_API_KEY}`,
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

/***/ "./src/images/attention.svg":
/*!**********************************!*\
  !*** ./src/images/attention.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "02c74a42f595afba84f2.svg";

/***/ }),

/***/ "./src/images/humidity.svg":
/*!*********************************!*\
  !*** ./src/images/humidity.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1964eb160d336d16311c.svg";

/***/ }),

/***/ "./src/images/search-icon.svg":
/*!************************************!*\
  !*** ./src/images/search-icon.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "45a700215a620fcdfd5f.svg";

/***/ }),

/***/ "./src/images/sprites/rotating-boot.png":
/*!**********************************************!*\
  !*** ./src/images/sprites/rotating-boot.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "613322d32dba74d01609.png";

/***/ }),

/***/ "./src/images/sprites/rotating-earth.png":
/*!***********************************************!*\
  !*** ./src/images/sprites/rotating-earth.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d104ee52033df424b993.png";

/***/ }),

/***/ "./src/images/sprites/rotating-sandal.png":
/*!************************************************!*\
  !*** ./src/images/sprites/rotating-sandal.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7505c8073d1c82d37ca.png";

/***/ }),

/***/ "./src/images/thermometer.svg":
/*!************************************!*\
  !*** ./src/images/thermometer.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a6c1e7e5b437e8ed0abb.svg";

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

/***/ }),

/***/ "./src/images/wind-speed.svg":
/*!***********************************!*\
  !*** ./src/images/wind-speed.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e64b93d10bbc65ed51d7.svg";

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
/* harmony import */ var _images_thermometer_svg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../images/thermometer.svg */ "./src/images/thermometer.svg");
/* harmony import */ var _images_humidity_svg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../images/humidity.svg */ "./src/images/humidity.svg");
/* harmony import */ var _images_wind_speed_svg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../images/wind-speed.svg */ "./src/images/wind-speed.svg");
/* harmony import */ var _images_attention_svg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../images/attention.svg */ "./src/images/attention.svg");



// import weather icons



















// import background videos













// import weather details icons




// import error messagge icon


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
    const errorMessage = document.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.innerText =
            'Something went wrong. Make sure you enter a valid location!';
    }

    const errorMessageContainer = errorMessage.parentElement;
    if (errorMessageContainer.classList.contains('hidden')) {
        errorMessageContainer.classList.remove('hidden');
    }
}

function displayLoadingScreen() {
    const alreadyOnScreen = document.querySelector('#loading-screen');
    if (alreadyOnScreen) return;

    const loadingScreen = document.createElement('section');
    loadingScreen.id = 'loading-screen';

    const loadingText = document.createElement('p');
    loadingText.classList.add('loading-text');
    loadingText.innerText = 'LOADING...';
    loadingScreen.appendChild(loadingText);

    container.appendChild(loadingScreen);
}

function removeLoadingScreen() {
    const loadingScreen = document.querySelector('#loading-screen');
    if (loadingScreen) loadingScreen.remove();
}

function createCustomCursor() {
    const customCursor = document.createElement('section');
    customCursor.id = 'custom-cursor';
    container.appendChild(customCursor);

    const customCursorWidth = window
        .getComputedStyle(customCursor)
        .getPropertyValue('width');

    let hideCursorTimer = null;

    function hideCursor() {
        customCursor.classList.add('hidden');
    }

    function makeSureCursorIsVisible() {
        if (customCursor.classList.contains('hidden')) {
            customCursor.classList.remove('hidden');
        }
    }

    document.addEventListener('mousemove', (event) => {
        if (hideCursorTimer) {
            window.clearTimeout(hideCursorTimer);
        }

        makeSureCursorIsVisible();

        hideCursorTimer = window.setTimeout(hideCursor, 3000);

        customCursor.style.left = `calc(${event.clientX}px - ${customCursorWidth}/2)`;
        customCursor.style.top = `calc(${event.clientY}px - ${customCursorWidth}/2)`;
    });
}

function removeCustomCursor() {
    const customCursor = document.querySelector('#custom-cursor');
    if (customCursor) customCursor.remove();
}

function toggleCustomCursor() {
    const customCursor = document.querySelector('#custom-cursor');
    if (customCursor) {
        removeCustomCursor();
        document.body.className = '';
    } else {
        createCustomCursor();
        document.body.className = 'no-cursor';
    }
}

function displayInitialScreen() {
    main.innerHTML = '';
    main.id = 'initial-screen';

    displayLoadingScreen();

    // reset custom cursor
    const customCursor = document.querySelector('#custom-cursor');
    if (customCursor) customCursor.className = '';

    const backgroundVideo = document.createElement('video');
    backgroundVideo.classList.add('background-video');
    backgroundVideo.id = 'initial-screen-video';
    backgroundVideo.src = _videos_initial_screen_video_mp4__WEBPACK_IMPORTED_MODULE_20__["default"];
    backgroundVideo.muted = true;
    backgroundVideo.autoplay = true;
    backgroundVideo.loop = true;
    backgroundVideo.onloadeddata = removeLoadingScreen;
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

    const errorMessageContainer = document.createElement('section');
    errorMessageContainer.classList.add('error-message-container', 'hidden');
    const errorMessageIcon = document.createElement('img');
    errorMessageIcon.src = _images_attention_svg__WEBPACK_IMPORTED_MODULE_35__;
    errorMessageIcon.classList.add('error-message-icon');
    errorMessageContainer.appendChild(errorMessageIcon);
    const errorMessage = document.createElement('span');
    errorMessage.classList.add('error-message');
    errorMessageContainer.appendChild(errorMessage);
    main.appendChild(errorMessageContainer);

    const customCursorToggle = document.createElement('p');
    customCursorToggle.id = 'custom-cursor-toggle';
    customCursorToggle.innerText = 'Toggle custom cursor';
    customCursorToggle.addEventListener('click', toggleCustomCursor);
    main.appendChild(customCursorToggle);
}

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function displayWeatherInformationScreen(weatherData, unit) {
    main.innerHTML = '';
    main.id = 'weather-information-screen';

    // set custom cursor
    const customCursor = document.querySelector('#custom-cursor');
    if (customCursor) {
        if (unit === 'metric') {
            customCursor.className =
                weatherData.temperature > 15 ? 'hot' : 'cold';
        } else {
            customCursor.className =
                weatherData.temperature > 60 ? 'hot' : 'cold';
        }
    }

    const backgroundVideo = document.createElement('video');
    backgroundVideo.classList.add('background-video');
    backgroundVideo.src = WEATHER_MEDIA[weatherData.weatherIconId].video;
    backgroundVideo.muted = true;
    backgroundVideo.autoplay = true;
    backgroundVideo.loop = true;
    backgroundVideo.onloadeddata = removeLoadingScreen;
    main.appendChild(backgroundVideo);

    const topWrapper = document.createElement('section');
    topWrapper.classList.add('wrapper');
    topWrapper.id = 'top';
    main.appendChild(topWrapper);

    const goBackArrow = document.createElement('i');
    goBackArrow.classList.add('fa-solid', 'fa-circle-chevron-left');
    goBackArrow.id = 'go-back-button';
    goBackArrow.title = 'GO BACK';
    goBackArrow.addEventListener('click', displayInitialScreen);
    topWrapper.appendChild(goBackArrow);

    const cityTitle = document.createElement('p');
    cityTitle.id = 'city-title';
    // If it's the US, then show the state instead of the country
    cityTitle.innerText = `${weatherData.city}, ${
        weatherData.countryCode === 'US'
            ? weatherData.state
            : weatherData.countryCode
    }`;
    topWrapper.appendChild(cityTitle);

    const centralWrapper = document.createElement('section');
    centralWrapper.classList.add('wrapper');
    centralWrapper.id = 'central';
    main.appendChild(centralWrapper);

    const weatherIcon = document.createElement('img');
    weatherIcon.id = 'weather-icon';
    weatherIcon.src = WEATHER_MEDIA[weatherData.weatherIconId].icon;
    weatherIcon.alt = `${weatherData.weather} weather icon`;
    centralWrapper.appendChild(weatherIcon);

    const temperature = document.createElement('p');
    temperature.id = 'temperature';
    temperature.innerText = `${weatherData.temperature} ${UNITS[unit].temperature}`;
    centralWrapper.appendChild(temperature);

    const unitsToggle = document.createElement('p');
    unitsToggle.id = 'units-toggle';
    unitsToggle.innerText = `Display ${unit === 'metric' ? '°F' : '°C'}`;
    unitsToggle.addEventListener('click', toggleUnits);
    centralWrapper.appendChild(unitsToggle);

    const bottomLeftWrapper = document.createElement('section');
    bottomLeftWrapper.classList.add('wrapper');
    bottomLeftWrapper.id = 'bottom-left';
    main.appendChild(bottomLeftWrapper);

    const feelsLike = document.createElement('section');
    feelsLike.classList.add('details');
    feelsLike.id = 'feels-like';
    const feelsLikeIcon = document.createElement('img');
    feelsLikeIcon.src = _images_thermometer_svg__WEBPACK_IMPORTED_MODULE_32__;
    feelsLikeIcon.classList.add('details-icon');
    feelsLike.appendChild(feelsLikeIcon);
    const feelsLikeTitle = document.createElement('span');
    feelsLikeTitle.classList.add('title');
    feelsLikeTitle.innerText = 'Feels like: ';
    feelsLike.appendChild(feelsLikeTitle);
    const feelsLikeValue = document.createElement('span');
    feelsLikeValue.classList.add('value');
    feelsLikeValue.innerText = `${weatherData.feelsLike} ${UNITS[unit].temperature}`;
    feelsLike.appendChild(feelsLikeValue);
    bottomLeftWrapper.appendChild(feelsLike);

    const humidity = document.createElement('section');
    humidity.classList.add('details');
    humidity.id = 'humidity';
    const humidityIcon = document.createElement('img');
    humidityIcon.src = _images_humidity_svg__WEBPACK_IMPORTED_MODULE_33__;
    humidityIcon.classList.add('details-icon');
    humidity.appendChild(humidityIcon);
    const humidityTitle = document.createElement('span');
    humidityTitle.classList.add('title');
    humidityTitle.innerText = 'Humidity: ';
    humidity.appendChild(humidityTitle);
    const humidityValue = document.createElement('span');
    humidityValue.classList.add('value');
    humidityValue.innerText = `${weatherData.humidity}%`;
    humidity.appendChild(humidityValue);
    bottomLeftWrapper.appendChild(humidity);

    const windSpeed = document.createElement('section');
    windSpeed.classList.add('details');
    windSpeed.id = 'wind-speed';
    const windSpeedIcon = document.createElement('img');
    windSpeedIcon.src = _images_wind_speed_svg__WEBPACK_IMPORTED_MODULE_34__;
    windSpeedIcon.classList.add('details-icon');
    windSpeed.appendChild(windSpeedIcon);
    const windSpeedTitle = document.createElement('span');
    windSpeedTitle.classList.add('title');
    windSpeedTitle.innerText = 'Wind speed: ';
    windSpeed.appendChild(windSpeedTitle);
    const windSpeedValue = document.createElement('span');
    windSpeedValue.classList.add('value');
    windSpeedValue.innerText = `${weatherData.windSpeed} ${UNITS[unit].speed}`;
    windSpeed.appendChild(windSpeedValue);
    bottomLeftWrapper.appendChild(windSpeed);

    const bottomRightWrapper = document.createElement('section');
    bottomRightWrapper.classList.add('wrapper');
    bottomRightWrapper.id = 'bottom-right';
    main.appendChild(bottomRightWrapper);

    const weather = document.createElement('p');
    weather.id = 'weather';
    weather.innerText = weatherData.weather;
    bottomRightWrapper.appendChild(weather);

    const weatherDescription = document.createElement('p');
    weatherDescription.id = 'weather-description';
    weatherDescription.innerText = capitalize(weatherData.weatherDescription);
    bottomRightWrapper.appendChild(weatherDescription);
}

async function getAndDisplayWeatherData(location, unit) {
    displayLoadingScreen();
    try {
        const weatherData = await (0,_api_calls__WEBPACK_IMPORTED_MODULE_0__["default"])(location, unit);
        displayWeatherInformationScreen(weatherData, unit);
    } catch {
        removeLoadingScreen();
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

// I added this next function and event listeners because setting the height to 100vh was giving me some problems in mobile phones.
// I found this very useful article explaining what the problem was and how to fix it:
// https://ilxanlar.medium.com/you-shouldnt-rely-on-css-100vh-and-here-s-why-1b4721e74487

function calculateAndSetViewportHeight() {
    const viewportHeight = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${viewportHeight}px`);
}

calculateAndSetViewportHeight();
window.addEventListener('resize', calculateAndSetViewportHeight);
window.addEventListener('orientationchange', calculateAndSetViewportHeight);

displayInitialScreen();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsUUFBUSxPQUFPLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFN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QTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBEQUEwRCxlQUFlO0FBQ3pFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdmlkZW9zL2NsZWFyLWRheS5tcDQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdmlkZW9zL2NsZWFyLW5pZ2h0Lm1wNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy92aWRlb3MvY2xvdWRzLWRheS5tcDQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdmlkZW9zL2Nsb3Vkcy1uaWdodC5tcDQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdmlkZW9zL2luaXRpYWwtc2NyZWVuLXZpZGVvLm1wNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy92aWRlb3MvbWlzdC1kYXkubXA0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3ZpZGVvcy9taXN0LW5pZ2h0Lm1wNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy92aWRlb3MvcmFpbi1kYXkubXA0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3ZpZGVvcy9yYWluLW5pZ2h0Lm1wNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy92aWRlb3Mvc25vdy1kYXkubXA0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3ZpZGVvcy9zbm93LW5pZ2h0Lm1wNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy92aWRlb3MvdGh1bmRlcnN0b3JtLm1wNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2phdmFzY3JpcHQtbW9kdWxlcy9hcGktY2FsbHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qYXZhc2NyaXB0LW1vZHVsZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3Nwcml0ZXMvcm90YXRpbmctZWFydGgucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvc3ByaXRlcy9yb3RhdGluZy1zYW5kYWwucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvc3ByaXRlcy9yb3RhdGluZy1ib290LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3NlYXJjaC1pY29uLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmJvZHkubm8tY3Vyc29yIHtcXG4gICAgY3Vyc29yOiBub25lO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogY2FsYygxMDAgKiB2YXIoLS12aCkpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5tYWluIC5iYWNrZ3JvdW5kLXZpZGVvIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiBDdXN0b20gY3Vyc29yICovXFxuXFxuI2N1c3RvbS1jdXJzb3Ige1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGFuaW1hdGlvbjogdHJhdmVyc2Utc3ByaXRlIDJzIHN0ZXBzKDIzOSkgaW5maW5pdGU7XFxufVxcblxcbiNjdXN0b20tY3Vyc29yLmhvdCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGFuaW1hdGlvbjogdHJhdmVyc2Utc3ByaXRlIDJzIHN0ZXBzKDU5KSBpbmZpbml0ZTtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4jY3VzdG9tLWN1cnNvci5jb2xkIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgYW5pbWF0aW9uOiB0cmF2ZXJzZS1zcHJpdGUgMnMgc3RlcHMoNDcpIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHRyYXZlcnNlLXNwcml0ZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwJTtcXG4gICAgfVxcbn1cXG5cXG4jY3VzdG9tLWN1cnNvci5oaWRkZW4ge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4vKiBJbml0aWFsIHNjcmVlbiAqL1xcblxcbiNpbml0aWFsLXNjcmVlbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2luaXRpYWwtc2NyZWVuICN0aXRsZSB7XFxuICAgIG1hcmdpbjogY2FsYyg0MHZoIC0gNS41cmVtKSAwIDA7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jaW5pdGlhbC1zY3JlZW4gI3NlYXJjaC1iYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjYXJldC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB3aWR0aDogbWluKDUwMHB4LCA4MCUpO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogY2FsYygxMDAlIC0gMTBweCk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDRweCB3aGl0ZTtcXG59XFxuXFxuI2luaXRpYWwtc2NyZWVuICNzZWFyY2gtYmFyOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2luaXRpYWwtc2NyZWVuICNzZWFyY2gtYmFyOmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jaW5pdGlhbC1zY3JlZW4gLmVycm9yLW1lc3NhZ2UtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuI2luaXRpYWwtc2NyZWVuIC5lcnJvci1tZXNzYWdlLWNvbnRhaW5lci5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jaW5pdGlhbC1zY3JlZW4gLmVycm9yLW1lc3NhZ2UtaWNvbiB7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxufVxcblxcbiNpbml0aWFsLXNjcmVlbiAjY3VzdG9tLWN1cnNvci10b2dnbGUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAxcmVtO1xcbiAgICBsZWZ0OiAxcmVtO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xcbn1cXG5cXG5ib2R5Lm5vLWN1cnNvciAjaW5pdGlhbC1zY3JlZW4gI2N1c3RvbS1jdXJzb3ItdG9nZ2xlIHtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbn1cXG5cXG4jaW5pdGlhbC1zY3JlZW4gI2N1c3RvbS1jdXJzb3ItdG9nZ2xlOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuI2luaXRpYWwtc2NyZWVuICNjdXN0b20tY3Vyc29yLXRvZ2dsZTphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlIDBzLCBsZWZ0IDAuM3MgZWFzZSAwcztcXG4gICAgd2lkdGg6IDA7XFxufVxcblxcbiNpbml0aWFsLXNjcmVlbiAjY3VzdG9tLWN1cnNvci10b2dnbGU6aG92ZXI6YWZ0ZXIge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBsZWZ0OiA1JTtcXG59XFxuXFxuLyogSW5mb3JtYXRpb24gc2NyZWVuICovXFxuXFxuI3dlYXRoZXItaW5mb3JtYXRpb24tc2NyZWVuIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWlubWF4KG1pbi1jb250ZW50LCAxZnIpIG1pbi1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgJ3RvcCB0b3AnXFxuICAgICAgICAnY2VudGVyIGNlbnRlcidcXG4gICAgICAgICdib3R0b20tbGVmdCBib3R0b20tcmlnaHQnO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxufVxcblxcbiN3ZWF0aGVyLWluZm9ybWF0aW9uLXNjcmVlbiAud3JhcHBlciN0b3Age1xcbiAgICBncmlkLWFyZWE6IHRvcDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDEuNXJlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMnB4IHJnYig2MCA2MCA2MCkpO1xcbn1cXG5cXG4jd2VhdGhlci1pbmZvcm1hdGlvbi1zY3JlZW4gI2dvLWJhY2stYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjgpO1xcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4ycztcXG59XFxuXFxuI3dlYXRoZXItaW5mb3JtYXRpb24tc2NyZWVuIHAjY2l0eS10aXRsZSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI3dlYXRoZXItaW5mb3JtYXRpb24tc2NyZWVuICNnby1iYWNrLWJ1dHRvbjpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcXG59XFxuXFxuI3dlYXRoZXItaW5mb3JtYXRpb24tc2NyZWVuIC53cmFwcGVyI2NlbnRyYWwge1xcbiAgICBncmlkLWFyZWE6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMnB4IHJnYig2MCA2MCA2MCkpO1xcbn1cXG5cXG4jd2VhdGhlci1pbmZvcm1hdGlvbi1zY3JlZW4gaW1nI3dlYXRoZXItaWNvbiB7XFxuICAgIHdpZHRoOiBtaW4oNDAwcHgsIDcwJSk7XFxufVxcblxcbiN3ZWF0aGVyLWluZm9ybWF0aW9uLXNjcmVlbiBwI3RlbXBlcmF0dXJlIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbiN3ZWF0aGVyLWluZm9ybWF0aW9uLXNjcmVlbiBwI3VuaXRzLXRvZ2dsZSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jd2VhdGhlci1pbmZvcm1hdGlvbi1zY3JlZW4gcCN1bml0cy10b2dnbGU6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZSAwcywgbGVmdCAwLjNzIGVhc2UgMHM7XFxuICAgIHdpZHRoOiAwO1xcbn1cXG5cXG4jd2VhdGhlci1pbmZvcm1hdGlvbi1zY3JlZW4gcCN1bml0cy10b2dnbGU6aG92ZXI6YWZ0ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbGVmdDogMDtcXG59XFxuXFxuI3dlYXRoZXItaW5mb3JtYXRpb24tc2NyZWVuIC53cmFwcGVyI2JvdHRvbS1sZWZ0IHtcXG4gICAgZ3JpZC1hcmVhOiBib3R0b20tbGVmdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAycHggcmdiKDYwIDYwIDYwKSk7XFxufVxcblxcbiN3ZWF0aGVyLWluZm9ybWF0aW9uLXNjcmVlbiAuZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiN3ZWF0aGVyLWluZm9ybWF0aW9uLXNjcmVlbiAuZGV0YWlscy1pY29uIHtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4jd2VhdGhlci1pbmZvcm1hdGlvbi1zY3JlZW4gLmRldGFpbHMgPiAudGl0bGUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbiN3ZWF0aGVyLWluZm9ybWF0aW9uLXNjcmVlbiAuZGV0YWlscyA+IC52YWx1ZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbiN3ZWF0aGVyLWluZm9ybWF0aW9uLXNjcmVlbiAud3JhcHBlciNib3R0b20tcmlnaHQge1xcbiAgICBncmlkLWFyZWE6IGJvdHRvbS1yaWdodDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMnB4IHJnYig2MCA2MCA2MCkpO1xcbn1cXG5cXG4jd2VhdGhlci1pbmZvcm1hdGlvbi1zY3JlZW4gLndyYXBwZXIjYm90dG9tLXJpZ2h0ICN3ZWF0aGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbiN3ZWF0aGVyLWluZm9ybWF0aW9uLXNjcmVlbiAud3JhcHBlciNib3R0b20tcmlnaHQgI3dlYXRoZXItZGVzY3JpcHRpb24ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4vKiBMb2FkaW5nIHNjcmVlbiAqL1xcblxcbiNsb2FkaW5nLXNjcmVlbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwICogdmFyKC0tdmgpKTtcXG4gICAgdG9wOiAwO1xcbiAgICBhbmltYXRpb246IGZhZGUtaW4gMC4wNXMgZWFzZS1pbiBmb3J3YXJkcztcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45NSk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbi5sb2FkaW5nLXRleHQge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGFuaW1hdGlvbjogYnJlYXRoIDEuNXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJyZWF0aCB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgNDAlLFxcbiAgICA2MCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG59XFxuXFxuLyogTWVkaWEgcXVlcmllcyBmb3IgcmVzcG9uc2l2ZW5lc3MgKi9cXG5cXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCksIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIDpyb290IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgfVxcbiAgICAjaW5pdGlhbC1zY3JlZW4gI3RpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICB9XFxuICAgICNpbml0aWFsLXNjcmVlbiAjY3VzdG9tLWN1cnNvci10b2dnbGUge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICBib2R5IHtcXG4gICAgICAgIGN1cnNvcjogaW5pdGlhbCAhaW1wb3J0YW50O1xcbiAgICB9XFxuICAgICNjdXN0b20tY3Vyc29yIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgfVxcbiAgICAjbG9hZGluZy1zY3JlZW4ge1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUEsa0JBQWtCOztBQUVsQjtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsVUFBVTtJQUNWLHNCQUFzQjtJQUN0Qix5REFBMEQ7SUFDMUQsc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0kseURBQTJEO0lBQzNELGdEQUFnRDtJQUNoRCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseURBQXlEO0lBQ3pELGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSwyQkFBMkI7SUFDL0I7QUFDSjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQSxtQkFBbUI7O0FBRW5CO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osa0JBQWtCO0lB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LG9CQUFvQjtJQUNwQixxQ0FBcUM7SUFDckMsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBOztRQUVJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUEscUNBQXFDOztBQUVyQztJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLHVCQUF1QjtJQUMzQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmJvZHkubm8tY3Vyc29yIHtcXG4gICAgY3Vyc29yOiBub25lO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogY2FsYygxMDAgKiB2YXIoLS12aCkpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5tYWluIC5iYWNrZ3JvdW5kLXZpZGVvIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiBDdXN0b20gY3Vyc29yICovXFxuXFxuI2N1c3RvbS1jdXJzb3Ige1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL3Nwcml0ZXMvcm90YXRpbmctZWFydGgucG5nKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGFuaW1hdGlvbjogdHJhdmVyc2Utc3ByaXRlIDJzIHN0ZXBzKDIzOSkgaW5maW5pdGU7XFxufVxcblxcbiNjdXN0b20tY3Vyc29yLmhvdCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9zcHJpdGVzL3JvdGF0aW5nLXNhbmRhbC5wbmcpO1xcbiAgICBhbmltYXRpb246IHRyYXZlcnNlLXNwcml0ZSAycyBzdGVwcyg1OSkgaW5maW5pdGU7XFxuICAgIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuI2N1c3RvbS1jdXJzb3IuY29sZCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9zcHJpdGVzL3JvdGF0aW5nLWJvb3QucG5nKTtcXG4gICAgYW5pbWF0aW9uOiB0cmF2ZXJzZS1zcHJpdGUgMnMgc3RlcHMoNDcpIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHRyYXZlcnNlLXNwcml0ZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwJTtcXG4gICAgfVxcbn1cXG5cXG4jY3VzdG9tLWN1cnNvci5oaWRkZW4ge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4vKiBJbml0aWFsIHNjcmVlbiAqL1xcblxcbiNpbml0aWFsLXNjcmVlbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2luaXRpYWwtc2NyZWVuICN0aXRsZSB7XFxuICAgIG1hcmdpbjogY2FsYyg0MHZoIC0gNS41cmVtKSAwIDA7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jaW5pdGlhbC1zY3JlZW4gI3NlYXJjaC1iYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjYXJldC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB3aWR0aDogbWluKDUwMHB4LCA4MCUpO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL3NlYXJjaC1pY29uLnN2ZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogY2FsYygxMDAlIC0gMTBweCk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDRweCB3aGl0ZTtcXG59XFxuXFxuI2luaXRpYWwtc2NyZWVuICNzZWFyY2gtYmFyOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2luaXRpYWwtc2NyZWVuICNzZWFyY2gtYmFyOmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jaW5pdGlhbC1zY3JlZW4gLmVycm9yLW1lc3NhZ2UtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuI2luaXRpYWwtc2NyZWVuIC5lcnJvci1tZXNzYWdlLWNvbnRhaW5lci5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jaW5pdGlhbC1zY3JlZW4gLmVycm9yLW1lc3NhZ2UtaWNvbiB7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxufVxcblxcbiNpbml0aWFsLXNjcmVlbiAjY3VzdG9tLWN1cnNvci10b2dnbGUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAxcmVtO1xcbiAgICBsZWZ0OiAxcmVtO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xcbn1cXG5cXG5ib2R5Lm5vLWN1cnNvciAjaW5pdGlhbC1zY3JlZW4gI2N1c3RvbS1jdXJzb3ItdG9nZ2xlIHtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbn1cXG5cXG4jaW5pdGlhbC1zY3JlZW4gI2N1c3RvbS1jdXJzb3ItdG9nZ2xlOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuI2luaXRpYWwtc2NyZWVuICNjdXN0b20tY3Vyc29yLXRvZ2dsZTphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlIDBzLCBsZWZ0IDAuM3MgZWFzZSAwcztcXG4gICAgd2lkdGg6IDA7XFxufVxcblxcbiNpbml0aWFsLXNjcmVlbiAjY3VzdG9tLWN1cnNvci10b2dnbGU6aG92ZXI6YWZ0ZXIge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBsZWZ0OiA1JTtcXG59XFxuXFxuLyogSW5mb3JtYXRpb24gc2NyZWVuICovXFxuXFxuI3dlYXRoZXItaW5mb3JtYXRpb24tc2NyZWVuIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWlubWF4KG1pbi1jb250ZW50LCAxZnIpIG1pbi1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgJ3RvcCB0b3AnXFxuICAgICAgICAnY2VudGVyIGNlbnRlcidcXG4gICAgICAgICdib3R0b20tbGVmdCBib3R0b20tcmlnaHQnO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxufVxcblxcbiN3ZWF0aGVyLWluZm9ybWF0aW9uLXNjcmVlbiAud3JhcHBlciN0b3Age1xcbiAgICBncmlkLWFyZWE6IHRvcDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDEuNXJlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMnB4IHJnYig2MCA2MCA2MCkpO1xcbn1cXG5cXG4jd2VhdGhlci1pbmZvcm1hdGlvbi1zY3JlZW4gI2dvLWJhY2stYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjgpO1xcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4ycztcXG59XFxuXFxuI3dlYXRoZXItaW5mb3JtYXRpb24tc2NyZWVuIHAjY2l0eS10aXRsZSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI3dlYXRoZXItaW5mb3JtYXRpb24tc2NyZWVuICNnby1iYWNrLWJ1dHRvbjpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcXG59XFxuXFxuI3dlYXRoZXItaW5mb3JtYXRpb24tc2NyZWVuIC53cmFwcGVyI2NlbnRyYWwge1xcbiAgICBncmlkLWFyZWE6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMnB4IHJnYig2MCA2MCA2MCkpO1xcbn1cXG5cXG4jd2VhdGhlci1pbmZvcm1hdGlvbi1zY3JlZW4gaW1nI3dlYXRoZXItaWNvbiB7XFxuICAgIHdpZHRoOiBtaW4oNDAwcHgsIDcwJSk7XFxufVxcblxcbiN3ZWF0aGVyLWluZm9ybWF0aW9uLXNjcmVlbiBwI3RlbXBlcmF0dXJlIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbiN3ZWF0aGVyLWluZm9ybWF0aW9uLXNjcmVlbiBwI3VuaXRzLXRvZ2dsZSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jd2VhdGhlci1pbmZvcm1hdGlvbi1zY3JlZW4gcCN1bml0cy10b2dnbGU6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZSAwcywgbGVmdCAwLjNzIGVhc2UgMHM7XFxuICAgIHdpZHRoOiAwO1xcbn1cXG5cXG4jd2VhdGhlci1pbmZvcm1hdGlvbi1zY3JlZW4gcCN1bml0cy10b2dnbGU6aG92ZXI6YWZ0ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbGVmdDogMDtcXG59XFxuXFxuI3dlYXRoZXItaW5mb3JtYXRpb24tc2NyZWVuIC53cmFwcGVyI2JvdHRvbS1sZWZ0IHtcXG4gICAgZ3JpZC1hcmVhOiBib3R0b20tbGVmdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAycHggcmdiKDYwIDYwIDYwKSk7XFxufVxcblxcbiN3ZWF0aGVyLWluZm9ybWF0aW9uLXNjcmVlbiAuZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiN3ZWF0aGVyLWluZm9ybWF0aW9uLXNjcmVlbiAuZGV0YWlscy1pY29uIHtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4jd2VhdGhlci1pbmZvcm1hdGlvbi1zY3JlZW4gLmRldGFpbHMgPiAudGl0bGUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbiN3ZWF0aGVyLWluZm9ybWF0aW9uLXNjcmVlbiAuZGV0YWlscyA+IC52YWx1ZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbiN3ZWF0aGVyLWluZm9ybWF0aW9uLXNjcmVlbiAud3JhcHBlciNib3R0b20tcmlnaHQge1xcbiAgICBncmlkLWFyZWE6IGJvdHRvbS1yaWdodDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMnB4IHJnYig2MCA2MCA2MCkpO1xcbn1cXG5cXG4jd2VhdGhlci1pbmZvcm1hdGlvbi1zY3JlZW4gLndyYXBwZXIjYm90dG9tLXJpZ2h0ICN3ZWF0aGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbiN3ZWF0aGVyLWluZm9ybWF0aW9uLXNjcmVlbiAud3JhcHBlciNib3R0b20tcmlnaHQgI3dlYXRoZXItZGVzY3JpcHRpb24ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4vKiBMb2FkaW5nIHNjcmVlbiAqL1xcblxcbiNsb2FkaW5nLXNjcmVlbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwICogdmFyKC0tdmgpKTtcXG4gICAgdG9wOiAwO1xcbiAgICBhbmltYXRpb246IGZhZGUtaW4gMC4wNXMgZWFzZS1pbiBmb3J3YXJkcztcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45NSk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbi5sb2FkaW5nLXRleHQge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGFuaW1hdGlvbjogYnJlYXRoIDEuNXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJyZWF0aCB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgNDAlLFxcbiAgICA2MCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG59XFxuXFxuLyogTWVkaWEgcXVlcmllcyBmb3IgcmVzcG9uc2l2ZW5lc3MgKi9cXG5cXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCksIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIDpyb290IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgfVxcbiAgICAjaW5pdGlhbC1zY3JlZW4gI3RpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICB9XFxuICAgICNpbml0aWFsLXNjcmVlbiAjY3VzdG9tLWN1cnNvci10b2dnbGUge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICBib2R5IHtcXG4gICAgICAgIGN1cnNvcjogaW5pdGlhbCAhaW1wb3J0YW50O1xcbiAgICB9XFxuICAgICNjdXN0b20tY3Vyc29yIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgfVxcbiAgICAjbG9hZGluZy1zY3JlZW4ge1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ2aWRlb3MvY2xlYXItZGF5Lm1wNFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ2aWRlb3MvY2xlYXItbmlnaHQubXA0XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInZpZGVvcy9jbG91ZHMtZGF5Lm1wNFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ2aWRlb3MvY2xvdWRzLW5pZ2h0Lm1wNFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ2aWRlb3MvaW5pdGlhbC1zY3JlZW4tdmlkZW8ubXA0XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInZpZGVvcy9taXN0LWRheS5tcDRcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwidmlkZW9zL21pc3QtbmlnaHQubXA0XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInZpZGVvcy9yYWluLWRheS5tcDRcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwidmlkZW9zL3JhaW4tbmlnaHQubXA0XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInZpZGVvcy9zbm93LWRheS5tcDRcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwidmlkZW9zL3Nub3ctbmlnaHQubXA0XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInZpZGVvcy90aHVuZGVyc3Rvcm0ubXA0XCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IE1ZX0FQSV9LRVkgPSAnMjdjNzc3MTY2YmYzZjZmYTA0ZjQzYzA4MzVjYjg5YjEnO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRDb29yZGluYXRlcyhsb2NhdGlvbikge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2xvY2F0aW9ufSZsaW1pdD0xJmFwcGlkPSR7TVlfQVBJX0tFWX1gLFxuICAgICAgICB7IG1vZGU6ICdjb3JzJyB9XG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyKHsgbGF0LCBsb24sIHVuaXQgfSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9JHtNWV9BUElfS0VZfSZ1bml0cz0ke3VuaXR9YCxcbiAgICAgICAgeyBtb2RlOiAnY29ycycgfVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbiwgdW5pdCkge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzRGF0YSA9IGF3YWl0IGdldENvb3JkaW5hdGVzKGxvY2F0aW9uKTtcbiAgICBjb25zdCB7IGxhdCwgbG9uIH0gPSBjb29yZGluYXRlc0RhdGFbMF07XG5cbiAgICBjb25zdCBjdXJyZW50V2VhdGhlckRhdGEgPSBhd2FpdCBnZXRDdXJyZW50V2VhdGhlcih7IGxhdCwgbG9uLCB1bml0IH0pO1xuXG4gICAgY29uc3Qgd2VhdGhlckluZm8gPSB7XG4gICAgICAgIGNpdHk6IGNvb3JkaW5hdGVzRGF0YVswXS5uYW1lLFxuICAgICAgICBzdGF0ZTogY29vcmRpbmF0ZXNEYXRhWzBdLnN0YXRlLFxuICAgICAgICBjb3VudHJ5Q29kZTogY29vcmRpbmF0ZXNEYXRhWzBdLmNvdW50cnksXG4gICAgICAgIHdlYXRoZXI6IGN1cnJlbnRXZWF0aGVyRGF0YS53ZWF0aGVyWzBdLm1haW4sXG4gICAgICAgIHdlYXRoZXJEZXNjcmlwdGlvbjogY3VycmVudFdlYXRoZXJEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgICAgIHdlYXRoZXJJY29uSWQ6IGN1cnJlbnRXZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmljb24sXG4gICAgICAgIHRlbXBlcmF0dXJlOiBjdXJyZW50V2VhdGhlckRhdGEubWFpbi50ZW1wLFxuICAgICAgICBmZWVsc0xpa2U6IGN1cnJlbnRXZWF0aGVyRGF0YS5tYWluLmZlZWxzX2xpa2UsXG4gICAgICAgIGh1bWlkaXR5OiBjdXJyZW50V2VhdGhlckRhdGEubWFpbi5odW1pZGl0eSxcbiAgICAgICAgd2luZFNwZWVkOiBjdXJyZW50V2VhdGhlckRhdGEud2luZC5zcGVlZFxuICAgIH07XG5cbiAgICByZXR1cm4gd2VhdGhlckluZm87XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGdldFdlYXRoZXJEYXRhIGZyb20gJy4vYXBpLWNhbGxzJztcbmltcG9ydCAnLi4vc3R5bGUuY3NzJztcblxuLy8gaW1wb3J0IHdlYXRoZXIgaWNvbnNcbmltcG9ydCBjbGVhclNreURheSBmcm9tICcuLi9pbWFnZXMvd2VhdGhlci1pY29ucy8wMWQuc3ZnJztcbmltcG9ydCBjbGVhclNreU5pZ2h0IGZyb20gJy4uL2ltYWdlcy93ZWF0aGVyLWljb25zLzAxbi5zdmcnO1xuaW1wb3J0IGZld0Nsb3Vkc0RheSBmcm9tICcuLi9pbWFnZXMvd2VhdGhlci1pY29ucy8wMmQuc3ZnJztcbmltcG9ydCBmZXdDbG91ZHNOaWdodCBmcm9tICcuLi9pbWFnZXMvd2VhdGhlci1pY29ucy8wMm4uc3ZnJztcbmltcG9ydCBzY2F0dGVyZWRDbG91ZHNEYXkgZnJvbSAnLi4vaW1hZ2VzL3dlYXRoZXItaWNvbnMvMDNkLnN2Zyc7XG5pbXBvcnQgc2NhdHRlcmVkQ2xvdWRzTmlnaHQgZnJvbSAnLi4vaW1hZ2VzL3dlYXRoZXItaWNvbnMvMDNuLnN2Zyc7XG5pbXBvcnQgYnJva2VuQ2xvdWRzRGF5IGZyb20gJy4uL2ltYWdlcy93ZWF0aGVyLWljb25zLzA0ZC5zdmcnO1xuaW1wb3J0IGJyb2tlbkNsb3Vkc05pZ2h0IGZyb20gJy4uL2ltYWdlcy93ZWF0aGVyLWljb25zLzA0bi5zdmcnO1xuaW1wb3J0IHNob3dlclJhaW5EYXkgZnJvbSAnLi4vaW1hZ2VzL3dlYXRoZXItaWNvbnMvMDlkLnN2Zyc7XG5pbXBvcnQgc2hvd2VyUmFpbk5pZ2h0IGZyb20gJy4uL2ltYWdlcy93ZWF0aGVyLWljb25zLzA5bi5zdmcnO1xuaW1wb3J0IHJhaW5EYXkgZnJvbSAnLi4vaW1hZ2VzL3dlYXRoZXItaWNvbnMvMTBkLnN2Zyc7XG5pbXBvcnQgcmFpbk5pZ2h0IGZyb20gJy4uL2ltYWdlcy93ZWF0aGVyLWljb25zLzEwbi5zdmcnO1xuaW1wb3J0IHRodW5kZXJzdG9ybURheSBmcm9tICcuLi9pbWFnZXMvd2VhdGhlci1pY29ucy8xMWQuc3ZnJztcbmltcG9ydCB0aHVuZGVyc3Rvcm1OaWdodCBmcm9tICcuLi9pbWFnZXMvd2VhdGhlci1pY29ucy8xMW4uc3ZnJztcbmltcG9ydCBzbm93RGF5IGZyb20gJy4uL2ltYWdlcy93ZWF0aGVyLWljb25zLzEzZC5zdmcnO1xuaW1wb3J0IHNub3dOaWdodCBmcm9tICcuLi9pbWFnZXMvd2VhdGhlci1pY29ucy8xM24uc3ZnJztcbmltcG9ydCBtaXN0RGF5IGZyb20gJy4uL2ltYWdlcy93ZWF0aGVyLWljb25zLzUwZC5zdmcnO1xuaW1wb3J0IG1pc3ROaWdodCBmcm9tICcuLi9pbWFnZXMvd2VhdGhlci1pY29ucy81MG4uc3ZnJztcblxuLy8gaW1wb3J0IGJhY2tncm91bmQgdmlkZW9zXG5pbXBvcnQgaW5pdGlhbFNjcmVlblZpZGVvIGZyb20gJy4uL3ZpZGVvcy9pbml0aWFsLXNjcmVlbi12aWRlby5tcDQnO1xuaW1wb3J0IGNsZWFyRGF5VmlkZW8gZnJvbSAnLi4vdmlkZW9zL2NsZWFyLWRheS5tcDQnO1xuaW1wb3J0IGNsZWFyTmlnaHRWaWRlbyBmcm9tICcuLi92aWRlb3MvY2xlYXItbmlnaHQubXA0JztcbmltcG9ydCBjbG91ZHNEYXlWaWRlbyBmcm9tICcuLi92aWRlb3MvY2xvdWRzLWRheS5tcDQnO1xuaW1wb3J0IGNsb3Vkc05pZ2h0VmlkZW8gZnJvbSAnLi4vdmlkZW9zL2Nsb3Vkcy1uaWdodC5tcDQnO1xuaW1wb3J0IG1pc3REYXlWaWRlbyBmcm9tICcuLi92aWRlb3MvbWlzdC1kYXkubXA0JztcbmltcG9ydCBtaXN0TmlnaHRWaWRlbyBmcm9tICcuLi92aWRlb3MvbWlzdC1uaWdodC5tcDQnO1xuaW1wb3J0IHJhaW5EYXlWaWRlbyBmcm9tICcuLi92aWRlb3MvcmFpbi1kYXkubXA0JztcbmltcG9ydCByYWluTmlnaHRWaWRlbyBmcm9tICcuLi92aWRlb3MvcmFpbi1uaWdodC5tcDQnO1xuaW1wb3J0IHNub3dEYXlWaWRlbyBmcm9tICcuLi92aWRlb3Mvc25vdy1kYXkubXA0JztcbmltcG9ydCBzbm93TmlnaHRWaWRlbyBmcm9tICcuLi92aWRlb3Mvc25vdy1uaWdodC5tcDQnO1xuaW1wb3J0IHRodW5kZXJzdG9ybVZpZGVvIGZyb20gJy4uL3ZpZGVvcy90aHVuZGVyc3Rvcm0ubXA0JztcblxuLy8gaW1wb3J0IHdlYXRoZXIgZGV0YWlscyBpY29uc1xuaW1wb3J0IHRlbXBlcmF0dXJlSWNvblNvdXJjZSBmcm9tICcuLi9pbWFnZXMvdGhlcm1vbWV0ZXIuc3ZnJztcbmltcG9ydCBodW1pZGl0eUljb25Tb3VyY2UgZnJvbSAnLi4vaW1hZ2VzL2h1bWlkaXR5LnN2Zyc7XG5pbXBvcnQgd2luZFNwZWVkSWNvblNvdXJjZSBmcm9tICcuLi9pbWFnZXMvd2luZC1zcGVlZC5zdmcnO1xuXG4vLyBpbXBvcnQgZXJyb3IgbWVzc2FnZ2UgaWNvblxuaW1wb3J0IHdhcm5pbmdJY29uIGZyb20gJy4uL2ltYWdlcy9hdHRlbnRpb24uc3ZnJztcblxubGV0IGxhc3RTZWFyY2ggPSBudWxsO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuY29uc3QgVU5JVFMgPSB7XG4gICAgbWV0cmljOiB7IHRlbXBlcmF0dXJlOiAnwrBDJywgc3BlZWQ6ICdrbS9oJyB9LFxuICAgIGltcGVyaWFsOiB7IHRlbXBlcmF0dXJlOiAnwrBGJywgc3BlZWQ6ICdtL2gnIH1cbn07XG5cbmNvbnN0IERFRkFVTFRfVU5JVCA9ICdtZXRyaWMnO1xuXG5sZXQgY3VycmVudFVuaXQgPSBERUZBVUxUX1VOSVQ7XG5cbmNvbnN0IFdFQVRIRVJfTUVESUEgPSB7XG4gICAgJzAxZCc6IHsgaWNvbjogY2xlYXJTa3lEYXksIHZpZGVvOiBjbGVhckRheVZpZGVvIH0sXG4gICAgJzAxbic6IHsgaWNvbjogY2xlYXJTa3lOaWdodCwgdmlkZW86IGNsZWFyTmlnaHRWaWRlbyB9LFxuICAgICcwMmQnOiB7IGljb246IGZld0Nsb3Vkc0RheSwgdmlkZW86IGNsb3Vkc0RheVZpZGVvIH0sXG4gICAgJzAybic6IHsgaWNvbjogZmV3Q2xvdWRzTmlnaHQsIHZpZGVvOiBjbG91ZHNOaWdodFZpZGVvIH0sXG4gICAgJzAzZCc6IHsgaWNvbjogc2NhdHRlcmVkQ2xvdWRzRGF5LCB2aWRlbzogY2xvdWRzRGF5VmlkZW8gfSxcbiAgICAnMDNuJzogeyBpY29uOiBzY2F0dGVyZWRDbG91ZHNOaWdodCwgdmlkZW86IGNsb3Vkc05pZ2h0VmlkZW8gfSxcbiAgICAnMDRkJzogeyBpY29uOiBicm9rZW5DbG91ZHNEYXksIHZpZGVvOiBjbG91ZHNEYXlWaWRlbyB9LFxuICAgICcwNG4nOiB7IGljb246IGJyb2tlbkNsb3Vkc05pZ2h0LCB2aWRlbzogY2xvdWRzTmlnaHRWaWRlbyB9LFxuICAgICcwOWQnOiB7IGljb246IHNob3dlclJhaW5EYXksIHZpZGVvOiByYWluRGF5VmlkZW8gfSxcbiAgICAnMDluJzogeyBpY29uOiBzaG93ZXJSYWluTmlnaHQsIHZpZGVvOiByYWluTmlnaHRWaWRlbyB9LFxuICAgICcxMGQnOiB7IGljb246IHJhaW5EYXksIHZpZGVvOiByYWluRGF5VmlkZW8gfSxcbiAgICAnMTBuJzogeyBpY29uOiByYWluTmlnaHQsIHZpZGVvOiByYWluTmlnaHRWaWRlbyB9LFxuICAgICcxMWQnOiB7IGljb246IHRodW5kZXJzdG9ybURheSwgdmlkZW86IHRodW5kZXJzdG9ybVZpZGVvIH0sXG4gICAgJzExbic6IHsgaWNvbjogdGh1bmRlcnN0b3JtTmlnaHQsIHZpZGVvOiB0aHVuZGVyc3Rvcm1WaWRlbyB9LFxuICAgICcxM2QnOiB7IGljb246IHNub3dEYXksIHZpZGVvOiBzbm93RGF5VmlkZW8gfSxcbiAgICAnMTNuJzogeyBpY29uOiBzbm93TmlnaHQsIHZpZGVvOiBzbm93TmlnaHRWaWRlbyB9LFxuICAgICc1MGQnOiB7IGljb246IG1pc3REYXksIHZpZGVvOiBtaXN0RGF5VmlkZW8gfSxcbiAgICAnNTBuJzogeyBpY29uOiBtaXN0TmlnaHQsIHZpZGVvOiBtaXN0TmlnaHRWaWRlbyB9XG59O1xuXG5mdW5jdGlvbiBkaXNwbGF5RXJyb3JNZXNzYWdlKCkge1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1tZXNzYWdlJyk7XG4gICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgICBlcnJvck1lc3NhZ2UuaW5uZXJUZXh0ID1cbiAgICAgICAgICAgICdTb21ldGhpbmcgd2VudCB3cm9uZy4gTWFrZSBzdXJlIHlvdSBlbnRlciBhIHZhbGlkIGxvY2F0aW9uISc7XG4gICAgfVxuXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlQ29udGFpbmVyID0gZXJyb3JNZXNzYWdlLnBhcmVudEVsZW1lbnQ7XG4gICAgaWYgKGVycm9yTWVzc2FnZUNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlMb2FkaW5nU2NyZWVuKCkge1xuICAgIGNvbnN0IGFscmVhZHlPblNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkaW5nLXNjcmVlbicpO1xuICAgIGlmIChhbHJlYWR5T25TY3JlZW4pIHJldHVybjtcblxuICAgIGNvbnN0IGxvYWRpbmdTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgbG9hZGluZ1NjcmVlbi5pZCA9ICdsb2FkaW5nLXNjcmVlbic7XG5cbiAgICBjb25zdCBsb2FkaW5nVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsb2FkaW5nVGV4dC5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nLXRleHQnKTtcbiAgICBsb2FkaW5nVGV4dC5pbm5lclRleHQgPSAnTE9BRElORy4uLic7XG4gICAgbG9hZGluZ1NjcmVlbi5hcHBlbmRDaGlsZChsb2FkaW5nVGV4dCk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG9hZGluZ1NjcmVlbik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUxvYWRpbmdTY3JlZW4oKSB7XG4gICAgY29uc3QgbG9hZGluZ1NjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkaW5nLXNjcmVlbicpO1xuICAgIGlmIChsb2FkaW5nU2NyZWVuKSBsb2FkaW5nU2NyZWVuLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDdXN0b21DdXJzb3IoKSB7XG4gICAgY29uc3QgY3VzdG9tQ3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGN1c3RvbUN1cnNvci5pZCA9ICdjdXN0b20tY3Vyc29yJztcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3VzdG9tQ3Vyc29yKTtcblxuICAgIGNvbnN0IGN1c3RvbUN1cnNvcldpZHRoID0gd2luZG93XG4gICAgICAgIC5nZXRDb21wdXRlZFN0eWxlKGN1c3RvbUN1cnNvcilcbiAgICAgICAgLmdldFByb3BlcnR5VmFsdWUoJ3dpZHRoJyk7XG5cbiAgICBsZXQgaGlkZUN1cnNvclRpbWVyID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIGhpZGVDdXJzb3IoKSB7XG4gICAgICAgIGN1c3RvbUN1cnNvci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlU3VyZUN1cnNvcklzVmlzaWJsZSgpIHtcbiAgICAgICAgaWYgKGN1c3RvbUN1cnNvci5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICAgICAgICBjdXN0b21DdXJzb3IuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGhpZGVDdXJzb3JUaW1lcikge1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChoaWRlQ3Vyc29yVGltZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFrZVN1cmVDdXJzb3JJc1Zpc2libGUoKTtcblxuICAgICAgICBoaWRlQ3Vyc29yVGltZXIgPSB3aW5kb3cuc2V0VGltZW91dChoaWRlQ3Vyc29yLCAzMDAwKTtcblxuICAgICAgICBjdXN0b21DdXJzb3Iuc3R5bGUubGVmdCA9IGBjYWxjKCR7ZXZlbnQuY2xpZW50WH1weCAtICR7Y3VzdG9tQ3Vyc29yV2lkdGh9LzIpYDtcbiAgICAgICAgY3VzdG9tQ3Vyc29yLnN0eWxlLnRvcCA9IGBjYWxjKCR7ZXZlbnQuY2xpZW50WX1weCAtICR7Y3VzdG9tQ3Vyc29yV2lkdGh9LzIpYDtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ3VzdG9tQ3Vyc29yKCkge1xuICAgIGNvbnN0IGN1c3RvbUN1cnNvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXN0b20tY3Vyc29yJyk7XG4gICAgaWYgKGN1c3RvbUN1cnNvcikgY3VzdG9tQ3Vyc29yLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVDdXN0b21DdXJzb3IoKSB7XG4gICAgY29uc3QgY3VzdG9tQ3Vyc29yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1c3RvbS1jdXJzb3InKTtcbiAgICBpZiAoY3VzdG9tQ3Vyc29yKSB7XG4gICAgICAgIHJlbW92ZUN1c3RvbUN1cnNvcigpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNyZWF0ZUN1c3RvbUN1cnNvcigpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9ICduby1jdXJzb3InO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheUluaXRpYWxTY3JlZW4oKSB7XG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICBtYWluLmlkID0gJ2luaXRpYWwtc2NyZWVuJztcblxuICAgIGRpc3BsYXlMb2FkaW5nU2NyZWVuKCk7XG5cbiAgICAvLyByZXNldCBjdXN0b20gY3Vyc29yXG4gICAgY29uc3QgY3VzdG9tQ3Vyc29yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1c3RvbS1jdXJzb3InKTtcbiAgICBpZiAoY3VzdG9tQ3Vyc29yKSBjdXN0b21DdXJzb3IuY2xhc3NOYW1lID0gJyc7XG5cbiAgICBjb25zdCBiYWNrZ3JvdW5kVmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgIGJhY2tncm91bmRWaWRlby5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kLXZpZGVvJyk7XG4gICAgYmFja2dyb3VuZFZpZGVvLmlkID0gJ2luaXRpYWwtc2NyZWVuLXZpZGVvJztcbiAgICBiYWNrZ3JvdW5kVmlkZW8uc3JjID0gaW5pdGlhbFNjcmVlblZpZGVvO1xuICAgIGJhY2tncm91bmRWaWRlby5tdXRlZCA9IHRydWU7XG4gICAgYmFja2dyb3VuZFZpZGVvLmF1dG9wbGF5ID0gdHJ1ZTtcbiAgICBiYWNrZ3JvdW5kVmlkZW8ubG9vcCA9IHRydWU7XG4gICAgYmFja2dyb3VuZFZpZGVvLm9ubG9hZGVkZGF0YSA9IHJlbW92ZUxvYWRpbmdTY3JlZW47XG4gICAgbWFpbi5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kVmlkZW8pO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGUuaWQgPSAndGl0bGUnO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiV2hhdCdzIHRoZSB3ZWF0aGVyIGxpa2UgaW4uLi5cIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc2VhcmNoQmFyLmlkID0gJ3NlYXJjaC1iYXInO1xuICAgIHNlYXJjaEJhci50eXBlID0gJ3RleHQnO1xuICAgIHNlYXJjaEJhci5hdXRvY29tcGxldGUgPSAnb2ZmJztcbiAgICBzZWFyY2hCYXIucGxhY2Vob2xkZXIgPSAnRW50ZXIgYSBjaXR5JztcbiAgICBtYWluLmFwcGVuZENoaWxkKHNlYXJjaEJhcik7XG5cbiAgICBjb25zdCBlcnJvck1lc3NhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgZXJyb3JNZXNzYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Vycm9yLW1lc3NhZ2UtY29udGFpbmVyJywgJ2hpZGRlbicpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBlcnJvck1lc3NhZ2VJY29uLnNyYyA9IHdhcm5pbmdJY29uO1xuICAgIGVycm9yTWVzc2FnZUljb24uY2xhc3NMaXN0LmFkZCgnZXJyb3ItbWVzc2FnZS1pY29uJyk7XG4gICAgZXJyb3JNZXNzYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGVycm9yTWVzc2FnZUljb24pO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnZXJyb3ItbWVzc2FnZScpO1xuICAgIGVycm9yTWVzc2FnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChlcnJvck1lc3NhZ2UpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZXJyb3JNZXNzYWdlQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGN1c3RvbUN1cnNvclRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjdXN0b21DdXJzb3JUb2dnbGUuaWQgPSAnY3VzdG9tLWN1cnNvci10b2dnbGUnO1xuICAgIGN1c3RvbUN1cnNvclRvZ2dsZS5pbm5lclRleHQgPSAnVG9nZ2xlIGN1c3RvbSBjdXJzb3InO1xuICAgIGN1c3RvbUN1cnNvclRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUN1c3RvbUN1cnNvcik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjdXN0b21DdXJzb3JUb2dnbGUpO1xufVxuXG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmdbMF0udG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVdlYXRoZXJJbmZvcm1hdGlvblNjcmVlbih3ZWF0aGVyRGF0YSwgdW5pdCkge1xuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgbWFpbi5pZCA9ICd3ZWF0aGVyLWluZm9ybWF0aW9uLXNjcmVlbic7XG5cbiAgICAvLyBzZXQgY3VzdG9tIGN1cnNvclxuICAgIGNvbnN0IGN1c3RvbUN1cnNvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXN0b20tY3Vyc29yJyk7XG4gICAgaWYgKGN1c3RvbUN1cnNvcikge1xuICAgICAgICBpZiAodW5pdCA9PT0gJ21ldHJpYycpIHtcbiAgICAgICAgICAgIGN1c3RvbUN1cnNvci5jbGFzc05hbWUgPVxuICAgICAgICAgICAgICAgIHdlYXRoZXJEYXRhLnRlbXBlcmF0dXJlID4gMTUgPyAnaG90JyA6ICdjb2xkJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1c3RvbUN1cnNvci5jbGFzc05hbWUgPVxuICAgICAgICAgICAgICAgIHdlYXRoZXJEYXRhLnRlbXBlcmF0dXJlID4gNjAgPyAnaG90JyA6ICdjb2xkJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGJhY2tncm91bmRWaWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgYmFja2dyb3VuZFZpZGVvLmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmQtdmlkZW8nKTtcbiAgICBiYWNrZ3JvdW5kVmlkZW8uc3JjID0gV0VBVEhFUl9NRURJQVt3ZWF0aGVyRGF0YS53ZWF0aGVySWNvbklkXS52aWRlbztcbiAgICBiYWNrZ3JvdW5kVmlkZW8ubXV0ZWQgPSB0cnVlO1xuICAgIGJhY2tncm91bmRWaWRlby5hdXRvcGxheSA9IHRydWU7XG4gICAgYmFja2dyb3VuZFZpZGVvLmxvb3AgPSB0cnVlO1xuICAgIGJhY2tncm91bmRWaWRlby5vbmxvYWRlZGRhdGEgPSByZW1vdmVMb2FkaW5nU2NyZWVuO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoYmFja2dyb3VuZFZpZGVvKTtcblxuICAgIGNvbnN0IHRvcFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgdG9wV3JhcHBlci5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyJyk7XG4gICAgdG9wV3JhcHBlci5pZCA9ICd0b3AnO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQodG9wV3JhcHBlcik7XG5cbiAgICBjb25zdCBnb0JhY2tBcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBnb0JhY2tBcnJvdy5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1jaXJjbGUtY2hldnJvbi1sZWZ0Jyk7XG4gICAgZ29CYWNrQXJyb3cuaWQgPSAnZ28tYmFjay1idXR0b24nO1xuICAgIGdvQmFja0Fycm93LnRpdGxlID0gJ0dPIEJBQ0snO1xuICAgIGdvQmFja0Fycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUluaXRpYWxTY3JlZW4pO1xuICAgIHRvcFdyYXBwZXIuYXBwZW5kQ2hpbGQoZ29CYWNrQXJyb3cpO1xuXG4gICAgY29uc3QgY2l0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNpdHlUaXRsZS5pZCA9ICdjaXR5LXRpdGxlJztcbiAgICAvLyBJZiBpdCdzIHRoZSBVUywgdGhlbiBzaG93IHRoZSBzdGF0ZSBpbnN0ZWFkIG9mIHRoZSBjb3VudHJ5XG4gICAgY2l0eVRpdGxlLmlubmVyVGV4dCA9IGAke3dlYXRoZXJEYXRhLmNpdHl9LCAke1xuICAgICAgICB3ZWF0aGVyRGF0YS5jb3VudHJ5Q29kZSA9PT0gJ1VTJ1xuICAgICAgICAgICAgPyB3ZWF0aGVyRGF0YS5zdGF0ZVxuICAgICAgICAgICAgOiB3ZWF0aGVyRGF0YS5jb3VudHJ5Q29kZVxuICAgIH1gO1xuICAgIHRvcFdyYXBwZXIuYXBwZW5kQ2hpbGQoY2l0eVRpdGxlKTtcblxuICAgIGNvbnN0IGNlbnRyYWxXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNlbnRyYWxXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXInKTtcbiAgICBjZW50cmFsV3JhcHBlci5pZCA9ICdjZW50cmFsJztcbiAgICBtYWluLmFwcGVuZENoaWxkKGNlbnRyYWxXcmFwcGVyKTtcblxuICAgIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgd2VhdGhlckljb24uaWQgPSAnd2VhdGhlci1pY29uJztcbiAgICB3ZWF0aGVySWNvbi5zcmMgPSBXRUFUSEVSX01FRElBW3dlYXRoZXJEYXRhLndlYXRoZXJJY29uSWRdLmljb247XG4gICAgd2VhdGhlckljb24uYWx0ID0gYCR7d2VhdGhlckRhdGEud2VhdGhlcn0gd2VhdGhlciBpY29uYDtcbiAgICBjZW50cmFsV3JhcHBlci5hcHBlbmRDaGlsZCh3ZWF0aGVySWNvbik7XG5cbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZW1wZXJhdHVyZS5pZCA9ICd0ZW1wZXJhdHVyZSc7XG4gICAgdGVtcGVyYXR1cmUuaW5uZXJUZXh0ID0gYCR7d2VhdGhlckRhdGEudGVtcGVyYXR1cmV9ICR7VU5JVFNbdW5pdF0udGVtcGVyYXR1cmV9YDtcbiAgICBjZW50cmFsV3JhcHBlci5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZSk7XG5cbiAgICBjb25zdCB1bml0c1RvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB1bml0c1RvZ2dsZS5pZCA9ICd1bml0cy10b2dnbGUnO1xuICAgIHVuaXRzVG9nZ2xlLmlubmVyVGV4dCA9IGBEaXNwbGF5ICR7dW5pdCA9PT0gJ21ldHJpYycgPyAnwrBGJyA6ICfCsEMnfWA7XG4gICAgdW5pdHNUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVVbml0cyk7XG4gICAgY2VudHJhbFdyYXBwZXIuYXBwZW5kQ2hpbGQodW5pdHNUb2dnbGUpO1xuXG4gICAgY29uc3QgYm90dG9tTGVmdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgYm90dG9tTGVmdFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpO1xuICAgIGJvdHRvbUxlZnRXcmFwcGVyLmlkID0gJ2JvdHRvbS1sZWZ0JztcbiAgICBtYWluLmFwcGVuZENoaWxkKGJvdHRvbUxlZnRXcmFwcGVyKTtcblxuICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBmZWVsc0xpa2UuY2xhc3NMaXN0LmFkZCgnZGV0YWlscycpO1xuICAgIGZlZWxzTGlrZS5pZCA9ICdmZWVscy1saWtlJztcbiAgICBjb25zdCBmZWVsc0xpa2VJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZmVlbHNMaWtlSWNvbi5zcmMgPSB0ZW1wZXJhdHVyZUljb25Tb3VyY2U7XG4gICAgZmVlbHNMaWtlSWNvbi5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzLWljb24nKTtcbiAgICBmZWVsc0xpa2UuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlSWNvbik7XG4gICAgY29uc3QgZmVlbHNMaWtlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZmVlbHNMaWtlVGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICBmZWVsc0xpa2VUaXRsZS5pbm5lclRleHQgPSAnRmVlbHMgbGlrZTogJztcbiAgICBmZWVsc0xpa2UuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlVGl0bGUpO1xuICAgIGNvbnN0IGZlZWxzTGlrZVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGZlZWxzTGlrZVZhbHVlLmNsYXNzTGlzdC5hZGQoJ3ZhbHVlJyk7XG4gICAgZmVlbHNMaWtlVmFsdWUuaW5uZXJUZXh0ID0gYCR7d2VhdGhlckRhdGEuZmVlbHNMaWtlfSAke1VOSVRTW3VuaXRdLnRlbXBlcmF0dXJlfWA7XG4gICAgZmVlbHNMaWtlLmFwcGVuZENoaWxkKGZlZWxzTGlrZVZhbHVlKTtcbiAgICBib3R0b21MZWZ0V3JhcHBlci5hcHBlbmRDaGlsZChmZWVsc0xpa2UpO1xuXG4gICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgaHVtaWRpdHkuY2xhc3NMaXN0LmFkZCgnZGV0YWlscycpO1xuICAgIGh1bWlkaXR5LmlkID0gJ2h1bWlkaXR5JztcbiAgICBjb25zdCBodW1pZGl0eUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBodW1pZGl0eUljb24uc3JjID0gaHVtaWRpdHlJY29uU291cmNlO1xuICAgIGh1bWlkaXR5SWNvbi5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzLWljb24nKTtcbiAgICBodW1pZGl0eS5hcHBlbmRDaGlsZChodW1pZGl0eUljb24pO1xuICAgIGNvbnN0IGh1bWlkaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgaHVtaWRpdHlUaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIGh1bWlkaXR5VGl0bGUuaW5uZXJUZXh0ID0gJ0h1bWlkaXR5OiAnO1xuICAgIGh1bWlkaXR5LmFwcGVuZENoaWxkKGh1bWlkaXR5VGl0bGUpO1xuICAgIGNvbnN0IGh1bWlkaXR5VmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgaHVtaWRpdHlWYWx1ZS5jbGFzc0xpc3QuYWRkKCd2YWx1ZScpO1xuICAgIGh1bWlkaXR5VmFsdWUuaW5uZXJUZXh0ID0gYCR7d2VhdGhlckRhdGEuaHVtaWRpdHl9JWA7XG4gICAgaHVtaWRpdHkuYXBwZW5kQ2hpbGQoaHVtaWRpdHlWYWx1ZSk7XG4gICAgYm90dG9tTGVmdFdyYXBwZXIuYXBwZW5kQ2hpbGQoaHVtaWRpdHkpO1xuXG4gICAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIHdpbmRTcGVlZC5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzJyk7XG4gICAgd2luZFNwZWVkLmlkID0gJ3dpbmQtc3BlZWQnO1xuICAgIGNvbnN0IHdpbmRTcGVlZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB3aW5kU3BlZWRJY29uLnNyYyA9IHdpbmRTcGVlZEljb25Tb3VyY2U7XG4gICAgd2luZFNwZWVkSWNvbi5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzLWljb24nKTtcbiAgICB3aW5kU3BlZWQuYXBwZW5kQ2hpbGQod2luZFNwZWVkSWNvbik7XG4gICAgY29uc3Qgd2luZFNwZWVkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgd2luZFNwZWVkVGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICB3aW5kU3BlZWRUaXRsZS5pbm5lclRleHQgPSAnV2luZCBzcGVlZDogJztcbiAgICB3aW5kU3BlZWQuYXBwZW5kQ2hpbGQod2luZFNwZWVkVGl0bGUpO1xuICAgIGNvbnN0IHdpbmRTcGVlZFZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHdpbmRTcGVlZFZhbHVlLmNsYXNzTGlzdC5hZGQoJ3ZhbHVlJyk7XG4gICAgd2luZFNwZWVkVmFsdWUuaW5uZXJUZXh0ID0gYCR7d2VhdGhlckRhdGEud2luZFNwZWVkfSAke1VOSVRTW3VuaXRdLnNwZWVkfWA7XG4gICAgd2luZFNwZWVkLmFwcGVuZENoaWxkKHdpbmRTcGVlZFZhbHVlKTtcbiAgICBib3R0b21MZWZ0V3JhcHBlci5hcHBlbmRDaGlsZCh3aW5kU3BlZWQpO1xuXG4gICAgY29uc3QgYm90dG9tUmlnaHRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGJvdHRvbVJpZ2h0V3JhcHBlci5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyJyk7XG4gICAgYm90dG9tUmlnaHRXcmFwcGVyLmlkID0gJ2JvdHRvbS1yaWdodCc7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChib3R0b21SaWdodFdyYXBwZXIpO1xuXG4gICAgY29uc3Qgd2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB3ZWF0aGVyLmlkID0gJ3dlYXRoZXInO1xuICAgIHdlYXRoZXIuaW5uZXJUZXh0ID0gd2VhdGhlckRhdGEud2VhdGhlcjtcbiAgICBib3R0b21SaWdodFdyYXBwZXIuYXBwZW5kQ2hpbGQod2VhdGhlcik7XG5cbiAgICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgd2VhdGhlckRlc2NyaXB0aW9uLmlkID0gJ3dlYXRoZXItZGVzY3JpcHRpb24nO1xuICAgIHdlYXRoZXJEZXNjcmlwdGlvbi5pbm5lclRleHQgPSBjYXBpdGFsaXplKHdlYXRoZXJEYXRhLndlYXRoZXJEZXNjcmlwdGlvbik7XG4gICAgYm90dG9tUmlnaHRXcmFwcGVyLmFwcGVuZENoaWxkKHdlYXRoZXJEZXNjcmlwdGlvbik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEFuZERpc3BsYXlXZWF0aGVyRGF0YShsb2NhdGlvbiwgdW5pdCkge1xuICAgIGRpc3BsYXlMb2FkaW5nU2NyZWVuKCk7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbiwgdW5pdCk7XG4gICAgICAgIGRpc3BsYXlXZWF0aGVySW5mb3JtYXRpb25TY3JlZW4od2VhdGhlckRhdGEsIHVuaXQpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgICByZW1vdmVMb2FkaW5nU2NyZWVuKCk7XG4gICAgICAgIGRpc3BsYXlFcnJvck1lc3NhZ2UoKTtcbiAgICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IG5vdEluSW5pdGlhbFNjcmVlbiA9ICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5pdGlhbC1zY3JlZW4nKTtcbiAgICBpZiAobm90SW5Jbml0aWFsU2NyZWVuKSByZXR1cm47XG5cbiAgICBjb25zdCBlbnRlcktleVdhc1ByZXNzZWQgPSBldmVudC5rZXkgPT09ICdFbnRlcic7XG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1iYXInKTtcbiAgICBjb25zdCBzZWFyY2hCYXJJc0ZvY3VzZWQgPSBzZWFyY2hCYXIgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKGVudGVyS2V5V2FzUHJlc3NlZCAmJiBzZWFyY2hCYXJJc0ZvY3VzZWQpIHtcbiAgICAgICAgZ2V0QW5kRGlzcGxheVdlYXRoZXJEYXRhKHNlYXJjaEJhci52YWx1ZSwgY3VycmVudFVuaXQpO1xuICAgICAgICBsYXN0U2VhcmNoID0gc2VhcmNoQmFyLnZhbHVlO1xuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiB0b2dnbGVVbml0cygpIHtcbiAgICBpZiAoY3VycmVudFVuaXQgPT09ICdtZXRyaWMnKSB7XG4gICAgICAgIGN1cnJlbnRVbml0ID0gJ2ltcGVyaWFsJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50VW5pdCA9ICdtZXRyaWMnO1xuICAgIH1cbiAgICBnZXRBbmREaXNwbGF5V2VhdGhlckRhdGEobGFzdFNlYXJjaCwgY3VycmVudFVuaXQpO1xufVxuXG4vLyBJIGFkZGVkIHRoaXMgbmV4dCBmdW5jdGlvbiBhbmQgZXZlbnQgbGlzdGVuZXJzIGJlY2F1c2Ugc2V0dGluZyB0aGUgaGVpZ2h0IHRvIDEwMHZoIHdhcyBnaXZpbmcgbWUgc29tZSBwcm9ibGVtcyBpbiBtb2JpbGUgcGhvbmVzLlxuLy8gSSBmb3VuZCB0aGlzIHZlcnkgdXNlZnVsIGFydGljbGUgZXhwbGFpbmluZyB3aGF0IHRoZSBwcm9ibGVtIHdhcyBhbmQgaG93IHRvIGZpeCBpdDpcbi8vIGh0dHBzOi8vaWx4YW5sYXIubWVkaXVtLmNvbS95b3Utc2hvdWxkbnQtcmVseS1vbi1jc3MtMTAwdmgtYW5kLWhlcmUtcy13aHktMWI0NzIxZTc0NDg3XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUFuZFNldFZpZXdwb3J0SGVpZ2h0KCkge1xuICAgIGNvbnN0IHZpZXdwb3J0SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogMC4wMTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmgnLCBgJHt2aWV3cG9ydEhlaWdodH1weGApO1xufVxuXG5jYWxjdWxhdGVBbmRTZXRWaWV3cG9ydEhlaWdodCgpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNhbGN1bGF0ZUFuZFNldFZpZXdwb3J0SGVpZ2h0KTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIGNhbGN1bGF0ZUFuZFNldFZpZXdwb3J0SGVpZ2h0KTtcblxuZGlzcGxheUluaXRpYWxTY3JlZW4oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
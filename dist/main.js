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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    font-size: 16px;\n    font-family: 'Roboto', sans-serif;\n}\n\nbody {\n    margin: 0;\n    overflow: hidden;\n}\n\nbody.no-cursor {\n    cursor: none;\n}\n\nmain {\n    position: relative;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n}\n\nmain .background-video {\n    position: absolute;\n    z-index: -1;\n    min-width: 100%;\n    min-height: 100%;\n}\n\n/* Custom cursor */\n\n#custom-cursor {\n    pointer-events: none;\n    position: absolute;\n    width: 120px;\n    aspect-ratio: 1/1;\n    z-index: -1;\n    opacity: 1;\n    transition: opacity 1s;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    background-position-y: center;\n    background-repeat: no-repeat;\n    animation: traverse-sprite 2s steps(239) infinite;\n}\n\n#custom-cursor.hot {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    animation: traverse-sprite 2s steps(59) infinite;\n    width: 150px;\n}\n\n#custom-cursor.cold {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    animation: traverse-sprite 2s steps(47) infinite;\n}\n\n@keyframes traverse-sprite {\n    0% {\n        background-position-x: 0;\n    }\n    100% {\n        background-position-x: 100%;\n    }\n}\n\n#custom-cursor.hidden {\n    opacity: 0;\n}\n\n/* Initial screen */\n\n#initial-screen {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n#initial-screen #title {\n    margin: calc(40vh - 5.5rem) 0 0;\n    font-size: 4rem;\n    font-weight: 900;\n    color: white;\n}\n\n#initial-screen #search-bar {\n    background-color: transparent;\n    color: white;\n    caret-color: white;\n    font-size: 1.5rem;\n    width: min(500px, 80%);\n    margin-top: 10px;\n    padding: 10px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-repeat: no-repeat;\n    background-size: 30px;\n    background-position-x: calc(100% - 10px);\n    background-position-y: center;\n    border-style: none;\n    border-bottom: solid 4px white;\n}\n\n#initial-screen #search-bar::placeholder {\n    color: white;\n}\n\n#initial-screen #search-bar:focus-visible {\n    outline: none;\n}\n\n#initial-screen .error-message-container {\n    display: flex;\n    height: 2rem;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    background-color: rgba(0, 0, 0, 0.3);\n    padding: 0.5rem 1rem;\n    margin-top: 1rem;\n    backdrop-filter: blur(1px);\n    border-radius: 10px;\n    color: red;\n}\n\n#initial-screen .error-message-container.hidden {\n    display: none;\n}\n\n#initial-screen .error-message-icon {\n    width: 1.5rem;\n}\n\n#initial-screen #custom-cursor-toggle {\n    color: white;\n    position: absolute;\n    bottom: 1rem;\n    left: 1rem;\n    margin: 0;\n    background-color: rgba(0, 0, 0, 0.8);\n    backdrop-filter: blur(2px);\n    padding: 0.5rem;\n    border-radius: 0.5rem;\n    cursor: pointer;\n    opacity: 0.7;\n    transition: opacity 0.3s;\n}\n\nbody.no-cursor #initial-screen #custom-cursor-toggle {\n    border: solid 1px rgba(255, 255, 255, 0.8);\n}\n\n#initial-screen #custom-cursor-toggle:hover {\n    opacity: 1;\n}\n\n#initial-screen #custom-cursor-toggle:after {\n    content: '';\n    display: block;\n    height: 1px;\n    left: 50%;\n    position: absolute;\n    background: white;\n    transition: width 0.3s ease 0s, left 0.3s ease 0s;\n    width: 0;\n}\n\n#initial-screen #custom-cursor-toggle:hover:after {\n    width: 90%;\n    left: 5%;\n}\n\n/* Information screen */\n\n#weather-information-screen {\n    color: white;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: min-content minmax(min-content, 1fr) min-content;\n    grid-template-areas:\n        'top top'\n        'center center'\n        'bottom-left bottom-right';\n    box-sizing: border-box;\n    padding: 1.5rem;\n}\n\n#weather-information-screen .wrapper#top {\n    grid-area: top;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 1.5rem;\n    font-size: 2rem;\n    font-weight: 900;\n    filter: drop-shadow(0px 0px 2px rgb(60 60 60));\n}\n\n#weather-information-screen #go-back-button {\n    font-size: 2rem;\n    cursor: pointer;\n    filter: brightness(0.8);\n    transition: filter 0.2s;\n}\n\n#weather-information-screen p#city-title {\n    margin: 0;\n}\n\n#weather-information-screen #go-back-button:hover {\n    filter: brightness(1);\n}\n\n#weather-information-screen .wrapper#central {\n    grid-area: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    filter: drop-shadow(0px 0px 2px rgb(60 60 60));\n}\n\n#weather-information-screen img#weather-icon {\n    width: min(400px, 70%);\n}\n\n#weather-information-screen p#temperature {\n    margin: 0;\n    font-size: 4rem;\n    font-weight: 900;\n}\n\n#weather-information-screen p#units-toggle {\n    margin: 0;\n    cursor: pointer;\n    font-size: 1.2rem;\n    position: relative;\n}\n\n#weather-information-screen p#units-toggle:after {\n    content: '';\n    display: block;\n    height: 2px;\n    left: 50%;\n    position: absolute;\n    background: white;\n    transition: width 0.3s ease 0s, left 0.3s ease 0s;\n    width: 0;\n}\n\n#weather-information-screen p#units-toggle:hover:after {\n    width: 100%;\n    left: 0;\n}\n\n#weather-information-screen .wrapper#bottom-left {\n    grid-area: bottom-left;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: space-evenly;\n    gap: 1rem;\n    filter: drop-shadow(0px 0px 2px rgb(60 60 60));\n}\n\n#weather-information-screen .details {\n    display: flex;\n}\n\n#weather-information-screen .details-icon {\n    width: 2rem;\n    margin-right: 0.5rem;\n}\n\n#weather-information-screen .details > .title {\n    margin-right: 1rem;\n}\n\n#weather-information-screen .details > .value {\n    font-weight: 900;\n}\n\n#weather-information-screen .wrapper#bottom-right {\n    grid-area: bottom-right;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: flex-end;\n    filter: drop-shadow(0px 0px 2px rgb(60 60 60));\n}\n\n#weather-information-screen .wrapper#bottom-right #weather {\n    margin: 0;\n    font-size: 4rem;\n    font-weight: 900;\n}\n\n#weather-information-screen .wrapper#bottom-right #weather-description {\n    margin: 0;\n    font-size: 1.5rem;\n}\n\n/* Loading screen */\n\n#loading-screen {\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    top: 0;\n    animation: fade-in 0.05s ease-in forwards;\n    pointer-events: none;\n    background-color: rgba(0, 0, 0, 0.95);\n    backdrop-filter: blur(4px);\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    box-sizing: border-box;\n    padding: 1rem;\n    color: white;\n    font-size: 1.2rem;\n}\n\n@keyframes fade-in {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n.loading-text {\n    margin: 0;\n    animation: breath 1.5s linear infinite;\n}\n\n@keyframes breath {\n    0% {\n        opacity: 0;\n    }\n    40%,\n    60% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n/* Media queries for responsiveness */\n\n@media (orientation: portrait), (max-width: 600px) {\n    :root {\n        font-size: 10px;\n    }\n    #initial-screen #title {\n        font-size: 2.5rem;\n    }\n    #initial-screen #custom-cursor-toggle {\n        display: none;\n    }\n    body {\n        cursor: initial !important;\n    }\n    #custom-cursor {\n        display: none !important;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,iCAAiC;AACrC;;AAEA;IACI,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,eAAe;IACf,gBAAgB;AACpB;;AAEA,kBAAkB;;AAElB;IACI,oBAAoB;IACpB,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,WAAW;IACX,UAAU;IACV,sBAAsB;IACtB,yDAA0D;IAC1D,sBAAsB;IACtB,6BAA6B;IAC7B,4BAA4B;IAC5B,iDAAiD;AACrD;;AAEA;IACI,yDAA2D;IAC3D,gDAAgD;IAChD,YAAY;AAChB;;AAEA;IACI,yDAAyD;IACzD,gDAAgD;AACpD;;AAEA;IACI;QACI,wBAAwB;IAC5B;IACA;QACI,2BAA2B;IAC/B;AACJ;;AAEA;IACI,UAAU;AACd;;AAEA,mBAAmB;;AAEnB;IACI,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;IACI,+BAA+B;IAC/B,eAAe;IACf,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,6BAA6B;IAC7B,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,sBAAsB;IACtB,gBAAgB;IAChB,aAAa;IACb,yDAAiD;IACjD,4BAA4B;IAC5B,qBAAqB;IACrB,wCAAwC;IACxC,6BAA6B;IAC7B,kBAAkB;IAClB,8BAA8B;AAClC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,oCAAoC;IACpC,oBAAoB;IACpB,gBAAgB;IAChB,0BAA0B;IAC1B,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,UAAU;IACV,SAAS;IACT,oCAAoC;IACpC,0BAA0B;IAC1B,eAAe;IACf,qBAAqB;IACrB,eAAe;IACf,YAAY;IACZ,wBAAwB;AAC5B;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;IACX,cAAc;IACd,WAAW;IACX,SAAS;IACT,kBAAkB;IAClB,iBAAiB;IACjB,iDAAiD;IACjD,QAAQ;AACZ;;AAEA;IACI,UAAU;IACV,QAAQ;AACZ;;AAEA,uBAAuB;;AAEvB;IACI,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,oEAAoE;IACpE;;;kCAG8B;IAC9B,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,8CAA8C;AAClD;;AAEA;IACI,eAAe;IACf,eAAe;IACf,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,mBAAmB;IACnB,8CAA8C;AAClD;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,eAAe;IACf,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,WAAW;IACX,SAAS;IACT,kBAAkB;IAClB,iBAAiB;IACjB,iDAAiD;IACjD,QAAQ;AACZ;;AAEA;IACI,WAAW;IACX,OAAO;AACX;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,6BAA6B;IAC7B,SAAS;IACT,8CAA8C;AAClD;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,qBAAqB;IACrB,8CAA8C;AAClD;;AAEA;IACI,SAAS;IACT,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,iBAAiB;AACrB;;AAEA,mBAAmB;;AAEnB;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,MAAM;IACN,yCAAyC;IACzC,oBAAoB;IACpB,qCAAqC;IACrC,0BAA0B;IAC1B,aAAa;IACb,yBAAyB;IACzB,qBAAqB;IACrB,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI;QACI,UAAU;IACd;IACA;QACI,UAAU;IACd;AACJ;;AAEA;IACI,SAAS;IACT,sCAAsC;AAC1C;;AAEA;IACI;QACI,UAAU;IACd;IACA;;QAEI,UAAU;IACd;IACA;QACI,UAAU;IACd;AACJ;;AAEA,qCAAqC;;AAErC;IACI;QACI,eAAe;IACnB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,aAAa;IACjB;IACA;QACI,0BAA0B;IAC9B;IACA;QACI,wBAAwB;IAC5B;AACJ","sourcesContent":[":root {\n    font-size: 16px;\n    font-family: 'Roboto', sans-serif;\n}\n\nbody {\n    margin: 0;\n    overflow: hidden;\n}\n\nbody.no-cursor {\n    cursor: none;\n}\n\nmain {\n    position: relative;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n}\n\nmain .background-video {\n    position: absolute;\n    z-index: -1;\n    min-width: 100%;\n    min-height: 100%;\n}\n\n/* Custom cursor */\n\n#custom-cursor {\n    pointer-events: none;\n    position: absolute;\n    width: 120px;\n    aspect-ratio: 1/1;\n    z-index: -1;\n    opacity: 1;\n    transition: opacity 1s;\n    background-image: url(./images/sprites/rotating-earth.png);\n    background-size: cover;\n    background-position-y: center;\n    background-repeat: no-repeat;\n    animation: traverse-sprite 2s steps(239) infinite;\n}\n\n#custom-cursor.hot {\n    background-image: url(./images/sprites/rotating-sandal.png);\n    animation: traverse-sprite 2s steps(59) infinite;\n    width: 150px;\n}\n\n#custom-cursor.cold {\n    background-image: url(./images/sprites/rotating-boot.png);\n    animation: traverse-sprite 2s steps(47) infinite;\n}\n\n@keyframes traverse-sprite {\n    0% {\n        background-position-x: 0;\n    }\n    100% {\n        background-position-x: 100%;\n    }\n}\n\n#custom-cursor.hidden {\n    opacity: 0;\n}\n\n/* Initial screen */\n\n#initial-screen {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n#initial-screen #title {\n    margin: calc(40vh - 5.5rem) 0 0;\n    font-size: 4rem;\n    font-weight: 900;\n    color: white;\n}\n\n#initial-screen #search-bar {\n    background-color: transparent;\n    color: white;\n    caret-color: white;\n    font-size: 1.5rem;\n    width: min(500px, 80%);\n    margin-top: 10px;\n    padding: 10px;\n    background-image: url('./images/search-icon.svg');\n    background-repeat: no-repeat;\n    background-size: 30px;\n    background-position-x: calc(100% - 10px);\n    background-position-y: center;\n    border-style: none;\n    border-bottom: solid 4px white;\n}\n\n#initial-screen #search-bar::placeholder {\n    color: white;\n}\n\n#initial-screen #search-bar:focus-visible {\n    outline: none;\n}\n\n#initial-screen .error-message-container {\n    display: flex;\n    height: 2rem;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    background-color: rgba(0, 0, 0, 0.3);\n    padding: 0.5rem 1rem;\n    margin-top: 1rem;\n    backdrop-filter: blur(1px);\n    border-radius: 10px;\n    color: red;\n}\n\n#initial-screen .error-message-container.hidden {\n    display: none;\n}\n\n#initial-screen .error-message-icon {\n    width: 1.5rem;\n}\n\n#initial-screen #custom-cursor-toggle {\n    color: white;\n    position: absolute;\n    bottom: 1rem;\n    left: 1rem;\n    margin: 0;\n    background-color: rgba(0, 0, 0, 0.8);\n    backdrop-filter: blur(2px);\n    padding: 0.5rem;\n    border-radius: 0.5rem;\n    cursor: pointer;\n    opacity: 0.7;\n    transition: opacity 0.3s;\n}\n\nbody.no-cursor #initial-screen #custom-cursor-toggle {\n    border: solid 1px rgba(255, 255, 255, 0.8);\n}\n\n#initial-screen #custom-cursor-toggle:hover {\n    opacity: 1;\n}\n\n#initial-screen #custom-cursor-toggle:after {\n    content: '';\n    display: block;\n    height: 1px;\n    left: 50%;\n    position: absolute;\n    background: white;\n    transition: width 0.3s ease 0s, left 0.3s ease 0s;\n    width: 0;\n}\n\n#initial-screen #custom-cursor-toggle:hover:after {\n    width: 90%;\n    left: 5%;\n}\n\n/* Information screen */\n\n#weather-information-screen {\n    color: white;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: min-content minmax(min-content, 1fr) min-content;\n    grid-template-areas:\n        'top top'\n        'center center'\n        'bottom-left bottom-right';\n    box-sizing: border-box;\n    padding: 1.5rem;\n}\n\n#weather-information-screen .wrapper#top {\n    grid-area: top;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 1.5rem;\n    font-size: 2rem;\n    font-weight: 900;\n    filter: drop-shadow(0px 0px 2px rgb(60 60 60));\n}\n\n#weather-information-screen #go-back-button {\n    font-size: 2rem;\n    cursor: pointer;\n    filter: brightness(0.8);\n    transition: filter 0.2s;\n}\n\n#weather-information-screen p#city-title {\n    margin: 0;\n}\n\n#weather-information-screen #go-back-button:hover {\n    filter: brightness(1);\n}\n\n#weather-information-screen .wrapper#central {\n    grid-area: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    filter: drop-shadow(0px 0px 2px rgb(60 60 60));\n}\n\n#weather-information-screen img#weather-icon {\n    width: min(400px, 70%);\n}\n\n#weather-information-screen p#temperature {\n    margin: 0;\n    font-size: 4rem;\n    font-weight: 900;\n}\n\n#weather-information-screen p#units-toggle {\n    margin: 0;\n    cursor: pointer;\n    font-size: 1.2rem;\n    position: relative;\n}\n\n#weather-information-screen p#units-toggle:after {\n    content: '';\n    display: block;\n    height: 2px;\n    left: 50%;\n    position: absolute;\n    background: white;\n    transition: width 0.3s ease 0s, left 0.3s ease 0s;\n    width: 0;\n}\n\n#weather-information-screen p#units-toggle:hover:after {\n    width: 100%;\n    left: 0;\n}\n\n#weather-information-screen .wrapper#bottom-left {\n    grid-area: bottom-left;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: space-evenly;\n    gap: 1rem;\n    filter: drop-shadow(0px 0px 2px rgb(60 60 60));\n}\n\n#weather-information-screen .details {\n    display: flex;\n}\n\n#weather-information-screen .details-icon {\n    width: 2rem;\n    margin-right: 0.5rem;\n}\n\n#weather-information-screen .details > .title {\n    margin-right: 1rem;\n}\n\n#weather-information-screen .details > .value {\n    font-weight: 900;\n}\n\n#weather-information-screen .wrapper#bottom-right {\n    grid-area: bottom-right;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: flex-end;\n    filter: drop-shadow(0px 0px 2px rgb(60 60 60));\n}\n\n#weather-information-screen .wrapper#bottom-right #weather {\n    margin: 0;\n    font-size: 4rem;\n    font-weight: 900;\n}\n\n#weather-information-screen .wrapper#bottom-right #weather-description {\n    margin: 0;\n    font-size: 1.5rem;\n}\n\n/* Loading screen */\n\n#loading-screen {\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    top: 0;\n    animation: fade-in 0.05s ease-in forwards;\n    pointer-events: none;\n    background-color: rgba(0, 0, 0, 0.95);\n    backdrop-filter: blur(4px);\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    box-sizing: border-box;\n    padding: 1rem;\n    color: white;\n    font-size: 1.2rem;\n}\n\n@keyframes fade-in {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n.loading-text {\n    margin: 0;\n    animation: breath 1.5s linear infinite;\n}\n\n@keyframes breath {\n    0% {\n        opacity: 0;\n    }\n    40%,\n    60% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n/* Media queries for responsiveness */\n\n@media (orientation: portrait), (max-width: 600px) {\n    :root {\n        font-size: 10px;\n    }\n    #initial-screen #title {\n        font-size: 2.5rem;\n    }\n    #initial-screen #custom-cursor-toggle {\n        display: none;\n    }\n    body {\n        cursor: initial !important;\n    }\n    #custom-cursor {\n        display: none !important;\n    }\n}\n"],"sourceRoot":""}]);
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

displayInitialScreen();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFFBQVEsT0FBTyxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVks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QSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdmlkZW9zL2NsZWFyLWRheS5tcDQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdmlkZW9zL2NsZWFyLW5pZ2h0Lm1wNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy92aWRlb3MvY2xvdWRzLWRheS5tcDQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdmlkZW9zL2Nsb3Vkcy1uaWdodC5tcDQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdmlkZW9zL2luaXRpYWwtc2NyZWVuLXZpZGVvLm1wNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy92aWRlb3MvbWlzdC1kYXkubXA0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3ZpZGVvcy9taXN0LW5pZ2h0Lm1wNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy92aWRlb3MvcmFpbi1kYXkubXA0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3ZpZGVvcy9yYWluLW5pZ2h0Lm1wNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy92aWRlb3Mvc25vdy1kYXkubXA0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3ZpZGVvcy9zbm93LW5pZ2h0Lm1wNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy92aWRlb3MvdGh1bmRlcnN0b3JtLm1wNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2phdmFzY3JpcHQtbW9kdWxlcy9hcGktY2FsbHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qYXZhc2NyaXB0LW1vZHVsZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3Nwcml0ZXMvcm90YXRpbmctZWFydGgucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvc3ByaXRlcy9yb3RhdGluZy1zYW5kYWwucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvc3ByaXRlcy9yb3RhdGluZy1ib290LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3NlYXJjaC1pY29uLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmJvZHkubm8tY3Vyc29yIHtcXG4gICAgY3Vyc29yOiBub25lO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbm1haW4gLmJhY2tncm91bmQtdmlkZW8ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIEN1c3RvbSBjdXJzb3IgKi9cXG5cXG4jY3VzdG9tLWN1cnNvciB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYW5pbWF0aW9uOiB0cmF2ZXJzZS1zcHJpdGUgMnMgc3RlcHMoMjM5KSBpbmZpbml0ZTtcXG59XFxuXFxuI2N1c3RvbS1jdXJzb3IuaG90IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYW5pbWF0aW9uOiB0cmF2ZXJzZS1zcHJpdGUgMnMgc3RlcHMoNTkpIGluZmluaXRlO1xcbiAgICB3aWR0aDogMTUwcHg7XFxufVxcblxcbiNjdXN0b20tY3Vyc29yLmNvbGQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICBhbmltYXRpb246IHRyYXZlcnNlLXNwcml0ZSAycyBzdGVwcyg0NykgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgdHJhdmVyc2Utc3ByaXRlIHtcXG4gICAgMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAwO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMDAlO1xcbiAgICB9XFxufVxcblxcbiNjdXN0b20tY3Vyc29yLmhpZGRlbiB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi8qIEluaXRpYWwgc2NyZWVuICovXFxuXFxuI2luaXRpYWwtc2NyZWVuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaW5pdGlhbC1zY3JlZW4gI3RpdGxlIHtcXG4gICAgbWFyZ2luOiBjYWxjKDQwdmggLSA1LjVyZW0pIDAgMDtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNpbml0aWFsLXNjcmVlbiAjc2VhcmNoLWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGNhcmV0LWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHdpZHRoOiBtaW4oNTAwcHgsIDgwJSk7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMzBweDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjYWxjKDEwMCUgLSAxMHB4KTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgNHB4IHdoaXRlO1xcbn1cXG5cXG4jaW5pdGlhbC1zY3JlZW4gI3NlYXJjaC1iYXI6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jaW5pdGlhbC1zY3JlZW4gI3NlYXJjaC1iYXI6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNpbml0aWFsLXNjcmVlbiAuZXJyb3ItbWVzc2FnZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcHgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4jaW5pdGlhbC1zY3JlZW4gLmVycm9yLW1lc3NhZ2UtY29udGFpbmVyLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNpbml0aWFsLXNjcmVlbiAuZXJyb3ItbWVzc2FnZS1pY29uIHtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG59XFxuXFxuI2luaXRpYWwtc2NyZWVuICNjdXN0b20tY3Vyc29yLXRvZ2dsZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDFyZW07XFxuICAgIGxlZnQ6IDFyZW07XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XFxufVxcblxcbmJvZHkubm8tY3Vyc29yICNpbml0aWFsLXNjcmVlbiAjY3VzdG9tLWN1cnNvci10b2dnbGUge1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxufVxcblxcbiNpbml0aWFsLXNjcmVlbiAjY3VzdG9tLWN1cnNvci10b2dnbGU6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4jaW5pdGlhbC1zY3JlZW4gI2N1c3RvbS1jdXJzb3ItdG9nZ2xlOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UgMHMsIGxlZnQgMC4zcyBlYXNlIDBzO1xcbiAgICB3aWR0aDogMDtcXG59XFxuXFxuI2luaXRpYWwtc2NyZWVuICNjdXN0b20tY3Vyc29yLXRvZ2dsZTpob3ZlcjphZnRlciB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGxlZnQ6IDUlO1xcbn1cXG5cXG4vKiBJbmZvcm1hdGlvbiBzY3JlZW4gKi9cXG5cXG4jd2VhdGhlci1pbmZvcm1hdGlvbi1zY3JlZW4ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW5tYXgobWluLWNvbnRlbnQsIDFmcikgbWluLWNvbnRlbnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAndG9wIHRvcCdcXG4gICAgICAgICdjZW50ZXIgY2VudGVyJ1xcbiAgICAgICAgJ2JvdHRvbS1sZWZ0IGJvdHRvbS1yaWdodCc7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG59XFxuXFxuI3dlYXRoZXItaW5mb3JtYXRpb24tc2NyZWVuIC53cmFwcGVyI3RvcCB7XFxuICAgIGdyaWQtYXJlYTogdG9wO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMS41cmVtO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAycHggcmdiKDYwIDYwIDYwKSk7XFxufVxcblxcbiN3ZWF0aGVyLWluZm9ybWF0aW9uLXNjcmVlbiAjZ28tYmFjay1idXR0b24ge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XFxuICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjJzO1xcbn1cXG5cXG4jd2VhdGhlci1pbmZvcm1hdGlvbi1zY3JlZW4gcCNjaXR5LXRpdGxlIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jd2VhdGhlci1pbmZvcm1hdGlvbi1zY3JlZW4gI2dvLWJhY2stYnV0dG9uOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEpO1xcbn1cXG5cXG4jd2VhdGhlci1pbmZvcm1hdGlvbi1zY3JlZW4gLndyYXBwZXIjY2VudHJhbCB7XFxuICAgIGdyaWQtYXJlYTogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAycHggcmdiKDYwIDYwIDYwKSk7XFxufVxcblxcbiN3ZWF0aGVyLWluZm9ybWF0aW9uLXNjcmVlbiBpbWcjd2VhdGhlci1pY29uIHtcXG4gICAgd2lkdGg6IG1pbig0MDBweCwgNzAlKTtcXG59XFxuXFxuI3dlYXRoZXItaW5mb3JtYXRpb24tc2NyZWVuIHAjdGVtcGVyYXR1cmUge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuI3dlYXRoZXItaW5mb3JtYXRpb24tc2NyZWVuIHAjdW5pdHMtdG9nZ2xlIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiN3ZWF0aGVyLWluZm9ybWF0aW9uLXNjcmVlbiBwI3VuaXRzLXRvZ2dsZTphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlIDBzLCBsZWZ0IDAuM3MgZWFzZSAwcztcXG4gICAgd2lkdGg6IDA7XFxufVxcblxcbiN3ZWF0aGVyLWluZm9ybWF0aW9uLXNjcmVlbiBwI3VuaXRzLXRvZ2dsZTpob3ZlcjphZnRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4jd2VhdGhlci1pbmZvcm1hdGlvbi1zY3JlZW4gLndyYXBwZXIjYm90dG9tLWxlZnQge1xcbiAgICBncmlkLWFyZWE6IGJvdHRvbS1sZWZ0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDJweCByZ2IoNjAgNjAgNjApKTtcXG59XFxuXFxuI3dlYXRoZXItaW5mb3JtYXRpb24tc2NyZWVuIC5kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3dlYXRoZXItaW5mb3JtYXRpb24tc2NyZWVuIC5kZXRhaWxzLWljb24ge1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbiN3ZWF0aGVyLWluZm9ybWF0aW9uLXNjcmVlbiAuZGV0YWlscyA+IC50aXRsZSB7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuI3dlYXRoZXItaW5mb3JtYXRpb24tc2NyZWVuIC5kZXRhaWxzID4gLnZhbHVlIHtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuI3dlYXRoZXItaW5mb3JtYXRpb24tc2NyZWVuIC53cmFwcGVyI2JvdHRvbS1yaWdodCB7XFxuICAgIGdyaWQtYXJlYTogYm90dG9tLXJpZ2h0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAycHggcmdiKDYwIDYwIDYwKSk7XFxufVxcblxcbiN3ZWF0aGVyLWluZm9ybWF0aW9uLXNjcmVlbiAud3JhcHBlciNib3R0b20tcmlnaHQgI3dlYXRoZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuI3dlYXRoZXItaW5mb3JtYXRpb24tc2NyZWVuIC53cmFwcGVyI2JvdHRvbS1yaWdodCAjd2VhdGhlci1kZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi8qIExvYWRpbmcgc2NyZWVuICovXFxuXFxuI2xvYWRpbmctc2NyZWVuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHRvcDogMDtcXG4gICAgYW5pbWF0aW9uOiBmYWRlLWluIDAuMDVzIGVhc2UtaW4gZm9yd2FyZHM7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOTUpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xcbiAgICAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG4ubG9hZGluZy10ZXh0IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBhbmltYXRpb246IGJyZWF0aCAxLjVzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBicmVhdGgge1xcbiAgICAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDQwJSxcXG4gICAgNjAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxufVxcblxcbi8qIE1lZGlhIHF1ZXJpZXMgZm9yIHJlc3BvbnNpdmVuZXNzICovXFxuXFxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpLCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICA6cm9vdCB7XFxuICAgICAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIH1cXG4gICAgI2luaXRpYWwtc2NyZWVuICN0aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgfVxcbiAgICAjaW5pdGlhbC1zY3JlZW4gI2N1c3RvbS1jdXJzb3ItdG9nZ2xlIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgYm9keSB7XFxuICAgICAgICBjdXJzb3I6IGluaXRpYWwgIWltcG9ydGFudDtcXG4gICAgfVxcbiAgICAjY3VzdG9tLWN1cnNvciB7XFxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICAgIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7SUFDZixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtB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QUFDSjs7QUFFQSxxQ0FBcUM7O0FBRXJDO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuYm9keS5uby1jdXJzb3Ige1xcbiAgICBjdXJzb3I6IG5vbmU7XFxufVxcblxcbm1haW4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxubWFpbiAuYmFja2dyb3VuZC12aWRlbyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuLyogQ3VzdG9tIGN1cnNvciAqL1xcblxcbiNjdXN0b20tY3Vyc29yIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXM7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9zcHJpdGVzL3JvdGF0aW5nLWVhcnRoLnBuZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBhbmltYXRpb246IHRyYXZlcnNlLXNwcml0ZSAycyBzdGVwcygyMzkpIGluZmluaXRlO1xcbn1cXG5cXG4jY3VzdG9tLWN1cnNvci5ob3Qge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvc3ByaXRlcy9yb3RhdGluZy1zYW5kYWwucG5nKTtcXG4gICAgYW5pbWF0aW9uOiB0cmF2ZXJzZS1zcHJpdGUgMnMgc3RlcHMoNTkpIGluZmluaXRlO1xcbiAgICB3aWR0aDogMTUwcHg7XFxufVxcblxcbiNjdXN0b20tY3Vyc29yLmNvbGQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvc3ByaXRlcy9yb3RhdGluZy1ib290LnBuZyk7XFxuICAgIGFuaW1hdGlvbjogdHJhdmVyc2Utc3ByaXRlIDJzIHN0ZXBzKDQ3KSBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyB0cmF2ZXJzZS1zcHJpdGUge1xcbiAgICAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDA7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XFxuICAgIH1cXG59XFxuXFxuI2N1c3RvbS1jdXJzb3IuaGlkZGVuIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLyogSW5pdGlhbCBzY3JlZW4gKi9cXG5cXG4jaW5pdGlhbC1zY3JlZW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNpbml0aWFsLXNjcmVlbiAjdGl0bGUge1xcbiAgICBtYXJnaW46IGNhbGMoNDB2aCAtIDUuNXJlbSkgMCAwO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2luaXRpYWwtc2NyZWVuICNzZWFyY2gtYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY2FyZXQtY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgd2lkdGg6IG1pbig1MDBweCwgODAlKTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9zZWFyY2gtaWNvbi5zdmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNhbGMoMTAwJSAtIDEwcHgpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCA0cHggd2hpdGU7XFxufVxcblxcbiNpbml0aWFsLXNjcmVlbiAjc2VhcmNoLWJhcjo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNpbml0aWFsLXNjcmVlbiAjc2VhcmNoLWJhcjpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI2luaXRpYWwtc2NyZWVuIC5lcnJvci1tZXNzYWdlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFweCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbiNpbml0aWFsLXNjcmVlbiAuZXJyb3ItbWVzc2FnZS1jb250YWluZXIuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2luaXRpYWwtc2NyZWVuIC5lcnJvci1tZXNzYWdlLWljb24ge1xcbiAgICB3aWR0aDogMS41cmVtO1xcbn1cXG5cXG4jaW5pdGlhbC1zY3JlZW4gI2N1c3RvbS1jdXJzb3ItdG9nZ2xlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMXJlbTtcXG4gICAgbGVmdDogMXJlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcXG59XFxuXFxuYm9keS5uby1jdXJzb3IgI2luaXRpYWwtc2NyZWVuICNjdXN0b20tY3Vyc29yLXRvZ2dsZSB7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG59XFxuXFxuI2luaXRpYWwtc2NyZWVuICNjdXN0b20tY3Vyc29yLXRvZ2dsZTpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbiNpbml0aWFsLXNjcmVlbiAjY3VzdG9tLWN1cnNvci10b2dnbGU6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZSAwcywgbGVmdCAwLjNzIGVhc2UgMHM7XFxuICAgIHdpZHRoOiAwO1xcbn1cXG5cXG4jaW5pdGlhbC1zY3JlZW4gI2N1c3RvbS1jdXJzb3ItdG9nZ2xlOmhvdmVyOmFmdGVyIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbGVmdDogNSU7XFxufVxcblxcbi8qIEluZm9ybWF0aW9uIHNjcmVlbiAqL1xcblxcbiN3ZWF0aGVyLWluZm9ybWF0aW9uLXNjcmVlbiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbm1heChtaW4tY29udGVudCwgMWZyKSBtaW4tY29udGVudDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICd0b3AgdG9wJ1xcbiAgICAgICAgJ2NlbnRlciBjZW50ZXInXFxuICAgICAgICAnYm90dG9tLWxlZnQgYm90dG9tLXJpZ2h0JztcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbn1cXG5cXG4jd2VhdGhlci1pbmZvcm1hdGlvbi1zY3JlZW4gLndyYXBwZXIjdG9wIHtcXG4gICAgZ3JpZC1hcmVhOiB0b3A7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDJweCByZ2IoNjAgNjAgNjApKTtcXG59XFxuXFxuI3dlYXRoZXItaW5mb3JtYXRpb24tc2NyZWVuICNnby1iYWNrLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcXG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuMnM7XFxufVxcblxcbiN3ZWF0aGVyLWluZm9ybWF0aW9uLXNjcmVlbiBwI2NpdHktdGl0bGUge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiN3ZWF0aGVyLWluZm9ybWF0aW9uLXNjcmVlbiAjZ28tYmFjay1idXR0b246aG92ZXIge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMSk7XFxufVxcblxcbiN3ZWF0aGVyLWluZm9ybWF0aW9uLXNjcmVlbiAud3JhcHBlciNjZW50cmFsIHtcXG4gICAgZ3JpZC1hcmVhOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDJweCByZ2IoNjAgNjAgNjApKTtcXG59XFxuXFxuI3dlYXRoZXItaW5mb3JtYXRpb24tc2NyZWVuIGltZyN3ZWF0aGVyLWljb24ge1xcbiAgICB3aWR0aDogbWluKDQwMHB4LCA3MCUpO1xcbn1cXG5cXG4jd2VhdGhlci1pbmZvcm1hdGlvbi1zY3JlZW4gcCN0ZW1wZXJhdHVyZSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4jd2VhdGhlci1pbmZvcm1hdGlvbi1zY3JlZW4gcCN1bml0cy10b2dnbGUge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI3dlYXRoZXItaW5mb3JtYXRpb24tc2NyZWVuIHAjdW5pdHMtdG9nZ2xlOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UgMHMsIGxlZnQgMC4zcyBlYXNlIDBzO1xcbiAgICB3aWR0aDogMDtcXG59XFxuXFxuI3dlYXRoZXItaW5mb3JtYXRpb24tc2NyZWVuIHAjdW5pdHMtdG9nZ2xlOmhvdmVyOmFmdGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxlZnQ6IDA7XFxufVxcblxcbiN3ZWF0aGVyLWluZm9ybWF0aW9uLXNjcmVlbiAud3JhcHBlciNib3R0b20tbGVmdCB7XFxuICAgIGdyaWQtYXJlYTogYm90dG9tLWxlZnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMnB4IHJnYig2MCA2MCA2MCkpO1xcbn1cXG5cXG4jd2VhdGhlci1pbmZvcm1hdGlvbi1zY3JlZW4gLmRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jd2VhdGhlci1pbmZvcm1hdGlvbi1zY3JlZW4gLmRldGFpbHMtaWNvbiB7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuI3dlYXRoZXItaW5mb3JtYXRpb24tc2NyZWVuIC5kZXRhaWxzID4gLnRpdGxlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4jd2VhdGhlci1pbmZvcm1hdGlvbi1zY3JlZW4gLmRldGFpbHMgPiAudmFsdWUge1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4jd2VhdGhlci1pbmZvcm1hdGlvbi1zY3JlZW4gLndyYXBwZXIjYm90dG9tLXJpZ2h0IHtcXG4gICAgZ3JpZC1hcmVhOiBib3R0b20tcmlnaHQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDJweCByZ2IoNjAgNjAgNjApKTtcXG59XFxuXFxuI3dlYXRoZXItaW5mb3JtYXRpb24tc2NyZWVuIC53cmFwcGVyI2JvdHRvbS1yaWdodCAjd2VhdGhlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4jd2VhdGhlci1pbmZvcm1hdGlvbi1zY3JlZW4gLndyYXBwZXIjYm90dG9tLXJpZ2h0ICN3ZWF0aGVyLWRlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLyogTG9hZGluZyBzY3JlZW4gKi9cXG5cXG4jbG9hZGluZy1zY3JlZW4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgdG9wOiAwO1xcbiAgICBhbmltYXRpb246IGZhZGUtaW4gMC4wNXMgZWFzZS1pbiBmb3J3YXJkcztcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45NSk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbi5sb2FkaW5nLXRleHQge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGFuaW1hdGlvbjogYnJlYXRoIDEuNXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJyZWF0aCB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgNDAlLFxcbiAgICA2MCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG59XFxuXFxuLyogTWVkaWEgcXVlcmllcyBmb3IgcmVzcG9uc2l2ZW5lc3MgKi9cXG5cXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCksIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIDpyb290IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgfVxcbiAgICAjaW5pdGlhbC1zY3JlZW4gI3RpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICB9XFxuICAgICNpbml0aWFsLXNjcmVlbiAjY3VzdG9tLWN1cnNvci10b2dnbGUge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICBib2R5IHtcXG4gICAgICAgIGN1cnNvcjogaW5pdGlhbCAhaW1wb3J0YW50O1xcbiAgICB9XFxuICAgICNjdXN0b20tY3Vyc29yIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwidmlkZW9zL2NsZWFyLWRheS5tcDRcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwidmlkZW9zL2NsZWFyLW5pZ2h0Lm1wNFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ2aWRlb3MvY2xvdWRzLWRheS5tcDRcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwidmlkZW9zL2Nsb3Vkcy1uaWdodC5tcDRcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwidmlkZW9zL2luaXRpYWwtc2NyZWVuLXZpZGVvLm1wNFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ2aWRlb3MvbWlzdC1kYXkubXA0XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInZpZGVvcy9taXN0LW5pZ2h0Lm1wNFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ2aWRlb3MvcmFpbi1kYXkubXA0XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInZpZGVvcy9yYWluLW5pZ2h0Lm1wNFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ2aWRlb3Mvc25vdy1kYXkubXA0XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInZpZGVvcy9zbm93LW5pZ2h0Lm1wNFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ2aWRlb3MvdGh1bmRlcnN0b3JtLm1wNFwiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBNWV9BUElfS0VZID0gJzI3Yzc3NzE2NmJmM2Y2ZmEwNGY0M2MwODM1Y2I4OWIxJztcblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZXMobG9jYXRpb24pIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtsb2NhdGlvbn0mbGltaXQ9MSZhcHBpZD0ke01ZX0FQSV9LRVl9YCxcbiAgICAgICAgeyBtb2RlOiAnY29ycycgfVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlcih7IGxhdCwgbG9uLCB1bml0IH0pIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPSR7TVlfQVBJX0tFWX0mdW5pdHM9JHt1bml0fWAsXG4gICAgICAgIHsgbW9kZTogJ2NvcnMnIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobG9jYXRpb24sIHVuaXQpIHtcbiAgICBjb25zdCBjb29yZGluYXRlc0RhdGEgPSBhd2FpdCBnZXRDb29yZGluYXRlcyhsb2NhdGlvbik7XG4gICAgY29uc3QgeyBsYXQsIGxvbiB9ID0gY29vcmRpbmF0ZXNEYXRhWzBdO1xuXG4gICAgY29uc3QgY3VycmVudFdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0Q3VycmVudFdlYXRoZXIoeyBsYXQsIGxvbiwgdW5pdCB9KTtcblxuICAgIGNvbnN0IHdlYXRoZXJJbmZvID0ge1xuICAgICAgICBjaXR5OiBjb29yZGluYXRlc0RhdGFbMF0ubmFtZSxcbiAgICAgICAgc3RhdGU6IGNvb3JkaW5hdGVzRGF0YVswXS5zdGF0ZSxcbiAgICAgICAgY291bnRyeUNvZGU6IGNvb3JkaW5hdGVzRGF0YVswXS5jb3VudHJ5LFxuICAgICAgICB3ZWF0aGVyOiBjdXJyZW50V2VhdGhlckRhdGEud2VhdGhlclswXS5tYWluLFxuICAgICAgICB3ZWF0aGVyRGVzY3JpcHRpb246IGN1cnJlbnRXZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgICB3ZWF0aGVySWNvbklkOiBjdXJyZW50V2VhdGhlckRhdGEud2VhdGhlclswXS5pY29uLFxuICAgICAgICB0ZW1wZXJhdHVyZTogY3VycmVudFdlYXRoZXJEYXRhLm1haW4udGVtcCxcbiAgICAgICAgZmVlbHNMaWtlOiBjdXJyZW50V2VhdGhlckRhdGEubWFpbi5mZWVsc19saWtlLFxuICAgICAgICBodW1pZGl0eTogY3VycmVudFdlYXRoZXJEYXRhLm1haW4uaHVtaWRpdHksXG4gICAgICAgIHdpbmRTcGVlZDogY3VycmVudFdlYXRoZXJEYXRhLndpbmQuc3BlZWRcbiAgICB9O1xuXG4gICAgcmV0dXJuIHdlYXRoZXJJbmZvO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBnZXRXZWF0aGVyRGF0YSBmcm9tICcuL2FwaS1jYWxscyc7XG5pbXBvcnQgJy4uL3N0eWxlLmNzcyc7XG5cbi8vIGltcG9ydCB3ZWF0aGVyIGljb25zXG5pbXBvcnQgY2xlYXJTa3lEYXkgZnJvbSAnLi4vaW1hZ2VzL3dlYXRoZXItaWNvbnMvMDFkLnN2Zyc7XG5pbXBvcnQgY2xlYXJTa3lOaWdodCBmcm9tICcuLi9pbWFnZXMvd2VhdGhlci1pY29ucy8wMW4uc3ZnJztcbmltcG9ydCBmZXdDbG91ZHNEYXkgZnJvbSAnLi4vaW1hZ2VzL3dlYXRoZXItaWNvbnMvMDJkLnN2Zyc7XG5pbXBvcnQgZmV3Q2xvdWRzTmlnaHQgZnJvbSAnLi4vaW1hZ2VzL3dlYXRoZXItaWNvbnMvMDJuLnN2Zyc7XG5pbXBvcnQgc2NhdHRlcmVkQ2xvdWRzRGF5IGZyb20gJy4uL2ltYWdlcy93ZWF0aGVyLWljb25zLzAzZC5zdmcnO1xuaW1wb3J0IHNjYXR0ZXJlZENsb3Vkc05pZ2h0IGZyb20gJy4uL2ltYWdlcy93ZWF0aGVyLWljb25zLzAzbi5zdmcnO1xuaW1wb3J0IGJyb2tlbkNsb3Vkc0RheSBmcm9tICcuLi9pbWFnZXMvd2VhdGhlci1pY29ucy8wNGQuc3ZnJztcbmltcG9ydCBicm9rZW5DbG91ZHNOaWdodCBmcm9tICcuLi9pbWFnZXMvd2VhdGhlci1pY29ucy8wNG4uc3ZnJztcbmltcG9ydCBzaG93ZXJSYWluRGF5IGZyb20gJy4uL2ltYWdlcy93ZWF0aGVyLWljb25zLzA5ZC5zdmcnO1xuaW1wb3J0IHNob3dlclJhaW5OaWdodCBmcm9tICcuLi9pbWFnZXMvd2VhdGhlci1pY29ucy8wOW4uc3ZnJztcbmltcG9ydCByYWluRGF5IGZyb20gJy4uL2ltYWdlcy93ZWF0aGVyLWljb25zLzEwZC5zdmcnO1xuaW1wb3J0IHJhaW5OaWdodCBmcm9tICcuLi9pbWFnZXMvd2VhdGhlci1pY29ucy8xMG4uc3ZnJztcbmltcG9ydCB0aHVuZGVyc3Rvcm1EYXkgZnJvbSAnLi4vaW1hZ2VzL3dlYXRoZXItaWNvbnMvMTFkLnN2Zyc7XG5pbXBvcnQgdGh1bmRlcnN0b3JtTmlnaHQgZnJvbSAnLi4vaW1hZ2VzL3dlYXRoZXItaWNvbnMvMTFuLnN2Zyc7XG5pbXBvcnQgc25vd0RheSBmcm9tICcuLi9pbWFnZXMvd2VhdGhlci1pY29ucy8xM2Quc3ZnJztcbmltcG9ydCBzbm93TmlnaHQgZnJvbSAnLi4vaW1hZ2VzL3dlYXRoZXItaWNvbnMvMTNuLnN2Zyc7XG5pbXBvcnQgbWlzdERheSBmcm9tICcuLi9pbWFnZXMvd2VhdGhlci1pY29ucy81MGQuc3ZnJztcbmltcG9ydCBtaXN0TmlnaHQgZnJvbSAnLi4vaW1hZ2VzL3dlYXRoZXItaWNvbnMvNTBuLnN2Zyc7XG5cbi8vIGltcG9ydCBiYWNrZ3JvdW5kIHZpZGVvc1xuaW1wb3J0IGluaXRpYWxTY3JlZW5WaWRlbyBmcm9tICcuLi92aWRlb3MvaW5pdGlhbC1zY3JlZW4tdmlkZW8ubXA0JztcbmltcG9ydCBjbGVhckRheVZpZGVvIGZyb20gJy4uL3ZpZGVvcy9jbGVhci1kYXkubXA0JztcbmltcG9ydCBjbGVhck5pZ2h0VmlkZW8gZnJvbSAnLi4vdmlkZW9zL2NsZWFyLW5pZ2h0Lm1wNCc7XG5pbXBvcnQgY2xvdWRzRGF5VmlkZW8gZnJvbSAnLi4vdmlkZW9zL2Nsb3Vkcy1kYXkubXA0JztcbmltcG9ydCBjbG91ZHNOaWdodFZpZGVvIGZyb20gJy4uL3ZpZGVvcy9jbG91ZHMtbmlnaHQubXA0JztcbmltcG9ydCBtaXN0RGF5VmlkZW8gZnJvbSAnLi4vdmlkZW9zL21pc3QtZGF5Lm1wNCc7XG5pbXBvcnQgbWlzdE5pZ2h0VmlkZW8gZnJvbSAnLi4vdmlkZW9zL21pc3QtbmlnaHQubXA0JztcbmltcG9ydCByYWluRGF5VmlkZW8gZnJvbSAnLi4vdmlkZW9zL3JhaW4tZGF5Lm1wNCc7XG5pbXBvcnQgcmFpbk5pZ2h0VmlkZW8gZnJvbSAnLi4vdmlkZW9zL3JhaW4tbmlnaHQubXA0JztcbmltcG9ydCBzbm93RGF5VmlkZW8gZnJvbSAnLi4vdmlkZW9zL3Nub3ctZGF5Lm1wNCc7XG5pbXBvcnQgc25vd05pZ2h0VmlkZW8gZnJvbSAnLi4vdmlkZW9zL3Nub3ctbmlnaHQubXA0JztcbmltcG9ydCB0aHVuZGVyc3Rvcm1WaWRlbyBmcm9tICcuLi92aWRlb3MvdGh1bmRlcnN0b3JtLm1wNCc7XG5cbi8vIGltcG9ydCB3ZWF0aGVyIGRldGFpbHMgaWNvbnNcbmltcG9ydCB0ZW1wZXJhdHVyZUljb25Tb3VyY2UgZnJvbSAnLi4vaW1hZ2VzL3RoZXJtb21ldGVyLnN2Zyc7XG5pbXBvcnQgaHVtaWRpdHlJY29uU291cmNlIGZyb20gJy4uL2ltYWdlcy9odW1pZGl0eS5zdmcnO1xuaW1wb3J0IHdpbmRTcGVlZEljb25Tb3VyY2UgZnJvbSAnLi4vaW1hZ2VzL3dpbmQtc3BlZWQuc3ZnJztcblxuLy8gaW1wb3J0IGVycm9yIG1lc3NhZ2dlIGljb25cbmltcG9ydCB3YXJuaW5nSWNvbiBmcm9tICcuLi9pbWFnZXMvYXR0ZW50aW9uLnN2Zyc7XG5cbmxldCBsYXN0U2VhcmNoID0gbnVsbDtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbmNvbnN0IFVOSVRTID0ge1xuICAgIG1ldHJpYzogeyB0ZW1wZXJhdHVyZTogJ8KwQycsIHNwZWVkOiAna20vaCcgfSxcbiAgICBpbXBlcmlhbDogeyB0ZW1wZXJhdHVyZTogJ8KwRicsIHNwZWVkOiAnbS9oJyB9XG59O1xuXG5jb25zdCBERUZBVUxUX1VOSVQgPSAnbWV0cmljJztcblxubGV0IGN1cnJlbnRVbml0ID0gREVGQVVMVF9VTklUO1xuXG5jb25zdCBXRUFUSEVSX01FRElBID0ge1xuICAgICcwMWQnOiB7IGljb246IGNsZWFyU2t5RGF5LCB2aWRlbzogY2xlYXJEYXlWaWRlbyB9LFxuICAgICcwMW4nOiB7IGljb246IGNsZWFyU2t5TmlnaHQsIHZpZGVvOiBjbGVhck5pZ2h0VmlkZW8gfSxcbiAgICAnMDJkJzogeyBpY29uOiBmZXdDbG91ZHNEYXksIHZpZGVvOiBjbG91ZHNEYXlWaWRlbyB9LFxuICAgICcwMm4nOiB7IGljb246IGZld0Nsb3Vkc05pZ2h0LCB2aWRlbzogY2xvdWRzTmlnaHRWaWRlbyB9LFxuICAgICcwM2QnOiB7IGljb246IHNjYXR0ZXJlZENsb3Vkc0RheSwgdmlkZW86IGNsb3Vkc0RheVZpZGVvIH0sXG4gICAgJzAzbic6IHsgaWNvbjogc2NhdHRlcmVkQ2xvdWRzTmlnaHQsIHZpZGVvOiBjbG91ZHNOaWdodFZpZGVvIH0sXG4gICAgJzA0ZCc6IHsgaWNvbjogYnJva2VuQ2xvdWRzRGF5LCB2aWRlbzogY2xvdWRzRGF5VmlkZW8gfSxcbiAgICAnMDRuJzogeyBpY29uOiBicm9rZW5DbG91ZHNOaWdodCwgdmlkZW86IGNsb3Vkc05pZ2h0VmlkZW8gfSxcbiAgICAnMDlkJzogeyBpY29uOiBzaG93ZXJSYWluRGF5LCB2aWRlbzogcmFpbkRheVZpZGVvIH0sXG4gICAgJzA5bic6IHsgaWNvbjogc2hvd2VyUmFpbk5pZ2h0LCB2aWRlbzogcmFpbk5pZ2h0VmlkZW8gfSxcbiAgICAnMTBkJzogeyBpY29uOiByYWluRGF5LCB2aWRlbzogcmFpbkRheVZpZGVvIH0sXG4gICAgJzEwbic6IHsgaWNvbjogcmFpbk5pZ2h0LCB2aWRlbzogcmFpbk5pZ2h0VmlkZW8gfSxcbiAgICAnMTFkJzogeyBpY29uOiB0aHVuZGVyc3Rvcm1EYXksIHZpZGVvOiB0aHVuZGVyc3Rvcm1WaWRlbyB9LFxuICAgICcxMW4nOiB7IGljb246IHRodW5kZXJzdG9ybU5pZ2h0LCB2aWRlbzogdGh1bmRlcnN0b3JtVmlkZW8gfSxcbiAgICAnMTNkJzogeyBpY29uOiBzbm93RGF5LCB2aWRlbzogc25vd0RheVZpZGVvIH0sXG4gICAgJzEzbic6IHsgaWNvbjogc25vd05pZ2h0LCB2aWRlbzogc25vd05pZ2h0VmlkZW8gfSxcbiAgICAnNTBkJzogeyBpY29uOiBtaXN0RGF5LCB2aWRlbzogbWlzdERheVZpZGVvIH0sXG4gICAgJzUwbic6IHsgaWNvbjogbWlzdE5pZ2h0LCB2aWRlbzogbWlzdE5pZ2h0VmlkZW8gfVxufTtcblxuZnVuY3Rpb24gZGlzcGxheUVycm9yTWVzc2FnZSgpIHtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItbWVzc2FnZScpO1xuICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlLmlubmVyVGV4dCA9XG4gICAgICAgICAgICAnU29tZXRoaW5nIHdlbnQgd3JvbmcuIE1ha2Ugc3VyZSB5b3UgZW50ZXIgYSB2YWxpZCBsb2NhdGlvbiEnO1xuICAgIH1cblxuICAgIGNvbnN0IGVycm9yTWVzc2FnZUNvbnRhaW5lciA9IGVycm9yTWVzc2FnZS5wYXJlbnRFbGVtZW50O1xuICAgIGlmIChlcnJvck1lc3NhZ2VDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgICBlcnJvck1lc3NhZ2VDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5TG9hZGluZ1NjcmVlbigpIHtcbiAgICBjb25zdCBhbHJlYWR5T25TY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9hZGluZy1zY3JlZW4nKTtcbiAgICBpZiAoYWxyZWFkeU9uU2NyZWVuKSByZXR1cm47XG5cbiAgICBjb25zdCBsb2FkaW5nU2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGxvYWRpbmdTY3JlZW4uaWQgPSAnbG9hZGluZy1zY3JlZW4nO1xuXG4gICAgY29uc3QgbG9hZGluZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbG9hZGluZ1RleHQuY2xhc3NMaXN0LmFkZCgnbG9hZGluZy10ZXh0Jyk7XG4gICAgbG9hZGluZ1RleHQuaW5uZXJUZXh0ID0gJ0xPQURJTkcuLi4nO1xuICAgIGxvYWRpbmdTY3JlZW4uYXBwZW5kQ2hpbGQobG9hZGluZ1RleHQpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRpbmdTY3JlZW4pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVMb2FkaW5nU2NyZWVuKCkge1xuICAgIGNvbnN0IGxvYWRpbmdTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9hZGluZy1zY3JlZW4nKTtcbiAgICBpZiAobG9hZGluZ1NjcmVlbikgbG9hZGluZ1NjcmVlbi5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ3VzdG9tQ3Vyc29yKCkge1xuICAgIGNvbnN0IGN1c3RvbUN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjdXN0b21DdXJzb3IuaWQgPSAnY3VzdG9tLWN1cnNvcic7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGN1c3RvbUN1cnNvcik7XG5cbiAgICBjb25zdCBjdXN0b21DdXJzb3JXaWR0aCA9IHdpbmRvd1xuICAgICAgICAuZ2V0Q29tcHV0ZWRTdHlsZShjdXN0b21DdXJzb3IpXG4gICAgICAgIC5nZXRQcm9wZXJ0eVZhbHVlKCd3aWR0aCcpO1xuXG4gICAgbGV0IGhpZGVDdXJzb3JUaW1lciA9IG51bGw7XG5cbiAgICBmdW5jdGlvbiBoaWRlQ3Vyc29yKCkge1xuICAgICAgICBjdXN0b21DdXJzb3IuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZVN1cmVDdXJzb3JJc1Zpc2libGUoKSB7XG4gICAgICAgIGlmIChjdXN0b21DdXJzb3IuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgICAgICAgY3VzdG9tQ3Vyc29yLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChoaWRlQ3Vyc29yVGltZXIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoaGlkZUN1cnNvclRpbWVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1ha2VTdXJlQ3Vyc29ySXNWaXNpYmxlKCk7XG5cbiAgICAgICAgaGlkZUN1cnNvclRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoaGlkZUN1cnNvciwgMzAwMCk7XG5cbiAgICAgICAgY3VzdG9tQ3Vyc29yLnN0eWxlLmxlZnQgPSBgY2FsYygke2V2ZW50LmNsaWVudFh9cHggLSAke2N1c3RvbUN1cnNvcldpZHRofS8yKWA7XG4gICAgICAgIGN1c3RvbUN1cnNvci5zdHlsZS50b3AgPSBgY2FsYygke2V2ZW50LmNsaWVudFl9cHggLSAke2N1c3RvbUN1cnNvcldpZHRofS8yKWA7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUN1c3RvbUN1cnNvcigpIHtcbiAgICBjb25zdCBjdXN0b21DdXJzb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VzdG9tLWN1cnNvcicpO1xuICAgIGlmIChjdXN0b21DdXJzb3IpIGN1c3RvbUN1cnNvci5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ3VzdG9tQ3Vyc29yKCkge1xuICAgIGNvbnN0IGN1c3RvbUN1cnNvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXN0b20tY3Vyc29yJyk7XG4gICAgaWYgKGN1c3RvbUN1cnNvcikge1xuICAgICAgICByZW1vdmVDdXN0b21DdXJzb3IoKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBjcmVhdGVDdXN0b21DdXJzb3IoKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSAnbm8tY3Vyc29yJztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlJbml0aWFsU2NyZWVuKCkge1xuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgbWFpbi5pZCA9ICdpbml0aWFsLXNjcmVlbic7XG5cbiAgICBkaXNwbGF5TG9hZGluZ1NjcmVlbigpO1xuXG4gICAgLy8gcmVzZXQgY3VzdG9tIGN1cnNvclxuICAgIGNvbnN0IGN1c3RvbUN1cnNvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXN0b20tY3Vyc29yJyk7XG4gICAgaWYgKGN1c3RvbUN1cnNvcikgY3VzdG9tQ3Vyc29yLmNsYXNzTmFtZSA9ICcnO1xuXG4gICAgY29uc3QgYmFja2dyb3VuZFZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICBiYWNrZ3JvdW5kVmlkZW8uY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZC12aWRlbycpO1xuICAgIGJhY2tncm91bmRWaWRlby5pZCA9ICdpbml0aWFsLXNjcmVlbi12aWRlbyc7XG4gICAgYmFja2dyb3VuZFZpZGVvLnNyYyA9IGluaXRpYWxTY3JlZW5WaWRlbztcbiAgICBiYWNrZ3JvdW5kVmlkZW8ubXV0ZWQgPSB0cnVlO1xuICAgIGJhY2tncm91bmRWaWRlby5hdXRvcGxheSA9IHRydWU7XG4gICAgYmFja2dyb3VuZFZpZGVvLmxvb3AgPSB0cnVlO1xuICAgIGJhY2tncm91bmRWaWRlby5vbmxvYWRlZGRhdGEgPSByZW1vdmVMb2FkaW5nU2NyZWVuO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoYmFja2dyb3VuZFZpZGVvKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRpdGxlLmlkID0gJ3RpdGxlJztcbiAgICB0aXRsZS5pbm5lclRleHQgPSBcIldoYXQncyB0aGUgd2VhdGhlciBsaWtlIGluLi4uXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHNlYXJjaEJhci5pZCA9ICdzZWFyY2gtYmFyJztcbiAgICBzZWFyY2hCYXIudHlwZSA9ICd0ZXh0JztcbiAgICBzZWFyY2hCYXIuYXV0b2NvbXBsZXRlID0gJ29mZic7XG4gICAgc2VhcmNoQmFyLnBsYWNlaG9sZGVyID0gJ0VudGVyIGEgY2l0eSc7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChzZWFyY2hCYXIpO1xuXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGVycm9yTWVzc2FnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdlcnJvci1tZXNzYWdlLWNvbnRhaW5lcicsICdoaWRkZW4nKTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2VJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZXJyb3JNZXNzYWdlSWNvbi5zcmMgPSB3YXJuaW5nSWNvbjtcbiAgICBlcnJvck1lc3NhZ2VJY29uLmNsYXNzTGlzdC5hZGQoJ2Vycm9yLW1lc3NhZ2UtaWNvbicpO1xuICAgIGVycm9yTWVzc2FnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChlcnJvck1lc3NhZ2VJY29uKTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2Vycm9yLW1lc3NhZ2UnKTtcbiAgICBlcnJvck1lc3NhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoZXJyb3JNZXNzYWdlKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGVycm9yTWVzc2FnZUNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBjdXN0b21DdXJzb3JUb2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY3VzdG9tQ3Vyc29yVG9nZ2xlLmlkID0gJ2N1c3RvbS1jdXJzb3ItdG9nZ2xlJztcbiAgICBjdXN0b21DdXJzb3JUb2dnbGUuaW5uZXJUZXh0ID0gJ1RvZ2dsZSBjdXN0b20gY3Vyc29yJztcbiAgICBjdXN0b21DdXJzb3JUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVDdXN0b21DdXJzb3IpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3VzdG9tQ3Vyc29yVG9nZ2xlKTtcbn1cblxuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVySW5mb3JtYXRpb25TY3JlZW4od2VhdGhlckRhdGEsIHVuaXQpIHtcbiAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuICAgIG1haW4uaWQgPSAnd2VhdGhlci1pbmZvcm1hdGlvbi1zY3JlZW4nO1xuXG4gICAgLy8gc2V0IGN1c3RvbSBjdXJzb3JcbiAgICBjb25zdCBjdXN0b21DdXJzb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VzdG9tLWN1cnNvcicpO1xuICAgIGlmIChjdXN0b21DdXJzb3IpIHtcbiAgICAgICAgaWYgKHVuaXQgPT09ICdtZXRyaWMnKSB7XG4gICAgICAgICAgICBjdXN0b21DdXJzb3IuY2xhc3NOYW1lID1cbiAgICAgICAgICAgICAgICB3ZWF0aGVyRGF0YS50ZW1wZXJhdHVyZSA+IDE1ID8gJ2hvdCcgOiAnY29sZCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdXN0b21DdXJzb3IuY2xhc3NOYW1lID1cbiAgICAgICAgICAgICAgICB3ZWF0aGVyRGF0YS50ZW1wZXJhdHVyZSA+IDYwID8gJ2hvdCcgOiAnY29sZCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBiYWNrZ3JvdW5kVmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgIGJhY2tncm91bmRWaWRlby5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kLXZpZGVvJyk7XG4gICAgYmFja2dyb3VuZFZpZGVvLnNyYyA9IFdFQVRIRVJfTUVESUFbd2VhdGhlckRhdGEud2VhdGhlckljb25JZF0udmlkZW87XG4gICAgYmFja2dyb3VuZFZpZGVvLm11dGVkID0gdHJ1ZTtcbiAgICBiYWNrZ3JvdW5kVmlkZW8uYXV0b3BsYXkgPSB0cnVlO1xuICAgIGJhY2tncm91bmRWaWRlby5sb29wID0gdHJ1ZTtcbiAgICBiYWNrZ3JvdW5kVmlkZW8ub25sb2FkZWRkYXRhID0gcmVtb3ZlTG9hZGluZ1NjcmVlbjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGJhY2tncm91bmRWaWRlbyk7XG5cbiAgICBjb25zdCB0b3BXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIHRvcFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpO1xuICAgIHRvcFdyYXBwZXIuaWQgPSAndG9wJztcbiAgICBtYWluLmFwcGVuZENoaWxkKHRvcFdyYXBwZXIpO1xuXG4gICAgY29uc3QgZ29CYWNrQXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgZ29CYWNrQXJyb3cuY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtY2lyY2xlLWNoZXZyb24tbGVmdCcpO1xuICAgIGdvQmFja0Fycm93LmlkID0gJ2dvLWJhY2stYnV0dG9uJztcbiAgICBnb0JhY2tBcnJvdy50aXRsZSA9ICdHTyBCQUNLJztcbiAgICBnb0JhY2tBcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlJbml0aWFsU2NyZWVuKTtcbiAgICB0b3BXcmFwcGVyLmFwcGVuZENoaWxkKGdvQmFja0Fycm93KTtcblxuICAgIGNvbnN0IGNpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjaXR5VGl0bGUuaWQgPSAnY2l0eS10aXRsZSc7XG4gICAgLy8gSWYgaXQncyB0aGUgVVMsIHRoZW4gc2hvdyB0aGUgc3RhdGUgaW5zdGVhZCBvZiB0aGUgY291bnRyeVxuICAgIGNpdHlUaXRsZS5pbm5lclRleHQgPSBgJHt3ZWF0aGVyRGF0YS5jaXR5fSwgJHtcbiAgICAgICAgd2VhdGhlckRhdGEuY291bnRyeUNvZGUgPT09ICdVUydcbiAgICAgICAgICAgID8gd2VhdGhlckRhdGEuc3RhdGVcbiAgICAgICAgICAgIDogd2VhdGhlckRhdGEuY291bnRyeUNvZGVcbiAgICB9YDtcbiAgICB0b3BXcmFwcGVyLmFwcGVuZENoaWxkKGNpdHlUaXRsZSk7XG5cbiAgICBjb25zdCBjZW50cmFsV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjZW50cmFsV3JhcHBlci5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyJyk7XG4gICAgY2VudHJhbFdyYXBwZXIuaWQgPSAnY2VudHJhbCc7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjZW50cmFsV3JhcHBlcik7XG5cbiAgICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHdlYXRoZXJJY29uLmlkID0gJ3dlYXRoZXItaWNvbic7XG4gICAgd2VhdGhlckljb24uc3JjID0gV0VBVEhFUl9NRURJQVt3ZWF0aGVyRGF0YS53ZWF0aGVySWNvbklkXS5pY29uO1xuICAgIHdlYXRoZXJJY29uLmFsdCA9IGAke3dlYXRoZXJEYXRhLndlYXRoZXJ9IHdlYXRoZXIgaWNvbmA7XG4gICAgY2VudHJhbFdyYXBwZXIuYXBwZW5kQ2hpbGQod2VhdGhlckljb24pO1xuXG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGVtcGVyYXR1cmUuaWQgPSAndGVtcGVyYXR1cmUnO1xuICAgIHRlbXBlcmF0dXJlLmlubmVyVGV4dCA9IGAke3dlYXRoZXJEYXRhLnRlbXBlcmF0dXJlfSAke1VOSVRTW3VuaXRdLnRlbXBlcmF0dXJlfWA7XG4gICAgY2VudHJhbFdyYXBwZXIuYXBwZW5kQ2hpbGQodGVtcGVyYXR1cmUpO1xuXG4gICAgY29uc3QgdW5pdHNUb2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdW5pdHNUb2dnbGUuaWQgPSAndW5pdHMtdG9nZ2xlJztcbiAgICB1bml0c1RvZ2dsZS5pbm5lclRleHQgPSBgRGlzcGxheSAke3VuaXQgPT09ICdtZXRyaWMnID8gJ8KwRicgOiAnwrBDJ31gO1xuICAgIHVuaXRzVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlVW5pdHMpO1xuICAgIGNlbnRyYWxXcmFwcGVyLmFwcGVuZENoaWxkKHVuaXRzVG9nZ2xlKTtcblxuICAgIGNvbnN0IGJvdHRvbUxlZnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGJvdHRvbUxlZnRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXInKTtcbiAgICBib3R0b21MZWZ0V3JhcHBlci5pZCA9ICdib3R0b20tbGVmdCc7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChib3R0b21MZWZ0V3JhcHBlcik7XG5cbiAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgZmVlbHNMaWtlLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMnKTtcbiAgICBmZWVsc0xpa2UuaWQgPSAnZmVlbHMtbGlrZSc7XG4gICAgY29uc3QgZmVlbHNMaWtlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGZlZWxzTGlrZUljb24uc3JjID0gdGVtcGVyYXR1cmVJY29uU291cmNlO1xuICAgIGZlZWxzTGlrZUljb24uY2xhc3NMaXN0LmFkZCgnZGV0YWlscy1pY29uJyk7XG4gICAgZmVlbHNMaWtlLmFwcGVuZENoaWxkKGZlZWxzTGlrZUljb24pO1xuICAgIGNvbnN0IGZlZWxzTGlrZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGZlZWxzTGlrZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgZmVlbHNMaWtlVGl0bGUuaW5uZXJUZXh0ID0gJ0ZlZWxzIGxpa2U6ICc7XG4gICAgZmVlbHNMaWtlLmFwcGVuZENoaWxkKGZlZWxzTGlrZVRpdGxlKTtcbiAgICBjb25zdCBmZWVsc0xpa2VWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBmZWVsc0xpa2VWYWx1ZS5jbGFzc0xpc3QuYWRkKCd2YWx1ZScpO1xuICAgIGZlZWxzTGlrZVZhbHVlLmlubmVyVGV4dCA9IGAke3dlYXRoZXJEYXRhLmZlZWxzTGlrZX0gJHtVTklUU1t1bml0XS50ZW1wZXJhdHVyZX1gO1xuICAgIGZlZWxzTGlrZS5hcHBlbmRDaGlsZChmZWVsc0xpa2VWYWx1ZSk7XG4gICAgYm90dG9tTGVmdFdyYXBwZXIuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlKTtcblxuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGh1bWlkaXR5LmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMnKTtcbiAgICBodW1pZGl0eS5pZCA9ICdodW1pZGl0eSc7XG4gICAgY29uc3QgaHVtaWRpdHlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaHVtaWRpdHlJY29uLnNyYyA9IGh1bWlkaXR5SWNvblNvdXJjZTtcbiAgICBodW1pZGl0eUljb24uY2xhc3NMaXN0LmFkZCgnZGV0YWlscy1pY29uJyk7XG4gICAgaHVtaWRpdHkuYXBwZW5kQ2hpbGQoaHVtaWRpdHlJY29uKTtcbiAgICBjb25zdCBodW1pZGl0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGh1bWlkaXR5VGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICBodW1pZGl0eVRpdGxlLmlubmVyVGV4dCA9ICdIdW1pZGl0eTogJztcbiAgICBodW1pZGl0eS5hcHBlbmRDaGlsZChodW1pZGl0eVRpdGxlKTtcbiAgICBjb25zdCBodW1pZGl0eVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGh1bWlkaXR5VmFsdWUuY2xhc3NMaXN0LmFkZCgndmFsdWUnKTtcbiAgICBodW1pZGl0eVZhbHVlLmlubmVyVGV4dCA9IGAke3dlYXRoZXJEYXRhLmh1bWlkaXR5fSVgO1xuICAgIGh1bWlkaXR5LmFwcGVuZENoaWxkKGh1bWlkaXR5VmFsdWUpO1xuICAgIGJvdHRvbUxlZnRXcmFwcGVyLmFwcGVuZENoaWxkKGh1bWlkaXR5KTtcblxuICAgIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICB3aW5kU3BlZWQuY2xhc3NMaXN0LmFkZCgnZGV0YWlscycpO1xuICAgIHdpbmRTcGVlZC5pZCA9ICd3aW5kLXNwZWVkJztcbiAgICBjb25zdCB3aW5kU3BlZWRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgd2luZFNwZWVkSWNvbi5zcmMgPSB3aW5kU3BlZWRJY29uU291cmNlO1xuICAgIHdpbmRTcGVlZEljb24uY2xhc3NMaXN0LmFkZCgnZGV0YWlscy1pY29uJyk7XG4gICAgd2luZFNwZWVkLmFwcGVuZENoaWxkKHdpbmRTcGVlZEljb24pO1xuICAgIGNvbnN0IHdpbmRTcGVlZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHdpbmRTcGVlZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgd2luZFNwZWVkVGl0bGUuaW5uZXJUZXh0ID0gJ1dpbmQgc3BlZWQ6ICc7XG4gICAgd2luZFNwZWVkLmFwcGVuZENoaWxkKHdpbmRTcGVlZFRpdGxlKTtcbiAgICBjb25zdCB3aW5kU3BlZWRWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB3aW5kU3BlZWRWYWx1ZS5jbGFzc0xpc3QuYWRkKCd2YWx1ZScpO1xuICAgIHdpbmRTcGVlZFZhbHVlLmlubmVyVGV4dCA9IGAke3dlYXRoZXJEYXRhLndpbmRTcGVlZH0gJHtVTklUU1t1bml0XS5zcGVlZH1gO1xuICAgIHdpbmRTcGVlZC5hcHBlbmRDaGlsZCh3aW5kU3BlZWRWYWx1ZSk7XG4gICAgYm90dG9tTGVmdFdyYXBwZXIuYXBwZW5kQ2hpbGQod2luZFNwZWVkKTtcblxuICAgIGNvbnN0IGJvdHRvbVJpZ2h0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBib3R0b21SaWdodFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpO1xuICAgIGJvdHRvbVJpZ2h0V3JhcHBlci5pZCA9ICdib3R0b20tcmlnaHQnO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoYm90dG9tUmlnaHRXcmFwcGVyKTtcblxuICAgIGNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgd2VhdGhlci5pZCA9ICd3ZWF0aGVyJztcbiAgICB3ZWF0aGVyLmlubmVyVGV4dCA9IHdlYXRoZXJEYXRhLndlYXRoZXI7XG4gICAgYm90dG9tUmlnaHRXcmFwcGVyLmFwcGVuZENoaWxkKHdlYXRoZXIpO1xuXG4gICAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHdlYXRoZXJEZXNjcmlwdGlvbi5pZCA9ICd3ZWF0aGVyLWRlc2NyaXB0aW9uJztcbiAgICB3ZWF0aGVyRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gY2FwaXRhbGl6ZSh3ZWF0aGVyRGF0YS53ZWF0aGVyRGVzY3JpcHRpb24pO1xuICAgIGJvdHRvbVJpZ2h0V3JhcHBlci5hcHBlbmRDaGlsZCh3ZWF0aGVyRGVzY3JpcHRpb24pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRBbmREaXNwbGF5V2VhdGhlckRhdGEobG9jYXRpb24sIHVuaXQpIHtcbiAgICBkaXNwbGF5TG9hZGluZ1NjcmVlbigpO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEobG9jYXRpb24sIHVuaXQpO1xuICAgICAgICBkaXNwbGF5V2VhdGhlckluZm9ybWF0aW9uU2NyZWVuKHdlYXRoZXJEYXRhLCB1bml0KTtcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgcmVtb3ZlTG9hZGluZ1NjcmVlbigpO1xuICAgICAgICBkaXNwbGF5RXJyb3JNZXNzYWdlKCk7XG4gICAgfVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBub3RJbkluaXRpYWxTY3JlZW4gPSAhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luaXRpYWwtc2NyZWVuJyk7XG4gICAgaWYgKG5vdEluSW5pdGlhbFNjcmVlbikgcmV0dXJuO1xuXG4gICAgY29uc3QgZW50ZXJLZXlXYXNQcmVzc2VkID0gZXZlbnQua2V5ID09PSAnRW50ZXInO1xuICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtYmFyJyk7XG4gICAgY29uc3Qgc2VhcmNoQmFySXNGb2N1c2VkID0gc2VhcmNoQmFyID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIGlmIChlbnRlcktleVdhc1ByZXNzZWQgJiYgc2VhcmNoQmFySXNGb2N1c2VkKSB7XG4gICAgICAgIGdldEFuZERpc3BsYXlXZWF0aGVyRGF0YShzZWFyY2hCYXIudmFsdWUsIGN1cnJlbnRVbml0KTtcbiAgICAgICAgbGFzdFNlYXJjaCA9IHNlYXJjaEJhci52YWx1ZTtcbiAgICB9XG59KTtcblxuZnVuY3Rpb24gdG9nZ2xlVW5pdHMoKSB7XG4gICAgaWYgKGN1cnJlbnRVbml0ID09PSAnbWV0cmljJykge1xuICAgICAgICBjdXJyZW50VW5pdCA9ICdpbXBlcmlhbCc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudFVuaXQgPSAnbWV0cmljJztcbiAgICB9XG4gICAgZ2V0QW5kRGlzcGxheVdlYXRoZXJEYXRhKGxhc3RTZWFyY2gsIGN1cnJlbnRVbml0KTtcbn1cblxuZGlzcGxheUluaXRpYWxTY3JlZW4oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
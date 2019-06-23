(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@clappr/core"), require("@clappr/flash-playback"));
	else if(typeof define === 'function' && define.amd)
		define(["@clappr/core", "@clappr/flash-playback"], factory);
	else if(typeof exports === 'object')
		exports["FlashlsPlayback"] = factory(require("@clappr/core"), require("@clappr/flash-playback"));
	else
		root["FlashlsPlayback"] = factory(root["Clappr"], root["ClapprFlash"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__clappr_core__, __WEBPACK_EXTERNAL_MODULE__clappr_flash_playback__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/flashls.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/set-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/core-js/library/fn/object/set-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/*!********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/inherits.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/*!*************************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;

/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Symbol;

/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');

/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js")
  , toLength  = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js")
  , toIndex   = __webpack_require__(/*! ./_to-index */ "./node_modules/core-js/library/modules/_to-index.js");
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js")
  , document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js")
  , gOPS    = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js")
  , pIE     = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js")
  , core      = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js")
  , ctx       = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js")
  , hide      = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js")
  , createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document && document.documentElement;

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function(){
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js")
  , descriptor     = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js")
  , setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js")
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")
  , $export        = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js")
  , redefine       = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js")
  , hide           = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")
  , has            = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js")
  , Iterators      = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js")
  , $iterCreate    = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js")
  , setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js")
  , getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js")
  , ITERATOR       = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_keyof.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_keyof.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js")
  , toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")('meta')
  , isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js")
  , has      = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js")
  , setDesc  = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js")
  , dPs         = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js")
  , enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js")
  , IE_PROTO    = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js")
  , IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js")
  , toPrimitive    = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js")
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js")
  , anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js")
  , getKeys  = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js")
  , createDesc     = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js")
  , toIObject      = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js")
  , toPrimitive    = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js")
  , has            = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js")
  , IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js")
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js")
  , gOPN      = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js")
  , hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js")
  , toObject    = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js")
  , IE_PROTO    = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js")
  , toIObject    = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js")
  , arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false)
  , IE_PROTO     = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js")
  , enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js")
  , anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f
  , has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js")
  , TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys')
  , uid    = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js")
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js")
  , defined   = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-index.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js")
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js")
  , defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js")
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js")
  , core           = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js")
  , LIBRARY        = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")
  , wksExt         = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js")
  , defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks')
  , uid        = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")
  , Symbol     = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js")
  , step             = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js")
  , Iterators        = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js")
  , toIObject        = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js")
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js")});

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', {defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f});

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/library/modules/_set-proto.js").set});

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js")
  , has            = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js")
  , DESCRIPTORS    = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js")
  , $export        = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js")
  , redefine       = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js")
  , META           = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").KEY
  , $fails         = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")
  , shared         = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")
  , setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js")
  , uid            = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")
  , wks            = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")
  , wksExt         = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js")
  , wksDefine      = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")
  , keyOf          = __webpack_require__(/*! ./_keyof */ "./node_modules/core-js/library/modules/_keyof.js")
  , enumKeys       = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js")
  , isArray        = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js")
  , anObject       = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js")
  , toIObject      = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js")
  , toPrimitive    = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js")
  , createDesc     = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js")
  , _create        = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js")
  , gOPNExt        = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js")
  , $GOPD          = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js")
  , $DP            = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js")
  , $keys          = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js")
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f  = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('observable');

/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js");
var global        = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js")
  , hide          = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")
  , Iterators     = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js")
  , TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),

/***/ "./src/flashls.js":
/*!************************!*\
  !*** ./src/flashls.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _core = __webpack_require__(/*! @clappr/core */ "@clappr/core");

var _flashPlayback = __webpack_require__(/*! @clappr/flash-playback */ "@clappr/flash-playback");

var _flashls_events = __webpack_require__(/*! ./flashls_events */ "./src/flashls_events.js");

var _flashls_events2 = _interopRequireDefault(_flashls_events);

var _HLSPlayer = __webpack_require__(/*! ./public/HLSPlayer.swf */ "./src/public/HLSPlayer.swf");

var _HLSPlayer2 = _interopRequireDefault(_HLSPlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var MAX_ATTEMPTS = 60;
var AUTO = -1;

var FlasHLS = function (_BaseFlashPlayback) {
  (0, _inherits3.default)(FlasHLS, _BaseFlashPlayback);
  (0, _createClass3.default)(FlasHLS, [{
    key: 'name',
    get: function get() {
      return 'flashls';
    }
  }, {
    key: 'swfPath',
    get: function get() {
      return (0, _core.template)(_HLSPlayer2.default)({ baseUrl: this._baseUrl });
    }
  }, {
    key: 'levels',
    get: function get() {
      return this._levels || [];
    }
  }, {
    key: 'currentLevel',
    get: function get() {
      if (this._currentLevel === null || this._currentLevel === undefined) return AUTO;else return this._currentLevel; //0 is a valid level ID
    },
    set: function set(id) {
      this._currentLevel = id;
      this.trigger(_core.Events.PLAYBACK_LEVEL_SWITCH_START);
      this.el.playerSetCurrentLevel(id);
    }

    /**
     * Determine if the playback has ended.
     * @property ended
     * @type Boolean
     */

  }, {
    key: 'ended',
    get: function get() {
      return this._hasEnded;
    }

    /**
     * Determine if the playback is buffering.
     * This is related to the PLAYBACK_BUFFERING and PLAYBACK_BUFFERFULL events
     * @property buffering
     * @type Boolean
     */

  }, {
    key: 'buffering',
    get: function get() {
      return !!this._bufferingState && !this._hasEnded;
    }
  }], [{
    key: 'version',
    get: function get() {
      return "0.3.6";
    }
  }]);

  function FlasHLS() {
    (0, _classCallCheck3.default)(this, FlasHLS);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseFlashPlayback.call.apply(_BaseFlashPlayback, [this].concat(args)));

    _this._src = _this.options.src;
    _this._baseUrl = _this.options.baseUrl;
    _this._initHlsParameters(_this.options);
    // TODO can this be private?
    _this.highDefinition = false;
    _this._autoPlay = _this.options.autoPlay;
    _this._loop = _this.options.loop;
    _this._defaultSettings = {
      left: ['playstop'],
      default: ['seekbar'],
      right: ['fullscreen', 'volume', 'hd-indicator'],
      seekEnabled: false
    };
    _this.settings = _core.$.extend({}, _this._defaultSettings);
    _this._playbackType = _core.Playback.LIVE;
    _this._hasEnded = false;
    _this._addListeners();
    return _this;
  }

  FlasHLS.prototype._initHlsParameters = function _initHlsParameters(options) {
    this._autoStartLoad = options.autoStartLoad === undefined ? true : options.autoStartLoad;
    this._capLevelToStage = options.capLevelToStage === undefined ? false : options.capLevelToStage;
    this._maxLevelCappingMode = options.maxLevelCappingMode === undefined ? 'downscale' : options.maxLevelCappingMode;
    this._minBufferLength = options.minBufferLength === undefined ? -1 : options.minBufferLength;
    this._minBufferLengthCapping = options.minBufferLengthCapping === undefined ? -1 : options.minBufferLengthCapping;
    this._maxBufferLength = options.maxBufferLength === undefined ? 120 : options.maxBufferLength;
    this._maxBackBufferLength = options.maxBackBufferLength === undefined ? 30 : options.maxBackBufferLength;
    this._lowBufferLength = options.lowBufferLength === undefined ? 3 : options.lowBufferLength;
    this._mediaTimePeriod = options.mediaTimePeriod === undefined ? 100 : options.mediaTimePeriod;
    this._fpsDroppedMonitoringPeriod = options.fpsDroppedMonitoringPeriod === undefined ? 5000 : options.fpsDroppedMonitoringPeriod;
    this._fpsDroppedMonitoringThreshold = options.fpsDroppedMonitoringThreshold === undefined ? 0.2 : options.fpsDroppedMonitoringThreshold;
    this._capLevelonFPSDrop = options.capLevelonFPSDrop === undefined ? false : options.capLevelonFPSDrop;
    this._smoothAutoSwitchonFPSDrop = options.smoothAutoSwitchonFPSDrop === undefined ? this.capLevelonFPSDrop : options.smoothAutoSwitchonFPSDrop;
    this._switchDownOnLevelError = options.switchDownOnLevelError === undefined ? true : options.switchDownOnLevelError;
    this._seekMode = options.seekMode === undefined ? 'ACCURATE' : options.seekMode;
    this._keyLoadMaxRetry = options.keyLoadMaxRetry === undefined ? 3 : options.keyLoadMaxRetry;
    this._keyLoadMaxRetryTimeout = options.keyLoadMaxRetryTimeout === undefined ? 64000 : options.keyLoadMaxRetryTimeout;
    this._fragmentLoadMaxRetry = options.fragmentLoadMaxRetry === undefined ? 3 : options.fragmentLoadMaxRetry;
    this._fragmentLoadMaxRetryTimeout = options.fragmentLoadMaxRetryTimeout === undefined ? 4000 : options.fragmentLoadMaxRetryTimeout;
    this._fragmentLoadSkipAfterMaxRetry = options.fragmentLoadSkipAfterMaxRetry === undefined ? true : options.fragmentLoadSkipAfterMaxRetry;
    this._maxSkippedFragments = options.maxSkippedFragments === undefined ? 5 : options.maxSkippedFragments;
    this._flushLiveURLCache = options.flushLiveURLCache === undefined ? false : options.flushLiveURLCache;
    this._initialLiveManifestSize = options.initialLiveManifestSize === undefined ? 1 : options.initialLiveManifestSize;
    this._manifestLoadMaxRetry = options.manifestLoadMaxRetry === undefined ? 3 : options.manifestLoadMaxRetry;
    this._manifestLoadMaxRetryTimeout = options.manifestLoadMaxRetryTimeout === undefined ? 64000 : options.manifestLoadMaxRetryTimeout;
    this._manifestRedundantLoadmaxRetry = options.manifestRedundantLoadmaxRetry === undefined ? 3 : options.manifestRedundantLoadmaxRetry;
    this._startFromBitrate = options.startFromBitrate === undefined ? -1 : options.startFromBitrate;
    this._startFromLevel = options.startFromLevel === undefined ? -1 : options.startFromLevel;
    this._autoStartMaxDuration = options.autoStartMaxDuration === undefined ? -1 : options.autoStartMaxDuration;
    this._seekFromLevel = options.seekFromLevel === undefined ? -1 : options.seekFromLevel;
    this._useHardwareVideoDecoder = options.useHardwareVideoDecoder === undefined ? false : options.useHardwareVideoDecoder;
    this._hlsLogEnabled = options.hlsLogEnabled === undefined ? true : options.hlsLogEnabled;
    this._logDebug = options.logDebug === undefined ? false : options.logDebug;
    this._logDebug2 = options.logDebug2 === undefined ? false : options.logDebug2;
    this._logWarn = options.logWarn === undefined ? true : options.logWarn;
    this._logError = options.logError === undefined ? true : options.logError;
    this._hlsMinimumDvrSize = options.hlsMinimumDvrSize === undefined ? 60 : options.hlsMinimumDvrSize;
  };

  FlasHLS.prototype._addListeners = function _addListeners() {
    var _this2 = this;

    _core.Mediator.on(this.cid + ':flashready', function () {
      return _this2._bootstrap();
    });
    _core.Mediator.on(this.cid + ':timeupdate', function (timeMetrics) {
      return _this2._updateTime(timeMetrics);
    });
    _core.Mediator.on(this.cid + ':playbackstate', function (state) {
      return _this2._setPlaybackState(state);
    });
    _core.Mediator.on(this.cid + ':levelchanged', function (level) {
      return _this2._levelChanged(level);
    });
    _core.Mediator.on(this.cid + ':error', function (code, url, message) {
      return _this2._flashPlaybackError(code, url, message);
    });
    _core.Mediator.on(this.cid + ':fragmentloaded', function (loadmetrics) {
      return _this2._onFragmentLoaded(loadmetrics);
    });
    _core.Mediator.on(this.cid + ':levelendlist', function (level) {
      return _this2._onLevelEndlist(level);
    });
  };

  FlasHLS.prototype.stopListening = function stopListening() {
    _BaseFlashPlayback.prototype.stopListening.call(this);
    _core.Mediator.off(this.cid + ':flashready');
    _core.Mediator.off(this.cid + ':timeupdate');
    _core.Mediator.off(this.cid + ':playbackstate');
    _core.Mediator.off(this.cid + ':levelchanged');
    _core.Mediator.off(this.cid + ':playbackerror');
    _core.Mediator.off(this.cid + ':fragmentloaded');
    _core.Mediator.off(this.cid + ':manifestloaded');
    _core.Mediator.off(this.cid + ':levelendlist');
  };

  FlasHLS.prototype._bootstrap = function _bootstrap() {
    var _this3 = this;

    if (this.el.playerLoad) {
      this.el.width = '100%';
      this.el.height = '100%';
      this._isReadyState = true;
      this._srcLoaded = false;
      this._currentState = 'IDLE';
      this._setFlashSettings();
      this._updatePlaybackType();
      if (this._autoPlay || this._shouldPlayOnManifestLoaded) this.play();

      this.trigger(_core.Events.PLAYBACK_READY, this.name);
    } else {
      this._bootstrapAttempts = this._bootstrapAttempts || 0;
      if (++this._bootstrapAttempts <= MAX_ATTEMPTS) {
        setTimeout(function () {
          return _this3._bootstrap();
        }, 50);
      } else {
        var formattedError = this.createError({
          code: 'playerLoadFail_maxNumberAttemptsReached',
          description: this.name + ' error: Max number of attempts reached',
          level: _core.PlayerError.Levels.FATAL,
          raw: {}
        });
        this.trigger(_core.Events.PLAYBACK_ERROR, formattedError);
      }
    }
  };

  FlasHLS.prototype._setFlashSettings = function _setFlashSettings() {
    this.el.playerSetAutoStartLoad(this._autoStartLoad);
    this.el.playerSetCapLevelToStage(this._capLevelToStage);
    this.el.playerSetMaxLevelCappingMode(this._maxLevelCappingMode);
    this.el.playerSetMinBufferLength(this._minBufferLength);
    this.el.playerSetMinBufferLengthCapping(this._minBufferLengthCapping);
    this.el.playerSetMaxBufferLength(this._maxBufferLength);
    this.el.playerSetMaxBackBufferLength(this._maxBackBufferLength);
    this.el.playerSetLowBufferLength(this._lowBufferLength);
    this.el.playerSetMediaTimePeriod(this._mediaTimePeriod);
    this.el.playerSetFpsDroppedMonitoringPeriod(this._fpsDroppedMonitoringPeriod);
    this.el.playerSetFpsDroppedMonitoringThreshold(this._fpsDroppedMonitoringThreshold);
    this.el.playerSetCapLevelonFPSDrop(this._capLevelonFPSDrop);
    this.el.playerSetSmoothAutoSwitchonFPSDrop(this._smoothAutoSwitchonFPSDrop);
    this.el.playerSetSwitchDownOnLevelError(this._switchDownOnLevelError);
    this.el.playerSetSeekMode(this._seekMode);
    this.el.playerSetKeyLoadMaxRetry(this._keyLoadMaxRetry);
    this.el.playerSetKeyLoadMaxRetryTimeout(this._keyLoadMaxRetryTimeout);
    this.el.playerSetFragmentLoadMaxRetry(this._fragmentLoadMaxRetry);
    this.el.playerSetFragmentLoadMaxRetryTimeout(this._fragmentLoadMaxRetryTimeout);
    this.el.playerSetFragmentLoadSkipAfterMaxRetry(this._fragmentLoadSkipAfterMaxRetry);
    this.el.playerSetMaxSkippedFragments(this._maxSkippedFragments);
    this.el.playerSetFlushLiveURLCache(this._flushLiveURLCache);
    this.el.playerSetInitialLiveManifestSize(this._initialLiveManifestSize);
    this.el.playerSetManifestLoadMaxRetry(this._manifestLoadMaxRetry);
    this.el.playerSetManifestLoadMaxRetryTimeout(this._manifestLoadMaxRetryTimeout);
    this.el.playerSetManifestRedundantLoadmaxRetry(this._manifestRedundantLoadmaxRetry);
    this.el.playerSetStartFromBitrate(this._startFromBitrate);
    this.el.playerSetStartFromLevel(this._startFromLevel);
    this.el.playerSetAutoStartMaxDuration(this._autoStartMaxDuration);
    this.el.playerSetSeekFromLevel(this._seekFromLevel);
    this.el.playerSetUseHardwareVideoDecoder(this._useHardwareVideoDecoder);
    this.el.playerSetLogInfo(this._hlsLogEnabled);
    this.el.playerSetLogDebug(this._logDebug);
    this.el.playerSetLogDebug2(this._logDebug2);
    this.el.playerSetLogWarn(this._logWarn);
    this.el.playerSetLogError(this._logError);
  };

  FlasHLS.prototype.setAutoStartLoad = function setAutoStartLoad(autoStartLoad) {
    this._autoStartLoad = autoStartLoad;
    this.el.playerSetAutoStartLoad(this._autoStartLoad);
  };

  FlasHLS.prototype.setCapLevelToStage = function setCapLevelToStage(capLevelToStage) {
    this._capLevelToStage = capLevelToStage;
    this.el.playerSetCapLevelToStage(this._capLevelToStage);
  };

  FlasHLS.prototype.setMaxLevelCappingMode = function setMaxLevelCappingMode(maxLevelCappingMode) {
    this._maxLevelCappingMode = maxLevelCappingMode;
    this.el.playerSetMaxLevelCappingMode(this._maxLevelCappingMode);
  };

  FlasHLS.prototype.setSetMinBufferLength = function setSetMinBufferLength(minBufferLength) {
    this._minBufferLength = minBufferLength;
    this.el.playerSetMinBufferLength(this._minBufferLength);
  };

  FlasHLS.prototype.setMinBufferLengthCapping = function setMinBufferLengthCapping(minBufferLengthCapping) {
    this._minBufferLengthCapping = minBufferLengthCapping;
    this.el.playerSetMinBufferLengthCapping(this._minBufferLengthCapping);
  };

  FlasHLS.prototype.setMaxBufferLength = function setMaxBufferLength(maxBufferLength) {
    this._maxBufferLength = maxBufferLength;
    this.el.playerSetMaxBufferLength(this._maxBufferLength);
  };

  FlasHLS.prototype.setMaxBackBufferLength = function setMaxBackBufferLength(maxBackBufferLength) {
    this._maxBackBufferLength = maxBackBufferLength;
    this.el.playerSetMaxBackBufferLength(this._maxBackBufferLength);
  };

  FlasHLS.prototype.setLowBufferLength = function setLowBufferLength(lowBufferLength) {
    this._lowBufferLength = lowBufferLength;
    this.el.playerSetLowBufferLength(this._lowBufferLength);
  };

  FlasHLS.prototype.setMediaTimePeriod = function setMediaTimePeriod(mediaTimePeriod) {
    this._mediaTimePeriod = mediaTimePeriod;
    this.el.playerSetMediaTimePeriod(this._mediaTimePeriod);
  };

  FlasHLS.prototype.setFpsDroppedMonitoringPeriod = function setFpsDroppedMonitoringPeriod(fpsDroppedMonitoringPeriod) {
    this._fpsDroppedMonitoringPeriod = fpsDroppedMonitoringPeriod;
    this.el.playerSetFpsDroppedMonitoringPeriod(this._fpsDroppedMonitoringPeriod);
  };

  FlasHLS.prototype.setFpsDroppedMonitoringThreshold = function setFpsDroppedMonitoringThreshold(fpsDroppedMonitoringThreshold) {
    this._fpsDroppedMonitoringThreshold = fpsDroppedMonitoringThreshold;
    this.el.playerSetFpsDroppedMonitoringThreshold(this._fpsDroppedMonitoringThreshold);
  };

  FlasHLS.prototype.setCapLevelonFPSDrop = function setCapLevelonFPSDrop(capLevelonFPSDrop) {
    this._capLevelonFPSDrop = capLevelonFPSDrop;
    this.el.playerSetCapLevelonFPSDrop(this._capLevelonFPSDrop);
  };

  FlasHLS.prototype.setSmoothAutoSwitchonFPSDrop = function setSmoothAutoSwitchonFPSDrop(smoothAutoSwitchonFPSDrop) {
    this._smoothAutoSwitchonFPSDrop = smoothAutoSwitchonFPSDrop;
    this.el.playerSetSmoothAutoSwitchonFPSDrop(this._smoothAutoSwitchonFPSDrop);
  };

  FlasHLS.prototype.setSwitchDownOnLevelError = function setSwitchDownOnLevelError(switchDownOnLevelError) {
    this._switchDownOnLevelError = switchDownOnLevelError;
    this.el.playerSetSwitchDownOnLevelError(this._switchDownOnLevelError);
  };

  FlasHLS.prototype.setSeekMode = function setSeekMode(seekMode) {
    this._seekMode = seekMode;
    this.el.playerSetSeekMode(this._seekMode);
  };

  FlasHLS.prototype.setKeyLoadMaxRetry = function setKeyLoadMaxRetry(keyLoadMaxRetry) {
    this._keyLoadMaxRetry = keyLoadMaxRetry;
    this.el.playerSetKeyLoadMaxRetry(this._keyLoadMaxRetry);
  };

  FlasHLS.prototype.setKeyLoadMaxRetryTimeout = function setKeyLoadMaxRetryTimeout(keyLoadMaxRetryTimeout) {
    this._keyLoadMaxRetryTimeout = keyLoadMaxRetryTimeout;
    this.el.playerSetKeyLoadMaxRetryTimeout(this._keyLoadMaxRetryTimeout);
  };

  FlasHLS.prototype.setFragmentLoadMaxRetry = function setFragmentLoadMaxRetry(fragmentLoadMaxRetry) {
    this._fragmentLoadMaxRetry = fragmentLoadMaxRetry;
    this.el.playerSetFragmentLoadMaxRetry(this._fragmentLoadMaxRetry);
  };

  FlasHLS.prototype.setFragmentLoadMaxRetryTimeout = function setFragmentLoadMaxRetryTimeout(fragmentLoadMaxRetryTimeout) {
    this._fragmentLoadMaxRetryTimeout = fragmentLoadMaxRetryTimeout;
    this.el.playerSetFragmentLoadMaxRetryTimeout(this._fragmentLoadMaxRetryTimeout);
  };

  FlasHLS.prototype.setFragmentLoadSkipAfterMaxRetry = function setFragmentLoadSkipAfterMaxRetry(fragmentLoadSkipAfterMaxRetry) {
    this._fragmentLoadSkipAfterMaxRetry = fragmentLoadSkipAfterMaxRetry;
    this.el.playerSetFragmentLoadSkipAfterMaxRetry(this._fragmentLoadSkipAfterMaxRetry);
  };

  FlasHLS.prototype.setMaxSkippedFragments = function setMaxSkippedFragments(maxSkippedFragments) {
    this._maxSkippedFragments = maxSkippedFragments;
    this.el.playerSetMaxSkippedFragments(this._maxSkippedFragments);
  };

  FlasHLS.prototype.setFlushLiveURLCache = function setFlushLiveURLCache(flushLiveURLCache) {
    this._flushLiveURLCache = flushLiveURLCache;
    this.el.playerSetFlushLiveURLCache(this._flushLiveURLCache);
  };

  FlasHLS.prototype.setInitialLiveManifestSize = function setInitialLiveManifestSize(initialLiveManifestSize) {
    this._initialLiveManifestSize = initialLiveManifestSize;
    this.el.playerSetInitialLiveManifestSize(this._initialLiveManifestSize);
  };

  FlasHLS.prototype.setManifestLoadMaxRetry = function setManifestLoadMaxRetry(manifestLoadMaxRetry) {
    this._manifestLoadMaxRetry = manifestLoadMaxRetry;
    this.el.playerSetManifestLoadMaxRetry(this._manifestLoadMaxRetry);
  };

  FlasHLS.prototype.setManifestLoadMaxRetryTimeout = function setManifestLoadMaxRetryTimeout(manifestLoadMaxRetryTimeout) {
    this._manifestLoadMaxRetryTimeout = manifestLoadMaxRetryTimeout;
    this.el.playerSetManifestLoadMaxRetryTimeout(this._manifestLoadMaxRetryTimeout);
  };

  FlasHLS.prototype.setManifestRedundantLoadmaxRetry = function setManifestRedundantLoadmaxRetry(manifestRedundantLoadmaxRetry) {
    this._manifestRedundantLoadmaxRetry = manifestRedundantLoadmaxRetry;
    this.el.playerSetManifestRedundantLoadmaxRetry(this._manifestRedundantLoadmaxRetry);
  };

  FlasHLS.prototype.setStartFromBitrate = function setStartFromBitrate(startFromBitrate) {
    this._startFromBitrate = startFromBitrate;
    this.el.playerSetStartFromBitrate(this._startFromBitrate);
  };

  FlasHLS.prototype.setStartFromLevel = function setStartFromLevel(startFromLevel) {
    this._startFromLevel = startFromLevel;
    this.el.playerSetStartFromLevel(this._startFromLevel);
  };

  FlasHLS.prototype.setAutoStartMaxDuration = function setAutoStartMaxDuration(autoStartMaxDuration) {
    this._autoStartMaxDuration = autoStartMaxDuration;
    this.el.playerSetAutoStartMaxDuration(this._autoStartMaxDuration);
  };

  FlasHLS.prototype.setSeekFromLevel = function setSeekFromLevel(seekFromLevel) {
    this._seekFromLevel = seekFromLevel;
    this.el.playerSetSeekFromLevel(this._seekFromLevel);
  };

  FlasHLS.prototype.setUseHardwareVideoDecoder = function setUseHardwareVideoDecoder(useHardwareVideoDecoder) {
    this._useHardwareVideoDecoder = useHardwareVideoDecoder;
    this.el.playerSetUseHardwareVideoDecoder(this._useHardwareVideoDecoder);
  };

  FlasHLS.prototype.setSetLogInfo = function setSetLogInfo(hlsLogEnabled) {
    this._hlsLogEnabled = hlsLogEnabled;
    this.el.playerSetLogInfo(this._hlsLogEnabled);
  };

  FlasHLS.prototype.setLogDebug = function setLogDebug(logDebug) {
    this._logDebug = logDebug;
    this.el.playerSetLogDebug(this._logDebug);
  };

  FlasHLS.prototype.setLogDebug2 = function setLogDebug2(logDebug2) {
    this._logDebug2 = logDebug2;
    this.el.playerSetLogDebug2(this._logDebug2);
  };

  FlasHLS.prototype.setLogWarn = function setLogWarn(logWarn) {
    this._logWarn = logWarn;
    this.el.playerSetLogWarn(this._logWarn);
  };

  FlasHLS.prototype.setLogError = function setLogError(logError) {
    this._logError = logError;
    this.el.playerSetLogError(this._logError);
  };

  FlasHLS.prototype._levelChanged = function _levelChanged(level) {
    var currentLevel = this.el.getLevels()[level];
    if (currentLevel) {
      this.highDefinition = currentLevel.height >= 720 || currentLevel.bitrate / 1000 >= 2000;
      this.trigger(_core.Events.PLAYBACK_HIGHDEFINITIONUPDATE, this.highDefinition);

      if (!this._levels || this._levels.length === 0) this._fillLevels();

      this.trigger(_core.Events.PLAYBACK_BITRATE, {
        height: currentLevel.height,
        width: currentLevel.width,
        bandwidth: currentLevel.bitrate,
        bitrate: currentLevel.bitrate,
        level: level
      });
      this.trigger(_core.Events.PLAYBACK_LEVEL_SWITCH_END);
    }
  };

  FlasHLS.prototype._updateTime = function _updateTime(timeMetrics) {
    if (this._currentState === 'IDLE') return;

    var duration = this._normalizeDuration(timeMetrics.duration);
    var position = Math.min(Math.max(timeMetrics.position, 0), duration);
    var previousDVRStatus = this._dvrEnabled;
    var livePlayback = this._playbackType === _core.Playback.LIVE;
    this._dvrEnabled = livePlayback && duration > this._hlsMinimumDvrSize;

    if (duration === 100 || livePlayback === undefined) return;

    if (this._dvrEnabled !== previousDVRStatus) {
      this._updateSettings();
      this.trigger(_core.Events.PLAYBACK_SETTINGSUPDATE, this.name);
    }

    if (livePlayback && !this._dvrEnabled) position = duration;

    this.trigger(_core.Events.PLAYBACK_TIMEUPDATE, { current: position, total: duration }, this.name);
  };

  FlasHLS.prototype.play = function play() {
    this.trigger(_core.Events.PLAYBACK_PLAY_INTENT);
    if (this._currentState === 'PAUSED') this.el.playerResume();else if (!this._srcLoaded && this._currentState !== 'PLAYING') this._firstPlay();else this.el.playerPlay();
  };

  FlasHLS.prototype.getPlaybackType = function getPlaybackType() {
    return this._playbackType ? this._playbackType : null;
  };

  FlasHLS.prototype.getCurrentTime = function getCurrentTime() {
    return this.el.getPosition();
  };

  FlasHLS.prototype.getCurrentLevelIndex = function getCurrentLevelIndex() {
    return this._currentLevel;
  };

  FlasHLS.prototype.getCurrentLevel = function getCurrentLevel() {
    return this.levels[this.currentLevel];
  };

  FlasHLS.prototype.getCurrentBitrate = function getCurrentBitrate() {
    return this.levels[this.currentLevel].bitrate;
  };

  FlasHLS.prototype.setCurrentLevel = function setCurrentLevel(level) {
    this.currentLevel = level;
  };

  FlasHLS.prototype.isHighDefinitionInUse = function isHighDefinitionInUse() {
    return this.highDefinition;
  };

  FlasHLS.prototype.getLevels = function getLevels() {
    return this.levels;
  };

  FlasHLS.prototype._setPlaybackState = function _setPlaybackState(state) {
    if (['PLAYING_BUFFERING', 'PAUSED_BUFFERING'].indexOf(state) >= 0) {
      this._bufferingState = true;
      this.trigger(_core.Events.PLAYBACK_BUFFERING, this.name);
      this._updateCurrentState(state);
    } else if (['PLAYING', 'PAUSED'].indexOf(state) >= 0) {
      if (['PLAYING_BUFFERING', 'PAUSED_BUFFERING', 'IDLE'].indexOf(this._currentState) >= 0) {
        this._bufferingState = false;
        this.trigger(_core.Events.PLAYBACK_BUFFERFULL, this.name);
      }
      this._updateCurrentState(state);
    } else if (state === 'IDLE') {
      this._srcLoaded = false;
      if (this._loop && ['PLAYING_BUFFERING', 'PLAYING'].indexOf(this._currentState) >= 0) {
        this.play();
        this.seek(0);
      } else {
        this._updateCurrentState(state);
        this._hasEnded = true;
        this.trigger(_core.Events.PLAYBACK_TIMEUPDATE, { current: 0, total: this.getDuration() }, this.name);
        this.trigger(_core.Events.PLAYBACK_ENDED, this.name);
      }
    }
  };

  FlasHLS.prototype._updateCurrentState = function _updateCurrentState(state) {
    this._currentState = state;
    if (state !== 'IDLE') this._hasEnded = false;

    this._updatePlaybackType();
    if (state === 'PLAYING') this.trigger(_core.Events.PLAYBACK_PLAY, this.name);else if (state === 'PAUSED') this.trigger(_core.Events.PLAYBACK_PAUSE, this.name);
  };

  FlasHLS.prototype._updatePlaybackType = function _updatePlaybackType() {
    this._playbackType = this.el.getType();
    if (this._playbackType) {
      this._playbackType = this._playbackType.toLowerCase();
      if (this._playbackType === _core.Playback.VOD) this._startReportingProgress();else this._stopReportingProgress();
    }
    this.trigger(_core.Events.PLAYBACK_PLAYBACKSTATE, { type: this._playbackType });
  };

  FlasHLS.prototype._startReportingProgress = function _startReportingProgress() {
    if (!this._reportingProgress) this._reportingProgress = true;
  };

  FlasHLS.prototype._stopReportingProgress = function _stopReportingProgress() {
    this._reportingProgress = false;
  };

  FlasHLS.prototype._onFragmentLoaded = function _onFragmentLoaded(loadmetrics) {
    this.trigger(_core.Events.PLAYBACK_FRAGMENT_LOADED, loadmetrics);
    if (this._reportingProgress && this.getCurrentTime()) {
      var buffered = this.getCurrentTime() + this.el.getbufferLength();
      this.trigger(_core.Events.PLAYBACK_PROGRESS, {
        start: this.getCurrentTime(),
        current: buffered,
        total: this.el.getDuration()
      });
    }
  };

  FlasHLS.prototype._onLevelEndlist = function _onLevelEndlist() {
    this._updatePlaybackType();
  };

  FlasHLS.prototype._firstPlay = function _firstPlay() {
    var _this4 = this;

    this._shouldPlayOnManifestLoaded = true;
    if (this.el.playerLoad) {
      _core.Mediator.once(this.cid + ':manifestloaded', function (duration, loadmetrics) {
        return _this4._manifestLoaded(duration, loadmetrics);
      });
      this._setFlashSettings(); //ensure flushLiveURLCache will work (#327)
      this.el.playerLoad(this._src);
      this._srcLoaded = true;
    }
  };

  FlasHLS.prototype.volume = function volume(value) {
    var _this5 = this;

    if (this.isReady) this.el.playerVolume(value);else this.listenToOnce(this, _core.Events.PLAYBACK_BUFFERFULL, function () {
      return _this5.volume(value);
    });
  };

  FlasHLS.prototype.pause = function pause() {
    if (this._playbackType !== _core.Playback.LIVE || this._dvrEnabled) {
      this.el.playerPause();
      if (this._playbackType === _core.Playback.LIVE && this._dvrEnabled) this._updateDvr(true);
    }
  };

  FlasHLS.prototype.stop = function stop() {
    this._srcLoaded = false;
    this.el.playerStop();
    this.trigger(_core.Events.PLAYBACK_STOP);
    this.trigger(_core.Events.PLAYBACK_TIMEUPDATE, { current: 0, total: 0 }, this.name);
  };

  FlasHLS.prototype.isPlaying = function isPlaying() {
    if (this._currentState) return !!this._currentState.match(/playing/i);

    return false;
  };

  FlasHLS.prototype.getDuration = function getDuration() {
    return this._normalizeDuration(this.el.getDuration());
  };

  FlasHLS.prototype._normalizeDuration = function _normalizeDuration(duration) {
    if (this._playbackType === _core.Playback.LIVE) {
      // estimate 10 seconds of buffer time for live streams for seek positions
      duration = Math.max(0, duration - 10);
    }
    return duration;
  };

  FlasHLS.prototype.seekPercentage = function seekPercentage(percentage) {
    var duration = this.el.getDuration();
    var time = 0;
    if (percentage > 0) time = duration * percentage / 100;

    this.seek(time);
  };

  FlasHLS.prototype.seek = function seek(time) {
    var duration = this.getDuration();
    if (this._playbackType === _core.Playback.LIVE) {
      // seek operations to a time within 3 seconds from live stream will position playhead back to live
      var dvrInUse = duration - time > 3;
      this._updateDvr(dvrInUse);
    }
    this.el.playerSeek(time);
    this.trigger(_core.Events.PLAYBACK_TIMEUPDATE, { current: time, total: duration }, this.name);
  };

  FlasHLS.prototype._updateDvr = function _updateDvr(dvrInUse) {
    var previousDvrInUse = !!this._dvrInUse;
    this._dvrInUse = dvrInUse;
    if (this._dvrInUse !== previousDvrInUse) {
      this._updateSettings();
      this.trigger(_core.Events.PLAYBACK_DVR, this._dvrInUse);
      this.trigger(_core.Events.PLAYBACK_STATS_ADD, { 'dvr': this._dvrInUse });
    }
  };

  FlasHLS.prototype._flashPlaybackError = function _flashPlaybackError(code, url, message) {
    var error = {
      code: code,
      description: message,
      level: _core.PlayerError.Levels.FATAL,
      raw: { code: code, url: url, message: message }
    };
    var formattedError = this.createError(error);
    this.trigger(_core.Events.PLAYBACK_ERROR, formattedError);
    this.trigger(_core.Events.PLAYBACK_STOP);
  };

  FlasHLS.prototype._manifestLoaded = function _manifestLoaded(duration, loadmetrics) {
    if (this._shouldPlayOnManifestLoaded) {
      this._shouldPlayOnManifestLoaded = false;
      // this method initialises the player (and starts playback)
      // this needs to happen before PLAYBACK_LOADEDMETADATA is fired
      // as the user may call seek() in a LOADEDMETADATA listener.
      /// when playerPlay() is called the player seeks to 0
      this.el.playerPlay();
    }

    this._fillLevels();
    this.trigger(_core.Events.PLAYBACK_LOADEDMETADATA, { duration: duration, data: loadmetrics });
  };

  FlasHLS.prototype._fillLevels = function _fillLevels() {
    var levels = this.el.getLevels();
    var levelsLength = levels.length;
    this._levels = [];

    for (var index = 0; index < levelsLength; index++) {
      this._levels.push({ id: index, label: levels[index].height + 'p', level: levels[index] });
    }this.trigger(_core.Events.PLAYBACK_LEVELS_AVAILABLE, this._levels);
  };

  FlasHLS.prototype.destroy = function destroy() {
    this.stopListening();
    this.$el.remove();
  };

  FlasHLS.prototype._updateSettings = function _updateSettings() {
    this.settings = _core.$.extend({}, this._defaultSettings);
    if (this._playbackType === _core.Playback.VOD || this._dvrInUse) {
      this.settings.left = ['playpause', 'position', 'duration'];
      this.settings.seekEnabled = true;
    } else if (this._dvrEnabled) {
      this.settings.left = ['playpause'];
      this.settings.seekEnabled = true;
    } else {
      this.settings.seekEnabled = false;
    }
  };

  FlasHLS.prototype._createCallbacks = function _createCallbacks() {
    var _this6 = this;

    if (!window.Clappr) window.Clappr = {};

    if (!window.Clappr.flashlsCallbacks) window.Clappr.flashlsCallbacks = {};

    this.flashlsEvents = new _flashls_events2.default(this.cid);
    window.Clappr.flashlsCallbacks[this.cid] = function (eventName, args) {
      _this6.flashlsEvents[eventName].apply(_this6.flashlsEvents, args);
    };
  };

  FlasHLS.prototype.render = function render() {
    _BaseFlashPlayback.prototype.render.call(this);
    this._createCallbacks();
    return this;
  };

  (0, _createClass3.default)(FlasHLS, [{
    key: 'isReady',
    get: function get() {
      return this._isReadyState;
    }
  }, {
    key: 'dvrEnabled',
    get: function get() {
      return !!this._dvrEnabled;
    }
  }]);
  return FlasHLS;
}(_flashPlayback.BaseFlashPlayback);

exports.default = FlasHLS;


FlasHLS.canPlay = function (resource, mimeType) {
  var resourceParts = resource.split('?')[0].match(/.*\.(.*)$/) || [];
  return _core.Browser.hasFlash && (resourceParts.length > 1 && resourceParts[1].toLowerCase() === 'm3u8' || mimeType === 'application/x-mpegURL' || mimeType === 'application/vnd.apple.mpegurl');
};
module.exports = exports['default'];

/***/ }),

/***/ "./src/flashls_events.js":
/*!*******************************!*\
  !*** ./src/flashls_events.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _core = __webpack_require__(/*! @clappr/core */ "@clappr/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HLSEvents = function () {
  function HLSEvents(instanceId) {
    (0, _classCallCheck3.default)(this, HLSEvents);

    this.instanceId = instanceId;
  }

  HLSEvents.prototype.ready = function ready() {
    _core.Mediator.trigger(this.instanceId + ':flashready');
  };

  HLSEvents.prototype.videoSize = function videoSize(width, height) {
    _core.Mediator.trigger(this.instanceId + ':videosizechanged', width, height);
  };

  HLSEvents.prototype.complete = function complete() {
    _core.Mediator.trigger(this.instanceId + ':complete');
  };

  HLSEvents.prototype.error = function error(code, url, message) {
    _core.Mediator.trigger(this.instanceId + ':error', code, url, message);
  };

  HLSEvents.prototype.manifest = function manifest(duration, loadmetrics) {
    _core.Mediator.trigger(this.instanceId + ':manifestloaded', duration, loadmetrics);
  };

  HLSEvents.prototype.audioLevelLoaded = function audioLevelLoaded(loadmetrics) {
    _core.Mediator.trigger(this.instanceId + ':audiolevelloaded', loadmetrics);
  };

  HLSEvents.prototype.levelLoaded = function levelLoaded(loadmetrics) {
    _core.Mediator.trigger(this.instanceId + ':levelloaded', loadmetrics);
  };

  HLSEvents.prototype.levelEndlist = function levelEndlist(level) {
    _core.Mediator.trigger(this.instanceId + ':levelendlist', level);
  };

  HLSEvents.prototype.fragmentLoaded = function fragmentLoaded(loadmetrics) {
    _core.Mediator.trigger(this.instanceId + ':fragmentloaded', loadmetrics);
  };

  HLSEvents.prototype.fragmentPlaying = function fragmentPlaying(playmetrics) {
    _core.Mediator.trigger(this.instanceId + ':fragmentplaying', playmetrics);
  };

  HLSEvents.prototype.position = function position(timemetrics) {
    _core.Mediator.trigger(this.instanceId + ':timeupdate', timemetrics);
  };

  HLSEvents.prototype.state = function state(newState) {
    _core.Mediator.trigger(this.instanceId + ':playbackstate', newState);
  };

  HLSEvents.prototype.seekState = function seekState(newState) {
    _core.Mediator.trigger(this.instanceId + ':seekstate', newState);
  };

  HLSEvents.prototype.switch = function _switch(newLevel) {
    _core.Mediator.trigger(this.instanceId + ':levelchanged', newLevel);
  };

  HLSEvents.prototype.audioTracksListChange = function audioTracksListChange(trackList) {
    _core.Mediator.trigger(this.instanceId + ':audiotracklistchanged', trackList);
  };

  HLSEvents.prototype.audioTrackChange = function audioTrackChange(trackId) {
    _core.Mediator.trigger(this.instanceId + ':audiotrackchanged', trackId);
  };

  return HLSEvents;
}();

exports.default = HLSEvents;
module.exports = exports['default'];

/***/ }),

/***/ "./src/public/HLSPlayer.swf":
/*!**********************************!*\
  !*** ./src/public/HLSPlayer.swf ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<%=baseUrl%>/8fa12a459188502b9f0d39b8a67d9e6c.swf";

/***/ }),

/***/ "@clappr/core":
/*!************************************************************************************************************!*\
  !*** external {"amd":"@clappr/core","commonjs":"@clappr/core","commonjs2":"@clappr/core","root":"Clappr"} ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__clappr_core__;

/***/ }),

/***/ "@clappr/flash-playback":
/*!***********************************************************************************************************************************************!*\
  !*** external {"amd":"@clappr/flash-playback","commonjs":"@clappr/flash-playback","commonjs2":"@clappr/flash-playback","root":"ClapprFlash"} ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__clappr_flash_playback__;

/***/ })

/******/ });
});
//# sourceMappingURL=flashls-playback.external.js.map
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("cookie-consent-box", [], factory);
	else if(typeof exports === 'object')
		exports["cookie-consent-box"] = factory();
	else
		root["cookie-consent-box"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(5)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.6' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(16);
var IE8_DOM_DEFINE = __webpack_require__(17);
var toPrimitive = __webpack_require__(19);
var dP = Object.defineProperty;

exports.f = __webpack_require__(0) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _languages = __webpack_require__(22);

var _languages2 = _interopRequireDefault(_languages);

var _cookies = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

var COOKIE_BOX_INITIALIZED = false;

var CookieBox = function () {
  function CookieBox(params) {
    (0, _classCallCheck3.default)(this, CookieBox);

    COOKIE_BOX_INITIALIZED = true;
    var userSettings = window.CookieBoxConfig || params || {};

    this.box = document.createElement('div');
    this.box.className = 'cookie-box';
    this.settings = {
      backgroundColor: userSettings.backgroundColor || '#3ea25f',
      textColor: userSettings.textColor || '#fff',
      language: userSettings.language || 'en',
      containerWidth: userSettings.containerWidth || 1140,
      url: userSettings.url || '#',
      cookieKey: userSettings.cookieKey || 'cookie-box'
    };
    this.dictionary = _languages2.default[this.settings.language];
  }

  (0, _createClass3.default)(CookieBox, [{
    key: 'init',
    value: function init() {
      var _this = this;

      if (!this.dictionary) {
        console.error(this.settings.language + ' language is not supported');

        return;
      }

      if ((0, _cookies.readCookie)(this.settings.cookieKey)) {
        return;
      }

      this.show();

      document.querySelector('.cookie-box__button').addEventListener('click', function () {
        return _this.hide();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var settings = this.settings;


      return '\n    <div style="background-color: ' + settings.backgroundColor + '; color: ' + settings.textColor + '">\n      <div class="cookie-box__inner" style="max-width: ' + settings.containerWidth + 'px; margin: 0 auto">\n        <div class="cookie-box__content">\n          <div class="cookie-box__icon">\n            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="46" viewBox="0 0 44 46"><path fill-rule="evenodd" fill-opacity="0.6" fill="currentColor" d="M42.841 24.2a3.933 3.933 0 0 1-5.573 0 3.998 3.998 0 0 1 0-5.607 3.939 3.939 0 0 1 5.573 0l.05.056v-.022a3.993 3.993 0 0 1-.05 5.573zm-1.288-4.245l-.039-.039-.001-.001a2.087 2.087 0 0 0-2.963.001 2.123 2.123 0 0 0 0 2.983 2.091 2.091 0 0 0 2.964 0 2.123 2.123 0 0 0 .039-2.944zm-1.566 15.443l.558.157a.94.94 0 0 1 .44 1.525 22.858 22.858 0 0 1-16.358 8.856C12.02 46.9 1.024 37.398.066 24.713-.892 12.028 8.551.963 21.158-.001a.932.932 0 0 1 .964.662c.273.712.563 1.452.88 2.142.221.535.508 1.039.853 1.503a17.208 17.208 0 0 0 4.33 3.448c2.836 1.761 5.216 3.236 5.433 8.282a10.412 10.412 0 0 1-.669 3.684c-.574 1.822-1.142 3.633.624 6.044.842 1.178.976 2.524 1.115 3.926.217 2.175.451 4.553 4.597 5.539l.702.169zm-7.127-5.507c-.111-1.138-.212-2.231-.769-2.977-2.324-3.196-1.616-5.456-.903-7.716.37-.974.568-2.007.586-3.05-.173-4.054-2.168-5.293-4.548-6.773a18.803 18.803 0 0 1-4.77-3.824 8.661 8.661 0 0 1-1.142-1.941c-.234-.515-.468-1.121-.697-1.682a20.969 20.969 0 0 0-6.971 2.04C3.22 9.119-1.081 21.8 4.038 32.29c5.12 10.491 17.722 14.819 28.148 9.668h-.011a21.11 21.11 0 0 0 6.464-4.945c-5.222-1.324-5.5-4.318-5.779-7.122zm-3.021 9.41a2.664 2.664 0 0 1-3.783-.006l-.006-.007a2.703 2.703 0 0 1 .006-3.806 2.666 2.666 0 0 1 1.895-.791l-.006-.005a2.676 2.676 0 0 1 1.891.786 2.715 2.715 0 0 1 .009 3.823l-.006.006zm-1.334-2.498a.822.822 0 0 0-1.167.004.833.833 0 0 0 .004 1.173.82.82 0 0 0 1.166-.003h.022a.836.836 0 0 0 .218-.561.84.84 0 0 0-.243-.613zm-4.483-17.902l-2.296-1.682a.948.948 0 0 1-.198-1.32.935.935 0 0 1 1.313-.199l2.296 1.682a.947.947 0 0 1 .197 1.32.934.934 0 0 1-1.312.199zm-8.169 11.344l-.056-.062a3.087 3.087 0 0 1 .056-4.295 3.045 3.045 0 0 1 4.324 0h.006a3.096 3.096 0 0 1 0 4.357 3.049 3.049 0 0 1-4.33 0zm3.003-3.045a1.197 1.197 0 0 0-1.671 0 1.216 1.216 0 0 0-.034 1.682l.039.034a1.193 1.193 0 0 0 1.672 0l-.006-.034a1.21 1.21 0 0 0 0-1.682zm.814-17.136a2.412 2.412 0 0 1-3.379-.058 2.456 2.456 0 0 1 .002-3.457l.01-.011a2.413 2.413 0 0 1 3.43.013 2.454 2.454 0 0 1-.002 3.457l-.061.056zM18.416 7.85a.568.568 0 0 0-.808 0l.028.028a.564.564 0 0 0 0 .813.556.556 0 0 0 .78 0v-.028a.578.578 0 0 0 0-.813zm-.797 31.097c.417.31.506.901.198 1.32a.935.935 0 0 1-1.312.2l-2.296-1.683a.947.947 0 0 1-.198-1.32.934.934 0 0 1 1.312-.199l2.296 1.682zm-4.087-23.233a.934.934 0 0 1-1.034-.822l-.334-2.837a.935.935 0 0 1 .816-1.04.932.932 0 0 1 1.034.821l.334 2.837a.936.936 0 0 1-.816 1.041zm-1.903 6.137l-.01.01c-.95.95-2.485.945-3.429-.01l-.01-.011a2.45 2.45 0 0 1 .01-3.449l.011-.01a2.413 2.413 0 0 1 3.428.01l.01.01a2.45 2.45 0 0 1-.01 3.45zm-1.313-2.111a.555.555 0 0 0-.788-.008.563.563 0 0 0-.008.793.555.555 0 0 0 .788.008.562.562 0 0 0 .008-.793zm-2.482 5.413l.334 2.838a.936.936 0 0 1-.816 1.04.934.934 0 0 1-1.034-.822l-.334-2.837a.935.935 0 0 1 .816-1.04.932.932 0 0 1 1.034.821zM34.387 7.81a2.412 2.412 0 0 1-3.377-.056l-.002-.002a2.456 2.456 0 0 1 .002-3.457 2.415 2.415 0 0 1 3.441.002 2.455 2.455 0 0 1-.003 3.457l-.061.056zm-1.204-2.118a.554.554 0 0 0-.787-.02.563.563 0 0 0-.021.793.556.556 0 0 0 .78 0v-.028l.028.028a.563.563 0 0 0 0-.773z"/></svg>\n          </div>\n          <div class="cookie-box__content__inner">\n            <p class="cookie-box__title">' + _languages2.default[settings.language].title + '</p>\n            <div class="cookie-box__desc">\n              ' + _languages2.default[settings.language].content + '\n              <a href="' + settings.url + '" target="_blank">' + _languages2.default[settings.language].learnMore + ' &raquo;</a>\n            </div>\n            </div> \n          </div>\n        <div class="cookie-box__buttons">\n          <button class="cookie-box__button">\n          <span>' + _languages2.default[settings.language].accept + '</span>\n          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17"><path fill-rule="evenodd" fill="currentColor" d="M17.756 2.096l-8.597 8.5a.784.784 0 0 1-.553.226c-.2 0-.4-.075-.553-.226L5.709 8.278a.765.765 0 0 1 0-1.093.787.787 0 0 1 1.105 0l1.792 1.772 8.045-7.953a.787.787 0 0 1 1.105 0 .766.766 0 0 1 0 1.092zm-6.287.052a7.065 7.065 0 0 0-2.859-.603h-.004c-3.877 0-7.032 3.117-7.034 6.951-.002 3.834 3.151 6.956 7.03 6.959h.004c3.877 0 7.032-3.118 7.034-6.951v-.718c0-.427.35-.773.782-.773.432 0 .781.346.781.773v.718C17.201 13.19 13.344 17 8.606 17h-.005C3.86 16.997.006 13.181.009 8.495.011 3.81 3.868 0 8.606 0h.005a8.629 8.629 0 0 1 3.495.736.77.77 0 0 1 .395 1.02.786.786 0 0 1-1.032.392z"/></svg>            </button>\n        </div>\n      </div>\n    </div>\n    ';
    }
  }, {
    key: 'show',
    value: function show() {
      this.box.innerHTML = this.render();
      document.body.appendChild(this.box);
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.box.classList.add('hidden');
      (0, _cookies.createCookie)(this.settings.cookieKey, true, 365);
    }
  }]);
  return CookieBox;
}();

exports.default = CookieBox;


if (typeof window !== 'undefined') {
  var initBox = setInterval(function () {
    if (document.readyState === 'complete') {
      clearInterval(initBox);
      if (!COOKIE_BOX_INITIALIZED) {
        new CookieBox().init();
      }
    }
  }, 50);
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(9);

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(10), __esModule: true };

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(11);
var $Object = __webpack_require__(3).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(12);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(0), 'Object', { defineProperty: __webpack_require__(4).f });


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(3);
var ctx = __webpack_require__(13);
var hide = __webpack_require__(15);
var has = __webpack_require__(21);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
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
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(14);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var createDesc = __webpack_require__(20);
module.exports = __webpack_require__(0) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(0) && !__webpack_require__(5)(function () {
  return Object.defineProperty(__webpack_require__(18)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(1);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var languages = {
  de: {
    title: 'Cookie-Richtlinie',
    content: 'Unsere Website verwendet Cookies, um zu analysieren, wie die Site verwendet wird, und um sicherzustellen, dass Ihre Benutzererfahrung bei nachfolgenden Besuchen konsistent ist.',
    accept: 'Zustimmen',
    learnMore: 'Mehr erfahren'
  },
  en: {
    title: 'Cookies policy',
    content: 'Our website uses cookies to analyse how the site is used and to ensure your experience is consistent between visits.',
    accept: 'Accept',
    learnMore: 'Learn more'
  },
  pl: {
    title: 'Polityka cookies',
    content: 'Nasza strona używa ciasteczek do analizy statystyk i zapewnienia takiego samego działania pomiędzi wizytami.',
    accept: 'Akceptuję',
    learnMore: 'Czytaj więcej'
  }
};

exports.default = languages;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createCookie = function createCookie(name, value, days) {
  var expires = void 0;

  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toGMTString();
  } else {
    expires = '';
  }

  document.cookie = name + '=' + value + expires + '; path=/';
};

var readCookie = function readCookie(name) {
  var nameQuery = name + '=';
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i += 1) {
    var cookie = cookies[i];

    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1, cookie.length);
    }

    if (cookie.indexOf(nameQuery) === 0) {
      return cookie.substring(nameQuery.length, cookie.length);
    }
  }

  return null;
};

exports.createCookie = createCookie;
exports.readCookie = readCookie;

/***/ })
/******/ ]);
});
//# sourceMappingURL=cookie-consent-box.js.map
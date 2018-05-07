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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint no-console: ["error", { allow: ["warn", "error"] }] */

var _languages = __webpack_require__(1);

var _languages2 = _interopRequireDefault(_languages);

var _cookies = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CookieBox = function () {
  function CookieBox() {
    _classCallCheck(this, CookieBox);

    var userSettings = window.CookieBoxConfig || {};

    this.box = document.createElement('div');
    this.box.className = 'cookie-box';
    this.settings = {
      color: userSettings.color || '#007bff',
      language: userSettings.language || 'en',
      url: userSettings.url || '#',
      cookieKey: 'cookie-box'
    };
    this.dictionary = _languages2.default[this.settings.language];
  }

  _createClass(CookieBox, [{
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

      document.querySelector('.cookie-box__button.accept').addEventListener('click', function () {
        return _this.hide();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var settings = this.settings;


      return '\n      <div>\n        <p class="cookie-box__title">' + _languages2.default[settings.language].title + '</p>\n        <div class="cookie-box__content">' + _languages2.default[settings.language].content + '</div>\n        <div class="cookie-box__buttons">\n          <button class="cookie-box__button accept" style="background-color: ' + settings.color + '">' + _languages2.default[settings.language].accept + '</button>\n          <a href="' + settings.url + '" class="cookie-box__button link" target="_blank">' + _languages2.default[settings.language].learnMore + '</a>\n        </div>\n      </div>\n    ';
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


var initBox = setInterval(function () {
  if (document.readyState === 'complete') {
    clearInterval(initBox);
    new CookieBox().init();
  }
}, 50);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var languages = {
  en: {
    title: 'Have a cookie',
    content: 'Our website uses cookies to analyse how the site is used and to ensure your experience is consistent between visits.',
    accept: 'Accept',
    learnMore: 'Learn More'
  },
  pl: {
    title: 'Ciastko?',
    content: 'Nasza strona używa ciasteczek do analizy statystyk i zapewnienia takiego samego działania pomiędzi wizytami.',
    accept: 'Akceptuję',
    learnMore: 'Czytaj więcej'
  }
};

exports.default = languages;

/***/ }),
/* 2 */
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
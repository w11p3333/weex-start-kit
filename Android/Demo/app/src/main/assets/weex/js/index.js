// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function isWeex() {
  return "weex" === 'weex';
}

exports.default = {

  methods: {
    push: function push(path) {
      if (isWeex()) {
        var toUrl = weex.config.bundleUrl.split('/').slice(0, -1).join('/') + '/' + path + '.js';
        weex.requireModule('navigator').push({
          url: toUrl,
          animated: 'true'
        });
      } else {
        this.$router.push(path);
      }
    },
    pop: function pop() {
      if (isWeex()) {
        weex.requireModule('navigator').pop({
          animated: 'true'
        });
      } else {
        window.history.back();
      }
    }
  }

};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(3)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(4)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/luliangxiao/Documents/company/weex-start-kit/Web/src/components/myButton.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0427637e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  name: 'my-button',

  props: {
    title: String
  },

  methods: {
    click: function click() {
      this.$emit('click');
    }
  }

};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {
  "button-view": {
    "width": 300,
    "height": 100,
    "borderRadius": 50,
    "backgroundColor": "#ADD8E6",
    "justifyContent": "center",
    "alignItems": "center",
    "border": "none"
  },
  "button-view-text": {
    "textAlign": "center",
    "color": "#FFFFFF"
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: ["button-view"],
    on: {
      "click": _vm.click
    }
  }, [_c('text', {
    staticClass: ["button-view-text"]
  }, [_vm._v(_vm._s(_vm.title))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(13)
)

/* script */
__vue_exports__ = __webpack_require__(10)

/* template */
var __vue_template__ = __webpack_require__(15)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/luliangxiao/Documents/company/weex-start-kit/Web/src/views/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7ce5c6d0"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(5);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new Vue({
  el: '#root',
  render: function render(h) {
    return h(_index2.default);
  }
});

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/fbb82a50.weex.png";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _myButton = __webpack_require__(1);

var _myButton2 = _interopRequireDefault(_myButton);

var _mixins = __webpack_require__(0);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

  mixins: [_mixins2.default],

  components: {
    myButton: _myButton2.default
  },

  data: function data(_) {
    return {
      platform: 'Web',
      image: __webpack_require__(9)
    };
  },

  created: function created() {
    if (weex.config.params) {
      this.platform = weex.config.params.platform;
    }
  },


  methods: {
    click: function click() {
      var _this = this;

      weex.requireModule('storage').setItem('text', 'Hello World From index.vue', function (_ref) {
        var result = _ref.result;

        if (result === 'success') {
          _this.push('second');
        }
      });
    }
  }

};

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "image-view": {
    "height": 200,
    "width": 200
  },
  "text-view": {
    "marginTop": 20,
    "textAlign": "center",
    "fontSize": 50,
    "height": 100
  }
}

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('image', {
    staticClass: ["image-view"],
    attrs: {
      "src": _vm.image
    }
  }), _c('text', {
    staticClass: ["text-view"]
  }, [_vm._v("Hello World From " + _vm._s(_vm.platform))]), _c('my-button', {
    attrs: {
      "title": "跳转"
    },
    on: {
      "click": _vm.click
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);
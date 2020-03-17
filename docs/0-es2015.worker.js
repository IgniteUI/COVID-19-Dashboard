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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/@ngtools/webpack/src/index.js!./src/app/heatmap.worker.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@ngtools/webpack/src/index.js!./src/app/heatmap.worker.ts":
/*!***********************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src!./src/app/heatmap.worker.ts ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var igniteui_angular_core_esm5_lib_HeatTileGeneratorWebWorker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! igniteui-angular-core/esm5/lib/HeatTileGeneratorWebWorker */ "./node_modules/igniteui-angular-core/esm5/lib/HeatTileGeneratorWebWorker.js");


const worker = self;
worker.onmessage = igniteui_angular_core_esm5_lib_HeatTileGeneratorWebWorker__WEBPACK_IMPORTED_MODULE_1__["HeatTileGeneratorWebWorker"].onmessage;
igniteui_angular_core_esm5_lib_HeatTileGeneratorWebWorker__WEBPACK_IMPORTED_MODULE_1__["HeatTileGeneratorWebWorker"].postmessage = heatWorkerPostMessage;
function heatWorkerPostMessage() {
    self.postMessage.apply(self, Array.prototype.slice.call(arguments));
}
igniteui_angular_core_esm5_lib_HeatTileGeneratorWebWorker__WEBPACK_IMPORTED_MODULE_1__["HeatTileGeneratorWebWorker"].start();
/* harmony default export */ __webpack_exports__["default"] = ({});


/***/ }),

/***/ "./node_modules/igniteui-angular-core/esm5/lib/ArgumentException.js":
/*!**************************************************************************!*\
  !*** ./node_modules/igniteui-angular-core/esm5/lib/ArgumentException.js ***!
  \**************************************************************************/
/*! exports provided: ArgumentException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArgumentException", function() { return ArgumentException; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ "./node_modules/igniteui-angular-core/esm5/lib/type.js");
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/


/**
 * @hidden
 */
var ArgumentException = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ArgumentException, _super);
    function ArgumentException(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    _this = _super.call(this, 0) || this;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    _this = _super.call(this, 1, c) || this;
                }
                break;
            case 2:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this = _super.call(this, 1, c) || this;
                }
                break;
            case 3:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this = _super.call(this, 2, c, d) || this;
                }
                break;
        }
        return _this;
    }
    ArgumentException.$t = Object(_type__WEBPACK_IMPORTED_MODULE_1__["markType"])(ArgumentException, 'ArgumentException', _type__WEBPACK_IMPORTED_MODULE_1__["BaseError"].$);
    return ArgumentException;
}(_type__WEBPACK_IMPORTED_MODULE_1__["BaseError"]));

//# sourceMappingURL=ArgumentException.js.map

/***/ }),

/***/ "./node_modules/igniteui-angular-core/esm5/lib/Color.js":
/*!**************************************************************!*\
  !*** ./node_modules/igniteui-angular-core/esm5/lib/Color.js ***!
  \**************************************************************/
/*! exports provided: Color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ "./node_modules/igniteui-angular-core/esm5/lib/type.js");
/* harmony import */ var _ArgumentException__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArgumentException */ "./node_modules/igniteui-angular-core/esm5/lib/ArgumentException.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./number */ "./node_modules/igniteui-angular-core/esm5/lib/number.js");
/* harmony import */ var _colorCore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./colorCore */ "./node_modules/igniteui-angular-core/esm5/lib/colorCore.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./string */ "./node_modules/igniteui-angular-core/esm5/lib/string.js");
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/






/**
 * @hidden
 */
var Color = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Color, _super);
    function Color() {
        var _this = _super.call(this) || this;
        _this._a = 0;
        _this._r = 0;
        _this._g = 0;
        _this._b = 0;
        _this._colorString = null;
        _this.a = false;
        return _this;
    }
    Object.defineProperty(Color.prototype, "l", {
        get: function () {
            return this._a;
        },
        set: function (a) {
            this._a = Object(_number__WEBPACK_IMPORTED_MODULE_3__["truncate"])(Math.round(a));
            this.a = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "o", {
        get: function () {
            return this._r;
        },
        set: function (a) {
            this._r = Object(_number__WEBPACK_IMPORTED_MODULE_3__["truncate"])(Math.round(a));
            this.a = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "n", {
        get: function () {
            return this._g;
        },
        set: function (a) {
            this._g = Object(_number__WEBPACK_IMPORTED_MODULE_3__["truncate"])(Math.round(a));
            this.a = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "m", {
        get: function () {
            return this._b;
        },
        set: function (a) {
            this._b = Object(_number__WEBPACK_IMPORTED_MODULE_3__["truncate"])(Math.round(a));
            this.a = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "colorString", {
        get: function () {
            if (this.a || this._colorString == null) {
                this.a = false;
                this.s();
            }
            return this._colorString;
        },
        set: function (a) {
            this._colorString = a;
            this.r();
        },
        enumerable: true,
        configurable: true
    });
    Color.create = function (a) {
        if (Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeCast"])(Color.$, a) !== null) {
            return a;
        }
        var b = new Color();
        if (typeof a === 'string') {
            b.colorString = a;
        }
        else if (a != null) {
            throw new _ArgumentException__WEBPACK_IMPORTED_MODULE_2__["ArgumentException"](1, "Unknown color type");
        }
        return b;
    };
    Color.prototype.s = function () {
        this._colorString = "rgba(" + this._r + "," + this._g + "," + this._b + "," + this._a / 255 + ")";
    };
    Color.prototype.r = function () {
        if (this.colorString == null) {
            this.l = this.o = this.n = this.m = 0;
            return;
        }
        var obj_ = Object(_colorCore__WEBPACK_IMPORTED_MODULE_4__["strToColor"])(this._colorString);
        this._a = typeof obj_.a != 'undefined' ? Math.round(obj_.a) : 0;
        this._r = typeof obj_.r != 'undefined' ? Math.round(obj_.r) : 0;
        this._g = typeof obj_.g != 'undefined' ? Math.round(obj_.g) : 0;
        this._b = typeof obj_.b != 'undefined' ? Math.round(obj_.b) : 0;
        if (Object(_string__WEBPACK_IMPORTED_MODULE_5__["stringStartsWith"])(this._colorString, "#") && this._colorString.length == 9) {
            this.s();
        }
    };
    Color.u = function (a_, r_, g_, b_) {
        var a = new Color();
        a._a = (a_ | 0);
        a._r = (r_ | 0);
        a._g = (g_ | 0);
        a._b = (b_ | 0);
        a.a = true;
        return a;
    };
    Color.prototype.equals = function (a) {
        if ((Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeCast"])(Color.$, a) !== null) == false) {
            return false;
        }
        var b = a;
        return this._a == b._a && this._r == b._r && this._g == b._g && this._b == b._b;
    };
    Color.prototype.getHashCode = function () {
        return (this._a << 24) | (this._r << 16) | (this._g << 8) | this._b;
    };
    Color.d = function (a, b) {
        return !(Color.b(a, b));
    };
    Color.e = function (a, b) {
        if (!a.hasValue) {
            return b.hasValue;
        }
        else if (!b.hasValue) {
            return true;
        }
        return Color.d(a.value, b.value);
    };
    Color.b = function (a, b) {
        return a._a == b._a && a._r == b._r && a._g == b._g && a._b == b._b;
    };
    Color.c = function (a, b) {
        if (!a.hasValue) {
            return !b.hasValue;
        }
        else if (!b.hasValue) {
            return false;
        }
        return Color.b(a.value, b.value);
    };
    Color.$t = Object(_type__WEBPACK_IMPORTED_MODULE_1__["markStruct"])(Color, 'Color');
    return Color;
}(_type__WEBPACK_IMPORTED_MODULE_1__["ValueType"]));

//# sourceMappingURL=Color.js.map

/***/ }),

/***/ "./node_modules/igniteui-angular-core/esm5/lib/Comparer$1.js":
/*!*******************************************************************!*\
  !*** ./node_modules/igniteui-angular-core/esm5/lib/Comparer$1.js ***!
  \*******************************************************************/
/*! exports provided: Comparer$1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Comparer$1_combined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comparer$1_combined */ "./node_modules/igniteui-angular-core/esm5/lib/Comparer$1_combined.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Comparer$1", function() { return _Comparer$1_combined__WEBPACK_IMPORTED_MODULE_0__["Comparer$1"]; });

/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

//# sourceMappingURL=Comparer$1.js.map

/***/ }),

/***/ "./node_modules/igniteui-angular-core/esm5/lib/Comparer$1_combined.js":
/*!****************************************************************************!*\
  !*** ./node_modules/igniteui-angular-core/esm5/lib/Comparer$1_combined.js ***!
  \****************************************************************************/
/*! exports provided: Comparer$1, DefaultComparer$1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comparer$1", function() { return Comparer$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComparer$1", function() { return DefaultComparer$1; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ "./node_modules/igniteui-angular-core/esm5/lib/type.js");
/* harmony import */ var _IComparer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IComparer */ "./node_modules/igniteui-angular-core/esm5/lib/IComparer.js");
/* harmony import */ var _IComparer$1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IComparer$1 */ "./node_modules/igniteui-angular-core/esm5/lib/IComparer$1.js");
/* harmony import */ var _compareUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compareUtil */ "./node_modules/igniteui-angular-core/esm5/lib/compareUtil.js");
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/





/**
 * @hidden
 */
var Comparer$1 = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Comparer$1, _super);
    function Comparer$1($t) {
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        return _this;
    }
    Comparer$1.defaultComparerValue = function ($t) {
        return new DefaultComparer$1($t);
    };
    Comparer$1.a = function ($t, a) {
        return null;
    };
    Comparer$1.prototype.compareObject = function (a, b) {
        return this.compare(Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeCastObjTo$t"])(this.$t, a), Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeCastObjTo$t"])(this.$t, b));
    };
    Comparer$1.$t = Object(_type__WEBPACK_IMPORTED_MODULE_1__["markType"])(Comparer$1, 'Comparer$1', _type__WEBPACK_IMPORTED_MODULE_1__["Base"].$, [_IComparer__WEBPACK_IMPORTED_MODULE_2__["IComparer_$type"], _IComparer$1__WEBPACK_IMPORTED_MODULE_3__["IComparer$1_$type"].specialize(0)]);
    return Comparer$1;
}(_type__WEBPACK_IMPORTED_MODULE_1__["Base"]));

/**
 * @hidden
 */
var DefaultComparer$1 = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DefaultComparer$1, _super);
    function DefaultComparer$1($t) {
        var _this = _super.call(this, $t) || this;
        _this.$t = null;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        return _this;
    }
    DefaultComparer$1.prototype.compare = function (a, b) {
        var c = Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeCast"])(_type__WEBPACK_IMPORTED_MODULE_1__["IComparable$1_$type"].specialize(this.$t), a);
        if (c != null) {
            return _compareUtil__WEBPACK_IMPORTED_MODULE_4__["CompareUtil"].compareTo(c, b);
        }
        var d = Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeCast"])(_type__WEBPACK_IMPORTED_MODULE_1__["IComparable$1_$type"].specialize(this.$t), b);
        if (d != null) {
            return -_compareUtil__WEBPACK_IMPORTED_MODULE_4__["CompareUtil"].compareTo(d, a);
        }
        return (_type__WEBPACK_IMPORTED_MODULE_1__["Base"].compare(a, b));
    };
    DefaultComparer$1.$t = Object(_type__WEBPACK_IMPORTED_MODULE_1__["markType"])(DefaultComparer$1, 'DefaultComparer$1', Comparer$1.$.specialize(0));
    return DefaultComparer$1;
}(Comparer$1));

//# sourceMappingURL=Comparer$1_combined.js.map

/***/ }),

/***/ "./node_modules/igniteui-angular-core/esm5/lib/HeatTileGeneratorWebWorker.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/igniteui-angular-core/esm5/lib/HeatTileGeneratorWebWorker.js ***!
  \***********************************************************************************/
/*! exports provided: HeatTileGeneratorWebWorker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeatTileGeneratorWebWorker_combined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeatTileGeneratorWebWorker_combined */ "./node_modules/igniteui-angular-core/esm5/lib/HeatTileGeneratorWebWorker_combined.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeatTileGeneratorWebWorker", function() { return _HeatTileGeneratorWebWorker_combined__WEBPACK_IMPORTED_MODULE_0__["HeatTileGeneratorWebWorker"]; });

/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

//# sourceMappingURL=HeatTileGeneratorWebWorker.js.map

/***/ }),

/***/ "./node_modules/igniteui-angular-core/esm5/lib/HeatTileGeneratorWebWorker_combined.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/igniteui-angular-core/esm5/lib/HeatTileGeneratorWebWorker_combined.js ***!
  \********************************************************************************************/
/*! exports provided: HeatTileGeneratorWebWorker, CompletedSinkImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeatTileGeneratorWebWorker", function() { return HeatTileGeneratorWebWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedSinkImpl", function() { return CompletedSinkImpl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ "./node_modules/igniteui-angular-core/esm5/lib/type.js");
/* harmony import */ var _TileWorkSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TileWorkSettings */ "./node_modules/igniteui-angular-core/esm5/lib/TileWorkSettings.js");
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Color */ "./node_modules/igniteui-angular-core/esm5/lib/Color.js");
/* harmony import */ var _HeatTileGeneratorWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeatTileGeneratorWorker */ "./node_modules/igniteui-angular-core/esm5/lib/HeatTileGeneratorWorker.js");
/* harmony import */ var _HeatTileScaler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeatTileScaler */ "./node_modules/igniteui-angular-core/esm5/lib/HeatTileScaler.js");
/* harmony import */ var _Rect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Rect */ "./node_modules/igniteui-angular-core/esm5/lib/Rect.js");
/* harmony import */ var _ITileWorkCompletedSink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ITileWorkCompletedSink */ "./node_modules/igniteui-angular-core/esm5/lib/ITileWorkCompletedSink.js");
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/








/**
 * @hidden
 */
var HeatTileGeneratorWebWorker = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HeatTileGeneratorWebWorker, _super);
    function HeatTileGeneratorWebWorker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HeatTileGeneratorWebWorker, "postmessage", {
        get: function () {
            return HeatTileGeneratorWebWorker._postmessage;
        },
        set: function (a) {
            HeatTileGeneratorWebWorker._postmessage = a;
        },
        enumerable: true,
        configurable: true
    });
    HeatTileGeneratorWebWorker.onmessage = function (args_) {
        var data_ = args_.data;
        var a = (data_.cancelTile);
        var b = (data_.z);
        var c = (data_.y);
        var d = (data_.x);
        if (a) {
            for (var i_ = 0; i_ < HeatTileGeneratorWebWorker.b.length; i_++) {
                var e = HeatTileGeneratorWebWorker.b[i_];
                if (e.g.testRun) {
                    continue;
                }
                if (e.g.z == b && e.g.x == d && e.g.y == c) {
                    var workers_ = HeatTileGeneratorWebWorker.b;
                    workers_.splice(i_, 1);
                    i_--;
                }
            }
        }
        var f = new _TileWorkSettings__WEBPACK_IMPORTED_MODULE_2__["TileWorkSettings"]();
        var g = data_;
        if (!g["messageId"]) {
            return;
        }
        if (g["isNewData"]) {
            var yValues_ = g["yValues"];
            var xValues_ = g["xValues"];
            var values_ = g["values"];
            HeatTileGeneratorWebWorker._yValues = (new Float64Array(yValues_));
            HeatTileGeneratorWebWorker._xValues = (new Float64Array(xValues_));
            HeatTileGeneratorWebWorker._values = (new Float64Array(values_));
        }
        var h = g["scaleColors"];
        var i = new Array(h.length);
        for (var j = 0; j < h.length; j++) {
            i[j] = _Color__WEBPACK_IMPORTED_MODULE_3__["Color"].u(Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeGetValue"])(h[j]["a"]), Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeGetValue"])(h[j]["r"]), Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeGetValue"])(h[j]["g"]), Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeGetValue"])(h[j]["b"]));
        }
        f.scaler = HeatTileGeneratorWebWorker.e;
        f.blurRadius = g["blurRadius"];
        f.maxBlurRadius = g["maxBlurRadius"];
        f.useBlurRadiusAdjustedForZoom = (g["useBlurRadiusAdjustedForZoom"]);
        f.minimumColor = _Color__WEBPACK_IMPORTED_MODULE_3__["Color"].u(Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeGetValue"])(g["minimumColor"]["a"]), Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeGetValue"])(g["minimumColor"]["r"]), Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeGetValue"])(g["minimumColor"]["g"]), Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeGetValue"])(g["minimumColor"]["b"]));
        f.maximumColor = _Color__WEBPACK_IMPORTED_MODULE_3__["Color"].u(Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeGetValue"])(g["maximumColor"]["a"]), Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeGetValue"])(g["maximumColor"]["r"]), Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeGetValue"])(g["maximumColor"]["g"]), Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeGetValue"])(g["maximumColor"]["b"]));
        f.tileViewport = new _Rect__WEBPACK_IMPORTED_MODULE_6__["Rect"](0, g["tileViewport"]["left"], g["tileViewport"]["top"], g["tileViewport"]["width"], g["tileViewport"]["height"]);
        f.yValues = HeatTileGeneratorWebWorker._yValues;
        f.xValues = HeatTileGeneratorWebWorker._xValues;
        f.values = HeatTileGeneratorWebWorker._values;
        f.minimumVisibleLatitude = g["minimumVisibleLatitude"];
        f.minimumVisibleLongitude = g["minimumVisibleLongitude"];
        f.maximumVisibleLatitude = g["maximumVisibleLatitude"];
        f.maximumVisibleLongitude = g["maximumVisibleLongitude"];
        f.z = Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeGetValue"])(g["z"]);
        f.x = Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeGetValue"])(g["x"]);
        f.y = Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeGetValue"])(g["y"]);
        f.window = new _Rect__WEBPACK_IMPORTED_MODULE_6__["Rect"](0, g["window"]["left"], g["window"]["top"], g["window"]["width"], g["window"]["height"]);
        f.testRun = g["testRun"];
        f.globalMinimum = g["globalMinimum"];
        f.globalMaximum = g["globalMaximum"];
        f.useGlobalMinMax = g["useGlobalMinMax"];
        f.minimumValue = g["minimumValue"];
        f.maximumValue = g["maximumValue"];
        f.scaleColorOffsets = g["scaleColorOffsets"];
        f.scaleColors = i;
        f.useLogarithmicScale = g["useLogarithmicScale"];
        f.logarithmBase = g["logarithmBase"];
        var k = new _HeatTileGeneratorWorker__WEBPACK_IMPORTED_MODULE_4__["HeatTileGeneratorWorker"](f);
        k.u = Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeGetValue"])(g["messageId"]);
        k.h = true;
        k.completedSink = new CompletedSinkImpl(k);
        var workersl_ = HeatTileGeneratorWebWorker.b;
        var worker_ = k;
        workersl_.push(worker_);
    };
    HeatTileGeneratorWebWorker.start = function () {
        var workers_ = HeatTileGeneratorWebWorker.b;
        setInterval(function () {
            if (workers_.length > 0) {
                var worker = workers_.shift();
                worker.doWork();
                worker.completedSink = null;
            }
        }, 16);
        ;
    };
    HeatTileGeneratorWebWorker.$t = Object(_type__WEBPACK_IMPORTED_MODULE_1__["markType"])(HeatTileGeneratorWebWorker, 'HeatTileGeneratorWebWorker');
    HeatTileGeneratorWebWorker.e = new _HeatTileScaler__WEBPACK_IMPORTED_MODULE_5__["HeatTileScaler"]();
    HeatTileGeneratorWebWorker.b = [];
    HeatTileGeneratorWebWorker._postmessage = null;
    HeatTileGeneratorWebWorker._yValues = null;
    HeatTileGeneratorWebWorker._xValues = null;
    HeatTileGeneratorWebWorker._values = null;
    return HeatTileGeneratorWebWorker;
}(_type__WEBPACK_IMPORTED_MODULE_1__["Base"]));

/**
 * @hidden
 */
var CompletedSinkImpl = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CompletedSinkImpl, _super);
    function CompletedSinkImpl(a) {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.a = a;
        return _this;
    }
    CompletedSinkImpl.prototype.onCompleted = function (a) {
        var b = a;
        var c = {};
        var imageData_ = b.imageData;
        c["messageId"] = this.a.u;
        c["imageData"] = (b.imageData == null ? null : (new Uint8ClampedArray(imageData_))["buffer"]);
        c["z"] = b.z;
        c["x"] = b.x;
        c["y"] = b.y;
        c["url"] = b.url;
        c["globalMinimumValue"] = b.globalMinimumValue;
        c["globalMaximumValue"] = b.globalMaximumValue;
        c["globalMaximumValueLongitude"] = b.globalMaximumValueLongitude;
        c["globalMaximumValueLatitude"] = b.globalMaximumValueLatitude;
        c["globalMinimumValueLongitude"] = b.globalMinimumValueLongitude;
        c["globalMinimumValueLatitude"] = b.globalMinimumValueLatitude;
        if (this.a.h && c["imageData"] != null) {
            HeatTileGeneratorWebWorker.postmessage(c, [c["imageData"]]);
        }
        else {
            HeatTileGeneratorWebWorker.postmessage(c);
        }
    };
    CompletedSinkImpl.$t = Object(_type__WEBPACK_IMPORTED_MODULE_1__["markType"])(CompletedSinkImpl, 'CompletedSinkImpl', _type__WEBPACK_IMPORTED_MODULE_1__["Base"].$, [_ITileWorkCompletedSink__WEBPACK_IMPORTED_MODULE_7__["ITileWorkCompletedSink_$type"]]);
    return CompletedSinkImpl;
}(_type__WEBPACK_IMPORTED_MODULE_1__["Base"]));

//# sourceMappingURL=HeatTileGeneratorWebWorker_combined.js.map

/***/ }),

/***/ "./node_modules/igniteui-angular-core/esm5/lib/HeatTileGeneratorWorker.js":
/*!********************************************************************************!*\
  !*** ./node_modules/igniteui-angular-core/esm5/lib/HeatTileGeneratorWorker.js ***!
  \********************************************************************************/
/*! exports provided: HeatTileGeneratorWorker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeatTileGeneratorWorker", function() { return HeatTileGeneratorWorker; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ "./node_modules/igniteui-angular-core/esm5/lib/type.js");
/* harmony import */ var _List$1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List$1 */ "./node_modules/igniteui-angular-core/esm5/lib/List$1.js");
/* harmony import */ var _HeatTileImageCreatedEventArgs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeatTileImageCreatedEventArgs */ "./node_modules/igniteui-angular-core/esm5/lib/HeatTileImageCreatedEventArgs.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number */ "./node_modules/igniteui-angular-core/esm5/lib/number.js");
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/





/**
 * @hidden
 */
var HeatTileGeneratorWorker = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HeatTileGeneratorWorker, _super);
    function HeatTileGeneratorWorker(a) {
        var _this = _super.call(this) || this;
        _this.f = null;
        _this.a = null;
        _this.n = 0;
        _this.o = 0;
        _this.p = 0;
        _this.w = null;
        _this.u = 0;
        _this.h = false;
        _this.r = 0;
        _this.i = 0;
        _this.j = 0;
        _this.k = 0;
        _this.l = 0;
        _this._completedSink = null;
        _this.f = a;
        HeatTileGeneratorWorker.s++;
        if (HeatTileGeneratorWorker.s == 0x7FFFFFFFFFFFFFFF) {
            HeatTileGeneratorWorker.s = 0;
        }
        _this.r = HeatTileGeneratorWorker.s;
        return _this;
    }
    Object.defineProperty(HeatTileGeneratorWorker.prototype, "t", {
        get: function () {
            return this.r;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGeneratorWorker.prototype, "g", {
        get: function () {
            return this.f;
        },
        enumerable: true,
        configurable: true
    });
    HeatTileGeneratorWorker.prototype.doWork = function () {
        var a = this.g.blurRadius;
        var b = a;
        var c = this.g.maxBlurRadius;
        var d = this.g.scaler;
        this.n = this.g.x;
        this.o = this.g.y;
        this.p = this.g.z;
        if (this.g.useBlurRadiusAdjustedForZoom && this.p > 0) {
            var e = Math.sqrt(1 * 1 + 1 * 1) * Math.pow(2, this.p - 1);
            b = a * e;
        }
        if (!Object(_number__WEBPACK_IMPORTED_MODULE_4__["isNaN_"])(c)) {
            if (b > c) {
                b = c;
            }
        }
        var f = this.g.xValues;
        var g = this.g.yValues;
        var h = this.g.values;
        var i = this.g.xValues.length;
        var j = this.g.yValues.length;
        var k;
        var l;
        var m;
        var n;
        var o;
        var p;
        var q;
        var r = this.g.minimumVisibleLongitude;
        var s = this.g.maximumVisibleLongitude;
        var t = this.g.minimumVisibleLatitude;
        var u = this.g.maximumVisibleLatitude;
        var v = this.q(this.g.tileViewport, b);
        var w = this.c(v, b);
        var x = Math.abs(d.t(0, this.g.window, this.g.tileViewport) - d.t(b, this.g.window, this.g.tileViewport));
        var y = Math.abs(d.u(0, this.g.window, this.g.tileViewport) - d.u(b, this.g.window, this.g.tileViewport));
        var z;
        var aa;
        var ab = new _List$1__WEBPACK_IMPORTED_MODULE_2__["List$1"](_type__WEBPACK_IMPORTED_MODULE_1__["Number_$type"], 0);
        var ac = new _List$1__WEBPACK_IMPORTED_MODULE_2__["List$1"](_type__WEBPACK_IMPORTED_MODULE_1__["Number_$type"], 0);
        var ad = new _List$1__WEBPACK_IMPORTED_MODULE_2__["List$1"](_type__WEBPACK_IMPORTED_MODULE_1__["Number_$type"], 0);
        for (var ae = 0; ae < i; ae++) {
            k = f[ae];
            l = g[ae];
            m = h[ae];
            n = k - y;
            o = k + y;
            p = l - x;
            q = l + x;
            if (o < r || q < t || p > u || n > s) {
                continue;
            }
            ab.add(k);
            ac.add(l);
            ad.add(m);
        }
        var af = this.d(this.g.tileViewport);
        var ag = this.b(this.g.tileViewport);
        var ah = Object(_number__WEBPACK_IMPORTED_MODULE_4__["truncate"])(this.g.tileViewport.width);
        var ai = ac.count;
        d.v(ac, this.g.window, this.g.tileViewport);
        d.w(ab, this.g.window, this.g.tileViewport);
        var aj;
        var ak;
        var al;
        var am;
        for (var an = 0; an < ai; an++) {
            z = Object(_number__WEBPACK_IMPORTED_MODULE_4__["truncate"])(Math.floor(ab._inner[an] - b));
            aa = Object(_number__WEBPACK_IMPORTED_MODULE_4__["truncate"])(Math.floor(ac._inner[an] - b));
            for (var ao = z; ao < z + v; ao++) {
                for (var ap = aa; ap < aa + v; ap++) {
                    aj = ao - z;
                    ak = ap - aa;
                    if (ao < 0 || ao > (ah - 1) || ap < 0 || ap > (ah - 1)) {
                        continue;
                    }
                    al = w[ak * v + aj];
                    am = ad._inner[an] * al;
                    ag[ap * ah + ao] = ag[ap * ah + ao] + am;
                }
            }
        }
        var aq = ag.length;
        var ar = -1.7976931348623157E+308;
        var as = 1.7976931348623157E+308;
        var at;
        if (!Object(_number__WEBPACK_IMPORTED_MODULE_4__["isNaN_"])(this.g.globalMinimum) && !Object(_number__WEBPACK_IMPORTED_MODULE_4__["isNaN_"])(this.g.globalMaximum) && this.g.useGlobalMinMax && !this.g.testRun) {
            as = this.g.globalMinimum;
            ar = this.g.globalMaximum;
            if (!Object(_number__WEBPACK_IMPORTED_MODULE_4__["isNaN_"])(this.g.minimumValue)) {
                as = this.g.minimumValue;
            }
            if (!Object(_number__WEBPACK_IMPORTED_MODULE_4__["isNaN_"])(this.g.maximumValue)) {
                ar = this.g.maximumValue;
            }
        }
        else if (!Object(_number__WEBPACK_IMPORTED_MODULE_4__["isNaN_"])(this.g.minimumValue) && !Object(_number__WEBPACK_IMPORTED_MODULE_4__["isNaN_"])(this.g.maximumValue)) {
            as = this.g.minimumValue;
            ar = this.g.maximumValue;
        }
        else {
            var au = -1;
            var av = -1;
            for (var aw = 0; aw < aq; aw++) {
                at = ag[aw];
                if (at > 0) {
                    if (at > ar) {
                        ar = at;
                        au = aw;
                    }
                    if (at < as) {
                        as = at;
                        av = aw;
                    }
                }
            }
            var ax = Object(_number__WEBPACK_IMPORTED_MODULE_4__["truncate"])(Math.floor(au / ah));
            var ay = au % ah;
            var az = Object(_number__WEBPACK_IMPORTED_MODULE_4__["truncate"])(Math.floor(av / ah));
            var a0 = av % ah;
            this.g.globalMinimum = as;
            this.g.globalMaximum = ar;
            var a1 = 0;
            var a2 = 0;
            var a3 = 0;
            var a4 = 0;
            var a5 = 0;
            var a6 = 0;
            for (var a7 = 0; a7 < ai; a7++) {
                z = Object(_number__WEBPACK_IMPORTED_MODULE_4__["truncate"])(Math.floor(ab._inner[a7] - b));
                aa = Object(_number__WEBPACK_IMPORTED_MODULE_4__["truncate"])(Math.floor(ac._inner[a7] - b));
                for (var a8 = z; a8 < z + v; a8++) {
                    for (var a9 = aa; a9 < aa + v; a9++) {
                        aj = a8 - z;
                        ak = a9 - aa;
                        if (a8 < 0 || a8 > (ah - 1) || a9 < 0 || a9 > (ah - 1)) {
                            continue;
                        }
                        if (a8 == ay && a9 == ax) {
                            a1++;
                            a3 = a3 + d.t(ac._inner[a7], this.g.window, this.g.tileViewport);
                            a4 = a4 + d.u(ab._inner[a7], this.g.window, this.g.tileViewport);
                        }
                        if (a8 == a0 && a9 == az) {
                            a2++;
                            a5 = a5 + d.t(ac._inner[a7], this.g.window, this.g.tileViewport);
                            a6 = a6 + d.u(ab._inner[a7], this.g.window, this.g.tileViewport);
                        }
                    }
                }
            }
            this.i = a3 / a1;
            this.j = a4 / a1;
            this.k = a5 / a2;
            this.l = a6 / a2;
            if (!Object(_number__WEBPACK_IMPORTED_MODULE_4__["isNaN_"])(this.g.minimumValue)) {
                as = this.g.minimumValue;
            }
            if (!Object(_number__WEBPACK_IMPORTED_MODULE_4__["isNaN_"])(this.g.maximumValue)) {
                ar = this.g.maximumValue;
            }
        }
        if (!this.g.testRun) {
            this.x(af, ag, ar, as);
            this.a = af;
        }
        this.z();
    };
    HeatTileGeneratorWorker.prototype.x = function (a, b, c, d) {
        var e;
        var f = b.length;
        if (this.g.useLogarithmicScale) {
            if (d <= 0) {
                d = 0;
            }
            else {
                d = Object(_number__WEBPACK_IMPORTED_MODULE_4__["logBase"])(d, this.g.logarithmBase);
            }
            if (c <= 0) {
                c = 0;
            }
            else {
                c = Object(_number__WEBPACK_IMPORTED_MODULE_4__["logBase"])(c, this.g.logarithmBase);
            }
        }
        var g = 0;
        var h = c - d;
        if (Object(_number__WEBPACK_IMPORTED_MODULE_4__["isNaN_"])(h) || h <= 0) {
            h = 1;
        }
        var i;
        var j;
        var k;
        var l;
        var m = this.g.useLogarithmicScale;
        var n = this.g.logarithmBase;
        if (this.g.scaleColors != null) {
            var o = new Array(this.g.scaleColors.length);
            var p = new Array(this.g.scaleColors.length);
            var q = new Array(this.g.scaleColors.length);
            var r = new Array(this.g.scaleColors.length);
            var s = new Array(this.g.scaleColors.length);
            var t = new Array(this.g.scaleColors.length);
            var u = new Array(this.g.scaleColors.length);
            var v = new Array(this.g.scaleColors.length);
            var w = new Array(this.g.scaleColors.length);
            var x = new Array(this.g.scaleColors.length);
            var y = new Array(this.g.scaleColors.length);
            var z = new Array(this.g.scaleColors.length);
            var aa = this.g.scaleColorOffsets;
            if (aa == null || aa.length != this.g.scaleColors.length) {
                aa = new Array(this.g.scaleColors.length);
                if (aa.length == 1) {
                    aa[0] = 0;
                }
                else {
                    for (var ab = 0; ab < this.g.scaleColors.length; ab++) {
                        aa[ab] = ab / (this.g.scaleColors.length - 1);
                    }
                }
            }
            for (var ac = 0; ac < this.g.scaleColors.length; ac++) {
                o[ac] = this.g.scaleColors[ac].l;
                q[ac] = this.g.scaleColors[ac].o;
                s[ac] = this.g.scaleColors[ac].n;
                u[ac] = this.g.scaleColors[ac].m;
                if (ac < this.g.scaleColors.length - 1) {
                    p[ac] = this.g.scaleColors[ac + 1].l;
                    r[ac] = this.g.scaleColors[ac + 1].o;
                    t[ac] = this.g.scaleColors[ac + 1].n;
                    v[ac] = this.g.scaleColors[ac + 1].m;
                }
                else {
                    p[ac] = this.g.scaleColors[ac].l;
                    r[ac] = this.g.scaleColors[ac].o;
                    t[ac] = this.g.scaleColors[ac].n;
                    v[ac] = this.g.scaleColors[ac].m;
                }
                w[ac] = p[ac] - o[ac];
                x[ac] = r[ac] - q[ac];
                y[ac] = t[ac] - s[ac];
                z[ac] = v[ac] - u[ac];
            }
            for (var ad = 0; ad < f; ad++) {
                e = b[ad];
                if (e == 0) {
                    continue;
                }
                if (m) {
                    if (e <= 0) {
                        e = 0;
                    }
                    else {
                        e = Object(_number__WEBPACK_IMPORTED_MODULE_4__["logBase"])(e, n);
                    }
                }
                g = (e - d) / (h);
                if (g < 0) {
                    g = 0;
                }
                if (g > 1) {
                    g = 1;
                }
                var ae = 0;
                for (var af = 0; af < aa.length; af++) {
                    if (aa[af] >= g) {
                        ae = af - 1;
                        break;
                    }
                }
                if (ae > aa.length - 2) {
                    ae = aa.length - 2;
                }
                if (ae < 0) {
                    ae = 0;
                }
                g = (g - aa[ae]) / (aa[ae + 1] - aa[ae]);
                i = Object(_number__WEBPACK_IMPORTED_MODULE_4__["truncate"])(Math.floor(o[ae] + g * (w[ae])));
                j = Object(_number__WEBPACK_IMPORTED_MODULE_4__["truncate"])(Math.floor(q[ae] + g * (x[ae])));
                k = Object(_number__WEBPACK_IMPORTED_MODULE_4__["truncate"])(Math.floor(s[ae] + g * (y[ae])));
                l = Object(_number__WEBPACK_IMPORTED_MODULE_4__["truncate"])(Math.floor(u[ae] + g * (z[ae])));
                a[4 * ad] = i;
                a[4 * ad + 1] = j;
                a[4 * ad + 2] = k;
                a[4 * ad + 3] = l;
            }
        }
        else {
            var ag = this.g.minimumColor.l;
            var ah = this.g.maximumColor.l;
            var ai = this.g.minimumColor.o;
            var aj = this.g.maximumColor.o;
            var ak = this.g.minimumColor.n;
            var al = this.g.maximumColor.n;
            var am = this.g.minimumColor.m;
            var an = this.g.maximumColor.m;
            var ao = ah - ag;
            var ap = aj - ai;
            var aq = al - ak;
            var ar = an - am;
            for (var as = 0; as < f; as++) {
                e = b[as];
                if (e == 0) {
                    continue;
                }
                if (m) {
                    e = Object(_number__WEBPACK_IMPORTED_MODULE_4__["logBase"])(e, n);
                }
                g = (e - d) / (h);
                if (g < 0) {
                    g = 0;
                }
                if (g > 1) {
                    g = 1;
                }
                i = Object(_number__WEBPACK_IMPORTED_MODULE_4__["truncate"])(Math.floor(ag + g * (ao)));
                j = Object(_number__WEBPACK_IMPORTED_MODULE_4__["truncate"])(Math.floor(ai + g * (ap)));
                k = Object(_number__WEBPACK_IMPORTED_MODULE_4__["truncate"])(Math.floor(ak + g * (aq)));
                l = Object(_number__WEBPACK_IMPORTED_MODULE_4__["truncate"])(Math.floor(am + g * (ar)));
                a[4 * as] = i;
                a[4 * as + 1] = j;
                a[4 * as + 2] = k;
                a[4 * as + 3] = l;
            }
        }
    };
    HeatTileGeneratorWorker.prototype.b = function (a) {
        var b = new Array(Object(_number__WEBPACK_IMPORTED_MODULE_4__["truncate"])(a.width) * Object(_number__WEBPACK_IMPORTED_MODULE_4__["truncate"])(a.height));
        for (var c = 0; c < b.length; c++) {
            b[c] = 0;
        }
        return b;
    };
    HeatTileGeneratorWorker.prototype.d = function (a) {
        var b = new Array(Object(_number__WEBPACK_IMPORTED_MODULE_4__["truncate"])(a.width) * Object(_number__WEBPACK_IMPORTED_MODULE_4__["truncate"])(a.height) * 4);
        for (var c = 0; c < b.length; c++) {
            b[c] = 0;
        }
        return b;
    };
    HeatTileGeneratorWorker.prototype.c = function (a, b) {
        var c = new Array(a * a);
        for (var d = 0; d < c.length; d++) {
            c[d] = 0;
        }
        var e = a / 2;
        var f = a / 2;
        for (var g = 0; g < a; g++) {
            for (var h = 0; h < a; h++) {
                var i = Math.sqrt(Math.pow(g - f, 2) + Math.pow(h - f, 2));
                if (i > e) {
                    c[h * a + g] = 0;
                }
                else {
                    c[h * a + g] = e - i;
                }
            }
        }
        var j = 0;
        var k = -1.7976931348623157E+308;
        var l = 1.7976931348623157E+308;
        for (var m = 0; m < a; m++) {
            for (var n = 0; n < a; n++) {
                var o = c[n * a + m];
                if (o == 0) {
                    continue;
                }
                j += o;
                k = o > k ? o : k;
                l = o < l ? o : l;
            }
        }
        for (var p = 0; p < a; p++) {
            for (var q = 0; q < a; q++) {
                var r = c[q * a + p];
                if (r == 0) {
                    continue;
                }
                var s = (r - l) / (k - l);
                c[q * a + p] = 0.01 + s * (0.99);
            }
        }
        c[Object(_number__WEBPACK_IMPORTED_MODULE_4__["truncate"])(f) * a + Object(_number__WEBPACK_IMPORTED_MODULE_4__["truncate"])(f)] = 1;
        return c;
    };
    HeatTileGeneratorWorker.prototype.q = function (a, b) {
        return Object(_number__WEBPACK_IMPORTED_MODULE_4__["truncate"])(Math.floor(b * 2));
    };
    HeatTileGeneratorWorker.prototype.z = function () {
        var _this = this;
        if (this.completedSink == null) {
            return;
        }
        this.completedSink.onCompleted(((function () {
            var $ret = new _HeatTileImageCreatedEventArgs__WEBPACK_IMPORTED_MODULE_3__["HeatTileImageCreatedEventArgs"]();
            $ret.url = _this.w;
            $ret.x = _this.n;
            $ret.y = _this.o;
            $ret.z = _this.p;
            $ret.globalMinimumValue = _this.g.globalMinimum;
            $ret.globalMaximumValue = _this.g.globalMaximum;
            $ret.globalMaximumValueLongitude = _this.j;
            $ret.globalMaximumValueLatitude = _this.i;
            $ret.globalMinimumValueLongitude = _this.l;
            $ret.globalMinimumValueLatitude = _this.k;
            $ret.imageData = _this.a;
            $ret.image = _this.g.image;
            return $ret;
        })()));
    };
    Object.defineProperty(HeatTileGeneratorWorker.prototype, "completedSink", {
        get: function () {
            return this._completedSink;
        },
        set: function (a) {
            this._completedSink = a;
        },
        enumerable: true,
        configurable: true
    });
    HeatTileGeneratorWorker.$t = Object(_type__WEBPACK_IMPORTED_MODULE_1__["markType"])(HeatTileGeneratorWorker, 'HeatTileGeneratorWorker');
    HeatTileGeneratorWorker.v = {};
    HeatTileGeneratorWorker.s = 0;
    HeatTileGeneratorWorker.m = 0;
    return HeatTileGeneratorWorker;
}(_type__WEBPACK_IMPORTED_MODULE_1__["Base"]));

//# sourceMappingURL=HeatTileGeneratorWorker.js.map

/***/ }),

/***/ "./node_modules/igniteui-angular-core/esm5/lib/HeatTileImageCreatedEventArgs.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/igniteui-angular-core/esm5/lib/HeatTileImageCreatedEventArgs.js ***!
  \**************************************************************************************/
/*! exports provided: HeatTileImageCreatedEventArgs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeatTileImageCreatedEventArgs", function() { return HeatTileImageCreatedEventArgs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _TileImageCreatedEventArgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TileImageCreatedEventArgs */ "./node_modules/igniteui-angular-core/esm5/lib/TileImageCreatedEventArgs.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type */ "./node_modules/igniteui-angular-core/esm5/lib/type.js");
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/



/**
 * @hidden
 */
var HeatTileImageCreatedEventArgs = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HeatTileImageCreatedEventArgs, _super);
    function HeatTileImageCreatedEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._globalMinimumValue = 0;
        _this._globalMaximumValue = 0;
        _this._globalMaximumValueLongitude = 0;
        _this._globalMaximumValueLatitude = 0;
        _this._globalMinimumValueLongitude = 0;
        _this._globalMinimumValueLatitude = 0;
        return _this;
    }
    Object.defineProperty(HeatTileImageCreatedEventArgs.prototype, "globalMinimumValue", {
        get: function () {
            return this._globalMinimumValue;
        },
        set: function (a) {
            this._globalMinimumValue = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileImageCreatedEventArgs.prototype, "globalMaximumValue", {
        get: function () {
            return this._globalMaximumValue;
        },
        set: function (a) {
            this._globalMaximumValue = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileImageCreatedEventArgs.prototype, "globalMaximumValueLongitude", {
        get: function () {
            return this._globalMaximumValueLongitude;
        },
        set: function (a) {
            this._globalMaximumValueLongitude = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileImageCreatedEventArgs.prototype, "globalMaximumValueLatitude", {
        get: function () {
            return this._globalMaximumValueLatitude;
        },
        set: function (a) {
            this._globalMaximumValueLatitude = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileImageCreatedEventArgs.prototype, "globalMinimumValueLongitude", {
        get: function () {
            return this._globalMinimumValueLongitude;
        },
        set: function (a) {
            this._globalMinimumValueLongitude = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileImageCreatedEventArgs.prototype, "globalMinimumValueLatitude", {
        get: function () {
            return this._globalMinimumValueLatitude;
        },
        set: function (a) {
            this._globalMinimumValueLatitude = a;
        },
        enumerable: true,
        configurable: true
    });
    HeatTileImageCreatedEventArgs.$t = Object(_type__WEBPACK_IMPORTED_MODULE_2__["markType"])(HeatTileImageCreatedEventArgs, 'HeatTileImageCreatedEventArgs', _TileImageCreatedEventArgs__WEBPACK_IMPORTED_MODULE_1__["TileImageCreatedEventArgs"].$);
    return HeatTileImageCreatedEventArgs;
}(_TileImageCreatedEventArgs__WEBPACK_IMPORTED_MODULE_1__["TileImageCreatedEventArgs"]));

//# sourceMappingURL=HeatTileImageCreatedEventArgs.js.map

/***/ }),

/***/ "./node_modules/igniteui-angular-core/esm5/lib/HeatTileScaler.js":
/*!***********************************************************************!*\
  !*** ./node_modules/igniteui-angular-core/esm5/lib/HeatTileScaler.js ***!
  \***********************************************************************/
/*! exports provided: HeatTileScaler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeatTileScaler", function() { return HeatTileScaler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ "./node_modules/igniteui-angular-core/esm5/lib/type.js");
/* harmony import */ var _ScalerVisibleBounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScalerVisibleBounds */ "./node_modules/igniteui-angular-core/esm5/lib/ScalerVisibleBounds.js");
/* harmony import */ var _Rect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Rect */ "./node_modules/igniteui-angular-core/esm5/lib/Rect.js");
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/




/**
 * @hidden
 */
var HeatTileScaler = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HeatTileScaler, _super);
    function HeatTileScaler() {
        var _this = _super.call(this) || this;
        _this.b = 0;
        _this.c = 0;
        _this.d = 0;
        _this.e = 0;
        _this.b = 85.05112878 - -85.05112878;
        _this.c = 180 - -180;
        _this.d = _this.k(85.05112878);
        _this.e = _this.k(85.05112878) - _this.k(-85.05112878);
        return _this;
    }
    HeatTileScaler.prototype.k = function (a) {
        var b = a * (0.017453292519943295);
        var c = Math.sin(b);
        var d = 0.5 * Math.log((1 + c) / (1 - c));
        return d;
    };
    HeatTileScaler.a = function (a, b) {
        var c = new _Rect__WEBPACK_IMPORTED_MODULE_3__["Rect"](0, b.left / a.width, b.top / a.height, b.width / a.width, b.height / a.height);
        var d = c.left + c.width * a.left;
        var e = c.left + c.width * a.right;
        var f = c.top + c.height * a.top;
        var g = c.top + c.height * a.bottom;
        var h = new _ScalerVisibleBounds__WEBPACK_IMPORTED_MODULE_2__["ScalerVisibleBounds"](d, f, e, g);
        return h;
    };
    HeatTileScaler.m = function (a) {
        a = Math.exp(2 * a);
        return Math.asin((a - 1) / (a + 1)) / 0.017453292519943295;
    };
    HeatTileScaler.prototype.t = function (a, b, c) {
        var d = (a - c.top) * b.width + b.top * c.height;
        d = this.k(85.05112878) - d / (c.height / this.e);
        return HeatTileScaler.m(d);
    };
    HeatTileScaler.prototype.r = function (a, b, c) {
        var d = c.top + this.l(a, c.height);
        return (d - b.top * c.height) / b.width;
    };
    HeatTileScaler.prototype.l = function (a, b) {
        a = a > -85.05112878 ? (a < 85.05112878 ? a : 85.05112878) : -85.05112878;
        var c = this.k(a);
        var d = (this.d - c) * b / this.e;
        return (d);
    };
    HeatTileScaler.prototype.u = function (a, b, c) {
        var d = b.left + b.width * (a - c.left) / c.width;
        return -180 + d * (this.c);
    };
    HeatTileScaler.prototype.s = function (a, b, c) {
        var d = (a - -180) / (this.c);
        return c.left + c.width * (d - b.left) / b.width;
    };
    HeatTileScaler.prototype.i = function (a, b) {
        var c = HeatTileScaler.a(a, b);
        return this.t(b.bottom, a, b);
    };
    HeatTileScaler.prototype.g = function (a, b) {
        var c = HeatTileScaler.a(a, b);
        return this.t(b.top, a, b);
    };
    HeatTileScaler.prototype.j = function (a, b) {
        var c = HeatTileScaler.a(a, b);
        return this.u(b.left, a, b);
    };
    HeatTileScaler.prototype.h = function (a, b) {
        var c = HeatTileScaler.a(a, b);
        return this.u(b.right, a, b);
    };
    HeatTileScaler.prototype.v = function (a, b, c) {
        var d = c.height;
        var e = c.top;
        for (var f = 0; f < a.count; f++) {
            var g = a._inner[f];
            g = g > -85.05112878 ? (g < 85.05112878 ? g : 85.05112878) : -85.05112878;
            var h = g * (0.017453292519943295);
            var i = Math.sin(h);
            var j = 0.5 * Math.log((1 + i) / (1 - i));
            var k = (this.d - j) * d / this.e;
            k = e + k;
            a._inner[f] = (k - b.top * d) / b.width;
        }
    };
    HeatTileScaler.prototype.w = function (a, b, c) {
        var d = c.left;
        var e = c.width;
        var f = b.left;
        var g = b.width;
        for (var h = 0; h < a.count; h++) {
            var i = (a._inner[h] - -180) / (this.c);
            a._inner[h] = c.left + c.width * (i - b.left) / b.width;
        }
    };
    HeatTileScaler.$t = Object(_type__WEBPACK_IMPORTED_MODULE_1__["markType"])(HeatTileScaler, 'HeatTileScaler');
    return HeatTileScaler;
}(_type__WEBPACK_IMPORTED_MODULE_1__["Base"]));

//# sourceMappingURL=HeatTileScaler.js.map

/***/ }),

/***/ "./node_modules/igniteui-angular-core/esm5/lib/IArray.js":
/*!***************************************************************!*\
  !*** ./node_modules/igniteui-angular-core/esm5/lib/IArray.js ***!
  \***************************************************************/
/*! exports provided: IArray_$type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IArray_$type", function() { return IArray_$type; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./node_modules/igniteui-angular-core/esm5/lib/type.js");
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

/**
 * @hidden
 */
var IArray_$type = new _type__WEBPACK_IMPORTED_MODULE_0__["Type"](null, 'IArray');
//# sourceMappingURL=IArray.js.map

/***/ }),

/***/ "./node_modules/igniteui-angular-core/esm5/lib/IArrayList.js":
/*!*******************************************************************!*\
  !*** ./node_modules/igniteui-angular-core/esm5/lib/IArrayList.js ***!
  \*******************************************************************/
/*! exports provided: IArrayList_$type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IArrayList_$type", function() { return IArrayList_$type; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./node_modules/igniteui-angular-core/esm5/lib/type.js");
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

/**
 * @hidden
 */
var IArrayList_$type = new _type__WEBPACK_IMPORTED_MODULE_0__["Type"](null, 'IArrayList');
//# sourceMappingURL=IArrayList.js.map

/***/ }),

/***/ "./node_modules/igniteui-angular-core/esm5/lib/IComparer$1.js":
/*!********************************************************************!*\
  !*** ./node_modules/igniteui-angular-core/esm5/lib/IComparer$1.js ***!
  \********************************************************************/
/*! exports provided: IComparer$1_$type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IComparer$1_$type", function() { return IComparer$1_$type; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./node_modules/igniteui-angular-core/esm5/lib/type.js");
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

/**
 * @hidden
 */
var IComparer$1_$type = new _type__WEBPACK_IMPORTED_MODULE_0__["Type"](null, 'IComparer$1');
//# sourceMappingURL=IComparer$1.js.map

/***/ }),

/***/ "./node_modules/igniteui-angular-core/esm5/lib/IComparer.js":
/*!******************************************************************!*\
  !*** ./node_modules/igniteui-angular-core/esm5/lib/IComparer.js ***!
  \******************************************************************/
/*! exports provided: IComparer_$type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IComparer_$type", function() { return IComparer_$type; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./node_modules/igniteui-angular-core/esm5/lib/type.js");
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

/**
 * @hidden
 */
var IComparer_$type = new _type__WEBPACK_IMPORTED_MODULE_0__["Type"](null, 'IComparer');
//# sourceMappingURL=IComparer.js.map

/***/ }),

/***/ "./node_modules/igniteui-angular-core/esm5/lib/ITileWorkCompletedSink.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/igniteui-angular-core/esm5/lib/ITileWorkCompletedSink.js ***!
  \*******************************************************************************/
/*! exports provided: ITileWorkCompletedSink_$type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITileWorkCompletedSink_$type", function() { return ITileWorkCompletedSink_$type; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./node_modules/igniteui-angular-core/esm5/lib/type.js");
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

/**
 * @hidden
 */
var ITileWorkCompletedSink_$type = new _type__WEBPACK_IMPORTED_MODULE_0__["Type"](null, 'ITileWorkCompletedSink');
//# sourceMappingURL=ITileWorkCompletedSink.js.map

/***/ }),

/***/ "./node_modules/igniteui-angular-core/esm5/lib/List$1.js":
/*!***************************************************************!*\
  !*** ./node_modules/igniteui-angular-core/esm5/lib/List$1.js ***!
  \***************************************************************/
/*! exports provided: List$1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List$1", function() { return List$1; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ "./node_modules/igniteui-angular-core/esm5/lib/type.js");
/* harmony import */ var _IArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IArray */ "./node_modules/igniteui-angular-core/esm5/lib/IArray.js");
/* harmony import */ var _IArrayList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IArrayList */ "./node_modules/igniteui-angular-core/esm5/lib/IArrayList.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array */ "./node_modules/igniteui-angular-core/esm5/lib/array.js");
/* harmony import */ var _Comparer$1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Comparer$1 */ "./node_modules/igniteui-angular-core/esm5/lib/Comparer$1.js");
/* harmony import */ var _ReadOnlyCollection$1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ReadOnlyCollection$1 */ "./node_modules/igniteui-angular-core/esm5/lib/ReadOnlyCollection$1.js");
/* harmony import */ var _NotImplementedException__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NotImplementedException */ "./node_modules/igniteui-angular-core/esm5/lib/NotImplementedException.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./number */ "./node_modules/igniteui-angular-core/esm5/lib/number.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./string */ "./node_modules/igniteui-angular-core/esm5/lib/string.js");
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/










/**
 * @hidden
 */
var List$1 = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](List$1, _super);
    function List$1($t, a) {
        var e_1, _a;
        var _rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            _rest[_i - 2] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this._inner = null;
        _this.c = false;
        _this.h = 0;
        _this.m = {};
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    _this._inner = ([]);
                    _this.c = (_this.$t.InstanceConstructor && _this.$t.InstanceConstructor.prototype.equals === _type__WEBPACK_IMPORTED_MODULE_1__["Base"].prototype.equals);
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    {
                        _this._inner = ([]);
                        _this.c = (_this.$t.InstanceConstructor && _this.$t.InstanceConstructor.prototype.equals === _type__WEBPACK_IMPORTED_MODULE_1__["Base"].prototype.equals);
                    }
                    if (_this.d(0, c, true)) {
                        return _this;
                    }
                    try {
                        for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](Object(_type__WEBPACK_IMPORTED_MODULE_1__["fromEnum"])(c)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var d = _c.value;
                            _this.add(d);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                break;
            case 2:
                {
                    var c = _rest[0];
                    {
                        _this._inner = ([]);
                        _this.c = (_this.$t.InstanceConstructor && _this.$t.InstanceConstructor.prototype.equals === _type__WEBPACK_IMPORTED_MODULE_1__["Base"].prototype.equals);
                    }
                }
                break;
        }
        return _this;
    }
    List$1.prototype.x = function (a, b) {
        this._inner[a] = b;
    };
    List$1.prototype.r = function (a, b) {
        this._inner.splice(a, 0, b);
    };
    List$1.prototype.n = function (a) {
        this._inner.push(a);
    };
    List$1.prototype.u = function (a) {
        if (a == 0) {
            this._inner.shift();
            return;
        }
        this._inner.splice(a, 1);
    };
    List$1.prototype.p = function () {
        this._inner = ([]);
    };
    List$1.prototype.item = function (a, b) {
        if (arguments.length === 2) {
            this.x(a, b);
            return b;
        }
        else {
            return this._inner[a];
        }
    };
    List$1.prototype.indexOf = function (a) {
        if (this.c) {
            return (this._inner.indexOf(a));
        }
        for (var b = 0; b < this._inner.length; b++) {
            if (_type__WEBPACK_IMPORTED_MODULE_1__["Base"].equalsStatic(Object(_type__WEBPACK_IMPORTED_MODULE_1__["getBoxIfEnum"])(this.$t, a), Object(_type__WEBPACK_IMPORTED_MODULE_1__["getBoxIfEnum"])(this.$t, this._inner[b]))) {
                return b;
            }
        }
        return -1;
    };
    List$1.prototype.indexOf2 = function (a, b) {
        if (this.c) {
            return (this._inner.indexOf(a, b));
        }
        for (; b < this._inner.length; b++) {
            if (_type__WEBPACK_IMPORTED_MODULE_1__["Base"].equalsStatic(Object(_type__WEBPACK_IMPORTED_MODULE_1__["getBoxIfEnum"])(this.$t, a), Object(_type__WEBPACK_IMPORTED_MODULE_1__["getBoxIfEnum"])(this.$t, this._inner[b]))) {
                return b;
            }
        }
        return -1;
    };
    List$1.prototype.k = function (a) {
        if (this.c) {
            return (this._inner.lastIndexOf(a));
        }
        for (var b = this._inner.length - 1; b >= 0; b--) {
            if (_type__WEBPACK_IMPORTED_MODULE_1__["Base"].equalsStatic(Object(_type__WEBPACK_IMPORTED_MODULE_1__["getBoxIfEnum"])(this.$t, a), Object(_type__WEBPACK_IMPORTED_MODULE_1__["getBoxIfEnum"])(this.$t, this._inner[b]))) {
                return b;
            }
        }
        return -1;
    };
    List$1.prototype.insert = function (a, b) {
        this.r(a, b);
    };
    List$1.prototype.removeAt = function (a) {
        this.u(a);
    };
    Object.defineProperty(List$1.prototype, "count", {
        get: function () {
            return this._inner.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List$1.prototype, "isReadOnly", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    List$1.prototype.add = function (a) {
        this.n(a);
    };
    List$1.prototype.clear = function () {
        this.p();
    };
    List$1.prototype.contains = function (a) {
        return this.indexOf(a) >= 0;
    };
    List$1.prototype.copyTo = function (a, b) {
        for (var c = 0; c < this._inner.length; c++) {
            a[b + c] = this._inner[c];
        }
    };
    List$1.prototype.remove = function (a) {
        var b = this.indexOf(a);
        if (b < 0) {
            return false;
        }
        this.u(b);
        return true;
    };
    List$1.prototype.getEnumerator = function () {
        return Object(_type__WEBPACK_IMPORTED_MODULE_1__["getEnumeratorObject"])(this._inner);
    };
    List$1.prototype.getEnumeratorObject = function () {
        return Object(_type__WEBPACK_IMPORTED_MODULE_1__["getEnumeratorObject"])(this._inner);
    };
    List$1.prototype.asArray = function () {
        return this._inner;
    };
    List$1.prototype.d = function (index_, collection_, a) {
        var b = Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeCast"])(_IArrayList__WEBPACK_IMPORTED_MODULE_3__["IArrayList_$type"], collection_);
        if (b != null) {
            var a_ = b.asArrayList();
            Array.prototype.splice.apply(this._inner, Array.prototype.concat.apply([index_, 0], a_));
            return true;
        }
        var c = Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeCast"])(_IArray__WEBPACK_IMPORTED_MODULE_2__["IArray_$type"], collection_);
        if (c != null) {
            var a_ = c.asArray();
            Array.prototype.splice.apply(this._inner, Array.prototype.concat.apply([index_, 0], a_));
            return true;
        }
        var asList_ = Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeCast"])(_type__WEBPACK_IMPORTED_MODULE_1__["IList$1_$type"].specialize(this.$t), collection_);
        if (asList_ != null) {
            for (var i_ = 0; i_ < asList_.count; i_++) {
                var item_ = asList_.item(i_);
                this._inner.splice(index_ + i_, 0, item_);
            }
            return true;
        }
        var arr_ = (Array.isArray(collection_) ? collection_ : null);
        if (arr_ != null) {
            var inn_ = this._inner;
            if (this._inner.length == 0) {
                if (a) {
                    var parr_ = arr_;
                    var d = arr_.length;
                    for (var i_ = 0; i_ < d; i_++) {
                        inn_[index_++] = parr_[i_];
                    }
                }
                else {
                    var e = arr_.length;
                    for (var i_ = 0; i_ < e; i_++) {
                        inn_[index_++] = Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeCastObjTo$t"])(this.$t, arr_[i_]);
                    }
                }
            }
            else {
                for (var i_ = 0; i_ < arr_.length; i_++) {
                    inn_.splice(index_++, 0, arr_[i_]);
                }
            }
            return true;
        }
        return false;
    };
    List$1.prototype.t = function (a, b) {
        var e_2, _a;
        if (this.d(a, b, false)) {
            return;
        }
        var j_ = a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](Object(_type__WEBPACK_IMPORTED_MODULE_1__["fromEn"])(b)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item_ = _c.value;
                this._inner.splice(j_, 0, item_);
                j_++;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    List$1.prototype.s = function (a, b) {
        var e_3, _a;
        if (this.d(a, b, true)) {
            return;
        }
        var j_ = a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](Object(_type__WEBPACK_IMPORTED_MODULE_1__["fromEnum"])(b)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item_ = _c.value;
                this._inner.splice(j_, 0, item_);
                j_++;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    List$1.prototype.v = function (index_, numToRemove_) {
        if (index_ == 0 && numToRemove_ == 1) {
            this._inner.shift();
            return;
        }
        this._inner.splice(index_, numToRemove_);
    };
    List$1.prototype.copyTo1 = function (a, b) {
        Object(_array__WEBPACK_IMPORTED_MODULE_4__["arrayCopyTo"])(this._inner, a, b);
    };
    Object.defineProperty(List$1.prototype, "isFixedSize", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    List$1.prototype.add1 = function (a) {
        this.n(Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeCastObjTo$t"])(this.$t, a));
        return this._inner.length - 1;
    };
    List$1.prototype.contains1 = function (a) {
        return this.indexOf1(a) >= 0;
    };
    List$1.prototype.indexOf1 = function (a) {
        return this.indexOf(Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeCastObjTo$t"])(this.$t, a));
    };
    List$1.prototype.insert1 = function (a, b) {
        this.r(a, Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeCastObjTo$t"])(this.$t, b));
    };
    List$1.prototype.remove1 = function (a) {
        var b = this.indexOf1(a);
        if (b < 0) {
            return;
        }
        this.u(b);
    };
    List$1.prototype.y = function () {
        var a = null;
        if (this.$t == _type__WEBPACK_IMPORTED_MODULE_1__["Number_$type"]) {
            a = function (b, c) {
                var d = b;
                var e = c;
                if (d < e) {
                    return -1;
                }
                if (d == e) {
                    return 0;
                }
                return 1;
            };
        }
        else if (this.$t == _type__WEBPACK_IMPORTED_MODULE_1__["Number_$type"]) {
            a = function (b, c) {
                var d = b;
                var e = c;
                if (d < e) {
                    return -1;
                }
                if (d == e) {
                    return 0;
                }
                return 1;
            };
        }
        else if (this.$t == _type__WEBPACK_IMPORTED_MODULE_1__["Number_$type"]) {
            a = function (b, c) {
                var d = Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeGetValue"])(b);
                var e = Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeGetValue"])(c);
                if (d < e) {
                    return -1;
                }
                if (d == e) {
                    return 0;
                }
                return 1;
            };
        }
        else if (this.$t == _type__WEBPACK_IMPORTED_MODULE_1__["Date_$type"]) {
            a = function (b, c) {
                var d = b;
                var e = c;
                if (d.getTime() < e.getTime()) {
                    return -1;
                }
                if (d.getTime() == e.getTime()) {
                    return 0;
                }
                return 1;
            };
        }
        else {
            a = function (b, c) { return Object(_string__WEBPACK_IMPORTED_MODULE_9__["stringCompareTo"])(b, c); };
        }
        this.ab(a);
    };
    List$1.prototype.ab = function (compare_) {
        this._inner.sort(compare_);
    };
    List$1.prototype.aa = function (compare_) {
        this._inner.sort(compare_);
    };
    List$1.prototype.o = function (a) {
        var e_4, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](Object(_type__WEBPACK_IMPORTED_MODULE_1__["fromEnum"])(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item_ = _c.value;
                this._inner.push(item_);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    List$1.prototype.toArray = function () {
        return this._inner;
    };
    List$1.prototype.q = function (a) {
        for (var b = 0; b < this._inner.length; b++) {
            a(this._inner[b]);
        }
    };
    Object.defineProperty(List$1.prototype, "isSynchronized", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List$1.prototype, "syncRoot", {
        get: function () {
            return this.m;
        },
        enumerable: true,
        configurable: true
    });
    List$1.prototype.f = function (a) {
        return this.g(a, _Comparer$1__WEBPACK_IMPORTED_MODULE_5__["Comparer$1"].defaultComparerValue(this.$t));
    };
    List$1.prototype.g = function (a, b) {
        var c = 0;
        var d = this.count - 1;
        while (c <= d) {
            var e = c + (Object(_number__WEBPACK_IMPORTED_MODULE_8__["intDivide"])((d - c), 2));
            var f = this._inner[e];
            var g = b.compare(f, a);
            if (g == 0) {
                return e;
            }
            if (g < 0) {
                c = e + 1;
            }
            else {
                d = e - 1;
            }
        }
        return ~c;
    };
    List$1.prototype.e = function () {
        return new _ReadOnlyCollection$1__WEBPACK_IMPORTED_MODULE_6__["ReadOnlyCollection$1"](this.$t, 1, this);
    };
    List$1.prototype.w = function () {
        for (var a = 0; a < Object(_number__WEBPACK_IMPORTED_MODULE_8__["intDivide"])(this.count, 2); a++) {
            var b = this.count - a - 1;
            var c = this._inner[a];
            this._inner[a] = this._inner[b];
            this._inner[b] = c;
        }
    };
    List$1.prototype.z = function (a) {
        this.aa(Object(_type__WEBPACK_IMPORTED_MODULE_1__["runOn"])(a, a.compare));
    };
    List$1.prototype.i = function (a) {
        for (var b = 0; b < this._inner.length; b++) {
            if (a(this._inner[b])) {
                return b;
            }
        }
        return -1;
    };
    List$1.prototype.l = function (a) {
        throw new _NotImplementedException__WEBPACK_IMPORTED_MODULE_7__["NotImplementedException"](0);
    };
    List$1.$t = Object(_type__WEBPACK_IMPORTED_MODULE_1__["markType"])(List$1, 'List$1', _type__WEBPACK_IMPORTED_MODULE_1__["Base"].$, [_type__WEBPACK_IMPORTED_MODULE_1__["IList$1_$type"].specialize(0), _IArray__WEBPACK_IMPORTED_MODULE_2__["IArray_$type"], _type__WEBPACK_IMPORTED_MODULE_1__["IList_$type"]]);
    return List$1;
}(_type__WEBPACK_IMPORTED_MODULE_1__["Base"]));

//# sourceMappingURL=List$1.js.map

/***/ }),

/***/ "./node_modules/igniteui-angular-core/esm5/lib/NotImplementedException.js":
/*!********************************************************************************!*\
  !*** ./node_modules/igniteui-angular-core/esm5/lib/NotImplementedException.js ***!
  \********************************************************************************/
/*! exports provided: NotImplementedException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotImplementedException", function() { return NotImplementedException; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ "./node_modules/igniteui-angular-core/esm5/lib/type.js");
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/


/**
 * @hidden
 */
var NotImplementedException = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NotImplementedException, _super);
    function NotImplementedException(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    _this = _super.call(this, 1, "not implemented") || this;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    _this = _super.call(this, 1, c) || this;
                    throw new NotImplementedException(0);
                }
                break;
        }
        return _this;
    }
    NotImplementedException.$t = Object(_type__WEBPACK_IMPORTED_MODULE_1__["markType"])(NotImplementedException, 'NotImplementedException', _type__WEBPACK_IMPORTED_MODULE_1__["BaseError"].$);
    return NotImplementedException;
}(_type__WEBPACK_IMPORTED_MODULE_1__["BaseError"]));

//# sourceMappingURL=NotImplementedException.js.map

/***/ }),

/***/ "./node_modules/igniteui-angular-core/esm5/lib/ReadOnlyCollection$1.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/igniteui-angular-core/esm5/lib/ReadOnlyCollection$1.js ***!
  \*****************************************************************************/
/*! exports provided: ReadOnlyCollection$1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadOnlyCollection$1", function() { return ReadOnlyCollection$1; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ "./node_modules/igniteui-angular-core/esm5/lib/type.js");
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/


/**
 * @hidden
 */
var ReadOnlyCollection$1 = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ReadOnlyCollection$1, _super);
    function ReadOnlyCollection$1($t, a) {
        var _rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            _rest[_i - 2] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this.a = null;
        _this.c = {};
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    var c = _rest[0];
                    _this.a = c;
                }
                break;
        }
        return _this;
    }
    ReadOnlyCollection$1.prototype.item = function (a, b) {
        if (arguments.length === 2) {
            this.a.item(a, b);
            return b;
        }
        else {
            return this.a.item(a);
        }
    };
    ReadOnlyCollection$1.prototype.indexOf = function (a) {
        return this.a.indexOf(a);
    };
    ReadOnlyCollection$1.prototype.insert = function (a, b) {
    };
    ReadOnlyCollection$1.prototype.removeAt = function (a) {
    };
    Object.defineProperty(ReadOnlyCollection$1.prototype, "count", {
        get: function () {
            return this.a.count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyCollection$1.prototype, "isReadOnly", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    ReadOnlyCollection$1.prototype.add = function (a) {
    };
    ReadOnlyCollection$1.prototype.clear = function () {
    };
    ReadOnlyCollection$1.prototype.contains = function (a) {
        return this.a.contains(a);
    };
    ReadOnlyCollection$1.prototype.copyTo = function (a, b) {
        this.a.copyTo(a, b);
    };
    ReadOnlyCollection$1.prototype.remove = function (a) {
        return false;
    };
    ReadOnlyCollection$1.prototype.getEnumerator = function () {
        return Object(_type__WEBPACK_IMPORTED_MODULE_1__["getEnumerator"])(this.a);
    };
    ReadOnlyCollection$1.prototype.getEnumeratorObject = function () {
        return Object(_type__WEBPACK_IMPORTED_MODULE_1__["getEnumerator"])(this.a);
    };
    Object.defineProperty(ReadOnlyCollection$1.prototype, "isFixedSize", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    ReadOnlyCollection$1.prototype.add1 = function (a) {
        return -1;
    };
    ReadOnlyCollection$1.prototype.contains1 = function (a) {
        return this.a.contains(Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeCastObjTo$t"])(this.$t, a));
    };
    ReadOnlyCollection$1.prototype.indexOf1 = function (a) {
        return this.a.indexOf(Object(_type__WEBPACK_IMPORTED_MODULE_1__["typeCastObjTo$t"])(this.$t, a));
    };
    ReadOnlyCollection$1.prototype.insert1 = function (a, b) {
    };
    ReadOnlyCollection$1.prototype.remove1 = function (a) {
    };
    ReadOnlyCollection$1.prototype.copyTo1 = function (a, b) {
        this.a.copyTo(a, b);
    };
    Object.defineProperty(ReadOnlyCollection$1.prototype, "b", {
        get: function () {
            return this.a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyCollection$1.prototype, "isSynchronized", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyCollection$1.prototype, "syncRoot", {
        get: function () {
            return this.c;
        },
        enumerable: true,
        configurable: true
    });
    ReadOnlyCollection$1.$t = Object(_type__WEBPACK_IMPORTED_MODULE_1__["markType"])(ReadOnlyCollection$1, 'ReadOnlyCollection$1', _type__WEBPACK_IMPORTED_MODULE_1__["Base"].$, [_type__WEBPACK_IMPORTED_MODULE_1__["IList$1_$type"].specialize(0), _type__WEBPACK_IMPORTED_MODULE_1__["IList_$type"]]);
    return ReadOnlyCollection$1;
}(_type__WEBPACK_IMPORTED_MODULE_1__["Base"]));

//# sourceMappingURL=ReadOnlyCollection$1.js.map

/***/ }),

/***/ "./node_modules/igniteui-angular-core/esm5/lib/Rect.js":
/*!*************************************************************!*\
  !*** ./node_modules/igniteui-angular-core/esm5/lib/Rect.js ***!
  \*************************************************************/
/*! exports provided: Rect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return Rect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ "./node_modules/igniteui-angular-core/esm5/lib/type.js");
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/


/**
 * @hidden
 */
var Rect = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Rect, _super);
    function Rect(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.s = 0;
        _this.t = 0;
        _this.r = 0;
        _this.n = 0;
        _this.q = 0;
        _this.o = 0;
        _this.p = 0;
        _this.m = 0;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    var f = _rest[3];
                    _this.top = d;
                    _this.left = c;
                    _this.width = e;
                    _this.height = f;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this.top = d;
                    _this.left = c;
                    _this.width = e.width;
                    _this.height = e.height;
                }
                break;
            case 2:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this.top = Math.min(c.y, d.y);
                    _this.left = Math.min(c.x, d.x);
                    _this.width = Math.max(Math.max(c.x, d.x) - _this.left, 0);
                    _this.height = Math.max(Math.max(c.y, d.y) - _this.top, 0);
                }
                break;
            case 3:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this.top = c.y;
                    _this.left = c.x;
                    _this.width = d.width;
                    _this.height = d.height;
                }
                break;
            case 4:
                {
                    _this.top = 0;
                    _this.left = 0;
                    _this.width = 0;
                    _this.height = 0;
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(Rect.prototype, "x", {
        get: function () {
            return this.s;
        },
        set: function (a) {
            this.s = a;
            this.o = this.s;
            this.p = this.o + this.r;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "y", {
        get: function () {
            return this.t;
        },
        set: function (a) {
            this.t = a;
            this.q = this.t;
            this.m = this.q + this.n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "width", {
        get: function () {
            return this.r;
        },
        set: function (a) {
            this.r = a;
            this.p = this.o + this.r;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "height", {
        get: function () {
            return this.n;
        },
        set: function (a) {
            this.n = a;
            this.m = this.q + this.n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "top", {
        get: function () {
            return this.q;
        },
        set: function (a) {
            this.q = a;
            this.y = this.q;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "left", {
        get: function () {
            return this.o;
        },
        set: function (a) {
            this.o = a;
            this.x = this.o;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "right", {
        get: function () {
            return this.p;
        },
        set: function (a) {
            this.p = a;
            this.r = this.p - this.o;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "bottom", {
        get: function () {
            return this.m;
        },
        set: function (a) {
            this.m = a;
            this.n = this.m - this.q;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "isEmpty", {
        get: function () {
            return this.r < 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect, "empty", {
        get: function () {
            return new Rect(0, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
        },
        enumerable: true,
        configurable: true
    });
    Rect.prototype.equals1 = function (a) {
        if (Rect.l_op_Equality(a, null)) {
            return false;
        }
        if (a.x == this.x && a.y == this.y && a.width == this.width && a.height == this.height) {
            return true;
        }
        return false;
    };
    Rect.prototype.d = function (a, b) {
        return a >= this.s && a - this.r <= this.s && b >= this.t && b - this.n <= this.t;
    };
    Rect.prototype.containsLocation = function (a, b) {
        return !this.isEmpty && this.d(a, b);
    };
    Rect.prototype.containsPoint = function (a) {
        return this.containsLocation(a.x, a.y);
    };
    Rect.prototype.containsRect = function (a) {
        return !this.isEmpty && !a.isEmpty && (this.s <= a.s && this.t <= a.t && this.s + this.r >= a.s + a.r) && this.t + this.n >= a.t + a.n;
    };
    Rect.prototype.inflate = function (a, b) {
        this.x -= a;
        this.y -= b;
        this.width += a * 2;
        this.height += b * 2;
        if (this.r < 0 || this.n < 0) {
            this.af();
        }
    };
    Rect.prototype.af = function () {
        this.top = Number.POSITIVE_INFINITY;
        this.left = Number.POSITIVE_INFINITY;
        this.width = Number.NEGATIVE_INFINITY;
        this.height = Number.NEGATIVE_INFINITY;
    };
    Rect.prototype.intersectsWith = function (a) {
        if (this.isEmpty || a.isEmpty) {
            return false;
        }
        return a.left < this.right && this.left < a.right && a.top < this.bottom && this.top < a.bottom;
    };
    Rect.prototype.intersect = function (a) {
        if (!this.intersectsWith(a)) {
            this.af();
        }
        else {
            var b = Math.max(this.x, a.x);
            var c = Math.max(this.y, a.y);
            var d = Math.min(this.x + this.width, a.x + a.width) - b;
            var e = Math.min(this.y + this.height, a.y + a.height) - c;
            if (d < 0) {
                d = 0;
            }
            if (e < 0) {
                e = 0;
            }
            this.r = d;
            this.n = e;
            this.s = b;
            this.t = c;
            this.o = this.s;
            this.q = this.t;
            this.p = this.o + this.r;
            this.m = this.q + this.n;
        }
    };
    Rect.prototype.union = function (a) {
        if (this.isEmpty) {
            this.s = a.x;
            this.t = a.y;
            this.r = a.width;
            this.n = a.height;
            this.o = this.s;
            this.q = this.t;
            this.p = this.o + this.r;
            this.m = this.q + this.n;
            return;
        }
        if (!a.isEmpty) {
            var b = Math.min(this.x, a.x);
            var c = Math.min(this.y, a.y);
            var d = this.width;
            var e = this.height;
            if (a.width == Number.POSITIVE_INFINITY || this.width == Number.POSITIVE_INFINITY) {
                d = Number.POSITIVE_INFINITY;
            }
            else {
                var f = Math.max(this.right, a.right);
                d = f - b;
            }
            if (a.height == Number.POSITIVE_INFINITY || this.height == Number.POSITIVE_INFINITY) {
                e = Number.POSITIVE_INFINITY;
            }
            else {
                var g = Math.max(this.bottom, a.bottom);
                e = g - c;
            }
            this.s = b;
            this.t = c;
            this.r = d;
            this.n = e;
            this.o = this.s;
            this.q = this.t;
            this.p = this.o + this.r;
            this.m = this.q + this.n;
        }
    };
    Rect.prototype.equals = function (a) {
        if (a == null) {
            return _super.prototype.equals.call(this, a);
        }
        var b = a;
        return b.left == this.left && b.top == this.top && b.width == this.width && b.height == this.height;
    };
    Rect.prototype.getHashCode = function () {
        return (this.s) ^ (this.t) ^ (this.r) ^ (this.n);
    };
    Rect.prototype.copy = function () {
        return new Rect(0, this.x, this.y, this.width, this.height);
    };
    Rect.l_op_Equality = function (a, b) {
        if (a == null) {
            return b == null;
        }
        else if (b == null) {
            return false;
        }
        return a.s == b.s && a.t == b.t && a.r == b.r && a.n == b.n;
    };
    Rect.l_op_Inequality = function (a, b) {
        if (a == null) {
            return b != null;
        }
        else if (b == null) {
            return true;
        }
        return a.s != b.s || a.t != b.t || a.r != b.r || a.n != b.n;
    };
    Rect.$t = Object(_type__WEBPACK_IMPORTED_MODULE_1__["markType"])(Rect, 'Rect');
    return Rect;
}(_type__WEBPACK_IMPORTED_MODULE_1__["Base"]));

//# sourceMappingURL=Rect.js.map

/***/ }),

/***/ "./node_modules/igniteui-angular-core/esm5/lib/ScalerVisibleBounds.js":
/*!****************************************************************************!*\
  !*** ./node_modules/igniteui-angular-core/esm5/lib/ScalerVisibleBounds.js ***!
  \****************************************************************************/
/*! exports provided: ScalerVisibleBounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScalerVisibleBounds", function() { return ScalerVisibleBounds; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ "./node_modules/igniteui-angular-core/esm5/lib/type.js");
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/


/**
 * @hidden
 */
var ScalerVisibleBounds = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ScalerVisibleBounds, _super);
    function ScalerVisibleBounds(a, b, c, d) {
        var _this = _super.call(this) || this;
        _this.d = 0;
        _this.a = 0;
        _this.c = 0;
        _this.b = 0;
        _this.b = a;
        _this.d = b;
        _this.c = c;
        _this.a = d;
        return _this;
    }
    ScalerVisibleBounds.$t = Object(_type__WEBPACK_IMPORTED_MODULE_1__["markType"])(ScalerVisibleBounds, 'ScalerVisibleBounds');
    return ScalerVisibleBounds;
}(_type__WEBPACK_IMPORTED_MODULE_1__["Base"]));

//# sourceMappingURL=ScalerVisibleBounds.js.map

/***/ }),

/***/ "./node_modules/igniteui-angular-core/esm5/lib/TileImageCreatedEventArgs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/igniteui-angular-core/esm5/lib/TileImageCreatedEventArgs.js ***!
  \**********************************************************************************/
/*! exports provided: TileImageCreatedEventArgs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileImageCreatedEventArgs", function() { return TileImageCreatedEventArgs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ "./node_modules/igniteui-angular-core/esm5/lib/type.js");
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/


/**
 * @hidden
 */
var TileImageCreatedEventArgs = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TileImageCreatedEventArgs, _super);
    function TileImageCreatedEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._imageData = null;
        _this._image = null;
        _this._z = 0;
        _this._x = 0;
        _this._y = 0;
        _this._url = null;
        return _this;
    }
    Object.defineProperty(TileImageCreatedEventArgs.prototype, "imageData", {
        get: function () {
            return this._imageData;
        },
        set: function (a) {
            this._imageData = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileImageCreatedEventArgs.prototype, "image", {
        get: function () {
            return this._image;
        },
        set: function (a) {
            this._image = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileImageCreatedEventArgs.prototype, "z", {
        get: function () {
            return this._z;
        },
        set: function (a) {
            this._z = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileImageCreatedEventArgs.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (a) {
            this._x = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileImageCreatedEventArgs.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (a) {
            this._y = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileImageCreatedEventArgs.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (a) {
            this._url = a;
        },
        enumerable: true,
        configurable: true
    });
    TileImageCreatedEventArgs.$t = Object(_type__WEBPACK_IMPORTED_MODULE_1__["markType"])(TileImageCreatedEventArgs, 'TileImageCreatedEventArgs', _type__WEBPACK_IMPORTED_MODULE_1__["EventArgs"].$);
    return TileImageCreatedEventArgs;
}(_type__WEBPACK_IMPORTED_MODULE_1__["EventArgs"]));

//# sourceMappingURL=TileImageCreatedEventArgs.js.map

/***/ }),

/***/ "./node_modules/igniteui-angular-core/esm5/lib/TileWorkSettings.js":
/*!*************************************************************************!*\
  !*** ./node_modules/igniteui-angular-core/esm5/lib/TileWorkSettings.js ***!
  \*************************************************************************/
/*! exports provided: TileWorkSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileWorkSettings", function() { return TileWorkSettings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ "./node_modules/igniteui-angular-core/esm5/lib/type.js");
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Color */ "./node_modules/igniteui-angular-core/esm5/lib/Color.js");
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/



/**
 * @hidden
 */
var TileWorkSettings = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TileWorkSettings, _super);
    function TileWorkSettings() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._scaler = null;
        _this._blurRadius = 0;
        _this._maxBlurRadius = 0;
        _this._useBlurRadiusAdjustedForZoom = false;
        _this._minimumColor = new _Color__WEBPACK_IMPORTED_MODULE_2__["Color"]();
        _this._maximumColor = new _Color__WEBPACK_IMPORTED_MODULE_2__["Color"]();
        _this._tileViewport = null;
        _this._yValues = null;
        _this._xValues = null;
        _this._values = null;
        _this._isNewData = false;
        _this._minimumVisibleLatitude = 0;
        _this._maximumVisibleLatitude = 0;
        _this._minimumVisibleLongitude = 0;
        _this._maximumVisibleLongitude = 0;
        _this._z = 0;
        _this._x = 0;
        _this._y = 0;
        _this._window = null;
        _this._testRun = false;
        _this._globalMinimum = 0;
        _this._globalMaximum = 0;
        _this._useGlobalMinMax = false;
        _this._minimumValue = 0;
        _this._maximumValue = 0;
        _this._scaleColors = null;
        _this._scaleColorOffsets = null;
        _this._useLogarithmicScale = false;
        _this._logarithmBase = 0;
        _this._image = null;
        return _this;
    }
    Object.defineProperty(TileWorkSettings.prototype, "scaler", {
        get: function () {
            return this._scaler;
        },
        set: function (a) {
            this._scaler = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "blurRadius", {
        get: function () {
            return this._blurRadius;
        },
        set: function (a) {
            this._blurRadius = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "maxBlurRadius", {
        get: function () {
            return this._maxBlurRadius;
        },
        set: function (a) {
            this._maxBlurRadius = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "useBlurRadiusAdjustedForZoom", {
        get: function () {
            return this._useBlurRadiusAdjustedForZoom;
        },
        set: function (a) {
            this._useBlurRadiusAdjustedForZoom = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "minimumColor", {
        get: function () {
            return this._minimumColor;
        },
        set: function (a) {
            this._minimumColor = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "maximumColor", {
        get: function () {
            return this._maximumColor;
        },
        set: function (a) {
            this._maximumColor = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "tileViewport", {
        get: function () {
            return this._tileViewport;
        },
        set: function (a) {
            this._tileViewport = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "yValues", {
        get: function () {
            return this._yValues;
        },
        set: function (a) {
            this._yValues = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "xValues", {
        get: function () {
            return this._xValues;
        },
        set: function (a) {
            this._xValues = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "values", {
        get: function () {
            return this._values;
        },
        set: function (a) {
            this._values = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "isNewData", {
        get: function () {
            return this._isNewData;
        },
        set: function (a) {
            this._isNewData = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "minimumVisibleLatitude", {
        get: function () {
            return this._minimumVisibleLatitude;
        },
        set: function (a) {
            this._minimumVisibleLatitude = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "maximumVisibleLatitude", {
        get: function () {
            return this._maximumVisibleLatitude;
        },
        set: function (a) {
            this._maximumVisibleLatitude = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "minimumVisibleLongitude", {
        get: function () {
            return this._minimumVisibleLongitude;
        },
        set: function (a) {
            this._minimumVisibleLongitude = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "maximumVisibleLongitude", {
        get: function () {
            return this._maximumVisibleLongitude;
        },
        set: function (a) {
            this._maximumVisibleLongitude = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "z", {
        get: function () {
            return this._z;
        },
        set: function (a) {
            this._z = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (a) {
            this._x = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (a) {
            this._y = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "window", {
        get: function () {
            return this._window;
        },
        set: function (a) {
            this._window = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "testRun", {
        get: function () {
            return this._testRun;
        },
        set: function (a) {
            this._testRun = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "globalMinimum", {
        get: function () {
            return this._globalMinimum;
        },
        set: function (a) {
            this._globalMinimum = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "globalMaximum", {
        get: function () {
            return this._globalMaximum;
        },
        set: function (a) {
            this._globalMaximum = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "useGlobalMinMax", {
        get: function () {
            return this._useGlobalMinMax;
        },
        set: function (a) {
            this._useGlobalMinMax = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "minimumValue", {
        get: function () {
            return this._minimumValue;
        },
        set: function (a) {
            this._minimumValue = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "maximumValue", {
        get: function () {
            return this._maximumValue;
        },
        set: function (a) {
            this._maximumValue = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "scaleColors", {
        get: function () {
            return this._scaleColors;
        },
        set: function (a) {
            this._scaleColors = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "scaleColorOffsets", {
        get: function () {
            return this._scaleColorOffsets;
        },
        set: function (a) {
            this._scaleColorOffsets = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "useLogarithmicScale", {
        get: function () {
            return this._useLogarithmicScale;
        },
        set: function (a) {
            this._useLogarithmicScale = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "logarithmBase", {
        get: function () {
            return this._logarithmBase;
        },
        set: function (a) {
            this._logarithmBase = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "image", {
        get: function () {
            return this._image;
        },
        set: function (a) {
            this._image = a;
        },
        enumerable: true,
        configurable: true
    });
    TileWorkSettings.prototype.flatten = function () {
        var minA_ = this.minimumColor.l;
        var minR_ = this.minimumColor.o;
        var minG_ = this.minimumColor.n;
        var minB_ = this.minimumColor.m;
        var maxA_ = this.maximumColor.l;
        var maxR_ = this.maximumColor.o;
        var maxG_ = this.maximumColor.n;
        var maxB_ = this.maximumColor.m;
        var scaleColors_ = null;
        if (this.scaleColors != null) {
            scaleColors_ = new Array(this.scaleColors.length);
            for (var a = 0; a < this.scaleColors.length; a++) {
                var a_ = this.scaleColors[a].l;
                var r_ = this.scaleColors[a].o;
                var g_ = this.scaleColors[a].n;
                var b_ = this.scaleColors[a].m;
                var color_ = { a: a_, r: r_, g: g_, b: b_ };
                scaleColors_[a] = color_;
            }
        }
        return {
            blurRadius: this.blurRadius,
            maxBlurRadius: this.maxBlurRadius,
            //isLinearScaler: this.isLinearScaler,
            //linearScalerMinimumXValue: this.linearScalerMinimumXValue,
            //linearScalerMinimumYValue: this.linearScalerMinimumYValue,
            //linearScalerMaximumXValue: this.linearScalerMaximumXValue,
            //linearScalerMaximumYValue: this.linearScalerMaximumYValue,
            //linearScalerXIsInverted: this.linearScalerXIsInverted,
            //linearScalerYIsInverted: this.linearScalerYIsInverted,
            useBlurRadiusAdjustedForZoom: this.useBlurRadiusAdjustedForZoom,
            minimumColor: { a: minA_, r: minR_, g: minG_, b: minB_ },
            maximumColor: { a: maxA_, r: maxR_, g: maxG_, b: maxB_ },
            tileViewport: { left: this.tileViewport.left, top: this.tileViewport.top, width: this.tileViewport.width, height: this.tileViewport.height },
            yValues: this.yValues,
            xValues: this.xValues,
            values: this.values,
            isNewData: this.isNewData,
            minimumVisibleLatitude: this.minimumVisibleLatitude,
            minimumVisibleLongitude: this.minimumVisibleLongitude,
            maximumVisibleLatitude: this.maximumVisibleLatitude,
            maximumVisibleLongitude: this.maximumVisibleLongitude,
            z: this.z,
            x: this.x,
            y: this.y,
            window: { left: this.window.left, top: this.window.top, width: this.window.width, height: this.window.height },
            testRun: this.testRun,
            globalMinimum: this.globalMinimum,
            globalMaximum: this.globalMaximum,
            useGlobalMinMax: this.useGlobalMinMax,
            minimumValue: this.minimumValue,
            maximumValue: this.maximumValue,
            scaleColorOffsets: this.scaleColorOffsets,
            scaleColors: scaleColors_,
            useLogarithmicScale: this.useLogarithmicScale,
            logarithmBase: this.logarithmBase
        };
    };
    TileWorkSettings.$t = Object(_type__WEBPACK_IMPORTED_MODULE_1__["markType"])(TileWorkSettings, 'TileWorkSettings');
    return TileWorkSettings;
}(_type__WEBPACK_IMPORTED_MODULE_1__["Base"]));

//# sourceMappingURL=TileWorkSettings.js.map

/***/ }),

/***/ "./node_modules/igniteui-angular-core/esm5/lib/array.js":
/*!**************************************************************!*\
  !*** ./node_modules/igniteui-angular-core/esm5/lib/array.js ***!
  \**************************************************************/
/*! exports provided: arrayCopyTo, arrayCopy, arrayInsert, arrayRemoveAt, arrayRemoveItem, arrayGetValue, arrayGetLength, arrayGetRank, arrayResize, arrayInsertRange, arrayInsertRange1, arrayShallowClone, arrayClear, boxArray$1, unboxArray, arrayListCreate, ArrayBox$1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayCopyTo", function() { return arrayCopyTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayCopy", function() { return arrayCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayInsert", function() { return arrayInsert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayRemoveAt", function() { return arrayRemoveAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayRemoveItem", function() { return arrayRemoveItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayGetValue", function() { return arrayGetValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayGetLength", function() { return arrayGetLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayGetRank", function() { return arrayGetRank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayResize", function() { return arrayResize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayInsertRange", function() { return arrayInsertRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayInsertRange1", function() { return arrayInsertRange1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayShallowClone", function() { return arrayShallowClone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayClear", function() { return arrayClear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxArray$1", function() { return boxArray$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unboxArray", function() { return unboxArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayListCreate", function() { return arrayListCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayBox$1", function() { return ArrayBox$1; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./node_modules/igniteui-angular-core/esm5/lib/type.js");
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

function arrayCopyTo(source, dest, index) {
    for (var i = 0; i < source.length; i++) {
        dest[index++] = source[i];
    }
}
function arrayCopy(source, sourceIndex, dest, destIndex, count) {
    for (var i = 0; i < count; i++) {
        dest[destIndex + i] = source[sourceIndex + i];
    }
}
function arrayInsert(target, index, item) {
    target.splice(index, 0, item);
}
function arrayRemoveAt(target, index) {
    target.splice(index, 1);
}
function arrayRemoveItem(target, item) {
    var index = target.indexOf(item);
    if (index >= 0) {
        target.splice(index, 1);
        return true;
    }
    return false;
}
function arrayGetValue(target, index) {
    return target[index];
}
function arrayGetLength(target, dimension) {
    // TODO: Is there a better way to do this? Maybe attach the rank values to the array?
    var array = target;
    var dim = dimension;
    while (array) {
        if (dim === 0) {
            return array.length;
        }
        dim--;
        array = array[0];
    }
    return -1;
}
function arrayGetRank(target) {
    return 1;
}
function arrayResize(target, length) {
    target.length = 0;
}
function arrayInsertRange(target, index, items) {
    var i = 0;
    if (target.length === 0) {
        for (i = 0; i < items.length; i++) {
            target[index++] = items[i];
        }
    }
    else {
        for (i = 0; i < items.length; i++) {
            target.splice(index++, 0, items[i]);
        }
    }
}
function arrayInsertRange1(target, index, items) {
    //TODO: adjust this later, but this is the safest change to make right now.
    var i = 0;
    if (target.length === 0) {
        for (i = 0; i < items.length; i++) {
            target[index++] = items[i];
        }
    }
    else {
        for (i = 0; i < items.length; i++) {
            target.splice(index++, 0, items[i]);
        }
    }
}
function arrayShallowClone(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr[i] = arr[i];
    }
    return newArr;
}
function arrayClear(arr) {
    arr.length = 0;
}
//   export function listItem(list: any, index: number, item?: any): void {
//       if ((<any>list).$type === undefined) {
//           let arr = <any[]>list;
//           if (item !== undefined) {
//               arr[index] = item;
//               return item;
//           } else {
//               return arr[index];
//           }
//       }
//       if (item !== undefined) {
//           list.item(index, item);
//           return item;
//       }
//       return list.item(index);
//   }
//export function  listAdd(list: any, item: any): void {
//			if ((<any>list).$type === undefined) {
//					let arr = <any[]>list;
//					arrayInsert(arr, arr.length, item);
//					return;
//			}
//			list.add(item);
//	}
//export function  listClear(list: any): void {
//			if ((<any>list).$type === undefined) {
//					let arr = <any[]>list;
//					arrayClear(arr);
//					return;
//			}
//			list.clear();
//	}
//export function listContains(list: any, item: any): boolean {
//			if ((<any>list).$type === undefined) {
//					let arr = <any[]>list;
//					return arr.indexOf(item) > -1;
//			}
//			return list.contains(item);
//	}
//export function listIndexOf(list: any, item: any): number {
//			if ((<any>list).$type === undefined) {
//					let arr = <any[]>list;
//					return arr.indexOf(item);
//			}
//			return list.indexOf(item);
//	}
//export function listInsert(list: any, index: number, item: any): void {
//			if ((<any>list).$type === undefined) {
//					let arr = <any[]>list;
//					arrayInsert(arr, index, item);
//					return;
//			}
//			list.contains(item);
//	}
//export function listRemove(list: any, item: any): boolean {
//			if ((<any>list).$type === undefined) {
//					let arr = <any[]>list;
//                       arrayRemoveItem(arr, item);
//                       return true;
//			}
//			return list.remove(item);
//	}
//export function listRemoveAt(list: any, index: number): void {
//			if ((<any>list).$type === undefined) {
//					let arr = <any[]>list;
//                       arrayRemoveAt(arr, index);
//                       return;
//			}
//			list.removeAt(index);
//	}
//export function listIsFixedSize(list: any): boolean {
//			if ((<any>list).$type === undefined) {
//					let arr = <any[]>list;
//					return false;
//			}
//			return list.isFixedSize;
//	}
//export function listIsReadOnly(list: any): boolean {
//			if ((<any>list).$type === undefined) {
//					let arr = <any[]>list;
//					return false;
//			}
//			return list.isReadOnly;
//	}
//export function collectionCount(collection: any): number {
//			if ((<any>collection).$type === undefined) {
//					let arr = <any[]>collection;
//					return arr.length;
//			}
//			return collection.count;
//	}
//export function collectionCopyTo(collection: any, array: any[], index: number): void {
//			if ((<any>collection).$type === undefined) {
//					let arr = <any[]>collection;
//					arrayCopy(arr, 0, array, index, arr.length);
//					return;
//			}
//			return collection.copyTo(array, index);
//	}
//export function collectionIsSynchronized(collection: any): boolean {
//			if ((<any>collection).$type === undefined) {
//					let arr = <any[]>collection;
//					return false;
//			}
//			return collection.isSynchronized;
//	}
//export function collectionSyncRoot(collection: any): any {
//			if ((<any>collection).$type === undefined) {
//					let arr = <any[]>collection;
//					return arr;
//			}
//			return collection.syncRoot;
//   }
function boxArray$1(array) {
    return new ArrayBox$1(array);
}
function unboxArray(box) {
    if (box.$arrayWrapper) {
        return box._target;
    }
    return box;
}
function arrayListCreate() {
    return new ArrayBox$1([]);
}
var ArrayBox$1 = /** @class */ (function () {
    function ArrayBox$1(target) {
        this.isFixedSize = false;
        this.isSynchronized = false;
        this.syncRoot = null;
        this.isReadOnly = false;
        this.$arrayWrapper = true;
        this._target = target;
    }
    ArrayBox$1.prototype.item = function (index, value) {
        if (arguments.length === 2) {
            this._target[index] = value;
            return value;
        }
        else {
            return this._target[index];
        }
    };
    ArrayBox$1.prototype.indexOf = function (item) {
        return this._target.indexOf(item);
    };
    ArrayBox$1.prototype.insert = function (index, item) {
        this._target.splice(index, 0, item);
    };
    ArrayBox$1.prototype.insertRange = function (index, items) {
        arrayInsertRange(this._target, index, items);
    };
    ArrayBox$1.prototype.removeRange = function (index, count) {
        this._target.splice(index, count);
    };
    ArrayBox$1.prototype.removeAt = function (index) {
        this._target.splice(index, 1);
    };
    Object.defineProperty(ArrayBox$1.prototype, "count", {
        get: function () {
            return this._target.length;
        },
        enumerable: true,
        configurable: true
    });
    ArrayBox$1.prototype.add = function (item) {
        this._target.push(item);
    };
    ArrayBox$1.prototype.clear = function () {
        this._target.length = 0;
    };
    ArrayBox$1.prototype.contains = function (item) {
        return this._target.indexOf(item) >= 0;
    };
    ArrayBox$1.prototype.copyTo = function (array, arrayIndex) {
        for (var i = 0; i < this._target.length; i++) {
            array[i + arrayIndex] = this._target[i];
        }
    };
    ArrayBox$1.prototype.remove = function (item) {
        var index = this._target.indexOf(item);
        if (index < 0) {
            return false;
        }
        this._target.splice(index, 1);
        return true;
    };
    ArrayBox$1.prototype.getEnumerator = function () {
        return Object(_type__WEBPACK_IMPORTED_MODULE_0__["getEnumerator"])(this._target);
    };
    ArrayBox$1.prototype.getEnumeratorObject = function () {
        return Object(_type__WEBPACK_IMPORTED_MODULE_0__["getEnumeratorObject"])(this._target);
    };
    ArrayBox$1.prototype.getHashCode = function () {
        return _type__WEBPACK_IMPORTED_MODULE_0__["Base"].getHashCodeStatic(this._target);
    };
    ArrayBox$1.prototype.equals = function (other) {
        if (other.$arrayWrapper) {
            other = other._target;
        }
        return this._target === other;
    };
    Object.defineProperty(ArrayBox$1.prototype, "$type", {
        get: function () {
            return _type__WEBPACK_IMPORTED_MODULE_0__["Array_$type"];
        },
        enumerable: true,
        configurable: true
    });
    ArrayBox$1.prototype.reverse = function () {
        var len = this._target.length;
        for (var i = 0; i < len / 2.0; i++) {
            var swap = this._target[(len - 1) - i];
            this._target[(len - 1) - i] = this._target[i];
            this._target[i] = swap;
        }
    };
    return ArrayBox$1;
}());

//# sourceMappingURL=array.js.map

/***/ }),

/***/ "./node_modules/igniteui-angular-core/esm5/lib/colorCore.js":
/*!******************************************************************!*\
  !*** ./node_modules/igniteui-angular-core/esm5/lib/colorCore.js ***!
  \******************************************************************/
/*! exports provided: getColorStringSafe, wellKnownColors, strToColor, rgbToHex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColorStringSafe", function() { return getColorStringSafe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wellKnownColors", function() { return wellKnownColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strToColor", function() { return strToColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return rgbToHex; });
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
function getColorStringSafe(v) {
    /*jshint eqnull:true */
    return v == null ? null : v.colorString();
}
;
var wellKnownColors = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "00ffff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000000",
    blanchedalmond: "ffebcd",
    blue: "0000ff",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "00ffff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dodgerblue: "1e90ff",
    feldspar: "d19275",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "ff00ff",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgrey: "d3d3d3",
    lightgreen: "90ee90",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslateblue: "8470ff",
    lightslategray: "778899",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "00ff00",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "ff00ff",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370d8",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "d87093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    red: "ff0000",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    violetred: "d02090",
    wheat: "f5deb3",
    white: "ffffff",
    whitesmoke: "f5f5f5",
    yellow: "ffff00",
    yellowgreen: "9acd32"
};
function strToColor(str) {
    var ret = {
        a: 255,
        r: 0,
        g: 0,
        b: 0
    };
    var asColorName = str.replace(" ", "").toLowerCase();
    if (asColorName === "transparent") {
        return { a: 0, r: 0, g: 0, b: 0 };
    }
    if (wellKnownColors[asColorName] !== undefined) {
        str = wellKnownColors[asColorName];
    }
    var parts;
    if (str.lastIndexOf("rgba", 0) === 0) {
        str = str.replace("rgba", "").replace(" ", "").replace("(", "").replace(")", "");
        parts = str.split(",");
        ret.r = parseInt(parts[0], 10);
        ret.g = parseInt(parts[1], 10);
        ret.b = parseInt(parts[2], 10);
        ret.a = parseFloat(parts[3]) * 255.0;
    }
    else if (str.lastIndexOf("rgb", 0) === 0) {
        str = str.replace("rgb", "").replace(" ", "").replace("(", "").replace(")", "");
        parts = str.split(",");
        ret.r = parseInt(parts[0], 10);
        ret.g = parseInt(parts[1], 10);
        ret.b = parseInt(parts[2], 10);
    }
    else {
        str = str.replace("#", "").replace(" ", "");
        if (str.length === 8) {
            ret.r = parseInt(str.substr(0, 2), 16);
            ret.g = parseInt(str.substr(2, 2), 16);
            ret.b = parseInt(str.substr(4, 2), 16);
            ret.a = parseInt(str.substr(6, 2), 16);
        }
        else if (str.length === 6) {
            ret.r = parseInt(str.substr(0, 2), 16);
            ret.g = parseInt(str.substr(2, 2), 16);
            ret.b = parseInt(str.substr(4, 2), 16);
        }
        else if (str.length === 3) {
            ret.r = parseInt(str.substr(0, 1) + str.substr(0, 1), 16);
            ret.g = parseInt(str.substr(1, 1) + str.substr(1, 1), 16);
            ret.b = parseInt(str.substr(2, 1) + str.substr(2, 1), 16);
        }
    }
    return ret;
}
;
function rgbToHex(color) {
    /* Convert color from RGB to HEX format. null if non-rgb color is provided.
        paramType="string" optional="false" Color in RGB format.
        returnType="string|null" Returns converted color from RGB to HEX format. null if non-rgb color is provided.
    */
    var r, g, b, colHex = null;
    if (color.charAt(0) === "r") {
        var colorArr = color.replace("rgb(", "").replace(")", "").split(",");
        r = parseInt(colorArr[0], 10).toString(16);
        g = parseInt(colorArr[1], 10).toString(16);
        b = parseInt(colorArr[2], 10).toString(16);
        r = r.length === 1 ? "0" + r : r;
        g = g.length === 1 ? "0" + g : g;
        b = b.length === 1 ? "0" + b : b;
        colHex = "#" + r + g + b;
    }
    return colHex;
}
//# sourceMappingURL=colorCore.js.map

/***/ }),

/***/ "./node_modules/igniteui-angular-core/esm5/lib/compareUtil.js":
/*!********************************************************************!*\
  !*** ./node_modules/igniteui-angular-core/esm5/lib/compareUtil.js ***!
  \********************************************************************/
/*! exports provided: CompareUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareUtil", function() { return CompareUtil; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./node_modules/igniteui-angular-core/esm5/lib/type.js");
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

var CompareUtil = /** @class */ (function () {
    function CompareUtil() {
    }
    CompareUtil.compareToObject = function (obj1, obj2) {
        if (obj1.compareToObject) {
            return obj1.compareToObject(obj2);
        }
        return _type__WEBPACK_IMPORTED_MODULE_0__["Base"].compare(obj1, obj2);
    };
    CompareUtil.compareTo = function (obj1, obj2) {
        if (obj1.compareTo) {
            return obj1.compareTo(obj2);
        }
        return _type__WEBPACK_IMPORTED_MODULE_0__["Base"].compare(obj1, obj2);
    };
    return CompareUtil;
}());

//# sourceMappingURL=compareUtil.js.map

/***/ }),

/***/ "./node_modules/igniteui-angular-core/esm5/lib/number.js":
/*!***************************************************************!*\
  !*** ./node_modules/igniteui-angular-core/esm5/lib/number.js ***!
  \***************************************************************/
/*! exports provided: log10, toDouble, toDecimal, compareTo, isInfinity, intDivide, truncate, logBase, tryParseNumber, isNegativeInfinity, isPositiveInfinity, isNaN_ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log10", function() { return log10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDouble", function() { return toDouble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDecimal", function() { return toDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareTo", function() { return compareTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInfinity", function() { return isInfinity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intDivide", function() { return intDivide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return truncate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logBase", function() { return logBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryParseNumber", function() { return tryParseNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNegativeInfinity", function() { return isNegativeInfinity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPositiveInfinity", function() { return isPositiveInfinity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNaN_", function() { return isNaN_; });
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
function log10(value) {
    return Math.log(value) / Math.log(10);
}
function toDouble(value) {
    return +value;
}
var toDecimal = toDouble;
function compareTo(value, other) {
    if (value == other) {
        return 0;
    }
    if (value < other) {
        return -1;
    }
    return 1;
}
function isInfinity(value) {
    return !isFinite(value) && !isNaN_(value);
}
function intDivide(value, divisor) {
    var result = value / divisor;
    return truncate(result);
}
function truncate(val) {
    if (val >= 0) {
        return Math.floor(val);
    }
    else {
        return Math.ceil(val);
    }
}
function logBase(n, n2) {
    return Math.log(n) / Math.log(n2);
}
function tryParseNumber(s, v) {
    var value = Number(s);
    if (value !== null && isFinite(value) && s.trim().length !== 0) {
        return {
            p1: value,
            ret: true
        };
    }
    else {
        return {
            p1: 0,
            ret: false
        };
    }
}
function isNegativeInfinity(v) {
    return v == Number.NEGATIVE_INFINITY;
}
function isPositiveInfinity(v) {
    return v == Number.POSITIVE_INFINITY;
}
function isNaN_(v) {
    return v !== v; // http://us6.campaign-archive1.com/?u=2cc20705b76fa66ab84a6634f&id=43bf7f05e9
}
//# sourceMappingURL=number.js.map

/***/ }),

/***/ "./node_modules/igniteui-angular-core/esm5/lib/string.js":
/*!***************************************************************!*\
  !*** ./node_modules/igniteui-angular-core/esm5/lib/string.js ***!
  \***************************************************************/
/*! exports provided: stringStartsWith, stringEndsWith, stringContains, stringCreateFromCharArray, stringCreateFromChar, stringCreateFromCharArraySlice, stringToCharArray, stringCopyToCharArray, stringIsDigit, charMaxValue, charMinValue, stringToString1, stringRemove, stringCompareTo, stringCompare, stringIsNullOrEmpty, stringIsNullOrWhiteSpace, stringEmpty, stringEquals, stringEscapeRegExp, createGuid, stringConcat, stringReplace, stringJoin, stringJoin1, stringToString$1, stringToLocaleLower, stringToLocaleUpper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringStartsWith", function() { return stringStartsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringEndsWith", function() { return stringEndsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringContains", function() { return stringContains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringCreateFromCharArray", function() { return stringCreateFromCharArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringCreateFromChar", function() { return stringCreateFromChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringCreateFromCharArraySlice", function() { return stringCreateFromCharArraySlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToCharArray", function() { return stringToCharArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringCopyToCharArray", function() { return stringCopyToCharArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringIsDigit", function() { return stringIsDigit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charMaxValue", function() { return charMaxValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charMinValue", function() { return charMinValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToString1", function() { return stringToString1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringRemove", function() { return stringRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringCompareTo", function() { return stringCompareTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringCompare", function() { return stringCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringIsNullOrEmpty", function() { return stringIsNullOrEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringIsNullOrWhiteSpace", function() { return stringIsNullOrWhiteSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringEmpty", function() { return stringEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringEquals", function() { return stringEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringEscapeRegExp", function() { return stringEscapeRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGuid", function() { return createGuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringConcat", function() { return stringConcat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringReplace", function() { return stringReplace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringJoin", function() { return stringJoin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringJoin1", function() { return stringJoin1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToString$1", function() { return stringToString$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToLocaleLower", function() { return stringToLocaleLower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToLocaleUpper", function() { return stringToLocaleUpper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ "./node_modules/igniteui-angular-core/esm5/lib/type.js");
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/



function stringStartsWith(str, check) {
    return str.indexOf(check) == 0;
}
function stringEndsWith(str, check) {
    var ind = str.lastIndexOf(check);
    return ind >= 0 && ind == str.length - check.length;
}
function stringContains(str, check) {
    return str.indexOf(check) != -1;
}
function stringCreateFromCharArray(charArray) {
    return charArray.join("");
}
function stringCreateFromChar(char, count) {
    var ret = "";
    for (var i = 0; i < count; i++) {
        ret = ret + char;
    }
    return ret;
}
function stringCreateFromCharArraySlice(charArray, start, length) {
    var ret = "";
    for (var i = 0; i < length; i++) {
        ret = ret + charArray[start + i];
    }
    return ret;
}
;
function stringToCharArray(target) {
    return target.split("");
}
function stringCopyToCharArray(source, sourceIndex, destination, destinationIndex, count) {
    for (var i = destinationIndex; i < destinationIndex + count; i++) {
        destination[i] = source.charAt(sourceIndex + i - destinationIndex);
    }
}
;
function stringIsDigit(str, index) {
    index = index || 0;
    var ch = str.charAt(index);
    if (ch >= "0" && ch <= "9") {
        return true;
    }
    return false;
}
;
function charMaxValue() {
    return "\uffff";
}
function charMinValue() {
    return "\u0000";
}
// static toDateTime(target: string) {
// 	var result = new Date(target);
// 	if (!isNaN(+result)) {
// 		return result;
// 	}
// 	// TODO: Cache this regex?
// 	if (/^((([0-9]{1,4})\s*(\s+((a|p)m?)\s*))|(([0-9]{1,4})\s*:\s*([0-9]?[0-9])\s*(:\s*([0-9]?[0-9])\s*(.\s*([0-9]{0,4})[0-9]*\s*)?)?(\s+((a|p)m?)\s*)?)|(\s*([0-9]?[0-9])\s*:\s*([0-9]?[0-9])\s*.\s*([0-9]{0,4})[0-9]*\s*(\s+((a|p)m?)\s*)?))$/i.test(target)) {
// 		// The string can be a time string only, in which case we should return today at that time.
// 		return new Date(new Date().toDateString() + " " + target);
// 	}
// 	throw new FormatException(1, "The string cannot be converted to a date");
// }
// static toDecimal(target: string) {
// 	var result = +target;
// 	if (isNaN(result)) {
// 		new FormatException(1, "The string cannot be converted to a number");
// 	}
// 	return result;
// }
function stringToString1(target) {
    return target.toString();
}
function stringRemove(target, index, count) {
    if (!count || ((index + count) > target.length)) {
        return target.substr(0, index);
    }
    return target.substr(0, index) + target.substr(index + count);
}
function stringCompareTo(target, other) {
    if (target == other) {
        return 0;
    }
    if (target < other) {
        return -1;
    }
    return 1;
}
var stringCompare = stringCompareTo;
function stringIsNullOrEmpty(target) { return !target || target.length < 1; }
function stringIsNullOrWhiteSpace(target) { return !target || target.trim().length < 1; }
function stringEmpty() { return ""; }
function stringEquals(target, other) { return target == other; }
function stringEscapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
function createGuid() {
    /*jslint bitwise: true */
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() +
        S4() + S4()).toLowerCase();
}
function stringConcat() {
    var _a;
    var s = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        s[_i] = arguments[_i];
    }
    return (_a = String.prototype).concat.apply(_a, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](s));
}
function stringReplace(str, oldValue, newValue) {
    return str.replace(new RegExp(stringEscapeRegExp(oldValue), "g"), newValue);
}
function stringJoin(sep) {
    var vals = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        vals[_i - 1] = arguments[_i];
    }
    return vals.join(sep);
}
function stringJoin1($t, sep, vals) {
    var result;
    var en = Object(_type__WEBPACK_IMPORTED_MODULE_1__["getEnumerator"])(vals);
    while (en.moveNext()) {
        var v = en.current.toString();
        if (result === undefined) {
            result = v;
        }
        else {
            result += sep + v;
        }
    }
    return result;
}
function stringToString$1($t, v) {
    if (v !== null && $t) {
        if ($t.isNullable) {
            $t = $t.typeArguments[0];
        }
        if ($t.isEnumType) {
            return _type__WEBPACK_IMPORTED_MODULE_1__["EnumUtil"].getName($t, v);
        }
    }
    return v.toString();
}
function stringToLocaleLower(str, locale) {
    if (locale == null || locale.name == null)
        return str.toLocaleLowerCase();
    return str.toLocaleLowerCase(locale.name);
}
function stringToLocaleUpper(str, locale) {
    if (locale == null || locale.name == null)
        return str.toLocaleUpperCase();
    return str.toLocaleUpperCase(locale.name);
}
//# sourceMappingURL=string.js.map

/***/ }),

/***/ "./node_modules/igniteui-angular-core/esm5/lib/type.js":
/*!*************************************************************!*\
  !*** ./node_modules/igniteui-angular-core/esm5/lib/type.js ***!
  \*************************************************************/
/*! exports provided: getInstanceType, Base, Type, markDep, typeGetValue, typeCast, typeCastObjTo$t, markStruct, markEnum, markType, callStaticConstructors, IConvertible_$type, Enum, getBoxIfEnum, enumGetBox, EnumUtil, ValueType, Nullable, Nullable$1, toNullable, IComparable_$type, IComparable$1_$type, IEquatable$1_$type, INotifyPropertyChanged_$type, PropertyChangedEventArgs, IteratorWrapper, IterableWrapper, EnumeratorWrapper, EnumeratorWrapperObject, getEn, getEnumeratorObject, getEnumerator, EnumerableWrapper, EnumerableWrapperObject, toEnum, fromEnum, toEn, fromEn, fromDict, Number_$type, String_$type, Date_$type, Boolean_$type, Void_$type, n$, s$, d$, b$, v$, Delegate_$type, runOn, delegateCombine, delegateRemove, IDisposable_$type, IEnumerable_$type, IEnumerator_$type, IEqualityComparer$1_$type, IEqualityComparer_$type, ICollection_$type, IList_$type, IEnumerable$1_$type, ICollection$1_$type, IList$1_$type, IEnumerator$1_$type, IDictionary_$type, BaseError, SystemException, NotSupportedException, FormatException, PointUtil, Point_$type, SeekOrigin, Stream, EventArgs, IFormatProvider_$type, Array_$type, a$, TypeRegistrar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstanceType", function() { return getInstanceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return Base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markDep", function() { return markDep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeGetValue", function() { return typeGetValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeCast", function() { return typeCast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeCastObjTo$t", function() { return typeCastObjTo$t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markStruct", function() { return markStruct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markEnum", function() { return markEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markType", function() { return markType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callStaticConstructors", function() { return callStaticConstructors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IConvertible_$type", function() { return IConvertible_$type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Enum", function() { return Enum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBoxIfEnum", function() { return getBoxIfEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumGetBox", function() { return enumGetBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumUtil", function() { return EnumUtil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueType", function() { return ValueType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nullable", function() { return Nullable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nullable$1", function() { return Nullable$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNullable", function() { return toNullable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IComparable_$type", function() { return IComparable_$type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IComparable$1_$type", function() { return IComparable$1_$type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IEquatable$1_$type", function() { return IEquatable$1_$type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INotifyPropertyChanged_$type", function() { return INotifyPropertyChanged_$type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyChangedEventArgs", function() { return PropertyChangedEventArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IteratorWrapper", function() { return IteratorWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IterableWrapper", function() { return IterableWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumeratorWrapper", function() { return EnumeratorWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumeratorWrapperObject", function() { return EnumeratorWrapperObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEn", function() { return getEn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnumeratorObject", function() { return getEnumeratorObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnumerator", function() { return getEnumerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumerableWrapper", function() { return EnumerableWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumerableWrapperObject", function() { return EnumerableWrapperObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toEnum", function() { return toEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEnum", function() { return fromEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toEn", function() { return toEn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEn", function() { return fromEn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromDict", function() { return fromDict; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Number_$type", function() { return Number_$type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "String_$type", function() { return String_$type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Date_$type", function() { return Date_$type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Boolean_$type", function() { return Boolean_$type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Void_$type", function() { return Void_$type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n$", function() { return n$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s$", function() { return s$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d$", function() { return d$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b$", function() { return b$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v$", function() { return v$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Delegate_$type", function() { return Delegate_$type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runOn", function() { return runOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delegateCombine", function() { return delegateCombine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delegateRemove", function() { return delegateRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDisposable_$type", function() { return IDisposable_$type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IEnumerable_$type", function() { return IEnumerable_$type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IEnumerator_$type", function() { return IEnumerator_$type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IEqualityComparer$1_$type", function() { return IEqualityComparer$1_$type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IEqualityComparer_$type", function() { return IEqualityComparer_$type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICollection_$type", function() { return ICollection_$type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IList_$type", function() { return IList_$type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IEnumerable$1_$type", function() { return IEnumerable$1_$type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICollection$1_$type", function() { return ICollection$1_$type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IList$1_$type", function() { return IList$1_$type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IEnumerator$1_$type", function() { return IEnumerator$1_$type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDictionary_$type", function() { return IDictionary_$type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseError", function() { return BaseError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemException", function() { return SystemException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotSupportedException", function() { return NotSupportedException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatException", function() { return FormatException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointUtil", function() { return PointUtil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point_$type", function() { return Point_$type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeekOrigin", function() { return SeekOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stream", function() { return Stream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventArgs", function() { return EventArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IFormatProvider_$type", function() { return IFormatProvider_$type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Array_$type", function() { return Array_$type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a$", function() { return a$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeRegistrar", function() { return TypeRegistrar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/*!
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

var _typeIdentifierCache = {};
var _nextTypeIdentifier = 0;
// interface Function {
//     $type?: Type;
// }
function getInstanceType(obj) {
    if (obj.$type) {
        return obj.$type;
    }
    else if (typeof obj === 'number') {
        return Number_$type;
    }
    else if (typeof obj === 'string') {
        return String_$type;
    }
    else if (typeof obj === 'boolean') {
        return Boolean_$type;
    }
    else if (obj instanceof Date) {
        return Date_$type;
    }
    return Base.prototype.$type;
}
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.equals = function (other) {
        return this === other;
    };
    Base.equalsStatic = function (a, b) {
        var aIsNull = (a == null) || (!!a.isNullable && !a.hasValue);
        var bIsNull = (b == null) || (!!b.isNullable && !b.hasValue);
        if (aIsNull || bIsNull) {
            return aIsNull && bIsNull;
        }
        if (a.equals) {
            return a.equals(b);
        }
        if (b.equals) {
            return b.equals(a);
        }
        if (Number.isNaN(a) && Number.isNaN(b)) {
            return true;
        }
        if (a instanceof Date) {
            return b instanceof Date && +a === +b;
        }
        return a == b && typeof a == typeof b;
    };
    Base.equalsSimple = function (item1, item2) {
        return item1 == item2;
    };
    ;
    Base.compareSimple = function (item1, item2) {
        if (item1 == item2) {
            return 0;
        }
        if (item1 < item2) {
            return -1;
        }
        return 1;
    };
    ;
    Base.compare = function (item1, item2) {
        if (item1 === item2) {
            return 0;
        }
        var xComparable = typeCast(IComparable_$type, item1);
        if (xComparable !== null && xComparable.compareToObject) {
            return xComparable.compareToObject(item2);
        }
        var yComparable = typeCast(IComparable_$type, item2);
        if (yComparable !== null && yComparable.compareToObject) {
            return -yComparable.compareToObject(item1);
        }
        return Base.compareSimple(item1, item2);
    };
    ;
    Base.prototype.getHashCode = function () {
        if (this.$hashCode === undefined) {
            this.$hashCode = Base.nextHashCode++;
        }
        return this.$hashCode;
    };
    Base.getHashCodeStatic = function (obj) {
        if (obj.getHashCode) {
            return obj.getHashCode();
        }
        if (obj.$hashCode !== undefined) {
            return obj.$hashCode;
        }
        if (!(typeof obj == "object")) {
            return Type.getPrimitiveHashCode(obj);
        }
        else {
            obj.$hashCode = Base.nextHashCode++;
            return obj.$hashCode;
        }
    };
    Base.prototype.memberwiseClone = function () {
        var clone;
        try {
            clone = Object.create(this.$type.InstanceConstructor.prototype);
        }
        catch (e) {
            var Cons = /** @class */ (function () {
                function Cons() {
                }
                return Cons;
            }());
            Cons.prototype = this.$type.InstanceConstructor.prototype;
            clone = new Cons();
        }
        for (var prop in this) {
            if (this.hasOwnProperty(prop)) {
                clone[prop] = this[prop];
            }
        }
        return clone;
    };
    Base.referenceEquals = function (a, b) {
        return a === b || (a == null && b == null);
    };
    Base.getArrayOfValues = function (obj) {
        var result = [];
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                result.push(obj[i]);
            }
        }
        return result;
    };
    Base.getArrayOfProperties = function (obj) {
        var result = [];
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                result.push(i);
            }
        }
        return result;
    };
    ;
    Base.nextHashCode = 0;
    return Base;
}());

var Type = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Type, _super);
    function Type(instanceConstructor, identifier, baseType, interfaces, staticInitializer) {
        if (baseType === void 0) { baseType = Base.prototype.$type; }
        if (interfaces === void 0) { interfaces = null; }
        if (staticInitializer === void 0) { staticInitializer = null; }
        var _this = _super.call(this) || this;
        _this.specializationCache = null;
        _this._staticInitializer = null;
        _this.name = null;
        _this.typeArguments = null;
        _this.baseType = null;
        _this.interfaces = null;
        _this.isEnumType = false;
        _this._isGenericType = undefined;
        _this._staticFields = null;
        _this.isNullable = false;
        _this._$nullNullable = null;
        _this.enumInfo = null;
        _this.specializationCache = {};
        _this._staticInitializer = staticInitializer;
        _this._fullName = identifier;
        _this.name = identifier;
        _this.InstanceConstructor = instanceConstructor;
        var lastDotIndex = _this.name.lastIndexOf(".");
        if (lastDotIndex >= 0) {
            _this.name = _this.name.substr(lastDotIndex + 1);
        }
        _this.typeArguments = null;
        _this.baseType = null;
        _this.interfaces = null;
        if (baseType) {
            _this.baseType = baseType;
        }
        if (interfaces) {
            _this.interfaces = interfaces;
        }
        if (_typeIdentifierCache[identifier]) {
            _this.identifier = _typeIdentifierCache[identifier];
        }
        else {
            _this.identifier = _nextTypeIdentifier++;
            _typeIdentifierCache[identifier] = _this.identifier;
        }
        return _this;
        // rather than always evaluating a function on a type to see if it is an enum
        // we can just cache it once on the type
        // if (baseType && Enum && baseType == Enum.prototype.$type) {
        //     this.isEnumType = true;
        // }
    }
    Object.defineProperty(Type.prototype, "typeName", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Type.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        enumerable: true,
        configurable: true
    });
    Type.prototype.getSpecId = function (types) {
        if (types.length === 1) {
            if (!types[0]) {
                return "undef";
            }
            else if (types[0] === -1) {
                return undefined;
            }
            else if (!types[0].typeName) {
                return types[0].toString();
            }
            else if (types[0].stringId) {
                return types[0].stringId;
            }
            else {
                return types[0].identifier.toString();
            }
        }
        var ret = "";
        for (var i = 0; i < types.length; i++) {
            var type = types[i];
            if (!type) {
                ret += "undef";
            }
            else if (type == -1) {
                return undefined;
            }
            else if (!type.typeName) {
                ret += type.toString();
            }
            else if (type.stringId) {
                ret += type.stringId;
            }
            else {
                ret += type.identifier.toString();
            }
        }
        return ret;
    };
    Object.defineProperty(Type.prototype, "isGenericType", {
        get: function () {
            if (this._isGenericType === undefined) {
                this._isGenericType = this.name.indexOf("$") >= 0;
            }
            return this._isGenericType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Type.prototype, "isGenericTypeDefinition", {
        get: function () {
            return this.typeArguments === null && this.isGenericType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Type.prototype, "genericTypeArguments", {
        get: function () {
            return this.typeArguments;
        },
        enumerable: true,
        configurable: true
    });
    Type.prototype.getStaticFields = function (type) {
        if (type === undefined) {
            type = this;
        }
        var t = this;
        while (t != null) {
            if (t === type || t._fullName == type._fullName) {
                if (t._staticFields == null && t._staticInitializer) {
                    t._staticFields = {};
                    t._staticInitializer.apply(t._staticFields, t.typeArguments);
                }
                return t._staticFields;
            }
            t = t.baseType;
        }
        return null;
    };
    Type.prototype.initSelfReferences = function (replacement) {
        var i, j;
        if (replacement) {
            if (this.typeArguments) {
                var updateCache = false;
                for (j = 0; j < this.typeArguments.length; j++) {
                    var typeArg = this.typeArguments[j];
                    if (typeArg == -1) {
                        updateCache = true;
                        this.typeArguments[j] = replacement;
                    }
                    else if (typeArg &&
                        typeArg instanceof Type &&
                        typeArg.initSelfReferences) {
                        typeArg.initSelfReferences(replacement);
                    }
                }
                if (updateCache) {
                    var specId = this.getSpecId(this.typeArguments);
                    var ret = this.specializationCache[specId];
                    if (!ret) {
                        this.specializationCache[specId] = this;
                    }
                }
            }
        }
        else {
            if (this.baseType) {
                this.baseType.initSelfReferences(this);
            }
            if (this.interfaces) {
                for (i = 0; i < this.interfaces.length; i++) {
                    this.interfaces[i].initSelfReferences(this);
                }
            }
        }
        return this;
    };
    Type.prototype.specialize = function () {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        var i;
        if (!this.isGenericType) {
            return this;
        }
        var specId = this.getSpecId(Array.from(arguments));
        var ret = this.specializationCache[specId];
        if (ret) {
            return ret;
        }
        ret = new Type(this.InstanceConstructor, this._fullName, this.baseType, this.interfaces, this._staticInitializer);
        ret.specializationCache = this.specializationCache;
        var placeholders = this.typeArguments;
        var hasPlaceholders = false;
        // Make sure the placeholders are actually numbers. If they are types, we are re-specializing an
        // already specialized type.
        if (placeholders && placeholders.length) {
            /* going back to how it used to be. we shouldn't assume that the number/order of the arguments
                relates to the typearguments. this may be an interface that has its type information already
                and either has placeholders or is a closed type
            // you can have a mixed bag where some are placeholders and others are not and the
            // placeholder doesn't have to be the first slot
            for (i = 0; i < placeholders.length; i++) {
                if (isFinite(placeholders[ i ])) {
                    hasPlaceholders = true;
                    break;
                }
            }*/
            hasPlaceholders = true;
        }
        ret.typeArguments = [];
        if (hasPlaceholders) {
            for (i = 0; i < placeholders.length; i++) {
                // if the argument being provided is a placeholder index and we already have
                // a placeholder then keep the index we have. otherwise we're taking the index
                // of the parent type
                if (typeof placeholders[i] === "number" &&
                    isFinite(placeholders[i]) && !isFinite(arguments[placeholders[i]])) {
                    ret.typeArguments[i] = arguments[placeholders[i]];
                }
                else {
                    ret.typeArguments[i] = placeholders[i];
                }
            }
        }
        else {
            for (i = 0; i < arguments.length; i++) {
                ret.typeArguments[i] = arguments[i];
            }
        }
        // since the placeholder indexes for the basetype and interfaces implemented are based
        // on the order of the type arguments for the defining types we should pass its typeargs
        // and not the outermost type's type arguments which may be different in number and order
        // than the base type of the base types and interfaces implemented
        if (this.baseType && this.baseType.typeArguments) {
            ret.baseType = this.specialize.apply(this.baseType, ret.typeArguments);
        }
        if (this.interfaces) {
            ret.interfaces = [];
            for (i = 0; i < this.interfaces.length; i++) {
                ret.interfaces[i] = this.specialize.apply(this.interfaces[i], ret.typeArguments);
            }
        }
        // rather than doing this check in various places we could just cache a field on the type
        if (this._fullName == "Nullable$1" && ret.typeArguments.length == 1) {
            ret.isNullable = true;
        }
        // if this was a self referencing type (e.g. IEquatable<Int32> for Int32 then we won't have the
        // specId yet because we don't know the type argument. we'll update the cache when we update
        // the self references. otherwise other types that use self references (but for a different type)
        // will get and use the wrong type arguments
        if (specId) {
            this.specializationCache[specId] = ret;
            ret.stringId = ret.generateString();
        }
        else {
            // the self referencing type needs to be able to put itself into the specialization cache
            // of the original type
            //ret.specializationCache = this.specializationCache;
        }
        if (this.InstanceConstructor != null) {
            var _self = this;
            ret.InstanceConstructor = function () {
                _self.InstanceConstructor.apply(this, ret.typeArguments.concat(Array.prototype.slice.call(arguments, 0)));
                return this;
            };
            ret.InstanceConstructor.prototype = this.InstanceConstructor.prototype;
        }
        return ret;
    };
    Type.prototype.equals = function (other) {
        if (!(other instanceof Type)) {
            return false;
        }
        if (this.identifier !== other.identifier) {
            return false;
        }
        if (this.typeArguments === null && other.typeArguments === null) {
            return true;
        }
        if (this.typeArguments === null && other.typeArguments !== null) {
            return false;
        }
        if (this.typeArguments !== null && other.typeArguments === null) {
            return false;
        }
        if (this.typeArguments.length !== other.typeArguments.length) {
            return false;
        }
        for (var i = 0; i < this.typeArguments.length; i++) {
            //TODO: handle covariance case here.
            //if (!$.ig.util.canAssign(this.typeArguments[ i ], other.typeArguments[ i ])) {
            //    return false;
            //}
            if (!Type.checkEquals(this.typeArguments[i], other.typeArguments[i])) {
                return false;
            }
        }
        return true;
    };
    Type.checkEquals = function (type1, type2) {
        if (type1 instanceof Type) {
            return type1.equals(type2);
        }
        else if (type2 instanceof Type) {
            return type2.equals(type1);
        }
        else {
            return type1 === type2;
        }
    };
    Type.op_Equality = function (type1, type2) {
        return type1.equals(type2);
    };
    Type.op_Inequality = function (type1, type2) {
        return !type1.equals(type2);
    };
    Type.prototype.generateString = function () {
        if (!this.typeArguments || !this.typeArguments.length) {
            return this.identifier.toString();
        }
        else {
            var ret = this.identifier.toString() + "[";
            var first = true;
            for (var i = 0; i < this.typeArguments.length; i++) {
                if (this.typeArguments[i] == undefined) {
                    continue;
                }
                if (first) {
                    first = false;
                }
                else {
                    ret += ",";
                }
                if (this.typeArguments[i].toString) {
                    ret += this.typeArguments[i].toString();
                }
                else {
                    ret += this.typeArguments[i].identifier.toString();
                }
            }
            ret += "]";
            return ret;
        }
    };
    Object.defineProperty(Type.prototype, "isValueType", {
        get: function () {
            return this.baseType === ValueType.prototype.$type;
        },
        enumerable: true,
        configurable: true
    });
    Type.prototype.isAssignableFrom = function (tOther) {
        // TODO: Unit test and make sure this is right (especially with generics
        if (this === tOther) {
            return true;
        }
        if (tOther.baseType && this.isAssignableFrom(tOther.baseType)) {
            return true;
        }
        if (tOther.interfaces) {
            for (var i = 0; i < tOther.interfaces.length; i++) {
                if (this.isAssignableFrom(tOther.interfaces[i])) {
                    return true;
                }
            }
        }
        return false;
    };
    Type.prototype.isInstanceOfType = function (value) {
        return typeCast(this, value) !== null;
    };
    Object.defineProperty(Type.prototype, "isPrimitive", {
        get: function () {
            return this === Number_$type ||
                this === Boolean_$type;
        },
        enumerable: true,
        configurable: true
    });
    Type.canAssign = function (targetType, type) {
        if (targetType.name === 'Nullable$1' && type.name !== 'Nullable$1') {
            targetType = Nullable.getUnderlyingType(targetType);
        }
        return Type.canAssignSimple(targetType, type);
    };
    Type.canAssignSimple = function (targetType, type) {
        if (targetType === type || Type.checkEquals(targetType, type)) {
            return true;
        }
        if (type.interfaces) {
            for (var i = 0; i < type.interfaces.length; i++) {
                if (Type.canAssignSimple(targetType, type.interfaces[i])) {
                    return true;
                }
            }
        }
        if (type.baseType) {
            return Type.canAssignSimple(targetType, type.baseType);
        }
        return false;
    };
    Type.createInstance = function ($t) {
        if ($t === Number || $t == Number_$type ||
            $t.isEnumType) {
            return 0;
        }
        if ($t == Boolean || $t == Boolean_$type) {
            return false;
        }
        if ($t.InstanceConstructor) {
            var result;
            //result = Object.create((<Type>$t).InstanceConstructor.prototype);
            var C = $t.InstanceConstructor;
            //(<Type>$t).InstanceConstructor.apply(result, Array.prototype.slice.call(arguments, 1));
            result = new (C.bind.apply(C, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([void 0], Array.prototype.slice.call(arguments, 1))))();
            return result;
        }
        throw new Error("Cannot find instance constructor for the type parameter");
    };
    ;
    Type.getDefaultValue = function ($t) {
        if ($t === Number_$type ||
            $t.isEnumType) {
            return 0;
        }
        if ($t == Boolean_$type) {
            return false;
        }
        if ($t.baseType === ValueType.$type) {
            return Type.createInstance($t);
        }
        return null;
    };
    ;
    Type.getPrimitiveHashCode = function (v) {
        var val = typeof v;
        if (val === "string" || v instanceof String) {
            var hash = 0, i, chr, len;
            if (v.length === 0) {
                return hash;
            }
            for (i = 0, len = this.length; i < len; i++) {
                chr = v.charCodeAt(i);
                /*jslint bitwise: true */
                hash = ((hash << 5) - hash) + chr;
                hash |= 0; // Convert to 32bit integer
            }
            return hash;
        }
        else if (val === "boolean" || v instanceof Boolean) {
            return +v;
        }
        else {
            return v;
        }
    };
    // static mark(t: Function, name: string,
    //     baseType: Type = Base.prototype.$type, 
    //     interfaces: Type[] = null, 
    //     staticInitializer: () => void = null) {
    //     t.prototype.$type = new Type(t, name, baseType, interfaces, staticInitializer);
    //     (<any>t).$type = t.prototype.$type;
    // }
    Type.decodePropType = function (val) {
        if (val === 0) {
            return Boolean_$type;
        }
        else if (val === 1) {
            return Number_$type;
        }
        else if (val === 2) {
            return String_$type;
        }
        else if (val === 3) {
            return Date_$type;
        }
        else {
            return val;
        }
    };
    return Type;
}(Base));

function markDep(depProp, PropMeta, t, changedFunction, props) {
    var names = [];
    var currName = "";
    var currOpts = [];
    var hasDefaultValue = false;
    var defaultValue = null;
    var propType = null;
    var changeHandler = null;
    var setterFunc = null;
    var getterFunc = null;
    var aliasName = null;
    var propertyAlias = null;
    var _loop_1 = function () {
        if (i % 2 == 0) {
            currName = props[i];
            if (currName.indexOf(":") >= 0) {
                var parts = currName.split(':');
                if (parts.length == 2) {
                    currName = parts[0];
                    aliasName = parts[1];
                    propertyAlias = currName.substring(0, 1).toLowerCase() + currName.substring(1) + "Property";
                }
                else {
                    currName = parts[0];
                    aliasName = parts[1];
                    if (aliasName.length == 0) {
                        aliasName = currName.substring(0, 1).toLowerCase() + currName.substring(1);
                    }
                    propertyAlias = parts[2];
                }
            }
            else {
                aliasName = currName.substring(0, 1).toLowerCase() + currName.substring(1);
                propertyAlias = aliasName + "Property";
            }
            names.push(currName);
        }
        else {
            currOpts = props[i];
            if (currOpts.length == 2) {
                hasDefaultValue = true;
                defaultValue = currOpts[1];
                propType = Type.decodePropType(currOpts[0]);
            }
            else {
                hasDefaultValue = false;
                propType = Type.decodePropType(currOpts[0]);
            }
            var changedName_1 = currName;
            changeHandler = function (o, a) {
                o[changedFunction].call(o, changedName_1, a.oldValue, a.newValue);
            };
            var meta = null;
            if (hasDefaultValue) {
                meta = PropMeta.createWithDefaultAndCallback(defaultValue, changeHandler);
            }
            else {
                meta = PropMeta.createWithCallback(changeHandler);
            }
            var dp_1 = depProp.registerAlt(currName, propType, t.$type, meta);
            setterFunc = function (v) {
                this.setValueAlt(dp_1, v);
            };
            if (propType.isEnumType) {
                getterFunc = function () {
                    return typeGetValue(this.getValueAlt(dp_1));
                };
            }
            else {
                getterFunc = function () {
                    return this.getValueAlt(dp_1);
                };
            }
            Object.defineProperty(t.prototype, aliasName, {
                set: setterFunc,
                get: getterFunc,
                configurable: true
            });
            t[propertyAlias] = dp_1;
        }
    };
    //debugger;
    for (var i = 0; i < props.length; i++) {
        _loop_1();
    }
    // let superClass = (<any>t).$type.baseType;
    // if (superClass !== null && superClass !== undefined) {
    //     let superNames = superClass.InstanceConstructor.$$p;
    //     if (superNames) {
    //         for (var j = superNames.length - 1; j >= 0; j--) {
    //             names.unshift(superNames[j]);
    //         }
    //     }
    // }
    //(<any>t).$$p = names;
    return names;
}
function typeGetValue(v) {
    if (v !== null && v.$type && v.$type.isEnumType) {
        return v.value;
    }
    return v;
}
function typeCast(targetType, obj) {
    if (obj === undefined || obj === null) {
        return null;
    }
    if (targetType === Array) {
        return ((obj instanceof Array) ? obj : null);
    }
    if (targetType === String) {
        targetType = String_$type;
    }
    if (targetType === Number) {
        targetType = Number_$type;
    }
    if (targetType === Boolean) {
        targetType = Boolean_$type;
    }
    if (targetType === Date) {
        targetType = Date_$type;
    }
    var type = obj;
    if (obj.$type) {
        type = obj.$type;
    }
    else if (typeof obj === 'number') {
        type = targetType === Number ? Number : Number_$type;
    }
    else if (typeof obj === 'string') {
        type = String_$type;
    }
    else if (typeof obj === 'boolean') {
        type = Boolean_$type;
    }
    else if (obj instanceof Date) {
        type = Date_$type;
    }
    else if (obj instanceof Array) {
        type = Array_$type;
    }
    if (Type.canAssignSimple(targetType, type)) {
        return obj;
    }
    if (targetType.name === 'Nullable$1' && type.name !== 'Nullable$1') {
        targetType = Nullable.getUnderlyingType(targetType);
        if (Type.canAssignSimple(targetType, type)) {
            return toNullable(targetType, obj);
        }
        return toNullable(targetType, null);
    }
    return null;
}
function typeCastObjTo$t($t, v) {
    var shouldWrap = false;
    if ($t.isNullable) {
        $t = $t.typeArguments[0];
        shouldWrap = true;
    }
    if (v !== null && $t.isEnumType) {
        v = v.value;
    }
    return shouldWrap ? toNullable($t, v) : v;
}
var pendingStaticCtors = new Array();
function markStruct(t, name, baseType, interfaces, staticInitializer) {
    if (baseType === void 0) { baseType = ValueType.prototype.$type; }
    if (interfaces === void 0) { interfaces = null; }
    if (staticInitializer === void 0) { staticInitializer = null; }
    t.prototype.$type = new Type(t, name, baseType, interfaces, staticInitializer);
    //TODO: do we need/want a flag on the function like we have in js?
    if (typeof t.staticInit === "function") {
        pendingStaticCtors.push(t);
    }
    t.$type = t.prototype.$type;
    t.$ = t.prototype.$type;
    return t.prototype.$type;
}
function markEnum(name, encodedDef) {
    var t = new Type(null, name, Base.prototype.$type, [IConvertible_$type]);
    t.isEnumType = true;
    var parts = encodedDef.split("|");
    var names = [];
    var actualNames = [];
    var namesValuesMap = {};
    var actualNamesValuesMap = {};
    for (var i = 0; i < parts.length; i++) {
        var subParts = parts[i].split(",");
        var nameParts = subParts[0].split(":");
        var name_1 = nameParts[0];
        var actualName = nameParts[0];
        if (nameParts.length > 1) {
            actualName = nameParts[1];
        }
        names.push(name_1);
        actualNames.push(actualName);
        //TODO: did we support string enums??
        namesValuesMap[name_1] = parseInt(subParts[1]);
        actualNamesValuesMap[actualName] = parseInt(subParts[1]);
    }
    var info = {
        names: names,
        actualNames: actualNames,
        namesValuesMap: namesValuesMap,
        actualNamesValuesMap: actualNamesValuesMap
    };
    t.enumInfo = info;
    return t;
}
var markTypeInitialized = false;
function markType(t, name, baseType, interfaces, staticInitializer) {
    if (baseType === void 0) { baseType = Base.prototype.$type; }
    if (interfaces === void 0) { interfaces = null; }
    if (staticInitializer === void 0) { staticInitializer = null; }
    t.prototype.$type = new Type(t, name, baseType, interfaces, staticInitializer);
    if (!markTypeInitialized) {
        markTypeInitialized = true;
        markType(Type, "Type");
        markType(Base, "Base", null);
    }
    //TODO: do we need/want a flag on the function like we have in js?
    if (typeof t.staticInit === "function") {
        pendingStaticCtors.push(t);
    }
    //t.prototype.$ = t.prototype.$type;
    t.$type = t.prototype.$type;
    t.$ = t.prototype.$type;
    return t.prototype.$type;
}
function callStaticConstructors() {
    var e_1, _a;
    if (pendingStaticCtors.length > 0) {
        //TODO: is the copy of the array needed? 
        var classes = Array.from(pendingStaticCtors);
        pendingStaticCtors.length = 0;
        try {
            for (var classes_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](classes), classes_1_1 = classes_1.next(); !classes_1_1.done; classes_1_1 = classes_1.next()) {
                var c = classes_1_1.value;
                c.staticInit();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (classes_1_1 && !classes_1_1.done && (_a = classes_1.return)) _a.call(classes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
}
var IConvertible_$type = new Type(null, "IConvertible");
var Enum = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Enum, _super);
    function Enum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Enum.$t = markType(Enum, "Enum");
    return Enum;
}(Base));

var EnumBox = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EnumBox, _super);
    function EnumBox(value, type) {
        var _this = _super.call(this) || this;
        _this.value = value;
        _this.$type = type;
        return _this;
    }
    EnumBox.prototype.getHashCode = function () {
        return this.value;
    };
    // TODO: Fill out remaining IConvertible implementation
    EnumBox.prototype.toDouble = function (provider) {
        return this.value;
    };
    EnumBox.prototype.toString = function () {
        return EnumUtil.getName(this.$type, this.value);
    };
    return EnumBox;
}(Enum));
function getBoxIfEnum($t, v) {
    if (v !== null && $t) { // TODO: Remove the $t check here and fix the null ref issue
        if ($t.isNullable) {
            $t = $t.typeArguments[0];
        }
        if ($t.isEnumType) {
            return enumGetBox($t, v);
        }
    }
    return v;
}
;
function enumGetBox($t, v) {
    if (!$t._boxes) {
        $t._boxes = {};
    }
    if (!$t._boxes[v]) {
        $t._boxes[v] = new EnumBox(v, $t);
    }
    return $t._boxes[v];
}
var EnumUtil = /** @class */ (function () {
    function EnumUtil() {
    }
    EnumUtil.getValueFromName = function (values, enumType, value, ignoreCase) {
        if (values.hasOwnProperty(value)) {
            return enumGetBox(enumType, values[value]);
        }
        else if (ignoreCase) {
            var upper = value.toUpperCase();
            for (var x in values) {
                if (x.toUpperCase() === upper) {
                    return enumGetBox(enumType, values[x]);
                }
            }
        }
        else {
            // A.S. Nov 4, 2016 Adjusted to handle case where leading char is _.
            var firstChar = value.charAt(0);
            if (firstChar != "_") {
                value = firstChar.toLowerCase() + value.substr(1);
            }
            else {
                value = "_" + value.charAt(1).toLowerCase() + value.substr(2);
            }
            if (values.hasOwnProperty(value)) {
                return enumGetBox(enumType, values[value]);
            }
        }
        return null;
    };
    EnumUtil.parse = function (enumType, value, ignoreCase) {
        //var info = Type.getDefinedNameAndNamespace(enumType.fullName);
        //if (Type.canAssign(this.$type, enumType)) 
        {
            //var p = info.namespace[ info.name ].prototype;
            var values = enumType.isEnumType ? enumType.enumInfo.actualNamesValuesMap : enumType.InstanceConstructor.prototype;
            var val = EnumUtil.getValueFromName(values, enumType, value, ignoreCase);
            if (val !== null) {
                return val;
            }
            if (enumType.isEnumType) {
                values = enumType.enumInfo.namesValuesMap;
                var val_1 = EnumUtil.getValueFromName(values, enumType, value, ignoreCase);
                if (val_1 !== null) {
                    return val_1;
                }
            }
        }
        throw new Error("Invalid " + enumType.name + " value: " + value);
    };
    // static $getName(value: number): string {
    // }
    // static $value(): number {
    // }
    //private _v: number;
    EnumUtil.enumHasFlag = function (value, flag) {
        /*jslint bitwise: true */
        return (value & flag) === flag;
    };
    EnumUtil.toString = function (enumType, value) {
        return EnumUtil.getName(enumType, value);
    };
    EnumUtil.getName = function (enumType, v) {
        if (enumType._nameMap == undefined) {
            var vals = EnumUtil.getValues(enumType);
            var names = enumType.isEnumType ? enumType.enumInfo.names : EnumUtil.getNames(enumType);
            var map = {};
            for (var i = 0; i < vals.length; i++) {
                map[vals[i]] = names[i];
            }
            enumType._nameMap = map;
        }
        var lookup = enumType._nameMap;
        return lookup[v];
    };
    EnumUtil.getFlaggedName = function (enumType, v, getName) {
        var _this = this;
        var names = [];
        var original = v;
        var zeroValueName;
        var value;
        var values = [];
        for (var p in this) {
            if (this.hasOwnProperty(p)) {
                value = enumType[p];
                if (typeof enumType[p] == "number") {
                    values.push(p);
                }
            }
        }
        values.sort(function (a, b) { return _this[a] - _this[b]; });
        for (var i = values.length - 1; i >= 0; i--) {
            value = this[values[i]];
            if (value === 0) {
                zeroValueName = getName(0);
            }
            /*jslint bitwise: true */
            else if ((v & value) === value) {
                v -= value;
                names.unshift(getName(value));
            }
        }
        if (v !== 0) {
            return original.toString();
        }
        if (original !== 0) {
            return names.join(", ");
        }
        return zeroValueName || "0";
    };
    EnumUtil.getValues = function ($t) {
        var result = [];
        if ($t.isEnumType) {
            for (var i = 0; i < $t.enumInfo.actualNames.length; i++) {
                result.push($t.enumInfo.actualNamesValuesMap[$t.enumInfo.actualNames[i]]);
            }
            return result;
        }
        var p = $t.isEnumType ?
            $t.enumInfo.actualNames : $t.InstanceConstructor.prototype;
        for (var member in p) {
            if (p.hasOwnProperty(member)) {
                if (typeof p[member] === "number") {
                    result.push(p[member]);
                }
            }
        }
        return result;
    };
    EnumUtil.getNames = function ($t) {
        var result = [];
        if ($t.isEnumType) {
            for (var i = 0; i < $t.enumInfo.actualNames.length; i++) {
                result.push($t.enumInfo.actualNames[i]);
            }
            return result;
        }
        var p = $t.isEnumType ?
            $t.enumInfo.actualNames : $t.InstanceConstructor.prototype;
        for (var member in p) {
            if (p.hasOwnProperty(member)) {
                if (typeof p[member] === "number") {
                    result.push(member);
                }
            }
        }
        return result;
    };
    EnumUtil.getEnumValue = function ($t, v) {
        if (v !== null) {
            if (typeof v === "number") {
                return v;
            }
            else {
                return v.value;
            }
        }
        return 0;
    };
    EnumUtil.isDefined = function ($t, value) {
        value = typeGetValue(value);
        var p = $t.isEnumType ?
            $t.enumInfo.actualNamesValuesMap : $t.InstanceConstructor.prototype;
        for (var member in p) {
            if (p.hasOwnProperty(member)) {
                if (p[member] === value) {
                    return true;
                }
            }
        }
        return false;
    };
    // TODO: Fill out remaining IConvertible implementation
    EnumUtil.toDouble = function (enumType, value, provider) {
        return value.value;
    };
    EnumUtil.toObject = function ($t, value) {
        return value;
    };
    EnumUtil.tryParse$1 = function ($tEnum, value, ignoreCase, result) {
        try {
            return {
                ret: true,
                p2: typeGetValue(EnumUtil.parse($tEnum, value, ignoreCase))
            };
        }
        catch (e) {
            result = Type.createInstance($tEnum);
            return {
                ret: false,
                p2: result
            };
        }
    };
    return EnumUtil;
}());

var ValueType = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ValueType, _super);
    function ValueType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValueType.$t = markType(ValueType, "ValueType");
    return ValueType;
}(Base));

var Nullable = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Nullable, _super);
    function Nullable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Nullable.getUnderlyingType = function (nullableType) {
        if (nullableType.isGenericType !== undefined && nullableType.isGenericType &&
            !nullableType.isGenericTypeDefinition &&
            Nullable$1.prototype.$type.typeName == nullableType.typeName) {
            return nullableType.genericTypeArguments[0];
        }
        return null;
    };
    Nullable.$t = markType(Nullable, "Nullable");
    return Nullable;
}(Base));

var Nullable$1 = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Nullable$1, _super);
    function Nullable$1($t, value) {
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this._value = null;
        _this.isNullable = true;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        if (value !== undefined) {
            _this._value = value;
        }
        return _this;
    }
    Nullable$1.nullableEquals = function (v1, v2) {
        /*jshint eqnull:true */
        var v1IsNull = (v1 == null) || (!!v1.isNullable && !v1.hasValue);
        var v2IsNull = (v2 == null) || (!!v2.isNullable && !v2.hasValue);
        if (v1IsNull && v2IsNull) {
            return true;
        }
        if (v1IsNull != v2IsNull) {
            return false;
        }
        var val1 = v1;
        var val2 = v2;
        if (v1.isNullable) {
            val1 = v1.value;
        }
        if (v2.isNullable) {
            val2 = v2.value;
        }
        return val1 == val2;
    };
    Nullable$1.prototype.equals = function (value) {
        return Nullable$1.nullableEquals(this, value);
    };
    Nullable$1.prototype.getHashCode = function () {
        if (this._value === null) {
            return 0;
        }
        if (this._value["getHashCode"] !== undefined) {
            return this._value.getHashCode();
        }
        return Type.getPrimitiveHashCode(this._value);
    };
    Object.defineProperty(Nullable$1.prototype, "hasValue", {
        get: function () {
            return this._value !== null;
        },
        enumerable: true,
        configurable: true
    });
    Nullable$1.prototype.toString = function () {
        return this._value === null ? "" : this._value.toString();
    };
    Object.defineProperty(Nullable$1.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Nullable$1.prototype.getValueOrDefault = function () {
        if (this.hasValue) {
            return this._value;
        }
        else {
            return this.getDefaultValue();
        }
    };
    Nullable$1.prototype.getDefaultValue = function () {
        if (Type.canAssign(Number_$type, this.$t)) {
            return 0;
        }
        else if (Type.canAssign(Boolean_$type, this.$t)) {
            return false;
        }
        else if (this.$t.baseType == ValueType.prototype.$type) {
            return Type.createInstance(this.$t);
        }
        else {
            return null;
        }
    };
    Nullable$1.prototype.getValueOrDefault1 = function (defaultValue) {
        if (this.hasValue) {
            return this._value;
        }
        else {
            return defaultValue;
        }
    };
    Nullable$1.prototype.preIncrement = function () {
        if (!this.hasValue) {
            return this;
        }
        this._value = (this._value + 1);
        return this;
    };
    Nullable$1.prototype.preDecrement = function () {
        if (!this.hasValue) {
            return this;
        }
        this._value = (this._value - 1);
        return this;
    };
    Nullable$1.prototype.postIncrement = function () {
        if (!this.hasValue) {
            return this;
        }
        var originalValue = this._value;
        this._value = (this._value + 1);
        return new Nullable$1(this.$t, originalValue);
    };
    Nullable$1.prototype.postDecrement = function () {
        if (!this.hasValue) {
            return this;
        }
        var originalValue = this._value;
        this._value = (this._value - 1);
        return new Nullable$1(this.$t, originalValue);
    };
    Nullable$1.$t = markType(Nullable$1, "Nullable$1");
    return Nullable$1;
}(Base));

function toNullable(t, value) {
    if (value == null) {
        return t._$nullNullable || (t._$nullNullable = new Nullable$1(t, null));
    }
    else if (value.isNullable) {
        return value;
    }
    return new Nullable$1(t, value);
}
var IComparable_$type = new Type(null, "IComparable");
var IComparable$1_$type = new Type(null, "IComparable$1");
var IEquatable$1_$type = new Type(null, "IEquatable$1");
var INotifyPropertyChanged_$type = new Type(null, "INotifyPropertyChanged");
var PropertyChangedEventArgs = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PropertyChangedEventArgs, _super);
    function PropertyChangedEventArgs(propertyName) {
        var _this = _super.call(this) || this;
        _this._propertyName = null;
        _this._propertyName = propertyName;
        return _this;
    }
    Object.defineProperty(PropertyChangedEventArgs.prototype, "propertyName", {
        get: function () {
            return this._propertyName;
        },
        set: function (value) {
            this._propertyName = value;
        },
        enumerable: true,
        configurable: true
    });
    PropertyChangedEventArgs.$t = markType(PropertyChangedEventArgs, "PropertyChangedEventArgs");
    return PropertyChangedEventArgs;
}(Base));

var IteratorWrapper = /** @class */ (function () {
    function IteratorWrapper(inner, getNew) {
        this._inner = null;
        this._getNew = null;
        this._hasNext = true;
        this._current = null;
        this._inner = inner;
        this._getNew = getNew;
    }
    IteratorWrapper.prototype.moveNext = function () {
        var next = this._inner.next();
        this._hasNext = !next.done;
        this._current = next.value;
        return this._hasNext;
    };
    Object.defineProperty(IteratorWrapper.prototype, "current", {
        get: function () {
            return this._current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IteratorWrapper.prototype, "currentObject", {
        get: function () {
            return this._current;
        },
        enumerable: true,
        configurable: true
    });
    IteratorWrapper.prototype.dispose = function () {
    };
    IteratorWrapper.prototype.reset = function () {
        this._inner = this._getNew();
        this._current = null;
        this._hasNext = true;
    };
    return IteratorWrapper;
}());

var IterableWrapper = /** @class */ (function () {
    function IterableWrapper(inner) {
        this._inner = null;
        this._inner = inner;
    }
    IterableWrapper.prototype.getEnumerator = function () {
        var _this = this;
        return new IteratorWrapper(this._inner()[Symbol.iterator](), function () { return _this._inner()[Symbol.iterator](); });
    };
    IterableWrapper.prototype.getEnumeratorObject = function () {
        var _this = this;
        return new IteratorWrapper(this._inner()[Symbol.iterator](), function () { return _this._inner()[Symbol.iterator](); });
    };
    return IterableWrapper;
}());

var EnumeratorWrapper = /** @class */ (function () {
    function EnumeratorWrapper(inner) {
        this._inner = null;
        this._inner = inner;
    }
    EnumeratorWrapper.prototype.next = function () {
        var done = !this._inner.moveNext();
        var value = null;
        if (!done) {
            value = this._inner.current;
        }
        return {
            done: done,
            value: value
        };
    };
    return EnumeratorWrapper;
}());

var EnumeratorWrapperObject = /** @class */ (function () {
    function EnumeratorWrapperObject(inner) {
        this._inner = null;
        this._inner = inner;
    }
    EnumeratorWrapperObject.prototype.next = function () {
        var done = !this._inner.moveNext();
        var value = null;
        if (!done) {
            value = this._inner.currentObject;
        }
        return {
            done: done,
            value: value
        };
    };
    return EnumeratorWrapperObject;
}());

function getEn(arr) {
    var arr_1, arr_1_1, item, e_2_1;
    var e_2, _a;
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, 6, 7]);
                arr_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](arr), arr_1_1 = arr_1.next();
                _b.label = 1;
            case 1:
                if (!!arr_1_1.done) return [3 /*break*/, 4];
                item = arr_1_1.value;
                return [4 /*yield*/, item];
            case 2:
                _b.sent();
                _b.label = 3;
            case 3:
                arr_1_1 = arr_1.next();
                return [3 /*break*/, 1];
            case 4: return [3 /*break*/, 7];
            case 5:
                e_2_1 = _b.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 7];
            case 6:
                try {
                    if (arr_1_1 && !arr_1_1.done && (_a = arr_1.return)) _a.call(arr_1);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 7: return [2 /*return*/];
        }
    });
}
function getEnumeratorObject(en) {
    if (en.$type === undefined &&
        (en instanceof Array || Array.isArray(en))) {
        var arr_2 = en;
        return new IteratorWrapper(getEn(arr_2), function () { return getEn(arr_2); });
    }
    return en.getEnumeratorObject();
}
function getEnumerator(en) {
    if (en.$type === undefined &&
        (en instanceof Array || Array.isArray(en))) {
        var arr_3 = en;
        return new IteratorWrapper(getEn(arr_3), function () { return getEn(arr_3); });
    }
    return en.getEnumerator();
}
var EnumerableWrapper = /** @class */ (function () {
    function EnumerableWrapper(inner) {
        this._inner = null;
        this._inner = inner;
    }
    EnumerableWrapper.prototype[Symbol.iterator] = function () {
        return new EnumeratorWrapper(getEnumerator(this._inner));
    };
    return EnumerableWrapper;
}());

var EnumerableWrapperObject = /** @class */ (function () {
    function EnumerableWrapperObject(inner) {
        this._inner = null;
        this._inner = inner;
    }
    EnumerableWrapperObject.prototype[Symbol.iterator] = function () {
        return new EnumeratorWrapperObject(getEnumeratorObject(this._inner));
    };
    return EnumerableWrapperObject;
}());

function toEnum(v) {
    return new IterableWrapper(v);
}
function fromEnum(v) {
    return new EnumerableWrapper(v);
}
function toEn(v) {
    return new IterableWrapper(v);
}
function fromEn(v) {
    return new EnumerableWrapperObject(v);
}
function fromDict(v) {
    var v_1, v_1_1, item, _a, key, value, e_3_1;
    var e_3, _b;
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 5, 6, 7]);
                v_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](v), v_1_1 = v_1.next();
                _c.label = 1;
            case 1:
                if (!!v_1_1.done) return [3 /*break*/, 4];
                item = v_1_1.value;
                _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](item, 2), key = _a[0], value = _a[1];
                return [4 /*yield*/, { key: key, value: value }];
            case 2:
                _c.sent();
                _c.label = 3;
            case 3:
                v_1_1 = v_1.next();
                return [3 /*break*/, 1];
            case 4: return [3 /*break*/, 7];
            case 5:
                e_3_1 = _c.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 7];
            case 6:
                try {
                    if (v_1_1 && !v_1_1.done && (_b = v_1.return)) _b.call(v_1);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 7: return [2 /*return*/];
        }
    });
}
var Number_$type = new Type(Number, "Number", Base.prototype.$type, [IComparable_$type, IConvertible_$type]);
var String_$type = new Type(String, "String", Base.prototype.$type, [IComparable_$type, IConvertible_$type]);
var Date_$type = new Type(Date, "Date", Base.prototype.$type, [IComparable_$type, IConvertible_$type]);
var Boolean_$type = new Type(Boolean, "Boolean", Base.prototype.$type, [IComparable_$type, IConvertible_$type]);
var Void_$type = new Type(null, "Void", Base.prototype.$type);
var n$ = Number_$type;
var s$ = String_$type;
var d$ = Date_$type;
var b$ = Boolean_$type;
var v$ = Void_$type;
var Delegate_$type = new Type(null, "Delegate");
function runOn(target, func) {
    var self = func;
    var ret = function () {
        return self.apply(target, arguments);
    };
    ret.original = self;
    ret.target = target;
    return ret;
}
function delegateCombine(del1, del2) {
    if (!del1) {
        return del2;
    }
    if (!del2) {
        return del1;
    }
    var ret = function () {
        del1.apply(null, arguments);
        return del2.apply(null, arguments);
    };
    ret.enumerate = function (arr) {
        if (del1) {
            if (del1.enumerate) {
                del1.enumerate(arr);
            }
            else {
                arr.push(del1);
            }
        }
        if (del2) {
            if (del2.enumerate) {
                del2.enumerate(arr);
            }
            else {
                arr.push(del2);
            }
        }
    };
    return ret;
}
;
function delegateRemove(del1, del2) {
    if (!del1) {
        return null;
    }
    if (!del2) {
        return del1;
    }
    var arr = [];
    var del = null;
    if (del1.enumerate) {
        del1.enumerate(arr);
    }
    else {
        arr.push(del1);
    }
    for (var i = 0; i < arr.length; i++) {
        if (del2.original) {
            if (arr[i].original == del2.original &&
                arr[i].target == del2.target) {
                continue;
            }
        }
        if (arr[i] == del2) {
            continue;
        }
        del = delegateCombine(del, arr[i]);
    }
    return del;
}
;
var IDisposable_$type = new Type(null, 'IDisposable');
var IEnumerable_$type = new Type(null, "IEnumerable");
var IEnumerator_$type = new Type(null, "IEnumerator");
var IEqualityComparer$1_$type = new Type(null, "IEqualityComparer$1");
var IEqualityComparer_$type = new Type(null, "IEqualityComparer");
var ICollection_$type = new Type(null, "ICollection", null, [IEnumerable_$type]);
var IList_$type = new Type(null, "IList", null, [IEnumerable_$type, ICollection_$type]);
var IEnumerable$1_$type = new Type(null, "IEnumerable$1", null, [IEnumerable_$type]);
var ICollection$1_$type = new Type(null, "ICollection$1", null, [IEnumerable$1_$type.specialize(0), IEnumerable_$type]);
var IList$1_$type = new Type(null, "IList$1", null, [
    ICollection$1_$type.specialize(0),
    IEnumerable$1_$type.specialize(0),
    IEnumerable_$type
]);
var IEnumerator$1_$type = new Type(null, "IEnumerator$1", null, [IEnumerator_$type, IDisposable_$type]);
var IDictionary_$type = new Type(null, "IDictionary");
var BaseError = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BaseError, _super);
    function BaseError(initNumber) {
        if (initNumber === void 0) { initNumber = -1; }
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this._message = null;
        _this._innerException = null;
        if (initNumber >= 0) {
            switch (initNumber) {
                case 1:
                    _this.init1.apply(_this, arguments);
                    break;
                case 2:
                    _this.init2.apply(_this, arguments);
                    break;
            }
        }
        return _this;
    }
    BaseError.prototype.get_message = function () {
        return this._message;
    };
    Object.defineProperty(BaseError.prototype, "message", {
        get: function () {
            return this.get_message();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseError.prototype, "innerException", {
        get: function () {
            return this._innerException;
        },
        enumerable: true,
        configurable: true
    });
    BaseError.prototype.init1 = function (initNumber, message) {
        this._message = message;
    };
    BaseError.prototype.init2 = function (initNumber, message, innerException) {
        this._message = message;
        this._innerException = innerException;
    };
    BaseError.prototype.toString = function () {
        return this._message;
    };
    BaseError.$t = markType(BaseError, "BaseError");
    return BaseError;
}(Base));

var SystemException = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SystemException, _super);
    function SystemException(initNumber) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this, 0) || this;
        if (initNumber > 0) {
            switch (initNumber) {
                case 1:
                    _this.init1.apply(_this, arguments);
                    break;
                case 2:
                    _this.init2.apply(_this, arguments);
                    break;
            }
            return _this;
        }
        return _this;
        //super(0);
    }
    SystemException.prototype.init1 = function (initNumber, message) {
        _super.prototype.init1.call(this, 1, message);
    };
    SystemException.prototype.init2 = function (initNumber, message, innerException) {
        _super.prototype.init2.call(this, 2, message, innerException);
    };
    SystemException.$t = markType(SystemException, "SystemException", BaseError.prototype.$type);
    return SystemException;
}(BaseError));

var NotSupportedException = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NotSupportedException, _super);
    function NotSupportedException(initNumber) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this, 0) || this;
        if (initNumber > 0) {
            switch (initNumber) {
                case 1:
                    _this.init1.apply(_this, arguments);
                    break;
                case 2:
                    _this.init2.apply(_this, arguments);
                    break;
            }
            return _this;
        }
        return _this;
    }
    NotSupportedException.prototype.init1 = function (initNumber, message) {
        _super.prototype.init1.call(this, 1, message);
    };
    NotSupportedException.prototype.init2 = function (initNumber, message, innerException) {
        _super.prototype.init2.call(this, 2, message, innerException);
    };
    NotSupportedException.$t = markType(NotSupportedException, "NotSupportedException", SystemException.prototype.$type);
    return NotSupportedException;
}(SystemException));

var FormatException = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FormatException, _super);
    function FormatException(initNumber) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this, 0) || this;
        if (initNumber > 0) {
            switch (initNumber) {
                case 1:
                    _this.init1.apply(_this, arguments);
                    break;
                case 2:
                    _this.init2.apply(_this, arguments);
                    break;
            }
            return _this;
        }
        return _this;
    }
    FormatException.prototype.init1 = function (initNumber, message) {
        _super.prototype.init1.call(this, 1, message);
    };
    FormatException.prototype.init2 = function (initNumber, message, innerException) {
        _super.prototype.init2.call(this, 2, message, innerException);
    };
    FormatException.$t = markType(FormatException, "FormatException", SystemException.prototype.$type);
    return FormatException;
}(SystemException));

var PointUtil = /** @class */ (function () {
    function PointUtil() {
    }
    PointUtil.equals = function (p1, p2) {
        if (p1 == null && p2 == null) {
            return true;
        }
        if (p1 == null && p2 != null) {
            return false;
        }
        if (p1 != null && p2 == null) {
            return false;
        }
        return p1.x == p2.x && p1.y == p2.y;
    };
    PointUtil.notEquals = function (p1, p2) {
        return !PointUtil.equals(p1, p2);
    };
    PointUtil.create = function () {
        return { x: 0, y: 0, $type: Point_$type };
    };
    PointUtil.createXY = function (x, y) {
        return { x: x, y: y, $type: Point_$type };
    };
    return PointUtil;
}());

var Point_$type = new Type(null, "Point");
var SeekOrigin;
(function (SeekOrigin) {
    SeekOrigin[SeekOrigin["Begin"] = 0] = "Begin";
    SeekOrigin[SeekOrigin["Current"] = 1] = "Current";
    SeekOrigin[SeekOrigin["End"] = 2] = "End";
})(SeekOrigin || (SeekOrigin = {}));
var Stream = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Stream, _super);
    function Stream() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stream.prototype.close = function () {
        this.disposeCore(true);
    };
    Stream.prototype.dispose = function () {
        this.close();
    };
    Stream.prototype.disposeCore = function (disposing) {
    };
    Stream.prototype.readByte = function () {
        var bytes = [0];
        var count = this.read(bytes, 0, 1);
        if (count === 0) {
            return -1;
        }
        return bytes[0];
    };
    Stream.prototype.writeByte = function (value) {
        this.write([value], 0, 1);
    };
    Stream.$t = markType(Stream, "Stream");
    return Stream;
}(Base));

var EventArgs = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EventArgs, _super);
    function EventArgs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EventArgs, "empty", {
        get: function () {
            if (EventArgs._empty) {
                return EventArgs._empty;
            }
            EventArgs._empty = new EventArgs;
            return EventArgs._empty;
        },
        enumerable: true,
        configurable: true
    });
    EventArgs.$t = markType(EventArgs, "EventArgs");
    return EventArgs;
}(Base));

var IFormatProvider_$type = new Type(null, 'IFormatProvider');
var Array_$type = new Type(Array, "Array", Base.prototype.$type, [IEnumerable_$type, ICollection_$type]);
var a$ = Array_$type;
var TypeRegistrar = /** @class */ (function () {
    function TypeRegistrar() {
    }
    TypeRegistrar.create = function (typeName) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        if (TypeRegistrar.isRegistered(typeName)) {
            var C = TypeRegistrar.get(typeName);
            if (C.htmlTagName) {
                return document.createElement(C.htmlTagName);
            }
            else {
                return new (C.bind.apply(C, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([void 0], rest)))();
            }
        }
        else {
            return null;
        }
    };
    TypeRegistrar.register = function (typeName, type) {
        TypeRegistrar._registrar.set(typeName, type.InstanceConstructor);
    };
    TypeRegistrar.registerCons = function (typeName, type) {
        TypeRegistrar._registrar.set(typeName, type);
    };
    TypeRegistrar.callRegister = function (typeName) {
        var type = TypeRegistrar.get(typeName);
        if (type !== undefined && type !== null &&
            type["register"] !== undefined) {
            type["register"]();
        }
    };
    TypeRegistrar.isRegistered = function (typeName) {
        return TypeRegistrar.get(typeName) !== null;
    };
    TypeRegistrar.get = function (typeName) {
        if (TypeRegistrar._registrar.has(typeName)) {
            return TypeRegistrar._registrar.get(typeName);
        }
        if (typeName.indexOf("Igx") == 0) {
            var igc = typeName.replace("Igx", "Igc");
            if (TypeRegistrar._registrar.has(igc)) {
                return TypeRegistrar._registrar.get(igc);
            }
            var igr = typeName.replace("Igx", "Igr");
            if (igr.indexOf("Component") == igr.length - 9) {
                igr = igr.substring(0, igr.length - 9);
            }
            if (TypeRegistrar._registrar.has(igr)) {
                return TypeRegistrar._registrar.get(igr);
            }
        }
        return null;
    };
    TypeRegistrar.createFromInternal = function (internal, prefix, postfix) {
        if (!internal) {
            return null;
        }
        if (!internal.$type) {
            return null;
        }
        var name = internal.$type.name;
        var externalName = prefix + name + postfix;
        if (!TypeRegistrar.isRegistered(externalName)) {
            return null;
        }
        return TypeRegistrar.create(externalName);
    };
    TypeRegistrar._registrar = new Map();
    return TypeRegistrar;
}());

//# sourceMappingURL=type.js.map

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ })

/******/ });
//# sourceMappingURL=0-es2015.worker.js.map
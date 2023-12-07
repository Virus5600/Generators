/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/util/copy-to-clipboard.js":
/*!******************************************!*\
  !*** ./src/js/util/copy-to-clipboard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

if (!window.Swal) window.Swal = __webpack_require__(/*! node_modules/sweetalert2/dist/sweetalert2.min.js */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
$(function () {
  $(document).on('click', "[data-copy-target], [data-copy-text], [data-copy]", function (e) {
    var element = e.currentTarget;
    var temp = $("<input>");
    $("body").append(temp);
    var textToCopy;
    if (typeof $(element).attr('data-copy-target') != 'undefined') {
      if ($($(element).attr('data-copy-target')).val().length > 0) textToCopy = $($(element).attr('data-copy-target')).val();else if ($($(element).attr('data-copy-target')).text().length > 0) textToCopy = $($(element).attr('data-copy-target')).text();
    } else if (typeof $(element).attr('data-copy-text') != 'undefined') textToCopy = $(element).attr('data-copy-text');else textToCopy = $(element).val();
    temp.val(textToCopy).trigger('select');
    document.execCommand("copy");
    temp.remove();
    Swal.fire({
      title: "Text copied",
      position: "top-right",
      showConfirmButton: false,
      toast: true,
      timer: 3750,
      background: "#28a745",
      customClass: {
        title: "text-white",
        popup: "px-0"
      },
      width: 150
    });
  });
});

/***/ }),

/***/ "./src/js/util/swal-flash/swal-flash.mod.js":
/*!**************************************************!*\
  !*** ./src/js/util/swal-flash/swal-flash.mod.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SwalFlash)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classStaticPrivateMethodGet(receiver, classConstructor, method) { _classCheckPrivateStaticAccess(receiver, classConstructor); return method; }
function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
var SwalFlash = /*#__PURE__*/function () {
  function SwalFlash() {
    _classCallCheck(this, SwalFlash);
    if (this instanceof SwalFlash) throw Error('SwalFlash is a static class and cannot be instantiated');
  }
  _createClass(SwalFlash, null, [{
    key: "error",
    value: function error(title) {
      var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var has_icon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var toast = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
      var pos = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
      var has_timer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;
      var duration = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : undefined;
      _classStaticPrivateMethodGet(SwalFlash, SwalFlash, _sendEvent).call(SwalFlash, "flash_error", {
        flash_error: title,
        message: msg,
        has_icon: has_icon,
        is_toast: toast,
        position: pos,
        has_timer: has_timer,
        duration: duration
      });
    }
  }, {
    key: "info",
    value: function info(title) {
      var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var has_icon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var toast = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
      var pos = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
      var has_timer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;
      var duration = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : undefined;
      _classStaticPrivateMethodGet(SwalFlash, SwalFlash, _sendEvent).call(SwalFlash, "flash_info", {
        flash_info: title,
        message: msg,
        has_icon: has_icon,
        is_toast: toast,
        position: pos,
        has_timer: has_timer,
        duration: duration
      });
    }
  }, {
    key: "success",
    value: function success(title) {
      var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var has_icon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var toast = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
      var pos = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
      var has_timer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;
      var duration = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : undefined;
      _classStaticPrivateMethodGet(SwalFlash, SwalFlash, _sendEvent).call(SwalFlash, "flash_success", {
        flash_success: title,
        message: msg,
        has_icon: has_icon,
        is_toast: toast,
        position: pos,
        has_timer: has_timer,
        duration: duration
      });
    }
  }]);
  return SwalFlash;
}();
function _sendEvent(type, params) {
  window.dispatchEvent(new CustomEvent(type, {
    detail: params
  }));
}

window.addEventListener('flash_error', function (e) {
  var flash = e.detail;
  var options = {
    title: "".concat(flash.flash_error),
    position: "top",
    showConfirmButton: false,
    toast: true,
    timer: 10000,
    background: "#dc3545",
    customClass: {
      title: "text-white",
      content: "text-white",
      popup: "px-3"
    },
    showClass: {
      popup: "animate__animated animate__bounceIn animate__faster"
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp animate__faster"
    }
  };
  Swal.fire(__setSwalFlashOptions(options, flash, 'error'));
});
window.addEventListener('flash_info', function (e) {
  var flash = e.detail;
  var options = {
    title: "".concat(flash.flash_info),
    position: "top",
    showConfirmButton: false,
    toast: true,
    timer: 10000,
    background: "#17a2b8",
    customClass: {
      title: "text-white",
      content: "text-white",
      popup: "px-3"
    },
    showClass: {
      popup: "animate__animated animate__bounceIn animate__faster"
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp animate__faster"
    }
  };
  Swal.fire(__setSwalFlashOptions(options, flash, 'info'));
});
window.addEventListener('flash_success', function (e) {
  var flash = e.detail;
  var options = {
    title: "".concat(flash.flash_success),
    position: "top",
    showConfirmButton: false,
    toast: true,
    timer: 10000,
    background: "#28a745",
    customClass: {
      title: "text-white",
      content: "text-white",
      popup: "px-3"
    },
    showClass: {
      popup: "animate__animated animate__bounceIn animate__faster"
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp animate__faster"
    }
  };
  if (Swal) {
    Swal.fire(__setSwalFlashOptions(options, flash, 'success'));
  } else {
    throw Error('Sweetalert2 not instantiated. Please include the said library (https://sweetalert2.github.io/). Currently testing for `Swal` keyword.');
  }
});
var __setSwalFlashOptions = function __setSwalFlashOptions(options, flash, type) {
  // console.log(flash);

  if (flash.has_icon != undefined) options["icon"] = "".concat(type);
  if (flash.message != undefined) options["html"] = "".concat(flash.message);
  if (flash.position != undefined) options["position"] = flash.position;
  if (flash.is_toast != undefined) options["toast"] = flash.is_toast;
  if (flash.has_timer != undefined) if (flash.has_timer) options['timer'] = flash.duration != undefined ? flash.duration : 10000;else delete options['duration'];
  return options;
};

/***/ }),

/***/ "./src/js/util/unique-array/unique-array.mod.js":
/*!******************************************************!*\
  !*** ./src/js/util/unique-array/unique-array.mod.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function initChange() {
  Array.prototype.uniq = function () {
    var seen = {};
    var out = [];
    var j = 0;
    for (var i = 0; i < this.length; i++) {
      var item = this[i];
      if (seen[item] !== 1) {
        seen[item] = 1;
        out[j++] = item;
      }
    }
    return out;
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initChange);

/***/ }),

/***/ "./src/js/util/validator/MessageBag.js":
/*!*********************************************!*\
  !*** ./src/js/util/validator/MessageBag.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MessageBag)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var _message = /*#__PURE__*/new WeakMap();
var MessageBag = /*#__PURE__*/function () {
  /**
   * Constructs an instance of `MessageBag`.
   *
   * <b>Example A.1:</b>
   * ```javascript
   * messages = {
   * 	name: {
   * 		required: `The name field is required.`
   * 	}
   * }
   * ```
   *
   * @param {Object}	messages	An instance of JSON object, which holds a field-key-value instance. An example of this is the Example A.1
   *
   */
  function MessageBag() {
    var messages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object.create(null);
    _classCallCheck(this, MessageBag);
    _classPrivateFieldInitSpec(this, _message, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _message, messages);
  }

  /**
   * Adds a new message to the message bag. If an exact key already exists, it will replace the older value with the new
   * value provided.
   *
   * @param {String}	key		The key identifier for the message
   * @param {String}	message	The message that will be placed in the message bag
   *
   * @return {MessageBag}		The current instance of `MessageBag`
   */
  _createClass(MessageBag, [{
    key: "add",
    value: function add(key, message) {
      key = key.split(".");
      var field = key[0];
      key = key[1];
      if (typeof _classPrivateFieldGet(this, _message)[field] == 'undefined') _classPrivateFieldGet(this, _message)[field] = {};
      _classPrivateFieldGet(this, _message)[field][key] = message;
      return this;
    }

    /**
     * Merge a new array of messages into the message bag.
     *
     * @param {Object|MessageBag}	messages	A JSON object or an instance of `MessageBag`
     *
     * @return {MessageBag}	The current instance of `MessageBag`
     */
  }, {
    key: "merge",
    value: function merge(messages) {
      var type = messages.constructor.name;
      if (type === 'Object') {
        _classPrivateFieldSet(this, _message, Object.assign(_classPrivateFieldGet(this, _message), messages));
      } else if (type === 'MessageBag') {
        _classPrivateFieldSet(this, _message, Object.assign(_classPrivateFieldGet(this, _message), messages.get()));
      }
      return this;
    }

    /**
     * Determine if messages exist for the given field.
     *
     * @param  {String}  field	The name of the field that will be tested
     * @return {Boolean}		A boolean value; either a `true` if the field exists, or `false` if it does not
     */
  }, {
    key: "has",
    value: function has(field) {
      return this.fields().includes(key);
    }

    /**
     * Get the fields present in the message bag.
     *
     * @return {Array}		An array of the fields included in the current instance of `MessageBag`
     */
  }, {
    key: "fields",
    value: function fields() {
      return Object.keys(_classPrivateFieldGet(this, _message));
    }

    /**
     * Get the first message from the message bag for a given field.
     *
     * @param  {String}	field	The name of the field that the message will be fetched upon
     * @return {String}		The first message contained within the said field. Returns an `undefined` when the field does not exists
     */
  }, {
    key: "first",
    value: function first(field) {
      if (typeof field == 'undefined') {
        field = Object.keys(_classPrivateFieldGet(this, _message));
        var _key = Object.keys(_classPrivateFieldGet(this, _message)[field]);
        return _classPrivateFieldGet(this, _message)[field][_key[0]];
      }
      var key = Object.keys(_classPrivateFieldGet(this, _message)[field]);
      return _classPrivateFieldGet(this, _message)[field][key[0]];
    }

    /**
     * Get all of the messages from the message bag for a given field. If no value or a `null` is provided to the field, it returns all the messages contained within the current instance of `MessageBag`
     *
     * @param  {String}	field	The name of the field that the message will be fetched upon
     * @return {Object}		A JSON object that contains the key-value pair for all the message of the field.
     */
  }, {
    key: "get",
    value: function get() {
      var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return field == null ? _classPrivateFieldGet(this, _message) : _classPrivateFieldGet(this, _message)[field];
    }
  }]);
  return MessageBag;
}();


/***/ }),

/***/ "./src/js/util/validator/Rules.js":
/*!****************************************!*\
  !*** ./src/js/util/validator/Rules.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Array": () => (/* binding */ _Array),
/* harmony export */   "Between": () => (/* binding */ Between),
/* harmony export */   "Boolean": () => (/* binding */ _Boolean),
/* harmony export */   "In": () => (/* binding */ In),
/* harmony export */   "Max": () => (/* binding */ Max),
/* harmony export */   "Min": () => (/* binding */ Min),
/* harmony export */   "Nullable": () => (/* binding */ Nullable),
/* harmony export */   "Numeric": () => (/* binding */ Numeric),
/* harmony export */   "Required": () => (/* binding */ Required),
/* harmony export */   "RequiredIf": () => (/* binding */ RequiredIf),
/* harmony export */   "Sometimes": () => (/* binding */ Sometimes),
/* harmony export */   "String": () => (/* binding */ _String)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Rule = /*#__PURE__*/function () {
  /**
   * The parent constructor, which creates the common Rule instance for all the rules.
   * 
   * @param {String}	field			The name of the field being tested
   * @param {Any} 	value			The value to validate
   * @param {Array}	validatorValues	An array of values that the validator has. Only retrieves the first value due to how the rule works
   * @param {String} message			The message to use when the rule fails
   */
  function Rule(field, value) {
    var validatorValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var message = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "The :attr field is incorrect.";
    _classCallCheck(this, Rule);
    // PRIVATE VARIABLES
    _defineProperty(this, "_message", void 0);
    _defineProperty(this, "_valid", false);
    /**
     * Container for the name of the field that will be tested
     */
    _defineProperty(this, "_field", void 0);
    /**
     * Container for the value that will be tested
     */
    _defineProperty(this, "_value", void 0);
    /**
     * Container for the validator values that will be used against the value provided
     */
    _defineProperty(this, "_validatorValues", void 0);
    message = message.replaceAll(/(:attr)/gi, field);
    message = message.replaceAll(/(:val)/gi, value);
    this._message = message;
    this._field = field;
    this._value = value;
    this._validatorValues = validatorValues;
  }
  _createClass(Rule, [{
    key: "validate",
    value: function validate() {
      throw new Error("Unimplemented abstract method: validate()");
    }
  }]);
  return Rule;
}();
var Required = /*#__PURE__*/function (_Rule) {
  _inherits(Required, _Rule);
  var _super = _createSuper(Required);
  /**
   * Tests whether the `value` provided is present and a valid value.
   * 
   * @param {String}	field	The name of the field being tested
   * @param {Any}		value	The value to validate
   * @param {String} message	The message to use when the rule fails
   */
  function Required(field, value) {
    var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "The :attr field is required";
    var validatorValues = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    _classCallCheck(this, Required);
    return _super.call(this, field, value, validatorValues !== null && validatorValues !== void 0 ? validatorValues : undefined, message);
  }
  _createClass(Required, [{
    key: "validate",
    value: function validate() {
      if (this._value != 'undefined' && this._value != null && this._value.length > 0) this._valid = true;
      return {
        valid: this._valid,
        message: this._message,
        runOtherValidation: true
      };
    }
  }]);
  return Required;
}(Rule);
var RequiredIf = /*#__PURE__*/function (_Required) {
  _inherits(RequiredIf, _Required);
  var _super2 = _createSuper(RequiredIf);
  /**
   * Tests whether the `value` provided is present and a valid value only if the other field has the provided value. Skips the validation if the other field is
   * blank.
   * 
   * @param {String}	field				The name of the field being tested
   * @param {Any}		value				The value to validate
  	 * @param {Array}	validatorValues		An array of values that the validator has. Only retrieves the first three values (other field, other field's required value,
  	 * 										other field's value) due to how the rule works
   * @param {String}	message				The message to use when the rule fails
   */
  function RequiredIf(field, value, validatorValues) {
    var message = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "The :attr field is required since :attr2 is :val2";
    _classCallCheck(this, RequiredIf);
    if (_typeof(validatorValues) != 'object' || validatorValues.constructor.name != 'Array') throw new Error("Improper validator value format:\n\tNeeds array, ".concat(_typeof(validatorValues), " is passed"));else if (validatorValues.length < 2) throw new Error("Not enough validator value passed:\n\tNeeds 2, only ".concat(validatorValues.length, " is passed."));
    message = message.replaceAll(/(:attr2)/gi, validatorValues[0]);
    message = message.replaceAll(/(:val2)/gi, validatorValues[1]);
    message = message.replaceAll(/(:val3)/gi, validatorValues[2]);
    return _super2.call(this, field, value, message, validatorValues);
  }
  _createClass(RequiredIf, [{
    key: "validate",
    value: function validate() {
      var _this$_validatorValue = _slicedToArray(this._validatorValues, 3),
        field2 = _this$_validatorValue[0],
        val2 = _this$_validatorValue[1],
        val3 = _this$_validatorValue[2];
      if (val2 == val3) {
        return _get(_getPrototypeOf(RequiredIf.prototype), "validate", this).call(this);
      } else {
        this._valid = true;
        return {
          valid: this._valid,
          message: this._message,
          runOtherValidation: false
        };
      }
    }
  }]);
  return RequiredIf;
}(Required);
var Sometimes = /*#__PURE__*/function (_Rule2) {
  _inherits(Sometimes, _Rule2);
  var _super3 = _createSuper(Sometimes);
  /**
   * Works similar as the `Required` rule but only works if the value is present (not `undefined`).
   * 
   * @param {String}	field	The name of the field being tested
   * @param {Any} 	value	The value to validate
   * @param {String} message	The message to use when the rule fails
   */
  function Sometimes(field, value) {
    var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "The :attr field is required to have a value, or leave it as blank";
    _classCallCheck(this, Sometimes);
    return _super3.call(this, field, value, undefined, message);
  }
  _createClass(Sometimes, [{
    key: "validate",
    value: function validate() {
      this._valid = true;
      var runOtherValidation = false;
      if (typeof this._value != 'undefined') {
        runOtherValidation = true;
      }
      return {
        valid: this._valid,
        message: this._message,
        runOtherValidation: runOtherValidation
      };
    }
  }]);
  return Sometimes;
}(Rule);
var _Boolean = /*#__PURE__*/function (_Rule3) {
  _inherits(_Boolean, _Rule3);
  var _super4 = _createSuper(_Boolean);
  /**
   * Tests whether the value is a boolean or can be converted to a boolean.
   * 
   * @param {String}	field	The name of the field being tested
   * @param {Any} 	value	The value to validate
   * @param {String} message	The message to use when the rule fails
   */
  function _Boolean(field, value) {
    var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "The :attr must be true or false";
    _classCallCheck(this, _Boolean);
    return _super4.call(this, field, value, undefined, message);
  }
  _createClass(_Boolean, [{
    key: "validate",
    value: function validate() {
      if (typeof this._value == 'boolean') {
        this._valid = true;
      } else if (typeof this._value == 'number') {
        if (this._value == 1 || this._value == 0) this._valid = true;
      } else if (typeof this._value == 'string') {
        if (["on", "off", "true", "false"].includes(this._value.toLowerCase())) this._valid = true;
      }
      return {
        valid: this._valid,
        message: this._message
      };
    }
  }]);
  return _Boolean;
}(Rule);

var Numeric = /*#__PURE__*/function (_Rule4) {
  _inherits(Numeric, _Rule4);
  var _super5 = _createSuper(Numeric);
  /**
   * Tests whether the value is a number or can be converted to a number.
   * 
   * @param {String}	field	The name of the field being tested
   * @param {Any} 	value	The value to validate
   * @param {String} message	The message to use when the rule fails
   */
  function Numeric(field, value) {
    var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "The :attr should be a number";
    _classCallCheck(this, Numeric);
    return _super5.call(this, field, value, undefined, message);
  }
  _createClass(Numeric, [{
    key: "validate",
    value: function validate() {
      if (typeof this._value == 'number') {
        this._valid = true;
      } else if (typeof this._value == 'string') {
        var isDecimal = this._value.split(".").length > 1;
        var converted = isDecimal ? parseFloat(this._value) : parseInt(this._value);
        if (!isNaN(converted)) this._valid = true;
      }
      return {
        valid: this._valid,
        message: this._message
      };
    }
  }]);
  return Numeric;
}(Rule);
var Min = /*#__PURE__*/function (_Rule5) {
  _inherits(Min, _Rule5);
  var _super6 = _createSuper(Min);
  /**
   * Tests whether the value is no less than the provided validator value.
   * 
   * @param {String}	field			The name of the field being tested
   * @param {Any} 	value			The value to validate
   * @param {Array}	validatorValues	An array of values that the validator has. Only retrieves the first value due to how the rule works
   * @param {String} message			The message to use when the rule fails
   */
  function Min(field, value, validatorValues) {
    var message = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "The :attr must be at least :val";
    _classCallCheck(this, Min);
    var e;
    if (_typeof(validatorValues) != 'object' || validatorValues.constructor.name != 'Array') e = Error("Improper validator value format:\n\tNeeds array, ".concat(_typeof(validatorValues), " is passed"));else if (validatorValues.length < 1) e = Error("Not enough validator value passed:\n\tNeeds 1, only ".concat(validatorValues.length, " is passed."));
    if (value == null || typeof value == 'undefined') value = value;else if (value.constructor.name == "Array") value = value.length;
    if (typeof e != 'undefined') {
      e.name = "RuleException";
      throw e;
    }
    message = message.replaceAll(/(:min)/gi, validatorValues[0]);
    return _super6.call(this, field, value, validatorValues[0], message);
  }
  _createClass(Min, [{
    key: "validate",
    value: function validate() {
      if (new Numeric(this._field, this._value).validate().valid) {
        var isDecimal = this._value.toString().split(".").length > 1;
        var converted = isDecimal ? parseFloat(this._value) : parseInt(this._value);
        if (converted >= this._validatorValues) this._valid = true;
      }
      return {
        valid: this._valid,
        message: this._message
      };
    }
  }]);
  return Min;
}(Rule);
var Max = /*#__PURE__*/function (_Rule6) {
  _inherits(Max, _Rule6);
  var _super7 = _createSuper(Max);
  /**
   * Tests whether the value is no more than the provided validator value.
   * 
   * @param {String}	field			The name of the field being tested
   * @param {Any} 	value			The value to validate
   * @param {Array}	validatorValues	An array of values that the validator has. Only retrieves the first value due to how the rule works
   * @param {String} message			The message to use when the rule fails
   */
  function Max(field, value, validatorValues) {
    var message = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "The :attr may not be greater than :val";
    _classCallCheck(this, Max);
    var e;
    if (_typeof(validatorValues) != 'object' || validatorValues.constructor.name != 'Array') e = Error("Improper validator value format:\n\tNeeds array, ".concat(_typeof(validatorValues), " is passed"));else if (validatorValues.length < 1) e = Error("Not enough validator value passed:\n\tNeeds 1, only ".concat(validatorValues.length, " is passed."));
    if (value == null || typeof value == 'undefined') value = value;else if (value.constructor.name == "Array") value = value.length;
    if (typeof e != 'undefined') {
      e.name = "RuleException";
      throw e;
    }
    message = message.replaceAll(/(:max)/gi, validatorValues[0]);
    return _super7.call(this, field, value, validatorValues[0], message);
  }
  _createClass(Max, [{
    key: "validate",
    value: function validate() {
      if (new Numeric(this._field, this._value).validate().valid) {
        var isDecimal = this._value.toString().split(".").length > 1;
        var converted = isDecimal ? parseFloat(this._value) : parseInt(this._value);
        if (converted <= this._validatorValues) this._valid = true;
      }
      return {
        valid: this._valid,
        message: this._message
      };
    }
  }]);
  return Max;
}(Rule);
var Between = /*#__PURE__*/function (_Rule7) {
  _inherits(Between, _Rule7);
  var _super8 = _createSuper(Between);
  /**
   * Tests whether the value is no more and less than the provided validator value. If an array is passed as a value, the length of the array provided will be tested.
   * 
   * @param {String}	field			The name of the field being tested
   * @param {Any} 	value			The value to validate
   * @param {Array}	validatorValues	An array of values that the validator has. Only retrieves the first two values (min, max) due to how the rule works
   * @param {String}	message			The message to use when the rule fails
   */
  function Between(field, value, validatorValues) {
    var message = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "The :attr must be between :min and :max";
    _classCallCheck(this, Between);
    if (_typeof(validatorValues) != 'object' || validatorValues.constructor.name != 'Array') throw new Error("Improper validator value format:\n\tNeeds array, ".concat(_typeof(validatorValues), " is passed"));else if (validatorValues.length < 2) throw new Error("Not enough validator value passed:\n\tNeeds 2, only ".concat(validatorValues.length, " is passed."));
    if (validatorValues[0] > validatorValues[1]) throw new Error("Minimum value is larger than the maximum value:\n\tMinimum value should be less than ".concat(validatorValues[1], ", ").concat(validatorValues[0], " is provided."));
    if (value.constructor.name == "Array") value = value.length;
    message = message.replaceAll(/(:min)/gi, validatorValues[0]);
    message = message.replaceAll(/(:max)/gi, validatorValues[1]);
    return _super8.call(this, field, value, [validatorValues[0], validatorValues[1]], message);
  }
  _createClass(Between, [{
    key: "validate",
    value: function validate() {
      if (new Numeric(this._field, this._value).validate().valid) {
        var isDecimal = this._value.split(".").length > 1;
        var converted = isDecimal ? parseFloat(this._value) : parseInt(this._value);
        if (converted >= this._validatorValues[0] && converted <= this._validatorValues[1]) this._valid = true;
      }
      return {
        valid: this._valid,
        message: this._message
      };
    }
  }]);
  return Between;
}(Rule);
var _Array = /*#__PURE__*/function (_Rule8) {
  _inherits(_Array, _Rule8);
  var _super9 = _createSuper(_Array);
  /**
   * Tests whether the value is no more and less than the provided validator value.
   * 
   * @param {String}	field			The name of the field being tested
   * @param {Any} 	value			The value to validate
   * @param {String} message			The message to use when the rule fails
   */
  function _Array(field, value) {
    var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "The :attr must be an array";
    _classCallCheck(this, _Array);
    return _super9.call(this, field, value, undefined, message);
  }
  _createClass(_Array, [{
    key: "validate",
    value: function validate() {
      if (_typeof(this._value) == 'object' && this._value.constructor.name == 'Array') {
        this._valid = true;
      }
      return {
        valid: this._valid,
        message: this._message
      };
    }
  }]);
  return _Array;
}(Rule);

var In = /*#__PURE__*/function (_Rule9) {
  _inherits(In, _Rule9);
  var _super10 = _createSuper(In);
  /**
   * Tests whether the value is no more and less than the provided validator value.
   * 
   * @param {String}	field			The name of the field being tested
   * @param {Any} 	value			The value to validate
   * @param {Array}	validatorValues	An array of values that the validator has. Only retrieves the first value due to how the rule works
   * @param {String}	message			The message to use when the rule fails
   */
  function In(field, value, validatorValues) {
    var message = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "The selected :attr is invalid";
    _classCallCheck(this, In);
    if (_typeof(validatorValues) != 'object' || validatorValues.constructor.name != 'Array') throw new Error("Improper validator value format:\n\tNeeds array, ".concat(_typeof(validatorValues), " is passed"));else if (validatorValues.length < 1) throw new Error("Not enough validator value passed:\n\tNeeds at least 1, only ".concat(validatorValues.length, " is passed."));
    return _super10.call(this, field, value, validatorValues, message);
  }
  _createClass(In, [{
    key: "validate",
    value: function validate() {
      if (typeof this._value != 'undefined') {
        if (this._validatorValues.includes(this._value.toString())) {
          this._valid = true;
        }
      }
      return {
        valid: this._valid,
        message: this._message
      };
    }
  }]);
  return In;
}(Rule);
var Nullable = /*#__PURE__*/function (_Rule10) {
  _inherits(Nullable, _Rule10);
  var _super11 = _createSuper(Nullable);
  /**
   * Tests whether the value is null when no other value is provided.
   * 
   * @param {String}	field			The name of the field being tested
   * @param {Any} 	value			The value to validate
   * @param {String} message			The message to use when the rule fails
   */
  function Nullable(field, value) {
    var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "The :attr field can be null";
    _classCallCheck(this, Nullable);
    return _super11.call(this, field, value, message);
  }
  _createClass(Nullable, [{
    key: "validate",
    value: function validate() {
      var runOtherValidation = true;
      this._valid = true;
      if (this._value === null || this._value === "") {
        runOtherValidation = false;
      }
      return {
        valid: this._valid,
        message: this._message,
        runOtherValidation: runOtherValidation
      };
    }
  }]);
  return Nullable;
}(Rule);
var _String = /*#__PURE__*/function (_Rule11) {
  _inherits(_String, _Rule11);
  var _super12 = _createSuper(_String);
  /**
   * Tests whether the value is a string or not.
   * @param {String}	field			The name of the field being tested
   * @param {Any} 	value			The value to validate
   * @param {String} message			The message to use when the rule fails
   */
  function _String(field, value) {
    var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "The :attr field is not a string";
    _classCallCheck(this, _String);
    return _super12.call(this, field, value, message);
  }
  _createClass(_String, [{
    key: "validate",
    value: function validate() {
      var _response;
      if (!this._value) {
        return {
          valid: this._valid,
          message: this._message
        };
      }
      var response = this._value.match(/[a-zA-Z0-9\.,\\\/"'\(\)\[\]{}\-\+_=\*\&%\!@#\$\^<>\?\s]+/);
      response = (_response = response) !== null && _response !== void 0 ? _response : [];
      if (response.length == 1) this._valid = true;
      return {
        valid: this._valid,
        message: this._message
      };
    }
  }]);
  return _String;
}(Rule);


/***/ }),

/***/ "./src/js/util/validator/Validator.js":
/*!********************************************!*\
  !*** ./src/js/util/validator/Validator.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Validator)
/* harmony export */ });
/* harmony import */ var _js_util_unique_array_unique_array_mod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../js/util/unique-array/unique-array.mod.js */ "./src/js/util/unique-array/unique-array.mod.js");
/* harmony import */ var _Rules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rules.js */ "./src/js/util/validator/Rules.js");
/* harmony import */ var _MessageBag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageBag.js */ "./src/js/util/validator/MessageBag.js");
var _class;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classStaticPrivateMethodGet(receiver, classConstructor, method) { _classCheckPrivateStaticAccess(receiver, classConstructor); return method; }
function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
// Utility



// Module

var _arrFieldsIndex = /*#__PURE__*/new WeakMap();
var _checkedFields = /*#__PURE__*/new WeakMap();
var _fieldNames = /*#__PURE__*/new WeakMap();
var _valueList = /*#__PURE__*/new WeakMap();
var _ruleList = /*#__PURE__*/new WeakMap();
var _messageList = /*#__PURE__*/new WeakMap();
var _errors = /*#__PURE__*/new WeakMap();
var _validated = /*#__PURE__*/new WeakMap();
var _failed = /*#__PURE__*/new WeakMap();
var _validationDone = /*#__PURE__*/new WeakMap();
var _runValidation = /*#__PURE__*/new WeakSet();
var _validateField = /*#__PURE__*/new WeakSet();
var _isFieldArray = /*#__PURE__*/new WeakSet();
var Validator = /*#__PURE__*/function () {
  /**
   * 
   * Create an instance of a Validator
   * * * *
   * **Example A.1:**
   * ```javascript
   * function(value) {
  	 * 	let valid = false;
  	 * 	let msg = "Provided value is not an array";
  	 * 
   * 	if (value.constructor.name === "Array")
   * 		valid = true;
   * 
   * 	return {
   * 		valid: valid,
   * 		message: msg
   * 	};
   * }
   * ```
   * * * *
   * **Example A.2:**
   * ```javascript
   * (value) => {
   * 	let valid = false;
  	 * 	let msg = "Provided value is not an array";
  	 * 
   * 	if (value.constructor.name === "Array")
   * 		valid = true;
   * 
   * 	return {
   * 		valid: valid,
   * 		message: msg
   * 	};
   * }
   * ```
   * * * *
   * **Example B.1:**
   * ```javascript
   * function() {
   * 	let valid = false;
  	 * 	let msg = "Provided value is not an array";
  	 * 
   * 	if (typeof globalVar != "undefined")
   * 		valid = true;
   * 	
   * 	return {
   * 		valid: valid,
   * 		message: msg
   * 	};
   * }
   * ```
   * 
   * @param {Object}	values	A JSON object containing a key-value pair for the fields and its value.
   * @param {Object}	rules	A JSON object containing a key-value pair for the fields' rules. A rule must be one of the classes within `Rule.js` or a custom function that takes in 1 parameter (value) and returns a JSON object with 2 values (valid: boolean, message: String). An example of a function is **Example A.1**, **Example A.2**, and **Example B.1**
   * @param {Object}	message	A JSON object containing a key-value pair for the fields' messages
   */
  function Validator(_values, _rules, _messages) {
    _classCallCheck(this, Validator);
    /**
     * Identifies if the field is an array or not.
     * 
     * @param {String}	field	THe name of the field that will be tested
     * 
     * @return {Boolean}		Returns a boolean value, which is either a `true`, if the field is an array; or `false` if it isn't
     * 
     * @deprecated
     */
    _classPrivateMethodInitSpec(this, _isFieldArray);
    // PRIVATE METHODS
    /**
     * Validates a single field using the rules provided.
     * 
     * @param {String}	field		The name of the field that will be validated
     * @param {Object}	rules		A JSON object containing all the rules for this field. Use the `#fetchRules()` method to do this
     * @param {Object}	messages	A JSON object containing all the messages for this field. Use the `#fetchMessages()` method to do this
     * 
     * @return {Boolean}		A boolean value which identifies if the other validations should be checked or not.
     */
    _classPrivateMethodInitSpec(this, _validateField);
    /**
     * Runs the validation.
     */
    _classPrivateMethodInitSpec(this, _runValidation);
    /**
     * A container for all array fields passed to this validator. Values contained in here
     * are formatted to be a key-value pair.
     */
    _classPrivateFieldInitSpec(this, _arrFieldsIndex, {
      writable: true,
      value: {}
    });
    /**
     * A container for all the fields that are done being validated.
     */
    _classPrivateFieldInitSpec(this, _checkedFields, {
      writable: true,
      value: []
    });
    /**
     * A container for all the new field names
     */
    _classPrivateFieldInitSpec(this, _fieldNames, {
      writable: true,
      value: []
    });
    // Private variables
    /**
     * A private global variable container for all the values passed to this.
     */
    _classPrivateFieldInitSpec(this, _valueList, {
      writable: true,
      value: void 0
    });
    /**
     * A private global variable container for all the rules passed to this.
     */
    _classPrivateFieldInitSpec(this, _ruleList, {
      writable: true,
      value: void 0
    });
    /**
     * A private global variable container for all the messages passed to this.
     */
    _classPrivateFieldInitSpec(this, _messageList, {
      writable: true,
      value: void 0
    });
    /**
     * A private global variable container for the `MessageBag` instance.
     */
    _classPrivateFieldInitSpec(this, _errors, {
      writable: true,
      value: void 0
    });
    /**
     * A private global variable container, containing all valid values.
     */
    _classPrivateFieldInitSpec(this, _validated, {
      writable: true,
      value: {}
    });
    /**
     * A private global variable container, identifying if this validator's validation has failed.
     */
    _classPrivateFieldInitSpec(this, _failed, {
      writable: true,
      value: false
    });
    /**
     * A private global variable container that determines if the validation has been run already.
     */
    _classPrivateFieldInitSpec(this, _validationDone, {
      writable: true,
      value: false
    });
    // Initialize necessary utilities
    (0,_js_util_unique_array_unique_array_mod_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    // Set external variables
    _classPrivateFieldSet(this, _valueList, _values);
    _classPrivateFieldSet(this, _ruleList, _rules);
    _classPrivateFieldSet(this, _messageList, _messages);
    _classPrivateFieldSet(this, _errors, new _MessageBag_js__WEBPACK_IMPORTED_MODULE_2__["default"]());
  }
  _createClass(Validator, [{
    key: "fails",
    value:
    // PUBLIC METHODS
    /**
     * Identifies whether the validation failed or not. A single rule that fail will result in a total fail of the validation.
     * 
     * @return {Boolean}		Returns `true` if the validation fails; `false` otherwise.
     */
    function fails() {
      if (!_classPrivateFieldGet(this, _validationDone)) _classPrivateMethodGet(this, _runValidation, _runValidation2).call(this);
      return _classPrivateFieldGet(this, _failed);
    }

    /**
     * Fetches all the error message.
     * 
     * @return {MessageBag}		An instance of message bag containing all error messages.
     */
  }, {
    key: "errors",
    value: function errors() {
      if (!_classPrivateFieldGet(this, _validationDone)) _classPrivateMethodGet(this, _runValidation, _runValidation2).call(this);
      return _classPrivateFieldGet(this, _errors);
    }

    /**
     * Validates the fields provided and returns a JSON object, containing all the values from the fields that passed.
     * 
     * @return {Object}		A JSON object, containing a key-value pair format of fields and their values that passed the validation.
     */
  }, {
    key: "validate",
    value: function validate() {
      if (!_classPrivateFieldGet(this, _validationDone)) _classPrivateMethodGet(this, _runValidation, _runValidation2).call(this);
      return _classPrivateFieldGet(this, _validated);
    }

    /**
     * Determine if messages exist for the given field.
     *
     * @param  {String}  field	The name of the field that will be tested
     * @return {Boolean}		A boolean value; either a `true` if the field exists, or `false` if it does not
     */
  }, {
    key: "has",
    value: function has(field) {
      return this.invalidFields().includes(key);
    }

    /**
     * Get the first message from the message bag for a given field.
     *
     * @param  {String}	field	The name of the field that the message will be fetched upon
     * @return {String}		The first message contained within the said field. Returns an `undefined` when the field does not exists
     */
  }, {
    key: "first",
    value: function first(field) {
      return this.errors().first(field);
    }

    /**
     * Get all of the messages from the message bag for a given field. If no value or a `null` is provided to the field, it returns all the messages contained within the current instance of `MessageBag`
     *
     * @param  {String}	field	The name of the field that the message will be fetched upon
     * @return {Object}		A JSON object that contains the key-value pair for all the message of the field.
     */
  }, {
    key: "get",
    value: function get() {
      var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return this.errors().get(field);
    }

    /**
     * Retrieves an array of field names that are invalid
     * 
     * @return {Array}		An array of field names that failed the validation
     */
  }, {
    key: "invalidFields",
    value: function invalidFields() {
      return this.errors().fields();
    }

    /**
     * Retrieves an array of field names that are valid
     * 
     * @return {Array}		An array of field names that passed the validation
     */
  }, {
    key: "validFields",
    value: function validFields() {
      return Object.keys(this.validate());
    }

    /**
     * Retrieves all the field names that are used in this validator
     * 
     * @return {Array}		An array of all the field names used in this Validator
     */
  }, {
    key: "fields",
    value: function fields() {
      return _classPrivateFieldGet(this, _fieldNames);
    }
  }]);
  return Validator;
}();
_class = Validator;
function _runValidation2() {
  var _this = this;
  var _loop = function _loop() {
    var k = _Object$keys[_i];
    // Identify their field name and values
    var field = k;
    var index = 0;
    var runOtherValidation = false;

    // Fetch rules and messages
    var rules = _classStaticPrivateMethodGet(_class, _class, _fetchRules).call(_class, field, _classPrivateFieldGet(_this, _ruleList), index);
    var messages = _classStaticPrivateMethodGet(_class, _class, _fetchMessages).call(_class, field, _classPrivateFieldGet(_this, _messageList), index);

    // Verify if a "required" rule exists. If it does, then just run the validation for that rule only.
    if (rules.includes('required')) {
      runOtherValidation = _classPrivateMethodGet(_this, _validateField, _validateField2).call(_this, field, _classPrivateFieldGet(_this, _valueList)[field], ["required"], messages);
      rules.splice(rules.indexOf("required"), 1);
    }
    // Verify if a "required_if" rule exists. If it does, then just run the validation for that rule only.
    else if (rules.toString().match("required_if")) {
      var ruleIndex = 0;
      rules.forEach(function (v, k) {
        if (v.match(/required_if/g)) {
          ruleIndex = k;
          return;
        }
      });
      var rule = rules.splice(ruleIndex, 1);
      runOtherValidation = _classPrivateMethodGet(_this, _validateField, _validateField2).call(_this, field, _classPrivateFieldGet(_this, _valueList)[field], rule, messages);
    }
    // Verify if a "sometimes" rule exists. If it does, then just run the validation for that rule only.
    else if (rules.includes('sometimes')) {
      runOtherValidation = _classPrivateMethodGet(_this, _validateField, _validateField2).call(_this, field, _classPrivateFieldGet(_this, _valueList)[field], ["sometimes"], messages);
      rules.splice(rules.indexOf("sometimes"), 1);
    }
    // Verify if a "nullable" rule exists. If it does, then just run the validation for that rule only.
    else if (rules.includes("nullable")) {
      runOtherValidation = _classPrivateMethodGet(_this, _validateField, _validateField2).call(_this, field, _classPrivateFieldGet(_this, _valueList)[field], ["nullable"], messages);
      rules.splice(rules.indexOf("nullable"), 1);
    }

    // The actual validation; LMAO
    if (runOtherValidation) {
      _classPrivateMethodGet(_this, _validateField, _validateField2).call(_this, field, _classPrivateFieldGet(_this, _valueList)[field], rules, messages);
    }
    _classPrivateFieldGet(_this, _checkedFields).push(field);
  };
  for (var _i = 0, _Object$keys = Object.keys(_classPrivateFieldGet(this, _ruleList)); _i < _Object$keys.length; _i++) {
    _loop();
  }
  if (_classPrivateFieldGet(this, _errors).fields().length > 0) _classPrivateFieldSet(this, _failed, true);
  _classPrivateFieldSet(this, _validationDone, true);
}
/**
 * Fetches the rules from the JSON object passed at `obj` using the provided field name at `field`
 * 
 * @param {String}	field				The name of the field that corresponds to the rule key
 * @param {Object}	obj					The JSON object that contains the rules passed to the Validator instance
 * @param {Number}	index				If the passed field is an array, the `index` will identify what index the field is to accurately fetch the rule for that specific field; Defaults to 0 if no value is passed
 * @param {Boolean}	isArrayContainer	Identify if the field being passed is an array container. An array container is a field which has a square bracket (`[]`); Defaults to `false` if no value is passed.
 * 
 * @return {Object}		A JSON object containing all the rules for the provided `field`
 */
function _fetchRules(field, obj) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var isArrayContainer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var rules = obj[field];
  rules = typeof rules == 'undefined' ? [] : rules;
  if (!isArrayContainer) {
    field = field.substr(0, field.lastIndexOf("."));
    var _additionalRules = obj["".concat(field, ".").concat(index)];
    rules = typeof _additionalRules == 'undefined' ? rules : rules.concat(_additionalRules);
    _additionalRules = obj["".concat(field, ".*")];
    rules = typeof _additionalRules == 'undefined' ? rules : rules.concat(_additionalRules);
  }
  return rules.uniq();
}
/**
 * Fetches the messages from the JSON object passed at `obj` using the provided field name at `field`
 * 
 * @param {String}	field				The base name of the field that corresponds to the rule key
 * @param {Object}	obj					The JSON object that contains the messages passed to the Validator instance
 * @param {Number}	index				If the passed field is an array, the `index` will identify what index the field is to accurately fetch the rule for that specific field; Defaults to 0 if no value is passed
 * @param {Boolean}	isArrayContainer	Identify if the field being passed is an array container. An array container is a field which has a square bracket (`[]`); Defaults to `false` if no value is passed.
 * 
 * @return {Object}		A JSON object containing all the message for the provided `field`
 */
function _fetchMessages(field, obj) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var isArrayContainer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var messages = obj[field];
  messages = typeof messages == 'undefined' ? {} : messages;
  if (!isArrayContainer) {
    field = field.substr(0, field.lastIndexOf("."));
    var additionalMessages = obj["".concat(field, ".").concat(index)];
    messages = typeof additionalRules == 'undefined' ? messages : Object.assign(messages, additionalMessages);
    additionalMessages = obj["".concat(field, ".*")];
    messages = typeof additionalRules == 'undefined' ? messages : Object.assign(messages, additionalMessages);
  }
  return messages;
}
function _validateField2(field, value, rules, messages) {
  var isArray = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  // An iterable index used to identify how many custom function rules are provided.
  var closureIndex = 0;

  // Contains all the result of the validation
  var validationResult = [];
  var runOtherValidation = true;

  // Iterate through the rules
  var _iterator = _createForOfIteratorHelper(rules),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var rule = _step.value;
      var ogRule = rule;
      var message = messages[rule];
      var validatorValues = void 0;
      var ruleType = void 0;
      if (typeof rule == "string") {
        // If the rule contains a value (denoted by a colon (:)), removes the latter half of the rule
        if (rule.split(":").length > 1) {
          validatorValues = rule.split(":")[1].split(/\s*,\s*/);
          rule = rule.split(":")[0];
          message = messages[rule];
          if (rule === "required_if") {
            validatorValues.push(_classPrivateFieldGet(this, _valueList)[validatorValues[0]]);
          }
        }

        // Split the rule using the underscore (_) and resets the rule variable
        var splicedRule = rule.split("_");
        rule = "";

        // Iterate through the spliced rule from earlier and add them up to be a "PascalCase"
        var _iterator2 = _createForOfIteratorHelper(splicedRule),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var r = _step2.value;
            rule += r.charAt(0).toUpperCase() + r.slice(1);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      var ruleName = rule;

      // Uses try-catch to prevent the script from stopping when an unknown rule is encountered.
      try {
        // If the rule is a string name, then proceed with using it with the `Rules`.
        if (typeof rule == "string") {
          rule = typeof validatorValues == 'undefined' ? new _Rules_js__WEBPACK_IMPORTED_MODULE_1__[rule](field, value, message) : new _Rules_js__WEBPACK_IMPORTED_MODULE_1__[rule](field, value, validatorValues, message);
          rule = rule.validate();
          ruleType = "string";
          if (typeof rule.runOtherValidation == 'boolean') {
            runOtherValidation = rule.runOtherValidation;
          }
        }
        // If the rule is a function; an anonymous or a named function, proceed with just using the function.
        else if (typeof rule == "function") {
          var customRule = void 0;
          // Check if the function has 2 parameters or not
          if (rule.length == 2) {
            // Runs the function. Must return an object
            customRule = rule(field, value);
          }
          // If the custom function is not exactly 2 parameters, skip and warn the developer
          else if (rule.length > 2 || rule.length < 2 && rule.length != 0) {
            console.error("Provided rule cannot be executed as it does not follow the required format.");
          }
          // Otherwise, if the custom does not have a parameter, then just call it.
          else {
            customRule = rule();
          }

          // After running the custom rule, run a check...
          // If the returned value from the custom rule isn't an object...
          if (_typeof(customRule) !== 'object') {
            console.warn("Custom rule must return a JSON object, containing the following keys:", ["valid", "message"]);
            continue;
          }
          // If the returned value is an Object, check if it has the desired output. Otherwise, warn the user
          else {
            var keys = Object.keys(customRule).sort().toString();
            var targetK = ["valid", "message"].sort().toString();
            var values = Object.values(customRule).sort();
            var targetV = ["String", "Boolean"];
            if (keys != targetK || _typeof(values[0]) != targetV[0] || _typeof(values[1]) != targetV[1]) {
              console.warn("Provided JSON does not match the desired output!\n\nProvided:\n", customRule, "\n\nDesired:\n", {
                "valid": _typeof(true),
                "message": _typeof("String")
              });
              continue;
            }
          }
          rule = customRule;
          ruleType = "function";
        }
        // If none of the above works, warn them that such rule cannot be used.
        else {
          console.warn("Cannot use a \"".concat(_typeof(rule), "\" to validate input."));
          continue;
        }

        // If the rule returned a failed validation, add the message to the message bag
        if (!rule.valid) {
          _classPrivateFieldGet(this, _errors).add(ruleType == 'function' ? "".concat(field, ".closure_").concat(closureIndex) : "".concat(field, ".").concat(ogRule.split(":")[0]), rule.message);
          if (isArray) {
            _classPrivateFieldGet(this, _errors).add(ruleType == 'function' ? "".concat(field, ".closure_").concat(closureIndex) : "".concat(field, ".").concat(ogRule.split(":")[0]), rule.message);
          }
          closureIndex++;
        }
        validationResult.push(rule.valid);
      } catch (e) {
        // Sends out a warning if rule does not exists.
        console.warn("No such rule exists: ".concat(ruleName, "\n"), "Field: ".concat(field, "\n\n"), e);
      }
      ;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  _classPrivateFieldGet(this, _fieldNames).push(field);
  if (!validationResult.includes(false)) _classPrivateFieldGet(this, _validated)[field] = value;
  return typeof runOtherValidation == 'undefined' ? true : runOtherValidation;
}
function _isFieldArray2(field) {
  if (field.constructor.name === 'String') {
    if (field.match(/(\*)|(\d+)/)) return true;
  } else if (_classPrivateFieldGet(this, _valueList)[field].constructor.name === 'Array') {
    return true;
  }
  return false;
}


/***/ }),

/***/ "./src/modules/string-generator/index.js":
/*!***********************************************!*\
  !*** ./src/modules/string-generator/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_util_unique_array_unique_array_mod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/util/unique-array/unique-array.mod.js */ "./src/js/util/unique-array/unique-array.mod.js");
/* harmony import */ var _js_util_swal_flash_swal_flash_mod_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/util/swal-flash/swal-flash.mod.js */ "./src/js/util/swal-flash/swal-flash.mod.js");
/* harmony import */ var _js_util_validator_Validator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../js/util/validator/Validator.js */ "./src/js/util/validator/Validator.js");
// Utility



// Validator

var validation = {
  rules: {
    "use_range": ["sometimes", "boolean"],
    "range_min": ["sometimes", "numeric", "min:1", "max:$range_max"],
    "range_max": ["sometimes", "numeric", "min:$range_min", "max:255"],
    "length": ["sometimes", "numeric", "between:1,255"],
    "chars": ["required", "array", "min:1"],
    "chars.*": ["sometimes", "in:alpha,numeric,spec"]
  },
  message: {
    "use_range": {
      "boolean": "Malformed data, please refresh the page"
    },
    "range_min": {
      "numeric": "Minimum range should be a number",
      "min": "Minimum value should be at least :min",
      "max": "Maximum value should be at max, :max"
    },
    "range_max": {
      "numeric": "Maximum range should be a number",
      "min": "Maximum value should be at least :min",
      "max": "Maximum value should be at max, :max"
    },
    "length": {
      "length.numeric": "Length should be a number",
      "length.between": "Length should be a value between :min and :max"
    },
    "chars": {
      "required": "Character Accepted is required",
      "array": "Malformed data, please refresh the page",
      "min": "Please select at least 1 option"
    },
    "chars.*": {
      "boolean": "Malformed data, please refresh the page"
    }
  }
};
$(function () {
  // Initialize necessary utilities
  (0,_js_util_unique_array_unique_array_mod_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

  // ENABLE/DISABLE RANGE OPTION
  $("#useRange").on('change', function (e) {
    var obj = $(e.currentTarget);
    var range = $("#length_range");
    var fixed = $("#length_fixed");
    if (obj.prop('checked')) {
      range.find("input").prop('disabled', false);
      fixed.find("input").prop('disabled', true).removeClass("is-valid is-invalid");
    } else {
      range.find("input").prop('disabled', true).removeClass("is-valid is-invalid");
      fixed.find("input").prop('disabled', false);
    }
  }).trigger('change');

  // RANGE MIN SETTER
  $("#range_min").on('change', function (e) {
    var _obj$val, _newMin$match$length, _newMin$match;
    var obj = $(e.currentTarget);
    var target = $("#range_max");
    var newMin = (_obj$val = obj.val()) !== null && _obj$val !== void 0 ? _obj$val : 0;
    newMin = ((_newMin$match$length = (_newMin$match = newMin.match(/^-?\d+$/g)) === null || _newMin$match === void 0 ? void 0 : _newMin$match.length) !== null && _newMin$match$length !== void 0 ? _newMin$match$length : 0) > 0 ? parseInt(newMin) : parseInt(target.attr('min'));
    target.attr('min', newMin);
  }).trigger('change');

  // RANGE MAX SETTER
  $("#range_max").on('change', function (e) {
    var _obj$val2, _newMax$match$length, _newMax$match;
    var obj = $(e.currentTarget);
    var target = $("#range_min");
    var newMax = (_obj$val2 = obj.val()) !== null && _obj$val2 !== void 0 ? _obj$val2 : 0;
    newMax = ((_newMax$match$length = (_newMax$match = newMax.match(/^-?\d+$/g)) === null || _newMax$match === void 0 ? void 0 : _newMax$match.length) !== null && _newMax$match$length !== void 0 ? _newMax$match$length : 0) > 0 ? parseInt(newMax) : parseInt(target.attr('max'));
    target.attr('max', newMax);
  }).trigger('change');

  // FORM SUBMIT
  $("#string_form").on('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();
    validate($(e.currentTarget));
  });

  // FORM RESETTER
  $("#resetForm").on('click', function (e) {
    $("#restorePassView").trigger('click').remove();
    var useRange = $("#useRange");
    if (useRange.prop("checked")) {
      useRange.prop("checked", false).trigger("change");
    }
    $("[name]").removeClass("is-valid is-invalid").closest("form").each(function (k, v) {
      return v.reset();
    });
    var gstr = $("#generated_string");
    animateText(gstr, '');
    _js_util_swal_flash_swal_flash_mod_js__WEBPACK_IMPORTED_MODULE_1__["default"].success("Form Reset");
  });

  // MINIMIZE/MAXIMIZE
  $(document).on('click', ".minimize, .maximize", function (e) {
    var btn = $(e.target),
      obj;
    if (typeof btn.attr('data-target') != 'undefined') obj = $(btn.attr('data-target'));else obj = btn;
    var window = obj.closest(".window");
    var collapser = window.closest(".collapse");
    var others = $("[data-parent=\"#".concat(window.attr("id"), "\"]"));
    if (window.hasClass("maximized")) {
      others.addClass("maximize").removeClass("minimize").attr("title", "Maximize");
      btn.addClass("maximize").removeClass("minimize").attr("title", "Maximize");
      obj.addClass("maximize").removeClass("minimize").attr("title", "Maximize");
      window.addClass("minimized").removeClass("maximized");
      setTimeout(function () {
        return collapser.collapse("hide");
      }, 250);
    } else if (window.hasClass("minimized")) {
      collapser.collapse("show");
      others.addClass("minimize").removeClass("maximize").attr("title", "Minimize");
      btn.addClass("minimize").removeClass("maximize").attr("title", "Minimize");
      obj.addClass("minimize").removeClass("maximize").attr("title", "Minimize");
      window.addClass("maximized").removeClass("minimized");
    }
  });
});

/**
 * Validates a single form and returns whether they passed the validation or not. Since this
 * is only used in a very specific instance, the rules and messages are all from a single
 * source.
 *
 * @param {HTMLFormElement|JQuery} form A single form element that will be validated. It could be an `HTMLFormElement` object or a `JQuery` HTML object.
 * @returns boolean Returns `true` if the form passes validation; `false` otherwise.
 */
var validate = function validate(form) {
  // Capture all inputs
  var fields = $("[name]").not(":disabled, [disabled]");
  var valids = $("input:valid").not(":disabled, [disabled]");
  var invalids = $("input:invalid").not(":disabled, [disabled]");

  // Set validation input
  validation.values = form.serializeFormJSON(true);

  // Update some rule values
  var variableRule = ['range_min', 'range_max'];
  var modVRules = JSON.parse(JSON.stringify(validation.rules));
  var _loop = function _loop() {
    var r = _variableRule[_i];
    modVRules[r].find(function (v, k) {
      if (v.match(/\$\w+/g)) {
        var targetKey = v.match(/(\$)(\w+)/)[2];
        if (!Object.keys(validation.values).includes(targetKey)) return;
        modVRules[r][k] = v.replace(/(\$)(\w+)/, validation.values[targetKey]);
      }
    });
  };
  for (var _i = 0, _variableRule = variableRule; _i < _variableRule.length; _i++) {
    _loop();
  }
  var validator = new _js_util_validator_Validator_js__WEBPACK_IMPORTED_MODULE_2__["default"](validation.values, modVRules, validation.message);
  var invalidFields = validator.invalidFields();
  var validFields = validator.validFields();

  // Update their class
  fields.removeClass("is-valid is-invalid");
  valids.addClass("is-valid");
  valids.removeClass("is-invalid");
  invalids.addClass("is-invalid");
  invalids.removeClass("is-valid");

  // Update validation message
  valids.closest(".form-group").find("feedback").removeClass("text-danger");
  invalids.closest(".form-group").find("feedback").addClass("text-danger");

  // Apply the validators validation
  $.each(validFields, function (k, v) {
    $("[data-validation]").text("");
  });
  $.each(invalidFields, function (k, v) {
    var validationMsgFields = $("[data-validation]");
    validationMsgFields.each(function () {
      var obj = $(this);
      if (obj.attr("data-validation").match("(".concat(v, ")")) != null) {
        obj.closest(".form-group").find("input, select, textarea").not(":disabled, [disabled]").removeClass("is-valid").addClass("is-invalid");
      }
      ;
    });
    validationMsgFields.text(function () {
      var obj = $(this);
      if (obj.attr('data-validation').match(v)) obj.text(validator.first(v)).addClass("text-danger");
    });
  });

  // If the validation failed, prevent the code from progressing further, then show a toast warning
  if (validator.fails()) {
    _js_util_swal_flash_swal_flash_mod_js__WEBPACK_IMPORTED_MODULE_1__["default"].error("Please re-check the data");
    return;
  } else {
    var values = validator.validate();
    var chars = values.chars;
    var regex = "[";
    regex += chars.includes("alpha") ? "a-zA-Z" : "";
    regex += chars.includes("numeric") ? "0-9" : "";
    regex += chars.includes("spec") ? "\\$\\&\\+\\,\\:\\;\\=\\?\\@\\#\\|\\'\\<\\>\\.\\^\\*\\(\\)\\%\\!\\-" : "";
    regex += "]";
    regex += typeof values.use_range == 'undefined' ? "{".concat(values.length, "}") : "{".concat(values.range_min, ",").concat(values.range_max, "}");
    var gstr = $("#generated_string");
    var newStr = new RandExp(regex).gen();
    animateText(gstr, newStr);
    gstr.closest(".string-card").addClass("show").find(".minimize, .maximize").addClass("minimize").removeClass("maximize").closest(".window").addClass("maximized").removeClass("minimized");
    var restoreAppendTarget = $("#stringGenFooter");
    var restore = restoreAppendTarget.find("#restorePassView");
    if (restore.length <= 0) {
      restore = $("\n\t\t\t\t<span class=\"ml-auto mr-0 insert minimize\" id=\"restorePassView\" data-target=\".window .minimize, .window .maximize\" data-parent=\"#stringCard\" title=\"Minimize\"></span>\n\t\t\t");
      restoreAppendTarget.append(restore);
      setTimeout(function () {
        return restore.removeClass("insert");
      }, 1000);
      var collapser = $(restore.attr('data-target')).closest(".collapse");
      if (collapser.length > 0) collapser.collapse("show");
    } else {
      var _collapser = $(restore.attr('data-target')).closest(".collapse");
      _collapser.collapse("show");
      if (_collapser.length > 0) setTimeout(function () {
        return restore.addClass("minimize").removeClass("maximize");
      }, 250);
    }
  }
  return validator.fails();
};

/**
 * Animates the texts as if they're being cleared and typed in using a keyboard. This animation is
 * pure JavaScript and thus, really has no support for CSS preferences. However, due to considerations
 * they are applied and can also be skipped via a click inside the container.
 *
 * @param {HTMLElement|JQuery} container An element where the text animation will be applied to.
 * @param {string} newStr The new string that will be "typed" in place.
 * @param {number} baseInterval **(Optional)** The approximate interval between changes. It is counted in milliseconds. Default is 25.5 milliseconds.
 */
var animateText = function animateText(container, newStr) {
  var _container$textConten;
  var baseInterval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 25.5;
  var isVanilla = typeof container.textContent === "undefined" ? false : true;

  // Use the plain old text replace instead of animating if the users prefers reduced motions.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    if (isVanilla) container.textContent = newStr;else container.text(newStr);
    return;
  }

  // newStr fallbacks
  newStr = typeof newStr === 'string' ? newStr : '';

  // Base variables
  var oldStr = (_container$textConten = container.textContent) !== null && _container$textConten !== void 0 ? _container$textConten : container.text();
  var oldInterval = baseInterval * 10 / oldStr.length;
  var newInterval = baseInterval * 10 / newStr.length;

  // Control variables
  var timers = [];
  var skipTextAnimation = function skipTextAnimation() {
    var timer;
    while (timer = timers.pop()) {
      clearTimeout(timer);
    }
    if (isVanilla) container.textContent = newStr;else container.text(newStr);
  };
  if (isVanilla) container.addEventListener("click", skipTextAnimation);else container.on("click", skipTextAnimation);
  for (var i = 0; i < oldStr.length; i++) {
    timers.push(setTimeout(function () {
      if (isVanilla) container.textContent = container.textContent.slice(0, -1);else container.text(container.text().slice(0, -1));
    }, oldInterval * i));
  }
  timers.push(setTimeout(function () {
    var _loop2 = function _loop2(_i2) {
      timers.push(setTimeout(function () {
        if (isVanilla) container.textContent = container.textContent + newStr[_i2];else container.text(container.text() + newStr[_i2]);
      }, newInterval * _i2));
      if (_i2 >= newStr.length - 1) {
        if (isVanilla) container.removeEventListener("click", skipTextAnimation);else container.off("click", skipTextAnimation);
      }
    };
    for (var _i2 = 0; _i2 < newStr.length; _i2++) {
      _loop2(_i2);
    }
  }, oldInterval * oldStr.length));
};

/***/ }),

/***/ "./node_modules/drange/lib/index.js":
/*!******************************************!*\
  !*** ./node_modules/drange/lib/index.js ***!
  \******************************************/
/***/ ((module) => {

"use strict";

/* eslint indent: 4 */


// Private helper class
class SubRange {
    constructor(low, high) {
        this.low = low;
        this.high = high;
        this.length = 1 + high - low;
    }

    overlaps(range) {
        return !(this.high < range.low || this.low > range.high);
    }

    touches(range) {
        return !(this.high + 1 < range.low || this.low - 1 > range.high);
    }

    // Returns inclusive combination of SubRanges as a SubRange.
    add(range) {
        return new SubRange(
            Math.min(this.low, range.low),
            Math.max(this.high, range.high)
        );
    }

    // Returns subtraction of SubRanges as an array of SubRanges.
    // (There's a case where subtraction divides it in 2)
    subtract(range) {
        if (range.low <= this.low && range.high >= this.high) {
            return [];
        } else if (range.low > this.low && range.high < this.high) {
            return [
                new SubRange(this.low, range.low - 1),
                new SubRange(range.high + 1, this.high)
            ];
        } else if (range.low <= this.low) {
            return [new SubRange(range.high + 1, this.high)];
        } else {
            return [new SubRange(this.low, range.low - 1)];
        }
    }

    toString() {
        return this.low == this.high ?
            this.low.toString() : this.low + '-' + this.high;
    }
}


class DRange {
    constructor(a, b) {
        this.ranges = [];
        this.length = 0;
        if (a != null) this.add(a, b);
    }

    _update_length() {
        this.length = this.ranges.reduce((previous, range) => {
            return previous + range.length;
        }, 0);
    }

    add(a, b) {
        var _add = (subrange) => {
            var i = 0;
            while (i < this.ranges.length && !subrange.touches(this.ranges[i])) {
                i++;
            }
            var newRanges = this.ranges.slice(0, i);
            while (i < this.ranges.length && subrange.touches(this.ranges[i])) {
                subrange = subrange.add(this.ranges[i]);
                i++;
            }
            newRanges.push(subrange);
            this.ranges = newRanges.concat(this.ranges.slice(i));
            this._update_length();
        }

        if (a instanceof DRange) {
            a.ranges.forEach(_add);
        } else {
            if (b == null) b = a;
            _add(new SubRange(a, b));
        }
        return this;
    }

    subtract(a, b) {
        var _subtract = (subrange) => {
            var i = 0;
            while (i < this.ranges.length && !subrange.overlaps(this.ranges[i])) {
                i++;
            }
            var newRanges = this.ranges.slice(0, i);
            while (i < this.ranges.length && subrange.overlaps(this.ranges[i])) {
                newRanges = newRanges.concat(this.ranges[i].subtract(subrange));
                i++;
            }
            this.ranges = newRanges.concat(this.ranges.slice(i));
            this._update_length();
        };

        if (a instanceof DRange) {
            a.ranges.forEach(_subtract);
        } else {
            if (b == null) b = a;
            _subtract(new SubRange(a, b));
        }
        return this;
    }

    intersect(a, b) {
        var newRanges = [];
        var _intersect = (subrange) => {
            var i = 0;
            while (i < this.ranges.length && !subrange.overlaps(this.ranges[i])) {
                i++;
            }
            while (i < this.ranges.length && subrange.overlaps(this.ranges[i])) {
                var low = Math.max(this.ranges[i].low, subrange.low);
                var high = Math.min(this.ranges[i].high, subrange.high);
                newRanges.push(new SubRange(low, high));
                i++;
            }
        };

        if (a instanceof DRange) {
            a.ranges.forEach(_intersect);
        } else {
            if (b == null) b = a;
            _intersect(new SubRange(a, b));
        }
        this.ranges = newRanges;
        this._update_length();
        return this;
    }

    index(index) {
        var i = 0;
        while (i < this.ranges.length && this.ranges[i].length <= index) {
            index -= this.ranges[i].length;
            i++;
        }
        return this.ranges[i].low + index;
    }

    toString() {
        return '[ ' + this.ranges.join(', ') + ' ]';
    }

    clone() {
        return new DRange(this);
    }

    numbers() {
        return this.ranges.reduce((result, subrange) => {
            var i = subrange.low;
            while (i <= subrange.high) {
                result.push(i);
                i++;
            }
            return result;
        }, []);
    }

    subranges() {
        return this.ranges.map((subrange) => ({
            low: subrange.low,
            high: subrange.high,
            length: 1 + subrange.high - subrange.low
        }));
    }
}

module.exports = DRange;


/***/ }),

/***/ "./node_modules/randexp/lib/randexp.js":
/*!*********************************************!*\
  !*** ./node_modules/randexp/lib/randexp.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ret    = __webpack_require__(/*! ret */ "./node_modules/ret/lib/index.js");
const DRange = __webpack_require__(/*! drange */ "./node_modules/drange/lib/index.js");
const types  = ret.types;


module.exports = class RandExp {
  /**
   * @constructor
   * @param {RegExp|String} regexp
   * @param {String} m
   */
  constructor(regexp, m) {
    this._setDefaults(regexp);
    if (regexp instanceof RegExp) {
      this.ignoreCase = regexp.ignoreCase;
      this.multiline = regexp.multiline;
      regexp = regexp.source;

    } else if (typeof regexp === 'string') {
      this.ignoreCase = m && m.indexOf('i') !== -1;
      this.multiline = m && m.indexOf('m') !== -1;
    } else {
      throw new Error('Expected a regexp or string');
    }

    this.tokens = ret(regexp);
  }


  /**
   * Checks if some custom properties have been set for this regexp.
   *
   * @param {RandExp} randexp
   * @param {RegExp} regexp
   */
  _setDefaults(regexp) {
    // When a repetitional token has its max set to Infinite,
    // randexp won't actually generate a random amount between min and Infinite
    // instead it will see Infinite as min + 100.
    this.max = regexp.max != null ? regexp.max :
      RandExp.prototype.max != null ? RandExp.prototype.max : 100;

    // This allows expanding to include additional characters
    // for instance: RandExp.defaultRange.add(0, 65535);
    this.defaultRange = regexp.defaultRange ?
      regexp.defaultRange : this.defaultRange.clone();

    if (regexp.randInt) {
      this.randInt = regexp.randInt;
    }
  }


  /**
   * Generates the random string.
   *
   * @return {String}
   */
  gen() {
    return this._gen(this.tokens, []);
  }


  /**
   * Generate random string modeled after given tokens.
   *
   * @param {Object} token
   * @param {Array.<String>} groups
   * @return {String}
   */
  _gen(token, groups) {
    var stack, str, n, i, l;

    switch (token.type) {
      case types.ROOT:
      case types.GROUP:
        // Ignore lookaheads for now.
        if (token.followedBy || token.notFollowedBy) { return ''; }

        // Insert placeholder until group string is generated.
        if (token.remember && token.groupNumber === undefined) {
          token.groupNumber = groups.push(null) - 1;
        }

        stack = token.options ?
          this._randSelect(token.options) : token.stack;

        str = '';
        for (i = 0, l = stack.length; i < l; i++) {
          str += this._gen(stack[i], groups);
        }

        if (token.remember) {
          groups[token.groupNumber] = str;
        }
        return str;

      case types.POSITION:
        // Do nothing for now.
        return '';

      case types.SET:
        var expandedSet = this._expand(token);
        if (!expandedSet.length) { return ''; }
        return String.fromCharCode(this._randSelect(expandedSet));

      case types.REPETITION:
        // Randomly generate number between min and max.
        n = this.randInt(token.min,
          token.max === Infinity ? token.min + this.max : token.max);

        str = '';
        for (i = 0; i < n; i++) {
          str += this._gen(token.value, groups);
        }

        return str;

      case types.REFERENCE:
        return groups[token.value - 1] || '';

      case types.CHAR:
        var code = this.ignoreCase && this._randBool() ?
          this._toOtherCase(token.value) : token.value;
        return String.fromCharCode(code);
    }
  }


  /**
   * If code is alphabetic, converts to other case.
   * If not alphabetic, returns back code.
   *
   * @param {Number} code
   * @return {Number}
   */
  _toOtherCase(code) {
    return code + (97 <= code && code <= 122 ? -32 :
      65 <= code && code <= 90  ?  32 : 0);
  }


  /**
   * Randomly returns a true or false value.
   *
   * @return {Boolean}
   */
  _randBool() {
    return !this.randInt(0, 1);
  }


  /**
   * Randomly selects and returns a value from the array.
   *
   * @param {Array.<Object>} arr
   * @return {Object}
   */
  _randSelect(arr) {
    if (arr instanceof DRange) {
      return arr.index(this.randInt(0, arr.length - 1));
    }
    return arr[this.randInt(0, arr.length - 1)];
  }


  /**
   * expands a token to a DiscontinuousRange of characters which has a
   * length and an index function (for random selecting)
   *
   * @param {Object} token
   * @return {DiscontinuousRange}
   */
  _expand(token) {
    if (token.type === ret.types.CHAR) {
      return new DRange(token.value);
    } else if (token.type === ret.types.RANGE) {
      return new DRange(token.from, token.to);
    } else {
      let drange = new DRange();
      for (let i = 0; i < token.set.length; i++) {
        let subrange = this._expand(token.set[i]);
        drange.add(subrange);
        if (this.ignoreCase) {
          for (let j = 0; j < subrange.length; j++) {
            let code = subrange.index(j);
            let otherCaseCode = this._toOtherCase(code);
            if (code !== otherCaseCode) {
              drange.add(otherCaseCode);
            }
          }
        }
      }
      if (token.not) {
        return this.defaultRange.clone().subtract(drange);
      } else {
        return this.defaultRange.clone().intersect(drange);
      }
    }
  }


  /**
   * Randomly generates and returns a number between a and b (inclusive).
   *
   * @param {Number} a
   * @param {Number} b
   * @return {Number}
   */
  randInt(a, b) {
    return a + Math.floor(Math.random() * (1 + b - a));
  }


  /**
   * Default range of characters to generate from.
   */
  get defaultRange() {
    return this._range = this._range || new DRange(32, 126);
  }

  set defaultRange(range) {
    this._range = range;
  }


  /**
   *
   * Enables use of randexp with a shorter call.
   *
   * @param {RegExp|String| regexp}
   * @param {String} m
   * @return {String}
   */
  static randexp(regexp, m) {
    var randexp;
    if(typeof regexp === 'string') {
      regexp = new RegExp(regexp, m);
    }

    if (regexp._randexp === undefined) {
      randexp = new RandExp(regexp, m);
      regexp._randexp = randexp;
    } else {
      randexp = regexp._randexp;
      randexp._setDefaults(regexp);
    }
    return randexp.gen();
  }


  /**
   * Enables sugary /regexp/.gen syntax.
   */
  static sugar() {
    /* eshint freeze:false */
    RegExp.prototype.gen = function() {
      return RandExp.randexp(this);
    };
  }
};


/***/ }),

/***/ "./node_modules/ret/lib/index.js":
/*!***************************************!*\
  !*** ./node_modules/ret/lib/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const util      = __webpack_require__(/*! ./util */ "./node_modules/ret/lib/util.js");
const types     = __webpack_require__(/*! ./types */ "./node_modules/ret/lib/types.js");
const sets      = __webpack_require__(/*! ./sets */ "./node_modules/ret/lib/sets.js");
const positions = __webpack_require__(/*! ./positions */ "./node_modules/ret/lib/positions.js");


module.exports = (regexpStr) => {
  var i = 0, l, c,
    start = { type: types.ROOT, stack: []},

    // Keep track of last clause/group and stack.
    lastGroup = start,
    last = start.stack,
    groupStack = [];


  var repeatErr = (i) => {
    util.error(regexpStr, `Nothing to repeat at column ${i - 1}`);
  };

  // Decode a few escaped characters.
  var str = util.strToChars(regexpStr);
  l = str.length;

  // Iterate through each character in string.
  while (i < l) {
    c = str[i++];

    switch (c) {
      // Handle escaped characters, inclues a few sets.
      case '\\':
        c = str[i++];

        switch (c) {
          case 'b':
            last.push(positions.wordBoundary());
            break;

          case 'B':
            last.push(positions.nonWordBoundary());
            break;

          case 'w':
            last.push(sets.words());
            break;

          case 'W':
            last.push(sets.notWords());
            break;

          case 'd':
            last.push(sets.ints());
            break;

          case 'D':
            last.push(sets.notInts());
            break;

          case 's':
            last.push(sets.whitespace());
            break;

          case 'S':
            last.push(sets.notWhitespace());
            break;

          default:
            // Check if c is integer.
            // In which case it's a reference.
            if (/\d/.test(c)) {
              last.push({ type: types.REFERENCE, value: parseInt(c, 10) });

            // Escaped character.
            } else {
              last.push({ type: types.CHAR, value: c.charCodeAt(0) });
            }
        }

        break;


      // Positionals.
      case '^':
        last.push(positions.begin());
        break;

      case '$':
        last.push(positions.end());
        break;


      // Handle custom sets.
      case '[':
        // Check if this class is 'anti' i.e. [^abc].
        var not;
        if (str[i] === '^') {
          not = true;
          i++;
        } else {
          not = false;
        }

        // Get all the characters in class.
        var classTokens = util.tokenizeClass(str.slice(i), regexpStr);

        // Increase index by length of class.
        i += classTokens[1];
        last.push({
          type: types.SET,
          set: classTokens[0],
          not,
        });

        break;


      // Class of any character except \n.
      case '.':
        last.push(sets.anyChar());
        break;


      // Push group onto stack.
      case '(':
        // Create group.
        var group = {
          type: types.GROUP,
          stack: [],
          remember: true,
        };

        c = str[i];

        // If if this is a special kind of group.
        if (c === '?') {
          c = str[i + 1];
          i += 2;

          // Match if followed by.
          if (c === '=') {
            group.followedBy = true;

          // Match if not followed by.
          } else if (c === '!') {
            group.notFollowedBy = true;

          } else if (c !== ':') {
            util.error(regexpStr,
              `Invalid group, character '${c}'` +
              ` after '?' at column ${i - 1}`);
          }

          group.remember = false;
        }

        // Insert subgroup into current group stack.
        last.push(group);

        // Remember the current group for when the group closes.
        groupStack.push(lastGroup);

        // Make this new group the current group.
        lastGroup = group;
        last = group.stack;
        break;


      // Pop group out of stack.
      case ')':
        if (groupStack.length === 0) {
          util.error(regexpStr, `Unmatched ) at column ${i - 1}`);
        }
        lastGroup = groupStack.pop();

        // Check if this group has a PIPE.
        // To get back the correct last stack.
        last = lastGroup.options ?
          lastGroup.options[lastGroup.options.length - 1] : lastGroup.stack;
        break;


      // Use pipe character to give more choices.
      case '|':
        // Create array where options are if this is the first PIPE
        // in this clause.
        if (!lastGroup.options) {
          lastGroup.options = [lastGroup.stack];
          delete lastGroup.stack;
        }

        // Create a new stack and add to options for rest of clause.
        var stack = [];
        lastGroup.options.push(stack);
        last = stack;
        break;


      // Repetition.
      // For every repetition, remove last element from last stack
      // then insert back a RANGE object.
      // This design is chosen because there could be more than
      // one repetition symbols in a regex i.e. `a?+{2,3}`.
      case '{':
        var rs = /^(\d+)(,(\d+)?)?\}/.exec(str.slice(i)), min, max;
        if (rs !== null) {
          if (last.length === 0) {
            repeatErr(i);
          }
          min = parseInt(rs[1], 10);
          max = rs[2] ? rs[3] ? parseInt(rs[3], 10) : Infinity : min;
          i += rs[0].length;

          last.push({
            type: types.REPETITION,
            min,
            max,
            value: last.pop(),
          });
        } else {
          last.push({
            type: types.CHAR,
            value: 123,
          });
        }
        break;

      case '?':
        if (last.length === 0) {
          repeatErr(i);
        }
        last.push({
          type: types.REPETITION,
          min: 0,
          max: 1,
          value: last.pop(),
        });
        break;

      case '+':
        if (last.length === 0) {
          repeatErr(i);
        }
        last.push({
          type: types.REPETITION,
          min: 1,
          max: Infinity,
          value: last.pop(),
        });
        break;

      case '*':
        if (last.length === 0) {
          repeatErr(i);
        }
        last.push({
          type: types.REPETITION,
          min: 0,
          max: Infinity,
          value: last.pop(),
        });
        break;


      // Default is a character that is not `\[](){}?+*^$`.
      default:
        last.push({
          type: types.CHAR,
          value: c.charCodeAt(0),
        });
    }

  }

  // Check if any groups have not been closed.
  if (groupStack.length !== 0) {
    util.error(regexpStr, 'Unterminated group');
  }

  return start;
};

module.exports.types = types;


/***/ }),

/***/ "./node_modules/ret/lib/positions.js":
/*!*******************************************!*\
  !*** ./node_modules/ret/lib/positions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const types = __webpack_require__(/*! ./types */ "./node_modules/ret/lib/types.js");
exports.wordBoundary = () => ({ type: types.POSITION, value: 'b' });
exports.nonWordBoundary = () => ({ type: types.POSITION, value: 'B' });
exports.begin = () => ({ type: types.POSITION, value: '^' });
exports.end = () => ({ type: types.POSITION, value: '$' });


/***/ }),

/***/ "./node_modules/ret/lib/sets.js":
/*!**************************************!*\
  !*** ./node_modules/ret/lib/sets.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const types = __webpack_require__(/*! ./types */ "./node_modules/ret/lib/types.js");

const INTS = () => [{ type: types.RANGE , from: 48, to: 57 }];

const WORDS = () => {
  return [
    { type: types.CHAR, value: 95 },
    { type: types.RANGE, from: 97, to: 122 },
    { type: types.RANGE, from: 65, to: 90 }
  ].concat(INTS());
};

const WHITESPACE = () => {
  return [
    { type: types.CHAR, value: 9 },
    { type: types.CHAR, value: 10 },
    { type: types.CHAR, value: 11 },
    { type: types.CHAR, value: 12 },
    { type: types.CHAR, value: 13 },
    { type: types.CHAR, value: 32 },
    { type: types.CHAR, value: 160 },
    { type: types.CHAR, value: 5760 },
    { type: types.RANGE, from: 8192, to: 8202 },
    { type: types.CHAR, value: 8232 },
    { type: types.CHAR, value: 8233 },
    { type: types.CHAR, value: 8239 },
    { type: types.CHAR, value: 8287 },
    { type: types.CHAR, value: 12288 },
    { type: types.CHAR, value: 65279 }
  ];
};

const NOTANYCHAR = () => {
  return [
    { type: types.CHAR, value: 10 },
    { type: types.CHAR, value: 13 },
    { type: types.CHAR, value: 8232 },
    { type: types.CHAR, value: 8233 },
  ];
};

// Predefined class objects.
exports.words = () => ({ type: types.SET, set: WORDS(), not: false });
exports.notWords = () => ({ type: types.SET, set: WORDS(), not: true });
exports.ints = () => ({ type: types.SET, set: INTS(), not: false });
exports.notInts = () => ({ type: types.SET, set: INTS(), not: true });
exports.whitespace = () => ({ type: types.SET, set: WHITESPACE(), not: false });
exports.notWhitespace = () => ({ type: types.SET, set: WHITESPACE(), not: true });
exports.anyChar = () => ({ type: types.SET, set: NOTANYCHAR(), not: true });


/***/ }),

/***/ "./node_modules/ret/lib/types.js":
/*!***************************************!*\
  !*** ./node_modules/ret/lib/types.js ***!
  \***************************************/
/***/ ((module) => {

module.exports = {
  ROOT       : 0,
  GROUP      : 1,
  POSITION   : 2,
  SET        : 3,
  RANGE      : 4,
  REPETITION : 5,
  REFERENCE  : 6,
  CHAR       : 7,
};


/***/ }),

/***/ "./node_modules/ret/lib/util.js":
/*!**************************************!*\
  !*** ./node_modules/ret/lib/util.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const types = __webpack_require__(/*! ./types */ "./node_modules/ret/lib/types.js");
const sets  = __webpack_require__(/*! ./sets */ "./node_modules/ret/lib/sets.js");


const CTRL = '@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^ ?';
const SLSH = { '0': 0, 't': 9, 'n': 10, 'v': 11, 'f': 12, 'r': 13 };

/**
 * Finds character representations in str and convert all to
 * their respective characters
 *
 * @param {String} str
 * @return {String}
 */
exports.strToChars = function(str) {
  /* jshint maxlen: false */
  var chars_regex = /(\[\\b\])|(\\)?\\(?:u([A-F0-9]{4})|x([A-F0-9]{2})|(0?[0-7]{2})|c([@A-Z[\\\]^?])|([0tnvfr]))/g;
  str = str.replace(chars_regex, function(s, b, lbs, a16, b16, c8, dctrl, eslsh) {
    if (lbs) {
      return s;
    }

    var code = b ? 8 :
      a16   ? parseInt(a16, 16) :
      b16   ? parseInt(b16, 16) :
      c8    ? parseInt(c8,   8) :
      dctrl ? CTRL.indexOf(dctrl) :
      SLSH[eslsh];

    var c = String.fromCharCode(code);

    // Escape special regex characters.
    if (/[[\]{}^$.|?*+()]/.test(c)) {
      c = '\\' + c;
    }

    return c;
  });

  return str;
};


/**
 * turns class into tokens
 * reads str until it encounters a ] not preceeded by a \
 *
 * @param {String} str
 * @param {String} regexpStr
 * @return {Array.<Array.<Object>, Number>}
 */
exports.tokenizeClass = (str, regexpStr) => {
  /* jshint maxlen: false */
  var tokens = [];
  var regexp = /\\(?:(w)|(d)|(s)|(W)|(D)|(S))|((?:(?:\\)(.)|([^\]\\]))-(?:\\)?([^\]]))|(\])|(?:\\)?([^])/g;
  var rs, c;


  while ((rs = regexp.exec(str)) != null) {
    if (rs[1]) {
      tokens.push(sets.words());

    } else if (rs[2]) {
      tokens.push(sets.ints());

    } else if (rs[3]) {
      tokens.push(sets.whitespace());

    } else if (rs[4]) {
      tokens.push(sets.notWords());

    } else if (rs[5]) {
      tokens.push(sets.notInts());

    } else if (rs[6]) {
      tokens.push(sets.notWhitespace());

    } else if (rs[7]) {
      tokens.push({
        type: types.RANGE,
        from: (rs[8] || rs[9]).charCodeAt(0),
        to: rs[10].charCodeAt(0),
      });

    } else if ((c = rs[12])) {
      tokens.push({
        type: types.CHAR,
        value: c.charCodeAt(0),
      });

    } else {
      return [tokens, regexp.lastIndex];
    }
  }

  exports.error(regexpStr, 'Unterminated character class');
};


/**
 * Shortcut to throw errors.
 *
 * @param {String} regexp
 * @param {String} msg
 */
exports.error = (regexp, msg) => {
  throw new SyntaxError('Invalid regular expression: /' + regexp + '/: ' + msg);
};


/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.min.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.min.js ***!
  \**********************************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,function(){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n,o=arguments[e];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function i(t,e,n){return(i=d()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);o=new(Function.bind.apply(t,o));return n&&l(o,n.prototype),o}).apply(null,arguments)}function p(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t,e,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){t=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=c(t)););return t}(t,e);if(t){e=Object.getOwnPropertyDescriptor(t,e);return e.get?e.get.call(n):e.value}})(t,e,n||t)}function m(t){return t.charAt(0).toUpperCase()+t.slice(1)}function h(e){return Object.keys(e).map(function(t){return e[t]})}function g(t){return Array.prototype.slice.call(t)}function v(t,e){e='"'.concat(t,'" is deprecated and will be removed in the next major release. Please use "').concat(e,'" instead.'),-1===Y.indexOf(e)&&(Y.push(e),W(e))}function b(t){return t&&"function"==typeof t.toPromise}function y(t){return b(t)?t.toPromise():Promise.resolve(t)}function w(t){return t&&Promise.resolve(t)===t}function C(t){return t instanceof Element||"object"===r(t=t)&&t.jquery}function k(){return document.body.querySelector(".".concat($.container))}function e(t){var e=k();return e?e.querySelector(t):null}function t(t){return e(".".concat(t))}function A(){return t($.popup)}function x(){return t($.icon)}function B(){return t($.title)}function P(){return t($.content)}function O(){return t($["html-container"])}function E(){return t($.image)}function n(){return t($["progress-steps"])}function S(){return t($["validation-message"])}function T(){return e(".".concat($.actions," .").concat($.confirm))}function L(){return e(".".concat($.actions," .").concat($.deny))}function q(){return e(".".concat($.loader))}function D(){return e(".".concat($.actions," .").concat($.cancel))}function j(){return t($.actions)}function M(){return t($.header)}function I(){return t($.footer)}function H(){return t($["timer-progress-bar"])}function V(){return t($.close)}function R(){var t=g(A().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(t,e){return t=parseInt(t.getAttribute("tabindex")),(e=parseInt(e.getAttribute("tabindex")))<t?1:t<e?-1:0}),e=g(A().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(function(t){return"-1"!==t.getAttribute("tabindex")});return function(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}(t.concat(e)).filter(function(t){return wt(t)})}function N(){return!G()&&!document.body.classList.contains($["no-backdrop"])}function U(e,t){e.textContent="",t&&(t=(new DOMParser).parseFromString(t,"text/html"),g(t.querySelector("head").childNodes).forEach(function(t){e.appendChild(t)}),g(t.querySelector("body").childNodes).forEach(function(t){e.appendChild(t)}))}function F(t,e){if(e){for(var n=e.split(/\s+/),o=0;o<n.length;o++)if(!t.classList.contains(n[o]))return;return 1}}function _(t,e,n){var o,i;if(i=e,g((o=t).classList).forEach(function(t){-1===h($).indexOf(t)&&-1===h(X).indexOf(t)&&-1===h(i.showClass).indexOf(t)&&o.classList.remove(t)}),e.customClass&&e.customClass[n]){if("string"!=typeof e.customClass[n]&&!e.customClass[n].forEach)return W("Invalid type of customClass.".concat(n,'! Expected string or iterable object, got "').concat(r(e.customClass[n]),'"'));vt(t,e.customClass[n])}}var z="SweetAlert2:",W=function(t){console.warn("".concat(z," ").concat("object"===r(t)?t.join(" "):t))},K=function(t){console.error("".concat(z," ").concat(t))},Y=[],Z=function(t){return"function"==typeof t?t():t},Q=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),J=function(t){var e,n={};for(e in t)n[t[e]]="swal2-"+t[e];return n},$=J(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","header","content","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),X=J(["success","warning","info","question","error"]),G=function(){return document.body.classList.contains($["toast-shown"])},tt={previousBodyPadding:null};function et(t,e){if(!e)return null;switch(e){case"select":case"textarea":case"file":return yt(t,$[e]);case"checkbox":return t.querySelector(".".concat($.checkbox," input"));case"radio":return t.querySelector(".".concat($.radio," input:checked"))||t.querySelector(".".concat($.radio," input:first-child"));case"range":return t.querySelector(".".concat($.range," input"));default:return yt(t,$.input)}}function nt(t){var e;t.focus(),"file"!==t.type&&(e=t.value,t.value="",t.value=e)}function ot(t,e,n){t&&e&&(e="string"==typeof e?e.split(/\s+/).filter(Boolean):e).forEach(function(e){t.forEach?t.forEach(function(t){n?t.classList.add(e):t.classList.remove(e)}):n?t.classList.add(e):t.classList.remove(e)})}function it(t,e,n){(n=n==="".concat(parseInt(n))?parseInt(n):n)||0===parseInt(n)?t.style[e]="number"==typeof n?"".concat(n,"px"):n:t.style.removeProperty(e)}function rt(t){t.style.display=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"flex"}function at(t){t.style.display="none"}function st(t,e,n,o){(e=t.querySelector(e))&&(e.style[n]=o)}function ut(t,e,n){e?rt(t,n):at(t)}function ct(t){return!!(t.scrollHeight>t.clientHeight)}function lt(t){var e=window.getComputedStyle(t),t=parseFloat(e.getPropertyValue("animation-duration")||"0"),e=parseFloat(e.getPropertyValue("transition-duration")||"0");return 0<t||0<e}function dt(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=H();wt(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(function(){n.style.transition="width ".concat(t/1e3,"s linear"),n.style.width="0%"},10))}function pt(){return"undefined"==typeof window||"undefined"==typeof document}function ft(t){Mn.isVisible()&&gt!==t.target.value&&Mn.resetValidationMessage(),gt=t.target.value}function mt(t,e){t instanceof HTMLElement?e.appendChild(t):"object"===r(t)?At(t,e):t&&U(e,t)}function ht(t,e){var n=j(),o=q(),i=T(),r=L(),a=D();e.showConfirmButton||e.showDenyButton||e.showCancelButton||at(n),_(n,e,"actions"),Pt(i,"confirm",e),Pt(r,"deny",e),Pt(a,"cancel",e),function(t,e,n,o){if(!o.buttonsStyling)return bt([t,e,n],$.styled);vt([t,e,n],$.styled),o.confirmButtonColor&&(t.style.backgroundColor=o.confirmButtonColor);o.denyButtonColor&&(e.style.backgroundColor=o.denyButtonColor);o.cancelButtonColor&&(n.style.backgroundColor=o.cancelButtonColor)}(i,r,a,e),e.reverseButtons&&(n.insertBefore(a,o),n.insertBefore(r,o),n.insertBefore(i,o)),U(o,e.loaderHtml),_(o,e,"loader")}var gt,vt=function(t,e){ot(t,e,!0)},bt=function(t,e){ot(t,e,!1)},yt=function(t,e){for(var n=0;n<t.childNodes.length;n++)if(F(t.childNodes[n],e))return t.childNodes[n]},wt=function(t){return!(!t||!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))},Ct='\n <div aria-labelledby="'.concat($.title,'" aria-describedby="').concat($.content,'" class="').concat($.popup,'" tabindex="-1">\n   <div class="').concat($.header,'">\n     <ul class="').concat($["progress-steps"],'"></ul>\n     <div class="').concat($.icon,'"></div>\n     <img class="').concat($.image,'" />\n     <h2 class="').concat($.title,'" id="').concat($.title,'"></h2>\n     <button type="button" class="').concat($.close,'"></button>\n   </div>\n   <div class="').concat($.content,'">\n     <div id="').concat($.content,'" class="').concat($["html-container"],'"></div>\n     <input class="').concat($.input,'" />\n     <input type="file" class="').concat($.file,'" />\n     <div class="').concat($.range,'">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat($.select,'"></select>\n     <div class="').concat($.radio,'"></div>\n     <label for="').concat($.checkbox,'" class="').concat($.checkbox,'">\n       <input type="checkbox" />\n       <span class="').concat($.label,'"></span>\n     </label>\n     <textarea class="').concat($.textarea,'"></textarea>\n     <div class="').concat($["validation-message"],'" id="').concat($["validation-message"],'"></div>\n   </div>\n   <div class="').concat($.actions,'">\n     <div class="').concat($.loader,'"></div>\n     <button type="button" class="').concat($.confirm,'"></button>\n     <button type="button" class="').concat($.deny,'"></button>\n     <button type="button" class="').concat($.cancel,'"></button>\n   </div>\n   <div class="').concat($.footer,'"></div>\n   <div class="').concat($["timer-progress-bar-container"],'">\n     <div class="').concat($["timer-progress-bar"],'"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),kt=function(t){var e,n,o,i,r,a=!!(i=k())&&(i.parentNode.removeChild(i),bt([document.documentElement,document.body],[$["no-backdrop"],$["toast-shown"],$["has-column"]]),!0);pt()?K("SweetAlert2 requires document to initialize"):((r=document.createElement("div")).className=$.container,a&&vt(r,$["no-transition"]),U(r,Ct),(i="string"==typeof(e=t.target)?document.querySelector(e):e).appendChild(r),a=t,(e=A()).setAttribute("role",a.toast?"alert":"dialog"),e.setAttribute("aria-live",a.toast?"polite":"assertive"),a.toast||e.setAttribute("aria-modal","true"),r=i,"rtl"===window.getComputedStyle(r).direction&&vt(k(),$.rtl),t=P(),a=yt(t,$.input),e=yt(t,$.file),n=t.querySelector(".".concat($.range," input")),o=t.querySelector(".".concat($.range," output")),i=yt(t,$.select),r=t.querySelector(".".concat($.checkbox," input")),t=yt(t,$.textarea),a.oninput=ft,e.onchange=ft,i.onchange=ft,r.onchange=ft,t.oninput=ft,n.oninput=function(t){ft(t),o.value=n.value},n.onchange=function(t){ft(t),n.nextSibling.value=n.value})},At=function(t,e){t.jquery?xt(e,t):U(e,t.toString())},xt=function(t,e){if(t.textContent="",0 in e)for(var n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},Bt=function(){if(pt())return!1;var t,e=document.createElement("div"),n={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&void 0!==e.style[t])return n[t];return!1}();function Pt(t,e,n){ut(t,n["show".concat(m(e),"Button")],"inline-block"),U(t,n["".concat(e,"ButtonText")]),t.setAttribute("aria-label",n["".concat(e,"ButtonAriaLabel")]),t.className=$[e],_(t,n,"".concat(e,"Button")),vt(t,n["".concat(e,"ButtonClass")])}function Ot(t,e){var n,o,i=k();i&&(o=i,"string"==typeof(n=e.backdrop)?o.style.background=n:n||vt([document.documentElement,document.body],$["no-backdrop"]),!e.backdrop&&e.allowOutsideClick&&W('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),o=i,(n=e.position)in $?vt(o,$[n]):(W('The "position" parameter is not valid, defaulting to "center"'),vt(o,$.center)),n=i,!(o=e.grow)||"string"!=typeof o||(o="grow-".concat(o))in $&&vt(n,$[o]),_(i,e,"container"),(e=document.body.getAttribute("data-swal2-queue-step"))&&(i.setAttribute("data-queue-step",e),document.body.removeAttribute("data-swal2-queue-step")))}function Et(t,e){t.placeholder&&!e.inputPlaceholder||(t.placeholder=e.inputPlaceholder)}function St(t,e,n){var o,i;n.inputLabel&&(t.id=$.input,o=document.createElement("label"),i=$["input-label"],o.setAttribute("for",t.id),o.className=i,vt(o,n.customClass.inputLabel),o.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",o))}var Tt={promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},Lt=["input","file","range","select","radio","checkbox","textarea"],qt=function(t){if(!It[t.input])return K('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(t.input,'"'));var e=Mt(t.input),n=It[t.input](e,t);rt(n),setTimeout(function(){nt(n)})},Dt=function(t,e){var n=et(P(),t);if(n)for(var o in!function(t){for(var e=0;e<t.attributes.length;e++){var n=t.attributes[e].name;-1===["type","value","style"].indexOf(n)&&t.removeAttribute(n)}}(n),e)"range"===t&&"placeholder"===o||n.setAttribute(o,e[o])},jt=function(t){var e=Mt(t.input);t.customClass&&vt(e,t.customClass.input)},Mt=function(t){t=$[t]||$.input;return yt(P(),t)},It={};It.text=It.email=It.password=It.number=It.tel=It.url=function(t,e){return"string"==typeof e.inputValue||"number"==typeof e.inputValue?t.value=e.inputValue:w(e.inputValue)||W('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(r(e.inputValue),'"')),St(t,t,e),Et(t,e),t.type=e.input,t},It.file=function(t,e){return St(t,t,e),Et(t,e),t},It.range=function(t,e){var n=t.querySelector("input"),o=t.querySelector("output");return n.value=e.inputValue,n.type=e.input,o.value=e.inputValue,St(n,t,e),t},It.select=function(t,e){var n;return t.textContent="",e.inputPlaceholder&&(n=document.createElement("option"),U(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)),St(t,t,e),t},It.radio=function(t){return t.textContent="",t},It.checkbox=function(t,e){var n=et(P(),"checkbox");n.value=1,n.id=$.checkbox,n.checked=Boolean(e.inputValue);n=t.querySelector("span");return U(n,e.inputPlaceholder),t},It.textarea=function(e,t){e.value=t.inputValue,Et(e,t),St(e,e,t);function n(t){return parseInt(window.getComputedStyle(t).paddingLeft)+parseInt(window.getComputedStyle(t).paddingRight)}var o;return"MutationObserver"in window&&(o=parseInt(window.getComputedStyle(A()).width),new MutationObserver(function(){var t=e.offsetWidth+n(A())+n(P());A().style.width=o<t?"".concat(t,"px"):null}).observe(e,{attributes:!0,attributeFilter:["style"]})),e};function Ht(t,e){var o,i,r,n=O();_(n,e,"htmlContainer"),e.html?(mt(e.html,n),rt(n,"block")):e.text?(n.textContent=e.text,rt(n,"block")):at(n),t=t,o=e,i=P(),t=Tt.innerParams.get(t),r=!t||o.input!==t.input,Lt.forEach(function(t){var e=$[t],n=yt(i,e);Dt(t,o.inputAttributes),n.className=e,r&&at(n)}),o.input&&(r&&qt(o),jt(o)),_(P(),e,"content")}function Vt(){return k()&&k().getAttribute("data-queue-step")}function Rt(t,o){var i=n();if(!o.progressSteps||0===o.progressSteps.length)return at(i),0;rt(i),i.textContent="";var r=parseInt(void 0===o.currentProgressStep?Vt():o.currentProgressStep);r>=o.progressSteps.length&&W("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),o.progressSteps.forEach(function(t,e){var n,t=(n=t,t=document.createElement("li"),vt(t,$["progress-step"]),U(t,n),t);i.appendChild(t),e===r&&vt(t,$["active-progress-step"]),e!==o.progressSteps.length-1&&(t=o,e=document.createElement("li"),vt(e,$["progress-step-line"]),t.progressStepsDistance&&(e.style.width=t.progressStepsDistance),i.appendChild(e))})}function Nt(t,e){var n,o=M();_(o,e,"header"),Rt(0,e),n=t,o=e,t=Tt.innerParams.get(n),n=x(),t&&o.icon===t.icon?(Wt(n,o),_t(n,o)):o.icon||o.iconHtml?o.icon&&-1===Object.keys(X).indexOf(o.icon)?(K('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(o.icon,'"')),at(n)):(rt(n),Wt(n,o),_t(n,o),vt(n,o.showClass.icon)):at(n),function(t){var e=E();if(!t.imageUrl)return at(e);rt(e,""),e.setAttribute("src",t.imageUrl),e.setAttribute("alt",t.imageAlt),it(e,"width",t.imageWidth),it(e,"height",t.imageHeight),e.className=$.image,_(e,t,"image")}(e),o=e,n=B(),ut(n,o.title||o.titleText,"block"),o.title&&mt(o.title,n),o.titleText&&(n.innerText=o.titleText),_(n,o,"title"),o=e,e=V(),U(e,o.closeButtonHtml),_(e,o,"closeButton"),ut(e,o.showCloseButton),e.setAttribute("aria-label",o.closeButtonAriaLabel)}function Ut(t,e){var n,o,i;i=e,n=k(),o=A(),i.toast?(it(n,"width",i.width),o.style.width="100%"):it(o,"width",i.width),it(o,"padding",i.padding),i.background&&(o.style.background=i.background),at(S()),Qt(o,i),Ot(0,e),Nt(t,e),Ht(t,e),ht(0,e),i=e,t=I(),ut(t,i.footer),i.footer&&mt(i.footer,t),_(t,i,"footer"),"function"==typeof e.didRender?e.didRender(A()):"function"==typeof e.onRender&&e.onRender(A())}function Ft(){return T()&&T().click()}var _t=function(t,e){for(var n in X)e.icon!==n&&bt(t,X[n]);vt(t,X[e.icon]),Kt(t,e),zt(),_(t,e,"icon")},zt=function(){for(var t=A(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),o=0;o<n.length;o++)n[o].style.backgroundColor=e},Wt=function(t,e){t.textContent="",e.iconHtml?U(t,Yt(e.iconHtml)):"success"===e.icon?U(t,'\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    '):"error"===e.icon?U(t,'\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    '):U(t,Yt({question:"?",warning:"!",info:"i"}[e.icon]))},Kt=function(t,e){if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(var n=0,o=[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"];n<o.length;n++)st(t,o[n],"backgroundColor",e.iconColor);st(t,".swal2-success-ring","borderColor",e.iconColor)}},Yt=function(t){return'<div class="'.concat($["icon-content"],'">').concat(t,"</div>")},Zt=[],Qt=function(t,e){t.className="".concat($.popup," ").concat(wt(t)?e.showClass.popup:""),e.toast?(vt([document.documentElement,document.body],$["toast-shown"]),vt(t,$.toast)):vt(t,$.modal),_(t,e,"popup"),"string"==typeof e.customClass&&vt(t,e.customClass),e.icon&&vt(t,$["icon-".concat(e.icon)])};function Jt(t){(e=A())||Mn.fire();var e=A(),n=j(),o=q();!t&&wt(T())&&(t=T()),rt(n),t&&(at(t),o.setAttribute("data-button-to-replace",t.className)),o.parentNode.insertBefore(o,t),vt([e,n],$.loading),rt(o),e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()}function $t(o){return new Promise(function(t){if(!o)return t();var e=window.scrollX,n=window.scrollY;te.restoreFocusTimeout=setTimeout(function(){te.previousActiveElement&&te.previousActiveElement.focus?(te.previousActiveElement.focus(),te.previousActiveElement=null):document.body&&document.body.focus(),t()},100),void 0!==e&&void 0!==n&&window.scrollTo(e,n)})}function Xt(){if(te.timeout)return function(){var t=H(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";var n=parseInt(window.getComputedStyle(t).width),n=parseInt(e/n*100);t.style.removeProperty("transition"),t.style.width="".concat(n,"%")}(),te.timeout.stop()}function Gt(){if(te.timeout){var t=te.timeout.start();return dt(t),t}}var te={},ee=!1,ne={};function oe(t){for(var e=t.target;e&&e!==document;e=e.parentNode)for(var n in ne){var o=e.getAttribute(n);if(o)return void ne[n].fire({template:o})}}function ie(t){return Object.prototype.hasOwnProperty.call(se,t)}function re(t){return ce[t]}function ae(t){for(var e in t)ie(n=e)||W('Unknown parameter "'.concat(n,'"')),t.toast&&(n=e,-1!==le.indexOf(n)&&W('The parameter "'.concat(n,'" is incompatible with toasts'))),re(e=e)&&v(e,re(e));var n}var se={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,onBeforeOpen:void 0,onOpen:void 0,willOpen:void 0,didOpen:void 0,onRender:void 0,didRender:void 0,onClose:void 0,onAfterClose:void 0,willClose:void 0,didClose:void 0,onDestroy:void 0,didDestroy:void 0,scrollbarPadding:!0},ue=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","onAfterClose","onClose","onDestroy","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],ce={animation:'showClass" and "hideClass',onBeforeOpen:"willOpen",onOpen:"didOpen",onRender:"didRender",onClose:"willClose",onAfterClose:"didClose",onDestroy:"didDestroy"},le=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],de=Object.freeze({isValidParameter:ie,isUpdatableParameter:function(t){return-1!==ue.indexOf(t)},isDeprecatedParameter:re,argsToParams:function(n){var o={};return"object"!==r(n[0])||C(n[0])?["title","html","icon"].forEach(function(t,e){e=n[e];"string"==typeof e||C(e)?o[t]=e:void 0!==e&&K("Unexpected type of ".concat(t,'! Expected "string" or "Element", got ').concat(r(e)))}):u(o,n[0]),o},isVisible:function(){return wt(A())},clickConfirm:Ft,clickDeny:function(){return L()&&L().click()},clickCancel:function(){return D()&&D().click()},getContainer:k,getPopup:A,getTitle:B,getContent:P,getHtmlContainer:O,getImage:E,getIcon:x,getInputLabel:function(){return t($["input-label"])},getCloseButton:V,getActions:j,getConfirmButton:T,getDenyButton:L,getCancelButton:D,getLoader:q,getHeader:M,getFooter:I,getTimerProgressBar:H,getFocusableElements:R,getValidationMessage:S,isLoading:function(){return A().hasAttribute("data-loading")},fire:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return i(this,e)},mixin:function(r){return function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(i,t);var n,o,e=(n=i,o=d(),function(){var t,e=c(n);return p(this,o?(t=c(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))});function i(){return a(this,i),e.apply(this,arguments)}return s(i,[{key:"_main",value:function(t,e){return f(c(i.prototype),"_main",this).call(this,t,u({},r,e))}}]),i}(this)},queue:function(t){v("Swal.queue()","async/await");var r=this;Zt=t;function a(t,e){Zt=[],t(e)}var s=[];return new Promise(function(i){!function e(n,o){n<Zt.length?(document.body.setAttribute("data-swal2-queue-step",n),r.fire(Zt[n]).then(function(t){void 0!==t.value?(s.push(t.value),e(n+1,o)):a(i,{dismiss:t.dismiss})})):a(i,{value:s})}(0)})},getQueueStep:Vt,insertQueueStep:function(t,e){return e&&e<Zt.length?Zt.splice(e,0,t):Zt.push(t)},deleteQueueStep:function(t){void 0!==Zt[t]&&Zt.splice(t,1)},showLoading:Jt,enableLoading:Jt,getTimerLeft:function(){return te.timeout&&te.timeout.getTimerLeft()},stopTimer:Xt,resumeTimer:Gt,toggleTimer:function(){var t=te.timeout;return t&&(t.running?Xt:Gt)()},increaseTimer:function(t){if(te.timeout){t=te.timeout.increase(t);return dt(t,!0),t}},isTimerRunning:function(){return te.timeout&&te.timeout.isRunning()},bindClickHandler:function(){ne[0<arguments.length&&void 0!==arguments[0]?arguments[0]:"data-swal-template"]=this,ee||(document.body.addEventListener("click",oe),ee=!0)}});function pe(){var t,e;Tt.innerParams.get(this)&&(t=Tt.domCache.get(this),at(t.loader),(e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"))).length?rt(e[0],"inline-block"):wt(T())||wt(L())||wt(D())||at(t.actions),bt([t.popup,t.actions],$.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.denyButton.disabled=!1,t.cancelButton.disabled=!1)}function fe(){null===tt.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(tt.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(tt.previousBodyPadding+function(){var t=document.createElement("div");t.className=$["scrollbar-measure"],document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e}(),"px"))}function me(){return!!window.MSInputMethodContext&&!!document.documentMode}function he(){var t=k(),e=A();t.style.removeProperty("align-items"),e.offsetTop<0&&(t.style.alignItems="flex-start")}var ge=function(){navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i)||A().scrollHeight>window.innerHeight-44&&(k().style.paddingBottom="".concat(44,"px"))},ve=function(){var e,t=k();t.ontouchstart=function(t){e=be(t)},t.ontouchmove=function(t){e&&(t.preventDefault(),t.stopPropagation())}},be=function(t){var e=t.target,n=k();return!ye(t)&&!we(t)&&(e===n||!(ct(n)||"INPUT"===e.tagName||ct(P())&&P().contains(e)))},ye=function(t){return t.touches&&t.touches.length&&"stylus"===t.touches[0].touchType},we=function(t){return t.touches&&1<t.touches.length},Ce={swalPromiseResolve:new WeakMap};function ke(t,e,n,o){G()?Ee(t,o):($t(n).then(function(){return Ee(t,o)}),te.keydownTarget.removeEventListener("keydown",te.keydownHandler,{capture:te.keydownListenerCapture}),te.keydownHandlerAdded=!1),e.parentNode&&!document.body.getAttribute("data-swal2-queue-step")&&e.parentNode.removeChild(e),N()&&(null!==tt.previousBodyPadding&&(document.body.style.paddingRight="".concat(tt.previousBodyPadding,"px"),tt.previousBodyPadding=null),F(document.body,$.iosfix)&&(e=parseInt(document.body.style.top,10),bt(document.body,$.iosfix),document.body.style.top="",document.body.scrollTop=-1*e),"undefined"!=typeof window&&me()&&window.removeEventListener("resize",he),g(document.body.children).forEach(function(t){t.hasAttribute("data-previous-aria-hidden")?(t.setAttribute("aria-hidden",t.getAttribute("data-previous-aria-hidden")),t.removeAttribute("data-previous-aria-hidden")):t.removeAttribute("aria-hidden")})),bt([document.documentElement,document.body],[$.shown,$["height-auto"],$["no-backdrop"],$["toast-shown"]])}function Ae(t){var e,n,o,i=A();i&&(t=xe(t),(e=Tt.innerParams.get(this))&&!F(i,e.hideClass.popup)&&(n=Ce.swalPromiseResolve.get(this),bt(i,e.showClass.popup),vt(i,e.hideClass.popup),o=k(),bt(o,e.showClass.backdrop),vt(o,e.hideClass.backdrop),Be(this,i,e),n(t)))}function xe(t){return void 0===t?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:u({isConfirmed:!1,isDenied:!1,isDismissed:!1},t)}function Be(t,e,n){var o=k(),i=Bt&&lt(e),r=n.onClose,a=n.onAfterClose,s=n.willClose,u=n.didClose;Pe(e,s,r),i?Oe(t,e,o,n.returnFocus,u||a):ke(t,o,n.returnFocus,u||a)}var Pe=function(t,e,n){null!==e&&"function"==typeof e?e(t):null!==n&&"function"==typeof n&&n(t)},Oe=function(t,e,n,o,i){te.swalCloseEventFinishedCallback=ke.bind(null,t,n,o,i),e.addEventListener(Bt,function(t){t.target===e&&(te.swalCloseEventFinishedCallback(),delete te.swalCloseEventFinishedCallback)})},Ee=function(t,e){setTimeout(function(){"function"==typeof e&&e(),t._destroy()})};function Se(t,e,n){var o=Tt.domCache.get(t);e.forEach(function(t){o[t].disabled=n})}function Te(t,e){if(!t)return!1;if("radio"===t.type)for(var n=t.parentNode.parentNode.querySelectorAll("input"),o=0;o<n.length;o++)n[o].disabled=e;else t.disabled=e}var Le=function(){function n(t,e){a(this,n),this.callback=t,this.remaining=e,this.running=!1,this.start()}return s(n,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date-this.started),this.remaining}},{key:"increase",value:function(t){var e=this.running;return e&&this.stop(),this.remaining+=t,e&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}]),n}(),qe={email:function(t,e){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address")},url:function(t,e){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")}};function De(t){var e,n;(e=t).inputValidator||Object.keys(qe).forEach(function(t){e.input===t&&(e.inputValidator=qe[t])}),t.showLoaderOnConfirm&&!t.preConfirm&&W("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),t.animation=Z(t.animation),(n=t).target&&("string"!=typeof n.target||document.querySelector(n.target))&&("string"==typeof n.target||n.target.appendChild)||(W('Target parameter is not valid, defaulting to "body"'),n.target="body"),"string"==typeof t.title&&(t.title=t.title.split("\n").join("<br />")),kt(t)}function je(t){var e=k(),n=A();"function"==typeof t.willOpen?t.willOpen(n):"function"==typeof t.onBeforeOpen&&t.onBeforeOpen(n);var o=window.getComputedStyle(document.body).overflowY;Je(e,n,t),setTimeout(function(){Ze(e,n)},10),N()&&(Qe(e,t.scrollbarPadding,o),g(document.body.children).forEach(function(t){t===k()||function(t,e){if("function"==typeof t.contains)return t.contains(e)}(t,k())||(t.hasAttribute("aria-hidden")&&t.setAttribute("data-previous-aria-hidden",t.getAttribute("aria-hidden")),t.setAttribute("aria-hidden","true"))})),G()||te.previousActiveElement||(te.previousActiveElement=document.activeElement),Ye(n,t),bt(e,$["no-transition"])}function Me(t){var e=A();t.target===e&&(t=k(),e.removeEventListener(Bt,Me),t.style.overflowY="auto")}function Ie(t,e){t.closePopup({isConfirmed:!0,value:e})}function He(t,e,n){var o=R();if(o.length)return(e+=n)===o.length?e=0:-1===e&&(e=o.length-1),o[e].focus();A().focus()}var Ve=["swal-title","swal-html","swal-footer"],Re=function(t){var n={};return g(t.querySelectorAll("swal-param")).forEach(function(t){Ke(t,["name","value"]);var e=t.getAttribute("name"),t=t.getAttribute("value");"boolean"==typeof se[e]&&"false"===t&&(t=!1),"object"===r(se[e])&&(t=JSON.parse(t)),n[e]=t}),n},Ne=function(t){var n={};return g(t.querySelectorAll("swal-button")).forEach(function(t){Ke(t,["type","color","aria-label"]);var e=t.getAttribute("type");n["".concat(e,"ButtonText")]=t.innerHTML,n["show".concat(m(e),"Button")]=!0,t.hasAttribute("color")&&(n["".concat(e,"ButtonColor")]=t.getAttribute("color")),t.hasAttribute("aria-label")&&(n["".concat(e,"ButtonAriaLabel")]=t.getAttribute("aria-label"))}),n},Ue=function(t){var e={},t=t.querySelector("swal-image");return t&&(Ke(t,["src","width","height","alt"]),t.hasAttribute("src")&&(e.imageUrl=t.getAttribute("src")),t.hasAttribute("width")&&(e.imageWidth=t.getAttribute("width")),t.hasAttribute("height")&&(e.imageHeight=t.getAttribute("height")),t.hasAttribute("alt")&&(e.imageAlt=t.getAttribute("alt"))),e},Fe=function(t){var e={},t=t.querySelector("swal-icon");return t&&(Ke(t,["type","color"]),t.hasAttribute("type")&&(e.icon=t.getAttribute("type")),t.hasAttribute("color")&&(e.iconColor=t.getAttribute("color")),e.iconHtml=t.innerHTML),e},_e=function(t){var n={},e=t.querySelector("swal-input");e&&(Ke(e,["type","label","placeholder","value"]),n.input=e.getAttribute("type")||"text",e.hasAttribute("label")&&(n.inputLabel=e.getAttribute("label")),e.hasAttribute("placeholder")&&(n.inputPlaceholder=e.getAttribute("placeholder")),e.hasAttribute("value")&&(n.inputValue=e.getAttribute("value")));t=t.querySelectorAll("swal-input-option");return t.length&&(n.inputOptions={},g(t).forEach(function(t){Ke(t,["value"]);var e=t.getAttribute("value"),t=t.innerHTML;n.inputOptions[e]=t})),n},ze=function(t,e){var n,o={};for(n in e){var i=e[n],r=t.querySelector(i);r&&(Ke(r,[]),o[i.replace(/^swal-/,"")]=r.innerHTML.trim())}return o},We=function(e){var n=Ve.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);g(e.querySelectorAll("*")).forEach(function(t){t.parentNode===e&&(t=t.tagName.toLowerCase(),-1===n.indexOf(t)&&W("Unrecognized element <".concat(t,">")))})},Ke=function(e,n){g(e.attributes).forEach(function(t){-1===n.indexOf(t.name)&&W(['Unrecognized attribute "'.concat(t.name,'" on <').concat(e.tagName.toLowerCase(),">."),"".concat(n.length?"Allowed attributes are: ".concat(n.join(", ")):"To set the value, use HTML within the element.")])})},Ye=function(t,e){"function"==typeof e.didOpen?setTimeout(function(){return e.didOpen(t)}):"function"==typeof e.onOpen&&setTimeout(function(){return e.onOpen(t)})},Ze=function(t,e){Bt&&lt(e)?(t.style.overflowY="hidden",e.addEventListener(Bt,Me)):t.style.overflowY="auto"},Qe=function(t,e,n){var o;(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&1<navigator.maxTouchPoints)&&!F(document.body,$.iosfix)&&(o=document.body.scrollTop,document.body.style.top="".concat(-1*o,"px"),vt(document.body,$.iosfix),ve(),ge()),"undefined"!=typeof window&&me()&&(he(),window.addEventListener("resize",he)),e&&"hidden"!==n&&fe(),setTimeout(function(){t.scrollTop=0})},Je=function(t,e,n){vt(t,n.showClass.backdrop),e.style.setProperty("opacity","0","important"),rt(e),setTimeout(function(){vt(e,n.showClass.popup),e.style.removeProperty("opacity")},10),vt([document.documentElement,document.body],$.shown),n.heightAuto&&n.backdrop&&!n.toast&&vt([document.documentElement,document.body],$["height-auto"])},$e=function(t){return t.checked?1:0},Xe=function(t){return t.checked?t.value:null},Ge=function(t){return t.files.length?null!==t.getAttribute("multiple")?t.files:t.files[0]:null},tn=function(e,n){function o(t){return nn[n.input](i,on(t),n)}var i=P();b(n.inputOptions)||w(n.inputOptions)?(Jt(T()),y(n.inputOptions).then(function(t){e.hideLoading(),o(t)})):"object"===r(n.inputOptions)?o(n.inputOptions):K("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(r(n.inputOptions)))},en=function(e,n){var o=e.getInput();at(o),y(n.inputValue).then(function(t){o.value="number"===n.input?parseFloat(t)||0:"".concat(t),rt(o),o.focus(),e.hideLoading()}).catch(function(t){K("Error in inputValue promise: ".concat(t)),o.value="",rt(o),o.focus(),e.hideLoading()})},nn={select:function(t,e,i){function o(t,e,n){var o=document.createElement("option");o.value=n,U(o,e),o.selected=rn(n,i.inputValue),t.appendChild(o)}var r=yt(t,$.select);e.forEach(function(t){var e,n=t[0],t=t[1];Array.isArray(t)?((e=document.createElement("optgroup")).label=n,e.disabled=!1,r.appendChild(e),t.forEach(function(t){return o(e,t[1],t[0])})):o(r,t,n)}),r.focus()},radio:function(t,e,i){var r=yt(t,$.radio);e.forEach(function(t){var e=t[0],n=t[1],o=document.createElement("input"),t=document.createElement("label");o.type="radio",o.name=$.radio,o.value=e,rn(e,i.inputValue)&&(o.checked=!0);e=document.createElement("span");U(e,n),e.className=$.label,t.appendChild(o),t.appendChild(e),r.appendChild(t)});e=r.querySelectorAll("input");e.length&&e[0].focus()}},on=function n(o){var i=[];return"undefined"!=typeof Map&&o instanceof Map?o.forEach(function(t,e){"object"===r(t)&&(t=n(t)),i.push([e,t])}):Object.keys(o).forEach(function(t){var e=o[t];"object"===r(e)&&(e=n(e)),i.push([t,e])}),i},rn=function(t,e){return e&&e.toString()===t.toString()},an=function(t,e,n){var o=function(t,e){var n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return $e(n);case"radio":return Xe(n);case"file":return Ge(n);default:return e.inputAutoTrim?n.value.trim():n.value}}(t,e);e.inputValidator?sn(t,e,o):t.getInput().checkValidity()?("deny"===n?un:cn)(t,e,o):(t.enableButtons(),t.showValidationMessage(e.validationMessage))},sn=function(e,n,o){e.disableInput(),Promise.resolve().then(function(){return y(n.inputValidator(o,n.validationMessage))}).then(function(t){e.enableButtons(),e.enableInput(),t?e.showValidationMessage(t):cn(e,n,o)})},un=function(e,t,n){t.showLoaderOnDeny&&Jt(L()),t.preDeny?Promise.resolve().then(function(){return y(t.preDeny(n,t.validationMessage))}).then(function(t){!1===t?e.hideLoading():e.closePopup({isDenied:!0,value:void 0===t?n:t})}):e.closePopup({isDenied:!0,value:n})},cn=function(e,t,n){t.showLoaderOnConfirm&&Jt(),t.preConfirm?(e.resetValidationMessage(),Promise.resolve().then(function(){return y(t.preConfirm(n,t.validationMessage))}).then(function(t){wt(S())||!1===t?e.hideLoading():Ie(e,void 0===t?n:t)})):Ie(e,n)},ln=["ArrowRight","ArrowDown","Right","Down"],dn=["ArrowLeft","ArrowUp","Left","Up"],pn=["Escape","Esc"],fn=function(t,e,n){var o=Tt.innerParams.get(t);o&&(o.stopKeydownPropagation&&e.stopPropagation(),"Enter"===e.key?mn(t,e,o):"Tab"===e.key?hn(e,o):-1!==[].concat(ln,dn).indexOf(e.key)?gn(e.key):-1!==pn.indexOf(e.key)&&vn(e,o,n))},mn=function(t,e,n){e.isComposing||e.target&&t.getInput()&&e.target.outerHTML===t.getInput().outerHTML&&-1===["textarea","file"].indexOf(n.input)&&(Ft(),e.preventDefault())},hn=function(t,e){for(var n=t.target,o=R(),i=-1,r=0;r<o.length;r++)if(n===o[r]){i=r;break}t.shiftKey?He(0,i,-1):He(0,i,1),t.stopPropagation(),t.preventDefault()},gn=function(t){-1!==[T(),L(),D()].indexOf(document.activeElement)&&(t=-1!==ln.indexOf(t)?"nextElementSibling":"previousElementSibling",(t=document.activeElement[t])&&t.focus())},vn=function(t,e,n){Z(e.allowEscapeKey)&&(t.preventDefault(),n(Q.esc))},bn=function(e,t,n){t.popup.onclick=function(){var t=Tt.innerParams.get(e);t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton||t.timer||t.input||n(Q.close)}},yn=!1,wn=function(e){e.popup.onmousedown=function(){e.container.onmouseup=function(t){e.container.onmouseup=void 0,t.target===e.container&&(yn=!0)}}},Cn=function(e){e.container.onmousedown=function(){e.popup.onmouseup=function(t){e.popup.onmouseup=void 0,t.target!==e.popup&&!e.popup.contains(t.target)||(yn=!0)}}},kn=function(n,o,i){o.container.onclick=function(t){var e=Tt.innerParams.get(n);yn?yn=!1:t.target===o.container&&Z(e.allowOutsideClick)&&i(Q.backdrop)}};function An(t,e){var n=function(t){t="string"==typeof t.template?document.querySelector(t.template):t.template;if(!t)return{};t=t.content||t;return We(t),u(Re(t),Ne(t),Ue(t),Fe(t),_e(t),ze(t,Ve))}(t);return(n=u({},se,e,n,t)).showClass=u({},se.showClass,n.showClass),n.hideClass=u({},se.hideClass,n.hideClass),!1===t.animation&&(n.showClass={popup:"swal2-noanimation",backdrop:"swal2-noanimation"},n.hideClass={}),n}function xn(a,s,u){return new Promise(function(t){function e(t){a.closePopup({isDismissed:!0,dismiss:t})}var n,o,i,r;Ce.swalPromiseResolve.set(a,t),s.confirmButton.onclick=function(){return e=u,(t=a).disableButtons(),void(e.input?an(t,e,"confirm"):cn(t,e,!0));var t,e},s.denyButton.onclick=function(){return e=u,(t=a).disableButtons(),void(e.returnInputValueOnDeny?an(t,e,"deny"):un(t,e,!1));var t,e},s.cancelButton.onclick=function(){return t=e,a.disableButtons(),void t(Q.cancel);var t},s.closeButton.onclick=function(){return e(Q.close)},n=a,r=s,t=e,Tt.innerParams.get(n).toast?bn(n,r,t):(wn(r),Cn(r),kn(n,r,t)),o=a,r=u,i=e,(t=te).keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1),r.toast||(t.keydownHandler=function(t){return fn(o,t,i)},t.keydownTarget=r.keydownListenerCapture?window:A(),t.keydownListenerCapture=r.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0),r=a,"select"===(t=u).input||"radio"===t.input?tn(r,t):-1!==["text","email","number","tel","textarea"].indexOf(t.input)&&(b(t.inputValue)||w(t.inputValue))&&en(r,t),je(u),Pn(te,u,e),On(s,u),setTimeout(function(){s.container.scrollTop=0})})}function Bn(t){var e={popup:A(),container:k(),content:P(),actions:j(),confirmButton:T(),denyButton:L(),cancelButton:D(),loader:q(),closeButton:V(),validationMessage:S(),progressSteps:n()};return Tt.domCache.set(t,e),e}var Pn=function(t,e,n){var o=H();at(o),e.timer&&(t.timeout=new Le(function(){n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(rt(o),setTimeout(function(){t.timeout&&t.timeout.running&&dt(e.timer)})))},On=function(t,e){if(!e.toast)return Z(e.allowEnterKey)?void(En(t,e)||He(0,-1,1)):Sn()},En=function(t,e){return e.focusDeny&&wt(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&wt(t.cancelButton)?(t.cancelButton.focus(),!0):!(!e.focusConfirm||!wt(t.confirmButton))&&(t.confirmButton.focus(),!0)},Sn=function(){document.activeElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()};function Tn(t){"function"==typeof t.didDestroy?t.didDestroy():"function"==typeof t.onDestroy&&t.onDestroy()}function Ln(t){delete t.params,delete te.keydownHandler,delete te.keydownTarget,Dn(Tt),Dn(Ce)}var qn,Dn=function(t){for(var e in t)t[e]=new WeakMap},J=Object.freeze({hideLoading:pe,disableLoading:pe,getInput:function(t){var e=Tt.innerParams.get(t||this);return(t=Tt.domCache.get(t||this))?et(t.content,e.input):null},close:Ae,closePopup:Ae,closeModal:Ae,closeToast:Ae,enableButtons:function(){Se(this,["confirmButton","denyButton","cancelButton"],!1)},disableButtons:function(){Se(this,["confirmButton","denyButton","cancelButton"],!0)},enableInput:function(){return Te(this.getInput(),!1)},disableInput:function(){return Te(this.getInput(),!0)},showValidationMessage:function(t){var e=Tt.domCache.get(this),n=Tt.innerParams.get(this);U(e.validationMessage,t),e.validationMessage.className=$["validation-message"],n.customClass&&n.customClass.validationMessage&&vt(e.validationMessage,n.customClass.validationMessage),rt(e.validationMessage),(e=this.getInput())&&(e.setAttribute("aria-invalid",!0),e.setAttribute("aria-describedBy",$["validation-message"]),nt(e),vt(e,$.inputerror))},resetValidationMessage:function(){var t=Tt.domCache.get(this);t.validationMessage&&at(t.validationMessage),(t=this.getInput())&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedBy"),bt(t,$.inputerror))},getProgressSteps:function(){return Tt.domCache.get(this).progressSteps},_main:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return ae(u({},e,t)),te.currentInstance&&te.currentInstance._destroy(),te.currentInstance=this,De(t=An(t,e)),Object.freeze(t),te.timeout&&(te.timeout.stop(),delete te.timeout),clearTimeout(te.restoreFocusTimeout),e=Bn(this),Ut(this,t),Tt.innerParams.set(this,t),xn(this,e,t)},update:function(e){var t=A(),n=Tt.innerParams.get(this);if(!t||F(t,n.hideClass.popup))return W("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");var o={};Object.keys(e).forEach(function(t){Mn.isUpdatableParameter(t)?o[t]=e[t]:W('Invalid parameter to update: "'.concat(t,'". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md'))}),n=u({},n,o),Ut(this,n),Tt.innerParams.set(this,n),Object.defineProperties(this,{params:{value:u({},this.params,e),writable:!1,enumerable:!0}})},_destroy:function(){var t=Tt.domCache.get(this),e=Tt.innerParams.get(this);e&&(t.popup&&te.swalCloseEventFinishedCallback&&(te.swalCloseEventFinishedCallback(),delete te.swalCloseEventFinishedCallback),te.deferDisposalTimer&&(clearTimeout(te.deferDisposalTimer),delete te.deferDisposalTimer),Tn(e),Ln(this))}}),jn=function(){function i(){if(a(this,i),"undefined"!=typeof window){"undefined"==typeof Promise&&K("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"),qn=this;for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:o,writable:!1,enumerable:!0,configurable:!0}});o=this._main(this.params);Tt.promise.set(this,o)}}return s(i,[{key:"then",value:function(t){return Tt.promise.get(this).then(t)}},{key:"finally",value:function(t){return Tt.promise.get(this).finally(t)}}]),i}();u(jn.prototype,J),u(jn,de),Object.keys(J).forEach(function(t){jn[t]=function(){if(qn)return qn[t].apply(qn,arguments)}}),jn.DismissReason=Q,jn.version="10.16.9";var Mn=jn;return Mn.default=Mn}),void 0!==this&&this.Sweetalert2&&(this.swal=this.sweetAlert=this.Swal=this.SweetAlert=this.Sweetalert2);

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************************************!*\
  !*** ./src/modules/string-generator/scripts.js ***!
  \*************************************************/
// RandExp
window.RandExp = __webpack_require__(/*! node_modules/randexp */ "./node_modules/randexp/lib/randexp.js");

// Utilities
__webpack_require__(/*! ../../js/util/copy-to-clipboard.js */ "./src/js/util/copy-to-clipboard.js");

// Actual Scripts
__webpack_require__(/*! ./index.js */ "./src/modules/string-generator/index.js");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNqTEEsZUFBZSxtQkFBTyxDQUFDLDRDQUFLO0FBQzVCLGVBQWUsbUJBQU8sQ0FBQyxrREFBUTtBQUMvQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxlQUFlO0FBQzVCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0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aEQ7QUFDQUEsbUJBQU8sQ0FBQyw4RUFBb0MsQ0FBQzs7QUFFN0M7QUFDQUEsbUJBQU8sQ0FBQywyREFBWSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZW5lcmF0b3JzLy4vc3JjL2pzL3V0aWwvY29weS10by1jbGlwYm9hcmQuanMiLCJ3ZWJwYWNrOi8vZ2VuZXJhdG9ycy8uL3NyYy9qcy91dGlsL3N3YWwtZmxhc2gvc3dhbC1mbGFzaC5tb2QuanMiLCJ3ZWJwYWNrOi8vZ2VuZXJhdG9ycy8uL3NyYy9qcy91dGlsL3VuaXF1ZS1hcnJheS91bmlxdWUtYXJyYXkubW9kLmpzIiwid2VicGFjazovL2dlbmVyYXRvcnMvLi9zcmMvanMvdXRpbC92YWxpZGF0b3IvTWVzc2FnZUJhZy5qcyIsIndlYnBhY2s6Ly9nZW5lcmF0b3JzLy4vc3JjL2pzL3V0aWwvdmFsaWRhdG9yL1J1bGVzLmpzIiwid2VicGFjazovL2dlbmVyYXRvcnMvLi9zcmMvanMvdXRpbC92YWxpZGF0b3IvVmFsaWRhdG9yLmpzIiwid2VicGFjazovL2dlbmVyYXRvcnMvLi9zcmMvbW9kdWxlcy9zdHJpbmctZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL2dlbmVyYXRvcnMvLi9ub2RlX21vZHVsZXMvZHJhbmdlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9nZW5lcmF0b3JzLy4vbm9kZV9tb2R1bGVzL3JhbmRleHAvbGliL3JhbmRleHAuanMiLCJ3ZWJwYWNrOi8vZ2VuZXJhdG9ycy8uL25vZGVfbW9kdWxlcy9yZXQvbGliL2luZGV4LmpzIiwid2VicGFjazovL2dlbmVyYXRvcnMvLi9ub2RlX21vZHVsZXMvcmV0L2xpYi9wb3NpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZ2VuZXJhdG9ycy8uL25vZGVfbW9kdWxlcy9yZXQvbGliL3NldHMuanMiLCJ3ZWJwYWNrOi8vZ2VuZXJhdG9ycy8uL25vZGVfbW9kdWxlcy9yZXQvbGliL3R5cGVzLmpzIiwid2VicGFjazovL2dlbmVyYXRvcnMvLi9ub2RlX21vZHVsZXMvcmV0L2xpYi91dGlsLmpzIiwid2VicGFjazovL2dlbmVyYXRvcnMvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvZGlzdC9zd2VldGFsZXJ0Mi5taW4uanMiLCJ3ZWJwYWNrOi8vZ2VuZXJhdG9ycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nZW5lcmF0b3JzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nZW5lcmF0b3JzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2VuZXJhdG9ycy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dlbmVyYXRvcnMvLi9zcmMvbW9kdWxlcy9zdHJpbmctZ2VuZXJhdG9yL3NjcmlwdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaWYgKCF3aW5kb3cuU3dhbClcclxuXHR3aW5kb3cuU3dhbCA9IHJlcXVpcmUoXCJub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvZGlzdC9zd2VldGFsZXJ0Mi5taW4uanNcIik7XHJcblxyXG4kKCgpID0+IHtcclxuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCBgW2RhdGEtY29weS10YXJnZXRdLCBbZGF0YS1jb3B5LXRleHRdLCBbZGF0YS1jb3B5XWAsIChlKSA9PiB7XHJcblx0XHRsZXQgZWxlbWVudCA9IGUuY3VycmVudFRhcmdldDtcclxuXHJcblx0XHRsZXQgdGVtcCA9ICQoXCI8aW5wdXQ+XCIpO1xyXG5cdFx0JChcImJvZHlcIikuYXBwZW5kKHRlbXApO1xyXG5cclxuXHRcdGxldCB0ZXh0VG9Db3B5O1xyXG5cdFx0aWYgKHR5cGVvZiAkKGVsZW1lbnQpLmF0dHIoJ2RhdGEtY29weS10YXJnZXQnKSAhPSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRpZiAoJCgkKGVsZW1lbnQpLmF0dHIoJ2RhdGEtY29weS10YXJnZXQnKSkudmFsKCkubGVuZ3RoID4gMClcclxuXHRcdFx0XHR0ZXh0VG9Db3B5ID0gJCgkKGVsZW1lbnQpLmF0dHIoJ2RhdGEtY29weS10YXJnZXQnKSkudmFsKCk7XHJcblx0XHRcdGVsc2UgaWYgKCQoJChlbGVtZW50KS5hdHRyKCdkYXRhLWNvcHktdGFyZ2V0JykpLnRleHQoKS5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHRleHRUb0NvcHkgPSAkKCQoZWxlbWVudCkuYXR0cignZGF0YS1jb3B5LXRhcmdldCcpKS50ZXh0KCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh0eXBlb2YgJChlbGVtZW50KS5hdHRyKCdkYXRhLWNvcHktdGV4dCcpICE9ICd1bmRlZmluZWQnKVxyXG5cdFx0XHR0ZXh0VG9Db3B5ID0gJChlbGVtZW50KS5hdHRyKCdkYXRhLWNvcHktdGV4dCcpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0ZXh0VG9Db3B5ID0gJChlbGVtZW50KS52YWwoKTtcclxuXHJcblx0XHR0ZW1wLnZhbCh0ZXh0VG9Db3B5KS50cmlnZ2VyKCdzZWxlY3QnKTtcclxuXHRcdGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuXHRcdHRlbXAucmVtb3ZlKCk7XHJcblxyXG5cdFx0U3dhbC5maXJlKHtcclxuXHRcdFx0dGl0bGU6IGBUZXh0IGNvcGllZGAsXHJcblx0XHRcdHBvc2l0aW9uOiBgdG9wLXJpZ2h0YCxcclxuXHRcdFx0c2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG5cdFx0XHR0b2FzdDogdHJ1ZSxcclxuXHRcdFx0dGltZXI6IDM3NTAsXHJcblx0XHRcdGJhY2tncm91bmQ6IGAjMjhhNzQ1YCxcclxuXHRcdFx0Y3VzdG9tQ2xhc3M6IHtcclxuXHRcdFx0XHR0aXRsZTogYHRleHQtd2hpdGVgLFxyXG5cdFx0XHRcdHBvcHVwOiBgcHgtMGBcclxuXHRcdFx0fSxcclxuXHRcdFx0d2lkdGg6IDE1MCxcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dhbEZsYXNoIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdGlmICh0aGlzIGluc3RhbmNlb2YgU3dhbEZsYXNoKVxyXG5cdFx0XHR0aHJvdyBFcnJvcignU3dhbEZsYXNoIGlzIGEgc3RhdGljIGNsYXNzIGFuZCBjYW5ub3QgYmUgaW5zdGFudGlhdGVkJyk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZXJyb3IodGl0bGUsIG1zZyA9IHVuZGVmaW5lZCwgaGFzX2ljb24gPSB1bmRlZmluZWQsIHRvYXN0ID0gdW5kZWZpbmVkLCBwb3MgPSB1bmRlZmluZWQsIGhhc190aW1lciA9IHVuZGVmaW5lZCwgZHVyYXRpb24gPSB1bmRlZmluZWQpIHtcclxuXHRcdFN3YWxGbGFzaC4jc2VuZEV2ZW50KGBmbGFzaF9lcnJvcmAsIHtcclxuXHRcdFx0Zmxhc2hfZXJyb3I6IHRpdGxlLFxyXG5cdFx0XHRtZXNzYWdlOiBtc2csXHJcblx0XHRcdGhhc19pY29uOiBoYXNfaWNvbixcclxuXHRcdFx0aXNfdG9hc3Q6IHRvYXN0LFxyXG5cdFx0XHRwb3NpdGlvbjogcG9zLFxyXG5cdFx0XHRoYXNfdGltZXI6IGhhc190aW1lcixcclxuXHRcdFx0ZHVyYXRpb246IGR1cmF0aW9uXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBpbmZvKHRpdGxlLCBtc2cgPSB1bmRlZmluZWQsIGhhc19pY29uID0gdW5kZWZpbmVkLCB0b2FzdCA9IHVuZGVmaW5lZCwgcG9zID0gdW5kZWZpbmVkLCBoYXNfdGltZXIgPSB1bmRlZmluZWQsIGR1cmF0aW9uID0gdW5kZWZpbmVkKSB7XHJcblx0XHRTd2FsRmxhc2guI3NlbmRFdmVudChgZmxhc2hfaW5mb2AsIHtcclxuXHRcdFx0Zmxhc2hfaW5mbzogdGl0bGUsXHJcblx0XHRcdG1lc3NhZ2U6IG1zZyxcclxuXHRcdFx0aGFzX2ljb246IGhhc19pY29uLFxyXG5cdFx0XHRpc190b2FzdDogdG9hc3QsXHJcblx0XHRcdHBvc2l0aW9uOiBwb3MsXHJcblx0XHRcdGhhc190aW1lcjogaGFzX3RpbWVyLFxyXG5cdFx0XHRkdXJhdGlvbjogZHVyYXRpb25cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHN1Y2Nlc3ModGl0bGUsIG1zZyA9IHVuZGVmaW5lZCwgaGFzX2ljb24gPSB1bmRlZmluZWQsIHRvYXN0ID0gdW5kZWZpbmVkLCBwb3MgPSB1bmRlZmluZWQsIGhhc190aW1lciA9IHVuZGVmaW5lZCwgZHVyYXRpb24gPSB1bmRlZmluZWQpIHtcclxuXHRcdFN3YWxGbGFzaC4jc2VuZEV2ZW50KGBmbGFzaF9zdWNjZXNzYCwge1xyXG5cdFx0XHRmbGFzaF9zdWNjZXNzOiB0aXRsZSxcclxuXHRcdFx0bWVzc2FnZTogbXNnLFxyXG5cdFx0XHRoYXNfaWNvbjogaGFzX2ljb24sXHJcblx0XHRcdGlzX3RvYXN0OiB0b2FzdCxcclxuXHRcdFx0cG9zaXRpb246IHBvcyxcclxuXHRcdFx0aGFzX3RpbWVyOiBoYXNfdGltZXIsXHJcblx0XHRcdGR1cmF0aW9uOiBkdXJhdGlvblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgI3NlbmRFdmVudCh0eXBlLCBwYXJhbXMpIHtcclxuXHRcdHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCh0eXBlLCB7XHJcblx0XHRcdGRldGFpbDogcGFyYW1zXHJcblx0XHR9KSk7XHJcblx0fVxyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZmxhc2hfZXJyb3InLCAoZSkgPT4ge1xyXG5cdGxldCBmbGFzaCA9IGUuZGV0YWlsO1xyXG5cdGxldCBvcHRpb25zID0ge1xyXG5cdFx0dGl0bGU6IGAke2ZsYXNoLmZsYXNoX2Vycm9yfWAsXHJcblx0XHRwb3NpdGlvbjogYHRvcGAsXHJcblx0XHRzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcblx0XHR0b2FzdDogdHJ1ZSxcclxuXHRcdHRpbWVyOiAxMDAwMCxcclxuXHRcdGJhY2tncm91bmQ6IGAjZGMzNTQ1YCxcclxuXHRcdGN1c3RvbUNsYXNzOiB7XHJcblx0XHRcdHRpdGxlOiBgdGV4dC13aGl0ZWAsXHJcblx0XHRcdGNvbnRlbnQ6IGB0ZXh0LXdoaXRlYCxcclxuXHRcdFx0cG9wdXA6IGBweC0zYFxyXG5cdFx0fSxcclxuXHRcdHNob3dDbGFzczoge1xyXG5cdFx0XHRwb3B1cDogYGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JvdW5jZUluIGFuaW1hdGVfX2Zhc3RlcmBcclxuXHRcdH0sXHJcblx0XHRoaWRlQ2xhc3M6IHtcclxuXHRcdFx0cG9wdXA6IGBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlT3V0VXAgYW5pbWF0ZV9fZmFzdGVyYFxyXG5cdFx0fSxcclxuXHR9XHJcblxyXG5cdFN3YWwuZmlyZShfX3NldFN3YWxGbGFzaE9wdGlvbnMob3B0aW9ucywgZmxhc2gsICdlcnJvcicpKTtcclxufSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZmxhc2hfaW5mbycsIChlKSA9PiB7XHJcblx0bGV0IGZsYXNoID0gZS5kZXRhaWw7XHJcblx0bGV0IG9wdGlvbnMgPSB7XHJcblx0XHR0aXRsZTogYCR7Zmxhc2guZmxhc2hfaW5mb31gLFxyXG5cdFx0cG9zaXRpb246IGB0b3BgLFxyXG5cdFx0c2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG5cdFx0dG9hc3Q6IHRydWUsXHJcblx0XHR0aW1lcjogMTAwMDAsXHJcblx0XHRiYWNrZ3JvdW5kOiBgIzE3YTJiOGAsXHJcblx0XHRjdXN0b21DbGFzczoge1xyXG5cdFx0XHR0aXRsZTogYHRleHQtd2hpdGVgLFxyXG5cdFx0XHRjb250ZW50OiBgdGV4dC13aGl0ZWAsXHJcblx0XHRcdHBvcHVwOiBgcHgtM2BcclxuXHRcdH0sXHJcblx0XHRzaG93Q2xhc3M6IHtcclxuXHRcdFx0cG9wdXA6IGBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19ib3VuY2VJbiBhbmltYXRlX19mYXN0ZXJgXHJcblx0XHR9LFxyXG5cdFx0aGlkZUNsYXNzOiB7XHJcblx0XHRcdHBvcHVwOiBgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZU91dFVwIGFuaW1hdGVfX2Zhc3RlcmBcclxuXHRcdH0sXHJcblx0fVxyXG5cclxuXHRTd2FsLmZpcmUoX19zZXRTd2FsRmxhc2hPcHRpb25zKG9wdGlvbnMsIGZsYXNoLCAnaW5mbycpKTtcclxufSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZmxhc2hfc3VjY2VzcycsIChlKSA9PiB7XHJcblx0bGV0IGZsYXNoID0gZS5kZXRhaWw7XHJcblx0bGV0IG9wdGlvbnMgPSB7XHJcblx0XHR0aXRsZTogYCR7Zmxhc2guZmxhc2hfc3VjY2Vzc31gLFxyXG5cdFx0cG9zaXRpb246IGB0b3BgLFxyXG5cdFx0c2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG5cdFx0dG9hc3Q6IHRydWUsXHJcblx0XHR0aW1lcjogMTAwMDAsXHJcblx0XHRiYWNrZ3JvdW5kOiBgIzI4YTc0NWAsXHJcblx0XHRjdXN0b21DbGFzczoge1xyXG5cdFx0XHR0aXRsZTogYHRleHQtd2hpdGVgLFxyXG5cdFx0XHRjb250ZW50OiBgdGV4dC13aGl0ZWAsXHJcblx0XHRcdHBvcHVwOiBgcHgtM2BcclxuXHRcdH0sXHJcblx0XHRzaG93Q2xhc3M6IHtcclxuXHRcdFx0cG9wdXA6IGBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19ib3VuY2VJbiBhbmltYXRlX19mYXN0ZXJgXHJcblx0XHR9LFxyXG5cdFx0aGlkZUNsYXNzOiB7XHJcblx0XHRcdHBvcHVwOiBgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZU91dFVwIGFuaW1hdGVfX2Zhc3RlcmBcclxuXHRcdH0sXHJcblx0fVxyXG5cclxuXHRpZiAoU3dhbCkge1xyXG5cdFx0U3dhbC5maXJlKF9fc2V0U3dhbEZsYXNoT3B0aW9ucyhvcHRpb25zLCBmbGFzaCwgJ3N1Y2Nlc3MnKSk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0dGhyb3cgRXJyb3IoJ1N3ZWV0YWxlcnQyIG5vdCBpbnN0YW50aWF0ZWQuIFBsZWFzZSBpbmNsdWRlIHRoZSBzYWlkIGxpYnJhcnkgKGh0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvLykuIEN1cnJlbnRseSB0ZXN0aW5nIGZvciBgU3dhbGAga2V5d29yZC4nKTtcclxuXHR9XHJcbn0pO1xyXG5cclxuY29uc3QgX19zZXRTd2FsRmxhc2hPcHRpb25zID0gKG9wdGlvbnMsIGZsYXNoLCB0eXBlKSA9PiB7XHJcblx0Ly8gY29uc29sZS5sb2coZmxhc2gpO1xyXG5cclxuXHRpZiAoZmxhc2guaGFzX2ljb24gIT0gdW5kZWZpbmVkKVxyXG5cdFx0b3B0aW9uc1tcImljb25cIl0gPSBgJHt0eXBlfWA7XHJcblxyXG5cdGlmIChmbGFzaC5tZXNzYWdlICE9IHVuZGVmaW5lZClcclxuXHRcdG9wdGlvbnNbXCJodG1sXCJdID0gYCR7Zmxhc2gubWVzc2FnZX1gO1xyXG5cclxuXHRpZiAoZmxhc2gucG9zaXRpb24gIT0gdW5kZWZpbmVkKVxyXG5cdCBcdG9wdGlvbnNbXCJwb3NpdGlvblwiXSA9IGZsYXNoLnBvc2l0aW9uO1xyXG5cclxuXHRpZiAoZmxhc2guaXNfdG9hc3QgIT0gdW5kZWZpbmVkKVxyXG5cdFx0b3B0aW9uc1tcInRvYXN0XCJdID0gZmxhc2guaXNfdG9hc3Q7XHJcblxyXG5cdGlmIChmbGFzaC5oYXNfdGltZXIgIT0gdW5kZWZpbmVkKVxyXG5cdFx0aWYgKGZsYXNoLmhhc190aW1lcilcclxuXHRcdFx0b3B0aW9uc1sndGltZXInXSA9IGZsYXNoLmR1cmF0aW9uICE9IHVuZGVmaW5lZCA/IGZsYXNoLmR1cmF0aW9uIDogMTAwMDA7XHJcblx0XHRlbHNlXHJcblx0XHRcdGRlbGV0ZSBvcHRpb25zWydkdXJhdGlvbiddO1xyXG5cclxuXHRyZXR1cm4gb3B0aW9ucztcclxufVxyXG4iLCJmdW5jdGlvbiBpbml0Q2hhbmdlKCkge1xyXG5cdEFycmF5LnByb3RvdHlwZS51bmlxID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgc2VlbiA9IHt9O1xyXG5cdFx0dmFyIG91dCA9IFtdO1xyXG5cdFx0dmFyIGogPSAwO1xyXG5cdFx0XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHQgdmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHQgaWYoc2VlbltpdGVtXSAhPT0gMSkge1xyXG5cdFx0XHRcdCAgIHNlZW5baXRlbV0gPSAxO1xyXG5cdFx0XHRcdCAgIG91dFtqKytdID0gaXRlbTtcclxuXHRcdFx0IH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cmV0dXJuIG91dDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXRDaGFuZ2U7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZUJhZyB7XHJcblx0I21lc3NhZ2U7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYW4gaW5zdGFuY2Ugb2YgYE1lc3NhZ2VCYWdgLlxyXG5cdCAqXHJcblx0ICogPGI+RXhhbXBsZSBBLjE6PC9iPlxyXG5cdCAqIGBgYGphdmFzY3JpcHRcclxuXHQgKiBtZXNzYWdlcyA9IHtcclxuXHQgKiBcdG5hbWU6IHtcclxuXHQgKiBcdFx0cmVxdWlyZWQ6IGBUaGUgbmFtZSBmaWVsZCBpcyByZXF1aXJlZC5gXHJcblx0ICogXHR9XHJcblx0ICogfVxyXG5cdCAqIGBgYFxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtPYmplY3R9XHRtZXNzYWdlc1x0QW4gaW5zdGFuY2Ugb2YgSlNPTiBvYmplY3QsIHdoaWNoIGhvbGRzIGEgZmllbGQta2V5LXZhbHVlIGluc3RhbmNlLiBBbiBleGFtcGxlIG9mIHRoaXMgaXMgdGhlIEV4YW1wbGUgQS4xXHJcblx0ICpcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcihtZXNzYWdlcyA9IE9iamVjdC5jcmVhdGUobnVsbCkpIHtcclxuXHRcdHRoaXMuI21lc3NhZ2UgPSBtZXNzYWdlcztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMgYSBuZXcgbWVzc2FnZSB0byB0aGUgbWVzc2FnZSBiYWcuIElmIGFuIGV4YWN0IGtleSBhbHJlYWR5IGV4aXN0cywgaXQgd2lsbCByZXBsYWNlIHRoZSBvbGRlciB2YWx1ZSB3aXRoIHRoZSBuZXdcclxuXHQgKiB2YWx1ZSBwcm92aWRlZC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfVx0a2V5XHRcdFRoZSBrZXkgaWRlbnRpZmllciBmb3IgdGhlIG1lc3NhZ2VcclxuXHQgKiBAcGFyYW0ge1N0cmluZ31cdG1lc3NhZ2VcdFRoZSBtZXNzYWdlIHRoYXQgd2lsbCBiZSBwbGFjZWQgaW4gdGhlIG1lc3NhZ2UgYmFnXHJcblx0ICpcclxuXHQgKiBAcmV0dXJuIHtNZXNzYWdlQmFnfVx0XHRUaGUgY3VycmVudCBpbnN0YW5jZSBvZiBgTWVzc2FnZUJhZ2BcclxuXHQgKi9cclxuXHRhZGQoa2V5LCBtZXNzYWdlKSB7XHJcblx0XHRrZXkgPSBrZXkuc3BsaXQoXCIuXCIpO1xyXG5cdFx0bGV0IGZpZWxkID0ga2V5WzBdO1xyXG5cdFx0a2V5ID0ga2V5WzFdO1xyXG5cclxuXHRcdGlmICh0eXBlb2YgdGhpcy4jbWVzc2FnZVtmaWVsZF0gPT0gJ3VuZGVmaW5lZCcpXHJcblx0XHRcdHRoaXMuI21lc3NhZ2VbZmllbGRdID0ge307XHJcblxyXG5cdFx0dGhpcy4jbWVzc2FnZVtmaWVsZF1ba2V5XSA9IG1lc3NhZ2U7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBNZXJnZSBhIG5ldyBhcnJheSBvZiBtZXNzYWdlcyBpbnRvIHRoZSBtZXNzYWdlIGJhZy5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fE1lc3NhZ2VCYWd9XHRtZXNzYWdlc1x0QSBKU09OIG9iamVjdCBvciBhbiBpbnN0YW5jZSBvZiBgTWVzc2FnZUJhZ2BcclxuXHQgKlxyXG5cdCAqIEByZXR1cm4ge01lc3NhZ2VCYWd9XHRUaGUgY3VycmVudCBpbnN0YW5jZSBvZiBgTWVzc2FnZUJhZ2BcclxuXHQgKi9cclxuXHRtZXJnZShtZXNzYWdlcykge1xyXG5cdFx0bGV0IHR5cGUgPSBtZXNzYWdlcy5jb25zdHJ1Y3Rvci5uYW1lO1xyXG5cclxuXHRcdGlmICh0eXBlID09PSAnT2JqZWN0Jykge1xyXG5cdFx0XHR0aGlzLiNtZXNzYWdlID0gT2JqZWN0LmFzc2lnbih0aGlzLiNtZXNzYWdlLCBtZXNzYWdlcyk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh0eXBlID09PSAnTWVzc2FnZUJhZycpIHtcclxuXHRcdFx0dGhpcy4jbWVzc2FnZSA9IE9iamVjdC5hc3NpZ24odGhpcy4jbWVzc2FnZSwgbWVzc2FnZXMuZ2V0KCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRGV0ZXJtaW5lIGlmIG1lc3NhZ2VzIGV4aXN0IGZvciB0aGUgZ2l2ZW4gZmllbGQuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gIHtTdHJpbmd9ICBmaWVsZFx0VGhlIG5hbWUgb2YgdGhlIGZpZWxkIHRoYXQgd2lsbCBiZSB0ZXN0ZWRcclxuXHQgKiBAcmV0dXJuIHtCb29sZWFufVx0XHRBIGJvb2xlYW4gdmFsdWU7IGVpdGhlciBhIGB0cnVlYCBpZiB0aGUgZmllbGQgZXhpc3RzLCBvciBgZmFsc2VgIGlmIGl0IGRvZXMgbm90XHJcblx0ICovXHJcblx0aGFzKGZpZWxkKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5maWVsZHMoKS5pbmNsdWRlcyhrZXkpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IHRoZSBmaWVsZHMgcHJlc2VudCBpbiB0aGUgbWVzc2FnZSBiYWcuXHJcblx0ICpcclxuXHQgKiBAcmV0dXJuIHtBcnJheX1cdFx0QW4gYXJyYXkgb2YgdGhlIGZpZWxkcyBpbmNsdWRlZCBpbiB0aGUgY3VycmVudCBpbnN0YW5jZSBvZiBgTWVzc2FnZUJhZ2BcclxuXHQgKi9cclxuXHRmaWVsZHMoKSB7XHJcblx0XHRyZXR1cm4gT2JqZWN0LmtleXModGhpcy4jbWVzc2FnZSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgdGhlIGZpcnN0IG1lc3NhZ2UgZnJvbSB0aGUgbWVzc2FnZSBiYWcgZm9yIGEgZ2l2ZW4gZmllbGQuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gIHtTdHJpbmd9XHRmaWVsZFx0VGhlIG5hbWUgb2YgdGhlIGZpZWxkIHRoYXQgdGhlIG1lc3NhZ2Ugd2lsbCBiZSBmZXRjaGVkIHVwb25cclxuXHQgKiBAcmV0dXJuIHtTdHJpbmd9XHRcdFRoZSBmaXJzdCBtZXNzYWdlIGNvbnRhaW5lZCB3aXRoaW4gdGhlIHNhaWQgZmllbGQuIFJldHVybnMgYW4gYHVuZGVmaW5lZGAgd2hlbiB0aGUgZmllbGQgZG9lcyBub3QgZXhpc3RzXHJcblx0ICovXHJcblx0Zmlyc3QoZmllbGQpIHtcclxuXHRcdGlmICh0eXBlb2YgZmllbGQgPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0ZmllbGQgPSBPYmplY3Qua2V5cyh0aGlzLiNtZXNzYWdlKTtcclxuXHRcdFx0bGV0IGtleSA9IE9iamVjdC5rZXlzKHRoaXMuI21lc3NhZ2VbZmllbGRdKTtcclxuXHRcdFx0cmV0dXJuIHRoaXMuI21lc3NhZ2VbZmllbGRdW2tleVswXV07XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGtleSA9IE9iamVjdC5rZXlzKHRoaXMuI21lc3NhZ2VbZmllbGRdKTtcclxuXHRcdHJldHVybiB0aGlzLiNtZXNzYWdlW2ZpZWxkXVtrZXlbMF1dO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IGFsbCBvZiB0aGUgbWVzc2FnZXMgZnJvbSB0aGUgbWVzc2FnZSBiYWcgZm9yIGEgZ2l2ZW4gZmllbGQuIElmIG5vIHZhbHVlIG9yIGEgYG51bGxgIGlzIHByb3ZpZGVkIHRvIHRoZSBmaWVsZCwgaXQgcmV0dXJucyBhbGwgdGhlIG1lc3NhZ2VzIGNvbnRhaW5lZCB3aXRoaW4gdGhlIGN1cnJlbnQgaW5zdGFuY2Ugb2YgYE1lc3NhZ2VCYWdgXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gIHtTdHJpbmd9XHRmaWVsZFx0VGhlIG5hbWUgb2YgdGhlIGZpZWxkIHRoYXQgdGhlIG1lc3NhZ2Ugd2lsbCBiZSBmZXRjaGVkIHVwb25cclxuXHQgKiBAcmV0dXJuIHtPYmplY3R9XHRcdEEgSlNPTiBvYmplY3QgdGhhdCBjb250YWlucyB0aGUga2V5LXZhbHVlIHBhaXIgZm9yIGFsbCB0aGUgbWVzc2FnZSBvZiB0aGUgZmllbGQuXHJcblx0ICovXHJcblx0Z2V0KGZpZWxkID0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIGZpZWxkID09IG51bGwgPyB0aGlzLiNtZXNzYWdlIDogdGhpcy4jbWVzc2FnZVtmaWVsZF07XHJcblx0fVxyXG59XHJcbiIsImNsYXNzIFJ1bGUge1xyXG5cdC8vIFBSSVZBVEUgVkFSSUFCTEVTXHJcblx0X21lc3NhZ2U7XHJcblx0X3ZhbGlkID0gZmFsc2U7XHJcblx0XHJcblx0LyoqXHJcblx0ICogQ29udGFpbmVyIGZvciB0aGUgbmFtZSBvZiB0aGUgZmllbGQgdGhhdCB3aWxsIGJlIHRlc3RlZFxyXG5cdCAqL1xyXG5cdF9maWVsZDtcclxuXHQvKipcclxuXHQgKiBDb250YWluZXIgZm9yIHRoZSB2YWx1ZSB0aGF0IHdpbGwgYmUgdGVzdGVkXHJcblx0ICovXHJcblx0X3ZhbHVlO1xyXG5cdC8qKlxyXG5cdCAqIENvbnRhaW5lciBmb3IgdGhlIHZhbGlkYXRvciB2YWx1ZXMgdGhhdCB3aWxsIGJlIHVzZWQgYWdhaW5zdCB0aGUgdmFsdWUgcHJvdmlkZWRcclxuXHQgKi9cclxuXHRfdmFsaWRhdG9yVmFsdWVzO1xyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgcGFyZW50IGNvbnN0cnVjdG9yLCB3aGljaCBjcmVhdGVzIHRoZSBjb21tb24gUnVsZSBpbnN0YW5jZSBmb3IgYWxsIHRoZSBydWxlcy5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge1N0cmluZ31cdGZpZWxkXHRcdFx0VGhlIG5hbWUgb2YgdGhlIGZpZWxkIGJlaW5nIHRlc3RlZFxyXG5cdCAqIEBwYXJhbSB7QW55fSBcdHZhbHVlXHRcdFx0VGhlIHZhbHVlIHRvIHZhbGlkYXRlXHJcblx0ICogQHBhcmFtIHtBcnJheX1cdHZhbGlkYXRvclZhbHVlc1x0QW4gYXJyYXkgb2YgdmFsdWVzIHRoYXQgdGhlIHZhbGlkYXRvciBoYXMuIE9ubHkgcmV0cmlldmVzIHRoZSBmaXJzdCB2YWx1ZSBkdWUgdG8gaG93IHRoZSBydWxlIHdvcmtzXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcdFx0XHRUaGUgbWVzc2FnZSB0byB1c2Ugd2hlbiB0aGUgcnVsZSBmYWlsc1xyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKGZpZWxkLCB2YWx1ZSwgdmFsaWRhdG9yVmFsdWVzID0gbnVsbCwgbWVzc2FnZSA9IFwiVGhlIDphdHRyIGZpZWxkIGlzIGluY29ycmVjdC5cIikge1xyXG5cdFx0bWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZUFsbCgvKDphdHRyKS9naSwgZmllbGQpO1xyXG5cdFx0bWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZUFsbCgvKDp2YWwpL2dpLCB2YWx1ZSk7XHJcblx0XHRcclxuXHRcdHRoaXMuX21lc3NhZ2UgPSBtZXNzYWdlO1xyXG5cdFx0dGhpcy5fZmllbGQgPSBmaWVsZDtcclxuXHRcdHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcblx0XHR0aGlzLl92YWxpZGF0b3JWYWx1ZXMgPSB2YWxpZGF0b3JWYWx1ZXM7XHJcblx0fVxyXG5cclxuXHR2YWxpZGF0ZSgpIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIlVuaW1wbGVtZW50ZWQgYWJzdHJhY3QgbWV0aG9kOiB2YWxpZGF0ZSgpXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlcXVpcmVkIGV4dGVuZHMgUnVsZSB7XHJcblx0LyoqXHJcblx0ICogVGVzdHMgd2hldGhlciB0aGUgYHZhbHVlYCBwcm92aWRlZCBpcyBwcmVzZW50IGFuZCBhIHZhbGlkIHZhbHVlLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfVx0ZmllbGRcdFRoZSBuYW1lIG9mIHRoZSBmaWVsZCBiZWluZyB0ZXN0ZWRcclxuXHQgKiBAcGFyYW0ge0FueX1cdFx0dmFsdWVcdFRoZSB2YWx1ZSB0byB2YWxpZGF0ZVxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXHRUaGUgbWVzc2FnZSB0byB1c2Ugd2hlbiB0aGUgcnVsZSBmYWlsc1xyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKGZpZWxkLCB2YWx1ZSwgbWVzc2FnZSA9IFwiVGhlIDphdHRyIGZpZWxkIGlzIHJlcXVpcmVkXCIsIHZhbGlkYXRvclZhbHVlcyA9IG51bGwpIHtcclxuXHRcdHN1cGVyKGZpZWxkLCB2YWx1ZSwgdmFsaWRhdG9yVmFsdWVzID8/IHVuZGVmaW5lZCwgbWVzc2FnZSk7XHJcblx0fVxyXG5cclxuXHR2YWxpZGF0ZSgpIHtcclxuXHRcdGlmICh0aGlzLl92YWx1ZSAhPSAndW5kZWZpbmVkJyAmJiB0aGlzLl92YWx1ZSAhPSBudWxsICYmIHRoaXMuX3ZhbHVlLmxlbmd0aCA+IDApXHJcblx0XHRcdHRoaXMuX3ZhbGlkID0gdHJ1ZTtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR2YWxpZDogdGhpcy5fdmFsaWQsXHJcblx0XHRcdG1lc3NhZ2U6IHRoaXMuX21lc3NhZ2UsXHJcblx0XHRcdHJ1bk90aGVyVmFsaWRhdGlvbjogdHJ1ZVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZXF1aXJlZElmIGV4dGVuZHMgUmVxdWlyZWQge1xyXG5cdC8qKlxyXG5cdCAqIFRlc3RzIHdoZXRoZXIgdGhlIGB2YWx1ZWAgcHJvdmlkZWQgaXMgcHJlc2VudCBhbmQgYSB2YWxpZCB2YWx1ZSBvbmx5IGlmIHRoZSBvdGhlciBmaWVsZCBoYXMgdGhlIHByb3ZpZGVkIHZhbHVlLiBTa2lwcyB0aGUgdmFsaWRhdGlvbiBpZiB0aGUgb3RoZXIgZmllbGQgaXNcclxuXHQgKiBibGFuay5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge1N0cmluZ31cdGZpZWxkXHRcdFx0XHRUaGUgbmFtZSBvZiB0aGUgZmllbGQgYmVpbmcgdGVzdGVkXHJcblx0ICogQHBhcmFtIHtBbnl9XHRcdHZhbHVlXHRcdFx0XHRUaGUgdmFsdWUgdG8gdmFsaWRhdGVcclxuIFx0ICogQHBhcmFtIHtBcnJheX1cdHZhbGlkYXRvclZhbHVlc1x0XHRBbiBhcnJheSBvZiB2YWx1ZXMgdGhhdCB0aGUgdmFsaWRhdG9yIGhhcy4gT25seSByZXRyaWV2ZXMgdGhlIGZpcnN0IHRocmVlIHZhbHVlcyAob3RoZXIgZmllbGQsIG90aGVyIGZpZWxkJ3MgcmVxdWlyZWQgdmFsdWUsXHJcbiBcdCAqIFx0XHRcdFx0XHRcdFx0XHRcdFx0b3RoZXIgZmllbGQncyB2YWx1ZSkgZHVlIHRvIGhvdyB0aGUgcnVsZSB3b3Jrc1xyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfVx0bWVzc2FnZVx0XHRcdFx0VGhlIG1lc3NhZ2UgdG8gdXNlIHdoZW4gdGhlIHJ1bGUgZmFpbHNcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcihmaWVsZCwgdmFsdWUsIHZhbGlkYXRvclZhbHVlcywgbWVzc2FnZSA9IFwiVGhlIDphdHRyIGZpZWxkIGlzIHJlcXVpcmVkIHNpbmNlIDphdHRyMiBpcyA6dmFsMlwiKSB7XHJcblx0XHRpZiAodHlwZW9mIHZhbGlkYXRvclZhbHVlcyAhPSAnb2JqZWN0JyB8fCB2YWxpZGF0b3JWYWx1ZXMuY29uc3RydWN0b3IubmFtZSAhPSAnQXJyYXknKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEltcHJvcGVyIHZhbGlkYXRvciB2YWx1ZSBmb3JtYXQ6XFxuXFx0TmVlZHMgYXJyYXksICR7dHlwZW9mIHZhbGlkYXRvclZhbHVlc30gaXMgcGFzc2VkYCk7XHJcblx0XHRlbHNlIGlmICh2YWxpZGF0b3JWYWx1ZXMubGVuZ3RoIDwgMilcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBOb3QgZW5vdWdoIHZhbGlkYXRvciB2YWx1ZSBwYXNzZWQ6XFxuXFx0TmVlZHMgMiwgb25seSAke3ZhbGlkYXRvclZhbHVlcy5sZW5ndGh9IGlzIHBhc3NlZC5gKTtcclxuXHJcblx0XHRtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlQWxsKC8oOmF0dHIyKS9naSwgdmFsaWRhdG9yVmFsdWVzWzBdKTtcclxuXHRcdG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2VBbGwoLyg6dmFsMikvZ2ksIHZhbGlkYXRvclZhbHVlc1sxXSk7XHJcblx0XHRtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlQWxsKC8oOnZhbDMpL2dpLCB2YWxpZGF0b3JWYWx1ZXNbMl0pO1xyXG5cclxuXHRcdHN1cGVyKGZpZWxkLCB2YWx1ZSwgbWVzc2FnZSwgdmFsaWRhdG9yVmFsdWVzKTtcclxuXHR9XHJcblxyXG5cdHZhbGlkYXRlKCkge1xyXG5cdFx0bGV0IFtmaWVsZDIsIHZhbDIsIHZhbDNdID0gdGhpcy5fdmFsaWRhdG9yVmFsdWVzO1xyXG5cclxuXHRcdGlmICh2YWwyID09IHZhbDMpIHtcclxuXHRcdFx0cmV0dXJuIHN1cGVyLnZhbGlkYXRlKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0dGhpcy5fdmFsaWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR2YWxpZDogdGhpcy5fdmFsaWQsXHJcblx0XHRcdFx0bWVzc2FnZTogdGhpcy5fbWVzc2FnZSxcclxuXHRcdFx0XHRydW5PdGhlclZhbGlkYXRpb246IGZhbHNlXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNvbWV0aW1lcyBleHRlbmRzIFJ1bGUge1xyXG5cdC8qKlxyXG5cdCAqIFdvcmtzIHNpbWlsYXIgYXMgdGhlIGBSZXF1aXJlZGAgcnVsZSBidXQgb25seSB3b3JrcyBpZiB0aGUgdmFsdWUgaXMgcHJlc2VudCAobm90IGB1bmRlZmluZWRgKS5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge1N0cmluZ31cdGZpZWxkXHRUaGUgbmFtZSBvZiB0aGUgZmllbGQgYmVpbmcgdGVzdGVkXHJcblx0ICogQHBhcmFtIHtBbnl9IFx0dmFsdWVcdFRoZSB2YWx1ZSB0byB2YWxpZGF0ZVxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXHRUaGUgbWVzc2FnZSB0byB1c2Ugd2hlbiB0aGUgcnVsZSBmYWlsc1xyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKGZpZWxkLCB2YWx1ZSwgbWVzc2FnZSA9IFwiVGhlIDphdHRyIGZpZWxkIGlzIHJlcXVpcmVkIHRvIGhhdmUgYSB2YWx1ZSwgb3IgbGVhdmUgaXQgYXMgYmxhbmtcIikge1xyXG5cdFx0c3VwZXIoZmllbGQsIHZhbHVlLCB1bmRlZmluZWQsIG1lc3NhZ2UpO1xyXG5cdH1cclxuXHJcblx0dmFsaWRhdGUoKSB7XHJcblx0XHR0aGlzLl92YWxpZCA9IHRydWU7XHJcblx0XHRsZXQgcnVuT3RoZXJWYWxpZGF0aW9uID0gZmFsc2U7XHJcblx0XHJcblx0XHRpZiAodHlwZW9mIHRoaXMuX3ZhbHVlICE9ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdHJ1bk90aGVyVmFsaWRhdGlvbiA9IHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dmFsaWQ6IHRoaXMuX3ZhbGlkLFxyXG5cdFx0XHRtZXNzYWdlOiB0aGlzLl9tZXNzYWdlLFxyXG5cdFx0XHRydW5PdGhlclZhbGlkYXRpb246IHJ1bk90aGVyVmFsaWRhdGlvblxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCb29sZWFuIGV4dGVuZHMgUnVsZSB7XHJcblx0LyoqXHJcblx0ICogVGVzdHMgd2hldGhlciB0aGUgdmFsdWUgaXMgYSBib29sZWFuIG9yIGNhbiBiZSBjb252ZXJ0ZWQgdG8gYSBib29sZWFuLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfVx0ZmllbGRcdFRoZSBuYW1lIG9mIHRoZSBmaWVsZCBiZWluZyB0ZXN0ZWRcclxuXHQgKiBAcGFyYW0ge0FueX0gXHR2YWx1ZVx0VGhlIHZhbHVlIHRvIHZhbGlkYXRlXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcdFRoZSBtZXNzYWdlIHRvIHVzZSB3aGVuIHRoZSBydWxlIGZhaWxzXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoZmllbGQsIHZhbHVlLCBtZXNzYWdlID0gXCJUaGUgOmF0dHIgbXVzdCBiZSB0cnVlIG9yIGZhbHNlXCIpIHtcclxuXHRcdHN1cGVyKGZpZWxkLCB2YWx1ZSwgdW5kZWZpbmVkLCBtZXNzYWdlKTtcclxuXHR9XHJcblxyXG5cdHZhbGlkYXRlKCkge1xyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLl92YWx1ZSA9PSAnYm9vbGVhbicpIHsgXHJcblx0XHRcdHRoaXMuX3ZhbGlkID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHR5cGVvZiB0aGlzLl92YWx1ZSA9PSAnbnVtYmVyJykge1xyXG5cdFx0XHRpZiAodGhpcy5fdmFsdWUgPT0gMSB8fCB0aGlzLl92YWx1ZSA9PSAwKVxyXG5cdFx0XHRcdHRoaXMuX3ZhbGlkID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHR5cGVvZiB0aGlzLl92YWx1ZSA9PSAnc3RyaW5nJykge1xyXG5cdFx0XHRpZiAoW1wib25cIiwgXCJvZmZcIiwgXCJ0cnVlXCIsIFwiZmFsc2VcIl0uaW5jbHVkZXModGhpcy5fdmFsdWUudG9Mb3dlckNhc2UoKSkpXHJcblx0XHRcdFx0dGhpcy5fdmFsaWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHZhbGlkOiB0aGlzLl92YWxpZCxcclxuXHRcdFx0bWVzc2FnZTogdGhpcy5fbWVzc2FnZVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOdW1lcmljIGV4dGVuZHMgUnVsZSB7XHJcblx0LyoqXHJcblx0ICogVGVzdHMgd2hldGhlciB0aGUgdmFsdWUgaXMgYSBudW1iZXIgb3IgY2FuIGJlIGNvbnZlcnRlZCB0byBhIG51bWJlci5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge1N0cmluZ31cdGZpZWxkXHRUaGUgbmFtZSBvZiB0aGUgZmllbGQgYmVpbmcgdGVzdGVkXHJcblx0ICogQHBhcmFtIHtBbnl9IFx0dmFsdWVcdFRoZSB2YWx1ZSB0byB2YWxpZGF0ZVxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXHRUaGUgbWVzc2FnZSB0byB1c2Ugd2hlbiB0aGUgcnVsZSBmYWlsc1xyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKGZpZWxkLCB2YWx1ZSwgbWVzc2FnZSA9IFwiVGhlIDphdHRyIHNob3VsZCBiZSBhIG51bWJlclwiKSB7XHJcblx0XHRzdXBlcihmaWVsZCwgdmFsdWUsIHVuZGVmaW5lZCwgbWVzc2FnZSk7XHJcblx0fVxyXG5cclxuXHR2YWxpZGF0ZSgpIHtcclxuXHRcdGlmICh0eXBlb2YgdGhpcy5fdmFsdWUgPT0gJ251bWJlcicpIHtcclxuXHRcdFx0dGhpcy5fdmFsaWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodHlwZW9mIHRoaXMuX3ZhbHVlID09ICdzdHJpbmcnKSB7XHJcblx0XHRcdGxldCBpc0RlY2ltYWwgPSB0aGlzLl92YWx1ZS5zcGxpdChcIi5cIikubGVuZ3RoID4gMTtcclxuXHRcdFx0bGV0IGNvbnZlcnRlZCA9IGlzRGVjaW1hbCA/IHBhcnNlRmxvYXQodGhpcy5fdmFsdWUpIDogcGFyc2VJbnQodGhpcy5fdmFsdWUpO1xyXG5cclxuXHRcdFx0aWYgKCFpc05hTihjb252ZXJ0ZWQpKVxyXG5cdFx0XHRcdHRoaXMuX3ZhbGlkID0gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR2YWxpZDogdGhpcy5fdmFsaWQsXHJcblx0XHRcdG1lc3NhZ2U6IHRoaXMuX21lc3NhZ2VcclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTWluIGV4dGVuZHMgUnVsZSB7XHJcblx0LyoqXHJcblx0ICogVGVzdHMgd2hldGhlciB0aGUgdmFsdWUgaXMgbm8gbGVzcyB0aGFuIHRoZSBwcm92aWRlZCB2YWxpZGF0b3IgdmFsdWUuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9XHRmaWVsZFx0XHRcdFRoZSBuYW1lIG9mIHRoZSBmaWVsZCBiZWluZyB0ZXN0ZWRcclxuXHQgKiBAcGFyYW0ge0FueX0gXHR2YWx1ZVx0XHRcdFRoZSB2YWx1ZSB0byB2YWxpZGF0ZVxyXG5cdCAqIEBwYXJhbSB7QXJyYXl9XHR2YWxpZGF0b3JWYWx1ZXNcdEFuIGFycmF5IG9mIHZhbHVlcyB0aGF0IHRoZSB2YWxpZGF0b3IgaGFzLiBPbmx5IHJldHJpZXZlcyB0aGUgZmlyc3QgdmFsdWUgZHVlIHRvIGhvdyB0aGUgcnVsZSB3b3Jrc1xyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXHRcdFx0VGhlIG1lc3NhZ2UgdG8gdXNlIHdoZW4gdGhlIHJ1bGUgZmFpbHNcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcihmaWVsZCwgdmFsdWUsIHZhbGlkYXRvclZhbHVlcywgbWVzc2FnZSA9IFwiVGhlIDphdHRyIG11c3QgYmUgYXQgbGVhc3QgOnZhbFwiKSB7XHJcblx0XHRsZXQgZTtcclxuXHJcblx0XHRpZiAodHlwZW9mIHZhbGlkYXRvclZhbHVlcyAhPSAnb2JqZWN0JyB8fCB2YWxpZGF0b3JWYWx1ZXMuY29uc3RydWN0b3IubmFtZSAhPSAnQXJyYXknKVxyXG5cdFx0XHRlID0gIEVycm9yKGBJbXByb3BlciB2YWxpZGF0b3IgdmFsdWUgZm9ybWF0OlxcblxcdE5lZWRzIGFycmF5LCAke3R5cGVvZiB2YWxpZGF0b3JWYWx1ZXN9IGlzIHBhc3NlZGApO1xyXG5cdFx0ZWxzZSBpZiAodmFsaWRhdG9yVmFsdWVzLmxlbmd0aCA8IDEpXHJcblx0XHRcdGUgPSAgRXJyb3IoYE5vdCBlbm91Z2ggdmFsaWRhdG9yIHZhbHVlIHBhc3NlZDpcXG5cXHROZWVkcyAxLCBvbmx5ICR7dmFsaWRhdG9yVmFsdWVzLmxlbmd0aH0gaXMgcGFzc2VkLmApO1xyXG5cclxuXHRcdGlmICh2YWx1ZSA9PSAgbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT0gJ3VuZGVmaW5lZCcpXHJcblx0XHRcdHZhbHVlID0gdmFsdWU7XHJcblx0XHRlbHNlIGlmICh2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lID09IFwiQXJyYXlcIilcclxuXHRcdFx0dmFsdWUgPSB2YWx1ZS5sZW5ndGg7XHJcblxyXG5cdFx0aWYgKHR5cGVvZiBlICE9ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdGUubmFtZSA9IFwiUnVsZUV4Y2VwdGlvblwiO1xyXG5cdFx0XHR0aHJvdyBlO1xyXG5cdFx0fVxyXG5cclxuXHRcdG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2VBbGwoLyg6bWluKS9naSwgdmFsaWRhdG9yVmFsdWVzWzBdKTtcclxuXHJcblx0XHRzdXBlcihmaWVsZCwgdmFsdWUsIHZhbGlkYXRvclZhbHVlc1swXSwgbWVzc2FnZSk7XHJcblx0fVxyXG5cclxuXHR2YWxpZGF0ZSgpIHtcclxuXHRcdGlmIChuZXcgTnVtZXJpYyh0aGlzLl9maWVsZCwgdGhpcy5fdmFsdWUpLnZhbGlkYXRlKCkudmFsaWQpIHtcclxuXHRcdFx0bGV0IGlzRGVjaW1hbCA9IHRoaXMuX3ZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpLmxlbmd0aCA+IDE7XHJcblx0XHRcdGxldCBjb252ZXJ0ZWQgPSBpc0RlY2ltYWwgPyBwYXJzZUZsb2F0KHRoaXMuX3ZhbHVlKSA6IHBhcnNlSW50KHRoaXMuX3ZhbHVlKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChjb252ZXJ0ZWQgPj0gdGhpcy5fdmFsaWRhdG9yVmFsdWVzKVxyXG5cdFx0XHRcdHRoaXMuX3ZhbGlkID0gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR2YWxpZDogdGhpcy5fdmFsaWQsXHJcblx0XHRcdG1lc3NhZ2U6IHRoaXMuX21lc3NhZ2VcclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTWF4IGV4dGVuZHMgUnVsZSB7XHJcblx0LyoqXHJcblx0ICogVGVzdHMgd2hldGhlciB0aGUgdmFsdWUgaXMgbm8gbW9yZSB0aGFuIHRoZSBwcm92aWRlZCB2YWxpZGF0b3IgdmFsdWUuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9XHRmaWVsZFx0XHRcdFRoZSBuYW1lIG9mIHRoZSBmaWVsZCBiZWluZyB0ZXN0ZWRcclxuXHQgKiBAcGFyYW0ge0FueX0gXHR2YWx1ZVx0XHRcdFRoZSB2YWx1ZSB0byB2YWxpZGF0ZVxyXG5cdCAqIEBwYXJhbSB7QXJyYXl9XHR2YWxpZGF0b3JWYWx1ZXNcdEFuIGFycmF5IG9mIHZhbHVlcyB0aGF0IHRoZSB2YWxpZGF0b3IgaGFzLiBPbmx5IHJldHJpZXZlcyB0aGUgZmlyc3QgdmFsdWUgZHVlIHRvIGhvdyB0aGUgcnVsZSB3b3Jrc1xyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXHRcdFx0VGhlIG1lc3NhZ2UgdG8gdXNlIHdoZW4gdGhlIHJ1bGUgZmFpbHNcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcihmaWVsZCwgdmFsdWUsIHZhbGlkYXRvclZhbHVlcywgbWVzc2FnZSA9IFwiVGhlIDphdHRyIG1heSBub3QgYmUgZ3JlYXRlciB0aGFuIDp2YWxcIikge1xyXG5cdFx0bGV0IGU7XHJcblxyXG5cdFx0aWYgKHR5cGVvZiB2YWxpZGF0b3JWYWx1ZXMgIT0gJ29iamVjdCcgfHwgdmFsaWRhdG9yVmFsdWVzLmNvbnN0cnVjdG9yLm5hbWUgIT0gJ0FycmF5JylcclxuXHRcdFx0ZSA9IEVycm9yKGBJbXByb3BlciB2YWxpZGF0b3IgdmFsdWUgZm9ybWF0OlxcblxcdE5lZWRzIGFycmF5LCAke3R5cGVvZiB2YWxpZGF0b3JWYWx1ZXN9IGlzIHBhc3NlZGApO1xyXG5cdFx0ZWxzZSBpZiAodmFsaWRhdG9yVmFsdWVzLmxlbmd0aCA8IDEpXHJcblx0XHRcdGUgPSBFcnJvcihgTm90IGVub3VnaCB2YWxpZGF0b3IgdmFsdWUgcGFzc2VkOlxcblxcdE5lZWRzIDEsIG9ubHkgJHt2YWxpZGF0b3JWYWx1ZXMubGVuZ3RofSBpcyBwYXNzZWQuYCk7XHJcblxyXG5cdFx0aWYgKHZhbHVlID09ICBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PSAndW5kZWZpbmVkJylcclxuXHRcdFx0dmFsdWUgPSB2YWx1ZTtcclxuXHRcdGVsc2UgaWYgKHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgPT0gXCJBcnJheVwiKVxyXG5cdFx0XHR2YWx1ZSA9IHZhbHVlLmxlbmd0aDtcclxuXHJcblx0XHRpZiAodHlwZW9mIGUgIT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0ZS5uYW1lID0gXCJSdWxlRXhjZXB0aW9uXCI7XHJcblx0XHRcdHRocm93IGU7XHJcblx0XHR9XHJcblxyXG5cdFx0bWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZUFsbCgvKDptYXgpL2dpLCB2YWxpZGF0b3JWYWx1ZXNbMF0pO1xyXG5cclxuXHRcdHN1cGVyKGZpZWxkLCB2YWx1ZSwgdmFsaWRhdG9yVmFsdWVzWzBdLCBtZXNzYWdlKTtcclxuXHR9XHJcblxyXG5cdHZhbGlkYXRlKCkge1xyXG5cdFx0aWYgKG5ldyBOdW1lcmljKHRoaXMuX2ZpZWxkLCB0aGlzLl92YWx1ZSkudmFsaWRhdGUoKS52YWxpZCkge1xyXG5cdFx0XHRsZXQgaXNEZWNpbWFsID0gdGhpcy5fdmFsdWUudG9TdHJpbmcoKS5zcGxpdChcIi5cIikubGVuZ3RoID4gMTtcclxuXHRcdFx0bGV0IGNvbnZlcnRlZCA9IGlzRGVjaW1hbCA/IHBhcnNlRmxvYXQodGhpcy5fdmFsdWUpIDogcGFyc2VJbnQodGhpcy5fdmFsdWUpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKGNvbnZlcnRlZCA8PSB0aGlzLl92YWxpZGF0b3JWYWx1ZXMpXHJcblx0XHRcdFx0dGhpcy5fdmFsaWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHZhbGlkOiB0aGlzLl92YWxpZCxcclxuXHRcdFx0bWVzc2FnZTogdGhpcy5fbWVzc2FnZVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCZXR3ZWVuIGV4dGVuZHMgUnVsZSB7XHJcblx0LyoqXHJcblx0ICogVGVzdHMgd2hldGhlciB0aGUgdmFsdWUgaXMgbm8gbW9yZSBhbmQgbGVzcyB0aGFuIHRoZSBwcm92aWRlZCB2YWxpZGF0b3IgdmFsdWUuIElmIGFuIGFycmF5IGlzIHBhc3NlZCBhcyBhIHZhbHVlLCB0aGUgbGVuZ3RoIG9mIHRoZSBhcnJheSBwcm92aWRlZCB3aWxsIGJlIHRlc3RlZC5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge1N0cmluZ31cdGZpZWxkXHRcdFx0VGhlIG5hbWUgb2YgdGhlIGZpZWxkIGJlaW5nIHRlc3RlZFxyXG5cdCAqIEBwYXJhbSB7QW55fSBcdHZhbHVlXHRcdFx0VGhlIHZhbHVlIHRvIHZhbGlkYXRlXHJcblx0ICogQHBhcmFtIHtBcnJheX1cdHZhbGlkYXRvclZhbHVlc1x0QW4gYXJyYXkgb2YgdmFsdWVzIHRoYXQgdGhlIHZhbGlkYXRvciBoYXMuIE9ubHkgcmV0cmlldmVzIHRoZSBmaXJzdCB0d28gdmFsdWVzIChtaW4sIG1heCkgZHVlIHRvIGhvdyB0aGUgcnVsZSB3b3Jrc1xyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfVx0bWVzc2FnZVx0XHRcdFRoZSBtZXNzYWdlIHRvIHVzZSB3aGVuIHRoZSBydWxlIGZhaWxzXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoZmllbGQsIHZhbHVlLCB2YWxpZGF0b3JWYWx1ZXMsIG1lc3NhZ2UgPSBcIlRoZSA6YXR0ciBtdXN0IGJlIGJldHdlZW4gOm1pbiBhbmQgOm1heFwiKSB7XHJcblx0XHRpZiAodHlwZW9mIHZhbGlkYXRvclZhbHVlcyAhPSAnb2JqZWN0JyB8fCB2YWxpZGF0b3JWYWx1ZXMuY29uc3RydWN0b3IubmFtZSAhPSAnQXJyYXknKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEltcHJvcGVyIHZhbGlkYXRvciB2YWx1ZSBmb3JtYXQ6XFxuXFx0TmVlZHMgYXJyYXksICR7dHlwZW9mIHZhbGlkYXRvclZhbHVlc30gaXMgcGFzc2VkYCk7XHJcblx0XHRlbHNlIGlmICh2YWxpZGF0b3JWYWx1ZXMubGVuZ3RoIDwgMilcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBOb3QgZW5vdWdoIHZhbGlkYXRvciB2YWx1ZSBwYXNzZWQ6XFxuXFx0TmVlZHMgMiwgb25seSAke3ZhbGlkYXRvclZhbHVlcy5sZW5ndGh9IGlzIHBhc3NlZC5gKTtcclxuXHJcblx0XHRpZiAodmFsaWRhdG9yVmFsdWVzWzBdID4gdmFsaWRhdG9yVmFsdWVzWzFdKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE1pbmltdW0gdmFsdWUgaXMgbGFyZ2VyIHRoYW4gdGhlIG1heGltdW0gdmFsdWU6XFxuXFx0TWluaW11bSB2YWx1ZSBzaG91bGQgYmUgbGVzcyB0aGFuICR7dmFsaWRhdG9yVmFsdWVzWzFdfSwgJHt2YWxpZGF0b3JWYWx1ZXNbMF19IGlzIHByb3ZpZGVkLmApO1xyXG5cclxuXHRcdGlmICh2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lID09IFwiQXJyYXlcIilcclxuXHRcdFx0dmFsdWUgPSB2YWx1ZS5sZW5ndGg7XHJcblxyXG5cdFx0bWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZUFsbCgvKDptaW4pL2dpLCB2YWxpZGF0b3JWYWx1ZXNbMF0pO1xyXG5cdFx0bWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZUFsbCgvKDptYXgpL2dpLCB2YWxpZGF0b3JWYWx1ZXNbMV0pO1xyXG5cclxuXHRcdHN1cGVyKGZpZWxkLCB2YWx1ZSwgW3ZhbGlkYXRvclZhbHVlc1swXSwgdmFsaWRhdG9yVmFsdWVzWzFdXSwgbWVzc2FnZSk7XHJcblx0fVxyXG5cclxuXHR2YWxpZGF0ZSgpIHtcclxuXHRcdGlmIChuZXcgTnVtZXJpYyh0aGlzLl9maWVsZCwgdGhpcy5fdmFsdWUpLnZhbGlkYXRlKCkudmFsaWQpIHtcclxuXHRcdFx0bGV0IGlzRGVjaW1hbCA9IHRoaXMuX3ZhbHVlLnNwbGl0KFwiLlwiKS5sZW5ndGggPiAxO1xyXG5cdFx0XHRsZXQgY29udmVydGVkID0gaXNEZWNpbWFsID8gcGFyc2VGbG9hdCh0aGlzLl92YWx1ZSkgOiBwYXJzZUludCh0aGlzLl92YWx1ZSk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoY29udmVydGVkID49IHRoaXMuX3ZhbGlkYXRvclZhbHVlc1swXSAmJiBjb252ZXJ0ZWQgPD0gdGhpcy5fdmFsaWRhdG9yVmFsdWVzWzFdKVxyXG5cdFx0XHRcdHRoaXMuX3ZhbGlkID0gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR2YWxpZDogdGhpcy5fdmFsaWQsXHJcblx0XHRcdG1lc3NhZ2U6IHRoaXMuX21lc3NhZ2VcclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXJyYXkgZXh0ZW5kcyBSdWxlIHtcclxuXHQvKipcclxuXHQgKiBUZXN0cyB3aGV0aGVyIHRoZSB2YWx1ZSBpcyBubyBtb3JlIGFuZCBsZXNzIHRoYW4gdGhlIHByb3ZpZGVkIHZhbGlkYXRvciB2YWx1ZS5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge1N0cmluZ31cdGZpZWxkXHRcdFx0VGhlIG5hbWUgb2YgdGhlIGZpZWxkIGJlaW5nIHRlc3RlZFxyXG5cdCAqIEBwYXJhbSB7QW55fSBcdHZhbHVlXHRcdFx0VGhlIHZhbHVlIHRvIHZhbGlkYXRlXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcdFx0XHRUaGUgbWVzc2FnZSB0byB1c2Ugd2hlbiB0aGUgcnVsZSBmYWlsc1xyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKGZpZWxkLCB2YWx1ZSwgbWVzc2FnZSA9IFwiVGhlIDphdHRyIG11c3QgYmUgYW4gYXJyYXlcIikge1xyXG5cdFx0c3VwZXIoZmllbGQsIHZhbHVlLCB1bmRlZmluZWQsIG1lc3NhZ2UpO1xyXG5cdH1cclxuXHJcblx0dmFsaWRhdGUoKSB7XHJcblx0XHRpZiAodHlwZW9mIHRoaXMuX3ZhbHVlID09ICdvYmplY3QnICYmIHRoaXMuX3ZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgPT0gJ0FycmF5Jykge1xyXG5cdFx0XHR0aGlzLl92YWxpZCA9IHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dmFsaWQ6IHRoaXMuX3ZhbGlkLFxyXG5cdFx0XHRtZXNzYWdlOiB0aGlzLl9tZXNzYWdlXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEluIGV4dGVuZHMgUnVsZSB7XHJcblx0LyoqXHJcblx0ICogVGVzdHMgd2hldGhlciB0aGUgdmFsdWUgaXMgbm8gbW9yZSBhbmQgbGVzcyB0aGFuIHRoZSBwcm92aWRlZCB2YWxpZGF0b3IgdmFsdWUuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9XHRmaWVsZFx0XHRcdFRoZSBuYW1lIG9mIHRoZSBmaWVsZCBiZWluZyB0ZXN0ZWRcclxuXHQgKiBAcGFyYW0ge0FueX0gXHR2YWx1ZVx0XHRcdFRoZSB2YWx1ZSB0byB2YWxpZGF0ZVxyXG5cdCAqIEBwYXJhbSB7QXJyYXl9XHR2YWxpZGF0b3JWYWx1ZXNcdEFuIGFycmF5IG9mIHZhbHVlcyB0aGF0IHRoZSB2YWxpZGF0b3IgaGFzLiBPbmx5IHJldHJpZXZlcyB0aGUgZmlyc3QgdmFsdWUgZHVlIHRvIGhvdyB0aGUgcnVsZSB3b3Jrc1xyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfVx0bWVzc2FnZVx0XHRcdFRoZSBtZXNzYWdlIHRvIHVzZSB3aGVuIHRoZSBydWxlIGZhaWxzXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoZmllbGQsIHZhbHVlLCB2YWxpZGF0b3JWYWx1ZXMsIG1lc3NhZ2UgPSBcIlRoZSBzZWxlY3RlZCA6YXR0ciBpcyBpbnZhbGlkXCIpIHtcclxuXHRcdGlmICh0eXBlb2YgdmFsaWRhdG9yVmFsdWVzICE9ICdvYmplY3QnIHx8IHZhbGlkYXRvclZhbHVlcy5jb25zdHJ1Y3Rvci5uYW1lICE9ICdBcnJheScpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihgSW1wcm9wZXIgdmFsaWRhdG9yIHZhbHVlIGZvcm1hdDpcXG5cXHROZWVkcyBhcnJheSwgJHt0eXBlb2YgdmFsaWRhdG9yVmFsdWVzfSBpcyBwYXNzZWRgKTtcclxuXHRcdGVsc2UgaWYgKHZhbGlkYXRvclZhbHVlcy5sZW5ndGggPCAxKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE5vdCBlbm91Z2ggdmFsaWRhdG9yIHZhbHVlIHBhc3NlZDpcXG5cXHROZWVkcyBhdCBsZWFzdCAxLCBvbmx5ICR7dmFsaWRhdG9yVmFsdWVzLmxlbmd0aH0gaXMgcGFzc2VkLmApO1xyXG5cclxuXHRcdHN1cGVyKGZpZWxkLCB2YWx1ZSwgdmFsaWRhdG9yVmFsdWVzLCBtZXNzYWdlKTtcclxuXHR9XHJcblxyXG5cdHZhbGlkYXRlKCkge1xyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLl92YWx1ZSAhPSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRpZiAodGhpcy5fdmFsaWRhdG9yVmFsdWVzLmluY2x1ZGVzKHRoaXMuX3ZhbHVlLnRvU3RyaW5nKCkpKSB7XHJcblx0XHRcdFx0dGhpcy5fdmFsaWQgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dmFsaWQ6IHRoaXMuX3ZhbGlkLFxyXG5cdFx0XHRtZXNzYWdlOiB0aGlzLl9tZXNzYWdlXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE51bGxhYmxlIGV4dGVuZHMgUnVsZSB7XHJcblx0LyoqXHJcblx0ICogVGVzdHMgd2hldGhlciB0aGUgdmFsdWUgaXMgbnVsbCB3aGVuIG5vIG90aGVyIHZhbHVlIGlzIHByb3ZpZGVkLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfVx0ZmllbGRcdFx0XHRUaGUgbmFtZSBvZiB0aGUgZmllbGQgYmVpbmcgdGVzdGVkXHJcblx0ICogQHBhcmFtIHtBbnl9IFx0dmFsdWVcdFx0XHRUaGUgdmFsdWUgdG8gdmFsaWRhdGVcclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVx0XHRcdFRoZSBtZXNzYWdlIHRvIHVzZSB3aGVuIHRoZSBydWxlIGZhaWxzXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoZmllbGQsIHZhbHVlLCBtZXNzYWdlID0gXCJUaGUgOmF0dHIgZmllbGQgY2FuIGJlIG51bGxcIikge1xyXG5cdFx0c3VwZXIoZmllbGQsIHZhbHVlLCBtZXNzYWdlKTtcclxuXHR9XHJcblxyXG5cdHZhbGlkYXRlKCkge1xyXG5cdFx0bGV0IHJ1bk90aGVyVmFsaWRhdGlvbiA9IHRydWU7XHJcblx0XHR0aGlzLl92YWxpZCA9IHRydWU7XHJcblxyXG5cdFx0aWYgKHRoaXMuX3ZhbHVlID09PSBudWxsIHx8IHRoaXMuX3ZhbHVlID09PSBcIlwiKSB7XHJcblx0XHRcdHJ1bk90aGVyVmFsaWRhdGlvbiA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHZhbGlkOiB0aGlzLl92YWxpZCxcclxuXHRcdFx0bWVzc2FnZTogdGhpcy5fbWVzc2FnZSxcclxuXHRcdFx0cnVuT3RoZXJWYWxpZGF0aW9uOiBydW5PdGhlclZhbGlkYXRpb25cclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3RyaW5nIGV4dGVuZHMgUnVsZSB7XHJcblx0LyoqXHJcblx0ICogVGVzdHMgd2hldGhlciB0aGUgdmFsdWUgaXMgYSBzdHJpbmcgb3Igbm90LlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfVx0ZmllbGRcdFx0XHRUaGUgbmFtZSBvZiB0aGUgZmllbGQgYmVpbmcgdGVzdGVkXHJcblx0ICogQHBhcmFtIHtBbnl9IFx0dmFsdWVcdFx0XHRUaGUgdmFsdWUgdG8gdmFsaWRhdGVcclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVx0XHRcdFRoZSBtZXNzYWdlIHRvIHVzZSB3aGVuIHRoZSBydWxlIGZhaWxzXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoZmllbGQsIHZhbHVlLCBtZXNzYWdlID0gXCJUaGUgOmF0dHIgZmllbGQgaXMgbm90IGEgc3RyaW5nXCIpIHtcclxuXHRcdHN1cGVyKGZpZWxkLCB2YWx1ZSwgbWVzc2FnZSk7XHJcblx0fVxyXG5cclxuXHR2YWxpZGF0ZSgpIHtcclxuXHRcdGlmICghdGhpcy5fdmFsdWUpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR2YWxpZDogdGhpcy5fdmFsaWQsXHJcblx0XHRcdFx0bWVzc2FnZTogdGhpcy5fbWVzc2FnZVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHJlc3BvbnNlID0gdGhpcy5fdmFsdWUubWF0Y2goL1thLXpBLVowLTlcXC4sXFxcXFxcL1wiJ1xcKFxcKVxcW1xcXXt9XFwtXFwrXz1cXCpcXCYlXFwhQCNcXCRcXF48PlxcP1xcc10rLyk7XHJcblx0XHRyZXNwb25zZSA9IHJlc3BvbnNlID8/IFtdO1xyXG5cclxuXHRcdGlmIChyZXNwb25zZS5sZW5ndGggPT0gMSlcclxuXHRcdFx0dGhpcy5fdmFsaWQgPSB0cnVlO1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHZhbGlkOiB0aGlzLl92YWxpZCxcclxuXHRcdFx0bWVzc2FnZTogdGhpcy5fbWVzc2FnZVxyXG5cdFx0fTtcclxuXHR9XHJcbn0iLCIvLyBVdGlsaXR5XHJcbmltcG9ydCBVbmlxdWVBcnJheSBmcm9tIFwiLi4vLi4vLi4vanMvdXRpbC91bmlxdWUtYXJyYXkvdW5pcXVlLWFycmF5Lm1vZC5qc1wiO1xyXG5pbXBvcnQgKiBhcyBSdWxlcyBmcm9tIFwiLi9SdWxlcy5qc1wiO1xyXG5cclxuLy8gTW9kdWxlXHJcbmltcG9ydCBNZXNzYWdlQmFnIGZyb20gXCIuL01lc3NhZ2VCYWcuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGlkYXRvciB7XHJcblx0LyoqXHJcblx0ICogQSBjb250YWluZXIgZm9yIGFsbCBhcnJheSBmaWVsZHMgcGFzc2VkIHRvIHRoaXMgdmFsaWRhdG9yLiBWYWx1ZXMgY29udGFpbmVkIGluIGhlcmVcclxuXHQgKiBhcmUgZm9ybWF0dGVkIHRvIGJlIGEga2V5LXZhbHVlIHBhaXIuXHJcblx0ICovXHJcblx0I2FyckZpZWxkc0luZGV4ID0ge307XHJcblx0LyoqXHJcblx0ICogQSBjb250YWluZXIgZm9yIGFsbCB0aGUgZmllbGRzIHRoYXQgYXJlIGRvbmUgYmVpbmcgdmFsaWRhdGVkLlxyXG5cdCAqL1xyXG5cdCNjaGVja2VkRmllbGRzID0gW107XHJcblx0LyoqXHJcblx0ICogQSBjb250YWluZXIgZm9yIGFsbCB0aGUgbmV3IGZpZWxkIG5hbWVzXHJcblx0ICovXHJcblx0I2ZpZWxkTmFtZXMgPSBbXTtcclxuXHJcblx0Ly8gUHJpdmF0ZSB2YXJpYWJsZXNcclxuXHQvKipcclxuXHQgKiBBIHByaXZhdGUgZ2xvYmFsIHZhcmlhYmxlIGNvbnRhaW5lciBmb3IgYWxsIHRoZSB2YWx1ZXMgcGFzc2VkIHRvIHRoaXMuXHJcblx0ICovXHJcblx0I3ZhbHVlTGlzdDtcclxuXHQvKipcclxuXHQgKiBBIHByaXZhdGUgZ2xvYmFsIHZhcmlhYmxlIGNvbnRhaW5lciBmb3IgYWxsIHRoZSBydWxlcyBwYXNzZWQgdG8gdGhpcy5cclxuXHQgKi9cclxuXHQjcnVsZUxpc3Q7XHJcblx0LyoqXHJcblx0ICogQSBwcml2YXRlIGdsb2JhbCB2YXJpYWJsZSBjb250YWluZXIgZm9yIGFsbCB0aGUgbWVzc2FnZXMgcGFzc2VkIHRvIHRoaXMuXHJcblx0ICovXHJcblx0I21lc3NhZ2VMaXN0O1xyXG5cdC8qKlxyXG5cdCAqIEEgcHJpdmF0ZSBnbG9iYWwgdmFyaWFibGUgY29udGFpbmVyIGZvciB0aGUgYE1lc3NhZ2VCYWdgIGluc3RhbmNlLlxyXG5cdCAqL1xyXG5cdCNlcnJvcnM7XHJcblx0LyoqXHJcblx0ICogQSBwcml2YXRlIGdsb2JhbCB2YXJpYWJsZSBjb250YWluZXIsIGNvbnRhaW5pbmcgYWxsIHZhbGlkIHZhbHVlcy5cclxuXHQgKi9cclxuXHQjdmFsaWRhdGVkID0ge307XHJcblx0LyoqXHJcblx0ICogQSBwcml2YXRlIGdsb2JhbCB2YXJpYWJsZSBjb250YWluZXIsIGlkZW50aWZ5aW5nIGlmIHRoaXMgdmFsaWRhdG9yJ3MgdmFsaWRhdGlvbiBoYXMgZmFpbGVkLlxyXG5cdCAqL1xyXG5cdCNmYWlsZWQgPSBmYWxzZTtcclxuXHQvKipcclxuXHQgKiBBIHByaXZhdGUgZ2xvYmFsIHZhcmlhYmxlIGNvbnRhaW5lciB0aGF0IGRldGVybWluZXMgaWYgdGhlIHZhbGlkYXRpb24gaGFzIGJlZW4gcnVuIGFscmVhZHkuXHJcblx0ICovXHJcblx0I3ZhbGlkYXRpb25Eb25lID0gZmFsc2U7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFxyXG5cdCAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBhIFZhbGlkYXRvclxyXG5cdCAqICogKiAqXHJcblx0ICogKipFeGFtcGxlIEEuMToqKlxyXG5cdCAqIGBgYGphdmFzY3JpcHRcclxuXHQgKiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gXHQgKiBcdGxldCB2YWxpZCA9IGZhbHNlO1xyXG4gXHQgKiBcdGxldCBtc2cgPSBcIlByb3ZpZGVkIHZhbHVlIGlzIG5vdCBhbiBhcnJheVwiO1xyXG4gXHQgKiBcclxuXHQgKiBcdGlmICh2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIkFycmF5XCIpXHJcblx0ICogXHRcdHZhbGlkID0gdHJ1ZTtcclxuXHQgKiBcclxuXHQgKiBcdHJldHVybiB7XHJcblx0ICogXHRcdHZhbGlkOiB2YWxpZCxcclxuXHQgKiBcdFx0bWVzc2FnZTogbXNnXHJcblx0ICogXHR9O1xyXG5cdCAqIH1cclxuXHQgKiBgYGBcclxuXHQgKiAqICogKlxyXG5cdCAqICoqRXhhbXBsZSBBLjI6KipcclxuXHQgKiBgYGBqYXZhc2NyaXB0XHJcblx0ICogKHZhbHVlKSA9PiB7XHJcblx0ICogXHRsZXQgdmFsaWQgPSBmYWxzZTtcclxuIFx0ICogXHRsZXQgbXNnID0gXCJQcm92aWRlZCB2YWx1ZSBpcyBub3QgYW4gYXJyYXlcIjtcclxuIFx0ICogXHJcblx0ICogXHRpZiAodmFsdWUuY29uc3RydWN0b3IubmFtZSA9PT0gXCJBcnJheVwiKVxyXG5cdCAqIFx0XHR2YWxpZCA9IHRydWU7XHJcblx0ICogXHJcblx0ICogXHRyZXR1cm4ge1xyXG5cdCAqIFx0XHR2YWxpZDogdmFsaWQsXHJcblx0ICogXHRcdG1lc3NhZ2U6IG1zZ1xyXG5cdCAqIFx0fTtcclxuXHQgKiB9XHJcblx0ICogYGBgXHJcblx0ICogKiAqICpcclxuXHQgKiAqKkV4YW1wbGUgQi4xOioqXHJcblx0ICogYGBgamF2YXNjcmlwdFxyXG5cdCAqIGZ1bmN0aW9uKCkge1xyXG5cdCAqIFx0bGV0IHZhbGlkID0gZmFsc2U7XHJcbiBcdCAqIFx0bGV0IG1zZyA9IFwiUHJvdmlkZWQgdmFsdWUgaXMgbm90IGFuIGFycmF5XCI7XHJcbiBcdCAqIFxyXG5cdCAqIFx0aWYgKHR5cGVvZiBnbG9iYWxWYXIgIT0gXCJ1bmRlZmluZWRcIilcclxuXHQgKiBcdFx0dmFsaWQgPSB0cnVlO1xyXG5cdCAqIFx0XHJcblx0ICogXHRyZXR1cm4ge1xyXG5cdCAqIFx0XHR2YWxpZDogdmFsaWQsXHJcblx0ICogXHRcdG1lc3NhZ2U6IG1zZ1xyXG5cdCAqIFx0fTtcclxuXHQgKiB9XHJcblx0ICogYGBgXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtPYmplY3R9XHR2YWx1ZXNcdEEgSlNPTiBvYmplY3QgY29udGFpbmluZyBhIGtleS12YWx1ZSBwYWlyIGZvciB0aGUgZmllbGRzIGFuZCBpdHMgdmFsdWUuXHJcblx0ICogQHBhcmFtIHtPYmplY3R9XHRydWxlc1x0QSBKU09OIG9iamVjdCBjb250YWluaW5nIGEga2V5LXZhbHVlIHBhaXIgZm9yIHRoZSBmaWVsZHMnIHJ1bGVzLiBBIHJ1bGUgbXVzdCBiZSBvbmUgb2YgdGhlIGNsYXNzZXMgd2l0aGluIGBSdWxlLmpzYCBvciBhIGN1c3RvbSBmdW5jdGlvbiB0aGF0IHRha2VzIGluIDEgcGFyYW1ldGVyICh2YWx1ZSkgYW5kIHJldHVybnMgYSBKU09OIG9iamVjdCB3aXRoIDIgdmFsdWVzICh2YWxpZDogYm9vbGVhbiwgbWVzc2FnZTogU3RyaW5nKS4gQW4gZXhhbXBsZSBvZiBhIGZ1bmN0aW9uIGlzICoqRXhhbXBsZSBBLjEqKiwgKipFeGFtcGxlIEEuMioqLCBhbmQgKipFeGFtcGxlIEIuMSoqXHJcblx0ICogQHBhcmFtIHtPYmplY3R9XHRtZXNzYWdlXHRBIEpTT04gb2JqZWN0IGNvbnRhaW5pbmcgYSBrZXktdmFsdWUgcGFpciBmb3IgdGhlIGZpZWxkcycgbWVzc2FnZXNcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3Rvcih2YWx1ZXMsIHJ1bGVzLCBtZXNzYWdlcykge1xyXG5cdFx0Ly8gSW5pdGlhbGl6ZSBuZWNlc3NhcnkgdXRpbGl0aWVzXHJcblx0XHRVbmlxdWVBcnJheSgpO1xyXG5cclxuXHRcdC8vIFNldCBleHRlcm5hbCB2YXJpYWJsZXNcclxuXHRcdHRoaXMuI3ZhbHVlTGlzdCA9IHZhbHVlcztcclxuXHRcdHRoaXMuI3J1bGVMaXN0ID0gcnVsZXM7XHJcblx0XHR0aGlzLiNtZXNzYWdlTGlzdCA9IG1lc3NhZ2VzO1xyXG5cclxuXHRcdHRoaXMuI2Vycm9ycyA9IG5ldyBNZXNzYWdlQmFnKCk7XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIFJ1bnMgdGhlIHZhbGlkYXRpb24uXHJcblx0ICovXHJcblx0I3J1blZhbGlkYXRpb24oKSB7XHJcblx0XHRmb3IgKGxldCBrIG9mIE9iamVjdC5rZXlzKHRoaXMuI3J1bGVMaXN0KSkge1xyXG5cdFx0XHQvLyBJZGVudGlmeSB0aGVpciBmaWVsZCBuYW1lIGFuZCB2YWx1ZXNcclxuXHRcdFx0bGV0IGZpZWxkID0gaztcclxuXHRcdFx0bGV0IGluZGV4ID0gMDtcclxuXHRcdFx0bGV0IHJ1bk90aGVyVmFsaWRhdGlvbiA9IGZhbHNlO1xyXG5cclxuXHRcdFx0Ly8gRmV0Y2ggcnVsZXMgYW5kIG1lc3NhZ2VzXHJcblx0XHRcdGxldCBydWxlcyA9IFZhbGlkYXRvci4jZmV0Y2hSdWxlcyhmaWVsZCwgdGhpcy4jcnVsZUxpc3QsIGluZGV4KTtcclxuXHRcdFx0bGV0IG1lc3NhZ2VzID0gVmFsaWRhdG9yLiNmZXRjaE1lc3NhZ2VzKGZpZWxkLCB0aGlzLiNtZXNzYWdlTGlzdCwgaW5kZXgpO1xyXG5cclxuXHRcdFx0Ly8gVmVyaWZ5IGlmIGEgXCJyZXF1aXJlZFwiIHJ1bGUgZXhpc3RzLiBJZiBpdCBkb2VzLCB0aGVuIGp1c3QgcnVuIHRoZSB2YWxpZGF0aW9uIGZvciB0aGF0IHJ1bGUgb25seS5cclxuXHRcdFx0aWYgKHJ1bGVzLmluY2x1ZGVzKCdyZXF1aXJlZCcpKSB7XHJcblx0XHRcdFx0cnVuT3RoZXJWYWxpZGF0aW9uID0gdGhpcy4jdmFsaWRhdGVGaWVsZChmaWVsZCwgdGhpcy4jdmFsdWVMaXN0W2ZpZWxkXSwgW1wicmVxdWlyZWRcIl0sIG1lc3NhZ2VzKTtcclxuXHRcdFx0XHRydWxlcy5zcGxpY2UocnVsZXMuaW5kZXhPZihcInJlcXVpcmVkXCIpLCAxKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBWZXJpZnkgaWYgYSBcInJlcXVpcmVkX2lmXCIgcnVsZSBleGlzdHMuIElmIGl0IGRvZXMsIHRoZW4ganVzdCBydW4gdGhlIHZhbGlkYXRpb24gZm9yIHRoYXQgcnVsZSBvbmx5LlxyXG5cdFx0XHRlbHNlIGlmIChydWxlcy50b1N0cmluZygpLm1hdGNoKFwicmVxdWlyZWRfaWZcIikpIHtcclxuXHRcdFx0XHRsZXQgcnVsZUluZGV4ID0gMDtcclxuXHRcdFx0XHRydWxlcy5mb3JFYWNoKCh2LCBrKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAodi5tYXRjaCgvcmVxdWlyZWRfaWYvZykpIHtcclxuXHRcdFx0XHRcdFx0cnVsZUluZGV4ID0gaztcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRsZXQgcnVsZSA9IHJ1bGVzLnNwbGljZShydWxlSW5kZXgsIDEpO1xyXG5cclxuXHRcdFx0XHRydW5PdGhlclZhbGlkYXRpb24gPSB0aGlzLiN2YWxpZGF0ZUZpZWxkKGZpZWxkLCB0aGlzLiN2YWx1ZUxpc3RbZmllbGRdLCBydWxlLCBtZXNzYWdlcyk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gVmVyaWZ5IGlmIGEgXCJzb21ldGltZXNcIiBydWxlIGV4aXN0cy4gSWYgaXQgZG9lcywgdGhlbiBqdXN0IHJ1biB0aGUgdmFsaWRhdGlvbiBmb3IgdGhhdCBydWxlIG9ubHkuXHJcblx0XHRcdGVsc2UgaWYgKHJ1bGVzLmluY2x1ZGVzKCdzb21ldGltZXMnKSkge1xyXG5cdFx0XHRcdHJ1bk90aGVyVmFsaWRhdGlvbiA9IHRoaXMuI3ZhbGlkYXRlRmllbGQoZmllbGQsIHRoaXMuI3ZhbHVlTGlzdFtmaWVsZF0sIFtcInNvbWV0aW1lc1wiXSwgbWVzc2FnZXMpO1xyXG5cdFx0XHRcdHJ1bGVzLnNwbGljZShydWxlcy5pbmRleE9mKFwic29tZXRpbWVzXCIpLCAxKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBWZXJpZnkgaWYgYSBcIm51bGxhYmxlXCIgcnVsZSBleGlzdHMuIElmIGl0IGRvZXMsIHRoZW4ganVzdCBydW4gdGhlIHZhbGlkYXRpb24gZm9yIHRoYXQgcnVsZSBvbmx5LlxyXG5cdFx0XHRlbHNlIGlmIChydWxlcy5pbmNsdWRlcyhgbnVsbGFibGVgKSkge1xyXG5cdFx0XHRcdHJ1bk90aGVyVmFsaWRhdGlvbiA9IHRoaXMuI3ZhbGlkYXRlRmllbGQoZmllbGQsIHRoaXMuI3ZhbHVlTGlzdFtmaWVsZF0sIFtcIm51bGxhYmxlXCJdLCBtZXNzYWdlcyk7XHJcblx0XHRcdFx0cnVsZXMuc3BsaWNlKHJ1bGVzLmluZGV4T2YoXCJudWxsYWJsZVwiKSwgMSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIFRoZSBhY3R1YWwgdmFsaWRhdGlvbjsgTE1BT1xyXG5cdFx0XHRpZiAocnVuT3RoZXJWYWxpZGF0aW9uKSB7XHJcblx0XHRcdFx0dGhpcy4jdmFsaWRhdGVGaWVsZChmaWVsZCwgdGhpcy4jdmFsdWVMaXN0W2ZpZWxkXSwgcnVsZXMsIG1lc3NhZ2VzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy4jY2hlY2tlZEZpZWxkcy5wdXNoKGZpZWxkKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy4jZXJyb3JzLmZpZWxkcygpLmxlbmd0aCA+IDApXHJcblx0XHRcdHRoaXMuI2ZhaWxlZCA9IHRydWU7XHJcblxyXG5cdFx0dGhpcy4jdmFsaWRhdGlvbkRvbmUgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRmV0Y2hlcyB0aGUgcnVsZXMgZnJvbSB0aGUgSlNPTiBvYmplY3QgcGFzc2VkIGF0IGBvYmpgIHVzaW5nIHRoZSBwcm92aWRlZCBmaWVsZCBuYW1lIGF0IGBmaWVsZGBcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge1N0cmluZ31cdGZpZWxkXHRcdFx0XHRUaGUgbmFtZSBvZiB0aGUgZmllbGQgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgcnVsZSBrZXlcclxuXHQgKiBAcGFyYW0ge09iamVjdH1cdG9ialx0XHRcdFx0XHRUaGUgSlNPTiBvYmplY3QgdGhhdCBjb250YWlucyB0aGUgcnVsZXMgcGFzc2VkIHRvIHRoZSBWYWxpZGF0b3IgaW5zdGFuY2VcclxuXHQgKiBAcGFyYW0ge051bWJlcn1cdGluZGV4XHRcdFx0XHRJZiB0aGUgcGFzc2VkIGZpZWxkIGlzIGFuIGFycmF5LCB0aGUgYGluZGV4YCB3aWxsIGlkZW50aWZ5IHdoYXQgaW5kZXggdGhlIGZpZWxkIGlzIHRvIGFjY3VyYXRlbHkgZmV0Y2ggdGhlIHJ1bGUgZm9yIHRoYXQgc3BlY2lmaWMgZmllbGQ7IERlZmF1bHRzIHRvIDAgaWYgbm8gdmFsdWUgaXMgcGFzc2VkXHJcblx0ICogQHBhcmFtIHtCb29sZWFufVx0aXNBcnJheUNvbnRhaW5lclx0SWRlbnRpZnkgaWYgdGhlIGZpZWxkIGJlaW5nIHBhc3NlZCBpcyBhbiBhcnJheSBjb250YWluZXIuIEFuIGFycmF5IGNvbnRhaW5lciBpcyBhIGZpZWxkIHdoaWNoIGhhcyBhIHNxdWFyZSBicmFja2V0IChgW11gKTsgRGVmYXVsdHMgdG8gYGZhbHNlYCBpZiBubyB2YWx1ZSBpcyBwYXNzZWQuXHJcblx0ICogXHJcblx0ICogQHJldHVybiB7T2JqZWN0fVx0XHRBIEpTT04gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSBydWxlcyBmb3IgdGhlIHByb3ZpZGVkIGBmaWVsZGBcclxuXHQgKi9cclxuXHRzdGF0aWMgI2ZldGNoUnVsZXMoZmllbGQsIG9iaiwgaW5kZXggPSAwLCBpc0FycmF5Q29udGFpbmVyID0gZmFsc2UpIHtcclxuXHRcdGxldCBydWxlcyA9IG9ialtmaWVsZF07XHJcblx0XHRydWxlcyA9ICh0eXBlb2YgcnVsZXMgPT0gJ3VuZGVmaW5lZCcpID8gW10gOiBydWxlcztcclxuXHJcblx0XHRpZiAoIWlzQXJyYXlDb250YWluZXIpIHtcclxuXHRcdFx0ZmllbGQgPSBmaWVsZC5zdWJzdHIoMCwgZmllbGQubGFzdEluZGV4T2YoXCIuXCIpKTtcclxuXHJcblx0XHRcdGxldCBhZGRpdGlvbmFsUnVsZXMgPSBvYmpbYCR7ZmllbGR9LiR7aW5kZXh9YF07XHJcblx0XHRcdHJ1bGVzID0gKHR5cGVvZiBhZGRpdGlvbmFsUnVsZXMgPT0gJ3VuZGVmaW5lZCcpID8gcnVsZXMgOiBydWxlcy5jb25jYXQoYWRkaXRpb25hbFJ1bGVzKTtcclxuXHJcblx0XHRcdGFkZGl0aW9uYWxSdWxlcyA9IG9ialtgJHtmaWVsZH0uKmBdO1xyXG5cdFx0XHRydWxlcyA9ICh0eXBlb2YgYWRkaXRpb25hbFJ1bGVzID09ICd1bmRlZmluZWQnKSA/IHJ1bGVzIDogcnVsZXMuY29uY2F0KGFkZGl0aW9uYWxSdWxlcyk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJ1bGVzLnVuaXEoKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZldGNoZXMgdGhlIG1lc3NhZ2VzIGZyb20gdGhlIEpTT04gb2JqZWN0IHBhc3NlZCBhdCBgb2JqYCB1c2luZyB0aGUgcHJvdmlkZWQgZmllbGQgbmFtZSBhdCBgZmllbGRgXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9XHRmaWVsZFx0XHRcdFx0VGhlIGJhc2UgbmFtZSBvZiB0aGUgZmllbGQgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgcnVsZSBrZXlcclxuXHQgKiBAcGFyYW0ge09iamVjdH1cdG9ialx0XHRcdFx0XHRUaGUgSlNPTiBvYmplY3QgdGhhdCBjb250YWlucyB0aGUgbWVzc2FnZXMgcGFzc2VkIHRvIHRoZSBWYWxpZGF0b3IgaW5zdGFuY2VcclxuXHQgKiBAcGFyYW0ge051bWJlcn1cdGluZGV4XHRcdFx0XHRJZiB0aGUgcGFzc2VkIGZpZWxkIGlzIGFuIGFycmF5LCB0aGUgYGluZGV4YCB3aWxsIGlkZW50aWZ5IHdoYXQgaW5kZXggdGhlIGZpZWxkIGlzIHRvIGFjY3VyYXRlbHkgZmV0Y2ggdGhlIHJ1bGUgZm9yIHRoYXQgc3BlY2lmaWMgZmllbGQ7IERlZmF1bHRzIHRvIDAgaWYgbm8gdmFsdWUgaXMgcGFzc2VkXHJcblx0ICogQHBhcmFtIHtCb29sZWFufVx0aXNBcnJheUNvbnRhaW5lclx0SWRlbnRpZnkgaWYgdGhlIGZpZWxkIGJlaW5nIHBhc3NlZCBpcyBhbiBhcnJheSBjb250YWluZXIuIEFuIGFycmF5IGNvbnRhaW5lciBpcyBhIGZpZWxkIHdoaWNoIGhhcyBhIHNxdWFyZSBicmFja2V0IChgW11gKTsgRGVmYXVsdHMgdG8gYGZhbHNlYCBpZiBubyB2YWx1ZSBpcyBwYXNzZWQuXHJcblx0ICogXHJcblx0ICogQHJldHVybiB7T2JqZWN0fVx0XHRBIEpTT04gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSBtZXNzYWdlIGZvciB0aGUgcHJvdmlkZWQgYGZpZWxkYFxyXG5cdCAqL1xyXG5cdHN0YXRpYyAjZmV0Y2hNZXNzYWdlcyhmaWVsZCwgb2JqLCBpbmRleCA9IDAsIGlzQXJyYXlDb250YWluZXIgPSBmYWxzZSkge1xyXG5cdFx0bGV0IG1lc3NhZ2VzID0gb2JqW2ZpZWxkXTtcclxuXHRcdG1lc3NhZ2VzID0gKHR5cGVvZiBtZXNzYWdlcyA9PSAndW5kZWZpbmVkJykgPyB7fSA6IG1lc3NhZ2VzO1xyXG5cclxuXHRcdGlmICghaXNBcnJheUNvbnRhaW5lcikge1xyXG5cdFx0XHRmaWVsZCA9IGZpZWxkLnN1YnN0cigwLCBmaWVsZC5sYXN0SW5kZXhPZihcIi5cIikpO1xyXG5cdFx0XHRsZXQgYWRkaXRpb25hbE1lc3NhZ2VzID0gb2JqW2Ake2ZpZWxkfS4ke2luZGV4fWBdO1xyXG5cdFx0XHRtZXNzYWdlcyA9ICh0eXBlb2YgYWRkaXRpb25hbFJ1bGVzID09ICd1bmRlZmluZWQnKSA/IG1lc3NhZ2VzIDogT2JqZWN0LmFzc2lnbihtZXNzYWdlcywgYWRkaXRpb25hbE1lc3NhZ2VzKTtcclxuXHJcblx0XHRcdGFkZGl0aW9uYWxNZXNzYWdlcyA9IG9ialtgJHtmaWVsZH0uKmBdO1xyXG5cdFx0XHRtZXNzYWdlcyA9ICh0eXBlb2YgYWRkaXRpb25hbFJ1bGVzID09ICd1bmRlZmluZWQnKSA/IG1lc3NhZ2VzIDogT2JqZWN0LmFzc2lnbihtZXNzYWdlcywgYWRkaXRpb25hbE1lc3NhZ2VzKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbWVzc2FnZXM7XHJcblx0fVxyXG5cclxuXHQvLyBQUklWQVRFIE1FVEhPRFNcclxuXHQvKipcclxuXHQgKiBWYWxpZGF0ZXMgYSBzaW5nbGUgZmllbGQgdXNpbmcgdGhlIHJ1bGVzIHByb3ZpZGVkLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfVx0ZmllbGRcdFx0VGhlIG5hbWUgb2YgdGhlIGZpZWxkIHRoYXQgd2lsbCBiZSB2YWxpZGF0ZWRcclxuXHQgKiBAcGFyYW0ge09iamVjdH1cdHJ1bGVzXHRcdEEgSlNPTiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIHJ1bGVzIGZvciB0aGlzIGZpZWxkLiBVc2UgdGhlIGAjZmV0Y2hSdWxlcygpYCBtZXRob2QgdG8gZG8gdGhpc1xyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fVx0bWVzc2FnZXNcdEEgSlNPTiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIG1lc3NhZ2VzIGZvciB0aGlzIGZpZWxkLiBVc2UgdGhlIGAjZmV0Y2hNZXNzYWdlcygpYCBtZXRob2QgdG8gZG8gdGhpc1xyXG5cdCAqIFxyXG5cdCAqIEByZXR1cm4ge0Jvb2xlYW59XHRcdEEgYm9vbGVhbiB2YWx1ZSB3aGljaCBpZGVudGlmaWVzIGlmIHRoZSBvdGhlciB2YWxpZGF0aW9ucyBzaG91bGQgYmUgY2hlY2tlZCBvciBub3QuXHJcblx0ICovXHJcblx0I3ZhbGlkYXRlRmllbGQoZmllbGQsIHZhbHVlLCBydWxlcywgbWVzc2FnZXMsIGlzQXJyYXkgPSBmYWxzZSkge1xyXG5cdFx0Ly8gQW4gaXRlcmFibGUgaW5kZXggdXNlZCB0byBpZGVudGlmeSBob3cgbWFueSBjdXN0b20gZnVuY3Rpb24gcnVsZXMgYXJlIHByb3ZpZGVkLlxyXG5cdFx0bGV0IGNsb3N1cmVJbmRleCA9IDA7XHJcblxyXG5cdFx0Ly8gQ29udGFpbnMgYWxsIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb25cclxuXHRcdGxldCB2YWxpZGF0aW9uUmVzdWx0ID0gW107XHJcblx0XHRsZXQgcnVuT3RoZXJWYWxpZGF0aW9uID0gdHJ1ZTtcclxuXHJcblx0XHQvLyBJdGVyYXRlIHRocm91Z2ggdGhlIHJ1bGVzXHJcblx0XHRmb3IgKGxldCBydWxlIG9mIHJ1bGVzKSB7XHJcblx0XHRcdGxldCBvZ1J1bGUgPSBydWxlO1xyXG5cdFx0XHRsZXQgbWVzc2FnZSA9IG1lc3NhZ2VzW3J1bGVdO1xyXG5cdFx0XHRsZXQgdmFsaWRhdG9yVmFsdWVzO1xyXG5cdFx0XHRsZXQgcnVsZVR5cGU7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAodHlwZW9mIHJ1bGUgPT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdC8vIElmIHRoZSBydWxlIGNvbnRhaW5zIGEgdmFsdWUgKGRlbm90ZWQgYnkgYSBjb2xvbiAoOikpLCByZW1vdmVzIHRoZSBsYXR0ZXIgaGFsZiBvZiB0aGUgcnVsZVxyXG5cdFx0XHRcdGlmIChydWxlLnNwbGl0KFwiOlwiKS5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0XHR2YWxpZGF0b3JWYWx1ZXMgPSBydWxlLnNwbGl0KFwiOlwiKVsxXS5zcGxpdCgvXFxzKixcXHMqLyk7XHJcblx0XHRcdFx0XHRydWxlID0gcnVsZS5zcGxpdChcIjpcIilbMF07XHJcblx0XHRcdFx0XHRtZXNzYWdlID0gbWVzc2FnZXNbcnVsZV07XHJcblxyXG5cdFx0XHRcdFx0aWYgKHJ1bGUgPT09IFwicmVxdWlyZWRfaWZcIikge1xyXG5cdFx0XHRcdFx0XHR2YWxpZGF0b3JWYWx1ZXMucHVzaCh0aGlzLiN2YWx1ZUxpc3RbdmFsaWRhdG9yVmFsdWVzWzBdXSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBTcGxpdCB0aGUgcnVsZSB1c2luZyB0aGUgdW5kZXJzY29yZSAoXykgYW5kIHJlc2V0cyB0aGUgcnVsZSB2YXJpYWJsZVxyXG5cdFx0XHRcdGxldCBzcGxpY2VkUnVsZSA9IHJ1bGUuc3BsaXQoXCJfXCIpO1xyXG5cdFx0XHRcdHJ1bGUgPSBcIlwiO1xyXG5cclxuXHRcdFx0XHQvLyBJdGVyYXRlIHRocm91Z2ggdGhlIHNwbGljZWQgcnVsZSBmcm9tIGVhcmxpZXIgYW5kIGFkZCB0aGVtIHVwIHRvIGJlIGEgXCJQYXNjYWxDYXNlXCJcclxuXHRcdFx0XHRmb3IgKGxldCByIG9mIHNwbGljZWRSdWxlKVxyXG5cdFx0XHRcdFx0cnVsZSArPSByLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgci5zbGljZSgxKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgcnVsZU5hbWUgPSBydWxlO1xyXG5cclxuXHRcdFx0Ly8gVXNlcyB0cnktY2F0Y2ggdG8gcHJldmVudCB0aGUgc2NyaXB0IGZyb20gc3RvcHBpbmcgd2hlbiBhbiB1bmtub3duIHJ1bGUgaXMgZW5jb3VudGVyZWQuXHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0Ly8gSWYgdGhlIHJ1bGUgaXMgYSBzdHJpbmcgbmFtZSwgdGhlbiBwcm9jZWVkIHdpdGggdXNpbmcgaXQgd2l0aCB0aGUgYFJ1bGVzYC5cclxuXHRcdFx0XHRpZiAodHlwZW9mIHJ1bGUgPT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdFx0cnVsZSA9ICh0eXBlb2YgdmFsaWRhdG9yVmFsdWVzID09ICd1bmRlZmluZWQnKSA/IG5ldyBSdWxlc1tydWxlXShmaWVsZCwgdmFsdWUsIG1lc3NhZ2UpIDogbmV3IFJ1bGVzW3J1bGVdKGZpZWxkLCB2YWx1ZSwgdmFsaWRhdG9yVmFsdWVzLCBtZXNzYWdlKTtcclxuXHRcdFx0XHRcdHJ1bGUgPSBydWxlLnZhbGlkYXRlKCk7XHJcblx0XHRcdFx0XHRydWxlVHlwZSA9IFwic3RyaW5nXCI7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBydWxlLnJ1bk90aGVyVmFsaWRhdGlvbiA9PSAnYm9vbGVhbicpIHtcclxuXHRcdFx0XHRcdFx0cnVuT3RoZXJWYWxpZGF0aW9uID0gcnVsZS5ydW5PdGhlclZhbGlkYXRpb247XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIElmIHRoZSBydWxlIGlzIGEgZnVuY3Rpb247IGFuIGFub255bW91cyBvciBhIG5hbWVkIGZ1bmN0aW9uLCBwcm9jZWVkIHdpdGgganVzdCB1c2luZyB0aGUgZnVuY3Rpb24uXHJcblx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIHJ1bGUgPT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRcdFx0XHRsZXQgY3VzdG9tUnVsZTtcclxuXHRcdFx0XHRcdC8vIENoZWNrIGlmIHRoZSBmdW5jdGlvbiBoYXMgMiBwYXJhbWV0ZXJzIG9yIG5vdFxyXG5cdFx0XHRcdFx0aWYgKHJ1bGUubGVuZ3RoID09IDIpIHtcclxuXHRcdFx0XHRcdFx0Ly8gUnVucyB0aGUgZnVuY3Rpb24uIE11c3QgcmV0dXJuIGFuIG9iamVjdFxyXG5cdFx0XHRcdFx0XHRjdXN0b21SdWxlID0gcnVsZShmaWVsZCwgdmFsdWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8gSWYgdGhlIGN1c3RvbSBmdW5jdGlvbiBpcyBub3QgZXhhY3RseSAyIHBhcmFtZXRlcnMsIHNraXAgYW5kIHdhcm4gdGhlIGRldmVsb3BlclxyXG5cdFx0XHRcdFx0ZWxzZSBpZiAocnVsZS5sZW5ndGggPiAyIHx8IChydWxlLmxlbmd0aCA8IDIgJiYgcnVsZS5sZW5ndGggIT0gMCkpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihcIlByb3ZpZGVkIHJ1bGUgY2Fubm90IGJlIGV4ZWN1dGVkIGFzIGl0IGRvZXMgbm90IGZvbGxvdyB0aGUgcmVxdWlyZWQgZm9ybWF0LlwiKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vIE90aGVyd2lzZSwgaWYgdGhlIGN1c3RvbSBkb2VzIG5vdCBoYXZlIGEgcGFyYW1ldGVyLCB0aGVuIGp1c3QgY2FsbCBpdC5cclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRjdXN0b21SdWxlID0gcnVsZSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIEFmdGVyIHJ1bm5pbmcgdGhlIGN1c3RvbSBydWxlLCBydW4gYSBjaGVjay4uLlxyXG5cdFx0XHRcdFx0Ly8gSWYgdGhlIHJldHVybmVkIHZhbHVlIGZyb20gdGhlIGN1c3RvbSBydWxlIGlzbid0IGFuIG9iamVjdC4uLlxyXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBjdXN0b21SdWxlICE9PSAnb2JqZWN0Jykge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLndhcm4oXCJDdXN0b20gcnVsZSBtdXN0IHJldHVybiBhIEpTT04gb2JqZWN0LCBjb250YWluaW5nIHRoZSBmb2xsb3dpbmcga2V5czpcIiwgW1widmFsaWRcIiwgXCJtZXNzYWdlXCJdKTtcclxuXHRcdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvLyBJZiB0aGUgcmV0dXJuZWQgdmFsdWUgaXMgYW4gT2JqZWN0LCBjaGVjayBpZiBpdCBoYXMgdGhlIGRlc2lyZWQgb3V0cHV0LiBPdGhlcndpc2UsIHdhcm4gdGhlIHVzZXJcclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRsZXQga2V5cyA9IE9iamVjdC5rZXlzKGN1c3RvbVJ1bGUpLnNvcnQoKS50b1N0cmluZygpO1xyXG5cdFx0XHRcdFx0XHRsZXQgdGFyZ2V0SyA9IFtcInZhbGlkXCIsIFwibWVzc2FnZVwiXS5zb3J0KCkudG9TdHJpbmcoKTtcclxuXHJcblx0XHRcdFx0XHRcdGxldCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKGN1c3RvbVJ1bGUpLnNvcnQoKTtcclxuXHRcdFx0XHRcdFx0bGV0IHRhcmdldFYgPSBbXCJTdHJpbmdcIiwgXCJCb29sZWFuXCJdO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKGtleXMgIT0gdGFyZ2V0SyB8fCAodHlwZW9mIHZhbHVlc1swXSAhPSB0YXJnZXRWWzBdIHx8IHR5cGVvZiB2YWx1ZXNbMV0gIT0gdGFyZ2V0VlsxXSkpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLndhcm4oXHJcblx0XHRcdFx0XHRcdFx0XHRcIlByb3ZpZGVkIEpTT04gZG9lcyBub3QgbWF0Y2ggdGhlIGRlc2lyZWQgb3V0cHV0IVxcblxcblByb3ZpZGVkOlxcblwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y3VzdG9tUnVsZSxcclxuXHRcdFx0XHRcdFx0XHRcdFwiXFxuXFxuRGVzaXJlZDpcXG5cIixcclxuXHRcdFx0XHRcdFx0XHRcdHtcInZhbGlkXCI6IHR5cGVvZiB0cnVlLCBcIm1lc3NhZ2VcIjogdHlwZW9mIFwiU3RyaW5nXCJ9XHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRydWxlID0gY3VzdG9tUnVsZTtcclxuXHRcdFx0XHRcdHJ1bGVUeXBlID0gXCJmdW5jdGlvblwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyBJZiBub25lIG9mIHRoZSBhYm92ZSB3b3Jrcywgd2FybiB0aGVtIHRoYXQgc3VjaCBydWxlIGNhbm5vdCBiZSB1c2VkLlxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKGBDYW5ub3QgdXNlIGEgXCIke3R5cGVvZiBydWxlfVwiIHRvIHZhbGlkYXRlIGlucHV0LmApO1xyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBJZiB0aGUgcnVsZSByZXR1cm5lZCBhIGZhaWxlZCB2YWxpZGF0aW9uLCBhZGQgdGhlIG1lc3NhZ2UgdG8gdGhlIG1lc3NhZ2UgYmFnXHJcblx0XHRcdFx0aWYgKCFydWxlLnZhbGlkKSB7XHJcblx0XHRcdFx0XHR0aGlzLiNlcnJvcnMuYWRkKFxyXG5cdFx0XHRcdFx0XHRydWxlVHlwZSA9PSAnZnVuY3Rpb24nID8gYCR7ZmllbGR9LmNsb3N1cmVfJHtjbG9zdXJlSW5kZXh9YCA6IGAke2ZpZWxkfS4ke29nUnVsZS5zcGxpdChcIjpcIilbMF19YCxcclxuXHRcdFx0XHRcdFx0cnVsZS5tZXNzYWdlXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChpc0FycmF5KSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuI2Vycm9ycy5hZGQoXHJcblx0XHRcdFx0XHRcdFx0cnVsZVR5cGUgPT0gJ2Z1bmN0aW9uJyA/IGAke2ZpZWxkfS5jbG9zdXJlXyR7Y2xvc3VyZUluZGV4fWAgOiBgJHtmaWVsZH0uJHtvZ1J1bGUuc3BsaXQoXCI6XCIpWzBdfWAsXHJcblx0XHRcdFx0XHRcdFx0cnVsZS5tZXNzYWdlXHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Y2xvc3VyZUluZGV4Kys7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHZhbGlkYXRpb25SZXN1bHQucHVzaChydWxlLnZhbGlkKTtcclxuXHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdC8vIFNlbmRzIG91dCBhIHdhcm5pbmcgaWYgcnVsZSBkb2VzIG5vdCBleGlzdHMuXHJcblx0XHRcdFx0Y29uc29sZS53YXJuKGBObyBzdWNoIHJ1bGUgZXhpc3RzOiAke3J1bGVOYW1lfVxcbmAsIGBGaWVsZDogJHtmaWVsZH1cXG5cXG5gLCBlKTtcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLiNmaWVsZE5hbWVzLnB1c2goZmllbGQpO1xyXG5cdFx0aWYgKCF2YWxpZGF0aW9uUmVzdWx0LmluY2x1ZGVzKGZhbHNlKSlcclxuXHRcdFx0dGhpcy4jdmFsaWRhdGVkW2ZpZWxkXSA9IHZhbHVlO1xyXG5cclxuXHRcdHJldHVybiB0eXBlb2YgcnVuT3RoZXJWYWxpZGF0aW9uID09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IHJ1bk90aGVyVmFsaWRhdGlvbjtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIElkZW50aWZpZXMgaWYgdGhlIGZpZWxkIGlzIGFuIGFycmF5IG9yIG5vdC5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge1N0cmluZ31cdGZpZWxkXHRUSGUgbmFtZSBvZiB0aGUgZmllbGQgdGhhdCB3aWxsIGJlIHRlc3RlZFxyXG5cdCAqIFxyXG5cdCAqIEByZXR1cm4ge0Jvb2xlYW59XHRcdFJldHVybnMgYSBib29sZWFuIHZhbHVlLCB3aGljaCBpcyBlaXRoZXIgYSBgdHJ1ZWAsIGlmIHRoZSBmaWVsZCBpcyBhbiBhcnJheTsgb3IgYGZhbHNlYCBpZiBpdCBpc24ndFxyXG5cdCAqIFxyXG5cdCAqIEBkZXByZWNhdGVkXHJcblx0ICovXHJcblx0I2lzRmllbGRBcnJheShmaWVsZCkge1xyXG5cdFx0aWYgKGZpZWxkLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdTdHJpbmcnKSB7XHJcblx0XHRcdGlmIChmaWVsZC5tYXRjaCgvKFxcKil8KFxcZCspLykpXHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh0aGlzLiN2YWx1ZUxpc3RbZmllbGRdLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdBcnJheScpIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0Ly8gUFVCTElDIE1FVEhPRFNcclxuXHQvKipcclxuXHQgKiBJZGVudGlmaWVzIHdoZXRoZXIgdGhlIHZhbGlkYXRpb24gZmFpbGVkIG9yIG5vdC4gQSBzaW5nbGUgcnVsZSB0aGF0IGZhaWwgd2lsbCByZXN1bHQgaW4gYSB0b3RhbCBmYWlsIG9mIHRoZSB2YWxpZGF0aW9uLlxyXG5cdCAqIFxyXG5cdCAqIEByZXR1cm4ge0Jvb2xlYW59XHRcdFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWxpZGF0aW9uIGZhaWxzOyBgZmFsc2VgIG90aGVyd2lzZS5cclxuXHQgKi9cclxuXHRmYWlscygpIHtcclxuXHRcdGlmICghdGhpcy4jdmFsaWRhdGlvbkRvbmUpXHJcblx0XHRcdHRoaXMuI3J1blZhbGlkYXRpb24oKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy4jZmFpbGVkO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRmV0Y2hlcyBhbGwgdGhlIGVycm9yIG1lc3NhZ2UuXHJcblx0ICogXHJcblx0ICogQHJldHVybiB7TWVzc2FnZUJhZ31cdFx0QW4gaW5zdGFuY2Ugb2YgbWVzc2FnZSBiYWcgY29udGFpbmluZyBhbGwgZXJyb3IgbWVzc2FnZXMuXHJcblx0ICovXHJcblx0ZXJyb3JzKCkge1xyXG5cdFx0aWYgKCF0aGlzLiN2YWxpZGF0aW9uRG9uZSlcclxuXHRcdFx0dGhpcy4jcnVuVmFsaWRhdGlvbigpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLiNlcnJvcnM7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBWYWxpZGF0ZXMgdGhlIGZpZWxkcyBwcm92aWRlZCBhbmQgcmV0dXJucyBhIEpTT04gb2JqZWN0LCBjb250YWluaW5nIGFsbCB0aGUgdmFsdWVzIGZyb20gdGhlIGZpZWxkcyB0aGF0IHBhc3NlZC5cclxuXHQgKiBcclxuXHQgKiBAcmV0dXJuIHtPYmplY3R9XHRcdEEgSlNPTiBvYmplY3QsIGNvbnRhaW5pbmcgYSBrZXktdmFsdWUgcGFpciBmb3JtYXQgb2YgZmllbGRzIGFuZCB0aGVpciB2YWx1ZXMgdGhhdCBwYXNzZWQgdGhlIHZhbGlkYXRpb24uXHJcblx0ICovXHJcblx0dmFsaWRhdGUoKSB7XHJcblx0XHRpZiAoIXRoaXMuI3ZhbGlkYXRpb25Eb25lKVxyXG5cdFx0XHR0aGlzLiNydW5WYWxpZGF0aW9uKCk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuI3ZhbGlkYXRlZDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIERldGVybWluZSBpZiBtZXNzYWdlcyBleGlzdCBmb3IgdGhlIGdpdmVuIGZpZWxkLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtICB7U3RyaW5nfSAgZmllbGRcdFRoZSBuYW1lIG9mIHRoZSBmaWVsZCB0aGF0IHdpbGwgYmUgdGVzdGVkXHJcblx0ICogQHJldHVybiB7Qm9vbGVhbn1cdFx0QSBib29sZWFuIHZhbHVlOyBlaXRoZXIgYSBgdHJ1ZWAgaWYgdGhlIGZpZWxkIGV4aXN0cywgb3IgYGZhbHNlYCBpZiBpdCBkb2VzIG5vdFxyXG5cdCAqL1xyXG5cdGhhcyhmaWVsZCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuaW52YWxpZEZpZWxkcygpLmluY2x1ZGVzKGtleSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgdGhlIGZpcnN0IG1lc3NhZ2UgZnJvbSB0aGUgbWVzc2FnZSBiYWcgZm9yIGEgZ2l2ZW4gZmllbGQuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gIHtTdHJpbmd9XHRmaWVsZFx0VGhlIG5hbWUgb2YgdGhlIGZpZWxkIHRoYXQgdGhlIG1lc3NhZ2Ugd2lsbCBiZSBmZXRjaGVkIHVwb25cclxuXHQgKiBAcmV0dXJuIHtTdHJpbmd9XHRcdFRoZSBmaXJzdCBtZXNzYWdlIGNvbnRhaW5lZCB3aXRoaW4gdGhlIHNhaWQgZmllbGQuIFJldHVybnMgYW4gYHVuZGVmaW5lZGAgd2hlbiB0aGUgZmllbGQgZG9lcyBub3QgZXhpc3RzXHJcblx0ICovXHJcblx0Zmlyc3QoZmllbGQpIHtcclxuXHRcdHJldHVybiB0aGlzLmVycm9ycygpLmZpcnN0KGZpZWxkKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCBhbGwgb2YgdGhlIG1lc3NhZ2VzIGZyb20gdGhlIG1lc3NhZ2UgYmFnIGZvciBhIGdpdmVuIGZpZWxkLiBJZiBubyB2YWx1ZSBvciBhIGBudWxsYCBpcyBwcm92aWRlZCB0byB0aGUgZmllbGQsIGl0IHJldHVybnMgYWxsIHRoZSBtZXNzYWdlcyBjb250YWluZWQgd2l0aGluIHRoZSBjdXJyZW50IGluc3RhbmNlIG9mIGBNZXNzYWdlQmFnYFxyXG5cdCAqXHJcblx0ICogQHBhcmFtICB7U3RyaW5nfVx0ZmllbGRcdFRoZSBuYW1lIG9mIHRoZSBmaWVsZCB0aGF0IHRoZSBtZXNzYWdlIHdpbGwgYmUgZmV0Y2hlZCB1cG9uXHJcblx0ICogQHJldHVybiB7T2JqZWN0fVx0XHRBIEpTT04gb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlIGtleS12YWx1ZSBwYWlyIGZvciBhbGwgdGhlIG1lc3NhZ2Ugb2YgdGhlIGZpZWxkLlxyXG5cdCAqL1xyXG5cdGdldChmaWVsZCA9IG51bGwpIHtcclxuXHRcdHJldHVybiB0aGlzLmVycm9ycygpLmdldChmaWVsZCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXRyaWV2ZXMgYW4gYXJyYXkgb2YgZmllbGQgbmFtZXMgdGhhdCBhcmUgaW52YWxpZFxyXG5cdCAqIFxyXG5cdCAqIEByZXR1cm4ge0FycmF5fVx0XHRBbiBhcnJheSBvZiBmaWVsZCBuYW1lcyB0aGF0IGZhaWxlZCB0aGUgdmFsaWRhdGlvblxyXG5cdCAqL1xyXG5cdGludmFsaWRGaWVsZHMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5lcnJvcnMoKS5maWVsZHMoKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHJpZXZlcyBhbiBhcnJheSBvZiBmaWVsZCBuYW1lcyB0aGF0IGFyZSB2YWxpZFxyXG5cdCAqIFxyXG5cdCAqIEByZXR1cm4ge0FycmF5fVx0XHRBbiBhcnJheSBvZiBmaWVsZCBuYW1lcyB0aGF0IHBhc3NlZCB0aGUgdmFsaWRhdGlvblxyXG5cdCAqL1xyXG5cdHZhbGlkRmllbGRzKCkge1xyXG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHRoaXMudmFsaWRhdGUoKSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXRyaWV2ZXMgYWxsIHRoZSBmaWVsZCBuYW1lcyB0aGF0IGFyZSB1c2VkIGluIHRoaXMgdmFsaWRhdG9yXHJcblx0ICogXHJcblx0ICogQHJldHVybiB7QXJyYXl9XHRcdEFuIGFycmF5IG9mIGFsbCB0aGUgZmllbGQgbmFtZXMgdXNlZCBpbiB0aGlzIFZhbGlkYXRvclxyXG5cdCAqL1xyXG5cdGZpZWxkcygpIHtcclxuXHRcdHJldHVybiB0aGlzLiNmaWVsZE5hbWVzO1xyXG5cdH1cclxufSIsIi8vIFV0aWxpdHlcclxuaW1wb3J0IFVuaXF1ZUFycmF5IGZyb20gXCIuLi8uLi9qcy91dGlsL3VuaXF1ZS1hcnJheS91bmlxdWUtYXJyYXkubW9kLmpzXCI7XHJcbmltcG9ydCBTd2FsRmxhc2ggZnJvbSBcIi4uLy4uL2pzL3V0aWwvc3dhbC1mbGFzaC9zd2FsLWZsYXNoLm1vZC5qc1wiO1xyXG5cclxuLy8gVmFsaWRhdG9yXHJcbmltcG9ydCBWYWxpZGF0b3IgZnJvbSBcIi4uLy4uL2pzL3V0aWwvdmFsaWRhdG9yL1ZhbGlkYXRvci5qc1wiO1xyXG5cclxudmFyIHZhbGlkYXRpb24gPSB7XHJcblx0cnVsZXM6IHtcclxuXHRcdFwidXNlX3JhbmdlXCI6IFtcInNvbWV0aW1lc1wiLCBcImJvb2xlYW5cIl0sXHJcblx0XHRcInJhbmdlX21pblwiOiBbXCJzb21ldGltZXNcIiwgXCJudW1lcmljXCIsIFwibWluOjFcIiwgXCJtYXg6JHJhbmdlX21heFwiXSxcclxuXHRcdFwicmFuZ2VfbWF4XCI6IFtcInNvbWV0aW1lc1wiLCBcIm51bWVyaWNcIiwgXCJtaW46JHJhbmdlX21pblwiLCBcIm1heDoyNTVcIl0sXHJcblx0XHRcImxlbmd0aFwiOiBbXCJzb21ldGltZXNcIiwgXCJudW1lcmljXCIsIFwiYmV0d2VlbjoxLDI1NVwiXSxcclxuXHRcdFwiY2hhcnNcIjogW1wicmVxdWlyZWRcIiwgXCJhcnJheVwiLCBcIm1pbjoxXCJdLFxyXG5cdFx0XCJjaGFycy4qXCI6IFtcInNvbWV0aW1lc1wiLCBcImluOmFscGhhLG51bWVyaWMsc3BlY1wiXVxyXG5cdH0sXHJcblx0bWVzc2FnZToge1xyXG5cdFx0XCJ1c2VfcmFuZ2VcIjoge1xyXG5cdFx0XHRcImJvb2xlYW5cIjogYE1hbGZvcm1lZCBkYXRhLCBwbGVhc2UgcmVmcmVzaCB0aGUgcGFnZWAsXHJcblx0XHR9LFxyXG5cdFx0XCJyYW5nZV9taW5cIjoge1xyXG5cdFx0XHRcIm51bWVyaWNcIjogYE1pbmltdW0gcmFuZ2Ugc2hvdWxkIGJlIGEgbnVtYmVyYCxcclxuXHRcdFx0XCJtaW5cIjogYE1pbmltdW0gdmFsdWUgc2hvdWxkIGJlIGF0IGxlYXN0IDptaW5gLFxyXG5cdFx0XHRcIm1heFwiOiBgTWF4aW11bSB2YWx1ZSBzaG91bGQgYmUgYXQgbWF4LCA6bWF4YCxcclxuXHRcdH0sXHJcblx0XHRcInJhbmdlX21heFwiOiB7XHJcblx0XHRcdFwibnVtZXJpY1wiOiBgTWF4aW11bSByYW5nZSBzaG91bGQgYmUgYSBudW1iZXJgLFxyXG5cdFx0XHRcIm1pblwiOiBgTWF4aW11bSB2YWx1ZSBzaG91bGQgYmUgYXQgbGVhc3QgOm1pbmAsXHJcblx0XHRcdFwibWF4XCI6IGBNYXhpbXVtIHZhbHVlIHNob3VsZCBiZSBhdCBtYXgsIDptYXhgLFxyXG5cdFx0fSxcclxuXHRcdFwibGVuZ3RoXCI6IHtcclxuXHRcdFx0XCJsZW5ndGgubnVtZXJpY1wiOiBgTGVuZ3RoIHNob3VsZCBiZSBhIG51bWJlcmAsXHJcblx0XHRcdFwibGVuZ3RoLmJldHdlZW5cIjogYExlbmd0aCBzaG91bGQgYmUgYSB2YWx1ZSBiZXR3ZWVuIDptaW4gYW5kIDptYXhgLFxyXG5cdFx0fSxcclxuXHRcdFwiY2hhcnNcIjoge1xyXG5cdFx0XHRcInJlcXVpcmVkXCI6IGBDaGFyYWN0ZXIgQWNjZXB0ZWQgaXMgcmVxdWlyZWRgLFxyXG5cdFx0XHRcImFycmF5XCI6IGBNYWxmb3JtZWQgZGF0YSwgcGxlYXNlIHJlZnJlc2ggdGhlIHBhZ2VgLFxyXG5cdFx0XHRcIm1pblwiOiBgUGxlYXNlIHNlbGVjdCBhdCBsZWFzdCAxIG9wdGlvbmAsXHJcblx0XHR9LFxyXG5cdFx0XCJjaGFycy4qXCI6IHtcclxuXHRcdFx0XCJib29sZWFuXCI6IGBNYWxmb3JtZWQgZGF0YSwgcGxlYXNlIHJlZnJlc2ggdGhlIHBhZ2VgLFxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbiQoZnVuY3Rpb24oKSB7XHJcblx0Ly8gSW5pdGlhbGl6ZSBuZWNlc3NhcnkgdXRpbGl0aWVzXHJcblx0VW5pcXVlQXJyYXkoKTtcclxuXHJcblx0Ly8gRU5BQkxFL0RJU0FCTEUgUkFOR0UgT1BUSU9OXHJcblx0JChgI3VzZVJhbmdlYCkub24oJ2NoYW5nZScsIChlKSA9PiB7XHJcblx0XHRsZXQgb2JqID0gJChlLmN1cnJlbnRUYXJnZXQpO1xyXG5cdFx0bGV0IHJhbmdlID0gJChcIiNsZW5ndGhfcmFuZ2VcIik7XHJcblx0XHRsZXQgZml4ZWQgPSAkKFwiI2xlbmd0aF9maXhlZFwiKTtcclxuXHJcblx0XHRpZiAob2JqLnByb3AoJ2NoZWNrZWQnKSkge1xyXG5cdFx0XHRyYW5nZS5maW5kKGBpbnB1dGApLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG5cdFx0XHRmaXhlZC5maW5kKGBpbnB1dGApLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSkucmVtb3ZlQ2xhc3MoXCJpcy12YWxpZCBpcy1pbnZhbGlkXCIpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHJhbmdlLmZpbmQoYGlucHV0YCkucHJvcCgnZGlzYWJsZWQnLCB0cnVlKS5yZW1vdmVDbGFzcyhcImlzLXZhbGlkIGlzLWludmFsaWRcIik7XHJcblx0XHRcdGZpeGVkLmZpbmQoYGlucHV0YCkucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcblx0XHR9XHJcblx0fSkudHJpZ2dlcignY2hhbmdlJyk7XHJcblxyXG5cdC8vIFJBTkdFIE1JTiBTRVRURVJcclxuXHQkKGAjcmFuZ2VfbWluYCkub24oJ2NoYW5nZScsIChlKSA9PiB7XHJcblx0XHRsZXQgb2JqID0gJChlLmN1cnJlbnRUYXJnZXQpO1xyXG5cdFx0bGV0IHRhcmdldCA9ICQoYCNyYW5nZV9tYXhgKTtcclxuXHRcdGxldCBuZXdNaW4gPSBvYmoudmFsKCkgPz8gMDtcclxuXHJcblx0XHRuZXdNaW4gPSAobmV3TWluLm1hdGNoKC9eLT9cXGQrJC9nKT8ubGVuZ3RoID8/IDApID4gMCA/IHBhcnNlSW50KG5ld01pbikgOiBwYXJzZUludCh0YXJnZXQuYXR0cignbWluJykpO1xyXG5cclxuXHRcdHRhcmdldC5hdHRyKCdtaW4nLCBuZXdNaW4pO1xyXG5cdH0pLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cclxuXHQvLyBSQU5HRSBNQVggU0VUVEVSXHJcblx0JChgI3JhbmdlX21heGApLm9uKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG5cdFx0bGV0IG9iaiA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcclxuXHRcdGxldCB0YXJnZXQgPSAkKGAjcmFuZ2VfbWluYCk7XHJcblx0XHRsZXQgbmV3TWF4ID0gb2JqLnZhbCgpID8/IDA7XHJcblxyXG5cdFx0bmV3TWF4ID0gKG5ld01heC5tYXRjaCgvXi0/XFxkKyQvZyk/Lmxlbmd0aCA/PyAwKSA+IDAgPyBwYXJzZUludChuZXdNYXgpIDogcGFyc2VJbnQodGFyZ2V0LmF0dHIoJ21heCcpKTtcclxuXHJcblx0XHR0YXJnZXQuYXR0cignbWF4JywgbmV3TWF4KTtcclxuXHR9KS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHJcblx0Ly8gRk9STSBTVUJNSVRcclxuXHQkKGAjc3RyaW5nX2Zvcm1gKS5vbignc3VibWl0JywgKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0dmFsaWRhdGUoJChlLmN1cnJlbnRUYXJnZXQpKTtcclxuXHR9KTtcclxuXHJcblx0Ly8gRk9STSBSRVNFVFRFUlxyXG5cdCQoYCNyZXNldEZvcm1gKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0JChgI3Jlc3RvcmVQYXNzVmlld2ApLnRyaWdnZXIoJ2NsaWNrJylcclxuXHRcdFx0LnJlbW92ZSgpO1xyXG5cdFx0bGV0IHVzZVJhbmdlID0gJChgI3VzZVJhbmdlYCk7XHJcblxyXG5cdFx0aWYgKHVzZVJhbmdlLnByb3AoYGNoZWNrZWRgKSkge1xyXG5cdFx0XHR1c2VSYW5nZS5wcm9wKGBjaGVja2VkYCwgZmFsc2UpLnRyaWdnZXIoYGNoYW5nZWApO1xyXG5cdFx0fVxyXG5cclxuXHRcdCQoYFtuYW1lXWApLnJlbW92ZUNsYXNzKGBpcy12YWxpZCBpcy1pbnZhbGlkYClcclxuXHRcdFx0LmNsb3Nlc3QoYGZvcm1gKVxyXG5cdFx0XHQuZWFjaCgoaywgdikgPT4gdi5yZXNldCgpKTtcclxuXHJcblx0XHRsZXQgZ3N0ciA9ICQoYCNnZW5lcmF0ZWRfc3RyaW5nYCk7XHJcblx0XHRhbmltYXRlVGV4dChnc3RyLCAnJyk7XHJcblxyXG5cdFx0U3dhbEZsYXNoLnN1Y2Nlc3MoXCJGb3JtIFJlc2V0XCIpO1xyXG5cdH0pO1xyXG5cclxuXHQvLyBNSU5JTUlaRS9NQVhJTUlaRVxyXG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGAubWluaW1pemUsIC5tYXhpbWl6ZWAsIChlKSA9PiB7XHJcblx0XHRsZXQgYnRuID0gJChlLnRhcmdldCksIG9iajtcclxuXHJcblx0XHRpZiAodHlwZW9mIGJ0bi5hdHRyKCdkYXRhLXRhcmdldCcpICE9ICd1bmRlZmluZWQnKVxyXG5cdFx0XHRvYmogPSAkKGJ0bi5hdHRyKCdkYXRhLXRhcmdldCcpKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0b2JqID0gYnRuO1xyXG5cclxuXHRcdGxldCB3aW5kb3cgPSBvYmouY2xvc2VzdChcIi53aW5kb3dcIik7XHJcblx0XHRsZXQgY29sbGFwc2VyID0gd2luZG93LmNsb3Nlc3QoXCIuY29sbGFwc2VcIik7XHJcblx0XHRsZXQgb3RoZXJzID0gJChgW2RhdGEtcGFyZW50PVwiIyR7d2luZG93LmF0dHIoXCJpZFwiKX1cIl1gKTtcclxuXHJcblx0XHRpZiAod2luZG93Lmhhc0NsYXNzKFwibWF4aW1pemVkXCIpKSB7XHJcblx0XHRcdG90aGVycy5hZGRDbGFzcyhcIm1heGltaXplXCIpLnJlbW92ZUNsYXNzKFwibWluaW1pemVcIikuYXR0cihcInRpdGxlXCIsIFwiTWF4aW1pemVcIik7XHJcblx0XHRcdGJ0bi5hZGRDbGFzcyhcIm1heGltaXplXCIpLnJlbW92ZUNsYXNzKFwibWluaW1pemVcIikuYXR0cihcInRpdGxlXCIsIFwiTWF4aW1pemVcIik7XHJcblx0XHRcdG9iai5hZGRDbGFzcyhcIm1heGltaXplXCIpLnJlbW92ZUNsYXNzKFwibWluaW1pemVcIikuYXR0cihcInRpdGxlXCIsIFwiTWF4aW1pemVcIik7XHJcblx0XHRcdHdpbmRvdy5hZGRDbGFzcyhcIm1pbmltaXplZFwiKS5yZW1vdmVDbGFzcyhcIm1heGltaXplZFwiKTtcclxuXHJcblx0XHRcdHNldFRpbWVvdXQoXHJcblx0XHRcdFx0KCkgPT4gY29sbGFwc2VyLmNvbGxhcHNlKFwiaGlkZVwiKSxcclxuXHRcdFx0XHQyNTBcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHdpbmRvdy5oYXNDbGFzcyhcIm1pbmltaXplZFwiKSkge1xyXG5cdFx0XHRjb2xsYXBzZXIuY29sbGFwc2UoXCJzaG93XCIpO1xyXG5cdFx0XHRvdGhlcnMuYWRkQ2xhc3MoXCJtaW5pbWl6ZVwiKS5yZW1vdmVDbGFzcyhcIm1heGltaXplXCIpLmF0dHIoXCJ0aXRsZVwiLCBcIk1pbmltaXplXCIpO1xyXG5cdFx0XHRidG4uYWRkQ2xhc3MoXCJtaW5pbWl6ZVwiKS5yZW1vdmVDbGFzcyhcIm1heGltaXplXCIpLmF0dHIoXCJ0aXRsZVwiLCBcIk1pbmltaXplXCIpO1xyXG5cdFx0XHRvYmouYWRkQ2xhc3MoXCJtaW5pbWl6ZVwiKS5yZW1vdmVDbGFzcyhcIm1heGltaXplXCIpLmF0dHIoXCJ0aXRsZVwiLCBcIk1pbmltaXplXCIpO1xyXG5cclxuXHRcdFx0d2luZG93LmFkZENsYXNzKFwibWF4aW1pemVkXCIpLnJlbW92ZUNsYXNzKFwibWluaW1pemVkXCIpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBWYWxpZGF0ZXMgYSBzaW5nbGUgZm9ybSBhbmQgcmV0dXJucyB3aGV0aGVyIHRoZXkgcGFzc2VkIHRoZSB2YWxpZGF0aW9uIG9yIG5vdC4gU2luY2UgdGhpc1xyXG4gKiBpcyBvbmx5IHVzZWQgaW4gYSB2ZXJ5IHNwZWNpZmljIGluc3RhbmNlLCB0aGUgcnVsZXMgYW5kIG1lc3NhZ2VzIGFyZSBhbGwgZnJvbSBhIHNpbmdsZVxyXG4gKiBzb3VyY2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fEpRdWVyeX0gZm9ybSBBIHNpbmdsZSBmb3JtIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHZhbGlkYXRlZC4gSXQgY291bGQgYmUgYW4gYEhUTUxGb3JtRWxlbWVudGAgb2JqZWN0IG9yIGEgYEpRdWVyeWAgSFRNTCBvYmplY3QuXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGZvcm0gcGFzc2VzIHZhbGlkYXRpb247IGBmYWxzZWAgb3RoZXJ3aXNlLlxyXG4gKi9cclxuY29uc3QgdmFsaWRhdGUgPSBmdW5jdGlvbihmb3JtKSB7XHJcblx0Ly8gQ2FwdHVyZSBhbGwgaW5wdXRzXHJcblx0bGV0IGZpZWxkcyA9ICQoYFtuYW1lXWApLm5vdChgOmRpc2FibGVkLCBbZGlzYWJsZWRdYCk7XHJcblx0bGV0IHZhbGlkcyA9ICQoYGlucHV0OnZhbGlkYCkubm90KGA6ZGlzYWJsZWQsIFtkaXNhYmxlZF1gKTtcclxuXHRsZXQgaW52YWxpZHMgPSAkKGBpbnB1dDppbnZhbGlkYCkubm90KGA6ZGlzYWJsZWQsIFtkaXNhYmxlZF1gKTtcclxuXHJcblx0Ly8gU2V0IHZhbGlkYXRpb24gaW5wdXRcclxuXHR2YWxpZGF0aW9uLnZhbHVlcyA9IGZvcm0uc2VyaWFsaXplRm9ybUpTT04odHJ1ZSk7XHJcblxyXG5cdC8vIFVwZGF0ZSBzb21lIHJ1bGUgdmFsdWVzXHJcblx0bGV0IHZhcmlhYmxlUnVsZSA9IFsncmFuZ2VfbWluJywgJ3JhbmdlX21heCddO1xyXG5cdGxldCBtb2RWUnVsZXMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbGlkYXRpb24ucnVsZXMpKTtcclxuXHRmb3IgKGxldCByIG9mIHZhcmlhYmxlUnVsZSkge1xyXG5cdFx0bW9kVlJ1bGVzW3JdLmZpbmQoKHYsIGspID0+IHtcclxuXHRcdFx0aWYgKHYubWF0Y2goL1xcJFxcdysvZykpIHtcclxuXHRcdFx0XHRsZXQgdGFyZ2V0S2V5ID0gdi5tYXRjaCgvKFxcJCkoXFx3KykvKVsyXTtcclxuXHJcblx0XHRcdFx0aWYgKCFPYmplY3Qua2V5cyh2YWxpZGF0aW9uLnZhbHVlcykuaW5jbHVkZXModGFyZ2V0S2V5KSlcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0bW9kVlJ1bGVzW3JdW2tdID0gdi5yZXBsYWNlKC8oXFwkKShcXHcrKS8sIHZhbGlkYXRpb24udmFsdWVzW3RhcmdldEtleV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGxldCB2YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKFxyXG5cdFx0dmFsaWRhdGlvbi52YWx1ZXMsXHJcblx0XHRtb2RWUnVsZXMsXHJcblx0XHR2YWxpZGF0aW9uLm1lc3NhZ2VcclxuXHQpO1xyXG5cclxuXHRsZXQgaW52YWxpZEZpZWxkcyA9IHZhbGlkYXRvci5pbnZhbGlkRmllbGRzKCk7XHJcblx0bGV0IHZhbGlkRmllbGRzID0gdmFsaWRhdG9yLnZhbGlkRmllbGRzKCk7XHJcblxyXG5cdC8vIFVwZGF0ZSB0aGVpciBjbGFzc1xyXG5cdGZpZWxkcy5yZW1vdmVDbGFzcyhcImlzLXZhbGlkIGlzLWludmFsaWRcIik7XHJcblxyXG5cdHZhbGlkcy5hZGRDbGFzcyhcImlzLXZhbGlkXCIpO1xyXG5cdHZhbGlkcy5yZW1vdmVDbGFzcyhcImlzLWludmFsaWRcIik7XHJcblxyXG5cdGludmFsaWRzLmFkZENsYXNzKFwiaXMtaW52YWxpZFwiKTtcclxuXHRpbnZhbGlkcy5yZW1vdmVDbGFzcyhcImlzLXZhbGlkXCIpO1xyXG5cclxuXHQvLyBVcGRhdGUgdmFsaWRhdGlvbiBtZXNzYWdlXHJcblx0dmFsaWRzLmNsb3Nlc3QoYC5mb3JtLWdyb3VwYCkuZmluZChcImZlZWRiYWNrXCIpLnJlbW92ZUNsYXNzKGB0ZXh0LWRhbmdlcmApO1xyXG5cdGludmFsaWRzLmNsb3Nlc3QoYC5mb3JtLWdyb3VwYCkuZmluZChcImZlZWRiYWNrXCIpLmFkZENsYXNzKGB0ZXh0LWRhbmdlcmApO1xyXG5cclxuXHQvLyBBcHBseSB0aGUgdmFsaWRhdG9ycyB2YWxpZGF0aW9uXHJcblx0JC5lYWNoKHZhbGlkRmllbGRzLCAoaywgdikgPT4ge1xyXG5cdFx0JChgW2RhdGEtdmFsaWRhdGlvbl1gKS50ZXh0KFwiXCIpO1xyXG5cdH0pO1xyXG5cclxuXHQkLmVhY2goaW52YWxpZEZpZWxkcywgKGssIHYpID0+IHtcclxuXHRcdGxldCB2YWxpZGF0aW9uTXNnRmllbGRzID0gJChgW2RhdGEtdmFsaWRhdGlvbl1gKTtcclxuXHRcdHZhbGlkYXRpb25Nc2dGaWVsZHMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0bGV0IG9iaiA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRpZiAob2JqLmF0dHIoXCJkYXRhLXZhbGlkYXRpb25cIikubWF0Y2goYCgke3Z9KWApICE9IG51bGwpIHtcclxuXHRcdFx0XHRvYmouY2xvc2VzdChgLmZvcm0tZ3JvdXBgKVxyXG5cdFx0XHRcdFx0LmZpbmQoYGlucHV0LCBzZWxlY3QsIHRleHRhcmVhYClcclxuXHRcdFx0XHRcdC5ub3QoXCI6ZGlzYWJsZWQsIFtkaXNhYmxlZF1cIilcclxuXHRcdFx0XHRcdC5yZW1vdmVDbGFzcyhcImlzLXZhbGlkXCIpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoXCJpcy1pbnZhbGlkXCIpO1xyXG5cdFx0XHR9O1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dmFsaWRhdGlvbk1zZ0ZpZWxkcy50ZXh0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRsZXQgb2JqID0gJCh0aGlzKTtcclxuXHRcdFx0aWYgKG9iai5hdHRyKCdkYXRhLXZhbGlkYXRpb24nKS5tYXRjaCh2KSlcclxuXHRcdFx0XHRvYmoudGV4dCh2YWxpZGF0b3IuZmlyc3QodikpLmFkZENsYXNzKFwidGV4dC1kYW5nZXJcIik7XHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdC8vIElmIHRoZSB2YWxpZGF0aW9uIGZhaWxlZCwgcHJldmVudCB0aGUgY29kZSBmcm9tIHByb2dyZXNzaW5nIGZ1cnRoZXIsIHRoZW4gc2hvdyBhIHRvYXN0IHdhcm5pbmdcclxuXHRpZiAodmFsaWRhdG9yLmZhaWxzKCkpIHtcclxuXHRcdFN3YWxGbGFzaC5lcnJvcihcIlBsZWFzZSByZS1jaGVjayB0aGUgZGF0YVwiKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHRsZXQgdmFsdWVzID0gdmFsaWRhdG9yLnZhbGlkYXRlKCk7XHJcblx0XHRsZXQgY2hhcnMgPSB2YWx1ZXMuY2hhcnM7XHJcblxyXG5cdFx0bGV0IHJlZ2V4ID0gXCJbXCI7XHJcblx0XHRyZWdleCArPSBjaGFycy5pbmNsdWRlcyhcImFscGhhXCIpID8gYGEtekEtWmAgOiBgYDtcclxuXHRcdHJlZ2V4ICs9IGNoYXJzLmluY2x1ZGVzKFwibnVtZXJpY1wiKSA/IGAwLTlgIDogYGA7XHJcblx0XHRyZWdleCArPSBjaGFycy5pbmNsdWRlcyhcInNwZWNcIikgPyBgXFxcXCRcXFxcJlxcXFwrXFxcXCxcXFxcOlxcXFw7XFxcXD1cXFxcP1xcXFxAXFxcXCNcXFxcfFxcXFwnXFxcXDxcXFxcPlxcXFwuXFxcXF5cXFxcKlxcXFwoXFxcXClcXFxcJVxcXFwhXFxcXC1gIDogYGA7XHJcblx0XHRyZWdleCArPSBcIl1cIjtcclxuXHJcblx0XHRyZWdleCArPSB0eXBlb2YgdmFsdWVzLnVzZV9yYW5nZSA9PSAndW5kZWZpbmVkJyA/IGB7JHt2YWx1ZXMubGVuZ3RofX1gIDogYHske3ZhbHVlcy5yYW5nZV9taW59LCR7dmFsdWVzLnJhbmdlX21heH19YDtcclxuXHJcblx0XHRsZXQgZ3N0ciA9ICQoYCNnZW5lcmF0ZWRfc3RyaW5nYCk7XHJcblx0XHRsZXQgbmV3U3RyID0gbmV3IFJhbmRFeHAocmVnZXgpLmdlbigpO1xyXG5cclxuXHRcdGFuaW1hdGVUZXh0KGdzdHIsIG5ld1N0cik7XHJcblxyXG5cdFx0Z3N0ci5jbG9zZXN0KGAuc3RyaW5nLWNhcmRgKVxyXG5cdFx0XHQuYWRkQ2xhc3MoYHNob3dgKVxyXG5cdFx0XHQuZmluZChgLm1pbmltaXplLCAubWF4aW1pemVgKVxyXG5cdFx0XHQuYWRkQ2xhc3MoYG1pbmltaXplYCkucmVtb3ZlQ2xhc3MoYG1heGltaXplYClcclxuXHRcdFx0LmNsb3Nlc3QoYC53aW5kb3dgKVxyXG5cdFx0XHQuYWRkQ2xhc3MoYG1heGltaXplZGApLnJlbW92ZUNsYXNzKGBtaW5pbWl6ZWRgKTtcclxuXHJcblx0XHRsZXQgcmVzdG9yZUFwcGVuZFRhcmdldCA9ICQoYCNzdHJpbmdHZW5Gb290ZXJgKTtcclxuXHRcdGxldCByZXN0b3JlID0gcmVzdG9yZUFwcGVuZFRhcmdldC5maW5kKGAjcmVzdG9yZVBhc3NWaWV3YCk7XHJcblx0XHRpZiAocmVzdG9yZS5sZW5ndGggPD0gMCApIHtcclxuXHRcdFx0cmVzdG9yZSA9ICQoYFxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwibWwtYXV0byBtci0wIGluc2VydCBtaW5pbWl6ZVwiIGlkPVwicmVzdG9yZVBhc3NWaWV3XCIgZGF0YS10YXJnZXQ9XCIud2luZG93IC5taW5pbWl6ZSwgLndpbmRvdyAubWF4aW1pemVcIiBkYXRhLXBhcmVudD1cIiNzdHJpbmdDYXJkXCIgdGl0bGU9XCJNaW5pbWl6ZVwiPjwvc3Bhbj5cclxuXHRcdFx0YCk7XHJcblxyXG5cdFx0XHRyZXN0b3JlQXBwZW5kVGFyZ2V0LmFwcGVuZChyZXN0b3JlKTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiByZXN0b3JlLnJlbW92ZUNsYXNzKGBpbnNlcnRgKSwgMTAwMCk7XHJcblxyXG5cdFx0XHRsZXQgY29sbGFwc2VyID0gJChyZXN0b3JlLmF0dHIoJ2RhdGEtdGFyZ2V0JykpLmNsb3Nlc3QoXCIuY29sbGFwc2VcIik7XHJcblx0XHRcdGlmIChjb2xsYXBzZXIubGVuZ3RoID4gMClcclxuXHRcdFx0XHRjb2xsYXBzZXIuY29sbGFwc2UoXCJzaG93XCIpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGxldCBjb2xsYXBzZXIgPSAkKHJlc3RvcmUuYXR0cignZGF0YS10YXJnZXQnKSkuY2xvc2VzdChcIi5jb2xsYXBzZVwiKTtcclxuXHRcdFx0Y29sbGFwc2VyLmNvbGxhcHNlKFwic2hvd1wiKTtcclxuXHJcblx0XHRcdGlmIChjb2xsYXBzZXIubGVuZ3RoID4gMClcclxuXHRcdFx0XHRzZXRUaW1lb3V0KFxyXG5cdFx0XHRcdFx0KCkgPT4gcmVzdG9yZS5hZGRDbGFzcyhgbWluaW1pemVgKS5yZW1vdmVDbGFzcyhgbWF4aW1pemVgKSwgMjUwXHJcblx0XHRcdFx0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB2YWxpZGF0b3IuZmFpbHMoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFuaW1hdGVzIHRoZSB0ZXh0cyBhcyBpZiB0aGV5J3JlIGJlaW5nIGNsZWFyZWQgYW5kIHR5cGVkIGluIHVzaW5nIGEga2V5Ym9hcmQuIFRoaXMgYW5pbWF0aW9uIGlzXHJcbiAqIHB1cmUgSmF2YVNjcmlwdCBhbmQgdGh1cywgcmVhbGx5IGhhcyBubyBzdXBwb3J0IGZvciBDU1MgcHJlZmVyZW5jZXMuIEhvd2V2ZXIsIGR1ZSB0byBjb25zaWRlcmF0aW9uc1xyXG4gKiB0aGV5IGFyZSBhcHBsaWVkIGFuZCBjYW4gYWxzbyBiZSBza2lwcGVkIHZpYSBhIGNsaWNrIGluc2lkZSB0aGUgY29udGFpbmVyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fEpRdWVyeX0gY29udGFpbmVyIEFuIGVsZW1lbnQgd2hlcmUgdGhlIHRleHQgYW5pbWF0aW9uIHdpbGwgYmUgYXBwbGllZCB0by5cclxuICogQHBhcmFtIHtzdHJpbmd9IG5ld1N0ciBUaGUgbmV3IHN0cmluZyB0aGF0IHdpbGwgYmUgXCJ0eXBlZFwiIGluIHBsYWNlLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gYmFzZUludGVydmFsICoqKE9wdGlvbmFsKSoqIFRoZSBhcHByb3hpbWF0ZSBpbnRlcnZhbCBiZXR3ZWVuIGNoYW5nZXMuIEl0IGlzIGNvdW50ZWQgaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0IGlzIDI1LjUgbWlsbGlzZWNvbmRzLlxyXG4gKi9cclxuY29uc3QgYW5pbWF0ZVRleHQgPSAoY29udGFpbmVyLCBuZXdTdHIsIGJhc2VJbnRlcnZhbCA9IDI1LjUpID0+IHtcclxuXHRsZXQgaXNWYW5pbGxhID0gdHlwZW9mIGNvbnRhaW5lci50ZXh0Q29udGVudCA9PT0gXCJ1bmRlZmluZWRcIiA/IGZhbHNlIDogdHJ1ZTtcclxuXHJcblx0Ly8gVXNlIHRoZSBwbGFpbiBvbGQgdGV4dCByZXBsYWNlIGluc3RlYWQgb2YgYW5pbWF0aW5nIGlmIHRoZSB1c2VycyBwcmVmZXJzIHJlZHVjZWQgbW90aW9ucy5cclxuXHRpZiAod2luZG93Lm1hdGNoTWVkaWEoYChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpYCkubWF0Y2hlcykge1xyXG5cdFx0aWYgKGlzVmFuaWxsYSlcdGNvbnRhaW5lci50ZXh0Q29udGVudCA9IG5ld1N0cjtcclxuXHRcdGVsc2VcdFx0XHRjb250YWluZXIudGV4dChuZXdTdHIpO1xyXG5cclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdC8vIG5ld1N0ciBmYWxsYmFja3NcclxuXHRuZXdTdHIgPSB0eXBlb2YgbmV3U3RyID09PSAnc3RyaW5nJyA/IG5ld1N0ciA6ICcnO1xyXG5cclxuXHQvLyBCYXNlIHZhcmlhYmxlc1xyXG5cdGxldCBvbGRTdHIgPSBjb250YWluZXIudGV4dENvbnRlbnQgPz8gY29udGFpbmVyLnRleHQoKTtcclxuXHRsZXQgb2xkSW50ZXJ2YWwgPSBiYXNlSW50ZXJ2YWwgKiAxMCAvIG9sZFN0ci5sZW5ndGg7XHJcblx0bGV0IG5ld0ludGVydmFsID0gYmFzZUludGVydmFsICogMTAgLyBuZXdTdHIubGVuZ3RoO1xyXG5cclxuXHQvLyBDb250cm9sIHZhcmlhYmxlc1xyXG5cdGxldCB0aW1lcnMgPSBbXTtcclxuXHJcblx0bGV0IHNraXBUZXh0QW5pbWF0aW9uID0gKCkgPT4ge1xyXG5cdFx0bGV0IHRpbWVyO1xyXG5cdFx0d2hpbGUodGltZXIgPSB0aW1lcnMucG9wKCkpIHtcclxuXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoaXNWYW5pbGxhKVx0Y29udGFpbmVyLnRleHRDb250ZW50ID0gbmV3U3RyO1xyXG5cdFx0ZWxzZVx0XHRcdGNvbnRhaW5lci50ZXh0KG5ld1N0cik7XHJcblx0fVxyXG5cclxuXHRpZiAoaXNWYW5pbGxhKVx0Y29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgc2tpcFRleHRBbmltYXRpb24pO1xyXG5cdGVsc2VcdFx0XHRjb250YWluZXIub24oYGNsaWNrYCwgc2tpcFRleHRBbmltYXRpb24pO1xyXG5cclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IG9sZFN0ci5sZW5ndGg7IGkrKykge1xyXG5cdFx0dGltZXJzLnB1c2goXHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdGlmIChpc1ZhbmlsbGEpXHRjb250YWluZXIudGV4dENvbnRlbnQgPSBjb250YWluZXIudGV4dENvbnRlbnQuc2xpY2UoMCwgLTEpO1xyXG5cdFx0XHRcdGVsc2VcdFx0XHRjb250YWluZXIudGV4dChjb250YWluZXIudGV4dCgpLnNsaWNlKDAsIC0xKSk7XHJcblx0XHRcdH0sIG9sZEludGVydmFsICogaSlcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHR0aW1lcnMucHVzaChcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5ld1N0ci5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHRpbWVycy5wdXNoKFxyXG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChpc1ZhbmlsbGEpXHRjb250YWluZXIudGV4dENvbnRlbnQgPSBjb250YWluZXIudGV4dENvbnRlbnQgKyBuZXdTdHJbaV07XHJcblx0XHRcdFx0XHRcdGVsc2VcdFx0XHRjb250YWluZXIudGV4dChjb250YWluZXIudGV4dCgpICsgbmV3U3RyW2ldKTtcclxuXHRcdFx0XHRcdH0sIG5ld0ludGVydmFsICogaSlcclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRpZiAoaSA+PSBuZXdTdHIubGVuZ3RoIC0gMSkge1xyXG5cdFx0XHRcdFx0aWYgKGlzVmFuaWxsYSlcdGNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKGBjbGlja2AsIHNraXBUZXh0QW5pbWF0aW9uKTtcclxuXHRcdFx0XHRcdGVsc2VcdFx0XHRjb250YWluZXIub2ZmKGBjbGlja2AsIHNraXBUZXh0QW5pbWF0aW9uKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sIG9sZEludGVydmFsICogb2xkU3RyLmxlbmd0aClcclxuXHQpO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludCBpbmRlbnQ6IDQgKi9cblxuXG4vLyBQcml2YXRlIGhlbHBlciBjbGFzc1xuY2xhc3MgU3ViUmFuZ2Uge1xuICAgIGNvbnN0cnVjdG9yKGxvdywgaGlnaCkge1xuICAgICAgICB0aGlzLmxvdyA9IGxvdztcbiAgICAgICAgdGhpcy5oaWdoID0gaGlnaDtcbiAgICAgICAgdGhpcy5sZW5ndGggPSAxICsgaGlnaCAtIGxvdztcbiAgICB9XG5cbiAgICBvdmVybGFwcyhyYW5nZSkge1xuICAgICAgICByZXR1cm4gISh0aGlzLmhpZ2ggPCByYW5nZS5sb3cgfHwgdGhpcy5sb3cgPiByYW5nZS5oaWdoKTtcbiAgICB9XG5cbiAgICB0b3VjaGVzKHJhbmdlKSB7XG4gICAgICAgIHJldHVybiAhKHRoaXMuaGlnaCArIDEgPCByYW5nZS5sb3cgfHwgdGhpcy5sb3cgLSAxID4gcmFuZ2UuaGlnaCk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJucyBpbmNsdXNpdmUgY29tYmluYXRpb24gb2YgU3ViUmFuZ2VzIGFzIGEgU3ViUmFuZ2UuXG4gICAgYWRkKHJhbmdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgU3ViUmFuZ2UoXG4gICAgICAgICAgICBNYXRoLm1pbih0aGlzLmxvdywgcmFuZ2UubG93KSxcbiAgICAgICAgICAgIE1hdGgubWF4KHRoaXMuaGlnaCwgcmFuZ2UuaGlnaClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm5zIHN1YnRyYWN0aW9uIG9mIFN1YlJhbmdlcyBhcyBhbiBhcnJheSBvZiBTdWJSYW5nZXMuXG4gICAgLy8gKFRoZXJlJ3MgYSBjYXNlIHdoZXJlIHN1YnRyYWN0aW9uIGRpdmlkZXMgaXQgaW4gMilcbiAgICBzdWJ0cmFjdChyYW5nZSkge1xuICAgICAgICBpZiAocmFuZ2UubG93IDw9IHRoaXMubG93ICYmIHJhbmdlLmhpZ2ggPj0gdGhpcy5oaWdoKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH0gZWxzZSBpZiAocmFuZ2UubG93ID4gdGhpcy5sb3cgJiYgcmFuZ2UuaGlnaCA8IHRoaXMuaGlnaCkge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBuZXcgU3ViUmFuZ2UodGhpcy5sb3csIHJhbmdlLmxvdyAtIDEpLFxuICAgICAgICAgICAgICAgIG5ldyBTdWJSYW5nZShyYW5nZS5oaWdoICsgMSwgdGhpcy5oaWdoKVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfSBlbHNlIGlmIChyYW5nZS5sb3cgPD0gdGhpcy5sb3cpIHtcbiAgICAgICAgICAgIHJldHVybiBbbmV3IFN1YlJhbmdlKHJhbmdlLmhpZ2ggKyAxLCB0aGlzLmhpZ2gpXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbbmV3IFN1YlJhbmdlKHRoaXMubG93LCByYW5nZS5sb3cgLSAxKV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG93ID09IHRoaXMuaGlnaCA/XG4gICAgICAgICAgICB0aGlzLmxvdy50b1N0cmluZygpIDogdGhpcy5sb3cgKyAnLScgKyB0aGlzLmhpZ2g7XG4gICAgfVxufVxuXG5cbmNsYXNzIERSYW5nZSB7XG4gICAgY29uc3RydWN0b3IoYSwgYikge1xuICAgICAgICB0aGlzLnJhbmdlcyA9IFtdO1xuICAgICAgICB0aGlzLmxlbmd0aCA9IDA7XG4gICAgICAgIGlmIChhICE9IG51bGwpIHRoaXMuYWRkKGEsIGIpO1xuICAgIH1cblxuICAgIF91cGRhdGVfbGVuZ3RoKCkge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IHRoaXMucmFuZ2VzLnJlZHVjZSgocHJldmlvdXMsIHJhbmdlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXMgKyByYW5nZS5sZW5ndGg7XG4gICAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIGFkZChhLCBiKSB7XG4gICAgICAgIHZhciBfYWRkID0gKHN1YnJhbmdlKSA9PiB7XG4gICAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoaSA8IHRoaXMucmFuZ2VzLmxlbmd0aCAmJiAhc3VicmFuZ2UudG91Y2hlcyh0aGlzLnJhbmdlc1tpXSkpIHtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbmV3UmFuZ2VzID0gdGhpcy5yYW5nZXMuc2xpY2UoMCwgaSk7XG4gICAgICAgICAgICB3aGlsZSAoaSA8IHRoaXMucmFuZ2VzLmxlbmd0aCAmJiBzdWJyYW5nZS50b3VjaGVzKHRoaXMucmFuZ2VzW2ldKSkge1xuICAgICAgICAgICAgICAgIHN1YnJhbmdlID0gc3VicmFuZ2UuYWRkKHRoaXMucmFuZ2VzW2ldKTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdSYW5nZXMucHVzaChzdWJyYW5nZSk7XG4gICAgICAgICAgICB0aGlzLnJhbmdlcyA9IG5ld1Jhbmdlcy5jb25jYXQodGhpcy5yYW5nZXMuc2xpY2UoaSkpO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlX2xlbmd0aCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGEgaW5zdGFuY2VvZiBEUmFuZ2UpIHtcbiAgICAgICAgICAgIGEucmFuZ2VzLmZvckVhY2goX2FkZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYiA9PSBudWxsKSBiID0gYTtcbiAgICAgICAgICAgIF9hZGQobmV3IFN1YlJhbmdlKGEsIGIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdWJ0cmFjdChhLCBiKSB7XG4gICAgICAgIHZhciBfc3VidHJhY3QgPSAoc3VicmFuZ2UpID0+IHtcbiAgICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChpIDwgdGhpcy5yYW5nZXMubGVuZ3RoICYmICFzdWJyYW5nZS5vdmVybGFwcyh0aGlzLnJhbmdlc1tpXSkpIHtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbmV3UmFuZ2VzID0gdGhpcy5yYW5nZXMuc2xpY2UoMCwgaSk7XG4gICAgICAgICAgICB3aGlsZSAoaSA8IHRoaXMucmFuZ2VzLmxlbmd0aCAmJiBzdWJyYW5nZS5vdmVybGFwcyh0aGlzLnJhbmdlc1tpXSkpIHtcbiAgICAgICAgICAgICAgICBuZXdSYW5nZXMgPSBuZXdSYW5nZXMuY29uY2F0KHRoaXMucmFuZ2VzW2ldLnN1YnRyYWN0KHN1YnJhbmdlKSk7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yYW5nZXMgPSBuZXdSYW5nZXMuY29uY2F0KHRoaXMucmFuZ2VzLnNsaWNlKGkpKTtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZV9sZW5ndGgoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoYSBpbnN0YW5jZW9mIERSYW5nZSkge1xuICAgICAgICAgICAgYS5yYW5nZXMuZm9yRWFjaChfc3VidHJhY3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGIgPT0gbnVsbCkgYiA9IGE7XG4gICAgICAgICAgICBfc3VidHJhY3QobmV3IFN1YlJhbmdlKGEsIGIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpbnRlcnNlY3QoYSwgYikge1xuICAgICAgICB2YXIgbmV3UmFuZ2VzID0gW107XG4gICAgICAgIHZhciBfaW50ZXJzZWN0ID0gKHN1YnJhbmdlKSA9PiB7XG4gICAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoaSA8IHRoaXMucmFuZ2VzLmxlbmd0aCAmJiAhc3VicmFuZ2Uub3ZlcmxhcHModGhpcy5yYW5nZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGkgPCB0aGlzLnJhbmdlcy5sZW5ndGggJiYgc3VicmFuZ2Uub3ZlcmxhcHModGhpcy5yYW5nZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxvdyA9IE1hdGgubWF4KHRoaXMucmFuZ2VzW2ldLmxvdywgc3VicmFuZ2UubG93KTtcbiAgICAgICAgICAgICAgICB2YXIgaGlnaCA9IE1hdGgubWluKHRoaXMucmFuZ2VzW2ldLmhpZ2gsIHN1YnJhbmdlLmhpZ2gpO1xuICAgICAgICAgICAgICAgIG5ld1Jhbmdlcy5wdXNoKG5ldyBTdWJSYW5nZShsb3csIGhpZ2gpKTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGEgaW5zdGFuY2VvZiBEUmFuZ2UpIHtcbiAgICAgICAgICAgIGEucmFuZ2VzLmZvckVhY2goX2ludGVyc2VjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYiA9PSBudWxsKSBiID0gYTtcbiAgICAgICAgICAgIF9pbnRlcnNlY3QobmV3IFN1YlJhbmdlKGEsIGIpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJhbmdlcyA9IG5ld1JhbmdlcztcbiAgICAgICAgdGhpcy5fdXBkYXRlX2xlbmd0aCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpbmRleChpbmRleCkge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgdGhpcy5yYW5nZXMubGVuZ3RoICYmIHRoaXMucmFuZ2VzW2ldLmxlbmd0aCA8PSBpbmRleCkge1xuICAgICAgICAgICAgaW5kZXggLT0gdGhpcy5yYW5nZXNbaV0ubGVuZ3RoO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJhbmdlc1tpXS5sb3cgKyBpbmRleDtcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuICdbICcgKyB0aGlzLnJhbmdlcy5qb2luKCcsICcpICsgJyBdJztcbiAgICB9XG5cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEUmFuZ2UodGhpcyk7XG4gICAgfVxuXG4gICAgbnVtYmVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmFuZ2VzLnJlZHVjZSgocmVzdWx0LCBzdWJyYW5nZSkgPT4ge1xuICAgICAgICAgICAgdmFyIGkgPSBzdWJyYW5nZS5sb3c7XG4gICAgICAgICAgICB3aGlsZSAoaSA8PSBzdWJyYW5nZS5oaWdoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaSk7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSwgW10pO1xuICAgIH1cblxuICAgIHN1YnJhbmdlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmFuZ2VzLm1hcCgoc3VicmFuZ2UpID0+ICh7XG4gICAgICAgICAgICBsb3c6IHN1YnJhbmdlLmxvdyxcbiAgICAgICAgICAgIGhpZ2g6IHN1YnJhbmdlLmhpZ2gsXG4gICAgICAgICAgICBsZW5ndGg6IDEgKyBzdWJyYW5nZS5oaWdoIC0gc3VicmFuZ2UubG93XG4gICAgICAgIH0pKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRFJhbmdlO1xuIiwiY29uc3QgcmV0ICAgID0gcmVxdWlyZSgncmV0Jyk7XG5jb25zdCBEUmFuZ2UgPSByZXF1aXJlKCdkcmFuZ2UnKTtcbmNvbnN0IHR5cGVzICA9IHJldC50eXBlcztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFJhbmRFeHAge1xuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7UmVnRXhwfFN0cmluZ30gcmVnZXhwXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtXG4gICAqL1xuICBjb25zdHJ1Y3RvcihyZWdleHAsIG0pIHtcbiAgICB0aGlzLl9zZXREZWZhdWx0cyhyZWdleHApO1xuICAgIGlmIChyZWdleHAgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIHRoaXMuaWdub3JlQ2FzZSA9IHJlZ2V4cC5pZ25vcmVDYXNlO1xuICAgICAgdGhpcy5tdWx0aWxpbmUgPSByZWdleHAubXVsdGlsaW5lO1xuICAgICAgcmVnZXhwID0gcmVnZXhwLnNvdXJjZTtcblxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlZ2V4cCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuaWdub3JlQ2FzZSA9IG0gJiYgbS5pbmRleE9mKCdpJykgIT09IC0xO1xuICAgICAgdGhpcy5tdWx0aWxpbmUgPSBtICYmIG0uaW5kZXhPZignbScpICE9PSAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBhIHJlZ2V4cCBvciBzdHJpbmcnKTtcbiAgICB9XG5cbiAgICB0aGlzLnRva2VucyA9IHJldChyZWdleHApO1xuICB9XG5cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHNvbWUgY3VzdG9tIHByb3BlcnRpZXMgaGF2ZSBiZWVuIHNldCBmb3IgdGhpcyByZWdleHAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmFuZEV4cH0gcmFuZGV4cFxuICAgKiBAcGFyYW0ge1JlZ0V4cH0gcmVnZXhwXG4gICAqL1xuICBfc2V0RGVmYXVsdHMocmVnZXhwKSB7XG4gICAgLy8gV2hlbiBhIHJlcGV0aXRpb25hbCB0b2tlbiBoYXMgaXRzIG1heCBzZXQgdG8gSW5maW5pdGUsXG4gICAgLy8gcmFuZGV4cCB3b24ndCBhY3R1YWxseSBnZW5lcmF0ZSBhIHJhbmRvbSBhbW91bnQgYmV0d2VlbiBtaW4gYW5kIEluZmluaXRlXG4gICAgLy8gaW5zdGVhZCBpdCB3aWxsIHNlZSBJbmZpbml0ZSBhcyBtaW4gKyAxMDAuXG4gICAgdGhpcy5tYXggPSByZWdleHAubWF4ICE9IG51bGwgPyByZWdleHAubWF4IDpcbiAgICAgIFJhbmRFeHAucHJvdG90eXBlLm1heCAhPSBudWxsID8gUmFuZEV4cC5wcm90b3R5cGUubWF4IDogMTAwO1xuXG4gICAgLy8gVGhpcyBhbGxvd3MgZXhwYW5kaW5nIHRvIGluY2x1ZGUgYWRkaXRpb25hbCBjaGFyYWN0ZXJzXG4gICAgLy8gZm9yIGluc3RhbmNlOiBSYW5kRXhwLmRlZmF1bHRSYW5nZS5hZGQoMCwgNjU1MzUpO1xuICAgIHRoaXMuZGVmYXVsdFJhbmdlID0gcmVnZXhwLmRlZmF1bHRSYW5nZSA/XG4gICAgICByZWdleHAuZGVmYXVsdFJhbmdlIDogdGhpcy5kZWZhdWx0UmFuZ2UuY2xvbmUoKTtcblxuICAgIGlmIChyZWdleHAucmFuZEludCkge1xuICAgICAgdGhpcy5yYW5kSW50ID0gcmVnZXhwLnJhbmRJbnQ7XG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICogR2VuZXJhdGVzIHRoZSByYW5kb20gc3RyaW5nLlxuICAgKlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBnZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dlbih0aGlzLnRva2VucywgW10pO1xuICB9XG5cblxuICAvKipcbiAgICogR2VuZXJhdGUgcmFuZG9tIHN0cmluZyBtb2RlbGVkIGFmdGVyIGdpdmVuIHRva2Vucy5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHRva2VuXG4gICAqIEBwYXJhbSB7QXJyYXkuPFN0cmluZz59IGdyb3Vwc1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBfZ2VuKHRva2VuLCBncm91cHMpIHtcbiAgICB2YXIgc3RhY2ssIHN0ciwgbiwgaSwgbDtcblxuICAgIHN3aXRjaCAodG9rZW4udHlwZSkge1xuICAgICAgY2FzZSB0eXBlcy5ST09UOlxuICAgICAgY2FzZSB0eXBlcy5HUk9VUDpcbiAgICAgICAgLy8gSWdub3JlIGxvb2thaGVhZHMgZm9yIG5vdy5cbiAgICAgICAgaWYgKHRva2VuLmZvbGxvd2VkQnkgfHwgdG9rZW4ubm90Rm9sbG93ZWRCeSkgeyByZXR1cm4gJyc7IH1cblxuICAgICAgICAvLyBJbnNlcnQgcGxhY2Vob2xkZXIgdW50aWwgZ3JvdXAgc3RyaW5nIGlzIGdlbmVyYXRlZC5cbiAgICAgICAgaWYgKHRva2VuLnJlbWVtYmVyICYmIHRva2VuLmdyb3VwTnVtYmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0b2tlbi5ncm91cE51bWJlciA9IGdyb3Vwcy5wdXNoKG51bGwpIC0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YWNrID0gdG9rZW4ub3B0aW9ucyA/XG4gICAgICAgICAgdGhpcy5fcmFuZFNlbGVjdCh0b2tlbi5vcHRpb25zKSA6IHRva2VuLnN0YWNrO1xuXG4gICAgICAgIHN0ciA9ICcnO1xuICAgICAgICBmb3IgKGkgPSAwLCBsID0gc3RhY2subGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgc3RyICs9IHRoaXMuX2dlbihzdGFja1tpXSwgZ3JvdXBzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0b2tlbi5yZW1lbWJlcikge1xuICAgICAgICAgIGdyb3Vwc1t0b2tlbi5ncm91cE51bWJlcl0gPSBzdHI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcblxuICAgICAgY2FzZSB0eXBlcy5QT1NJVElPTjpcbiAgICAgICAgLy8gRG8gbm90aGluZyBmb3Igbm93LlxuICAgICAgICByZXR1cm4gJyc7XG5cbiAgICAgIGNhc2UgdHlwZXMuU0VUOlxuICAgICAgICB2YXIgZXhwYW5kZWRTZXQgPSB0aGlzLl9leHBhbmQodG9rZW4pO1xuICAgICAgICBpZiAoIWV4cGFuZGVkU2V0Lmxlbmd0aCkgeyByZXR1cm4gJyc7IH1cbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUodGhpcy5fcmFuZFNlbGVjdChleHBhbmRlZFNldCkpO1xuXG4gICAgICBjYXNlIHR5cGVzLlJFUEVUSVRJT046XG4gICAgICAgIC8vIFJhbmRvbWx5IGdlbmVyYXRlIG51bWJlciBiZXR3ZWVuIG1pbiBhbmQgbWF4LlxuICAgICAgICBuID0gdGhpcy5yYW5kSW50KHRva2VuLm1pbixcbiAgICAgICAgICB0b2tlbi5tYXggPT09IEluZmluaXR5ID8gdG9rZW4ubWluICsgdGhpcy5tYXggOiB0b2tlbi5tYXgpO1xuXG4gICAgICAgIHN0ciA9ICcnO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgc3RyICs9IHRoaXMuX2dlbih0b2tlbi52YWx1ZSwgZ3JvdXBzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdHI7XG5cbiAgICAgIGNhc2UgdHlwZXMuUkVGRVJFTkNFOlxuICAgICAgICByZXR1cm4gZ3JvdXBzW3Rva2VuLnZhbHVlIC0gMV0gfHwgJyc7XG5cbiAgICAgIGNhc2UgdHlwZXMuQ0hBUjpcbiAgICAgICAgdmFyIGNvZGUgPSB0aGlzLmlnbm9yZUNhc2UgJiYgdGhpcy5fcmFuZEJvb2woKSA/XG4gICAgICAgICAgdGhpcy5fdG9PdGhlckNhc2UodG9rZW4udmFsdWUpIDogdG9rZW4udmFsdWU7XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIElmIGNvZGUgaXMgYWxwaGFiZXRpYywgY29udmVydHMgdG8gb3RoZXIgY2FzZS5cbiAgICogSWYgbm90IGFscGhhYmV0aWMsIHJldHVybnMgYmFjayBjb2RlLlxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29kZVxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAqL1xuICBfdG9PdGhlckNhc2UoY29kZSkge1xuICAgIHJldHVybiBjb2RlICsgKDk3IDw9IGNvZGUgJiYgY29kZSA8PSAxMjIgPyAtMzIgOlxuICAgICAgNjUgPD0gY29kZSAmJiBjb2RlIDw9IDkwICA/ICAzMiA6IDApO1xuICB9XG5cblxuICAvKipcbiAgICogUmFuZG9tbHkgcmV0dXJucyBhIHRydWUgb3IgZmFsc2UgdmFsdWUuXG4gICAqXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBfcmFuZEJvb2woKSB7XG4gICAgcmV0dXJuICF0aGlzLnJhbmRJbnQoMCwgMSk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBSYW5kb21seSBzZWxlY3RzIGFuZCByZXR1cm5zIGEgdmFsdWUgZnJvbSB0aGUgYXJyYXkuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXkuPE9iamVjdD59IGFyclxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBfcmFuZFNlbGVjdChhcnIpIHtcbiAgICBpZiAoYXJyIGluc3RhbmNlb2YgRFJhbmdlKSB7XG4gICAgICByZXR1cm4gYXJyLmluZGV4KHRoaXMucmFuZEludCgwLCBhcnIubGVuZ3RoIC0gMSkpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyW3RoaXMucmFuZEludCgwLCBhcnIubGVuZ3RoIC0gMSldO1xuICB9XG5cblxuICAvKipcbiAgICogZXhwYW5kcyBhIHRva2VuIHRvIGEgRGlzY29udGludW91c1JhbmdlIG9mIGNoYXJhY3RlcnMgd2hpY2ggaGFzIGFcbiAgICogbGVuZ3RoIGFuZCBhbiBpbmRleCBmdW5jdGlvbiAoZm9yIHJhbmRvbSBzZWxlY3RpbmcpXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB0b2tlblxuICAgKiBAcmV0dXJuIHtEaXNjb250aW51b3VzUmFuZ2V9XG4gICAqL1xuICBfZXhwYW5kKHRva2VuKSB7XG4gICAgaWYgKHRva2VuLnR5cGUgPT09IHJldC50eXBlcy5DSEFSKSB7XG4gICAgICByZXR1cm4gbmV3IERSYW5nZSh0b2tlbi52YWx1ZSk7XG4gICAgfSBlbHNlIGlmICh0b2tlbi50eXBlID09PSByZXQudHlwZXMuUkFOR0UpIHtcbiAgICAgIHJldHVybiBuZXcgRFJhbmdlKHRva2VuLmZyb20sIHRva2VuLnRvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGRyYW5nZSA9IG5ldyBEUmFuZ2UoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW4uc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzdWJyYW5nZSA9IHRoaXMuX2V4cGFuZCh0b2tlbi5zZXRbaV0pO1xuICAgICAgICBkcmFuZ2UuYWRkKHN1YnJhbmdlKTtcbiAgICAgICAgaWYgKHRoaXMuaWdub3JlQ2FzZSkge1xuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3VicmFuZ2UubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBjb2RlID0gc3VicmFuZ2UuaW5kZXgoaik7XG4gICAgICAgICAgICBsZXQgb3RoZXJDYXNlQ29kZSA9IHRoaXMuX3RvT3RoZXJDYXNlKGNvZGUpO1xuICAgICAgICAgICAgaWYgKGNvZGUgIT09IG90aGVyQ2FzZUNvZGUpIHtcbiAgICAgICAgICAgICAgZHJhbmdlLmFkZChvdGhlckNhc2VDb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0b2tlbi5ub3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdFJhbmdlLmNsb25lKCkuc3VidHJhY3QoZHJhbmdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRSYW5nZS5jbG9uZSgpLmludGVyc2VjdChkcmFuZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIFJhbmRvbWx5IGdlbmVyYXRlcyBhbmQgcmV0dXJucyBhIG51bWJlciBiZXR3ZWVuIGEgYW5kIGIgKGluY2x1c2l2ZSkuXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBhXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBiXG4gICAqIEByZXR1cm4ge051bWJlcn1cbiAgICovXG4gIHJhbmRJbnQoYSwgYikge1xuICAgIHJldHVybiBhICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEgKyBiIC0gYSkpO1xuICB9XG5cblxuICAvKipcbiAgICogRGVmYXVsdCByYW5nZSBvZiBjaGFyYWN0ZXJzIHRvIGdlbmVyYXRlIGZyb20uXG4gICAqL1xuICBnZXQgZGVmYXVsdFJhbmdlKCkge1xuICAgIHJldHVybiB0aGlzLl9yYW5nZSA9IHRoaXMuX3JhbmdlIHx8IG5ldyBEUmFuZ2UoMzIsIDEyNik7XG4gIH1cblxuICBzZXQgZGVmYXVsdFJhbmdlKHJhbmdlKSB7XG4gICAgdGhpcy5fcmFuZ2UgPSByYW5nZTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqXG4gICAqIEVuYWJsZXMgdXNlIG9mIHJhbmRleHAgd2l0aCBhIHNob3J0ZXIgY2FsbC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWdFeHB8U3RyaW5nfCByZWdleHB9XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIHN0YXRpYyByYW5kZXhwKHJlZ2V4cCwgbSkge1xuICAgIHZhciByYW5kZXhwO1xuICAgIGlmKHR5cGVvZiByZWdleHAgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKHJlZ2V4cCwgbSk7XG4gICAgfVxuXG4gICAgaWYgKHJlZ2V4cC5fcmFuZGV4cCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByYW5kZXhwID0gbmV3IFJhbmRFeHAocmVnZXhwLCBtKTtcbiAgICAgIHJlZ2V4cC5fcmFuZGV4cCA9IHJhbmRleHA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJhbmRleHAgPSByZWdleHAuX3JhbmRleHA7XG4gICAgICByYW5kZXhwLl9zZXREZWZhdWx0cyhyZWdleHApO1xuICAgIH1cbiAgICByZXR1cm4gcmFuZGV4cC5nZW4oKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgc3VnYXJ5IC9yZWdleHAvLmdlbiBzeW50YXguXG4gICAqL1xuICBzdGF0aWMgc3VnYXIoKSB7XG4gICAgLyogZXNoaW50IGZyZWV6ZTpmYWxzZSAqL1xuICAgIFJlZ0V4cC5wcm90b3R5cGUuZ2VuID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gUmFuZEV4cC5yYW5kZXhwKHRoaXMpO1xuICAgIH07XG4gIH1cbn07XG4iLCJjb25zdCB1dGlsICAgICAgPSByZXF1aXJlKCcuL3V0aWwnKTtcbmNvbnN0IHR5cGVzICAgICA9IHJlcXVpcmUoJy4vdHlwZXMnKTtcbmNvbnN0IHNldHMgICAgICA9IHJlcXVpcmUoJy4vc2V0cycpO1xuY29uc3QgcG9zaXRpb25zID0gcmVxdWlyZSgnLi9wb3NpdGlvbnMnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IChyZWdleHBTdHIpID0+IHtcbiAgdmFyIGkgPSAwLCBsLCBjLFxuICAgIHN0YXJ0ID0geyB0eXBlOiB0eXBlcy5ST09ULCBzdGFjazogW119LFxuXG4gICAgLy8gS2VlcCB0cmFjayBvZiBsYXN0IGNsYXVzZS9ncm91cCBhbmQgc3RhY2suXG4gICAgbGFzdEdyb3VwID0gc3RhcnQsXG4gICAgbGFzdCA9IHN0YXJ0LnN0YWNrLFxuICAgIGdyb3VwU3RhY2sgPSBbXTtcblxuXG4gIHZhciByZXBlYXRFcnIgPSAoaSkgPT4ge1xuICAgIHV0aWwuZXJyb3IocmVnZXhwU3RyLCBgTm90aGluZyB0byByZXBlYXQgYXQgY29sdW1uICR7aSAtIDF9YCk7XG4gIH07XG5cbiAgLy8gRGVjb2RlIGEgZmV3IGVzY2FwZWQgY2hhcmFjdGVycy5cbiAgdmFyIHN0ciA9IHV0aWwuc3RyVG9DaGFycyhyZWdleHBTdHIpO1xuICBsID0gc3RyLmxlbmd0aDtcblxuICAvLyBJdGVyYXRlIHRocm91Z2ggZWFjaCBjaGFyYWN0ZXIgaW4gc3RyaW5nLlxuICB3aGlsZSAoaSA8IGwpIHtcbiAgICBjID0gc3RyW2krK107XG5cbiAgICBzd2l0Y2ggKGMpIHtcbiAgICAgIC8vIEhhbmRsZSBlc2NhcGVkIGNoYXJhY3RlcnMsIGluY2x1ZXMgYSBmZXcgc2V0cy5cbiAgICAgIGNhc2UgJ1xcXFwnOlxuICAgICAgICBjID0gc3RyW2krK107XG5cbiAgICAgICAgc3dpdGNoIChjKSB7XG4gICAgICAgICAgY2FzZSAnYic6XG4gICAgICAgICAgICBsYXN0LnB1c2gocG9zaXRpb25zLndvcmRCb3VuZGFyeSgpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnQic6XG4gICAgICAgICAgICBsYXN0LnB1c2gocG9zaXRpb25zLm5vbldvcmRCb3VuZGFyeSgpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAndyc6XG4gICAgICAgICAgICBsYXN0LnB1c2goc2V0cy53b3JkcygpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnVyc6XG4gICAgICAgICAgICBsYXN0LnB1c2goc2V0cy5ub3RXb3JkcygpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnZCc6XG4gICAgICAgICAgICBsYXN0LnB1c2goc2V0cy5pbnRzKCkpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdEJzpcbiAgICAgICAgICAgIGxhc3QucHVzaChzZXRzLm5vdEludHMoKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICAgICAgbGFzdC5wdXNoKHNldHMud2hpdGVzcGFjZSgpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnUyc6XG4gICAgICAgICAgICBsYXN0LnB1c2goc2V0cy5ub3RXaGl0ZXNwYWNlKCkpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgYyBpcyBpbnRlZ2VyLlxuICAgICAgICAgICAgLy8gSW4gd2hpY2ggY2FzZSBpdCdzIGEgcmVmZXJlbmNlLlxuICAgICAgICAgICAgaWYgKC9cXGQvLnRlc3QoYykpIHtcbiAgICAgICAgICAgICAgbGFzdC5wdXNoKHsgdHlwZTogdHlwZXMuUkVGRVJFTkNFLCB2YWx1ZTogcGFyc2VJbnQoYywgMTApIH0pO1xuXG4gICAgICAgICAgICAvLyBFc2NhcGVkIGNoYXJhY3Rlci5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxhc3QucHVzaCh7IHR5cGU6IHR5cGVzLkNIQVIsIHZhbHVlOiBjLmNoYXJDb2RlQXQoMCkgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuXG4gICAgICAvLyBQb3NpdGlvbmFscy5cbiAgICAgIGNhc2UgJ14nOlxuICAgICAgICBsYXN0LnB1c2gocG9zaXRpb25zLmJlZ2luKCkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnJCc6XG4gICAgICAgIGxhc3QucHVzaChwb3NpdGlvbnMuZW5kKCkpO1xuICAgICAgICBicmVhaztcblxuXG4gICAgICAvLyBIYW5kbGUgY3VzdG9tIHNldHMuXG4gICAgICBjYXNlICdbJzpcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBjbGFzcyBpcyAnYW50aScgaS5lLiBbXmFiY10uXG4gICAgICAgIHZhciBub3Q7XG4gICAgICAgIGlmIChzdHJbaV0gPT09ICdeJykge1xuICAgICAgICAgIG5vdCA9IHRydWU7XG4gICAgICAgICAgaSsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vdCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2V0IGFsbCB0aGUgY2hhcmFjdGVycyBpbiBjbGFzcy5cbiAgICAgICAgdmFyIGNsYXNzVG9rZW5zID0gdXRpbC50b2tlbml6ZUNsYXNzKHN0ci5zbGljZShpKSwgcmVnZXhwU3RyKTtcblxuICAgICAgICAvLyBJbmNyZWFzZSBpbmRleCBieSBsZW5ndGggb2YgY2xhc3MuXG4gICAgICAgIGkgKz0gY2xhc3NUb2tlbnNbMV07XG4gICAgICAgIGxhc3QucHVzaCh7XG4gICAgICAgICAgdHlwZTogdHlwZXMuU0VULFxuICAgICAgICAgIHNldDogY2xhc3NUb2tlbnNbMF0sXG4gICAgICAgICAgbm90LFxuICAgICAgICB9KTtcblxuICAgICAgICBicmVhaztcblxuXG4gICAgICAvLyBDbGFzcyBvZiBhbnkgY2hhcmFjdGVyIGV4Y2VwdCBcXG4uXG4gICAgICBjYXNlICcuJzpcbiAgICAgICAgbGFzdC5wdXNoKHNldHMuYW55Q2hhcigpKTtcbiAgICAgICAgYnJlYWs7XG5cblxuICAgICAgLy8gUHVzaCBncm91cCBvbnRvIHN0YWNrLlxuICAgICAgY2FzZSAnKCc6XG4gICAgICAgIC8vIENyZWF0ZSBncm91cC5cbiAgICAgICAgdmFyIGdyb3VwID0ge1xuICAgICAgICAgIHR5cGU6IHR5cGVzLkdST1VQLFxuICAgICAgICAgIHN0YWNrOiBbXSxcbiAgICAgICAgICByZW1lbWJlcjogdHJ1ZSxcbiAgICAgICAgfTtcblxuICAgICAgICBjID0gc3RyW2ldO1xuXG4gICAgICAgIC8vIElmIGlmIHRoaXMgaXMgYSBzcGVjaWFsIGtpbmQgb2YgZ3JvdXAuXG4gICAgICAgIGlmIChjID09PSAnPycpIHtcbiAgICAgICAgICBjID0gc3RyW2kgKyAxXTtcbiAgICAgICAgICBpICs9IDI7XG5cbiAgICAgICAgICAvLyBNYXRjaCBpZiBmb2xsb3dlZCBieS5cbiAgICAgICAgICBpZiAoYyA9PT0gJz0nKSB7XG4gICAgICAgICAgICBncm91cC5mb2xsb3dlZEJ5ID0gdHJ1ZTtcblxuICAgICAgICAgIC8vIE1hdGNoIGlmIG5vdCBmb2xsb3dlZCBieS5cbiAgICAgICAgICB9IGVsc2UgaWYgKGMgPT09ICchJykge1xuICAgICAgICAgICAgZ3JvdXAubm90Rm9sbG93ZWRCeSA9IHRydWU7XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGMgIT09ICc6Jykge1xuICAgICAgICAgICAgdXRpbC5lcnJvcihyZWdleHBTdHIsXG4gICAgICAgICAgICAgIGBJbnZhbGlkIGdyb3VwLCBjaGFyYWN0ZXIgJyR7Y30nYCArXG4gICAgICAgICAgICAgIGAgYWZ0ZXIgJz8nIGF0IGNvbHVtbiAke2kgLSAxfWApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGdyb3VwLnJlbWVtYmVyID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnNlcnQgc3ViZ3JvdXAgaW50byBjdXJyZW50IGdyb3VwIHN0YWNrLlxuICAgICAgICBsYXN0LnB1c2goZ3JvdXApO1xuXG4gICAgICAgIC8vIFJlbWVtYmVyIHRoZSBjdXJyZW50IGdyb3VwIGZvciB3aGVuIHRoZSBncm91cCBjbG9zZXMuXG4gICAgICAgIGdyb3VwU3RhY2sucHVzaChsYXN0R3JvdXApO1xuXG4gICAgICAgIC8vIE1ha2UgdGhpcyBuZXcgZ3JvdXAgdGhlIGN1cnJlbnQgZ3JvdXAuXG4gICAgICAgIGxhc3RHcm91cCA9IGdyb3VwO1xuICAgICAgICBsYXN0ID0gZ3JvdXAuc3RhY2s7XG4gICAgICAgIGJyZWFrO1xuXG5cbiAgICAgIC8vIFBvcCBncm91cCBvdXQgb2Ygc3RhY2suXG4gICAgICBjYXNlICcpJzpcbiAgICAgICAgaWYgKGdyb3VwU3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdXRpbC5lcnJvcihyZWdleHBTdHIsIGBVbm1hdGNoZWQgKSBhdCBjb2x1bW4gJHtpIC0gMX1gKTtcbiAgICAgICAgfVxuICAgICAgICBsYXN0R3JvdXAgPSBncm91cFN0YWNrLnBvcCgpO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoaXMgZ3JvdXAgaGFzIGEgUElQRS5cbiAgICAgICAgLy8gVG8gZ2V0IGJhY2sgdGhlIGNvcnJlY3QgbGFzdCBzdGFjay5cbiAgICAgICAgbGFzdCA9IGxhc3RHcm91cC5vcHRpb25zID9cbiAgICAgICAgICBsYXN0R3JvdXAub3B0aW9uc1tsYXN0R3JvdXAub3B0aW9ucy5sZW5ndGggLSAxXSA6IGxhc3RHcm91cC5zdGFjaztcbiAgICAgICAgYnJlYWs7XG5cblxuICAgICAgLy8gVXNlIHBpcGUgY2hhcmFjdGVyIHRvIGdpdmUgbW9yZSBjaG9pY2VzLlxuICAgICAgY2FzZSAnfCc6XG4gICAgICAgIC8vIENyZWF0ZSBhcnJheSB3aGVyZSBvcHRpb25zIGFyZSBpZiB0aGlzIGlzIHRoZSBmaXJzdCBQSVBFXG4gICAgICAgIC8vIGluIHRoaXMgY2xhdXNlLlxuICAgICAgICBpZiAoIWxhc3RHcm91cC5vcHRpb25zKSB7XG4gICAgICAgICAgbGFzdEdyb3VwLm9wdGlvbnMgPSBbbGFzdEdyb3VwLnN0YWNrXTtcbiAgICAgICAgICBkZWxldGUgbGFzdEdyb3VwLnN0YWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IHN0YWNrIGFuZCBhZGQgdG8gb3B0aW9ucyBmb3IgcmVzdCBvZiBjbGF1c2UuXG4gICAgICAgIHZhciBzdGFjayA9IFtdO1xuICAgICAgICBsYXN0R3JvdXAub3B0aW9ucy5wdXNoKHN0YWNrKTtcbiAgICAgICAgbGFzdCA9IHN0YWNrO1xuICAgICAgICBicmVhaztcblxuXG4gICAgICAvLyBSZXBldGl0aW9uLlxuICAgICAgLy8gRm9yIGV2ZXJ5IHJlcGV0aXRpb24sIHJlbW92ZSBsYXN0IGVsZW1lbnQgZnJvbSBsYXN0IHN0YWNrXG4gICAgICAvLyB0aGVuIGluc2VydCBiYWNrIGEgUkFOR0Ugb2JqZWN0LlxuICAgICAgLy8gVGhpcyBkZXNpZ24gaXMgY2hvc2VuIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgbW9yZSB0aGFuXG4gICAgICAvLyBvbmUgcmVwZXRpdGlvbiBzeW1ib2xzIGluIGEgcmVnZXggaS5lLiBgYT8rezIsM31gLlxuICAgICAgY2FzZSAneyc6XG4gICAgICAgIHZhciBycyA9IC9eKFxcZCspKCwoXFxkKyk/KT9cXH0vLmV4ZWMoc3RyLnNsaWNlKGkpKSwgbWluLCBtYXg7XG4gICAgICAgIGlmIChycyAhPT0gbnVsbCkge1xuICAgICAgICAgIGlmIChsYXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmVwZWF0RXJyKGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtaW4gPSBwYXJzZUludChyc1sxXSwgMTApO1xuICAgICAgICAgIG1heCA9IHJzWzJdID8gcnNbM10gPyBwYXJzZUludChyc1szXSwgMTApIDogSW5maW5pdHkgOiBtaW47XG4gICAgICAgICAgaSArPSByc1swXS5sZW5ndGg7XG5cbiAgICAgICAgICBsYXN0LnB1c2goe1xuICAgICAgICAgICAgdHlwZTogdHlwZXMuUkVQRVRJVElPTixcbiAgICAgICAgICAgIG1pbixcbiAgICAgICAgICAgIG1heCxcbiAgICAgICAgICAgIHZhbHVlOiBsYXN0LnBvcCgpLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxhc3QucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiB0eXBlcy5DSEFSLFxuICAgICAgICAgICAgdmFsdWU6IDEyMyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnPyc6XG4gICAgICAgIGlmIChsYXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJlcGVhdEVycihpKTtcbiAgICAgICAgfVxuICAgICAgICBsYXN0LnB1c2goe1xuICAgICAgICAgIHR5cGU6IHR5cGVzLlJFUEVUSVRJT04sXG4gICAgICAgICAgbWluOiAwLFxuICAgICAgICAgIG1heDogMSxcbiAgICAgICAgICB2YWx1ZTogbGFzdC5wb3AoKSxcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICcrJzpcbiAgICAgICAgaWYgKGxhc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmVwZWF0RXJyKGkpO1xuICAgICAgICB9XG4gICAgICAgIGxhc3QucHVzaCh7XG4gICAgICAgICAgdHlwZTogdHlwZXMuUkVQRVRJVElPTixcbiAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgbWF4OiBJbmZpbml0eSxcbiAgICAgICAgICB2YWx1ZTogbGFzdC5wb3AoKSxcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICcqJzpcbiAgICAgICAgaWYgKGxhc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmVwZWF0RXJyKGkpO1xuICAgICAgICB9XG4gICAgICAgIGxhc3QucHVzaCh7XG4gICAgICAgICAgdHlwZTogdHlwZXMuUkVQRVRJVElPTixcbiAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgbWF4OiBJbmZpbml0eSxcbiAgICAgICAgICB2YWx1ZTogbGFzdC5wb3AoKSxcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuXG5cbiAgICAgIC8vIERlZmF1bHQgaXMgYSBjaGFyYWN0ZXIgdGhhdCBpcyBub3QgYFxcW10oKXt9PysqXiRgLlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbGFzdC5wdXNoKHtcbiAgICAgICAgICB0eXBlOiB0eXBlcy5DSEFSLFxuICAgICAgICAgIHZhbHVlOiBjLmNoYXJDb2RlQXQoMCksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgYW55IGdyb3VwcyBoYXZlIG5vdCBiZWVuIGNsb3NlZC5cbiAgaWYgKGdyb3VwU3RhY2subGVuZ3RoICE9PSAwKSB7XG4gICAgdXRpbC5lcnJvcihyZWdleHBTdHIsICdVbnRlcm1pbmF0ZWQgZ3JvdXAnKTtcbiAgfVxuXG4gIHJldHVybiBzdGFydDtcbn07XG5cbm1vZHVsZS5leHBvcnRzLnR5cGVzID0gdHlwZXM7XG4iLCJjb25zdCB0eXBlcyA9IHJlcXVpcmUoJy4vdHlwZXMnKTtcbmV4cG9ydHMud29yZEJvdW5kYXJ5ID0gKCkgPT4gKHsgdHlwZTogdHlwZXMuUE9TSVRJT04sIHZhbHVlOiAnYicgfSk7XG5leHBvcnRzLm5vbldvcmRCb3VuZGFyeSA9ICgpID0+ICh7IHR5cGU6IHR5cGVzLlBPU0lUSU9OLCB2YWx1ZTogJ0InIH0pO1xuZXhwb3J0cy5iZWdpbiA9ICgpID0+ICh7IHR5cGU6IHR5cGVzLlBPU0lUSU9OLCB2YWx1ZTogJ14nIH0pO1xuZXhwb3J0cy5lbmQgPSAoKSA9PiAoeyB0eXBlOiB0eXBlcy5QT1NJVElPTiwgdmFsdWU6ICckJyB9KTtcbiIsImNvbnN0IHR5cGVzID0gcmVxdWlyZSgnLi90eXBlcycpO1xuXG5jb25zdCBJTlRTID0gKCkgPT4gW3sgdHlwZTogdHlwZXMuUkFOR0UgLCBmcm9tOiA0OCwgdG86IDU3IH1dO1xuXG5jb25zdCBXT1JEUyA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7IHR5cGU6IHR5cGVzLkNIQVIsIHZhbHVlOiA5NSB9LFxuICAgIHsgdHlwZTogdHlwZXMuUkFOR0UsIGZyb206IDk3LCB0bzogMTIyIH0sXG4gICAgeyB0eXBlOiB0eXBlcy5SQU5HRSwgZnJvbTogNjUsIHRvOiA5MCB9XG4gIF0uY29uY2F0KElOVFMoKSk7XG59O1xuXG5jb25zdCBXSElURVNQQUNFID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHsgdHlwZTogdHlwZXMuQ0hBUiwgdmFsdWU6IDkgfSxcbiAgICB7IHR5cGU6IHR5cGVzLkNIQVIsIHZhbHVlOiAxMCB9LFxuICAgIHsgdHlwZTogdHlwZXMuQ0hBUiwgdmFsdWU6IDExIH0sXG4gICAgeyB0eXBlOiB0eXBlcy5DSEFSLCB2YWx1ZTogMTIgfSxcbiAgICB7IHR5cGU6IHR5cGVzLkNIQVIsIHZhbHVlOiAxMyB9LFxuICAgIHsgdHlwZTogdHlwZXMuQ0hBUiwgdmFsdWU6IDMyIH0sXG4gICAgeyB0eXBlOiB0eXBlcy5DSEFSLCB2YWx1ZTogMTYwIH0sXG4gICAgeyB0eXBlOiB0eXBlcy5DSEFSLCB2YWx1ZTogNTc2MCB9LFxuICAgIHsgdHlwZTogdHlwZXMuUkFOR0UsIGZyb206IDgxOTIsIHRvOiA4MjAyIH0sXG4gICAgeyB0eXBlOiB0eXBlcy5DSEFSLCB2YWx1ZTogODIzMiB9LFxuICAgIHsgdHlwZTogdHlwZXMuQ0hBUiwgdmFsdWU6IDgyMzMgfSxcbiAgICB7IHR5cGU6IHR5cGVzLkNIQVIsIHZhbHVlOiA4MjM5IH0sXG4gICAgeyB0eXBlOiB0eXBlcy5DSEFSLCB2YWx1ZTogODI4NyB9LFxuICAgIHsgdHlwZTogdHlwZXMuQ0hBUiwgdmFsdWU6IDEyMjg4IH0sXG4gICAgeyB0eXBlOiB0eXBlcy5DSEFSLCB2YWx1ZTogNjUyNzkgfVxuICBdO1xufTtcblxuY29uc3QgTk9UQU5ZQ0hBUiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7IHR5cGU6IHR5cGVzLkNIQVIsIHZhbHVlOiAxMCB9LFxuICAgIHsgdHlwZTogdHlwZXMuQ0hBUiwgdmFsdWU6IDEzIH0sXG4gICAgeyB0eXBlOiB0eXBlcy5DSEFSLCB2YWx1ZTogODIzMiB9LFxuICAgIHsgdHlwZTogdHlwZXMuQ0hBUiwgdmFsdWU6IDgyMzMgfSxcbiAgXTtcbn07XG5cbi8vIFByZWRlZmluZWQgY2xhc3Mgb2JqZWN0cy5cbmV4cG9ydHMud29yZHMgPSAoKSA9PiAoeyB0eXBlOiB0eXBlcy5TRVQsIHNldDogV09SRFMoKSwgbm90OiBmYWxzZSB9KTtcbmV4cG9ydHMubm90V29yZHMgPSAoKSA9PiAoeyB0eXBlOiB0eXBlcy5TRVQsIHNldDogV09SRFMoKSwgbm90OiB0cnVlIH0pO1xuZXhwb3J0cy5pbnRzID0gKCkgPT4gKHsgdHlwZTogdHlwZXMuU0VULCBzZXQ6IElOVFMoKSwgbm90OiBmYWxzZSB9KTtcbmV4cG9ydHMubm90SW50cyA9ICgpID0+ICh7IHR5cGU6IHR5cGVzLlNFVCwgc2V0OiBJTlRTKCksIG5vdDogdHJ1ZSB9KTtcbmV4cG9ydHMud2hpdGVzcGFjZSA9ICgpID0+ICh7IHR5cGU6IHR5cGVzLlNFVCwgc2V0OiBXSElURVNQQUNFKCksIG5vdDogZmFsc2UgfSk7XG5leHBvcnRzLm5vdFdoaXRlc3BhY2UgPSAoKSA9PiAoeyB0eXBlOiB0eXBlcy5TRVQsIHNldDogV0hJVEVTUEFDRSgpLCBub3Q6IHRydWUgfSk7XG5leHBvcnRzLmFueUNoYXIgPSAoKSA9PiAoeyB0eXBlOiB0eXBlcy5TRVQsIHNldDogTk9UQU5ZQ0hBUigpLCBub3Q6IHRydWUgfSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgUk9PVCAgICAgICA6IDAsXG4gIEdST1VQICAgICAgOiAxLFxuICBQT1NJVElPTiAgIDogMixcbiAgU0VUICAgICAgICA6IDMsXG4gIFJBTkdFICAgICAgOiA0LFxuICBSRVBFVElUSU9OIDogNSxcbiAgUkVGRVJFTkNFICA6IDYsXG4gIENIQVIgICAgICAgOiA3LFxufTtcbiIsImNvbnN0IHR5cGVzID0gcmVxdWlyZSgnLi90eXBlcycpO1xuY29uc3Qgc2V0cyAgPSByZXF1aXJlKCcuL3NldHMnKTtcblxuXG5jb25zdCBDVFJMID0gJ0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXFxcXV4gPyc7XG5jb25zdCBTTFNIID0geyAnMCc6IDAsICd0JzogOSwgJ24nOiAxMCwgJ3YnOiAxMSwgJ2YnOiAxMiwgJ3InOiAxMyB9O1xuXG4vKipcbiAqIEZpbmRzIGNoYXJhY3RlciByZXByZXNlbnRhdGlvbnMgaW4gc3RyIGFuZCBjb252ZXJ0IGFsbCB0b1xuICogdGhlaXIgcmVzcGVjdGl2ZSBjaGFyYWN0ZXJzXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLnN0clRvQ2hhcnMgPSBmdW5jdGlvbihzdHIpIHtcbiAgLyoganNoaW50IG1heGxlbjogZmFsc2UgKi9cbiAgdmFyIGNoYXJzX3JlZ2V4ID0gLyhcXFtcXFxcYlxcXSl8KFxcXFwpP1xcXFwoPzp1KFtBLUYwLTldezR9KXx4KFtBLUYwLTldezJ9KXwoMD9bMC03XXsyfSl8YyhbQEEtWltcXFxcXFxdXj9dKXwoWzB0bnZmcl0pKS9nO1xuICBzdHIgPSBzdHIucmVwbGFjZShjaGFyc19yZWdleCwgZnVuY3Rpb24ocywgYiwgbGJzLCBhMTYsIGIxNiwgYzgsIGRjdHJsLCBlc2xzaCkge1xuICAgIGlmIChsYnMpIHtcbiAgICAgIHJldHVybiBzO1xuICAgIH1cblxuICAgIHZhciBjb2RlID0gYiA/IDggOlxuICAgICAgYTE2ICAgPyBwYXJzZUludChhMTYsIDE2KSA6XG4gICAgICBiMTYgICA/IHBhcnNlSW50KGIxNiwgMTYpIDpcbiAgICAgIGM4ICAgID8gcGFyc2VJbnQoYzgsICAgOCkgOlxuICAgICAgZGN0cmwgPyBDVFJMLmluZGV4T2YoZGN0cmwpIDpcbiAgICAgIFNMU0hbZXNsc2hdO1xuXG4gICAgdmFyIGMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xuXG4gICAgLy8gRXNjYXBlIHNwZWNpYWwgcmVnZXggY2hhcmFjdGVycy5cbiAgICBpZiAoL1tbXFxde31eJC58PyorKCldLy50ZXN0KGMpKSB7XG4gICAgICBjID0gJ1xcXFwnICsgYztcbiAgICB9XG5cbiAgICByZXR1cm4gYztcbiAgfSk7XG5cbiAgcmV0dXJuIHN0cjtcbn07XG5cblxuLyoqXG4gKiB0dXJucyBjbGFzcyBpbnRvIHRva2Vuc1xuICogcmVhZHMgc3RyIHVudGlsIGl0IGVuY291bnRlcnMgYSBdIG5vdCBwcmVjZWVkZWQgYnkgYSBcXFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7U3RyaW5nfSByZWdleHBTdHJcbiAqIEByZXR1cm4ge0FycmF5LjxBcnJheS48T2JqZWN0PiwgTnVtYmVyPn1cbiAqL1xuZXhwb3J0cy50b2tlbml6ZUNsYXNzID0gKHN0ciwgcmVnZXhwU3RyKSA9PiB7XG4gIC8qIGpzaGludCBtYXhsZW46IGZhbHNlICovXG4gIHZhciB0b2tlbnMgPSBbXTtcbiAgdmFyIHJlZ2V4cCA9IC9cXFxcKD86KHcpfChkKXwocyl8KFcpfChEKXwoUykpfCgoPzooPzpcXFxcKSguKXwoW15cXF1cXFxcXSkpLSg/OlxcXFwpPyhbXlxcXV0pKXwoXFxdKXwoPzpcXFxcKT8oW15dKS9nO1xuICB2YXIgcnMsIGM7XG5cblxuICB3aGlsZSAoKHJzID0gcmVnZXhwLmV4ZWMoc3RyKSkgIT0gbnVsbCkge1xuICAgIGlmIChyc1sxXSkge1xuICAgICAgdG9rZW5zLnB1c2goc2V0cy53b3JkcygpKTtcblxuICAgIH0gZWxzZSBpZiAocnNbMl0pIHtcbiAgICAgIHRva2Vucy5wdXNoKHNldHMuaW50cygpKTtcblxuICAgIH0gZWxzZSBpZiAocnNbM10pIHtcbiAgICAgIHRva2Vucy5wdXNoKHNldHMud2hpdGVzcGFjZSgpKTtcblxuICAgIH0gZWxzZSBpZiAocnNbNF0pIHtcbiAgICAgIHRva2Vucy5wdXNoKHNldHMubm90V29yZHMoKSk7XG5cbiAgICB9IGVsc2UgaWYgKHJzWzVdKSB7XG4gICAgICB0b2tlbnMucHVzaChzZXRzLm5vdEludHMoKSk7XG5cbiAgICB9IGVsc2UgaWYgKHJzWzZdKSB7XG4gICAgICB0b2tlbnMucHVzaChzZXRzLm5vdFdoaXRlc3BhY2UoKSk7XG5cbiAgICB9IGVsc2UgaWYgKHJzWzddKSB7XG4gICAgICB0b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6IHR5cGVzLlJBTkdFLFxuICAgICAgICBmcm9tOiAocnNbOF0gfHwgcnNbOV0pLmNoYXJDb2RlQXQoMCksXG4gICAgICAgIHRvOiByc1sxMF0uY2hhckNvZGVBdCgwKSxcbiAgICAgIH0pO1xuXG4gICAgfSBlbHNlIGlmICgoYyA9IHJzWzEyXSkpIHtcbiAgICAgIHRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogdHlwZXMuQ0hBUixcbiAgICAgICAgdmFsdWU6IGMuY2hhckNvZGVBdCgwKSxcbiAgICAgIH0pO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbdG9rZW5zLCByZWdleHAubGFzdEluZGV4XTtcbiAgICB9XG4gIH1cblxuICBleHBvcnRzLmVycm9yKHJlZ2V4cFN0ciwgJ1VudGVybWluYXRlZCBjaGFyYWN0ZXIgY2xhc3MnKTtcbn07XG5cblxuLyoqXG4gKiBTaG9ydGN1dCB0byB0aHJvdyBlcnJvcnMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHJlZ2V4cFxuICogQHBhcmFtIHtTdHJpbmd9IG1zZ1xuICovXG5leHBvcnRzLmVycm9yID0gKHJlZ2V4cCwgbXNnKSA9PiB7XG4gIHRocm93IG5ldyBTeW50YXhFcnJvcignSW52YWxpZCByZWd1bGFyIGV4cHJlc3Npb246IC8nICsgcmVnZXhwICsgJy86ICcgKyBtc2cpO1xufTtcbiIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOih0PXR8fHNlbGYpLlN3ZWV0YWxlcnQyPWUoKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCl7cmV0dXJuKHI9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKHQpe3JldHVybiB0eXBlb2YgdH06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmdC5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmdCE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgdH0pKHQpfWZ1bmN0aW9uIGEodCxlKXtpZighKHQgaW5zdGFuY2VvZiBlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIG8odCxlKXtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIG89ZVtuXTtvLmVudW1lcmFibGU9by5lbnVtZXJhYmxlfHwhMSxvLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBvJiYoby53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsby5rZXksbyl9fWZ1bmN0aW9uIHModCxlLG4pe3JldHVybiBlJiZvKHQucHJvdG90eXBlLGUpLG4mJm8odCxuKSx0fWZ1bmN0aW9uIHUoKXtyZXR1cm4odT1PYmplY3QuYXNzaWdufHxmdW5jdGlvbih0KXtmb3IodmFyIGU9MTtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXt2YXIgbixvPWFyZ3VtZW50c1tlXTtmb3IobiBpbiBvKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLG4pJiYodFtuXT1vW25dKX1yZXR1cm4gdH0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBjKHQpe3JldHVybihjPU9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3QuZ2V0UHJvdG90eXBlT2Y6ZnVuY3Rpb24odCl7cmV0dXJuIHQuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YodCl9KSh0KX1mdW5jdGlvbiBsKHQsZSl7cmV0dXJuKGw9T2JqZWN0LnNldFByb3RvdHlwZU9mfHxmdW5jdGlvbih0LGUpe3JldHVybiB0Ll9fcHJvdG9fXz1lLHR9KSh0LGUpfWZ1bmN0aW9uIGQoKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgUmVmbGVjdHx8IVJlZmxlY3QuY29uc3RydWN0KXJldHVybiExO2lmKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pcmV0dXJuITE7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgUHJveHkpcmV0dXJuITA7dHJ5e3JldHVybiBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbixbXSxmdW5jdGlvbigpe30pKSwhMH1jYXRjaCh0KXtyZXR1cm4hMX19ZnVuY3Rpb24gaSh0LGUsbil7cmV0dXJuKGk9ZCgpP1JlZmxlY3QuY29uc3RydWN0OmZ1bmN0aW9uKHQsZSxuKXt2YXIgbz1bbnVsbF07by5wdXNoLmFwcGx5KG8sZSk7bz1uZXcoRnVuY3Rpb24uYmluZC5hcHBseSh0LG8pKTtyZXR1cm4gbiYmbChvLG4ucHJvdG90eXBlKSxvfSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfWZ1bmN0aW9uIHAodCxlKXtyZXR1cm4hZXx8XCJvYmplY3RcIiE9dHlwZW9mIGUmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGU/ZnVuY3Rpb24odCl7aWYodm9pZCAwPT09dCl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIHR9KHQpOmV9ZnVuY3Rpb24gZih0LGUsbil7cmV0dXJuKGY9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFJlZmxlY3QmJlJlZmxlY3QuZ2V0P1JlZmxlY3QuZ2V0OmZ1bmN0aW9uKHQsZSxuKXt0PWZ1bmN0aW9uKHQsZSl7Zm9yKDshT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSkmJm51bGwhPT0odD1jKHQpKTspO3JldHVybiB0fSh0LGUpO2lmKHQpe2U9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LGUpO3JldHVybiBlLmdldD9lLmdldC5jYWxsKG4pOmUudmFsdWV9fSkodCxlLG58fHQpfWZ1bmN0aW9uIG0odCl7cmV0dXJuIHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKX1mdW5jdGlvbiBoKGUpe3JldHVybiBPYmplY3Qua2V5cyhlKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19KX1mdW5jdGlvbiBnKHQpe3JldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0KX1mdW5jdGlvbiB2KHQsZSl7ZT0nXCInLmNvbmNhdCh0LCdcIiBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS4gUGxlYXNlIHVzZSBcIicpLmNvbmNhdChlLCdcIiBpbnN0ZWFkLicpLC0xPT09WS5pbmRleE9mKGUpJiYoWS5wdXNoKGUpLFcoZSkpfWZ1bmN0aW9uIGIodCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHQudG9Qcm9taXNlfWZ1bmN0aW9uIHkodCl7cmV0dXJuIGIodCk/dC50b1Byb21pc2UoKTpQcm9taXNlLnJlc29sdmUodCl9ZnVuY3Rpb24gdyh0KXtyZXR1cm4gdCYmUHJvbWlzZS5yZXNvbHZlKHQpPT09dH1mdW5jdGlvbiBDKHQpe3JldHVybiB0IGluc3RhbmNlb2YgRWxlbWVudHx8XCJvYmplY3RcIj09PXIodD10KSYmdC5qcXVlcnl9ZnVuY3Rpb24gaygpe3JldHVybiBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KCQuY29udGFpbmVyKSl9ZnVuY3Rpb24gZSh0KXt2YXIgZT1rKCk7cmV0dXJuIGU/ZS5xdWVyeVNlbGVjdG9yKHQpOm51bGx9ZnVuY3Rpb24gdCh0KXtyZXR1cm4gZShcIi5cIi5jb25jYXQodCkpfWZ1bmN0aW9uIEEoKXtyZXR1cm4gdCgkLnBvcHVwKX1mdW5jdGlvbiB4KCl7cmV0dXJuIHQoJC5pY29uKX1mdW5jdGlvbiBCKCl7cmV0dXJuIHQoJC50aXRsZSl9ZnVuY3Rpb24gUCgpe3JldHVybiB0KCQuY29udGVudCl9ZnVuY3Rpb24gTygpe3JldHVybiB0KCRbXCJodG1sLWNvbnRhaW5lclwiXSl9ZnVuY3Rpb24gRSgpe3JldHVybiB0KCQuaW1hZ2UpfWZ1bmN0aW9uIG4oKXtyZXR1cm4gdCgkW1wicHJvZ3Jlc3Mtc3RlcHNcIl0pfWZ1bmN0aW9uIFMoKXtyZXR1cm4gdCgkW1widmFsaWRhdGlvbi1tZXNzYWdlXCJdKX1mdW5jdGlvbiBUKCl7cmV0dXJuIGUoXCIuXCIuY29uY2F0KCQuYWN0aW9ucyxcIiAuXCIpLmNvbmNhdCgkLmNvbmZpcm0pKX1mdW5jdGlvbiBMKCl7cmV0dXJuIGUoXCIuXCIuY29uY2F0KCQuYWN0aW9ucyxcIiAuXCIpLmNvbmNhdCgkLmRlbnkpKX1mdW5jdGlvbiBxKCl7cmV0dXJuIGUoXCIuXCIuY29uY2F0KCQubG9hZGVyKSl9ZnVuY3Rpb24gRCgpe3JldHVybiBlKFwiLlwiLmNvbmNhdCgkLmFjdGlvbnMsXCIgLlwiKS5jb25jYXQoJC5jYW5jZWwpKX1mdW5jdGlvbiBqKCl7cmV0dXJuIHQoJC5hY3Rpb25zKX1mdW5jdGlvbiBNKCl7cmV0dXJuIHQoJC5oZWFkZXIpfWZ1bmN0aW9uIEkoKXtyZXR1cm4gdCgkLmZvb3Rlcil9ZnVuY3Rpb24gSCgpe3JldHVybiB0KCRbXCJ0aW1lci1wcm9ncmVzcy1iYXJcIl0pfWZ1bmN0aW9uIFYoKXtyZXR1cm4gdCgkLmNsb3NlKX1mdW5jdGlvbiBSKCl7dmFyIHQ9ZyhBKCkucXVlcnlTZWxlY3RvckFsbCgnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4PVwiLTFcIl0pOm5vdChbdGFiaW5kZXg9XCIwXCJdKScpKS5zb3J0KGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQ9cGFyc2VJbnQodC5nZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKSksKGU9cGFyc2VJbnQoZS5nZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKSkpPHQ/MTp0PGU/LTE6MH0pLGU9ZyhBKCkucXVlcnlTZWxlY3RvckFsbCgnXFxuICBhW2hyZWZdLFxcbiAgYXJlYVtocmVmXSxcXG4gIGlucHV0Om5vdChbZGlzYWJsZWRdKSxcXG4gIHNlbGVjdDpub3QoW2Rpc2FibGVkXSksXFxuICB0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSksXFxuICBidXR0b246bm90KFtkaXNhYmxlZF0pLFxcbiAgaWZyYW1lLFxcbiAgb2JqZWN0LFxcbiAgZW1iZWQsXFxuICBbdGFiaW5kZXg9XCIwXCJdLFxcbiAgW2NvbnRlbnRlZGl0YWJsZV0sXFxuICBhdWRpb1tjb250cm9sc10sXFxuICB2aWRlb1tjb250cm9sc10sXFxuICBzdW1tYXJ5XFxuJykpLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm5cIi0xXCIhPT10LmdldEF0dHJpYnV0ZShcInRhYmluZGV4XCIpfSk7cmV0dXJuIGZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1bXSxuPTA7bjx0Lmxlbmd0aDtuKyspLTE9PT1lLmluZGV4T2YodFtuXSkmJmUucHVzaCh0W25dKTtyZXR1cm4gZX0odC5jb25jYXQoZSkpLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4gd3QodCl9KX1mdW5jdGlvbiBOKCl7cmV0dXJuIUcoKSYmIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCRbXCJuby1iYWNrZHJvcFwiXSl9ZnVuY3Rpb24gVShlLHQpe2UudGV4dENvbnRlbnQ9XCJcIix0JiYodD0obmV3IERPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKHQsXCJ0ZXh0L2h0bWxcIiksZyh0LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpLmNoaWxkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24odCl7ZS5hcHBlbmRDaGlsZCh0KX0pLGcodC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jaGlsZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2UuYXBwZW5kQ2hpbGQodCl9KSl9ZnVuY3Rpb24gRih0LGUpe2lmKGUpe2Zvcih2YXIgbj1lLnNwbGl0KC9cXHMrLyksbz0wO288bi5sZW5ndGg7bysrKWlmKCF0LmNsYXNzTGlzdC5jb250YWlucyhuW29dKSlyZXR1cm47cmV0dXJuIDF9fWZ1bmN0aW9uIF8odCxlLG4pe3ZhciBvLGk7aWYoaT1lLGcoKG89dCkuY2xhc3NMaXN0KS5mb3JFYWNoKGZ1bmN0aW9uKHQpey0xPT09aCgkKS5pbmRleE9mKHQpJiYtMT09PWgoWCkuaW5kZXhPZih0KSYmLTE9PT1oKGkuc2hvd0NsYXNzKS5pbmRleE9mKHQpJiZvLmNsYXNzTGlzdC5yZW1vdmUodCl9KSxlLmN1c3RvbUNsYXNzJiZlLmN1c3RvbUNsYXNzW25dKXtpZihcInN0cmluZ1wiIT10eXBlb2YgZS5jdXN0b21DbGFzc1tuXSYmIWUuY3VzdG9tQ2xhc3Nbbl0uZm9yRWFjaClyZXR1cm4gVyhcIkludmFsaWQgdHlwZSBvZiBjdXN0b21DbGFzcy5cIi5jb25jYXQobiwnISBFeHBlY3RlZCBzdHJpbmcgb3IgaXRlcmFibGUgb2JqZWN0LCBnb3QgXCInKS5jb25jYXQocihlLmN1c3RvbUNsYXNzW25dKSwnXCInKSk7dnQodCxlLmN1c3RvbUNsYXNzW25dKX19dmFyIHo9XCJTd2VldEFsZXJ0MjpcIixXPWZ1bmN0aW9uKHQpe2NvbnNvbGUud2FybihcIlwiLmNvbmNhdCh6LFwiIFwiKS5jb25jYXQoXCJvYmplY3RcIj09PXIodCk/dC5qb2luKFwiIFwiKTp0KSl9LEs9ZnVuY3Rpb24odCl7Y29uc29sZS5lcnJvcihcIlwiLmNvbmNhdCh6LFwiIFwiKS5jb25jYXQodCkpfSxZPVtdLFo9ZnVuY3Rpb24odCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90KCk6dH0sUT1PYmplY3QuZnJlZXplKHtjYW5jZWw6XCJjYW5jZWxcIixiYWNrZHJvcDpcImJhY2tkcm9wXCIsY2xvc2U6XCJjbG9zZVwiLGVzYzpcImVzY1wiLHRpbWVyOlwidGltZXJcIn0pLEo9ZnVuY3Rpb24odCl7dmFyIGUsbj17fTtmb3IoZSBpbiB0KW5bdFtlXV09XCJzd2FsMi1cIit0W2VdO3JldHVybiBufSwkPUooW1wiY29udGFpbmVyXCIsXCJzaG93blwiLFwiaGVpZ2h0LWF1dG9cIixcImlvc2ZpeFwiLFwicG9wdXBcIixcIm1vZGFsXCIsXCJuby1iYWNrZHJvcFwiLFwibm8tdHJhbnNpdGlvblwiLFwidG9hc3RcIixcInRvYXN0LXNob3duXCIsXCJzaG93XCIsXCJoaWRlXCIsXCJjbG9zZVwiLFwidGl0bGVcIixcImhlYWRlclwiLFwiY29udGVudFwiLFwiaHRtbC1jb250YWluZXJcIixcImFjdGlvbnNcIixcImNvbmZpcm1cIixcImRlbnlcIixcImNhbmNlbFwiLFwiZm9vdGVyXCIsXCJpY29uXCIsXCJpY29uLWNvbnRlbnRcIixcImltYWdlXCIsXCJpbnB1dFwiLFwiZmlsZVwiLFwicmFuZ2VcIixcInNlbGVjdFwiLFwicmFkaW9cIixcImNoZWNrYm94XCIsXCJsYWJlbFwiLFwidGV4dGFyZWFcIixcImlucHV0ZXJyb3JcIixcImlucHV0LWxhYmVsXCIsXCJ2YWxpZGF0aW9uLW1lc3NhZ2VcIixcInByb2dyZXNzLXN0ZXBzXCIsXCJhY3RpdmUtcHJvZ3Jlc3Mtc3RlcFwiLFwicHJvZ3Jlc3Mtc3RlcFwiLFwicHJvZ3Jlc3Mtc3RlcC1saW5lXCIsXCJsb2FkZXJcIixcImxvYWRpbmdcIixcInN0eWxlZFwiLFwidG9wXCIsXCJ0b3Atc3RhcnRcIixcInRvcC1lbmRcIixcInRvcC1sZWZ0XCIsXCJ0b3AtcmlnaHRcIixcImNlbnRlclwiLFwiY2VudGVyLXN0YXJ0XCIsXCJjZW50ZXItZW5kXCIsXCJjZW50ZXItbGVmdFwiLFwiY2VudGVyLXJpZ2h0XCIsXCJib3R0b21cIixcImJvdHRvbS1zdGFydFwiLFwiYm90dG9tLWVuZFwiLFwiYm90dG9tLWxlZnRcIixcImJvdHRvbS1yaWdodFwiLFwiZ3Jvdy1yb3dcIixcImdyb3ctY29sdW1uXCIsXCJncm93LWZ1bGxzY3JlZW5cIixcInJ0bFwiLFwidGltZXItcHJvZ3Jlc3MtYmFyXCIsXCJ0aW1lci1wcm9ncmVzcy1iYXItY29udGFpbmVyXCIsXCJzY3JvbGxiYXItbWVhc3VyZVwiLFwiaWNvbi1zdWNjZXNzXCIsXCJpY29uLXdhcm5pbmdcIixcImljb24taW5mb1wiLFwiaWNvbi1xdWVzdGlvblwiLFwiaWNvbi1lcnJvclwiXSksWD1KKFtcInN1Y2Nlc3NcIixcIndhcm5pbmdcIixcImluZm9cIixcInF1ZXN0aW9uXCIsXCJlcnJvclwiXSksRz1mdW5jdGlvbigpe3JldHVybiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygkW1widG9hc3Qtc2hvd25cIl0pfSx0dD17cHJldmlvdXNCb2R5UGFkZGluZzpudWxsfTtmdW5jdGlvbiBldCh0LGUpe2lmKCFlKXJldHVybiBudWxsO3N3aXRjaChlKXtjYXNlXCJzZWxlY3RcIjpjYXNlXCJ0ZXh0YXJlYVwiOmNhc2VcImZpbGVcIjpyZXR1cm4geXQodCwkW2VdKTtjYXNlXCJjaGVja2JveFwiOnJldHVybiB0LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KCQuY2hlY2tib3gsXCIgaW5wdXRcIikpO2Nhc2VcInJhZGlvXCI6cmV0dXJuIHQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoJC5yYWRpbyxcIiBpbnB1dDpjaGVja2VkXCIpKXx8dC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdCgkLnJhZGlvLFwiIGlucHV0OmZpcnN0LWNoaWxkXCIpKTtjYXNlXCJyYW5nZVwiOnJldHVybiB0LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KCQucmFuZ2UsXCIgaW5wdXRcIikpO2RlZmF1bHQ6cmV0dXJuIHl0KHQsJC5pbnB1dCl9fWZ1bmN0aW9uIG50KHQpe3ZhciBlO3QuZm9jdXMoKSxcImZpbGVcIiE9PXQudHlwZSYmKGU9dC52YWx1ZSx0LnZhbHVlPVwiXCIsdC52YWx1ZT1lKX1mdW5jdGlvbiBvdCh0LGUsbil7dCYmZSYmKGU9XCJzdHJpbmdcIj09dHlwZW9mIGU/ZS5zcGxpdCgvXFxzKy8pLmZpbHRlcihCb29sZWFuKTplKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3QuZm9yRWFjaD90LmZvckVhY2goZnVuY3Rpb24odCl7bj90LmNsYXNzTGlzdC5hZGQoZSk6dC5jbGFzc0xpc3QucmVtb3ZlKGUpfSk6bj90LmNsYXNzTGlzdC5hZGQoZSk6dC5jbGFzc0xpc3QucmVtb3ZlKGUpfSl9ZnVuY3Rpb24gaXQodCxlLG4peyhuPW49PT1cIlwiLmNvbmNhdChwYXJzZUludChuKSk/cGFyc2VJbnQobik6bil8fDA9PT1wYXJzZUludChuKT90LnN0eWxlW2VdPVwibnVtYmVyXCI9PXR5cGVvZiBuP1wiXCIuY29uY2F0KG4sXCJweFwiKTpuOnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoZSl9ZnVuY3Rpb24gcnQodCl7dC5zdHlsZS5kaXNwbGF5PTE8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTpcImZsZXhcIn1mdW5jdGlvbiBhdCh0KXt0LnN0eWxlLmRpc3BsYXk9XCJub25lXCJ9ZnVuY3Rpb24gc3QodCxlLG4sbyl7KGU9dC5xdWVyeVNlbGVjdG9yKGUpKSYmKGUuc3R5bGVbbl09byl9ZnVuY3Rpb24gdXQodCxlLG4pe2U/cnQodCxuKTphdCh0KX1mdW5jdGlvbiBjdCh0KXtyZXR1cm4hISh0LnNjcm9sbEhlaWdodD50LmNsaWVudEhlaWdodCl9ZnVuY3Rpb24gbHQodCl7dmFyIGU9d2luZG93LmdldENvbXB1dGVkU3R5bGUodCksdD1wYXJzZUZsb2F0KGUuZ2V0UHJvcGVydHlWYWx1ZShcImFuaW1hdGlvbi1kdXJhdGlvblwiKXx8XCIwXCIpLGU9cGFyc2VGbG9hdChlLmdldFByb3BlcnR5VmFsdWUoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIpfHxcIjBcIik7cmV0dXJuIDA8dHx8MDxlfWZ1bmN0aW9uIGR0KHQpe3ZhciBlPTE8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzFdJiZhcmd1bWVudHNbMV0sbj1IKCk7d3QobikmJihlJiYobi5zdHlsZS50cmFuc2l0aW9uPVwibm9uZVwiLG4uc3R5bGUud2lkdGg9XCIxMDAlXCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtuLnN0eWxlLnRyYW5zaXRpb249XCJ3aWR0aCBcIi5jb25jYXQodC8xZTMsXCJzIGxpbmVhclwiKSxuLnN0eWxlLndpZHRoPVwiMCVcIn0sMTApKX1mdW5jdGlvbiBwdCgpe3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiB3aW5kb3d8fFwidW5kZWZpbmVkXCI9PXR5cGVvZiBkb2N1bWVudH1mdW5jdGlvbiBmdCh0KXtNbi5pc1Zpc2libGUoKSYmZ3QhPT10LnRhcmdldC52YWx1ZSYmTW4ucmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpLGd0PXQudGFyZ2V0LnZhbHVlfWZ1bmN0aW9uIG10KHQsZSl7dCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50P2UuYXBwZW5kQ2hpbGQodCk6XCJvYmplY3RcIj09PXIodCk/QXQodCxlKTp0JiZVKGUsdCl9ZnVuY3Rpb24gaHQodCxlKXt2YXIgbj1qKCksbz1xKCksaT1UKCkscj1MKCksYT1EKCk7ZS5zaG93Q29uZmlybUJ1dHRvbnx8ZS5zaG93RGVueUJ1dHRvbnx8ZS5zaG93Q2FuY2VsQnV0dG9ufHxhdChuKSxfKG4sZSxcImFjdGlvbnNcIiksUHQoaSxcImNvbmZpcm1cIixlKSxQdChyLFwiZGVueVwiLGUpLFB0KGEsXCJjYW5jZWxcIixlKSxmdW5jdGlvbih0LGUsbixvKXtpZighby5idXR0b25zU3R5bGluZylyZXR1cm4gYnQoW3QsZSxuXSwkLnN0eWxlZCk7dnQoW3QsZSxuXSwkLnN0eWxlZCksby5jb25maXJtQnV0dG9uQ29sb3ImJih0LnN0eWxlLmJhY2tncm91bmRDb2xvcj1vLmNvbmZpcm1CdXR0b25Db2xvcik7by5kZW55QnV0dG9uQ29sb3ImJihlLnN0eWxlLmJhY2tncm91bmRDb2xvcj1vLmRlbnlCdXR0b25Db2xvcik7by5jYW5jZWxCdXR0b25Db2xvciYmKG4uc3R5bGUuYmFja2dyb3VuZENvbG9yPW8uY2FuY2VsQnV0dG9uQ29sb3IpfShpLHIsYSxlKSxlLnJldmVyc2VCdXR0b25zJiYobi5pbnNlcnRCZWZvcmUoYSxvKSxuLmluc2VydEJlZm9yZShyLG8pLG4uaW5zZXJ0QmVmb3JlKGksbykpLFUobyxlLmxvYWRlckh0bWwpLF8obyxlLFwibG9hZGVyXCIpfXZhciBndCx2dD1mdW5jdGlvbih0LGUpe290KHQsZSwhMCl9LGJ0PWZ1bmN0aW9uKHQsZSl7b3QodCxlLCExKX0seXQ9ZnVuY3Rpb24odCxlKXtmb3IodmFyIG49MDtuPHQuY2hpbGROb2Rlcy5sZW5ndGg7bisrKWlmKEYodC5jaGlsZE5vZGVzW25dLGUpKXJldHVybiB0LmNoaWxkTm9kZXNbbl19LHd0PWZ1bmN0aW9uKHQpe3JldHVybiEoIXR8fCEodC5vZmZzZXRXaWR0aHx8dC5vZmZzZXRIZWlnaHR8fHQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpKX0sQ3Q9J1xcbiA8ZGl2IGFyaWEtbGFiZWxsZWRieT1cIicuY29uY2F0KCQudGl0bGUsJ1wiIGFyaWEtZGVzY3JpYmVkYnk9XCInKS5jb25jYXQoJC5jb250ZW50LCdcIiBjbGFzcz1cIicpLmNvbmNhdCgkLnBvcHVwLCdcIiB0YWJpbmRleD1cIi0xXCI+XFxuICAgPGRpdiBjbGFzcz1cIicpLmNvbmNhdCgkLmhlYWRlciwnXCI+XFxuICAgICA8dWwgY2xhc3M9XCInKS5jb25jYXQoJFtcInByb2dyZXNzLXN0ZXBzXCJdLCdcIj48L3VsPlxcbiAgICAgPGRpdiBjbGFzcz1cIicpLmNvbmNhdCgkLmljb24sJ1wiPjwvZGl2PlxcbiAgICAgPGltZyBjbGFzcz1cIicpLmNvbmNhdCgkLmltYWdlLCdcIiAvPlxcbiAgICAgPGgyIGNsYXNzPVwiJykuY29uY2F0KCQudGl0bGUsJ1wiIGlkPVwiJykuY29uY2F0KCQudGl0bGUsJ1wiPjwvaDI+XFxuICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIicpLmNvbmNhdCgkLmNsb3NlLCdcIj48L2J1dHRvbj5cXG4gICA8L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVwiJykuY29uY2F0KCQuY29udGVudCwnXCI+XFxuICAgICA8ZGl2IGlkPVwiJykuY29uY2F0KCQuY29udGVudCwnXCIgY2xhc3M9XCInKS5jb25jYXQoJFtcImh0bWwtY29udGFpbmVyXCJdLCdcIj48L2Rpdj5cXG4gICAgIDxpbnB1dCBjbGFzcz1cIicpLmNvbmNhdCgkLmlucHV0LCdcIiAvPlxcbiAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3M9XCInKS5jb25jYXQoJC5maWxlLCdcIiAvPlxcbiAgICAgPGRpdiBjbGFzcz1cIicpLmNvbmNhdCgkLnJhbmdlLCdcIj5cXG4gICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIC8+XFxuICAgICAgIDxvdXRwdXQ+PC9vdXRwdXQ+XFxuICAgICA8L2Rpdj5cXG4gICAgIDxzZWxlY3QgY2xhc3M9XCInKS5jb25jYXQoJC5zZWxlY3QsJ1wiPjwvc2VsZWN0PlxcbiAgICAgPGRpdiBjbGFzcz1cIicpLmNvbmNhdCgkLnJhZGlvLCdcIj48L2Rpdj5cXG4gICAgIDxsYWJlbCBmb3I9XCInKS5jb25jYXQoJC5jaGVja2JveCwnXCIgY2xhc3M9XCInKS5jb25jYXQoJC5jaGVja2JveCwnXCI+XFxuICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxcbiAgICAgICA8c3BhbiBjbGFzcz1cIicpLmNvbmNhdCgkLmxhYmVsLCdcIj48L3NwYW4+XFxuICAgICA8L2xhYmVsPlxcbiAgICAgPHRleHRhcmVhIGNsYXNzPVwiJykuY29uY2F0KCQudGV4dGFyZWEsJ1wiPjwvdGV4dGFyZWE+XFxuICAgICA8ZGl2IGNsYXNzPVwiJykuY29uY2F0KCRbXCJ2YWxpZGF0aW9uLW1lc3NhZ2VcIl0sJ1wiIGlkPVwiJykuY29uY2F0KCRbXCJ2YWxpZGF0aW9uLW1lc3NhZ2VcIl0sJ1wiPjwvZGl2PlxcbiAgIDwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XCInKS5jb25jYXQoJC5hY3Rpb25zLCdcIj5cXG4gICAgIDxkaXYgY2xhc3M9XCInKS5jb25jYXQoJC5sb2FkZXIsJ1wiPjwvZGl2PlxcbiAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCInKS5jb25jYXQoJC5jb25maXJtLCdcIj48L2J1dHRvbj5cXG4gICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJykuY29uY2F0KCQuZGVueSwnXCI+PC9idXR0b24+XFxuICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIicpLmNvbmNhdCgkLmNhbmNlbCwnXCI+PC9idXR0b24+XFxuICAgPC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cIicpLmNvbmNhdCgkLmZvb3RlciwnXCI+PC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cIicpLmNvbmNhdCgkW1widGltZXItcHJvZ3Jlc3MtYmFyLWNvbnRhaW5lclwiXSwnXCI+XFxuICAgICA8ZGl2IGNsYXNzPVwiJykuY29uY2F0KCRbXCJ0aW1lci1wcm9ncmVzcy1iYXJcIl0sJ1wiPjwvZGl2PlxcbiAgIDwvZGl2PlxcbiA8L2Rpdj5cXG4nKS5yZXBsYWNlKC8oXnxcXG4pXFxzKi9nLFwiXCIpLGt0PWZ1bmN0aW9uKHQpe3ZhciBlLG4sbyxpLHIsYT0hIShpPWsoKSkmJihpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaSksYnQoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCxkb2N1bWVudC5ib2R5XSxbJFtcIm5vLWJhY2tkcm9wXCJdLCRbXCJ0b2FzdC1zaG93blwiXSwkW1wiaGFzLWNvbHVtblwiXV0pLCEwKTtwdCgpP0soXCJTd2VldEFsZXJ0MiByZXF1aXJlcyBkb2N1bWVudCB0byBpbml0aWFsaXplXCIpOigocj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKS5jbGFzc05hbWU9JC5jb250YWluZXIsYSYmdnQociwkW1wibm8tdHJhbnNpdGlvblwiXSksVShyLEN0KSwoaT1cInN0cmluZ1wiPT10eXBlb2YoZT10LnRhcmdldCk/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlKTplKS5hcHBlbmRDaGlsZChyKSxhPXQsKGU9QSgpKS5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsYS50b2FzdD9cImFsZXJ0XCI6XCJkaWFsb2dcIiksZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxpdmVcIixhLnRvYXN0P1wicG9saXRlXCI6XCJhc3NlcnRpdmVcIiksYS50b2FzdHx8ZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLW1vZGFsXCIsXCJ0cnVlXCIpLHI9aSxcInJ0bFwiPT09d2luZG93LmdldENvbXB1dGVkU3R5bGUocikuZGlyZWN0aW9uJiZ2dChrKCksJC5ydGwpLHQ9UCgpLGE9eXQodCwkLmlucHV0KSxlPXl0KHQsJC5maWxlKSxuPXQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoJC5yYW5nZSxcIiBpbnB1dFwiKSksbz10LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KCQucmFuZ2UsXCIgb3V0cHV0XCIpKSxpPXl0KHQsJC5zZWxlY3QpLHI9dC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdCgkLmNoZWNrYm94LFwiIGlucHV0XCIpKSx0PXl0KHQsJC50ZXh0YXJlYSksYS5vbmlucHV0PWZ0LGUub25jaGFuZ2U9ZnQsaS5vbmNoYW5nZT1mdCxyLm9uY2hhbmdlPWZ0LHQub25pbnB1dD1mdCxuLm9uaW5wdXQ9ZnVuY3Rpb24odCl7ZnQodCksby52YWx1ZT1uLnZhbHVlfSxuLm9uY2hhbmdlPWZ1bmN0aW9uKHQpe2Z0KHQpLG4ubmV4dFNpYmxpbmcudmFsdWU9bi52YWx1ZX0pfSxBdD1mdW5jdGlvbih0LGUpe3QuanF1ZXJ5P3h0KGUsdCk6VShlLHQudG9TdHJpbmcoKSl9LHh0PWZ1bmN0aW9uKHQsZSl7aWYodC50ZXh0Q29udGVudD1cIlwiLDAgaW4gZSlmb3IodmFyIG49MDtuIGluIGU7bisrKXQuYXBwZW5kQ2hpbGQoZVtuXS5jbG9uZU5vZGUoITApKTtlbHNlIHQuYXBwZW5kQ2hpbGQoZS5jbG9uZU5vZGUoITApKX0sQnQ9ZnVuY3Rpb24oKXtpZihwdCgpKXJldHVybiExO3ZhciB0LGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxuPXtXZWJraXRBbmltYXRpb246XCJ3ZWJraXRBbmltYXRpb25FbmRcIixPQW5pbWF0aW9uOlwib0FuaW1hdGlvbkVuZCBvYW5pbWF0aW9uZW5kXCIsYW5pbWF0aW9uOlwiYW5pbWF0aW9uZW5kXCJ9O2Zvcih0IGluIG4paWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sdCkmJnZvaWQgMCE9PWUuc3R5bGVbdF0pcmV0dXJuIG5bdF07cmV0dXJuITF9KCk7ZnVuY3Rpb24gUHQodCxlLG4pe3V0KHQsbltcInNob3dcIi5jb25jYXQobShlKSxcIkJ1dHRvblwiKV0sXCJpbmxpbmUtYmxvY2tcIiksVSh0LG5bXCJcIi5jb25jYXQoZSxcIkJ1dHRvblRleHRcIildKSx0LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIixuW1wiXCIuY29uY2F0KGUsXCJCdXR0b25BcmlhTGFiZWxcIildKSx0LmNsYXNzTmFtZT0kW2VdLF8odCxuLFwiXCIuY29uY2F0KGUsXCJCdXR0b25cIikpLHZ0KHQsbltcIlwiLmNvbmNhdChlLFwiQnV0dG9uQ2xhc3NcIildKX1mdW5jdGlvbiBPdCh0LGUpe3ZhciBuLG8saT1rKCk7aSYmKG89aSxcInN0cmluZ1wiPT10eXBlb2Yobj1lLmJhY2tkcm9wKT9vLnN0eWxlLmJhY2tncm91bmQ9bjpufHx2dChbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LGRvY3VtZW50LmJvZHldLCRbXCJuby1iYWNrZHJvcFwiXSksIWUuYmFja2Ryb3AmJmUuYWxsb3dPdXRzaWRlQ2xpY2smJlcoJ1wiYWxsb3dPdXRzaWRlQ2xpY2tcIiBwYXJhbWV0ZXIgcmVxdWlyZXMgYGJhY2tkcm9wYCBwYXJhbWV0ZXIgdG8gYmUgc2V0IHRvIGB0cnVlYCcpLG89aSwobj1lLnBvc2l0aW9uKWluICQ/dnQobywkW25dKTooVygnVGhlIFwicG9zaXRpb25cIiBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkLCBkZWZhdWx0aW5nIHRvIFwiY2VudGVyXCInKSx2dChvLCQuY2VudGVyKSksbj1pLCEobz1lLmdyb3cpfHxcInN0cmluZ1wiIT10eXBlb2Ygb3x8KG89XCJncm93LVwiLmNvbmNhdChvKSlpbiAkJiZ2dChuLCRbb10pLF8oaSxlLFwiY29udGFpbmVyXCIpLChlPWRvY3VtZW50LmJvZHkuZ2V0QXR0cmlidXRlKFwiZGF0YS1zd2FsMi1xdWV1ZS1zdGVwXCIpKSYmKGkuc2V0QXR0cmlidXRlKFwiZGF0YS1xdWV1ZS1zdGVwXCIsZSksZG9jdW1lbnQuYm9keS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXN3YWwyLXF1ZXVlLXN0ZXBcIikpKX1mdW5jdGlvbiBFdCh0LGUpe3QucGxhY2Vob2xkZXImJiFlLmlucHV0UGxhY2Vob2xkZXJ8fCh0LnBsYWNlaG9sZGVyPWUuaW5wdXRQbGFjZWhvbGRlcil9ZnVuY3Rpb24gU3QodCxlLG4pe3ZhciBvLGk7bi5pbnB1dExhYmVsJiYodC5pZD0kLmlucHV0LG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpLGk9JFtcImlucHV0LWxhYmVsXCJdLG8uc2V0QXR0cmlidXRlKFwiZm9yXCIsdC5pZCksby5jbGFzc05hbWU9aSx2dChvLG4uY3VzdG9tQ2xhc3MuaW5wdXRMYWJlbCksby5pbm5lclRleHQ9bi5pbnB1dExhYmVsLGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlYmVnaW5cIixvKSl9dmFyIFR0PXtwcm9taXNlOm5ldyBXZWFrTWFwLGlubmVyUGFyYW1zOm5ldyBXZWFrTWFwLGRvbUNhY2hlOm5ldyBXZWFrTWFwfSxMdD1bXCJpbnB1dFwiLFwiZmlsZVwiLFwicmFuZ2VcIixcInNlbGVjdFwiLFwicmFkaW9cIixcImNoZWNrYm94XCIsXCJ0ZXh0YXJlYVwiXSxxdD1mdW5jdGlvbih0KXtpZighSXRbdC5pbnB1dF0pcmV0dXJuIEsoJ1VuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dCEgRXhwZWN0ZWQgXCJ0ZXh0XCIsIFwiZW1haWxcIiwgXCJwYXNzd29yZFwiLCBcIm51bWJlclwiLCBcInRlbFwiLCBcInNlbGVjdFwiLCBcInJhZGlvXCIsIFwiY2hlY2tib3hcIiwgXCJ0ZXh0YXJlYVwiLCBcImZpbGVcIiBvciBcInVybFwiLCBnb3QgXCInLmNvbmNhdCh0LmlucHV0LCdcIicpKTt2YXIgZT1NdCh0LmlucHV0KSxuPUl0W3QuaW5wdXRdKGUsdCk7cnQobiksc2V0VGltZW91dChmdW5jdGlvbigpe250KG4pfSl9LER0PWZ1bmN0aW9uKHQsZSl7dmFyIG49ZXQoUCgpLHQpO2lmKG4pZm9yKHZhciBvIGluIWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wO2U8dC5hdHRyaWJ1dGVzLmxlbmd0aDtlKyspe3ZhciBuPXQuYXR0cmlidXRlc1tlXS5uYW1lOy0xPT09W1widHlwZVwiLFwidmFsdWVcIixcInN0eWxlXCJdLmluZGV4T2YobikmJnQucmVtb3ZlQXR0cmlidXRlKG4pfX0obiksZSlcInJhbmdlXCI9PT10JiZcInBsYWNlaG9sZGVyXCI9PT1vfHxuLnNldEF0dHJpYnV0ZShvLGVbb10pfSxqdD1mdW5jdGlvbih0KXt2YXIgZT1NdCh0LmlucHV0KTt0LmN1c3RvbUNsYXNzJiZ2dChlLHQuY3VzdG9tQ2xhc3MuaW5wdXQpfSxNdD1mdW5jdGlvbih0KXt0PSRbdF18fCQuaW5wdXQ7cmV0dXJuIHl0KFAoKSx0KX0sSXQ9e307SXQudGV4dD1JdC5lbWFpbD1JdC5wYXNzd29yZD1JdC5udW1iZXI9SXQudGVsPUl0LnVybD1mdW5jdGlvbih0LGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlLmlucHV0VmFsdWV8fFwibnVtYmVyXCI9PXR5cGVvZiBlLmlucHV0VmFsdWU/dC52YWx1ZT1lLmlucHV0VmFsdWU6dyhlLmlucHV0VmFsdWUpfHxXKCdVbmV4cGVjdGVkIHR5cGUgb2YgaW5wdXRWYWx1ZSEgRXhwZWN0ZWQgXCJzdHJpbmdcIiwgXCJudW1iZXJcIiBvciBcIlByb21pc2VcIiwgZ290IFwiJy5jb25jYXQocihlLmlucHV0VmFsdWUpLCdcIicpKSxTdCh0LHQsZSksRXQodCxlKSx0LnR5cGU9ZS5pbnB1dCx0fSxJdC5maWxlPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIFN0KHQsdCxlKSxFdCh0LGUpLHR9LEl0LnJhbmdlPWZ1bmN0aW9uKHQsZSl7dmFyIG49dC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIiksbz10LnF1ZXJ5U2VsZWN0b3IoXCJvdXRwdXRcIik7cmV0dXJuIG4udmFsdWU9ZS5pbnB1dFZhbHVlLG4udHlwZT1lLmlucHV0LG8udmFsdWU9ZS5pbnB1dFZhbHVlLFN0KG4sdCxlKSx0fSxJdC5zZWxlY3Q9ZnVuY3Rpb24odCxlKXt2YXIgbjtyZXR1cm4gdC50ZXh0Q29udGVudD1cIlwiLGUuaW5wdXRQbGFjZWhvbGRlciYmKG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSxVKG4sZS5pbnB1dFBsYWNlaG9sZGVyKSxuLnZhbHVlPVwiXCIsbi5kaXNhYmxlZD0hMCxuLnNlbGVjdGVkPSEwLHQuYXBwZW5kQ2hpbGQobikpLFN0KHQsdCxlKSx0fSxJdC5yYWRpbz1mdW5jdGlvbih0KXtyZXR1cm4gdC50ZXh0Q29udGVudD1cIlwiLHR9LEl0LmNoZWNrYm94PWZ1bmN0aW9uKHQsZSl7dmFyIG49ZXQoUCgpLFwiY2hlY2tib3hcIik7bi52YWx1ZT0xLG4uaWQ9JC5jaGVja2JveCxuLmNoZWNrZWQ9Qm9vbGVhbihlLmlucHV0VmFsdWUpO249dC5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtyZXR1cm4gVShuLGUuaW5wdXRQbGFjZWhvbGRlciksdH0sSXQudGV4dGFyZWE9ZnVuY3Rpb24oZSx0KXtlLnZhbHVlPXQuaW5wdXRWYWx1ZSxFdChlLHQpLFN0KGUsZSx0KTtmdW5jdGlvbiBuKHQpe3JldHVybiBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0KS5wYWRkaW5nTGVmdCkrcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodCkucGFkZGluZ1JpZ2h0KX12YXIgbztyZXR1cm5cIk11dGF0aW9uT2JzZXJ2ZXJcImluIHdpbmRvdyYmKG89cGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoQSgpKS53aWR0aCksbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oKXt2YXIgdD1lLm9mZnNldFdpZHRoK24oQSgpKStuKFAoKSk7QSgpLnN0eWxlLndpZHRoPW88dD9cIlwiLmNvbmNhdCh0LFwicHhcIik6bnVsbH0pLm9ic2VydmUoZSx7YXR0cmlidXRlczohMCxhdHRyaWJ1dGVGaWx0ZXI6W1wic3R5bGVcIl19KSksZX07ZnVuY3Rpb24gSHQodCxlKXt2YXIgbyxpLHIsbj1PKCk7XyhuLGUsXCJodG1sQ29udGFpbmVyXCIpLGUuaHRtbD8obXQoZS5odG1sLG4pLHJ0KG4sXCJibG9ja1wiKSk6ZS50ZXh0PyhuLnRleHRDb250ZW50PWUudGV4dCxydChuLFwiYmxvY2tcIikpOmF0KG4pLHQ9dCxvPWUsaT1QKCksdD1UdC5pbm5lclBhcmFtcy5nZXQodCkscj0hdHx8by5pbnB1dCE9PXQuaW5wdXQsTHQuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgZT0kW3RdLG49eXQoaSxlKTtEdCh0LG8uaW5wdXRBdHRyaWJ1dGVzKSxuLmNsYXNzTmFtZT1lLHImJmF0KG4pfSksby5pbnB1dCYmKHImJnF0KG8pLGp0KG8pKSxfKFAoKSxlLFwiY29udGVudFwiKX1mdW5jdGlvbiBWdCgpe3JldHVybiBrKCkmJmsoKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXF1ZXVlLXN0ZXBcIil9ZnVuY3Rpb24gUnQodCxvKXt2YXIgaT1uKCk7aWYoIW8ucHJvZ3Jlc3NTdGVwc3x8MD09PW8ucHJvZ3Jlc3NTdGVwcy5sZW5ndGgpcmV0dXJuIGF0KGkpLDA7cnQoaSksaS50ZXh0Q29udGVudD1cIlwiO3ZhciByPXBhcnNlSW50KHZvaWQgMD09PW8uY3VycmVudFByb2dyZXNzU3RlcD9WdCgpOm8uY3VycmVudFByb2dyZXNzU3RlcCk7cj49by5wcm9ncmVzc1N0ZXBzLmxlbmd0aCYmVyhcIkludmFsaWQgY3VycmVudFByb2dyZXNzU3RlcCBwYXJhbWV0ZXIsIGl0IHNob3VsZCBiZSBsZXNzIHRoYW4gcHJvZ3Jlc3NTdGVwcy5sZW5ndGggKGN1cnJlbnRQcm9ncmVzc1N0ZXAgbGlrZSBKUyBhcnJheXMgc3RhcnRzIGZyb20gMClcIiksby5wcm9ncmVzc1N0ZXBzLmZvckVhY2goZnVuY3Rpb24odCxlKXt2YXIgbix0PShuPXQsdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIiksdnQodCwkW1wicHJvZ3Jlc3Mtc3RlcFwiXSksVSh0LG4pLHQpO2kuYXBwZW5kQ2hpbGQodCksZT09PXImJnZ0KHQsJFtcImFjdGl2ZS1wcm9ncmVzcy1zdGVwXCJdKSxlIT09by5wcm9ncmVzc1N0ZXBzLmxlbmd0aC0xJiYodD1vLGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpLHZ0KGUsJFtcInByb2dyZXNzLXN0ZXAtbGluZVwiXSksdC5wcm9ncmVzc1N0ZXBzRGlzdGFuY2UmJihlLnN0eWxlLndpZHRoPXQucHJvZ3Jlc3NTdGVwc0Rpc3RhbmNlKSxpLmFwcGVuZENoaWxkKGUpKX0pfWZ1bmN0aW9uIE50KHQsZSl7dmFyIG4sbz1NKCk7XyhvLGUsXCJoZWFkZXJcIiksUnQoMCxlKSxuPXQsbz1lLHQ9VHQuaW5uZXJQYXJhbXMuZ2V0KG4pLG49eCgpLHQmJm8uaWNvbj09PXQuaWNvbj8oV3QobixvKSxfdChuLG8pKTpvLmljb258fG8uaWNvbkh0bWw/by5pY29uJiYtMT09PU9iamVjdC5rZXlzKFgpLmluZGV4T2Yoby5pY29uKT8oSygnVW5rbm93biBpY29uISBFeHBlY3RlZCBcInN1Y2Nlc3NcIiwgXCJlcnJvclwiLCBcIndhcm5pbmdcIiwgXCJpbmZvXCIgb3IgXCJxdWVzdGlvblwiLCBnb3QgXCInLmNvbmNhdChvLmljb24sJ1wiJykpLGF0KG4pKToocnQobiksV3QobixvKSxfdChuLG8pLHZ0KG4sby5zaG93Q2xhc3MuaWNvbikpOmF0KG4pLGZ1bmN0aW9uKHQpe3ZhciBlPUUoKTtpZighdC5pbWFnZVVybClyZXR1cm4gYXQoZSk7cnQoZSxcIlwiKSxlLnNldEF0dHJpYnV0ZShcInNyY1wiLHQuaW1hZ2VVcmwpLGUuc2V0QXR0cmlidXRlKFwiYWx0XCIsdC5pbWFnZUFsdCksaXQoZSxcIndpZHRoXCIsdC5pbWFnZVdpZHRoKSxpdChlLFwiaGVpZ2h0XCIsdC5pbWFnZUhlaWdodCksZS5jbGFzc05hbWU9JC5pbWFnZSxfKGUsdCxcImltYWdlXCIpfShlKSxvPWUsbj1CKCksdXQobixvLnRpdGxlfHxvLnRpdGxlVGV4dCxcImJsb2NrXCIpLG8udGl0bGUmJm10KG8udGl0bGUsbiksby50aXRsZVRleHQmJihuLmlubmVyVGV4dD1vLnRpdGxlVGV4dCksXyhuLG8sXCJ0aXRsZVwiKSxvPWUsZT1WKCksVShlLG8uY2xvc2VCdXR0b25IdG1sKSxfKGUsbyxcImNsb3NlQnV0dG9uXCIpLHV0KGUsby5zaG93Q2xvc2VCdXR0b24pLGUuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLG8uY2xvc2VCdXR0b25BcmlhTGFiZWwpfWZ1bmN0aW9uIFV0KHQsZSl7dmFyIG4sbyxpO2k9ZSxuPWsoKSxvPUEoKSxpLnRvYXN0PyhpdChuLFwid2lkdGhcIixpLndpZHRoKSxvLnN0eWxlLndpZHRoPVwiMTAwJVwiKTppdChvLFwid2lkdGhcIixpLndpZHRoKSxpdChvLFwicGFkZGluZ1wiLGkucGFkZGluZyksaS5iYWNrZ3JvdW5kJiYoby5zdHlsZS5iYWNrZ3JvdW5kPWkuYmFja2dyb3VuZCksYXQoUygpKSxRdChvLGkpLE90KDAsZSksTnQodCxlKSxIdCh0LGUpLGh0KDAsZSksaT1lLHQ9SSgpLHV0KHQsaS5mb290ZXIpLGkuZm9vdGVyJiZtdChpLmZvb3Rlcix0KSxfKHQsaSxcImZvb3RlclwiKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmRpZFJlbmRlcj9lLmRpZFJlbmRlcihBKCkpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGUub25SZW5kZXImJmUub25SZW5kZXIoQSgpKX1mdW5jdGlvbiBGdCgpe3JldHVybiBUKCkmJlQoKS5jbGljaygpfXZhciBfdD1mdW5jdGlvbih0LGUpe2Zvcih2YXIgbiBpbiBYKWUuaWNvbiE9PW4mJmJ0KHQsWFtuXSk7dnQodCxYW2UuaWNvbl0pLEt0KHQsZSksenQoKSxfKHQsZSxcImljb25cIil9LHp0PWZ1bmN0aW9uKCl7Zm9yKHZhciB0PUEoKSxlPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQpLmdldFByb3BlcnR5VmFsdWUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIpLG49dC5xdWVyeVNlbGVjdG9yQWxsKFwiW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdLCAuc3dhbDItc3VjY2Vzcy1maXhcIiksbz0wO288bi5sZW5ndGg7bysrKW5bb10uc3R5bGUuYmFja2dyb3VuZENvbG9yPWV9LFd0PWZ1bmN0aW9uKHQsZSl7dC50ZXh0Q29udGVudD1cIlwiLGUuaWNvbkh0bWw/VSh0LFl0KGUuaWNvbkh0bWwpKTpcInN1Y2Nlc3NcIj09PWUuaWNvbj9VKHQsJ1xcbiAgICAgIDxkaXYgY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtbGVmdFwiPjwvZGl2PlxcbiAgICAgIDxzcGFuIGNsYXNzPVwic3dhbDItc3VjY2Vzcy1saW5lLXRpcFwiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWxpbmUtbG9uZ1wiPjwvc3Bhbj5cXG4gICAgICA8ZGl2IGNsYXNzPVwic3dhbDItc3VjY2Vzcy1yaW5nXCI+PC9kaXY+IDxkaXYgY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWZpeFwiPjwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtcmlnaHRcIj48L2Rpdj5cXG4gICAgJyk6XCJlcnJvclwiPT09ZS5pY29uP1UodCwnXFxuICAgICAgPHNwYW4gY2xhc3M9XCJzd2FsMi14LW1hcmtcIj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3dhbDIteC1tYXJrLWxpbmUtbGVmdFwiPjwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3dhbDIteC1tYXJrLWxpbmUtcmlnaHRcIj48L3NwYW4+XFxuICAgICAgPC9zcGFuPlxcbiAgICAnKTpVKHQsWXQoe3F1ZXN0aW9uOlwiP1wiLHdhcm5pbmc6XCIhXCIsaW5mbzpcImlcIn1bZS5pY29uXSkpfSxLdD1mdW5jdGlvbih0LGUpe2lmKGUuaWNvbkNvbG9yKXt0LnN0eWxlLmNvbG9yPWUuaWNvbkNvbG9yLHQuc3R5bGUuYm9yZGVyQ29sb3I9ZS5pY29uQ29sb3I7Zm9yKHZhciBuPTAsbz1bXCIuc3dhbDItc3VjY2Vzcy1saW5lLXRpcFwiLFwiLnN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nXCIsXCIuc3dhbDIteC1tYXJrLWxpbmUtbGVmdFwiLFwiLnN3YWwyLXgtbWFyay1saW5lLXJpZ2h0XCJdO248by5sZW5ndGg7bisrKXN0KHQsb1tuXSxcImJhY2tncm91bmRDb2xvclwiLGUuaWNvbkNvbG9yKTtzdCh0LFwiLnN3YWwyLXN1Y2Nlc3MtcmluZ1wiLFwiYm9yZGVyQ29sb3JcIixlLmljb25Db2xvcil9fSxZdD1mdW5jdGlvbih0KXtyZXR1cm4nPGRpdiBjbGFzcz1cIicuY29uY2F0KCRbXCJpY29uLWNvbnRlbnRcIl0sJ1wiPicpLmNvbmNhdCh0LFwiPC9kaXY+XCIpfSxadD1bXSxRdD1mdW5jdGlvbih0LGUpe3QuY2xhc3NOYW1lPVwiXCIuY29uY2F0KCQucG9wdXAsXCIgXCIpLmNvbmNhdCh3dCh0KT9lLnNob3dDbGFzcy5wb3B1cDpcIlwiKSxlLnRvYXN0Pyh2dChbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LGRvY3VtZW50LmJvZHldLCRbXCJ0b2FzdC1zaG93blwiXSksdnQodCwkLnRvYXN0KSk6dnQodCwkLm1vZGFsKSxfKHQsZSxcInBvcHVwXCIpLFwic3RyaW5nXCI9PXR5cGVvZiBlLmN1c3RvbUNsYXNzJiZ2dCh0LGUuY3VzdG9tQ2xhc3MpLGUuaWNvbiYmdnQodCwkW1wiaWNvbi1cIi5jb25jYXQoZS5pY29uKV0pfTtmdW5jdGlvbiBKdCh0KXsoZT1BKCkpfHxNbi5maXJlKCk7dmFyIGU9QSgpLG49aigpLG89cSgpOyF0JiZ3dChUKCkpJiYodD1UKCkpLHJ0KG4pLHQmJihhdCh0KSxvLnNldEF0dHJpYnV0ZShcImRhdGEtYnV0dG9uLXRvLXJlcGxhY2VcIix0LmNsYXNzTmFtZSkpLG8ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobyx0KSx2dChbZSxuXSwkLmxvYWRpbmcpLHJ0KG8pLGUuc2V0QXR0cmlidXRlKFwiZGF0YS1sb2FkaW5nXCIsITApLGUuc2V0QXR0cmlidXRlKFwiYXJpYS1idXN5XCIsITApLGUuZm9jdXMoKX1mdW5jdGlvbiAkdChvKXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24odCl7aWYoIW8pcmV0dXJuIHQoKTt2YXIgZT13aW5kb3cuc2Nyb2xsWCxuPXdpbmRvdy5zY3JvbGxZO3RlLnJlc3RvcmVGb2N1c1RpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe3RlLnByZXZpb3VzQWN0aXZlRWxlbWVudCYmdGUucHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzPyh0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQuZm9jdXMoKSx0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQ9bnVsbCk6ZG9jdW1lbnQuYm9keSYmZG9jdW1lbnQuYm9keS5mb2N1cygpLHQoKX0sMTAwKSx2b2lkIDAhPT1lJiZ2b2lkIDAhPT1uJiZ3aW5kb3cuc2Nyb2xsVG8oZSxuKX0pfWZ1bmN0aW9uIFh0KCl7aWYodGUudGltZW91dClyZXR1cm4gZnVuY3Rpb24oKXt2YXIgdD1IKCksZT1wYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0KS53aWR0aCk7dC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb25cIiksdC5zdHlsZS53aWR0aD1cIjEwMCVcIjt2YXIgbj1wYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0KS53aWR0aCksbj1wYXJzZUludChlL24qMTAwKTt0LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvblwiKSx0LnN0eWxlLndpZHRoPVwiXCIuY29uY2F0KG4sXCIlXCIpfSgpLHRlLnRpbWVvdXQuc3RvcCgpfWZ1bmN0aW9uIEd0KCl7aWYodGUudGltZW91dCl7dmFyIHQ9dGUudGltZW91dC5zdGFydCgpO3JldHVybiBkdCh0KSx0fX12YXIgdGU9e30sZWU9ITEsbmU9e307ZnVuY3Rpb24gb2UodCl7Zm9yKHZhciBlPXQudGFyZ2V0O2UmJmUhPT1kb2N1bWVudDtlPWUucGFyZW50Tm9kZSlmb3IodmFyIG4gaW4gbmUpe3ZhciBvPWUuZ2V0QXR0cmlidXRlKG4pO2lmKG8pcmV0dXJuIHZvaWQgbmVbbl0uZmlyZSh7dGVtcGxhdGU6b30pfX1mdW5jdGlvbiBpZSh0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNlLHQpfWZ1bmN0aW9uIHJlKHQpe3JldHVybiBjZVt0XX1mdW5jdGlvbiBhZSh0KXtmb3IodmFyIGUgaW4gdClpZShuPWUpfHxXKCdVbmtub3duIHBhcmFtZXRlciBcIicuY29uY2F0KG4sJ1wiJykpLHQudG9hc3QmJihuPWUsLTEhPT1sZS5pbmRleE9mKG4pJiZXKCdUaGUgcGFyYW1ldGVyIFwiJy5jb25jYXQobiwnXCIgaXMgaW5jb21wYXRpYmxlIHdpdGggdG9hc3RzJykpKSxyZShlPWUpJiZ2KGUscmUoZSkpO3ZhciBufXZhciBzZT17dGl0bGU6XCJcIix0aXRsZVRleHQ6XCJcIix0ZXh0OlwiXCIsaHRtbDpcIlwiLGZvb3RlcjpcIlwiLGljb246dm9pZCAwLGljb25Db2xvcjp2b2lkIDAsaWNvbkh0bWw6dm9pZCAwLHRlbXBsYXRlOnZvaWQgMCx0b2FzdDohMSxhbmltYXRpb246ITAsc2hvd0NsYXNzOntwb3B1cDpcInN3YWwyLXNob3dcIixiYWNrZHJvcDpcInN3YWwyLWJhY2tkcm9wLXNob3dcIixpY29uOlwic3dhbDItaWNvbi1zaG93XCJ9LGhpZGVDbGFzczp7cG9wdXA6XCJzd2FsMi1oaWRlXCIsYmFja2Ryb3A6XCJzd2FsMi1iYWNrZHJvcC1oaWRlXCIsaWNvbjpcInN3YWwyLWljb24taGlkZVwifSxjdXN0b21DbGFzczp7fSx0YXJnZXQ6XCJib2R5XCIsYmFja2Ryb3A6ITAsaGVpZ2h0QXV0bzohMCxhbGxvd091dHNpZGVDbGljazohMCxhbGxvd0VzY2FwZUtleTohMCxhbGxvd0VudGVyS2V5OiEwLHN0b3BLZXlkb3duUHJvcGFnYXRpb246ITAsa2V5ZG93bkxpc3RlbmVyQ2FwdHVyZTohMSxzaG93Q29uZmlybUJ1dHRvbjohMCxzaG93RGVueUJ1dHRvbjohMSxzaG93Q2FuY2VsQnV0dG9uOiExLHByZUNvbmZpcm06dm9pZCAwLHByZURlbnk6dm9pZCAwLGNvbmZpcm1CdXR0b25UZXh0OlwiT0tcIixjb25maXJtQnV0dG9uQXJpYUxhYmVsOlwiXCIsY29uZmlybUJ1dHRvbkNvbG9yOnZvaWQgMCxkZW55QnV0dG9uVGV4dDpcIk5vXCIsZGVueUJ1dHRvbkFyaWFMYWJlbDpcIlwiLGRlbnlCdXR0b25Db2xvcjp2b2lkIDAsY2FuY2VsQnV0dG9uVGV4dDpcIkNhbmNlbFwiLGNhbmNlbEJ1dHRvbkFyaWFMYWJlbDpcIlwiLGNhbmNlbEJ1dHRvbkNvbG9yOnZvaWQgMCxidXR0b25zU3R5bGluZzohMCxyZXZlcnNlQnV0dG9uczohMSxmb2N1c0NvbmZpcm06ITAsZm9jdXNEZW55OiExLGZvY3VzQ2FuY2VsOiExLHJldHVybkZvY3VzOiEwLHNob3dDbG9zZUJ1dHRvbjohMSxjbG9zZUJ1dHRvbkh0bWw6XCImdGltZXM7XCIsY2xvc2VCdXR0b25BcmlhTGFiZWw6XCJDbG9zZSB0aGlzIGRpYWxvZ1wiLGxvYWRlckh0bWw6XCJcIixzaG93TG9hZGVyT25Db25maXJtOiExLHNob3dMb2FkZXJPbkRlbnk6ITEsaW1hZ2VVcmw6dm9pZCAwLGltYWdlV2lkdGg6dm9pZCAwLGltYWdlSGVpZ2h0OnZvaWQgMCxpbWFnZUFsdDpcIlwiLHRpbWVyOnZvaWQgMCx0aW1lclByb2dyZXNzQmFyOiExLHdpZHRoOnZvaWQgMCxwYWRkaW5nOnZvaWQgMCxiYWNrZ3JvdW5kOnZvaWQgMCxpbnB1dDp2b2lkIDAsaW5wdXRQbGFjZWhvbGRlcjpcIlwiLGlucHV0TGFiZWw6XCJcIixpbnB1dFZhbHVlOlwiXCIsaW5wdXRPcHRpb25zOnt9LGlucHV0QXV0b1RyaW06ITAsaW5wdXRBdHRyaWJ1dGVzOnt9LGlucHV0VmFsaWRhdG9yOnZvaWQgMCxyZXR1cm5JbnB1dFZhbHVlT25EZW55OiExLHZhbGlkYXRpb25NZXNzYWdlOnZvaWQgMCxncm93OiExLHBvc2l0aW9uOlwiY2VudGVyXCIscHJvZ3Jlc3NTdGVwczpbXSxjdXJyZW50UHJvZ3Jlc3NTdGVwOnZvaWQgMCxwcm9ncmVzc1N0ZXBzRGlzdGFuY2U6dm9pZCAwLG9uQmVmb3JlT3Blbjp2b2lkIDAsb25PcGVuOnZvaWQgMCx3aWxsT3Blbjp2b2lkIDAsZGlkT3Blbjp2b2lkIDAsb25SZW5kZXI6dm9pZCAwLGRpZFJlbmRlcjp2b2lkIDAsb25DbG9zZTp2b2lkIDAsb25BZnRlckNsb3NlOnZvaWQgMCx3aWxsQ2xvc2U6dm9pZCAwLGRpZENsb3NlOnZvaWQgMCxvbkRlc3Ryb3k6dm9pZCAwLGRpZERlc3Ryb3k6dm9pZCAwLHNjcm9sbGJhclBhZGRpbmc6ITB9LHVlPVtcImFsbG93RXNjYXBlS2V5XCIsXCJhbGxvd091dHNpZGVDbGlja1wiLFwiYmFja2dyb3VuZFwiLFwiYnV0dG9uc1N0eWxpbmdcIixcImNhbmNlbEJ1dHRvbkFyaWFMYWJlbFwiLFwiY2FuY2VsQnV0dG9uQ29sb3JcIixcImNhbmNlbEJ1dHRvblRleHRcIixcImNsb3NlQnV0dG9uQXJpYUxhYmVsXCIsXCJjbG9zZUJ1dHRvbkh0bWxcIixcImNvbmZpcm1CdXR0b25BcmlhTGFiZWxcIixcImNvbmZpcm1CdXR0b25Db2xvclwiLFwiY29uZmlybUJ1dHRvblRleHRcIixcImN1cnJlbnRQcm9ncmVzc1N0ZXBcIixcImN1c3RvbUNsYXNzXCIsXCJkZW55QnV0dG9uQXJpYUxhYmVsXCIsXCJkZW55QnV0dG9uQ29sb3JcIixcImRlbnlCdXR0b25UZXh0XCIsXCJkaWRDbG9zZVwiLFwiZGlkRGVzdHJveVwiLFwiZm9vdGVyXCIsXCJoaWRlQ2xhc3NcIixcImh0bWxcIixcImljb25cIixcImljb25Db2xvclwiLFwiaWNvbkh0bWxcIixcImltYWdlQWx0XCIsXCJpbWFnZUhlaWdodFwiLFwiaW1hZ2VVcmxcIixcImltYWdlV2lkdGhcIixcIm9uQWZ0ZXJDbG9zZVwiLFwib25DbG9zZVwiLFwib25EZXN0cm95XCIsXCJwcm9ncmVzc1N0ZXBzXCIsXCJyZXR1cm5Gb2N1c1wiLFwicmV2ZXJzZUJ1dHRvbnNcIixcInNob3dDYW5jZWxCdXR0b25cIixcInNob3dDbG9zZUJ1dHRvblwiLFwic2hvd0NvbmZpcm1CdXR0b25cIixcInNob3dEZW55QnV0dG9uXCIsXCJ0ZXh0XCIsXCJ0aXRsZVwiLFwidGl0bGVUZXh0XCIsXCJ3aWxsQ2xvc2VcIl0sY2U9e2FuaW1hdGlvbjonc2hvd0NsYXNzXCIgYW5kIFwiaGlkZUNsYXNzJyxvbkJlZm9yZU9wZW46XCJ3aWxsT3BlblwiLG9uT3BlbjpcImRpZE9wZW5cIixvblJlbmRlcjpcImRpZFJlbmRlclwiLG9uQ2xvc2U6XCJ3aWxsQ2xvc2VcIixvbkFmdGVyQ2xvc2U6XCJkaWRDbG9zZVwiLG9uRGVzdHJveTpcImRpZERlc3Ryb3lcIn0sbGU9W1wiYWxsb3dPdXRzaWRlQ2xpY2tcIixcImFsbG93RW50ZXJLZXlcIixcImJhY2tkcm9wXCIsXCJmb2N1c0NvbmZpcm1cIixcImZvY3VzRGVueVwiLFwiZm9jdXNDYW5jZWxcIixcInJldHVybkZvY3VzXCIsXCJoZWlnaHRBdXRvXCIsXCJrZXlkb3duTGlzdGVuZXJDYXB0dXJlXCJdLGRlPU9iamVjdC5mcmVlemUoe2lzVmFsaWRQYXJhbWV0ZXI6aWUsaXNVcGRhdGFibGVQYXJhbWV0ZXI6ZnVuY3Rpb24odCl7cmV0dXJuLTEhPT11ZS5pbmRleE9mKHQpfSxpc0RlcHJlY2F0ZWRQYXJhbWV0ZXI6cmUsYXJnc1RvUGFyYW1zOmZ1bmN0aW9uKG4pe3ZhciBvPXt9O3JldHVyblwib2JqZWN0XCIhPT1yKG5bMF0pfHxDKG5bMF0pP1tcInRpdGxlXCIsXCJodG1sXCIsXCJpY29uXCJdLmZvckVhY2goZnVuY3Rpb24odCxlKXtlPW5bZV07XCJzdHJpbmdcIj09dHlwZW9mIGV8fEMoZSk/b1t0XT1lOnZvaWQgMCE9PWUmJksoXCJVbmV4cGVjdGVkIHR5cGUgb2YgXCIuY29uY2F0KHQsJyEgRXhwZWN0ZWQgXCJzdHJpbmdcIiBvciBcIkVsZW1lbnRcIiwgZ290ICcpLmNvbmNhdChyKGUpKSl9KTp1KG8sblswXSksb30saXNWaXNpYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIHd0KEEoKSl9LGNsaWNrQ29uZmlybTpGdCxjbGlja0Rlbnk6ZnVuY3Rpb24oKXtyZXR1cm4gTCgpJiZMKCkuY2xpY2soKX0sY2xpY2tDYW5jZWw6ZnVuY3Rpb24oKXtyZXR1cm4gRCgpJiZEKCkuY2xpY2soKX0sZ2V0Q29udGFpbmVyOmssZ2V0UG9wdXA6QSxnZXRUaXRsZTpCLGdldENvbnRlbnQ6UCxnZXRIdG1sQ29udGFpbmVyOk8sZ2V0SW1hZ2U6RSxnZXRJY29uOngsZ2V0SW5wdXRMYWJlbDpmdW5jdGlvbigpe3JldHVybiB0KCRbXCJpbnB1dC1sYWJlbFwiXSl9LGdldENsb3NlQnV0dG9uOlYsZ2V0QWN0aW9uczpqLGdldENvbmZpcm1CdXR0b246VCxnZXREZW55QnV0dG9uOkwsZ2V0Q2FuY2VsQnV0dG9uOkQsZ2V0TG9hZGVyOnEsZ2V0SGVhZGVyOk0sZ2V0Rm9vdGVyOkksZ2V0VGltZXJQcm9ncmVzc0JhcjpILGdldEZvY3VzYWJsZUVsZW1lbnRzOlIsZ2V0VmFsaWRhdGlvbk1lc3NhZ2U6Uyxpc0xvYWRpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gQSgpLmhhc0F0dHJpYnV0ZShcImRhdGEtbG9hZGluZ1wiKX0sZmlyZTpmdW5jdGlvbigpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLGU9bmV3IEFycmF5KHQpLG49MDtuPHQ7bisrKWVbbl09YXJndW1lbnRzW25dO3JldHVybiBpKHRoaXMsZSl9LG1peGluOmZ1bmN0aW9uKHIpe3JldHVybiBmdW5jdGlvbih0KXshZnVuY3Rpb24odCxlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiZudWxsIT09ZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7dC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShlJiZlLnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOnQsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLGUmJmwodCxlKX0oaSx0KTt2YXIgbixvLGU9KG49aSxvPWQoKSxmdW5jdGlvbigpe3ZhciB0LGU9YyhuKTtyZXR1cm4gcCh0aGlzLG8/KHQ9Yyh0aGlzKS5jb25zdHJ1Y3RvcixSZWZsZWN0LmNvbnN0cnVjdChlLGFyZ3VtZW50cyx0KSk6ZS5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSk7ZnVuY3Rpb24gaSgpe3JldHVybiBhKHRoaXMsaSksZS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9cmV0dXJuIHMoaSxbe2tleTpcIl9tYWluXCIsdmFsdWU6ZnVuY3Rpb24odCxlKXtyZXR1cm4gZihjKGkucHJvdG90eXBlKSxcIl9tYWluXCIsdGhpcykuY2FsbCh0aGlzLHQsdSh7fSxyLGUpKX19XSksaX0odGhpcyl9LHF1ZXVlOmZ1bmN0aW9uKHQpe3YoXCJTd2FsLnF1ZXVlKClcIixcImFzeW5jL2F3YWl0XCIpO3ZhciByPXRoaXM7WnQ9dDtmdW5jdGlvbiBhKHQsZSl7WnQ9W10sdChlKX12YXIgcz1bXTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oaSl7IWZ1bmN0aW9uIGUobixvKXtuPFp0Lmxlbmd0aD8oZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN3YWwyLXF1ZXVlLXN0ZXBcIixuKSxyLmZpcmUoWnRbbl0pLnRoZW4oZnVuY3Rpb24odCl7dm9pZCAwIT09dC52YWx1ZT8ocy5wdXNoKHQudmFsdWUpLGUobisxLG8pKTphKGkse2Rpc21pc3M6dC5kaXNtaXNzfSl9KSk6YShpLHt2YWx1ZTpzfSl9KDApfSl9LGdldFF1ZXVlU3RlcDpWdCxpbnNlcnRRdWV1ZVN0ZXA6ZnVuY3Rpb24odCxlKXtyZXR1cm4gZSYmZTxadC5sZW5ndGg/WnQuc3BsaWNlKGUsMCx0KTpadC5wdXNoKHQpfSxkZWxldGVRdWV1ZVN0ZXA6ZnVuY3Rpb24odCl7dm9pZCAwIT09WnRbdF0mJlp0LnNwbGljZSh0LDEpfSxzaG93TG9hZGluZzpKdCxlbmFibGVMb2FkaW5nOkp0LGdldFRpbWVyTGVmdDpmdW5jdGlvbigpe3JldHVybiB0ZS50aW1lb3V0JiZ0ZS50aW1lb3V0LmdldFRpbWVyTGVmdCgpfSxzdG9wVGltZXI6WHQscmVzdW1lVGltZXI6R3QsdG9nZ2xlVGltZXI6ZnVuY3Rpb24oKXt2YXIgdD10ZS50aW1lb3V0O3JldHVybiB0JiYodC5ydW5uaW5nP1h0Okd0KSgpfSxpbmNyZWFzZVRpbWVyOmZ1bmN0aW9uKHQpe2lmKHRlLnRpbWVvdXQpe3Q9dGUudGltZW91dC5pbmNyZWFzZSh0KTtyZXR1cm4gZHQodCwhMCksdH19LGlzVGltZXJSdW5uaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHRlLnRpbWVvdXQmJnRlLnRpbWVvdXQuaXNSdW5uaW5nKCl9LGJpbmRDbGlja0hhbmRsZXI6ZnVuY3Rpb24oKXtuZVswPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06XCJkYXRhLXN3YWwtdGVtcGxhdGVcIl09dGhpcyxlZXx8KGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsb2UpLGVlPSEwKX19KTtmdW5jdGlvbiBwZSgpe3ZhciB0LGU7VHQuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpJiYodD1UdC5kb21DYWNoZS5nZXQodGhpcyksYXQodC5sb2FkZXIpLChlPXQucG9wdXAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0LmxvYWRlci5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJ1dHRvbi10by1yZXBsYWNlXCIpKSkubGVuZ3RoP3J0KGVbMF0sXCJpbmxpbmUtYmxvY2tcIik6d3QoVCgpKXx8d3QoTCgpKXx8d3QoRCgpKXx8YXQodC5hY3Rpb25zKSxidChbdC5wb3B1cCx0LmFjdGlvbnNdLCQubG9hZGluZyksdC5wb3B1cC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWJ1c3lcIiksdC5wb3B1cC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWxvYWRpbmdcIiksdC5jb25maXJtQnV0dG9uLmRpc2FibGVkPSExLHQuZGVueUJ1dHRvbi5kaXNhYmxlZD0hMSx0LmNhbmNlbEJ1dHRvbi5kaXNhYmxlZD0hMSl9ZnVuY3Rpb24gZmUoKXtudWxsPT09dHQucHJldmlvdXNCb2R5UGFkZGluZyYmZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQ+d2luZG93LmlubmVySGVpZ2h0JiYodHQucHJldmlvdXNCb2R5UGFkZGluZz1wYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKFwicGFkZGluZy1yaWdodFwiKSksZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQ9XCJcIi5jb25jYXQodHQucHJldmlvdXNCb2R5UGFkZGluZytmdW5jdGlvbigpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dC5jbGFzc05hbWU9JFtcInNjcm9sbGJhci1tZWFzdXJlXCJdLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodCk7dmFyIGU9dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aC10LmNsaWVudFdpZHRoO3JldHVybiBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHQpLGV9KCksXCJweFwiKSl9ZnVuY3Rpb24gbWUoKXtyZXR1cm4hIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCYmISFkb2N1bWVudC5kb2N1bWVudE1vZGV9ZnVuY3Rpb24gaGUoKXt2YXIgdD1rKCksZT1BKCk7dC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImFsaWduLWl0ZW1zXCIpLGUub2Zmc2V0VG9wPDAmJih0LnN0eWxlLmFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCIpfXZhciBnZT1mdW5jdGlvbigpe25hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhDcmlPU3xGeGlPU3xFZGdpT1N8WWFCcm93c2VyfFVDQnJvd3NlcikvaSl8fEEoKS5zY3JvbGxIZWlnaHQ+d2luZG93LmlubmVySGVpZ2h0LTQ0JiYoaygpLnN0eWxlLnBhZGRpbmdCb3R0b209XCJcIi5jb25jYXQoNDQsXCJweFwiKSl9LHZlPWZ1bmN0aW9uKCl7dmFyIGUsdD1rKCk7dC5vbnRvdWNoc3RhcnQ9ZnVuY3Rpb24odCl7ZT1iZSh0KX0sdC5vbnRvdWNobW92ZT1mdW5jdGlvbih0KXtlJiYodC5wcmV2ZW50RGVmYXVsdCgpLHQuc3RvcFByb3BhZ2F0aW9uKCkpfX0sYmU9ZnVuY3Rpb24odCl7dmFyIGU9dC50YXJnZXQsbj1rKCk7cmV0dXJuIXllKHQpJiYhd2UodCkmJihlPT09bnx8IShjdChuKXx8XCJJTlBVVFwiPT09ZS50YWdOYW1lfHxjdChQKCkpJiZQKCkuY29udGFpbnMoZSkpKX0seWU9ZnVuY3Rpb24odCl7cmV0dXJuIHQudG91Y2hlcyYmdC50b3VjaGVzLmxlbmd0aCYmXCJzdHlsdXNcIj09PXQudG91Y2hlc1swXS50b3VjaFR5cGV9LHdlPWZ1bmN0aW9uKHQpe3JldHVybiB0LnRvdWNoZXMmJjE8dC50b3VjaGVzLmxlbmd0aH0sQ2U9e3N3YWxQcm9taXNlUmVzb2x2ZTpuZXcgV2Vha01hcH07ZnVuY3Rpb24ga2UodCxlLG4sbyl7RygpP0VlKHQsbyk6KCR0KG4pLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gRWUodCxvKX0pLHRlLmtleWRvd25UYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIix0ZS5rZXlkb3duSGFuZGxlcix7Y2FwdHVyZTp0ZS5rZXlkb3duTGlzdGVuZXJDYXB0dXJlfSksdGUua2V5ZG93bkhhbmRsZXJBZGRlZD0hMSksZS5wYXJlbnROb2RlJiYhZG9jdW1lbnQuYm9keS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN3YWwyLXF1ZXVlLXN0ZXBcIikmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKSxOKCkmJihudWxsIT09dHQucHJldmlvdXNCb2R5UGFkZGluZyYmKGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0PVwiXCIuY29uY2F0KHR0LnByZXZpb3VzQm9keVBhZGRpbmcsXCJweFwiKSx0dC5wcmV2aW91c0JvZHlQYWRkaW5nPW51bGwpLEYoZG9jdW1lbnQuYm9keSwkLmlvc2ZpeCkmJihlPXBhcnNlSW50KGRvY3VtZW50LmJvZHkuc3R5bGUudG9wLDEwKSxidChkb2N1bWVudC5ib2R5LCQuaW9zZml4KSxkb2N1bWVudC5ib2R5LnN0eWxlLnRvcD1cIlwiLGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wPS0xKmUpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJm1lKCkmJndpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsaGUpLGcoZG9jdW1lbnQuYm9keS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbih0KXt0Lmhhc0F0dHJpYnV0ZShcImRhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW5cIik/KHQuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIix0LmdldEF0dHJpYnV0ZShcImRhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW5cIikpLHQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlblwiKSk6dC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKX0pKSxidChbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LGRvY3VtZW50LmJvZHldLFskLnNob3duLCRbXCJoZWlnaHQtYXV0b1wiXSwkW1wibm8tYmFja2Ryb3BcIl0sJFtcInRvYXN0LXNob3duXCJdXSl9ZnVuY3Rpb24gQWUodCl7dmFyIGUsbixvLGk9QSgpO2kmJih0PXhlKHQpLChlPVR0LmlubmVyUGFyYW1zLmdldCh0aGlzKSkmJiFGKGksZS5oaWRlQ2xhc3MucG9wdXApJiYobj1DZS5zd2FsUHJvbWlzZVJlc29sdmUuZ2V0KHRoaXMpLGJ0KGksZS5zaG93Q2xhc3MucG9wdXApLHZ0KGksZS5oaWRlQ2xhc3MucG9wdXApLG89aygpLGJ0KG8sZS5zaG93Q2xhc3MuYmFja2Ryb3ApLHZ0KG8sZS5oaWRlQ2xhc3MuYmFja2Ryb3ApLEJlKHRoaXMsaSxlKSxuKHQpKSl9ZnVuY3Rpb24geGUodCl7cmV0dXJuIHZvaWQgMD09PXQ/e2lzQ29uZmlybWVkOiExLGlzRGVuaWVkOiExLGlzRGlzbWlzc2VkOiEwfTp1KHtpc0NvbmZpcm1lZDohMSxpc0RlbmllZDohMSxpc0Rpc21pc3NlZDohMX0sdCl9ZnVuY3Rpb24gQmUodCxlLG4pe3ZhciBvPWsoKSxpPUJ0JiZsdChlKSxyPW4ub25DbG9zZSxhPW4ub25BZnRlckNsb3NlLHM9bi53aWxsQ2xvc2UsdT1uLmRpZENsb3NlO1BlKGUscyxyKSxpP09lKHQsZSxvLG4ucmV0dXJuRm9jdXMsdXx8YSk6a2UodCxvLG4ucmV0dXJuRm9jdXMsdXx8YSl9dmFyIFBlPWZ1bmN0aW9uKHQsZSxuKXtudWxsIT09ZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgZT9lKHQpOm51bGwhPT1uJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiZuKHQpfSxPZT1mdW5jdGlvbih0LGUsbixvLGkpe3RlLnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjaz1rZS5iaW5kKG51bGwsdCxuLG8saSksZS5hZGRFdmVudExpc3RlbmVyKEJ0LGZ1bmN0aW9uKHQpe3QudGFyZ2V0PT09ZSYmKHRlLnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjaygpLGRlbGV0ZSB0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2spfSl9LEVlPWZ1bmN0aW9uKHQsZSl7c2V0VGltZW91dChmdW5jdGlvbigpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSx0Ll9kZXN0cm95KCl9KX07ZnVuY3Rpb24gU2UodCxlLG4pe3ZhciBvPVR0LmRvbUNhY2hlLmdldCh0KTtlLmZvckVhY2goZnVuY3Rpb24odCl7b1t0XS5kaXNhYmxlZD1ufSl9ZnVuY3Rpb24gVGUodCxlKXtpZighdClyZXR1cm4hMTtpZihcInJhZGlvXCI9PT10LnR5cGUpZm9yKHZhciBuPXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKSxvPTA7bzxuLmxlbmd0aDtvKyspbltvXS5kaXNhYmxlZD1lO2Vsc2UgdC5kaXNhYmxlZD1lfXZhciBMZT1mdW5jdGlvbigpe2Z1bmN0aW9uIG4odCxlKXthKHRoaXMsbiksdGhpcy5jYWxsYmFjaz10LHRoaXMucmVtYWluaW5nPWUsdGhpcy5ydW5uaW5nPSExLHRoaXMuc3RhcnQoKX1yZXR1cm4gcyhuLFt7a2V5Olwic3RhcnRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnJ1bm5pbmd8fCh0aGlzLnJ1bm5pbmc9ITAsdGhpcy5zdGFydGVkPW5ldyBEYXRlLHRoaXMuaWQ9c2V0VGltZW91dCh0aGlzLmNhbGxiYWNrLHRoaXMucmVtYWluaW5nKSksdGhpcy5yZW1haW5pbmd9fSx7a2V5Olwic3RvcFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucnVubmluZyYmKHRoaXMucnVubmluZz0hMSxjbGVhclRpbWVvdXQodGhpcy5pZCksdGhpcy5yZW1haW5pbmctPW5ldyBEYXRlLXRoaXMuc3RhcnRlZCksdGhpcy5yZW1haW5pbmd9fSx7a2V5OlwiaW5jcmVhc2VcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLnJ1bm5pbmc7cmV0dXJuIGUmJnRoaXMuc3RvcCgpLHRoaXMucmVtYWluaW5nKz10LGUmJnRoaXMuc3RhcnQoKSx0aGlzLnJlbWFpbmluZ319LHtrZXk6XCJnZXRUaW1lckxlZnRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnJ1bm5pbmcmJih0aGlzLnN0b3AoKSx0aGlzLnN0YXJ0KCkpLHRoaXMucmVtYWluaW5nfX0se2tleTpcImlzUnVubmluZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucnVubmluZ319XSksbn0oKSxxZT17ZW1haWw6ZnVuY3Rpb24odCxlKXtyZXR1cm4vXlthLXpBLVowLTkuK18tXStAW2EtekEtWjAtOS4tXStcXC5bYS16QS1aMC05LV17MiwyNH0kLy50ZXN0KHQpP1Byb21pc2UucmVzb2x2ZSgpOlByb21pc2UucmVzb2x2ZShlfHxcIkludmFsaWQgZW1haWwgYWRkcmVzc1wiKX0sdXJsOmZ1bmN0aW9uKHQsZSl7cmV0dXJuL15odHRwcz86XFwvXFwvKHd3d1xcLik/Wy1hLXpBLVowLTlAOiUuXyt+Iz1dezEsMjU2fVxcLlthLXpdezIsNjN9XFxiKFstYS16QS1aMC05QDolXysufiM/Ji89XSopJC8udGVzdCh0KT9Qcm9taXNlLnJlc29sdmUoKTpQcm9taXNlLnJlc29sdmUoZXx8XCJJbnZhbGlkIFVSTFwiKX19O2Z1bmN0aW9uIERlKHQpe3ZhciBlLG47KGU9dCkuaW5wdXRWYWxpZGF0b3J8fE9iamVjdC5rZXlzKHFlKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2UuaW5wdXQ9PT10JiYoZS5pbnB1dFZhbGlkYXRvcj1xZVt0XSl9KSx0LnNob3dMb2FkZXJPbkNvbmZpcm0mJiF0LnByZUNvbmZpcm0mJlcoXCJzaG93TG9hZGVyT25Db25maXJtIGlzIHNldCB0byB0cnVlLCBidXQgcHJlQ29uZmlybSBpcyBub3QgZGVmaW5lZC5cXG5zaG93TG9hZGVyT25Db25maXJtIHNob3VsZCBiZSB1c2VkIHRvZ2V0aGVyIHdpdGggcHJlQ29uZmlybSwgc2VlIHVzYWdlIGV4YW1wbGU6XFxuaHR0cHM6Ly9zd2VldGFsZXJ0Mi5naXRodWIuaW8vI2FqYXgtcmVxdWVzdFwiKSx0LmFuaW1hdGlvbj1aKHQuYW5pbWF0aW9uKSwobj10KS50YXJnZXQmJihcInN0cmluZ1wiIT10eXBlb2Ygbi50YXJnZXR8fGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iobi50YXJnZXQpKSYmKFwic3RyaW5nXCI9PXR5cGVvZiBuLnRhcmdldHx8bi50YXJnZXQuYXBwZW5kQ2hpbGQpfHwoVygnVGFyZ2V0IHBhcmFtZXRlciBpcyBub3QgdmFsaWQsIGRlZmF1bHRpbmcgdG8gXCJib2R5XCInKSxuLnRhcmdldD1cImJvZHlcIiksXCJzdHJpbmdcIj09dHlwZW9mIHQudGl0bGUmJih0LnRpdGxlPXQudGl0bGUuc3BsaXQoXCJcXG5cIikuam9pbihcIjxiciAvPlwiKSksa3QodCl9ZnVuY3Rpb24gamUodCl7dmFyIGU9aygpLG49QSgpO1wiZnVuY3Rpb25cIj09dHlwZW9mIHQud2lsbE9wZW4/dC53aWxsT3BlbihuKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0Lm9uQmVmb3JlT3BlbiYmdC5vbkJlZm9yZU9wZW4obik7dmFyIG89d2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkub3ZlcmZsb3dZO0plKGUsbix0KSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7WmUoZSxuKX0sMTApLE4oKSYmKFFlKGUsdC5zY3JvbGxiYXJQYWRkaW5nLG8pLGcoZG9jdW1lbnQuYm9keS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbih0KXt0PT09aygpfHxmdW5jdGlvbih0LGUpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHQuY29udGFpbnMpcmV0dXJuIHQuY29udGFpbnMoZSl9KHQsaygpKXx8KHQuaGFzQXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIikmJnQuc2V0QXR0cmlidXRlKFwiZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlblwiLHQuZ2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIikpLHQuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIikpfSkpLEcoKXx8dGUucHJldmlvdXNBY3RpdmVFbGVtZW50fHwodGUucHJldmlvdXNBY3RpdmVFbGVtZW50PWRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLFllKG4sdCksYnQoZSwkW1wibm8tdHJhbnNpdGlvblwiXSl9ZnVuY3Rpb24gTWUodCl7dmFyIGU9QSgpO3QudGFyZ2V0PT09ZSYmKHQ9aygpLGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihCdCxNZSksdC5zdHlsZS5vdmVyZmxvd1k9XCJhdXRvXCIpfWZ1bmN0aW9uIEllKHQsZSl7dC5jbG9zZVBvcHVwKHtpc0NvbmZpcm1lZDohMCx2YWx1ZTplfSl9ZnVuY3Rpb24gSGUodCxlLG4pe3ZhciBvPVIoKTtpZihvLmxlbmd0aClyZXR1cm4oZSs9bik9PT1vLmxlbmd0aD9lPTA6LTE9PT1lJiYoZT1vLmxlbmd0aC0xKSxvW2VdLmZvY3VzKCk7QSgpLmZvY3VzKCl9dmFyIFZlPVtcInN3YWwtdGl0bGVcIixcInN3YWwtaHRtbFwiLFwic3dhbC1mb290ZXJcIl0sUmU9ZnVuY3Rpb24odCl7dmFyIG49e307cmV0dXJuIGcodC5xdWVyeVNlbGVjdG9yQWxsKFwic3dhbC1wYXJhbVwiKSkuZm9yRWFjaChmdW5jdGlvbih0KXtLZSh0LFtcIm5hbWVcIixcInZhbHVlXCJdKTt2YXIgZT10LmdldEF0dHJpYnV0ZShcIm5hbWVcIiksdD10LmdldEF0dHJpYnV0ZShcInZhbHVlXCIpO1wiYm9vbGVhblwiPT10eXBlb2Ygc2VbZV0mJlwiZmFsc2VcIj09PXQmJih0PSExKSxcIm9iamVjdFwiPT09cihzZVtlXSkmJih0PUpTT04ucGFyc2UodCkpLG5bZV09dH0pLG59LE5lPWZ1bmN0aW9uKHQpe3ZhciBuPXt9O3JldHVybiBnKHQucXVlcnlTZWxlY3RvckFsbChcInN3YWwtYnV0dG9uXCIpKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe0tlKHQsW1widHlwZVwiLFwiY29sb3JcIixcImFyaWEtbGFiZWxcIl0pO3ZhciBlPXQuZ2V0QXR0cmlidXRlKFwidHlwZVwiKTtuW1wiXCIuY29uY2F0KGUsXCJCdXR0b25UZXh0XCIpXT10LmlubmVySFRNTCxuW1wic2hvd1wiLmNvbmNhdChtKGUpLFwiQnV0dG9uXCIpXT0hMCx0Lmhhc0F0dHJpYnV0ZShcImNvbG9yXCIpJiYobltcIlwiLmNvbmNhdChlLFwiQnV0dG9uQ29sb3JcIildPXQuZ2V0QXR0cmlidXRlKFwiY29sb3JcIikpLHQuaGFzQXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSYmKG5bXCJcIi5jb25jYXQoZSxcIkJ1dHRvbkFyaWFMYWJlbFwiKV09dC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpKX0pLG59LFVlPWZ1bmN0aW9uKHQpe3ZhciBlPXt9LHQ9dC5xdWVyeVNlbGVjdG9yKFwic3dhbC1pbWFnZVwiKTtyZXR1cm4gdCYmKEtlKHQsW1wic3JjXCIsXCJ3aWR0aFwiLFwiaGVpZ2h0XCIsXCJhbHRcIl0pLHQuaGFzQXR0cmlidXRlKFwic3JjXCIpJiYoZS5pbWFnZVVybD10LmdldEF0dHJpYnV0ZShcInNyY1wiKSksdC5oYXNBdHRyaWJ1dGUoXCJ3aWR0aFwiKSYmKGUuaW1hZ2VXaWR0aD10LmdldEF0dHJpYnV0ZShcIndpZHRoXCIpKSx0Lmhhc0F0dHJpYnV0ZShcImhlaWdodFwiKSYmKGUuaW1hZ2VIZWlnaHQ9dC5nZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIikpLHQuaGFzQXR0cmlidXRlKFwiYWx0XCIpJiYoZS5pbWFnZUFsdD10LmdldEF0dHJpYnV0ZShcImFsdFwiKSkpLGV9LEZlPWZ1bmN0aW9uKHQpe3ZhciBlPXt9LHQ9dC5xdWVyeVNlbGVjdG9yKFwic3dhbC1pY29uXCIpO3JldHVybiB0JiYoS2UodCxbXCJ0eXBlXCIsXCJjb2xvclwiXSksdC5oYXNBdHRyaWJ1dGUoXCJ0eXBlXCIpJiYoZS5pY29uPXQuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSksdC5oYXNBdHRyaWJ1dGUoXCJjb2xvclwiKSYmKGUuaWNvbkNvbG9yPXQuZ2V0QXR0cmlidXRlKFwiY29sb3JcIikpLGUuaWNvbkh0bWw9dC5pbm5lckhUTUwpLGV9LF9lPWZ1bmN0aW9uKHQpe3ZhciBuPXt9LGU9dC5xdWVyeVNlbGVjdG9yKFwic3dhbC1pbnB1dFwiKTtlJiYoS2UoZSxbXCJ0eXBlXCIsXCJsYWJlbFwiLFwicGxhY2Vob2xkZXJcIixcInZhbHVlXCJdKSxuLmlucHV0PWUuZ2V0QXR0cmlidXRlKFwidHlwZVwiKXx8XCJ0ZXh0XCIsZS5oYXNBdHRyaWJ1dGUoXCJsYWJlbFwiKSYmKG4uaW5wdXRMYWJlbD1lLmdldEF0dHJpYnV0ZShcImxhYmVsXCIpKSxlLmhhc0F0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIpJiYobi5pbnB1dFBsYWNlaG9sZGVyPWUuZ2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIikpLGUuaGFzQXR0cmlidXRlKFwidmFsdWVcIikmJihuLmlucHV0VmFsdWU9ZS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSkpO3Q9dC5xdWVyeVNlbGVjdG9yQWxsKFwic3dhbC1pbnB1dC1vcHRpb25cIik7cmV0dXJuIHQubGVuZ3RoJiYobi5pbnB1dE9wdGlvbnM9e30sZyh0KS5mb3JFYWNoKGZ1bmN0aW9uKHQpe0tlKHQsW1widmFsdWVcIl0pO3ZhciBlPXQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIiksdD10LmlubmVySFRNTDtuLmlucHV0T3B0aW9uc1tlXT10fSkpLG59LHplPWZ1bmN0aW9uKHQsZSl7dmFyIG4sbz17fTtmb3IobiBpbiBlKXt2YXIgaT1lW25dLHI9dC5xdWVyeVNlbGVjdG9yKGkpO3ImJihLZShyLFtdKSxvW2kucmVwbGFjZSgvXnN3YWwtLyxcIlwiKV09ci5pbm5lckhUTUwudHJpbSgpKX1yZXR1cm4gb30sV2U9ZnVuY3Rpb24oZSl7dmFyIG49VmUuY29uY2F0KFtcInN3YWwtcGFyYW1cIixcInN3YWwtYnV0dG9uXCIsXCJzd2FsLWltYWdlXCIsXCJzd2FsLWljb25cIixcInN3YWwtaW5wdXRcIixcInN3YWwtaW5wdXQtb3B0aW9uXCJdKTtnKGUucXVlcnlTZWxlY3RvckFsbChcIipcIikpLmZvckVhY2goZnVuY3Rpb24odCl7dC5wYXJlbnROb2RlPT09ZSYmKHQ9dC50YWdOYW1lLnRvTG93ZXJDYXNlKCksLTE9PT1uLmluZGV4T2YodCkmJlcoXCJVbnJlY29nbml6ZWQgZWxlbWVudCA8XCIuY29uY2F0KHQsXCI+XCIpKSl9KX0sS2U9ZnVuY3Rpb24oZSxuKXtnKGUuYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbih0KXstMT09PW4uaW5kZXhPZih0Lm5hbWUpJiZXKFsnVW5yZWNvZ25pemVkIGF0dHJpYnV0ZSBcIicuY29uY2F0KHQubmFtZSwnXCIgb24gPCcpLmNvbmNhdChlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSxcIj4uXCIpLFwiXCIuY29uY2F0KG4ubGVuZ3RoP1wiQWxsb3dlZCBhdHRyaWJ1dGVzIGFyZTogXCIuY29uY2F0KG4uam9pbihcIiwgXCIpKTpcIlRvIHNldCB0aGUgdmFsdWUsIHVzZSBIVE1MIHdpdGhpbiB0aGUgZWxlbWVudC5cIildKX0pfSxZZT1mdW5jdGlvbih0LGUpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGUuZGlkT3Blbj9zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIGUuZGlkT3Blbih0KX0pOlwiZnVuY3Rpb25cIj09dHlwZW9mIGUub25PcGVuJiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIGUub25PcGVuKHQpfSl9LFplPWZ1bmN0aW9uKHQsZSl7QnQmJmx0KGUpPyh0LnN0eWxlLm92ZXJmbG93WT1cImhpZGRlblwiLGUuYWRkRXZlbnRMaXN0ZW5lcihCdCxNZSkpOnQuc3R5bGUub3ZlcmZsb3dZPVwiYXV0b1wifSxRZT1mdW5jdGlvbih0LGUsbil7dmFyIG87KC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpJiYhd2luZG93Lk1TU3RyZWFtfHxcIk1hY0ludGVsXCI9PT1uYXZpZ2F0b3IucGxhdGZvcm0mJjE8bmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzKSYmIUYoZG9jdW1lbnQuYm9keSwkLmlvc2ZpeCkmJihvPWRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLGRvY3VtZW50LmJvZHkuc3R5bGUudG9wPVwiXCIuY29uY2F0KC0xKm8sXCJweFwiKSx2dChkb2N1bWVudC5ib2R5LCQuaW9zZml4KSx2ZSgpLGdlKCkpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJm1lKCkmJihoZSgpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsaGUpKSxlJiZcImhpZGRlblwiIT09biYmZmUoKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC5zY3JvbGxUb3A9MH0pfSxKZT1mdW5jdGlvbih0LGUsbil7dnQodCxuLnNob3dDbGFzcy5iYWNrZHJvcCksZS5zdHlsZS5zZXRQcm9wZXJ0eShcIm9wYWNpdHlcIixcIjBcIixcImltcG9ydGFudFwiKSxydChlKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dnQoZSxuLnNob3dDbGFzcy5wb3B1cCksZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm9wYWNpdHlcIil9LDEwKSx2dChbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LGRvY3VtZW50LmJvZHldLCQuc2hvd24pLG4uaGVpZ2h0QXV0byYmbi5iYWNrZHJvcCYmIW4udG9hc3QmJnZ0KFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsZG9jdW1lbnQuYm9keV0sJFtcImhlaWdodC1hdXRvXCJdKX0sJGU9ZnVuY3Rpb24odCl7cmV0dXJuIHQuY2hlY2tlZD8xOjB9LFhlPWZ1bmN0aW9uKHQpe3JldHVybiB0LmNoZWNrZWQ/dC52YWx1ZTpudWxsfSxHZT1mdW5jdGlvbih0KXtyZXR1cm4gdC5maWxlcy5sZW5ndGg/bnVsbCE9PXQuZ2V0QXR0cmlidXRlKFwibXVsdGlwbGVcIik/dC5maWxlczp0LmZpbGVzWzBdOm51bGx9LHRuPWZ1bmN0aW9uKGUsbil7ZnVuY3Rpb24gbyh0KXtyZXR1cm4gbm5bbi5pbnB1dF0oaSxvbih0KSxuKX12YXIgaT1QKCk7YihuLmlucHV0T3B0aW9ucyl8fHcobi5pbnB1dE9wdGlvbnMpPyhKdChUKCkpLHkobi5pbnB1dE9wdGlvbnMpLnRoZW4oZnVuY3Rpb24odCl7ZS5oaWRlTG9hZGluZygpLG8odCl9KSk6XCJvYmplY3RcIj09PXIobi5pbnB1dE9wdGlvbnMpP28obi5pbnB1dE9wdGlvbnMpOksoXCJVbmV4cGVjdGVkIHR5cGUgb2YgaW5wdXRPcHRpb25zISBFeHBlY3RlZCBvYmplY3QsIE1hcCBvciBQcm9taXNlLCBnb3QgXCIuY29uY2F0KHIobi5pbnB1dE9wdGlvbnMpKSl9LGVuPWZ1bmN0aW9uKGUsbil7dmFyIG89ZS5nZXRJbnB1dCgpO2F0KG8pLHkobi5pbnB1dFZhbHVlKS50aGVuKGZ1bmN0aW9uKHQpe28udmFsdWU9XCJudW1iZXJcIj09PW4uaW5wdXQ/cGFyc2VGbG9hdCh0KXx8MDpcIlwiLmNvbmNhdCh0KSxydChvKSxvLmZvY3VzKCksZS5oaWRlTG9hZGluZygpfSkuY2F0Y2goZnVuY3Rpb24odCl7SyhcIkVycm9yIGluIGlucHV0VmFsdWUgcHJvbWlzZTogXCIuY29uY2F0KHQpKSxvLnZhbHVlPVwiXCIscnQobyksby5mb2N1cygpLGUuaGlkZUxvYWRpbmcoKX0pfSxubj17c2VsZWN0OmZ1bmN0aW9uKHQsZSxpKXtmdW5jdGlvbiBvKHQsZSxuKXt2YXIgbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO28udmFsdWU9bixVKG8sZSksby5zZWxlY3RlZD1ybihuLGkuaW5wdXRWYWx1ZSksdC5hcHBlbmRDaGlsZChvKX12YXIgcj15dCh0LCQuc2VsZWN0KTtlLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIGUsbj10WzBdLHQ9dFsxXTtBcnJheS5pc0FycmF5KHQpPygoZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0Z3JvdXBcIikpLmxhYmVsPW4sZS5kaXNhYmxlZD0hMSxyLmFwcGVuZENoaWxkKGUpLHQuZm9yRWFjaChmdW5jdGlvbih0KXtyZXR1cm4gbyhlLHRbMV0sdFswXSl9KSk6byhyLHQsbil9KSxyLmZvY3VzKCl9LHJhZGlvOmZ1bmN0aW9uKHQsZSxpKXt2YXIgcj15dCh0LCQucmFkaW8pO2UuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgZT10WzBdLG49dFsxXSxvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSx0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtvLnR5cGU9XCJyYWRpb1wiLG8ubmFtZT0kLnJhZGlvLG8udmFsdWU9ZSxybihlLGkuaW5wdXRWYWx1ZSkmJihvLmNoZWNrZWQ9ITApO2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7VShlLG4pLGUuY2xhc3NOYW1lPSQubGFiZWwsdC5hcHBlbmRDaGlsZChvKSx0LmFwcGVuZENoaWxkKGUpLHIuYXBwZW5kQ2hpbGQodCl9KTtlPXIucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpO2UubGVuZ3RoJiZlWzBdLmZvY3VzKCl9fSxvbj1mdW5jdGlvbiBuKG8pe3ZhciBpPVtdO3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBNYXAmJm8gaW5zdGFuY2VvZiBNYXA/by5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09PXIodCkmJih0PW4odCkpLGkucHVzaChbZSx0XSl9KTpPYmplY3Qua2V5cyhvKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBlPW9bdF07XCJvYmplY3RcIj09PXIoZSkmJihlPW4oZSkpLGkucHVzaChbdCxlXSl9KSxpfSxybj1mdW5jdGlvbih0LGUpe3JldHVybiBlJiZlLnRvU3RyaW5nKCk9PT10LnRvU3RyaW5nKCl9LGFuPWZ1bmN0aW9uKHQsZSxuKXt2YXIgbz1mdW5jdGlvbih0LGUpe3ZhciBuPXQuZ2V0SW5wdXQoKTtpZighbilyZXR1cm4gbnVsbDtzd2l0Y2goZS5pbnB1dCl7Y2FzZVwiY2hlY2tib3hcIjpyZXR1cm4gJGUobik7Y2FzZVwicmFkaW9cIjpyZXR1cm4gWGUobik7Y2FzZVwiZmlsZVwiOnJldHVybiBHZShuKTtkZWZhdWx0OnJldHVybiBlLmlucHV0QXV0b1RyaW0/bi52YWx1ZS50cmltKCk6bi52YWx1ZX19KHQsZSk7ZS5pbnB1dFZhbGlkYXRvcj9zbih0LGUsbyk6dC5nZXRJbnB1dCgpLmNoZWNrVmFsaWRpdHkoKT8oXCJkZW55XCI9PT1uP3VuOmNuKSh0LGUsbyk6KHQuZW5hYmxlQnV0dG9ucygpLHQuc2hvd1ZhbGlkYXRpb25NZXNzYWdlKGUudmFsaWRhdGlvbk1lc3NhZ2UpKX0sc249ZnVuY3Rpb24oZSxuLG8pe2UuZGlzYWJsZUlucHV0KCksUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpe3JldHVybiB5KG4uaW5wdXRWYWxpZGF0b3IobyxuLnZhbGlkYXRpb25NZXNzYWdlKSl9KS50aGVuKGZ1bmN0aW9uKHQpe2UuZW5hYmxlQnV0dG9ucygpLGUuZW5hYmxlSW5wdXQoKSx0P2Uuc2hvd1ZhbGlkYXRpb25NZXNzYWdlKHQpOmNuKGUsbixvKX0pfSx1bj1mdW5jdGlvbihlLHQsbil7dC5zaG93TG9hZGVyT25EZW55JiZKdChMKCkpLHQucHJlRGVueT9Qcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIHkodC5wcmVEZW55KG4sdC52YWxpZGF0aW9uTWVzc2FnZSkpfSkudGhlbihmdW5jdGlvbih0KXshMT09PXQ/ZS5oaWRlTG9hZGluZygpOmUuY2xvc2VQb3B1cCh7aXNEZW5pZWQ6ITAsdmFsdWU6dm9pZCAwPT09dD9uOnR9KX0pOmUuY2xvc2VQb3B1cCh7aXNEZW5pZWQ6ITAsdmFsdWU6bn0pfSxjbj1mdW5jdGlvbihlLHQsbil7dC5zaG93TG9hZGVyT25Db25maXJtJiZKdCgpLHQucHJlQ29uZmlybT8oZS5yZXNldFZhbGlkYXRpb25NZXNzYWdlKCksUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpe3JldHVybiB5KHQucHJlQ29uZmlybShuLHQudmFsaWRhdGlvbk1lc3NhZ2UpKX0pLnRoZW4oZnVuY3Rpb24odCl7d3QoUygpKXx8ITE9PT10P2UuaGlkZUxvYWRpbmcoKTpJZShlLHZvaWQgMD09PXQ/bjp0KX0pKTpJZShlLG4pfSxsbj1bXCJBcnJvd1JpZ2h0XCIsXCJBcnJvd0Rvd25cIixcIlJpZ2h0XCIsXCJEb3duXCJdLGRuPVtcIkFycm93TGVmdFwiLFwiQXJyb3dVcFwiLFwiTGVmdFwiLFwiVXBcIl0scG49W1wiRXNjYXBlXCIsXCJFc2NcIl0sZm49ZnVuY3Rpb24odCxlLG4pe3ZhciBvPVR0LmlubmVyUGFyYW1zLmdldCh0KTtvJiYoby5zdG9wS2V5ZG93blByb3BhZ2F0aW9uJiZlLnN0b3BQcm9wYWdhdGlvbigpLFwiRW50ZXJcIj09PWUua2V5P21uKHQsZSxvKTpcIlRhYlwiPT09ZS5rZXk/aG4oZSxvKTotMSE9PVtdLmNvbmNhdChsbixkbikuaW5kZXhPZihlLmtleSk/Z24oZS5rZXkpOi0xIT09cG4uaW5kZXhPZihlLmtleSkmJnZuKGUsbyxuKSl9LG1uPWZ1bmN0aW9uKHQsZSxuKXtlLmlzQ29tcG9zaW5nfHxlLnRhcmdldCYmdC5nZXRJbnB1dCgpJiZlLnRhcmdldC5vdXRlckhUTUw9PT10LmdldElucHV0KCkub3V0ZXJIVE1MJiYtMT09PVtcInRleHRhcmVhXCIsXCJmaWxlXCJdLmluZGV4T2Yobi5pbnB1dCkmJihGdCgpLGUucHJldmVudERlZmF1bHQoKSl9LGhuPWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBuPXQudGFyZ2V0LG89UigpLGk9LTEscj0wO3I8by5sZW5ndGg7cisrKWlmKG49PT1vW3JdKXtpPXI7YnJlYWt9dC5zaGlmdEtleT9IZSgwLGksLTEpOkhlKDAsaSwxKSx0LnN0b3BQcm9wYWdhdGlvbigpLHQucHJldmVudERlZmF1bHQoKX0sZ249ZnVuY3Rpb24odCl7LTEhPT1bVCgpLEwoKSxEKCldLmluZGV4T2YoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkmJih0PS0xIT09bG4uaW5kZXhPZih0KT9cIm5leHRFbGVtZW50U2libGluZ1wiOlwicHJldmlvdXNFbGVtZW50U2libGluZ1wiLCh0PWRvY3VtZW50LmFjdGl2ZUVsZW1lbnRbdF0pJiZ0LmZvY3VzKCkpfSx2bj1mdW5jdGlvbih0LGUsbil7WihlLmFsbG93RXNjYXBlS2V5KSYmKHQucHJldmVudERlZmF1bHQoKSxuKFEuZXNjKSl9LGJuPWZ1bmN0aW9uKGUsdCxuKXt0LnBvcHVwLm9uY2xpY2s9ZnVuY3Rpb24oKXt2YXIgdD1UdC5pbm5lclBhcmFtcy5nZXQoZSk7dC5zaG93Q29uZmlybUJ1dHRvbnx8dC5zaG93RGVueUJ1dHRvbnx8dC5zaG93Q2FuY2VsQnV0dG9ufHx0LnNob3dDbG9zZUJ1dHRvbnx8dC50aW1lcnx8dC5pbnB1dHx8bihRLmNsb3NlKX19LHluPSExLHduPWZ1bmN0aW9uKGUpe2UucG9wdXAub25tb3VzZWRvd249ZnVuY3Rpb24oKXtlLmNvbnRhaW5lci5vbm1vdXNldXA9ZnVuY3Rpb24odCl7ZS5jb250YWluZXIub25tb3VzZXVwPXZvaWQgMCx0LnRhcmdldD09PWUuY29udGFpbmVyJiYoeW49ITApfX19LENuPWZ1bmN0aW9uKGUpe2UuY29udGFpbmVyLm9ubW91c2Vkb3duPWZ1bmN0aW9uKCl7ZS5wb3B1cC5vbm1vdXNldXA9ZnVuY3Rpb24odCl7ZS5wb3B1cC5vbm1vdXNldXA9dm9pZCAwLHQudGFyZ2V0IT09ZS5wb3B1cCYmIWUucG9wdXAuY29udGFpbnModC50YXJnZXQpfHwoeW49ITApfX19LGtuPWZ1bmN0aW9uKG4sbyxpKXtvLmNvbnRhaW5lci5vbmNsaWNrPWZ1bmN0aW9uKHQpe3ZhciBlPVR0LmlubmVyUGFyYW1zLmdldChuKTt5bj95bj0hMTp0LnRhcmdldD09PW8uY29udGFpbmVyJiZaKGUuYWxsb3dPdXRzaWRlQ2xpY2spJiZpKFEuYmFja2Ryb3ApfX07ZnVuY3Rpb24gQW4odCxlKXt2YXIgbj1mdW5jdGlvbih0KXt0PVwic3RyaW5nXCI9PXR5cGVvZiB0LnRlbXBsYXRlP2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodC50ZW1wbGF0ZSk6dC50ZW1wbGF0ZTtpZighdClyZXR1cm57fTt0PXQuY29udGVudHx8dDtyZXR1cm4gV2UodCksdShSZSh0KSxOZSh0KSxVZSh0KSxGZSh0KSxfZSh0KSx6ZSh0LFZlKSl9KHQpO3JldHVybihuPXUoe30sc2UsZSxuLHQpKS5zaG93Q2xhc3M9dSh7fSxzZS5zaG93Q2xhc3Msbi5zaG93Q2xhc3MpLG4uaGlkZUNsYXNzPXUoe30sc2UuaGlkZUNsYXNzLG4uaGlkZUNsYXNzKSwhMT09PXQuYW5pbWF0aW9uJiYobi5zaG93Q2xhc3M9e3BvcHVwOlwic3dhbDItbm9hbmltYXRpb25cIixiYWNrZHJvcDpcInN3YWwyLW5vYW5pbWF0aW9uXCJ9LG4uaGlkZUNsYXNzPXt9KSxufWZ1bmN0aW9uIHhuKGEscyx1KXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSh0KXthLmNsb3NlUG9wdXAoe2lzRGlzbWlzc2VkOiEwLGRpc21pc3M6dH0pfXZhciBuLG8saSxyO0NlLnN3YWxQcm9taXNlUmVzb2x2ZS5zZXQoYSx0KSxzLmNvbmZpcm1CdXR0b24ub25jbGljaz1mdW5jdGlvbigpe3JldHVybiBlPXUsKHQ9YSkuZGlzYWJsZUJ1dHRvbnMoKSx2b2lkKGUuaW5wdXQ/YW4odCxlLFwiY29uZmlybVwiKTpjbih0LGUsITApKTt2YXIgdCxlfSxzLmRlbnlCdXR0b24ub25jbGljaz1mdW5jdGlvbigpe3JldHVybiBlPXUsKHQ9YSkuZGlzYWJsZUJ1dHRvbnMoKSx2b2lkKGUucmV0dXJuSW5wdXRWYWx1ZU9uRGVueT9hbih0LGUsXCJkZW55XCIpOnVuKHQsZSwhMSkpO3ZhciB0LGV9LHMuY2FuY2VsQnV0dG9uLm9uY2xpY2s9ZnVuY3Rpb24oKXtyZXR1cm4gdD1lLGEuZGlzYWJsZUJ1dHRvbnMoKSx2b2lkIHQoUS5jYW5jZWwpO3ZhciB0fSxzLmNsb3NlQnV0dG9uLm9uY2xpY2s9ZnVuY3Rpb24oKXtyZXR1cm4gZShRLmNsb3NlKX0sbj1hLHI9cyx0PWUsVHQuaW5uZXJQYXJhbXMuZ2V0KG4pLnRvYXN0P2JuKG4scix0KTood24ociksQ24ociksa24obixyLHQpKSxvPWEscj11LGk9ZSwodD10ZSkua2V5ZG93blRhcmdldCYmdC5rZXlkb3duSGFuZGxlckFkZGVkJiYodC5rZXlkb3duVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsdC5rZXlkb3duSGFuZGxlcix7Y2FwdHVyZTp0LmtleWRvd25MaXN0ZW5lckNhcHR1cmV9KSx0LmtleWRvd25IYW5kbGVyQWRkZWQ9ITEpLHIudG9hc3R8fCh0LmtleWRvd25IYW5kbGVyPWZ1bmN0aW9uKHQpe3JldHVybiBmbihvLHQsaSl9LHQua2V5ZG93blRhcmdldD1yLmtleWRvd25MaXN0ZW5lckNhcHR1cmU/d2luZG93OkEoKSx0LmtleWRvd25MaXN0ZW5lckNhcHR1cmU9ci5rZXlkb3duTGlzdGVuZXJDYXB0dXJlLHQua2V5ZG93blRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLHQua2V5ZG93bkhhbmRsZXIse2NhcHR1cmU6dC5rZXlkb3duTGlzdGVuZXJDYXB0dXJlfSksdC5rZXlkb3duSGFuZGxlckFkZGVkPSEwKSxyPWEsXCJzZWxlY3RcIj09PSh0PXUpLmlucHV0fHxcInJhZGlvXCI9PT10LmlucHV0P3RuKHIsdCk6LTEhPT1bXCJ0ZXh0XCIsXCJlbWFpbFwiLFwibnVtYmVyXCIsXCJ0ZWxcIixcInRleHRhcmVhXCJdLmluZGV4T2YodC5pbnB1dCkmJihiKHQuaW5wdXRWYWx1ZSl8fHcodC5pbnB1dFZhbHVlKSkmJmVuKHIsdCksamUodSksUG4odGUsdSxlKSxPbihzLHUpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtzLmNvbnRhaW5lci5zY3JvbGxUb3A9MH0pfSl9ZnVuY3Rpb24gQm4odCl7dmFyIGU9e3BvcHVwOkEoKSxjb250YWluZXI6aygpLGNvbnRlbnQ6UCgpLGFjdGlvbnM6aigpLGNvbmZpcm1CdXR0b246VCgpLGRlbnlCdXR0b246TCgpLGNhbmNlbEJ1dHRvbjpEKCksbG9hZGVyOnEoKSxjbG9zZUJ1dHRvbjpWKCksdmFsaWRhdGlvbk1lc3NhZ2U6UygpLHByb2dyZXNzU3RlcHM6bigpfTtyZXR1cm4gVHQuZG9tQ2FjaGUuc2V0KHQsZSksZX12YXIgUG49ZnVuY3Rpb24odCxlLG4pe3ZhciBvPUgoKTthdChvKSxlLnRpbWVyJiYodC50aW1lb3V0PW5ldyBMZShmdW5jdGlvbigpe24oXCJ0aW1lclwiKSxkZWxldGUgdC50aW1lb3V0fSxlLnRpbWVyKSxlLnRpbWVyUHJvZ3Jlc3NCYXImJihydChvKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC50aW1lb3V0JiZ0LnRpbWVvdXQucnVubmluZyYmZHQoZS50aW1lcil9KSkpfSxPbj1mdW5jdGlvbih0LGUpe2lmKCFlLnRvYXN0KXJldHVybiBaKGUuYWxsb3dFbnRlcktleSk/dm9pZChFbih0LGUpfHxIZSgwLC0xLDEpKTpTbigpfSxFbj1mdW5jdGlvbih0LGUpe3JldHVybiBlLmZvY3VzRGVueSYmd3QodC5kZW55QnV0dG9uKT8odC5kZW55QnV0dG9uLmZvY3VzKCksITApOmUuZm9jdXNDYW5jZWwmJnd0KHQuY2FuY2VsQnV0dG9uKT8odC5jYW5jZWxCdXR0b24uZm9jdXMoKSwhMCk6ISghZS5mb2N1c0NvbmZpcm18fCF3dCh0LmNvbmZpcm1CdXR0b24pKSYmKHQuY29uZmlybUJ1dHRvbi5mb2N1cygpLCEwKX0sU249ZnVuY3Rpb24oKXtkb2N1bWVudC5hY3RpdmVFbGVtZW50JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXImJmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpfTtmdW5jdGlvbiBUbih0KXtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LmRpZERlc3Ryb3k/dC5kaWREZXN0cm95KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgdC5vbkRlc3Ryb3kmJnQub25EZXN0cm95KCl9ZnVuY3Rpb24gTG4odCl7ZGVsZXRlIHQucGFyYW1zLGRlbGV0ZSB0ZS5rZXlkb3duSGFuZGxlcixkZWxldGUgdGUua2V5ZG93blRhcmdldCxEbihUdCksRG4oQ2UpfXZhciBxbixEbj1mdW5jdGlvbih0KXtmb3IodmFyIGUgaW4gdCl0W2VdPW5ldyBXZWFrTWFwfSxKPU9iamVjdC5mcmVlemUoe2hpZGVMb2FkaW5nOnBlLGRpc2FibGVMb2FkaW5nOnBlLGdldElucHV0OmZ1bmN0aW9uKHQpe3ZhciBlPVR0LmlubmVyUGFyYW1zLmdldCh0fHx0aGlzKTtyZXR1cm4odD1UdC5kb21DYWNoZS5nZXQodHx8dGhpcykpP2V0KHQuY29udGVudCxlLmlucHV0KTpudWxsfSxjbG9zZTpBZSxjbG9zZVBvcHVwOkFlLGNsb3NlTW9kYWw6QWUsY2xvc2VUb2FzdDpBZSxlbmFibGVCdXR0b25zOmZ1bmN0aW9uKCl7U2UodGhpcyxbXCJjb25maXJtQnV0dG9uXCIsXCJkZW55QnV0dG9uXCIsXCJjYW5jZWxCdXR0b25cIl0sITEpfSxkaXNhYmxlQnV0dG9uczpmdW5jdGlvbigpe1NlKHRoaXMsW1wiY29uZmlybUJ1dHRvblwiLFwiZGVueUJ1dHRvblwiLFwiY2FuY2VsQnV0dG9uXCJdLCEwKX0sZW5hYmxlSW5wdXQ6ZnVuY3Rpb24oKXtyZXR1cm4gVGUodGhpcy5nZXRJbnB1dCgpLCExKX0sZGlzYWJsZUlucHV0OmZ1bmN0aW9uKCl7cmV0dXJuIFRlKHRoaXMuZ2V0SW5wdXQoKSwhMCl9LHNob3dWYWxpZGF0aW9uTWVzc2FnZTpmdW5jdGlvbih0KXt2YXIgZT1UdC5kb21DYWNoZS5nZXQodGhpcyksbj1UdC5pbm5lclBhcmFtcy5nZXQodGhpcyk7VShlLnZhbGlkYXRpb25NZXNzYWdlLHQpLGUudmFsaWRhdGlvbk1lc3NhZ2UuY2xhc3NOYW1lPSRbXCJ2YWxpZGF0aW9uLW1lc3NhZ2VcIl0sbi5jdXN0b21DbGFzcyYmbi5jdXN0b21DbGFzcy52YWxpZGF0aW9uTWVzc2FnZSYmdnQoZS52YWxpZGF0aW9uTWVzc2FnZSxuLmN1c3RvbUNsYXNzLnZhbGlkYXRpb25NZXNzYWdlKSxydChlLnZhbGlkYXRpb25NZXNzYWdlKSwoZT10aGlzLmdldElucHV0KCkpJiYoZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWludmFsaWRcIiwhMCksZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWRlc2NyaWJlZEJ5XCIsJFtcInZhbGlkYXRpb24tbWVzc2FnZVwiXSksbnQoZSksdnQoZSwkLmlucHV0ZXJyb3IpKX0scmVzZXRWYWxpZGF0aW9uTWVzc2FnZTpmdW5jdGlvbigpe3ZhciB0PVR0LmRvbUNhY2hlLmdldCh0aGlzKTt0LnZhbGlkYXRpb25NZXNzYWdlJiZhdCh0LnZhbGlkYXRpb25NZXNzYWdlKSwodD10aGlzLmdldElucHV0KCkpJiYodC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWludmFsaWRcIiksdC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWRlc2NyaWJlZEJ5XCIpLGJ0KHQsJC5pbnB1dGVycm9yKSl9LGdldFByb2dyZXNzU3RlcHM6ZnVuY3Rpb24oKXtyZXR1cm4gVHQuZG9tQ2FjaGUuZ2V0KHRoaXMpLnByb2dyZXNzU3RlcHN9LF9tYWluOmZ1bmN0aW9uKHQpe3ZhciBlPTE8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fTtyZXR1cm4gYWUodSh7fSxlLHQpKSx0ZS5jdXJyZW50SW5zdGFuY2UmJnRlLmN1cnJlbnRJbnN0YW5jZS5fZGVzdHJveSgpLHRlLmN1cnJlbnRJbnN0YW5jZT10aGlzLERlKHQ9QW4odCxlKSksT2JqZWN0LmZyZWV6ZSh0KSx0ZS50aW1lb3V0JiYodGUudGltZW91dC5zdG9wKCksZGVsZXRlIHRlLnRpbWVvdXQpLGNsZWFyVGltZW91dCh0ZS5yZXN0b3JlRm9jdXNUaW1lb3V0KSxlPUJuKHRoaXMpLFV0KHRoaXMsdCksVHQuaW5uZXJQYXJhbXMuc2V0KHRoaXMsdCkseG4odGhpcyxlLHQpfSx1cGRhdGU6ZnVuY3Rpb24oZSl7dmFyIHQ9QSgpLG49VHQuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO2lmKCF0fHxGKHQsbi5oaWRlQ2xhc3MucG9wdXApKXJldHVybiBXKFwiWW91J3JlIHRyeWluZyB0byB1cGRhdGUgdGhlIGNsb3NlZCBvciBjbG9zaW5nIHBvcHVwLCB0aGF0IHdvbid0IHdvcmsuIFVzZSB0aGUgdXBkYXRlKCkgbWV0aG9kIGluIHByZUNvbmZpcm0gcGFyYW1ldGVyIG9yIHNob3cgYSBuZXcgcG9wdXAuXCIpO3ZhciBvPXt9O09iamVjdC5rZXlzKGUpLmZvckVhY2goZnVuY3Rpb24odCl7TW4uaXNVcGRhdGFibGVQYXJhbWV0ZXIodCk/b1t0XT1lW3RdOlcoJ0ludmFsaWQgcGFyYW1ldGVyIHRvIHVwZGF0ZTogXCInLmNvbmNhdCh0LCdcIi4gVXBkYXRhYmxlIHBhcmFtcyBhcmUgbGlzdGVkIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9ibG9iL21hc3Rlci9zcmMvdXRpbHMvcGFyYW1zLmpzXFxuXFxuSWYgeW91IHRoaW5rIHRoaXMgcGFyYW1ldGVyIHNob3VsZCBiZSB1cGRhdGFibGUsIHJlcXVlc3QgaXQgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL2lzc3Vlcy9uZXc/dGVtcGxhdGU9MDJfZmVhdHVyZV9yZXF1ZXN0Lm1kJykpfSksbj11KHt9LG4sbyksVXQodGhpcyxuKSxUdC5pbm5lclBhcmFtcy5zZXQodGhpcyxuKSxPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLHtwYXJhbXM6e3ZhbHVlOnUoe30sdGhpcy5wYXJhbXMsZSksd3JpdGFibGU6ITEsZW51bWVyYWJsZTohMH19KX0sX2Rlc3Ryb3k6ZnVuY3Rpb24oKXt2YXIgdD1UdC5kb21DYWNoZS5nZXQodGhpcyksZT1UdC5pbm5lclBhcmFtcy5nZXQodGhpcyk7ZSYmKHQucG9wdXAmJnRlLnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjayYmKHRlLnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjaygpLGRlbGV0ZSB0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2spLHRlLmRlZmVyRGlzcG9zYWxUaW1lciYmKGNsZWFyVGltZW91dCh0ZS5kZWZlckRpc3Bvc2FsVGltZXIpLGRlbGV0ZSB0ZS5kZWZlckRpc3Bvc2FsVGltZXIpLFRuKGUpLExuKHRoaXMpKX19KSxqbj1mdW5jdGlvbigpe2Z1bmN0aW9uIGkoKXtpZihhKHRoaXMsaSksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyl7XCJ1bmRlZmluZWRcIj09dHlwZW9mIFByb21pc2UmJksoXCJUaGlzIHBhY2thZ2UgcmVxdWlyZXMgYSBQcm9taXNlIGxpYnJhcnksIHBsZWFzZSBpbmNsdWRlIGEgc2hpbSB0byBlbmFibGUgaXQgaW4gdGhpcyBicm93c2VyIChTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi93aWtpL01pZ3JhdGlvbi1mcm9tLVN3ZWV0QWxlcnQtdG8tU3dlZXRBbGVydDIjMS1pZS1zdXBwb3J0KVwiKSxxbj10aGlzO2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLGU9bmV3IEFycmF5KHQpLG49MDtuPHQ7bisrKWVbbl09YXJndW1lbnRzW25dO3ZhciBvPU9iamVjdC5mcmVlemUodGhpcy5jb25zdHJ1Y3Rvci5hcmdzVG9QYXJhbXMoZSkpO09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMse3BhcmFtczp7dmFsdWU6byx3cml0YWJsZTohMSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KTtvPXRoaXMuX21haW4odGhpcy5wYXJhbXMpO1R0LnByb21pc2Uuc2V0KHRoaXMsbyl9fXJldHVybiBzKGksW3trZXk6XCJ0aGVuXCIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIFR0LnByb21pc2UuZ2V0KHRoaXMpLnRoZW4odCl9fSx7a2V5OlwiZmluYWxseVwiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiBUdC5wcm9taXNlLmdldCh0aGlzKS5maW5hbGx5KHQpfX1dKSxpfSgpO3Uoam4ucHJvdG90eXBlLEopLHUoam4sZGUpLE9iamVjdC5rZXlzKEopLmZvckVhY2goZnVuY3Rpb24odCl7am5bdF09ZnVuY3Rpb24oKXtpZihxbilyZXR1cm4gcW5bdF0uYXBwbHkocW4sYXJndW1lbnRzKX19KSxqbi5EaXNtaXNzUmVhc29uPVEsam4udmVyc2lvbj1cIjEwLjE2LjlcIjt2YXIgTW49am47cmV0dXJuIE1uLmRlZmF1bHQ9TW59KSx2b2lkIDAhPT10aGlzJiZ0aGlzLlN3ZWV0YWxlcnQyJiYodGhpcy5zd2FsPXRoaXMuc3dlZXRBbGVydD10aGlzLlN3YWw9dGhpcy5Td2VldEFsZXJ0PXRoaXMuU3dlZXRhbGVydDIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gUmFuZEV4cFxyXG53aW5kb3cuUmFuZEV4cCA9IHJlcXVpcmUoXCJub2RlX21vZHVsZXMvcmFuZGV4cFwiKTtcclxuXHJcbi8vIFV0aWxpdGllc1xyXG5yZXF1aXJlKFwiLi4vLi4vanMvdXRpbC9jb3B5LXRvLWNsaXBib2FyZC5qc1wiKTtcclxuXHJcbi8vIEFjdHVhbCBTY3JpcHRzXHJcbnJlcXVpcmUoJy4vaW5kZXguanMnKTtcclxuIl0sIm5hbWVzIjpbIndpbmRvdyIsIlN3YWwiLCJyZXF1aXJlIiwiJCIsImRvY3VtZW50Iiwib24iLCJlIiwiZWxlbWVudCIsImN1cnJlbnRUYXJnZXQiLCJ0ZW1wIiwiYXBwZW5kIiwidGV4dFRvQ29weSIsImF0dHIiLCJ2YWwiLCJsZW5ndGgiLCJ0ZXh0IiwidHJpZ2dlciIsImV4ZWNDb21tYW5kIiwicmVtb3ZlIiwiZmlyZSIsInRpdGxlIiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRvYXN0IiwidGltZXIiLCJiYWNrZ3JvdW5kIiwiY3VzdG9tQ2xhc3MiLCJwb3B1cCIsIndpZHRoIiwiU3dhbEZsYXNoIiwiX2NsYXNzQ2FsbENoZWNrIiwiRXJyb3IiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImVycm9yIiwibXNnIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiaGFzX2ljb24iLCJwb3MiLCJoYXNfdGltZXIiLCJkdXJhdGlvbiIsIl9jbGFzc1N0YXRpY1ByaXZhdGVNZXRob2RHZXQiLCJfc2VuZEV2ZW50IiwiY2FsbCIsImZsYXNoX2Vycm9yIiwibWVzc2FnZSIsImlzX3RvYXN0IiwiaW5mbyIsImZsYXNoX2luZm8iLCJzdWNjZXNzIiwiZmxhc2hfc3VjY2VzcyIsInR5cGUiLCJwYXJhbXMiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJkZWZhdWx0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZsYXNoIiwib3B0aW9ucyIsImNvbmNhdCIsImNvbnRlbnQiLCJzaG93Q2xhc3MiLCJoaWRlQ2xhc3MiLCJfX3NldFN3YWxGbGFzaE9wdGlvbnMiLCJpbml0Q2hhbmdlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJ1bmlxIiwic2VlbiIsIm91dCIsImoiLCJpIiwiaXRlbSIsIk1lc3NhZ2VCYWciLCJtZXNzYWdlcyIsIk9iamVjdCIsImNyZWF0ZSIsIl9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjIiwiX21lc3NhZ2UiLCJ3cml0YWJsZSIsIl9jbGFzc1ByaXZhdGVGaWVsZFNldCIsImFkZCIsInNwbGl0IiwiZmllbGQiLCJfY2xhc3NQcml2YXRlRmllbGRHZXQiLCJtZXJnZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsImFzc2lnbiIsImdldCIsImhhcyIsImZpZWxkcyIsImluY2x1ZGVzIiwia2V5cyIsImZpcnN0IiwiUnVsZSIsInZhbGlkYXRvclZhbHVlcyIsIl9kZWZpbmVQcm9wZXJ0eSIsInJlcGxhY2VBbGwiLCJfZmllbGQiLCJfdmFsdWUiLCJfdmFsaWRhdG9yVmFsdWVzIiwidmFsaWRhdGUiLCJSZXF1aXJlZCIsIl9SdWxlIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX3ZhbGlkIiwidmFsaWQiLCJydW5PdGhlclZhbGlkYXRpb24iLCJSZXF1aXJlZElmIiwiX1JlcXVpcmVkIiwiX3N1cGVyMiIsIl90eXBlb2YiLCJfdGhpcyRfdmFsaWRhdG9yVmFsdWUiLCJfc2xpY2VkVG9BcnJheSIsImZpZWxkMiIsInZhbDIiLCJ2YWwzIiwiX2dldCIsIl9nZXRQcm90b3R5cGVPZiIsIlNvbWV0aW1lcyIsIl9SdWxlMiIsIl9zdXBlcjMiLCJCb29sZWFuIiwiX1J1bGUzIiwiX0Jvb2xlYW4iLCJfc3VwZXI0IiwidG9Mb3dlckNhc2UiLCJOdW1lcmljIiwiX1J1bGU0IiwiX3N1cGVyNSIsImlzRGVjaW1hbCIsImNvbnZlcnRlZCIsInBhcnNlRmxvYXQiLCJwYXJzZUludCIsImlzTmFOIiwiTWluIiwiX1J1bGU1IiwiX3N1cGVyNiIsInRvU3RyaW5nIiwiTWF4IiwiX1J1bGU2IiwiX3N1cGVyNyIsIkJldHdlZW4iLCJfUnVsZTciLCJfc3VwZXI4IiwiX1J1bGU4IiwiX0FycmF5IiwiX3N1cGVyOSIsIkluIiwiX1J1bGU5IiwiX3N1cGVyMTAiLCJOdWxsYWJsZSIsIl9SdWxlMTAiLCJfc3VwZXIxMSIsIlN0cmluZyIsIl9SdWxlMTEiLCJfU3RyaW5nIiwiX3N1cGVyMTIiLCJfcmVzcG9uc2UiLCJyZXNwb25zZSIsIm1hdGNoIiwiVW5pcXVlQXJyYXkiLCJSdWxlcyIsIl9hcnJGaWVsZHNJbmRleCIsIldlYWtNYXAiLCJfY2hlY2tlZEZpZWxkcyIsIl9maWVsZE5hbWVzIiwiX3ZhbHVlTGlzdCIsIl9ydWxlTGlzdCIsIl9tZXNzYWdlTGlzdCIsIl9lcnJvcnMiLCJfdmFsaWRhdGVkIiwiX2ZhaWxlZCIsIl92YWxpZGF0aW9uRG9uZSIsIl9ydW5WYWxpZGF0aW9uIiwiV2Vha1NldCIsIl92YWxpZGF0ZUZpZWxkIiwiX2lzRmllbGRBcnJheSIsIlZhbGlkYXRvciIsInZhbHVlcyIsInJ1bGVzIiwiX2NsYXNzUHJpdmF0ZU1ldGhvZEluaXRTcGVjIiwiZmFpbHMiLCJfY2xhc3NQcml2YXRlTWV0aG9kR2V0IiwiX3J1blZhbGlkYXRpb24yIiwiZXJyb3JzIiwiaW52YWxpZEZpZWxkcyIsInZhbGlkRmllbGRzIiwiX2NsYXNzIiwiX3RoaXMiLCJfbG9vcCIsImsiLCJfT2JqZWN0JGtleXMiLCJfaSIsImluZGV4IiwiX2ZldGNoUnVsZXMiLCJfZmV0Y2hNZXNzYWdlcyIsIl92YWxpZGF0ZUZpZWxkMiIsInNwbGljZSIsImluZGV4T2YiLCJydWxlSW5kZXgiLCJmb3JFYWNoIiwidiIsInJ1bGUiLCJwdXNoIiwib2JqIiwiaXNBcnJheUNvbnRhaW5lciIsInN1YnN0ciIsImxhc3RJbmRleE9mIiwiYWRkaXRpb25hbFJ1bGVzIiwiYWRkaXRpb25hbE1lc3NhZ2VzIiwiaXNBcnJheSIsImNsb3N1cmVJbmRleCIsInZhbGlkYXRpb25SZXN1bHQiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwib2dSdWxlIiwicnVsZVR5cGUiLCJzcGxpY2VkUnVsZSIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImVyciIsImYiLCJydWxlTmFtZSIsImN1c3RvbVJ1bGUiLCJjb25zb2xlIiwid2FybiIsInNvcnQiLCJ0YXJnZXRLIiwidGFyZ2V0ViIsIl9pc0ZpZWxkQXJyYXkyIiwidmFsaWRhdGlvbiIsInJhbmdlIiwiZml4ZWQiLCJwcm9wIiwiZmluZCIsInJlbW92ZUNsYXNzIiwiX29iaiR2YWwiLCJfbmV3TWluJG1hdGNoJGxlbmd0aCIsIl9uZXdNaW4kbWF0Y2giLCJ0YXJnZXQiLCJuZXdNaW4iLCJfb2JqJHZhbDIiLCJfbmV3TWF4JG1hdGNoJGxlbmd0aCIsIl9uZXdNYXgkbWF0Y2giLCJuZXdNYXgiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInVzZVJhbmdlIiwiY2xvc2VzdCIsImVhY2giLCJyZXNldCIsImdzdHIiLCJhbmltYXRlVGV4dCIsImJ0biIsImNvbGxhcHNlciIsIm90aGVycyIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJzZXRUaW1lb3V0IiwiY29sbGFwc2UiLCJmb3JtIiwibm90IiwidmFsaWRzIiwiaW52YWxpZHMiLCJzZXJpYWxpemVGb3JtSlNPTiIsInZhcmlhYmxlUnVsZSIsIm1vZFZSdWxlcyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsIl92YXJpYWJsZVJ1bGUiLCJ0YXJnZXRLZXkiLCJyZXBsYWNlIiwidmFsaWRhdG9yIiwidmFsaWRhdGlvbk1zZ0ZpZWxkcyIsImNoYXJzIiwicmVnZXgiLCJ1c2VfcmFuZ2UiLCJyYW5nZV9taW4iLCJyYW5nZV9tYXgiLCJuZXdTdHIiLCJSYW5kRXhwIiwiZ2VuIiwicmVzdG9yZUFwcGVuZFRhcmdldCIsInJlc3RvcmUiLCJjb250YWluZXIiLCJfY29udGFpbmVyJHRleHRDb250ZW4iLCJiYXNlSW50ZXJ2YWwiLCJpc1ZhbmlsbGEiLCJ0ZXh0Q29udGVudCIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwib2xkU3RyIiwib2xkSW50ZXJ2YWwiLCJuZXdJbnRlcnZhbCIsInRpbWVycyIsInNraXBUZXh0QW5pbWF0aW9uIiwicG9wIiwiY2xlYXJUaW1lb3V0IiwiX2xvb3AyIiwiX2kyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9mZiJdLCJzb3VyY2VSb290IjoiIn0=
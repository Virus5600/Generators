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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
  // PRIVATE VARIABLES

  /**
   * Container for the name of the field that will be tested
   */

  /**
   * Container for the value that will be tested
   */

  /**
   * Container for the validator values that will be used against the value provided
   */

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
    _defineProperty(this, "_message", void 0);
    _defineProperty(this, "_valid", false);
    _defineProperty(this, "_field", void 0);
    _defineProperty(this, "_value", void 0);
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
   * A container for all array fields passed to this validator. Values contained in here
   * are formatted to be a key-value pair.
   */

  /**
   * A container for all the fields that are done being validated.
   */

  /**
   * A container for all the new field names
   */

  // Private variables
  /**
   * A private global variable container for all the values passed to this.
   */

  /**
   * A private global variable container for all the rules passed to this.
   */

  /**
   * A private global variable container for all the messages passed to this.
   */

  /**
   * A private global variable container for the `MessageBag` instance.
   */

  /**
   * A private global variable container, containing all valid values.
   */

  /**
   * A private global variable container, identifying if this validator's validation has failed.
   */

  /**
   * A private global variable container that determines if the validation has been run already.
   */

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
    _classPrivateFieldInitSpec(this, _arrFieldsIndex, {
      writable: true,
      value: {}
    });
    _classPrivateFieldInitSpec(this, _checkedFields, {
      writable: true,
      value: []
    });
    _classPrivateFieldInitSpec(this, _fieldNames, {
      writable: true,
      value: []
    });
    _classPrivateFieldInitSpec(this, _valueList, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _ruleList, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _messageList, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _errors, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _validated, {
      writable: true,
      value: {}
    });
    _classPrivateFieldInitSpec(this, _failed, {
      writable: true,
      value: false
    });
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
function _runValidation2() {
  var _this = this;
  var _loop = function _loop() {
    var k = _Object$keys[_i];
    // Identify their field name and values
    var field = k;
    var index = 0;
    var runOtherValidation = false;

    // Fetch rules and messages
    var rules = _classStaticPrivateMethodGet(Validator, Validator, _fetchRules).call(Validator, field, _classPrivateFieldGet(_this, _ruleList), index);
    var messages = _classStaticPrivateMethodGet(Validator, Validator, _fetchMessages).call(Validator, field, _classPrivateFieldGet(_this, _messageList), index);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxDQUFDLDhFQUFvQyxDQUFDOztBQUU3QztBQUNBQSxtQkFBTyxDQUFDLDJEQUFZLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dlbmVyYXRvcnMvLi9zcmMvanMvdXRpbC9jb3B5LXRvLWNsaXBib2FyZC5qcyIsIndlYnBhY2s6Ly9nZW5lcmF0b3JzLy4vc3JjL2pzL3V0aWwvc3dhbC1mbGFzaC9zd2FsLWZsYXNoLm1vZC5qcyIsIndlYnBhY2s6Ly9nZW5lcmF0b3JzLy4vc3JjL2pzL3V0aWwvdW5pcXVlLWFycmF5L3VuaXF1ZS1hcnJheS5tb2QuanMiLCJ3ZWJwYWNrOi8vZ2VuZXJhdG9ycy8uL3NyYy9qcy91dGlsL3ZhbGlkYXRvci9NZXNzYWdlQmFnLmpzIiwid2VicGFjazovL2dlbmVyYXRvcnMvLi9zcmMvanMvdXRpbC92YWxpZGF0b3IvUnVsZXMuanMiLCJ3ZWJwYWNrOi8vZ2VuZXJhdG9ycy8uL3NyYy9qcy91dGlsL3ZhbGlkYXRvci9WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vZ2VuZXJhdG9ycy8uL3NyYy9tb2R1bGVzL3N0cmluZy1nZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ2VuZXJhdG9ycy8uL25vZGVfbW9kdWxlcy9kcmFuZ2UvbGliL2luZGV4LmpzIiwid2VicGFjazovL2dlbmVyYXRvcnMvLi9ub2RlX21vZHVsZXMvcmFuZGV4cC9saWIvcmFuZGV4cC5qcyIsIndlYnBhY2s6Ly9nZW5lcmF0b3JzLy4vbm9kZV9tb2R1bGVzL3JldC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ2VuZXJhdG9ycy8uL25vZGVfbW9kdWxlcy9yZXQvbGliL3Bvc2l0aW9ucy5qcyIsIndlYnBhY2s6Ly9nZW5lcmF0b3JzLy4vbm9kZV9tb2R1bGVzL3JldC9saWIvc2V0cy5qcyIsIndlYnBhY2s6Ly9nZW5lcmF0b3JzLy4vbm9kZV9tb2R1bGVzL3JldC9saWIvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vZ2VuZXJhdG9ycy8uL25vZGVfbW9kdWxlcy9yZXQvbGliL3V0aWwuanMiLCJ3ZWJwYWNrOi8vZ2VuZXJhdG9ycy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9kaXN0L3N3ZWV0YWxlcnQyLm1pbi5qcyIsIndlYnBhY2s6Ly9nZW5lcmF0b3JzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dlbmVyYXRvcnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dlbmVyYXRvcnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nZW5lcmF0b3JzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2VuZXJhdG9ycy8uL3NyYy9tb2R1bGVzL3N0cmluZy1nZW5lcmF0b3Ivc2NyaXB0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpZiAoIXdpbmRvdy5Td2FsKVxyXG5cdHdpbmRvdy5Td2FsID0gcmVxdWlyZShcIm5vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9kaXN0L3N3ZWV0YWxlcnQyLm1pbi5qc1wiKTtcclxuXHJcbiQoKCkgPT4ge1xyXG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGBbZGF0YS1jb3B5LXRhcmdldF0sIFtkYXRhLWNvcHktdGV4dF0sIFtkYXRhLWNvcHldYCwgKGUpID0+IHtcclxuXHRcdGxldCBlbGVtZW50ID0gZS5jdXJyZW50VGFyZ2V0O1xyXG5cclxuXHRcdGxldCB0ZW1wID0gJChcIjxpbnB1dD5cIik7XHJcblx0XHQkKFwiYm9keVwiKS5hcHBlbmQodGVtcCk7XHJcblxyXG5cdFx0bGV0IHRleHRUb0NvcHk7XHJcblx0XHRpZiAodHlwZW9mICQoZWxlbWVudCkuYXR0cignZGF0YS1jb3B5LXRhcmdldCcpICE9ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdGlmICgkKCQoZWxlbWVudCkuYXR0cignZGF0YS1jb3B5LXRhcmdldCcpKS52YWwoKS5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHRleHRUb0NvcHkgPSAkKCQoZWxlbWVudCkuYXR0cignZGF0YS1jb3B5LXRhcmdldCcpKS52YWwoKTtcclxuXHRcdFx0ZWxzZSBpZiAoJCgkKGVsZW1lbnQpLmF0dHIoJ2RhdGEtY29weS10YXJnZXQnKSkudGV4dCgpLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0dGV4dFRvQ29weSA9ICQoJChlbGVtZW50KS5hdHRyKCdkYXRhLWNvcHktdGFyZ2V0JykpLnRleHQoKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHR5cGVvZiAkKGVsZW1lbnQpLmF0dHIoJ2RhdGEtY29weS10ZXh0JykgIT0gJ3VuZGVmaW5lZCcpXHJcblx0XHRcdHRleHRUb0NvcHkgPSAkKGVsZW1lbnQpLmF0dHIoJ2RhdGEtY29weS10ZXh0Jyk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRleHRUb0NvcHkgPSAkKGVsZW1lbnQpLnZhbCgpO1xyXG5cclxuXHRcdHRlbXAudmFsKHRleHRUb0NvcHkpLnRyaWdnZXIoJ3NlbGVjdCcpO1xyXG5cdFx0ZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xyXG5cdFx0dGVtcC5yZW1vdmUoKTtcclxuXHJcblx0XHRTd2FsLmZpcmUoe1xyXG5cdFx0XHR0aXRsZTogYFRleHQgY29waWVkYCxcclxuXHRcdFx0cG9zaXRpb246IGB0b3AtcmlnaHRgLFxyXG5cdFx0XHRzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcblx0XHRcdHRvYXN0OiB0cnVlLFxyXG5cdFx0XHR0aW1lcjogMzc1MCxcclxuXHRcdFx0YmFja2dyb3VuZDogYCMyOGE3NDVgLFxyXG5cdFx0XHRjdXN0b21DbGFzczoge1xyXG5cdFx0XHRcdHRpdGxlOiBgdGV4dC13aGl0ZWAsXHJcblx0XHRcdFx0cG9wdXA6IGBweC0wYFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR3aWR0aDogMTUwLFxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTd2FsRmxhc2gge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0aWYgKHRoaXMgaW5zdGFuY2VvZiBTd2FsRmxhc2gpXHJcblx0XHRcdHRocm93IEVycm9yKCdTd2FsRmxhc2ggaXMgYSBzdGF0aWMgY2xhc3MgYW5kIGNhbm5vdCBiZSBpbnN0YW50aWF0ZWQnKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBlcnJvcih0aXRsZSwgbXNnID0gdW5kZWZpbmVkLCBoYXNfaWNvbiA9IHVuZGVmaW5lZCwgdG9hc3QgPSB1bmRlZmluZWQsIHBvcyA9IHVuZGVmaW5lZCwgaGFzX3RpbWVyID0gdW5kZWZpbmVkLCBkdXJhdGlvbiA9IHVuZGVmaW5lZCkge1xyXG5cdFx0U3dhbEZsYXNoLiNzZW5kRXZlbnQoYGZsYXNoX2Vycm9yYCwge1xyXG5cdFx0XHRmbGFzaF9lcnJvcjogdGl0bGUsXHJcblx0XHRcdG1lc3NhZ2U6IG1zZyxcclxuXHRcdFx0aGFzX2ljb246IGhhc19pY29uLFxyXG5cdFx0XHRpc190b2FzdDogdG9hc3QsXHJcblx0XHRcdHBvc2l0aW9uOiBwb3MsXHJcblx0XHRcdGhhc190aW1lcjogaGFzX3RpbWVyLFxyXG5cdFx0XHRkdXJhdGlvbjogZHVyYXRpb25cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGluZm8odGl0bGUsIG1zZyA9IHVuZGVmaW5lZCwgaGFzX2ljb24gPSB1bmRlZmluZWQsIHRvYXN0ID0gdW5kZWZpbmVkLCBwb3MgPSB1bmRlZmluZWQsIGhhc190aW1lciA9IHVuZGVmaW5lZCwgZHVyYXRpb24gPSB1bmRlZmluZWQpIHtcclxuXHRcdFN3YWxGbGFzaC4jc2VuZEV2ZW50KGBmbGFzaF9pbmZvYCwge1xyXG5cdFx0XHRmbGFzaF9pbmZvOiB0aXRsZSxcclxuXHRcdFx0bWVzc2FnZTogbXNnLFxyXG5cdFx0XHRoYXNfaWNvbjogaGFzX2ljb24sXHJcblx0XHRcdGlzX3RvYXN0OiB0b2FzdCxcclxuXHRcdFx0cG9zaXRpb246IHBvcyxcclxuXHRcdFx0aGFzX3RpbWVyOiBoYXNfdGltZXIsXHJcblx0XHRcdGR1cmF0aW9uOiBkdXJhdGlvblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgc3VjY2Vzcyh0aXRsZSwgbXNnID0gdW5kZWZpbmVkLCBoYXNfaWNvbiA9IHVuZGVmaW5lZCwgdG9hc3QgPSB1bmRlZmluZWQsIHBvcyA9IHVuZGVmaW5lZCwgaGFzX3RpbWVyID0gdW5kZWZpbmVkLCBkdXJhdGlvbiA9IHVuZGVmaW5lZCkge1xyXG5cdFx0U3dhbEZsYXNoLiNzZW5kRXZlbnQoYGZsYXNoX3N1Y2Nlc3NgLCB7XHJcblx0XHRcdGZsYXNoX3N1Y2Nlc3M6IHRpdGxlLFxyXG5cdFx0XHRtZXNzYWdlOiBtc2csXHJcblx0XHRcdGhhc19pY29uOiBoYXNfaWNvbixcclxuXHRcdFx0aXNfdG9hc3Q6IHRvYXN0LFxyXG5cdFx0XHRwb3NpdGlvbjogcG9zLFxyXG5cdFx0XHRoYXNfdGltZXI6IGhhc190aW1lcixcclxuXHRcdFx0ZHVyYXRpb246IGR1cmF0aW9uXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyAjc2VuZEV2ZW50KHR5cGUsIHBhcmFtcykge1xyXG5cdFx0d2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KHR5cGUsIHtcclxuXHRcdFx0ZGV0YWlsOiBwYXJhbXNcclxuXHRcdH0pKTtcclxuXHR9XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdmbGFzaF9lcnJvcicsIChlKSA9PiB7XHJcblx0bGV0IGZsYXNoID0gZS5kZXRhaWw7XHJcblx0bGV0IG9wdGlvbnMgPSB7XHJcblx0XHR0aXRsZTogYCR7Zmxhc2guZmxhc2hfZXJyb3J9YCxcclxuXHRcdHBvc2l0aW9uOiBgdG9wYCxcclxuXHRcdHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuXHRcdHRvYXN0OiB0cnVlLFxyXG5cdFx0dGltZXI6IDEwMDAwLFxyXG5cdFx0YmFja2dyb3VuZDogYCNkYzM1NDVgLFxyXG5cdFx0Y3VzdG9tQ2xhc3M6IHtcclxuXHRcdFx0dGl0bGU6IGB0ZXh0LXdoaXRlYCxcclxuXHRcdFx0Y29udGVudDogYHRleHQtd2hpdGVgLFxyXG5cdFx0XHRwb3B1cDogYHB4LTNgXHJcblx0XHR9LFxyXG5cdFx0c2hvd0NsYXNzOiB7XHJcblx0XHRcdHBvcHVwOiBgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYm91bmNlSW4gYW5pbWF0ZV9fZmFzdGVyYFxyXG5cdFx0fSxcclxuXHRcdGhpZGVDbGFzczoge1xyXG5cdFx0XHRwb3B1cDogYGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVPdXRVcCBhbmltYXRlX19mYXN0ZXJgXHJcblx0XHR9LFxyXG5cdH1cclxuXHJcblx0U3dhbC5maXJlKF9fc2V0U3dhbEZsYXNoT3B0aW9ucyhvcHRpb25zLCBmbGFzaCwgJ2Vycm9yJykpO1xyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdmbGFzaF9pbmZvJywgKGUpID0+IHtcclxuXHRsZXQgZmxhc2ggPSBlLmRldGFpbDtcclxuXHRsZXQgb3B0aW9ucyA9IHtcclxuXHRcdHRpdGxlOiBgJHtmbGFzaC5mbGFzaF9pbmZvfWAsXHJcblx0XHRwb3NpdGlvbjogYHRvcGAsXHJcblx0XHRzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcblx0XHR0b2FzdDogdHJ1ZSxcclxuXHRcdHRpbWVyOiAxMDAwMCxcclxuXHRcdGJhY2tncm91bmQ6IGAjMTdhMmI4YCxcclxuXHRcdGN1c3RvbUNsYXNzOiB7XHJcblx0XHRcdHRpdGxlOiBgdGV4dC13aGl0ZWAsXHJcblx0XHRcdGNvbnRlbnQ6IGB0ZXh0LXdoaXRlYCxcclxuXHRcdFx0cG9wdXA6IGBweC0zYFxyXG5cdFx0fSxcclxuXHRcdHNob3dDbGFzczoge1xyXG5cdFx0XHRwb3B1cDogYGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JvdW5jZUluIGFuaW1hdGVfX2Zhc3RlcmBcclxuXHRcdH0sXHJcblx0XHRoaWRlQ2xhc3M6IHtcclxuXHRcdFx0cG9wdXA6IGBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlT3V0VXAgYW5pbWF0ZV9fZmFzdGVyYFxyXG5cdFx0fSxcclxuXHR9XHJcblxyXG5cdFN3YWwuZmlyZShfX3NldFN3YWxGbGFzaE9wdGlvbnMob3B0aW9ucywgZmxhc2gsICdpbmZvJykpO1xyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdmbGFzaF9zdWNjZXNzJywgKGUpID0+IHtcclxuXHRsZXQgZmxhc2ggPSBlLmRldGFpbDtcclxuXHRsZXQgb3B0aW9ucyA9IHtcclxuXHRcdHRpdGxlOiBgJHtmbGFzaC5mbGFzaF9zdWNjZXNzfWAsXHJcblx0XHRwb3NpdGlvbjogYHRvcGAsXHJcblx0XHRzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcblx0XHR0b2FzdDogdHJ1ZSxcclxuXHRcdHRpbWVyOiAxMDAwMCxcclxuXHRcdGJhY2tncm91bmQ6IGAjMjhhNzQ1YCxcclxuXHRcdGN1c3RvbUNsYXNzOiB7XHJcblx0XHRcdHRpdGxlOiBgdGV4dC13aGl0ZWAsXHJcblx0XHRcdGNvbnRlbnQ6IGB0ZXh0LXdoaXRlYCxcclxuXHRcdFx0cG9wdXA6IGBweC0zYFxyXG5cdFx0fSxcclxuXHRcdHNob3dDbGFzczoge1xyXG5cdFx0XHRwb3B1cDogYGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JvdW5jZUluIGFuaW1hdGVfX2Zhc3RlcmBcclxuXHRcdH0sXHJcblx0XHRoaWRlQ2xhc3M6IHtcclxuXHRcdFx0cG9wdXA6IGBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlT3V0VXAgYW5pbWF0ZV9fZmFzdGVyYFxyXG5cdFx0fSxcclxuXHR9XHJcblxyXG5cdGlmIChTd2FsKSB7XHJcblx0XHRTd2FsLmZpcmUoX19zZXRTd2FsRmxhc2hPcHRpb25zKG9wdGlvbnMsIGZsYXNoLCAnc3VjY2VzcycpKTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHR0aHJvdyBFcnJvcignU3dlZXRhbGVydDIgbm90IGluc3RhbnRpYXRlZC4gUGxlYXNlIGluY2x1ZGUgdGhlIHNhaWQgbGlicmFyeSAoaHR0cHM6Ly9zd2VldGFsZXJ0Mi5naXRodWIuaW8vKS4gQ3VycmVudGx5IHRlc3RpbmcgZm9yIGBTd2FsYCBrZXl3b3JkLicpO1xyXG5cdH1cclxufSk7XHJcblxyXG5jb25zdCBfX3NldFN3YWxGbGFzaE9wdGlvbnMgPSAob3B0aW9ucywgZmxhc2gsIHR5cGUpID0+IHtcclxuXHQvLyBjb25zb2xlLmxvZyhmbGFzaCk7XHJcblxyXG5cdGlmIChmbGFzaC5oYXNfaWNvbiAhPSB1bmRlZmluZWQpXHJcblx0XHRvcHRpb25zW1wiaWNvblwiXSA9IGAke3R5cGV9YDtcclxuXHJcblx0aWYgKGZsYXNoLm1lc3NhZ2UgIT0gdW5kZWZpbmVkKVxyXG5cdFx0b3B0aW9uc1tcImh0bWxcIl0gPSBgJHtmbGFzaC5tZXNzYWdlfWA7XHJcblxyXG5cdGlmIChmbGFzaC5wb3NpdGlvbiAhPSB1bmRlZmluZWQpXHJcblx0IFx0b3B0aW9uc1tcInBvc2l0aW9uXCJdID0gZmxhc2gucG9zaXRpb247XHJcblxyXG5cdGlmIChmbGFzaC5pc190b2FzdCAhPSB1bmRlZmluZWQpXHJcblx0XHRvcHRpb25zW1widG9hc3RcIl0gPSBmbGFzaC5pc190b2FzdDtcclxuXHJcblx0aWYgKGZsYXNoLmhhc190aW1lciAhPSB1bmRlZmluZWQpXHJcblx0XHRpZiAoZmxhc2guaGFzX3RpbWVyKVxyXG5cdFx0XHRvcHRpb25zWyd0aW1lciddID0gZmxhc2guZHVyYXRpb24gIT0gdW5kZWZpbmVkID8gZmxhc2guZHVyYXRpb24gOiAxMDAwMDtcclxuXHRcdGVsc2VcclxuXHRcdFx0ZGVsZXRlIG9wdGlvbnNbJ2R1cmF0aW9uJ107XHJcblxyXG5cdHJldHVybiBvcHRpb25zO1xyXG59XHJcbiIsImZ1bmN0aW9uIGluaXRDaGFuZ2UoKSB7XHJcblx0QXJyYXkucHJvdG90eXBlLnVuaXEgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBzZWVuID0ge307XHJcblx0XHR2YXIgb3V0ID0gW107XHJcblx0XHR2YXIgaiA9IDA7XHJcblx0XHRcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdCB2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdCBpZihzZWVuW2l0ZW1dICE9PSAxKSB7XHJcblx0XHRcdFx0ICAgc2VlbltpdGVtXSA9IDE7XHJcblx0XHRcdFx0ICAgb3V0W2orK10gPSBpdGVtO1xyXG5cdFx0XHQgfVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gb3V0O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdENoYW5nZTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlQmFnIHtcclxuXHQjbWVzc2FnZTtcclxuXHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyBhbiBpbnN0YW5jZSBvZiBgTWVzc2FnZUJhZ2AuXHJcblx0ICpcclxuXHQgKiA8Yj5FeGFtcGxlIEEuMTo8L2I+XHJcblx0ICogYGBgamF2YXNjcmlwdFxyXG5cdCAqIG1lc3NhZ2VzID0ge1xyXG5cdCAqIFx0bmFtZToge1xyXG5cdCAqIFx0XHRyZXF1aXJlZDogYFRoZSBuYW1lIGZpZWxkIGlzIHJlcXVpcmVkLmBcclxuXHQgKiBcdH1cclxuXHQgKiB9XHJcblx0ICogYGBgXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge09iamVjdH1cdG1lc3NhZ2VzXHRBbiBpbnN0YW5jZSBvZiBKU09OIG9iamVjdCwgd2hpY2ggaG9sZHMgYSBmaWVsZC1rZXktdmFsdWUgaW5zdGFuY2UuIEFuIGV4YW1wbGUgb2YgdGhpcyBpcyB0aGUgRXhhbXBsZSBBLjFcclxuXHQgKlxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2VzID0gT2JqZWN0LmNyZWF0ZShudWxsKSkge1xyXG5cdFx0dGhpcy4jbWVzc2FnZSA9IG1lc3NhZ2VzO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcyBhIG5ldyBtZXNzYWdlIHRvIHRoZSBtZXNzYWdlIGJhZy4gSWYgYW4gZXhhY3Qga2V5IGFscmVhZHkgZXhpc3RzLCBpdCB3aWxsIHJlcGxhY2UgdGhlIG9sZGVyIHZhbHVlIHdpdGggdGhlIG5ld1xyXG5cdCAqIHZhbHVlIHByb3ZpZGVkLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9XHRrZXlcdFx0VGhlIGtleSBpZGVudGlmaWVyIGZvciB0aGUgbWVzc2FnZVxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfVx0bWVzc2FnZVx0VGhlIG1lc3NhZ2UgdGhhdCB3aWxsIGJlIHBsYWNlZCBpbiB0aGUgbWVzc2FnZSBiYWdcclxuXHQgKlxyXG5cdCAqIEByZXR1cm4ge01lc3NhZ2VCYWd9XHRcdFRoZSBjdXJyZW50IGluc3RhbmNlIG9mIGBNZXNzYWdlQmFnYFxyXG5cdCAqL1xyXG5cdGFkZChrZXksIG1lc3NhZ2UpIHtcclxuXHRcdGtleSA9IGtleS5zcGxpdChcIi5cIik7XHJcblx0XHRsZXQgZmllbGQgPSBrZXlbMF07XHJcblx0XHRrZXkgPSBrZXlbMV07XHJcblxyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLiNtZXNzYWdlW2ZpZWxkXSA9PSAndW5kZWZpbmVkJylcclxuXHRcdFx0dGhpcy4jbWVzc2FnZVtmaWVsZF0gPSB7fTtcclxuXHJcblx0XHR0aGlzLiNtZXNzYWdlW2ZpZWxkXVtrZXldID0gbWVzc2FnZTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIE1lcmdlIGEgbmV3IGFycmF5IG9mIG1lc3NhZ2VzIGludG8gdGhlIG1lc3NhZ2UgYmFnLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtPYmplY3R8TWVzc2FnZUJhZ31cdG1lc3NhZ2VzXHRBIEpTT04gb2JqZWN0IG9yIGFuIGluc3RhbmNlIG9mIGBNZXNzYWdlQmFnYFxyXG5cdCAqXHJcblx0ICogQHJldHVybiB7TWVzc2FnZUJhZ31cdFRoZSBjdXJyZW50IGluc3RhbmNlIG9mIGBNZXNzYWdlQmFnYFxyXG5cdCAqL1xyXG5cdG1lcmdlKG1lc3NhZ2VzKSB7XHJcblx0XHRsZXQgdHlwZSA9IG1lc3NhZ2VzLmNvbnN0cnVjdG9yLm5hbWU7XHJcblxyXG5cdFx0aWYgKHR5cGUgPT09ICdPYmplY3QnKSB7XHJcblx0XHRcdHRoaXMuI21lc3NhZ2UgPSBPYmplY3QuYXNzaWduKHRoaXMuI21lc3NhZ2UsIG1lc3NhZ2VzKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHR5cGUgPT09ICdNZXNzYWdlQmFnJykge1xyXG5cdFx0XHR0aGlzLiNtZXNzYWdlID0gT2JqZWN0LmFzc2lnbih0aGlzLiNtZXNzYWdlLCBtZXNzYWdlcy5nZXQoKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBEZXRlcm1pbmUgaWYgbWVzc2FnZXMgZXhpc3QgZm9yIHRoZSBnaXZlbiBmaWVsZC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSAge1N0cmluZ30gIGZpZWxkXHRUaGUgbmFtZSBvZiB0aGUgZmllbGQgdGhhdCB3aWxsIGJlIHRlc3RlZFxyXG5cdCAqIEByZXR1cm4ge0Jvb2xlYW59XHRcdEEgYm9vbGVhbiB2YWx1ZTsgZWl0aGVyIGEgYHRydWVgIGlmIHRoZSBmaWVsZCBleGlzdHMsIG9yIGBmYWxzZWAgaWYgaXQgZG9lcyBub3RcclxuXHQgKi9cclxuXHRoYXMoZmllbGQpIHtcclxuXHRcdHJldHVybiB0aGlzLmZpZWxkcygpLmluY2x1ZGVzKGtleSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgdGhlIGZpZWxkcyBwcmVzZW50IGluIHRoZSBtZXNzYWdlIGJhZy5cclxuXHQgKlxyXG5cdCAqIEByZXR1cm4ge0FycmF5fVx0XHRBbiBhcnJheSBvZiB0aGUgZmllbGRzIGluY2x1ZGVkIGluIHRoZSBjdXJyZW50IGluc3RhbmNlIG9mIGBNZXNzYWdlQmFnYFxyXG5cdCAqL1xyXG5cdGZpZWxkcygpIHtcclxuXHRcdHJldHVybiBPYmplY3Qua2V5cyh0aGlzLiNtZXNzYWdlKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCB0aGUgZmlyc3QgbWVzc2FnZSBmcm9tIHRoZSBtZXNzYWdlIGJhZyBmb3IgYSBnaXZlbiBmaWVsZC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSAge1N0cmluZ31cdGZpZWxkXHRUaGUgbmFtZSBvZiB0aGUgZmllbGQgdGhhdCB0aGUgbWVzc2FnZSB3aWxsIGJlIGZldGNoZWQgdXBvblxyXG5cdCAqIEByZXR1cm4ge1N0cmluZ31cdFx0VGhlIGZpcnN0IG1lc3NhZ2UgY29udGFpbmVkIHdpdGhpbiB0aGUgc2FpZCBmaWVsZC4gUmV0dXJucyBhbiBgdW5kZWZpbmVkYCB3aGVuIHRoZSBmaWVsZCBkb2VzIG5vdCBleGlzdHNcclxuXHQgKi9cclxuXHRmaXJzdChmaWVsZCkge1xyXG5cdFx0aWYgKHR5cGVvZiBmaWVsZCA9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRmaWVsZCA9IE9iamVjdC5rZXlzKHRoaXMuI21lc3NhZ2UpO1xyXG5cdFx0XHRsZXQga2V5ID0gT2JqZWN0LmtleXModGhpcy4jbWVzc2FnZVtmaWVsZF0pO1xyXG5cdFx0XHRyZXR1cm4gdGhpcy4jbWVzc2FnZVtmaWVsZF1ba2V5WzBdXTtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQga2V5ID0gT2JqZWN0LmtleXModGhpcy4jbWVzc2FnZVtmaWVsZF0pO1xyXG5cdFx0cmV0dXJuIHRoaXMuI21lc3NhZ2VbZmllbGRdW2tleVswXV07XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgYWxsIG9mIHRoZSBtZXNzYWdlcyBmcm9tIHRoZSBtZXNzYWdlIGJhZyBmb3IgYSBnaXZlbiBmaWVsZC4gSWYgbm8gdmFsdWUgb3IgYSBgbnVsbGAgaXMgcHJvdmlkZWQgdG8gdGhlIGZpZWxkLCBpdCByZXR1cm5zIGFsbCB0aGUgbWVzc2FnZXMgY29udGFpbmVkIHdpdGhpbiB0aGUgY3VycmVudCBpbnN0YW5jZSBvZiBgTWVzc2FnZUJhZ2BcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSAge1N0cmluZ31cdGZpZWxkXHRUaGUgbmFtZSBvZiB0aGUgZmllbGQgdGhhdCB0aGUgbWVzc2FnZSB3aWxsIGJlIGZldGNoZWQgdXBvblxyXG5cdCAqIEByZXR1cm4ge09iamVjdH1cdFx0QSBKU09OIG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSBrZXktdmFsdWUgcGFpciBmb3IgYWxsIHRoZSBtZXNzYWdlIG9mIHRoZSBmaWVsZC5cclxuXHQgKi9cclxuXHRnZXQoZmllbGQgPSBudWxsKSB7XHJcblx0XHRyZXR1cm4gZmllbGQgPT0gbnVsbCA/IHRoaXMuI21lc3NhZ2UgOiB0aGlzLiNtZXNzYWdlW2ZpZWxkXTtcclxuXHR9XHJcbn1cclxuIiwiY2xhc3MgUnVsZSB7XHJcblx0Ly8gUFJJVkFURSBWQVJJQUJMRVNcclxuXHRfbWVzc2FnZTtcclxuXHRfdmFsaWQgPSBmYWxzZTtcclxuXHRcclxuXHQvKipcclxuXHQgKiBDb250YWluZXIgZm9yIHRoZSBuYW1lIG9mIHRoZSBmaWVsZCB0aGF0IHdpbGwgYmUgdGVzdGVkXHJcblx0ICovXHJcblx0X2ZpZWxkO1xyXG5cdC8qKlxyXG5cdCAqIENvbnRhaW5lciBmb3IgdGhlIHZhbHVlIHRoYXQgd2lsbCBiZSB0ZXN0ZWRcclxuXHQgKi9cclxuXHRfdmFsdWU7XHJcblx0LyoqXHJcblx0ICogQ29udGFpbmVyIGZvciB0aGUgdmFsaWRhdG9yIHZhbHVlcyB0aGF0IHdpbGwgYmUgdXNlZCBhZ2FpbnN0IHRoZSB2YWx1ZSBwcm92aWRlZFxyXG5cdCAqL1xyXG5cdF92YWxpZGF0b3JWYWx1ZXM7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoZSBwYXJlbnQgY29uc3RydWN0b3IsIHdoaWNoIGNyZWF0ZXMgdGhlIGNvbW1vbiBSdWxlIGluc3RhbmNlIGZvciBhbGwgdGhlIHJ1bGVzLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfVx0ZmllbGRcdFx0XHRUaGUgbmFtZSBvZiB0aGUgZmllbGQgYmVpbmcgdGVzdGVkXHJcblx0ICogQHBhcmFtIHtBbnl9IFx0dmFsdWVcdFx0XHRUaGUgdmFsdWUgdG8gdmFsaWRhdGVcclxuXHQgKiBAcGFyYW0ge0FycmF5fVx0dmFsaWRhdG9yVmFsdWVzXHRBbiBhcnJheSBvZiB2YWx1ZXMgdGhhdCB0aGUgdmFsaWRhdG9yIGhhcy4gT25seSByZXRyaWV2ZXMgdGhlIGZpcnN0IHZhbHVlIGR1ZSB0byBob3cgdGhlIHJ1bGUgd29ya3NcclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVx0XHRcdFRoZSBtZXNzYWdlIHRvIHVzZSB3aGVuIHRoZSBydWxlIGZhaWxzXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoZmllbGQsIHZhbHVlLCB2YWxpZGF0b3JWYWx1ZXMgPSBudWxsLCBtZXNzYWdlID0gXCJUaGUgOmF0dHIgZmllbGQgaXMgaW5jb3JyZWN0LlwiKSB7XHJcblx0XHRtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlQWxsKC8oOmF0dHIpL2dpLCBmaWVsZCk7XHJcblx0XHRtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlQWxsKC8oOnZhbCkvZ2ksIHZhbHVlKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5fbWVzc2FnZSA9IG1lc3NhZ2U7XHJcblx0XHR0aGlzLl9maWVsZCA9IGZpZWxkO1xyXG5cdFx0dGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuXHRcdHRoaXMuX3ZhbGlkYXRvclZhbHVlcyA9IHZhbGlkYXRvclZhbHVlcztcclxuXHR9XHJcblxyXG5cdHZhbGlkYXRlKCkge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5pbXBsZW1lbnRlZCBhYnN0cmFjdCBtZXRob2Q6IHZhbGlkYXRlKClcIik7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVxdWlyZWQgZXh0ZW5kcyBSdWxlIHtcclxuXHQvKipcclxuXHQgKiBUZXN0cyB3aGV0aGVyIHRoZSBgdmFsdWVgIHByb3ZpZGVkIGlzIHByZXNlbnQgYW5kIGEgdmFsaWQgdmFsdWUuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9XHRmaWVsZFx0VGhlIG5hbWUgb2YgdGhlIGZpZWxkIGJlaW5nIHRlc3RlZFxyXG5cdCAqIEBwYXJhbSB7QW55fVx0XHR2YWx1ZVx0VGhlIHZhbHVlIHRvIHZhbGlkYXRlXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcdFRoZSBtZXNzYWdlIHRvIHVzZSB3aGVuIHRoZSBydWxlIGZhaWxzXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoZmllbGQsIHZhbHVlLCBtZXNzYWdlID0gXCJUaGUgOmF0dHIgZmllbGQgaXMgcmVxdWlyZWRcIiwgdmFsaWRhdG9yVmFsdWVzID0gbnVsbCkge1xyXG5cdFx0c3VwZXIoZmllbGQsIHZhbHVlLCB2YWxpZGF0b3JWYWx1ZXMgPz8gdW5kZWZpbmVkLCBtZXNzYWdlKTtcclxuXHR9XHJcblxyXG5cdHZhbGlkYXRlKCkge1xyXG5cdFx0aWYgKHRoaXMuX3ZhbHVlICE9ICd1bmRlZmluZWQnICYmIHRoaXMuX3ZhbHVlICE9IG51bGwgJiYgdGhpcy5fdmFsdWUubGVuZ3RoID4gMClcclxuXHRcdFx0dGhpcy5fdmFsaWQgPSB0cnVlO1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHZhbGlkOiB0aGlzLl92YWxpZCxcclxuXHRcdFx0bWVzc2FnZTogdGhpcy5fbWVzc2FnZSxcclxuXHRcdFx0cnVuT3RoZXJWYWxpZGF0aW9uOiB0cnVlXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlcXVpcmVkSWYgZXh0ZW5kcyBSZXF1aXJlZCB7XHJcblx0LyoqXHJcblx0ICogVGVzdHMgd2hldGhlciB0aGUgYHZhbHVlYCBwcm92aWRlZCBpcyBwcmVzZW50IGFuZCBhIHZhbGlkIHZhbHVlIG9ubHkgaWYgdGhlIG90aGVyIGZpZWxkIGhhcyB0aGUgcHJvdmlkZWQgdmFsdWUuIFNraXBzIHRoZSB2YWxpZGF0aW9uIGlmIHRoZSBvdGhlciBmaWVsZCBpc1xyXG5cdCAqIGJsYW5rLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfVx0ZmllbGRcdFx0XHRcdFRoZSBuYW1lIG9mIHRoZSBmaWVsZCBiZWluZyB0ZXN0ZWRcclxuXHQgKiBAcGFyYW0ge0FueX1cdFx0dmFsdWVcdFx0XHRcdFRoZSB2YWx1ZSB0byB2YWxpZGF0ZVxyXG4gXHQgKiBAcGFyYW0ge0FycmF5fVx0dmFsaWRhdG9yVmFsdWVzXHRcdEFuIGFycmF5IG9mIHZhbHVlcyB0aGF0IHRoZSB2YWxpZGF0b3IgaGFzLiBPbmx5IHJldHJpZXZlcyB0aGUgZmlyc3QgdGhyZWUgdmFsdWVzIChvdGhlciBmaWVsZCwgb3RoZXIgZmllbGQncyByZXF1aXJlZCB2YWx1ZSxcclxuIFx0ICogXHRcdFx0XHRcdFx0XHRcdFx0XHRvdGhlciBmaWVsZCdzIHZhbHVlKSBkdWUgdG8gaG93IHRoZSBydWxlIHdvcmtzXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9XHRtZXNzYWdlXHRcdFx0XHRUaGUgbWVzc2FnZSB0byB1c2Ugd2hlbiB0aGUgcnVsZSBmYWlsc1xyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKGZpZWxkLCB2YWx1ZSwgdmFsaWRhdG9yVmFsdWVzLCBtZXNzYWdlID0gXCJUaGUgOmF0dHIgZmllbGQgaXMgcmVxdWlyZWQgc2luY2UgOmF0dHIyIGlzIDp2YWwyXCIpIHtcclxuXHRcdGlmICh0eXBlb2YgdmFsaWRhdG9yVmFsdWVzICE9ICdvYmplY3QnIHx8IHZhbGlkYXRvclZhbHVlcy5jb25zdHJ1Y3Rvci5uYW1lICE9ICdBcnJheScpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihgSW1wcm9wZXIgdmFsaWRhdG9yIHZhbHVlIGZvcm1hdDpcXG5cXHROZWVkcyBhcnJheSwgJHt0eXBlb2YgdmFsaWRhdG9yVmFsdWVzfSBpcyBwYXNzZWRgKTtcclxuXHRcdGVsc2UgaWYgKHZhbGlkYXRvclZhbHVlcy5sZW5ndGggPCAyKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE5vdCBlbm91Z2ggdmFsaWRhdG9yIHZhbHVlIHBhc3NlZDpcXG5cXHROZWVkcyAyLCBvbmx5ICR7dmFsaWRhdG9yVmFsdWVzLmxlbmd0aH0gaXMgcGFzc2VkLmApO1xyXG5cclxuXHRcdG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2VBbGwoLyg6YXR0cjIpL2dpLCB2YWxpZGF0b3JWYWx1ZXNbMF0pO1xyXG5cdFx0bWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZUFsbCgvKDp2YWwyKS9naSwgdmFsaWRhdG9yVmFsdWVzWzFdKTtcclxuXHRcdG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2VBbGwoLyg6dmFsMykvZ2ksIHZhbGlkYXRvclZhbHVlc1syXSk7XHJcblxyXG5cdFx0c3VwZXIoZmllbGQsIHZhbHVlLCBtZXNzYWdlLCB2YWxpZGF0b3JWYWx1ZXMpO1xyXG5cdH1cclxuXHJcblx0dmFsaWRhdGUoKSB7XHJcblx0XHRsZXQgW2ZpZWxkMiwgdmFsMiwgdmFsM10gPSB0aGlzLl92YWxpZGF0b3JWYWx1ZXM7XHJcblxyXG5cdFx0aWYgKHZhbDIgPT0gdmFsMykge1xyXG5cdFx0XHRyZXR1cm4gc3VwZXIudmFsaWRhdGUoKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0aGlzLl92YWxpZCA9IHRydWU7XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHZhbGlkOiB0aGlzLl92YWxpZCxcclxuXHRcdFx0XHRtZXNzYWdlOiB0aGlzLl9tZXNzYWdlLFxyXG5cdFx0XHRcdHJ1bk90aGVyVmFsaWRhdGlvbjogZmFsc2VcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU29tZXRpbWVzIGV4dGVuZHMgUnVsZSB7XHJcblx0LyoqXHJcblx0ICogV29ya3Mgc2ltaWxhciBhcyB0aGUgYFJlcXVpcmVkYCBydWxlIGJ1dCBvbmx5IHdvcmtzIGlmIHRoZSB2YWx1ZSBpcyBwcmVzZW50IChub3QgYHVuZGVmaW5lZGApLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfVx0ZmllbGRcdFRoZSBuYW1lIG9mIHRoZSBmaWVsZCBiZWluZyB0ZXN0ZWRcclxuXHQgKiBAcGFyYW0ge0FueX0gXHR2YWx1ZVx0VGhlIHZhbHVlIHRvIHZhbGlkYXRlXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcdFRoZSBtZXNzYWdlIHRvIHVzZSB3aGVuIHRoZSBydWxlIGZhaWxzXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoZmllbGQsIHZhbHVlLCBtZXNzYWdlID0gXCJUaGUgOmF0dHIgZmllbGQgaXMgcmVxdWlyZWQgdG8gaGF2ZSBhIHZhbHVlLCBvciBsZWF2ZSBpdCBhcyBibGFua1wiKSB7XHJcblx0XHRzdXBlcihmaWVsZCwgdmFsdWUsIHVuZGVmaW5lZCwgbWVzc2FnZSk7XHJcblx0fVxyXG5cclxuXHR2YWxpZGF0ZSgpIHtcclxuXHRcdHRoaXMuX3ZhbGlkID0gdHJ1ZTtcclxuXHRcdGxldCBydW5PdGhlclZhbGlkYXRpb24gPSBmYWxzZTtcclxuXHRcclxuXHRcdGlmICh0eXBlb2YgdGhpcy5fdmFsdWUgIT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0cnVuT3RoZXJWYWxpZGF0aW9uID0gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR2YWxpZDogdGhpcy5fdmFsaWQsXHJcblx0XHRcdG1lc3NhZ2U6IHRoaXMuX21lc3NhZ2UsXHJcblx0XHRcdHJ1bk90aGVyVmFsaWRhdGlvbjogcnVuT3RoZXJWYWxpZGF0aW9uXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJvb2xlYW4gZXh0ZW5kcyBSdWxlIHtcclxuXHQvKipcclxuXHQgKiBUZXN0cyB3aGV0aGVyIHRoZSB2YWx1ZSBpcyBhIGJvb2xlYW4gb3IgY2FuIGJlIGNvbnZlcnRlZCB0byBhIGJvb2xlYW4uXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9XHRmaWVsZFx0VGhlIG5hbWUgb2YgdGhlIGZpZWxkIGJlaW5nIHRlc3RlZFxyXG5cdCAqIEBwYXJhbSB7QW55fSBcdHZhbHVlXHRUaGUgdmFsdWUgdG8gdmFsaWRhdGVcclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVx0VGhlIG1lc3NhZ2UgdG8gdXNlIHdoZW4gdGhlIHJ1bGUgZmFpbHNcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcihmaWVsZCwgdmFsdWUsIG1lc3NhZ2UgPSBcIlRoZSA6YXR0ciBtdXN0IGJlIHRydWUgb3IgZmFsc2VcIikge1xyXG5cdFx0c3VwZXIoZmllbGQsIHZhbHVlLCB1bmRlZmluZWQsIG1lc3NhZ2UpO1xyXG5cdH1cclxuXHJcblx0dmFsaWRhdGUoKSB7XHJcblx0XHRpZiAodHlwZW9mIHRoaXMuX3ZhbHVlID09ICdib29sZWFuJykgeyBcclxuXHRcdFx0dGhpcy5fdmFsaWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodHlwZW9mIHRoaXMuX3ZhbHVlID09ICdudW1iZXInKSB7XHJcblx0XHRcdGlmICh0aGlzLl92YWx1ZSA9PSAxIHx8IHRoaXMuX3ZhbHVlID09IDApXHJcblx0XHRcdFx0dGhpcy5fdmFsaWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodHlwZW9mIHRoaXMuX3ZhbHVlID09ICdzdHJpbmcnKSB7XHJcblx0XHRcdGlmIChbXCJvblwiLCBcIm9mZlwiLCBcInRydWVcIiwgXCJmYWxzZVwiXS5pbmNsdWRlcyh0aGlzLl92YWx1ZS50b0xvd2VyQ2FzZSgpKSlcclxuXHRcdFx0XHR0aGlzLl92YWxpZCA9IHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dmFsaWQ6IHRoaXMuX3ZhbGlkLFxyXG5cdFx0XHRtZXNzYWdlOiB0aGlzLl9tZXNzYWdlXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE51bWVyaWMgZXh0ZW5kcyBSdWxlIHtcclxuXHQvKipcclxuXHQgKiBUZXN0cyB3aGV0aGVyIHRoZSB2YWx1ZSBpcyBhIG51bWJlciBvciBjYW4gYmUgY29udmVydGVkIHRvIGEgbnVtYmVyLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfVx0ZmllbGRcdFRoZSBuYW1lIG9mIHRoZSBmaWVsZCBiZWluZyB0ZXN0ZWRcclxuXHQgKiBAcGFyYW0ge0FueX0gXHR2YWx1ZVx0VGhlIHZhbHVlIHRvIHZhbGlkYXRlXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcdFRoZSBtZXNzYWdlIHRvIHVzZSB3aGVuIHRoZSBydWxlIGZhaWxzXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoZmllbGQsIHZhbHVlLCBtZXNzYWdlID0gXCJUaGUgOmF0dHIgc2hvdWxkIGJlIGEgbnVtYmVyXCIpIHtcclxuXHRcdHN1cGVyKGZpZWxkLCB2YWx1ZSwgdW5kZWZpbmVkLCBtZXNzYWdlKTtcclxuXHR9XHJcblxyXG5cdHZhbGlkYXRlKCkge1xyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLl92YWx1ZSA9PSAnbnVtYmVyJykge1xyXG5cdFx0XHR0aGlzLl92YWxpZCA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh0eXBlb2YgdGhpcy5fdmFsdWUgPT0gJ3N0cmluZycpIHtcclxuXHRcdFx0bGV0IGlzRGVjaW1hbCA9IHRoaXMuX3ZhbHVlLnNwbGl0KFwiLlwiKS5sZW5ndGggPiAxO1xyXG5cdFx0XHRsZXQgY29udmVydGVkID0gaXNEZWNpbWFsID8gcGFyc2VGbG9hdCh0aGlzLl92YWx1ZSkgOiBwYXJzZUludCh0aGlzLl92YWx1ZSk7XHJcblxyXG5cdFx0XHRpZiAoIWlzTmFOKGNvbnZlcnRlZCkpXHJcblx0XHRcdFx0dGhpcy5fdmFsaWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHZhbGlkOiB0aGlzLl92YWxpZCxcclxuXHRcdFx0bWVzc2FnZTogdGhpcy5fbWVzc2FnZVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNaW4gZXh0ZW5kcyBSdWxlIHtcclxuXHQvKipcclxuXHQgKiBUZXN0cyB3aGV0aGVyIHRoZSB2YWx1ZSBpcyBubyBsZXNzIHRoYW4gdGhlIHByb3ZpZGVkIHZhbGlkYXRvciB2YWx1ZS5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge1N0cmluZ31cdGZpZWxkXHRcdFx0VGhlIG5hbWUgb2YgdGhlIGZpZWxkIGJlaW5nIHRlc3RlZFxyXG5cdCAqIEBwYXJhbSB7QW55fSBcdHZhbHVlXHRcdFx0VGhlIHZhbHVlIHRvIHZhbGlkYXRlXHJcblx0ICogQHBhcmFtIHtBcnJheX1cdHZhbGlkYXRvclZhbHVlc1x0QW4gYXJyYXkgb2YgdmFsdWVzIHRoYXQgdGhlIHZhbGlkYXRvciBoYXMuIE9ubHkgcmV0cmlldmVzIHRoZSBmaXJzdCB2YWx1ZSBkdWUgdG8gaG93IHRoZSBydWxlIHdvcmtzXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcdFx0XHRUaGUgbWVzc2FnZSB0byB1c2Ugd2hlbiB0aGUgcnVsZSBmYWlsc1xyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKGZpZWxkLCB2YWx1ZSwgdmFsaWRhdG9yVmFsdWVzLCBtZXNzYWdlID0gXCJUaGUgOmF0dHIgbXVzdCBiZSBhdCBsZWFzdCA6dmFsXCIpIHtcclxuXHRcdGxldCBlO1xyXG5cclxuXHRcdGlmICh0eXBlb2YgdmFsaWRhdG9yVmFsdWVzICE9ICdvYmplY3QnIHx8IHZhbGlkYXRvclZhbHVlcy5jb25zdHJ1Y3Rvci5uYW1lICE9ICdBcnJheScpXHJcblx0XHRcdGUgPSAgRXJyb3IoYEltcHJvcGVyIHZhbGlkYXRvciB2YWx1ZSBmb3JtYXQ6XFxuXFx0TmVlZHMgYXJyYXksICR7dHlwZW9mIHZhbGlkYXRvclZhbHVlc30gaXMgcGFzc2VkYCk7XHJcblx0XHRlbHNlIGlmICh2YWxpZGF0b3JWYWx1ZXMubGVuZ3RoIDwgMSlcclxuXHRcdFx0ZSA9ICBFcnJvcihgTm90IGVub3VnaCB2YWxpZGF0b3IgdmFsdWUgcGFzc2VkOlxcblxcdE5lZWRzIDEsIG9ubHkgJHt2YWxpZGF0b3JWYWx1ZXMubGVuZ3RofSBpcyBwYXNzZWQuYCk7XHJcblxyXG5cdFx0aWYgKHZhbHVlID09ICBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PSAndW5kZWZpbmVkJylcclxuXHRcdFx0dmFsdWUgPSB2YWx1ZTtcclxuXHRcdGVsc2UgaWYgKHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgPT0gXCJBcnJheVwiKVxyXG5cdFx0XHR2YWx1ZSA9IHZhbHVlLmxlbmd0aDtcclxuXHJcblx0XHRpZiAodHlwZW9mIGUgIT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0ZS5uYW1lID0gXCJSdWxlRXhjZXB0aW9uXCI7XHJcblx0XHRcdHRocm93IGU7XHJcblx0XHR9XHJcblxyXG5cdFx0bWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZUFsbCgvKDptaW4pL2dpLCB2YWxpZGF0b3JWYWx1ZXNbMF0pO1xyXG5cclxuXHRcdHN1cGVyKGZpZWxkLCB2YWx1ZSwgdmFsaWRhdG9yVmFsdWVzWzBdLCBtZXNzYWdlKTtcclxuXHR9XHJcblxyXG5cdHZhbGlkYXRlKCkge1xyXG5cdFx0aWYgKG5ldyBOdW1lcmljKHRoaXMuX2ZpZWxkLCB0aGlzLl92YWx1ZSkudmFsaWRhdGUoKS52YWxpZCkge1xyXG5cdFx0XHRsZXQgaXNEZWNpbWFsID0gdGhpcy5fdmFsdWUudG9TdHJpbmcoKS5zcGxpdChcIi5cIikubGVuZ3RoID4gMTtcclxuXHRcdFx0bGV0IGNvbnZlcnRlZCA9IGlzRGVjaW1hbCA/IHBhcnNlRmxvYXQodGhpcy5fdmFsdWUpIDogcGFyc2VJbnQodGhpcy5fdmFsdWUpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKGNvbnZlcnRlZCA+PSB0aGlzLl92YWxpZGF0b3JWYWx1ZXMpXHJcblx0XHRcdFx0dGhpcy5fdmFsaWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHZhbGlkOiB0aGlzLl92YWxpZCxcclxuXHRcdFx0bWVzc2FnZTogdGhpcy5fbWVzc2FnZVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNYXggZXh0ZW5kcyBSdWxlIHtcclxuXHQvKipcclxuXHQgKiBUZXN0cyB3aGV0aGVyIHRoZSB2YWx1ZSBpcyBubyBtb3JlIHRoYW4gdGhlIHByb3ZpZGVkIHZhbGlkYXRvciB2YWx1ZS5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge1N0cmluZ31cdGZpZWxkXHRcdFx0VGhlIG5hbWUgb2YgdGhlIGZpZWxkIGJlaW5nIHRlc3RlZFxyXG5cdCAqIEBwYXJhbSB7QW55fSBcdHZhbHVlXHRcdFx0VGhlIHZhbHVlIHRvIHZhbGlkYXRlXHJcblx0ICogQHBhcmFtIHtBcnJheX1cdHZhbGlkYXRvclZhbHVlc1x0QW4gYXJyYXkgb2YgdmFsdWVzIHRoYXQgdGhlIHZhbGlkYXRvciBoYXMuIE9ubHkgcmV0cmlldmVzIHRoZSBmaXJzdCB2YWx1ZSBkdWUgdG8gaG93IHRoZSBydWxlIHdvcmtzXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcdFx0XHRUaGUgbWVzc2FnZSB0byB1c2Ugd2hlbiB0aGUgcnVsZSBmYWlsc1xyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKGZpZWxkLCB2YWx1ZSwgdmFsaWRhdG9yVmFsdWVzLCBtZXNzYWdlID0gXCJUaGUgOmF0dHIgbWF5IG5vdCBiZSBncmVhdGVyIHRoYW4gOnZhbFwiKSB7XHJcblx0XHRsZXQgZTtcclxuXHJcblx0XHRpZiAodHlwZW9mIHZhbGlkYXRvclZhbHVlcyAhPSAnb2JqZWN0JyB8fCB2YWxpZGF0b3JWYWx1ZXMuY29uc3RydWN0b3IubmFtZSAhPSAnQXJyYXknKVxyXG5cdFx0XHRlID0gRXJyb3IoYEltcHJvcGVyIHZhbGlkYXRvciB2YWx1ZSBmb3JtYXQ6XFxuXFx0TmVlZHMgYXJyYXksICR7dHlwZW9mIHZhbGlkYXRvclZhbHVlc30gaXMgcGFzc2VkYCk7XHJcblx0XHRlbHNlIGlmICh2YWxpZGF0b3JWYWx1ZXMubGVuZ3RoIDwgMSlcclxuXHRcdFx0ZSA9IEVycm9yKGBOb3QgZW5vdWdoIHZhbGlkYXRvciB2YWx1ZSBwYXNzZWQ6XFxuXFx0TmVlZHMgMSwgb25seSAke3ZhbGlkYXRvclZhbHVlcy5sZW5ndGh9IGlzIHBhc3NlZC5gKTtcclxuXHJcblx0XHRpZiAodmFsdWUgPT0gIG51bGwgfHwgdHlwZW9mIHZhbHVlID09ICd1bmRlZmluZWQnKVxyXG5cdFx0XHR2YWx1ZSA9IHZhbHVlO1xyXG5cdFx0ZWxzZSBpZiAodmFsdWUuY29uc3RydWN0b3IubmFtZSA9PSBcIkFycmF5XCIpXHJcblx0XHRcdHZhbHVlID0gdmFsdWUubGVuZ3RoO1xyXG5cclxuXHRcdGlmICh0eXBlb2YgZSAhPSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRlLm5hbWUgPSBcIlJ1bGVFeGNlcHRpb25cIjtcclxuXHRcdFx0dGhyb3cgZTtcclxuXHRcdH1cclxuXHJcblx0XHRtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlQWxsKC8oOm1heCkvZ2ksIHZhbGlkYXRvclZhbHVlc1swXSk7XHJcblxyXG5cdFx0c3VwZXIoZmllbGQsIHZhbHVlLCB2YWxpZGF0b3JWYWx1ZXNbMF0sIG1lc3NhZ2UpO1xyXG5cdH1cclxuXHJcblx0dmFsaWRhdGUoKSB7XHJcblx0XHRpZiAobmV3IE51bWVyaWModGhpcy5fZmllbGQsIHRoaXMuX3ZhbHVlKS52YWxpZGF0ZSgpLnZhbGlkKSB7XHJcblx0XHRcdGxldCBpc0RlY2ltYWwgPSB0aGlzLl92YWx1ZS50b1N0cmluZygpLnNwbGl0KFwiLlwiKS5sZW5ndGggPiAxO1xyXG5cdFx0XHRsZXQgY29udmVydGVkID0gaXNEZWNpbWFsID8gcGFyc2VGbG9hdCh0aGlzLl92YWx1ZSkgOiBwYXJzZUludCh0aGlzLl92YWx1ZSk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoY29udmVydGVkIDw9IHRoaXMuX3ZhbGlkYXRvclZhbHVlcylcclxuXHRcdFx0XHR0aGlzLl92YWxpZCA9IHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dmFsaWQ6IHRoaXMuX3ZhbGlkLFxyXG5cdFx0XHRtZXNzYWdlOiB0aGlzLl9tZXNzYWdlXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJldHdlZW4gZXh0ZW5kcyBSdWxlIHtcclxuXHQvKipcclxuXHQgKiBUZXN0cyB3aGV0aGVyIHRoZSB2YWx1ZSBpcyBubyBtb3JlIGFuZCBsZXNzIHRoYW4gdGhlIHByb3ZpZGVkIHZhbGlkYXRvciB2YWx1ZS4gSWYgYW4gYXJyYXkgaXMgcGFzc2VkIGFzIGEgdmFsdWUsIHRoZSBsZW5ndGggb2YgdGhlIGFycmF5IHByb3ZpZGVkIHdpbGwgYmUgdGVzdGVkLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfVx0ZmllbGRcdFx0XHRUaGUgbmFtZSBvZiB0aGUgZmllbGQgYmVpbmcgdGVzdGVkXHJcblx0ICogQHBhcmFtIHtBbnl9IFx0dmFsdWVcdFx0XHRUaGUgdmFsdWUgdG8gdmFsaWRhdGVcclxuXHQgKiBAcGFyYW0ge0FycmF5fVx0dmFsaWRhdG9yVmFsdWVzXHRBbiBhcnJheSBvZiB2YWx1ZXMgdGhhdCB0aGUgdmFsaWRhdG9yIGhhcy4gT25seSByZXRyaWV2ZXMgdGhlIGZpcnN0IHR3byB2YWx1ZXMgKG1pbiwgbWF4KSBkdWUgdG8gaG93IHRoZSBydWxlIHdvcmtzXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9XHRtZXNzYWdlXHRcdFx0VGhlIG1lc3NhZ2UgdG8gdXNlIHdoZW4gdGhlIHJ1bGUgZmFpbHNcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcihmaWVsZCwgdmFsdWUsIHZhbGlkYXRvclZhbHVlcywgbWVzc2FnZSA9IFwiVGhlIDphdHRyIG11c3QgYmUgYmV0d2VlbiA6bWluIGFuZCA6bWF4XCIpIHtcclxuXHRcdGlmICh0eXBlb2YgdmFsaWRhdG9yVmFsdWVzICE9ICdvYmplY3QnIHx8IHZhbGlkYXRvclZhbHVlcy5jb25zdHJ1Y3Rvci5uYW1lICE9ICdBcnJheScpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihgSW1wcm9wZXIgdmFsaWRhdG9yIHZhbHVlIGZvcm1hdDpcXG5cXHROZWVkcyBhcnJheSwgJHt0eXBlb2YgdmFsaWRhdG9yVmFsdWVzfSBpcyBwYXNzZWRgKTtcclxuXHRcdGVsc2UgaWYgKHZhbGlkYXRvclZhbHVlcy5sZW5ndGggPCAyKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE5vdCBlbm91Z2ggdmFsaWRhdG9yIHZhbHVlIHBhc3NlZDpcXG5cXHROZWVkcyAyLCBvbmx5ICR7dmFsaWRhdG9yVmFsdWVzLmxlbmd0aH0gaXMgcGFzc2VkLmApO1xyXG5cclxuXHRcdGlmICh2YWxpZGF0b3JWYWx1ZXNbMF0gPiB2YWxpZGF0b3JWYWx1ZXNbMV0pXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihgTWluaW11bSB2YWx1ZSBpcyBsYXJnZXIgdGhhbiB0aGUgbWF4aW11bSB2YWx1ZTpcXG5cXHRNaW5pbXVtIHZhbHVlIHNob3VsZCBiZSBsZXNzIHRoYW4gJHt2YWxpZGF0b3JWYWx1ZXNbMV19LCAke3ZhbGlkYXRvclZhbHVlc1swXX0gaXMgcHJvdmlkZWQuYCk7XHJcblxyXG5cdFx0aWYgKHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgPT0gXCJBcnJheVwiKVxyXG5cdFx0XHR2YWx1ZSA9IHZhbHVlLmxlbmd0aDtcclxuXHJcblx0XHRtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlQWxsKC8oOm1pbikvZ2ksIHZhbGlkYXRvclZhbHVlc1swXSk7XHJcblx0XHRtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlQWxsKC8oOm1heCkvZ2ksIHZhbGlkYXRvclZhbHVlc1sxXSk7XHJcblxyXG5cdFx0c3VwZXIoZmllbGQsIHZhbHVlLCBbdmFsaWRhdG9yVmFsdWVzWzBdLCB2YWxpZGF0b3JWYWx1ZXNbMV1dLCBtZXNzYWdlKTtcclxuXHR9XHJcblxyXG5cdHZhbGlkYXRlKCkge1xyXG5cdFx0aWYgKG5ldyBOdW1lcmljKHRoaXMuX2ZpZWxkLCB0aGlzLl92YWx1ZSkudmFsaWRhdGUoKS52YWxpZCkge1xyXG5cdFx0XHRsZXQgaXNEZWNpbWFsID0gdGhpcy5fdmFsdWUuc3BsaXQoXCIuXCIpLmxlbmd0aCA+IDE7XHJcblx0XHRcdGxldCBjb252ZXJ0ZWQgPSBpc0RlY2ltYWwgPyBwYXJzZUZsb2F0KHRoaXMuX3ZhbHVlKSA6IHBhcnNlSW50KHRoaXMuX3ZhbHVlKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChjb252ZXJ0ZWQgPj0gdGhpcy5fdmFsaWRhdG9yVmFsdWVzWzBdICYmIGNvbnZlcnRlZCA8PSB0aGlzLl92YWxpZGF0b3JWYWx1ZXNbMV0pXHJcblx0XHRcdFx0dGhpcy5fdmFsaWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHZhbGlkOiB0aGlzLl92YWxpZCxcclxuXHRcdFx0bWVzc2FnZTogdGhpcy5fbWVzc2FnZVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBcnJheSBleHRlbmRzIFJ1bGUge1xyXG5cdC8qKlxyXG5cdCAqIFRlc3RzIHdoZXRoZXIgdGhlIHZhbHVlIGlzIG5vIG1vcmUgYW5kIGxlc3MgdGhhbiB0aGUgcHJvdmlkZWQgdmFsaWRhdG9yIHZhbHVlLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfVx0ZmllbGRcdFx0XHRUaGUgbmFtZSBvZiB0aGUgZmllbGQgYmVpbmcgdGVzdGVkXHJcblx0ICogQHBhcmFtIHtBbnl9IFx0dmFsdWVcdFx0XHRUaGUgdmFsdWUgdG8gdmFsaWRhdGVcclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVx0XHRcdFRoZSBtZXNzYWdlIHRvIHVzZSB3aGVuIHRoZSBydWxlIGZhaWxzXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoZmllbGQsIHZhbHVlLCBtZXNzYWdlID0gXCJUaGUgOmF0dHIgbXVzdCBiZSBhbiBhcnJheVwiKSB7XHJcblx0XHRzdXBlcihmaWVsZCwgdmFsdWUsIHVuZGVmaW5lZCwgbWVzc2FnZSk7XHJcblx0fVxyXG5cclxuXHR2YWxpZGF0ZSgpIHtcclxuXHRcdGlmICh0eXBlb2YgdGhpcy5fdmFsdWUgPT0gJ29iamVjdCcgJiYgdGhpcy5fdmFsdWUuY29uc3RydWN0b3IubmFtZSA9PSAnQXJyYXknKSB7XHJcblx0XHRcdHRoaXMuX3ZhbGlkID0gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR2YWxpZDogdGhpcy5fdmFsaWQsXHJcblx0XHRcdG1lc3NhZ2U6IHRoaXMuX21lc3NhZ2VcclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW4gZXh0ZW5kcyBSdWxlIHtcclxuXHQvKipcclxuXHQgKiBUZXN0cyB3aGV0aGVyIHRoZSB2YWx1ZSBpcyBubyBtb3JlIGFuZCBsZXNzIHRoYW4gdGhlIHByb3ZpZGVkIHZhbGlkYXRvciB2YWx1ZS5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge1N0cmluZ31cdGZpZWxkXHRcdFx0VGhlIG5hbWUgb2YgdGhlIGZpZWxkIGJlaW5nIHRlc3RlZFxyXG5cdCAqIEBwYXJhbSB7QW55fSBcdHZhbHVlXHRcdFx0VGhlIHZhbHVlIHRvIHZhbGlkYXRlXHJcblx0ICogQHBhcmFtIHtBcnJheX1cdHZhbGlkYXRvclZhbHVlc1x0QW4gYXJyYXkgb2YgdmFsdWVzIHRoYXQgdGhlIHZhbGlkYXRvciBoYXMuIE9ubHkgcmV0cmlldmVzIHRoZSBmaXJzdCB2YWx1ZSBkdWUgdG8gaG93IHRoZSBydWxlIHdvcmtzXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9XHRtZXNzYWdlXHRcdFx0VGhlIG1lc3NhZ2UgdG8gdXNlIHdoZW4gdGhlIHJ1bGUgZmFpbHNcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcihmaWVsZCwgdmFsdWUsIHZhbGlkYXRvclZhbHVlcywgbWVzc2FnZSA9IFwiVGhlIHNlbGVjdGVkIDphdHRyIGlzIGludmFsaWRcIikge1xyXG5cdFx0aWYgKHR5cGVvZiB2YWxpZGF0b3JWYWx1ZXMgIT0gJ29iamVjdCcgfHwgdmFsaWRhdG9yVmFsdWVzLmNvbnN0cnVjdG9yLm5hbWUgIT0gJ0FycmF5JylcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBJbXByb3BlciB2YWxpZGF0b3IgdmFsdWUgZm9ybWF0OlxcblxcdE5lZWRzIGFycmF5LCAke3R5cGVvZiB2YWxpZGF0b3JWYWx1ZXN9IGlzIHBhc3NlZGApO1xyXG5cdFx0ZWxzZSBpZiAodmFsaWRhdG9yVmFsdWVzLmxlbmd0aCA8IDEpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihgTm90IGVub3VnaCB2YWxpZGF0b3IgdmFsdWUgcGFzc2VkOlxcblxcdE5lZWRzIGF0IGxlYXN0IDEsIG9ubHkgJHt2YWxpZGF0b3JWYWx1ZXMubGVuZ3RofSBpcyBwYXNzZWQuYCk7XHJcblxyXG5cdFx0c3VwZXIoZmllbGQsIHZhbHVlLCB2YWxpZGF0b3JWYWx1ZXMsIG1lc3NhZ2UpO1xyXG5cdH1cclxuXHJcblx0dmFsaWRhdGUoKSB7XHJcblx0XHRpZiAodHlwZW9mIHRoaXMuX3ZhbHVlICE9ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdGlmICh0aGlzLl92YWxpZGF0b3JWYWx1ZXMuaW5jbHVkZXModGhpcy5fdmFsdWUudG9TdHJpbmcoKSkpIHtcclxuXHRcdFx0XHR0aGlzLl92YWxpZCA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR2YWxpZDogdGhpcy5fdmFsaWQsXHJcblx0XHRcdG1lc3NhZ2U6IHRoaXMuX21lc3NhZ2VcclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTnVsbGFibGUgZXh0ZW5kcyBSdWxlIHtcclxuXHQvKipcclxuXHQgKiBUZXN0cyB3aGV0aGVyIHRoZSB2YWx1ZSBpcyBudWxsIHdoZW4gbm8gb3RoZXIgdmFsdWUgaXMgcHJvdmlkZWQuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9XHRmaWVsZFx0XHRcdFRoZSBuYW1lIG9mIHRoZSBmaWVsZCBiZWluZyB0ZXN0ZWRcclxuXHQgKiBAcGFyYW0ge0FueX0gXHR2YWx1ZVx0XHRcdFRoZSB2YWx1ZSB0byB2YWxpZGF0ZVxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXHRcdFx0VGhlIG1lc3NhZ2UgdG8gdXNlIHdoZW4gdGhlIHJ1bGUgZmFpbHNcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcihmaWVsZCwgdmFsdWUsIG1lc3NhZ2UgPSBcIlRoZSA6YXR0ciBmaWVsZCBjYW4gYmUgbnVsbFwiKSB7XHJcblx0XHRzdXBlcihmaWVsZCwgdmFsdWUsIG1lc3NhZ2UpO1xyXG5cdH1cclxuXHJcblx0dmFsaWRhdGUoKSB7XHJcblx0XHRsZXQgcnVuT3RoZXJWYWxpZGF0aW9uID0gdHJ1ZTtcclxuXHRcdHRoaXMuX3ZhbGlkID0gdHJ1ZTtcclxuXHJcblx0XHRpZiAodGhpcy5fdmFsdWUgPT09IG51bGwgfHwgdGhpcy5fdmFsdWUgPT09IFwiXCIpIHtcclxuXHRcdFx0cnVuT3RoZXJWYWxpZGF0aW9uID0gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dmFsaWQ6IHRoaXMuX3ZhbGlkLFxyXG5cdFx0XHRtZXNzYWdlOiB0aGlzLl9tZXNzYWdlLFxyXG5cdFx0XHRydW5PdGhlclZhbGlkYXRpb246IHJ1bk90aGVyVmFsaWRhdGlvblxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTdHJpbmcgZXh0ZW5kcyBSdWxlIHtcclxuXHQvKipcclxuXHQgKiBUZXN0cyB3aGV0aGVyIHRoZSB2YWx1ZSBpcyBhIHN0cmluZyBvciBub3QuXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9XHRmaWVsZFx0XHRcdFRoZSBuYW1lIG9mIHRoZSBmaWVsZCBiZWluZyB0ZXN0ZWRcclxuXHQgKiBAcGFyYW0ge0FueX0gXHR2YWx1ZVx0XHRcdFRoZSB2YWx1ZSB0byB2YWxpZGF0ZVxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXHRcdFx0VGhlIG1lc3NhZ2UgdG8gdXNlIHdoZW4gdGhlIHJ1bGUgZmFpbHNcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcihmaWVsZCwgdmFsdWUsIG1lc3NhZ2UgPSBcIlRoZSA6YXR0ciBmaWVsZCBpcyBub3QgYSBzdHJpbmdcIikge1xyXG5cdFx0c3VwZXIoZmllbGQsIHZhbHVlLCBtZXNzYWdlKTtcclxuXHR9XHJcblxyXG5cdHZhbGlkYXRlKCkge1xyXG5cdFx0aWYgKCF0aGlzLl92YWx1ZSkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHZhbGlkOiB0aGlzLl92YWxpZCxcclxuXHRcdFx0XHRtZXNzYWdlOiB0aGlzLl9tZXNzYWdlXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRsZXQgcmVzcG9uc2UgPSB0aGlzLl92YWx1ZS5tYXRjaCgvW2EtekEtWjAtOVxcLixcXFxcXFwvXCInXFwoXFwpXFxbXFxde31cXC1cXCtfPVxcKlxcJiVcXCFAI1xcJFxcXjw+XFw/XFxzXSsvKTtcclxuXHRcdHJlc3BvbnNlID0gcmVzcG9uc2UgPz8gW107XHJcblxyXG5cdFx0aWYgKHJlc3BvbnNlLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHR0aGlzLl92YWxpZCA9IHRydWU7XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dmFsaWQ6IHRoaXMuX3ZhbGlkLFxyXG5cdFx0XHRtZXNzYWdlOiB0aGlzLl9tZXNzYWdlXHJcblx0XHR9O1xyXG5cdH1cclxufSIsIi8vIFV0aWxpdHlcclxuaW1wb3J0IFVuaXF1ZUFycmF5IGZyb20gXCIuLi8uLi8uLi9qcy91dGlsL3VuaXF1ZS1hcnJheS91bmlxdWUtYXJyYXkubW9kLmpzXCI7XHJcbmltcG9ydCAqIGFzIFJ1bGVzIGZyb20gXCIuL1J1bGVzLmpzXCI7XHJcblxyXG4vLyBNb2R1bGVcclxuaW1wb3J0IE1lc3NhZ2VCYWcgZnJvbSBcIi4vTWVzc2FnZUJhZy5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsaWRhdG9yIHtcclxuXHQvKipcclxuXHQgKiBBIGNvbnRhaW5lciBmb3IgYWxsIGFycmF5IGZpZWxkcyBwYXNzZWQgdG8gdGhpcyB2YWxpZGF0b3IuIFZhbHVlcyBjb250YWluZWQgaW4gaGVyZVxyXG5cdCAqIGFyZSBmb3JtYXR0ZWQgdG8gYmUgYSBrZXktdmFsdWUgcGFpci5cclxuXHQgKi9cclxuXHQjYXJyRmllbGRzSW5kZXggPSB7fTtcclxuXHQvKipcclxuXHQgKiBBIGNvbnRhaW5lciBmb3IgYWxsIHRoZSBmaWVsZHMgdGhhdCBhcmUgZG9uZSBiZWluZyB2YWxpZGF0ZWQuXHJcblx0ICovXHJcblx0I2NoZWNrZWRGaWVsZHMgPSBbXTtcclxuXHQvKipcclxuXHQgKiBBIGNvbnRhaW5lciBmb3IgYWxsIHRoZSBuZXcgZmllbGQgbmFtZXNcclxuXHQgKi9cclxuXHQjZmllbGROYW1lcyA9IFtdO1xyXG5cclxuXHQvLyBQcml2YXRlIHZhcmlhYmxlc1xyXG5cdC8qKlxyXG5cdCAqIEEgcHJpdmF0ZSBnbG9iYWwgdmFyaWFibGUgY29udGFpbmVyIGZvciBhbGwgdGhlIHZhbHVlcyBwYXNzZWQgdG8gdGhpcy5cclxuXHQgKi9cclxuXHQjdmFsdWVMaXN0O1xyXG5cdC8qKlxyXG5cdCAqIEEgcHJpdmF0ZSBnbG9iYWwgdmFyaWFibGUgY29udGFpbmVyIGZvciBhbGwgdGhlIHJ1bGVzIHBhc3NlZCB0byB0aGlzLlxyXG5cdCAqL1xyXG5cdCNydWxlTGlzdDtcclxuXHQvKipcclxuXHQgKiBBIHByaXZhdGUgZ2xvYmFsIHZhcmlhYmxlIGNvbnRhaW5lciBmb3IgYWxsIHRoZSBtZXNzYWdlcyBwYXNzZWQgdG8gdGhpcy5cclxuXHQgKi9cclxuXHQjbWVzc2FnZUxpc3Q7XHJcblx0LyoqXHJcblx0ICogQSBwcml2YXRlIGdsb2JhbCB2YXJpYWJsZSBjb250YWluZXIgZm9yIHRoZSBgTWVzc2FnZUJhZ2AgaW5zdGFuY2UuXHJcblx0ICovXHJcblx0I2Vycm9ycztcclxuXHQvKipcclxuXHQgKiBBIHByaXZhdGUgZ2xvYmFsIHZhcmlhYmxlIGNvbnRhaW5lciwgY29udGFpbmluZyBhbGwgdmFsaWQgdmFsdWVzLlxyXG5cdCAqL1xyXG5cdCN2YWxpZGF0ZWQgPSB7fTtcclxuXHQvKipcclxuXHQgKiBBIHByaXZhdGUgZ2xvYmFsIHZhcmlhYmxlIGNvbnRhaW5lciwgaWRlbnRpZnlpbmcgaWYgdGhpcyB2YWxpZGF0b3IncyB2YWxpZGF0aW9uIGhhcyBmYWlsZWQuXHJcblx0ICovXHJcblx0I2ZhaWxlZCA9IGZhbHNlO1xyXG5cdC8qKlxyXG5cdCAqIEEgcHJpdmF0ZSBnbG9iYWwgdmFyaWFibGUgY29udGFpbmVyIHRoYXQgZGV0ZXJtaW5lcyBpZiB0aGUgdmFsaWRhdGlvbiBoYXMgYmVlbiBydW4gYWxyZWFkeS5cclxuXHQgKi9cclxuXHQjdmFsaWRhdGlvbkRvbmUgPSBmYWxzZTtcclxuXHJcblx0LyoqXHJcblx0ICogXHJcblx0ICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIGEgVmFsaWRhdG9yXHJcblx0ICogKiAqICpcclxuXHQgKiAqKkV4YW1wbGUgQS4xOioqXHJcblx0ICogYGBgamF2YXNjcmlwdFxyXG5cdCAqIGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiBcdCAqIFx0bGV0IHZhbGlkID0gZmFsc2U7XHJcbiBcdCAqIFx0bGV0IG1zZyA9IFwiUHJvdmlkZWQgdmFsdWUgaXMgbm90IGFuIGFycmF5XCI7XHJcbiBcdCAqIFxyXG5cdCAqIFx0aWYgKHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiQXJyYXlcIilcclxuXHQgKiBcdFx0dmFsaWQgPSB0cnVlO1xyXG5cdCAqIFxyXG5cdCAqIFx0cmV0dXJuIHtcclxuXHQgKiBcdFx0dmFsaWQ6IHZhbGlkLFxyXG5cdCAqIFx0XHRtZXNzYWdlOiBtc2dcclxuXHQgKiBcdH07XHJcblx0ICogfVxyXG5cdCAqIGBgYFxyXG5cdCAqICogKiAqXHJcblx0ICogKipFeGFtcGxlIEEuMjoqKlxyXG5cdCAqIGBgYGphdmFzY3JpcHRcclxuXHQgKiAodmFsdWUpID0+IHtcclxuXHQgKiBcdGxldCB2YWxpZCA9IGZhbHNlO1xyXG4gXHQgKiBcdGxldCBtc2cgPSBcIlByb3ZpZGVkIHZhbHVlIGlzIG5vdCBhbiBhcnJheVwiO1xyXG4gXHQgKiBcclxuXHQgKiBcdGlmICh2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIkFycmF5XCIpXHJcblx0ICogXHRcdHZhbGlkID0gdHJ1ZTtcclxuXHQgKiBcclxuXHQgKiBcdHJldHVybiB7XHJcblx0ICogXHRcdHZhbGlkOiB2YWxpZCxcclxuXHQgKiBcdFx0bWVzc2FnZTogbXNnXHJcblx0ICogXHR9O1xyXG5cdCAqIH1cclxuXHQgKiBgYGBcclxuXHQgKiAqICogKlxyXG5cdCAqICoqRXhhbXBsZSBCLjE6KipcclxuXHQgKiBgYGBqYXZhc2NyaXB0XHJcblx0ICogZnVuY3Rpb24oKSB7XHJcblx0ICogXHRsZXQgdmFsaWQgPSBmYWxzZTtcclxuIFx0ICogXHRsZXQgbXNnID0gXCJQcm92aWRlZCB2YWx1ZSBpcyBub3QgYW4gYXJyYXlcIjtcclxuIFx0ICogXHJcblx0ICogXHRpZiAodHlwZW9mIGdsb2JhbFZhciAhPSBcInVuZGVmaW5lZFwiKVxyXG5cdCAqIFx0XHR2YWxpZCA9IHRydWU7XHJcblx0ICogXHRcclxuXHQgKiBcdHJldHVybiB7XHJcblx0ICogXHRcdHZhbGlkOiB2YWxpZCxcclxuXHQgKiBcdFx0bWVzc2FnZTogbXNnXHJcblx0ICogXHR9O1xyXG5cdCAqIH1cclxuXHQgKiBgYGBcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge09iamVjdH1cdHZhbHVlc1x0QSBKU09OIG9iamVjdCBjb250YWluaW5nIGEga2V5LXZhbHVlIHBhaXIgZm9yIHRoZSBmaWVsZHMgYW5kIGl0cyB2YWx1ZS5cclxuXHQgKiBAcGFyYW0ge09iamVjdH1cdHJ1bGVzXHRBIEpTT04gb2JqZWN0IGNvbnRhaW5pbmcgYSBrZXktdmFsdWUgcGFpciBmb3IgdGhlIGZpZWxkcycgcnVsZXMuIEEgcnVsZSBtdXN0IGJlIG9uZSBvZiB0aGUgY2xhc3NlcyB3aXRoaW4gYFJ1bGUuanNgIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIHRoYXQgdGFrZXMgaW4gMSBwYXJhbWV0ZXIgKHZhbHVlKSBhbmQgcmV0dXJucyBhIEpTT04gb2JqZWN0IHdpdGggMiB2YWx1ZXMgKHZhbGlkOiBib29sZWFuLCBtZXNzYWdlOiBTdHJpbmcpLiBBbiBleGFtcGxlIG9mIGEgZnVuY3Rpb24gaXMgKipFeGFtcGxlIEEuMSoqLCAqKkV4YW1wbGUgQS4yKiosIGFuZCAqKkV4YW1wbGUgQi4xKipcclxuXHQgKiBAcGFyYW0ge09iamVjdH1cdG1lc3NhZ2VcdEEgSlNPTiBvYmplY3QgY29udGFpbmluZyBhIGtleS12YWx1ZSBwYWlyIGZvciB0aGUgZmllbGRzJyBtZXNzYWdlc1xyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKHZhbHVlcywgcnVsZXMsIG1lc3NhZ2VzKSB7XHJcblx0XHQvLyBJbml0aWFsaXplIG5lY2Vzc2FyeSB1dGlsaXRpZXNcclxuXHRcdFVuaXF1ZUFycmF5KCk7XHJcblxyXG5cdFx0Ly8gU2V0IGV4dGVybmFsIHZhcmlhYmxlc1xyXG5cdFx0dGhpcy4jdmFsdWVMaXN0ID0gdmFsdWVzO1xyXG5cdFx0dGhpcy4jcnVsZUxpc3QgPSBydWxlcztcclxuXHRcdHRoaXMuI21lc3NhZ2VMaXN0ID0gbWVzc2FnZXM7XHJcblxyXG5cdFx0dGhpcy4jZXJyb3JzID0gbmV3IE1lc3NhZ2VCYWcoKTtcclxuXHR9XHJcblx0XHJcblx0LyoqXHJcblx0ICogUnVucyB0aGUgdmFsaWRhdGlvbi5cclxuXHQgKi9cclxuXHQjcnVuVmFsaWRhdGlvbigpIHtcclxuXHRcdGZvciAobGV0IGsgb2YgT2JqZWN0LmtleXModGhpcy4jcnVsZUxpc3QpKSB7XHJcblx0XHRcdC8vIElkZW50aWZ5IHRoZWlyIGZpZWxkIG5hbWUgYW5kIHZhbHVlc1xyXG5cdFx0XHRsZXQgZmllbGQgPSBrO1xyXG5cdFx0XHRsZXQgaW5kZXggPSAwO1xyXG5cdFx0XHRsZXQgcnVuT3RoZXJWYWxpZGF0aW9uID0gZmFsc2U7XHJcblxyXG5cdFx0XHQvLyBGZXRjaCBydWxlcyBhbmQgbWVzc2FnZXNcclxuXHRcdFx0bGV0IHJ1bGVzID0gVmFsaWRhdG9yLiNmZXRjaFJ1bGVzKGZpZWxkLCB0aGlzLiNydWxlTGlzdCwgaW5kZXgpO1xyXG5cdFx0XHRsZXQgbWVzc2FnZXMgPSBWYWxpZGF0b3IuI2ZldGNoTWVzc2FnZXMoZmllbGQsIHRoaXMuI21lc3NhZ2VMaXN0LCBpbmRleCk7XHJcblxyXG5cdFx0XHQvLyBWZXJpZnkgaWYgYSBcInJlcXVpcmVkXCIgcnVsZSBleGlzdHMuIElmIGl0IGRvZXMsIHRoZW4ganVzdCBydW4gdGhlIHZhbGlkYXRpb24gZm9yIHRoYXQgcnVsZSBvbmx5LlxyXG5cdFx0XHRpZiAocnVsZXMuaW5jbHVkZXMoJ3JlcXVpcmVkJykpIHtcclxuXHRcdFx0XHRydW5PdGhlclZhbGlkYXRpb24gPSB0aGlzLiN2YWxpZGF0ZUZpZWxkKGZpZWxkLCB0aGlzLiN2YWx1ZUxpc3RbZmllbGRdLCBbXCJyZXF1aXJlZFwiXSwgbWVzc2FnZXMpO1xyXG5cdFx0XHRcdHJ1bGVzLnNwbGljZShydWxlcy5pbmRleE9mKFwicmVxdWlyZWRcIiksIDEpO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIFZlcmlmeSBpZiBhIFwicmVxdWlyZWRfaWZcIiBydWxlIGV4aXN0cy4gSWYgaXQgZG9lcywgdGhlbiBqdXN0IHJ1biB0aGUgdmFsaWRhdGlvbiBmb3IgdGhhdCBydWxlIG9ubHkuXHJcblx0XHRcdGVsc2UgaWYgKHJ1bGVzLnRvU3RyaW5nKCkubWF0Y2goXCJyZXF1aXJlZF9pZlwiKSkge1xyXG5cdFx0XHRcdGxldCBydWxlSW5kZXggPSAwO1xyXG5cdFx0XHRcdHJ1bGVzLmZvckVhY2goKHYsIGspID0+IHtcclxuXHRcdFx0XHRcdGlmICh2Lm1hdGNoKC9yZXF1aXJlZF9pZi9nKSkge1xyXG5cdFx0XHRcdFx0XHRydWxlSW5kZXggPSBrO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGxldCBydWxlID0gcnVsZXMuc3BsaWNlKHJ1bGVJbmRleCwgMSk7XHJcblxyXG5cdFx0XHRcdHJ1bk90aGVyVmFsaWRhdGlvbiA9IHRoaXMuI3ZhbGlkYXRlRmllbGQoZmllbGQsIHRoaXMuI3ZhbHVlTGlzdFtmaWVsZF0sIHJ1bGUsIG1lc3NhZ2VzKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBWZXJpZnkgaWYgYSBcInNvbWV0aW1lc1wiIHJ1bGUgZXhpc3RzLiBJZiBpdCBkb2VzLCB0aGVuIGp1c3QgcnVuIHRoZSB2YWxpZGF0aW9uIGZvciB0aGF0IHJ1bGUgb25seS5cclxuXHRcdFx0ZWxzZSBpZiAocnVsZXMuaW5jbHVkZXMoJ3NvbWV0aW1lcycpKSB7XHJcblx0XHRcdFx0cnVuT3RoZXJWYWxpZGF0aW9uID0gdGhpcy4jdmFsaWRhdGVGaWVsZChmaWVsZCwgdGhpcy4jdmFsdWVMaXN0W2ZpZWxkXSwgW1wic29tZXRpbWVzXCJdLCBtZXNzYWdlcyk7XHJcblx0XHRcdFx0cnVsZXMuc3BsaWNlKHJ1bGVzLmluZGV4T2YoXCJzb21ldGltZXNcIiksIDEpO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIFZlcmlmeSBpZiBhIFwibnVsbGFibGVcIiBydWxlIGV4aXN0cy4gSWYgaXQgZG9lcywgdGhlbiBqdXN0IHJ1biB0aGUgdmFsaWRhdGlvbiBmb3IgdGhhdCBydWxlIG9ubHkuXHJcblx0XHRcdGVsc2UgaWYgKHJ1bGVzLmluY2x1ZGVzKGBudWxsYWJsZWApKSB7XHJcblx0XHRcdFx0cnVuT3RoZXJWYWxpZGF0aW9uID0gdGhpcy4jdmFsaWRhdGVGaWVsZChmaWVsZCwgdGhpcy4jdmFsdWVMaXN0W2ZpZWxkXSwgW1wibnVsbGFibGVcIl0sIG1lc3NhZ2VzKTtcclxuXHRcdFx0XHRydWxlcy5zcGxpY2UocnVsZXMuaW5kZXhPZihcIm51bGxhYmxlXCIpLCAxKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gVGhlIGFjdHVhbCB2YWxpZGF0aW9uOyBMTUFPXHJcblx0XHRcdGlmIChydW5PdGhlclZhbGlkYXRpb24pIHtcclxuXHRcdFx0XHR0aGlzLiN2YWxpZGF0ZUZpZWxkKGZpZWxkLCB0aGlzLiN2YWx1ZUxpc3RbZmllbGRdLCBydWxlcywgbWVzc2FnZXMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLiNjaGVja2VkRmllbGRzLnB1c2goZmllbGQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLiNlcnJvcnMuZmllbGRzKCkubGVuZ3RoID4gMClcclxuXHRcdFx0dGhpcy4jZmFpbGVkID0gdHJ1ZTtcclxuXHJcblx0XHR0aGlzLiN2YWxpZGF0aW9uRG9uZSA9IHRydWU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBGZXRjaGVzIHRoZSBydWxlcyBmcm9tIHRoZSBKU09OIG9iamVjdCBwYXNzZWQgYXQgYG9iamAgdXNpbmcgdGhlIHByb3ZpZGVkIGZpZWxkIG5hbWUgYXQgYGZpZWxkYFxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfVx0ZmllbGRcdFx0XHRcdFRoZSBuYW1lIG9mIHRoZSBmaWVsZCB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBydWxlIGtleVxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fVx0b2JqXHRcdFx0XHRcdFRoZSBKU09OIG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSBydWxlcyBwYXNzZWQgdG8gdGhlIFZhbGlkYXRvciBpbnN0YW5jZVxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfVx0aW5kZXhcdFx0XHRcdElmIHRoZSBwYXNzZWQgZmllbGQgaXMgYW4gYXJyYXksIHRoZSBgaW5kZXhgIHdpbGwgaWRlbnRpZnkgd2hhdCBpbmRleCB0aGUgZmllbGQgaXMgdG8gYWNjdXJhdGVseSBmZXRjaCB0aGUgcnVsZSBmb3IgdGhhdCBzcGVjaWZpYyBmaWVsZDsgRGVmYXVsdHMgdG8gMCBpZiBubyB2YWx1ZSBpcyBwYXNzZWRcclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59XHRpc0FycmF5Q29udGFpbmVyXHRJZGVudGlmeSBpZiB0aGUgZmllbGQgYmVpbmcgcGFzc2VkIGlzIGFuIGFycmF5IGNvbnRhaW5lci4gQW4gYXJyYXkgY29udGFpbmVyIGlzIGEgZmllbGQgd2hpY2ggaGFzIGEgc3F1YXJlIGJyYWNrZXQgKGBbXWApOyBEZWZhdWx0cyB0byBgZmFsc2VgIGlmIG5vIHZhbHVlIGlzIHBhc3NlZC5cclxuXHQgKiBcclxuXHQgKiBAcmV0dXJuIHtPYmplY3R9XHRcdEEgSlNPTiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIHJ1bGVzIGZvciB0aGUgcHJvdmlkZWQgYGZpZWxkYFxyXG5cdCAqL1xyXG5cdHN0YXRpYyAjZmV0Y2hSdWxlcyhmaWVsZCwgb2JqLCBpbmRleCA9IDAsIGlzQXJyYXlDb250YWluZXIgPSBmYWxzZSkge1xyXG5cdFx0bGV0IHJ1bGVzID0gb2JqW2ZpZWxkXTtcclxuXHRcdHJ1bGVzID0gKHR5cGVvZiBydWxlcyA9PSAndW5kZWZpbmVkJykgPyBbXSA6IHJ1bGVzO1xyXG5cclxuXHRcdGlmICghaXNBcnJheUNvbnRhaW5lcikge1xyXG5cdFx0XHRmaWVsZCA9IGZpZWxkLnN1YnN0cigwLCBmaWVsZC5sYXN0SW5kZXhPZihcIi5cIikpO1xyXG5cclxuXHRcdFx0bGV0IGFkZGl0aW9uYWxSdWxlcyA9IG9ialtgJHtmaWVsZH0uJHtpbmRleH1gXTtcclxuXHRcdFx0cnVsZXMgPSAodHlwZW9mIGFkZGl0aW9uYWxSdWxlcyA9PSAndW5kZWZpbmVkJykgPyBydWxlcyA6IHJ1bGVzLmNvbmNhdChhZGRpdGlvbmFsUnVsZXMpO1xyXG5cclxuXHRcdFx0YWRkaXRpb25hbFJ1bGVzID0gb2JqW2Ake2ZpZWxkfS4qYF07XHJcblx0XHRcdHJ1bGVzID0gKHR5cGVvZiBhZGRpdGlvbmFsUnVsZXMgPT0gJ3VuZGVmaW5lZCcpID8gcnVsZXMgOiBydWxlcy5jb25jYXQoYWRkaXRpb25hbFJ1bGVzKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcnVsZXMudW5pcSgpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRmV0Y2hlcyB0aGUgbWVzc2FnZXMgZnJvbSB0aGUgSlNPTiBvYmplY3QgcGFzc2VkIGF0IGBvYmpgIHVzaW5nIHRoZSBwcm92aWRlZCBmaWVsZCBuYW1lIGF0IGBmaWVsZGBcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge1N0cmluZ31cdGZpZWxkXHRcdFx0XHRUaGUgYmFzZSBuYW1lIG9mIHRoZSBmaWVsZCB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBydWxlIGtleVxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fVx0b2JqXHRcdFx0XHRcdFRoZSBKU09OIG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSBtZXNzYWdlcyBwYXNzZWQgdG8gdGhlIFZhbGlkYXRvciBpbnN0YW5jZVxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfVx0aW5kZXhcdFx0XHRcdElmIHRoZSBwYXNzZWQgZmllbGQgaXMgYW4gYXJyYXksIHRoZSBgaW5kZXhgIHdpbGwgaWRlbnRpZnkgd2hhdCBpbmRleCB0aGUgZmllbGQgaXMgdG8gYWNjdXJhdGVseSBmZXRjaCB0aGUgcnVsZSBmb3IgdGhhdCBzcGVjaWZpYyBmaWVsZDsgRGVmYXVsdHMgdG8gMCBpZiBubyB2YWx1ZSBpcyBwYXNzZWRcclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59XHRpc0FycmF5Q29udGFpbmVyXHRJZGVudGlmeSBpZiB0aGUgZmllbGQgYmVpbmcgcGFzc2VkIGlzIGFuIGFycmF5IGNvbnRhaW5lci4gQW4gYXJyYXkgY29udGFpbmVyIGlzIGEgZmllbGQgd2hpY2ggaGFzIGEgc3F1YXJlIGJyYWNrZXQgKGBbXWApOyBEZWZhdWx0cyB0byBgZmFsc2VgIGlmIG5vIHZhbHVlIGlzIHBhc3NlZC5cclxuXHQgKiBcclxuXHQgKiBAcmV0dXJuIHtPYmplY3R9XHRcdEEgSlNPTiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIG1lc3NhZ2UgZm9yIHRoZSBwcm92aWRlZCBgZmllbGRgXHJcblx0ICovXHJcblx0c3RhdGljICNmZXRjaE1lc3NhZ2VzKGZpZWxkLCBvYmosIGluZGV4ID0gMCwgaXNBcnJheUNvbnRhaW5lciA9IGZhbHNlKSB7XHJcblx0XHRsZXQgbWVzc2FnZXMgPSBvYmpbZmllbGRdO1xyXG5cdFx0bWVzc2FnZXMgPSAodHlwZW9mIG1lc3NhZ2VzID09ICd1bmRlZmluZWQnKSA/IHt9IDogbWVzc2FnZXM7XHJcblxyXG5cdFx0aWYgKCFpc0FycmF5Q29udGFpbmVyKSB7XHJcblx0XHRcdGZpZWxkID0gZmllbGQuc3Vic3RyKDAsIGZpZWxkLmxhc3RJbmRleE9mKFwiLlwiKSk7XHJcblx0XHRcdGxldCBhZGRpdGlvbmFsTWVzc2FnZXMgPSBvYmpbYCR7ZmllbGR9LiR7aW5kZXh9YF07XHJcblx0XHRcdG1lc3NhZ2VzID0gKHR5cGVvZiBhZGRpdGlvbmFsUnVsZXMgPT0gJ3VuZGVmaW5lZCcpID8gbWVzc2FnZXMgOiBPYmplY3QuYXNzaWduKG1lc3NhZ2VzLCBhZGRpdGlvbmFsTWVzc2FnZXMpO1xyXG5cclxuXHRcdFx0YWRkaXRpb25hbE1lc3NhZ2VzID0gb2JqW2Ake2ZpZWxkfS4qYF07XHJcblx0XHRcdG1lc3NhZ2VzID0gKHR5cGVvZiBhZGRpdGlvbmFsUnVsZXMgPT0gJ3VuZGVmaW5lZCcpID8gbWVzc2FnZXMgOiBPYmplY3QuYXNzaWduKG1lc3NhZ2VzLCBhZGRpdGlvbmFsTWVzc2FnZXMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBtZXNzYWdlcztcclxuXHR9XHJcblxyXG5cdC8vIFBSSVZBVEUgTUVUSE9EU1xyXG5cdC8qKlxyXG5cdCAqIFZhbGlkYXRlcyBhIHNpbmdsZSBmaWVsZCB1c2luZyB0aGUgcnVsZXMgcHJvdmlkZWQuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9XHRmaWVsZFx0XHRUaGUgbmFtZSBvZiB0aGUgZmllbGQgdGhhdCB3aWxsIGJlIHZhbGlkYXRlZFxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fVx0cnVsZXNcdFx0QSBKU09OIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgcnVsZXMgZm9yIHRoaXMgZmllbGQuIFVzZSB0aGUgYCNmZXRjaFJ1bGVzKClgIG1ldGhvZCB0byBkbyB0aGlzXHJcblx0ICogQHBhcmFtIHtPYmplY3R9XHRtZXNzYWdlc1x0QSBKU09OIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgbWVzc2FnZXMgZm9yIHRoaXMgZmllbGQuIFVzZSB0aGUgYCNmZXRjaE1lc3NhZ2VzKClgIG1ldGhvZCB0byBkbyB0aGlzXHJcblx0ICogXHJcblx0ICogQHJldHVybiB7Qm9vbGVhbn1cdFx0QSBib29sZWFuIHZhbHVlIHdoaWNoIGlkZW50aWZpZXMgaWYgdGhlIG90aGVyIHZhbGlkYXRpb25zIHNob3VsZCBiZSBjaGVja2VkIG9yIG5vdC5cclxuXHQgKi9cclxuXHQjdmFsaWRhdGVGaWVsZChmaWVsZCwgdmFsdWUsIHJ1bGVzLCBtZXNzYWdlcywgaXNBcnJheSA9IGZhbHNlKSB7XHJcblx0XHQvLyBBbiBpdGVyYWJsZSBpbmRleCB1c2VkIHRvIGlkZW50aWZ5IGhvdyBtYW55IGN1c3RvbSBmdW5jdGlvbiBydWxlcyBhcmUgcHJvdmlkZWQuXHJcblx0XHRsZXQgY2xvc3VyZUluZGV4ID0gMDtcclxuXHJcblx0XHQvLyBDb250YWlucyBhbGwgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvblxyXG5cdFx0bGV0IHZhbGlkYXRpb25SZXN1bHQgPSBbXTtcclxuXHRcdGxldCBydW5PdGhlclZhbGlkYXRpb24gPSB0cnVlO1xyXG5cclxuXHRcdC8vIEl0ZXJhdGUgdGhyb3VnaCB0aGUgcnVsZXNcclxuXHRcdGZvciAobGV0IHJ1bGUgb2YgcnVsZXMpIHtcclxuXHRcdFx0bGV0IG9nUnVsZSA9IHJ1bGU7XHJcblx0XHRcdGxldCBtZXNzYWdlID0gbWVzc2FnZXNbcnVsZV07XHJcblx0XHRcdGxldCB2YWxpZGF0b3JWYWx1ZXM7XHJcblx0XHRcdGxldCBydWxlVHlwZTtcclxuXHRcdFx0XHJcblx0XHRcdGlmICh0eXBlb2YgcnVsZSA9PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0Ly8gSWYgdGhlIHJ1bGUgY29udGFpbnMgYSB2YWx1ZSAoZGVub3RlZCBieSBhIGNvbG9uICg6KSksIHJlbW92ZXMgdGhlIGxhdHRlciBoYWxmIG9mIHRoZSBydWxlXHJcblx0XHRcdFx0aWYgKHJ1bGUuc3BsaXQoXCI6XCIpLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0XHRcdHZhbGlkYXRvclZhbHVlcyA9IHJ1bGUuc3BsaXQoXCI6XCIpWzFdLnNwbGl0KC9cXHMqLFxccyovKTtcclxuXHRcdFx0XHRcdHJ1bGUgPSBydWxlLnNwbGl0KFwiOlwiKVswXTtcclxuXHRcdFx0XHRcdG1lc3NhZ2UgPSBtZXNzYWdlc1tydWxlXTtcclxuXHJcblx0XHRcdFx0XHRpZiAocnVsZSA9PT0gXCJyZXF1aXJlZF9pZlwiKSB7XHJcblx0XHRcdFx0XHRcdHZhbGlkYXRvclZhbHVlcy5wdXNoKHRoaXMuI3ZhbHVlTGlzdFt2YWxpZGF0b3JWYWx1ZXNbMF1dKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIFNwbGl0IHRoZSBydWxlIHVzaW5nIHRoZSB1bmRlcnNjb3JlIChfKSBhbmQgcmVzZXRzIHRoZSBydWxlIHZhcmlhYmxlXHJcblx0XHRcdFx0bGV0IHNwbGljZWRSdWxlID0gcnVsZS5zcGxpdChcIl9cIik7XHJcblx0XHRcdFx0cnVsZSA9IFwiXCI7XHJcblxyXG5cdFx0XHRcdC8vIEl0ZXJhdGUgdGhyb3VnaCB0aGUgc3BsaWNlZCBydWxlIGZyb20gZWFybGllciBhbmQgYWRkIHRoZW0gdXAgdG8gYmUgYSBcIlBhc2NhbENhc2VcIlxyXG5cdFx0XHRcdGZvciAobGV0IHIgb2Ygc3BsaWNlZFJ1bGUpXHJcblx0XHRcdFx0XHRydWxlICs9IHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyByLnNsaWNlKDEpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCBydWxlTmFtZSA9IHJ1bGU7XHJcblxyXG5cdFx0XHQvLyBVc2VzIHRyeS1jYXRjaCB0byBwcmV2ZW50IHRoZSBzY3JpcHQgZnJvbSBzdG9wcGluZyB3aGVuIGFuIHVua25vd24gcnVsZSBpcyBlbmNvdW50ZXJlZC5cclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHQvLyBJZiB0aGUgcnVsZSBpcyBhIHN0cmluZyBuYW1lLCB0aGVuIHByb2NlZWQgd2l0aCB1c2luZyBpdCB3aXRoIHRoZSBgUnVsZXNgLlxyXG5cdFx0XHRcdGlmICh0eXBlb2YgcnVsZSA9PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0XHRydWxlID0gKHR5cGVvZiB2YWxpZGF0b3JWYWx1ZXMgPT0gJ3VuZGVmaW5lZCcpID8gbmV3IFJ1bGVzW3J1bGVdKGZpZWxkLCB2YWx1ZSwgbWVzc2FnZSkgOiBuZXcgUnVsZXNbcnVsZV0oZmllbGQsIHZhbHVlLCB2YWxpZGF0b3JWYWx1ZXMsIG1lc3NhZ2UpO1xyXG5cdFx0XHRcdFx0cnVsZSA9IHJ1bGUudmFsaWRhdGUoKTtcclxuXHRcdFx0XHRcdHJ1bGVUeXBlID0gXCJzdHJpbmdcIjtcclxuXHJcblx0XHRcdFx0XHRpZiAodHlwZW9mIHJ1bGUucnVuT3RoZXJWYWxpZGF0aW9uID09ICdib29sZWFuJykge1xyXG5cdFx0XHRcdFx0XHRydW5PdGhlclZhbGlkYXRpb24gPSBydWxlLnJ1bk90aGVyVmFsaWRhdGlvbjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gSWYgdGhlIHJ1bGUgaXMgYSBmdW5jdGlvbjsgYW4gYW5vbnltb3VzIG9yIGEgbmFtZWQgZnVuY3Rpb24sIHByb2NlZWQgd2l0aCBqdXN0IHVzaW5nIHRoZSBmdW5jdGlvbi5cclxuXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgcnVsZSA9PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0XHRcdGxldCBjdXN0b21SdWxlO1xyXG5cdFx0XHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIGZ1bmN0aW9uIGhhcyAyIHBhcmFtZXRlcnMgb3Igbm90XHJcblx0XHRcdFx0XHRpZiAocnVsZS5sZW5ndGggPT0gMikge1xyXG5cdFx0XHRcdFx0XHQvLyBSdW5zIHRoZSBmdW5jdGlvbi4gTXVzdCByZXR1cm4gYW4gb2JqZWN0XHJcblx0XHRcdFx0XHRcdGN1c3RvbVJ1bGUgPSBydWxlKGZpZWxkLCB2YWx1ZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvLyBJZiB0aGUgY3VzdG9tIGZ1bmN0aW9uIGlzIG5vdCBleGFjdGx5IDIgcGFyYW1ldGVycywgc2tpcCBhbmQgd2FybiB0aGUgZGV2ZWxvcGVyXHJcblx0XHRcdFx0XHRlbHNlIGlmIChydWxlLmxlbmd0aCA+IDIgfHwgKHJ1bGUubGVuZ3RoIDwgMiAmJiBydWxlLmxlbmd0aCAhPSAwKSkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFwiUHJvdmlkZWQgcnVsZSBjYW5ub3QgYmUgZXhlY3V0ZWQgYXMgaXQgZG9lcyBub3QgZm9sbG93IHRoZSByZXF1aXJlZCBmb3JtYXQuXCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8gT3RoZXJ3aXNlLCBpZiB0aGUgY3VzdG9tIGRvZXMgbm90IGhhdmUgYSBwYXJhbWV0ZXIsIHRoZW4ganVzdCBjYWxsIGl0LlxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdGN1c3RvbVJ1bGUgPSBydWxlKCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8gQWZ0ZXIgcnVubmluZyB0aGUgY3VzdG9tIHJ1bGUsIHJ1biBhIGNoZWNrLi4uXHJcblx0XHRcdFx0XHQvLyBJZiB0aGUgcmV0dXJuZWQgdmFsdWUgZnJvbSB0aGUgY3VzdG9tIHJ1bGUgaXNuJ3QgYW4gb2JqZWN0Li4uXHJcblx0XHRcdFx0XHRpZiAodHlwZW9mIGN1c3RvbVJ1bGUgIT09ICdvYmplY3QnKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUud2FybihcIkN1c3RvbSBydWxlIG11c3QgcmV0dXJuIGEgSlNPTiBvYmplY3QsIGNvbnRhaW5pbmcgdGhlIGZvbGxvd2luZyBrZXlzOlwiLCBbXCJ2YWxpZFwiLCBcIm1lc3NhZ2VcIl0pO1xyXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vIElmIHRoZSByZXR1cm5lZCB2YWx1ZSBpcyBhbiBPYmplY3QsIGNoZWNrIGlmIGl0IGhhcyB0aGUgZGVzaXJlZCBvdXRwdXQuIE90aGVyd2lzZSwgd2FybiB0aGUgdXNlclxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdGxldCBrZXlzID0gT2JqZWN0LmtleXMoY3VzdG9tUnVsZSkuc29ydCgpLnRvU3RyaW5nKCk7XHJcblx0XHRcdFx0XHRcdGxldCB0YXJnZXRLID0gW1widmFsaWRcIiwgXCJtZXNzYWdlXCJdLnNvcnQoKS50b1N0cmluZygpO1xyXG5cclxuXHRcdFx0XHRcdFx0bGV0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMoY3VzdG9tUnVsZSkuc29ydCgpO1xyXG5cdFx0XHRcdFx0XHRsZXQgdGFyZ2V0ViA9IFtcIlN0cmluZ1wiLCBcIkJvb2xlYW5cIl07XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoa2V5cyAhPSB0YXJnZXRLIHx8ICh0eXBlb2YgdmFsdWVzWzBdICE9IHRhcmdldFZbMF0gfHwgdHlwZW9mIHZhbHVlc1sxXSAhPSB0YXJnZXRWWzFdKSkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUud2FybihcclxuXHRcdFx0XHRcdFx0XHRcdFwiUHJvdmlkZWQgSlNPTiBkb2VzIG5vdCBtYXRjaCB0aGUgZGVzaXJlZCBvdXRwdXQhXFxuXFxuUHJvdmlkZWQ6XFxuXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRjdXN0b21SdWxlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJcXG5cXG5EZXNpcmVkOlxcblwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0e1widmFsaWRcIjogdHlwZW9mIHRydWUsIFwibWVzc2FnZVwiOiB0eXBlb2YgXCJTdHJpbmdcIn1cclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHJ1bGUgPSBjdXN0b21SdWxlO1xyXG5cdFx0XHRcdFx0cnVsZVR5cGUgPSBcImZ1bmN0aW9uXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIElmIG5vbmUgb2YgdGhlIGFib3ZlIHdvcmtzLCB3YXJuIHRoZW0gdGhhdCBzdWNoIHJ1bGUgY2Fubm90IGJlIHVzZWQuXHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oYENhbm5vdCB1c2UgYSBcIiR7dHlwZW9mIHJ1bGV9XCIgdG8gdmFsaWRhdGUgaW5wdXQuYCk7XHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIElmIHRoZSBydWxlIHJldHVybmVkIGEgZmFpbGVkIHZhbGlkYXRpb24sIGFkZCB0aGUgbWVzc2FnZSB0byB0aGUgbWVzc2FnZSBiYWdcclxuXHRcdFx0XHRpZiAoIXJ1bGUudmFsaWQpIHtcclxuXHRcdFx0XHRcdHRoaXMuI2Vycm9ycy5hZGQoXHJcblx0XHRcdFx0XHRcdHJ1bGVUeXBlID09ICdmdW5jdGlvbicgPyBgJHtmaWVsZH0uY2xvc3VyZV8ke2Nsb3N1cmVJbmRleH1gIDogYCR7ZmllbGR9LiR7b2dSdWxlLnNwbGl0KFwiOlwiKVswXX1gLFxyXG5cdFx0XHRcdFx0XHRydWxlLm1lc3NhZ2VcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGlzQXJyYXkpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy4jZXJyb3JzLmFkZChcclxuXHRcdFx0XHRcdFx0XHRydWxlVHlwZSA9PSAnZnVuY3Rpb24nID8gYCR7ZmllbGR9LmNsb3N1cmVfJHtjbG9zdXJlSW5kZXh9YCA6IGAke2ZpZWxkfS4ke29nUnVsZS5zcGxpdChcIjpcIilbMF19YCxcclxuXHRcdFx0XHRcdFx0XHRydWxlLm1lc3NhZ2VcclxuXHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRjbG9zdXJlSW5kZXgrKztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFsaWRhdGlvblJlc3VsdC5wdXNoKHJ1bGUudmFsaWQpO1xyXG5cdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0Ly8gU2VuZHMgb3V0IGEgd2FybmluZyBpZiBydWxlIGRvZXMgbm90IGV4aXN0cy5cclxuXHRcdFx0XHRjb25zb2xlLndhcm4oYE5vIHN1Y2ggcnVsZSBleGlzdHM6ICR7cnVsZU5hbWV9XFxuYCwgYEZpZWxkOiAke2ZpZWxkfVxcblxcbmAsIGUpO1xyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuI2ZpZWxkTmFtZXMucHVzaChmaWVsZCk7XHJcblx0XHRpZiAoIXZhbGlkYXRpb25SZXN1bHQuaW5jbHVkZXMoZmFsc2UpKVxyXG5cdFx0XHR0aGlzLiN2YWxpZGF0ZWRbZmllbGRdID0gdmFsdWU7XHJcblxyXG5cdFx0cmV0dXJuIHR5cGVvZiBydW5PdGhlclZhbGlkYXRpb24gPT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogcnVuT3RoZXJWYWxpZGF0aW9uO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogSWRlbnRpZmllcyBpZiB0aGUgZmllbGQgaXMgYW4gYXJyYXkgb3Igbm90LlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfVx0ZmllbGRcdFRIZSBuYW1lIG9mIHRoZSBmaWVsZCB0aGF0IHdpbGwgYmUgdGVzdGVkXHJcblx0ICogXHJcblx0ICogQHJldHVybiB7Qm9vbGVhbn1cdFx0UmV0dXJucyBhIGJvb2xlYW4gdmFsdWUsIHdoaWNoIGlzIGVpdGhlciBhIGB0cnVlYCwgaWYgdGhlIGZpZWxkIGlzIGFuIGFycmF5OyBvciBgZmFsc2VgIGlmIGl0IGlzbid0XHJcblx0ICogXHJcblx0ICogQGRlcHJlY2F0ZWRcclxuXHQgKi9cclxuXHQjaXNGaWVsZEFycmF5KGZpZWxkKSB7XHJcblx0XHRpZiAoZmllbGQuY29uc3RydWN0b3IubmFtZSA9PT0gJ1N0cmluZycpIHtcclxuXHRcdFx0aWYgKGZpZWxkLm1hdGNoKC8oXFwqKXwoXFxkKykvKSlcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHRoaXMuI3ZhbHVlTGlzdFtmaWVsZF0uY29uc3RydWN0b3IubmFtZSA9PT0gJ0FycmF5Jykge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHQvLyBQVUJMSUMgTUVUSE9EU1xyXG5cdC8qKlxyXG5cdCAqIElkZW50aWZpZXMgd2hldGhlciB0aGUgdmFsaWRhdGlvbiBmYWlsZWQgb3Igbm90LiBBIHNpbmdsZSBydWxlIHRoYXQgZmFpbCB3aWxsIHJlc3VsdCBpbiBhIHRvdGFsIGZhaWwgb2YgdGhlIHZhbGlkYXRpb24uXHJcblx0ICogXHJcblx0ICogQHJldHVybiB7Qm9vbGVhbn1cdFx0UmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbGlkYXRpb24gZmFpbHM7IGBmYWxzZWAgb3RoZXJ3aXNlLlxyXG5cdCAqL1xyXG5cdGZhaWxzKCkge1xyXG5cdFx0aWYgKCF0aGlzLiN2YWxpZGF0aW9uRG9uZSlcclxuXHRcdFx0dGhpcy4jcnVuVmFsaWRhdGlvbigpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLiNmYWlsZWQ7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBGZXRjaGVzIGFsbCB0aGUgZXJyb3IgbWVzc2FnZS5cclxuXHQgKiBcclxuXHQgKiBAcmV0dXJuIHtNZXNzYWdlQmFnfVx0XHRBbiBpbnN0YW5jZSBvZiBtZXNzYWdlIGJhZyBjb250YWluaW5nIGFsbCBlcnJvciBtZXNzYWdlcy5cclxuXHQgKi9cclxuXHRlcnJvcnMoKSB7XHJcblx0XHRpZiAoIXRoaXMuI3ZhbGlkYXRpb25Eb25lKVxyXG5cdFx0XHR0aGlzLiNydW5WYWxpZGF0aW9uKCk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuI2Vycm9ycztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFZhbGlkYXRlcyB0aGUgZmllbGRzIHByb3ZpZGVkIGFuZCByZXR1cm5zIGEgSlNPTiBvYmplY3QsIGNvbnRhaW5pbmcgYWxsIHRoZSB2YWx1ZXMgZnJvbSB0aGUgZmllbGRzIHRoYXQgcGFzc2VkLlxyXG5cdCAqIFxyXG5cdCAqIEByZXR1cm4ge09iamVjdH1cdFx0QSBKU09OIG9iamVjdCwgY29udGFpbmluZyBhIGtleS12YWx1ZSBwYWlyIGZvcm1hdCBvZiBmaWVsZHMgYW5kIHRoZWlyIHZhbHVlcyB0aGF0IHBhc3NlZCB0aGUgdmFsaWRhdGlvbi5cclxuXHQgKi9cclxuXHR2YWxpZGF0ZSgpIHtcclxuXHRcdGlmICghdGhpcy4jdmFsaWRhdGlvbkRvbmUpXHJcblx0XHRcdHRoaXMuI3J1blZhbGlkYXRpb24oKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy4jdmFsaWRhdGVkO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRGV0ZXJtaW5lIGlmIG1lc3NhZ2VzIGV4aXN0IGZvciB0aGUgZ2l2ZW4gZmllbGQuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gIHtTdHJpbmd9ICBmaWVsZFx0VGhlIG5hbWUgb2YgdGhlIGZpZWxkIHRoYXQgd2lsbCBiZSB0ZXN0ZWRcclxuXHQgKiBAcmV0dXJuIHtCb29sZWFufVx0XHRBIGJvb2xlYW4gdmFsdWU7IGVpdGhlciBhIGB0cnVlYCBpZiB0aGUgZmllbGQgZXhpc3RzLCBvciBgZmFsc2VgIGlmIGl0IGRvZXMgbm90XHJcblx0ICovXHJcblx0aGFzKGZpZWxkKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbnZhbGlkRmllbGRzKCkuaW5jbHVkZXMoa2V5KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCB0aGUgZmlyc3QgbWVzc2FnZSBmcm9tIHRoZSBtZXNzYWdlIGJhZyBmb3IgYSBnaXZlbiBmaWVsZC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSAge1N0cmluZ31cdGZpZWxkXHRUaGUgbmFtZSBvZiB0aGUgZmllbGQgdGhhdCB0aGUgbWVzc2FnZSB3aWxsIGJlIGZldGNoZWQgdXBvblxyXG5cdCAqIEByZXR1cm4ge1N0cmluZ31cdFx0VGhlIGZpcnN0IG1lc3NhZ2UgY29udGFpbmVkIHdpdGhpbiB0aGUgc2FpZCBmaWVsZC4gUmV0dXJucyBhbiBgdW5kZWZpbmVkYCB3aGVuIHRoZSBmaWVsZCBkb2VzIG5vdCBleGlzdHNcclxuXHQgKi9cclxuXHRmaXJzdChmaWVsZCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZXJyb3JzKCkuZmlyc3QoZmllbGQpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IGFsbCBvZiB0aGUgbWVzc2FnZXMgZnJvbSB0aGUgbWVzc2FnZSBiYWcgZm9yIGEgZ2l2ZW4gZmllbGQuIElmIG5vIHZhbHVlIG9yIGEgYG51bGxgIGlzIHByb3ZpZGVkIHRvIHRoZSBmaWVsZCwgaXQgcmV0dXJucyBhbGwgdGhlIG1lc3NhZ2VzIGNvbnRhaW5lZCB3aXRoaW4gdGhlIGN1cnJlbnQgaW5zdGFuY2Ugb2YgYE1lc3NhZ2VCYWdgXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gIHtTdHJpbmd9XHRmaWVsZFx0VGhlIG5hbWUgb2YgdGhlIGZpZWxkIHRoYXQgdGhlIG1lc3NhZ2Ugd2lsbCBiZSBmZXRjaGVkIHVwb25cclxuXHQgKiBAcmV0dXJuIHtPYmplY3R9XHRcdEEgSlNPTiBvYmplY3QgdGhhdCBjb250YWlucyB0aGUga2V5LXZhbHVlIHBhaXIgZm9yIGFsbCB0aGUgbWVzc2FnZSBvZiB0aGUgZmllbGQuXHJcblx0ICovXHJcblx0Z2V0KGZpZWxkID0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZXJyb3JzKCkuZ2V0KGZpZWxkKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHJpZXZlcyBhbiBhcnJheSBvZiBmaWVsZCBuYW1lcyB0aGF0IGFyZSBpbnZhbGlkXHJcblx0ICogXHJcblx0ICogQHJldHVybiB7QXJyYXl9XHRcdEFuIGFycmF5IG9mIGZpZWxkIG5hbWVzIHRoYXQgZmFpbGVkIHRoZSB2YWxpZGF0aW9uXHJcblx0ICovXHJcblx0aW52YWxpZEZpZWxkcygpIHtcclxuXHRcdHJldHVybiB0aGlzLmVycm9ycygpLmZpZWxkcygpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0cmlldmVzIGFuIGFycmF5IG9mIGZpZWxkIG5hbWVzIHRoYXQgYXJlIHZhbGlkXHJcblx0ICogXHJcblx0ICogQHJldHVybiB7QXJyYXl9XHRcdEFuIGFycmF5IG9mIGZpZWxkIG5hbWVzIHRoYXQgcGFzc2VkIHRoZSB2YWxpZGF0aW9uXHJcblx0ICovXHJcblx0dmFsaWRGaWVsZHMoKSB7XHJcblx0XHRyZXR1cm4gT2JqZWN0LmtleXModGhpcy52YWxpZGF0ZSgpKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHJpZXZlcyBhbGwgdGhlIGZpZWxkIG5hbWVzIHRoYXQgYXJlIHVzZWQgaW4gdGhpcyB2YWxpZGF0b3JcclxuXHQgKiBcclxuXHQgKiBAcmV0dXJuIHtBcnJheX1cdFx0QW4gYXJyYXkgb2YgYWxsIHRoZSBmaWVsZCBuYW1lcyB1c2VkIGluIHRoaXMgVmFsaWRhdG9yXHJcblx0ICovXHJcblx0ZmllbGRzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuI2ZpZWxkTmFtZXM7XHJcblx0fVxyXG59IiwiLy8gVXRpbGl0eVxyXG5pbXBvcnQgVW5pcXVlQXJyYXkgZnJvbSBcIi4uLy4uL2pzL3V0aWwvdW5pcXVlLWFycmF5L3VuaXF1ZS1hcnJheS5tb2QuanNcIjtcclxuaW1wb3J0IFN3YWxGbGFzaCBmcm9tIFwiLi4vLi4vanMvdXRpbC9zd2FsLWZsYXNoL3N3YWwtZmxhc2gubW9kLmpzXCI7XHJcblxyXG4vLyBWYWxpZGF0b3JcclxuaW1wb3J0IFZhbGlkYXRvciBmcm9tIFwiLi4vLi4vanMvdXRpbC92YWxpZGF0b3IvVmFsaWRhdG9yLmpzXCI7XHJcblxyXG52YXIgdmFsaWRhdGlvbiA9IHtcclxuXHRydWxlczoge1xyXG5cdFx0XCJ1c2VfcmFuZ2VcIjogW1wic29tZXRpbWVzXCIsIFwiYm9vbGVhblwiXSxcclxuXHRcdFwicmFuZ2VfbWluXCI6IFtcInNvbWV0aW1lc1wiLCBcIm51bWVyaWNcIiwgXCJtaW46MVwiLCBcIm1heDokcmFuZ2VfbWF4XCJdLFxyXG5cdFx0XCJyYW5nZV9tYXhcIjogW1wic29tZXRpbWVzXCIsIFwibnVtZXJpY1wiLCBcIm1pbjokcmFuZ2VfbWluXCIsIFwibWF4OjI1NVwiXSxcclxuXHRcdFwibGVuZ3RoXCI6IFtcInNvbWV0aW1lc1wiLCBcIm51bWVyaWNcIiwgXCJiZXR3ZWVuOjEsMjU1XCJdLFxyXG5cdFx0XCJjaGFyc1wiOiBbXCJyZXF1aXJlZFwiLCBcImFycmF5XCIsIFwibWluOjFcIl0sXHJcblx0XHRcImNoYXJzLipcIjogW1wic29tZXRpbWVzXCIsIFwiaW46YWxwaGEsbnVtZXJpYyxzcGVjXCJdXHJcblx0fSxcclxuXHRtZXNzYWdlOiB7XHJcblx0XHRcInVzZV9yYW5nZVwiOiB7XHJcblx0XHRcdFwiYm9vbGVhblwiOiBgTWFsZm9ybWVkIGRhdGEsIHBsZWFzZSByZWZyZXNoIHRoZSBwYWdlYCxcclxuXHRcdH0sXHJcblx0XHRcInJhbmdlX21pblwiOiB7XHJcblx0XHRcdFwibnVtZXJpY1wiOiBgTWluaW11bSByYW5nZSBzaG91bGQgYmUgYSBudW1iZXJgLFxyXG5cdFx0XHRcIm1pblwiOiBgTWluaW11bSB2YWx1ZSBzaG91bGQgYmUgYXQgbGVhc3QgOm1pbmAsXHJcblx0XHRcdFwibWF4XCI6IGBNYXhpbXVtIHZhbHVlIHNob3VsZCBiZSBhdCBtYXgsIDptYXhgLFxyXG5cdFx0fSxcclxuXHRcdFwicmFuZ2VfbWF4XCI6IHtcclxuXHRcdFx0XCJudW1lcmljXCI6IGBNYXhpbXVtIHJhbmdlIHNob3VsZCBiZSBhIG51bWJlcmAsXHJcblx0XHRcdFwibWluXCI6IGBNYXhpbXVtIHZhbHVlIHNob3VsZCBiZSBhdCBsZWFzdCA6bWluYCxcclxuXHRcdFx0XCJtYXhcIjogYE1heGltdW0gdmFsdWUgc2hvdWxkIGJlIGF0IG1heCwgOm1heGAsXHJcblx0XHR9LFxyXG5cdFx0XCJsZW5ndGhcIjoge1xyXG5cdFx0XHRcImxlbmd0aC5udW1lcmljXCI6IGBMZW5ndGggc2hvdWxkIGJlIGEgbnVtYmVyYCxcclxuXHRcdFx0XCJsZW5ndGguYmV0d2VlblwiOiBgTGVuZ3RoIHNob3VsZCBiZSBhIHZhbHVlIGJldHdlZW4gOm1pbiBhbmQgOm1heGAsXHJcblx0XHR9LFxyXG5cdFx0XCJjaGFyc1wiOiB7XHJcblx0XHRcdFwicmVxdWlyZWRcIjogYENoYXJhY3RlciBBY2NlcHRlZCBpcyByZXF1aXJlZGAsXHJcblx0XHRcdFwiYXJyYXlcIjogYE1hbGZvcm1lZCBkYXRhLCBwbGVhc2UgcmVmcmVzaCB0aGUgcGFnZWAsXHJcblx0XHRcdFwibWluXCI6IGBQbGVhc2Ugc2VsZWN0IGF0IGxlYXN0IDEgb3B0aW9uYCxcclxuXHRcdH0sXHJcblx0XHRcImNoYXJzLipcIjoge1xyXG5cdFx0XHRcImJvb2xlYW5cIjogYE1hbGZvcm1lZCBkYXRhLCBwbGVhc2UgcmVmcmVzaCB0aGUgcGFnZWAsXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuXHQvLyBJbml0aWFsaXplIG5lY2Vzc2FyeSB1dGlsaXRpZXNcclxuXHRVbmlxdWVBcnJheSgpO1xyXG5cclxuXHQvLyBFTkFCTEUvRElTQUJMRSBSQU5HRSBPUFRJT05cclxuXHQkKGAjdXNlUmFuZ2VgKS5vbignY2hhbmdlJywgKGUpID0+IHtcclxuXHRcdGxldCBvYmogPSAkKGUuY3VycmVudFRhcmdldCk7XHJcblx0XHRsZXQgcmFuZ2UgPSAkKFwiI2xlbmd0aF9yYW5nZVwiKTtcclxuXHRcdGxldCBmaXhlZCA9ICQoXCIjbGVuZ3RoX2ZpeGVkXCIpO1xyXG5cclxuXHRcdGlmIChvYmoucHJvcCgnY2hlY2tlZCcpKSB7XHJcblx0XHRcdHJhbmdlLmZpbmQoYGlucHV0YCkucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcblx0XHRcdGZpeGVkLmZpbmQoYGlucHV0YCkucHJvcCgnZGlzYWJsZWQnLCB0cnVlKS5yZW1vdmVDbGFzcyhcImlzLXZhbGlkIGlzLWludmFsaWRcIik7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0cmFuZ2UuZmluZChgaW5wdXRgKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpLnJlbW92ZUNsYXNzKFwiaXMtdmFsaWQgaXMtaW52YWxpZFwiKTtcclxuXHRcdFx0Zml4ZWQuZmluZChgaW5wdXRgKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuXHRcdH1cclxuXHR9KS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHJcblx0Ly8gUkFOR0UgTUlOIFNFVFRFUlxyXG5cdCQoYCNyYW5nZV9taW5gKS5vbignY2hhbmdlJywgKGUpID0+IHtcclxuXHRcdGxldCBvYmogPSAkKGUuY3VycmVudFRhcmdldCk7XHJcblx0XHRsZXQgdGFyZ2V0ID0gJChgI3JhbmdlX21heGApO1xyXG5cdFx0bGV0IG5ld01pbiA9IG9iai52YWwoKSA/PyAwO1xyXG5cclxuXHRcdG5ld01pbiA9IChuZXdNaW4ubWF0Y2goL14tP1xcZCskL2cpPy5sZW5ndGggPz8gMCkgPiAwID8gcGFyc2VJbnQobmV3TWluKSA6IHBhcnNlSW50KHRhcmdldC5hdHRyKCdtaW4nKSk7XHJcblxyXG5cdFx0dGFyZ2V0LmF0dHIoJ21pbicsIG5ld01pbik7XHJcblx0fSkudHJpZ2dlcignY2hhbmdlJyk7XHJcblxyXG5cdC8vIFJBTkdFIE1BWCBTRVRURVJcclxuXHQkKGAjcmFuZ2VfbWF4YCkub24oJ2NoYW5nZScsIChlKSA9PiB7XHJcblx0XHRsZXQgb2JqID0gJChlLmN1cnJlbnRUYXJnZXQpO1xyXG5cdFx0bGV0IHRhcmdldCA9ICQoYCNyYW5nZV9taW5gKTtcclxuXHRcdGxldCBuZXdNYXggPSBvYmoudmFsKCkgPz8gMDtcclxuXHJcblx0XHRuZXdNYXggPSAobmV3TWF4Lm1hdGNoKC9eLT9cXGQrJC9nKT8ubGVuZ3RoID8/IDApID4gMCA/IHBhcnNlSW50KG5ld01heCkgOiBwYXJzZUludCh0YXJnZXQuYXR0cignbWF4JykpO1xyXG5cclxuXHRcdHRhcmdldC5hdHRyKCdtYXgnLCBuZXdNYXgpO1xyXG5cdH0pLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cclxuXHQvLyBGT1JNIFNVQk1JVFxyXG5cdCQoYCNzdHJpbmdfZm9ybWApLm9uKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHR2YWxpZGF0ZSgkKGUuY3VycmVudFRhcmdldCkpO1xyXG5cdH0pO1xyXG5cclxuXHQvLyBGT1JNIFJFU0VUVEVSXHJcblx0JChgI3Jlc2V0Rm9ybWApLm9uKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHQkKGAjcmVzdG9yZVBhc3NWaWV3YCkudHJpZ2dlcignY2xpY2snKVxyXG5cdFx0XHQucmVtb3ZlKCk7XHJcblx0XHRsZXQgdXNlUmFuZ2UgPSAkKGAjdXNlUmFuZ2VgKTtcclxuXHJcblx0XHRpZiAodXNlUmFuZ2UucHJvcChgY2hlY2tlZGApKSB7XHJcblx0XHRcdHVzZVJhbmdlLnByb3AoYGNoZWNrZWRgLCBmYWxzZSkudHJpZ2dlcihgY2hhbmdlYCk7XHJcblx0XHR9XHJcblxyXG5cdFx0JChgW25hbWVdYCkucmVtb3ZlQ2xhc3MoYGlzLXZhbGlkIGlzLWludmFsaWRgKVxyXG5cdFx0XHQuY2xvc2VzdChgZm9ybWApXHJcblx0XHRcdC5lYWNoKChrLCB2KSA9PiB2LnJlc2V0KCkpO1xyXG5cclxuXHRcdGxldCBnc3RyID0gJChgI2dlbmVyYXRlZF9zdHJpbmdgKTtcclxuXHRcdGFuaW1hdGVUZXh0KGdzdHIsICcnKTtcclxuXHJcblx0XHRTd2FsRmxhc2guc3VjY2VzcyhcIkZvcm0gUmVzZXRcIik7XHJcblx0fSk7XHJcblxyXG5cdC8vIE1JTklNSVpFL01BWElNSVpFXHJcblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgYC5taW5pbWl6ZSwgLm1heGltaXplYCwgKGUpID0+IHtcclxuXHRcdGxldCBidG4gPSAkKGUudGFyZ2V0KSwgb2JqO1xyXG5cclxuXHRcdGlmICh0eXBlb2YgYnRuLmF0dHIoJ2RhdGEtdGFyZ2V0JykgIT0gJ3VuZGVmaW5lZCcpXHJcblx0XHRcdG9iaiA9ICQoYnRuLmF0dHIoJ2RhdGEtdGFyZ2V0JykpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRvYmogPSBidG47XHJcblxyXG5cdFx0bGV0IHdpbmRvdyA9IG9iai5jbG9zZXN0KFwiLndpbmRvd1wiKTtcclxuXHRcdGxldCBjb2xsYXBzZXIgPSB3aW5kb3cuY2xvc2VzdChcIi5jb2xsYXBzZVwiKTtcclxuXHRcdGxldCBvdGhlcnMgPSAkKGBbZGF0YS1wYXJlbnQ9XCIjJHt3aW5kb3cuYXR0cihcImlkXCIpfVwiXWApO1xyXG5cclxuXHRcdGlmICh3aW5kb3cuaGFzQ2xhc3MoXCJtYXhpbWl6ZWRcIikpIHtcclxuXHRcdFx0b3RoZXJzLmFkZENsYXNzKFwibWF4aW1pemVcIikucmVtb3ZlQ2xhc3MoXCJtaW5pbWl6ZVwiKS5hdHRyKFwidGl0bGVcIiwgXCJNYXhpbWl6ZVwiKTtcclxuXHRcdFx0YnRuLmFkZENsYXNzKFwibWF4aW1pemVcIikucmVtb3ZlQ2xhc3MoXCJtaW5pbWl6ZVwiKS5hdHRyKFwidGl0bGVcIiwgXCJNYXhpbWl6ZVwiKTtcclxuXHRcdFx0b2JqLmFkZENsYXNzKFwibWF4aW1pemVcIikucmVtb3ZlQ2xhc3MoXCJtaW5pbWl6ZVwiKS5hdHRyKFwidGl0bGVcIiwgXCJNYXhpbWl6ZVwiKTtcclxuXHRcdFx0d2luZG93LmFkZENsYXNzKFwibWluaW1pemVkXCIpLnJlbW92ZUNsYXNzKFwibWF4aW1pemVkXCIpO1xyXG5cclxuXHRcdFx0c2V0VGltZW91dChcclxuXHRcdFx0XHQoKSA9PiBjb2xsYXBzZXIuY29sbGFwc2UoXCJoaWRlXCIpLFxyXG5cdFx0XHRcdDI1MFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAod2luZG93Lmhhc0NsYXNzKFwibWluaW1pemVkXCIpKSB7XHJcblx0XHRcdGNvbGxhcHNlci5jb2xsYXBzZShcInNob3dcIik7XHJcblx0XHRcdG90aGVycy5hZGRDbGFzcyhcIm1pbmltaXplXCIpLnJlbW92ZUNsYXNzKFwibWF4aW1pemVcIikuYXR0cihcInRpdGxlXCIsIFwiTWluaW1pemVcIik7XHJcblx0XHRcdGJ0bi5hZGRDbGFzcyhcIm1pbmltaXplXCIpLnJlbW92ZUNsYXNzKFwibWF4aW1pemVcIikuYXR0cihcInRpdGxlXCIsIFwiTWluaW1pemVcIik7XHJcblx0XHRcdG9iai5hZGRDbGFzcyhcIm1pbmltaXplXCIpLnJlbW92ZUNsYXNzKFwibWF4aW1pemVcIikuYXR0cihcInRpdGxlXCIsIFwiTWluaW1pemVcIik7XHJcblxyXG5cdFx0XHR3aW5kb3cuYWRkQ2xhc3MoXCJtYXhpbWl6ZWRcIikucmVtb3ZlQ2xhc3MoXCJtaW5pbWl6ZWRcIik7XHJcblx0XHR9XHJcblx0fSk7XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIFZhbGlkYXRlcyBhIHNpbmdsZSBmb3JtIGFuZCByZXR1cm5zIHdoZXRoZXIgdGhleSBwYXNzZWQgdGhlIHZhbGlkYXRpb24gb3Igbm90LiBTaW5jZSB0aGlzXHJcbiAqIGlzIG9ubHkgdXNlZCBpbiBhIHZlcnkgc3BlY2lmaWMgaW5zdGFuY2UsIHRoZSBydWxlcyBhbmQgbWVzc2FnZXMgYXJlIGFsbCBmcm9tIGEgc2luZ2xlXHJcbiAqIHNvdXJjZS5cclxuICpcclxuICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR8SlF1ZXJ5fSBmb3JtIEEgc2luZ2xlIGZvcm0gZWxlbWVudCB0aGF0IHdpbGwgYmUgdmFsaWRhdGVkLiBJdCBjb3VsZCBiZSBhbiBgSFRNTEZvcm1FbGVtZW50YCBvYmplY3Qgb3IgYSBgSlF1ZXJ5YCBIVE1MIG9iamVjdC5cclxuICogQHJldHVybnMgYm9vbGVhbiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZm9ybSBwYXNzZXMgdmFsaWRhdGlvbjsgYGZhbHNlYCBvdGhlcndpc2UuXHJcbiAqL1xyXG5jb25zdCB2YWxpZGF0ZSA9IGZ1bmN0aW9uKGZvcm0pIHtcclxuXHQvLyBDYXB0dXJlIGFsbCBpbnB1dHNcclxuXHRsZXQgZmllbGRzID0gJChgW25hbWVdYCkubm90KGA6ZGlzYWJsZWQsIFtkaXNhYmxlZF1gKTtcclxuXHRsZXQgdmFsaWRzID0gJChgaW5wdXQ6dmFsaWRgKS5ub3QoYDpkaXNhYmxlZCwgW2Rpc2FibGVkXWApO1xyXG5cdGxldCBpbnZhbGlkcyA9ICQoYGlucHV0OmludmFsaWRgKS5ub3QoYDpkaXNhYmxlZCwgW2Rpc2FibGVkXWApO1xyXG5cclxuXHQvLyBTZXQgdmFsaWRhdGlvbiBpbnB1dFxyXG5cdHZhbGlkYXRpb24udmFsdWVzID0gZm9ybS5zZXJpYWxpemVGb3JtSlNPTih0cnVlKTtcclxuXHJcblx0Ly8gVXBkYXRlIHNvbWUgcnVsZSB2YWx1ZXNcclxuXHRsZXQgdmFyaWFibGVSdWxlID0gWydyYW5nZV9taW4nLCAncmFuZ2VfbWF4J107XHJcblx0bGV0IG1vZFZSdWxlcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsaWRhdGlvbi5ydWxlcykpO1xyXG5cdGZvciAobGV0IHIgb2YgdmFyaWFibGVSdWxlKSB7XHJcblx0XHRtb2RWUnVsZXNbcl0uZmluZCgodiwgaykgPT4ge1xyXG5cdFx0XHRpZiAodi5tYXRjaCgvXFwkXFx3Ky9nKSkge1xyXG5cdFx0XHRcdGxldCB0YXJnZXRLZXkgPSB2Lm1hdGNoKC8oXFwkKShcXHcrKS8pWzJdO1xyXG5cclxuXHRcdFx0XHRpZiAoIU9iamVjdC5rZXlzKHZhbGlkYXRpb24udmFsdWVzKS5pbmNsdWRlcyh0YXJnZXRLZXkpKVxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHRtb2RWUnVsZXNbcl1ba10gPSB2LnJlcGxhY2UoLyhcXCQpKFxcdyspLywgdmFsaWRhdGlvbi52YWx1ZXNbdGFyZ2V0S2V5XSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0bGV0IHZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoXHJcblx0XHR2YWxpZGF0aW9uLnZhbHVlcyxcclxuXHRcdG1vZFZSdWxlcyxcclxuXHRcdHZhbGlkYXRpb24ubWVzc2FnZVxyXG5cdCk7XHJcblxyXG5cdGxldCBpbnZhbGlkRmllbGRzID0gdmFsaWRhdG9yLmludmFsaWRGaWVsZHMoKTtcclxuXHRsZXQgdmFsaWRGaWVsZHMgPSB2YWxpZGF0b3IudmFsaWRGaWVsZHMoKTtcclxuXHJcblx0Ly8gVXBkYXRlIHRoZWlyIGNsYXNzXHJcblx0ZmllbGRzLnJlbW92ZUNsYXNzKFwiaXMtdmFsaWQgaXMtaW52YWxpZFwiKTtcclxuXHJcblx0dmFsaWRzLmFkZENsYXNzKFwiaXMtdmFsaWRcIik7XHJcblx0dmFsaWRzLnJlbW92ZUNsYXNzKFwiaXMtaW52YWxpZFwiKTtcclxuXHJcblx0aW52YWxpZHMuYWRkQ2xhc3MoXCJpcy1pbnZhbGlkXCIpO1xyXG5cdGludmFsaWRzLnJlbW92ZUNsYXNzKFwiaXMtdmFsaWRcIik7XHJcblxyXG5cdC8vIFVwZGF0ZSB2YWxpZGF0aW9uIG1lc3NhZ2VcclxuXHR2YWxpZHMuY2xvc2VzdChgLmZvcm0tZ3JvdXBgKS5maW5kKFwiZmVlZGJhY2tcIikucmVtb3ZlQ2xhc3MoYHRleHQtZGFuZ2VyYCk7XHJcblx0aW52YWxpZHMuY2xvc2VzdChgLmZvcm0tZ3JvdXBgKS5maW5kKFwiZmVlZGJhY2tcIikuYWRkQ2xhc3MoYHRleHQtZGFuZ2VyYCk7XHJcblxyXG5cdC8vIEFwcGx5IHRoZSB2YWxpZGF0b3JzIHZhbGlkYXRpb25cclxuXHQkLmVhY2godmFsaWRGaWVsZHMsIChrLCB2KSA9PiB7XHJcblx0XHQkKGBbZGF0YS12YWxpZGF0aW9uXWApLnRleHQoXCJcIik7XHJcblx0fSk7XHJcblxyXG5cdCQuZWFjaChpbnZhbGlkRmllbGRzLCAoaywgdikgPT4ge1xyXG5cdFx0bGV0IHZhbGlkYXRpb25Nc2dGaWVsZHMgPSAkKGBbZGF0YS12YWxpZGF0aW9uXWApO1xyXG5cdFx0dmFsaWRhdGlvbk1zZ0ZpZWxkcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRsZXQgb2JqID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdGlmIChvYmouYXR0cihcImRhdGEtdmFsaWRhdGlvblwiKS5tYXRjaChgKCR7dn0pYCkgIT0gbnVsbCkge1xyXG5cdFx0XHRcdG9iai5jbG9zZXN0KGAuZm9ybS1ncm91cGApXHJcblx0XHRcdFx0XHQuZmluZChgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWFgKVxyXG5cdFx0XHRcdFx0Lm5vdChcIjpkaXNhYmxlZCwgW2Rpc2FibGVkXVwiKVxyXG5cdFx0XHRcdFx0LnJlbW92ZUNsYXNzKFwiaXMtdmFsaWRcIilcclxuXHRcdFx0XHRcdC5hZGRDbGFzcyhcImlzLWludmFsaWRcIik7XHJcblx0XHRcdH07XHJcblx0XHR9KTtcclxuXHJcblx0XHR2YWxpZGF0aW9uTXNnRmllbGRzLnRleHQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdGxldCBvYmogPSAkKHRoaXMpO1xyXG5cdFx0XHRpZiAob2JqLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicpLm1hdGNoKHYpKVxyXG5cdFx0XHRcdG9iai50ZXh0KHZhbGlkYXRvci5maXJzdCh2KSkuYWRkQ2xhc3MoXCJ0ZXh0LWRhbmdlclwiKTtcclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8gSWYgdGhlIHZhbGlkYXRpb24gZmFpbGVkLCBwcmV2ZW50IHRoZSBjb2RlIGZyb20gcHJvZ3Jlc3NpbmcgZnVydGhlciwgdGhlbiBzaG93IGEgdG9hc3Qgd2FybmluZ1xyXG5cdGlmICh2YWxpZGF0b3IuZmFpbHMoKSkge1xyXG5cdFx0U3dhbEZsYXNoLmVycm9yKFwiUGxlYXNlIHJlLWNoZWNrIHRoZSBkYXRhXCIpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdGxldCB2YWx1ZXMgPSB2YWxpZGF0b3IudmFsaWRhdGUoKTtcclxuXHRcdGxldCBjaGFycyA9IHZhbHVlcy5jaGFycztcclxuXHJcblx0XHRsZXQgcmVnZXggPSBcIltcIjtcclxuXHRcdHJlZ2V4ICs9IGNoYXJzLmluY2x1ZGVzKFwiYWxwaGFcIikgPyBgYS16QS1aYCA6IGBgO1xyXG5cdFx0cmVnZXggKz0gY2hhcnMuaW5jbHVkZXMoXCJudW1lcmljXCIpID8gYDAtOWAgOiBgYDtcclxuXHRcdHJlZ2V4ICs9IGNoYXJzLmluY2x1ZGVzKFwic3BlY1wiKSA/IGBcXFxcJFxcXFwmXFxcXCtcXFxcLFxcXFw6XFxcXDtcXFxcPVxcXFw/XFxcXEBcXFxcI1xcXFx8XFxcXCdcXFxcPFxcXFw+XFxcXC5cXFxcXlxcXFwqXFxcXChcXFxcKVxcXFwlXFxcXCFcXFxcLWAgOiBgYDtcclxuXHRcdHJlZ2V4ICs9IFwiXVwiO1xyXG5cclxuXHRcdHJlZ2V4ICs9IHR5cGVvZiB2YWx1ZXMudXNlX3JhbmdlID09ICd1bmRlZmluZWQnID8gYHske3ZhbHVlcy5sZW5ndGh9fWAgOiBgeyR7dmFsdWVzLnJhbmdlX21pbn0sJHt2YWx1ZXMucmFuZ2VfbWF4fX1gO1xyXG5cclxuXHRcdGxldCBnc3RyID0gJChgI2dlbmVyYXRlZF9zdHJpbmdgKTtcclxuXHRcdGxldCBuZXdTdHIgPSBuZXcgUmFuZEV4cChyZWdleCkuZ2VuKCk7XHJcblxyXG5cdFx0YW5pbWF0ZVRleHQoZ3N0ciwgbmV3U3RyKTtcclxuXHJcblx0XHRnc3RyLmNsb3Nlc3QoYC5zdHJpbmctY2FyZGApXHJcblx0XHRcdC5hZGRDbGFzcyhgc2hvd2ApXHJcblx0XHRcdC5maW5kKGAubWluaW1pemUsIC5tYXhpbWl6ZWApXHJcblx0XHRcdC5hZGRDbGFzcyhgbWluaW1pemVgKS5yZW1vdmVDbGFzcyhgbWF4aW1pemVgKVxyXG5cdFx0XHQuY2xvc2VzdChgLndpbmRvd2ApXHJcblx0XHRcdC5hZGRDbGFzcyhgbWF4aW1pemVkYCkucmVtb3ZlQ2xhc3MoYG1pbmltaXplZGApO1xyXG5cclxuXHRcdGxldCByZXN0b3JlQXBwZW5kVGFyZ2V0ID0gJChgI3N0cmluZ0dlbkZvb3RlcmApO1xyXG5cdFx0bGV0IHJlc3RvcmUgPSByZXN0b3JlQXBwZW5kVGFyZ2V0LmZpbmQoYCNyZXN0b3JlUGFzc1ZpZXdgKTtcclxuXHRcdGlmIChyZXN0b3JlLmxlbmd0aCA8PSAwICkge1xyXG5cdFx0XHRyZXN0b3JlID0gJChgXHJcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJtbC1hdXRvIG1yLTAgaW5zZXJ0IG1pbmltaXplXCIgaWQ9XCJyZXN0b3JlUGFzc1ZpZXdcIiBkYXRhLXRhcmdldD1cIi53aW5kb3cgLm1pbmltaXplLCAud2luZG93IC5tYXhpbWl6ZVwiIGRhdGEtcGFyZW50PVwiI3N0cmluZ0NhcmRcIiB0aXRsZT1cIk1pbmltaXplXCI+PC9zcGFuPlxyXG5cdFx0XHRgKTtcclxuXHJcblx0XHRcdHJlc3RvcmVBcHBlbmRUYXJnZXQuYXBwZW5kKHJlc3RvcmUpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHJlc3RvcmUucmVtb3ZlQ2xhc3MoYGluc2VydGApLCAxMDAwKTtcclxuXHJcblx0XHRcdGxldCBjb2xsYXBzZXIgPSAkKHJlc3RvcmUuYXR0cignZGF0YS10YXJnZXQnKSkuY2xvc2VzdChcIi5jb2xsYXBzZVwiKTtcclxuXHRcdFx0aWYgKGNvbGxhcHNlci5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdGNvbGxhcHNlci5jb2xsYXBzZShcInNob3dcIik7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0bGV0IGNvbGxhcHNlciA9ICQocmVzdG9yZS5hdHRyKCdkYXRhLXRhcmdldCcpKS5jbG9zZXN0KFwiLmNvbGxhcHNlXCIpO1xyXG5cdFx0XHRjb2xsYXBzZXIuY29sbGFwc2UoXCJzaG93XCIpO1xyXG5cclxuXHRcdFx0aWYgKGNvbGxhcHNlci5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHNldFRpbWVvdXQoXHJcblx0XHRcdFx0XHQoKSA9PiByZXN0b3JlLmFkZENsYXNzKGBtaW5pbWl6ZWApLnJlbW92ZUNsYXNzKGBtYXhpbWl6ZWApLCAyNTBcclxuXHRcdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHZhbGlkYXRvci5mYWlscygpO1xyXG59XHJcblxyXG4vKipcclxuICogQW5pbWF0ZXMgdGhlIHRleHRzIGFzIGlmIHRoZXkncmUgYmVpbmcgY2xlYXJlZCBhbmQgdHlwZWQgaW4gdXNpbmcgYSBrZXlib2FyZC4gVGhpcyBhbmltYXRpb24gaXNcclxuICogcHVyZSBKYXZhU2NyaXB0IGFuZCB0aHVzLCByZWFsbHkgaGFzIG5vIHN1cHBvcnQgZm9yIENTUyBwcmVmZXJlbmNlcy4gSG93ZXZlciwgZHVlIHRvIGNvbnNpZGVyYXRpb25zXHJcbiAqIHRoZXkgYXJlIGFwcGxpZWQgYW5kIGNhbiBhbHNvIGJlIHNraXBwZWQgdmlhIGEgY2xpY2sgaW5zaWRlIHRoZSBjb250YWluZXIuXHJcbiAqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8SlF1ZXJ5fSBjb250YWluZXIgQW4gZWxlbWVudCB3aGVyZSB0aGUgdGV4dCBhbmltYXRpb24gd2lsbCBiZSBhcHBsaWVkIHRvLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmV3U3RyIFRoZSBuZXcgc3RyaW5nIHRoYXQgd2lsbCBiZSBcInR5cGVkXCIgaW4gcGxhY2UuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBiYXNlSW50ZXJ2YWwgKiooT3B0aW9uYWwpKiogVGhlIGFwcHJveGltYXRlIGludGVydmFsIGJldHdlZW4gY2hhbmdlcy4gSXQgaXMgY291bnRlZCBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHQgaXMgMjUuNSBtaWxsaXNlY29uZHMuXHJcbiAqL1xyXG5jb25zdCBhbmltYXRlVGV4dCA9IChjb250YWluZXIsIG5ld1N0ciwgYmFzZUludGVydmFsID0gMjUuNSkgPT4ge1xyXG5cdGxldCBpc1ZhbmlsbGEgPSB0eXBlb2YgY29udGFpbmVyLnRleHRDb250ZW50ID09PSBcInVuZGVmaW5lZFwiID8gZmFsc2UgOiB0cnVlO1xyXG5cclxuXHQvLyBVc2UgdGhlIHBsYWluIG9sZCB0ZXh0IHJlcGxhY2UgaW5zdGVhZCBvZiBhbmltYXRpbmcgaWYgdGhlIHVzZXJzIHByZWZlcnMgcmVkdWNlZCBtb3Rpb25zLlxyXG5cdGlmICh3aW5kb3cubWF0Y2hNZWRpYShgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSlgKS5tYXRjaGVzKSB7XHJcblx0XHRpZiAoaXNWYW5pbGxhKVx0Y29udGFpbmVyLnRleHRDb250ZW50ID0gbmV3U3RyO1xyXG5cdFx0ZWxzZVx0XHRcdGNvbnRhaW5lci50ZXh0KG5ld1N0cik7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0Ly8gbmV3U3RyIGZhbGxiYWNrc1xyXG5cdG5ld1N0ciA9IHR5cGVvZiBuZXdTdHIgPT09ICdzdHJpbmcnID8gbmV3U3RyIDogJyc7XHJcblxyXG5cdC8vIEJhc2UgdmFyaWFibGVzXHJcblx0bGV0IG9sZFN0ciA9IGNvbnRhaW5lci50ZXh0Q29udGVudCA/PyBjb250YWluZXIudGV4dCgpO1xyXG5cdGxldCBvbGRJbnRlcnZhbCA9IGJhc2VJbnRlcnZhbCAqIDEwIC8gb2xkU3RyLmxlbmd0aDtcclxuXHRsZXQgbmV3SW50ZXJ2YWwgPSBiYXNlSW50ZXJ2YWwgKiAxMCAvIG5ld1N0ci5sZW5ndGg7XHJcblxyXG5cdC8vIENvbnRyb2wgdmFyaWFibGVzXHJcblx0bGV0IHRpbWVycyA9IFtdO1xyXG5cclxuXHRsZXQgc2tpcFRleHRBbmltYXRpb24gPSAoKSA9PiB7XHJcblx0XHRsZXQgdGltZXI7XHJcblx0XHR3aGlsZSh0aW1lciA9IHRpbWVycy5wb3AoKSkge1xyXG5cdFx0XHRjbGVhclRpbWVvdXQodGltZXIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChpc1ZhbmlsbGEpXHRjb250YWluZXIudGV4dENvbnRlbnQgPSBuZXdTdHI7XHJcblx0XHRlbHNlXHRcdFx0Y29udGFpbmVyLnRleHQobmV3U3RyKTtcclxuXHR9XHJcblxyXG5cdGlmIChpc1ZhbmlsbGEpXHRjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBza2lwVGV4dEFuaW1hdGlvbik7XHJcblx0ZWxzZVx0XHRcdGNvbnRhaW5lci5vbihgY2xpY2tgLCBza2lwVGV4dEFuaW1hdGlvbik7XHJcblxyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgb2xkU3RyLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR0aW1lcnMucHVzaChcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0aWYgKGlzVmFuaWxsYSlcdGNvbnRhaW5lci50ZXh0Q29udGVudCA9IGNvbnRhaW5lci50ZXh0Q29udGVudC5zbGljZSgwLCAtMSk7XHJcblx0XHRcdFx0ZWxzZVx0XHRcdGNvbnRhaW5lci50ZXh0KGNvbnRhaW5lci50ZXh0KCkuc2xpY2UoMCwgLTEpKTtcclxuXHRcdFx0fSwgb2xkSW50ZXJ2YWwgKiBpKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHRpbWVycy5wdXNoKFxyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbmV3U3RyLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dGltZXJzLnB1c2goXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGlzVmFuaWxsYSlcdGNvbnRhaW5lci50ZXh0Q29udGVudCA9IGNvbnRhaW5lci50ZXh0Q29udGVudCArIG5ld1N0cltpXTtcclxuXHRcdFx0XHRcdFx0ZWxzZVx0XHRcdGNvbnRhaW5lci50ZXh0KGNvbnRhaW5lci50ZXh0KCkgKyBuZXdTdHJbaV0pO1xyXG5cdFx0XHRcdFx0fSwgbmV3SW50ZXJ2YWwgKiBpKVxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdGlmIChpID49IG5ld1N0ci5sZW5ndGggLSAxKSB7XHJcblx0XHRcdFx0XHRpZiAoaXNWYW5pbGxhKVx0Y29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgc2tpcFRleHRBbmltYXRpb24pO1xyXG5cdFx0XHRcdFx0ZWxzZVx0XHRcdGNvbnRhaW5lci5vZmYoYGNsaWNrYCwgc2tpcFRleHRBbmltYXRpb24pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSwgb2xkSW50ZXJ2YWwgKiBvbGRTdHIubGVuZ3RoKVxyXG5cdCk7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50IGluZGVudDogNCAqL1xuXG5cbi8vIFByaXZhdGUgaGVscGVyIGNsYXNzXG5jbGFzcyBTdWJSYW5nZSB7XG4gICAgY29uc3RydWN0b3IobG93LCBoaWdoKSB7XG4gICAgICAgIHRoaXMubG93ID0gbG93O1xuICAgICAgICB0aGlzLmhpZ2ggPSBoaWdoO1xuICAgICAgICB0aGlzLmxlbmd0aCA9IDEgKyBoaWdoIC0gbG93O1xuICAgIH1cblxuICAgIG92ZXJsYXBzKHJhbmdlKSB7XG4gICAgICAgIHJldHVybiAhKHRoaXMuaGlnaCA8IHJhbmdlLmxvdyB8fCB0aGlzLmxvdyA+IHJhbmdlLmhpZ2gpO1xuICAgIH1cblxuICAgIHRvdWNoZXMocmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuICEodGhpcy5oaWdoICsgMSA8IHJhbmdlLmxvdyB8fCB0aGlzLmxvdyAtIDEgPiByYW5nZS5oaWdoKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm5zIGluY2x1c2l2ZSBjb21iaW5hdGlvbiBvZiBTdWJSYW5nZXMgYXMgYSBTdWJSYW5nZS5cbiAgICBhZGQocmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTdWJSYW5nZShcbiAgICAgICAgICAgIE1hdGgubWluKHRoaXMubG93LCByYW5nZS5sb3cpLFxuICAgICAgICAgICAgTWF0aC5tYXgodGhpcy5oaWdoLCByYW5nZS5oaWdoKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIFJldHVybnMgc3VidHJhY3Rpb24gb2YgU3ViUmFuZ2VzIGFzIGFuIGFycmF5IG9mIFN1YlJhbmdlcy5cbiAgICAvLyAoVGhlcmUncyBhIGNhc2Ugd2hlcmUgc3VidHJhY3Rpb24gZGl2aWRlcyBpdCBpbiAyKVxuICAgIHN1YnRyYWN0KHJhbmdlKSB7XG4gICAgICAgIGlmIChyYW5nZS5sb3cgPD0gdGhpcy5sb3cgJiYgcmFuZ2UuaGlnaCA+PSB0aGlzLmhpZ2gpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfSBlbHNlIGlmIChyYW5nZS5sb3cgPiB0aGlzLmxvdyAmJiByYW5nZS5oaWdoIDwgdGhpcy5oaWdoKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIG5ldyBTdWJSYW5nZSh0aGlzLmxvdywgcmFuZ2UubG93IC0gMSksXG4gICAgICAgICAgICAgICAgbmV3IFN1YlJhbmdlKHJhbmdlLmhpZ2ggKyAxLCB0aGlzLmhpZ2gpXG4gICAgICAgICAgICBdO1xuICAgICAgICB9IGVsc2UgaWYgKHJhbmdlLmxvdyA8PSB0aGlzLmxvdykge1xuICAgICAgICAgICAgcmV0dXJuIFtuZXcgU3ViUmFuZ2UocmFuZ2UuaGlnaCArIDEsIHRoaXMuaGlnaCldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFtuZXcgU3ViUmFuZ2UodGhpcy5sb3csIHJhbmdlLmxvdyAtIDEpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb3cgPT0gdGhpcy5oaWdoID9cbiAgICAgICAgICAgIHRoaXMubG93LnRvU3RyaW5nKCkgOiB0aGlzLmxvdyArICctJyArIHRoaXMuaGlnaDtcbiAgICB9XG59XG5cblxuY2xhc3MgRFJhbmdlIHtcbiAgICBjb25zdHJ1Y3RvcihhLCBiKSB7XG4gICAgICAgIHRoaXMucmFuZ2VzID0gW107XG4gICAgICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgICAgICAgaWYgKGEgIT0gbnVsbCkgdGhpcy5hZGQoYSwgYik7XG4gICAgfVxuXG4gICAgX3VwZGF0ZV9sZW5ndGgoKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gdGhpcy5yYW5nZXMucmVkdWNlKChwcmV2aW91cywgcmFuZ2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91cyArIHJhbmdlLmxlbmd0aDtcbiAgICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgYWRkKGEsIGIpIHtcbiAgICAgICAgdmFyIF9hZGQgPSAoc3VicmFuZ2UpID0+IHtcbiAgICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChpIDwgdGhpcy5yYW5nZXMubGVuZ3RoICYmICFzdWJyYW5nZS50b3VjaGVzKHRoaXMucmFuZ2VzW2ldKSkge1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBuZXdSYW5nZXMgPSB0aGlzLnJhbmdlcy5zbGljZSgwLCBpKTtcbiAgICAgICAgICAgIHdoaWxlIChpIDwgdGhpcy5yYW5nZXMubGVuZ3RoICYmIHN1YnJhbmdlLnRvdWNoZXModGhpcy5yYW5nZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgc3VicmFuZ2UgPSBzdWJyYW5nZS5hZGQodGhpcy5yYW5nZXNbaV0pO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld1Jhbmdlcy5wdXNoKHN1YnJhbmdlKTtcbiAgICAgICAgICAgIHRoaXMucmFuZ2VzID0gbmV3UmFuZ2VzLmNvbmNhdCh0aGlzLnJhbmdlcy5zbGljZShpKSk7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVfbGVuZ3RoKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYSBpbnN0YW5jZW9mIERSYW5nZSkge1xuICAgICAgICAgICAgYS5yYW5nZXMuZm9yRWFjaChfYWRkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChiID09IG51bGwpIGIgPSBhO1xuICAgICAgICAgICAgX2FkZChuZXcgU3ViUmFuZ2UoYSwgYikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN1YnRyYWN0KGEsIGIpIHtcbiAgICAgICAgdmFyIF9zdWJ0cmFjdCA9IChzdWJyYW5nZSkgPT4ge1xuICAgICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGkgPCB0aGlzLnJhbmdlcy5sZW5ndGggJiYgIXN1YnJhbmdlLm92ZXJsYXBzKHRoaXMucmFuZ2VzW2ldKSkge1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBuZXdSYW5nZXMgPSB0aGlzLnJhbmdlcy5zbGljZSgwLCBpKTtcbiAgICAgICAgICAgIHdoaWxlIChpIDwgdGhpcy5yYW5nZXMubGVuZ3RoICYmIHN1YnJhbmdlLm92ZXJsYXBzKHRoaXMucmFuZ2VzW2ldKSkge1xuICAgICAgICAgICAgICAgIG5ld1JhbmdlcyA9IG5ld1Jhbmdlcy5jb25jYXQodGhpcy5yYW5nZXNbaV0uc3VidHJhY3Qoc3VicmFuZ2UpKTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJhbmdlcyA9IG5ld1Jhbmdlcy5jb25jYXQodGhpcy5yYW5nZXMuc2xpY2UoaSkpO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlX2xlbmd0aCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChhIGluc3RhbmNlb2YgRFJhbmdlKSB7XG4gICAgICAgICAgICBhLnJhbmdlcy5mb3JFYWNoKF9zdWJ0cmFjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYiA9PSBudWxsKSBiID0gYTtcbiAgICAgICAgICAgIF9zdWJ0cmFjdChuZXcgU3ViUmFuZ2UoYSwgYikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGludGVyc2VjdChhLCBiKSB7XG4gICAgICAgIHZhciBuZXdSYW5nZXMgPSBbXTtcbiAgICAgICAgdmFyIF9pbnRlcnNlY3QgPSAoc3VicmFuZ2UpID0+IHtcbiAgICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChpIDwgdGhpcy5yYW5nZXMubGVuZ3RoICYmICFzdWJyYW5nZS5vdmVybGFwcyh0aGlzLnJhbmdlc1tpXSkpIHtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaSA8IHRoaXMucmFuZ2VzLmxlbmd0aCAmJiBzdWJyYW5nZS5vdmVybGFwcyh0aGlzLnJhbmdlc1tpXSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbG93ID0gTWF0aC5tYXgodGhpcy5yYW5nZXNbaV0ubG93LCBzdWJyYW5nZS5sb3cpO1xuICAgICAgICAgICAgICAgIHZhciBoaWdoID0gTWF0aC5taW4odGhpcy5yYW5nZXNbaV0uaGlnaCwgc3VicmFuZ2UuaGlnaCk7XG4gICAgICAgICAgICAgICAgbmV3UmFuZ2VzLnB1c2gobmV3IFN1YlJhbmdlKGxvdywgaGlnaCkpO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoYSBpbnN0YW5jZW9mIERSYW5nZSkge1xuICAgICAgICAgICAgYS5yYW5nZXMuZm9yRWFjaChfaW50ZXJzZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChiID09IG51bGwpIGIgPSBhO1xuICAgICAgICAgICAgX2ludGVyc2VjdChuZXcgU3ViUmFuZ2UoYSwgYikpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmFuZ2VzID0gbmV3UmFuZ2VzO1xuICAgICAgICB0aGlzLl91cGRhdGVfbGVuZ3RoKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGluZGV4KGluZGV4KSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgd2hpbGUgKGkgPCB0aGlzLnJhbmdlcy5sZW5ndGggJiYgdGhpcy5yYW5nZXNbaV0ubGVuZ3RoIDw9IGluZGV4KSB7XG4gICAgICAgICAgICBpbmRleCAtPSB0aGlzLnJhbmdlc1tpXS5sZW5ndGg7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmFuZ2VzW2ldLmxvdyArIGluZGV4O1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gJ1sgJyArIHRoaXMucmFuZ2VzLmpvaW4oJywgJykgKyAnIF0nO1xuICAgIH1cblxuICAgIGNsb25lKCkge1xuICAgICAgICByZXR1cm4gbmV3IERSYW5nZSh0aGlzKTtcbiAgICB9XG5cbiAgICBudW1iZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yYW5nZXMucmVkdWNlKChyZXN1bHQsIHN1YnJhbmdlKSA9PiB7XG4gICAgICAgICAgICB2YXIgaSA9IHN1YnJhbmdlLmxvdztcbiAgICAgICAgICAgIHdoaWxlIChpIDw9IHN1YnJhbmdlLmhpZ2gpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChpKTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LCBbXSk7XG4gICAgfVxuXG4gICAgc3VicmFuZ2VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yYW5nZXMubWFwKChzdWJyYW5nZSkgPT4gKHtcbiAgICAgICAgICAgIGxvdzogc3VicmFuZ2UubG93LFxuICAgICAgICAgICAgaGlnaDogc3VicmFuZ2UuaGlnaCxcbiAgICAgICAgICAgIGxlbmd0aDogMSArIHN1YnJhbmdlLmhpZ2ggLSBzdWJyYW5nZS5sb3dcbiAgICAgICAgfSkpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEUmFuZ2U7XG4iLCJjb25zdCByZXQgICAgPSByZXF1aXJlKCdyZXQnKTtcbmNvbnN0IERSYW5nZSA9IHJlcXVpcmUoJ2RyYW5nZScpO1xuY29uc3QgdHlwZXMgID0gcmV0LnR5cGVzO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgUmFuZEV4cCB7XG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtSZWdFeHB8U3RyaW5nfSByZWdleHBcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1cbiAgICovXG4gIGNvbnN0cnVjdG9yKHJlZ2V4cCwgbSkge1xuICAgIHRoaXMuX3NldERlZmF1bHRzKHJlZ2V4cCk7XG4gICAgaWYgKHJlZ2V4cCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgdGhpcy5pZ25vcmVDYXNlID0gcmVnZXhwLmlnbm9yZUNhc2U7XG4gICAgICB0aGlzLm11bHRpbGluZSA9IHJlZ2V4cC5tdWx0aWxpbmU7XG4gICAgICByZWdleHAgPSByZWdleHAuc291cmNlO1xuXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVnZXhwID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5pZ25vcmVDYXNlID0gbSAmJiBtLmluZGV4T2YoJ2knKSAhPT0gLTE7XG4gICAgICB0aGlzLm11bHRpbGluZSA9IG0gJiYgbS5pbmRleE9mKCdtJykgIT09IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGEgcmVnZXhwIG9yIHN0cmluZycpO1xuICAgIH1cblxuICAgIHRoaXMudG9rZW5zID0gcmV0KHJlZ2V4cCk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgc29tZSBjdXN0b20gcHJvcGVydGllcyBoYXZlIGJlZW4gc2V0IGZvciB0aGlzIHJlZ2V4cC5cbiAgICpcbiAgICogQHBhcmFtIHtSYW5kRXhwfSByYW5kZXhwXG4gICAqIEBwYXJhbSB7UmVnRXhwfSByZWdleHBcbiAgICovXG4gIF9zZXREZWZhdWx0cyhyZWdleHApIHtcbiAgICAvLyBXaGVuIGEgcmVwZXRpdGlvbmFsIHRva2VuIGhhcyBpdHMgbWF4IHNldCB0byBJbmZpbml0ZSxcbiAgICAvLyByYW5kZXhwIHdvbid0IGFjdHVhbGx5IGdlbmVyYXRlIGEgcmFuZG9tIGFtb3VudCBiZXR3ZWVuIG1pbiBhbmQgSW5maW5pdGVcbiAgICAvLyBpbnN0ZWFkIGl0IHdpbGwgc2VlIEluZmluaXRlIGFzIG1pbiArIDEwMC5cbiAgICB0aGlzLm1heCA9IHJlZ2V4cC5tYXggIT0gbnVsbCA/IHJlZ2V4cC5tYXggOlxuICAgICAgUmFuZEV4cC5wcm90b3R5cGUubWF4ICE9IG51bGwgPyBSYW5kRXhwLnByb3RvdHlwZS5tYXggOiAxMDA7XG5cbiAgICAvLyBUaGlzIGFsbG93cyBleHBhbmRpbmcgdG8gaW5jbHVkZSBhZGRpdGlvbmFsIGNoYXJhY3RlcnNcbiAgICAvLyBmb3IgaW5zdGFuY2U6IFJhbmRFeHAuZGVmYXVsdFJhbmdlLmFkZCgwLCA2NTUzNSk7XG4gICAgdGhpcy5kZWZhdWx0UmFuZ2UgPSByZWdleHAuZGVmYXVsdFJhbmdlID9cbiAgICAgIHJlZ2V4cC5kZWZhdWx0UmFuZ2UgOiB0aGlzLmRlZmF1bHRSYW5nZS5jbG9uZSgpO1xuXG4gICAgaWYgKHJlZ2V4cC5yYW5kSW50KSB7XG4gICAgICB0aGlzLnJhbmRJbnQgPSByZWdleHAucmFuZEludDtcbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgdGhlIHJhbmRvbSBzdHJpbmcuXG4gICAqXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIGdlbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2VuKHRoaXMudG9rZW5zLCBbXSk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSByYW5kb20gc3RyaW5nIG1vZGVsZWQgYWZ0ZXIgZ2l2ZW4gdG9rZW5zLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gdG9rZW5cbiAgICogQHBhcmFtIHtBcnJheS48U3RyaW5nPn0gZ3JvdXBzXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIF9nZW4odG9rZW4sIGdyb3Vwcykge1xuICAgIHZhciBzdGFjaywgc3RyLCBuLCBpLCBsO1xuXG4gICAgc3dpdGNoICh0b2tlbi50eXBlKSB7XG4gICAgICBjYXNlIHR5cGVzLlJPT1Q6XG4gICAgICBjYXNlIHR5cGVzLkdST1VQOlxuICAgICAgICAvLyBJZ25vcmUgbG9va2FoZWFkcyBmb3Igbm93LlxuICAgICAgICBpZiAodG9rZW4uZm9sbG93ZWRCeSB8fCB0b2tlbi5ub3RGb2xsb3dlZEJ5KSB7IHJldHVybiAnJzsgfVxuXG4gICAgICAgIC8vIEluc2VydCBwbGFjZWhvbGRlciB1bnRpbCBncm91cCBzdHJpbmcgaXMgZ2VuZXJhdGVkLlxuICAgICAgICBpZiAodG9rZW4ucmVtZW1iZXIgJiYgdG9rZW4uZ3JvdXBOdW1iZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRva2VuLmdyb3VwTnVtYmVyID0gZ3JvdXBzLnB1c2gobnVsbCkgLSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhY2sgPSB0b2tlbi5vcHRpb25zID9cbiAgICAgICAgICB0aGlzLl9yYW5kU2VsZWN0KHRva2VuLm9wdGlvbnMpIDogdG9rZW4uc3RhY2s7XG5cbiAgICAgICAgc3RyID0gJyc7XG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBzdGFjay5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBzdHIgKz0gdGhpcy5fZ2VuKHN0YWNrW2ldLCBncm91cHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRva2VuLnJlbWVtYmVyKSB7XG4gICAgICAgICAgZ3JvdXBzW3Rva2VuLmdyb3VwTnVtYmVyXSA9IHN0cjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyO1xuXG4gICAgICBjYXNlIHR5cGVzLlBPU0lUSU9OOlxuICAgICAgICAvLyBEbyBub3RoaW5nIGZvciBub3cuXG4gICAgICAgIHJldHVybiAnJztcblxuICAgICAgY2FzZSB0eXBlcy5TRVQ6XG4gICAgICAgIHZhciBleHBhbmRlZFNldCA9IHRoaXMuX2V4cGFuZCh0b2tlbik7XG4gICAgICAgIGlmICghZXhwYW5kZWRTZXQubGVuZ3RoKSB7IHJldHVybiAnJzsgfVxuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSh0aGlzLl9yYW5kU2VsZWN0KGV4cGFuZGVkU2V0KSk7XG5cbiAgICAgIGNhc2UgdHlwZXMuUkVQRVRJVElPTjpcbiAgICAgICAgLy8gUmFuZG9tbHkgZ2VuZXJhdGUgbnVtYmVyIGJldHdlZW4gbWluIGFuZCBtYXguXG4gICAgICAgIG4gPSB0aGlzLnJhbmRJbnQodG9rZW4ubWluLFxuICAgICAgICAgIHRva2VuLm1heCA9PT0gSW5maW5pdHkgPyB0b2tlbi5taW4gKyB0aGlzLm1heCA6IHRva2VuLm1heCk7XG5cbiAgICAgICAgc3RyID0gJyc7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICBzdHIgKz0gdGhpcy5fZ2VuKHRva2VuLnZhbHVlLCBncm91cHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0cjtcblxuICAgICAgY2FzZSB0eXBlcy5SRUZFUkVOQ0U6XG4gICAgICAgIHJldHVybiBncm91cHNbdG9rZW4udmFsdWUgLSAxXSB8fCAnJztcblxuICAgICAgY2FzZSB0eXBlcy5DSEFSOlxuICAgICAgICB2YXIgY29kZSA9IHRoaXMuaWdub3JlQ2FzZSAmJiB0aGlzLl9yYW5kQm9vbCgpID9cbiAgICAgICAgICB0aGlzLl90b090aGVyQ2FzZSh0b2tlbi52YWx1ZSkgOiB0b2tlbi52YWx1ZTtcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSk7XG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICogSWYgY29kZSBpcyBhbHBoYWJldGljLCBjb252ZXJ0cyB0byBvdGhlciBjYXNlLlxuICAgKiBJZiBub3QgYWxwaGFiZXRpYywgcmV0dXJucyBiYWNrIGNvZGUuXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2RlXG4gICAqIEByZXR1cm4ge051bWJlcn1cbiAgICovXG4gIF90b090aGVyQ2FzZShjb2RlKSB7XG4gICAgcmV0dXJuIGNvZGUgKyAoOTcgPD0gY29kZSAmJiBjb2RlIDw9IDEyMiA/IC0zMiA6XG4gICAgICA2NSA8PSBjb2RlICYmIGNvZGUgPD0gOTAgID8gIDMyIDogMCk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBSYW5kb21seSByZXR1cm5zIGEgdHJ1ZSBvciBmYWxzZSB2YWx1ZS5cbiAgICpcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIF9yYW5kQm9vbCgpIHtcbiAgICByZXR1cm4gIXRoaXMucmFuZEludCgwLCAxKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIFJhbmRvbWx5IHNlbGVjdHMgYW5kIHJldHVybnMgYSB2YWx1ZSBmcm9tIHRoZSBhcnJheS5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheS48T2JqZWN0Pn0gYXJyXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIF9yYW5kU2VsZWN0KGFycikge1xuICAgIGlmIChhcnIgaW5zdGFuY2VvZiBEUmFuZ2UpIHtcbiAgICAgIHJldHVybiBhcnIuaW5kZXgodGhpcy5yYW5kSW50KDAsIGFyci5sZW5ndGggLSAxKSk7XG4gICAgfVxuICAgIHJldHVybiBhcnJbdGhpcy5yYW5kSW50KDAsIGFyci5sZW5ndGggLSAxKV07XG4gIH1cblxuXG4gIC8qKlxuICAgKiBleHBhbmRzIGEgdG9rZW4gdG8gYSBEaXNjb250aW51b3VzUmFuZ2Ugb2YgY2hhcmFjdGVycyB3aGljaCBoYXMgYVxuICAgKiBsZW5ndGggYW5kIGFuIGluZGV4IGZ1bmN0aW9uIChmb3IgcmFuZG9tIHNlbGVjdGluZylcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHRva2VuXG4gICAqIEByZXR1cm4ge0Rpc2NvbnRpbnVvdXNSYW5nZX1cbiAgICovXG4gIF9leHBhbmQodG9rZW4pIHtcbiAgICBpZiAodG9rZW4udHlwZSA9PT0gcmV0LnR5cGVzLkNIQVIpIHtcbiAgICAgIHJldHVybiBuZXcgRFJhbmdlKHRva2VuLnZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHRva2VuLnR5cGUgPT09IHJldC50eXBlcy5SQU5HRSkge1xuICAgICAgcmV0dXJuIG5ldyBEUmFuZ2UodG9rZW4uZnJvbSwgdG9rZW4udG8pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZHJhbmdlID0gbmV3IERSYW5nZSgpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2tlbi5zZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHN1YnJhbmdlID0gdGhpcy5fZXhwYW5kKHRva2VuLnNldFtpXSk7XG4gICAgICAgIGRyYW5nZS5hZGQoc3VicmFuZ2UpO1xuICAgICAgICBpZiAodGhpcy5pZ25vcmVDYXNlKSB7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzdWJyYW5nZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbGV0IGNvZGUgPSBzdWJyYW5nZS5pbmRleChqKTtcbiAgICAgICAgICAgIGxldCBvdGhlckNhc2VDb2RlID0gdGhpcy5fdG9PdGhlckNhc2UoY29kZSk7XG4gICAgICAgICAgICBpZiAoY29kZSAhPT0gb3RoZXJDYXNlQ29kZSkge1xuICAgICAgICAgICAgICBkcmFuZ2UuYWRkKG90aGVyQ2FzZUNvZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRva2VuLm5vdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0UmFuZ2UuY2xvbmUoKS5zdWJ0cmFjdChkcmFuZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdFJhbmdlLmNsb25lKCkuaW50ZXJzZWN0KGRyYW5nZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICogUmFuZG9tbHkgZ2VuZXJhdGVzIGFuZCByZXR1cm5zIGEgbnVtYmVyIGJldHdlZW4gYSBhbmQgYiAoaW5jbHVzaXZlKS5cbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGFcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGJcbiAgICogQHJldHVybiB7TnVtYmVyfVxuICAgKi9cbiAgcmFuZEludChhLCBiKSB7XG4gICAgcmV0dXJuIGEgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMSArIGIgLSBhKSk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IHJhbmdlIG9mIGNoYXJhY3RlcnMgdG8gZ2VuZXJhdGUgZnJvbS5cbiAgICovXG4gIGdldCBkZWZhdWx0UmFuZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JhbmdlID0gdGhpcy5fcmFuZ2UgfHwgbmV3IERSYW5nZSgzMiwgMTI2KTtcbiAgfVxuXG4gIHNldCBkZWZhdWx0UmFuZ2UocmFuZ2UpIHtcbiAgICB0aGlzLl9yYW5nZSA9IHJhbmdlO1xuICB9XG5cblxuICAvKipcbiAgICpcbiAgICogRW5hYmxlcyB1c2Ugb2YgcmFuZGV4cCB3aXRoIGEgc2hvcnRlciBjYWxsLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlZ0V4cHxTdHJpbmd8IHJlZ2V4cH1cbiAgICogQHBhcmFtIHtTdHJpbmd9IG1cbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIHJhbmRleHAocmVnZXhwLCBtKSB7XG4gICAgdmFyIHJhbmRleHA7XG4gICAgaWYodHlwZW9mIHJlZ2V4cCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAocmVnZXhwLCBtKTtcbiAgICB9XG5cbiAgICBpZiAocmVnZXhwLl9yYW5kZXhwID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJhbmRleHAgPSBuZXcgUmFuZEV4cChyZWdleHAsIG0pO1xuICAgICAgcmVnZXhwLl9yYW5kZXhwID0gcmFuZGV4cDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmFuZGV4cCA9IHJlZ2V4cC5fcmFuZGV4cDtcbiAgICAgIHJhbmRleHAuX3NldERlZmF1bHRzKHJlZ2V4cCk7XG4gICAgfVxuICAgIHJldHVybiByYW5kZXhwLmdlbigpO1xuICB9XG5cblxuICAvKipcbiAgICogRW5hYmxlcyBzdWdhcnkgL3JlZ2V4cC8uZ2VuIHN5bnRheC5cbiAgICovXG4gIHN0YXRpYyBzdWdhcigpIHtcbiAgICAvKiBlc2hpbnQgZnJlZXplOmZhbHNlICovXG4gICAgUmVnRXhwLnByb3RvdHlwZS5nZW4gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBSYW5kRXhwLnJhbmRleHAodGhpcyk7XG4gICAgfTtcbiAgfVxufTtcbiIsImNvbnN0IHV0aWwgICAgICA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuY29uc3QgdHlwZXMgICAgID0gcmVxdWlyZSgnLi90eXBlcycpO1xuY29uc3Qgc2V0cyAgICAgID0gcmVxdWlyZSgnLi9zZXRzJyk7XG5jb25zdCBwb3NpdGlvbnMgPSByZXF1aXJlKCcuL3Bvc2l0aW9ucycpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gKHJlZ2V4cFN0cikgPT4ge1xuICB2YXIgaSA9IDAsIGwsIGMsXG4gICAgc3RhcnQgPSB7IHR5cGU6IHR5cGVzLlJPT1QsIHN0YWNrOiBbXX0sXG5cbiAgICAvLyBLZWVwIHRyYWNrIG9mIGxhc3QgY2xhdXNlL2dyb3VwIGFuZCBzdGFjay5cbiAgICBsYXN0R3JvdXAgPSBzdGFydCxcbiAgICBsYXN0ID0gc3RhcnQuc3RhY2ssXG4gICAgZ3JvdXBTdGFjayA9IFtdO1xuXG5cbiAgdmFyIHJlcGVhdEVyciA9IChpKSA9PiB7XG4gICAgdXRpbC5lcnJvcihyZWdleHBTdHIsIGBOb3RoaW5nIHRvIHJlcGVhdCBhdCBjb2x1bW4gJHtpIC0gMX1gKTtcbiAgfTtcblxuICAvLyBEZWNvZGUgYSBmZXcgZXNjYXBlZCBjaGFyYWN0ZXJzLlxuICB2YXIgc3RyID0gdXRpbC5zdHJUb0NoYXJzKHJlZ2V4cFN0cik7XG4gIGwgPSBzdHIubGVuZ3RoO1xuXG4gIC8vIEl0ZXJhdGUgdGhyb3VnaCBlYWNoIGNoYXJhY3RlciBpbiBzdHJpbmcuXG4gIHdoaWxlIChpIDwgbCkge1xuICAgIGMgPSBzdHJbaSsrXTtcblxuICAgIHN3aXRjaCAoYykge1xuICAgICAgLy8gSGFuZGxlIGVzY2FwZWQgY2hhcmFjdGVycywgaW5jbHVlcyBhIGZldyBzZXRzLlxuICAgICAgY2FzZSAnXFxcXCc6XG4gICAgICAgIGMgPSBzdHJbaSsrXTtcblxuICAgICAgICBzd2l0Y2ggKGMpIHtcbiAgICAgICAgICBjYXNlICdiJzpcbiAgICAgICAgICAgIGxhc3QucHVzaChwb3NpdGlvbnMud29yZEJvdW5kYXJ5KCkpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdCJzpcbiAgICAgICAgICAgIGxhc3QucHVzaChwb3NpdGlvbnMubm9uV29yZEJvdW5kYXJ5KCkpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICd3JzpcbiAgICAgICAgICAgIGxhc3QucHVzaChzZXRzLndvcmRzKCkpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdXJzpcbiAgICAgICAgICAgIGxhc3QucHVzaChzZXRzLm5vdFdvcmRzKCkpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICAgIGxhc3QucHVzaChzZXRzLmludHMoKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ0QnOlxuICAgICAgICAgICAgbGFzdC5wdXNoKHNldHMubm90SW50cygpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICBsYXN0LnB1c2goc2V0cy53aGl0ZXNwYWNlKCkpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgIGxhc3QucHVzaChzZXRzLm5vdFdoaXRlc3BhY2UoKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBjIGlzIGludGVnZXIuXG4gICAgICAgICAgICAvLyBJbiB3aGljaCBjYXNlIGl0J3MgYSByZWZlcmVuY2UuXG4gICAgICAgICAgICBpZiAoL1xcZC8udGVzdChjKSkge1xuICAgICAgICAgICAgICBsYXN0LnB1c2goeyB0eXBlOiB0eXBlcy5SRUZFUkVOQ0UsIHZhbHVlOiBwYXJzZUludChjLCAxMCkgfSk7XG5cbiAgICAgICAgICAgIC8vIEVzY2FwZWQgY2hhcmFjdGVyLlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbGFzdC5wdXNoKHsgdHlwZTogdHlwZXMuQ0hBUiwgdmFsdWU6IGMuY2hhckNvZGVBdCgwKSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG5cbiAgICAgIC8vIFBvc2l0aW9uYWxzLlxuICAgICAgY2FzZSAnXic6XG4gICAgICAgIGxhc3QucHVzaChwb3NpdGlvbnMuYmVnaW4oKSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICckJzpcbiAgICAgICAgbGFzdC5wdXNoKHBvc2l0aW9ucy5lbmQoKSk7XG4gICAgICAgIGJyZWFrO1xuXG5cbiAgICAgIC8vIEhhbmRsZSBjdXN0b20gc2V0cy5cbiAgICAgIGNhc2UgJ1snOlxuICAgICAgICAvLyBDaGVjayBpZiB0aGlzIGNsYXNzIGlzICdhbnRpJyBpLmUuIFteYWJjXS5cbiAgICAgICAgdmFyIG5vdDtcbiAgICAgICAgaWYgKHN0cltpXSA9PT0gJ14nKSB7XG4gICAgICAgICAgbm90ID0gdHJ1ZTtcbiAgICAgICAgICBpKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm90ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHZXQgYWxsIHRoZSBjaGFyYWN0ZXJzIGluIGNsYXNzLlxuICAgICAgICB2YXIgY2xhc3NUb2tlbnMgPSB1dGlsLnRva2VuaXplQ2xhc3Moc3RyLnNsaWNlKGkpLCByZWdleHBTdHIpO1xuXG4gICAgICAgIC8vIEluY3JlYXNlIGluZGV4IGJ5IGxlbmd0aCBvZiBjbGFzcy5cbiAgICAgICAgaSArPSBjbGFzc1Rva2Vuc1sxXTtcbiAgICAgICAgbGFzdC5wdXNoKHtcbiAgICAgICAgICB0eXBlOiB0eXBlcy5TRVQsXG4gICAgICAgICAgc2V0OiBjbGFzc1Rva2Vuc1swXSxcbiAgICAgICAgICBub3QsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJyZWFrO1xuXG5cbiAgICAgIC8vIENsYXNzIG9mIGFueSBjaGFyYWN0ZXIgZXhjZXB0IFxcbi5cbiAgICAgIGNhc2UgJy4nOlxuICAgICAgICBsYXN0LnB1c2goc2V0cy5hbnlDaGFyKCkpO1xuICAgICAgICBicmVhaztcblxuXG4gICAgICAvLyBQdXNoIGdyb3VwIG9udG8gc3RhY2suXG4gICAgICBjYXNlICcoJzpcbiAgICAgICAgLy8gQ3JlYXRlIGdyb3VwLlxuICAgICAgICB2YXIgZ3JvdXAgPSB7XG4gICAgICAgICAgdHlwZTogdHlwZXMuR1JPVVAsXG4gICAgICAgICAgc3RhY2s6IFtdLFxuICAgICAgICAgIHJlbWVtYmVyOiB0cnVlLFxuICAgICAgICB9O1xuXG4gICAgICAgIGMgPSBzdHJbaV07XG5cbiAgICAgICAgLy8gSWYgaWYgdGhpcyBpcyBhIHNwZWNpYWwga2luZCBvZiBncm91cC5cbiAgICAgICAgaWYgKGMgPT09ICc/Jykge1xuICAgICAgICAgIGMgPSBzdHJbaSArIDFdO1xuICAgICAgICAgIGkgKz0gMjtcblxuICAgICAgICAgIC8vIE1hdGNoIGlmIGZvbGxvd2VkIGJ5LlxuICAgICAgICAgIGlmIChjID09PSAnPScpIHtcbiAgICAgICAgICAgIGdyb3VwLmZvbGxvd2VkQnkgPSB0cnVlO1xuXG4gICAgICAgICAgLy8gTWF0Y2ggaWYgbm90IGZvbGxvd2VkIGJ5LlxuICAgICAgICAgIH0gZWxzZSBpZiAoYyA9PT0gJyEnKSB7XG4gICAgICAgICAgICBncm91cC5ub3RGb2xsb3dlZEJ5ID0gdHJ1ZTtcblxuICAgICAgICAgIH0gZWxzZSBpZiAoYyAhPT0gJzonKSB7XG4gICAgICAgICAgICB1dGlsLmVycm9yKHJlZ2V4cFN0cixcbiAgICAgICAgICAgICAgYEludmFsaWQgZ3JvdXAsIGNoYXJhY3RlciAnJHtjfSdgICtcbiAgICAgICAgICAgICAgYCBhZnRlciAnPycgYXQgY29sdW1uICR7aSAtIDF9YCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZ3JvdXAucmVtZW1iZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluc2VydCBzdWJncm91cCBpbnRvIGN1cnJlbnQgZ3JvdXAgc3RhY2suXG4gICAgICAgIGxhc3QucHVzaChncm91cCk7XG5cbiAgICAgICAgLy8gUmVtZW1iZXIgdGhlIGN1cnJlbnQgZ3JvdXAgZm9yIHdoZW4gdGhlIGdyb3VwIGNsb3Nlcy5cbiAgICAgICAgZ3JvdXBTdGFjay5wdXNoKGxhc3RHcm91cCk7XG5cbiAgICAgICAgLy8gTWFrZSB0aGlzIG5ldyBncm91cCB0aGUgY3VycmVudCBncm91cC5cbiAgICAgICAgbGFzdEdyb3VwID0gZ3JvdXA7XG4gICAgICAgIGxhc3QgPSBncm91cC5zdGFjaztcbiAgICAgICAgYnJlYWs7XG5cblxuICAgICAgLy8gUG9wIGdyb3VwIG91dCBvZiBzdGFjay5cbiAgICAgIGNhc2UgJyknOlxuICAgICAgICBpZiAoZ3JvdXBTdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB1dGlsLmVycm9yKHJlZ2V4cFN0ciwgYFVubWF0Y2hlZCApIGF0IGNvbHVtbiAke2kgLSAxfWApO1xuICAgICAgICB9XG4gICAgICAgIGxhc3RHcm91cCA9IGdyb3VwU3RhY2sucG9wKCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBncm91cCBoYXMgYSBQSVBFLlxuICAgICAgICAvLyBUbyBnZXQgYmFjayB0aGUgY29ycmVjdCBsYXN0IHN0YWNrLlxuICAgICAgICBsYXN0ID0gbGFzdEdyb3VwLm9wdGlvbnMgP1xuICAgICAgICAgIGxhc3RHcm91cC5vcHRpb25zW2xhc3RHcm91cC5vcHRpb25zLmxlbmd0aCAtIDFdIDogbGFzdEdyb3VwLnN0YWNrO1xuICAgICAgICBicmVhaztcblxuXG4gICAgICAvLyBVc2UgcGlwZSBjaGFyYWN0ZXIgdG8gZ2l2ZSBtb3JlIGNob2ljZXMuXG4gICAgICBjYXNlICd8JzpcbiAgICAgICAgLy8gQ3JlYXRlIGFycmF5IHdoZXJlIG9wdGlvbnMgYXJlIGlmIHRoaXMgaXMgdGhlIGZpcnN0IFBJUEVcbiAgICAgICAgLy8gaW4gdGhpcyBjbGF1c2UuXG4gICAgICAgIGlmICghbGFzdEdyb3VwLm9wdGlvbnMpIHtcbiAgICAgICAgICBsYXN0R3JvdXAub3B0aW9ucyA9IFtsYXN0R3JvdXAuc3RhY2tdO1xuICAgICAgICAgIGRlbGV0ZSBsYXN0R3JvdXAuc3RhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgc3RhY2sgYW5kIGFkZCB0byBvcHRpb25zIGZvciByZXN0IG9mIGNsYXVzZS5cbiAgICAgICAgdmFyIHN0YWNrID0gW107XG4gICAgICAgIGxhc3RHcm91cC5vcHRpb25zLnB1c2goc3RhY2spO1xuICAgICAgICBsYXN0ID0gc3RhY2s7XG4gICAgICAgIGJyZWFrO1xuXG5cbiAgICAgIC8vIFJlcGV0aXRpb24uXG4gICAgICAvLyBGb3IgZXZlcnkgcmVwZXRpdGlvbiwgcmVtb3ZlIGxhc3QgZWxlbWVudCBmcm9tIGxhc3Qgc3RhY2tcbiAgICAgIC8vIHRoZW4gaW5zZXJ0IGJhY2sgYSBSQU5HRSBvYmplY3QuXG4gICAgICAvLyBUaGlzIGRlc2lnbiBpcyBjaG9zZW4gYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBtb3JlIHRoYW5cbiAgICAgIC8vIG9uZSByZXBldGl0aW9uIHN5bWJvbHMgaW4gYSByZWdleCBpLmUuIGBhPyt7MiwzfWAuXG4gICAgICBjYXNlICd7JzpcbiAgICAgICAgdmFyIHJzID0gL14oXFxkKykoLChcXGQrKT8pP1xcfS8uZXhlYyhzdHIuc2xpY2UoaSkpLCBtaW4sIG1heDtcbiAgICAgICAgaWYgKHJzICE9PSBudWxsKSB7XG4gICAgICAgICAgaWYgKGxhc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXBlYXRFcnIoaSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG1pbiA9IHBhcnNlSW50KHJzWzFdLCAxMCk7XG4gICAgICAgICAgbWF4ID0gcnNbMl0gPyByc1szXSA/IHBhcnNlSW50KHJzWzNdLCAxMCkgOiBJbmZpbml0eSA6IG1pbjtcbiAgICAgICAgICBpICs9IHJzWzBdLmxlbmd0aDtcblxuICAgICAgICAgIGxhc3QucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiB0eXBlcy5SRVBFVElUSU9OLFxuICAgICAgICAgICAgbWluLFxuICAgICAgICAgICAgbWF4LFxuICAgICAgICAgICAgdmFsdWU6IGxhc3QucG9wKCksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGFzdC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVzLkNIQVIsXG4gICAgICAgICAgICB2YWx1ZTogMTIzLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICc/JzpcbiAgICAgICAgaWYgKGxhc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmVwZWF0RXJyKGkpO1xuICAgICAgICB9XG4gICAgICAgIGxhc3QucHVzaCh7XG4gICAgICAgICAgdHlwZTogdHlwZXMuUkVQRVRJVElPTixcbiAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgbWF4OiAxLFxuICAgICAgICAgIHZhbHVlOiBsYXN0LnBvcCgpLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJysnOlxuICAgICAgICBpZiAobGFzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXBlYXRFcnIoaSk7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdC5wdXNoKHtcbiAgICAgICAgICB0eXBlOiB0eXBlcy5SRVBFVElUSU9OLFxuICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICBtYXg6IEluZmluaXR5LFxuICAgICAgICAgIHZhbHVlOiBsYXN0LnBvcCgpLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJyonOlxuICAgICAgICBpZiAobGFzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXBlYXRFcnIoaSk7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdC5wdXNoKHtcbiAgICAgICAgICB0eXBlOiB0eXBlcy5SRVBFVElUSU9OLFxuICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICBtYXg6IEluZmluaXR5LFxuICAgICAgICAgIHZhbHVlOiBsYXN0LnBvcCgpLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG5cblxuICAgICAgLy8gRGVmYXVsdCBpcyBhIGNoYXJhY3RlciB0aGF0IGlzIG5vdCBgXFxbXSgpe30/KypeJGAuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBsYXN0LnB1c2goe1xuICAgICAgICAgIHR5cGU6IHR5cGVzLkNIQVIsXG4gICAgICAgICAgdmFsdWU6IGMuY2hhckNvZGVBdCgwKSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxuICAvLyBDaGVjayBpZiBhbnkgZ3JvdXBzIGhhdmUgbm90IGJlZW4gY2xvc2VkLlxuICBpZiAoZ3JvdXBTdGFjay5sZW5ndGggIT09IDApIHtcbiAgICB1dGlsLmVycm9yKHJlZ2V4cFN0ciwgJ1VudGVybWluYXRlZCBncm91cCcpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXJ0O1xufTtcblxubW9kdWxlLmV4cG9ydHMudHlwZXMgPSB0eXBlcztcbiIsImNvbnN0IHR5cGVzID0gcmVxdWlyZSgnLi90eXBlcycpO1xuZXhwb3J0cy53b3JkQm91bmRhcnkgPSAoKSA9PiAoeyB0eXBlOiB0eXBlcy5QT1NJVElPTiwgdmFsdWU6ICdiJyB9KTtcbmV4cG9ydHMubm9uV29yZEJvdW5kYXJ5ID0gKCkgPT4gKHsgdHlwZTogdHlwZXMuUE9TSVRJT04sIHZhbHVlOiAnQicgfSk7XG5leHBvcnRzLmJlZ2luID0gKCkgPT4gKHsgdHlwZTogdHlwZXMuUE9TSVRJT04sIHZhbHVlOiAnXicgfSk7XG5leHBvcnRzLmVuZCA9ICgpID0+ICh7IHR5cGU6IHR5cGVzLlBPU0lUSU9OLCB2YWx1ZTogJyQnIH0pO1xuIiwiY29uc3QgdHlwZXMgPSByZXF1aXJlKCcuL3R5cGVzJyk7XG5cbmNvbnN0IElOVFMgPSAoKSA9PiBbeyB0eXBlOiB0eXBlcy5SQU5HRSAsIGZyb206IDQ4LCB0bzogNTcgfV07XG5cbmNvbnN0IFdPUkRTID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHsgdHlwZTogdHlwZXMuQ0hBUiwgdmFsdWU6IDk1IH0sXG4gICAgeyB0eXBlOiB0eXBlcy5SQU5HRSwgZnJvbTogOTcsIHRvOiAxMjIgfSxcbiAgICB7IHR5cGU6IHR5cGVzLlJBTkdFLCBmcm9tOiA2NSwgdG86IDkwIH1cbiAgXS5jb25jYXQoSU5UUygpKTtcbn07XG5cbmNvbnN0IFdISVRFU1BBQ0UgPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAgeyB0eXBlOiB0eXBlcy5DSEFSLCB2YWx1ZTogOSB9LFxuICAgIHsgdHlwZTogdHlwZXMuQ0hBUiwgdmFsdWU6IDEwIH0sXG4gICAgeyB0eXBlOiB0eXBlcy5DSEFSLCB2YWx1ZTogMTEgfSxcbiAgICB7IHR5cGU6IHR5cGVzLkNIQVIsIHZhbHVlOiAxMiB9LFxuICAgIHsgdHlwZTogdHlwZXMuQ0hBUiwgdmFsdWU6IDEzIH0sXG4gICAgeyB0eXBlOiB0eXBlcy5DSEFSLCB2YWx1ZTogMzIgfSxcbiAgICB7IHR5cGU6IHR5cGVzLkNIQVIsIHZhbHVlOiAxNjAgfSxcbiAgICB7IHR5cGU6IHR5cGVzLkNIQVIsIHZhbHVlOiA1NzYwIH0sXG4gICAgeyB0eXBlOiB0eXBlcy5SQU5HRSwgZnJvbTogODE5MiwgdG86IDgyMDIgfSxcbiAgICB7IHR5cGU6IHR5cGVzLkNIQVIsIHZhbHVlOiA4MjMyIH0sXG4gICAgeyB0eXBlOiB0eXBlcy5DSEFSLCB2YWx1ZTogODIzMyB9LFxuICAgIHsgdHlwZTogdHlwZXMuQ0hBUiwgdmFsdWU6IDgyMzkgfSxcbiAgICB7IHR5cGU6IHR5cGVzLkNIQVIsIHZhbHVlOiA4Mjg3IH0sXG4gICAgeyB0eXBlOiB0eXBlcy5DSEFSLCB2YWx1ZTogMTIyODggfSxcbiAgICB7IHR5cGU6IHR5cGVzLkNIQVIsIHZhbHVlOiA2NTI3OSB9XG4gIF07XG59O1xuXG5jb25zdCBOT1RBTllDSEFSID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHsgdHlwZTogdHlwZXMuQ0hBUiwgdmFsdWU6IDEwIH0sXG4gICAgeyB0eXBlOiB0eXBlcy5DSEFSLCB2YWx1ZTogMTMgfSxcbiAgICB7IHR5cGU6IHR5cGVzLkNIQVIsIHZhbHVlOiA4MjMyIH0sXG4gICAgeyB0eXBlOiB0eXBlcy5DSEFSLCB2YWx1ZTogODIzMyB9LFxuICBdO1xufTtcblxuLy8gUHJlZGVmaW5lZCBjbGFzcyBvYmplY3RzLlxuZXhwb3J0cy53b3JkcyA9ICgpID0+ICh7IHR5cGU6IHR5cGVzLlNFVCwgc2V0OiBXT1JEUygpLCBub3Q6IGZhbHNlIH0pO1xuZXhwb3J0cy5ub3RXb3JkcyA9ICgpID0+ICh7IHR5cGU6IHR5cGVzLlNFVCwgc2V0OiBXT1JEUygpLCBub3Q6IHRydWUgfSk7XG5leHBvcnRzLmludHMgPSAoKSA9PiAoeyB0eXBlOiB0eXBlcy5TRVQsIHNldDogSU5UUygpLCBub3Q6IGZhbHNlIH0pO1xuZXhwb3J0cy5ub3RJbnRzID0gKCkgPT4gKHsgdHlwZTogdHlwZXMuU0VULCBzZXQ6IElOVFMoKSwgbm90OiB0cnVlIH0pO1xuZXhwb3J0cy53aGl0ZXNwYWNlID0gKCkgPT4gKHsgdHlwZTogdHlwZXMuU0VULCBzZXQ6IFdISVRFU1BBQ0UoKSwgbm90OiBmYWxzZSB9KTtcbmV4cG9ydHMubm90V2hpdGVzcGFjZSA9ICgpID0+ICh7IHR5cGU6IHR5cGVzLlNFVCwgc2V0OiBXSElURVNQQUNFKCksIG5vdDogdHJ1ZSB9KTtcbmV4cG9ydHMuYW55Q2hhciA9ICgpID0+ICh7IHR5cGU6IHR5cGVzLlNFVCwgc2V0OiBOT1RBTllDSEFSKCksIG5vdDogdHJ1ZSB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBST09UICAgICAgIDogMCxcbiAgR1JPVVAgICAgICA6IDEsXG4gIFBPU0lUSU9OICAgOiAyLFxuICBTRVQgICAgICAgIDogMyxcbiAgUkFOR0UgICAgICA6IDQsXG4gIFJFUEVUSVRJT04gOiA1LFxuICBSRUZFUkVOQ0UgIDogNixcbiAgQ0hBUiAgICAgICA6IDcsXG59O1xuIiwiY29uc3QgdHlwZXMgPSByZXF1aXJlKCcuL3R5cGVzJyk7XG5jb25zdCBzZXRzICA9IHJlcXVpcmUoJy4vc2V0cycpO1xuXG5cbmNvbnN0IENUUkwgPSAnQEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW1xcXFxdXiA/JztcbmNvbnN0IFNMU0ggPSB7ICcwJzogMCwgJ3QnOiA5LCAnbic6IDEwLCAndic6IDExLCAnZic6IDEyLCAncic6IDEzIH07XG5cbi8qKlxuICogRmluZHMgY2hhcmFjdGVyIHJlcHJlc2VudGF0aW9ucyBpbiBzdHIgYW5kIGNvbnZlcnQgYWxsIHRvXG4gKiB0aGVpciByZXNwZWN0aXZlIGNoYXJhY3RlcnNcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuc3RyVG9DaGFycyA9IGZ1bmN0aW9uKHN0cikge1xuICAvKiBqc2hpbnQgbWF4bGVuOiBmYWxzZSAqL1xuICB2YXIgY2hhcnNfcmVnZXggPSAvKFxcW1xcXFxiXFxdKXwoXFxcXCk/XFxcXCg/OnUoW0EtRjAtOV17NH0pfHgoW0EtRjAtOV17Mn0pfCgwP1swLTddezJ9KXxjKFtAQS1aW1xcXFxcXF1eP10pfChbMHRudmZyXSkpL2c7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKGNoYXJzX3JlZ2V4LCBmdW5jdGlvbihzLCBiLCBsYnMsIGExNiwgYjE2LCBjOCwgZGN0cmwsIGVzbHNoKSB7XG4gICAgaWYgKGxicykge1xuICAgICAgcmV0dXJuIHM7XG4gICAgfVxuXG4gICAgdmFyIGNvZGUgPSBiID8gOCA6XG4gICAgICBhMTYgICA/IHBhcnNlSW50KGExNiwgMTYpIDpcbiAgICAgIGIxNiAgID8gcGFyc2VJbnQoYjE2LCAxNikgOlxuICAgICAgYzggICAgPyBwYXJzZUludChjOCwgICA4KSA6XG4gICAgICBkY3RybCA/IENUUkwuaW5kZXhPZihkY3RybCkgOlxuICAgICAgU0xTSFtlc2xzaF07XG5cbiAgICB2YXIgYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSk7XG5cbiAgICAvLyBFc2NhcGUgc3BlY2lhbCByZWdleCBjaGFyYWN0ZXJzLlxuICAgIGlmICgvW1tcXF17fV4kLnw/KisoKV0vLnRlc3QoYykpIHtcbiAgICAgIGMgPSAnXFxcXCcgKyBjO1xuICAgIH1cblxuICAgIHJldHVybiBjO1xuICB9KTtcblxuICByZXR1cm4gc3RyO1xufTtcblxuXG4vKipcbiAqIHR1cm5zIGNsYXNzIGludG8gdG9rZW5zXG4gKiByZWFkcyBzdHIgdW50aWwgaXQgZW5jb3VudGVycyBhIF0gbm90IHByZWNlZWRlZCBieSBhIFxcXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHBhcmFtIHtTdHJpbmd9IHJlZ2V4cFN0clxuICogQHJldHVybiB7QXJyYXkuPEFycmF5LjxPYmplY3Q+LCBOdW1iZXI+fVxuICovXG5leHBvcnRzLnRva2VuaXplQ2xhc3MgPSAoc3RyLCByZWdleHBTdHIpID0+IHtcbiAgLyoganNoaW50IG1heGxlbjogZmFsc2UgKi9cbiAgdmFyIHRva2VucyA9IFtdO1xuICB2YXIgcmVnZXhwID0gL1xcXFwoPzoodyl8KGQpfChzKXwoVyl8KEQpfChTKSl8KCg/Oig/OlxcXFwpKC4pfChbXlxcXVxcXFxdKSktKD86XFxcXCk/KFteXFxdXSkpfChcXF0pfCg/OlxcXFwpPyhbXl0pL2c7XG4gIHZhciBycywgYztcblxuXG4gIHdoaWxlICgocnMgPSByZWdleHAuZXhlYyhzdHIpKSAhPSBudWxsKSB7XG4gICAgaWYgKHJzWzFdKSB7XG4gICAgICB0b2tlbnMucHVzaChzZXRzLndvcmRzKCkpO1xuXG4gICAgfSBlbHNlIGlmIChyc1syXSkge1xuICAgICAgdG9rZW5zLnB1c2goc2V0cy5pbnRzKCkpO1xuXG4gICAgfSBlbHNlIGlmIChyc1szXSkge1xuICAgICAgdG9rZW5zLnB1c2goc2V0cy53aGl0ZXNwYWNlKCkpO1xuXG4gICAgfSBlbHNlIGlmIChyc1s0XSkge1xuICAgICAgdG9rZW5zLnB1c2goc2V0cy5ub3RXb3JkcygpKTtcblxuICAgIH0gZWxzZSBpZiAocnNbNV0pIHtcbiAgICAgIHRva2Vucy5wdXNoKHNldHMubm90SW50cygpKTtcblxuICAgIH0gZWxzZSBpZiAocnNbNl0pIHtcbiAgICAgIHRva2Vucy5wdXNoKHNldHMubm90V2hpdGVzcGFjZSgpKTtcblxuICAgIH0gZWxzZSBpZiAocnNbN10pIHtcbiAgICAgIHRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogdHlwZXMuUkFOR0UsXG4gICAgICAgIGZyb206IChyc1s4XSB8fCByc1s5XSkuY2hhckNvZGVBdCgwKSxcbiAgICAgICAgdG86IHJzWzEwXS5jaGFyQ29kZUF0KDApLFxuICAgICAgfSk7XG5cbiAgICB9IGVsc2UgaWYgKChjID0gcnNbMTJdKSkge1xuICAgICAgdG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiB0eXBlcy5DSEFSLFxuICAgICAgICB2YWx1ZTogYy5jaGFyQ29kZUF0KDApLFxuICAgICAgfSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFt0b2tlbnMsIHJlZ2V4cC5sYXN0SW5kZXhdO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydHMuZXJyb3IocmVnZXhwU3RyLCAnVW50ZXJtaW5hdGVkIGNoYXJhY3RlciBjbGFzcycpO1xufTtcblxuXG4vKipcbiAqIFNob3J0Y3V0IHRvIHRocm93IGVycm9ycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcmVnZXhwXG4gKiBAcGFyYW0ge1N0cmluZ30gbXNnXG4gKi9cbmV4cG9ydHMuZXJyb3IgPSAocmVnZXhwLCBtc2cpID0+IHtcbiAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdJbnZhbGlkIHJlZ3VsYXIgZXhwcmVzc2lvbjogLycgKyByZWdleHAgKyAnLzogJyArIG1zZyk7XG59O1xuIiwiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6KHQ9dHx8c2VsZikuU3dlZXRhbGVydDI9ZSgpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXtyZXR1cm4ocj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24odCl7cmV0dXJuIHR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZ0LmNvbnN0cnVjdG9yPT09U3ltYm9sJiZ0IT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiB0fSkodCl9ZnVuY3Rpb24gYSh0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gbyh0LGUpe2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgbz1lW25dO28uZW51bWVyYWJsZT1vLmVudW1lcmFibGV8fCExLG8uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG8mJihvLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxvLmtleSxvKX19ZnVuY3Rpb24gcyh0LGUsbil7cmV0dXJuIGUmJm8odC5wcm90b3R5cGUsZSksbiYmbyh0LG4pLHR9ZnVuY3Rpb24gdSgpe3JldHVybih1PU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0xO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspe3ZhciBuLG89YXJndW1lbnRzW2VdO2ZvcihuIGluIG8pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sbikmJih0W25dPW9bbl0pfXJldHVybiB0fSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIGModCl7cmV0dXJuKGM9T2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5nZXRQcm90b3R5cGVPZjpmdW5jdGlvbih0KXtyZXR1cm4gdC5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZih0KX0pKHQpfWZ1bmN0aW9uIGwodCxlKXtyZXR1cm4obD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuX19wcm90b19fPWUsdH0pKHQsZSl9ZnVuY3Rpb24gZCgpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBSZWZsZWN0fHwhUmVmbGVjdC5jb25zdHJ1Y3QpcmV0dXJuITE7aWYoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSlyZXR1cm4hMTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm94eSlyZXR1cm4hMDt0cnl7cmV0dXJuIEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLFtdLGZ1bmN0aW9uKCl7fSkpLCEwfWNhdGNoKHQpe3JldHVybiExfX1mdW5jdGlvbiBpKHQsZSxuKXtyZXR1cm4oaT1kKCk/UmVmbGVjdC5jb25zdHJ1Y3Q6ZnVuY3Rpb24odCxlLG4pe3ZhciBvPVtudWxsXTtvLnB1c2guYXBwbHkobyxlKTtvPW5ldyhGdW5jdGlvbi5iaW5kLmFwcGx5KHQsbykpO3JldHVybiBuJiZsKG8sbi5wcm90b3R5cGUpLG99KS5hcHBseShudWxsLGFyZ3VtZW50cyl9ZnVuY3Rpb24gcCh0LGUpe3JldHVybiFlfHxcIm9iamVjdFwiIT10eXBlb2YgZSYmXCJmdW5jdGlvblwiIT10eXBlb2YgZT9mdW5jdGlvbih0KXtpZih2b2lkIDA9PT10KXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4gdH0odCk6ZX1mdW5jdGlvbiBmKHQsZSxuKXtyZXR1cm4oZj1cInVuZGVmaW5lZFwiIT10eXBlb2YgUmVmbGVjdCYmUmVmbGVjdC5nZXQ/UmVmbGVjdC5nZXQ6ZnVuY3Rpb24odCxlLG4pe3Q9ZnVuY3Rpb24odCxlKXtmb3IoOyFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKSYmbnVsbCE9PSh0PWModCkpOyk7cmV0dXJuIHR9KHQsZSk7aWYodCl7ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsZSk7cmV0dXJuIGUuZ2V0P2UuZ2V0LmNhbGwobik6ZS52YWx1ZX19KSh0LGUsbnx8dCl9ZnVuY3Rpb24gbSh0KXtyZXR1cm4gdC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSt0LnNsaWNlKDEpfWZ1bmN0aW9uIGgoZSl7cmV0dXJuIE9iamVjdC5rZXlzKGUpLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0pfWZ1bmN0aW9uIGcodCl7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHQpfWZ1bmN0aW9uIHYodCxlKXtlPSdcIicuY29uY2F0KHQsJ1wiIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLiBQbGVhc2UgdXNlIFwiJykuY29uY2F0KGUsJ1wiIGluc3RlYWQuJyksLTE9PT1ZLmluZGV4T2YoZSkmJihZLnB1c2goZSksVyhlKSl9ZnVuY3Rpb24gYih0KXtyZXR1cm4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgdC50b1Byb21pc2V9ZnVuY3Rpb24geSh0KXtyZXR1cm4gYih0KT90LnRvUHJvbWlzZSgpOlByb21pc2UucmVzb2x2ZSh0KX1mdW5jdGlvbiB3KHQpe3JldHVybiB0JiZQcm9taXNlLnJlc29sdmUodCk9PT10fWZ1bmN0aW9uIEModCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBFbGVtZW50fHxcIm9iamVjdFwiPT09cih0PXQpJiZ0LmpxdWVyeX1mdW5jdGlvbiBrKCl7cmV0dXJuIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoJC5jb250YWluZXIpKX1mdW5jdGlvbiBlKHQpe3ZhciBlPWsoKTtyZXR1cm4gZT9lLnF1ZXJ5U2VsZWN0b3IodCk6bnVsbH1mdW5jdGlvbiB0KHQpe3JldHVybiBlKFwiLlwiLmNvbmNhdCh0KSl9ZnVuY3Rpb24gQSgpe3JldHVybiB0KCQucG9wdXApfWZ1bmN0aW9uIHgoKXtyZXR1cm4gdCgkLmljb24pfWZ1bmN0aW9uIEIoKXtyZXR1cm4gdCgkLnRpdGxlKX1mdW5jdGlvbiBQKCl7cmV0dXJuIHQoJC5jb250ZW50KX1mdW5jdGlvbiBPKCl7cmV0dXJuIHQoJFtcImh0bWwtY29udGFpbmVyXCJdKX1mdW5jdGlvbiBFKCl7cmV0dXJuIHQoJC5pbWFnZSl9ZnVuY3Rpb24gbigpe3JldHVybiB0KCRbXCJwcm9ncmVzcy1zdGVwc1wiXSl9ZnVuY3Rpb24gUygpe3JldHVybiB0KCRbXCJ2YWxpZGF0aW9uLW1lc3NhZ2VcIl0pfWZ1bmN0aW9uIFQoKXtyZXR1cm4gZShcIi5cIi5jb25jYXQoJC5hY3Rpb25zLFwiIC5cIikuY29uY2F0KCQuY29uZmlybSkpfWZ1bmN0aW9uIEwoKXtyZXR1cm4gZShcIi5cIi5jb25jYXQoJC5hY3Rpb25zLFwiIC5cIikuY29uY2F0KCQuZGVueSkpfWZ1bmN0aW9uIHEoKXtyZXR1cm4gZShcIi5cIi5jb25jYXQoJC5sb2FkZXIpKX1mdW5jdGlvbiBEKCl7cmV0dXJuIGUoXCIuXCIuY29uY2F0KCQuYWN0aW9ucyxcIiAuXCIpLmNvbmNhdCgkLmNhbmNlbCkpfWZ1bmN0aW9uIGooKXtyZXR1cm4gdCgkLmFjdGlvbnMpfWZ1bmN0aW9uIE0oKXtyZXR1cm4gdCgkLmhlYWRlcil9ZnVuY3Rpb24gSSgpe3JldHVybiB0KCQuZm9vdGVyKX1mdW5jdGlvbiBIKCl7cmV0dXJuIHQoJFtcInRpbWVyLXByb2dyZXNzLWJhclwiXSl9ZnVuY3Rpb24gVigpe3JldHVybiB0KCQuY2xvc2UpfWZ1bmN0aW9uIFIoKXt2YXIgdD1nKEEoKS5xdWVyeVNlbGVjdG9yQWxsKCdbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSk6bm90KFt0YWJpbmRleD1cIjBcIl0pJykpLnNvcnQoZnVuY3Rpb24odCxlKXtyZXR1cm4gdD1wYXJzZUludCh0LmdldEF0dHJpYnV0ZShcInRhYmluZGV4XCIpKSwoZT1wYXJzZUludChlLmdldEF0dHJpYnV0ZShcInRhYmluZGV4XCIpKSk8dD8xOnQ8ZT8tMTowfSksZT1nKEEoKS5xdWVyeVNlbGVjdG9yQWxsKCdcXG4gIGFbaHJlZl0sXFxuICBhcmVhW2hyZWZdLFxcbiAgaW5wdXQ6bm90KFtkaXNhYmxlZF0pLFxcbiAgc2VsZWN0Om5vdChbZGlzYWJsZWRdKSxcXG4gIHRleHRhcmVhOm5vdChbZGlzYWJsZWRdKSxcXG4gIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSksXFxuICBpZnJhbWUsXFxuICBvYmplY3QsXFxuICBlbWJlZCxcXG4gIFt0YWJpbmRleD1cIjBcIl0sXFxuICBbY29udGVudGVkaXRhYmxlXSxcXG4gIGF1ZGlvW2NvbnRyb2xzXSxcXG4gIHZpZGVvW2NvbnRyb2xzXSxcXG4gIHN1bW1hcnlcXG4nKSkuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVyblwiLTFcIiE9PXQuZ2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIil9KTtyZXR1cm4gZnVuY3Rpb24odCl7Zm9yKHZhciBlPVtdLG49MDtuPHQubGVuZ3RoO24rKyktMT09PWUuaW5kZXhPZih0W25dKSYmZS5wdXNoKHRbbl0pO3JldHVybiBlfSh0LmNvbmNhdChlKSkuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiB3dCh0KX0pfWZ1bmN0aW9uIE4oKXtyZXR1cm4hRygpJiYhZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJFtcIm5vLWJhY2tkcm9wXCJdKX1mdW5jdGlvbiBVKGUsdCl7ZS50ZXh0Q29udGVudD1cIlwiLHQmJih0PShuZXcgRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcodCxcInRleHQvaHRtbFwiKSxnKHQucXVlcnlTZWxlY3RvcihcImhlYWRcIikuY2hpbGROb2RlcykuZm9yRWFjaChmdW5jdGlvbih0KXtlLmFwcGVuZENoaWxkKHQpfSksZyh0LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNoaWxkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24odCl7ZS5hcHBlbmRDaGlsZCh0KX0pKX1mdW5jdGlvbiBGKHQsZSl7aWYoZSl7Zm9yKHZhciBuPWUuc3BsaXQoL1xccysvKSxvPTA7bzxuLmxlbmd0aDtvKyspaWYoIXQuY2xhc3NMaXN0LmNvbnRhaW5zKG5bb10pKXJldHVybjtyZXR1cm4gMX19ZnVuY3Rpb24gXyh0LGUsbil7dmFyIG8saTtpZihpPWUsZygobz10KS5jbGFzc0xpc3QpLmZvckVhY2goZnVuY3Rpb24odCl7LTE9PT1oKCQpLmluZGV4T2YodCkmJi0xPT09aChYKS5pbmRleE9mKHQpJiYtMT09PWgoaS5zaG93Q2xhc3MpLmluZGV4T2YodCkmJm8uY2xhc3NMaXN0LnJlbW92ZSh0KX0pLGUuY3VzdG9tQ2xhc3MmJmUuY3VzdG9tQ2xhc3Nbbl0pe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlLmN1c3RvbUNsYXNzW25dJiYhZS5jdXN0b21DbGFzc1tuXS5mb3JFYWNoKXJldHVybiBXKFwiSW52YWxpZCB0eXBlIG9mIGN1c3RvbUNsYXNzLlwiLmNvbmNhdChuLCchIEV4cGVjdGVkIHN0cmluZyBvciBpdGVyYWJsZSBvYmplY3QsIGdvdCBcIicpLmNvbmNhdChyKGUuY3VzdG9tQ2xhc3Nbbl0pLCdcIicpKTt2dCh0LGUuY3VzdG9tQ2xhc3Nbbl0pfX12YXIgej1cIlN3ZWV0QWxlcnQyOlwiLFc9ZnVuY3Rpb24odCl7Y29uc29sZS53YXJuKFwiXCIuY29uY2F0KHosXCIgXCIpLmNvbmNhdChcIm9iamVjdFwiPT09cih0KT90LmpvaW4oXCIgXCIpOnQpKX0sSz1mdW5jdGlvbih0KXtjb25zb2xlLmVycm9yKFwiXCIuY29uY2F0KHosXCIgXCIpLmNvbmNhdCh0KSl9LFk9W10sWj1mdW5jdGlvbih0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3QoKTp0fSxRPU9iamVjdC5mcmVlemUoe2NhbmNlbDpcImNhbmNlbFwiLGJhY2tkcm9wOlwiYmFja2Ryb3BcIixjbG9zZTpcImNsb3NlXCIsZXNjOlwiZXNjXCIsdGltZXI6XCJ0aW1lclwifSksSj1mdW5jdGlvbih0KXt2YXIgZSxuPXt9O2ZvcihlIGluIHQpblt0W2VdXT1cInN3YWwyLVwiK3RbZV07cmV0dXJuIG59LCQ9SihbXCJjb250YWluZXJcIixcInNob3duXCIsXCJoZWlnaHQtYXV0b1wiLFwiaW9zZml4XCIsXCJwb3B1cFwiLFwibW9kYWxcIixcIm5vLWJhY2tkcm9wXCIsXCJuby10cmFuc2l0aW9uXCIsXCJ0b2FzdFwiLFwidG9hc3Qtc2hvd25cIixcInNob3dcIixcImhpZGVcIixcImNsb3NlXCIsXCJ0aXRsZVwiLFwiaGVhZGVyXCIsXCJjb250ZW50XCIsXCJodG1sLWNvbnRhaW5lclwiLFwiYWN0aW9uc1wiLFwiY29uZmlybVwiLFwiZGVueVwiLFwiY2FuY2VsXCIsXCJmb290ZXJcIixcImljb25cIixcImljb24tY29udGVudFwiLFwiaW1hZ2VcIixcImlucHV0XCIsXCJmaWxlXCIsXCJyYW5nZVwiLFwic2VsZWN0XCIsXCJyYWRpb1wiLFwiY2hlY2tib3hcIixcImxhYmVsXCIsXCJ0ZXh0YXJlYVwiLFwiaW5wdXRlcnJvclwiLFwiaW5wdXQtbGFiZWxcIixcInZhbGlkYXRpb24tbWVzc2FnZVwiLFwicHJvZ3Jlc3Mtc3RlcHNcIixcImFjdGl2ZS1wcm9ncmVzcy1zdGVwXCIsXCJwcm9ncmVzcy1zdGVwXCIsXCJwcm9ncmVzcy1zdGVwLWxpbmVcIixcImxvYWRlclwiLFwibG9hZGluZ1wiLFwic3R5bGVkXCIsXCJ0b3BcIixcInRvcC1zdGFydFwiLFwidG9wLWVuZFwiLFwidG9wLWxlZnRcIixcInRvcC1yaWdodFwiLFwiY2VudGVyXCIsXCJjZW50ZXItc3RhcnRcIixcImNlbnRlci1lbmRcIixcImNlbnRlci1sZWZ0XCIsXCJjZW50ZXItcmlnaHRcIixcImJvdHRvbVwiLFwiYm90dG9tLXN0YXJ0XCIsXCJib3R0b20tZW5kXCIsXCJib3R0b20tbGVmdFwiLFwiYm90dG9tLXJpZ2h0XCIsXCJncm93LXJvd1wiLFwiZ3Jvdy1jb2x1bW5cIixcImdyb3ctZnVsbHNjcmVlblwiLFwicnRsXCIsXCJ0aW1lci1wcm9ncmVzcy1iYXJcIixcInRpbWVyLXByb2dyZXNzLWJhci1jb250YWluZXJcIixcInNjcm9sbGJhci1tZWFzdXJlXCIsXCJpY29uLXN1Y2Nlc3NcIixcImljb24td2FybmluZ1wiLFwiaWNvbi1pbmZvXCIsXCJpY29uLXF1ZXN0aW9uXCIsXCJpY29uLWVycm9yXCJdKSxYPUooW1wic3VjY2Vzc1wiLFwid2FybmluZ1wiLFwiaW5mb1wiLFwicXVlc3Rpb25cIixcImVycm9yXCJdKSxHPWZ1bmN0aW9uKCl7cmV0dXJuIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCRbXCJ0b2FzdC1zaG93blwiXSl9LHR0PXtwcmV2aW91c0JvZHlQYWRkaW5nOm51bGx9O2Z1bmN0aW9uIGV0KHQsZSl7aWYoIWUpcmV0dXJuIG51bGw7c3dpdGNoKGUpe2Nhc2VcInNlbGVjdFwiOmNhc2VcInRleHRhcmVhXCI6Y2FzZVwiZmlsZVwiOnJldHVybiB5dCh0LCRbZV0pO2Nhc2VcImNoZWNrYm94XCI6cmV0dXJuIHQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoJC5jaGVja2JveCxcIiBpbnB1dFwiKSk7Y2FzZVwicmFkaW9cIjpyZXR1cm4gdC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdCgkLnJhZGlvLFwiIGlucHV0OmNoZWNrZWRcIikpfHx0LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KCQucmFkaW8sXCIgaW5wdXQ6Zmlyc3QtY2hpbGRcIikpO2Nhc2VcInJhbmdlXCI6cmV0dXJuIHQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoJC5yYW5nZSxcIiBpbnB1dFwiKSk7ZGVmYXVsdDpyZXR1cm4geXQodCwkLmlucHV0KX19ZnVuY3Rpb24gbnQodCl7dmFyIGU7dC5mb2N1cygpLFwiZmlsZVwiIT09dC50eXBlJiYoZT10LnZhbHVlLHQudmFsdWU9XCJcIix0LnZhbHVlPWUpfWZ1bmN0aW9uIG90KHQsZSxuKXt0JiZlJiYoZT1cInN0cmluZ1wiPT10eXBlb2YgZT9lLnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pOmUpLmZvckVhY2goZnVuY3Rpb24oZSl7dC5mb3JFYWNoP3QuZm9yRWFjaChmdW5jdGlvbih0KXtuP3QuY2xhc3NMaXN0LmFkZChlKTp0LmNsYXNzTGlzdC5yZW1vdmUoZSl9KTpuP3QuY2xhc3NMaXN0LmFkZChlKTp0LmNsYXNzTGlzdC5yZW1vdmUoZSl9KX1mdW5jdGlvbiBpdCh0LGUsbil7KG49bj09PVwiXCIuY29uY2F0KHBhcnNlSW50KG4pKT9wYXJzZUludChuKTpuKXx8MD09PXBhcnNlSW50KG4pP3Quc3R5bGVbZV09XCJudW1iZXJcIj09dHlwZW9mIG4/XCJcIi5jb25jYXQobixcInB4XCIpOm46dC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShlKX1mdW5jdGlvbiBydCh0KXt0LnN0eWxlLmRpc3BsYXk9MTxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOlwiZmxleFwifWZ1bmN0aW9uIGF0KHQpe3Quc3R5bGUuZGlzcGxheT1cIm5vbmVcIn1mdW5jdGlvbiBzdCh0LGUsbixvKXsoZT10LnF1ZXJ5U2VsZWN0b3IoZSkpJiYoZS5zdHlsZVtuXT1vKX1mdW5jdGlvbiB1dCh0LGUsbil7ZT9ydCh0LG4pOmF0KHQpfWZ1bmN0aW9uIGN0KHQpe3JldHVybiEhKHQuc2Nyb2xsSGVpZ2h0PnQuY2xpZW50SGVpZ2h0KX1mdW5jdGlvbiBsdCh0KXt2YXIgZT13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0KSx0PXBhcnNlRmxvYXQoZS5nZXRQcm9wZXJ0eVZhbHVlKFwiYW5pbWF0aW9uLWR1cmF0aW9uXCIpfHxcIjBcIiksZT1wYXJzZUZsb2F0KGUuZ2V0UHJvcGVydHlWYWx1ZShcInRyYW5zaXRpb24tZHVyYXRpb25cIil8fFwiMFwiKTtyZXR1cm4gMDx0fHwwPGV9ZnVuY3Rpb24gZHQodCl7dmFyIGU9MTxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0mJmFyZ3VtZW50c1sxXSxuPUgoKTt3dChuKSYmKGUmJihuLnN0eWxlLnRyYW5zaXRpb249XCJub25lXCIsbi5zdHlsZS53aWR0aD1cIjEwMCVcIiksc2V0VGltZW91dChmdW5jdGlvbigpe24uc3R5bGUudHJhbnNpdGlvbj1cIndpZHRoIFwiLmNvbmNhdCh0LzFlMyxcInMgbGluZWFyXCIpLG4uc3R5bGUud2lkdGg9XCIwJVwifSwxMCkpfWZ1bmN0aW9uIHB0KCl7cmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIHdpbmRvd3x8XCJ1bmRlZmluZWRcIj09dHlwZW9mIGRvY3VtZW50fWZ1bmN0aW9uIGZ0KHQpe01uLmlzVmlzaWJsZSgpJiZndCE9PXQudGFyZ2V0LnZhbHVlJiZNbi5yZXNldFZhbGlkYXRpb25NZXNzYWdlKCksZ3Q9dC50YXJnZXQudmFsdWV9ZnVuY3Rpb24gbXQodCxlKXt0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ/ZS5hcHBlbmRDaGlsZCh0KTpcIm9iamVjdFwiPT09cih0KT9BdCh0LGUpOnQmJlUoZSx0KX1mdW5jdGlvbiBodCh0LGUpe3ZhciBuPWooKSxvPXEoKSxpPVQoKSxyPUwoKSxhPUQoKTtlLnNob3dDb25maXJtQnV0dG9ufHxlLnNob3dEZW55QnV0dG9ufHxlLnNob3dDYW5jZWxCdXR0b258fGF0KG4pLF8obixlLFwiYWN0aW9uc1wiKSxQdChpLFwiY29uZmlybVwiLGUpLFB0KHIsXCJkZW55XCIsZSksUHQoYSxcImNhbmNlbFwiLGUpLGZ1bmN0aW9uKHQsZSxuLG8pe2lmKCFvLmJ1dHRvbnNTdHlsaW5nKXJldHVybiBidChbdCxlLG5dLCQuc3R5bGVkKTt2dChbdCxlLG5dLCQuc3R5bGVkKSxvLmNvbmZpcm1CdXR0b25Db2xvciYmKHQuc3R5bGUuYmFja2dyb3VuZENvbG9yPW8uY29uZmlybUJ1dHRvbkNvbG9yKTtvLmRlbnlCdXR0b25Db2xvciYmKGUuc3R5bGUuYmFja2dyb3VuZENvbG9yPW8uZGVueUJ1dHRvbkNvbG9yKTtvLmNhbmNlbEJ1dHRvbkNvbG9yJiYobi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9by5jYW5jZWxCdXR0b25Db2xvcil9KGkscixhLGUpLGUucmV2ZXJzZUJ1dHRvbnMmJihuLmluc2VydEJlZm9yZShhLG8pLG4uaW5zZXJ0QmVmb3JlKHIsbyksbi5pbnNlcnRCZWZvcmUoaSxvKSksVShvLGUubG9hZGVySHRtbCksXyhvLGUsXCJsb2FkZXJcIil9dmFyIGd0LHZ0PWZ1bmN0aW9uKHQsZSl7b3QodCxlLCEwKX0sYnQ9ZnVuY3Rpb24odCxlKXtvdCh0LGUsITEpfSx5dD1mdW5jdGlvbih0LGUpe2Zvcih2YXIgbj0wO248dC5jaGlsZE5vZGVzLmxlbmd0aDtuKyspaWYoRih0LmNoaWxkTm9kZXNbbl0sZSkpcmV0dXJuIHQuY2hpbGROb2Rlc1tuXX0sd3Q9ZnVuY3Rpb24odCl7cmV0dXJuISghdHx8ISh0Lm9mZnNldFdpZHRofHx0Lm9mZnNldEhlaWdodHx8dC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCkpfSxDdD0nXFxuIDxkaXYgYXJpYS1sYWJlbGxlZGJ5PVwiJy5jb25jYXQoJC50aXRsZSwnXCIgYXJpYS1kZXNjcmliZWRieT1cIicpLmNvbmNhdCgkLmNvbnRlbnQsJ1wiIGNsYXNzPVwiJykuY29uY2F0KCQucG9wdXAsJ1wiIHRhYmluZGV4PVwiLTFcIj5cXG4gICA8ZGl2IGNsYXNzPVwiJykuY29uY2F0KCQuaGVhZGVyLCdcIj5cXG4gICAgIDx1bCBjbGFzcz1cIicpLmNvbmNhdCgkW1wicHJvZ3Jlc3Mtc3RlcHNcIl0sJ1wiPjwvdWw+XFxuICAgICA8ZGl2IGNsYXNzPVwiJykuY29uY2F0KCQuaWNvbiwnXCI+PC9kaXY+XFxuICAgICA8aW1nIGNsYXNzPVwiJykuY29uY2F0KCQuaW1hZ2UsJ1wiIC8+XFxuICAgICA8aDIgY2xhc3M9XCInKS5jb25jYXQoJC50aXRsZSwnXCIgaWQ9XCInKS5jb25jYXQoJC50aXRsZSwnXCI+PC9oMj5cXG4gICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJykuY29uY2F0KCQuY2xvc2UsJ1wiPjwvYnV0dG9uPlxcbiAgIDwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XCInKS5jb25jYXQoJC5jb250ZW50LCdcIj5cXG4gICAgIDxkaXYgaWQ9XCInKS5jb25jYXQoJC5jb250ZW50LCdcIiBjbGFzcz1cIicpLmNvbmNhdCgkW1wiaHRtbC1jb250YWluZXJcIl0sJ1wiPjwvZGl2PlxcbiAgICAgPGlucHV0IGNsYXNzPVwiJykuY29uY2F0KCQuaW5wdXQsJ1wiIC8+XFxuICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzcz1cIicpLmNvbmNhdCgkLmZpbGUsJ1wiIC8+XFxuICAgICA8ZGl2IGNsYXNzPVwiJykuY29uY2F0KCQucmFuZ2UsJ1wiPlxcbiAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgLz5cXG4gICAgICAgPG91dHB1dD48L291dHB1dD5cXG4gICAgIDwvZGl2PlxcbiAgICAgPHNlbGVjdCBjbGFzcz1cIicpLmNvbmNhdCgkLnNlbGVjdCwnXCI+PC9zZWxlY3Q+XFxuICAgICA8ZGl2IGNsYXNzPVwiJykuY29uY2F0KCQucmFkaW8sJ1wiPjwvZGl2PlxcbiAgICAgPGxhYmVsIGZvcj1cIicpLmNvbmNhdCgkLmNoZWNrYm94LCdcIiBjbGFzcz1cIicpLmNvbmNhdCgkLmNoZWNrYm94LCdcIj5cXG4gICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XFxuICAgICAgIDxzcGFuIGNsYXNzPVwiJykuY29uY2F0KCQubGFiZWwsJ1wiPjwvc3Bhbj5cXG4gICAgIDwvbGFiZWw+XFxuICAgICA8dGV4dGFyZWEgY2xhc3M9XCInKS5jb25jYXQoJC50ZXh0YXJlYSwnXCI+PC90ZXh0YXJlYT5cXG4gICAgIDxkaXYgY2xhc3M9XCInKS5jb25jYXQoJFtcInZhbGlkYXRpb24tbWVzc2FnZVwiXSwnXCIgaWQ9XCInKS5jb25jYXQoJFtcInZhbGlkYXRpb24tbWVzc2FnZVwiXSwnXCI+PC9kaXY+XFxuICAgPC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cIicpLmNvbmNhdCgkLmFjdGlvbnMsJ1wiPlxcbiAgICAgPGRpdiBjbGFzcz1cIicpLmNvbmNhdCgkLmxvYWRlciwnXCI+PC9kaXY+XFxuICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIicpLmNvbmNhdCgkLmNvbmZpcm0sJ1wiPjwvYnV0dG9uPlxcbiAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCInKS5jb25jYXQoJC5kZW55LCdcIj48L2J1dHRvbj5cXG4gICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJykuY29uY2F0KCQuY2FuY2VsLCdcIj48L2J1dHRvbj5cXG4gICA8L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVwiJykuY29uY2F0KCQuZm9vdGVyLCdcIj48L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVwiJykuY29uY2F0KCRbXCJ0aW1lci1wcm9ncmVzcy1iYXItY29udGFpbmVyXCJdLCdcIj5cXG4gICAgIDxkaXYgY2xhc3M9XCInKS5jb25jYXQoJFtcInRpbWVyLXByb2dyZXNzLWJhclwiXSwnXCI+PC9kaXY+XFxuICAgPC9kaXY+XFxuIDwvZGl2PlxcbicpLnJlcGxhY2UoLyhefFxcbilcXHMqL2csXCJcIiksa3Q9ZnVuY3Rpb24odCl7dmFyIGUsbixvLGkscixhPSEhKGk9aygpKSYmKGkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpKSxidChbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LGRvY3VtZW50LmJvZHldLFskW1wibm8tYmFja2Ryb3BcIl0sJFtcInRvYXN0LXNob3duXCJdLCRbXCJoYXMtY29sdW1uXCJdXSksITApO3B0KCk/SyhcIlN3ZWV0QWxlcnQyIHJlcXVpcmVzIGRvY3VtZW50IHRvIGluaXRpYWxpemVcIik6KChyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLmNsYXNzTmFtZT0kLmNvbnRhaW5lcixhJiZ2dChyLCRbXCJuby10cmFuc2l0aW9uXCJdKSxVKHIsQ3QpLChpPVwic3RyaW5nXCI9PXR5cGVvZihlPXQudGFyZ2V0KT9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUpOmUpLmFwcGVuZENoaWxkKHIpLGE9dCwoZT1BKCkpLnNldEF0dHJpYnV0ZShcInJvbGVcIixhLnRvYXN0P1wiYWxlcnRcIjpcImRpYWxvZ1wiKSxlLnNldEF0dHJpYnV0ZShcImFyaWEtbGl2ZVwiLGEudG9hc3Q/XCJwb2xpdGVcIjpcImFzc2VydGl2ZVwiKSxhLnRvYXN0fHxlLnNldEF0dHJpYnV0ZShcImFyaWEtbW9kYWxcIixcInRydWVcIikscj1pLFwicnRsXCI9PT13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShyKS5kaXJlY3Rpb24mJnZ0KGsoKSwkLnJ0bCksdD1QKCksYT15dCh0LCQuaW5wdXQpLGU9eXQodCwkLmZpbGUpLG49dC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdCgkLnJhbmdlLFwiIGlucHV0XCIpKSxvPXQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoJC5yYW5nZSxcIiBvdXRwdXRcIikpLGk9eXQodCwkLnNlbGVjdCkscj10LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KCQuY2hlY2tib3gsXCIgaW5wdXRcIikpLHQ9eXQodCwkLnRleHRhcmVhKSxhLm9uaW5wdXQ9ZnQsZS5vbmNoYW5nZT1mdCxpLm9uY2hhbmdlPWZ0LHIub25jaGFuZ2U9ZnQsdC5vbmlucHV0PWZ0LG4ub25pbnB1dD1mdW5jdGlvbih0KXtmdCh0KSxvLnZhbHVlPW4udmFsdWV9LG4ub25jaGFuZ2U9ZnVuY3Rpb24odCl7ZnQodCksbi5uZXh0U2libGluZy52YWx1ZT1uLnZhbHVlfSl9LEF0PWZ1bmN0aW9uKHQsZSl7dC5qcXVlcnk/eHQoZSx0KTpVKGUsdC50b1N0cmluZygpKX0seHQ9ZnVuY3Rpb24odCxlKXtpZih0LnRleHRDb250ZW50PVwiXCIsMCBpbiBlKWZvcih2YXIgbj0wO24gaW4gZTtuKyspdC5hcHBlbmRDaGlsZChlW25dLmNsb25lTm9kZSghMCkpO2Vsc2UgdC5hcHBlbmRDaGlsZChlLmNsb25lTm9kZSghMCkpfSxCdD1mdW5jdGlvbigpe2lmKHB0KCkpcmV0dXJuITE7dmFyIHQsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLG49e1dlYmtpdEFuaW1hdGlvbjpcIndlYmtpdEFuaW1hdGlvbkVuZFwiLE9BbmltYXRpb246XCJvQW5pbWF0aW9uRW5kIG9hbmltYXRpb25lbmRcIixhbmltYXRpb246XCJhbmltYXRpb25lbmRcIn07Zm9yKHQgaW4gbilpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobix0KSYmdm9pZCAwIT09ZS5zdHlsZVt0XSlyZXR1cm4gblt0XTtyZXR1cm4hMX0oKTtmdW5jdGlvbiBQdCh0LGUsbil7dXQodCxuW1wic2hvd1wiLmNvbmNhdChtKGUpLFwiQnV0dG9uXCIpXSxcImlubGluZS1ibG9ja1wiKSxVKHQsbltcIlwiLmNvbmNhdChlLFwiQnV0dG9uVGV4dFwiKV0pLHQuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLG5bXCJcIi5jb25jYXQoZSxcIkJ1dHRvbkFyaWFMYWJlbFwiKV0pLHQuY2xhc3NOYW1lPSRbZV0sXyh0LG4sXCJcIi5jb25jYXQoZSxcIkJ1dHRvblwiKSksdnQodCxuW1wiXCIuY29uY2F0KGUsXCJCdXR0b25DbGFzc1wiKV0pfWZ1bmN0aW9uIE90KHQsZSl7dmFyIG4sbyxpPWsoKTtpJiYobz1pLFwic3RyaW5nXCI9PXR5cGVvZihuPWUuYmFja2Ryb3ApP28uc3R5bGUuYmFja2dyb3VuZD1uOm58fHZ0KFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsZG9jdW1lbnQuYm9keV0sJFtcIm5vLWJhY2tkcm9wXCJdKSwhZS5iYWNrZHJvcCYmZS5hbGxvd091dHNpZGVDbGljayYmVygnXCJhbGxvd091dHNpZGVDbGlja1wiIHBhcmFtZXRlciByZXF1aXJlcyBgYmFja2Ryb3BgIHBhcmFtZXRlciB0byBiZSBzZXQgdG8gYHRydWVgJyksbz1pLChuPWUucG9zaXRpb24paW4gJD92dChvLCRbbl0pOihXKCdUaGUgXCJwb3NpdGlvblwiIHBhcmFtZXRlciBpcyBub3QgdmFsaWQsIGRlZmF1bHRpbmcgdG8gXCJjZW50ZXJcIicpLHZ0KG8sJC5jZW50ZXIpKSxuPWksIShvPWUuZ3Jvdyl8fFwic3RyaW5nXCIhPXR5cGVvZiBvfHwobz1cImdyb3ctXCIuY29uY2F0KG8pKWluICQmJnZ0KG4sJFtvXSksXyhpLGUsXCJjb250YWluZXJcIiksKGU9ZG9jdW1lbnQuYm9keS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN3YWwyLXF1ZXVlLXN0ZXBcIikpJiYoaS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXF1ZXVlLXN0ZXBcIixlKSxkb2N1bWVudC5ib2R5LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtc3dhbDItcXVldWUtc3RlcFwiKSkpfWZ1bmN0aW9uIEV0KHQsZSl7dC5wbGFjZWhvbGRlciYmIWUuaW5wdXRQbGFjZWhvbGRlcnx8KHQucGxhY2Vob2xkZXI9ZS5pbnB1dFBsYWNlaG9sZGVyKX1mdW5jdGlvbiBTdCh0LGUsbil7dmFyIG8saTtuLmlucHV0TGFiZWwmJih0LmlkPSQuaW5wdXQsbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiksaT0kW1wiaW5wdXQtbGFiZWxcIl0sby5zZXRBdHRyaWJ1dGUoXCJmb3JcIix0LmlkKSxvLmNsYXNzTmFtZT1pLHZ0KG8sbi5jdXN0b21DbGFzcy5pbnB1dExhYmVsKSxvLmlubmVyVGV4dD1uLmlucHV0TGFiZWwsZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmViZWdpblwiLG8pKX12YXIgVHQ9e3Byb21pc2U6bmV3IFdlYWtNYXAsaW5uZXJQYXJhbXM6bmV3IFdlYWtNYXAsZG9tQ2FjaGU6bmV3IFdlYWtNYXB9LEx0PVtcImlucHV0XCIsXCJmaWxlXCIsXCJyYW5nZVwiLFwic2VsZWN0XCIsXCJyYWRpb1wiLFwiY2hlY2tib3hcIixcInRleHRhcmVhXCJdLHF0PWZ1bmN0aW9uKHQpe2lmKCFJdFt0LmlucHV0XSlyZXR1cm4gSygnVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0ISBFeHBlY3RlZCBcInRleHRcIiwgXCJlbWFpbFwiLCBcInBhc3N3b3JkXCIsIFwibnVtYmVyXCIsIFwidGVsXCIsIFwic2VsZWN0XCIsIFwicmFkaW9cIiwgXCJjaGVja2JveFwiLCBcInRleHRhcmVhXCIsIFwiZmlsZVwiIG9yIFwidXJsXCIsIGdvdCBcIicuY29uY2F0KHQuaW5wdXQsJ1wiJykpO3ZhciBlPU10KHQuaW5wdXQpLG49SXRbdC5pbnB1dF0oZSx0KTtydChuKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bnQobil9KX0sRHQ9ZnVuY3Rpb24odCxlKXt2YXIgbj1ldChQKCksdCk7aWYobilmb3IodmFyIG8gaW4hZnVuY3Rpb24odCl7Zm9yKHZhciBlPTA7ZTx0LmF0dHJpYnV0ZXMubGVuZ3RoO2UrKyl7dmFyIG49dC5hdHRyaWJ1dGVzW2VdLm5hbWU7LTE9PT1bXCJ0eXBlXCIsXCJ2YWx1ZVwiLFwic3R5bGVcIl0uaW5kZXhPZihuKSYmdC5yZW1vdmVBdHRyaWJ1dGUobil9fShuKSxlKVwicmFuZ2VcIj09PXQmJlwicGxhY2Vob2xkZXJcIj09PW98fG4uc2V0QXR0cmlidXRlKG8sZVtvXSl9LGp0PWZ1bmN0aW9uKHQpe3ZhciBlPU10KHQuaW5wdXQpO3QuY3VzdG9tQ2xhc3MmJnZ0KGUsdC5jdXN0b21DbGFzcy5pbnB1dCl9LE10PWZ1bmN0aW9uKHQpe3Q9JFt0XXx8JC5pbnB1dDtyZXR1cm4geXQoUCgpLHQpfSxJdD17fTtJdC50ZXh0PUl0LmVtYWlsPUl0LnBhc3N3b3JkPUl0Lm51bWJlcj1JdC50ZWw9SXQudXJsPWZ1bmN0aW9uKHQsZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUuaW5wdXRWYWx1ZXx8XCJudW1iZXJcIj09dHlwZW9mIGUuaW5wdXRWYWx1ZT90LnZhbHVlPWUuaW5wdXRWYWx1ZTp3KGUuaW5wdXRWYWx1ZSl8fFcoJ1VuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dFZhbHVlISBFeHBlY3RlZCBcInN0cmluZ1wiLCBcIm51bWJlclwiIG9yIFwiUHJvbWlzZVwiLCBnb3QgXCInLmNvbmNhdChyKGUuaW5wdXRWYWx1ZSksJ1wiJykpLFN0KHQsdCxlKSxFdCh0LGUpLHQudHlwZT1lLmlucHV0LHR9LEl0LmZpbGU9ZnVuY3Rpb24odCxlKXtyZXR1cm4gU3QodCx0LGUpLEV0KHQsZSksdH0sSXQucmFuZ2U9ZnVuY3Rpb24odCxlKXt2YXIgbj10LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKSxvPXQucXVlcnlTZWxlY3RvcihcIm91dHB1dFwiKTtyZXR1cm4gbi52YWx1ZT1lLmlucHV0VmFsdWUsbi50eXBlPWUuaW5wdXQsby52YWx1ZT1lLmlucHV0VmFsdWUsU3Qobix0LGUpLHR9LEl0LnNlbGVjdD1mdW5jdGlvbih0LGUpe3ZhciBuO3JldHVybiB0LnRleHRDb250ZW50PVwiXCIsZS5pbnB1dFBsYWNlaG9sZGVyJiYobj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpLFUobixlLmlucHV0UGxhY2Vob2xkZXIpLG4udmFsdWU9XCJcIixuLmRpc2FibGVkPSEwLG4uc2VsZWN0ZWQ9ITAsdC5hcHBlbmRDaGlsZChuKSksU3QodCx0LGUpLHR9LEl0LnJhZGlvPWZ1bmN0aW9uKHQpe3JldHVybiB0LnRleHRDb250ZW50PVwiXCIsdH0sSXQuY2hlY2tib3g9ZnVuY3Rpb24odCxlKXt2YXIgbj1ldChQKCksXCJjaGVja2JveFwiKTtuLnZhbHVlPTEsbi5pZD0kLmNoZWNrYm94LG4uY2hlY2tlZD1Cb29sZWFuKGUuaW5wdXRWYWx1ZSk7bj10LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpO3JldHVybiBVKG4sZS5pbnB1dFBsYWNlaG9sZGVyKSx0fSxJdC50ZXh0YXJlYT1mdW5jdGlvbihlLHQpe2UudmFsdWU9dC5pbnB1dFZhbHVlLEV0KGUsdCksU3QoZSxlLHQpO2Z1bmN0aW9uIG4odCl7cmV0dXJuIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQpLnBhZGRpbmdMZWZ0KStwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0KS5wYWRkaW5nUmlnaHQpfXZhciBvO3JldHVyblwiTXV0YXRpb25PYnNlcnZlclwiaW4gd2luZG93JiYobz1wYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShBKCkpLndpZHRoKSxuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbigpe3ZhciB0PWUub2Zmc2V0V2lkdGgrbihBKCkpK24oUCgpKTtBKCkuc3R5bGUud2lkdGg9bzx0P1wiXCIuY29uY2F0KHQsXCJweFwiKTpudWxsfSkub2JzZXJ2ZShlLHthdHRyaWJ1dGVzOiEwLGF0dHJpYnV0ZUZpbHRlcjpbXCJzdHlsZVwiXX0pKSxlfTtmdW5jdGlvbiBIdCh0LGUpe3ZhciBvLGkscixuPU8oKTtfKG4sZSxcImh0bWxDb250YWluZXJcIiksZS5odG1sPyhtdChlLmh0bWwsbikscnQobixcImJsb2NrXCIpKTplLnRleHQ/KG4udGV4dENvbnRlbnQ9ZS50ZXh0LHJ0KG4sXCJibG9ja1wiKSk6YXQobiksdD10LG89ZSxpPVAoKSx0PVR0LmlubmVyUGFyYW1zLmdldCh0KSxyPSF0fHxvLmlucHV0IT09dC5pbnB1dCxMdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBlPSRbdF0sbj15dChpLGUpO0R0KHQsby5pbnB1dEF0dHJpYnV0ZXMpLG4uY2xhc3NOYW1lPWUsciYmYXQobil9KSxvLmlucHV0JiYociYmcXQobyksanQobykpLF8oUCgpLGUsXCJjb250ZW50XCIpfWZ1bmN0aW9uIFZ0KCl7cmV0dXJuIGsoKSYmaygpLmdldEF0dHJpYnV0ZShcImRhdGEtcXVldWUtc3RlcFwiKX1mdW5jdGlvbiBSdCh0LG8pe3ZhciBpPW4oKTtpZighby5wcm9ncmVzc1N0ZXBzfHwwPT09by5wcm9ncmVzc1N0ZXBzLmxlbmd0aClyZXR1cm4gYXQoaSksMDtydChpKSxpLnRleHRDb250ZW50PVwiXCI7dmFyIHI9cGFyc2VJbnQodm9pZCAwPT09by5jdXJyZW50UHJvZ3Jlc3NTdGVwP1Z0KCk6by5jdXJyZW50UHJvZ3Jlc3NTdGVwKTtyPj1vLnByb2dyZXNzU3RlcHMubGVuZ3RoJiZXKFwiSW52YWxpZCBjdXJyZW50UHJvZ3Jlc3NTdGVwIHBhcmFtZXRlciwgaXQgc2hvdWxkIGJlIGxlc3MgdGhhbiBwcm9ncmVzc1N0ZXBzLmxlbmd0aCAoY3VycmVudFByb2dyZXNzU3RlcCBsaWtlIEpTIGFycmF5cyBzdGFydHMgZnJvbSAwKVwiKSxvLnByb2dyZXNzU3RlcHMuZm9yRWFjaChmdW5jdGlvbih0LGUpe3ZhciBuLHQ9KG49dCx0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSx2dCh0LCRbXCJwcm9ncmVzcy1zdGVwXCJdKSxVKHQsbiksdCk7aS5hcHBlbmRDaGlsZCh0KSxlPT09ciYmdnQodCwkW1wiYWN0aXZlLXByb2dyZXNzLXN0ZXBcIl0pLGUhPT1vLnByb2dyZXNzU3RlcHMubGVuZ3RoLTEmJih0PW8sZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIiksdnQoZSwkW1wicHJvZ3Jlc3Mtc3RlcC1saW5lXCJdKSx0LnByb2dyZXNzU3RlcHNEaXN0YW5jZSYmKGUuc3R5bGUud2lkdGg9dC5wcm9ncmVzc1N0ZXBzRGlzdGFuY2UpLGkuYXBwZW5kQ2hpbGQoZSkpfSl9ZnVuY3Rpb24gTnQodCxlKXt2YXIgbixvPU0oKTtfKG8sZSxcImhlYWRlclwiKSxSdCgwLGUpLG49dCxvPWUsdD1UdC5pbm5lclBhcmFtcy5nZXQobiksbj14KCksdCYmby5pY29uPT09dC5pY29uPyhXdChuLG8pLF90KG4sbykpOm8uaWNvbnx8by5pY29uSHRtbD9vLmljb24mJi0xPT09T2JqZWN0LmtleXMoWCkuaW5kZXhPZihvLmljb24pPyhLKCdVbmtub3duIGljb24hIEV4cGVjdGVkIFwic3VjY2Vzc1wiLCBcImVycm9yXCIsIFwid2FybmluZ1wiLCBcImluZm9cIiBvciBcInF1ZXN0aW9uXCIsIGdvdCBcIicuY29uY2F0KG8uaWNvbiwnXCInKSksYXQobikpOihydChuKSxXdChuLG8pLF90KG4sbyksdnQobixvLnNob3dDbGFzcy5pY29uKSk6YXQobiksZnVuY3Rpb24odCl7dmFyIGU9RSgpO2lmKCF0LmltYWdlVXJsKXJldHVybiBhdChlKTtydChlLFwiXCIpLGUuc2V0QXR0cmlidXRlKFwic3JjXCIsdC5pbWFnZVVybCksZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIix0LmltYWdlQWx0KSxpdChlLFwid2lkdGhcIix0LmltYWdlV2lkdGgpLGl0KGUsXCJoZWlnaHRcIix0LmltYWdlSGVpZ2h0KSxlLmNsYXNzTmFtZT0kLmltYWdlLF8oZSx0LFwiaW1hZ2VcIil9KGUpLG89ZSxuPUIoKSx1dChuLG8udGl0bGV8fG8udGl0bGVUZXh0LFwiYmxvY2tcIiksby50aXRsZSYmbXQoby50aXRsZSxuKSxvLnRpdGxlVGV4dCYmKG4uaW5uZXJUZXh0PW8udGl0bGVUZXh0KSxfKG4sbyxcInRpdGxlXCIpLG89ZSxlPVYoKSxVKGUsby5jbG9zZUJ1dHRvbkh0bWwpLF8oZSxvLFwiY2xvc2VCdXR0b25cIiksdXQoZSxvLnNob3dDbG9zZUJ1dHRvbiksZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsby5jbG9zZUJ1dHRvbkFyaWFMYWJlbCl9ZnVuY3Rpb24gVXQodCxlKXt2YXIgbixvLGk7aT1lLG49aygpLG89QSgpLGkudG9hc3Q/KGl0KG4sXCJ3aWR0aFwiLGkud2lkdGgpLG8uc3R5bGUud2lkdGg9XCIxMDAlXCIpOml0KG8sXCJ3aWR0aFwiLGkud2lkdGgpLGl0KG8sXCJwYWRkaW5nXCIsaS5wYWRkaW5nKSxpLmJhY2tncm91bmQmJihvLnN0eWxlLmJhY2tncm91bmQ9aS5iYWNrZ3JvdW5kKSxhdChTKCkpLFF0KG8saSksT3QoMCxlKSxOdCh0LGUpLEh0KHQsZSksaHQoMCxlKSxpPWUsdD1JKCksdXQodCxpLmZvb3RlciksaS5mb290ZXImJm10KGkuZm9vdGVyLHQpLF8odCxpLFwiZm9vdGVyXCIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUuZGlkUmVuZGVyP2UuZGlkUmVuZGVyKEEoKSk6XCJmdW5jdGlvblwiPT10eXBlb2YgZS5vblJlbmRlciYmZS5vblJlbmRlcihBKCkpfWZ1bmN0aW9uIEZ0KCl7cmV0dXJuIFQoKSYmVCgpLmNsaWNrKCl9dmFyIF90PWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBuIGluIFgpZS5pY29uIT09biYmYnQodCxYW25dKTt2dCh0LFhbZS5pY29uXSksS3QodCxlKSx6dCgpLF8odCxlLFwiaWNvblwiKX0senQ9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9QSgpLGU9d2luZG93LmdldENvbXB1dGVkU3R5bGUodCkuZ2V0UHJvcGVydHlWYWx1ZShcImJhY2tncm91bmQtY29sb3JcIiksbj10LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV0sIC5zd2FsMi1zdWNjZXNzLWZpeFwiKSxvPTA7bzxuLmxlbmd0aDtvKyspbltvXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9ZX0sV3Q9ZnVuY3Rpb24odCxlKXt0LnRleHRDb250ZW50PVwiXCIsZS5pY29uSHRtbD9VKHQsWXQoZS5pY29uSHRtbCkpOlwic3VjY2Vzc1wiPT09ZS5pY29uP1UodCwnXFxuICAgICAgPGRpdiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1sZWZ0XCI+PC9kaXY+XFxuICAgICAgPHNwYW4gY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWxpbmUtdGlwXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nXCI+PC9zcGFuPlxcbiAgICAgIDxkaXYgY2xhc3M9XCJzd2FsMi1zdWNjZXNzLXJpbmdcIj48L2Rpdj4gPGRpdiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtZml4XCI+PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1yaWdodFwiPjwvZGl2PlxcbiAgICAnKTpcImVycm9yXCI9PT1lLmljb24/VSh0LCdcXG4gICAgICA8c3BhbiBjbGFzcz1cInN3YWwyLXgtbWFya1wiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzd2FsMi14LW1hcmstbGluZS1sZWZ0XCI+PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzd2FsMi14LW1hcmstbGluZS1yaWdodFwiPjwvc3Bhbj5cXG4gICAgICA8L3NwYW4+XFxuICAgICcpOlUodCxZdCh7cXVlc3Rpb246XCI/XCIsd2FybmluZzpcIiFcIixpbmZvOlwiaVwifVtlLmljb25dKSl9LEt0PWZ1bmN0aW9uKHQsZSl7aWYoZS5pY29uQ29sb3Ipe3Quc3R5bGUuY29sb3I9ZS5pY29uQ29sb3IsdC5zdHlsZS5ib3JkZXJDb2xvcj1lLmljb25Db2xvcjtmb3IodmFyIG49MCxvPVtcIi5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwXCIsXCIuc3dhbDItc3VjY2Vzcy1saW5lLWxvbmdcIixcIi5zd2FsMi14LW1hcmstbGluZS1sZWZ0XCIsXCIuc3dhbDIteC1tYXJrLWxpbmUtcmlnaHRcIl07bjxvLmxlbmd0aDtuKyspc3QodCxvW25dLFwiYmFja2dyb3VuZENvbG9yXCIsZS5pY29uQ29sb3IpO3N0KHQsXCIuc3dhbDItc3VjY2Vzcy1yaW5nXCIsXCJib3JkZXJDb2xvclwiLGUuaWNvbkNvbG9yKX19LFl0PWZ1bmN0aW9uKHQpe3JldHVybic8ZGl2IGNsYXNzPVwiJy5jb25jYXQoJFtcImljb24tY29udGVudFwiXSwnXCI+JykuY29uY2F0KHQsXCI8L2Rpdj5cIil9LFp0PVtdLFF0PWZ1bmN0aW9uKHQsZSl7dC5jbGFzc05hbWU9XCJcIi5jb25jYXQoJC5wb3B1cCxcIiBcIikuY29uY2F0KHd0KHQpP2Uuc2hvd0NsYXNzLnBvcHVwOlwiXCIpLGUudG9hc3Q/KHZ0KFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsZG9jdW1lbnQuYm9keV0sJFtcInRvYXN0LXNob3duXCJdKSx2dCh0LCQudG9hc3QpKTp2dCh0LCQubW9kYWwpLF8odCxlLFwicG9wdXBcIiksXCJzdHJpbmdcIj09dHlwZW9mIGUuY3VzdG9tQ2xhc3MmJnZ0KHQsZS5jdXN0b21DbGFzcyksZS5pY29uJiZ2dCh0LCRbXCJpY29uLVwiLmNvbmNhdChlLmljb24pXSl9O2Z1bmN0aW9uIEp0KHQpeyhlPUEoKSl8fE1uLmZpcmUoKTt2YXIgZT1BKCksbj1qKCksbz1xKCk7IXQmJnd0KFQoKSkmJih0PVQoKSkscnQobiksdCYmKGF0KHQpLG8uc2V0QXR0cmlidXRlKFwiZGF0YS1idXR0b24tdG8tcmVwbGFjZVwiLHQuY2xhc3NOYW1lKSksby5wYXJlbnROb2RlLmluc2VydEJlZm9yZShvLHQpLHZ0KFtlLG5dLCQubG9hZGluZykscnQobyksZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWxvYWRpbmdcIiwhMCksZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWJ1c3lcIiwhMCksZS5mb2N1cygpfWZ1bmN0aW9uICR0KG8pe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbih0KXtpZighbylyZXR1cm4gdCgpO3ZhciBlPXdpbmRvdy5zY3JvbGxYLG49d2luZG93LnNjcm9sbFk7dGUucmVzdG9yZUZvY3VzVGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGUucHJldmlvdXNBY3RpdmVFbGVtZW50JiZ0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQuZm9jdXM/KHRlLnByZXZpb3VzQWN0aXZlRWxlbWVudC5mb2N1cygpLHRlLnByZXZpb3VzQWN0aXZlRWxlbWVudD1udWxsKTpkb2N1bWVudC5ib2R5JiZkb2N1bWVudC5ib2R5LmZvY3VzKCksdCgpfSwxMDApLHZvaWQgMCE9PWUmJnZvaWQgMCE9PW4mJndpbmRvdy5zY3JvbGxUbyhlLG4pfSl9ZnVuY3Rpb24gWHQoKXtpZih0ZS50aW1lb3V0KXJldHVybiBmdW5jdGlvbigpe3ZhciB0PUgoKSxlPXBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQpLndpZHRoKTt0LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvblwiKSx0LnN0eWxlLndpZHRoPVwiMTAwJVwiO3ZhciBuPXBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQpLndpZHRoKSxuPXBhcnNlSW50KGUvbioxMDApO3Quc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uXCIpLHQuc3R5bGUud2lkdGg9XCJcIi5jb25jYXQobixcIiVcIil9KCksdGUudGltZW91dC5zdG9wKCl9ZnVuY3Rpb24gR3QoKXtpZih0ZS50aW1lb3V0KXt2YXIgdD10ZS50aW1lb3V0LnN0YXJ0KCk7cmV0dXJuIGR0KHQpLHR9fXZhciB0ZT17fSxlZT0hMSxuZT17fTtmdW5jdGlvbiBvZSh0KXtmb3IodmFyIGU9dC50YXJnZXQ7ZSYmZSE9PWRvY3VtZW50O2U9ZS5wYXJlbnROb2RlKWZvcih2YXIgbiBpbiBuZSl7dmFyIG89ZS5nZXRBdHRyaWJ1dGUobik7aWYobylyZXR1cm4gdm9pZCBuZVtuXS5maXJlKHt0ZW1wbGF0ZTpvfSl9fWZ1bmN0aW9uIGllKHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc2UsdCl9ZnVuY3Rpb24gcmUodCl7cmV0dXJuIGNlW3RdfWZ1bmN0aW9uIGFlKHQpe2Zvcih2YXIgZSBpbiB0KWllKG49ZSl8fFcoJ1Vua25vd24gcGFyYW1ldGVyIFwiJy5jb25jYXQobiwnXCInKSksdC50b2FzdCYmKG49ZSwtMSE9PWxlLmluZGV4T2YobikmJlcoJ1RoZSBwYXJhbWV0ZXIgXCInLmNvbmNhdChuLCdcIiBpcyBpbmNvbXBhdGlibGUgd2l0aCB0b2FzdHMnKSkpLHJlKGU9ZSkmJnYoZSxyZShlKSk7dmFyIG59dmFyIHNlPXt0aXRsZTpcIlwiLHRpdGxlVGV4dDpcIlwiLHRleHQ6XCJcIixodG1sOlwiXCIsZm9vdGVyOlwiXCIsaWNvbjp2b2lkIDAsaWNvbkNvbG9yOnZvaWQgMCxpY29uSHRtbDp2b2lkIDAsdGVtcGxhdGU6dm9pZCAwLHRvYXN0OiExLGFuaW1hdGlvbjohMCxzaG93Q2xhc3M6e3BvcHVwOlwic3dhbDItc2hvd1wiLGJhY2tkcm9wOlwic3dhbDItYmFja2Ryb3Atc2hvd1wiLGljb246XCJzd2FsMi1pY29uLXNob3dcIn0saGlkZUNsYXNzOntwb3B1cDpcInN3YWwyLWhpZGVcIixiYWNrZHJvcDpcInN3YWwyLWJhY2tkcm9wLWhpZGVcIixpY29uOlwic3dhbDItaWNvbi1oaWRlXCJ9LGN1c3RvbUNsYXNzOnt9LHRhcmdldDpcImJvZHlcIixiYWNrZHJvcDohMCxoZWlnaHRBdXRvOiEwLGFsbG93T3V0c2lkZUNsaWNrOiEwLGFsbG93RXNjYXBlS2V5OiEwLGFsbG93RW50ZXJLZXk6ITAsc3RvcEtleWRvd25Qcm9wYWdhdGlvbjohMCxrZXlkb3duTGlzdGVuZXJDYXB0dXJlOiExLHNob3dDb25maXJtQnV0dG9uOiEwLHNob3dEZW55QnV0dG9uOiExLHNob3dDYW5jZWxCdXR0b246ITEscHJlQ29uZmlybTp2b2lkIDAscHJlRGVueTp2b2lkIDAsY29uZmlybUJ1dHRvblRleHQ6XCJPS1wiLGNvbmZpcm1CdXR0b25BcmlhTGFiZWw6XCJcIixjb25maXJtQnV0dG9uQ29sb3I6dm9pZCAwLGRlbnlCdXR0b25UZXh0OlwiTm9cIixkZW55QnV0dG9uQXJpYUxhYmVsOlwiXCIsZGVueUJ1dHRvbkNvbG9yOnZvaWQgMCxjYW5jZWxCdXR0b25UZXh0OlwiQ2FuY2VsXCIsY2FuY2VsQnV0dG9uQXJpYUxhYmVsOlwiXCIsY2FuY2VsQnV0dG9uQ29sb3I6dm9pZCAwLGJ1dHRvbnNTdHlsaW5nOiEwLHJldmVyc2VCdXR0b25zOiExLGZvY3VzQ29uZmlybTohMCxmb2N1c0Rlbnk6ITEsZm9jdXNDYW5jZWw6ITEscmV0dXJuRm9jdXM6ITAsc2hvd0Nsb3NlQnV0dG9uOiExLGNsb3NlQnV0dG9uSHRtbDpcIiZ0aW1lcztcIixjbG9zZUJ1dHRvbkFyaWFMYWJlbDpcIkNsb3NlIHRoaXMgZGlhbG9nXCIsbG9hZGVySHRtbDpcIlwiLHNob3dMb2FkZXJPbkNvbmZpcm06ITEsc2hvd0xvYWRlck9uRGVueTohMSxpbWFnZVVybDp2b2lkIDAsaW1hZ2VXaWR0aDp2b2lkIDAsaW1hZ2VIZWlnaHQ6dm9pZCAwLGltYWdlQWx0OlwiXCIsdGltZXI6dm9pZCAwLHRpbWVyUHJvZ3Jlc3NCYXI6ITEsd2lkdGg6dm9pZCAwLHBhZGRpbmc6dm9pZCAwLGJhY2tncm91bmQ6dm9pZCAwLGlucHV0OnZvaWQgMCxpbnB1dFBsYWNlaG9sZGVyOlwiXCIsaW5wdXRMYWJlbDpcIlwiLGlucHV0VmFsdWU6XCJcIixpbnB1dE9wdGlvbnM6e30saW5wdXRBdXRvVHJpbTohMCxpbnB1dEF0dHJpYnV0ZXM6e30saW5wdXRWYWxpZGF0b3I6dm9pZCAwLHJldHVybklucHV0VmFsdWVPbkRlbnk6ITEsdmFsaWRhdGlvbk1lc3NhZ2U6dm9pZCAwLGdyb3c6ITEscG9zaXRpb246XCJjZW50ZXJcIixwcm9ncmVzc1N0ZXBzOltdLGN1cnJlbnRQcm9ncmVzc1N0ZXA6dm9pZCAwLHByb2dyZXNzU3RlcHNEaXN0YW5jZTp2b2lkIDAsb25CZWZvcmVPcGVuOnZvaWQgMCxvbk9wZW46dm9pZCAwLHdpbGxPcGVuOnZvaWQgMCxkaWRPcGVuOnZvaWQgMCxvblJlbmRlcjp2b2lkIDAsZGlkUmVuZGVyOnZvaWQgMCxvbkNsb3NlOnZvaWQgMCxvbkFmdGVyQ2xvc2U6dm9pZCAwLHdpbGxDbG9zZTp2b2lkIDAsZGlkQ2xvc2U6dm9pZCAwLG9uRGVzdHJveTp2b2lkIDAsZGlkRGVzdHJveTp2b2lkIDAsc2Nyb2xsYmFyUGFkZGluZzohMH0sdWU9W1wiYWxsb3dFc2NhcGVLZXlcIixcImFsbG93T3V0c2lkZUNsaWNrXCIsXCJiYWNrZ3JvdW5kXCIsXCJidXR0b25zU3R5bGluZ1wiLFwiY2FuY2VsQnV0dG9uQXJpYUxhYmVsXCIsXCJjYW5jZWxCdXR0b25Db2xvclwiLFwiY2FuY2VsQnV0dG9uVGV4dFwiLFwiY2xvc2VCdXR0b25BcmlhTGFiZWxcIixcImNsb3NlQnV0dG9uSHRtbFwiLFwiY29uZmlybUJ1dHRvbkFyaWFMYWJlbFwiLFwiY29uZmlybUJ1dHRvbkNvbG9yXCIsXCJjb25maXJtQnV0dG9uVGV4dFwiLFwiY3VycmVudFByb2dyZXNzU3RlcFwiLFwiY3VzdG9tQ2xhc3NcIixcImRlbnlCdXR0b25BcmlhTGFiZWxcIixcImRlbnlCdXR0b25Db2xvclwiLFwiZGVueUJ1dHRvblRleHRcIixcImRpZENsb3NlXCIsXCJkaWREZXN0cm95XCIsXCJmb290ZXJcIixcImhpZGVDbGFzc1wiLFwiaHRtbFwiLFwiaWNvblwiLFwiaWNvbkNvbG9yXCIsXCJpY29uSHRtbFwiLFwiaW1hZ2VBbHRcIixcImltYWdlSGVpZ2h0XCIsXCJpbWFnZVVybFwiLFwiaW1hZ2VXaWR0aFwiLFwib25BZnRlckNsb3NlXCIsXCJvbkNsb3NlXCIsXCJvbkRlc3Ryb3lcIixcInByb2dyZXNzU3RlcHNcIixcInJldHVybkZvY3VzXCIsXCJyZXZlcnNlQnV0dG9uc1wiLFwic2hvd0NhbmNlbEJ1dHRvblwiLFwic2hvd0Nsb3NlQnV0dG9uXCIsXCJzaG93Q29uZmlybUJ1dHRvblwiLFwic2hvd0RlbnlCdXR0b25cIixcInRleHRcIixcInRpdGxlXCIsXCJ0aXRsZVRleHRcIixcIndpbGxDbG9zZVwiXSxjZT17YW5pbWF0aW9uOidzaG93Q2xhc3NcIiBhbmQgXCJoaWRlQ2xhc3MnLG9uQmVmb3JlT3BlbjpcIndpbGxPcGVuXCIsb25PcGVuOlwiZGlkT3BlblwiLG9uUmVuZGVyOlwiZGlkUmVuZGVyXCIsb25DbG9zZTpcIndpbGxDbG9zZVwiLG9uQWZ0ZXJDbG9zZTpcImRpZENsb3NlXCIsb25EZXN0cm95OlwiZGlkRGVzdHJveVwifSxsZT1bXCJhbGxvd091dHNpZGVDbGlja1wiLFwiYWxsb3dFbnRlcktleVwiLFwiYmFja2Ryb3BcIixcImZvY3VzQ29uZmlybVwiLFwiZm9jdXNEZW55XCIsXCJmb2N1c0NhbmNlbFwiLFwicmV0dXJuRm9jdXNcIixcImhlaWdodEF1dG9cIixcImtleWRvd25MaXN0ZW5lckNhcHR1cmVcIl0sZGU9T2JqZWN0LmZyZWV6ZSh7aXNWYWxpZFBhcmFtZXRlcjppZSxpc1VwZGF0YWJsZVBhcmFtZXRlcjpmdW5jdGlvbih0KXtyZXR1cm4tMSE9PXVlLmluZGV4T2YodCl9LGlzRGVwcmVjYXRlZFBhcmFtZXRlcjpyZSxhcmdzVG9QYXJhbXM6ZnVuY3Rpb24obil7dmFyIG89e307cmV0dXJuXCJvYmplY3RcIiE9PXIoblswXSl8fEMoblswXSk/W1widGl0bGVcIixcImh0bWxcIixcImljb25cIl0uZm9yRWFjaChmdW5jdGlvbih0LGUpe2U9bltlXTtcInN0cmluZ1wiPT10eXBlb2YgZXx8QyhlKT9vW3RdPWU6dm9pZCAwIT09ZSYmSyhcIlVuZXhwZWN0ZWQgdHlwZSBvZiBcIi5jb25jYXQodCwnISBFeHBlY3RlZCBcInN0cmluZ1wiIG9yIFwiRWxlbWVudFwiLCBnb3QgJykuY29uY2F0KHIoZSkpKX0pOnUobyxuWzBdKSxvfSxpc1Zpc2libGU6ZnVuY3Rpb24oKXtyZXR1cm4gd3QoQSgpKX0sY2xpY2tDb25maXJtOkZ0LGNsaWNrRGVueTpmdW5jdGlvbigpe3JldHVybiBMKCkmJkwoKS5jbGljaygpfSxjbGlja0NhbmNlbDpmdW5jdGlvbigpe3JldHVybiBEKCkmJkQoKS5jbGljaygpfSxnZXRDb250YWluZXI6ayxnZXRQb3B1cDpBLGdldFRpdGxlOkIsZ2V0Q29udGVudDpQLGdldEh0bWxDb250YWluZXI6TyxnZXRJbWFnZTpFLGdldEljb246eCxnZXRJbnB1dExhYmVsOmZ1bmN0aW9uKCl7cmV0dXJuIHQoJFtcImlucHV0LWxhYmVsXCJdKX0sZ2V0Q2xvc2VCdXR0b246VixnZXRBY3Rpb25zOmosZ2V0Q29uZmlybUJ1dHRvbjpULGdldERlbnlCdXR0b246TCxnZXRDYW5jZWxCdXR0b246RCxnZXRMb2FkZXI6cSxnZXRIZWFkZXI6TSxnZXRGb290ZXI6SSxnZXRUaW1lclByb2dyZXNzQmFyOkgsZ2V0Rm9jdXNhYmxlRWxlbWVudHM6UixnZXRWYWxpZGF0aW9uTWVzc2FnZTpTLGlzTG9hZGluZzpmdW5jdGlvbigpe3JldHVybiBBKCkuaGFzQXR0cmlidXRlKFwiZGF0YS1sb2FkaW5nXCIpfSxmaXJlOmZ1bmN0aW9uKCl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsZT1uZXcgQXJyYXkodCksbj0wO248dDtuKyspZVtuXT1hcmd1bWVudHNbbl07cmV0dXJuIGkodGhpcyxlKX0sbWl4aW46ZnVuY3Rpb24ocil7cmV0dXJuIGZ1bmN0aW9uKHQpeyFmdW5jdGlvbih0LGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUmJm51bGwhPT1lKXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTt0LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGUmJmUucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6dCx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksZSYmbCh0LGUpfShpLHQpO3ZhciBuLG8sZT0obj1pLG89ZCgpLGZ1bmN0aW9uKCl7dmFyIHQsZT1jKG4pO3JldHVybiBwKHRoaXMsbz8odD1jKHRoaXMpLmNvbnN0cnVjdG9yLFJlZmxlY3QuY29uc3RydWN0KGUsYXJndW1lbnRzLHQpKTplLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9KTtmdW5jdGlvbiBpKCl7cmV0dXJuIGEodGhpcyxpKSxlLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1yZXR1cm4gcyhpLFt7a2V5OlwiX21haW5cIix2YWx1ZTpmdW5jdGlvbih0LGUpe3JldHVybiBmKGMoaS5wcm90b3R5cGUpLFwiX21haW5cIix0aGlzKS5jYWxsKHRoaXMsdCx1KHt9LHIsZSkpfX1dKSxpfSh0aGlzKX0scXVldWU6ZnVuY3Rpb24odCl7dihcIlN3YWwucXVldWUoKVwiLFwiYXN5bmMvYXdhaXRcIik7dmFyIHI9dGhpcztadD10O2Z1bmN0aW9uIGEodCxlKXtadD1bXSx0KGUpfXZhciBzPVtdO3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihpKXshZnVuY3Rpb24gZShuLG8pe248WnQubGVuZ3RoPyhkb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZShcImRhdGEtc3dhbDItcXVldWUtc3RlcFwiLG4pLHIuZmlyZShadFtuXSkudGhlbihmdW5jdGlvbih0KXt2b2lkIDAhPT10LnZhbHVlPyhzLnB1c2godC52YWx1ZSksZShuKzEsbykpOmEoaSx7ZGlzbWlzczp0LmRpc21pc3N9KX0pKTphKGkse3ZhbHVlOnN9KX0oMCl9KX0sZ2V0UXVldWVTdGVwOlZ0LGluc2VydFF1ZXVlU3RlcDpmdW5jdGlvbih0LGUpe3JldHVybiBlJiZlPFp0Lmxlbmd0aD9adC5zcGxpY2UoZSwwLHQpOlp0LnB1c2godCl9LGRlbGV0ZVF1ZXVlU3RlcDpmdW5jdGlvbih0KXt2b2lkIDAhPT1adFt0XSYmWnQuc3BsaWNlKHQsMSl9LHNob3dMb2FkaW5nOkp0LGVuYWJsZUxvYWRpbmc6SnQsZ2V0VGltZXJMZWZ0OmZ1bmN0aW9uKCl7cmV0dXJuIHRlLnRpbWVvdXQmJnRlLnRpbWVvdXQuZ2V0VGltZXJMZWZ0KCl9LHN0b3BUaW1lcjpYdCxyZXN1bWVUaW1lcjpHdCx0b2dnbGVUaW1lcjpmdW5jdGlvbigpe3ZhciB0PXRlLnRpbWVvdXQ7cmV0dXJuIHQmJih0LnJ1bm5pbmc/WHQ6R3QpKCl9LGluY3JlYXNlVGltZXI6ZnVuY3Rpb24odCl7aWYodGUudGltZW91dCl7dD10ZS50aW1lb3V0LmluY3JlYXNlKHQpO3JldHVybiBkdCh0LCEwKSx0fX0saXNUaW1lclJ1bm5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gdGUudGltZW91dCYmdGUudGltZW91dC5pc1J1bm5pbmcoKX0sYmluZENsaWNrSGFuZGxlcjpmdW5jdGlvbigpe25lWzA8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpcImRhdGEtc3dhbC10ZW1wbGF0ZVwiXT10aGlzLGVlfHwoZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixvZSksZWU9ITApfX0pO2Z1bmN0aW9uIHBlKCl7dmFyIHQsZTtUdC5pbm5lclBhcmFtcy5nZXQodGhpcykmJih0PVR0LmRvbUNhY2hlLmdldCh0aGlzKSxhdCh0LmxvYWRlciksKGU9dC5wb3B1cC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHQubG9hZGVyLmdldEF0dHJpYnV0ZShcImRhdGEtYnV0dG9uLXRvLXJlcGxhY2VcIikpKS5sZW5ndGg/cnQoZVswXSxcImlubGluZS1ibG9ja1wiKTp3dChUKCkpfHx3dChMKCkpfHx3dChEKCkpfHxhdCh0LmFjdGlvbnMpLGJ0KFt0LnBvcHVwLHQuYWN0aW9uc10sJC5sb2FkaW5nKSx0LnBvcHVwLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtYnVzeVwiKSx0LnBvcHVwLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtbG9hZGluZ1wiKSx0LmNvbmZpcm1CdXR0b24uZGlzYWJsZWQ9ITEsdC5kZW55QnV0dG9uLmRpc2FibGVkPSExLHQuY2FuY2VsQnV0dG9uLmRpc2FibGVkPSExKX1mdW5jdGlvbiBmZSgpe251bGw9PT10dC5wcmV2aW91c0JvZHlQYWRkaW5nJiZkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodD53aW5kb3cuaW5uZXJIZWlnaHQmJih0dC5wcmV2aW91c0JvZHlQYWRkaW5nPXBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoXCJwYWRkaW5nLXJpZ2h0XCIpKSxkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodD1cIlwiLmNvbmNhdCh0dC5wcmV2aW91c0JvZHlQYWRkaW5nK2Z1bmN0aW9uKCl7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0LmNsYXNzTmFtZT0kW1wic2Nyb2xsYmFyLW1lYXN1cmVcIl0sZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0KTt2YXIgZT10LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLXQuY2xpZW50V2lkdGg7cmV0dXJuIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodCksZX0oKSxcInB4XCIpKX1mdW5jdGlvbiBtZSgpe3JldHVybiEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0JiYhIWRvY3VtZW50LmRvY3VtZW50TW9kZX1mdW5jdGlvbiBoZSgpe3ZhciB0PWsoKSxlPUEoKTt0LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiYWxpZ24taXRlbXNcIiksZS5vZmZzZXRUb3A8MCYmKHQuc3R5bGUuYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIil9dmFyIGdlPWZ1bmN0aW9uKCl7bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKENyaU9TfEZ4aU9TfEVkZ2lPU3xZYUJyb3dzZXJ8VUNCcm93c2VyKS9pKXx8QSgpLnNjcm9sbEhlaWdodD53aW5kb3cuaW5uZXJIZWlnaHQtNDQmJihrKCkuc3R5bGUucGFkZGluZ0JvdHRvbT1cIlwiLmNvbmNhdCg0NCxcInB4XCIpKX0sdmU9ZnVuY3Rpb24oKXt2YXIgZSx0PWsoKTt0Lm9udG91Y2hzdGFydD1mdW5jdGlvbih0KXtlPWJlKHQpfSx0Lm9udG91Y2htb3ZlPWZ1bmN0aW9uKHQpe2UmJih0LnByZXZlbnREZWZhdWx0KCksdC5zdG9wUHJvcGFnYXRpb24oKSl9fSxiZT1mdW5jdGlvbih0KXt2YXIgZT10LnRhcmdldCxuPWsoKTtyZXR1cm4heWUodCkmJiF3ZSh0KSYmKGU9PT1ufHwhKGN0KG4pfHxcIklOUFVUXCI9PT1lLnRhZ05hbWV8fGN0KFAoKSkmJlAoKS5jb250YWlucyhlKSkpfSx5ZT1mdW5jdGlvbih0KXtyZXR1cm4gdC50b3VjaGVzJiZ0LnRvdWNoZXMubGVuZ3RoJiZcInN0eWx1c1wiPT09dC50b3VjaGVzWzBdLnRvdWNoVHlwZX0sd2U9ZnVuY3Rpb24odCl7cmV0dXJuIHQudG91Y2hlcyYmMTx0LnRvdWNoZXMubGVuZ3RofSxDZT17c3dhbFByb21pc2VSZXNvbHZlOm5ldyBXZWFrTWFwfTtmdW5jdGlvbiBrZSh0LGUsbixvKXtHKCk/RWUodCxvKTooJHQobikudGhlbihmdW5jdGlvbigpe3JldHVybiBFZSh0LG8pfSksdGUua2V5ZG93blRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLHRlLmtleWRvd25IYW5kbGVyLHtjYXB0dXJlOnRlLmtleWRvd25MaXN0ZW5lckNhcHR1cmV9KSx0ZS5rZXlkb3duSGFuZGxlckFkZGVkPSExKSxlLnBhcmVudE5vZGUmJiFkb2N1bWVudC5ib2R5LmdldEF0dHJpYnV0ZShcImRhdGEtc3dhbDItcXVldWUtc3RlcFwiKSYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpLE4oKSYmKG51bGwhPT10dC5wcmV2aW91c0JvZHlQYWRkaW5nJiYoZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQ9XCJcIi5jb25jYXQodHQucHJldmlvdXNCb2R5UGFkZGluZyxcInB4XCIpLHR0LnByZXZpb3VzQm9keVBhZGRpbmc9bnVsbCksRihkb2N1bWVudC5ib2R5LCQuaW9zZml4KSYmKGU9cGFyc2VJbnQoZG9jdW1lbnQuYm9keS5zdHlsZS50b3AsMTApLGJ0KGRvY3VtZW50LmJvZHksJC5pb3NmaXgpLGRvY3VtZW50LmJvZHkuc3R5bGUudG9wPVwiXCIsZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A9LTEqZSksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmbWUoKSYmd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixoZSksZyhkb2N1bWVudC5ib2R5LmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3QuaGFzQXR0cmlidXRlKFwiZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlblwiKT8odC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlblwiKSksdC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXByZXZpb3VzLWFyaWEtaGlkZGVuXCIpKTp0LnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIpfSkpLGJ0KFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsZG9jdW1lbnQuYm9keV0sWyQuc2hvd24sJFtcImhlaWdodC1hdXRvXCJdLCRbXCJuby1iYWNrZHJvcFwiXSwkW1widG9hc3Qtc2hvd25cIl1dKX1mdW5jdGlvbiBBZSh0KXt2YXIgZSxuLG8saT1BKCk7aSYmKHQ9eGUodCksKGU9VHQuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpKSYmIUYoaSxlLmhpZGVDbGFzcy5wb3B1cCkmJihuPUNlLnN3YWxQcm9taXNlUmVzb2x2ZS5nZXQodGhpcyksYnQoaSxlLnNob3dDbGFzcy5wb3B1cCksdnQoaSxlLmhpZGVDbGFzcy5wb3B1cCksbz1rKCksYnQobyxlLnNob3dDbGFzcy5iYWNrZHJvcCksdnQobyxlLmhpZGVDbGFzcy5iYWNrZHJvcCksQmUodGhpcyxpLGUpLG4odCkpKX1mdW5jdGlvbiB4ZSh0KXtyZXR1cm4gdm9pZCAwPT09dD97aXNDb25maXJtZWQ6ITEsaXNEZW5pZWQ6ITEsaXNEaXNtaXNzZWQ6ITB9OnUoe2lzQ29uZmlybWVkOiExLGlzRGVuaWVkOiExLGlzRGlzbWlzc2VkOiExfSx0KX1mdW5jdGlvbiBCZSh0LGUsbil7dmFyIG89aygpLGk9QnQmJmx0KGUpLHI9bi5vbkNsb3NlLGE9bi5vbkFmdGVyQ2xvc2Uscz1uLndpbGxDbG9zZSx1PW4uZGlkQ2xvc2U7UGUoZSxzLHIpLGk/T2UodCxlLG8sbi5yZXR1cm5Gb2N1cyx1fHxhKTprZSh0LG8sbi5yZXR1cm5Gb2N1cyx1fHxhKX12YXIgUGU9ZnVuY3Rpb24odCxlLG4pe251bGwhPT1lJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2UodCk6bnVsbCE9PW4mJlwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJm4odCl9LE9lPWZ1bmN0aW9uKHQsZSxuLG8saSl7dGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrPWtlLmJpbmQobnVsbCx0LG4sbyxpKSxlLmFkZEV2ZW50TGlzdGVuZXIoQnQsZnVuY3Rpb24odCl7dC50YXJnZXQ9PT1lJiYodGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrKCksZGVsZXRlIHRlLnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjayl9KX0sRWU9ZnVuY3Rpb24odCxlKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLHQuX2Rlc3Ryb3koKX0pfTtmdW5jdGlvbiBTZSh0LGUsbil7dmFyIG89VHQuZG9tQ2FjaGUuZ2V0KHQpO2UuZm9yRWFjaChmdW5jdGlvbih0KXtvW3RdLmRpc2FibGVkPW59KX1mdW5jdGlvbiBUZSh0LGUpe2lmKCF0KXJldHVybiExO2lmKFwicmFkaW9cIj09PXQudHlwZSlmb3IodmFyIG49dC5wYXJlbnROb2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpLG89MDtvPG4ubGVuZ3RoO28rKyluW29dLmRpc2FibGVkPWU7ZWxzZSB0LmRpc2FibGVkPWV9dmFyIExlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gbih0LGUpe2EodGhpcyxuKSx0aGlzLmNhbGxiYWNrPXQsdGhpcy5yZW1haW5pbmc9ZSx0aGlzLnJ1bm5pbmc9ITEsdGhpcy5zdGFydCgpfXJldHVybiBzKG4sW3trZXk6XCJzdGFydFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucnVubmluZ3x8KHRoaXMucnVubmluZz0hMCx0aGlzLnN0YXJ0ZWQ9bmV3IERhdGUsdGhpcy5pZD1zZXRUaW1lb3V0KHRoaXMuY2FsbGJhY2ssdGhpcy5yZW1haW5pbmcpKSx0aGlzLnJlbWFpbmluZ319LHtrZXk6XCJzdG9wXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ydW5uaW5nJiYodGhpcy5ydW5uaW5nPSExLGNsZWFyVGltZW91dCh0aGlzLmlkKSx0aGlzLnJlbWFpbmluZy09bmV3IERhdGUtdGhpcy5zdGFydGVkKSx0aGlzLnJlbWFpbmluZ319LHtrZXk6XCJpbmNyZWFzZVwiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMucnVubmluZztyZXR1cm4gZSYmdGhpcy5zdG9wKCksdGhpcy5yZW1haW5pbmcrPXQsZSYmdGhpcy5zdGFydCgpLHRoaXMucmVtYWluaW5nfX0se2tleTpcImdldFRpbWVyTGVmdFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucnVubmluZyYmKHRoaXMuc3RvcCgpLHRoaXMuc3RhcnQoKSksdGhpcy5yZW1haW5pbmd9fSx7a2V5OlwiaXNSdW5uaW5nXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ydW5uaW5nfX1dKSxufSgpLHFlPXtlbWFpbDpmdW5jdGlvbih0LGUpe3JldHVybi9eW2EtekEtWjAtOS4rXy1dK0BbYS16QS1aMC05Li1dK1xcLlthLXpBLVowLTktXXsyLDI0fSQvLnRlc3QodCk/UHJvbWlzZS5yZXNvbHZlKCk6UHJvbWlzZS5yZXNvbHZlKGV8fFwiSW52YWxpZCBlbWFpbCBhZGRyZXNzXCIpfSx1cmw6ZnVuY3Rpb24odCxlKXtyZXR1cm4vXmh0dHBzPzpcXC9cXC8od3d3XFwuKT9bLWEtekEtWjAtOUA6JS5fK34jPV17MSwyNTZ9XFwuW2Etel17Miw2M31cXGIoWy1hLXpBLVowLTlAOiVfKy5+Iz8mLz1dKikkLy50ZXN0KHQpP1Byb21pc2UucmVzb2x2ZSgpOlByb21pc2UucmVzb2x2ZShlfHxcIkludmFsaWQgVVJMXCIpfX07ZnVuY3Rpb24gRGUodCl7dmFyIGUsbjsoZT10KS5pbnB1dFZhbGlkYXRvcnx8T2JqZWN0LmtleXMocWUpLmZvckVhY2goZnVuY3Rpb24odCl7ZS5pbnB1dD09PXQmJihlLmlucHV0VmFsaWRhdG9yPXFlW3RdKX0pLHQuc2hvd0xvYWRlck9uQ29uZmlybSYmIXQucHJlQ29uZmlybSYmVyhcInNob3dMb2FkZXJPbkNvbmZpcm0gaXMgc2V0IHRvIHRydWUsIGJ1dCBwcmVDb25maXJtIGlzIG5vdCBkZWZpbmVkLlxcbnNob3dMb2FkZXJPbkNvbmZpcm0gc2hvdWxkIGJlIHVzZWQgdG9nZXRoZXIgd2l0aCBwcmVDb25maXJtLCBzZWUgdXNhZ2UgZXhhbXBsZTpcXG5odHRwczovL3N3ZWV0YWxlcnQyLmdpdGh1Yi5pby8jYWpheC1yZXF1ZXN0XCIpLHQuYW5pbWF0aW9uPVoodC5hbmltYXRpb24pLChuPXQpLnRhcmdldCYmKFwic3RyaW5nXCIhPXR5cGVvZiBuLnRhcmdldHx8ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuLnRhcmdldCkpJiYoXCJzdHJpbmdcIj09dHlwZW9mIG4udGFyZ2V0fHxuLnRhcmdldC5hcHBlbmRDaGlsZCl8fChXKCdUYXJnZXQgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZCwgZGVmYXVsdGluZyB0byBcImJvZHlcIicpLG4udGFyZ2V0PVwiYm9keVwiKSxcInN0cmluZ1wiPT10eXBlb2YgdC50aXRsZSYmKHQudGl0bGU9dC50aXRsZS5zcGxpdChcIlxcblwiKS5qb2luKFwiPGJyIC8+XCIpKSxrdCh0KX1mdW5jdGlvbiBqZSh0KXt2YXIgZT1rKCksbj1BKCk7XCJmdW5jdGlvblwiPT10eXBlb2YgdC53aWxsT3Blbj90LndpbGxPcGVuKG4pOlwiZnVuY3Rpb25cIj09dHlwZW9mIHQub25CZWZvcmVPcGVuJiZ0Lm9uQmVmb3JlT3BlbihuKTt2YXIgbz13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5vdmVyZmxvd1k7SmUoZSxuLHQpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtaZShlLG4pfSwxMCksTigpJiYoUWUoZSx0LnNjcm9sbGJhclBhZGRpbmcsbyksZyhkb2N1bWVudC5ib2R5LmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3Q9PT1rKCl8fGZ1bmN0aW9uKHQsZSl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdC5jb250YWlucylyZXR1cm4gdC5jb250YWlucyhlKX0odCxrKCkpfHwodC5oYXNBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKSYmdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByZXZpb3VzLWFyaWEtaGlkZGVuXCIsdC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKSksdC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKSl9KSksRygpfHx0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnR8fCh0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQ9ZG9jdW1lbnQuYWN0aXZlRWxlbWVudCksWWUobix0KSxidChlLCRbXCJuby10cmFuc2l0aW9uXCJdKX1mdW5jdGlvbiBNZSh0KXt2YXIgZT1BKCk7dC50YXJnZXQ9PT1lJiYodD1rKCksZS5yZW1vdmVFdmVudExpc3RlbmVyKEJ0LE1lKSx0LnN0eWxlLm92ZXJmbG93WT1cImF1dG9cIil9ZnVuY3Rpb24gSWUodCxlKXt0LmNsb3NlUG9wdXAoe2lzQ29uZmlybWVkOiEwLHZhbHVlOmV9KX1mdW5jdGlvbiBIZSh0LGUsbil7dmFyIG89UigpO2lmKG8ubGVuZ3RoKXJldHVybihlKz1uKT09PW8ubGVuZ3RoP2U9MDotMT09PWUmJihlPW8ubGVuZ3RoLTEpLG9bZV0uZm9jdXMoKTtBKCkuZm9jdXMoKX12YXIgVmU9W1wic3dhbC10aXRsZVwiLFwic3dhbC1odG1sXCIsXCJzd2FsLWZvb3RlclwiXSxSZT1mdW5jdGlvbih0KXt2YXIgbj17fTtyZXR1cm4gZyh0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzd2FsLXBhcmFtXCIpKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe0tlKHQsW1wibmFtZVwiLFwidmFsdWVcIl0pO3ZhciBlPXQuZ2V0QXR0cmlidXRlKFwibmFtZVwiKSx0PXQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik7XCJib29sZWFuXCI9PXR5cGVvZiBzZVtlXSYmXCJmYWxzZVwiPT09dCYmKHQ9ITEpLFwib2JqZWN0XCI9PT1yKHNlW2VdKSYmKHQ9SlNPTi5wYXJzZSh0KSksbltlXT10fSksbn0sTmU9ZnVuY3Rpb24odCl7dmFyIG49e307cmV0dXJuIGcodC5xdWVyeVNlbGVjdG9yQWxsKFwic3dhbC1idXR0b25cIikpLmZvckVhY2goZnVuY3Rpb24odCl7S2UodCxbXCJ0eXBlXCIsXCJjb2xvclwiLFwiYXJpYS1sYWJlbFwiXSk7dmFyIGU9dC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpO25bXCJcIi5jb25jYXQoZSxcIkJ1dHRvblRleHRcIildPXQuaW5uZXJIVE1MLG5bXCJzaG93XCIuY29uY2F0KG0oZSksXCJCdXR0b25cIildPSEwLHQuaGFzQXR0cmlidXRlKFwiY29sb3JcIikmJihuW1wiXCIuY29uY2F0KGUsXCJCdXR0b25Db2xvclwiKV09dC5nZXRBdHRyaWJ1dGUoXCJjb2xvclwiKSksdC5oYXNBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpJiYobltcIlwiLmNvbmNhdChlLFwiQnV0dG9uQXJpYUxhYmVsXCIpXT10LmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIikpfSksbn0sVWU9ZnVuY3Rpb24odCl7dmFyIGU9e30sdD10LnF1ZXJ5U2VsZWN0b3IoXCJzd2FsLWltYWdlXCIpO3JldHVybiB0JiYoS2UodCxbXCJzcmNcIixcIndpZHRoXCIsXCJoZWlnaHRcIixcImFsdFwiXSksdC5oYXNBdHRyaWJ1dGUoXCJzcmNcIikmJihlLmltYWdlVXJsPXQuZ2V0QXR0cmlidXRlKFwic3JjXCIpKSx0Lmhhc0F0dHJpYnV0ZShcIndpZHRoXCIpJiYoZS5pbWFnZVdpZHRoPXQuZ2V0QXR0cmlidXRlKFwid2lkdGhcIikpLHQuaGFzQXR0cmlidXRlKFwiaGVpZ2h0XCIpJiYoZS5pbWFnZUhlaWdodD10LmdldEF0dHJpYnV0ZShcImhlaWdodFwiKSksdC5oYXNBdHRyaWJ1dGUoXCJhbHRcIikmJihlLmltYWdlQWx0PXQuZ2V0QXR0cmlidXRlKFwiYWx0XCIpKSksZX0sRmU9ZnVuY3Rpb24odCl7dmFyIGU9e30sdD10LnF1ZXJ5U2VsZWN0b3IoXCJzd2FsLWljb25cIik7cmV0dXJuIHQmJihLZSh0LFtcInR5cGVcIixcImNvbG9yXCJdKSx0Lmhhc0F0dHJpYnV0ZShcInR5cGVcIikmJihlLmljb249dC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKSx0Lmhhc0F0dHJpYnV0ZShcImNvbG9yXCIpJiYoZS5pY29uQ29sb3I9dC5nZXRBdHRyaWJ1dGUoXCJjb2xvclwiKSksZS5pY29uSHRtbD10LmlubmVySFRNTCksZX0sX2U9ZnVuY3Rpb24odCl7dmFyIG49e30sZT10LnF1ZXJ5U2VsZWN0b3IoXCJzd2FsLWlucHV0XCIpO2UmJihLZShlLFtcInR5cGVcIixcImxhYmVsXCIsXCJwbGFjZWhvbGRlclwiLFwidmFsdWVcIl0pLG4uaW5wdXQ9ZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpfHxcInRleHRcIixlLmhhc0F0dHJpYnV0ZShcImxhYmVsXCIpJiYobi5pbnB1dExhYmVsPWUuZ2V0QXR0cmlidXRlKFwibGFiZWxcIikpLGUuaGFzQXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIikmJihuLmlucHV0UGxhY2Vob2xkZXI9ZS5nZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiKSksZS5oYXNBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSYmKG4uaW5wdXRWYWx1ZT1lLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpKSk7dD10LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzd2FsLWlucHV0LW9wdGlvblwiKTtyZXR1cm4gdC5sZW5ndGgmJihuLmlucHV0T3B0aW9ucz17fSxnKHQpLmZvckVhY2goZnVuY3Rpb24odCl7S2UodCxbXCJ2YWx1ZVwiXSk7dmFyIGU9dC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSx0PXQuaW5uZXJIVE1MO24uaW5wdXRPcHRpb25zW2VdPXR9KSksbn0semU9ZnVuY3Rpb24odCxlKXt2YXIgbixvPXt9O2ZvcihuIGluIGUpe3ZhciBpPWVbbl0scj10LnF1ZXJ5U2VsZWN0b3IoaSk7ciYmKEtlKHIsW10pLG9baS5yZXBsYWNlKC9ec3dhbC0vLFwiXCIpXT1yLmlubmVySFRNTC50cmltKCkpfXJldHVybiBvfSxXZT1mdW5jdGlvbihlKXt2YXIgbj1WZS5jb25jYXQoW1wic3dhbC1wYXJhbVwiLFwic3dhbC1idXR0b25cIixcInN3YWwtaW1hZ2VcIixcInN3YWwtaWNvblwiLFwic3dhbC1pbnB1dFwiLFwic3dhbC1pbnB1dC1vcHRpb25cIl0pO2coZS5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKSkuZm9yRWFjaChmdW5jdGlvbih0KXt0LnBhcmVudE5vZGU9PT1lJiYodD10LnRhZ05hbWUudG9Mb3dlckNhc2UoKSwtMT09PW4uaW5kZXhPZih0KSYmVyhcIlVucmVjb2duaXplZCBlbGVtZW50IDxcIi5jb25jYXQodCxcIj5cIikpKX0pfSxLZT1mdW5jdGlvbihlLG4pe2coZS5hdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uKHQpey0xPT09bi5pbmRleE9mKHQubmFtZSkmJlcoWydVbnJlY29nbml6ZWQgYXR0cmlidXRlIFwiJy5jb25jYXQodC5uYW1lLCdcIiBvbiA8JykuY29uY2F0KGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpLFwiPi5cIiksXCJcIi5jb25jYXQobi5sZW5ndGg/XCJBbGxvd2VkIGF0dHJpYnV0ZXMgYXJlOiBcIi5jb25jYXQobi5qb2luKFwiLCBcIikpOlwiVG8gc2V0IHRoZSB2YWx1ZSwgdXNlIEhUTUwgd2l0aGluIHRoZSBlbGVtZW50LlwiKV0pfSl9LFllPWZ1bmN0aW9uKHQsZSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZS5kaWRPcGVuP3NldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gZS5kaWRPcGVuKHQpfSk6XCJmdW5jdGlvblwiPT10eXBlb2YgZS5vbk9wZW4mJnNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gZS5vbk9wZW4odCl9KX0sWmU9ZnVuY3Rpb24odCxlKXtCdCYmbHQoZSk/KHQuc3R5bGUub3ZlcmZsb3dZPVwiaGlkZGVuXCIsZS5hZGRFdmVudExpc3RlbmVyKEJ0LE1lKSk6dC5zdHlsZS5vdmVyZmxvd1k9XCJhdXRvXCJ9LFFlPWZ1bmN0aW9uKHQsZSxuKXt2YXIgbzsoL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkmJiF3aW5kb3cuTVNTdHJlYW18fFwiTWFjSW50ZWxcIj09PW5hdmlnYXRvci5wbGF0Zm9ybSYmMTxuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMpJiYhRihkb2N1bWVudC5ib2R5LCQuaW9zZml4KSYmKG89ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsZG9jdW1lbnQuYm9keS5zdHlsZS50b3A9XCJcIi5jb25jYXQoLTEqbyxcInB4XCIpLHZ0KGRvY3VtZW50LmJvZHksJC5pb3NmaXgpLHZlKCksZ2UoKSksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmbWUoKSYmKGhlKCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixoZSkpLGUmJlwiaGlkZGVuXCIhPT1uJiZmZSgpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt0LnNjcm9sbFRvcD0wfSl9LEplPWZ1bmN0aW9uKHQsZSxuKXt2dCh0LG4uc2hvd0NsYXNzLmJhY2tkcm9wKSxlLnN0eWxlLnNldFByb3BlcnR5KFwib3BhY2l0eVwiLFwiMFwiLFwiaW1wb3J0YW50XCIpLHJ0KGUpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt2dChlLG4uc2hvd0NsYXNzLnBvcHVwKSxlLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwib3BhY2l0eVwiKX0sMTApLHZ0KFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsZG9jdW1lbnQuYm9keV0sJC5zaG93biksbi5oZWlnaHRBdXRvJiZuLmJhY2tkcm9wJiYhbi50b2FzdCYmdnQoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCxkb2N1bWVudC5ib2R5XSwkW1wiaGVpZ2h0LWF1dG9cIl0pfSwkZT1mdW5jdGlvbih0KXtyZXR1cm4gdC5jaGVja2VkPzE6MH0sWGU9ZnVuY3Rpb24odCl7cmV0dXJuIHQuY2hlY2tlZD90LnZhbHVlOm51bGx9LEdlPWZ1bmN0aW9uKHQpe3JldHVybiB0LmZpbGVzLmxlbmd0aD9udWxsIT09dC5nZXRBdHRyaWJ1dGUoXCJtdWx0aXBsZVwiKT90LmZpbGVzOnQuZmlsZXNbMF06bnVsbH0sdG49ZnVuY3Rpb24oZSxuKXtmdW5jdGlvbiBvKHQpe3JldHVybiBubltuLmlucHV0XShpLG9uKHQpLG4pfXZhciBpPVAoKTtiKG4uaW5wdXRPcHRpb25zKXx8dyhuLmlucHV0T3B0aW9ucyk/KEp0KFQoKSkseShuLmlucHV0T3B0aW9ucykudGhlbihmdW5jdGlvbih0KXtlLmhpZGVMb2FkaW5nKCksbyh0KX0pKTpcIm9iamVjdFwiPT09cihuLmlucHV0T3B0aW9ucyk/byhuLmlucHV0T3B0aW9ucyk6SyhcIlVuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dE9wdGlvbnMhIEV4cGVjdGVkIG9iamVjdCwgTWFwIG9yIFByb21pc2UsIGdvdCBcIi5jb25jYXQocihuLmlucHV0T3B0aW9ucykpKX0sZW49ZnVuY3Rpb24oZSxuKXt2YXIgbz1lLmdldElucHV0KCk7YXQobykseShuLmlucHV0VmFsdWUpLnRoZW4oZnVuY3Rpb24odCl7by52YWx1ZT1cIm51bWJlclwiPT09bi5pbnB1dD9wYXJzZUZsb2F0KHQpfHwwOlwiXCIuY29uY2F0KHQpLHJ0KG8pLG8uZm9jdXMoKSxlLmhpZGVMb2FkaW5nKCl9KS5jYXRjaChmdW5jdGlvbih0KXtLKFwiRXJyb3IgaW4gaW5wdXRWYWx1ZSBwcm9taXNlOiBcIi5jb25jYXQodCkpLG8udmFsdWU9XCJcIixydChvKSxvLmZvY3VzKCksZS5oaWRlTG9hZGluZygpfSl9LG5uPXtzZWxlY3Q6ZnVuY3Rpb24odCxlLGkpe2Z1bmN0aW9uIG8odCxlLG4pe3ZhciBvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7by52YWx1ZT1uLFUobyxlKSxvLnNlbGVjdGVkPXJuKG4saS5pbnB1dFZhbHVlKSx0LmFwcGVuZENoaWxkKG8pfXZhciByPXl0KHQsJC5zZWxlY3QpO2UuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgZSxuPXRbMF0sdD10WzFdO0FycmF5LmlzQXJyYXkodCk/KChlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRncm91cFwiKSkubGFiZWw9bixlLmRpc2FibGVkPSExLHIuYXBwZW5kQ2hpbGQoZSksdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiBvKGUsdFsxXSx0WzBdKX0pKTpvKHIsdCxuKX0pLHIuZm9jdXMoKX0scmFkaW86ZnVuY3Rpb24odCxlLGkpe3ZhciByPXl0KHQsJC5yYWRpbyk7ZS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBlPXRbMF0sbj10WzFdLG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO28udHlwZT1cInJhZGlvXCIsby5uYW1lPSQucmFkaW8sby52YWx1ZT1lLHJuKGUsaS5pbnB1dFZhbHVlKSYmKG8uY2hlY2tlZD0hMCk7ZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtVKGUsbiksZS5jbGFzc05hbWU9JC5sYWJlbCx0LmFwcGVuZENoaWxkKG8pLHQuYXBwZW5kQ2hpbGQoZSksci5hcHBlbmRDaGlsZCh0KX0pO2U9ci5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7ZS5sZW5ndGgmJmVbMF0uZm9jdXMoKX19LG9uPWZ1bmN0aW9uIG4obyl7dmFyIGk9W107cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIE1hcCYmbyBpbnN0YW5jZW9mIE1hcD9vLmZvckVhY2goZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT09cih0KSYmKHQ9bih0KSksaS5wdXNoKFtlLHRdKX0pOk9iamVjdC5rZXlzKG8pLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIGU9b1t0XTtcIm9iamVjdFwiPT09cihlKSYmKGU9bihlKSksaS5wdXNoKFt0LGVdKX0pLGl9LHJuPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGUmJmUudG9TdHJpbmcoKT09PXQudG9TdHJpbmcoKX0sYW49ZnVuY3Rpb24odCxlLG4pe3ZhciBvPWZ1bmN0aW9uKHQsZSl7dmFyIG49dC5nZXRJbnB1dCgpO2lmKCFuKXJldHVybiBudWxsO3N3aXRjaChlLmlucHV0KXtjYXNlXCJjaGVja2JveFwiOnJldHVybiAkZShuKTtjYXNlXCJyYWRpb1wiOnJldHVybiBYZShuKTtjYXNlXCJmaWxlXCI6cmV0dXJuIEdlKG4pO2RlZmF1bHQ6cmV0dXJuIGUuaW5wdXRBdXRvVHJpbT9uLnZhbHVlLnRyaW0oKTpuLnZhbHVlfX0odCxlKTtlLmlucHV0VmFsaWRhdG9yP3NuKHQsZSxvKTp0LmdldElucHV0KCkuY2hlY2tWYWxpZGl0eSgpPyhcImRlbnlcIj09PW4/dW46Y24pKHQsZSxvKToodC5lbmFibGVCdXR0b25zKCksdC5zaG93VmFsaWRhdGlvbk1lc3NhZ2UoZS52YWxpZGF0aW9uTWVzc2FnZSkpfSxzbj1mdW5jdGlvbihlLG4sbyl7ZS5kaXNhYmxlSW5wdXQoKSxQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIHkobi5pbnB1dFZhbGlkYXRvcihvLG4udmFsaWRhdGlvbk1lc3NhZ2UpKX0pLnRoZW4oZnVuY3Rpb24odCl7ZS5lbmFibGVCdXR0b25zKCksZS5lbmFibGVJbnB1dCgpLHQ/ZS5zaG93VmFsaWRhdGlvbk1lc3NhZ2UodCk6Y24oZSxuLG8pfSl9LHVuPWZ1bmN0aW9uKGUsdCxuKXt0LnNob3dMb2FkZXJPbkRlbnkmJkp0KEwoKSksdC5wcmVEZW55P1Byb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4geSh0LnByZURlbnkobix0LnZhbGlkYXRpb25NZXNzYWdlKSl9KS50aGVuKGZ1bmN0aW9uKHQpeyExPT09dD9lLmhpZGVMb2FkaW5nKCk6ZS5jbG9zZVBvcHVwKHtpc0RlbmllZDohMCx2YWx1ZTp2b2lkIDA9PT10P246dH0pfSk6ZS5jbG9zZVBvcHVwKHtpc0RlbmllZDohMCx2YWx1ZTpufSl9LGNuPWZ1bmN0aW9uKGUsdCxuKXt0LnNob3dMb2FkZXJPbkNvbmZpcm0mJkp0KCksdC5wcmVDb25maXJtPyhlLnJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoKSxQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIHkodC5wcmVDb25maXJtKG4sdC52YWxpZGF0aW9uTWVzc2FnZSkpfSkudGhlbihmdW5jdGlvbih0KXt3dChTKCkpfHwhMT09PXQ/ZS5oaWRlTG9hZGluZygpOkllKGUsdm9pZCAwPT09dD9uOnQpfSkpOkllKGUsbil9LGxuPVtcIkFycm93UmlnaHRcIixcIkFycm93RG93blwiLFwiUmlnaHRcIixcIkRvd25cIl0sZG49W1wiQXJyb3dMZWZ0XCIsXCJBcnJvd1VwXCIsXCJMZWZ0XCIsXCJVcFwiXSxwbj1bXCJFc2NhcGVcIixcIkVzY1wiXSxmbj1mdW5jdGlvbih0LGUsbil7dmFyIG89VHQuaW5uZXJQYXJhbXMuZ2V0KHQpO28mJihvLnN0b3BLZXlkb3duUHJvcGFnYXRpb24mJmUuc3RvcFByb3BhZ2F0aW9uKCksXCJFbnRlclwiPT09ZS5rZXk/bW4odCxlLG8pOlwiVGFiXCI9PT1lLmtleT9obihlLG8pOi0xIT09W10uY29uY2F0KGxuLGRuKS5pbmRleE9mKGUua2V5KT9nbihlLmtleSk6LTEhPT1wbi5pbmRleE9mKGUua2V5KSYmdm4oZSxvLG4pKX0sbW49ZnVuY3Rpb24odCxlLG4pe2UuaXNDb21wb3Npbmd8fGUudGFyZ2V0JiZ0LmdldElucHV0KCkmJmUudGFyZ2V0Lm91dGVySFRNTD09PXQuZ2V0SW5wdXQoKS5vdXRlckhUTUwmJi0xPT09W1widGV4dGFyZWFcIixcImZpbGVcIl0uaW5kZXhPZihuLmlucHV0KSYmKEZ0KCksZS5wcmV2ZW50RGVmYXVsdCgpKX0saG49ZnVuY3Rpb24odCxlKXtmb3IodmFyIG49dC50YXJnZXQsbz1SKCksaT0tMSxyPTA7cjxvLmxlbmd0aDtyKyspaWYobj09PW9bcl0pe2k9cjticmVha310LnNoaWZ0S2V5P0hlKDAsaSwtMSk6SGUoMCxpLDEpLHQuc3RvcFByb3BhZ2F0aW9uKCksdC5wcmV2ZW50RGVmYXVsdCgpfSxnbj1mdW5jdGlvbih0KXstMSE9PVtUKCksTCgpLEQoKV0uaW5kZXhPZihkb2N1bWVudC5hY3RpdmVFbGVtZW50KSYmKHQ9LTEhPT1sbi5pbmRleE9mKHQpP1wibmV4dEVsZW1lbnRTaWJsaW5nXCI6XCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nXCIsKHQ9ZG9jdW1lbnQuYWN0aXZlRWxlbWVudFt0XSkmJnQuZm9jdXMoKSl9LHZuPWZ1bmN0aW9uKHQsZSxuKXtaKGUuYWxsb3dFc2NhcGVLZXkpJiYodC5wcmV2ZW50RGVmYXVsdCgpLG4oUS5lc2MpKX0sYm49ZnVuY3Rpb24oZSx0LG4pe3QucG9wdXAub25jbGljaz1mdW5jdGlvbigpe3ZhciB0PVR0LmlubmVyUGFyYW1zLmdldChlKTt0LnNob3dDb25maXJtQnV0dG9ufHx0LnNob3dEZW55QnV0dG9ufHx0LnNob3dDYW5jZWxCdXR0b258fHQuc2hvd0Nsb3NlQnV0dG9ufHx0LnRpbWVyfHx0LmlucHV0fHxuKFEuY2xvc2UpfX0seW49ITEsd249ZnVuY3Rpb24oZSl7ZS5wb3B1cC5vbm1vdXNlZG93bj1mdW5jdGlvbigpe2UuY29udGFpbmVyLm9ubW91c2V1cD1mdW5jdGlvbih0KXtlLmNvbnRhaW5lci5vbm1vdXNldXA9dm9pZCAwLHQudGFyZ2V0PT09ZS5jb250YWluZXImJih5bj0hMCl9fX0sQ249ZnVuY3Rpb24oZSl7ZS5jb250YWluZXIub25tb3VzZWRvd249ZnVuY3Rpb24oKXtlLnBvcHVwLm9ubW91c2V1cD1mdW5jdGlvbih0KXtlLnBvcHVwLm9ubW91c2V1cD12b2lkIDAsdC50YXJnZXQhPT1lLnBvcHVwJiYhZS5wb3B1cC5jb250YWlucyh0LnRhcmdldCl8fCh5bj0hMCl9fX0sa249ZnVuY3Rpb24obixvLGkpe28uY29udGFpbmVyLm9uY2xpY2s9ZnVuY3Rpb24odCl7dmFyIGU9VHQuaW5uZXJQYXJhbXMuZ2V0KG4pO3luP3luPSExOnQudGFyZ2V0PT09by5jb250YWluZXImJlooZS5hbGxvd091dHNpZGVDbGljaykmJmkoUS5iYWNrZHJvcCl9fTtmdW5jdGlvbiBBbih0LGUpe3ZhciBuPWZ1bmN0aW9uKHQpe3Q9XCJzdHJpbmdcIj09dHlwZW9mIHQudGVtcGxhdGU/ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0LnRlbXBsYXRlKTp0LnRlbXBsYXRlO2lmKCF0KXJldHVybnt9O3Q9dC5jb250ZW50fHx0O3JldHVybiBXZSh0KSx1KFJlKHQpLE5lKHQpLFVlKHQpLEZlKHQpLF9lKHQpLHplKHQsVmUpKX0odCk7cmV0dXJuKG49dSh7fSxzZSxlLG4sdCkpLnNob3dDbGFzcz11KHt9LHNlLnNob3dDbGFzcyxuLnNob3dDbGFzcyksbi5oaWRlQ2xhc3M9dSh7fSxzZS5oaWRlQ2xhc3Msbi5oaWRlQ2xhc3MpLCExPT09dC5hbmltYXRpb24mJihuLnNob3dDbGFzcz17cG9wdXA6XCJzd2FsMi1ub2FuaW1hdGlvblwiLGJhY2tkcm9wOlwic3dhbDItbm9hbmltYXRpb25cIn0sbi5oaWRlQ2xhc3M9e30pLG59ZnVuY3Rpb24geG4oYSxzLHUpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbih0KXtmdW5jdGlvbiBlKHQpe2EuY2xvc2VQb3B1cCh7aXNEaXNtaXNzZWQ6ITAsZGlzbWlzczp0fSl9dmFyIG4sbyxpLHI7Q2Uuc3dhbFByb21pc2VSZXNvbHZlLnNldChhLHQpLHMuY29uZmlybUJ1dHRvbi5vbmNsaWNrPWZ1bmN0aW9uKCl7cmV0dXJuIGU9dSwodD1hKS5kaXNhYmxlQnV0dG9ucygpLHZvaWQoZS5pbnB1dD9hbih0LGUsXCJjb25maXJtXCIpOmNuKHQsZSwhMCkpO3ZhciB0LGV9LHMuZGVueUJ1dHRvbi5vbmNsaWNrPWZ1bmN0aW9uKCl7cmV0dXJuIGU9dSwodD1hKS5kaXNhYmxlQnV0dG9ucygpLHZvaWQoZS5yZXR1cm5JbnB1dFZhbHVlT25EZW55P2FuKHQsZSxcImRlbnlcIik6dW4odCxlLCExKSk7dmFyIHQsZX0scy5jYW5jZWxCdXR0b24ub25jbGljaz1mdW5jdGlvbigpe3JldHVybiB0PWUsYS5kaXNhYmxlQnV0dG9ucygpLHZvaWQgdChRLmNhbmNlbCk7dmFyIHR9LHMuY2xvc2VCdXR0b24ub25jbGljaz1mdW5jdGlvbigpe3JldHVybiBlKFEuY2xvc2UpfSxuPWEscj1zLHQ9ZSxUdC5pbm5lclBhcmFtcy5nZXQobikudG9hc3Q/Ym4obixyLHQpOih3bihyKSxDbihyKSxrbihuLHIsdCkpLG89YSxyPXUsaT1lLCh0PXRlKS5rZXlkb3duVGFyZ2V0JiZ0LmtleWRvd25IYW5kbGVyQWRkZWQmJih0LmtleWRvd25UYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIix0LmtleWRvd25IYW5kbGVyLHtjYXB0dXJlOnQua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZX0pLHQua2V5ZG93bkhhbmRsZXJBZGRlZD0hMSksci50b2FzdHx8KHQua2V5ZG93bkhhbmRsZXI9ZnVuY3Rpb24odCl7cmV0dXJuIGZuKG8sdCxpKX0sdC5rZXlkb3duVGFyZ2V0PXIua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZT93aW5kb3c6QSgpLHQua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZT1yLmtleWRvd25MaXN0ZW5lckNhcHR1cmUsdC5rZXlkb3duVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsdC5rZXlkb3duSGFuZGxlcix7Y2FwdHVyZTp0LmtleWRvd25MaXN0ZW5lckNhcHR1cmV9KSx0LmtleWRvd25IYW5kbGVyQWRkZWQ9ITApLHI9YSxcInNlbGVjdFwiPT09KHQ9dSkuaW5wdXR8fFwicmFkaW9cIj09PXQuaW5wdXQ/dG4ocix0KTotMSE9PVtcInRleHRcIixcImVtYWlsXCIsXCJudW1iZXJcIixcInRlbFwiLFwidGV4dGFyZWFcIl0uaW5kZXhPZih0LmlucHV0KSYmKGIodC5pbnB1dFZhbHVlKXx8dyh0LmlucHV0VmFsdWUpKSYmZW4ocix0KSxqZSh1KSxQbih0ZSx1LGUpLE9uKHMsdSksc2V0VGltZW91dChmdW5jdGlvbigpe3MuY29udGFpbmVyLnNjcm9sbFRvcD0wfSl9KX1mdW5jdGlvbiBCbih0KXt2YXIgZT17cG9wdXA6QSgpLGNvbnRhaW5lcjprKCksY29udGVudDpQKCksYWN0aW9uczpqKCksY29uZmlybUJ1dHRvbjpUKCksZGVueUJ1dHRvbjpMKCksY2FuY2VsQnV0dG9uOkQoKSxsb2FkZXI6cSgpLGNsb3NlQnV0dG9uOlYoKSx2YWxpZGF0aW9uTWVzc2FnZTpTKCkscHJvZ3Jlc3NTdGVwczpuKCl9O3JldHVybiBUdC5kb21DYWNoZS5zZXQodCxlKSxlfXZhciBQbj1mdW5jdGlvbih0LGUsbil7dmFyIG89SCgpO2F0KG8pLGUudGltZXImJih0LnRpbWVvdXQ9bmV3IExlKGZ1bmN0aW9uKCl7bihcInRpbWVyXCIpLGRlbGV0ZSB0LnRpbWVvdXR9LGUudGltZXIpLGUudGltZXJQcm9ncmVzc0JhciYmKHJ0KG8pLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt0LnRpbWVvdXQmJnQudGltZW91dC5ydW5uaW5nJiZkdChlLnRpbWVyKX0pKSl9LE9uPWZ1bmN0aW9uKHQsZSl7aWYoIWUudG9hc3QpcmV0dXJuIFooZS5hbGxvd0VudGVyS2V5KT92b2lkKEVuKHQsZSl8fEhlKDAsLTEsMSkpOlNuKCl9LEVuPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGUuZm9jdXNEZW55JiZ3dCh0LmRlbnlCdXR0b24pPyh0LmRlbnlCdXR0b24uZm9jdXMoKSwhMCk6ZS5mb2N1c0NhbmNlbCYmd3QodC5jYW5jZWxCdXR0b24pPyh0LmNhbmNlbEJ1dHRvbi5mb2N1cygpLCEwKTohKCFlLmZvY3VzQ29uZmlybXx8IXd0KHQuY29uZmlybUJ1dHRvbikpJiYodC5jb25maXJtQnV0dG9uLmZvY3VzKCksITApfSxTbj1mdW5jdGlvbigpe2RvY3VtZW50LmFjdGl2ZUVsZW1lbnQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1ciYmZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCl9O2Z1bmN0aW9uIFRuKHQpe1wiZnVuY3Rpb25cIj09dHlwZW9mIHQuZGlkRGVzdHJveT90LmRpZERlc3Ryb3koKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0Lm9uRGVzdHJveSYmdC5vbkRlc3Ryb3koKX1mdW5jdGlvbiBMbih0KXtkZWxldGUgdC5wYXJhbXMsZGVsZXRlIHRlLmtleWRvd25IYW5kbGVyLGRlbGV0ZSB0ZS5rZXlkb3duVGFyZ2V0LERuKFR0KSxEbihDZSl9dmFyIHFuLERuPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZSBpbiB0KXRbZV09bmV3IFdlYWtNYXB9LEo9T2JqZWN0LmZyZWV6ZSh7aGlkZUxvYWRpbmc6cGUsZGlzYWJsZUxvYWRpbmc6cGUsZ2V0SW5wdXQ6ZnVuY3Rpb24odCl7dmFyIGU9VHQuaW5uZXJQYXJhbXMuZ2V0KHR8fHRoaXMpO3JldHVybih0PVR0LmRvbUNhY2hlLmdldCh0fHx0aGlzKSk/ZXQodC5jb250ZW50LGUuaW5wdXQpOm51bGx9LGNsb3NlOkFlLGNsb3NlUG9wdXA6QWUsY2xvc2VNb2RhbDpBZSxjbG9zZVRvYXN0OkFlLGVuYWJsZUJ1dHRvbnM6ZnVuY3Rpb24oKXtTZSh0aGlzLFtcImNvbmZpcm1CdXR0b25cIixcImRlbnlCdXR0b25cIixcImNhbmNlbEJ1dHRvblwiXSwhMSl9LGRpc2FibGVCdXR0b25zOmZ1bmN0aW9uKCl7U2UodGhpcyxbXCJjb25maXJtQnV0dG9uXCIsXCJkZW55QnV0dG9uXCIsXCJjYW5jZWxCdXR0b25cIl0sITApfSxlbmFibGVJbnB1dDpmdW5jdGlvbigpe3JldHVybiBUZSh0aGlzLmdldElucHV0KCksITEpfSxkaXNhYmxlSW5wdXQ6ZnVuY3Rpb24oKXtyZXR1cm4gVGUodGhpcy5nZXRJbnB1dCgpLCEwKX0sc2hvd1ZhbGlkYXRpb25NZXNzYWdlOmZ1bmN0aW9uKHQpe3ZhciBlPVR0LmRvbUNhY2hlLmdldCh0aGlzKSxuPVR0LmlubmVyUGFyYW1zLmdldCh0aGlzKTtVKGUudmFsaWRhdGlvbk1lc3NhZ2UsdCksZS52YWxpZGF0aW9uTWVzc2FnZS5jbGFzc05hbWU9JFtcInZhbGlkYXRpb24tbWVzc2FnZVwiXSxuLmN1c3RvbUNsYXNzJiZuLmN1c3RvbUNsYXNzLnZhbGlkYXRpb25NZXNzYWdlJiZ2dChlLnZhbGlkYXRpb25NZXNzYWdlLG4uY3VzdG9tQ2xhc3MudmFsaWRhdGlvbk1lc3NhZ2UpLHJ0KGUudmFsaWRhdGlvbk1lc3NhZ2UpLChlPXRoaXMuZ2V0SW5wdXQoKSkmJihlLnNldEF0dHJpYnV0ZShcImFyaWEtaW52YWxpZFwiLCEwKSxlLnNldEF0dHJpYnV0ZShcImFyaWEtZGVzY3JpYmVkQnlcIiwkW1widmFsaWRhdGlvbi1tZXNzYWdlXCJdKSxudChlKSx2dChlLCQuaW5wdXRlcnJvcikpfSxyZXNldFZhbGlkYXRpb25NZXNzYWdlOmZ1bmN0aW9uKCl7dmFyIHQ9VHQuZG9tQ2FjaGUuZ2V0KHRoaXMpO3QudmFsaWRhdGlvbk1lc3NhZ2UmJmF0KHQudmFsaWRhdGlvbk1lc3NhZ2UpLCh0PXRoaXMuZ2V0SW5wdXQoKSkmJih0LnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtaW52YWxpZFwiKSx0LnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtZGVzY3JpYmVkQnlcIiksYnQodCwkLmlucHV0ZXJyb3IpKX0sZ2V0UHJvZ3Jlc3NTdGVwczpmdW5jdGlvbigpe3JldHVybiBUdC5kb21DYWNoZS5nZXQodGhpcykucHJvZ3Jlc3NTdGVwc30sX21haW46ZnVuY3Rpb24odCl7dmFyIGU9MTxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9O3JldHVybiBhZSh1KHt9LGUsdCkpLHRlLmN1cnJlbnRJbnN0YW5jZSYmdGUuY3VycmVudEluc3RhbmNlLl9kZXN0cm95KCksdGUuY3VycmVudEluc3RhbmNlPXRoaXMsRGUodD1Bbih0LGUpKSxPYmplY3QuZnJlZXplKHQpLHRlLnRpbWVvdXQmJih0ZS50aW1lb3V0LnN0b3AoKSxkZWxldGUgdGUudGltZW91dCksY2xlYXJUaW1lb3V0KHRlLnJlc3RvcmVGb2N1c1RpbWVvdXQpLGU9Qm4odGhpcyksVXQodGhpcyx0KSxUdC5pbm5lclBhcmFtcy5zZXQodGhpcyx0KSx4bih0aGlzLGUsdCl9LHVwZGF0ZTpmdW5jdGlvbihlKXt2YXIgdD1BKCksbj1UdC5pbm5lclBhcmFtcy5nZXQodGhpcyk7aWYoIXR8fEYodCxuLmhpZGVDbGFzcy5wb3B1cCkpcmV0dXJuIFcoXCJZb3UncmUgdHJ5aW5nIHRvIHVwZGF0ZSB0aGUgY2xvc2VkIG9yIGNsb3NpbmcgcG9wdXAsIHRoYXQgd29uJ3Qgd29yay4gVXNlIHRoZSB1cGRhdGUoKSBtZXRob2QgaW4gcHJlQ29uZmlybSBwYXJhbWV0ZXIgb3Igc2hvdyBhIG5ldyBwb3B1cC5cIik7dmFyIG89e307T2JqZWN0LmtleXMoZSkuZm9yRWFjaChmdW5jdGlvbih0KXtNbi5pc1VwZGF0YWJsZVBhcmFtZXRlcih0KT9vW3RdPWVbdF06VygnSW52YWxpZCBwYXJhbWV0ZXIgdG8gdXBkYXRlOiBcIicuY29uY2F0KHQsJ1wiLiBVcGRhdGFibGUgcGFyYW1zIGFyZSBsaXN0ZWQgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL2Jsb2IvbWFzdGVyL3NyYy91dGlscy9wYXJhbXMuanNcXG5cXG5JZiB5b3UgdGhpbmsgdGhpcyBwYXJhbWV0ZXIgc2hvdWxkIGJlIHVwZGF0YWJsZSwgcmVxdWVzdCBpdCBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzL25ldz90ZW1wbGF0ZT0wMl9mZWF0dXJlX3JlcXVlc3QubWQnKSl9KSxuPXUoe30sbixvKSxVdCh0aGlzLG4pLFR0LmlubmVyUGFyYW1zLnNldCh0aGlzLG4pLE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMse3BhcmFtczp7dmFsdWU6dSh7fSx0aGlzLnBhcmFtcyxlKSx3cml0YWJsZTohMSxlbnVtZXJhYmxlOiEwfX0pfSxfZGVzdHJveTpmdW5jdGlvbigpe3ZhciB0PVR0LmRvbUNhY2hlLmdldCh0aGlzKSxlPVR0LmlubmVyUGFyYW1zLmdldCh0aGlzKTtlJiYodC5wb3B1cCYmdGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrJiYodGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrKCksZGVsZXRlIHRlLnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjayksdGUuZGVmZXJEaXNwb3NhbFRpbWVyJiYoY2xlYXJUaW1lb3V0KHRlLmRlZmVyRGlzcG9zYWxUaW1lciksZGVsZXRlIHRlLmRlZmVyRGlzcG9zYWxUaW1lciksVG4oZSksTG4odGhpcykpfX0pLGpuPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gaSgpe2lmKGEodGhpcyxpKSxcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93KXtcInVuZGVmaW5lZFwiPT10eXBlb2YgUHJvbWlzZSYmSyhcIlRoaXMgcGFja2FnZSByZXF1aXJlcyBhIFByb21pc2UgbGlicmFyeSwgcGxlYXNlIGluY2x1ZGUgYSBzaGltIHRvIGVuYWJsZSBpdCBpbiB0aGlzIGJyb3dzZXIgKFNlZTogaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL3dpa2kvTWlncmF0aW9uLWZyb20tU3dlZXRBbGVydC10by1Td2VldEFsZXJ0MiMxLWllLXN1cHBvcnQpXCIpLHFuPXRoaXM7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsZT1uZXcgQXJyYXkodCksbj0wO248dDtuKyspZVtuXT1hcmd1bWVudHNbbl07dmFyIG89T2JqZWN0LmZyZWV6ZSh0aGlzLmNvbnN0cnVjdG9yLmFyZ3NUb1BhcmFtcyhlKSk7T2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcyx7cGFyYW1zOnt2YWx1ZTpvLHdyaXRhYmxlOiExLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pO289dGhpcy5fbWFpbih0aGlzLnBhcmFtcyk7VHQucHJvbWlzZS5zZXQodGhpcyxvKX19cmV0dXJuIHMoaSxbe2tleTpcInRoZW5cIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gVHQucHJvbWlzZS5nZXQodGhpcykudGhlbih0KX19LHtrZXk6XCJmaW5hbGx5XCIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIFR0LnByb21pc2UuZ2V0KHRoaXMpLmZpbmFsbHkodCl9fV0pLGl9KCk7dShqbi5wcm90b3R5cGUsSiksdShqbixkZSksT2JqZWN0LmtleXMoSikuZm9yRWFjaChmdW5jdGlvbih0KXtqblt0XT1mdW5jdGlvbigpe2lmKHFuKXJldHVybiBxblt0XS5hcHBseShxbixhcmd1bWVudHMpfX0pLGpuLkRpc21pc3NSZWFzb249USxqbi52ZXJzaW9uPVwiMTAuMTYuOVwiO3ZhciBNbj1qbjtyZXR1cm4gTW4uZGVmYXVsdD1Nbn0pLHZvaWQgMCE9PXRoaXMmJnRoaXMuU3dlZXRhbGVydDImJih0aGlzLnN3YWw9dGhpcy5zd2VldEFsZXJ0PXRoaXMuU3dhbD10aGlzLlN3ZWV0QWxlcnQ9dGhpcy5Td2VldGFsZXJ0Mik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBSYW5kRXhwXHJcbndpbmRvdy5SYW5kRXhwID0gcmVxdWlyZShcIm5vZGVfbW9kdWxlcy9yYW5kZXhwXCIpO1xyXG5cclxuLy8gVXRpbGl0aWVzXHJcbnJlcXVpcmUoXCIuLi8uLi9qcy91dGlsL2NvcHktdG8tY2xpcGJvYXJkLmpzXCIpO1xyXG5cclxuLy8gQWN0dWFsIFNjcmlwdHNcclxucmVxdWlyZSgnLi9pbmRleC5qcycpO1xyXG4iXSwibmFtZXMiOlsid2luZG93IiwiU3dhbCIsInJlcXVpcmUiLCIkIiwiZG9jdW1lbnQiLCJvbiIsImUiLCJlbGVtZW50IiwiY3VycmVudFRhcmdldCIsInRlbXAiLCJhcHBlbmQiLCJ0ZXh0VG9Db3B5IiwiYXR0ciIsInZhbCIsImxlbmd0aCIsInRleHQiLCJ0cmlnZ2VyIiwiZXhlY0NvbW1hbmQiLCJyZW1vdmUiLCJmaXJlIiwidGl0bGUiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidG9hc3QiLCJ0aW1lciIsImJhY2tncm91bmQiLCJjdXN0b21DbGFzcyIsInBvcHVwIiwid2lkdGgiLCJTd2FsRmxhc2giLCJfY2xhc3NDYWxsQ2hlY2siLCJFcnJvciIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZXJyb3IiLCJtc2ciLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJoYXNfaWNvbiIsInBvcyIsImhhc190aW1lciIsImR1cmF0aW9uIiwiX2NsYXNzU3RhdGljUHJpdmF0ZU1ldGhvZEdldCIsIl9zZW5kRXZlbnQiLCJjYWxsIiwiZmxhc2hfZXJyb3IiLCJtZXNzYWdlIiwiaXNfdG9hc3QiLCJpbmZvIiwiZmxhc2hfaW5mbyIsInN1Y2Nlc3MiLCJmbGFzaF9zdWNjZXNzIiwidHlwZSIsInBhcmFtcyIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImRlZmF1bHQiLCJhZGRFdmVudExpc3RlbmVyIiwiZmxhc2giLCJvcHRpb25zIiwiY29uY2F0IiwiY29udGVudCIsInNob3dDbGFzcyIsImhpZGVDbGFzcyIsIl9fc2V0U3dhbEZsYXNoT3B0aW9ucyIsImluaXRDaGFuZ2UiLCJBcnJheSIsInByb3RvdHlwZSIsInVuaXEiLCJzZWVuIiwib3V0IiwiaiIsImkiLCJpdGVtIiwiTWVzc2FnZUJhZyIsIm1lc3NhZ2VzIiwiT2JqZWN0IiwiY3JlYXRlIiwiX2NsYXNzUHJpdmF0ZUZpZWxkSW5pdFNwZWMiLCJfbWVzc2FnZSIsIndyaXRhYmxlIiwiX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiYWRkIiwic3BsaXQiLCJmaWVsZCIsIl9jbGFzc1ByaXZhdGVGaWVsZEdldCIsIm1lcmdlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiYXNzaWduIiwiZ2V0IiwiaGFzIiwiZmllbGRzIiwiaW5jbHVkZXMiLCJrZXlzIiwiZmlyc3QiLCJSdWxlIiwidmFsaWRhdG9yVmFsdWVzIiwiX2RlZmluZVByb3BlcnR5IiwicmVwbGFjZUFsbCIsIl9maWVsZCIsIl92YWx1ZSIsIl92YWxpZGF0b3JWYWx1ZXMiLCJ2YWxpZGF0ZSIsIlJlcXVpcmVkIiwiX1J1bGUiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdmFsaWQiLCJ2YWxpZCIsInJ1bk90aGVyVmFsaWRhdGlvbiIsIlJlcXVpcmVkSWYiLCJfUmVxdWlyZWQiLCJfc3VwZXIyIiwiX3R5cGVvZiIsIl90aGlzJF92YWxpZGF0b3JWYWx1ZSIsIl9zbGljZWRUb0FycmF5IiwiZmllbGQyIiwidmFsMiIsInZhbDMiLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwiU29tZXRpbWVzIiwiX1J1bGUyIiwiX3N1cGVyMyIsIkJvb2xlYW4iLCJfUnVsZTMiLCJfQm9vbGVhbiIsIl9zdXBlcjQiLCJ0b0xvd2VyQ2FzZSIsIk51bWVyaWMiLCJfUnVsZTQiLCJfc3VwZXI1IiwiaXNEZWNpbWFsIiwiY29udmVydGVkIiwicGFyc2VGbG9hdCIsInBhcnNlSW50IiwiaXNOYU4iLCJNaW4iLCJfUnVsZTUiLCJfc3VwZXI2IiwidG9TdHJpbmciLCJNYXgiLCJfUnVsZTYiLCJfc3VwZXI3IiwiQmV0d2VlbiIsIl9SdWxlNyIsIl9zdXBlcjgiLCJfUnVsZTgiLCJfQXJyYXkiLCJfc3VwZXI5IiwiSW4iLCJfUnVsZTkiLCJfc3VwZXIxMCIsIk51bGxhYmxlIiwiX1J1bGUxMCIsIl9zdXBlcjExIiwiU3RyaW5nIiwiX1J1bGUxMSIsIl9TdHJpbmciLCJfc3VwZXIxMiIsIl9yZXNwb25zZSIsInJlc3BvbnNlIiwibWF0Y2giLCJVbmlxdWVBcnJheSIsIlJ1bGVzIiwiX2FyckZpZWxkc0luZGV4IiwiV2Vha01hcCIsIl9jaGVja2VkRmllbGRzIiwiX2ZpZWxkTmFtZXMiLCJfdmFsdWVMaXN0IiwiX3J1bGVMaXN0IiwiX21lc3NhZ2VMaXN0IiwiX2Vycm9ycyIsIl92YWxpZGF0ZWQiLCJfZmFpbGVkIiwiX3ZhbGlkYXRpb25Eb25lIiwiX3J1blZhbGlkYXRpb24iLCJXZWFrU2V0IiwiX3ZhbGlkYXRlRmllbGQiLCJfaXNGaWVsZEFycmF5IiwiVmFsaWRhdG9yIiwidmFsdWVzIiwicnVsZXMiLCJfY2xhc3NQcml2YXRlTWV0aG9kSW5pdFNwZWMiLCJmYWlscyIsIl9jbGFzc1ByaXZhdGVNZXRob2RHZXQiLCJfcnVuVmFsaWRhdGlvbjIiLCJlcnJvcnMiLCJpbnZhbGlkRmllbGRzIiwidmFsaWRGaWVsZHMiLCJfdGhpcyIsIl9sb29wIiwiayIsIl9PYmplY3Qka2V5cyIsIl9pIiwiaW5kZXgiLCJfZmV0Y2hSdWxlcyIsIl9mZXRjaE1lc3NhZ2VzIiwiX3ZhbGlkYXRlRmllbGQyIiwic3BsaWNlIiwiaW5kZXhPZiIsInJ1bGVJbmRleCIsImZvckVhY2giLCJ2IiwicnVsZSIsInB1c2giLCJvYmoiLCJpc0FycmF5Q29udGFpbmVyIiwic3Vic3RyIiwibGFzdEluZGV4T2YiLCJhZGRpdGlvbmFsUnVsZXMiLCJhZGRpdGlvbmFsTWVzc2FnZXMiLCJpc0FycmF5IiwiY2xvc3VyZUluZGV4IiwidmFsaWRhdGlvblJlc3VsdCIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJvZ1J1bGUiLCJydWxlVHlwZSIsInNwbGljZWRSdWxlIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsInIiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiZXJyIiwiZiIsInJ1bGVOYW1lIiwiY3VzdG9tUnVsZSIsImNvbnNvbGUiLCJ3YXJuIiwic29ydCIsInRhcmdldEsiLCJ0YXJnZXRWIiwiX2lzRmllbGRBcnJheTIiLCJ2YWxpZGF0aW9uIiwicmFuZ2UiLCJmaXhlZCIsInByb3AiLCJmaW5kIiwicmVtb3ZlQ2xhc3MiLCJfb2JqJHZhbCIsIl9uZXdNaW4kbWF0Y2gkbGVuZ3RoIiwiX25ld01pbiRtYXRjaCIsInRhcmdldCIsIm5ld01pbiIsIl9vYmokdmFsMiIsIl9uZXdNYXgkbWF0Y2gkbGVuZ3RoIiwiX25ld01heCRtYXRjaCIsIm5ld01heCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidXNlUmFuZ2UiLCJjbG9zZXN0IiwiZWFjaCIsInJlc2V0IiwiZ3N0ciIsImFuaW1hdGVUZXh0IiwiYnRuIiwiY29sbGFwc2VyIiwib3RoZXJzIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsInNldFRpbWVvdXQiLCJjb2xsYXBzZSIsImZvcm0iLCJub3QiLCJ2YWxpZHMiLCJpbnZhbGlkcyIsInNlcmlhbGl6ZUZvcm1KU09OIiwidmFyaWFibGVSdWxlIiwibW9kVlJ1bGVzIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiX3ZhcmlhYmxlUnVsZSIsInRhcmdldEtleSIsInJlcGxhY2UiLCJ2YWxpZGF0b3IiLCJ2YWxpZGF0aW9uTXNnRmllbGRzIiwiY2hhcnMiLCJyZWdleCIsInVzZV9yYW5nZSIsInJhbmdlX21pbiIsInJhbmdlX21heCIsIm5ld1N0ciIsIlJhbmRFeHAiLCJnZW4iLCJyZXN0b3JlQXBwZW5kVGFyZ2V0IiwicmVzdG9yZSIsImNvbnRhaW5lciIsIl9jb250YWluZXIkdGV4dENvbnRlbiIsImJhc2VJbnRlcnZhbCIsImlzVmFuaWxsYSIsInRleHRDb250ZW50IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJvbGRTdHIiLCJvbGRJbnRlcnZhbCIsIm5ld0ludGVydmFsIiwidGltZXJzIiwic2tpcFRleHRBbmltYXRpb24iLCJwb3AiLCJjbGVhclRpbWVvdXQiLCJfbG9vcDIiLCJfaTIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib2ZmIl0sInNvdXJjZVJvb3QiOiIifQ==
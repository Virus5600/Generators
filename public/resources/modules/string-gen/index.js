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
    "range_min": ["sometimes", "numeric", "min:0", "max:$range_max"],
    "range_max": ["sometimes", "numeric", "min:$range_min", "max:255"],
    "length": ["sometimes", "numeric", "between:0,255"],
    "chars": ["required", "array", "min:1"],
    "chars.*": ["sometimes", "in:alpha,numeric,spec"]
  },
  message: {
    "use_range": {
      "boolean": "Malformed data, please refresh the page"
    },
    "range_min": {
      "numeric": "Minimum range should be a number",
      "min": "Minimum value should be :min",
      "max": "Maximum value should be :max"
    },
    "range_max": {
      "min": "Maximum value should be :min",
      "max": "Maximum value should be :max"
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
    var obj = $(e.currentTarget);
    var target = $("#range_max");
    var newMin = obj.val();
    newMin = newMin.match(/^-?\d+$/g).length > 0 ? parseInt(newMin) : parseInt(target.attr('min'));
    target.attr('min', newMin);
  }).trigger('change');

  // RANGE MAX SETTER
  $("#range_max").on('change', function (e) {
    var obj = $(e.currentTarget);
    var target = $("#range_min");
    var newMax = obj.val();
    newMax = newMax.match(/^-?\d+$/g).length > 0 ? parseInt(newMax) : parseInt(target.attr('max'));
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
    $("string-card.show").removeClass("show");
    $("[name]").removeClass("is-valid is-invalid");
    $("form")[0].reset();
    $("#generated_string").text("").closest("string-card").removeClass("show");
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
window.validate = function (form) {
  // Capture all inputs
  var fields = $("[name]").not(":disabled, [disabled]");
  var valids = $("input:valid").not(":disabled, [disabled]");
  var invalids = $("input:invalid").not(":disabled, [disabled]");

  // Set validation input
  validation.values = form.serializeFormJSON(true);

  // Update some rule values
  var variableRule = ['range_min', 'range_max'];
  var _loop = function _loop() {
    var r = _variableRule[_i];
    validation.rules[r].find(function (v, k) {
      if (v.match(/\$\w+/g)) {
        var targetKey = v.match(/(\$)(\w+)/)[2];
        if (!Object.keys(validation.values).includes(targetKey)) return;
        validation.rules[r][k] = v.replace(/(\$)(\w+)/, validation.values[targetKey]);
      }
    });
  };
  for (var _i = 0, _variableRule = variableRule; _i < _variableRule.length; _i++) {
    _loop();
  }
  var validator = new _js_util_validator_Validator_js__WEBPACK_IMPORTED_MODULE_2__["default"](validation.values, validation.rules, validation.message);
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
    $("#generated_string").text(new RandExp(regex).gen()).closest(".string-card").addClass("show").find(".minimize, .maximize").addClass("minimize").removeClass("maximize").closest(".window").addClass("maximized").removeClass("minimized");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Jlc291cmNlcy9tb2R1bGVzL3N0cmluZy1nZW4vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBSSxDQUFDQSxNQUFNLENBQUNDLElBQUksRUFDZkQsTUFBTSxDQUFDQyxJQUFJLEdBQUdDLG1CQUFPLENBQUMsNEdBQWtELENBQUM7QUFFMUVDLENBQUMsQ0FBQyxZQUFNO0VBQ1BBLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUNDLEVBQUUsQ0FBQyxPQUFPLHVEQUF1RCxVQUFDQyxDQUFDLEVBQUs7SUFDbkYsSUFBSUMsT0FBTyxHQUFHRCxDQUFDLENBQUNFLGFBQWE7SUFFN0IsSUFBSUMsSUFBSSxHQUFHTixDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3ZCQSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNPLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDO0lBRXRCLElBQUlFLFVBQVU7SUFDZCxJQUFJLE9BQU9SLENBQUMsQ0FBQ0ksT0FBTyxDQUFDLENBQUNLLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLFdBQVcsRUFBRTtNQUM5RCxJQUFJVCxDQUFDLENBQUNBLENBQUMsQ0FBQ0ksT0FBTyxDQUFDLENBQUNLLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUNDLEdBQUcsQ0FBQyxDQUFDLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQzFESCxVQUFVLEdBQUdSLENBQUMsQ0FBQ0EsQ0FBQyxDQUFDSSxPQUFPLENBQUMsQ0FBQ0ssSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUN0RCxJQUFJVixDQUFDLENBQUNBLENBQUMsQ0FBQ0ksT0FBTyxDQUFDLENBQUNLLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUNHLElBQUksQ0FBQyxDQUFDLENBQUNELE1BQU0sR0FBRyxDQUFDLEVBQ2hFSCxVQUFVLEdBQUdSLENBQUMsQ0FBQ0EsQ0FBQyxDQUFDSSxPQUFPLENBQUMsQ0FBQ0ssSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQ0csSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQyxNQUNJLElBQUksT0FBT1osQ0FBQyxDQUFDSSxPQUFPLENBQUMsQ0FBQ0ssSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksV0FBVyxFQUMvREQsVUFBVSxHQUFHUixDQUFDLENBQUNJLE9BQU8sQ0FBQyxDQUFDSyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxLQUUvQ0QsVUFBVSxHQUFHUixDQUFDLENBQUNJLE9BQU8sQ0FBQyxDQUFDTSxHQUFHLENBQUMsQ0FBQztJQUU5QkosSUFBSSxDQUFDSSxHQUFHLENBQUNGLFVBQVUsQ0FBQyxDQUFDSyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQ3RDWixRQUFRLENBQUNhLFdBQVcsQ0FBQyxNQUFNLENBQUM7SUFDNUJSLElBQUksQ0FBQ1MsTUFBTSxDQUFDLENBQUM7SUFFYmpCLElBQUksQ0FBQ2tCLElBQUksQ0FBQztNQUNUQyxLQUFLLGVBQWU7TUFDcEJDLFFBQVEsYUFBYTtNQUNyQkMsaUJBQWlCLEVBQUUsS0FBSztNQUN4QkMsS0FBSyxFQUFFLElBQUk7TUFDWEMsS0FBSyxFQUFFLElBQUk7TUFDWEMsVUFBVSxXQUFXO01BQ3JCQyxXQUFXLEVBQUU7UUFDWk4sS0FBSyxjQUFjO1FBQ25CTyxLQUFLO01BQ04sQ0FBQztNQUNEQyxLQUFLLEVBQUU7SUFDUixDQUFDLENBQUM7RUFDSCxDQUFDLENBQUM7QUFDSCxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDeENtQkMsU0FBUztFQUM3QixTQUFBQSxVQUFBLEVBQWM7SUFBQUMsZUFBQSxPQUFBRCxTQUFBO0lBQ2IsSUFBSSxJQUFJLFlBQVlBLFNBQVMsRUFDNUIsTUFBTUUsS0FBSyxDQUFDLHdEQUF3RCxDQUFDO0VBQ3ZFO0VBQUNDLFlBQUEsQ0FBQUgsU0FBQTtJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxNQUFhZixLQUFLLEVBQTBIO01BQUEsSUFBeEhnQixHQUFHLEdBQUFDLFNBQUEsQ0FBQXZCLE1BQUEsUUFBQXVCLFNBQUEsUUFBQUMsU0FBQSxHQUFBRCxTQUFBLE1BQUdDLFNBQVM7TUFBQSxJQUFFQyxRQUFRLEdBQUFGLFNBQUEsQ0FBQXZCLE1BQUEsUUFBQXVCLFNBQUEsUUFBQUMsU0FBQSxHQUFBRCxTQUFBLE1BQUdDLFNBQVM7TUFBQSxJQUFFZixLQUFLLEdBQUFjLFNBQUEsQ0FBQXZCLE1BQUEsUUFBQXVCLFNBQUEsUUFBQUMsU0FBQSxHQUFBRCxTQUFBLE1BQUdDLFNBQVM7TUFBQSxJQUFFRSxHQUFHLEdBQUFILFNBQUEsQ0FBQXZCLE1BQUEsUUFBQXVCLFNBQUEsUUFBQUMsU0FBQSxHQUFBRCxTQUFBLE1BQUdDLFNBQVM7TUFBQSxJQUFFRyxTQUFTLEdBQUFKLFNBQUEsQ0FBQXZCLE1BQUEsUUFBQXVCLFNBQUEsUUFBQUMsU0FBQSxHQUFBRCxTQUFBLE1BQUdDLFNBQVM7TUFBQSxJQUFFSSxRQUFRLEdBQUFMLFNBQUEsQ0FBQXZCLE1BQUEsUUFBQXVCLFNBQUEsUUFBQUMsU0FBQSxHQUFBRCxTQUFBLE1BQUdDLFNBQVM7TUFDeklLLDRCQUFBLENBQUFkLFNBQVMsRUFQVUEsU0FBUyxFQUFBZSxVQUFBLEVBQUFDLElBQUEsQ0FPNUJoQixTQUFTLGlCQUEyQjtRQUNuQ2lCLFdBQVcsRUFBRTFCLEtBQUs7UUFDbEIyQixPQUFPLEVBQUVYLEdBQUc7UUFDWkcsUUFBUSxFQUFFQSxRQUFRO1FBQ2xCUyxRQUFRLEVBQUV6QixLQUFLO1FBQ2ZGLFFBQVEsRUFBRW1CLEdBQUc7UUFDYkMsU0FBUyxFQUFFQSxTQUFTO1FBQ3BCQyxRQUFRLEVBQUVBO01BQ1gsQ0FBQztJQUNGO0VBQUM7SUFBQVQsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWUsS0FBWTdCLEtBQUssRUFBMEg7TUFBQSxJQUF4SGdCLEdBQUcsR0FBQUMsU0FBQSxDQUFBdkIsTUFBQSxRQUFBdUIsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBR0MsU0FBUztNQUFBLElBQUVDLFFBQVEsR0FBQUYsU0FBQSxDQUFBdkIsTUFBQSxRQUFBdUIsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBR0MsU0FBUztNQUFBLElBQUVmLEtBQUssR0FBQWMsU0FBQSxDQUFBdkIsTUFBQSxRQUFBdUIsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBR0MsU0FBUztNQUFBLElBQUVFLEdBQUcsR0FBQUgsU0FBQSxDQUFBdkIsTUFBQSxRQUFBdUIsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBR0MsU0FBUztNQUFBLElBQUVHLFNBQVMsR0FBQUosU0FBQSxDQUFBdkIsTUFBQSxRQUFBdUIsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBR0MsU0FBUztNQUFBLElBQUVJLFFBQVEsR0FBQUwsU0FBQSxDQUFBdkIsTUFBQSxRQUFBdUIsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBR0MsU0FBUztNQUN4SUssNEJBQUEsQ0FBQWQsU0FBUyxFQW5CVUEsU0FBUyxFQUFBZSxVQUFBLEVBQUFDLElBQUEsQ0FtQjVCaEIsU0FBUyxnQkFBMEI7UUFDbENxQixVQUFVLEVBQUU5QixLQUFLO1FBQ2pCMkIsT0FBTyxFQUFFWCxHQUFHO1FBQ1pHLFFBQVEsRUFBRUEsUUFBUTtRQUNsQlMsUUFBUSxFQUFFekIsS0FBSztRQUNmRixRQUFRLEVBQUVtQixHQUFHO1FBQ2JDLFNBQVMsRUFBRUEsU0FBUztRQUNwQkMsUUFBUSxFQUFFQTtNQUNYLENBQUM7SUFDRjtFQUFDO0lBQUFULEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFpQixRQUFlL0IsS0FBSyxFQUEwSDtNQUFBLElBQXhIZ0IsR0FBRyxHQUFBQyxTQUFBLENBQUF2QixNQUFBLFFBQUF1QixTQUFBLFFBQUFDLFNBQUEsR0FBQUQsU0FBQSxNQUFHQyxTQUFTO01BQUEsSUFBRUMsUUFBUSxHQUFBRixTQUFBLENBQUF2QixNQUFBLFFBQUF1QixTQUFBLFFBQUFDLFNBQUEsR0FBQUQsU0FBQSxNQUFHQyxTQUFTO01BQUEsSUFBRWYsS0FBSyxHQUFBYyxTQUFBLENBQUF2QixNQUFBLFFBQUF1QixTQUFBLFFBQUFDLFNBQUEsR0FBQUQsU0FBQSxNQUFHQyxTQUFTO01BQUEsSUFBRUUsR0FBRyxHQUFBSCxTQUFBLENBQUF2QixNQUFBLFFBQUF1QixTQUFBLFFBQUFDLFNBQUEsR0FBQUQsU0FBQSxNQUFHQyxTQUFTO01BQUEsSUFBRUcsU0FBUyxHQUFBSixTQUFBLENBQUF2QixNQUFBLFFBQUF1QixTQUFBLFFBQUFDLFNBQUEsR0FBQUQsU0FBQSxNQUFHQyxTQUFTO01BQUEsSUFBRUksUUFBUSxHQUFBTCxTQUFBLENBQUF2QixNQUFBLFFBQUF1QixTQUFBLFFBQUFDLFNBQUEsR0FBQUQsU0FBQSxNQUFHQyxTQUFTO01BQzNJSyw0QkFBQSxDQUFBZCxTQUFTLEVBL0JVQSxTQUFTLEVBQUFlLFVBQUEsRUFBQUMsSUFBQSxDQStCNUJoQixTQUFTLG1CQUE2QjtRQUNyQ3VCLGFBQWEsRUFBRWhDLEtBQUs7UUFDcEIyQixPQUFPLEVBQUVYLEdBQUc7UUFDWkcsUUFBUSxFQUFFQSxRQUFRO1FBQ2xCUyxRQUFRLEVBQUV6QixLQUFLO1FBQ2ZGLFFBQVEsRUFBRW1CLEdBQUc7UUFDYkMsU0FBUyxFQUFFQSxTQUFTO1FBQ3BCQyxRQUFRLEVBQUVBO01BQ1gsQ0FBQztJQUNGO0VBQUM7RUFBQSxPQUFBYixTQUFBO0FBQUE7QUFBQSxTQUFBZSxXQUVpQlMsSUFBSSxFQUFFQyxNQUFNLEVBQUU7RUFDL0J0RCxNQUFNLENBQUN1RCxhQUFhLENBQUMsSUFBSUMsV0FBVyxDQUFDSCxJQUFJLEVBQUU7SUFDMUNJLE1BQU0sRUFBRUg7RUFDVCxDQUFDLENBQUMsQ0FBQztBQUNKO0FBOUM2QjtBQWlEOUJ0RCxNQUFNLENBQUMyRCxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsVUFBQ3JELENBQUMsRUFBSztFQUM3QyxJQUFJc0QsS0FBSyxHQUFHdEQsQ0FBQyxDQUFDbUQsTUFBTTtFQUNwQixJQUFJSSxPQUFPLEdBQUc7SUFDYnpDLEtBQUssS0FBQTBDLE1BQUEsQ0FBS0YsS0FBSyxDQUFDZCxXQUFXLENBQUU7SUFDN0J6QixRQUFRLE9BQU87SUFDZkMsaUJBQWlCLEVBQUUsS0FBSztJQUN4QkMsS0FBSyxFQUFFLElBQUk7SUFDWEMsS0FBSyxFQUFFLEtBQUs7SUFDWkMsVUFBVSxXQUFXO0lBQ3JCQyxXQUFXLEVBQUU7TUFDWk4sS0FBSyxjQUFjO01BQ25CMkMsT0FBTyxjQUFjO01BQ3JCcEMsS0FBSztJQUNOLENBQUM7SUFDRHFDLFNBQVMsRUFBRTtNQUNWckMsS0FBSztJQUNOLENBQUM7SUFDRHNDLFNBQVMsRUFBRTtNQUNWdEMsS0FBSztJQUNOO0VBQ0QsQ0FBQztFQUVEMUIsSUFBSSxDQUFDa0IsSUFBSSxDQUFDK0MscUJBQXFCLENBQUNMLE9BQU8sRUFBRUQsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzFELENBQUMsQ0FBQztBQUVGNUQsTUFBTSxDQUFDMkQsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFVBQUNyRCxDQUFDLEVBQUs7RUFDNUMsSUFBSXNELEtBQUssR0FBR3RELENBQUMsQ0FBQ21ELE1BQU07RUFDcEIsSUFBSUksT0FBTyxHQUFHO0lBQ2J6QyxLQUFLLEtBQUEwQyxNQUFBLENBQUtGLEtBQUssQ0FBQ1YsVUFBVSxDQUFFO0lBQzVCN0IsUUFBUSxPQUFPO0lBQ2ZDLGlCQUFpQixFQUFFLEtBQUs7SUFDeEJDLEtBQUssRUFBRSxJQUFJO0lBQ1hDLEtBQUssRUFBRSxLQUFLO0lBQ1pDLFVBQVUsV0FBVztJQUNyQkMsV0FBVyxFQUFFO01BQ1pOLEtBQUssY0FBYztNQUNuQjJDLE9BQU8sY0FBYztNQUNyQnBDLEtBQUs7SUFDTixDQUFDO0lBQ0RxQyxTQUFTLEVBQUU7TUFDVnJDLEtBQUs7SUFDTixDQUFDO0lBQ0RzQyxTQUFTLEVBQUU7TUFDVnRDLEtBQUs7SUFDTjtFQUNELENBQUM7RUFFRDFCLElBQUksQ0FBQ2tCLElBQUksQ0FBQytDLHFCQUFxQixDQUFDTCxPQUFPLEVBQUVELEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN6RCxDQUFDLENBQUM7QUFFRjVELE1BQU0sQ0FBQzJELGdCQUFnQixDQUFDLGVBQWUsRUFBRSxVQUFDckQsQ0FBQyxFQUFLO0VBQy9DLElBQUlzRCxLQUFLLEdBQUd0RCxDQUFDLENBQUNtRCxNQUFNO0VBQ3BCLElBQUlJLE9BQU8sR0FBRztJQUNiekMsS0FBSyxLQUFBMEMsTUFBQSxDQUFLRixLQUFLLENBQUNSLGFBQWEsQ0FBRTtJQUMvQi9CLFFBQVEsT0FBTztJQUNmQyxpQkFBaUIsRUFBRSxLQUFLO0lBQ3hCQyxLQUFLLEVBQUUsSUFBSTtJQUNYQyxLQUFLLEVBQUUsS0FBSztJQUNaQyxVQUFVLFdBQVc7SUFDckJDLFdBQVcsRUFBRTtNQUNaTixLQUFLLGNBQWM7TUFDbkIyQyxPQUFPLGNBQWM7TUFDckJwQyxLQUFLO0lBQ04sQ0FBQztJQUNEcUMsU0FBUyxFQUFFO01BQ1ZyQyxLQUFLO0lBQ04sQ0FBQztJQUNEc0MsU0FBUyxFQUFFO01BQ1Z0QyxLQUFLO0lBQ047RUFDRCxDQUFDO0VBRUQsSUFBSTFCLElBQUksRUFBRTtJQUNUQSxJQUFJLENBQUNrQixJQUFJLENBQUMrQyxxQkFBcUIsQ0FBQ0wsT0FBTyxFQUFFRCxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7RUFDNUQsQ0FBQyxNQUNJO0lBQ0osTUFBTTdCLEtBQUssQ0FBQyx1SUFBdUksQ0FBQztFQUNySjtBQUNELENBQUMsQ0FBQztBQUVGLElBQU1tQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXFCQSxDQUFJTCxPQUFPLEVBQUVELEtBQUssRUFBRVAsSUFBSSxFQUFLO0VBQ3ZEOztFQUVBLElBQUlPLEtBQUssQ0FBQ3JCLFFBQVEsSUFBSUQsU0FBUyxFQUM5QnVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBQUMsTUFBQSxDQUFNVCxJQUFJLENBQUU7RUFFNUIsSUFBSU8sS0FBSyxDQUFDYixPQUFPLElBQUlULFNBQVMsRUFDN0J1QixPQUFPLENBQUMsTUFBTSxDQUFDLE1BQUFDLE1BQUEsQ0FBTUYsS0FBSyxDQUFDYixPQUFPLENBQUU7RUFFckMsSUFBSWEsS0FBSyxDQUFDdkMsUUFBUSxJQUFJaUIsU0FBUyxFQUM3QnVCLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBR0QsS0FBSyxDQUFDdkMsUUFBUTtFQUV0QyxJQUFJdUMsS0FBSyxDQUFDWixRQUFRLElBQUlWLFNBQVMsRUFDOUJ1QixPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUdELEtBQUssQ0FBQ1osUUFBUTtFQUVsQyxJQUFJWSxLQUFLLENBQUNuQixTQUFTLElBQUlILFNBQVMsRUFDL0IsSUFBSXNCLEtBQUssQ0FBQ25CLFNBQVMsRUFDbEJvQixPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUdELEtBQUssQ0FBQ2xCLFFBQVEsSUFBSUosU0FBUyxHQUFHc0IsS0FBSyxDQUFDbEIsUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUV4RSxPQUFPbUIsT0FBTyxDQUFDLFVBQVUsQ0FBQztFQUU1QixPQUFPQSxPQUFPO0FBQ2YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdkpELFNBQVNNLFVBQVVBLENBQUEsRUFBRztFQUNyQkMsS0FBSyxDQUFDQyxTQUFTLENBQUNDLElBQUksR0FBRyxZQUFXO0lBQ2pDLElBQUlDLElBQUksR0FBRyxDQUFDLENBQUM7SUFDYixJQUFJQyxHQUFHLEdBQUcsRUFBRTtJQUNaLElBQUlDLENBQUMsR0FBRyxDQUFDO0lBRVQsS0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsSUFBSSxDQUFDNUQsTUFBTSxFQUFFNEQsQ0FBQyxFQUFFLEVBQUU7TUFDbkMsSUFBSUMsSUFBSSxHQUFHLElBQUksQ0FBQ0QsQ0FBQyxDQUFDO01BQ2xCLElBQUdILElBQUksQ0FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xCSixJQUFJLENBQUNJLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDZEgsR0FBRyxDQUFDQyxDQUFDLEVBQUUsQ0FBQyxHQUFHRSxJQUFJO01BQ2xCO0lBQ0Y7SUFFQSxPQUFPSCxHQUFHO0VBQ1gsQ0FBQztBQUNGO0FBRUEsaUVBQWVMLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDbEJKUyxVQUFVO0VBRzlCO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNDLFNBQUFBLFdBQUEsRUFBNEM7SUFBQSxJQUFoQ0MsUUFBUSxHQUFBeEMsU0FBQSxDQUFBdkIsTUFBQSxRQUFBdUIsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBR3lDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQztJQUFBakQsZUFBQSxPQUFBOEMsVUFBQTtJQUFBSSwwQkFBQSxPQUFBQyxRQUFBO01BQUFDLFFBQUE7TUFBQWhELEtBQUE7SUFBQTtJQUN6Q2lELHFCQUFBLEtBQUksRUFBQUYsUUFBQSxFQUFZSixRQUFRO0VBQ3pCOztFQUVBO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQVJDN0MsWUFBQSxDQUFBNEMsVUFBQTtJQUFBM0MsR0FBQTtJQUFBQyxLQUFBLEVBU0EsU0FBQWtELElBQUluRCxHQUFHLEVBQUVjLE9BQU8sRUFBRTtNQUNqQmQsR0FBRyxHQUFHQSxHQUFHLENBQUNvRCxLQUFLLENBQUMsR0FBRyxDQUFDO01BQ3BCLElBQUlDLEtBQUssR0FBR3JELEdBQUcsQ0FBQyxDQUFDLENBQUM7TUFDbEJBLEdBQUcsR0FBR0EsR0FBRyxDQUFDLENBQUMsQ0FBQztNQUVaLElBQUksT0FBT3NELHFCQUFBLEtBQUksRUFBQU4sUUFBQSxFQUFVSyxLQUFLLENBQUMsSUFBSSxXQUFXLEVBQzdDQyxxQkFBQSxLQUFJLEVBQUFOLFFBQUEsRUFBVUssS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO01BRTFCQyxxQkFBQSxLQUFJLEVBQUFOLFFBQUEsRUFBVUssS0FBSyxDQUFDLENBQUNyRCxHQUFHLENBQUMsR0FBR2MsT0FBTztNQUVuQyxPQUFPLElBQUk7SUFDWjs7SUFFQTtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQU5DO0lBQUFkLEdBQUE7SUFBQUMsS0FBQSxFQU9BLFNBQUFzRCxNQUFNWCxRQUFRLEVBQUU7TUFDZixJQUFJeEIsSUFBSSxHQUFHd0IsUUFBUSxDQUFDWSxXQUFXLENBQUNDLElBQUk7TUFFcEMsSUFBSXJDLElBQUksS0FBSyxRQUFRLEVBQUU7UUFDdEI4QixxQkFBQSxLQUFJLEVBQUFGLFFBQUEsRUFBWUgsTUFBTSxDQUFDYSxNQUFNLENBQUFKLHFCQUFBLENBQUMsSUFBSSxFQUFBTixRQUFBLEdBQVdKLFFBQVEsQ0FBQztNQUN2RCxDQUFDLE1BQ0ksSUFBSXhCLElBQUksS0FBSyxZQUFZLEVBQUU7UUFDL0I4QixxQkFBQSxLQUFJLEVBQUFGLFFBQUEsRUFBWUgsTUFBTSxDQUFDYSxNQUFNLENBQUFKLHFCQUFBLENBQUMsSUFBSSxFQUFBTixRQUFBLEdBQVdKLFFBQVEsQ0FBQ2UsR0FBRyxDQUFDLENBQUMsQ0FBQztNQUM3RDtNQUVBLE9BQU8sSUFBSTtJQUNaOztJQUVBO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUxDO0lBQUEzRCxHQUFBO0lBQUFDLEtBQUEsRUFNQSxTQUFBMkQsSUFBSVAsS0FBSyxFQUFFO01BQ1YsT0FBTyxJQUFJLENBQUNRLE1BQU0sQ0FBQyxDQUFDLENBQUNDLFFBQVEsQ0FBQzlELEdBQUcsQ0FBQztJQUNuQzs7SUFFQTtBQUNEO0FBQ0E7QUFDQTtBQUNBO0VBSkM7SUFBQUEsR0FBQTtJQUFBQyxLQUFBLEVBS0EsU0FBQTRELE9BQUEsRUFBUztNQUNSLE9BQU9oQixNQUFNLENBQUNrQixJQUFJLENBQUFULHFCQUFBLENBQUMsSUFBSSxFQUFBTixRQUFBLENBQVMsQ0FBQztJQUNsQzs7SUFFQTtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFMQztJQUFBaEQsR0FBQTtJQUFBQyxLQUFBLEVBTUEsU0FBQStELE1BQU1YLEtBQUssRUFBRTtNQUNaLElBQUksT0FBT0EsS0FBSyxJQUFJLFdBQVcsRUFBRTtRQUNoQ0EsS0FBSyxHQUFHUixNQUFNLENBQUNrQixJQUFJLENBQUFULHFCQUFBLENBQUMsSUFBSSxFQUFBTixRQUFBLENBQVMsQ0FBQztRQUNsQyxJQUFJaEQsSUFBRyxHQUFHNkMsTUFBTSxDQUFDa0IsSUFBSSxDQUFDVCxxQkFBQSxLQUFJLEVBQUFOLFFBQUEsRUFBVUssS0FBSyxDQUFDLENBQUM7UUFDM0MsT0FBT0MscUJBQUEsS0FBSSxFQUFBTixRQUFBLEVBQVVLLEtBQUssQ0FBQyxDQUFDckQsSUFBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ3BDO01BRUEsSUFBSUEsR0FBRyxHQUFHNkMsTUFBTSxDQUFDa0IsSUFBSSxDQUFDVCxxQkFBQSxLQUFJLEVBQUFOLFFBQUEsRUFBVUssS0FBSyxDQUFDLENBQUM7TUFDM0MsT0FBT0MscUJBQUEsS0FBSSxFQUFBTixRQUFBLEVBQVVLLEtBQUssQ0FBQyxDQUFDckQsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDOztJQUVBO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUxDO0lBQUFBLEdBQUE7SUFBQUMsS0FBQSxFQU1BLFNBQUEwRCxJQUFBLEVBQWtCO01BQUEsSUFBZE4sS0FBSyxHQUFBakQsU0FBQSxDQUFBdkIsTUFBQSxRQUFBdUIsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBRyxJQUFJO01BQ2YsT0FBT2lELEtBQUssSUFBSSxJQUFJLEdBQUFDLHFCQUFBLENBQUcsSUFBSSxFQUFBTixRQUFBLElBQVlNLHFCQUFBLEtBQUksRUFBQU4sUUFBQSxFQUFVSyxLQUFLLENBQUM7SUFDNUQ7RUFBQztFQUFBLE9BQUFWLFVBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzVHSXNCLElBQUk7RUFDVDs7RUFJQTtBQUNEO0FBQ0E7O0VBRUM7QUFDRDtBQUNBOztFQUVDO0FBQ0Q7QUFDQTs7RUFHQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0MsU0FBQUEsS0FBWVosS0FBSyxFQUFFcEQsS0FBSyxFQUFxRTtJQUFBLElBQW5FaUUsZUFBZSxHQUFBOUQsU0FBQSxDQUFBdkIsTUFBQSxRQUFBdUIsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBRyxJQUFJO0lBQUEsSUFBRVUsT0FBTyxHQUFBVixTQUFBLENBQUF2QixNQUFBLFFBQUF1QixTQUFBLFFBQUFDLFNBQUEsR0FBQUQsU0FBQSxNQUFHLCtCQUErQjtJQUFBUCxlQUFBLE9BQUFvRSxJQUFBO0lBQUFFLGVBQUE7SUFBQUEsZUFBQSxpQkF2QmxGLEtBQUs7SUFBQUEsZUFBQTtJQUFBQSxlQUFBO0lBQUFBLGVBQUE7SUF3QmJyRCxPQUFPLEdBQUdBLE9BQU8sQ0FBQ3NELFVBQVUsQ0FBQyxXQUFXLEVBQUVmLEtBQUssQ0FBQztJQUNoRHZDLE9BQU8sR0FBR0EsT0FBTyxDQUFDc0QsVUFBVSxDQUFDLFVBQVUsRUFBRW5FLEtBQUssQ0FBQztJQUUvQyxJQUFJLENBQUMrQyxRQUFRLEdBQUdsQyxPQUFPO0lBQ3ZCLElBQUksQ0FBQ3VELE1BQU0sR0FBR2hCLEtBQUs7SUFDbkIsSUFBSSxDQUFDaUIsTUFBTSxHQUFHckUsS0FBSztJQUNuQixJQUFJLENBQUNzRSxnQkFBZ0IsR0FBR0wsZUFBZTtFQUN4QztFQUFDbkUsWUFBQSxDQUFBa0UsSUFBQTtJQUFBakUsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXVFLFNBQUEsRUFBVztNQUNWLE1BQU0sSUFBSTFFLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQztJQUM3RDtFQUFDO0VBQUEsT0FBQW1FLElBQUE7QUFBQTtBQUdLLElBQU1RLFFBQVEsMEJBQUFDLEtBQUE7RUFBQUMsU0FBQSxDQUFBRixRQUFBLEVBQUFDLEtBQUE7RUFBQSxJQUFBRSxNQUFBLEdBQUFDLFlBQUEsQ0FBQUosUUFBQTtFQUNwQjtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNDLFNBQUFBLFNBQVlwQixLQUFLLEVBQUVwRCxLQUFLLEVBQW1FO0lBQUEsSUFBakVhLE9BQU8sR0FBQVYsU0FBQSxDQUFBdkIsTUFBQSxRQUFBdUIsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBRyw2QkFBNkI7SUFBQSxJQUFFOEQsZUFBZSxHQUFBOUQsU0FBQSxDQUFBdkIsTUFBQSxRQUFBdUIsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBRyxJQUFJO0lBQUFQLGVBQUEsT0FBQTRFLFFBQUE7SUFBQSxPQUFBRyxNQUFBLENBQUFoRSxJQUFBLE9BQ2xGeUMsS0FBSyxFQUFFcEQsS0FBSyxFQUFFaUUsZUFBZSxhQUFmQSxlQUFlLGNBQWZBLGVBQWUsR0FBSTdELFNBQVMsRUFBRVMsT0FBTztFQUMxRDtFQUFDZixZQUFBLENBQUEwRSxRQUFBO0lBQUF6RSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBdUUsU0FBQSxFQUFXO01BQ1YsSUFBSSxJQUFJLENBQUNGLE1BQU0sSUFBSSxXQUFXLElBQUksSUFBSSxDQUFDQSxNQUFNLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQ0EsTUFBTSxDQUFDekYsTUFBTSxHQUFHLENBQUMsRUFDOUUsSUFBSSxDQUFDaUcsTUFBTSxHQUFHLElBQUk7TUFFbkIsT0FBTztRQUNOQyxLQUFLLEVBQUUsSUFBSSxDQUFDRCxNQUFNO1FBQ2xCaEUsT0FBTyxFQUFFLElBQUksQ0FBQ2tDLFFBQVE7UUFDdEJnQyxrQkFBa0IsRUFBRTtNQUNyQixDQUFDO0lBQ0Y7RUFBQztFQUFBLE9BQUFQLFFBQUE7QUFBQSxFQXJCNEJSLElBQUk7QUF3QjNCLElBQU1nQixVQUFVLDBCQUFBQyxTQUFBO0VBQUFQLFNBQUEsQ0FBQU0sVUFBQSxFQUFBQyxTQUFBO0VBQUEsSUFBQUMsT0FBQSxHQUFBTixZQUFBLENBQUFJLFVBQUE7RUFDdEI7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDQyxTQUFBQSxXQUFZNUIsS0FBSyxFQUFFcEQsS0FBSyxFQUFFaUUsZUFBZSxFQUFpRTtJQUFBLElBQS9EcEQsT0FBTyxHQUFBVixTQUFBLENBQUF2QixNQUFBLFFBQUF1QixTQUFBLFFBQUFDLFNBQUEsR0FBQUQsU0FBQSxNQUFHLG1EQUFtRDtJQUFBUCxlQUFBLE9BQUFvRixVQUFBO0lBQ3ZHLElBQUlHLE9BQUEsQ0FBT2xCLGVBQWUsS0FBSSxRQUFRLElBQUlBLGVBQWUsQ0FBQ1YsV0FBVyxDQUFDQyxJQUFJLElBQUksT0FBTyxFQUNwRixNQUFNLElBQUkzRCxLQUFLLHFEQUFBK0IsTUFBQSxDQUFBdUQsT0FBQSxDQUE0RGxCLGVBQWUsZ0JBQVksQ0FBQyxDQUFDLEtBQ3BHLElBQUlBLGVBQWUsQ0FBQ3JGLE1BQU0sR0FBRyxDQUFDLEVBQ2xDLE1BQU0sSUFBSWlCLEtBQUssd0RBQUErQixNQUFBLENBQXdEcUMsZUFBZSxDQUFDckYsTUFBTSxnQkFBYSxDQUFDO0lBRTVHaUMsT0FBTyxHQUFHQSxPQUFPLENBQUNzRCxVQUFVLENBQUMsWUFBWSxFQUFFRixlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOURwRCxPQUFPLEdBQUdBLE9BQU8sQ0FBQ3NELFVBQVUsQ0FBQyxXQUFXLEVBQUVGLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RHBELE9BQU8sR0FBR0EsT0FBTyxDQUFDc0QsVUFBVSxDQUFDLFdBQVcsRUFBRUYsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQUMsT0FBQWlCLE9BQUEsQ0FBQXZFLElBQUEsT0FFeER5QyxLQUFLLEVBQUVwRCxLQUFLLEVBQUVhLE9BQU8sRUFBRW9ELGVBQWU7RUFDN0M7RUFBQ25FLFlBQUEsQ0FBQWtGLFVBQUE7SUFBQWpGLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF1RSxTQUFBLEVBQVc7TUFDVixJQUFBYSxxQkFBQSxHQUFBQyxjQUFBLENBQTJCLElBQUksQ0FBQ2YsZ0JBQWdCO1FBQTNDZ0IsTUFBTSxHQUFBRixxQkFBQTtRQUFFRyxJQUFJLEdBQUFILHFCQUFBO1FBQUVJLElBQUksR0FBQUoscUJBQUE7TUFFdkIsSUFBSUcsSUFBSSxJQUFJQyxJQUFJLEVBQUU7UUFDakIsT0FBQUMsSUFBQSxDQUFBQyxlQUFBLENBQUFWLFVBQUEsQ0FBQTdDLFNBQUEscUJBQUF4QixJQUFBO01BQ0QsQ0FBQyxNQUNJO1FBQ0osSUFBSSxDQUFDa0UsTUFBTSxHQUFHLElBQUk7UUFFbEIsT0FBTztVQUNOQyxLQUFLLEVBQUUsSUFBSSxDQUFDRCxNQUFNO1VBQ2xCaEUsT0FBTyxFQUFFLElBQUksQ0FBQ2tDLFFBQVE7VUFDdEJnQyxrQkFBa0IsRUFBRTtRQUNyQixDQUFDO01BQ0Y7SUFDRDtFQUFDO0VBQUEsT0FBQUMsVUFBQTtBQUFBLEVBdkM4QlIsUUFBUTtBQTBDakMsSUFBTW1CLFNBQVMsMEJBQUFDLE1BQUE7RUFBQWxCLFNBQUEsQ0FBQWlCLFNBQUEsRUFBQUMsTUFBQTtFQUFBLElBQUFDLE9BQUEsR0FBQWpCLFlBQUEsQ0FBQWUsU0FBQTtFQUNyQjtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNDLFNBQUFBLFVBQVl2QyxLQUFLLEVBQUVwRCxLQUFLLEVBQWlGO0lBQUEsSUFBL0VhLE9BQU8sR0FBQVYsU0FBQSxDQUFBdkIsTUFBQSxRQUFBdUIsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBRyxtRUFBbUU7SUFBQVAsZUFBQSxPQUFBK0YsU0FBQTtJQUFBLE9BQUFFLE9BQUEsQ0FBQWxGLElBQUEsT0FDaEd5QyxLQUFLLEVBQUVwRCxLQUFLLEVBQUVJLFNBQVMsRUFBRVMsT0FBTztFQUN2QztFQUFDZixZQUFBLENBQUE2RixTQUFBO0lBQUE1RixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBdUUsU0FBQSxFQUFXO01BQ1YsSUFBSSxDQUFDTSxNQUFNLEdBQUcsSUFBSTtNQUNsQixJQUFJRSxrQkFBa0IsR0FBRyxLQUFLO01BRTlCLElBQUksT0FBTyxJQUFJLENBQUNWLE1BQU0sSUFBSSxXQUFXLEVBQUU7UUFDdENVLGtCQUFrQixHQUFHLElBQUk7TUFDMUI7TUFFQSxPQUFPO1FBQ05ELEtBQUssRUFBRSxJQUFJLENBQUNELE1BQU07UUFDbEJoRSxPQUFPLEVBQUUsSUFBSSxDQUFDa0MsUUFBUTtRQUN0QmdDLGtCQUFrQixFQUFFQTtNQUNyQixDQUFDO0lBQ0Y7RUFBQztFQUFBLE9BQUFZLFNBQUE7QUFBQSxFQXpCNkIzQixJQUFJO0FBMEJsQyxJQUVZOEIsUUFBTywwQkFBQUMsTUFBQTtFQUFBckIsU0FBQSxDQUFBc0IsUUFBQSxFQUFBRCxNQUFBO0VBQUEsSUFBQUUsT0FBQSxHQUFBckIsWUFBQSxDQUFBb0IsUUFBQTtFQUNuQjtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNDLFNBQUFBLFNBQVk1QyxLQUFLLEVBQUVwRCxLQUFLLEVBQStDO0lBQUEsSUFBN0NhLE9BQU8sR0FBQVYsU0FBQSxDQUFBdkIsTUFBQSxRQUFBdUIsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBRyxpQ0FBaUM7SUFBQVAsZUFBQSxPQUFBb0csUUFBQTtJQUFBLE9BQUFDLE9BQUEsQ0FBQXRGLElBQUEsT0FDOUR5QyxLQUFLLEVBQUVwRCxLQUFLLEVBQUVJLFNBQVMsRUFBRVMsT0FBTztFQUN2QztFQUFDZixZQUFBLENBQUFrRyxRQUFBO0lBQUFqRyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBdUUsU0FBQSxFQUFXO01BQ1YsSUFBSSxPQUFPLElBQUksQ0FBQ0YsTUFBTSxJQUFJLFNBQVMsRUFBRTtRQUNwQyxJQUFJLENBQUNRLE1BQU0sR0FBRyxJQUFJO01BQ25CLENBQUMsTUFDSSxJQUFJLE9BQU8sSUFBSSxDQUFDUixNQUFNLElBQUksUUFBUSxFQUFFO1FBQ3hDLElBQUksSUFBSSxDQUFDQSxNQUFNLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQ0EsTUFBTSxJQUFJLENBQUMsRUFDdkMsSUFBSSxDQUFDUSxNQUFNLEdBQUcsSUFBSTtNQUNwQixDQUFDLE1BQ0ksSUFBSSxPQUFPLElBQUksQ0FBQ1IsTUFBTSxJQUFJLFFBQVEsRUFBRTtRQUN4QyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUNSLFFBQVEsQ0FBQyxJQUFJLENBQUNRLE1BQU0sQ0FBQzZCLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFDckUsSUFBSSxDQUFDckIsTUFBTSxHQUFHLElBQUk7TUFDcEI7TUFFQSxPQUFPO1FBQ05DLEtBQUssRUFBRSxJQUFJLENBQUNELE1BQU07UUFDbEJoRSxPQUFPLEVBQUUsSUFBSSxDQUFDa0M7TUFDZixDQUFDO0lBQ0Y7RUFBQztFQUFBLE9BQUFpRCxRQUFBO0FBQUEsRUE3QjJCaEMsSUFBSTtBQUFBO0FBZ0MxQixJQUFNbUMsT0FBTywwQkFBQUMsTUFBQTtFQUFBMUIsU0FBQSxDQUFBeUIsT0FBQSxFQUFBQyxNQUFBO0VBQUEsSUFBQUMsT0FBQSxHQUFBekIsWUFBQSxDQUFBdUIsT0FBQTtFQUNuQjtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNDLFNBQUFBLFFBQVkvQyxLQUFLLEVBQUVwRCxLQUFLLEVBQTRDO0lBQUEsSUFBMUNhLE9BQU8sR0FBQVYsU0FBQSxDQUFBdkIsTUFBQSxRQUFBdUIsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBRyw4QkFBOEI7SUFBQVAsZUFBQSxPQUFBdUcsT0FBQTtJQUFBLE9BQUFFLE9BQUEsQ0FBQTFGLElBQUEsT0FDM0R5QyxLQUFLLEVBQUVwRCxLQUFLLEVBQUVJLFNBQVMsRUFBRVMsT0FBTztFQUN2QztFQUFDZixZQUFBLENBQUFxRyxPQUFBO0lBQUFwRyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBdUUsU0FBQSxFQUFXO01BQ1YsSUFBSSxPQUFPLElBQUksQ0FBQ0YsTUFBTSxJQUFJLFFBQVEsRUFBRTtRQUNuQyxJQUFJLENBQUNRLE1BQU0sR0FBRyxJQUFJO01BQ25CLENBQUMsTUFDSSxJQUFJLE9BQU8sSUFBSSxDQUFDUixNQUFNLElBQUksUUFBUSxFQUFFO1FBQ3hDLElBQUlpQyxTQUFTLEdBQUcsSUFBSSxDQUFDakMsTUFBTSxDQUFDbEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDdkUsTUFBTSxHQUFHLENBQUM7UUFDakQsSUFBSTJILFNBQVMsR0FBR0QsU0FBUyxHQUFHRSxVQUFVLENBQUMsSUFBSSxDQUFDbkMsTUFBTSxDQUFDLEdBQUdvQyxRQUFRLENBQUMsSUFBSSxDQUFDcEMsTUFBTSxDQUFDO1FBRTNFLElBQUksQ0FBQ3FDLEtBQUssQ0FBQ0gsU0FBUyxDQUFDLEVBQ3BCLElBQUksQ0FBQzFCLE1BQU0sR0FBRyxJQUFJO01BQ3BCO01BRUEsT0FBTztRQUNOQyxLQUFLLEVBQUUsSUFBSSxDQUFDRCxNQUFNO1FBQ2xCaEUsT0FBTyxFQUFFLElBQUksQ0FBQ2tDO01BQ2YsQ0FBQztJQUNGO0VBQUM7RUFBQSxPQUFBb0QsT0FBQTtBQUFBLEVBNUIyQm5DLElBQUk7QUErQjFCLElBQU0yQyxHQUFHLDBCQUFBQyxNQUFBO0VBQUFsQyxTQUFBLENBQUFpQyxHQUFBLEVBQUFDLE1BQUE7RUFBQSxJQUFBQyxPQUFBLEdBQUFqQyxZQUFBLENBQUErQixHQUFBO0VBQ2Y7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNDLFNBQUFBLElBQVl2RCxLQUFLLEVBQUVwRCxLQUFLLEVBQUVpRSxlQUFlLEVBQStDO0lBQUEsSUFBN0NwRCxPQUFPLEdBQUFWLFNBQUEsQ0FBQXZCLE1BQUEsUUFBQXVCLFNBQUEsUUFBQUMsU0FBQSxHQUFBRCxTQUFBLE1BQUcsaUNBQWlDO0lBQUFQLGVBQUEsT0FBQStHLEdBQUE7SUFDckYsSUFBSXZJLENBQUM7SUFFTCxJQUFJK0csT0FBQSxDQUFPbEIsZUFBZSxLQUFJLFFBQVEsSUFBSUEsZUFBZSxDQUFDVixXQUFXLENBQUNDLElBQUksSUFBSSxPQUFPLEVBQ3BGcEYsQ0FBQyxHQUFJeUIsS0FBSyxxREFBQStCLE1BQUEsQ0FBQXVELE9BQUEsQ0FBNERsQixlQUFlLGdCQUFZLENBQUMsQ0FBQyxLQUMvRixJQUFJQSxlQUFlLENBQUNyRixNQUFNLEdBQUcsQ0FBQyxFQUNsQ1IsQ0FBQyxHQUFJeUIsS0FBSyx3REFBQStCLE1BQUEsQ0FBd0RxQyxlQUFlLENBQUNyRixNQUFNLGdCQUFhLENBQUM7SUFFdkcsSUFBSW9CLEtBQUssSUFBSyxJQUFJLElBQUksT0FBT0EsS0FBSyxJQUFJLFdBQVcsRUFDaERBLEtBQUssR0FBR0EsS0FBSyxDQUFDLEtBQ1YsSUFBSUEsS0FBSyxDQUFDdUQsV0FBVyxDQUFDQyxJQUFJLElBQUksT0FBTyxFQUN6Q3hELEtBQUssR0FBR0EsS0FBSyxDQUFDcEIsTUFBTTtJQUVyQixJQUFJLE9BQU9SLENBQUMsSUFBSSxXQUFXLEVBQUU7TUFDNUJBLENBQUMsQ0FBQ29GLElBQUksR0FBRyxlQUFlO01BQ3hCLE1BQU1wRixDQUFDO0lBQ1I7SUFFQXlDLE9BQU8sR0FBR0EsT0FBTyxDQUFDc0QsVUFBVSxDQUFDLFVBQVUsRUFBRUYsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQUMsT0FBQTRDLE9BQUEsQ0FBQWxHLElBQUEsT0FFdkR5QyxLQUFLLEVBQUVwRCxLQUFLLEVBQUVpRSxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUVwRCxPQUFPO0VBQ2hEO0VBQUNmLFlBQUEsQ0FBQTZHLEdBQUE7SUFBQTVHLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF1RSxTQUFBLEVBQVc7TUFDVixJQUFJLElBQUk0QixPQUFPLENBQUMsSUFBSSxDQUFDL0IsTUFBTSxFQUFFLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUNFLFFBQVEsQ0FBQyxDQUFDLENBQUNPLEtBQUssRUFBRTtRQUMzRCxJQUFJd0IsU0FBUyxHQUFHLElBQUksQ0FBQ2pDLE1BQU0sQ0FBQ3lDLFFBQVEsQ0FBQyxDQUFDLENBQUMzRCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUN2RSxNQUFNLEdBQUcsQ0FBQztRQUM1RCxJQUFJMkgsU0FBUyxHQUFHRCxTQUFTLEdBQUdFLFVBQVUsQ0FBQyxJQUFJLENBQUNuQyxNQUFNLENBQUMsR0FBR29DLFFBQVEsQ0FBQyxJQUFJLENBQUNwQyxNQUFNLENBQUM7UUFFM0UsSUFBSWtDLFNBQVMsSUFBSSxJQUFJLENBQUNqQyxnQkFBZ0IsRUFDckMsSUFBSSxDQUFDTyxNQUFNLEdBQUcsSUFBSTtNQUNwQjtNQUVBLE9BQU87UUFDTkMsS0FBSyxFQUFFLElBQUksQ0FBQ0QsTUFBTTtRQUNsQmhFLE9BQU8sRUFBRSxJQUFJLENBQUNrQztNQUNmLENBQUM7SUFDRjtFQUFDO0VBQUEsT0FBQTRELEdBQUE7QUFBQSxFQTdDdUIzQyxJQUFJO0FBZ0R0QixJQUFNK0MsR0FBRywwQkFBQUMsTUFBQTtFQUFBdEMsU0FBQSxDQUFBcUMsR0FBQSxFQUFBQyxNQUFBO0VBQUEsSUFBQUMsT0FBQSxHQUFBckMsWUFBQSxDQUFBbUMsR0FBQTtFQUNmO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDQyxTQUFBQSxJQUFZM0QsS0FBSyxFQUFFcEQsS0FBSyxFQUFFaUUsZUFBZSxFQUFzRDtJQUFBLElBQXBEcEQsT0FBTyxHQUFBVixTQUFBLENBQUF2QixNQUFBLFFBQUF1QixTQUFBLFFBQUFDLFNBQUEsR0FBQUQsU0FBQSxNQUFHLHdDQUF3QztJQUFBUCxlQUFBLE9BQUFtSCxHQUFBO0lBQzVGLElBQUkzSSxDQUFDO0lBRUwsSUFBSStHLE9BQUEsQ0FBT2xCLGVBQWUsS0FBSSxRQUFRLElBQUlBLGVBQWUsQ0FBQ1YsV0FBVyxDQUFDQyxJQUFJLElBQUksT0FBTyxFQUNwRnBGLENBQUMsR0FBR3lCLEtBQUsscURBQUErQixNQUFBLENBQUF1RCxPQUFBLENBQTREbEIsZUFBZSxnQkFBWSxDQUFDLENBQUMsS0FDOUYsSUFBSUEsZUFBZSxDQUFDckYsTUFBTSxHQUFHLENBQUMsRUFDbENSLENBQUMsR0FBR3lCLEtBQUssd0RBQUErQixNQUFBLENBQXdEcUMsZUFBZSxDQUFDckYsTUFBTSxnQkFBYSxDQUFDO0lBRXRHLElBQUlvQixLQUFLLElBQUssSUFBSSxJQUFJLE9BQU9BLEtBQUssSUFBSSxXQUFXLEVBQ2hEQSxLQUFLLEdBQUdBLEtBQUssQ0FBQyxLQUNWLElBQUlBLEtBQUssQ0FBQ3VELFdBQVcsQ0FBQ0MsSUFBSSxJQUFJLE9BQU8sRUFDekN4RCxLQUFLLEdBQUdBLEtBQUssQ0FBQ3BCLE1BQU07SUFFckIsSUFBSSxPQUFPUixDQUFDLElBQUksV0FBVyxFQUFFO01BQzVCQSxDQUFDLENBQUNvRixJQUFJLEdBQUcsZUFBZTtNQUN4QixNQUFNcEYsQ0FBQztJQUNSO0lBRUF5QyxPQUFPLEdBQUdBLE9BQU8sQ0FBQ3NELFVBQVUsQ0FBQyxVQUFVLEVBQUVGLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUFDLE9BQUFnRCxPQUFBLENBQUF0RyxJQUFBLE9BRXZEeUMsS0FBSyxFQUFFcEQsS0FBSyxFQUFFaUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFcEQsT0FBTztFQUNoRDtFQUFDZixZQUFBLENBQUFpSCxHQUFBO0lBQUFoSCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBdUUsU0FBQSxFQUFXO01BQ1YsSUFBSSxJQUFJNEIsT0FBTyxDQUFDLElBQUksQ0FBQy9CLE1BQU0sRUFBRSxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDRSxRQUFRLENBQUMsQ0FBQyxDQUFDTyxLQUFLLEVBQUU7UUFDM0QsSUFBSXdCLFNBQVMsR0FBRyxJQUFJLENBQUNqQyxNQUFNLENBQUN5QyxRQUFRLENBQUMsQ0FBQyxDQUFDM0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDdkUsTUFBTSxHQUFHLENBQUM7UUFDNUQsSUFBSTJILFNBQVMsR0FBR0QsU0FBUyxHQUFHRSxVQUFVLENBQUMsSUFBSSxDQUFDbkMsTUFBTSxDQUFDLEdBQUdvQyxRQUFRLENBQUMsSUFBSSxDQUFDcEMsTUFBTSxDQUFDO1FBRTNFLElBQUlrQyxTQUFTLElBQUksSUFBSSxDQUFDakMsZ0JBQWdCLEVBQ3JDLElBQUksQ0FBQ08sTUFBTSxHQUFHLElBQUk7TUFDcEI7TUFFQSxPQUFPO1FBQ05DLEtBQUssRUFBRSxJQUFJLENBQUNELE1BQU07UUFDbEJoRSxPQUFPLEVBQUUsSUFBSSxDQUFDa0M7TUFDZixDQUFDO0lBQ0Y7RUFBQztFQUFBLE9BQUFnRSxHQUFBO0FBQUEsRUE3Q3VCL0MsSUFBSTtBQWdEdEIsSUFBTWtELE9BQU8sMEJBQUFDLE1BQUE7RUFBQXpDLFNBQUEsQ0FBQXdDLE9BQUEsRUFBQUMsTUFBQTtFQUFBLElBQUFDLE9BQUEsR0FBQXhDLFlBQUEsQ0FBQXNDLE9BQUE7RUFDbkI7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNDLFNBQUFBLFFBQVk5RCxLQUFLLEVBQUVwRCxLQUFLLEVBQUVpRSxlQUFlLEVBQXVEO0lBQUEsSUFBckRwRCxPQUFPLEdBQUFWLFNBQUEsQ0FBQXZCLE1BQUEsUUFBQXVCLFNBQUEsUUFBQUMsU0FBQSxHQUFBRCxTQUFBLE1BQUcseUNBQXlDO0lBQUFQLGVBQUEsT0FBQXNILE9BQUE7SUFDN0YsSUFBSS9CLE9BQUEsQ0FBT2xCLGVBQWUsS0FBSSxRQUFRLElBQUlBLGVBQWUsQ0FBQ1YsV0FBVyxDQUFDQyxJQUFJLElBQUksT0FBTyxFQUNwRixNQUFNLElBQUkzRCxLQUFLLHFEQUFBK0IsTUFBQSxDQUFBdUQsT0FBQSxDQUE0RGxCLGVBQWUsZ0JBQVksQ0FBQyxDQUFDLEtBQ3BHLElBQUlBLGVBQWUsQ0FBQ3JGLE1BQU0sR0FBRyxDQUFDLEVBQ2xDLE1BQU0sSUFBSWlCLEtBQUssd0RBQUErQixNQUFBLENBQXdEcUMsZUFBZSxDQUFDckYsTUFBTSxnQkFBYSxDQUFDO0lBRTVHLElBQUlxRixlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUdBLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFDMUMsTUFBTSxJQUFJcEUsS0FBSyx5RkFBQStCLE1BQUEsQ0FBeUZxQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFFBQUFyQyxNQUFBLENBQUtxQyxlQUFlLENBQUMsQ0FBQyxDQUFDLGtCQUFlLENBQUM7SUFFbEssSUFBSWpFLEtBQUssQ0FBQ3VELFdBQVcsQ0FBQ0MsSUFBSSxJQUFJLE9BQU8sRUFDcEN4RCxLQUFLLEdBQUdBLEtBQUssQ0FBQ3BCLE1BQU07SUFFckJpQyxPQUFPLEdBQUdBLE9BQU8sQ0FBQ3NELFVBQVUsQ0FBQyxVQUFVLEVBQUVGLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RHBELE9BQU8sR0FBR0EsT0FBTyxDQUFDc0QsVUFBVSxDQUFDLFVBQVUsRUFBRUYsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQUMsT0FBQW1ELE9BQUEsQ0FBQXpHLElBQUEsT0FFdkR5QyxLQUFLLEVBQUVwRCxLQUFLLEVBQUUsQ0FBQ2lFLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRUEsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVwRCxPQUFPO0VBQ3RFO0VBQUNmLFlBQUEsQ0FBQW9ILE9BQUE7SUFBQW5ILEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF1RSxTQUFBLEVBQVc7TUFDVixJQUFJLElBQUk0QixPQUFPLENBQUMsSUFBSSxDQUFDL0IsTUFBTSxFQUFFLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUNFLFFBQVEsQ0FBQyxDQUFDLENBQUNPLEtBQUssRUFBRTtRQUMzRCxJQUFJd0IsU0FBUyxHQUFHLElBQUksQ0FBQ2pDLE1BQU0sQ0FBQ2xCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ3ZFLE1BQU0sR0FBRyxDQUFDO1FBQ2pELElBQUkySCxTQUFTLEdBQUdELFNBQVMsR0FBR0UsVUFBVSxDQUFDLElBQUksQ0FBQ25DLE1BQU0sQ0FBQyxHQUFHb0MsUUFBUSxDQUFDLElBQUksQ0FBQ3BDLE1BQU0sQ0FBQztRQUUzRSxJQUFJa0MsU0FBUyxJQUFJLElBQUksQ0FBQ2pDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJaUMsU0FBUyxJQUFJLElBQUksQ0FBQ2pDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUNqRixJQUFJLENBQUNPLE1BQU0sR0FBRyxJQUFJO01BQ3BCO01BRUEsT0FBTztRQUNOQyxLQUFLLEVBQUUsSUFBSSxDQUFDRCxNQUFNO1FBQ2xCaEUsT0FBTyxFQUFFLElBQUksQ0FBQ2tDO01BQ2YsQ0FBQztJQUNGO0VBQUM7RUFBQSxPQUFBbUUsT0FBQTtBQUFBLEVBeEMyQmxELElBQUk7QUF5Q2hDLElBRVk5QixNQUFLLDBCQUFBbUYsTUFBQTtFQUFBM0MsU0FBQSxDQUFBNEMsTUFBQSxFQUFBRCxNQUFBO0VBQUEsSUFBQUUsT0FBQSxHQUFBM0MsWUFBQSxDQUFBMEMsTUFBQTtFQUNqQjtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNDLFNBQUFBLE9BQVlsRSxLQUFLLEVBQUVwRCxLQUFLLEVBQTBDO0lBQUEsSUFBeENhLE9BQU8sR0FBQVYsU0FBQSxDQUFBdkIsTUFBQSxRQUFBdUIsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBRyw0QkFBNEI7SUFBQVAsZUFBQSxPQUFBMEgsTUFBQTtJQUFBLE9BQUFDLE9BQUEsQ0FBQTVHLElBQUEsT0FDekR5QyxLQUFLLEVBQUVwRCxLQUFLLEVBQUVJLFNBQVMsRUFBRVMsT0FBTztFQUN2QztFQUFDZixZQUFBLENBQUF3SCxNQUFBO0lBQUF2SCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBdUUsU0FBQSxFQUFXO01BQ1YsSUFBSVksT0FBQSxDQUFPLElBQUksQ0FBQ2QsTUFBTSxLQUFJLFFBQVEsSUFBSSxJQUFJLENBQUNBLE1BQU0sQ0FBQ2QsV0FBVyxDQUFDQyxJQUFJLElBQUksT0FBTyxFQUFFO1FBQzlFLElBQUksQ0FBQ3FCLE1BQU0sR0FBRyxJQUFJO01BQ25CO01BRUEsT0FBTztRQUNOQyxLQUFLLEVBQUUsSUFBSSxDQUFDRCxNQUFNO1FBQ2xCaEUsT0FBTyxFQUFFLElBQUksQ0FBQ2tDO01BQ2YsQ0FBQztJQUNGO0VBQUM7RUFBQSxPQUFBdUUsTUFBQTtBQUFBLEVBckJ5QnRELElBQUk7QUFBQTtBQXdCeEIsSUFBTXdELEVBQUUsMEJBQUFDLE1BQUE7RUFBQS9DLFNBQUEsQ0FBQThDLEVBQUEsRUFBQUMsTUFBQTtFQUFBLElBQUFDLFFBQUEsR0FBQTlDLFlBQUEsQ0FBQTRDLEVBQUE7RUFDZDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0MsU0FBQUEsR0FBWXBFLEtBQUssRUFBRXBELEtBQUssRUFBRWlFLGVBQWUsRUFBNkM7SUFBQSxJQUEzQ3BELE9BQU8sR0FBQVYsU0FBQSxDQUFBdkIsTUFBQSxRQUFBdUIsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBRywrQkFBK0I7SUFBQVAsZUFBQSxPQUFBNEgsRUFBQTtJQUNuRixJQUFJckMsT0FBQSxDQUFPbEIsZUFBZSxLQUFJLFFBQVEsSUFBSUEsZUFBZSxDQUFDVixXQUFXLENBQUNDLElBQUksSUFBSSxPQUFPLEVBQ3BGLE1BQU0sSUFBSTNELEtBQUsscURBQUErQixNQUFBLENBQUF1RCxPQUFBLENBQTREbEIsZUFBZSxnQkFBWSxDQUFDLENBQUMsS0FDcEcsSUFBSUEsZUFBZSxDQUFDckYsTUFBTSxHQUFHLENBQUMsRUFDbEMsTUFBTSxJQUFJaUIsS0FBSyxpRUFBQStCLE1BQUEsQ0FBaUVxQyxlQUFlLENBQUNyRixNQUFNLGdCQUFhLENBQUM7SUFBQyxPQUFBOEksUUFBQSxDQUFBL0csSUFBQSxPQUVoSHlDLEtBQUssRUFBRXBELEtBQUssRUFBRWlFLGVBQWUsRUFBRXBELE9BQU87RUFDN0M7RUFBQ2YsWUFBQSxDQUFBMEgsRUFBQTtJQUFBekgsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXVFLFNBQUEsRUFBVztNQUNWLElBQUksT0FBTyxJQUFJLENBQUNGLE1BQU0sSUFBSSxXQUFXLEVBQUU7UUFDdEMsSUFBSSxJQUFJLENBQUNDLGdCQUFnQixDQUFDVCxRQUFRLENBQUMsSUFBSSxDQUFDUSxNQUFNLENBQUN5QyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7VUFDM0QsSUFBSSxDQUFDakMsTUFBTSxHQUFHLElBQUk7UUFDbkI7TUFDRDtNQUVBLE9BQU87UUFDTkMsS0FBSyxFQUFFLElBQUksQ0FBQ0QsTUFBTTtRQUNsQmhFLE9BQU8sRUFBRSxJQUFJLENBQUNrQztNQUNmLENBQUM7SUFDRjtFQUFDO0VBQUEsT0FBQXlFLEVBQUE7QUFBQSxFQTdCc0J4RCxJQUFJO0FBZ0NyQixJQUFNMkQsUUFBUSwwQkFBQUMsT0FBQTtFQUFBbEQsU0FBQSxDQUFBaUQsUUFBQSxFQUFBQyxPQUFBO0VBQUEsSUFBQUMsUUFBQSxHQUFBakQsWUFBQSxDQUFBK0MsUUFBQTtFQUNwQjtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNDLFNBQUFBLFNBQVl2RSxLQUFLLEVBQUVwRCxLQUFLLEVBQTJDO0lBQUEsSUFBekNhLE9BQU8sR0FBQVYsU0FBQSxDQUFBdkIsTUFBQSxRQUFBdUIsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBRyw2QkFBNkI7SUFBQVAsZUFBQSxPQUFBK0gsUUFBQTtJQUFBLE9BQUFFLFFBQUEsQ0FBQWxILElBQUEsT0FDMUR5QyxLQUFLLEVBQUVwRCxLQUFLLEVBQUVhLE9BQU87RUFDNUI7RUFBQ2YsWUFBQSxDQUFBNkgsUUFBQTtJQUFBNUgsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXVFLFNBQUEsRUFBVztNQUNWLElBQUlRLGtCQUFrQixHQUFHLElBQUk7TUFDN0IsSUFBSSxDQUFDRixNQUFNLEdBQUcsSUFBSTtNQUVsQixJQUFJLElBQUksQ0FBQ1IsTUFBTSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUNBLE1BQU0sS0FBSyxFQUFFLEVBQUU7UUFDL0NVLGtCQUFrQixHQUFHLEtBQUs7TUFDM0I7TUFFQSxPQUFPO1FBQ05ELEtBQUssRUFBRSxJQUFJLENBQUNELE1BQU07UUFDbEJoRSxPQUFPLEVBQUUsSUFBSSxDQUFDa0MsUUFBUTtRQUN0QmdDLGtCQUFrQixFQUFFQTtNQUNyQixDQUFDO0lBQ0Y7RUFBQztFQUFBLE9BQUE0QyxRQUFBO0FBQUEsRUF6QjRCM0QsSUFBSTtBQTBCakMsSUFFWThELE9BQU0sMEJBQUFDLE9BQUE7RUFBQXJELFNBQUEsQ0FBQXNELE9BQUEsRUFBQUQsT0FBQTtFQUFBLElBQUFFLFFBQUEsR0FBQXJELFlBQUEsQ0FBQW9ELE9BQUE7RUFDbEI7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0MsU0FBQUEsUUFBWTVFLEtBQUssRUFBRXBELEtBQUssRUFBK0M7SUFBQSxJQUE3Q2EsT0FBTyxHQUFBVixTQUFBLENBQUF2QixNQUFBLFFBQUF1QixTQUFBLFFBQUFDLFNBQUEsR0FBQUQsU0FBQSxNQUFHLGlDQUFpQztJQUFBUCxlQUFBLE9BQUFvSSxPQUFBO0lBQUEsT0FBQUMsUUFBQSxDQUFBdEgsSUFBQSxPQUM5RHlDLEtBQUssRUFBRXBELEtBQUssRUFBRWEsT0FBTztFQUM1QjtFQUFDZixZQUFBLENBQUFrSSxPQUFBO0lBQUFqSSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBdUUsU0FBQSxFQUFXO01BQUEsSUFBQTJELFNBQUE7TUFDVixJQUFJLENBQUMsSUFBSSxDQUFDN0QsTUFBTSxFQUFFO1FBQ2pCLE9BQU87VUFDTlMsS0FBSyxFQUFFLElBQUksQ0FBQ0QsTUFBTTtVQUNsQmhFLE9BQU8sRUFBRSxJQUFJLENBQUNrQztRQUNmLENBQUM7TUFDRjtNQUVBLElBQUlvRixRQUFRLEdBQUcsSUFBSSxDQUFDOUQsTUFBTSxDQUFDK0QsS0FBSyxDQUFDLDBEQUEwRCxDQUFDO01BQzVGRCxRQUFRLElBQUFELFNBQUEsR0FBR0MsUUFBUSxjQUFBRCxTQUFBLGNBQUFBLFNBQUEsR0FBSSxFQUFFO01BRXpCLElBQUlDLFFBQVEsQ0FBQ3ZKLE1BQU0sSUFBSSxDQUFDLEVBQ3ZCLElBQUksQ0FBQ2lHLE1BQU0sR0FBRyxJQUFJO01BRW5CLE9BQU87UUFDTkMsS0FBSyxFQUFFLElBQUksQ0FBQ0QsTUFBTTtRQUNsQmhFLE9BQU8sRUFBRSxJQUFJLENBQUNrQztNQUNmLENBQUM7SUFDRjtFQUFDO0VBQUEsT0FBQWlGLE9BQUE7QUFBQSxFQTdCMEJoRSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyYWhDO0FBQzRFO0FBQ3hDOztBQUVwQztBQUN5QztBQUFBLElBQUF1RSxlQUFBLG9CQUFBQyxPQUFBO0FBQUEsSUFBQUMsY0FBQSxvQkFBQUQsT0FBQTtBQUFBLElBQUFFLFdBQUEsb0JBQUFGLE9BQUE7QUFBQSxJQUFBRyxVQUFBLG9CQUFBSCxPQUFBO0FBQUEsSUFBQUksU0FBQSxvQkFBQUosT0FBQTtBQUFBLElBQUFLLFlBQUEsb0JBQUFMLE9BQUE7QUFBQSxJQUFBTSxPQUFBLG9CQUFBTixPQUFBO0FBQUEsSUFBQU8sVUFBQSxvQkFBQVAsT0FBQTtBQUFBLElBQUFRLE9BQUEsb0JBQUFSLE9BQUE7QUFBQSxJQUFBUyxlQUFBLG9CQUFBVCxPQUFBO0FBQUEsSUFBQVUsY0FBQSxvQkFBQUMsT0FBQTtBQUFBLElBQUFDLGNBQUEsb0JBQUFELE9BQUE7QUFBQSxJQUFBRSxhQUFBLG9CQUFBRixPQUFBO0FBQUEsSUFFcEJHLFNBQVM7RUFDN0I7QUFDRDtBQUNBO0FBQ0E7O0VBRUM7QUFDRDtBQUNBOztFQUVDO0FBQ0Q7QUFDQTs7RUFHQztFQUNBO0FBQ0Q7QUFDQTs7RUFFQztBQUNEO0FBQ0E7O0VBRUM7QUFDRDtBQUNBOztFQUVDO0FBQ0Q7QUFDQTs7RUFFQztBQUNEO0FBQ0E7O0VBRUM7QUFDRDtBQUNBOztFQUVDO0FBQ0Q7QUFDQTs7RUFHQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0MsU0FBQUEsVUFBWUMsT0FBTSxFQUFFQyxNQUFLLEVBQUU3RyxTQUFRLEVBQUU7SUFBQS9DLGVBQUEsT0FBQTBKLFNBQUE7SUF3UXJDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQVJDRywyQkFBQSxPQUFBSixhQUFBO0lBN0lBO0lBQ0E7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBUkNJLDJCQUFBLE9BQUFMLGNBQUE7SUFoSEE7QUFDRDtBQUNBO0lBRkNLLDJCQUFBLE9BQUFQLGNBQUE7SUFBQXBHLDBCQUFBLE9BQUF5RixlQUFBO01BQUF2RixRQUFBO01BQUFoRCxLQUFBLEVBNUdrQixDQUFDO0lBQUM7SUFBQThDLDBCQUFBLE9BQUEyRixjQUFBO01BQUF6RixRQUFBO01BQUFoRCxLQUFBLEVBSUg7SUFBRTtJQUFBOEMsMEJBQUEsT0FBQTRGLFdBQUE7TUFBQTFGLFFBQUE7TUFBQWhELEtBQUEsRUFJTDtJQUFFO0lBQUE4QywwQkFBQSxPQUFBNkYsVUFBQTtNQUFBM0YsUUFBQTtNQUFBaEQsS0FBQTtJQUFBO0lBQUE4QywwQkFBQSxPQUFBOEYsU0FBQTtNQUFBNUYsUUFBQTtNQUFBaEQsS0FBQTtJQUFBO0lBQUE4QywwQkFBQSxPQUFBK0YsWUFBQTtNQUFBN0YsUUFBQTtNQUFBaEQsS0FBQTtJQUFBO0lBQUE4QywwQkFBQSxPQUFBZ0csT0FBQTtNQUFBOUYsUUFBQTtNQUFBaEQsS0FBQTtJQUFBO0lBQUE4QywwQkFBQSxPQUFBaUcsVUFBQTtNQUFBL0YsUUFBQTtNQUFBaEQsS0FBQSxFQXNCSCxDQUFDO0lBQUM7SUFBQThDLDBCQUFBLE9BQUFrRyxPQUFBO01BQUFoRyxRQUFBO01BQUFoRCxLQUFBLEVBSUw7SUFBSztJQUFBOEMsMEJBQUEsT0FBQW1HLGVBQUE7TUFBQWpHLFFBQUE7TUFBQWhELEtBQUEsRUFJRztJQUFLO0lBMkR0QjtJQUNBcUkscUZBQVcsQ0FBQyxDQUFDOztJQUViO0lBQ0FwRixxQkFBQSxLQUFJLEVBQUEwRixVQUFBLEVBQWNZLE9BQU07SUFDeEJ0RyxxQkFBQSxLQUFJLEVBQUEyRixTQUFBLEVBQWFZLE1BQUs7SUFDdEJ2RyxxQkFBQSxLQUFJLEVBQUE0RixZQUFBLEVBQWdCbEcsU0FBUTtJQUU1Qk0scUJBQUEsS0FBSSxFQUFBNkYsT0FBQSxFQUFXLElBQUlwRyxzREFBVSxDQUFDLENBQUM7RUFDaEM7RUE0REE7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFrQkM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFUQzVDLFlBQUEsQ0FBQXdKLFNBQUE7SUFBQXZKLEdBQUE7SUFBQUMsS0FBQTtJQTRMQTtJQUNBO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7SUFDQyxTQUFBMEosTUFBQSxFQUFRO01BQ1AsSUFBSSxDQUFBckcscUJBQUEsQ0FBQyxJQUFJLEVBQUE0RixlQUFBLENBQWdCLEVBQ3hCVSxzQkFBQSxLQUFJLEVBQUFULGNBQUEsRUFBQVUsZUFBQSxFQUFBakosSUFBQSxDQUFKLElBQUk7TUFFTCxPQUFBMEMscUJBQUEsQ0FBTyxJQUFJLEVBQUEyRixPQUFBO0lBQ1o7O0lBRUE7QUFDRDtBQUNBO0FBQ0E7QUFDQTtFQUpDO0lBQUFqSixHQUFBO0lBQUFDLEtBQUEsRUFLQSxTQUFBNkosT0FBQSxFQUFTO01BQ1IsSUFBSSxDQUFBeEcscUJBQUEsQ0FBQyxJQUFJLEVBQUE0RixlQUFBLENBQWdCLEVBQ3hCVSxzQkFBQSxLQUFJLEVBQUFULGNBQUEsRUFBQVUsZUFBQSxFQUFBakosSUFBQSxDQUFKLElBQUk7TUFFTCxPQUFBMEMscUJBQUEsQ0FBTyxJQUFJLEVBQUF5RixPQUFBO0lBQ1o7O0lBRUE7QUFDRDtBQUNBO0FBQ0E7QUFDQTtFQUpDO0lBQUEvSSxHQUFBO0lBQUFDLEtBQUEsRUFLQSxTQUFBdUUsU0FBQSxFQUFXO01BQ1YsSUFBSSxDQUFBbEIscUJBQUEsQ0FBQyxJQUFJLEVBQUE0RixlQUFBLENBQWdCLEVBQ3hCVSxzQkFBQSxLQUFJLEVBQUFULGNBQUEsRUFBQVUsZUFBQSxFQUFBakosSUFBQSxDQUFKLElBQUk7TUFFTCxPQUFBMEMscUJBQUEsQ0FBTyxJQUFJLEVBQUEwRixVQUFBO0lBQ1o7O0lBRUE7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBTEM7SUFBQWhKLEdBQUE7SUFBQUMsS0FBQSxFQU1BLFNBQUEyRCxJQUFJUCxLQUFLLEVBQUU7TUFDVixPQUFPLElBQUksQ0FBQzBHLGFBQWEsQ0FBQyxDQUFDLENBQUNqRyxRQUFRLENBQUM5RCxHQUFHLENBQUM7SUFDMUM7O0lBRUE7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBTEM7SUFBQUEsR0FBQTtJQUFBQyxLQUFBLEVBTUEsU0FBQStELE1BQU1YLEtBQUssRUFBRTtNQUNaLE9BQU8sSUFBSSxDQUFDeUcsTUFBTSxDQUFDLENBQUMsQ0FBQzlGLEtBQUssQ0FBQ1gsS0FBSyxDQUFDO0lBQ2xDOztJQUVBO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUxDO0lBQUFyRCxHQUFBO0lBQUFDLEtBQUEsRUFNQSxTQUFBMEQsSUFBQSxFQUFrQjtNQUFBLElBQWROLEtBQUssR0FBQWpELFNBQUEsQ0FBQXZCLE1BQUEsUUFBQXVCLFNBQUEsUUFBQUMsU0FBQSxHQUFBRCxTQUFBLE1BQUcsSUFBSTtNQUNmLE9BQU8sSUFBSSxDQUFDMEosTUFBTSxDQUFDLENBQUMsQ0FBQ25HLEdBQUcsQ0FBQ04sS0FBSyxDQUFDO0lBQ2hDOztJQUVBO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7RUFKQztJQUFBckQsR0FBQTtJQUFBQyxLQUFBLEVBS0EsU0FBQThKLGNBQUEsRUFBZ0I7TUFDZixPQUFPLElBQUksQ0FBQ0QsTUFBTSxDQUFDLENBQUMsQ0FBQ2pHLE1BQU0sQ0FBQyxDQUFDO0lBQzlCOztJQUVBO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7RUFKQztJQUFBN0QsR0FBQTtJQUFBQyxLQUFBLEVBS0EsU0FBQStKLFlBQUEsRUFBYztNQUNiLE9BQU9uSCxNQUFNLENBQUNrQixJQUFJLENBQUMsSUFBSSxDQUFDUyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3BDOztJQUVBO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7RUFKQztJQUFBeEUsR0FBQTtJQUFBQyxLQUFBLEVBS0EsU0FBQTRELE9BQUEsRUFBUztNQUNSLE9BQUFQLHFCQUFBLENBQU8sSUFBSSxFQUFBcUYsV0FBQTtJQUNaO0VBQUM7RUFBQSxPQUFBWSxTQUFBO0FBQUE7QUFBQSxTQUFBTSxnQkFBQSxFQTFXZ0I7RUFBQSxJQUFBSSxLQUFBO0VBQUEsSUFBQUMsS0FBQSxZQUFBQSxNQUFBLEVBQzJCO0lBQXRDLElBQUlDLENBQUMsR0FBQUMsWUFBQSxDQUFBQyxFQUFBO0lBQ1Q7SUFDQSxJQUFJaEgsS0FBSyxHQUFHOEcsQ0FBQztJQUNiLElBQUlHLEtBQUssR0FBRyxDQUFDO0lBQ2IsSUFBSXRGLGtCQUFrQixHQUFHLEtBQUs7O0lBRTlCO0lBQ0EsSUFBSXlFLEtBQUssR0FBQS9JLDRCQUFBLENBQUc2SSxTQUFTLEVBNUhIQSxTQUFTLEVBQUFnQixXQUFBLEVBQUEzSixJQUFBLENBNEhmMkksU0FBUyxFQUFhbEcsS0FBSyxFQUFBQyxxQkFBQSxDQUFFMkcsS0FBSSxFQUFBcEIsU0FBQSxHQUFZeUIsS0FBSyxDQUFDO0lBQy9ELElBQUkxSCxRQUFRLEdBQUFsQyw0QkFBQSxDQUFHNkksU0FBUyxFQTdITkEsU0FBUyxFQUFBaUIsY0FBQSxFQUFBNUosSUFBQSxDQTZIWjJJLFNBQVMsRUFBZ0JsRyxLQUFLLEVBQUFDLHFCQUFBLENBQUUyRyxLQUFJLEVBQUFuQixZQUFBLEdBQWV3QixLQUFLLENBQUM7O0lBRXhFO0lBQ0EsSUFBSWIsS0FBSyxDQUFDM0YsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO01BQy9Ca0Isa0JBQWtCLEdBQUE0RSxzQkFBQSxDQUFHSyxLQUFJLEVBQUFaLGNBQUEsRUFBQW9CLGVBQUEsRUFBQTdKLElBQUEsQ0FBSnFKLEtBQUksRUFBZ0I1RyxLQUFLLEVBQUVDLHFCQUFBLENBQUEyRyxLQUFJLEVBQUFyQixVQUFBLEVBQVl2RixLQUFLLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFVCxRQUFRLENBQUM7TUFDL0Y2RyxLQUFLLENBQUNpQixNQUFNLENBQUNqQixLQUFLLENBQUNrQixPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNDO0lBQ0E7SUFBQSxLQUNLLElBQUlsQixLQUFLLENBQUMxQyxRQUFRLENBQUMsQ0FBQyxDQUFDc0IsS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFFO01BQy9DLElBQUl1QyxTQUFTLEdBQUcsQ0FBQztNQUNqQm5CLEtBQUssQ0FBQ29CLE9BQU8sQ0FBQyxVQUFDQyxDQUFDLEVBQUVYLENBQUMsRUFBSztRQUN2QixJQUFJVyxDQUFDLENBQUN6QyxLQUFLLENBQUMsY0FBYyxDQUFDLEVBQUU7VUFDNUJ1QyxTQUFTLEdBQUdULENBQUM7VUFDYjtRQUNEO01BQ0QsQ0FBQyxDQUFDO01BRUYsSUFBSVksSUFBSSxHQUFHdEIsS0FBSyxDQUFDaUIsTUFBTSxDQUFDRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO01BRXJDNUYsa0JBQWtCLEdBQUE0RSxzQkFBQSxDQUFHSyxLQUFJLEVBQUFaLGNBQUEsRUFBQW9CLGVBQUEsRUFBQTdKLElBQUEsQ0FBSnFKLEtBQUksRUFBZ0I1RyxLQUFLLEVBQUVDLHFCQUFBLENBQUEyRyxLQUFJLEVBQUFyQixVQUFBLEVBQVl2RixLQUFLLENBQUMsRUFBRTBILElBQUksRUFBRW5JLFFBQVEsQ0FBQztJQUN4RjtJQUNBO0lBQUEsS0FDSyxJQUFJNkcsS0FBSyxDQUFDM0YsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO01BQ3JDa0Isa0JBQWtCLEdBQUE0RSxzQkFBQSxDQUFHSyxLQUFJLEVBQUFaLGNBQUEsRUFBQW9CLGVBQUEsRUFBQTdKLElBQUEsQ0FBSnFKLEtBQUksRUFBZ0I1RyxLQUFLLEVBQUVDLHFCQUFBLENBQUEyRyxLQUFJLEVBQUFyQixVQUFBLEVBQVl2RixLQUFLLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFVCxRQUFRLENBQUM7TUFDaEc2RyxLQUFLLENBQUNpQixNQUFNLENBQUNqQixLQUFLLENBQUNrQixPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVDO0lBQ0E7SUFBQSxLQUNLLElBQUlsQixLQUFLLENBQUMzRixRQUFRLFdBQVcsQ0FBQyxFQUFFO01BQ3BDa0Isa0JBQWtCLEdBQUE0RSxzQkFBQSxDQUFHSyxLQUFJLEVBQUFaLGNBQUEsRUFBQW9CLGVBQUEsRUFBQTdKLElBQUEsQ0FBSnFKLEtBQUksRUFBZ0I1RyxLQUFLLEVBQUVDLHFCQUFBLENBQUEyRyxLQUFJLEVBQUFyQixVQUFBLEVBQVl2RixLQUFLLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFVCxRQUFRLENBQUM7TUFDL0Y2RyxLQUFLLENBQUNpQixNQUFNLENBQUNqQixLQUFLLENBQUNrQixPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNDOztJQUVBO0lBQ0EsSUFBSTNGLGtCQUFrQixFQUFFO01BQ3ZCNEUsc0JBQUEsQ0FBQUssS0FBSSxFQUFBWixjQUFBLEVBQUFvQixlQUFBLEVBQUE3SixJQUFBLENBQUpxSixLQUFJLEVBQWdCNUcsS0FBSyxFQUFFQyxxQkFBQSxDQUFBMkcsS0FBSSxFQUFBckIsVUFBQSxFQUFZdkYsS0FBSyxDQUFDLEVBQUVvRyxLQUFLLEVBQUU3RyxRQUFRO0lBQ25FO0lBRUFVLHFCQUFBLENBQUEyRyxLQUFJLEVBQUF2QixjQUFBLEVBQWdCc0MsSUFBSSxDQUFDM0gsS0FBSyxDQUFDO0VBQ2hDLENBQUM7RUE5Q0QsU0FBQWdILEVBQUEsTUFBQUQsWUFBQSxHQUFjdkgsTUFBTSxDQUFDa0IsSUFBSSxDQUFBVCxxQkFBQSxDQUFDLElBQUksRUFBQXVGLFNBQUEsQ0FBVSxDQUFDLEVBQUF3QixFQUFBLEdBQUFELFlBQUEsQ0FBQXZMLE1BQUEsRUFBQXdMLEVBQUE7SUFBQUgsS0FBQTtFQUFBO0VBZ0R6QyxJQUFJNUcscUJBQUEsS0FBSSxFQUFBeUYsT0FBQSxFQUFTbEYsTUFBTSxDQUFDLENBQUMsQ0FBQ2hGLE1BQU0sR0FBRyxDQUFDLEVBQ25DcUUscUJBQUEsS0FBSSxFQUFBK0YsT0FBQSxFQUFXLElBQUk7RUFFcEIvRixxQkFBQSxLQUFJLEVBQUFnRyxlQUFBLEVBQW1CLElBQUk7QUFDNUI7QUFBQyxTQUFBcUIsWUFZa0JsSCxLQUFLLEVBQUU0SCxHQUFHLEVBQXVDO0VBQUEsSUFBckNYLEtBQUssR0FBQWxLLFNBQUEsQ0FBQXZCLE1BQUEsUUFBQXVCLFNBQUEsUUFBQUMsU0FBQSxHQUFBRCxTQUFBLE1BQUcsQ0FBQztFQUFBLElBQUU4SyxnQkFBZ0IsR0FBQTlLLFNBQUEsQ0FBQXZCLE1BQUEsUUFBQXVCLFNBQUEsUUFBQUMsU0FBQSxHQUFBRCxTQUFBLE1BQUcsS0FBSztFQUNqRSxJQUFJcUosS0FBSyxHQUFHd0IsR0FBRyxDQUFDNUgsS0FBSyxDQUFDO0VBQ3RCb0csS0FBSyxHQUFJLE9BQU9BLEtBQUssSUFBSSxXQUFXLEdBQUksRUFBRSxHQUFHQSxLQUFLO0VBRWxELElBQUksQ0FBQ3lCLGdCQUFnQixFQUFFO0lBQ3RCN0gsS0FBSyxHQUFHQSxLQUFLLENBQUM4SCxNQUFNLENBQUMsQ0FBQyxFQUFFOUgsS0FBSyxDQUFDK0gsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRS9DLElBQUlDLGdCQUFlLEdBQUdKLEdBQUcsSUFBQXBKLE1BQUEsQ0FBSXdCLEtBQUssT0FBQXhCLE1BQUEsQ0FBSXlJLEtBQUssRUFBRztJQUM5Q2IsS0FBSyxHQUFJLE9BQU80QixnQkFBZSxJQUFJLFdBQVcsR0FBSTVCLEtBQUssR0FBR0EsS0FBSyxDQUFDNUgsTUFBTSxDQUFDd0osZ0JBQWUsQ0FBQztJQUV2RkEsZ0JBQWUsR0FBR0osR0FBRyxJQUFBcEosTUFBQSxDQUFJd0IsS0FBSyxRQUFLO0lBQ25Db0csS0FBSyxHQUFJLE9BQU80QixnQkFBZSxJQUFJLFdBQVcsR0FBSTVCLEtBQUssR0FBR0EsS0FBSyxDQUFDNUgsTUFBTSxDQUFDd0osZ0JBQWUsQ0FBQztFQUN4RjtFQUVBLE9BQU81QixLQUFLLENBQUNwSCxJQUFJLENBQUMsQ0FBQztBQUNwQjtBQUFDLFNBQUFtSSxlQVlxQm5ILEtBQUssRUFBRTRILEdBQUcsRUFBdUM7RUFBQSxJQUFyQ1gsS0FBSyxHQUFBbEssU0FBQSxDQUFBdkIsTUFBQSxRQUFBdUIsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBRyxDQUFDO0VBQUEsSUFBRThLLGdCQUFnQixHQUFBOUssU0FBQSxDQUFBdkIsTUFBQSxRQUFBdUIsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBRyxLQUFLO0VBQ3BFLElBQUl3QyxRQUFRLEdBQUdxSSxHQUFHLENBQUM1SCxLQUFLLENBQUM7RUFDekJULFFBQVEsR0FBSSxPQUFPQSxRQUFRLElBQUksV0FBVyxHQUFJLENBQUMsQ0FBQyxHQUFHQSxRQUFRO0VBRTNELElBQUksQ0FBQ3NJLGdCQUFnQixFQUFFO0lBQ3RCN0gsS0FBSyxHQUFHQSxLQUFLLENBQUM4SCxNQUFNLENBQUMsQ0FBQyxFQUFFOUgsS0FBSyxDQUFDK0gsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLElBQUlFLGtCQUFrQixHQUFHTCxHQUFHLElBQUFwSixNQUFBLENBQUl3QixLQUFLLE9BQUF4QixNQUFBLENBQUl5SSxLQUFLLEVBQUc7SUFDakQxSCxRQUFRLEdBQUksT0FBT3lJLGVBQWUsSUFBSSxXQUFXLEdBQUl6SSxRQUFRLEdBQUdDLE1BQU0sQ0FBQ2EsTUFBTSxDQUFDZCxRQUFRLEVBQUUwSSxrQkFBa0IsQ0FBQztJQUUzR0Esa0JBQWtCLEdBQUdMLEdBQUcsSUFBQXBKLE1BQUEsQ0FBSXdCLEtBQUssUUFBSztJQUN0Q1QsUUFBUSxHQUFJLE9BQU95SSxlQUFlLElBQUksV0FBVyxHQUFJekksUUFBUSxHQUFHQyxNQUFNLENBQUNhLE1BQU0sQ0FBQ2QsUUFBUSxFQUFFMEksa0JBQWtCLENBQUM7RUFDNUc7RUFFQSxPQUFPMUksUUFBUTtBQUNoQjtBQUFDLFNBQUE2SCxnQkFZY3BILEtBQUssRUFBRXBELEtBQUssRUFBRXdKLEtBQUssRUFBRTdHLFFBQVEsRUFBbUI7RUFBQSxJQUFqQjJJLE9BQU8sR0FBQW5MLFNBQUEsQ0FBQXZCLE1BQUEsUUFBQXVCLFNBQUEsUUFBQUMsU0FBQSxHQUFBRCxTQUFBLE1BQUcsS0FBSztFQUM1RDtFQUNBLElBQUlvTCxZQUFZLEdBQUcsQ0FBQzs7RUFFcEI7RUFDQSxJQUFJQyxnQkFBZ0IsR0FBRyxFQUFFO0VBQ3pCLElBQUl6RyxrQkFBa0IsR0FBRyxJQUFJOztFQUU3QjtFQUFBLElBQUEwRyxTQUFBLEdBQUFDLDBCQUFBLENBQ2lCbEMsS0FBSztJQUFBbUMsS0FBQTtFQUFBO0lBQXRCLEtBQUFGLFNBQUEsQ0FBQUcsQ0FBQSxNQUFBRCxLQUFBLEdBQUFGLFNBQUEsQ0FBQUksQ0FBQSxJQUFBQyxJQUFBLEdBQXdCO01BQUEsSUFBZmhCLElBQUksR0FBQWEsS0FBQSxDQUFBM0wsS0FBQTtNQUNaLElBQUkrTCxNQUFNLEdBQUdqQixJQUFJO01BQ2pCLElBQUlqSyxPQUFPLEdBQUc4QixRQUFRLENBQUNtSSxJQUFJLENBQUM7TUFDNUIsSUFBSTdHLGVBQWU7TUFDbkIsSUFBSStILFFBQVE7TUFFWixJQUFJLE9BQU9sQixJQUFJLElBQUksUUFBUSxFQUFFO1FBQzVCO1FBQ0EsSUFBSUEsSUFBSSxDQUFDM0gsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDdkUsTUFBTSxHQUFHLENBQUMsRUFBRTtVQUMvQnFGLGVBQWUsR0FBRzZHLElBQUksQ0FBQzNILEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsS0FBSyxDQUFDLFNBQVMsQ0FBQztVQUNyRDJILElBQUksR0FBR0EsSUFBSSxDQUFDM0gsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUN6QnRDLE9BQU8sR0FBRzhCLFFBQVEsQ0FBQ21JLElBQUksQ0FBQztVQUV4QixJQUFJQSxJQUFJLEtBQUssYUFBYSxFQUFFO1lBQzNCN0csZUFBZSxDQUFDOEcsSUFBSSxDQUFDMUgscUJBQUEsS0FBSSxFQUFBc0YsVUFBQSxFQUFZMUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDMUQ7UUFDRDs7UUFFQTtRQUNBLElBQUlnSSxXQUFXLEdBQUduQixJQUFJLENBQUMzSCxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ2pDMkgsSUFBSSxHQUFHLEVBQUU7O1FBRVQ7UUFBQSxJQUFBb0IsVUFBQSxHQUFBUiwwQkFBQSxDQUNjTyxXQUFXO1VBQUFFLE1BQUE7UUFBQTtVQUF6QixLQUFBRCxVQUFBLENBQUFOLENBQUEsTUFBQU8sTUFBQSxHQUFBRCxVQUFBLENBQUFMLENBQUEsSUFBQUMsSUFBQSxHQUNDO1lBQUEsSUFEUU0sQ0FBQyxHQUFBRCxNQUFBLENBQUFuTSxLQUFBO1lBQ1Q4SyxJQUFJLElBQUlzQixDQUFDLENBQUNDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxDQUFDLENBQUMsR0FBR0YsQ0FBQyxDQUFDRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1VBQUE7UUFBQyxTQUFBQyxHQUFBO1VBQUFOLFVBQUEsQ0FBQTlOLENBQUEsQ0FBQW9PLEdBQUE7UUFBQTtVQUFBTixVQUFBLENBQUFPLENBQUE7UUFBQTtNQUNqRDtNQUNBLElBQUlDLFFBQVEsR0FBRzVCLElBQUk7O01BRW5CO01BQ0EsSUFBSTtRQUNIO1FBQ0EsSUFBSSxPQUFPQSxJQUFJLElBQUksUUFBUSxFQUFFO1VBQzVCQSxJQUFJLEdBQUksT0FBTzdHLGVBQWUsSUFBSSxXQUFXLEdBQUksSUFBSXFFLHNDQUFLLENBQUN3QyxJQUFJLENBQUMsQ0FBQzFILEtBQUssRUFBRXBELEtBQUssRUFBRWEsT0FBTyxDQUFDLEdBQUcsSUFBSXlILHNDQUFLLENBQUN3QyxJQUFJLENBQUMsQ0FBQzFILEtBQUssRUFBRXBELEtBQUssRUFBRWlFLGVBQWUsRUFBRXBELE9BQU8sQ0FBQztVQUNqSmlLLElBQUksR0FBR0EsSUFBSSxDQUFDdkcsUUFBUSxDQUFDLENBQUM7VUFDdEJ5SCxRQUFRLEdBQUcsUUFBUTtVQUVuQixJQUFJLE9BQU9sQixJQUFJLENBQUMvRixrQkFBa0IsSUFBSSxTQUFTLEVBQUU7WUFDaERBLGtCQUFrQixHQUFHK0YsSUFBSSxDQUFDL0Ysa0JBQWtCO1VBQzdDO1FBQ0Q7UUFDQTtRQUFBLEtBQ0ssSUFBSSxPQUFPK0YsSUFBSSxJQUFJLFVBQVUsRUFBRTtVQUNuQyxJQUFJNkIsVUFBVTtVQUNkO1VBQ0EsSUFBSTdCLElBQUksQ0FBQ2xNLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDckI7WUFDQStOLFVBQVUsR0FBRzdCLElBQUksQ0FBQzFILEtBQUssRUFBRXBELEtBQUssQ0FBQztVQUNoQztVQUNBO1VBQUEsS0FDSyxJQUFJOEssSUFBSSxDQUFDbE0sTUFBTSxHQUFHLENBQUMsSUFBS2tNLElBQUksQ0FBQ2xNLE1BQU0sR0FBRyxDQUFDLElBQUlrTSxJQUFJLENBQUNsTSxNQUFNLElBQUksQ0FBRSxFQUFFO1lBQ2xFZ08sT0FBTyxDQUFDM00sS0FBSyxDQUFDLDZFQUE2RSxDQUFDO1VBQzdGO1VBQ0E7VUFBQSxLQUNLO1lBQ0owTSxVQUFVLEdBQUc3QixJQUFJLENBQUMsQ0FBQztVQUNwQjs7VUFFQTtVQUNBO1VBQ0EsSUFBSTNGLE9BQUEsQ0FBT3dILFVBQVUsTUFBSyxRQUFRLEVBQUU7WUFDbkNDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLHVFQUF1RSxFQUFFLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzNHO1VBQ0Q7VUFDQTtVQUFBLEtBQ0s7WUFDSixJQUFJL0ksSUFBSSxHQUFHbEIsTUFBTSxDQUFDa0IsSUFBSSxDQUFDNkksVUFBVSxDQUFDLENBQUNHLElBQUksQ0FBQyxDQUFDLENBQUNoRyxRQUFRLENBQUMsQ0FBQztZQUNwRCxJQUFJaUcsT0FBTyxHQUFHLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDRCxJQUFJLENBQUMsQ0FBQyxDQUFDaEcsUUFBUSxDQUFDLENBQUM7WUFFcEQsSUFBSXlDLE1BQU0sR0FBRzNHLE1BQU0sQ0FBQzJHLE1BQU0sQ0FBQ29ELFVBQVUsQ0FBQyxDQUFDRyxJQUFJLENBQUMsQ0FBQztZQUM3QyxJQUFJRSxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDO1lBRW5DLElBQUlsSixJQUFJLElBQUlpSixPQUFPLElBQUs1SCxPQUFBLENBQU9vRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUl5RCxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUk3SCxPQUFBLENBQU9vRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUl5RCxPQUFPLENBQUMsQ0FBQyxDQUFFLEVBQUU7Y0FDMUZKLE9BQU8sQ0FBQ0MsSUFBSSxDQUNYLGlFQUFpRSxFQUNqRUYsVUFBVSxFQUNWLGdCQUFnQixFQUNoQjtnQkFBQyxPQUFPLEVBQUF4SCxPQUFBLENBQVMsSUFBSTtnQkFBRSxTQUFTLEVBQUFBLE9BQUEsQ0FBUyxRQUFRO2NBQUEsQ0FDbEQsQ0FBQztjQUVEO1lBQ0Q7VUFDRDtVQUVBMkYsSUFBSSxHQUFHNkIsVUFBVTtVQUNqQlgsUUFBUSxHQUFHLFVBQVU7UUFDdEI7UUFDQTtRQUFBLEtBQ0s7VUFDSlksT0FBTyxDQUFDQyxJQUFJLG1CQUFBakwsTUFBQSxDQUFBdUQsT0FBQSxDQUF5QjJGLElBQUksMkJBQXNCLENBQUM7VUFDaEU7UUFDRDs7UUFFQTtRQUNBLElBQUksQ0FBQ0EsSUFBSSxDQUFDaEcsS0FBSyxFQUFFO1VBQ2hCekIscUJBQUEsS0FBSSxFQUFBeUYsT0FBQSxFQUFTNUYsR0FBRyxDQUNmOEksUUFBUSxJQUFJLFVBQVUsTUFBQXBLLE1BQUEsQ0FBTXdCLEtBQUssZUFBQXhCLE1BQUEsQ0FBWTJKLFlBQVksT0FBQTNKLE1BQUEsQ0FBUXdCLEtBQUssT0FBQXhCLE1BQUEsQ0FBSW1LLE1BQU0sQ0FBQzVJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxFQUNoRzJILElBQUksQ0FBQ2pLLE9BQ04sQ0FBQztVQUVELElBQUl5SyxPQUFPLEVBQUU7WUFDWmpJLHFCQUFBLEtBQUksRUFBQXlGLE9BQUEsRUFBUzVGLEdBQUcsQ0FDZjhJLFFBQVEsSUFBSSxVQUFVLE1BQUFwSyxNQUFBLENBQU13QixLQUFLLGVBQUF4QixNQUFBLENBQVkySixZQUFZLE9BQUEzSixNQUFBLENBQVF3QixLQUFLLE9BQUF4QixNQUFBLENBQUltSyxNQUFNLENBQUM1SSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUUsRUFDaEcySCxJQUFJLENBQUNqSyxPQUNOLENBQUM7VUFDRjtVQUVBMEssWUFBWSxFQUFFO1FBQ2Y7UUFDQUMsZ0JBQWdCLENBQUNULElBQUksQ0FBQ0QsSUFBSSxDQUFDaEcsS0FBSyxDQUFDO01BQ2xDLENBQUMsQ0FBQyxPQUFPMUcsQ0FBQyxFQUFFO1FBQ1g7UUFDQXdPLE9BQU8sQ0FBQ0MsSUFBSSx5QkFBQWpMLE1BQUEsQ0FBeUI4SyxRQUFRLG1CQUFBOUssTUFBQSxDQUFnQndCLEtBQUssV0FBUWhGLENBQUMsQ0FBQztNQUM3RTtNQUFDO0lBQ0Y7RUFBQyxTQUFBb08sR0FBQTtJQUFBZixTQUFBLENBQUFyTixDQUFBLENBQUFvTyxHQUFBO0VBQUE7SUFBQWYsU0FBQSxDQUFBZ0IsQ0FBQTtFQUFBO0VBRURwSixxQkFBQSxLQUFJLEVBQUFxRixXQUFBLEVBQWFxQyxJQUFJLENBQUMzSCxLQUFLLENBQUM7RUFDNUIsSUFBSSxDQUFDb0ksZ0JBQWdCLENBQUMzSCxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQ3BDUixxQkFBQSxLQUFJLEVBQUEwRixVQUFBLEVBQVkzRixLQUFLLENBQUMsR0FBR3BELEtBQUs7RUFFL0IsT0FBTyxPQUFPK0Usa0JBQWtCLElBQUksV0FBVyxHQUFHLElBQUksR0FBR0Esa0JBQWtCO0FBQzVFO0FBQUMsU0FBQWtJLGVBV2E3SixLQUFLLEVBQUU7RUFDcEIsSUFBSUEsS0FBSyxDQUFDRyxXQUFXLENBQUNDLElBQUksS0FBSyxRQUFRLEVBQUU7SUFDeEMsSUFBSUosS0FBSyxDQUFDZ0YsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUM1QixPQUFPLElBQUk7RUFDYixDQUFDLE1BQ0ksSUFBSS9FLHFCQUFBLEtBQUksRUFBQXNGLFVBQUEsRUFBWXZGLEtBQUssQ0FBQyxDQUFDRyxXQUFXLENBQUNDLElBQUksS0FBSyxPQUFPLEVBQUU7SUFDN0QsT0FBTyxJQUFJO0VBQ1o7RUFFQSxPQUFPLEtBQUs7QUFDYjs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZZRDtBQUN5RTtBQUNOOztBQUVuRTtBQUM2RDtBQUU3RCxJQUFJMEosVUFBVSxHQUFHO0VBQ2hCMUQsS0FBSyxFQUFFO0lBQ04sV0FBVyxFQUFFLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQztJQUNyQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQztJQUNoRSxXQUFXLEVBQUUsQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsQ0FBQztJQUNsRSxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLGVBQWUsQ0FBQztJQUNuRCxPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztJQUN2QyxTQUFTLEVBQUUsQ0FBQyxXQUFXLEVBQUUsdUJBQXVCO0VBQ2pELENBQUM7RUFDRDNJLE9BQU8sRUFBRTtJQUNSLFdBQVcsRUFBRTtNQUNaLFNBQVM7SUFDVixDQUFDO0lBQ0QsV0FBVyxFQUFFO01BQ1osU0FBUyxvQ0FBb0M7TUFDN0MsS0FBSyxnQ0FBZ0M7TUFDckMsS0FBSztJQUNOLENBQUM7SUFDRCxXQUFXLEVBQUU7TUFDWixLQUFLLGdDQUFnQztNQUNyQyxLQUFLO0lBQ04sQ0FBQztJQUNELFFBQVEsRUFBRTtNQUNULGdCQUFnQiw2QkFBNkI7TUFDN0MsZ0JBQWdCO0lBQ2pCLENBQUM7SUFDRCxPQUFPLEVBQUU7TUFDUixVQUFVLGtDQUFrQztNQUM1QyxPQUFPLDJDQUEyQztNQUNsRCxLQUFLO0lBQ04sQ0FBQztJQUNELFNBQVMsRUFBRTtNQUNWLFNBQVM7SUFDVjtFQUNEO0FBQ0QsQ0FBQztBQUVENUMsQ0FBQyxDQUFDLFlBQVc7RUFDWjtFQUNBb0sscUZBQVcsQ0FBQyxDQUFDOztFQUViO0VBQ0FwSyxDQUFDLFlBQVksQ0FBQyxDQUFDRSxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUNDLENBQUMsRUFBSztJQUNsQyxJQUFJNE0sR0FBRyxHQUFHL00sQ0FBQyxDQUFDRyxDQUFDLENBQUNFLGFBQWEsQ0FBQztJQUM1QixJQUFJNk8sS0FBSyxHQUFHbFAsQ0FBQyxDQUFDLGVBQWUsQ0FBQztJQUM5QixJQUFJbVAsS0FBSyxHQUFHblAsQ0FBQyxDQUFDLGVBQWUsQ0FBQztJQUU5QixJQUFJK00sR0FBRyxDQUFDcUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO01BQ3hCRixLQUFLLENBQUNHLElBQUksUUFBUSxDQUFDLENBQUNELElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO01BQzNDRCxLQUFLLENBQUNFLElBQUksUUFBUSxDQUFDLENBQUNELElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUNFLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQztJQUM5RSxDQUFDLE1BQ0k7TUFDSkosS0FBSyxDQUFDRyxJQUFJLFFBQVEsQ0FBQyxDQUFDRCxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDRSxXQUFXLENBQUMscUJBQXFCLENBQUM7TUFDN0VILEtBQUssQ0FBQ0UsSUFBSSxRQUFRLENBQUMsQ0FBQ0QsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7SUFDNUM7RUFDRCxDQUFDLENBQUMsQ0FBQ3ZPLE9BQU8sQ0FBQyxRQUFRLENBQUM7O0VBRXBCO0VBQ0FiLENBQUMsYUFBYSxDQUFDLENBQUNFLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQ0MsQ0FBQyxFQUFLO0lBQ25DLElBQUk0TSxHQUFHLEdBQUcvTSxDQUFDLENBQUNHLENBQUMsQ0FBQ0UsYUFBYSxDQUFDO0lBQzVCLElBQUlrUCxNQUFNLEdBQUd2UCxDQUFDLGFBQWEsQ0FBQztJQUM1QixJQUFJd1AsTUFBTSxHQUFHekMsR0FBRyxDQUFDck0sR0FBRyxDQUFDLENBQUM7SUFFdEI4TyxNQUFNLEdBQUdBLE1BQU0sQ0FBQ3JGLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQ3hKLE1BQU0sR0FBRyxDQUFDLEdBQUc2SCxRQUFRLENBQUNnSCxNQUFNLENBQUMsR0FBR2hILFFBQVEsQ0FBQytHLE1BQU0sQ0FBQzlPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUU5RjhPLE1BQU0sQ0FBQzlPLElBQUksQ0FBQyxLQUFLLEVBQUUrTyxNQUFNLENBQUM7RUFDM0IsQ0FBQyxDQUFDLENBQUMzTyxPQUFPLENBQUMsUUFBUSxDQUFDOztFQUVwQjtFQUNBYixDQUFDLGFBQWEsQ0FBQyxDQUFDRSxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUNDLENBQUMsRUFBSztJQUNuQyxJQUFJNE0sR0FBRyxHQUFHL00sQ0FBQyxDQUFDRyxDQUFDLENBQUNFLGFBQWEsQ0FBQztJQUM1QixJQUFJa1AsTUFBTSxHQUFHdlAsQ0FBQyxhQUFhLENBQUM7SUFDNUIsSUFBSXlQLE1BQU0sR0FBRzFDLEdBQUcsQ0FBQ3JNLEdBQUcsQ0FBQyxDQUFDO0lBRXRCK08sTUFBTSxHQUFHQSxNQUFNLENBQUN0RixLQUFLLENBQUMsVUFBVSxDQUFDLENBQUN4SixNQUFNLEdBQUcsQ0FBQyxHQUFHNkgsUUFBUSxDQUFDaUgsTUFBTSxDQUFDLEdBQUdqSCxRQUFRLENBQUMrRyxNQUFNLENBQUM5TyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFOUY4TyxNQUFNLENBQUM5TyxJQUFJLENBQUMsS0FBSyxFQUFFZ1AsTUFBTSxDQUFDO0VBQzNCLENBQUMsQ0FBQyxDQUFDNU8sT0FBTyxDQUFDLFFBQVEsQ0FBQzs7RUFFcEI7RUFDQWIsQ0FBQyxlQUFlLENBQUMsQ0FBQ0UsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFDQyxDQUFDLEVBQUs7SUFDckNBLENBQUMsQ0FBQ3VQLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCdlAsQ0FBQyxDQUFDd1AsZUFBZSxDQUFDLENBQUM7SUFFbkJySixRQUFRLENBQUN0RyxDQUFDLENBQUNHLENBQUMsQ0FBQ0UsYUFBYSxDQUFDLENBQUM7RUFDN0IsQ0FBQyxDQUFDOztFQUVGO0VBQ0FMLENBQUMsYUFBYSxDQUFDLENBQUNFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsQ0FBQyxFQUFLO0lBQ2xDSCxDQUFDLG1CQUFtQixDQUFDLENBQUNzUCxXQUFXLE9BQU8sQ0FBQztJQUN6Q3RQLENBQUMsU0FBUyxDQUFDLENBQUNzUCxXQUFXLHNCQUFzQixDQUFDO0lBQzlDdFAsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzRQLEtBQUssQ0FBQyxDQUFDO0lBRXBCNVAsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDWSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQzdCaVAsT0FBTyxjQUFjLENBQUMsQ0FDdEJQLFdBQVcsT0FBTyxDQUFDO0lBRXJCNU4scUZBQWlCLENBQUMsWUFBWSxDQUFDO0VBQ2hDLENBQUMsQ0FBQzs7RUFFRjtFQUNBMUIsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQ0MsRUFBRSxDQUFDLE9BQU8sMEJBQTBCLFVBQUNDLENBQUMsRUFBSztJQUN0RCxJQUFJMlAsR0FBRyxHQUFHOVAsQ0FBQyxDQUFDRyxDQUFDLENBQUNvUCxNQUFNLENBQUM7TUFBRXhDLEdBQUc7SUFFMUIsSUFBSSxPQUFPK0MsR0FBRyxDQUFDclAsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLFdBQVcsRUFDaERzTSxHQUFHLEdBQUcvTSxDQUFDLENBQUM4UCxHQUFHLENBQUNyUCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUVqQ3NNLEdBQUcsR0FBRytDLEdBQUc7SUFFVixJQUFJalEsTUFBTSxHQUFHa04sR0FBRyxDQUFDOEMsT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUNuQyxJQUFJRSxTQUFTLEdBQUdsUSxNQUFNLENBQUNnUSxPQUFPLENBQUMsV0FBVyxDQUFDO0lBQzNDLElBQUlHLE1BQU0sR0FBR2hRLENBQUMsb0JBQUEyRCxNQUFBLENBQW1COUQsTUFBTSxDQUFDWSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQUksQ0FBQztJQUV2RCxJQUFJWixNQUFNLENBQUNvUSxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7TUFDakNELE1BQU0sQ0FBQ0UsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDWixXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM3TyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztNQUM3RXFQLEdBQUcsQ0FBQ0ksUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDWixXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM3TyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztNQUMxRXNNLEdBQUcsQ0FBQ21ELFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQ1osV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDN08sSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7TUFDMUVaLE1BQU0sQ0FBQ3FRLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQ1osV0FBVyxDQUFDLFdBQVcsQ0FBQztNQUVyRGEsVUFBVSxDQUNUO1FBQUEsT0FBTUosU0FBUyxDQUFDSyxRQUFRLENBQUMsTUFBTSxDQUFDO01BQUEsR0FDaEMsR0FDRCxDQUFDO0lBQ0YsQ0FBQyxNQUNJLElBQUl2USxNQUFNLENBQUNvUSxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7TUFDdENGLFNBQVMsQ0FBQ0ssUUFBUSxDQUFDLE1BQU0sQ0FBQztNQUMxQkosTUFBTSxDQUFDRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUNaLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQzdPLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO01BQzdFcVAsR0FBRyxDQUFDSSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUNaLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQzdPLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO01BQzFFc00sR0FBRyxDQUFDbUQsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDWixXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM3TyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztNQUUxRVosTUFBTSxDQUFDcVEsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDWixXQUFXLENBQUMsV0FBVyxDQUFDO0lBQ3REO0VBQ0QsQ0FBQyxDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUZ6UCxNQUFNLENBQUN5RyxRQUFRLEdBQUcsVUFBUytKLElBQUksRUFBRTtFQUNoQztFQUNBLElBQUkxSyxNQUFNLEdBQUczRixDQUFDLFNBQVMsQ0FBQyxDQUFDc1EsR0FBRyx3QkFBd0IsQ0FBQztFQUNyRCxJQUFJQyxNQUFNLEdBQUd2USxDQUFDLGNBQWMsQ0FBQyxDQUFDc1EsR0FBRyx3QkFBd0IsQ0FBQztFQUMxRCxJQUFJRSxRQUFRLEdBQUd4USxDQUFDLGdCQUFnQixDQUFDLENBQUNzUSxHQUFHLHdCQUF3QixDQUFDOztFQUU5RDtFQUNBckIsVUFBVSxDQUFDM0QsTUFBTSxHQUFHK0UsSUFBSSxDQUFDSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7O0VBRWhEO0VBQ0EsSUFBSUMsWUFBWSxHQUFHLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQztFQUFDLElBQUExRSxLQUFBLFlBQUFBLE1BQUEsRUFDbEI7SUFBdkIsSUFBSW1DLENBQUMsR0FBQXdDLGFBQUEsQ0FBQXhFLEVBQUE7SUFDVDhDLFVBQVUsQ0FBQzFELEtBQUssQ0FBQzRDLENBQUMsQ0FBQyxDQUFDa0IsSUFBSSxDQUFDLFVBQUN6QyxDQUFDLEVBQUVYLENBQUMsRUFBSztNQUNsQyxJQUFJVyxDQUFDLENBQUN6QyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDdEIsSUFBSXlHLFNBQVMsR0FBR2hFLENBQUMsQ0FBQ3pDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFdkMsSUFBSSxDQUFDeEYsTUFBTSxDQUFDa0IsSUFBSSxDQUFDb0osVUFBVSxDQUFDM0QsTUFBTSxDQUFDLENBQUMxRixRQUFRLENBQUNnTCxTQUFTLENBQUMsRUFDdEQ7UUFFRDNCLFVBQVUsQ0FBQzFELEtBQUssQ0FBQzRDLENBQUMsQ0FBQyxDQUFDbEMsQ0FBQyxDQUFDLEdBQUdXLENBQUMsQ0FBQ2lFLE9BQU8sQ0FBQyxXQUFXLEVBQUU1QixVQUFVLENBQUMzRCxNQUFNLENBQUNzRixTQUFTLENBQUMsQ0FBQztNQUM5RTtJQUNELENBQUMsQ0FBQztFQUNILENBQUM7RUFYRCxTQUFBekUsRUFBQSxNQUFBd0UsYUFBQSxHQUFjRCxZQUFZLEVBQUF2RSxFQUFBLEdBQUF3RSxhQUFBLENBQUFoUSxNQUFBLEVBQUF3TCxFQUFBO0lBQUFILEtBQUE7RUFBQTtFQWExQixJQUFJOEUsU0FBUyxHQUFHLElBQUl6Rix1RUFBUyxDQUM1QjRELFVBQVUsQ0FBQzNELE1BQU0sRUFDakIyRCxVQUFVLENBQUMxRCxLQUFLLEVBQ2hCMEQsVUFBVSxDQUFDck0sT0FDWixDQUFDO0VBRUQsSUFBSWlKLGFBQWEsR0FBR2lGLFNBQVMsQ0FBQ2pGLGFBQWEsQ0FBQyxDQUFDO0VBQzdDLElBQUlDLFdBQVcsR0FBR2dGLFNBQVMsQ0FBQ2hGLFdBQVcsQ0FBQyxDQUFDOztFQUV6QztFQUNBbkcsTUFBTSxDQUFDMkosV0FBVyxDQUFDLHFCQUFxQixDQUFDO0VBRXpDaUIsTUFBTSxDQUFDTCxRQUFRLENBQUMsVUFBVSxDQUFDO0VBQzNCSyxNQUFNLENBQUNqQixXQUFXLENBQUMsWUFBWSxDQUFDO0VBRWhDa0IsUUFBUSxDQUFDTixRQUFRLENBQUMsWUFBWSxDQUFDO0VBQy9CTSxRQUFRLENBQUNsQixXQUFXLENBQUMsVUFBVSxDQUFDOztFQUVoQztFQUNBaUIsTUFBTSxDQUFDVixPQUFPLGNBQWMsQ0FBQyxDQUFDUixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUNDLFdBQVcsY0FBYyxDQUFDO0VBQ3pFa0IsUUFBUSxDQUFDWCxPQUFPLGNBQWMsQ0FBQyxDQUFDUixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUNhLFFBQVEsY0FBYyxDQUFDOztFQUV4RTtFQUNBbFEsQ0FBQyxDQUFDK1EsSUFBSSxDQUFDakYsV0FBVyxFQUFFLFVBQUNHLENBQUMsRUFBRVcsQ0FBQyxFQUFLO0lBQzdCNU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDWSxJQUFJLENBQUMsRUFBRSxDQUFDO0VBQ2hDLENBQUMsQ0FBQztFQUVGWixDQUFDLENBQUMrUSxJQUFJLENBQUNsRixhQUFhLEVBQUUsVUFBQ0ksQ0FBQyxFQUFFVyxDQUFDLEVBQUs7SUFDL0IsSUFBSW9FLG1CQUFtQixHQUFHaFIsQ0FBQyxvQkFBb0IsQ0FBQztJQUNoRGdSLG1CQUFtQixDQUFDRCxJQUFJLENBQUMsWUFBVztNQUNuQyxJQUFJaEUsR0FBRyxHQUFHL00sQ0FBQyxDQUFDLElBQUksQ0FBQztNQUVqQixJQUFJK00sR0FBRyxDQUFDdE0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMwSixLQUFLLEtBQUF4RyxNQUFBLENBQUtpSixDQUFDLE1BQUcsQ0FBQyxJQUFJLElBQUksRUFBRTtRQUN4REcsR0FBRyxDQUFDOEMsT0FBTyxjQUFjLENBQUMsQ0FDeEJSLElBQUksMEJBQTBCLENBQUMsQ0FDL0JpQixHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FDNUJoQixXQUFXLENBQUMsVUFBVSxDQUFDLENBQ3ZCWSxRQUFRLENBQUMsWUFBWSxDQUFDO01BQ3pCO01BQUM7SUFDRixDQUFDLENBQUM7SUFFRmMsbUJBQW1CLENBQUNwUSxJQUFJLENBQUMsWUFBVztNQUNuQyxJQUFJbU0sR0FBRyxHQUFHL00sQ0FBQyxDQUFDLElBQUksQ0FBQztNQUNqQixJQUFJK00sR0FBRyxDQUFDdE0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMwSixLQUFLLENBQUN5QyxDQUFDLENBQUMsRUFDdkNHLEdBQUcsQ0FBQ25NLElBQUksQ0FBQ2tRLFNBQVMsQ0FBQ2hMLEtBQUssQ0FBQzhHLENBQUMsQ0FBQyxDQUFDLENBQUNzRCxRQUFRLENBQUMsYUFBYSxDQUFDO0lBQ3RELENBQUMsQ0FBQztFQUVILENBQUMsQ0FBQzs7RUFFRjtFQUNBLElBQUlZLFNBQVMsQ0FBQ3JGLEtBQUssQ0FBQyxDQUFDLEVBQUU7SUFDdEIvSixtRkFBZSxDQUFDLDBCQUEwQixDQUFDO0lBQzNDO0VBQ0QsQ0FBQyxNQUNJO0lBQ0osSUFBSTRKLE1BQU0sR0FBR3dGLFNBQVMsQ0FBQ3hLLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLElBQUkySyxLQUFLLEdBQUczRixNQUFNLENBQUMyRixLQUFLO0lBRXhCLElBQUlDLEtBQUssR0FBRyxHQUFHO0lBQ2ZBLEtBQUssSUFBSUQsS0FBSyxDQUFDckwsUUFBUSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0I7SUFDaERzTCxLQUFLLElBQUlELEtBQUssQ0FBQ3JMLFFBQVEsQ0FBQyxTQUFTLENBQUMsYUFBYTtJQUMvQ3NMLEtBQUssSUFBSUQsS0FBSyxDQUFDckwsUUFBUSxDQUFDLE1BQU0sQ0FBQyw0RUFBNEU7SUFDM0dzTCxLQUFLLElBQUksR0FBRztJQUVaQSxLQUFLLElBQUksT0FBTzVGLE1BQU0sQ0FBQzZGLFNBQVMsSUFBSSxXQUFXLE9BQUF4TixNQUFBLENBQU8ySCxNQUFNLENBQUMzSyxNQUFNLGFBQUFnRCxNQUFBLENBQVUySCxNQUFNLENBQUM4RixTQUFTLE9BQUF6TixNQUFBLENBQUkySCxNQUFNLENBQUMrRixTQUFTLE1BQUc7SUFFcEhyUixDQUFDLG9CQUFvQixDQUFDLENBQ3BCWSxJQUFJLENBQUMsSUFBSTBRLE9BQU8sQ0FBQ0osS0FBSyxDQUFDLENBQUNLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FDOUIxQixPQUFPLGVBQWUsQ0FBQyxDQUN2QkssUUFBUSxPQUFPLENBQUMsQ0FDaEJiLElBQUksdUJBQXVCLENBQUMsQ0FDNUJhLFFBQVEsV0FBVyxDQUFDLENBQUNaLFdBQVcsV0FBVyxDQUFDLENBQzVDTyxPQUFPLFVBQVUsQ0FBQyxDQUNsQkssUUFBUSxZQUFZLENBQUMsQ0FBQ1osV0FBVyxZQUFZLENBQUM7SUFFaEQsSUFBSWtDLG1CQUFtQixHQUFHeFIsQ0FBQyxtQkFBbUIsQ0FBQztJQUMvQyxJQUFJeVIsT0FBTyxHQUFHRCxtQkFBbUIsQ0FBQ25DLElBQUksbUJBQW1CLENBQUM7SUFDMUQsSUFBSW9DLE9BQU8sQ0FBQzlRLE1BQU0sSUFBSSxDQUFDLEVBQUc7TUFDekI4USxPQUFPLEdBQUd6UixDQUFDLG9NQUVWLENBQUM7TUFFRndSLG1CQUFtQixDQUFDalIsTUFBTSxDQUFDa1IsT0FBTyxDQUFDO01BQ25DdEIsVUFBVSxDQUFDO1FBQUEsT0FBTXNCLE9BQU8sQ0FBQ25DLFdBQVcsU0FBUyxDQUFDO01BQUEsR0FBRSxJQUFJLENBQUM7TUFFckQsSUFBSVMsU0FBUyxHQUFHL1AsQ0FBQyxDQUFDeVIsT0FBTyxDQUFDaFIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUNvUCxPQUFPLENBQUMsV0FBVyxDQUFDO01BQ25FLElBQUlFLFNBQVMsQ0FBQ3BQLE1BQU0sR0FBRyxDQUFDLEVBQ3ZCb1AsU0FBUyxDQUFDSyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQzVCLENBQUMsTUFDSTtNQUNKLElBQUlMLFVBQVMsR0FBRy9QLENBQUMsQ0FBQ3lSLE9BQU8sQ0FBQ2hSLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDb1AsT0FBTyxDQUFDLFdBQVcsQ0FBQztNQUNuRUUsVUFBUyxDQUFDSyxRQUFRLENBQUMsTUFBTSxDQUFDO01BRTFCLElBQUlMLFVBQVMsQ0FBQ3BQLE1BQU0sR0FBRyxDQUFDLEVBQ3ZCd1AsVUFBVSxDQUNUO1FBQUEsT0FBTXNCLE9BQU8sQ0FBQ3ZCLFFBQVEsV0FBVyxDQUFDLENBQUNaLFdBQVcsV0FBVyxDQUFDO01BQUEsR0FBRSxHQUM3RCxDQUFDO0lBQ0g7RUFDRDtBQUNELENBQUM7Ozs7Ozs7Ozs7O0FDelFZO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDakxBLGVBQWUsbUJBQU8sQ0FBQyw0Q0FBSztBQUM1QixlQUFlLG1CQUFPLENBQUMsa0RBQVE7QUFDL0I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZUFBZTtBQUM1QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLGdCQUFnQjtBQUM3QixjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDLE9BQU87QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQztBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZ0JBQWdCO0FBQzdCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0Esc0JBQXNCLHNCQUFzQjtBQUM1QztBQUNBO0FBQ0E7QUFDQSwwQkFBMEIscUJBQXFCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3BRQSxrQkFBa0IsbUJBQU8sQ0FBQyw4Q0FBUTtBQUNsQyxrQkFBa0IsbUJBQU8sQ0FBQyxnREFBUztBQUNuQyxrQkFBa0IsbUJBQU8sQ0FBQyw4Q0FBUTtBQUNsQyxrQkFBa0IsbUJBQU8sQ0FBQyx3REFBYTs7O0FBR3ZDO0FBQ0E7QUFDQSxjQUFjLDRCQUE0Qjs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EseURBQXlELE1BQU07QUFDL0Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsK0NBQStDOztBQUV6RTtBQUNBLGNBQWM7QUFDZCwwQkFBMEIsMENBQTBDO0FBQ3BFO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQSxZQUFZO0FBQ1o7QUFDQSwyQ0FBMkMsRUFBRTtBQUM3QyxzQ0FBc0MsTUFBTTtBQUM1Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELE1BQU07QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELElBQUk7QUFDekQsYUFBYTtBQUNiLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9COzs7Ozs7Ozs7OztBQ3pScEIsY0FBYyxtQkFBTyxDQUFDLGdEQUFTO0FBQy9CLG9CQUFvQixZQUFZLGtDQUFrQztBQUNsRSx1QkFBdUIsWUFBWSxrQ0FBa0M7QUFDckUsYUFBYSxZQUFZLGtDQUFrQztBQUMzRCxXQUFXLFlBQVksa0NBQWtDOzs7Ozs7Ozs7OztBQ0p6RCxjQUFjLG1CQUFPLENBQUMsZ0RBQVM7O0FBRS9CLHNCQUFzQixzQ0FBc0M7O0FBRTVEO0FBQ0E7QUFDQSxNQUFNLDZCQUE2QjtBQUNuQyxNQUFNLHNDQUFzQztBQUM1QyxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSw0QkFBNEI7QUFDbEMsTUFBTSw2QkFBNkI7QUFDbkMsTUFBTSw2QkFBNkI7QUFDbkMsTUFBTSw2QkFBNkI7QUFDbkMsTUFBTSw2QkFBNkI7QUFDbkMsTUFBTSw2QkFBNkI7QUFDbkMsTUFBTSw4QkFBOEI7QUFDcEMsTUFBTSwrQkFBK0I7QUFDckMsTUFBTSx5Q0FBeUM7QUFDL0MsTUFBTSwrQkFBK0I7QUFDckMsTUFBTSwrQkFBK0I7QUFDckMsTUFBTSwrQkFBK0I7QUFDckMsTUFBTSwrQkFBK0I7QUFDckMsTUFBTSxnQ0FBZ0M7QUFDdEMsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sNkJBQTZCO0FBQ25DLE1BQU0sNkJBQTZCO0FBQ25DLE1BQU0sK0JBQStCO0FBQ3JDLE1BQU0sK0JBQStCO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFlBQVksMkNBQTJDO0FBQ3BFLGdCQUFnQixZQUFZLDBDQUEwQztBQUN0RSxZQUFZLFlBQVksMENBQTBDO0FBQ2xFLGVBQWUsWUFBWSx5Q0FBeUM7QUFDcEUsa0JBQWtCLFlBQVksZ0RBQWdEO0FBQzlFLHFCQUFxQixZQUFZLCtDQUErQztBQUNoRixlQUFlLFlBQVksK0NBQStDOzs7Ozs7Ozs7OztBQ2hEMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVEEsY0FBYyxtQkFBTyxDQUFDLGdEQUFTO0FBQy9CLGNBQWMsbUJBQU8sQ0FBQyw4Q0FBUTs7O0FBRzlCO0FBQ0EsZUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZO0FBQ1o7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxvREFBb0QsRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOOztBQUVBLE1BQU07QUFDTjs7QUFFQSxNQUFNO0FBQ047O0FBRUEsTUFBTTtBQUNOOztBQUVBLE1BQU07QUFDTjs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQjtBQUNBLGFBQWE7QUFDYjtBQUNBOzs7Ozs7Ozs7OztBQzNHQSxlQUFlLEtBQW9ELG9CQUFvQixDQUEyRSxDQUFDLGlCQUFpQixhQUFhLGNBQWMsaUZBQWlGLGdCQUFnQixhQUFhLG9HQUFvRyxLQUFLLGdCQUFnQiw4RUFBOEUsZ0JBQWdCLFlBQVksV0FBVyxLQUFLLFdBQVcsK0dBQStHLGtCQUFrQix1Q0FBdUMsYUFBYSxvQ0FBb0MsWUFBWSxtQkFBbUIsS0FBSyxxQkFBcUIsa0VBQWtFLFNBQVMsd0JBQXdCLGNBQWMsaUVBQWlFLDZDQUE2QyxLQUFLLGdCQUFnQiw4Q0FBOEMsdUJBQXVCLE9BQU8sYUFBYSw0REFBNEQsbUNBQW1DLHFDQUFxQyxJQUFJLCtFQUErRSxNQUFNLFNBQVMsVUFBVSxrQkFBa0IsK0NBQStDLGFBQWEsa0JBQWtCLGdDQUFnQyw2QkFBNkIsd0JBQXdCLGdCQUFnQiwrREFBK0Qsb0dBQW9HLFNBQVMsTUFBTSxrQkFBa0IsOEVBQThFLGdCQUFnQixLQUFLLDREQUE0RCxFQUFFLFNBQVMsTUFBTSxNQUFNLHVDQUF1QyxvQ0FBb0MsWUFBWSxjQUFjLDRDQUE0QyxjQUFjLHNDQUFzQyxZQUFZLEVBQUUsY0FBYyxxQ0FBcUMsZ0JBQWdCLHlKQUF5SixjQUFjLHlDQUF5QyxjQUFjLDZDQUE2QyxjQUFjLGlDQUFpQyxjQUFjLHlEQUF5RCxhQUFhLDREQUE0RCxjQUFjLFVBQVUsaUNBQWlDLGNBQWMsd0JBQXdCLGFBQWEsa0JBQWtCLGFBQWEsaUJBQWlCLGFBQWEsa0JBQWtCLGFBQWEsb0JBQW9CLGFBQWEsOEJBQThCLGFBQWEsa0JBQWtCLGFBQWEsOEJBQThCLGFBQWEsa0NBQWtDLGFBQWEsdURBQXVELGFBQWEsb0RBQW9ELGFBQWEsK0JBQStCLGFBQWEsc0RBQXNELGFBQWEsb0JBQW9CLGFBQWEsbUJBQW1CLGFBQWEsbUJBQW1CLGFBQWEsa0NBQWtDLGFBQWEsa0JBQWtCLGFBQWEsd0dBQXdHLG9HQUFvRyx5VEFBeVQsd0NBQXdDLEVBQUUsbUJBQW1CLGlCQUFpQixXQUFXLHVDQUF1QyxTQUFTLGlDQUFpQyxhQUFhLEVBQUUsYUFBYSxnRUFBZ0UsZ0JBQWdCLGdJQUFnSSxpQkFBaUIsNERBQTRELGlCQUFpQixHQUFHLGdCQUFnQixNQUFNLDZCQUE2QixXQUFXLDBDQUEwQyxVQUFVLGtCQUFrQixRQUFRLDhDQUE4QyxrR0FBa0csbUNBQW1DLGlNQUFpTSx3QkFBd0IsbUNBQW1DLHFFQUFxRSxlQUFlLDBDQUEwQyxvQkFBb0IsaUNBQWlDLGtCQUFrQiwwRUFBMEUsZ0JBQWdCLFdBQVcsaUNBQWlDLFNBQVMsNDVCQUE0NUIsMERBQTBELEtBQUssMEJBQTBCLGlCQUFpQixrQkFBa0IsVUFBVSx5REFBeUQsdUVBQXVFLG9JQUFvSSxpRUFBaUUsOEJBQThCLGVBQWUsTUFBTSw0REFBNEQsbUJBQW1CLGtGQUFrRixnQ0FBZ0MsMkNBQTJDLDZDQUE2QyxFQUFFLG1CQUFtQiwwSUFBMEksZUFBZSw4RUFBOEUsZUFBZSx1QkFBdUIscUJBQXFCLHVDQUF1QyxtQkFBbUIsZ0JBQWdCLGVBQWUsd0NBQXdDLGVBQWUsMEpBQTBKLGdCQUFnQixlQUFlLG9FQUFvRSxrRkFBa0Ysd0VBQXdFLE1BQU0sY0FBYywrREFBK0QsZUFBZSxtRkFBbUYsaUJBQWlCLDRFQUE0RSxpQkFBaUIsa0NBQWtDLHNKQUFzSixpREFBaUQsMEZBQTBGLCtEQUErRCxtRUFBbUUsNEhBQTRILHdCQUF3QixXQUFXLGtCQUFrQixXQUFXLGtCQUFrQixZQUFZLHNCQUFzQixtREFBbUQsZ0JBQWdCLHlFQUF5RSw4dURBQTh1RCw2SkFBNkosc3ZCQUFzdkIsc0JBQXNCLHdCQUF3QixrQ0FBa0MsRUFBRSxrQkFBa0IsbUNBQW1DLGtCQUFrQix1Q0FBdUMsT0FBTyxzQ0FBc0Msb0NBQW9DLGVBQWUsaUJBQWlCLHlDQUF5Qyx3R0FBd0cseUZBQXlGLFNBQVMsR0FBRyxtQkFBbUIsd09BQXdPLGlCQUFpQixjQUFjLCtsQkFBK2xCLGlCQUFpQix1RUFBdUUsbUJBQW1CLFFBQVEsNE5BQTROLFFBQVEsaUVBQWlFLG1GQUFtRixtTUFBbU0scUNBQXFDLDRCQUE0QixNQUFNLEVBQUUsa0JBQWtCLGdCQUFnQiw4QkFBOEIsWUFBWSxzQkFBc0IsS0FBSywyQkFBMkIsZ0VBQWdFLDZEQUE2RCxnQkFBZ0Isa0JBQWtCLHlDQUF5QyxnQkFBZ0IsZ0JBQWdCLGlCQUFpQixPQUFPLG1FQUFtRSw0UEFBNFAsdUJBQXVCLDJCQUEyQix3QkFBd0IsMkRBQTJELDRFQUE0RSx5QkFBeUIsTUFBTSw2S0FBNkssc0JBQXNCLDBCQUEwQiwyQkFBMkIseUJBQXlCLDBEQUEwRCwwQkFBMEIsaUNBQWlDLDJCQUEyQix1Q0FBdUMsY0FBYywwR0FBMEcsTUFBTSxtSEFBbUgsa0NBQWtDLDJDQUEyQyxhQUFhLHdDQUF3QyxNQUFNLGlCQUFpQixnQkFBZ0Isa01BQWtNLHFCQUFxQiwrQ0FBK0MsK0NBQStDLGNBQWMsZ0RBQWdELGlCQUFpQixVQUFVLCtEQUErRCx1QkFBdUIsMEVBQTBFLDRNQUE0TSwrRUFBK0UsMk9BQTJPLEVBQUUsaUJBQWlCLFlBQVkscVZBQXFWLFVBQVUsNEJBQTRCLHNLQUFzSyxnUUFBZ1EsaUJBQWlCLFVBQVUsc1hBQXNYLGNBQWMsd0JBQXdCLHFCQUFxQixzQ0FBc0MsMkNBQTJDLGVBQWUscUtBQXFLLFdBQVcsaUNBQWlDLGtCQUFrQixza0JBQXNrQixrQ0FBa0MsV0FBVyxrQkFBa0IsZ0JBQWdCLDBEQUEwRCwwSEFBMEgsV0FBVyw2Q0FBNkMsdURBQXVELGdCQUFnQix1RUFBdUUsd0JBQXdCLHNSQUFzUixlQUFlLG1CQUFtQixzQkFBc0IsK05BQStOLGVBQWUsK0JBQStCLGlCQUFpQixzQ0FBc0MsNkNBQTZDLG1LQUFtSyxtREFBbUQsRUFBRSxjQUFjLGdDQUFnQyx1REFBdUQsMERBQTBELHFFQUFxRSxvRUFBb0UscUJBQXFCLGNBQWMsZUFBZSx5QkFBeUIsZ0JBQWdCLFNBQVMsYUFBYSxlQUFlLG1CQUFtQixnQkFBZ0IsZ0NBQWdDLHdCQUF3Qiw2QkFBNkIsV0FBVyxHQUFHLGVBQWUsa0RBQWtELGVBQWUsYUFBYSxlQUFlLHFMQUFxTCxNQUFNLFFBQVEsOElBQThJLHlFQUF5RSxZQUFZLHlFQUF5RSxlQUFlLG9sQkFBb2xCLGdVQUFnVSxvQ0FBb0MsMFlBQTBZLDRwQkFBNHBCLHVLQUF1SyxvS0FBb0sscURBQXFELHlCQUF5QixtREFBbUQsU0FBUyxnRkFBZ0YsT0FBTyxxSUFBcUksY0FBYyxzQkFBc0IsZUFBZSxzQ0FBc0Msd0JBQXdCLHdCQUF3Qix3QkFBd0Isb0hBQW9ILDJCQUEyQixpTkFBaU4sd0NBQXdDLGlCQUFpQiw4Q0FBOEMsSUFBSSxzQkFBc0IsaUJBQWlCLG1CQUFtQixtQkFBbUIsZUFBZSw0R0FBNEcsMENBQTBDLGFBQWEscUNBQXFDLFlBQVksTUFBTSxnQ0FBZ0MsYUFBYSxrR0FBa0csRUFBRSxhQUFhLHlDQUF5QyxhQUFhLGdDQUFnQyxzREFBc0QsUUFBUSxLQUFLLE9BQU8sbUJBQW1CLGdDQUFnQyxXQUFXLEtBQUssZ0JBQWdCLFdBQVcsU0FBUywrQkFBK0IsaUJBQWlCLGtHQUFrRyxpREFBaUQsa0JBQWtCLEVBQUUsUUFBUSxRQUFRLEVBQUUsSUFBSSxFQUFFLCtDQUErQyxrREFBa0QsNkJBQTZCLCtCQUErQix5REFBeUQsNkNBQTZDLG9EQUFvRCxpQkFBaUIsOEJBQThCLDJCQUEyQixlQUFlLHlCQUF5QixtQkFBbUIsMkJBQTJCLDBDQUEwQyw2QkFBNkIsNklBQTZJLEVBQUUsY0FBYyxRQUFRLDRaQUE0WixjQUFjLHNRQUFzUSxvQ0FBb0MsZ0VBQWdFLG9EQUFvRCxzQ0FBc0MsVUFBVSxjQUFjLDZEQUE2RCxjQUFjLGdCQUFnQix1RkFBdUYsa0JBQWtCLDZKQUE2SixlQUFlLFlBQVksMkJBQTJCLFFBQVEsMkJBQTJCLDZDQUE2QyxnQkFBZ0IscUJBQXFCLHVGQUF1RixnQkFBZ0Isc0VBQXNFLGdCQUFnQixxQ0FBcUMsS0FBSyxnQ0FBZ0MscUJBQXFCLG1DQUFtQyxlQUFlLG9FQUFvRSxrQ0FBa0MsdWhCQUF1aEIsd01BQXdNLDZHQUE2RyxlQUFlLGdCQUFnQixzT0FBc08sZUFBZSxtQkFBbUIsMENBQTBDLElBQUksMENBQTBDLElBQUksbUJBQW1CLDhFQUE4RSxvRUFBb0UsdUJBQXVCLHlFQUF5RSx3QkFBd0IsMEZBQTBGLDZGQUE2RixFQUFFLGtCQUFrQixzQkFBc0IsdUNBQXVDLEdBQUcsbUJBQW1CLHlCQUF5QixzQkFBc0IsZ0JBQWdCLEVBQUUsaUJBQWlCLGVBQWUsb0ZBQW9GLFdBQVcsb0JBQW9CLGtCQUFrQixrQkFBa0IsZ0JBQWdCLHdFQUF3RSxhQUFhLDZCQUE2Qiw4SEFBOEgsRUFBRSw0QkFBNEIsbUhBQW1ILEVBQUUsaUNBQWlDLG1CQUFtQix3RUFBd0UsRUFBRSxvQ0FBb0MsZ0VBQWdFLEVBQUUsaUNBQWlDLHFCQUFxQixLQUFLLE9BQU8sb0JBQW9CLHNEQUFzRCxLQUFLLHlFQUF5RSxtQkFBbUIsaURBQWlELE1BQU0sUUFBUSxLQUFLLDhGQUE4RixlQUFlLFFBQVEsMERBQTBELHNDQUFzQyxpaUJBQWlpQixlQUFlLGdCQUFnQixpR0FBaUcsdURBQXVELGdDQUFnQyxRQUFRLG9GQUFvRix1QkFBdUIsc0RBQXNELHlKQUF5SixxSEFBcUgsZUFBZSxVQUFVLDRFQUE0RSxpQkFBaUIsY0FBYyx1QkFBdUIsRUFBRSxtQkFBbUIsVUFBVSw0RUFBNEUsWUFBWSwrREFBK0QsU0FBUywrREFBK0QsdUJBQXVCLHVEQUF1RCwyRkFBMkYsSUFBSSxnQkFBZ0IsU0FBUyxnRUFBZ0Usb0NBQW9DLDZCQUE2Qiw0UEFBNFAsSUFBSSxnQkFBZ0IsUUFBUSxpQ0FBaUMsMFNBQTBTLGdCQUFnQixRQUFRLGdDQUFnQyxtTEFBbUwsZ0JBQWdCLFFBQVEsaUNBQWlDLDJTQUEyUywwQ0FBMEMsbUNBQW1DLDBCQUEwQixnQkFBZ0IsNENBQTRDLG9CQUFvQixLQUFLLGtCQUFrQixXQUFXLFlBQVksZ0NBQWdDLDJEQUEyRCxTQUFTLGdCQUFnQix3R0FBd0csK0NBQStDLDJHQUEyRyxFQUFFLGtCQUFrQixvQ0FBb0MsME9BQTBPLEVBQUUsa0JBQWtCLG1EQUFtRCxvQkFBb0IscURBQXFELG1CQUFtQixFQUFFLGtCQUFrQiwwRkFBMEYsb0JBQW9CLE1BQU0sbVlBQW1ZLGNBQWMsRUFBRSxvQkFBb0Isc0dBQXNHLDBEQUEwRCw0SkFBNEosZ0JBQWdCLHFCQUFxQixnQkFBZ0IsOEJBQThCLGdCQUFnQixnRkFBZ0Ysa0JBQWtCLGNBQWMsOEJBQThCLFVBQVUsaUZBQWlGLHFCQUFxQix3SkFBd0osa0JBQWtCLG1CQUFtQix1Q0FBdUMseUZBQXlGLG9CQUFvQix3RkFBd0YsRUFBRSxLQUFLLHVCQUF1QixrQkFBa0IsdUNBQXVDLGdFQUFnRSxxQkFBcUIsc0JBQXNCLG9CQUFvQixzSEFBc0gsc0JBQXNCLFlBQVksWUFBWSx1QkFBdUIsb0JBQW9CLHNCQUFzQixzRkFBc0YsMkVBQTJFLGlDQUFpQyw4RUFBOEUsRUFBRSw4QkFBOEIsd0JBQXdCLGtCQUFrQixTQUFTLHdFQUF3RSx3Q0FBd0MscUNBQXFDLFdBQVcsd0NBQXdDLElBQUksa0JBQWtCLHNDQUFzQyxvQkFBb0Isb0JBQW9CLG1CQUFtQixrQkFBa0IsZ0JBQWdCLDRCQUE0Qix5QkFBeUIsd0JBQXdCLHVEQUF1RCxNQUFNLG1KQUFtSixvQkFBb0IsbURBQW1ELGtEQUFrRCxtQkFBbUIseUVBQXlFLEVBQUUsb0JBQW9CLHdFQUF3RSwyQ0FBMkMsbUJBQW1CLHFDQUFxQyxpQ0FBaUMsRUFBRSxnQkFBZ0Isb0JBQW9CLEVBQUUsb0JBQW9CLHVHQUF1Ryw4Q0FBOEMsbUJBQW1CLHFEQUFxRCxXQUFXLDRIQUE0SCw0QkFBNEIsb0xBQW9MLG9CQUFvQix5SkFBeUosa0JBQWtCLGtDQUFrQyxXQUFXLGlCQUFpQixJQUFJLE1BQU0sdUVBQXVFLGdCQUFnQixrS0FBa0ssb0JBQW9CLG1EQUFtRCxvQkFBb0IsMkJBQTJCLDRCQUE0Qiw0R0FBNEcsc0JBQXNCLCtCQUErQixrQ0FBa0MsK0RBQStELGdCQUFnQixtQ0FBbUMsOEJBQThCLG9GQUFvRixvQkFBb0IsZ0NBQWdDLDRCQUE0Qix5RUFBeUUsaUJBQWlCLGtCQUFrQiw0RUFBNEUsZUFBZSxlQUFlLHVEQUF1RCxJQUFJLGFBQWEsMEJBQTBCLDJDQUEyQywyREFBMkQsdURBQXVELGVBQWUsSUFBSSxtQkFBbUIsK0JBQStCLGNBQWMsY0FBYyx5QkFBeUIsRUFBRSxZQUFZLGtFQUFrRSw2RUFBNkUsUUFBUSxpQ0FBaUMsMkZBQTJGLFFBQVEsbUNBQW1DLCtDQUErQyxNQUFNLGtDQUFrQyxrQkFBa0IscU1BQXFNLGlDQUFpQyxtRUFBbUUsaUJBQWlCLG9LQUFvSyxpQ0FBaUMsK09BQStPLHdCQUF3QixFQUFFLEVBQUUsZUFBZSxPQUFPLHNLQUFzSyw4QkFBOEIsdUJBQXVCLFVBQVUsNENBQTRDLDRCQUE0QiwyREFBMkQsMENBQTBDLElBQUksa0JBQWtCLHFFQUFxRSxrQkFBa0Isb01BQW9NLGVBQWUsdUdBQXVHLGVBQWUsNkZBQTZGLGVBQWUsK0VBQStFLHNCQUFzQixnQ0FBZ0Msa0JBQWtCLHNEQUFzRCxrQ0FBa0MsOERBQThELDZFQUE2RSwwREFBMEQsMkJBQTJCLDBEQUEwRCx3QkFBd0IsOEJBQThCLHlCQUF5Qiw4QkFBOEIsbUNBQW1DLHVEQUF1RCw0VkFBNFYsbUNBQW1DLDRCQUE0QiwrSkFBK0osNkJBQTZCLDJDQUEyQyxtQkFBbUIsZ0VBQWdFLGNBQWMscVFBQXFRLG9CQUFvQixxQ0FBcUMscUxBQXFMLFNBQVMsbUNBQW1DLCtWQUErVixRQUFRLDBFQUEwRSxRQUFRLFVBQVUsMkNBQTJDLEVBQUUscUJBQXFCLHVEQUF1RCwwT0FBME8sZ0JBQWdCLGFBQWEseUNBQXlDLG1QQUFtUCw4Q0FBOEMsSUFBSSxzQkFBc0Isc0RBQXNELDhCQUE4QixRQUFRLG1EQUFtRCxFQUFFLDBCQUEwQix3QkFBd0IsYUFBYSw2QkFBNkIscUNBQXFDLEVBQUUsZ0NBQWdDLHdDQUF3QyxLQUFLLEdBQUcsOERBQThELGlCQUFpQix3Q0FBd0MsMENBQTBDLFVBQVUscUJBQXFCLG9DQUFvQyxTQUFTLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxlQUFlOzs7Ozs7VUNBeHg5QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7OztBQ05BO0FBQ0F6UCxNQUFNLENBQUN5UixPQUFPLEdBQUd2UixtQkFBTyxDQUFDLG1FQUFzQixDQUFDOztBQUVoRDtBQUNBQSxtQkFBTyxDQUFDLDhFQUFvQyxDQUFDOztBQUU3QztBQUNBQSxtQkFBTyxDQUFDLDJEQUFZLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dlbmVyYXRvcnMvLi9zcmMvanMvdXRpbC9jb3B5LXRvLWNsaXBib2FyZC5qcyIsIndlYnBhY2s6Ly9nZW5lcmF0b3JzLy4vc3JjL2pzL3V0aWwvc3dhbC1mbGFzaC9zd2FsLWZsYXNoLm1vZC5qcyIsIndlYnBhY2s6Ly9nZW5lcmF0b3JzLy4vc3JjL2pzL3V0aWwvdW5pcXVlLWFycmF5L3VuaXF1ZS1hcnJheS5tb2QuanMiLCJ3ZWJwYWNrOi8vZ2VuZXJhdG9ycy8uL3NyYy9qcy91dGlsL3ZhbGlkYXRvci9NZXNzYWdlQmFnLmpzIiwid2VicGFjazovL2dlbmVyYXRvcnMvLi9zcmMvanMvdXRpbC92YWxpZGF0b3IvUnVsZXMuanMiLCJ3ZWJwYWNrOi8vZ2VuZXJhdG9ycy8uL3NyYy9qcy91dGlsL3ZhbGlkYXRvci9WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vZ2VuZXJhdG9ycy8uL3NyYy9tb2R1bGVzL3N0cmluZy1nZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ2VuZXJhdG9ycy8uL25vZGVfbW9kdWxlcy9kcmFuZ2UvbGliL2luZGV4LmpzIiwid2VicGFjazovL2dlbmVyYXRvcnMvLi9ub2RlX21vZHVsZXMvcmFuZGV4cC9saWIvcmFuZGV4cC5qcyIsIndlYnBhY2s6Ly9nZW5lcmF0b3JzLy4vbm9kZV9tb2R1bGVzL3JldC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ2VuZXJhdG9ycy8uL25vZGVfbW9kdWxlcy9yZXQvbGliL3Bvc2l0aW9ucy5qcyIsIndlYnBhY2s6Ly9nZW5lcmF0b3JzLy4vbm9kZV9tb2R1bGVzL3JldC9saWIvc2V0cy5qcyIsIndlYnBhY2s6Ly9nZW5lcmF0b3JzLy4vbm9kZV9tb2R1bGVzL3JldC9saWIvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vZ2VuZXJhdG9ycy8uL25vZGVfbW9kdWxlcy9yZXQvbGliL3V0aWwuanMiLCJ3ZWJwYWNrOi8vZ2VuZXJhdG9ycy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9kaXN0L3N3ZWV0YWxlcnQyLm1pbi5qcyIsIndlYnBhY2s6Ly9nZW5lcmF0b3JzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dlbmVyYXRvcnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dlbmVyYXRvcnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nZW5lcmF0b3JzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2VuZXJhdG9ycy8uL3NyYy9tb2R1bGVzL3N0cmluZy1nZW5lcmF0b3Ivc2NyaXB0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpZiAoIXdpbmRvdy5Td2FsKVxyXG5cdHdpbmRvdy5Td2FsID0gcmVxdWlyZShcIm5vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9kaXN0L3N3ZWV0YWxlcnQyLm1pbi5qc1wiKTtcclxuXHJcbiQoKCkgPT4ge1xyXG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGBbZGF0YS1jb3B5LXRhcmdldF0sIFtkYXRhLWNvcHktdGV4dF0sIFtkYXRhLWNvcHldYCwgKGUpID0+IHtcclxuXHRcdGxldCBlbGVtZW50ID0gZS5jdXJyZW50VGFyZ2V0O1xyXG5cclxuXHRcdGxldCB0ZW1wID0gJChcIjxpbnB1dD5cIik7XHJcblx0XHQkKFwiYm9keVwiKS5hcHBlbmQodGVtcCk7XHJcblxyXG5cdFx0bGV0IHRleHRUb0NvcHk7XHJcblx0XHRpZiAodHlwZW9mICQoZWxlbWVudCkuYXR0cignZGF0YS1jb3B5LXRhcmdldCcpICE9ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdGlmICgkKCQoZWxlbWVudCkuYXR0cignZGF0YS1jb3B5LXRhcmdldCcpKS52YWwoKS5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHRleHRUb0NvcHkgPSAkKCQoZWxlbWVudCkuYXR0cignZGF0YS1jb3B5LXRhcmdldCcpKS52YWwoKTtcclxuXHRcdFx0ZWxzZSBpZiAoJCgkKGVsZW1lbnQpLmF0dHIoJ2RhdGEtY29weS10YXJnZXQnKSkudGV4dCgpLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0dGV4dFRvQ29weSA9ICQoJChlbGVtZW50KS5hdHRyKCdkYXRhLWNvcHktdGFyZ2V0JykpLnRleHQoKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHR5cGVvZiAkKGVsZW1lbnQpLmF0dHIoJ2RhdGEtY29weS10ZXh0JykgIT0gJ3VuZGVmaW5lZCcpXHJcblx0XHRcdHRleHRUb0NvcHkgPSAkKGVsZW1lbnQpLmF0dHIoJ2RhdGEtY29weS10ZXh0Jyk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRleHRUb0NvcHkgPSAkKGVsZW1lbnQpLnZhbCgpO1xyXG5cclxuXHRcdHRlbXAudmFsKHRleHRUb0NvcHkpLnRyaWdnZXIoJ3NlbGVjdCcpO1xyXG5cdFx0ZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xyXG5cdFx0dGVtcC5yZW1vdmUoKTtcclxuXHJcblx0XHRTd2FsLmZpcmUoe1xyXG5cdFx0XHR0aXRsZTogYFRleHQgY29waWVkYCxcclxuXHRcdFx0cG9zaXRpb246IGB0b3AtcmlnaHRgLFxyXG5cdFx0XHRzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcblx0XHRcdHRvYXN0OiB0cnVlLFxyXG5cdFx0XHR0aW1lcjogMzc1MCxcclxuXHRcdFx0YmFja2dyb3VuZDogYCMyOGE3NDVgLFxyXG5cdFx0XHRjdXN0b21DbGFzczoge1xyXG5cdFx0XHRcdHRpdGxlOiBgdGV4dC13aGl0ZWAsXHJcblx0XHRcdFx0cG9wdXA6IGBweC0wYFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR3aWR0aDogMTUwLFxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTd2FsRmxhc2gge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0aWYgKHRoaXMgaW5zdGFuY2VvZiBTd2FsRmxhc2gpXHJcblx0XHRcdHRocm93IEVycm9yKCdTd2FsRmxhc2ggaXMgYSBzdGF0aWMgY2xhc3MgYW5kIGNhbm5vdCBiZSBpbnN0YW50aWF0ZWQnKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBlcnJvcih0aXRsZSwgbXNnID0gdW5kZWZpbmVkLCBoYXNfaWNvbiA9IHVuZGVmaW5lZCwgdG9hc3QgPSB1bmRlZmluZWQsIHBvcyA9IHVuZGVmaW5lZCwgaGFzX3RpbWVyID0gdW5kZWZpbmVkLCBkdXJhdGlvbiA9IHVuZGVmaW5lZCkge1xyXG5cdFx0U3dhbEZsYXNoLiNzZW5kRXZlbnQoYGZsYXNoX2Vycm9yYCwge1xyXG5cdFx0XHRmbGFzaF9lcnJvcjogdGl0bGUsXHJcblx0XHRcdG1lc3NhZ2U6IG1zZyxcclxuXHRcdFx0aGFzX2ljb246IGhhc19pY29uLFxyXG5cdFx0XHRpc190b2FzdDogdG9hc3QsXHJcblx0XHRcdHBvc2l0aW9uOiBwb3MsXHJcblx0XHRcdGhhc190aW1lcjogaGFzX3RpbWVyLFxyXG5cdFx0XHRkdXJhdGlvbjogZHVyYXRpb25cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGluZm8odGl0bGUsIG1zZyA9IHVuZGVmaW5lZCwgaGFzX2ljb24gPSB1bmRlZmluZWQsIHRvYXN0ID0gdW5kZWZpbmVkLCBwb3MgPSB1bmRlZmluZWQsIGhhc190aW1lciA9IHVuZGVmaW5lZCwgZHVyYXRpb24gPSB1bmRlZmluZWQpIHtcclxuXHRcdFN3YWxGbGFzaC4jc2VuZEV2ZW50KGBmbGFzaF9pbmZvYCwge1xyXG5cdFx0XHRmbGFzaF9pbmZvOiB0aXRsZSxcclxuXHRcdFx0bWVzc2FnZTogbXNnLFxyXG5cdFx0XHRoYXNfaWNvbjogaGFzX2ljb24sXHJcblx0XHRcdGlzX3RvYXN0OiB0b2FzdCxcclxuXHRcdFx0cG9zaXRpb246IHBvcyxcclxuXHRcdFx0aGFzX3RpbWVyOiBoYXNfdGltZXIsXHJcblx0XHRcdGR1cmF0aW9uOiBkdXJhdGlvblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgc3VjY2Vzcyh0aXRsZSwgbXNnID0gdW5kZWZpbmVkLCBoYXNfaWNvbiA9IHVuZGVmaW5lZCwgdG9hc3QgPSB1bmRlZmluZWQsIHBvcyA9IHVuZGVmaW5lZCwgaGFzX3RpbWVyID0gdW5kZWZpbmVkLCBkdXJhdGlvbiA9IHVuZGVmaW5lZCkge1xyXG5cdFx0U3dhbEZsYXNoLiNzZW5kRXZlbnQoYGZsYXNoX3N1Y2Nlc3NgLCB7XHJcblx0XHRcdGZsYXNoX3N1Y2Nlc3M6IHRpdGxlLFxyXG5cdFx0XHRtZXNzYWdlOiBtc2csXHJcblx0XHRcdGhhc19pY29uOiBoYXNfaWNvbixcclxuXHRcdFx0aXNfdG9hc3Q6IHRvYXN0LFxyXG5cdFx0XHRwb3NpdGlvbjogcG9zLFxyXG5cdFx0XHRoYXNfdGltZXI6IGhhc190aW1lcixcclxuXHRcdFx0ZHVyYXRpb246IGR1cmF0aW9uXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyAjc2VuZEV2ZW50KHR5cGUsIHBhcmFtcykge1xyXG5cdFx0d2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KHR5cGUsIHtcclxuXHRcdFx0ZGV0YWlsOiBwYXJhbXNcclxuXHRcdH0pKTtcclxuXHR9XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdmbGFzaF9lcnJvcicsIChlKSA9PiB7XHJcblx0bGV0IGZsYXNoID0gZS5kZXRhaWw7XHJcblx0bGV0IG9wdGlvbnMgPSB7XHJcblx0XHR0aXRsZTogYCR7Zmxhc2guZmxhc2hfZXJyb3J9YCxcclxuXHRcdHBvc2l0aW9uOiBgdG9wYCxcclxuXHRcdHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuXHRcdHRvYXN0OiB0cnVlLFxyXG5cdFx0dGltZXI6IDEwMDAwLFxyXG5cdFx0YmFja2dyb3VuZDogYCNkYzM1NDVgLFxyXG5cdFx0Y3VzdG9tQ2xhc3M6IHtcclxuXHRcdFx0dGl0bGU6IGB0ZXh0LXdoaXRlYCxcclxuXHRcdFx0Y29udGVudDogYHRleHQtd2hpdGVgLFxyXG5cdFx0XHRwb3B1cDogYHB4LTNgXHJcblx0XHR9LFxyXG5cdFx0c2hvd0NsYXNzOiB7XHJcblx0XHRcdHBvcHVwOiBgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYm91bmNlSW4gYW5pbWF0ZV9fZmFzdGVyYFxyXG5cdFx0fSxcclxuXHRcdGhpZGVDbGFzczoge1xyXG5cdFx0XHRwb3B1cDogYGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVPdXRVcCBhbmltYXRlX19mYXN0ZXJgXHJcblx0XHR9LFxyXG5cdH1cclxuXHJcblx0U3dhbC5maXJlKF9fc2V0U3dhbEZsYXNoT3B0aW9ucyhvcHRpb25zLCBmbGFzaCwgJ2Vycm9yJykpO1xyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdmbGFzaF9pbmZvJywgKGUpID0+IHtcclxuXHRsZXQgZmxhc2ggPSBlLmRldGFpbDtcclxuXHRsZXQgb3B0aW9ucyA9IHtcclxuXHRcdHRpdGxlOiBgJHtmbGFzaC5mbGFzaF9pbmZvfWAsXHJcblx0XHRwb3NpdGlvbjogYHRvcGAsXHJcblx0XHRzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcblx0XHR0b2FzdDogdHJ1ZSxcclxuXHRcdHRpbWVyOiAxMDAwMCxcclxuXHRcdGJhY2tncm91bmQ6IGAjMTdhMmI4YCxcclxuXHRcdGN1c3RvbUNsYXNzOiB7XHJcblx0XHRcdHRpdGxlOiBgdGV4dC13aGl0ZWAsXHJcblx0XHRcdGNvbnRlbnQ6IGB0ZXh0LXdoaXRlYCxcclxuXHRcdFx0cG9wdXA6IGBweC0zYFxyXG5cdFx0fSxcclxuXHRcdHNob3dDbGFzczoge1xyXG5cdFx0XHRwb3B1cDogYGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JvdW5jZUluIGFuaW1hdGVfX2Zhc3RlcmBcclxuXHRcdH0sXHJcblx0XHRoaWRlQ2xhc3M6IHtcclxuXHRcdFx0cG9wdXA6IGBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlT3V0VXAgYW5pbWF0ZV9fZmFzdGVyYFxyXG5cdFx0fSxcclxuXHR9XHJcblxyXG5cdFN3YWwuZmlyZShfX3NldFN3YWxGbGFzaE9wdGlvbnMob3B0aW9ucywgZmxhc2gsICdpbmZvJykpO1xyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdmbGFzaF9zdWNjZXNzJywgKGUpID0+IHtcclxuXHRsZXQgZmxhc2ggPSBlLmRldGFpbDtcclxuXHRsZXQgb3B0aW9ucyA9IHtcclxuXHRcdHRpdGxlOiBgJHtmbGFzaC5mbGFzaF9zdWNjZXNzfWAsXHJcblx0XHRwb3NpdGlvbjogYHRvcGAsXHJcblx0XHRzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcblx0XHR0b2FzdDogdHJ1ZSxcclxuXHRcdHRpbWVyOiAxMDAwMCxcclxuXHRcdGJhY2tncm91bmQ6IGAjMjhhNzQ1YCxcclxuXHRcdGN1c3RvbUNsYXNzOiB7XHJcblx0XHRcdHRpdGxlOiBgdGV4dC13aGl0ZWAsXHJcblx0XHRcdGNvbnRlbnQ6IGB0ZXh0LXdoaXRlYCxcclxuXHRcdFx0cG9wdXA6IGBweC0zYFxyXG5cdFx0fSxcclxuXHRcdHNob3dDbGFzczoge1xyXG5cdFx0XHRwb3B1cDogYGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JvdW5jZUluIGFuaW1hdGVfX2Zhc3RlcmBcclxuXHRcdH0sXHJcblx0XHRoaWRlQ2xhc3M6IHtcclxuXHRcdFx0cG9wdXA6IGBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlT3V0VXAgYW5pbWF0ZV9fZmFzdGVyYFxyXG5cdFx0fSxcclxuXHR9XHJcblxyXG5cdGlmIChTd2FsKSB7XHJcblx0XHRTd2FsLmZpcmUoX19zZXRTd2FsRmxhc2hPcHRpb25zKG9wdGlvbnMsIGZsYXNoLCAnc3VjY2VzcycpKTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHR0aHJvdyBFcnJvcignU3dlZXRhbGVydDIgbm90IGluc3RhbnRpYXRlZC4gUGxlYXNlIGluY2x1ZGUgdGhlIHNhaWQgbGlicmFyeSAoaHR0cHM6Ly9zd2VldGFsZXJ0Mi5naXRodWIuaW8vKS4gQ3VycmVudGx5IHRlc3RpbmcgZm9yIGBTd2FsYCBrZXl3b3JkLicpO1xyXG5cdH1cclxufSk7XHJcblxyXG5jb25zdCBfX3NldFN3YWxGbGFzaE9wdGlvbnMgPSAob3B0aW9ucywgZmxhc2gsIHR5cGUpID0+IHtcclxuXHQvLyBjb25zb2xlLmxvZyhmbGFzaCk7XHJcblxyXG5cdGlmIChmbGFzaC5oYXNfaWNvbiAhPSB1bmRlZmluZWQpXHJcblx0XHRvcHRpb25zW1wiaWNvblwiXSA9IGAke3R5cGV9YDtcclxuXHJcblx0aWYgKGZsYXNoLm1lc3NhZ2UgIT0gdW5kZWZpbmVkKVxyXG5cdFx0b3B0aW9uc1tcImh0bWxcIl0gPSBgJHtmbGFzaC5tZXNzYWdlfWA7XHJcblxyXG5cdGlmIChmbGFzaC5wb3NpdGlvbiAhPSB1bmRlZmluZWQpXHJcblx0IFx0b3B0aW9uc1tcInBvc2l0aW9uXCJdID0gZmxhc2gucG9zaXRpb247XHJcblxyXG5cdGlmIChmbGFzaC5pc190b2FzdCAhPSB1bmRlZmluZWQpXHJcblx0XHRvcHRpb25zW1widG9hc3RcIl0gPSBmbGFzaC5pc190b2FzdDtcclxuXHJcblx0aWYgKGZsYXNoLmhhc190aW1lciAhPSB1bmRlZmluZWQpXHJcblx0XHRpZiAoZmxhc2guaGFzX3RpbWVyKVxyXG5cdFx0XHRvcHRpb25zWyd0aW1lciddID0gZmxhc2guZHVyYXRpb24gIT0gdW5kZWZpbmVkID8gZmxhc2guZHVyYXRpb24gOiAxMDAwMDtcclxuXHRcdGVsc2VcclxuXHRcdFx0ZGVsZXRlIG9wdGlvbnNbJ2R1cmF0aW9uJ107XHJcblxyXG5cdHJldHVybiBvcHRpb25zO1xyXG59XHJcbiIsImZ1bmN0aW9uIGluaXRDaGFuZ2UoKSB7XHJcblx0QXJyYXkucHJvdG90eXBlLnVuaXEgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBzZWVuID0ge307XHJcblx0XHR2YXIgb3V0ID0gW107XHJcblx0XHR2YXIgaiA9IDA7XHJcblx0XHRcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdCB2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdCBpZihzZWVuW2l0ZW1dICE9PSAxKSB7XHJcblx0XHRcdFx0ICAgc2VlbltpdGVtXSA9IDE7XHJcblx0XHRcdFx0ICAgb3V0W2orK10gPSBpdGVtO1xyXG5cdFx0XHQgfVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gb3V0O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdENoYW5nZTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlQmFnIHtcclxuXHQjbWVzc2FnZTtcclxuXHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyBhbiBpbnN0YW5jZSBvZiBgTWVzc2FnZUJhZ2AuXHJcblx0ICpcclxuXHQgKiA8Yj5FeGFtcGxlIEEuMTo8L2I+XHJcblx0ICogYGBgamF2YXNjcmlwdFxyXG5cdCAqIG1lc3NhZ2VzID0ge1xyXG5cdCAqIFx0bmFtZToge1xyXG5cdCAqIFx0XHRyZXF1aXJlZDogYFRoZSBuYW1lIGZpZWxkIGlzIHJlcXVpcmVkLmBcclxuXHQgKiBcdH1cclxuXHQgKiB9XHJcblx0ICogYGBgXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge09iamVjdH1cdG1lc3NhZ2VzXHRBbiBpbnN0YW5jZSBvZiBKU09OIG9iamVjdCwgd2hpY2ggaG9sZHMgYSBmaWVsZC1rZXktdmFsdWUgaW5zdGFuY2UuIEFuIGV4YW1wbGUgb2YgdGhpcyBpcyB0aGUgRXhhbXBsZSBBLjFcclxuXHQgKlxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2VzID0gT2JqZWN0LmNyZWF0ZShudWxsKSkge1xyXG5cdFx0dGhpcy4jbWVzc2FnZSA9IG1lc3NhZ2VzO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcyBhIG5ldyBtZXNzYWdlIHRvIHRoZSBtZXNzYWdlIGJhZy4gSWYgYW4gZXhhY3Qga2V5IGFscmVhZHkgZXhpc3RzLCBpdCB3aWxsIHJlcGxhY2UgdGhlIG9sZGVyIHZhbHVlIHdpdGggdGhlIG5ld1xyXG5cdCAqIHZhbHVlIHByb3ZpZGVkLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9XHRrZXlcdFx0VGhlIGtleSBpZGVudGlmaWVyIGZvciB0aGUgbWVzc2FnZVxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfVx0bWVzc2FnZVx0VGhlIG1lc3NhZ2UgdGhhdCB3aWxsIGJlIHBsYWNlZCBpbiB0aGUgbWVzc2FnZSBiYWdcclxuXHQgKlxyXG5cdCAqIEByZXR1cm4ge01lc3NhZ2VCYWd9XHRcdFRoZSBjdXJyZW50IGluc3RhbmNlIG9mIGBNZXNzYWdlQmFnYFxyXG5cdCAqL1xyXG5cdGFkZChrZXksIG1lc3NhZ2UpIHtcclxuXHRcdGtleSA9IGtleS5zcGxpdChcIi5cIik7XHJcblx0XHRsZXQgZmllbGQgPSBrZXlbMF07XHJcblx0XHRrZXkgPSBrZXlbMV07XHJcblxyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLiNtZXNzYWdlW2ZpZWxkXSA9PSAndW5kZWZpbmVkJylcclxuXHRcdFx0dGhpcy4jbWVzc2FnZVtmaWVsZF0gPSB7fTtcclxuXHJcblx0XHR0aGlzLiNtZXNzYWdlW2ZpZWxkXVtrZXldID0gbWVzc2FnZTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIE1lcmdlIGEgbmV3IGFycmF5IG9mIG1lc3NhZ2VzIGludG8gdGhlIG1lc3NhZ2UgYmFnLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtPYmplY3R8TWVzc2FnZUJhZ31cdG1lc3NhZ2VzXHRBIEpTT04gb2JqZWN0IG9yIGFuIGluc3RhbmNlIG9mIGBNZXNzYWdlQmFnYFxyXG5cdCAqXHJcblx0ICogQHJldHVybiB7TWVzc2FnZUJhZ31cdFRoZSBjdXJyZW50IGluc3RhbmNlIG9mIGBNZXNzYWdlQmFnYFxyXG5cdCAqL1xyXG5cdG1lcmdlKG1lc3NhZ2VzKSB7XHJcblx0XHRsZXQgdHlwZSA9IG1lc3NhZ2VzLmNvbnN0cnVjdG9yLm5hbWU7XHJcblxyXG5cdFx0aWYgKHR5cGUgPT09ICdPYmplY3QnKSB7XHJcblx0XHRcdHRoaXMuI21lc3NhZ2UgPSBPYmplY3QuYXNzaWduKHRoaXMuI21lc3NhZ2UsIG1lc3NhZ2VzKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHR5cGUgPT09ICdNZXNzYWdlQmFnJykge1xyXG5cdFx0XHR0aGlzLiNtZXNzYWdlID0gT2JqZWN0LmFzc2lnbih0aGlzLiNtZXNzYWdlLCBtZXNzYWdlcy5nZXQoKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBEZXRlcm1pbmUgaWYgbWVzc2FnZXMgZXhpc3QgZm9yIHRoZSBnaXZlbiBmaWVsZC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSAge1N0cmluZ30gIGZpZWxkXHRUaGUgbmFtZSBvZiB0aGUgZmllbGQgdGhhdCB3aWxsIGJlIHRlc3RlZFxyXG5cdCAqIEByZXR1cm4ge0Jvb2xlYW59XHRcdEEgYm9vbGVhbiB2YWx1ZTsgZWl0aGVyIGEgYHRydWVgIGlmIHRoZSBmaWVsZCBleGlzdHMsIG9yIGBmYWxzZWAgaWYgaXQgZG9lcyBub3RcclxuXHQgKi9cclxuXHRoYXMoZmllbGQpIHtcclxuXHRcdHJldHVybiB0aGlzLmZpZWxkcygpLmluY2x1ZGVzKGtleSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgdGhlIGZpZWxkcyBwcmVzZW50IGluIHRoZSBtZXNzYWdlIGJhZy5cclxuXHQgKlxyXG5cdCAqIEByZXR1cm4ge0FycmF5fVx0XHRBbiBhcnJheSBvZiB0aGUgZmllbGRzIGluY2x1ZGVkIGluIHRoZSBjdXJyZW50IGluc3RhbmNlIG9mIGBNZXNzYWdlQmFnYFxyXG5cdCAqL1xyXG5cdGZpZWxkcygpIHtcclxuXHRcdHJldHVybiBPYmplY3Qua2V5cyh0aGlzLiNtZXNzYWdlKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCB0aGUgZmlyc3QgbWVzc2FnZSBmcm9tIHRoZSBtZXNzYWdlIGJhZyBmb3IgYSBnaXZlbiBmaWVsZC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSAge1N0cmluZ31cdGZpZWxkXHRUaGUgbmFtZSBvZiB0aGUgZmllbGQgdGhhdCB0aGUgbWVzc2FnZSB3aWxsIGJlIGZldGNoZWQgdXBvblxyXG5cdCAqIEByZXR1cm4ge1N0cmluZ31cdFx0VGhlIGZpcnN0IG1lc3NhZ2UgY29udGFpbmVkIHdpdGhpbiB0aGUgc2FpZCBmaWVsZC4gUmV0dXJucyBhbiBgdW5kZWZpbmVkYCB3aGVuIHRoZSBmaWVsZCBkb2VzIG5vdCBleGlzdHNcclxuXHQgKi9cclxuXHRmaXJzdChmaWVsZCkge1xyXG5cdFx0aWYgKHR5cGVvZiBmaWVsZCA9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRmaWVsZCA9IE9iamVjdC5rZXlzKHRoaXMuI21lc3NhZ2UpO1xyXG5cdFx0XHRsZXQga2V5ID0gT2JqZWN0LmtleXModGhpcy4jbWVzc2FnZVtmaWVsZF0pO1xyXG5cdFx0XHRyZXR1cm4gdGhpcy4jbWVzc2FnZVtmaWVsZF1ba2V5WzBdXTtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQga2V5ID0gT2JqZWN0LmtleXModGhpcy4jbWVzc2FnZVtmaWVsZF0pO1xyXG5cdFx0cmV0dXJuIHRoaXMuI21lc3NhZ2VbZmllbGRdW2tleVswXV07XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgYWxsIG9mIHRoZSBtZXNzYWdlcyBmcm9tIHRoZSBtZXNzYWdlIGJhZyBmb3IgYSBnaXZlbiBmaWVsZC4gSWYgbm8gdmFsdWUgb3IgYSBgbnVsbGAgaXMgcHJvdmlkZWQgdG8gdGhlIGZpZWxkLCBpdCByZXR1cm5zIGFsbCB0aGUgbWVzc2FnZXMgY29udGFpbmVkIHdpdGhpbiB0aGUgY3VycmVudCBpbnN0YW5jZSBvZiBgTWVzc2FnZUJhZ2BcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSAge1N0cmluZ31cdGZpZWxkXHRUaGUgbmFtZSBvZiB0aGUgZmllbGQgdGhhdCB0aGUgbWVzc2FnZSB3aWxsIGJlIGZldGNoZWQgdXBvblxyXG5cdCAqIEByZXR1cm4ge09iamVjdH1cdFx0QSBKU09OIG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSBrZXktdmFsdWUgcGFpciBmb3IgYWxsIHRoZSBtZXNzYWdlIG9mIHRoZSBmaWVsZC5cclxuXHQgKi9cclxuXHRnZXQoZmllbGQgPSBudWxsKSB7XHJcblx0XHRyZXR1cm4gZmllbGQgPT0gbnVsbCA/IHRoaXMuI21lc3NhZ2UgOiB0aGlzLiNtZXNzYWdlW2ZpZWxkXTtcclxuXHR9XHJcbn1cclxuIiwiY2xhc3MgUnVsZSB7XHJcblx0Ly8gUFJJVkFURSBWQVJJQUJMRVNcclxuXHRfbWVzc2FnZTtcclxuXHRfdmFsaWQgPSBmYWxzZTtcclxuXHRcclxuXHQvKipcclxuXHQgKiBDb250YWluZXIgZm9yIHRoZSBuYW1lIG9mIHRoZSBmaWVsZCB0aGF0IHdpbGwgYmUgdGVzdGVkXHJcblx0ICovXHJcblx0X2ZpZWxkO1xyXG5cdC8qKlxyXG5cdCAqIENvbnRhaW5lciBmb3IgdGhlIHZhbHVlIHRoYXQgd2lsbCBiZSB0ZXN0ZWRcclxuXHQgKi9cclxuXHRfdmFsdWU7XHJcblx0LyoqXHJcblx0ICogQ29udGFpbmVyIGZvciB0aGUgdmFsaWRhdG9yIHZhbHVlcyB0aGF0IHdpbGwgYmUgdXNlZCBhZ2FpbnN0IHRoZSB2YWx1ZSBwcm92aWRlZFxyXG5cdCAqL1xyXG5cdF92YWxpZGF0b3JWYWx1ZXM7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoZSBwYXJlbnQgY29uc3RydWN0b3IsIHdoaWNoIGNyZWF0ZXMgdGhlIGNvbW1vbiBSdWxlIGluc3RhbmNlIGZvciBhbGwgdGhlIHJ1bGVzLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfVx0ZmllbGRcdFx0XHRUaGUgbmFtZSBvZiB0aGUgZmllbGQgYmVpbmcgdGVzdGVkXHJcblx0ICogQHBhcmFtIHtBbnl9IFx0dmFsdWVcdFx0XHRUaGUgdmFsdWUgdG8gdmFsaWRhdGVcclxuXHQgKiBAcGFyYW0ge0FycmF5fVx0dmFsaWRhdG9yVmFsdWVzXHRBbiBhcnJheSBvZiB2YWx1ZXMgdGhhdCB0aGUgdmFsaWRhdG9yIGhhcy4gT25seSByZXRyaWV2ZXMgdGhlIGZpcnN0IHZhbHVlIGR1ZSB0byBob3cgdGhlIHJ1bGUgd29ya3NcclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVx0XHRcdFRoZSBtZXNzYWdlIHRvIHVzZSB3aGVuIHRoZSBydWxlIGZhaWxzXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoZmllbGQsIHZhbHVlLCB2YWxpZGF0b3JWYWx1ZXMgPSBudWxsLCBtZXNzYWdlID0gXCJUaGUgOmF0dHIgZmllbGQgaXMgaW5jb3JyZWN0LlwiKSB7XHJcblx0XHRtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlQWxsKC8oOmF0dHIpL2dpLCBmaWVsZCk7XHJcblx0XHRtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlQWxsKC8oOnZhbCkvZ2ksIHZhbHVlKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5fbWVzc2FnZSA9IG1lc3NhZ2U7XHJcblx0XHR0aGlzLl9maWVsZCA9IGZpZWxkO1xyXG5cdFx0dGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuXHRcdHRoaXMuX3ZhbGlkYXRvclZhbHVlcyA9IHZhbGlkYXRvclZhbHVlcztcclxuXHR9XHJcblxyXG5cdHZhbGlkYXRlKCkge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5pbXBsZW1lbnRlZCBhYnN0cmFjdCBtZXRob2Q6IHZhbGlkYXRlKClcIik7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVxdWlyZWQgZXh0ZW5kcyBSdWxlIHtcclxuXHQvKipcclxuXHQgKiBUZXN0cyB3aGV0aGVyIHRoZSBgdmFsdWVgIHByb3ZpZGVkIGlzIHByZXNlbnQgYW5kIGEgdmFsaWQgdmFsdWUuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9XHRmaWVsZFx0VGhlIG5hbWUgb2YgdGhlIGZpZWxkIGJlaW5nIHRlc3RlZFxyXG5cdCAqIEBwYXJhbSB7QW55fVx0XHR2YWx1ZVx0VGhlIHZhbHVlIHRvIHZhbGlkYXRlXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcdFRoZSBtZXNzYWdlIHRvIHVzZSB3aGVuIHRoZSBydWxlIGZhaWxzXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoZmllbGQsIHZhbHVlLCBtZXNzYWdlID0gXCJUaGUgOmF0dHIgZmllbGQgaXMgcmVxdWlyZWRcIiwgdmFsaWRhdG9yVmFsdWVzID0gbnVsbCkge1xyXG5cdFx0c3VwZXIoZmllbGQsIHZhbHVlLCB2YWxpZGF0b3JWYWx1ZXMgPz8gdW5kZWZpbmVkLCBtZXNzYWdlKTtcclxuXHR9XHJcblxyXG5cdHZhbGlkYXRlKCkge1xyXG5cdFx0aWYgKHRoaXMuX3ZhbHVlICE9ICd1bmRlZmluZWQnICYmIHRoaXMuX3ZhbHVlICE9IG51bGwgJiYgdGhpcy5fdmFsdWUubGVuZ3RoID4gMClcclxuXHRcdFx0dGhpcy5fdmFsaWQgPSB0cnVlO1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHZhbGlkOiB0aGlzLl92YWxpZCxcclxuXHRcdFx0bWVzc2FnZTogdGhpcy5fbWVzc2FnZSxcclxuXHRcdFx0cnVuT3RoZXJWYWxpZGF0aW9uOiB0cnVlXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlcXVpcmVkSWYgZXh0ZW5kcyBSZXF1aXJlZCB7XHJcblx0LyoqXHJcblx0ICogVGVzdHMgd2hldGhlciB0aGUgYHZhbHVlYCBwcm92aWRlZCBpcyBwcmVzZW50IGFuZCBhIHZhbGlkIHZhbHVlIG9ubHkgaWYgdGhlIG90aGVyIGZpZWxkIGhhcyB0aGUgcHJvdmlkZWQgdmFsdWUuIFNraXBzIHRoZSB2YWxpZGF0aW9uIGlmIHRoZSBvdGhlciBmaWVsZCBpc1xyXG5cdCAqIGJsYW5rLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfVx0ZmllbGRcdFx0XHRcdFRoZSBuYW1lIG9mIHRoZSBmaWVsZCBiZWluZyB0ZXN0ZWRcclxuXHQgKiBAcGFyYW0ge0FueX1cdFx0dmFsdWVcdFx0XHRcdFRoZSB2YWx1ZSB0byB2YWxpZGF0ZVxyXG4gXHQgKiBAcGFyYW0ge0FycmF5fVx0dmFsaWRhdG9yVmFsdWVzXHRcdEFuIGFycmF5IG9mIHZhbHVlcyB0aGF0IHRoZSB2YWxpZGF0b3IgaGFzLiBPbmx5IHJldHJpZXZlcyB0aGUgZmlyc3QgdGhyZWUgdmFsdWVzIChvdGhlciBmaWVsZCwgb3RoZXIgZmllbGQncyByZXF1aXJlZCB2YWx1ZSxcclxuIFx0ICogXHRcdFx0XHRcdFx0XHRcdFx0XHRvdGhlciBmaWVsZCdzIHZhbHVlKSBkdWUgdG8gaG93IHRoZSBydWxlIHdvcmtzXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9XHRtZXNzYWdlXHRcdFx0XHRUaGUgbWVzc2FnZSB0byB1c2Ugd2hlbiB0aGUgcnVsZSBmYWlsc1xyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKGZpZWxkLCB2YWx1ZSwgdmFsaWRhdG9yVmFsdWVzLCBtZXNzYWdlID0gXCJUaGUgOmF0dHIgZmllbGQgaXMgcmVxdWlyZWQgc2luY2UgOmF0dHIyIGlzIDp2YWwyXCIpIHtcclxuXHRcdGlmICh0eXBlb2YgdmFsaWRhdG9yVmFsdWVzICE9ICdvYmplY3QnIHx8IHZhbGlkYXRvclZhbHVlcy5jb25zdHJ1Y3Rvci5uYW1lICE9ICdBcnJheScpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihgSW1wcm9wZXIgdmFsaWRhdG9yIHZhbHVlIGZvcm1hdDpcXG5cXHROZWVkcyBhcnJheSwgJHt0eXBlb2YgdmFsaWRhdG9yVmFsdWVzfSBpcyBwYXNzZWRgKTtcclxuXHRcdGVsc2UgaWYgKHZhbGlkYXRvclZhbHVlcy5sZW5ndGggPCAyKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE5vdCBlbm91Z2ggdmFsaWRhdG9yIHZhbHVlIHBhc3NlZDpcXG5cXHROZWVkcyAyLCBvbmx5ICR7dmFsaWRhdG9yVmFsdWVzLmxlbmd0aH0gaXMgcGFzc2VkLmApO1xyXG5cclxuXHRcdG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2VBbGwoLyg6YXR0cjIpL2dpLCB2YWxpZGF0b3JWYWx1ZXNbMF0pO1xyXG5cdFx0bWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZUFsbCgvKDp2YWwyKS9naSwgdmFsaWRhdG9yVmFsdWVzWzFdKTtcclxuXHRcdG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2VBbGwoLyg6dmFsMykvZ2ksIHZhbGlkYXRvclZhbHVlc1syXSk7XHJcblxyXG5cdFx0c3VwZXIoZmllbGQsIHZhbHVlLCBtZXNzYWdlLCB2YWxpZGF0b3JWYWx1ZXMpO1xyXG5cdH1cclxuXHJcblx0dmFsaWRhdGUoKSB7XHJcblx0XHRsZXQgW2ZpZWxkMiwgdmFsMiwgdmFsM10gPSB0aGlzLl92YWxpZGF0b3JWYWx1ZXM7XHJcblxyXG5cdFx0aWYgKHZhbDIgPT0gdmFsMykge1xyXG5cdFx0XHRyZXR1cm4gc3VwZXIudmFsaWRhdGUoKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0aGlzLl92YWxpZCA9IHRydWU7XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHZhbGlkOiB0aGlzLl92YWxpZCxcclxuXHRcdFx0XHRtZXNzYWdlOiB0aGlzLl9tZXNzYWdlLFxyXG5cdFx0XHRcdHJ1bk90aGVyVmFsaWRhdGlvbjogZmFsc2VcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU29tZXRpbWVzIGV4dGVuZHMgUnVsZSB7XHJcblx0LyoqXHJcblx0ICogV29ya3Mgc2ltaWxhciBhcyB0aGUgYFJlcXVpcmVkYCBydWxlIGJ1dCBvbmx5IHdvcmtzIGlmIHRoZSB2YWx1ZSBpcyBwcmVzZW50IChub3QgYHVuZGVmaW5lZGApLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfVx0ZmllbGRcdFRoZSBuYW1lIG9mIHRoZSBmaWVsZCBiZWluZyB0ZXN0ZWRcclxuXHQgKiBAcGFyYW0ge0FueX0gXHR2YWx1ZVx0VGhlIHZhbHVlIHRvIHZhbGlkYXRlXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcdFRoZSBtZXNzYWdlIHRvIHVzZSB3aGVuIHRoZSBydWxlIGZhaWxzXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoZmllbGQsIHZhbHVlLCBtZXNzYWdlID0gXCJUaGUgOmF0dHIgZmllbGQgaXMgcmVxdWlyZWQgdG8gaGF2ZSBhIHZhbHVlLCBvciBsZWF2ZSBpdCBhcyBibGFua1wiKSB7XHJcblx0XHRzdXBlcihmaWVsZCwgdmFsdWUsIHVuZGVmaW5lZCwgbWVzc2FnZSk7XHJcblx0fVxyXG5cclxuXHR2YWxpZGF0ZSgpIHtcclxuXHRcdHRoaXMuX3ZhbGlkID0gdHJ1ZTtcclxuXHRcdGxldCBydW5PdGhlclZhbGlkYXRpb24gPSBmYWxzZTtcclxuXHRcclxuXHRcdGlmICh0eXBlb2YgdGhpcy5fdmFsdWUgIT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0cnVuT3RoZXJWYWxpZGF0aW9uID0gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR2YWxpZDogdGhpcy5fdmFsaWQsXHJcblx0XHRcdG1lc3NhZ2U6IHRoaXMuX21lc3NhZ2UsXHJcblx0XHRcdHJ1bk90aGVyVmFsaWRhdGlvbjogcnVuT3RoZXJWYWxpZGF0aW9uXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJvb2xlYW4gZXh0ZW5kcyBSdWxlIHtcclxuXHQvKipcclxuXHQgKiBUZXN0cyB3aGV0aGVyIHRoZSB2YWx1ZSBpcyBhIGJvb2xlYW4gb3IgY2FuIGJlIGNvbnZlcnRlZCB0byBhIGJvb2xlYW4uXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9XHRmaWVsZFx0VGhlIG5hbWUgb2YgdGhlIGZpZWxkIGJlaW5nIHRlc3RlZFxyXG5cdCAqIEBwYXJhbSB7QW55fSBcdHZhbHVlXHRUaGUgdmFsdWUgdG8gdmFsaWRhdGVcclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVx0VGhlIG1lc3NhZ2UgdG8gdXNlIHdoZW4gdGhlIHJ1bGUgZmFpbHNcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcihmaWVsZCwgdmFsdWUsIG1lc3NhZ2UgPSBcIlRoZSA6YXR0ciBtdXN0IGJlIHRydWUgb3IgZmFsc2VcIikge1xyXG5cdFx0c3VwZXIoZmllbGQsIHZhbHVlLCB1bmRlZmluZWQsIG1lc3NhZ2UpO1xyXG5cdH1cclxuXHJcblx0dmFsaWRhdGUoKSB7XHJcblx0XHRpZiAodHlwZW9mIHRoaXMuX3ZhbHVlID09ICdib29sZWFuJykgeyBcclxuXHRcdFx0dGhpcy5fdmFsaWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodHlwZW9mIHRoaXMuX3ZhbHVlID09ICdudW1iZXInKSB7XHJcblx0XHRcdGlmICh0aGlzLl92YWx1ZSA9PSAxIHx8IHRoaXMuX3ZhbHVlID09IDApXHJcblx0XHRcdFx0dGhpcy5fdmFsaWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodHlwZW9mIHRoaXMuX3ZhbHVlID09ICdzdHJpbmcnKSB7XHJcblx0XHRcdGlmIChbXCJvblwiLCBcIm9mZlwiLCBcInRydWVcIiwgXCJmYWxzZVwiXS5pbmNsdWRlcyh0aGlzLl92YWx1ZS50b0xvd2VyQ2FzZSgpKSlcclxuXHRcdFx0XHR0aGlzLl92YWxpZCA9IHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dmFsaWQ6IHRoaXMuX3ZhbGlkLFxyXG5cdFx0XHRtZXNzYWdlOiB0aGlzLl9tZXNzYWdlXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE51bWVyaWMgZXh0ZW5kcyBSdWxlIHtcclxuXHQvKipcclxuXHQgKiBUZXN0cyB3aGV0aGVyIHRoZSB2YWx1ZSBpcyBhIG51bWJlciBvciBjYW4gYmUgY29udmVydGVkIHRvIGEgbnVtYmVyLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfVx0ZmllbGRcdFRoZSBuYW1lIG9mIHRoZSBmaWVsZCBiZWluZyB0ZXN0ZWRcclxuXHQgKiBAcGFyYW0ge0FueX0gXHR2YWx1ZVx0VGhlIHZhbHVlIHRvIHZhbGlkYXRlXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcdFRoZSBtZXNzYWdlIHRvIHVzZSB3aGVuIHRoZSBydWxlIGZhaWxzXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoZmllbGQsIHZhbHVlLCBtZXNzYWdlID0gXCJUaGUgOmF0dHIgc2hvdWxkIGJlIGEgbnVtYmVyXCIpIHtcclxuXHRcdHN1cGVyKGZpZWxkLCB2YWx1ZSwgdW5kZWZpbmVkLCBtZXNzYWdlKTtcclxuXHR9XHJcblxyXG5cdHZhbGlkYXRlKCkge1xyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLl92YWx1ZSA9PSAnbnVtYmVyJykge1xyXG5cdFx0XHR0aGlzLl92YWxpZCA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh0eXBlb2YgdGhpcy5fdmFsdWUgPT0gJ3N0cmluZycpIHtcclxuXHRcdFx0bGV0IGlzRGVjaW1hbCA9IHRoaXMuX3ZhbHVlLnNwbGl0KFwiLlwiKS5sZW5ndGggPiAxO1xyXG5cdFx0XHRsZXQgY29udmVydGVkID0gaXNEZWNpbWFsID8gcGFyc2VGbG9hdCh0aGlzLl92YWx1ZSkgOiBwYXJzZUludCh0aGlzLl92YWx1ZSk7XHJcblxyXG5cdFx0XHRpZiAoIWlzTmFOKGNvbnZlcnRlZCkpXHJcblx0XHRcdFx0dGhpcy5fdmFsaWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHZhbGlkOiB0aGlzLl92YWxpZCxcclxuXHRcdFx0bWVzc2FnZTogdGhpcy5fbWVzc2FnZVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNaW4gZXh0ZW5kcyBSdWxlIHtcclxuXHQvKipcclxuXHQgKiBUZXN0cyB3aGV0aGVyIHRoZSB2YWx1ZSBpcyBubyBsZXNzIHRoYW4gdGhlIHByb3ZpZGVkIHZhbGlkYXRvciB2YWx1ZS5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge1N0cmluZ31cdGZpZWxkXHRcdFx0VGhlIG5hbWUgb2YgdGhlIGZpZWxkIGJlaW5nIHRlc3RlZFxyXG5cdCAqIEBwYXJhbSB7QW55fSBcdHZhbHVlXHRcdFx0VGhlIHZhbHVlIHRvIHZhbGlkYXRlXHJcblx0ICogQHBhcmFtIHtBcnJheX1cdHZhbGlkYXRvclZhbHVlc1x0QW4gYXJyYXkgb2YgdmFsdWVzIHRoYXQgdGhlIHZhbGlkYXRvciBoYXMuIE9ubHkgcmV0cmlldmVzIHRoZSBmaXJzdCB2YWx1ZSBkdWUgdG8gaG93IHRoZSBydWxlIHdvcmtzXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcdFx0XHRUaGUgbWVzc2FnZSB0byB1c2Ugd2hlbiB0aGUgcnVsZSBmYWlsc1xyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKGZpZWxkLCB2YWx1ZSwgdmFsaWRhdG9yVmFsdWVzLCBtZXNzYWdlID0gXCJUaGUgOmF0dHIgbXVzdCBiZSBhdCBsZWFzdCA6dmFsXCIpIHtcclxuXHRcdGxldCBlO1xyXG5cclxuXHRcdGlmICh0eXBlb2YgdmFsaWRhdG9yVmFsdWVzICE9ICdvYmplY3QnIHx8IHZhbGlkYXRvclZhbHVlcy5jb25zdHJ1Y3Rvci5uYW1lICE9ICdBcnJheScpXHJcblx0XHRcdGUgPSAgRXJyb3IoYEltcHJvcGVyIHZhbGlkYXRvciB2YWx1ZSBmb3JtYXQ6XFxuXFx0TmVlZHMgYXJyYXksICR7dHlwZW9mIHZhbGlkYXRvclZhbHVlc30gaXMgcGFzc2VkYCk7XHJcblx0XHRlbHNlIGlmICh2YWxpZGF0b3JWYWx1ZXMubGVuZ3RoIDwgMSlcclxuXHRcdFx0ZSA9ICBFcnJvcihgTm90IGVub3VnaCB2YWxpZGF0b3IgdmFsdWUgcGFzc2VkOlxcblxcdE5lZWRzIDEsIG9ubHkgJHt2YWxpZGF0b3JWYWx1ZXMubGVuZ3RofSBpcyBwYXNzZWQuYCk7XHJcblxyXG5cdFx0aWYgKHZhbHVlID09ICBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PSAndW5kZWZpbmVkJylcclxuXHRcdFx0dmFsdWUgPSB2YWx1ZTtcclxuXHRcdGVsc2UgaWYgKHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgPT0gXCJBcnJheVwiKVxyXG5cdFx0XHR2YWx1ZSA9IHZhbHVlLmxlbmd0aDtcclxuXHJcblx0XHRpZiAodHlwZW9mIGUgIT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0ZS5uYW1lID0gXCJSdWxlRXhjZXB0aW9uXCI7XHJcblx0XHRcdHRocm93IGU7XHJcblx0XHR9XHJcblxyXG5cdFx0bWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZUFsbCgvKDptaW4pL2dpLCB2YWxpZGF0b3JWYWx1ZXNbMF0pO1xyXG5cclxuXHRcdHN1cGVyKGZpZWxkLCB2YWx1ZSwgdmFsaWRhdG9yVmFsdWVzWzBdLCBtZXNzYWdlKTtcclxuXHR9XHJcblxyXG5cdHZhbGlkYXRlKCkge1xyXG5cdFx0aWYgKG5ldyBOdW1lcmljKHRoaXMuX2ZpZWxkLCB0aGlzLl92YWx1ZSkudmFsaWRhdGUoKS52YWxpZCkge1xyXG5cdFx0XHRsZXQgaXNEZWNpbWFsID0gdGhpcy5fdmFsdWUudG9TdHJpbmcoKS5zcGxpdChcIi5cIikubGVuZ3RoID4gMTtcclxuXHRcdFx0bGV0IGNvbnZlcnRlZCA9IGlzRGVjaW1hbCA/IHBhcnNlRmxvYXQodGhpcy5fdmFsdWUpIDogcGFyc2VJbnQodGhpcy5fdmFsdWUpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKGNvbnZlcnRlZCA+PSB0aGlzLl92YWxpZGF0b3JWYWx1ZXMpXHJcblx0XHRcdFx0dGhpcy5fdmFsaWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHZhbGlkOiB0aGlzLl92YWxpZCxcclxuXHRcdFx0bWVzc2FnZTogdGhpcy5fbWVzc2FnZVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNYXggZXh0ZW5kcyBSdWxlIHtcclxuXHQvKipcclxuXHQgKiBUZXN0cyB3aGV0aGVyIHRoZSB2YWx1ZSBpcyBubyBtb3JlIHRoYW4gdGhlIHByb3ZpZGVkIHZhbGlkYXRvciB2YWx1ZS5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge1N0cmluZ31cdGZpZWxkXHRcdFx0VGhlIG5hbWUgb2YgdGhlIGZpZWxkIGJlaW5nIHRlc3RlZFxyXG5cdCAqIEBwYXJhbSB7QW55fSBcdHZhbHVlXHRcdFx0VGhlIHZhbHVlIHRvIHZhbGlkYXRlXHJcblx0ICogQHBhcmFtIHtBcnJheX1cdHZhbGlkYXRvclZhbHVlc1x0QW4gYXJyYXkgb2YgdmFsdWVzIHRoYXQgdGhlIHZhbGlkYXRvciBoYXMuIE9ubHkgcmV0cmlldmVzIHRoZSBmaXJzdCB2YWx1ZSBkdWUgdG8gaG93IHRoZSBydWxlIHdvcmtzXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcdFx0XHRUaGUgbWVzc2FnZSB0byB1c2Ugd2hlbiB0aGUgcnVsZSBmYWlsc1xyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKGZpZWxkLCB2YWx1ZSwgdmFsaWRhdG9yVmFsdWVzLCBtZXNzYWdlID0gXCJUaGUgOmF0dHIgbWF5IG5vdCBiZSBncmVhdGVyIHRoYW4gOnZhbFwiKSB7XHJcblx0XHRsZXQgZTtcclxuXHJcblx0XHRpZiAodHlwZW9mIHZhbGlkYXRvclZhbHVlcyAhPSAnb2JqZWN0JyB8fCB2YWxpZGF0b3JWYWx1ZXMuY29uc3RydWN0b3IubmFtZSAhPSAnQXJyYXknKVxyXG5cdFx0XHRlID0gRXJyb3IoYEltcHJvcGVyIHZhbGlkYXRvciB2YWx1ZSBmb3JtYXQ6XFxuXFx0TmVlZHMgYXJyYXksICR7dHlwZW9mIHZhbGlkYXRvclZhbHVlc30gaXMgcGFzc2VkYCk7XHJcblx0XHRlbHNlIGlmICh2YWxpZGF0b3JWYWx1ZXMubGVuZ3RoIDwgMSlcclxuXHRcdFx0ZSA9IEVycm9yKGBOb3QgZW5vdWdoIHZhbGlkYXRvciB2YWx1ZSBwYXNzZWQ6XFxuXFx0TmVlZHMgMSwgb25seSAke3ZhbGlkYXRvclZhbHVlcy5sZW5ndGh9IGlzIHBhc3NlZC5gKTtcclxuXHJcblx0XHRpZiAodmFsdWUgPT0gIG51bGwgfHwgdHlwZW9mIHZhbHVlID09ICd1bmRlZmluZWQnKVxyXG5cdFx0XHR2YWx1ZSA9IHZhbHVlO1xyXG5cdFx0ZWxzZSBpZiAodmFsdWUuY29uc3RydWN0b3IubmFtZSA9PSBcIkFycmF5XCIpXHJcblx0XHRcdHZhbHVlID0gdmFsdWUubGVuZ3RoO1xyXG5cclxuXHRcdGlmICh0eXBlb2YgZSAhPSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRlLm5hbWUgPSBcIlJ1bGVFeGNlcHRpb25cIjtcclxuXHRcdFx0dGhyb3cgZTtcclxuXHRcdH1cclxuXHJcblx0XHRtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlQWxsKC8oOm1heCkvZ2ksIHZhbGlkYXRvclZhbHVlc1swXSk7XHJcblxyXG5cdFx0c3VwZXIoZmllbGQsIHZhbHVlLCB2YWxpZGF0b3JWYWx1ZXNbMF0sIG1lc3NhZ2UpO1xyXG5cdH1cclxuXHJcblx0dmFsaWRhdGUoKSB7XHJcblx0XHRpZiAobmV3IE51bWVyaWModGhpcy5fZmllbGQsIHRoaXMuX3ZhbHVlKS52YWxpZGF0ZSgpLnZhbGlkKSB7XHJcblx0XHRcdGxldCBpc0RlY2ltYWwgPSB0aGlzLl92YWx1ZS50b1N0cmluZygpLnNwbGl0KFwiLlwiKS5sZW5ndGggPiAxO1xyXG5cdFx0XHRsZXQgY29udmVydGVkID0gaXNEZWNpbWFsID8gcGFyc2VGbG9hdCh0aGlzLl92YWx1ZSkgOiBwYXJzZUludCh0aGlzLl92YWx1ZSk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoY29udmVydGVkIDw9IHRoaXMuX3ZhbGlkYXRvclZhbHVlcylcclxuXHRcdFx0XHR0aGlzLl92YWxpZCA9IHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dmFsaWQ6IHRoaXMuX3ZhbGlkLFxyXG5cdFx0XHRtZXNzYWdlOiB0aGlzLl9tZXNzYWdlXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJldHdlZW4gZXh0ZW5kcyBSdWxlIHtcclxuXHQvKipcclxuXHQgKiBUZXN0cyB3aGV0aGVyIHRoZSB2YWx1ZSBpcyBubyBtb3JlIGFuZCBsZXNzIHRoYW4gdGhlIHByb3ZpZGVkIHZhbGlkYXRvciB2YWx1ZS4gSWYgYW4gYXJyYXkgaXMgcGFzc2VkIGFzIGEgdmFsdWUsIHRoZSBsZW5ndGggb2YgdGhlIGFycmF5IHByb3ZpZGVkIHdpbGwgYmUgdGVzdGVkLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfVx0ZmllbGRcdFx0XHRUaGUgbmFtZSBvZiB0aGUgZmllbGQgYmVpbmcgdGVzdGVkXHJcblx0ICogQHBhcmFtIHtBbnl9IFx0dmFsdWVcdFx0XHRUaGUgdmFsdWUgdG8gdmFsaWRhdGVcclxuXHQgKiBAcGFyYW0ge0FycmF5fVx0dmFsaWRhdG9yVmFsdWVzXHRBbiBhcnJheSBvZiB2YWx1ZXMgdGhhdCB0aGUgdmFsaWRhdG9yIGhhcy4gT25seSByZXRyaWV2ZXMgdGhlIGZpcnN0IHR3byB2YWx1ZXMgKG1pbiwgbWF4KSBkdWUgdG8gaG93IHRoZSBydWxlIHdvcmtzXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9XHRtZXNzYWdlXHRcdFx0VGhlIG1lc3NhZ2UgdG8gdXNlIHdoZW4gdGhlIHJ1bGUgZmFpbHNcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcihmaWVsZCwgdmFsdWUsIHZhbGlkYXRvclZhbHVlcywgbWVzc2FnZSA9IFwiVGhlIDphdHRyIG11c3QgYmUgYmV0d2VlbiA6bWluIGFuZCA6bWF4XCIpIHtcclxuXHRcdGlmICh0eXBlb2YgdmFsaWRhdG9yVmFsdWVzICE9ICdvYmplY3QnIHx8IHZhbGlkYXRvclZhbHVlcy5jb25zdHJ1Y3Rvci5uYW1lICE9ICdBcnJheScpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihgSW1wcm9wZXIgdmFsaWRhdG9yIHZhbHVlIGZvcm1hdDpcXG5cXHROZWVkcyBhcnJheSwgJHt0eXBlb2YgdmFsaWRhdG9yVmFsdWVzfSBpcyBwYXNzZWRgKTtcclxuXHRcdGVsc2UgaWYgKHZhbGlkYXRvclZhbHVlcy5sZW5ndGggPCAyKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE5vdCBlbm91Z2ggdmFsaWRhdG9yIHZhbHVlIHBhc3NlZDpcXG5cXHROZWVkcyAyLCBvbmx5ICR7dmFsaWRhdG9yVmFsdWVzLmxlbmd0aH0gaXMgcGFzc2VkLmApO1xyXG5cclxuXHRcdGlmICh2YWxpZGF0b3JWYWx1ZXNbMF0gPiB2YWxpZGF0b3JWYWx1ZXNbMV0pXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihgTWluaW11bSB2YWx1ZSBpcyBsYXJnZXIgdGhhbiB0aGUgbWF4aW11bSB2YWx1ZTpcXG5cXHRNaW5pbXVtIHZhbHVlIHNob3VsZCBiZSBsZXNzIHRoYW4gJHt2YWxpZGF0b3JWYWx1ZXNbMV19LCAke3ZhbGlkYXRvclZhbHVlc1swXX0gaXMgcHJvdmlkZWQuYCk7XHJcblxyXG5cdFx0aWYgKHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgPT0gXCJBcnJheVwiKVxyXG5cdFx0XHR2YWx1ZSA9IHZhbHVlLmxlbmd0aDtcclxuXHJcblx0XHRtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlQWxsKC8oOm1pbikvZ2ksIHZhbGlkYXRvclZhbHVlc1swXSk7XHJcblx0XHRtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlQWxsKC8oOm1heCkvZ2ksIHZhbGlkYXRvclZhbHVlc1sxXSk7XHJcblxyXG5cdFx0c3VwZXIoZmllbGQsIHZhbHVlLCBbdmFsaWRhdG9yVmFsdWVzWzBdLCB2YWxpZGF0b3JWYWx1ZXNbMV1dLCBtZXNzYWdlKTtcclxuXHR9XHJcblxyXG5cdHZhbGlkYXRlKCkge1xyXG5cdFx0aWYgKG5ldyBOdW1lcmljKHRoaXMuX2ZpZWxkLCB0aGlzLl92YWx1ZSkudmFsaWRhdGUoKS52YWxpZCkge1xyXG5cdFx0XHRsZXQgaXNEZWNpbWFsID0gdGhpcy5fdmFsdWUuc3BsaXQoXCIuXCIpLmxlbmd0aCA+IDE7XHJcblx0XHRcdGxldCBjb252ZXJ0ZWQgPSBpc0RlY2ltYWwgPyBwYXJzZUZsb2F0KHRoaXMuX3ZhbHVlKSA6IHBhcnNlSW50KHRoaXMuX3ZhbHVlKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChjb252ZXJ0ZWQgPj0gdGhpcy5fdmFsaWRhdG9yVmFsdWVzWzBdICYmIGNvbnZlcnRlZCA8PSB0aGlzLl92YWxpZGF0b3JWYWx1ZXNbMV0pXHJcblx0XHRcdFx0dGhpcy5fdmFsaWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHZhbGlkOiB0aGlzLl92YWxpZCxcclxuXHRcdFx0bWVzc2FnZTogdGhpcy5fbWVzc2FnZVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBcnJheSBleHRlbmRzIFJ1bGUge1xyXG5cdC8qKlxyXG5cdCAqIFRlc3RzIHdoZXRoZXIgdGhlIHZhbHVlIGlzIG5vIG1vcmUgYW5kIGxlc3MgdGhhbiB0aGUgcHJvdmlkZWQgdmFsaWRhdG9yIHZhbHVlLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfVx0ZmllbGRcdFx0XHRUaGUgbmFtZSBvZiB0aGUgZmllbGQgYmVpbmcgdGVzdGVkXHJcblx0ICogQHBhcmFtIHtBbnl9IFx0dmFsdWVcdFx0XHRUaGUgdmFsdWUgdG8gdmFsaWRhdGVcclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVx0XHRcdFRoZSBtZXNzYWdlIHRvIHVzZSB3aGVuIHRoZSBydWxlIGZhaWxzXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoZmllbGQsIHZhbHVlLCBtZXNzYWdlID0gXCJUaGUgOmF0dHIgbXVzdCBiZSBhbiBhcnJheVwiKSB7XHJcblx0XHRzdXBlcihmaWVsZCwgdmFsdWUsIHVuZGVmaW5lZCwgbWVzc2FnZSk7XHJcblx0fVxyXG5cclxuXHR2YWxpZGF0ZSgpIHtcclxuXHRcdGlmICh0eXBlb2YgdGhpcy5fdmFsdWUgPT0gJ29iamVjdCcgJiYgdGhpcy5fdmFsdWUuY29uc3RydWN0b3IubmFtZSA9PSAnQXJyYXknKSB7XHJcblx0XHRcdHRoaXMuX3ZhbGlkID0gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR2YWxpZDogdGhpcy5fdmFsaWQsXHJcblx0XHRcdG1lc3NhZ2U6IHRoaXMuX21lc3NhZ2VcclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW4gZXh0ZW5kcyBSdWxlIHtcclxuXHQvKipcclxuXHQgKiBUZXN0cyB3aGV0aGVyIHRoZSB2YWx1ZSBpcyBubyBtb3JlIGFuZCBsZXNzIHRoYW4gdGhlIHByb3ZpZGVkIHZhbGlkYXRvciB2YWx1ZS5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge1N0cmluZ31cdGZpZWxkXHRcdFx0VGhlIG5hbWUgb2YgdGhlIGZpZWxkIGJlaW5nIHRlc3RlZFxyXG5cdCAqIEBwYXJhbSB7QW55fSBcdHZhbHVlXHRcdFx0VGhlIHZhbHVlIHRvIHZhbGlkYXRlXHJcblx0ICogQHBhcmFtIHtBcnJheX1cdHZhbGlkYXRvclZhbHVlc1x0QW4gYXJyYXkgb2YgdmFsdWVzIHRoYXQgdGhlIHZhbGlkYXRvciBoYXMuIE9ubHkgcmV0cmlldmVzIHRoZSBmaXJzdCB2YWx1ZSBkdWUgdG8gaG93IHRoZSBydWxlIHdvcmtzXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9XHRtZXNzYWdlXHRcdFx0VGhlIG1lc3NhZ2UgdG8gdXNlIHdoZW4gdGhlIHJ1bGUgZmFpbHNcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcihmaWVsZCwgdmFsdWUsIHZhbGlkYXRvclZhbHVlcywgbWVzc2FnZSA9IFwiVGhlIHNlbGVjdGVkIDphdHRyIGlzIGludmFsaWRcIikge1xyXG5cdFx0aWYgKHR5cGVvZiB2YWxpZGF0b3JWYWx1ZXMgIT0gJ29iamVjdCcgfHwgdmFsaWRhdG9yVmFsdWVzLmNvbnN0cnVjdG9yLm5hbWUgIT0gJ0FycmF5JylcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBJbXByb3BlciB2YWxpZGF0b3IgdmFsdWUgZm9ybWF0OlxcblxcdE5lZWRzIGFycmF5LCAke3R5cGVvZiB2YWxpZGF0b3JWYWx1ZXN9IGlzIHBhc3NlZGApO1xyXG5cdFx0ZWxzZSBpZiAodmFsaWRhdG9yVmFsdWVzLmxlbmd0aCA8IDEpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihgTm90IGVub3VnaCB2YWxpZGF0b3IgdmFsdWUgcGFzc2VkOlxcblxcdE5lZWRzIGF0IGxlYXN0IDEsIG9ubHkgJHt2YWxpZGF0b3JWYWx1ZXMubGVuZ3RofSBpcyBwYXNzZWQuYCk7XHJcblxyXG5cdFx0c3VwZXIoZmllbGQsIHZhbHVlLCB2YWxpZGF0b3JWYWx1ZXMsIG1lc3NhZ2UpO1xyXG5cdH1cclxuXHJcblx0dmFsaWRhdGUoKSB7XHJcblx0XHRpZiAodHlwZW9mIHRoaXMuX3ZhbHVlICE9ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdGlmICh0aGlzLl92YWxpZGF0b3JWYWx1ZXMuaW5jbHVkZXModGhpcy5fdmFsdWUudG9TdHJpbmcoKSkpIHtcclxuXHRcdFx0XHR0aGlzLl92YWxpZCA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR2YWxpZDogdGhpcy5fdmFsaWQsXHJcblx0XHRcdG1lc3NhZ2U6IHRoaXMuX21lc3NhZ2VcclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTnVsbGFibGUgZXh0ZW5kcyBSdWxlIHtcclxuXHQvKipcclxuXHQgKiBUZXN0cyB3aGV0aGVyIHRoZSB2YWx1ZSBpcyBudWxsIHdoZW4gbm8gb3RoZXIgdmFsdWUgaXMgcHJvdmlkZWQuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9XHRmaWVsZFx0XHRcdFRoZSBuYW1lIG9mIHRoZSBmaWVsZCBiZWluZyB0ZXN0ZWRcclxuXHQgKiBAcGFyYW0ge0FueX0gXHR2YWx1ZVx0XHRcdFRoZSB2YWx1ZSB0byB2YWxpZGF0ZVxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXHRcdFx0VGhlIG1lc3NhZ2UgdG8gdXNlIHdoZW4gdGhlIHJ1bGUgZmFpbHNcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcihmaWVsZCwgdmFsdWUsIG1lc3NhZ2UgPSBcIlRoZSA6YXR0ciBmaWVsZCBjYW4gYmUgbnVsbFwiKSB7XHJcblx0XHRzdXBlcihmaWVsZCwgdmFsdWUsIG1lc3NhZ2UpO1xyXG5cdH1cclxuXHJcblx0dmFsaWRhdGUoKSB7XHJcblx0XHRsZXQgcnVuT3RoZXJWYWxpZGF0aW9uID0gdHJ1ZTtcclxuXHRcdHRoaXMuX3ZhbGlkID0gdHJ1ZTtcclxuXHJcblx0XHRpZiAodGhpcy5fdmFsdWUgPT09IG51bGwgfHwgdGhpcy5fdmFsdWUgPT09IFwiXCIpIHtcclxuXHRcdFx0cnVuT3RoZXJWYWxpZGF0aW9uID0gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dmFsaWQ6IHRoaXMuX3ZhbGlkLFxyXG5cdFx0XHRtZXNzYWdlOiB0aGlzLl9tZXNzYWdlLFxyXG5cdFx0XHRydW5PdGhlclZhbGlkYXRpb246IHJ1bk90aGVyVmFsaWRhdGlvblxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTdHJpbmcgZXh0ZW5kcyBSdWxlIHtcclxuXHQvKipcclxuXHQgKiBUZXN0cyB3aGV0aGVyIHRoZSB2YWx1ZSBpcyBhIHN0cmluZyBvciBub3QuXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9XHRmaWVsZFx0XHRcdFRoZSBuYW1lIG9mIHRoZSBmaWVsZCBiZWluZyB0ZXN0ZWRcclxuXHQgKiBAcGFyYW0ge0FueX0gXHR2YWx1ZVx0XHRcdFRoZSB2YWx1ZSB0byB2YWxpZGF0ZVxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXHRcdFx0VGhlIG1lc3NhZ2UgdG8gdXNlIHdoZW4gdGhlIHJ1bGUgZmFpbHNcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcihmaWVsZCwgdmFsdWUsIG1lc3NhZ2UgPSBcIlRoZSA6YXR0ciBmaWVsZCBpcyBub3QgYSBzdHJpbmdcIikge1xyXG5cdFx0c3VwZXIoZmllbGQsIHZhbHVlLCBtZXNzYWdlKTtcclxuXHR9XHJcblxyXG5cdHZhbGlkYXRlKCkge1xyXG5cdFx0aWYgKCF0aGlzLl92YWx1ZSkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHZhbGlkOiB0aGlzLl92YWxpZCxcclxuXHRcdFx0XHRtZXNzYWdlOiB0aGlzLl9tZXNzYWdlXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRsZXQgcmVzcG9uc2UgPSB0aGlzLl92YWx1ZS5tYXRjaCgvW2EtekEtWjAtOVxcLixcXFxcXFwvXCInXFwoXFwpXFxbXFxde31cXC1cXCtfPVxcKlxcJiVcXCFAI1xcJFxcXjw+XFw/XFxzXSsvKTtcclxuXHRcdHJlc3BvbnNlID0gcmVzcG9uc2UgPz8gW107XHJcblxyXG5cdFx0aWYgKHJlc3BvbnNlLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHR0aGlzLl92YWxpZCA9IHRydWU7XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dmFsaWQ6IHRoaXMuX3ZhbGlkLFxyXG5cdFx0XHRtZXNzYWdlOiB0aGlzLl9tZXNzYWdlXHJcblx0XHR9O1xyXG5cdH1cclxufSIsIi8vIFV0aWxpdHlcclxuaW1wb3J0IFVuaXF1ZUFycmF5IGZyb20gXCIuLi8uLi8uLi9qcy91dGlsL3VuaXF1ZS1hcnJheS91bmlxdWUtYXJyYXkubW9kLmpzXCI7XHJcbmltcG9ydCAqIGFzIFJ1bGVzIGZyb20gXCIuL1J1bGVzLmpzXCI7XHJcblxyXG4vLyBNb2R1bGVcclxuaW1wb3J0IE1lc3NhZ2VCYWcgZnJvbSBcIi4vTWVzc2FnZUJhZy5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsaWRhdG9yIHtcclxuXHQvKipcclxuXHQgKiBBIGNvbnRhaW5lciBmb3IgYWxsIGFycmF5IGZpZWxkcyBwYXNzZWQgdG8gdGhpcyB2YWxpZGF0b3IuIFZhbHVlcyBjb250YWluZWQgaW4gaGVyZVxyXG5cdCAqIGFyZSBmb3JtYXR0ZWQgdG8gYmUgYSBrZXktdmFsdWUgcGFpci5cclxuXHQgKi9cclxuXHQjYXJyRmllbGRzSW5kZXggPSB7fTtcclxuXHQvKipcclxuXHQgKiBBIGNvbnRhaW5lciBmb3IgYWxsIHRoZSBmaWVsZHMgdGhhdCBhcmUgZG9uZSBiZWluZyB2YWxpZGF0ZWQuXHJcblx0ICovXHJcblx0I2NoZWNrZWRGaWVsZHMgPSBbXTtcclxuXHQvKipcclxuXHQgKiBBIGNvbnRhaW5lciBmb3IgYWxsIHRoZSBuZXcgZmllbGQgbmFtZXNcclxuXHQgKi9cclxuXHQjZmllbGROYW1lcyA9IFtdO1xyXG5cclxuXHQvLyBQcml2YXRlIHZhcmlhYmxlc1xyXG5cdC8qKlxyXG5cdCAqIEEgcHJpdmF0ZSBnbG9iYWwgdmFyaWFibGUgY29udGFpbmVyIGZvciBhbGwgdGhlIHZhbHVlcyBwYXNzZWQgdG8gdGhpcy5cclxuXHQgKi9cclxuXHQjdmFsdWVMaXN0O1xyXG5cdC8qKlxyXG5cdCAqIEEgcHJpdmF0ZSBnbG9iYWwgdmFyaWFibGUgY29udGFpbmVyIGZvciBhbGwgdGhlIHJ1bGVzIHBhc3NlZCB0byB0aGlzLlxyXG5cdCAqL1xyXG5cdCNydWxlTGlzdDtcclxuXHQvKipcclxuXHQgKiBBIHByaXZhdGUgZ2xvYmFsIHZhcmlhYmxlIGNvbnRhaW5lciBmb3IgYWxsIHRoZSBtZXNzYWdlcyBwYXNzZWQgdG8gdGhpcy5cclxuXHQgKi9cclxuXHQjbWVzc2FnZUxpc3Q7XHJcblx0LyoqXHJcblx0ICogQSBwcml2YXRlIGdsb2JhbCB2YXJpYWJsZSBjb250YWluZXIgZm9yIHRoZSBgTWVzc2FnZUJhZ2AgaW5zdGFuY2UuXHJcblx0ICovXHJcblx0I2Vycm9ycztcclxuXHQvKipcclxuXHQgKiBBIHByaXZhdGUgZ2xvYmFsIHZhcmlhYmxlIGNvbnRhaW5lciwgY29udGFpbmluZyBhbGwgdmFsaWQgdmFsdWVzLlxyXG5cdCAqL1xyXG5cdCN2YWxpZGF0ZWQgPSB7fTtcclxuXHQvKipcclxuXHQgKiBBIHByaXZhdGUgZ2xvYmFsIHZhcmlhYmxlIGNvbnRhaW5lciwgaWRlbnRpZnlpbmcgaWYgdGhpcyB2YWxpZGF0b3IncyB2YWxpZGF0aW9uIGhhcyBmYWlsZWQuXHJcblx0ICovXHJcblx0I2ZhaWxlZCA9IGZhbHNlO1xyXG5cdC8qKlxyXG5cdCAqIEEgcHJpdmF0ZSBnbG9iYWwgdmFyaWFibGUgY29udGFpbmVyIHRoYXQgZGV0ZXJtaW5lcyBpZiB0aGUgdmFsaWRhdGlvbiBoYXMgYmVlbiBydW4gYWxyZWFkeS5cclxuXHQgKi9cclxuXHQjdmFsaWRhdGlvbkRvbmUgPSBmYWxzZTtcclxuXHJcblx0LyoqXHJcblx0ICogXHJcblx0ICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIGEgVmFsaWRhdG9yXHJcblx0ICogKiAqICpcclxuXHQgKiAqKkV4YW1wbGUgQS4xOioqXHJcblx0ICogYGBgamF2YXNjcmlwdFxyXG5cdCAqIGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiBcdCAqIFx0bGV0IHZhbGlkID0gZmFsc2U7XHJcbiBcdCAqIFx0bGV0IG1zZyA9IFwiUHJvdmlkZWQgdmFsdWUgaXMgbm90IGFuIGFycmF5XCI7XHJcbiBcdCAqIFxyXG5cdCAqIFx0aWYgKHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiQXJyYXlcIilcclxuXHQgKiBcdFx0dmFsaWQgPSB0cnVlO1xyXG5cdCAqIFxyXG5cdCAqIFx0cmV0dXJuIHtcclxuXHQgKiBcdFx0dmFsaWQ6IHZhbGlkLFxyXG5cdCAqIFx0XHRtZXNzYWdlOiBtc2dcclxuXHQgKiBcdH07XHJcblx0ICogfVxyXG5cdCAqIGBgYFxyXG5cdCAqICogKiAqXHJcblx0ICogKipFeGFtcGxlIEEuMjoqKlxyXG5cdCAqIGBgYGphdmFzY3JpcHRcclxuXHQgKiAodmFsdWUpID0+IHtcclxuXHQgKiBcdGxldCB2YWxpZCA9IGZhbHNlO1xyXG4gXHQgKiBcdGxldCBtc2cgPSBcIlByb3ZpZGVkIHZhbHVlIGlzIG5vdCBhbiBhcnJheVwiO1xyXG4gXHQgKiBcclxuXHQgKiBcdGlmICh2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIkFycmF5XCIpXHJcblx0ICogXHRcdHZhbGlkID0gdHJ1ZTtcclxuXHQgKiBcclxuXHQgKiBcdHJldHVybiB7XHJcblx0ICogXHRcdHZhbGlkOiB2YWxpZCxcclxuXHQgKiBcdFx0bWVzc2FnZTogbXNnXHJcblx0ICogXHR9O1xyXG5cdCAqIH1cclxuXHQgKiBgYGBcclxuXHQgKiAqICogKlxyXG5cdCAqICoqRXhhbXBsZSBCLjE6KipcclxuXHQgKiBgYGBqYXZhc2NyaXB0XHJcblx0ICogZnVuY3Rpb24oKSB7XHJcblx0ICogXHRsZXQgdmFsaWQgPSBmYWxzZTtcclxuIFx0ICogXHRsZXQgbXNnID0gXCJQcm92aWRlZCB2YWx1ZSBpcyBub3QgYW4gYXJyYXlcIjtcclxuIFx0ICogXHJcblx0ICogXHRpZiAodHlwZW9mIGdsb2JhbFZhciAhPSBcInVuZGVmaW5lZFwiKVxyXG5cdCAqIFx0XHR2YWxpZCA9IHRydWU7XHJcblx0ICogXHRcclxuXHQgKiBcdHJldHVybiB7XHJcblx0ICogXHRcdHZhbGlkOiB2YWxpZCxcclxuXHQgKiBcdFx0bWVzc2FnZTogbXNnXHJcblx0ICogXHR9O1xyXG5cdCAqIH1cclxuXHQgKiBgYGBcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge09iamVjdH1cdHZhbHVlc1x0QSBKU09OIG9iamVjdCBjb250YWluaW5nIGEga2V5LXZhbHVlIHBhaXIgZm9yIHRoZSBmaWVsZHMgYW5kIGl0cyB2YWx1ZS5cclxuXHQgKiBAcGFyYW0ge09iamVjdH1cdHJ1bGVzXHRBIEpTT04gb2JqZWN0IGNvbnRhaW5pbmcgYSBrZXktdmFsdWUgcGFpciBmb3IgdGhlIGZpZWxkcycgcnVsZXMuIEEgcnVsZSBtdXN0IGJlIG9uZSBvZiB0aGUgY2xhc3NlcyB3aXRoaW4gYFJ1bGUuanNgIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIHRoYXQgdGFrZXMgaW4gMSBwYXJhbWV0ZXIgKHZhbHVlKSBhbmQgcmV0dXJucyBhIEpTT04gb2JqZWN0IHdpdGggMiB2YWx1ZXMgKHZhbGlkOiBib29sZWFuLCBtZXNzYWdlOiBTdHJpbmcpLiBBbiBleGFtcGxlIG9mIGEgZnVuY3Rpb24gaXMgKipFeGFtcGxlIEEuMSoqLCAqKkV4YW1wbGUgQS4yKiosIGFuZCAqKkV4YW1wbGUgQi4xKipcclxuXHQgKiBAcGFyYW0ge09iamVjdH1cdG1lc3NhZ2VcdEEgSlNPTiBvYmplY3QgY29udGFpbmluZyBhIGtleS12YWx1ZSBwYWlyIGZvciB0aGUgZmllbGRzJyBtZXNzYWdlc1xyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKHZhbHVlcywgcnVsZXMsIG1lc3NhZ2VzKSB7XHJcblx0XHQvLyBJbml0aWFsaXplIG5lY2Vzc2FyeSB1dGlsaXRpZXNcclxuXHRcdFVuaXF1ZUFycmF5KCk7XHJcblxyXG5cdFx0Ly8gU2V0IGV4dGVybmFsIHZhcmlhYmxlc1xyXG5cdFx0dGhpcy4jdmFsdWVMaXN0ID0gdmFsdWVzO1xyXG5cdFx0dGhpcy4jcnVsZUxpc3QgPSBydWxlcztcclxuXHRcdHRoaXMuI21lc3NhZ2VMaXN0ID0gbWVzc2FnZXM7XHJcblxyXG5cdFx0dGhpcy4jZXJyb3JzID0gbmV3IE1lc3NhZ2VCYWcoKTtcclxuXHR9XHJcblx0XHJcblx0LyoqXHJcblx0ICogUnVucyB0aGUgdmFsaWRhdGlvbi5cclxuXHQgKi9cclxuXHQjcnVuVmFsaWRhdGlvbigpIHtcclxuXHRcdGZvciAobGV0IGsgb2YgT2JqZWN0LmtleXModGhpcy4jcnVsZUxpc3QpKSB7XHJcblx0XHRcdC8vIElkZW50aWZ5IHRoZWlyIGZpZWxkIG5hbWUgYW5kIHZhbHVlc1xyXG5cdFx0XHRsZXQgZmllbGQgPSBrO1xyXG5cdFx0XHRsZXQgaW5kZXggPSAwO1xyXG5cdFx0XHRsZXQgcnVuT3RoZXJWYWxpZGF0aW9uID0gZmFsc2U7XHJcblxyXG5cdFx0XHQvLyBGZXRjaCBydWxlcyBhbmQgbWVzc2FnZXNcclxuXHRcdFx0bGV0IHJ1bGVzID0gVmFsaWRhdG9yLiNmZXRjaFJ1bGVzKGZpZWxkLCB0aGlzLiNydWxlTGlzdCwgaW5kZXgpO1xyXG5cdFx0XHRsZXQgbWVzc2FnZXMgPSBWYWxpZGF0b3IuI2ZldGNoTWVzc2FnZXMoZmllbGQsIHRoaXMuI21lc3NhZ2VMaXN0LCBpbmRleCk7XHJcblxyXG5cdFx0XHQvLyBWZXJpZnkgaWYgYSBcInJlcXVpcmVkXCIgcnVsZSBleGlzdHMuIElmIGl0IGRvZXMsIHRoZW4ganVzdCBydW4gdGhlIHZhbGlkYXRpb24gZm9yIHRoYXQgcnVsZSBvbmx5LlxyXG5cdFx0XHRpZiAocnVsZXMuaW5jbHVkZXMoJ3JlcXVpcmVkJykpIHtcclxuXHRcdFx0XHRydW5PdGhlclZhbGlkYXRpb24gPSB0aGlzLiN2YWxpZGF0ZUZpZWxkKGZpZWxkLCB0aGlzLiN2YWx1ZUxpc3RbZmllbGRdLCBbXCJyZXF1aXJlZFwiXSwgbWVzc2FnZXMpO1xyXG5cdFx0XHRcdHJ1bGVzLnNwbGljZShydWxlcy5pbmRleE9mKFwicmVxdWlyZWRcIiksIDEpO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIFZlcmlmeSBpZiBhIFwicmVxdWlyZWRfaWZcIiBydWxlIGV4aXN0cy4gSWYgaXQgZG9lcywgdGhlbiBqdXN0IHJ1biB0aGUgdmFsaWRhdGlvbiBmb3IgdGhhdCBydWxlIG9ubHkuXHJcblx0XHRcdGVsc2UgaWYgKHJ1bGVzLnRvU3RyaW5nKCkubWF0Y2goXCJyZXF1aXJlZF9pZlwiKSkge1xyXG5cdFx0XHRcdGxldCBydWxlSW5kZXggPSAwO1xyXG5cdFx0XHRcdHJ1bGVzLmZvckVhY2goKHYsIGspID0+IHtcclxuXHRcdFx0XHRcdGlmICh2Lm1hdGNoKC9yZXF1aXJlZF9pZi9nKSkge1xyXG5cdFx0XHRcdFx0XHRydWxlSW5kZXggPSBrO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGxldCBydWxlID0gcnVsZXMuc3BsaWNlKHJ1bGVJbmRleCwgMSk7XHJcblxyXG5cdFx0XHRcdHJ1bk90aGVyVmFsaWRhdGlvbiA9IHRoaXMuI3ZhbGlkYXRlRmllbGQoZmllbGQsIHRoaXMuI3ZhbHVlTGlzdFtmaWVsZF0sIHJ1bGUsIG1lc3NhZ2VzKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBWZXJpZnkgaWYgYSBcInNvbWV0aW1lc1wiIHJ1bGUgZXhpc3RzLiBJZiBpdCBkb2VzLCB0aGVuIGp1c3QgcnVuIHRoZSB2YWxpZGF0aW9uIGZvciB0aGF0IHJ1bGUgb25seS5cclxuXHRcdFx0ZWxzZSBpZiAocnVsZXMuaW5jbHVkZXMoJ3NvbWV0aW1lcycpKSB7XHJcblx0XHRcdFx0cnVuT3RoZXJWYWxpZGF0aW9uID0gdGhpcy4jdmFsaWRhdGVGaWVsZChmaWVsZCwgdGhpcy4jdmFsdWVMaXN0W2ZpZWxkXSwgW1wic29tZXRpbWVzXCJdLCBtZXNzYWdlcyk7XHJcblx0XHRcdFx0cnVsZXMuc3BsaWNlKHJ1bGVzLmluZGV4T2YoXCJzb21ldGltZXNcIiksIDEpO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIFZlcmlmeSBpZiBhIFwibnVsbGFibGVcIiBydWxlIGV4aXN0cy4gSWYgaXQgZG9lcywgdGhlbiBqdXN0IHJ1biB0aGUgdmFsaWRhdGlvbiBmb3IgdGhhdCBydWxlIG9ubHkuXHJcblx0XHRcdGVsc2UgaWYgKHJ1bGVzLmluY2x1ZGVzKGBudWxsYWJsZWApKSB7XHJcblx0XHRcdFx0cnVuT3RoZXJWYWxpZGF0aW9uID0gdGhpcy4jdmFsaWRhdGVGaWVsZChmaWVsZCwgdGhpcy4jdmFsdWVMaXN0W2ZpZWxkXSwgW1wibnVsbGFibGVcIl0sIG1lc3NhZ2VzKTtcclxuXHRcdFx0XHRydWxlcy5zcGxpY2UocnVsZXMuaW5kZXhPZihcIm51bGxhYmxlXCIpLCAxKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gVGhlIGFjdHVhbCB2YWxpZGF0aW9uOyBMTUFPXHJcblx0XHRcdGlmIChydW5PdGhlclZhbGlkYXRpb24pIHtcclxuXHRcdFx0XHR0aGlzLiN2YWxpZGF0ZUZpZWxkKGZpZWxkLCB0aGlzLiN2YWx1ZUxpc3RbZmllbGRdLCBydWxlcywgbWVzc2FnZXMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLiNjaGVja2VkRmllbGRzLnB1c2goZmllbGQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLiNlcnJvcnMuZmllbGRzKCkubGVuZ3RoID4gMClcclxuXHRcdFx0dGhpcy4jZmFpbGVkID0gdHJ1ZTtcclxuXHJcblx0XHR0aGlzLiN2YWxpZGF0aW9uRG9uZSA9IHRydWU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBGZXRjaGVzIHRoZSBydWxlcyBmcm9tIHRoZSBKU09OIG9iamVjdCBwYXNzZWQgYXQgYG9iamAgdXNpbmcgdGhlIHByb3ZpZGVkIGZpZWxkIG5hbWUgYXQgYGZpZWxkYFxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfVx0ZmllbGRcdFx0XHRcdFRoZSBuYW1lIG9mIHRoZSBmaWVsZCB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBydWxlIGtleVxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fVx0b2JqXHRcdFx0XHRcdFRoZSBKU09OIG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSBydWxlcyBwYXNzZWQgdG8gdGhlIFZhbGlkYXRvciBpbnN0YW5jZVxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfVx0aW5kZXhcdFx0XHRcdElmIHRoZSBwYXNzZWQgZmllbGQgaXMgYW4gYXJyYXksIHRoZSBgaW5kZXhgIHdpbGwgaWRlbnRpZnkgd2hhdCBpbmRleCB0aGUgZmllbGQgaXMgdG8gYWNjdXJhdGVseSBmZXRjaCB0aGUgcnVsZSBmb3IgdGhhdCBzcGVjaWZpYyBmaWVsZDsgRGVmYXVsdHMgdG8gMCBpZiBubyB2YWx1ZSBpcyBwYXNzZWRcclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59XHRpc0FycmF5Q29udGFpbmVyXHRJZGVudGlmeSBpZiB0aGUgZmllbGQgYmVpbmcgcGFzc2VkIGlzIGFuIGFycmF5IGNvbnRhaW5lci4gQW4gYXJyYXkgY29udGFpbmVyIGlzIGEgZmllbGQgd2hpY2ggaGFzIGEgc3F1YXJlIGJyYWNrZXQgKGBbXWApOyBEZWZhdWx0cyB0byBgZmFsc2VgIGlmIG5vIHZhbHVlIGlzIHBhc3NlZC5cclxuXHQgKiBcclxuXHQgKiBAcmV0dXJuIHtPYmplY3R9XHRcdEEgSlNPTiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIHJ1bGVzIGZvciB0aGUgcHJvdmlkZWQgYGZpZWxkYFxyXG5cdCAqL1xyXG5cdHN0YXRpYyAjZmV0Y2hSdWxlcyhmaWVsZCwgb2JqLCBpbmRleCA9IDAsIGlzQXJyYXlDb250YWluZXIgPSBmYWxzZSkge1xyXG5cdFx0bGV0IHJ1bGVzID0gb2JqW2ZpZWxkXTtcclxuXHRcdHJ1bGVzID0gKHR5cGVvZiBydWxlcyA9PSAndW5kZWZpbmVkJykgPyBbXSA6IHJ1bGVzO1xyXG5cclxuXHRcdGlmICghaXNBcnJheUNvbnRhaW5lcikge1xyXG5cdFx0XHRmaWVsZCA9IGZpZWxkLnN1YnN0cigwLCBmaWVsZC5sYXN0SW5kZXhPZihcIi5cIikpO1xyXG5cclxuXHRcdFx0bGV0IGFkZGl0aW9uYWxSdWxlcyA9IG9ialtgJHtmaWVsZH0uJHtpbmRleH1gXTtcclxuXHRcdFx0cnVsZXMgPSAodHlwZW9mIGFkZGl0aW9uYWxSdWxlcyA9PSAndW5kZWZpbmVkJykgPyBydWxlcyA6IHJ1bGVzLmNvbmNhdChhZGRpdGlvbmFsUnVsZXMpO1xyXG5cclxuXHRcdFx0YWRkaXRpb25hbFJ1bGVzID0gb2JqW2Ake2ZpZWxkfS4qYF07XHJcblx0XHRcdHJ1bGVzID0gKHR5cGVvZiBhZGRpdGlvbmFsUnVsZXMgPT0gJ3VuZGVmaW5lZCcpID8gcnVsZXMgOiBydWxlcy5jb25jYXQoYWRkaXRpb25hbFJ1bGVzKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcnVsZXMudW5pcSgpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRmV0Y2hlcyB0aGUgbWVzc2FnZXMgZnJvbSB0aGUgSlNPTiBvYmplY3QgcGFzc2VkIGF0IGBvYmpgIHVzaW5nIHRoZSBwcm92aWRlZCBmaWVsZCBuYW1lIGF0IGBmaWVsZGBcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge1N0cmluZ31cdGZpZWxkXHRcdFx0XHRUaGUgYmFzZSBuYW1lIG9mIHRoZSBmaWVsZCB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBydWxlIGtleVxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fVx0b2JqXHRcdFx0XHRcdFRoZSBKU09OIG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSBtZXNzYWdlcyBwYXNzZWQgdG8gdGhlIFZhbGlkYXRvciBpbnN0YW5jZVxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfVx0aW5kZXhcdFx0XHRcdElmIHRoZSBwYXNzZWQgZmllbGQgaXMgYW4gYXJyYXksIHRoZSBgaW5kZXhgIHdpbGwgaWRlbnRpZnkgd2hhdCBpbmRleCB0aGUgZmllbGQgaXMgdG8gYWNjdXJhdGVseSBmZXRjaCB0aGUgcnVsZSBmb3IgdGhhdCBzcGVjaWZpYyBmaWVsZDsgRGVmYXVsdHMgdG8gMCBpZiBubyB2YWx1ZSBpcyBwYXNzZWRcclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59XHRpc0FycmF5Q29udGFpbmVyXHRJZGVudGlmeSBpZiB0aGUgZmllbGQgYmVpbmcgcGFzc2VkIGlzIGFuIGFycmF5IGNvbnRhaW5lci4gQW4gYXJyYXkgY29udGFpbmVyIGlzIGEgZmllbGQgd2hpY2ggaGFzIGEgc3F1YXJlIGJyYWNrZXQgKGBbXWApOyBEZWZhdWx0cyB0byBgZmFsc2VgIGlmIG5vIHZhbHVlIGlzIHBhc3NlZC5cclxuXHQgKiBcclxuXHQgKiBAcmV0dXJuIHtPYmplY3R9XHRcdEEgSlNPTiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIG1lc3NhZ2UgZm9yIHRoZSBwcm92aWRlZCBgZmllbGRgXHJcblx0ICovXHJcblx0c3RhdGljICNmZXRjaE1lc3NhZ2VzKGZpZWxkLCBvYmosIGluZGV4ID0gMCwgaXNBcnJheUNvbnRhaW5lciA9IGZhbHNlKSB7XHJcblx0XHRsZXQgbWVzc2FnZXMgPSBvYmpbZmllbGRdO1xyXG5cdFx0bWVzc2FnZXMgPSAodHlwZW9mIG1lc3NhZ2VzID09ICd1bmRlZmluZWQnKSA/IHt9IDogbWVzc2FnZXM7XHJcblxyXG5cdFx0aWYgKCFpc0FycmF5Q29udGFpbmVyKSB7XHJcblx0XHRcdGZpZWxkID0gZmllbGQuc3Vic3RyKDAsIGZpZWxkLmxhc3RJbmRleE9mKFwiLlwiKSk7XHJcblx0XHRcdGxldCBhZGRpdGlvbmFsTWVzc2FnZXMgPSBvYmpbYCR7ZmllbGR9LiR7aW5kZXh9YF07XHJcblx0XHRcdG1lc3NhZ2VzID0gKHR5cGVvZiBhZGRpdGlvbmFsUnVsZXMgPT0gJ3VuZGVmaW5lZCcpID8gbWVzc2FnZXMgOiBPYmplY3QuYXNzaWduKG1lc3NhZ2VzLCBhZGRpdGlvbmFsTWVzc2FnZXMpO1xyXG5cclxuXHRcdFx0YWRkaXRpb25hbE1lc3NhZ2VzID0gb2JqW2Ake2ZpZWxkfS4qYF07XHJcblx0XHRcdG1lc3NhZ2VzID0gKHR5cGVvZiBhZGRpdGlvbmFsUnVsZXMgPT0gJ3VuZGVmaW5lZCcpID8gbWVzc2FnZXMgOiBPYmplY3QuYXNzaWduKG1lc3NhZ2VzLCBhZGRpdGlvbmFsTWVzc2FnZXMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBtZXNzYWdlcztcclxuXHR9XHJcblxyXG5cdC8vIFBSSVZBVEUgTUVUSE9EU1xyXG5cdC8qKlxyXG5cdCAqIFZhbGlkYXRlcyBhIHNpbmdsZSBmaWVsZCB1c2luZyB0aGUgcnVsZXMgcHJvdmlkZWQuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9XHRmaWVsZFx0XHRUaGUgbmFtZSBvZiB0aGUgZmllbGQgdGhhdCB3aWxsIGJlIHZhbGlkYXRlZFxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fVx0cnVsZXNcdFx0QSBKU09OIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgcnVsZXMgZm9yIHRoaXMgZmllbGQuIFVzZSB0aGUgYCNmZXRjaFJ1bGVzKClgIG1ldGhvZCB0byBkbyB0aGlzXHJcblx0ICogQHBhcmFtIHtPYmplY3R9XHRtZXNzYWdlc1x0QSBKU09OIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgbWVzc2FnZXMgZm9yIHRoaXMgZmllbGQuIFVzZSB0aGUgYCNmZXRjaE1lc3NhZ2VzKClgIG1ldGhvZCB0byBkbyB0aGlzXHJcblx0ICogXHJcblx0ICogQHJldHVybiB7Qm9vbGVhbn1cdFx0QSBib29sZWFuIHZhbHVlIHdoaWNoIGlkZW50aWZpZXMgaWYgdGhlIG90aGVyIHZhbGlkYXRpb25zIHNob3VsZCBiZSBjaGVja2VkIG9yIG5vdC5cclxuXHQgKi9cclxuXHQjdmFsaWRhdGVGaWVsZChmaWVsZCwgdmFsdWUsIHJ1bGVzLCBtZXNzYWdlcywgaXNBcnJheSA9IGZhbHNlKSB7XHJcblx0XHQvLyBBbiBpdGVyYWJsZSBpbmRleCB1c2VkIHRvIGlkZW50aWZ5IGhvdyBtYW55IGN1c3RvbSBmdW5jdGlvbiBydWxlcyBhcmUgcHJvdmlkZWQuXHJcblx0XHRsZXQgY2xvc3VyZUluZGV4ID0gMDtcclxuXHJcblx0XHQvLyBDb250YWlucyBhbGwgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvblxyXG5cdFx0bGV0IHZhbGlkYXRpb25SZXN1bHQgPSBbXTtcclxuXHRcdGxldCBydW5PdGhlclZhbGlkYXRpb24gPSB0cnVlO1xyXG5cclxuXHRcdC8vIEl0ZXJhdGUgdGhyb3VnaCB0aGUgcnVsZXNcclxuXHRcdGZvciAobGV0IHJ1bGUgb2YgcnVsZXMpIHtcclxuXHRcdFx0bGV0IG9nUnVsZSA9IHJ1bGU7XHJcblx0XHRcdGxldCBtZXNzYWdlID0gbWVzc2FnZXNbcnVsZV07XHJcblx0XHRcdGxldCB2YWxpZGF0b3JWYWx1ZXM7XHJcblx0XHRcdGxldCBydWxlVHlwZTtcclxuXHRcdFx0XHJcblx0XHRcdGlmICh0eXBlb2YgcnVsZSA9PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0Ly8gSWYgdGhlIHJ1bGUgY29udGFpbnMgYSB2YWx1ZSAoZGVub3RlZCBieSBhIGNvbG9uICg6KSksIHJlbW92ZXMgdGhlIGxhdHRlciBoYWxmIG9mIHRoZSBydWxlXHJcblx0XHRcdFx0aWYgKHJ1bGUuc3BsaXQoXCI6XCIpLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0XHRcdHZhbGlkYXRvclZhbHVlcyA9IHJ1bGUuc3BsaXQoXCI6XCIpWzFdLnNwbGl0KC9cXHMqLFxccyovKTtcclxuXHRcdFx0XHRcdHJ1bGUgPSBydWxlLnNwbGl0KFwiOlwiKVswXTtcclxuXHRcdFx0XHRcdG1lc3NhZ2UgPSBtZXNzYWdlc1tydWxlXTtcclxuXHJcblx0XHRcdFx0XHRpZiAocnVsZSA9PT0gXCJyZXF1aXJlZF9pZlwiKSB7XHJcblx0XHRcdFx0XHRcdHZhbGlkYXRvclZhbHVlcy5wdXNoKHRoaXMuI3ZhbHVlTGlzdFt2YWxpZGF0b3JWYWx1ZXNbMF1dKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIFNwbGl0IHRoZSBydWxlIHVzaW5nIHRoZSB1bmRlcnNjb3JlIChfKSBhbmQgcmVzZXRzIHRoZSBydWxlIHZhcmlhYmxlXHJcblx0XHRcdFx0bGV0IHNwbGljZWRSdWxlID0gcnVsZS5zcGxpdChcIl9cIik7XHJcblx0XHRcdFx0cnVsZSA9IFwiXCI7XHJcblxyXG5cdFx0XHRcdC8vIEl0ZXJhdGUgdGhyb3VnaCB0aGUgc3BsaWNlZCBydWxlIGZyb20gZWFybGllciBhbmQgYWRkIHRoZW0gdXAgdG8gYmUgYSBcIlBhc2NhbENhc2VcIlxyXG5cdFx0XHRcdGZvciAobGV0IHIgb2Ygc3BsaWNlZFJ1bGUpXHJcblx0XHRcdFx0XHRydWxlICs9IHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyByLnNsaWNlKDEpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCBydWxlTmFtZSA9IHJ1bGU7XHJcblxyXG5cdFx0XHQvLyBVc2VzIHRyeS1jYXRjaCB0byBwcmV2ZW50IHRoZSBzY3JpcHQgZnJvbSBzdG9wcGluZyB3aGVuIGFuIHVua25vd24gcnVsZSBpcyBlbmNvdW50ZXJlZC5cclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHQvLyBJZiB0aGUgcnVsZSBpcyBhIHN0cmluZyBuYW1lLCB0aGVuIHByb2NlZWQgd2l0aCB1c2luZyBpdCB3aXRoIHRoZSBgUnVsZXNgLlxyXG5cdFx0XHRcdGlmICh0eXBlb2YgcnVsZSA9PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0XHRydWxlID0gKHR5cGVvZiB2YWxpZGF0b3JWYWx1ZXMgPT0gJ3VuZGVmaW5lZCcpID8gbmV3IFJ1bGVzW3J1bGVdKGZpZWxkLCB2YWx1ZSwgbWVzc2FnZSkgOiBuZXcgUnVsZXNbcnVsZV0oZmllbGQsIHZhbHVlLCB2YWxpZGF0b3JWYWx1ZXMsIG1lc3NhZ2UpO1xyXG5cdFx0XHRcdFx0cnVsZSA9IHJ1bGUudmFsaWRhdGUoKTtcclxuXHRcdFx0XHRcdHJ1bGVUeXBlID0gXCJzdHJpbmdcIjtcclxuXHJcblx0XHRcdFx0XHRpZiAodHlwZW9mIHJ1bGUucnVuT3RoZXJWYWxpZGF0aW9uID09ICdib29sZWFuJykge1xyXG5cdFx0XHRcdFx0XHRydW5PdGhlclZhbGlkYXRpb24gPSBydWxlLnJ1bk90aGVyVmFsaWRhdGlvbjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gSWYgdGhlIHJ1bGUgaXMgYSBmdW5jdGlvbjsgYW4gYW5vbnltb3VzIG9yIGEgbmFtZWQgZnVuY3Rpb24sIHByb2NlZWQgd2l0aCBqdXN0IHVzaW5nIHRoZSBmdW5jdGlvbi5cclxuXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgcnVsZSA9PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0XHRcdGxldCBjdXN0b21SdWxlO1xyXG5cdFx0XHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIGZ1bmN0aW9uIGhhcyAyIHBhcmFtZXRlcnMgb3Igbm90XHJcblx0XHRcdFx0XHRpZiAocnVsZS5sZW5ndGggPT0gMikge1xyXG5cdFx0XHRcdFx0XHQvLyBSdW5zIHRoZSBmdW5jdGlvbi4gTXVzdCByZXR1cm4gYW4gb2JqZWN0XHJcblx0XHRcdFx0XHRcdGN1c3RvbVJ1bGUgPSBydWxlKGZpZWxkLCB2YWx1ZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvLyBJZiB0aGUgY3VzdG9tIGZ1bmN0aW9uIGlzIG5vdCBleGFjdGx5IDIgcGFyYW1ldGVycywgc2tpcCBhbmQgd2FybiB0aGUgZGV2ZWxvcGVyXHJcblx0XHRcdFx0XHRlbHNlIGlmIChydWxlLmxlbmd0aCA+IDIgfHwgKHJ1bGUubGVuZ3RoIDwgMiAmJiBydWxlLmxlbmd0aCAhPSAwKSkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFwiUHJvdmlkZWQgcnVsZSBjYW5ub3QgYmUgZXhlY3V0ZWQgYXMgaXQgZG9lcyBub3QgZm9sbG93IHRoZSByZXF1aXJlZCBmb3JtYXQuXCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8gT3RoZXJ3aXNlLCBpZiB0aGUgY3VzdG9tIGRvZXMgbm90IGhhdmUgYSBwYXJhbWV0ZXIsIHRoZW4ganVzdCBjYWxsIGl0LlxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdGN1c3RvbVJ1bGUgPSBydWxlKCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8gQWZ0ZXIgcnVubmluZyB0aGUgY3VzdG9tIHJ1bGUsIHJ1biBhIGNoZWNrLi4uXHJcblx0XHRcdFx0XHQvLyBJZiB0aGUgcmV0dXJuZWQgdmFsdWUgZnJvbSB0aGUgY3VzdG9tIHJ1bGUgaXNuJ3QgYW4gb2JqZWN0Li4uXHJcblx0XHRcdFx0XHRpZiAodHlwZW9mIGN1c3RvbVJ1bGUgIT09ICdvYmplY3QnKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUud2FybihcIkN1c3RvbSBydWxlIG11c3QgcmV0dXJuIGEgSlNPTiBvYmplY3QsIGNvbnRhaW5pbmcgdGhlIGZvbGxvd2luZyBrZXlzOlwiLCBbXCJ2YWxpZFwiLCBcIm1lc3NhZ2VcIl0pO1xyXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vIElmIHRoZSByZXR1cm5lZCB2YWx1ZSBpcyBhbiBPYmplY3QsIGNoZWNrIGlmIGl0IGhhcyB0aGUgZGVzaXJlZCBvdXRwdXQuIE90aGVyd2lzZSwgd2FybiB0aGUgdXNlclxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdGxldCBrZXlzID0gT2JqZWN0LmtleXMoY3VzdG9tUnVsZSkuc29ydCgpLnRvU3RyaW5nKCk7XHJcblx0XHRcdFx0XHRcdGxldCB0YXJnZXRLID0gW1widmFsaWRcIiwgXCJtZXNzYWdlXCJdLnNvcnQoKS50b1N0cmluZygpO1xyXG5cclxuXHRcdFx0XHRcdFx0bGV0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMoY3VzdG9tUnVsZSkuc29ydCgpO1xyXG5cdFx0XHRcdFx0XHRsZXQgdGFyZ2V0ViA9IFtcIlN0cmluZ1wiLCBcIkJvb2xlYW5cIl07XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoa2V5cyAhPSB0YXJnZXRLIHx8ICh0eXBlb2YgdmFsdWVzWzBdICE9IHRhcmdldFZbMF0gfHwgdHlwZW9mIHZhbHVlc1sxXSAhPSB0YXJnZXRWWzFdKSkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUud2FybihcclxuXHRcdFx0XHRcdFx0XHRcdFwiUHJvdmlkZWQgSlNPTiBkb2VzIG5vdCBtYXRjaCB0aGUgZGVzaXJlZCBvdXRwdXQhXFxuXFxuUHJvdmlkZWQ6XFxuXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRjdXN0b21SdWxlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJcXG5cXG5EZXNpcmVkOlxcblwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0e1widmFsaWRcIjogdHlwZW9mIHRydWUsIFwibWVzc2FnZVwiOiB0eXBlb2YgXCJTdHJpbmdcIn1cclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHJ1bGUgPSBjdXN0b21SdWxlO1xyXG5cdFx0XHRcdFx0cnVsZVR5cGUgPSBcImZ1bmN0aW9uXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIElmIG5vbmUgb2YgdGhlIGFib3ZlIHdvcmtzLCB3YXJuIHRoZW0gdGhhdCBzdWNoIHJ1bGUgY2Fubm90IGJlIHVzZWQuXHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oYENhbm5vdCB1c2UgYSBcIiR7dHlwZW9mIHJ1bGV9XCIgdG8gdmFsaWRhdGUgaW5wdXQuYCk7XHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIElmIHRoZSBydWxlIHJldHVybmVkIGEgZmFpbGVkIHZhbGlkYXRpb24sIGFkZCB0aGUgbWVzc2FnZSB0byB0aGUgbWVzc2FnZSBiYWdcclxuXHRcdFx0XHRpZiAoIXJ1bGUudmFsaWQpIHtcclxuXHRcdFx0XHRcdHRoaXMuI2Vycm9ycy5hZGQoXHJcblx0XHRcdFx0XHRcdHJ1bGVUeXBlID09ICdmdW5jdGlvbicgPyBgJHtmaWVsZH0uY2xvc3VyZV8ke2Nsb3N1cmVJbmRleH1gIDogYCR7ZmllbGR9LiR7b2dSdWxlLnNwbGl0KFwiOlwiKVswXX1gLFxyXG5cdFx0XHRcdFx0XHRydWxlLm1lc3NhZ2VcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGlzQXJyYXkpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy4jZXJyb3JzLmFkZChcclxuXHRcdFx0XHRcdFx0XHRydWxlVHlwZSA9PSAnZnVuY3Rpb24nID8gYCR7ZmllbGR9LmNsb3N1cmVfJHtjbG9zdXJlSW5kZXh9YCA6IGAke2ZpZWxkfS4ke29nUnVsZS5zcGxpdChcIjpcIilbMF19YCxcclxuXHRcdFx0XHRcdFx0XHRydWxlLm1lc3NhZ2VcclxuXHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRjbG9zdXJlSW5kZXgrKztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFsaWRhdGlvblJlc3VsdC5wdXNoKHJ1bGUudmFsaWQpO1xyXG5cdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0Ly8gU2VuZHMgb3V0IGEgd2FybmluZyBpZiBydWxlIGRvZXMgbm90IGV4aXN0cy5cclxuXHRcdFx0XHRjb25zb2xlLndhcm4oYE5vIHN1Y2ggcnVsZSBleGlzdHM6ICR7cnVsZU5hbWV9XFxuYCwgYEZpZWxkOiAke2ZpZWxkfVxcblxcbmAsIGUpO1xyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuI2ZpZWxkTmFtZXMucHVzaChmaWVsZCk7XHJcblx0XHRpZiAoIXZhbGlkYXRpb25SZXN1bHQuaW5jbHVkZXMoZmFsc2UpKVxyXG5cdFx0XHR0aGlzLiN2YWxpZGF0ZWRbZmllbGRdID0gdmFsdWU7XHJcblxyXG5cdFx0cmV0dXJuIHR5cGVvZiBydW5PdGhlclZhbGlkYXRpb24gPT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogcnVuT3RoZXJWYWxpZGF0aW9uO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogSWRlbnRpZmllcyBpZiB0aGUgZmllbGQgaXMgYW4gYXJyYXkgb3Igbm90LlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfVx0ZmllbGRcdFRIZSBuYW1lIG9mIHRoZSBmaWVsZCB0aGF0IHdpbGwgYmUgdGVzdGVkXHJcblx0ICogXHJcblx0ICogQHJldHVybiB7Qm9vbGVhbn1cdFx0UmV0dXJucyBhIGJvb2xlYW4gdmFsdWUsIHdoaWNoIGlzIGVpdGhlciBhIGB0cnVlYCwgaWYgdGhlIGZpZWxkIGlzIGFuIGFycmF5OyBvciBgZmFsc2VgIGlmIGl0IGlzbid0XHJcblx0ICogXHJcblx0ICogQGRlcHJlY2F0ZWRcclxuXHQgKi9cclxuXHQjaXNGaWVsZEFycmF5KGZpZWxkKSB7XHJcblx0XHRpZiAoZmllbGQuY29uc3RydWN0b3IubmFtZSA9PT0gJ1N0cmluZycpIHtcclxuXHRcdFx0aWYgKGZpZWxkLm1hdGNoKC8oXFwqKXwoXFxkKykvKSlcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHRoaXMuI3ZhbHVlTGlzdFtmaWVsZF0uY29uc3RydWN0b3IubmFtZSA9PT0gJ0FycmF5Jykge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHQvLyBQVUJMSUMgTUVUSE9EU1xyXG5cdC8qKlxyXG5cdCAqIElkZW50aWZpZXMgd2hldGhlciB0aGUgdmFsaWRhdGlvbiBmYWlsZWQgb3Igbm90LiBBIHNpbmdsZSBydWxlIHRoYXQgZmFpbCB3aWxsIHJlc3VsdCBpbiBhIHRvdGFsIGZhaWwgb2YgdGhlIHZhbGlkYXRpb24uXHJcblx0ICogXHJcblx0ICogQHJldHVybiB7Qm9vbGVhbn1cdFx0UmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbGlkYXRpb24gZmFpbHM7IGBmYWxzZWAgb3RoZXJ3aXNlLlxyXG5cdCAqL1xyXG5cdGZhaWxzKCkge1xyXG5cdFx0aWYgKCF0aGlzLiN2YWxpZGF0aW9uRG9uZSlcclxuXHRcdFx0dGhpcy4jcnVuVmFsaWRhdGlvbigpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLiNmYWlsZWQ7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBGZXRjaGVzIGFsbCB0aGUgZXJyb3IgbWVzc2FnZS5cclxuXHQgKiBcclxuXHQgKiBAcmV0dXJuIHtNZXNzYWdlQmFnfVx0XHRBbiBpbnN0YW5jZSBvZiBtZXNzYWdlIGJhZyBjb250YWluaW5nIGFsbCBlcnJvciBtZXNzYWdlcy5cclxuXHQgKi9cclxuXHRlcnJvcnMoKSB7XHJcblx0XHRpZiAoIXRoaXMuI3ZhbGlkYXRpb25Eb25lKVxyXG5cdFx0XHR0aGlzLiNydW5WYWxpZGF0aW9uKCk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuI2Vycm9ycztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFZhbGlkYXRlcyB0aGUgZmllbGRzIHByb3ZpZGVkIGFuZCByZXR1cm5zIGEgSlNPTiBvYmplY3QsIGNvbnRhaW5pbmcgYWxsIHRoZSB2YWx1ZXMgZnJvbSB0aGUgZmllbGRzIHRoYXQgcGFzc2VkLlxyXG5cdCAqIFxyXG5cdCAqIEByZXR1cm4ge09iamVjdH1cdFx0QSBKU09OIG9iamVjdCwgY29udGFpbmluZyBhIGtleS12YWx1ZSBwYWlyIGZvcm1hdCBvZiBmaWVsZHMgYW5kIHRoZWlyIHZhbHVlcyB0aGF0IHBhc3NlZCB0aGUgdmFsaWRhdGlvbi5cclxuXHQgKi9cclxuXHR2YWxpZGF0ZSgpIHtcclxuXHRcdGlmICghdGhpcy4jdmFsaWRhdGlvbkRvbmUpXHJcblx0XHRcdHRoaXMuI3J1blZhbGlkYXRpb24oKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy4jdmFsaWRhdGVkO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRGV0ZXJtaW5lIGlmIG1lc3NhZ2VzIGV4aXN0IGZvciB0aGUgZ2l2ZW4gZmllbGQuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gIHtTdHJpbmd9ICBmaWVsZFx0VGhlIG5hbWUgb2YgdGhlIGZpZWxkIHRoYXQgd2lsbCBiZSB0ZXN0ZWRcclxuXHQgKiBAcmV0dXJuIHtCb29sZWFufVx0XHRBIGJvb2xlYW4gdmFsdWU7IGVpdGhlciBhIGB0cnVlYCBpZiB0aGUgZmllbGQgZXhpc3RzLCBvciBgZmFsc2VgIGlmIGl0IGRvZXMgbm90XHJcblx0ICovXHJcblx0aGFzKGZpZWxkKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbnZhbGlkRmllbGRzKCkuaW5jbHVkZXMoa2V5KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCB0aGUgZmlyc3QgbWVzc2FnZSBmcm9tIHRoZSBtZXNzYWdlIGJhZyBmb3IgYSBnaXZlbiBmaWVsZC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSAge1N0cmluZ31cdGZpZWxkXHRUaGUgbmFtZSBvZiB0aGUgZmllbGQgdGhhdCB0aGUgbWVzc2FnZSB3aWxsIGJlIGZldGNoZWQgdXBvblxyXG5cdCAqIEByZXR1cm4ge1N0cmluZ31cdFx0VGhlIGZpcnN0IG1lc3NhZ2UgY29udGFpbmVkIHdpdGhpbiB0aGUgc2FpZCBmaWVsZC4gUmV0dXJucyBhbiBgdW5kZWZpbmVkYCB3aGVuIHRoZSBmaWVsZCBkb2VzIG5vdCBleGlzdHNcclxuXHQgKi9cclxuXHRmaXJzdChmaWVsZCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZXJyb3JzKCkuZmlyc3QoZmllbGQpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IGFsbCBvZiB0aGUgbWVzc2FnZXMgZnJvbSB0aGUgbWVzc2FnZSBiYWcgZm9yIGEgZ2l2ZW4gZmllbGQuIElmIG5vIHZhbHVlIG9yIGEgYG51bGxgIGlzIHByb3ZpZGVkIHRvIHRoZSBmaWVsZCwgaXQgcmV0dXJucyBhbGwgdGhlIG1lc3NhZ2VzIGNvbnRhaW5lZCB3aXRoaW4gdGhlIGN1cnJlbnQgaW5zdGFuY2Ugb2YgYE1lc3NhZ2VCYWdgXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gIHtTdHJpbmd9XHRmaWVsZFx0VGhlIG5hbWUgb2YgdGhlIGZpZWxkIHRoYXQgdGhlIG1lc3NhZ2Ugd2lsbCBiZSBmZXRjaGVkIHVwb25cclxuXHQgKiBAcmV0dXJuIHtPYmplY3R9XHRcdEEgSlNPTiBvYmplY3QgdGhhdCBjb250YWlucyB0aGUga2V5LXZhbHVlIHBhaXIgZm9yIGFsbCB0aGUgbWVzc2FnZSBvZiB0aGUgZmllbGQuXHJcblx0ICovXHJcblx0Z2V0KGZpZWxkID0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZXJyb3JzKCkuZ2V0KGZpZWxkKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHJpZXZlcyBhbiBhcnJheSBvZiBmaWVsZCBuYW1lcyB0aGF0IGFyZSBpbnZhbGlkXHJcblx0ICogXHJcblx0ICogQHJldHVybiB7QXJyYXl9XHRcdEFuIGFycmF5IG9mIGZpZWxkIG5hbWVzIHRoYXQgZmFpbGVkIHRoZSB2YWxpZGF0aW9uXHJcblx0ICovXHJcblx0aW52YWxpZEZpZWxkcygpIHtcclxuXHRcdHJldHVybiB0aGlzLmVycm9ycygpLmZpZWxkcygpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0cmlldmVzIGFuIGFycmF5IG9mIGZpZWxkIG5hbWVzIHRoYXQgYXJlIHZhbGlkXHJcblx0ICogXHJcblx0ICogQHJldHVybiB7QXJyYXl9XHRcdEFuIGFycmF5IG9mIGZpZWxkIG5hbWVzIHRoYXQgcGFzc2VkIHRoZSB2YWxpZGF0aW9uXHJcblx0ICovXHJcblx0dmFsaWRGaWVsZHMoKSB7XHJcblx0XHRyZXR1cm4gT2JqZWN0LmtleXModGhpcy52YWxpZGF0ZSgpKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHJpZXZlcyBhbGwgdGhlIGZpZWxkIG5hbWVzIHRoYXQgYXJlIHVzZWQgaW4gdGhpcyB2YWxpZGF0b3JcclxuXHQgKiBcclxuXHQgKiBAcmV0dXJuIHtBcnJheX1cdFx0QW4gYXJyYXkgb2YgYWxsIHRoZSBmaWVsZCBuYW1lcyB1c2VkIGluIHRoaXMgVmFsaWRhdG9yXHJcblx0ICovXHJcblx0ZmllbGRzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuI2ZpZWxkTmFtZXM7XHJcblx0fVxyXG59IiwiLy8gVXRpbGl0eVxyXG5pbXBvcnQgVW5pcXVlQXJyYXkgZnJvbSBcIi4uLy4uL2pzL3V0aWwvdW5pcXVlLWFycmF5L3VuaXF1ZS1hcnJheS5tb2QuanNcIjtcclxuaW1wb3J0IFN3YWxGbGFzaCBmcm9tIFwiLi4vLi4vanMvdXRpbC9zd2FsLWZsYXNoL3N3YWwtZmxhc2gubW9kLmpzXCI7XHJcblxyXG4vLyBWYWxpZGF0b3JcclxuaW1wb3J0IFZhbGlkYXRvciBmcm9tIFwiLi4vLi4vanMvdXRpbC92YWxpZGF0b3IvVmFsaWRhdG9yLmpzXCI7XHJcblxyXG52YXIgdmFsaWRhdGlvbiA9IHtcclxuXHRydWxlczoge1xyXG5cdFx0XCJ1c2VfcmFuZ2VcIjogW1wic29tZXRpbWVzXCIsIFwiYm9vbGVhblwiXSxcclxuXHRcdFwicmFuZ2VfbWluXCI6IFtcInNvbWV0aW1lc1wiLCBcIm51bWVyaWNcIiwgXCJtaW46MFwiLCBcIm1heDokcmFuZ2VfbWF4XCJdLFxyXG5cdFx0XCJyYW5nZV9tYXhcIjogW1wic29tZXRpbWVzXCIsIFwibnVtZXJpY1wiLCBcIm1pbjokcmFuZ2VfbWluXCIsIFwibWF4OjI1NVwiXSxcclxuXHRcdFwibGVuZ3RoXCI6IFtcInNvbWV0aW1lc1wiLCBcIm51bWVyaWNcIiwgXCJiZXR3ZWVuOjAsMjU1XCJdLFxyXG5cdFx0XCJjaGFyc1wiOiBbXCJyZXF1aXJlZFwiLCBcImFycmF5XCIsIFwibWluOjFcIl0sXHJcblx0XHRcImNoYXJzLipcIjogW1wic29tZXRpbWVzXCIsIFwiaW46YWxwaGEsbnVtZXJpYyxzcGVjXCJdXHJcblx0fSxcclxuXHRtZXNzYWdlOiB7XHJcblx0XHRcInVzZV9yYW5nZVwiOiB7XHJcblx0XHRcdFwiYm9vbGVhblwiOiBgTWFsZm9ybWVkIGRhdGEsIHBsZWFzZSByZWZyZXNoIHRoZSBwYWdlYCxcclxuXHRcdH0sXHJcblx0XHRcInJhbmdlX21pblwiOiB7XHJcblx0XHRcdFwibnVtZXJpY1wiOiBgTWluaW11bSByYW5nZSBzaG91bGQgYmUgYSBudW1iZXJgLFxyXG5cdFx0XHRcIm1pblwiOiBgTWluaW11bSB2YWx1ZSBzaG91bGQgYmUgOm1pbmAsXHJcblx0XHRcdFwibWF4XCI6IGBNYXhpbXVtIHZhbHVlIHNob3VsZCBiZSA6bWF4YCxcclxuXHRcdH0sXHJcblx0XHRcInJhbmdlX21heFwiOiB7XHJcblx0XHRcdFwibWluXCI6IGBNYXhpbXVtIHZhbHVlIHNob3VsZCBiZSA6bWluYCxcclxuXHRcdFx0XCJtYXhcIjogYE1heGltdW0gdmFsdWUgc2hvdWxkIGJlIDptYXhgLFxyXG5cdFx0fSxcclxuXHRcdFwibGVuZ3RoXCI6IHtcclxuXHRcdFx0XCJsZW5ndGgubnVtZXJpY1wiOiBgTGVuZ3RoIHNob3VsZCBiZSBhIG51bWJlcmAsXHJcblx0XHRcdFwibGVuZ3RoLmJldHdlZW5cIjogYExlbmd0aCBzaG91bGQgYmUgYSB2YWx1ZSBiZXR3ZWVuIDptaW4gYW5kIDptYXhgLFxyXG5cdFx0fSxcclxuXHRcdFwiY2hhcnNcIjoge1xyXG5cdFx0XHRcInJlcXVpcmVkXCI6IGBDaGFyYWN0ZXIgQWNjZXB0ZWQgaXMgcmVxdWlyZWRgLFxyXG5cdFx0XHRcImFycmF5XCI6IGBNYWxmb3JtZWQgZGF0YSwgcGxlYXNlIHJlZnJlc2ggdGhlIHBhZ2VgLFxyXG5cdFx0XHRcIm1pblwiOiBgUGxlYXNlIHNlbGVjdCBhdCBsZWFzdCAxIG9wdGlvbmAsXHJcblx0XHR9LFxyXG5cdFx0XCJjaGFycy4qXCI6IHtcclxuXHRcdFx0XCJib29sZWFuXCI6IGBNYWxmb3JtZWQgZGF0YSwgcGxlYXNlIHJlZnJlc2ggdGhlIHBhZ2VgLFxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbiQoZnVuY3Rpb24oKSB7XHJcblx0Ly8gSW5pdGlhbGl6ZSBuZWNlc3NhcnkgdXRpbGl0aWVzXHJcblx0VW5pcXVlQXJyYXkoKTtcclxuXHJcblx0Ly8gRU5BQkxFL0RJU0FCTEUgUkFOR0UgT1BUSU9OXHJcblx0JChgI3VzZVJhbmdlYCkub24oJ2NoYW5nZScsIChlKSA9PiB7XHJcblx0XHRsZXQgb2JqID0gJChlLmN1cnJlbnRUYXJnZXQpO1xyXG5cdFx0bGV0IHJhbmdlID0gJChcIiNsZW5ndGhfcmFuZ2VcIik7XHJcblx0XHRsZXQgZml4ZWQgPSAkKFwiI2xlbmd0aF9maXhlZFwiKTtcclxuXHJcblx0XHRpZiAob2JqLnByb3AoJ2NoZWNrZWQnKSkge1xyXG5cdFx0XHRyYW5nZS5maW5kKGBpbnB1dGApLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG5cdFx0XHRmaXhlZC5maW5kKGBpbnB1dGApLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSkucmVtb3ZlQ2xhc3MoXCJpcy12YWxpZCBpcy1pbnZhbGlkXCIpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHJhbmdlLmZpbmQoYGlucHV0YCkucHJvcCgnZGlzYWJsZWQnLCB0cnVlKS5yZW1vdmVDbGFzcyhcImlzLXZhbGlkIGlzLWludmFsaWRcIik7XHJcblx0XHRcdGZpeGVkLmZpbmQoYGlucHV0YCkucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcblx0XHR9XHJcblx0fSkudHJpZ2dlcignY2hhbmdlJyk7XHJcblxyXG5cdC8vIFJBTkdFIE1JTiBTRVRURVJcclxuXHQkKGAjcmFuZ2VfbWluYCkub24oJ2NoYW5nZScsIChlKSA9PiB7XHJcblx0XHRsZXQgb2JqID0gJChlLmN1cnJlbnRUYXJnZXQpO1xyXG5cdFx0bGV0IHRhcmdldCA9ICQoYCNyYW5nZV9tYXhgKTtcclxuXHRcdGxldCBuZXdNaW4gPSBvYmoudmFsKCk7XHJcblxyXG5cdFx0bmV3TWluID0gbmV3TWluLm1hdGNoKC9eLT9cXGQrJC9nKS5sZW5ndGggPiAwID8gcGFyc2VJbnQobmV3TWluKSA6IHBhcnNlSW50KHRhcmdldC5hdHRyKCdtaW4nKSk7XHJcblxyXG5cdFx0dGFyZ2V0LmF0dHIoJ21pbicsIG5ld01pbik7XHJcblx0fSkudHJpZ2dlcignY2hhbmdlJyk7XHJcblxyXG5cdC8vIFJBTkdFIE1BWCBTRVRURVJcclxuXHQkKGAjcmFuZ2VfbWF4YCkub24oJ2NoYW5nZScsIChlKSA9PiB7XHJcblx0XHRsZXQgb2JqID0gJChlLmN1cnJlbnRUYXJnZXQpO1xyXG5cdFx0bGV0IHRhcmdldCA9ICQoYCNyYW5nZV9taW5gKTtcclxuXHRcdGxldCBuZXdNYXggPSBvYmoudmFsKCk7XHJcblxyXG5cdFx0bmV3TWF4ID0gbmV3TWF4Lm1hdGNoKC9eLT9cXGQrJC9nKS5sZW5ndGggPiAwID8gcGFyc2VJbnQobmV3TWF4KSA6IHBhcnNlSW50KHRhcmdldC5hdHRyKCdtYXgnKSk7XHJcblxyXG5cdFx0dGFyZ2V0LmF0dHIoJ21heCcsIG5ld01heCk7XHJcblx0fSkudHJpZ2dlcignY2hhbmdlJyk7XHJcblxyXG5cdC8vIEZPUk0gU1VCTUlUXHJcblx0JChgI3N0cmluZ19mb3JtYCkub24oJ3N1Ym1pdCcsIChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdHZhbGlkYXRlKCQoZS5jdXJyZW50VGFyZ2V0KSk7XHJcblx0fSk7XHJcblxyXG5cdC8vIEZPUk0gUkVTRVRURVJcclxuXHQkKGAjcmVzZXRGb3JtYCkub24oJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdCQoYHN0cmluZy1jYXJkLnNob3dgKS5yZW1vdmVDbGFzcyhgc2hvd2ApO1xyXG5cdFx0JChgW25hbWVdYCkucmVtb3ZlQ2xhc3MoYGlzLXZhbGlkIGlzLWludmFsaWRgKTtcclxuXHRcdCQoYGZvcm1gKVswXS5yZXNldCgpO1xyXG5cclxuXHRcdCQoYCNnZW5lcmF0ZWRfc3RyaW5nYCkudGV4dChcIlwiKVxyXG5cdFx0XHQuY2xvc2VzdChgc3RyaW5nLWNhcmRgKVxyXG5cdFx0XHQucmVtb3ZlQ2xhc3MoYHNob3dgKTtcclxuXHJcblx0XHRTd2FsRmxhc2guc3VjY2VzcyhcIkZvcm0gUmVzZXRcIik7XHJcblx0fSk7XHJcblxyXG5cdC8vIE1JTklNSVpFL01BWElNSVpFXHJcblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgYC5taW5pbWl6ZSwgLm1heGltaXplYCwgKGUpID0+IHtcclxuXHRcdGxldCBidG4gPSAkKGUudGFyZ2V0KSwgb2JqO1xyXG5cclxuXHRcdGlmICh0eXBlb2YgYnRuLmF0dHIoJ2RhdGEtdGFyZ2V0JykgIT0gJ3VuZGVmaW5lZCcpXHJcblx0XHRcdG9iaiA9ICQoYnRuLmF0dHIoJ2RhdGEtdGFyZ2V0JykpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRvYmogPSBidG47XHJcblxyXG5cdFx0bGV0IHdpbmRvdyA9IG9iai5jbG9zZXN0KFwiLndpbmRvd1wiKTtcclxuXHRcdGxldCBjb2xsYXBzZXIgPSB3aW5kb3cuY2xvc2VzdChcIi5jb2xsYXBzZVwiKTtcclxuXHRcdGxldCBvdGhlcnMgPSAkKGBbZGF0YS1wYXJlbnQ9XCIjJHt3aW5kb3cuYXR0cihcImlkXCIpfVwiXWApO1xyXG5cclxuXHRcdGlmICh3aW5kb3cuaGFzQ2xhc3MoXCJtYXhpbWl6ZWRcIikpIHtcclxuXHRcdFx0b3RoZXJzLmFkZENsYXNzKFwibWF4aW1pemVcIikucmVtb3ZlQ2xhc3MoXCJtaW5pbWl6ZVwiKS5hdHRyKFwidGl0bGVcIiwgXCJNYXhpbWl6ZVwiKTtcclxuXHRcdFx0YnRuLmFkZENsYXNzKFwibWF4aW1pemVcIikucmVtb3ZlQ2xhc3MoXCJtaW5pbWl6ZVwiKS5hdHRyKFwidGl0bGVcIiwgXCJNYXhpbWl6ZVwiKTtcclxuXHRcdFx0b2JqLmFkZENsYXNzKFwibWF4aW1pemVcIikucmVtb3ZlQ2xhc3MoXCJtaW5pbWl6ZVwiKS5hdHRyKFwidGl0bGVcIiwgXCJNYXhpbWl6ZVwiKTtcclxuXHRcdFx0d2luZG93LmFkZENsYXNzKFwibWluaW1pemVkXCIpLnJlbW92ZUNsYXNzKFwibWF4aW1pemVkXCIpO1xyXG5cclxuXHRcdFx0c2V0VGltZW91dChcclxuXHRcdFx0XHQoKSA9PiBjb2xsYXBzZXIuY29sbGFwc2UoXCJoaWRlXCIpLFxyXG5cdFx0XHRcdDI1MFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAod2luZG93Lmhhc0NsYXNzKFwibWluaW1pemVkXCIpKSB7XHJcblx0XHRcdGNvbGxhcHNlci5jb2xsYXBzZShcInNob3dcIik7XHJcblx0XHRcdG90aGVycy5hZGRDbGFzcyhcIm1pbmltaXplXCIpLnJlbW92ZUNsYXNzKFwibWF4aW1pemVcIikuYXR0cihcInRpdGxlXCIsIFwiTWluaW1pemVcIik7XHJcblx0XHRcdGJ0bi5hZGRDbGFzcyhcIm1pbmltaXplXCIpLnJlbW92ZUNsYXNzKFwibWF4aW1pemVcIikuYXR0cihcInRpdGxlXCIsIFwiTWluaW1pemVcIik7XHJcblx0XHRcdG9iai5hZGRDbGFzcyhcIm1pbmltaXplXCIpLnJlbW92ZUNsYXNzKFwibWF4aW1pemVcIikuYXR0cihcInRpdGxlXCIsIFwiTWluaW1pemVcIik7XHJcblxyXG5cdFx0XHR3aW5kb3cuYWRkQ2xhc3MoXCJtYXhpbWl6ZWRcIikucmVtb3ZlQ2xhc3MoXCJtaW5pbWl6ZWRcIik7XHJcblx0XHR9XHJcblx0fSk7XHJcbn0pO1xyXG5cclxud2luZG93LnZhbGlkYXRlID0gZnVuY3Rpb24oZm9ybSkge1xyXG5cdC8vIENhcHR1cmUgYWxsIGlucHV0c1xyXG5cdGxldCBmaWVsZHMgPSAkKGBbbmFtZV1gKS5ub3QoYDpkaXNhYmxlZCwgW2Rpc2FibGVkXWApO1xyXG5cdGxldCB2YWxpZHMgPSAkKGBpbnB1dDp2YWxpZGApLm5vdChgOmRpc2FibGVkLCBbZGlzYWJsZWRdYCk7XHJcblx0bGV0IGludmFsaWRzID0gJChgaW5wdXQ6aW52YWxpZGApLm5vdChgOmRpc2FibGVkLCBbZGlzYWJsZWRdYCk7XHJcblxyXG5cdC8vIFNldCB2YWxpZGF0aW9uIGlucHV0XHJcblx0dmFsaWRhdGlvbi52YWx1ZXMgPSBmb3JtLnNlcmlhbGl6ZUZvcm1KU09OKHRydWUpO1xyXG5cclxuXHQvLyBVcGRhdGUgc29tZSBydWxlIHZhbHVlc1xyXG5cdGxldCB2YXJpYWJsZVJ1bGUgPSBbJ3JhbmdlX21pbicsICdyYW5nZV9tYXgnXTtcclxuXHRmb3IgKGxldCByIG9mIHZhcmlhYmxlUnVsZSkge1xyXG5cdFx0dmFsaWRhdGlvbi5ydWxlc1tyXS5maW5kKCh2LCBrKSA9PiB7XHJcblx0XHRcdGlmICh2Lm1hdGNoKC9cXCRcXHcrL2cpKSB7XHJcblx0XHRcdFx0bGV0IHRhcmdldEtleSA9IHYubWF0Y2goLyhcXCQpKFxcdyspLylbMl07XHJcblxyXG5cdFx0XHRcdGlmICghT2JqZWN0LmtleXModmFsaWRhdGlvbi52YWx1ZXMpLmluY2x1ZGVzKHRhcmdldEtleSkpXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdHZhbGlkYXRpb24ucnVsZXNbcl1ba10gPSB2LnJlcGxhY2UoLyhcXCQpKFxcdyspLywgdmFsaWRhdGlvbi52YWx1ZXNbdGFyZ2V0S2V5XSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0bGV0IHZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoXHJcblx0XHR2YWxpZGF0aW9uLnZhbHVlcyxcclxuXHRcdHZhbGlkYXRpb24ucnVsZXMsXHJcblx0XHR2YWxpZGF0aW9uLm1lc3NhZ2VcclxuXHQpO1xyXG5cclxuXHRsZXQgaW52YWxpZEZpZWxkcyA9IHZhbGlkYXRvci5pbnZhbGlkRmllbGRzKCk7XHJcblx0bGV0IHZhbGlkRmllbGRzID0gdmFsaWRhdG9yLnZhbGlkRmllbGRzKCk7XHJcblxyXG5cdC8vIFVwZGF0ZSB0aGVpciBjbGFzc1xyXG5cdGZpZWxkcy5yZW1vdmVDbGFzcyhcImlzLXZhbGlkIGlzLWludmFsaWRcIik7XHJcblxyXG5cdHZhbGlkcy5hZGRDbGFzcyhcImlzLXZhbGlkXCIpO1xyXG5cdHZhbGlkcy5yZW1vdmVDbGFzcyhcImlzLWludmFsaWRcIik7XHJcblxyXG5cdGludmFsaWRzLmFkZENsYXNzKFwiaXMtaW52YWxpZFwiKTtcclxuXHRpbnZhbGlkcy5yZW1vdmVDbGFzcyhcImlzLXZhbGlkXCIpO1xyXG5cclxuXHQvLyBVcGRhdGUgdmFsaWRhdGlvbiBtZXNzYWdlXHJcblx0dmFsaWRzLmNsb3Nlc3QoYC5mb3JtLWdyb3VwYCkuZmluZChcImZlZWRiYWNrXCIpLnJlbW92ZUNsYXNzKGB0ZXh0LWRhbmdlcmApO1xyXG5cdGludmFsaWRzLmNsb3Nlc3QoYC5mb3JtLWdyb3VwYCkuZmluZChcImZlZWRiYWNrXCIpLmFkZENsYXNzKGB0ZXh0LWRhbmdlcmApO1xyXG5cclxuXHQvLyBBcHBseSB0aGUgdmFsaWRhdG9ycyB2YWxpZGF0aW9uXHJcblx0JC5lYWNoKHZhbGlkRmllbGRzLCAoaywgdikgPT4ge1xyXG5cdFx0JChgW2RhdGEtdmFsaWRhdGlvbl1gKS50ZXh0KFwiXCIpO1xyXG5cdH0pO1xyXG5cclxuXHQkLmVhY2goaW52YWxpZEZpZWxkcywgKGssIHYpID0+IHtcclxuXHRcdGxldCB2YWxpZGF0aW9uTXNnRmllbGRzID0gJChgW2RhdGEtdmFsaWRhdGlvbl1gKTtcclxuXHRcdHZhbGlkYXRpb25Nc2dGaWVsZHMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0bGV0IG9iaiA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRpZiAob2JqLmF0dHIoXCJkYXRhLXZhbGlkYXRpb25cIikubWF0Y2goYCgke3Z9KWApICE9IG51bGwpIHtcclxuXHRcdFx0XHRvYmouY2xvc2VzdChgLmZvcm0tZ3JvdXBgKVxyXG5cdFx0XHRcdFx0LmZpbmQoYGlucHV0LCBzZWxlY3QsIHRleHRhcmVhYClcclxuXHRcdFx0XHRcdC5ub3QoXCI6ZGlzYWJsZWQsIFtkaXNhYmxlZF1cIilcclxuXHRcdFx0XHRcdC5yZW1vdmVDbGFzcyhcImlzLXZhbGlkXCIpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoXCJpcy1pbnZhbGlkXCIpO1xyXG5cdFx0XHR9O1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dmFsaWRhdGlvbk1zZ0ZpZWxkcy50ZXh0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRsZXQgb2JqID0gJCh0aGlzKTtcclxuXHRcdFx0aWYgKG9iai5hdHRyKCdkYXRhLXZhbGlkYXRpb24nKS5tYXRjaCh2KSlcclxuXHRcdFx0XHRvYmoudGV4dCh2YWxpZGF0b3IuZmlyc3QodikpLmFkZENsYXNzKFwidGV4dC1kYW5nZXJcIik7XHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdC8vIElmIHRoZSB2YWxpZGF0aW9uIGZhaWxlZCwgcHJldmVudCB0aGUgY29kZSBmcm9tIHByb2dyZXNzaW5nIGZ1cnRoZXIsIHRoZW4gc2hvdyBhIHRvYXN0IHdhcm5pbmdcclxuXHRpZiAodmFsaWRhdG9yLmZhaWxzKCkpIHtcclxuXHRcdFN3YWxGbGFzaC5lcnJvcihcIlBsZWFzZSByZS1jaGVjayB0aGUgZGF0YVwiKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHRsZXQgdmFsdWVzID0gdmFsaWRhdG9yLnZhbGlkYXRlKCk7XHJcblx0XHRsZXQgY2hhcnMgPSB2YWx1ZXMuY2hhcnM7XHJcblxyXG5cdFx0bGV0IHJlZ2V4ID0gXCJbXCI7XHJcblx0XHRyZWdleCArPSBjaGFycy5pbmNsdWRlcyhcImFscGhhXCIpID8gYGEtekEtWmAgOiBgYDtcclxuXHRcdHJlZ2V4ICs9IGNoYXJzLmluY2x1ZGVzKFwibnVtZXJpY1wiKSA/IGAwLTlgIDogYGA7XHJcblx0XHRyZWdleCArPSBjaGFycy5pbmNsdWRlcyhcInNwZWNcIikgPyBgXFxcXCRcXFxcJlxcXFwrXFxcXCxcXFxcOlxcXFw7XFxcXD1cXFxcP1xcXFxAXFxcXCNcXFxcfFxcXFwnXFxcXDxcXFxcPlxcXFwuXFxcXF5cXFxcKlxcXFwoXFxcXClcXFxcJVxcXFwhXFxcXC1gIDogYGA7XHJcblx0XHRyZWdleCArPSBcIl1cIjtcclxuXHJcblx0XHRyZWdleCArPSB0eXBlb2YgdmFsdWVzLnVzZV9yYW5nZSA9PSAndW5kZWZpbmVkJyA/IGB7JHt2YWx1ZXMubGVuZ3RofX1gIDogYHske3ZhbHVlcy5yYW5nZV9taW59LCR7dmFsdWVzLnJhbmdlX21heH19YDtcclxuXHJcblx0XHQkKGAjZ2VuZXJhdGVkX3N0cmluZ2ApXHJcblx0XHRcdC50ZXh0KG5ldyBSYW5kRXhwKHJlZ2V4KS5nZW4oKSlcclxuXHRcdFx0LmNsb3Nlc3QoYC5zdHJpbmctY2FyZGApXHJcblx0XHRcdC5hZGRDbGFzcyhgc2hvd2ApXHJcblx0XHRcdC5maW5kKGAubWluaW1pemUsIC5tYXhpbWl6ZWApXHJcblx0XHRcdC5hZGRDbGFzcyhgbWluaW1pemVgKS5yZW1vdmVDbGFzcyhgbWF4aW1pemVgKVxyXG5cdFx0XHQuY2xvc2VzdChgLndpbmRvd2ApXHJcblx0XHRcdC5hZGRDbGFzcyhgbWF4aW1pemVkYCkucmVtb3ZlQ2xhc3MoYG1pbmltaXplZGApO1xyXG5cclxuXHRcdGxldCByZXN0b3JlQXBwZW5kVGFyZ2V0ID0gJChgI3N0cmluZ0dlbkZvb3RlcmApO1xyXG5cdFx0bGV0IHJlc3RvcmUgPSByZXN0b3JlQXBwZW5kVGFyZ2V0LmZpbmQoYCNyZXN0b3JlUGFzc1ZpZXdgKTtcclxuXHRcdGlmIChyZXN0b3JlLmxlbmd0aCA8PSAwICkge1xyXG5cdFx0XHRyZXN0b3JlID0gJChgXHJcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJtbC1hdXRvIG1yLTAgaW5zZXJ0IG1pbmltaXplXCIgaWQ9XCJyZXN0b3JlUGFzc1ZpZXdcIiBkYXRhLXRhcmdldD1cIi53aW5kb3cgLm1pbmltaXplLCAud2luZG93IC5tYXhpbWl6ZVwiIGRhdGEtcGFyZW50PVwiI3N0cmluZ0NhcmRcIiB0aXRsZT1cIk1pbmltaXplXCI+PC9zcGFuPlxyXG5cdFx0XHRgKTtcclxuXHJcblx0XHRcdHJlc3RvcmVBcHBlbmRUYXJnZXQuYXBwZW5kKHJlc3RvcmUpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHJlc3RvcmUucmVtb3ZlQ2xhc3MoYGluc2VydGApLCAxMDAwKTtcclxuXHJcblx0XHRcdGxldCBjb2xsYXBzZXIgPSAkKHJlc3RvcmUuYXR0cignZGF0YS10YXJnZXQnKSkuY2xvc2VzdChcIi5jb2xsYXBzZVwiKTtcclxuXHRcdFx0aWYgKGNvbGxhcHNlci5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdGNvbGxhcHNlci5jb2xsYXBzZShcInNob3dcIik7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0bGV0IGNvbGxhcHNlciA9ICQocmVzdG9yZS5hdHRyKCdkYXRhLXRhcmdldCcpKS5jbG9zZXN0KFwiLmNvbGxhcHNlXCIpO1xyXG5cdFx0XHRjb2xsYXBzZXIuY29sbGFwc2UoXCJzaG93XCIpO1xyXG5cclxuXHRcdFx0aWYgKGNvbGxhcHNlci5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHNldFRpbWVvdXQoXHJcblx0XHRcdFx0XHQoKSA9PiByZXN0b3JlLmFkZENsYXNzKGBtaW5pbWl6ZWApLnJlbW92ZUNsYXNzKGBtYXhpbWl6ZWApLCAyNTBcclxuXHRcdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQgaW5kZW50OiA0ICovXG5cblxuLy8gUHJpdmF0ZSBoZWxwZXIgY2xhc3NcbmNsYXNzIFN1YlJhbmdlIHtcbiAgICBjb25zdHJ1Y3Rvcihsb3csIGhpZ2gpIHtcbiAgICAgICAgdGhpcy5sb3cgPSBsb3c7XG4gICAgICAgIHRoaXMuaGlnaCA9IGhpZ2g7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gMSArIGhpZ2ggLSBsb3c7XG4gICAgfVxuXG4gICAgb3ZlcmxhcHMocmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuICEodGhpcy5oaWdoIDwgcmFuZ2UubG93IHx8IHRoaXMubG93ID4gcmFuZ2UuaGlnaCk7XG4gICAgfVxuXG4gICAgdG91Y2hlcyhyYW5nZSkge1xuICAgICAgICByZXR1cm4gISh0aGlzLmhpZ2ggKyAxIDwgcmFuZ2UubG93IHx8IHRoaXMubG93IC0gMSA+IHJhbmdlLmhpZ2gpO1xuICAgIH1cblxuICAgIC8vIFJldHVybnMgaW5jbHVzaXZlIGNvbWJpbmF0aW9uIG9mIFN1YlJhbmdlcyBhcyBhIFN1YlJhbmdlLlxuICAgIGFkZChyYW5nZSkge1xuICAgICAgICByZXR1cm4gbmV3IFN1YlJhbmdlKFxuICAgICAgICAgICAgTWF0aC5taW4odGhpcy5sb3csIHJhbmdlLmxvdyksXG4gICAgICAgICAgICBNYXRoLm1heCh0aGlzLmhpZ2gsIHJhbmdlLmhpZ2gpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJucyBzdWJ0cmFjdGlvbiBvZiBTdWJSYW5nZXMgYXMgYW4gYXJyYXkgb2YgU3ViUmFuZ2VzLlxuICAgIC8vIChUaGVyZSdzIGEgY2FzZSB3aGVyZSBzdWJ0cmFjdGlvbiBkaXZpZGVzIGl0IGluIDIpXG4gICAgc3VidHJhY3QocmFuZ2UpIHtcbiAgICAgICAgaWYgKHJhbmdlLmxvdyA8PSB0aGlzLmxvdyAmJiByYW5nZS5oaWdoID49IHRoaXMuaGlnaCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9IGVsc2UgaWYgKHJhbmdlLmxvdyA+IHRoaXMubG93ICYmIHJhbmdlLmhpZ2ggPCB0aGlzLmhpZ2gpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgbmV3IFN1YlJhbmdlKHRoaXMubG93LCByYW5nZS5sb3cgLSAxKSxcbiAgICAgICAgICAgICAgICBuZXcgU3ViUmFuZ2UocmFuZ2UuaGlnaCArIDEsIHRoaXMuaGlnaClcbiAgICAgICAgICAgIF07XG4gICAgICAgIH0gZWxzZSBpZiAocmFuZ2UubG93IDw9IHRoaXMubG93KSB7XG4gICAgICAgICAgICByZXR1cm4gW25ldyBTdWJSYW5nZShyYW5nZS5oaWdoICsgMSwgdGhpcy5oaWdoKV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW25ldyBTdWJSYW5nZSh0aGlzLmxvdywgcmFuZ2UubG93IC0gMSldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvdyA9PSB0aGlzLmhpZ2ggP1xuICAgICAgICAgICAgdGhpcy5sb3cudG9TdHJpbmcoKSA6IHRoaXMubG93ICsgJy0nICsgdGhpcy5oaWdoO1xuICAgIH1cbn1cblxuXG5jbGFzcyBEUmFuZ2Uge1xuICAgIGNvbnN0cnVjdG9yKGEsIGIpIHtcbiAgICAgICAgdGhpcy5yYW5nZXMgPSBbXTtcbiAgICAgICAgdGhpcy5sZW5ndGggPSAwO1xuICAgICAgICBpZiAoYSAhPSBudWxsKSB0aGlzLmFkZChhLCBiKTtcbiAgICB9XG5cbiAgICBfdXBkYXRlX2xlbmd0aCgpIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSB0aGlzLnJhbmdlcy5yZWR1Y2UoKHByZXZpb3VzLCByYW5nZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzICsgcmFuZ2UubGVuZ3RoO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICBhZGQoYSwgYikge1xuICAgICAgICB2YXIgX2FkZCA9IChzdWJyYW5nZSkgPT4ge1xuICAgICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGkgPCB0aGlzLnJhbmdlcy5sZW5ndGggJiYgIXN1YnJhbmdlLnRvdWNoZXModGhpcy5yYW5nZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG5ld1JhbmdlcyA9IHRoaXMucmFuZ2VzLnNsaWNlKDAsIGkpO1xuICAgICAgICAgICAgd2hpbGUgKGkgPCB0aGlzLnJhbmdlcy5sZW5ndGggJiYgc3VicmFuZ2UudG91Y2hlcyh0aGlzLnJhbmdlc1tpXSkpIHtcbiAgICAgICAgICAgICAgICBzdWJyYW5nZSA9IHN1YnJhbmdlLmFkZCh0aGlzLnJhbmdlc1tpXSk7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3UmFuZ2VzLnB1c2goc3VicmFuZ2UpO1xuICAgICAgICAgICAgdGhpcy5yYW5nZXMgPSBuZXdSYW5nZXMuY29uY2F0KHRoaXMucmFuZ2VzLnNsaWNlKGkpKTtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZV9sZW5ndGgoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhIGluc3RhbmNlb2YgRFJhbmdlKSB7XG4gICAgICAgICAgICBhLnJhbmdlcy5mb3JFYWNoKF9hZGQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGIgPT0gbnVsbCkgYiA9IGE7XG4gICAgICAgICAgICBfYWRkKG5ldyBTdWJSYW5nZShhLCBiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3VidHJhY3QoYSwgYikge1xuICAgICAgICB2YXIgX3N1YnRyYWN0ID0gKHN1YnJhbmdlKSA9PiB7XG4gICAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoaSA8IHRoaXMucmFuZ2VzLmxlbmd0aCAmJiAhc3VicmFuZ2Uub3ZlcmxhcHModGhpcy5yYW5nZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG5ld1JhbmdlcyA9IHRoaXMucmFuZ2VzLnNsaWNlKDAsIGkpO1xuICAgICAgICAgICAgd2hpbGUgKGkgPCB0aGlzLnJhbmdlcy5sZW5ndGggJiYgc3VicmFuZ2Uub3ZlcmxhcHModGhpcy5yYW5nZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgbmV3UmFuZ2VzID0gbmV3UmFuZ2VzLmNvbmNhdCh0aGlzLnJhbmdlc1tpXS5zdWJ0cmFjdChzdWJyYW5nZSkpO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmFuZ2VzID0gbmV3UmFuZ2VzLmNvbmNhdCh0aGlzLnJhbmdlcy5zbGljZShpKSk7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVfbGVuZ3RoKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGEgaW5zdGFuY2VvZiBEUmFuZ2UpIHtcbiAgICAgICAgICAgIGEucmFuZ2VzLmZvckVhY2goX3N1YnRyYWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChiID09IG51bGwpIGIgPSBhO1xuICAgICAgICAgICAgX3N1YnRyYWN0KG5ldyBTdWJSYW5nZShhLCBiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaW50ZXJzZWN0KGEsIGIpIHtcbiAgICAgICAgdmFyIG5ld1JhbmdlcyA9IFtdO1xuICAgICAgICB2YXIgX2ludGVyc2VjdCA9IChzdWJyYW5nZSkgPT4ge1xuICAgICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGkgPCB0aGlzLnJhbmdlcy5sZW5ndGggJiYgIXN1YnJhbmdlLm92ZXJsYXBzKHRoaXMucmFuZ2VzW2ldKSkge1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChpIDwgdGhpcy5yYW5nZXMubGVuZ3RoICYmIHN1YnJhbmdlLm92ZXJsYXBzKHRoaXMucmFuZ2VzW2ldKSkge1xuICAgICAgICAgICAgICAgIHZhciBsb3cgPSBNYXRoLm1heCh0aGlzLnJhbmdlc1tpXS5sb3csIHN1YnJhbmdlLmxvdyk7XG4gICAgICAgICAgICAgICAgdmFyIGhpZ2ggPSBNYXRoLm1pbih0aGlzLnJhbmdlc1tpXS5oaWdoLCBzdWJyYW5nZS5oaWdoKTtcbiAgICAgICAgICAgICAgICBuZXdSYW5nZXMucHVzaChuZXcgU3ViUmFuZ2UobG93LCBoaWdoKSk7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChhIGluc3RhbmNlb2YgRFJhbmdlKSB7XG4gICAgICAgICAgICBhLnJhbmdlcy5mb3JFYWNoKF9pbnRlcnNlY3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGIgPT0gbnVsbCkgYiA9IGE7XG4gICAgICAgICAgICBfaW50ZXJzZWN0KG5ldyBTdWJSYW5nZShhLCBiKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yYW5nZXMgPSBuZXdSYW5nZXM7XG4gICAgICAgIHRoaXMuX3VwZGF0ZV9sZW5ndGgoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaW5kZXgoaW5kZXgpIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB3aGlsZSAoaSA8IHRoaXMucmFuZ2VzLmxlbmd0aCAmJiB0aGlzLnJhbmdlc1tpXS5sZW5ndGggPD0gaW5kZXgpIHtcbiAgICAgICAgICAgIGluZGV4IC09IHRoaXMucmFuZ2VzW2ldLmxlbmd0aDtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yYW5nZXNbaV0ubG93ICsgaW5kZXg7XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiAnWyAnICsgdGhpcy5yYW5nZXMuam9pbignLCAnKSArICcgXSc7XG4gICAgfVxuXG4gICAgY2xvbmUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRFJhbmdlKHRoaXMpO1xuICAgIH1cblxuICAgIG51bWJlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJhbmdlcy5yZWR1Y2UoKHJlc3VsdCwgc3VicmFuZ2UpID0+IHtcbiAgICAgICAgICAgIHZhciBpID0gc3VicmFuZ2UubG93O1xuICAgICAgICAgICAgd2hpbGUgKGkgPD0gc3VicmFuZ2UuaGlnaCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGkpO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sIFtdKTtcbiAgICB9XG5cbiAgICBzdWJyYW5nZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJhbmdlcy5tYXAoKHN1YnJhbmdlKSA9PiAoe1xuICAgICAgICAgICAgbG93OiBzdWJyYW5nZS5sb3csXG4gICAgICAgICAgICBoaWdoOiBzdWJyYW5nZS5oaWdoLFxuICAgICAgICAgICAgbGVuZ3RoOiAxICsgc3VicmFuZ2UuaGlnaCAtIHN1YnJhbmdlLmxvd1xuICAgICAgICB9KSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERSYW5nZTtcbiIsImNvbnN0IHJldCAgICA9IHJlcXVpcmUoJ3JldCcpO1xuY29uc3QgRFJhbmdlID0gcmVxdWlyZSgnZHJhbmdlJyk7XG5jb25zdCB0eXBlcyAgPSByZXQudHlwZXM7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBSYW5kRXhwIHtcbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge1JlZ0V4cHxTdHJpbmd9IHJlZ2V4cFxuICAgKiBAcGFyYW0ge1N0cmluZ30gbVxuICAgKi9cbiAgY29uc3RydWN0b3IocmVnZXhwLCBtKSB7XG4gICAgdGhpcy5fc2V0RGVmYXVsdHMocmVnZXhwKTtcbiAgICBpZiAocmVnZXhwIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICB0aGlzLmlnbm9yZUNhc2UgPSByZWdleHAuaWdub3JlQ2FzZTtcbiAgICAgIHRoaXMubXVsdGlsaW5lID0gcmVnZXhwLm11bHRpbGluZTtcbiAgICAgIHJlZ2V4cCA9IHJlZ2V4cC5zb3VyY2U7XG5cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZWdleHAgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLmlnbm9yZUNhc2UgPSBtICYmIG0uaW5kZXhPZignaScpICE9PSAtMTtcbiAgICAgIHRoaXMubXVsdGlsaW5lID0gbSAmJiBtLmluZGV4T2YoJ20nKSAhPT0gLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgYSByZWdleHAgb3Igc3RyaW5nJyk7XG4gICAgfVxuXG4gICAgdGhpcy50b2tlbnMgPSByZXQocmVnZXhwKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBzb21lIGN1c3RvbSBwcm9wZXJ0aWVzIGhhdmUgYmVlbiBzZXQgZm9yIHRoaXMgcmVnZXhwLlxuICAgKlxuICAgKiBAcGFyYW0ge1JhbmRFeHB9IHJhbmRleHBcbiAgICogQHBhcmFtIHtSZWdFeHB9IHJlZ2V4cFxuICAgKi9cbiAgX3NldERlZmF1bHRzKHJlZ2V4cCkge1xuICAgIC8vIFdoZW4gYSByZXBldGl0aW9uYWwgdG9rZW4gaGFzIGl0cyBtYXggc2V0IHRvIEluZmluaXRlLFxuICAgIC8vIHJhbmRleHAgd29uJ3QgYWN0dWFsbHkgZ2VuZXJhdGUgYSByYW5kb20gYW1vdW50IGJldHdlZW4gbWluIGFuZCBJbmZpbml0ZVxuICAgIC8vIGluc3RlYWQgaXQgd2lsbCBzZWUgSW5maW5pdGUgYXMgbWluICsgMTAwLlxuICAgIHRoaXMubWF4ID0gcmVnZXhwLm1heCAhPSBudWxsID8gcmVnZXhwLm1heCA6XG4gICAgICBSYW5kRXhwLnByb3RvdHlwZS5tYXggIT0gbnVsbCA/IFJhbmRFeHAucHJvdG90eXBlLm1heCA6IDEwMDtcblxuICAgIC8vIFRoaXMgYWxsb3dzIGV4cGFuZGluZyB0byBpbmNsdWRlIGFkZGl0aW9uYWwgY2hhcmFjdGVyc1xuICAgIC8vIGZvciBpbnN0YW5jZTogUmFuZEV4cC5kZWZhdWx0UmFuZ2UuYWRkKDAsIDY1NTM1KTtcbiAgICB0aGlzLmRlZmF1bHRSYW5nZSA9IHJlZ2V4cC5kZWZhdWx0UmFuZ2UgP1xuICAgICAgcmVnZXhwLmRlZmF1bHRSYW5nZSA6IHRoaXMuZGVmYXVsdFJhbmdlLmNsb25lKCk7XG5cbiAgICBpZiAocmVnZXhwLnJhbmRJbnQpIHtcbiAgICAgIHRoaXMucmFuZEludCA9IHJlZ2V4cC5yYW5kSW50O1xuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyB0aGUgcmFuZG9tIHN0cmluZy5cbiAgICpcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgZ2VuKCkge1xuICAgIHJldHVybiB0aGlzLl9nZW4odGhpcy50b2tlbnMsIFtdKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIHJhbmRvbSBzdHJpbmcgbW9kZWxlZCBhZnRlciBnaXZlbiB0b2tlbnMuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB0b2tlblxuICAgKiBAcGFyYW0ge0FycmF5LjxTdHJpbmc+fSBncm91cHNcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgX2dlbih0b2tlbiwgZ3JvdXBzKSB7XG4gICAgdmFyIHN0YWNrLCBzdHIsIG4sIGksIGw7XG5cbiAgICBzd2l0Y2ggKHRva2VuLnR5cGUpIHtcbiAgICAgIGNhc2UgdHlwZXMuUk9PVDpcbiAgICAgIGNhc2UgdHlwZXMuR1JPVVA6XG4gICAgICAgIC8vIElnbm9yZSBsb29rYWhlYWRzIGZvciBub3cuXG4gICAgICAgIGlmICh0b2tlbi5mb2xsb3dlZEJ5IHx8IHRva2VuLm5vdEZvbGxvd2VkQnkpIHsgcmV0dXJuICcnOyB9XG5cbiAgICAgICAgLy8gSW5zZXJ0IHBsYWNlaG9sZGVyIHVudGlsIGdyb3VwIHN0cmluZyBpcyBnZW5lcmF0ZWQuXG4gICAgICAgIGlmICh0b2tlbi5yZW1lbWJlciAmJiB0b2tlbi5ncm91cE51bWJlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdG9rZW4uZ3JvdXBOdW1iZXIgPSBncm91cHMucHVzaChudWxsKSAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICBzdGFjayA9IHRva2VuLm9wdGlvbnMgP1xuICAgICAgICAgIHRoaXMuX3JhbmRTZWxlY3QodG9rZW4ub3B0aW9ucykgOiB0b2tlbi5zdGFjaztcblxuICAgICAgICBzdHIgPSAnJztcbiAgICAgICAgZm9yIChpID0gMCwgbCA9IHN0YWNrLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIHN0ciArPSB0aGlzLl9nZW4oc3RhY2tbaV0sIGdyb3Vwcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9rZW4ucmVtZW1iZXIpIHtcbiAgICAgICAgICBncm91cHNbdG9rZW4uZ3JvdXBOdW1iZXJdID0gc3RyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG5cbiAgICAgIGNhc2UgdHlwZXMuUE9TSVRJT046XG4gICAgICAgIC8vIERvIG5vdGhpbmcgZm9yIG5vdy5cbiAgICAgICAgcmV0dXJuICcnO1xuXG4gICAgICBjYXNlIHR5cGVzLlNFVDpcbiAgICAgICAgdmFyIGV4cGFuZGVkU2V0ID0gdGhpcy5fZXhwYW5kKHRva2VuKTtcbiAgICAgICAgaWYgKCFleHBhbmRlZFNldC5sZW5ndGgpIHsgcmV0dXJuICcnOyB9XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHRoaXMuX3JhbmRTZWxlY3QoZXhwYW5kZWRTZXQpKTtcblxuICAgICAgY2FzZSB0eXBlcy5SRVBFVElUSU9OOlxuICAgICAgICAvLyBSYW5kb21seSBnZW5lcmF0ZSBudW1iZXIgYmV0d2VlbiBtaW4gYW5kIG1heC5cbiAgICAgICAgbiA9IHRoaXMucmFuZEludCh0b2tlbi5taW4sXG4gICAgICAgICAgdG9rZW4ubWF4ID09PSBJbmZpbml0eSA/IHRva2VuLm1pbiArIHRoaXMubWF4IDogdG9rZW4ubWF4KTtcblxuICAgICAgICBzdHIgPSAnJztcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgIHN0ciArPSB0aGlzLl9nZW4odG9rZW4udmFsdWUsIGdyb3Vwcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RyO1xuXG4gICAgICBjYXNlIHR5cGVzLlJFRkVSRU5DRTpcbiAgICAgICAgcmV0dXJuIGdyb3Vwc1t0b2tlbi52YWx1ZSAtIDFdIHx8ICcnO1xuXG4gICAgICBjYXNlIHR5cGVzLkNIQVI6XG4gICAgICAgIHZhciBjb2RlID0gdGhpcy5pZ25vcmVDYXNlICYmIHRoaXMuX3JhbmRCb29sKCkgP1xuICAgICAgICAgIHRoaXMuX3RvT3RoZXJDYXNlKHRva2VuLnZhbHVlKSA6IHRva2VuLnZhbHVlO1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiBJZiBjb2RlIGlzIGFscGhhYmV0aWMsIGNvbnZlcnRzIHRvIG90aGVyIGNhc2UuXG4gICAqIElmIG5vdCBhbHBoYWJldGljLCByZXR1cm5zIGJhY2sgY29kZS5cbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvZGVcbiAgICogQHJldHVybiB7TnVtYmVyfVxuICAgKi9cbiAgX3RvT3RoZXJDYXNlKGNvZGUpIHtcbiAgICByZXR1cm4gY29kZSArICg5NyA8PSBjb2RlICYmIGNvZGUgPD0gMTIyID8gLTMyIDpcbiAgICAgIDY1IDw9IGNvZGUgJiYgY29kZSA8PSA5MCAgPyAgMzIgOiAwKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIFJhbmRvbWx5IHJldHVybnMgYSB0cnVlIG9yIGZhbHNlIHZhbHVlLlxuICAgKlxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgX3JhbmRCb29sKCkge1xuICAgIHJldHVybiAhdGhpcy5yYW5kSW50KDAsIDEpO1xuICB9XG5cblxuICAvKipcbiAgICogUmFuZG9tbHkgc2VsZWN0cyBhbmQgcmV0dXJucyBhIHZhbHVlIGZyb20gdGhlIGFycmF5LlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5LjxPYmplY3Q+fSBhcnJcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgX3JhbmRTZWxlY3QoYXJyKSB7XG4gICAgaWYgKGFyciBpbnN0YW5jZW9mIERSYW5nZSkge1xuICAgICAgcmV0dXJuIGFyci5pbmRleCh0aGlzLnJhbmRJbnQoMCwgYXJyLmxlbmd0aCAtIDEpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFyclt0aGlzLnJhbmRJbnQoMCwgYXJyLmxlbmd0aCAtIDEpXTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIGV4cGFuZHMgYSB0b2tlbiB0byBhIERpc2NvbnRpbnVvdXNSYW5nZSBvZiBjaGFyYWN0ZXJzIHdoaWNoIGhhcyBhXG4gICAqIGxlbmd0aCBhbmQgYW4gaW5kZXggZnVuY3Rpb24gKGZvciByYW5kb20gc2VsZWN0aW5nKVxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gdG9rZW5cbiAgICogQHJldHVybiB7RGlzY29udGludW91c1JhbmdlfVxuICAgKi9cbiAgX2V4cGFuZCh0b2tlbikge1xuICAgIGlmICh0b2tlbi50eXBlID09PSByZXQudHlwZXMuQ0hBUikge1xuICAgICAgcmV0dXJuIG5ldyBEUmFuZ2UodG9rZW4udmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodG9rZW4udHlwZSA9PT0gcmV0LnR5cGVzLlJBTkdFKSB7XG4gICAgICByZXR1cm4gbmV3IERSYW5nZSh0b2tlbi5mcm9tLCB0b2tlbi50byk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBkcmFuZ2UgPSBuZXcgRFJhbmdlKCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRva2VuLnNldC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc3VicmFuZ2UgPSB0aGlzLl9leHBhbmQodG9rZW4uc2V0W2ldKTtcbiAgICAgICAgZHJhbmdlLmFkZChzdWJyYW5nZSk7XG4gICAgICAgIGlmICh0aGlzLmlnbm9yZUNhc2UpIHtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHN1YnJhbmdlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgY29kZSA9IHN1YnJhbmdlLmluZGV4KGopO1xuICAgICAgICAgICAgbGV0IG90aGVyQ2FzZUNvZGUgPSB0aGlzLl90b090aGVyQ2FzZShjb2RlKTtcbiAgICAgICAgICAgIGlmIChjb2RlICE9PSBvdGhlckNhc2VDb2RlKSB7XG4gICAgICAgICAgICAgIGRyYW5nZS5hZGQob3RoZXJDYXNlQ29kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodG9rZW4ubm90KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRSYW5nZS5jbG9uZSgpLnN1YnRyYWN0KGRyYW5nZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0UmFuZ2UuY2xvbmUoKS5pbnRlcnNlY3QoZHJhbmdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiBSYW5kb21seSBnZW5lcmF0ZXMgYW5kIHJldHVybnMgYSBudW1iZXIgYmV0d2VlbiBhIGFuZCBiIChpbmNsdXNpdmUpLlxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gYVxuICAgKiBAcGFyYW0ge051bWJlcn0gYlxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAqL1xuICByYW5kSW50KGEsIGIpIHtcbiAgICByZXR1cm4gYSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxICsgYiAtIGEpKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIERlZmF1bHQgcmFuZ2Ugb2YgY2hhcmFjdGVycyB0byBnZW5lcmF0ZSBmcm9tLlxuICAgKi9cbiAgZ2V0IGRlZmF1bHRSYW5nZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmFuZ2UgPSB0aGlzLl9yYW5nZSB8fCBuZXcgRFJhbmdlKDMyLCAxMjYpO1xuICB9XG5cbiAgc2V0IGRlZmF1bHRSYW5nZShyYW5nZSkge1xuICAgIHRoaXMuX3JhbmdlID0gcmFuZ2U7XG4gIH1cblxuXG4gIC8qKlxuICAgKlxuICAgKiBFbmFibGVzIHVzZSBvZiByYW5kZXhwIHdpdGggYSBzaG9ydGVyIGNhbGwuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVnRXhwfFN0cmluZ3wgcmVnZXhwfVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgcmFuZGV4cChyZWdleHAsIG0pIHtcbiAgICB2YXIgcmFuZGV4cDtcbiAgICBpZih0eXBlb2YgcmVnZXhwID09PSAnc3RyaW5nJykge1xuICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cChyZWdleHAsIG0pO1xuICAgIH1cblxuICAgIGlmIChyZWdleHAuX3JhbmRleHAgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmFuZGV4cCA9IG5ldyBSYW5kRXhwKHJlZ2V4cCwgbSk7XG4gICAgICByZWdleHAuX3JhbmRleHAgPSByYW5kZXhwO1xuICAgIH0gZWxzZSB7XG4gICAgICByYW5kZXhwID0gcmVnZXhwLl9yYW5kZXhwO1xuICAgICAgcmFuZGV4cC5fc2V0RGVmYXVsdHMocmVnZXhwKTtcbiAgICB9XG4gICAgcmV0dXJuIHJhbmRleHAuZ2VuKCk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHN1Z2FyeSAvcmVnZXhwLy5nZW4gc3ludGF4LlxuICAgKi9cbiAgc3RhdGljIHN1Z2FyKCkge1xuICAgIC8qIGVzaGludCBmcmVlemU6ZmFsc2UgKi9cbiAgICBSZWdFeHAucHJvdG90eXBlLmdlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFJhbmRFeHAucmFuZGV4cCh0aGlzKTtcbiAgICB9O1xuICB9XG59O1xuIiwiY29uc3QgdXRpbCAgICAgID0gcmVxdWlyZSgnLi91dGlsJyk7XG5jb25zdCB0eXBlcyAgICAgPSByZXF1aXJlKCcuL3R5cGVzJyk7XG5jb25zdCBzZXRzICAgICAgPSByZXF1aXJlKCcuL3NldHMnKTtcbmNvbnN0IHBvc2l0aW9ucyA9IHJlcXVpcmUoJy4vcG9zaXRpb25zJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSAocmVnZXhwU3RyKSA9PiB7XG4gIHZhciBpID0gMCwgbCwgYyxcbiAgICBzdGFydCA9IHsgdHlwZTogdHlwZXMuUk9PVCwgc3RhY2s6IFtdfSxcblxuICAgIC8vIEtlZXAgdHJhY2sgb2YgbGFzdCBjbGF1c2UvZ3JvdXAgYW5kIHN0YWNrLlxuICAgIGxhc3RHcm91cCA9IHN0YXJ0LFxuICAgIGxhc3QgPSBzdGFydC5zdGFjayxcbiAgICBncm91cFN0YWNrID0gW107XG5cblxuICB2YXIgcmVwZWF0RXJyID0gKGkpID0+IHtcbiAgICB1dGlsLmVycm9yKHJlZ2V4cFN0ciwgYE5vdGhpbmcgdG8gcmVwZWF0IGF0IGNvbHVtbiAke2kgLSAxfWApO1xuICB9O1xuXG4gIC8vIERlY29kZSBhIGZldyBlc2NhcGVkIGNoYXJhY3RlcnMuXG4gIHZhciBzdHIgPSB1dGlsLnN0clRvQ2hhcnMocmVnZXhwU3RyKTtcbiAgbCA9IHN0ci5sZW5ndGg7XG5cbiAgLy8gSXRlcmF0ZSB0aHJvdWdoIGVhY2ggY2hhcmFjdGVyIGluIHN0cmluZy5cbiAgd2hpbGUgKGkgPCBsKSB7XG4gICAgYyA9IHN0cltpKytdO1xuXG4gICAgc3dpdGNoIChjKSB7XG4gICAgICAvLyBIYW5kbGUgZXNjYXBlZCBjaGFyYWN0ZXJzLCBpbmNsdWVzIGEgZmV3IHNldHMuXG4gICAgICBjYXNlICdcXFxcJzpcbiAgICAgICAgYyA9IHN0cltpKytdO1xuXG4gICAgICAgIHN3aXRjaCAoYykge1xuICAgICAgICAgIGNhc2UgJ2InOlxuICAgICAgICAgICAgbGFzdC5wdXNoKHBvc2l0aW9ucy53b3JkQm91bmRhcnkoKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ0InOlxuICAgICAgICAgICAgbGFzdC5wdXNoKHBvc2l0aW9ucy5ub25Xb3JkQm91bmRhcnkoKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ3cnOlxuICAgICAgICAgICAgbGFzdC5wdXNoKHNldHMud29yZHMoKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ1cnOlxuICAgICAgICAgICAgbGFzdC5wdXNoKHNldHMubm90V29yZHMoKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ2QnOlxuICAgICAgICAgICAgbGFzdC5wdXNoKHNldHMuaW50cygpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnRCc6XG4gICAgICAgICAgICBsYXN0LnB1c2goc2V0cy5ub3RJbnRzKCkpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICAgIGxhc3QucHVzaChzZXRzLndoaXRlc3BhY2UoKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ1MnOlxuICAgICAgICAgICAgbGFzdC5wdXNoKHNldHMubm90V2hpdGVzcGFjZSgpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGMgaXMgaW50ZWdlci5cbiAgICAgICAgICAgIC8vIEluIHdoaWNoIGNhc2UgaXQncyBhIHJlZmVyZW5jZS5cbiAgICAgICAgICAgIGlmICgvXFxkLy50ZXN0KGMpKSB7XG4gICAgICAgICAgICAgIGxhc3QucHVzaCh7IHR5cGU6IHR5cGVzLlJFRkVSRU5DRSwgdmFsdWU6IHBhcnNlSW50KGMsIDEwKSB9KTtcblxuICAgICAgICAgICAgLy8gRXNjYXBlZCBjaGFyYWN0ZXIuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsYXN0LnB1c2goeyB0eXBlOiB0eXBlcy5DSEFSLCB2YWx1ZTogYy5jaGFyQ29kZUF0KDApIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cblxuICAgICAgLy8gUG9zaXRpb25hbHMuXG4gICAgICBjYXNlICdeJzpcbiAgICAgICAgbGFzdC5wdXNoKHBvc2l0aW9ucy5iZWdpbigpKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJyQnOlxuICAgICAgICBsYXN0LnB1c2gocG9zaXRpb25zLmVuZCgpKTtcbiAgICAgICAgYnJlYWs7XG5cblxuICAgICAgLy8gSGFuZGxlIGN1c3RvbSBzZXRzLlxuICAgICAgY2FzZSAnWyc6XG4gICAgICAgIC8vIENoZWNrIGlmIHRoaXMgY2xhc3MgaXMgJ2FudGknIGkuZS4gW15hYmNdLlxuICAgICAgICB2YXIgbm90O1xuICAgICAgICBpZiAoc3RyW2ldID09PSAnXicpIHtcbiAgICAgICAgICBub3QgPSB0cnVlO1xuICAgICAgICAgIGkrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub3QgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdldCBhbGwgdGhlIGNoYXJhY3RlcnMgaW4gY2xhc3MuXG4gICAgICAgIHZhciBjbGFzc1Rva2VucyA9IHV0aWwudG9rZW5pemVDbGFzcyhzdHIuc2xpY2UoaSksIHJlZ2V4cFN0cik7XG5cbiAgICAgICAgLy8gSW5jcmVhc2UgaW5kZXggYnkgbGVuZ3RoIG9mIGNsYXNzLlxuICAgICAgICBpICs9IGNsYXNzVG9rZW5zWzFdO1xuICAgICAgICBsYXN0LnB1c2goe1xuICAgICAgICAgIHR5cGU6IHR5cGVzLlNFVCxcbiAgICAgICAgICBzZXQ6IGNsYXNzVG9rZW5zWzBdLFxuICAgICAgICAgIG5vdCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYnJlYWs7XG5cblxuICAgICAgLy8gQ2xhc3Mgb2YgYW55IGNoYXJhY3RlciBleGNlcHQgXFxuLlxuICAgICAgY2FzZSAnLic6XG4gICAgICAgIGxhc3QucHVzaChzZXRzLmFueUNoYXIoKSk7XG4gICAgICAgIGJyZWFrO1xuXG5cbiAgICAgIC8vIFB1c2ggZ3JvdXAgb250byBzdGFjay5cbiAgICAgIGNhc2UgJygnOlxuICAgICAgICAvLyBDcmVhdGUgZ3JvdXAuXG4gICAgICAgIHZhciBncm91cCA9IHtcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HUk9VUCxcbiAgICAgICAgICBzdGFjazogW10sXG4gICAgICAgICAgcmVtZW1iZXI6IHRydWUsXG4gICAgICAgIH07XG5cbiAgICAgICAgYyA9IHN0cltpXTtcblxuICAgICAgICAvLyBJZiBpZiB0aGlzIGlzIGEgc3BlY2lhbCBraW5kIG9mIGdyb3VwLlxuICAgICAgICBpZiAoYyA9PT0gJz8nKSB7XG4gICAgICAgICAgYyA9IHN0cltpICsgMV07XG4gICAgICAgICAgaSArPSAyO1xuXG4gICAgICAgICAgLy8gTWF0Y2ggaWYgZm9sbG93ZWQgYnkuXG4gICAgICAgICAgaWYgKGMgPT09ICc9Jykge1xuICAgICAgICAgICAgZ3JvdXAuZm9sbG93ZWRCeSA9IHRydWU7XG5cbiAgICAgICAgICAvLyBNYXRjaCBpZiBub3QgZm9sbG93ZWQgYnkuXG4gICAgICAgICAgfSBlbHNlIGlmIChjID09PSAnIScpIHtcbiAgICAgICAgICAgIGdyb3VwLm5vdEZvbGxvd2VkQnkgPSB0cnVlO1xuXG4gICAgICAgICAgfSBlbHNlIGlmIChjICE9PSAnOicpIHtcbiAgICAgICAgICAgIHV0aWwuZXJyb3IocmVnZXhwU3RyLFxuICAgICAgICAgICAgICBgSW52YWxpZCBncm91cCwgY2hhcmFjdGVyICcke2N9J2AgK1xuICAgICAgICAgICAgICBgIGFmdGVyICc/JyBhdCBjb2x1bW4gJHtpIC0gMX1gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBncm91cC5yZW1lbWJlciA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5zZXJ0IHN1Ymdyb3VwIGludG8gY3VycmVudCBncm91cCBzdGFjay5cbiAgICAgICAgbGFzdC5wdXNoKGdyb3VwKTtcblxuICAgICAgICAvLyBSZW1lbWJlciB0aGUgY3VycmVudCBncm91cCBmb3Igd2hlbiB0aGUgZ3JvdXAgY2xvc2VzLlxuICAgICAgICBncm91cFN0YWNrLnB1c2gobGFzdEdyb3VwKTtcblxuICAgICAgICAvLyBNYWtlIHRoaXMgbmV3IGdyb3VwIHRoZSBjdXJyZW50IGdyb3VwLlxuICAgICAgICBsYXN0R3JvdXAgPSBncm91cDtcbiAgICAgICAgbGFzdCA9IGdyb3VwLnN0YWNrO1xuICAgICAgICBicmVhaztcblxuXG4gICAgICAvLyBQb3AgZ3JvdXAgb3V0IG9mIHN0YWNrLlxuICAgICAgY2FzZSAnKSc6XG4gICAgICAgIGlmIChncm91cFN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHV0aWwuZXJyb3IocmVnZXhwU3RyLCBgVW5tYXRjaGVkICkgYXQgY29sdW1uICR7aSAtIDF9YCk7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdEdyb3VwID0gZ3JvdXBTdGFjay5wb3AoKTtcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGlzIGdyb3VwIGhhcyBhIFBJUEUuXG4gICAgICAgIC8vIFRvIGdldCBiYWNrIHRoZSBjb3JyZWN0IGxhc3Qgc3RhY2suXG4gICAgICAgIGxhc3QgPSBsYXN0R3JvdXAub3B0aW9ucyA/XG4gICAgICAgICAgbGFzdEdyb3VwLm9wdGlvbnNbbGFzdEdyb3VwLm9wdGlvbnMubGVuZ3RoIC0gMV0gOiBsYXN0R3JvdXAuc3RhY2s7XG4gICAgICAgIGJyZWFrO1xuXG5cbiAgICAgIC8vIFVzZSBwaXBlIGNoYXJhY3RlciB0byBnaXZlIG1vcmUgY2hvaWNlcy5cbiAgICAgIGNhc2UgJ3wnOlxuICAgICAgICAvLyBDcmVhdGUgYXJyYXkgd2hlcmUgb3B0aW9ucyBhcmUgaWYgdGhpcyBpcyB0aGUgZmlyc3QgUElQRVxuICAgICAgICAvLyBpbiB0aGlzIGNsYXVzZS5cbiAgICAgICAgaWYgKCFsYXN0R3JvdXAub3B0aW9ucykge1xuICAgICAgICAgIGxhc3RHcm91cC5vcHRpb25zID0gW2xhc3RHcm91cC5zdGFja107XG4gICAgICAgICAgZGVsZXRlIGxhc3RHcm91cC5zdGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyBzdGFjayBhbmQgYWRkIHRvIG9wdGlvbnMgZm9yIHJlc3Qgb2YgY2xhdXNlLlxuICAgICAgICB2YXIgc3RhY2sgPSBbXTtcbiAgICAgICAgbGFzdEdyb3VwLm9wdGlvbnMucHVzaChzdGFjayk7XG4gICAgICAgIGxhc3QgPSBzdGFjaztcbiAgICAgICAgYnJlYWs7XG5cblxuICAgICAgLy8gUmVwZXRpdGlvbi5cbiAgICAgIC8vIEZvciBldmVyeSByZXBldGl0aW9uLCByZW1vdmUgbGFzdCBlbGVtZW50IGZyb20gbGFzdCBzdGFja1xuICAgICAgLy8gdGhlbiBpbnNlcnQgYmFjayBhIFJBTkdFIG9iamVjdC5cbiAgICAgIC8vIFRoaXMgZGVzaWduIGlzIGNob3NlbiBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG1vcmUgdGhhblxuICAgICAgLy8gb25lIHJlcGV0aXRpb24gc3ltYm9scyBpbiBhIHJlZ2V4IGkuZS4gYGE/K3syLDN9YC5cbiAgICAgIGNhc2UgJ3snOlxuICAgICAgICB2YXIgcnMgPSAvXihcXGQrKSgsKFxcZCspPyk/XFx9Ly5leGVjKHN0ci5zbGljZShpKSksIG1pbiwgbWF4O1xuICAgICAgICBpZiAocnMgIT09IG51bGwpIHtcbiAgICAgICAgICBpZiAobGFzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJlcGVhdEVycihpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbWluID0gcGFyc2VJbnQocnNbMV0sIDEwKTtcbiAgICAgICAgICBtYXggPSByc1syXSA/IHJzWzNdID8gcGFyc2VJbnQocnNbM10sIDEwKSA6IEluZmluaXR5IDogbWluO1xuICAgICAgICAgIGkgKz0gcnNbMF0ubGVuZ3RoO1xuXG4gICAgICAgICAgbGFzdC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVzLlJFUEVUSVRJT04sXG4gICAgICAgICAgICBtaW4sXG4gICAgICAgICAgICBtYXgsXG4gICAgICAgICAgICB2YWx1ZTogbGFzdC5wb3AoKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsYXN0LnB1c2goe1xuICAgICAgICAgICAgdHlwZTogdHlwZXMuQ0hBUixcbiAgICAgICAgICAgIHZhbHVlOiAxMjMsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJz8nOlxuICAgICAgICBpZiAobGFzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXBlYXRFcnIoaSk7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdC5wdXNoKHtcbiAgICAgICAgICB0eXBlOiB0eXBlcy5SRVBFVElUSU9OLFxuICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICBtYXg6IDEsXG4gICAgICAgICAgdmFsdWU6IGxhc3QucG9wKCksXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnKyc6XG4gICAgICAgIGlmIChsYXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJlcGVhdEVycihpKTtcbiAgICAgICAgfVxuICAgICAgICBsYXN0LnB1c2goe1xuICAgICAgICAgIHR5cGU6IHR5cGVzLlJFUEVUSVRJT04sXG4gICAgICAgICAgbWluOiAxLFxuICAgICAgICAgIG1heDogSW5maW5pdHksXG4gICAgICAgICAgdmFsdWU6IGxhc3QucG9wKCksXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnKic6XG4gICAgICAgIGlmIChsYXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJlcGVhdEVycihpKTtcbiAgICAgICAgfVxuICAgICAgICBsYXN0LnB1c2goe1xuICAgICAgICAgIHR5cGU6IHR5cGVzLlJFUEVUSVRJT04sXG4gICAgICAgICAgbWluOiAwLFxuICAgICAgICAgIG1heDogSW5maW5pdHksXG4gICAgICAgICAgdmFsdWU6IGxhc3QucG9wKCksXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcblxuXG4gICAgICAvLyBEZWZhdWx0IGlzIGEgY2hhcmFjdGVyIHRoYXQgaXMgbm90IGBcXFtdKCl7fT8rKl4kYC5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGxhc3QucHVzaCh7XG4gICAgICAgICAgdHlwZTogdHlwZXMuQ0hBUixcbiAgICAgICAgICB2YWx1ZTogYy5jaGFyQ29kZUF0KDApLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIENoZWNrIGlmIGFueSBncm91cHMgaGF2ZSBub3QgYmVlbiBjbG9zZWQuXG4gIGlmIChncm91cFN0YWNrLmxlbmd0aCAhPT0gMCkge1xuICAgIHV0aWwuZXJyb3IocmVnZXhwU3RyLCAnVW50ZXJtaW5hdGVkIGdyb3VwJyk7XG4gIH1cblxuICByZXR1cm4gc3RhcnQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cy50eXBlcyA9IHR5cGVzO1xuIiwiY29uc3QgdHlwZXMgPSByZXF1aXJlKCcuL3R5cGVzJyk7XG5leHBvcnRzLndvcmRCb3VuZGFyeSA9ICgpID0+ICh7IHR5cGU6IHR5cGVzLlBPU0lUSU9OLCB2YWx1ZTogJ2InIH0pO1xuZXhwb3J0cy5ub25Xb3JkQm91bmRhcnkgPSAoKSA9PiAoeyB0eXBlOiB0eXBlcy5QT1NJVElPTiwgdmFsdWU6ICdCJyB9KTtcbmV4cG9ydHMuYmVnaW4gPSAoKSA9PiAoeyB0eXBlOiB0eXBlcy5QT1NJVElPTiwgdmFsdWU6ICdeJyB9KTtcbmV4cG9ydHMuZW5kID0gKCkgPT4gKHsgdHlwZTogdHlwZXMuUE9TSVRJT04sIHZhbHVlOiAnJCcgfSk7XG4iLCJjb25zdCB0eXBlcyA9IHJlcXVpcmUoJy4vdHlwZXMnKTtcblxuY29uc3QgSU5UUyA9ICgpID0+IFt7IHR5cGU6IHR5cGVzLlJBTkdFICwgZnJvbTogNDgsIHRvOiA1NyB9XTtcblxuY29uc3QgV09SRFMgPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAgeyB0eXBlOiB0eXBlcy5DSEFSLCB2YWx1ZTogOTUgfSxcbiAgICB7IHR5cGU6IHR5cGVzLlJBTkdFLCBmcm9tOiA5NywgdG86IDEyMiB9LFxuICAgIHsgdHlwZTogdHlwZXMuUkFOR0UsIGZyb206IDY1LCB0bzogOTAgfVxuICBdLmNvbmNhdChJTlRTKCkpO1xufTtcblxuY29uc3QgV0hJVEVTUEFDRSA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7IHR5cGU6IHR5cGVzLkNIQVIsIHZhbHVlOiA5IH0sXG4gICAgeyB0eXBlOiB0eXBlcy5DSEFSLCB2YWx1ZTogMTAgfSxcbiAgICB7IHR5cGU6IHR5cGVzLkNIQVIsIHZhbHVlOiAxMSB9LFxuICAgIHsgdHlwZTogdHlwZXMuQ0hBUiwgdmFsdWU6IDEyIH0sXG4gICAgeyB0eXBlOiB0eXBlcy5DSEFSLCB2YWx1ZTogMTMgfSxcbiAgICB7IHR5cGU6IHR5cGVzLkNIQVIsIHZhbHVlOiAzMiB9LFxuICAgIHsgdHlwZTogdHlwZXMuQ0hBUiwgdmFsdWU6IDE2MCB9LFxuICAgIHsgdHlwZTogdHlwZXMuQ0hBUiwgdmFsdWU6IDU3NjAgfSxcbiAgICB7IHR5cGU6IHR5cGVzLlJBTkdFLCBmcm9tOiA4MTkyLCB0bzogODIwMiB9LFxuICAgIHsgdHlwZTogdHlwZXMuQ0hBUiwgdmFsdWU6IDgyMzIgfSxcbiAgICB7IHR5cGU6IHR5cGVzLkNIQVIsIHZhbHVlOiA4MjMzIH0sXG4gICAgeyB0eXBlOiB0eXBlcy5DSEFSLCB2YWx1ZTogODIzOSB9LFxuICAgIHsgdHlwZTogdHlwZXMuQ0hBUiwgdmFsdWU6IDgyODcgfSxcbiAgICB7IHR5cGU6IHR5cGVzLkNIQVIsIHZhbHVlOiAxMjI4OCB9LFxuICAgIHsgdHlwZTogdHlwZXMuQ0hBUiwgdmFsdWU6IDY1Mjc5IH1cbiAgXTtcbn07XG5cbmNvbnN0IE5PVEFOWUNIQVIgPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAgeyB0eXBlOiB0eXBlcy5DSEFSLCB2YWx1ZTogMTAgfSxcbiAgICB7IHR5cGU6IHR5cGVzLkNIQVIsIHZhbHVlOiAxMyB9LFxuICAgIHsgdHlwZTogdHlwZXMuQ0hBUiwgdmFsdWU6IDgyMzIgfSxcbiAgICB7IHR5cGU6IHR5cGVzLkNIQVIsIHZhbHVlOiA4MjMzIH0sXG4gIF07XG59O1xuXG4vLyBQcmVkZWZpbmVkIGNsYXNzIG9iamVjdHMuXG5leHBvcnRzLndvcmRzID0gKCkgPT4gKHsgdHlwZTogdHlwZXMuU0VULCBzZXQ6IFdPUkRTKCksIG5vdDogZmFsc2UgfSk7XG5leHBvcnRzLm5vdFdvcmRzID0gKCkgPT4gKHsgdHlwZTogdHlwZXMuU0VULCBzZXQ6IFdPUkRTKCksIG5vdDogdHJ1ZSB9KTtcbmV4cG9ydHMuaW50cyA9ICgpID0+ICh7IHR5cGU6IHR5cGVzLlNFVCwgc2V0OiBJTlRTKCksIG5vdDogZmFsc2UgfSk7XG5leHBvcnRzLm5vdEludHMgPSAoKSA9PiAoeyB0eXBlOiB0eXBlcy5TRVQsIHNldDogSU5UUygpLCBub3Q6IHRydWUgfSk7XG5leHBvcnRzLndoaXRlc3BhY2UgPSAoKSA9PiAoeyB0eXBlOiB0eXBlcy5TRVQsIHNldDogV0hJVEVTUEFDRSgpLCBub3Q6IGZhbHNlIH0pO1xuZXhwb3J0cy5ub3RXaGl0ZXNwYWNlID0gKCkgPT4gKHsgdHlwZTogdHlwZXMuU0VULCBzZXQ6IFdISVRFU1BBQ0UoKSwgbm90OiB0cnVlIH0pO1xuZXhwb3J0cy5hbnlDaGFyID0gKCkgPT4gKHsgdHlwZTogdHlwZXMuU0VULCBzZXQ6IE5PVEFOWUNIQVIoKSwgbm90OiB0cnVlIH0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFJPT1QgICAgICAgOiAwLFxuICBHUk9VUCAgICAgIDogMSxcbiAgUE9TSVRJT04gICA6IDIsXG4gIFNFVCAgICAgICAgOiAzLFxuICBSQU5HRSAgICAgIDogNCxcbiAgUkVQRVRJVElPTiA6IDUsXG4gIFJFRkVSRU5DRSAgOiA2LFxuICBDSEFSICAgICAgIDogNyxcbn07XG4iLCJjb25zdCB0eXBlcyA9IHJlcXVpcmUoJy4vdHlwZXMnKTtcbmNvbnN0IHNldHMgID0gcmVxdWlyZSgnLi9zZXRzJyk7XG5cblxuY29uc3QgQ1RSTCA9ICdAQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXFxcXF1eID8nO1xuY29uc3QgU0xTSCA9IHsgJzAnOiAwLCAndCc6IDksICduJzogMTAsICd2JzogMTEsICdmJzogMTIsICdyJzogMTMgfTtcblxuLyoqXG4gKiBGaW5kcyBjaGFyYWN0ZXIgcmVwcmVzZW50YXRpb25zIGluIHN0ciBhbmQgY29udmVydCBhbGwgdG9cbiAqIHRoZWlyIHJlc3BlY3RpdmUgY2hhcmFjdGVyc1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5zdHJUb0NoYXJzID0gZnVuY3Rpb24oc3RyKSB7XG4gIC8qIGpzaGludCBtYXhsZW46IGZhbHNlICovXG4gIHZhciBjaGFyc19yZWdleCA9IC8oXFxbXFxcXGJcXF0pfChcXFxcKT9cXFxcKD86dShbQS1GMC05XXs0fSl8eChbQS1GMC05XXsyfSl8KDA/WzAtN117Mn0pfGMoW0BBLVpbXFxcXFxcXV4/XSl8KFswdG52ZnJdKSkvZztcbiAgc3RyID0gc3RyLnJlcGxhY2UoY2hhcnNfcmVnZXgsIGZ1bmN0aW9uKHMsIGIsIGxicywgYTE2LCBiMTYsIGM4LCBkY3RybCwgZXNsc2gpIHtcbiAgICBpZiAobGJzKSB7XG4gICAgICByZXR1cm4gcztcbiAgICB9XG5cbiAgICB2YXIgY29kZSA9IGIgPyA4IDpcbiAgICAgIGExNiAgID8gcGFyc2VJbnQoYTE2LCAxNikgOlxuICAgICAgYjE2ICAgPyBwYXJzZUludChiMTYsIDE2KSA6XG4gICAgICBjOCAgICA/IHBhcnNlSW50KGM4LCAgIDgpIDpcbiAgICAgIGRjdHJsID8gQ1RSTC5pbmRleE9mKGRjdHJsKSA6XG4gICAgICBTTFNIW2VzbHNoXTtcblxuICAgIHZhciBjID0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcblxuICAgIC8vIEVzY2FwZSBzcGVjaWFsIHJlZ2V4IGNoYXJhY3RlcnMuXG4gICAgaWYgKC9bW1xcXXt9XiQufD8qKygpXS8udGVzdChjKSkge1xuICAgICAgYyA9ICdcXFxcJyArIGM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGM7XG4gIH0pO1xuXG4gIHJldHVybiBzdHI7XG59O1xuXG5cbi8qKlxuICogdHVybnMgY2xhc3MgaW50byB0b2tlbnNcbiAqIHJlYWRzIHN0ciB1bnRpbCBpdCBlbmNvdW50ZXJzIGEgXSBub3QgcHJlY2VlZGVkIGJ5IGEgXFxcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge1N0cmluZ30gcmVnZXhwU3RyXG4gKiBAcmV0dXJuIHtBcnJheS48QXJyYXkuPE9iamVjdD4sIE51bWJlcj59XG4gKi9cbmV4cG9ydHMudG9rZW5pemVDbGFzcyA9IChzdHIsIHJlZ2V4cFN0cikgPT4ge1xuICAvKiBqc2hpbnQgbWF4bGVuOiBmYWxzZSAqL1xuICB2YXIgdG9rZW5zID0gW107XG4gIHZhciByZWdleHAgPSAvXFxcXCg/Oih3KXwoZCl8KHMpfChXKXwoRCl8KFMpKXwoKD86KD86XFxcXCkoLil8KFteXFxdXFxcXF0pKS0oPzpcXFxcKT8oW15cXF1dKSl8KFxcXSl8KD86XFxcXCk/KFteXSkvZztcbiAgdmFyIHJzLCBjO1xuXG5cbiAgd2hpbGUgKChycyA9IHJlZ2V4cC5leGVjKHN0cikpICE9IG51bGwpIHtcbiAgICBpZiAocnNbMV0pIHtcbiAgICAgIHRva2Vucy5wdXNoKHNldHMud29yZHMoKSk7XG5cbiAgICB9IGVsc2UgaWYgKHJzWzJdKSB7XG4gICAgICB0b2tlbnMucHVzaChzZXRzLmludHMoKSk7XG5cbiAgICB9IGVsc2UgaWYgKHJzWzNdKSB7XG4gICAgICB0b2tlbnMucHVzaChzZXRzLndoaXRlc3BhY2UoKSk7XG5cbiAgICB9IGVsc2UgaWYgKHJzWzRdKSB7XG4gICAgICB0b2tlbnMucHVzaChzZXRzLm5vdFdvcmRzKCkpO1xuXG4gICAgfSBlbHNlIGlmIChyc1s1XSkge1xuICAgICAgdG9rZW5zLnB1c2goc2V0cy5ub3RJbnRzKCkpO1xuXG4gICAgfSBlbHNlIGlmIChyc1s2XSkge1xuICAgICAgdG9rZW5zLnB1c2goc2V0cy5ub3RXaGl0ZXNwYWNlKCkpO1xuXG4gICAgfSBlbHNlIGlmIChyc1s3XSkge1xuICAgICAgdG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiB0eXBlcy5SQU5HRSxcbiAgICAgICAgZnJvbTogKHJzWzhdIHx8IHJzWzldKS5jaGFyQ29kZUF0KDApLFxuICAgICAgICB0bzogcnNbMTBdLmNoYXJDb2RlQXQoMCksXG4gICAgICB9KTtcblxuICAgIH0gZWxzZSBpZiAoKGMgPSByc1sxMl0pKSB7XG4gICAgICB0b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6IHR5cGVzLkNIQVIsXG4gICAgICAgIHZhbHVlOiBjLmNoYXJDb2RlQXQoMCksXG4gICAgICB9KTtcblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW3Rva2VucywgcmVnZXhwLmxhc3RJbmRleF07XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0cy5lcnJvcihyZWdleHBTdHIsICdVbnRlcm1pbmF0ZWQgY2hhcmFjdGVyIGNsYXNzJyk7XG59O1xuXG5cbi8qKlxuICogU2hvcnRjdXQgdG8gdGhyb3cgZXJyb3JzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSByZWdleHBcbiAqIEBwYXJhbSB7U3RyaW5nfSBtc2dcbiAqL1xuZXhwb3J0cy5lcnJvciA9IChyZWdleHAsIG1zZykgPT4ge1xuICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ0ludmFsaWQgcmVndWxhciBleHByZXNzaW9uOiAvJyArIHJlZ2V4cCArICcvOiAnICsgbXNnKTtcbn07XG4iLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToodD10fHxzZWxmKS5Td2VldGFsZXJ0Mj1lKCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3JldHVybihyPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbih0KXtyZXR1cm4gdHlwZW9mIHR9OmZ1bmN0aW9uKHQpe3JldHVybiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJnQuY29uc3RydWN0b3I9PT1TeW1ib2wmJnQhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIHR9KSh0KX1mdW5jdGlvbiBhKHQsZSl7aWYoISh0IGluc3RhbmNlb2YgZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBvKHQsZSl7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciBvPWVbbl07by5lbnVtZXJhYmxlPW8uZW51bWVyYWJsZXx8ITEsby5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbyYmKG8ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG8ua2V5LG8pfX1mdW5jdGlvbiBzKHQsZSxuKXtyZXR1cm4gZSYmbyh0LnByb3RvdHlwZSxlKSxuJiZvKHQsbiksdH1mdW5jdGlvbiB1KCl7cmV0dXJuKHU9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTE7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl7dmFyIG4sbz1hcmd1bWVudHNbZV07Zm9yKG4gaW4gbylPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobyxuKSYmKHRbbl09b1tuXSl9cmV0dXJuIHR9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gYyh0KXtyZXR1cm4oYz1PYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LmdldFByb3RvdHlwZU9mOmZ1bmN0aW9uKHQpe3JldHVybiB0Ll9fcHJvdG9fX3x8T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpfSkodCl9ZnVuY3Rpb24gbCh0LGUpe3JldHVybihsPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5fX3Byb3RvX189ZSx0fSkodCxlKX1mdW5jdGlvbiBkKCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFJlZmxlY3R8fCFSZWZsZWN0LmNvbnN0cnVjdClyZXR1cm4hMTtpZihSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKXJldHVybiExO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIFByb3h5KXJldHVybiEwO3RyeXtyZXR1cm4gQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sW10sZnVuY3Rpb24oKXt9KSksITB9Y2F0Y2godCl7cmV0dXJuITF9fWZ1bmN0aW9uIGkodCxlLG4pe3JldHVybihpPWQoKT9SZWZsZWN0LmNvbnN0cnVjdDpmdW5jdGlvbih0LGUsbil7dmFyIG89W251bGxdO28ucHVzaC5hcHBseShvLGUpO289bmV3KEZ1bmN0aW9uLmJpbmQuYXBwbHkodCxvKSk7cmV0dXJuIG4mJmwobyxuLnByb3RvdHlwZSksb30pLmFwcGx5KG51bGwsYXJndW1lbnRzKX1mdW5jdGlvbiBwKHQsZSl7cmV0dXJuIWV8fFwib2JqZWN0XCIhPXR5cGVvZiBlJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBlP2Z1bmN0aW9uKHQpe2lmKHZvaWQgMD09PXQpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiB0fSh0KTplfWZ1bmN0aW9uIGYodCxlLG4pe3JldHVybihmPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBSZWZsZWN0JiZSZWZsZWN0LmdldD9SZWZsZWN0LmdldDpmdW5jdGlvbih0LGUsbil7dD1mdW5jdGlvbih0LGUpe2Zvcig7IU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpJiZudWxsIT09KHQ9Yyh0KSk7KTtyZXR1cm4gdH0odCxlKTtpZih0KXtlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCxlKTtyZXR1cm4gZS5nZXQ/ZS5nZXQuY2FsbChuKTplLnZhbHVlfX0pKHQsZSxufHx0KX1mdW5jdGlvbiBtKHQpe3JldHVybiB0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSl9ZnVuY3Rpb24gaChlKXtyZXR1cm4gT2JqZWN0LmtleXMoZSkubWFwKGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfSl9ZnVuY3Rpb24gZyh0KXtyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodCl9ZnVuY3Rpb24gdih0LGUpe2U9J1wiJy5jb25jYXQodCwnXCIgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuIFBsZWFzZSB1c2UgXCInKS5jb25jYXQoZSwnXCIgaW5zdGVhZC4nKSwtMT09PVkuaW5kZXhPZihlKSYmKFkucHVzaChlKSxXKGUpKX1mdW5jdGlvbiBiKHQpe3JldHVybiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LnRvUHJvbWlzZX1mdW5jdGlvbiB5KHQpe3JldHVybiBiKHQpP3QudG9Qcm9taXNlKCk6UHJvbWlzZS5yZXNvbHZlKHQpfWZ1bmN0aW9uIHcodCl7cmV0dXJuIHQmJlByb21pc2UucmVzb2x2ZSh0KT09PXR9ZnVuY3Rpb24gQyh0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIEVsZW1lbnR8fFwib2JqZWN0XCI9PT1yKHQ9dCkmJnQuanF1ZXJ5fWZ1bmN0aW9uIGsoKXtyZXR1cm4gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdCgkLmNvbnRhaW5lcikpfWZ1bmN0aW9uIGUodCl7dmFyIGU9aygpO3JldHVybiBlP2UucXVlcnlTZWxlY3Rvcih0KTpudWxsfWZ1bmN0aW9uIHQodCl7cmV0dXJuIGUoXCIuXCIuY29uY2F0KHQpKX1mdW5jdGlvbiBBKCl7cmV0dXJuIHQoJC5wb3B1cCl9ZnVuY3Rpb24geCgpe3JldHVybiB0KCQuaWNvbil9ZnVuY3Rpb24gQigpe3JldHVybiB0KCQudGl0bGUpfWZ1bmN0aW9uIFAoKXtyZXR1cm4gdCgkLmNvbnRlbnQpfWZ1bmN0aW9uIE8oKXtyZXR1cm4gdCgkW1wiaHRtbC1jb250YWluZXJcIl0pfWZ1bmN0aW9uIEUoKXtyZXR1cm4gdCgkLmltYWdlKX1mdW5jdGlvbiBuKCl7cmV0dXJuIHQoJFtcInByb2dyZXNzLXN0ZXBzXCJdKX1mdW5jdGlvbiBTKCl7cmV0dXJuIHQoJFtcInZhbGlkYXRpb24tbWVzc2FnZVwiXSl9ZnVuY3Rpb24gVCgpe3JldHVybiBlKFwiLlwiLmNvbmNhdCgkLmFjdGlvbnMsXCIgLlwiKS5jb25jYXQoJC5jb25maXJtKSl9ZnVuY3Rpb24gTCgpe3JldHVybiBlKFwiLlwiLmNvbmNhdCgkLmFjdGlvbnMsXCIgLlwiKS5jb25jYXQoJC5kZW55KSl9ZnVuY3Rpb24gcSgpe3JldHVybiBlKFwiLlwiLmNvbmNhdCgkLmxvYWRlcikpfWZ1bmN0aW9uIEQoKXtyZXR1cm4gZShcIi5cIi5jb25jYXQoJC5hY3Rpb25zLFwiIC5cIikuY29uY2F0KCQuY2FuY2VsKSl9ZnVuY3Rpb24gaigpe3JldHVybiB0KCQuYWN0aW9ucyl9ZnVuY3Rpb24gTSgpe3JldHVybiB0KCQuaGVhZGVyKX1mdW5jdGlvbiBJKCl7cmV0dXJuIHQoJC5mb290ZXIpfWZ1bmN0aW9uIEgoKXtyZXR1cm4gdCgkW1widGltZXItcHJvZ3Jlc3MtYmFyXCJdKX1mdW5jdGlvbiBWKCl7cmV0dXJuIHQoJC5jbG9zZSl9ZnVuY3Rpb24gUigpe3ZhciB0PWcoQSgpLnF1ZXJ5U2VsZWN0b3JBbGwoJ1t0YWJpbmRleF06bm90KFt0YWJpbmRleD1cIi0xXCJdKTpub3QoW3RhYmluZGV4PVwiMFwiXSknKSkuc29ydChmdW5jdGlvbih0LGUpe3JldHVybiB0PXBhcnNlSW50KHQuZ2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIikpLChlPXBhcnNlSW50KGUuZ2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIikpKTx0PzE6dDxlPy0xOjB9KSxlPWcoQSgpLnF1ZXJ5U2VsZWN0b3JBbGwoJ1xcbiAgYVtocmVmXSxcXG4gIGFyZWFbaHJlZl0sXFxuICBpbnB1dDpub3QoW2Rpc2FibGVkXSksXFxuICBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pLFxcbiAgdGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pLFxcbiAgYnV0dG9uOm5vdChbZGlzYWJsZWRdKSxcXG4gIGlmcmFtZSxcXG4gIG9iamVjdCxcXG4gIGVtYmVkLFxcbiAgW3RhYmluZGV4PVwiMFwiXSxcXG4gIFtjb250ZW50ZWRpdGFibGVdLFxcbiAgYXVkaW9bY29udHJvbHNdLFxcbiAgdmlkZW9bY29udHJvbHNdLFxcbiAgc3VtbWFyeVxcbicpKS5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuXCItMVwiIT09dC5nZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKX0pO3JldHVybiBmdW5jdGlvbih0KXtmb3IodmFyIGU9W10sbj0wO248dC5sZW5ndGg7bisrKS0xPT09ZS5pbmRleE9mKHRbbl0pJiZlLnB1c2godFtuXSk7cmV0dXJuIGV9KHQuY29uY2F0KGUpKS5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIHd0KHQpfSl9ZnVuY3Rpb24gTigpe3JldHVybiFHKCkmJiFkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygkW1wibm8tYmFja2Ryb3BcIl0pfWZ1bmN0aW9uIFUoZSx0KXtlLnRleHRDb250ZW50PVwiXCIsdCYmKHQ9KG5ldyBET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyh0LFwidGV4dC9odG1sXCIpLGcodC5xdWVyeVNlbGVjdG9yKFwiaGVhZFwiKS5jaGlsZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2UuYXBwZW5kQ2hpbGQodCl9KSxnKHQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2hpbGROb2RlcykuZm9yRWFjaChmdW5jdGlvbih0KXtlLmFwcGVuZENoaWxkKHQpfSkpfWZ1bmN0aW9uIEYodCxlKXtpZihlKXtmb3IodmFyIG49ZS5zcGxpdCgvXFxzKy8pLG89MDtvPG4ubGVuZ3RoO28rKylpZighdC5jbGFzc0xpc3QuY29udGFpbnMobltvXSkpcmV0dXJuO3JldHVybiAxfX1mdW5jdGlvbiBfKHQsZSxuKXt2YXIgbyxpO2lmKGk9ZSxnKChvPXQpLmNsYXNzTGlzdCkuZm9yRWFjaChmdW5jdGlvbih0KXstMT09PWgoJCkuaW5kZXhPZih0KSYmLTE9PT1oKFgpLmluZGV4T2YodCkmJi0xPT09aChpLnNob3dDbGFzcykuaW5kZXhPZih0KSYmby5jbGFzc0xpc3QucmVtb3ZlKHQpfSksZS5jdXN0b21DbGFzcyYmZS5jdXN0b21DbGFzc1tuXSl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUuY3VzdG9tQ2xhc3Nbbl0mJiFlLmN1c3RvbUNsYXNzW25dLmZvckVhY2gpcmV0dXJuIFcoXCJJbnZhbGlkIHR5cGUgb2YgY3VzdG9tQ2xhc3MuXCIuY29uY2F0KG4sJyEgRXhwZWN0ZWQgc3RyaW5nIG9yIGl0ZXJhYmxlIG9iamVjdCwgZ290IFwiJykuY29uY2F0KHIoZS5jdXN0b21DbGFzc1tuXSksJ1wiJykpO3Z0KHQsZS5jdXN0b21DbGFzc1tuXSl9fXZhciB6PVwiU3dlZXRBbGVydDI6XCIsVz1mdW5jdGlvbih0KXtjb25zb2xlLndhcm4oXCJcIi5jb25jYXQoeixcIiBcIikuY29uY2F0KFwib2JqZWN0XCI9PT1yKHQpP3Quam9pbihcIiBcIik6dCkpfSxLPWZ1bmN0aW9uKHQpe2NvbnNvbGUuZXJyb3IoXCJcIi5jb25jYXQoeixcIiBcIikuY29uY2F0KHQpKX0sWT1bXSxaPWZ1bmN0aW9uKHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dCgpOnR9LFE9T2JqZWN0LmZyZWV6ZSh7Y2FuY2VsOlwiY2FuY2VsXCIsYmFja2Ryb3A6XCJiYWNrZHJvcFwiLGNsb3NlOlwiY2xvc2VcIixlc2M6XCJlc2NcIix0aW1lcjpcInRpbWVyXCJ9KSxKPWZ1bmN0aW9uKHQpe3ZhciBlLG49e307Zm9yKGUgaW4gdCluW3RbZV1dPVwic3dhbDItXCIrdFtlXTtyZXR1cm4gbn0sJD1KKFtcImNvbnRhaW5lclwiLFwic2hvd25cIixcImhlaWdodC1hdXRvXCIsXCJpb3NmaXhcIixcInBvcHVwXCIsXCJtb2RhbFwiLFwibm8tYmFja2Ryb3BcIixcIm5vLXRyYW5zaXRpb25cIixcInRvYXN0XCIsXCJ0b2FzdC1zaG93blwiLFwic2hvd1wiLFwiaGlkZVwiLFwiY2xvc2VcIixcInRpdGxlXCIsXCJoZWFkZXJcIixcImNvbnRlbnRcIixcImh0bWwtY29udGFpbmVyXCIsXCJhY3Rpb25zXCIsXCJjb25maXJtXCIsXCJkZW55XCIsXCJjYW5jZWxcIixcImZvb3RlclwiLFwiaWNvblwiLFwiaWNvbi1jb250ZW50XCIsXCJpbWFnZVwiLFwiaW5wdXRcIixcImZpbGVcIixcInJhbmdlXCIsXCJzZWxlY3RcIixcInJhZGlvXCIsXCJjaGVja2JveFwiLFwibGFiZWxcIixcInRleHRhcmVhXCIsXCJpbnB1dGVycm9yXCIsXCJpbnB1dC1sYWJlbFwiLFwidmFsaWRhdGlvbi1tZXNzYWdlXCIsXCJwcm9ncmVzcy1zdGVwc1wiLFwiYWN0aXZlLXByb2dyZXNzLXN0ZXBcIixcInByb2dyZXNzLXN0ZXBcIixcInByb2dyZXNzLXN0ZXAtbGluZVwiLFwibG9hZGVyXCIsXCJsb2FkaW5nXCIsXCJzdHlsZWRcIixcInRvcFwiLFwidG9wLXN0YXJ0XCIsXCJ0b3AtZW5kXCIsXCJ0b3AtbGVmdFwiLFwidG9wLXJpZ2h0XCIsXCJjZW50ZXJcIixcImNlbnRlci1zdGFydFwiLFwiY2VudGVyLWVuZFwiLFwiY2VudGVyLWxlZnRcIixcImNlbnRlci1yaWdodFwiLFwiYm90dG9tXCIsXCJib3R0b20tc3RhcnRcIixcImJvdHRvbS1lbmRcIixcImJvdHRvbS1sZWZ0XCIsXCJib3R0b20tcmlnaHRcIixcImdyb3ctcm93XCIsXCJncm93LWNvbHVtblwiLFwiZ3Jvdy1mdWxsc2NyZWVuXCIsXCJydGxcIixcInRpbWVyLXByb2dyZXNzLWJhclwiLFwidGltZXItcHJvZ3Jlc3MtYmFyLWNvbnRhaW5lclwiLFwic2Nyb2xsYmFyLW1lYXN1cmVcIixcImljb24tc3VjY2Vzc1wiLFwiaWNvbi13YXJuaW5nXCIsXCJpY29uLWluZm9cIixcImljb24tcXVlc3Rpb25cIixcImljb24tZXJyb3JcIl0pLFg9SihbXCJzdWNjZXNzXCIsXCJ3YXJuaW5nXCIsXCJpbmZvXCIsXCJxdWVzdGlvblwiLFwiZXJyb3JcIl0pLEc9ZnVuY3Rpb24oKXtyZXR1cm4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJFtcInRvYXN0LXNob3duXCJdKX0sdHQ9e3ByZXZpb3VzQm9keVBhZGRpbmc6bnVsbH07ZnVuY3Rpb24gZXQodCxlKXtpZighZSlyZXR1cm4gbnVsbDtzd2l0Y2goZSl7Y2FzZVwic2VsZWN0XCI6Y2FzZVwidGV4dGFyZWFcIjpjYXNlXCJmaWxlXCI6cmV0dXJuIHl0KHQsJFtlXSk7Y2FzZVwiY2hlY2tib3hcIjpyZXR1cm4gdC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdCgkLmNoZWNrYm94LFwiIGlucHV0XCIpKTtjYXNlXCJyYWRpb1wiOnJldHVybiB0LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KCQucmFkaW8sXCIgaW5wdXQ6Y2hlY2tlZFwiKSl8fHQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoJC5yYWRpbyxcIiBpbnB1dDpmaXJzdC1jaGlsZFwiKSk7Y2FzZVwicmFuZ2VcIjpyZXR1cm4gdC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdCgkLnJhbmdlLFwiIGlucHV0XCIpKTtkZWZhdWx0OnJldHVybiB5dCh0LCQuaW5wdXQpfX1mdW5jdGlvbiBudCh0KXt2YXIgZTt0LmZvY3VzKCksXCJmaWxlXCIhPT10LnR5cGUmJihlPXQudmFsdWUsdC52YWx1ZT1cIlwiLHQudmFsdWU9ZSl9ZnVuY3Rpb24gb3QodCxlLG4pe3QmJmUmJihlPVwic3RyaW5nXCI9PXR5cGVvZiBlP2Uuc3BsaXQoL1xccysvKS5maWx0ZXIoQm9vbGVhbik6ZSkuZm9yRWFjaChmdW5jdGlvbihlKXt0LmZvckVhY2g/dC5mb3JFYWNoKGZ1bmN0aW9uKHQpe24/dC5jbGFzc0xpc3QuYWRkKGUpOnQuY2xhc3NMaXN0LnJlbW92ZShlKX0pOm4/dC5jbGFzc0xpc3QuYWRkKGUpOnQuY2xhc3NMaXN0LnJlbW92ZShlKX0pfWZ1bmN0aW9uIGl0KHQsZSxuKXsobj1uPT09XCJcIi5jb25jYXQocGFyc2VJbnQobikpP3BhcnNlSW50KG4pOm4pfHwwPT09cGFyc2VJbnQobik/dC5zdHlsZVtlXT1cIm51bWJlclwiPT10eXBlb2Ygbj9cIlwiLmNvbmNhdChuLFwicHhcIik6bjp0LnN0eWxlLnJlbW92ZVByb3BlcnR5KGUpfWZ1bmN0aW9uIHJ0KHQpe3Quc3R5bGUuZGlzcGxheT0xPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06XCJmbGV4XCJ9ZnVuY3Rpb24gYXQodCl7dC5zdHlsZS5kaXNwbGF5PVwibm9uZVwifWZ1bmN0aW9uIHN0KHQsZSxuLG8peyhlPXQucXVlcnlTZWxlY3RvcihlKSkmJihlLnN0eWxlW25dPW8pfWZ1bmN0aW9uIHV0KHQsZSxuKXtlP3J0KHQsbik6YXQodCl9ZnVuY3Rpb24gY3QodCl7cmV0dXJuISEodC5zY3JvbGxIZWlnaHQ+dC5jbGllbnRIZWlnaHQpfWZ1bmN0aW9uIGx0KHQpe3ZhciBlPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQpLHQ9cGFyc2VGbG9hdChlLmdldFByb3BlcnR5VmFsdWUoXCJhbmltYXRpb24tZHVyYXRpb25cIil8fFwiMFwiKSxlPXBhcnNlRmxvYXQoZS5nZXRQcm9wZXJ0eVZhbHVlKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiKXx8XCIwXCIpO3JldHVybiAwPHR8fDA8ZX1mdW5jdGlvbiBkdCh0KXt2YXIgZT0xPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXSYmYXJndW1lbnRzWzFdLG49SCgpO3d0KG4pJiYoZSYmKG4uc3R5bGUudHJhbnNpdGlvbj1cIm5vbmVcIixuLnN0eWxlLndpZHRoPVwiMTAwJVwiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bi5zdHlsZS50cmFuc2l0aW9uPVwid2lkdGggXCIuY29uY2F0KHQvMWUzLFwicyBsaW5lYXJcIiksbi5zdHlsZS53aWR0aD1cIjAlXCJ9LDEwKSl9ZnVuY3Rpb24gcHQoKXtyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2Ygd2luZG93fHxcInVuZGVmaW5lZFwiPT10eXBlb2YgZG9jdW1lbnR9ZnVuY3Rpb24gZnQodCl7TW4uaXNWaXNpYmxlKCkmJmd0IT09dC50YXJnZXQudmFsdWUmJk1uLnJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoKSxndD10LnRhcmdldC52YWx1ZX1mdW5jdGlvbiBtdCh0LGUpe3QgaW5zdGFuY2VvZiBIVE1MRWxlbWVudD9lLmFwcGVuZENoaWxkKHQpOlwib2JqZWN0XCI9PT1yKHQpP0F0KHQsZSk6dCYmVShlLHQpfWZ1bmN0aW9uIGh0KHQsZSl7dmFyIG49aigpLG89cSgpLGk9VCgpLHI9TCgpLGE9RCgpO2Uuc2hvd0NvbmZpcm1CdXR0b258fGUuc2hvd0RlbnlCdXR0b258fGUuc2hvd0NhbmNlbEJ1dHRvbnx8YXQobiksXyhuLGUsXCJhY3Rpb25zXCIpLFB0KGksXCJjb25maXJtXCIsZSksUHQocixcImRlbnlcIixlKSxQdChhLFwiY2FuY2VsXCIsZSksZnVuY3Rpb24odCxlLG4sbyl7aWYoIW8uYnV0dG9uc1N0eWxpbmcpcmV0dXJuIGJ0KFt0LGUsbl0sJC5zdHlsZWQpO3Z0KFt0LGUsbl0sJC5zdHlsZWQpLG8uY29uZmlybUJ1dHRvbkNvbG9yJiYodC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9by5jb25maXJtQnV0dG9uQ29sb3IpO28uZGVueUJ1dHRvbkNvbG9yJiYoZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9by5kZW55QnV0dG9uQ29sb3IpO28uY2FuY2VsQnV0dG9uQ29sb3ImJihuLnN0eWxlLmJhY2tncm91bmRDb2xvcj1vLmNhbmNlbEJ1dHRvbkNvbG9yKX0oaSxyLGEsZSksZS5yZXZlcnNlQnV0dG9ucyYmKG4uaW5zZXJ0QmVmb3JlKGEsbyksbi5pbnNlcnRCZWZvcmUocixvKSxuLmluc2VydEJlZm9yZShpLG8pKSxVKG8sZS5sb2FkZXJIdG1sKSxfKG8sZSxcImxvYWRlclwiKX12YXIgZ3QsdnQ9ZnVuY3Rpb24odCxlKXtvdCh0LGUsITApfSxidD1mdW5jdGlvbih0LGUpe290KHQsZSwhMSl9LHl0PWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBuPTA7bjx0LmNoaWxkTm9kZXMubGVuZ3RoO24rKylpZihGKHQuY2hpbGROb2Rlc1tuXSxlKSlyZXR1cm4gdC5jaGlsZE5vZGVzW25dfSx3dD1mdW5jdGlvbih0KXtyZXR1cm4hKCF0fHwhKHQub2Zmc2V0V2lkdGh8fHQub2Zmc2V0SGVpZ2h0fHx0LmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSl9LEN0PSdcXG4gPGRpdiBhcmlhLWxhYmVsbGVkYnk9XCInLmNvbmNhdCgkLnRpdGxlLCdcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiJykuY29uY2F0KCQuY29udGVudCwnXCIgY2xhc3M9XCInKS5jb25jYXQoJC5wb3B1cCwnXCIgdGFiaW5kZXg9XCItMVwiPlxcbiAgIDxkaXYgY2xhc3M9XCInKS5jb25jYXQoJC5oZWFkZXIsJ1wiPlxcbiAgICAgPHVsIGNsYXNzPVwiJykuY29uY2F0KCRbXCJwcm9ncmVzcy1zdGVwc1wiXSwnXCI+PC91bD5cXG4gICAgIDxkaXYgY2xhc3M9XCInKS5jb25jYXQoJC5pY29uLCdcIj48L2Rpdj5cXG4gICAgIDxpbWcgY2xhc3M9XCInKS5jb25jYXQoJC5pbWFnZSwnXCIgLz5cXG4gICAgIDxoMiBjbGFzcz1cIicpLmNvbmNhdCgkLnRpdGxlLCdcIiBpZD1cIicpLmNvbmNhdCgkLnRpdGxlLCdcIj48L2gyPlxcbiAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCInKS5jb25jYXQoJC5jbG9zZSwnXCI+PC9idXR0b24+XFxuICAgPC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cIicpLmNvbmNhdCgkLmNvbnRlbnQsJ1wiPlxcbiAgICAgPGRpdiBpZD1cIicpLmNvbmNhdCgkLmNvbnRlbnQsJ1wiIGNsYXNzPVwiJykuY29uY2F0KCRbXCJodG1sLWNvbnRhaW5lclwiXSwnXCI+PC9kaXY+XFxuICAgICA8aW5wdXQgY2xhc3M9XCInKS5jb25jYXQoJC5pbnB1dCwnXCIgLz5cXG4gICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzPVwiJykuY29uY2F0KCQuZmlsZSwnXCIgLz5cXG4gICAgIDxkaXYgY2xhc3M9XCInKS5jb25jYXQoJC5yYW5nZSwnXCI+XFxuICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiAvPlxcbiAgICAgICA8b3V0cHV0Pjwvb3V0cHV0PlxcbiAgICAgPC9kaXY+XFxuICAgICA8c2VsZWN0IGNsYXNzPVwiJykuY29uY2F0KCQuc2VsZWN0LCdcIj48L3NlbGVjdD5cXG4gICAgIDxkaXYgY2xhc3M9XCInKS5jb25jYXQoJC5yYWRpbywnXCI+PC9kaXY+XFxuICAgICA8bGFiZWwgZm9yPVwiJykuY29uY2F0KCQuY2hlY2tib3gsJ1wiIGNsYXNzPVwiJykuY29uY2F0KCQuY2hlY2tib3gsJ1wiPlxcbiAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cXG4gICAgICAgPHNwYW4gY2xhc3M9XCInKS5jb25jYXQoJC5sYWJlbCwnXCI+PC9zcGFuPlxcbiAgICAgPC9sYWJlbD5cXG4gICAgIDx0ZXh0YXJlYSBjbGFzcz1cIicpLmNvbmNhdCgkLnRleHRhcmVhLCdcIj48L3RleHRhcmVhPlxcbiAgICAgPGRpdiBjbGFzcz1cIicpLmNvbmNhdCgkW1widmFsaWRhdGlvbi1tZXNzYWdlXCJdLCdcIiBpZD1cIicpLmNvbmNhdCgkW1widmFsaWRhdGlvbi1tZXNzYWdlXCJdLCdcIj48L2Rpdj5cXG4gICA8L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVwiJykuY29uY2F0KCQuYWN0aW9ucywnXCI+XFxuICAgICA8ZGl2IGNsYXNzPVwiJykuY29uY2F0KCQubG9hZGVyLCdcIj48L2Rpdj5cXG4gICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJykuY29uY2F0KCQuY29uZmlybSwnXCI+PC9idXR0b24+XFxuICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIicpLmNvbmNhdCgkLmRlbnksJ1wiPjwvYnV0dG9uPlxcbiAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCInKS5jb25jYXQoJC5jYW5jZWwsJ1wiPjwvYnV0dG9uPlxcbiAgIDwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XCInKS5jb25jYXQoJC5mb290ZXIsJ1wiPjwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XCInKS5jb25jYXQoJFtcInRpbWVyLXByb2dyZXNzLWJhci1jb250YWluZXJcIl0sJ1wiPlxcbiAgICAgPGRpdiBjbGFzcz1cIicpLmNvbmNhdCgkW1widGltZXItcHJvZ3Jlc3MtYmFyXCJdLCdcIj48L2Rpdj5cXG4gICA8L2Rpdj5cXG4gPC9kaXY+XFxuJykucmVwbGFjZSgvKF58XFxuKVxccyovZyxcIlwiKSxrdD1mdW5jdGlvbih0KXt2YXIgZSxuLG8saSxyLGE9ISEoaT1rKCkpJiYoaS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGkpLGJ0KFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsZG9jdW1lbnQuYm9keV0sWyRbXCJuby1iYWNrZHJvcFwiXSwkW1widG9hc3Qtc2hvd25cIl0sJFtcImhhcy1jb2x1bW5cIl1dKSwhMCk7cHQoKT9LKFwiU3dlZXRBbGVydDIgcmVxdWlyZXMgZG9jdW1lbnQgdG8gaW5pdGlhbGl6ZVwiKTooKHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkuY2xhc3NOYW1lPSQuY29udGFpbmVyLGEmJnZ0KHIsJFtcIm5vLXRyYW5zaXRpb25cIl0pLFUocixDdCksKGk9XCJzdHJpbmdcIj09dHlwZW9mKGU9dC50YXJnZXQpP2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZSk6ZSkuYXBwZW5kQ2hpbGQociksYT10LChlPUEoKSkuc2V0QXR0cmlidXRlKFwicm9sZVwiLGEudG9hc3Q/XCJhbGVydFwiOlwiZGlhbG9nXCIpLGUuc2V0QXR0cmlidXRlKFwiYXJpYS1saXZlXCIsYS50b2FzdD9cInBvbGl0ZVwiOlwiYXNzZXJ0aXZlXCIpLGEudG9hc3R8fGUuc2V0QXR0cmlidXRlKFwiYXJpYS1tb2RhbFwiLFwidHJ1ZVwiKSxyPWksXCJydGxcIj09PXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHIpLmRpcmVjdGlvbiYmdnQoaygpLCQucnRsKSx0PVAoKSxhPXl0KHQsJC5pbnB1dCksZT15dCh0LCQuZmlsZSksbj10LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KCQucmFuZ2UsXCIgaW5wdXRcIikpLG89dC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdCgkLnJhbmdlLFwiIG91dHB1dFwiKSksaT15dCh0LCQuc2VsZWN0KSxyPXQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoJC5jaGVja2JveCxcIiBpbnB1dFwiKSksdD15dCh0LCQudGV4dGFyZWEpLGEub25pbnB1dD1mdCxlLm9uY2hhbmdlPWZ0LGkub25jaGFuZ2U9ZnQsci5vbmNoYW5nZT1mdCx0Lm9uaW5wdXQ9ZnQsbi5vbmlucHV0PWZ1bmN0aW9uKHQpe2Z0KHQpLG8udmFsdWU9bi52YWx1ZX0sbi5vbmNoYW5nZT1mdW5jdGlvbih0KXtmdCh0KSxuLm5leHRTaWJsaW5nLnZhbHVlPW4udmFsdWV9KX0sQXQ9ZnVuY3Rpb24odCxlKXt0LmpxdWVyeT94dChlLHQpOlUoZSx0LnRvU3RyaW5nKCkpfSx4dD1mdW5jdGlvbih0LGUpe2lmKHQudGV4dENvbnRlbnQ9XCJcIiwwIGluIGUpZm9yKHZhciBuPTA7biBpbiBlO24rKyl0LmFwcGVuZENoaWxkKGVbbl0uY2xvbmVOb2RlKCEwKSk7ZWxzZSB0LmFwcGVuZENoaWxkKGUuY2xvbmVOb2RlKCEwKSl9LEJ0PWZ1bmN0aW9uKCl7aWYocHQoKSlyZXR1cm4hMTt2YXIgdCxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksbj17V2Via2l0QW5pbWF0aW9uOlwid2Via2l0QW5pbWF0aW9uRW5kXCIsT0FuaW1hdGlvbjpcIm9BbmltYXRpb25FbmQgb2FuaW1hdGlvbmVuZFwiLGFuaW1hdGlvbjpcImFuaW1hdGlvbmVuZFwifTtmb3IodCBpbiBuKWlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLHQpJiZ2b2lkIDAhPT1lLnN0eWxlW3RdKXJldHVybiBuW3RdO3JldHVybiExfSgpO2Z1bmN0aW9uIFB0KHQsZSxuKXt1dCh0LG5bXCJzaG93XCIuY29uY2F0KG0oZSksXCJCdXR0b25cIildLFwiaW5saW5lLWJsb2NrXCIpLFUodCxuW1wiXCIuY29uY2F0KGUsXCJCdXR0b25UZXh0XCIpXSksdC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsbltcIlwiLmNvbmNhdChlLFwiQnV0dG9uQXJpYUxhYmVsXCIpXSksdC5jbGFzc05hbWU9JFtlXSxfKHQsbixcIlwiLmNvbmNhdChlLFwiQnV0dG9uXCIpKSx2dCh0LG5bXCJcIi5jb25jYXQoZSxcIkJ1dHRvbkNsYXNzXCIpXSl9ZnVuY3Rpb24gT3QodCxlKXt2YXIgbixvLGk9aygpO2kmJihvPWksXCJzdHJpbmdcIj09dHlwZW9mKG49ZS5iYWNrZHJvcCk/by5zdHlsZS5iYWNrZ3JvdW5kPW46bnx8dnQoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCxkb2N1bWVudC5ib2R5XSwkW1wibm8tYmFja2Ryb3BcIl0pLCFlLmJhY2tkcm9wJiZlLmFsbG93T3V0c2lkZUNsaWNrJiZXKCdcImFsbG93T3V0c2lkZUNsaWNrXCIgcGFyYW1ldGVyIHJlcXVpcmVzIGBiYWNrZHJvcGAgcGFyYW1ldGVyIHRvIGJlIHNldCB0byBgdHJ1ZWAnKSxvPWksKG49ZS5wb3NpdGlvbilpbiAkP3Z0KG8sJFtuXSk6KFcoJ1RoZSBcInBvc2l0aW9uXCIgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZCwgZGVmYXVsdGluZyB0byBcImNlbnRlclwiJyksdnQobywkLmNlbnRlcikpLG49aSwhKG89ZS5ncm93KXx8XCJzdHJpbmdcIiE9dHlwZW9mIG98fChvPVwiZ3Jvdy1cIi5jb25jYXQobykpaW4gJCYmdnQobiwkW29dKSxfKGksZSxcImNvbnRhaW5lclwiKSwoZT1kb2N1bWVudC5ib2R5LmdldEF0dHJpYnV0ZShcImRhdGEtc3dhbDItcXVldWUtc3RlcFwiKSkmJihpLnNldEF0dHJpYnV0ZShcImRhdGEtcXVldWUtc3RlcFwiLGUpLGRvY3VtZW50LmJvZHkucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1zd2FsMi1xdWV1ZS1zdGVwXCIpKSl9ZnVuY3Rpb24gRXQodCxlKXt0LnBsYWNlaG9sZGVyJiYhZS5pbnB1dFBsYWNlaG9sZGVyfHwodC5wbGFjZWhvbGRlcj1lLmlucHV0UGxhY2Vob2xkZXIpfWZ1bmN0aW9uIFN0KHQsZSxuKXt2YXIgbyxpO24uaW5wdXRMYWJlbCYmKHQuaWQ9JC5pbnB1dCxvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKSxpPSRbXCJpbnB1dC1sYWJlbFwiXSxvLnNldEF0dHJpYnV0ZShcImZvclwiLHQuaWQpLG8uY2xhc3NOYW1lPWksdnQobyxuLmN1c3RvbUNsYXNzLmlucHV0TGFiZWwpLG8uaW5uZXJUZXh0PW4uaW5wdXRMYWJlbCxlLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWJlZ2luXCIsbykpfXZhciBUdD17cHJvbWlzZTpuZXcgV2Vha01hcCxpbm5lclBhcmFtczpuZXcgV2Vha01hcCxkb21DYWNoZTpuZXcgV2Vha01hcH0sTHQ9W1wiaW5wdXRcIixcImZpbGVcIixcInJhbmdlXCIsXCJzZWxlY3RcIixcInJhZGlvXCIsXCJjaGVja2JveFwiLFwidGV4dGFyZWFcIl0scXQ9ZnVuY3Rpb24odCl7aWYoIUl0W3QuaW5wdXRdKXJldHVybiBLKCdVbmV4cGVjdGVkIHR5cGUgb2YgaW5wdXQhIEV4cGVjdGVkIFwidGV4dFwiLCBcImVtYWlsXCIsIFwicGFzc3dvcmRcIiwgXCJudW1iZXJcIiwgXCJ0ZWxcIiwgXCJzZWxlY3RcIiwgXCJyYWRpb1wiLCBcImNoZWNrYm94XCIsIFwidGV4dGFyZWFcIiwgXCJmaWxlXCIgb3IgXCJ1cmxcIiwgZ290IFwiJy5jb25jYXQodC5pbnB1dCwnXCInKSk7dmFyIGU9TXQodC5pbnB1dCksbj1JdFt0LmlucHV0XShlLHQpO3J0KG4pLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtudChuKX0pfSxEdD1mdW5jdGlvbih0LGUpe3ZhciBuPWV0KFAoKSx0KTtpZihuKWZvcih2YXIgbyBpbiFmdW5jdGlvbih0KXtmb3IodmFyIGU9MDtlPHQuYXR0cmlidXRlcy5sZW5ndGg7ZSsrKXt2YXIgbj10LmF0dHJpYnV0ZXNbZV0ubmFtZTstMT09PVtcInR5cGVcIixcInZhbHVlXCIsXCJzdHlsZVwiXS5pbmRleE9mKG4pJiZ0LnJlbW92ZUF0dHJpYnV0ZShuKX19KG4pLGUpXCJyYW5nZVwiPT09dCYmXCJwbGFjZWhvbGRlclwiPT09b3x8bi5zZXRBdHRyaWJ1dGUobyxlW29dKX0sanQ9ZnVuY3Rpb24odCl7dmFyIGU9TXQodC5pbnB1dCk7dC5jdXN0b21DbGFzcyYmdnQoZSx0LmN1c3RvbUNsYXNzLmlucHV0KX0sTXQ9ZnVuY3Rpb24odCl7dD0kW3RdfHwkLmlucHV0O3JldHVybiB5dChQKCksdCl9LEl0PXt9O0l0LnRleHQ9SXQuZW1haWw9SXQucGFzc3dvcmQ9SXQubnVtYmVyPUl0LnRlbD1JdC51cmw9ZnVuY3Rpb24odCxlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZS5pbnB1dFZhbHVlfHxcIm51bWJlclwiPT10eXBlb2YgZS5pbnB1dFZhbHVlP3QudmFsdWU9ZS5pbnB1dFZhbHVlOncoZS5pbnB1dFZhbHVlKXx8VygnVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0VmFsdWUhIEV4cGVjdGVkIFwic3RyaW5nXCIsIFwibnVtYmVyXCIgb3IgXCJQcm9taXNlXCIsIGdvdCBcIicuY29uY2F0KHIoZS5pbnB1dFZhbHVlKSwnXCInKSksU3QodCx0LGUpLEV0KHQsZSksdC50eXBlPWUuaW5wdXQsdH0sSXQuZmlsZT1mdW5jdGlvbih0LGUpe3JldHVybiBTdCh0LHQsZSksRXQodCxlKSx0fSxJdC5yYW5nZT1mdW5jdGlvbih0LGUpe3ZhciBuPXQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLG89dC5xdWVyeVNlbGVjdG9yKFwib3V0cHV0XCIpO3JldHVybiBuLnZhbHVlPWUuaW5wdXRWYWx1ZSxuLnR5cGU9ZS5pbnB1dCxvLnZhbHVlPWUuaW5wdXRWYWx1ZSxTdChuLHQsZSksdH0sSXQuc2VsZWN0PWZ1bmN0aW9uKHQsZSl7dmFyIG47cmV0dXJuIHQudGV4dENvbnRlbnQ9XCJcIixlLmlucHV0UGxhY2Vob2xkZXImJihuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiksVShuLGUuaW5wdXRQbGFjZWhvbGRlciksbi52YWx1ZT1cIlwiLG4uZGlzYWJsZWQ9ITAsbi5zZWxlY3RlZD0hMCx0LmFwcGVuZENoaWxkKG4pKSxTdCh0LHQsZSksdH0sSXQucmFkaW89ZnVuY3Rpb24odCl7cmV0dXJuIHQudGV4dENvbnRlbnQ9XCJcIix0fSxJdC5jaGVja2JveD1mdW5jdGlvbih0LGUpe3ZhciBuPWV0KFAoKSxcImNoZWNrYm94XCIpO24udmFsdWU9MSxuLmlkPSQuY2hlY2tib3gsbi5jaGVja2VkPUJvb2xlYW4oZS5pbnB1dFZhbHVlKTtuPXQucXVlcnlTZWxlY3RvcihcInNwYW5cIik7cmV0dXJuIFUobixlLmlucHV0UGxhY2Vob2xkZXIpLHR9LEl0LnRleHRhcmVhPWZ1bmN0aW9uKGUsdCl7ZS52YWx1ZT10LmlucHV0VmFsdWUsRXQoZSx0KSxTdChlLGUsdCk7ZnVuY3Rpb24gbih0KXtyZXR1cm4gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodCkucGFkZGluZ0xlZnQpK3BhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQpLnBhZGRpbmdSaWdodCl9dmFyIG87cmV0dXJuXCJNdXRhdGlvbk9ic2VydmVyXCJpbiB3aW5kb3cmJihvPXBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKEEoKSkud2lkdGgpLG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKCl7dmFyIHQ9ZS5vZmZzZXRXaWR0aCtuKEEoKSkrbihQKCkpO0EoKS5zdHlsZS53aWR0aD1vPHQ/XCJcIi5jb25jYXQodCxcInB4XCIpOm51bGx9KS5vYnNlcnZlKGUse2F0dHJpYnV0ZXM6ITAsYXR0cmlidXRlRmlsdGVyOltcInN0eWxlXCJdfSkpLGV9O2Z1bmN0aW9uIEh0KHQsZSl7dmFyIG8saSxyLG49TygpO18obixlLFwiaHRtbENvbnRhaW5lclwiKSxlLmh0bWw/KG10KGUuaHRtbCxuKSxydChuLFwiYmxvY2tcIikpOmUudGV4dD8obi50ZXh0Q29udGVudD1lLnRleHQscnQobixcImJsb2NrXCIpKTphdChuKSx0PXQsbz1lLGk9UCgpLHQ9VHQuaW5uZXJQYXJhbXMuZ2V0KHQpLHI9IXR8fG8uaW5wdXQhPT10LmlucHV0LEx0LmZvckVhY2goZnVuY3Rpb24odCl7dmFyIGU9JFt0XSxuPXl0KGksZSk7RHQodCxvLmlucHV0QXR0cmlidXRlcyksbi5jbGFzc05hbWU9ZSxyJiZhdChuKX0pLG8uaW5wdXQmJihyJiZxdChvKSxqdChvKSksXyhQKCksZSxcImNvbnRlbnRcIil9ZnVuY3Rpb24gVnQoKXtyZXR1cm4gaygpJiZrKCkuZ2V0QXR0cmlidXRlKFwiZGF0YS1xdWV1ZS1zdGVwXCIpfWZ1bmN0aW9uIFJ0KHQsbyl7dmFyIGk9bigpO2lmKCFvLnByb2dyZXNzU3RlcHN8fDA9PT1vLnByb2dyZXNzU3RlcHMubGVuZ3RoKXJldHVybiBhdChpKSwwO3J0KGkpLGkudGV4dENvbnRlbnQ9XCJcIjt2YXIgcj1wYXJzZUludCh2b2lkIDA9PT1vLmN1cnJlbnRQcm9ncmVzc1N0ZXA/VnQoKTpvLmN1cnJlbnRQcm9ncmVzc1N0ZXApO3I+PW8ucHJvZ3Jlc3NTdGVwcy5sZW5ndGgmJlcoXCJJbnZhbGlkIGN1cnJlbnRQcm9ncmVzc1N0ZXAgcGFyYW1ldGVyLCBpdCBzaG91bGQgYmUgbGVzcyB0aGFuIHByb2dyZXNzU3RlcHMubGVuZ3RoIChjdXJyZW50UHJvZ3Jlc3NTdGVwIGxpa2UgSlMgYXJyYXlzIHN0YXJ0cyBmcm9tIDApXCIpLG8ucHJvZ3Jlc3NTdGVwcy5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7dmFyIG4sdD0obj10LHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpLHZ0KHQsJFtcInByb2dyZXNzLXN0ZXBcIl0pLFUodCxuKSx0KTtpLmFwcGVuZENoaWxkKHQpLGU9PT1yJiZ2dCh0LCRbXCJhY3RpdmUtcHJvZ3Jlc3Mtc3RlcFwiXSksZSE9PW8ucHJvZ3Jlc3NTdGVwcy5sZW5ndGgtMSYmKHQ9byxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSx2dChlLCRbXCJwcm9ncmVzcy1zdGVwLWxpbmVcIl0pLHQucHJvZ3Jlc3NTdGVwc0Rpc3RhbmNlJiYoZS5zdHlsZS53aWR0aD10LnByb2dyZXNzU3RlcHNEaXN0YW5jZSksaS5hcHBlbmRDaGlsZChlKSl9KX1mdW5jdGlvbiBOdCh0LGUpe3ZhciBuLG89TSgpO18obyxlLFwiaGVhZGVyXCIpLFJ0KDAsZSksbj10LG89ZSx0PVR0LmlubmVyUGFyYW1zLmdldChuKSxuPXgoKSx0JiZvLmljb249PT10Lmljb24/KFd0KG4sbyksX3QobixvKSk6by5pY29ufHxvLmljb25IdG1sP28uaWNvbiYmLTE9PT1PYmplY3Qua2V5cyhYKS5pbmRleE9mKG8uaWNvbik/KEsoJ1Vua25vd24gaWNvbiEgRXhwZWN0ZWQgXCJzdWNjZXNzXCIsIFwiZXJyb3JcIiwgXCJ3YXJuaW5nXCIsIFwiaW5mb1wiIG9yIFwicXVlc3Rpb25cIiwgZ290IFwiJy5jb25jYXQoby5pY29uLCdcIicpKSxhdChuKSk6KHJ0KG4pLFd0KG4sbyksX3QobixvKSx2dChuLG8uc2hvd0NsYXNzLmljb24pKTphdChuKSxmdW5jdGlvbih0KXt2YXIgZT1FKCk7aWYoIXQuaW1hZ2VVcmwpcmV0dXJuIGF0KGUpO3J0KGUsXCJcIiksZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIix0LmltYWdlVXJsKSxlLnNldEF0dHJpYnV0ZShcImFsdFwiLHQuaW1hZ2VBbHQpLGl0KGUsXCJ3aWR0aFwiLHQuaW1hZ2VXaWR0aCksaXQoZSxcImhlaWdodFwiLHQuaW1hZ2VIZWlnaHQpLGUuY2xhc3NOYW1lPSQuaW1hZ2UsXyhlLHQsXCJpbWFnZVwiKX0oZSksbz1lLG49QigpLHV0KG4sby50aXRsZXx8by50aXRsZVRleHQsXCJibG9ja1wiKSxvLnRpdGxlJiZtdChvLnRpdGxlLG4pLG8udGl0bGVUZXh0JiYobi5pbm5lclRleHQ9by50aXRsZVRleHQpLF8obixvLFwidGl0bGVcIiksbz1lLGU9VigpLFUoZSxvLmNsb3NlQnV0dG9uSHRtbCksXyhlLG8sXCJjbG9zZUJ1dHRvblwiKSx1dChlLG8uc2hvd0Nsb3NlQnV0dG9uKSxlLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIixvLmNsb3NlQnV0dG9uQXJpYUxhYmVsKX1mdW5jdGlvbiBVdCh0LGUpe3ZhciBuLG8saTtpPWUsbj1rKCksbz1BKCksaS50b2FzdD8oaXQobixcIndpZHRoXCIsaS53aWR0aCksby5zdHlsZS53aWR0aD1cIjEwMCVcIik6aXQobyxcIndpZHRoXCIsaS53aWR0aCksaXQobyxcInBhZGRpbmdcIixpLnBhZGRpbmcpLGkuYmFja2dyb3VuZCYmKG8uc3R5bGUuYmFja2dyb3VuZD1pLmJhY2tncm91bmQpLGF0KFMoKSksUXQobyxpKSxPdCgwLGUpLE50KHQsZSksSHQodCxlKSxodCgwLGUpLGk9ZSx0PUkoKSx1dCh0LGkuZm9vdGVyKSxpLmZvb3RlciYmbXQoaS5mb290ZXIsdCksXyh0LGksXCJmb290ZXJcIiksXCJmdW5jdGlvblwiPT10eXBlb2YgZS5kaWRSZW5kZXI/ZS5kaWRSZW5kZXIoQSgpKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLm9uUmVuZGVyJiZlLm9uUmVuZGVyKEEoKSl9ZnVuY3Rpb24gRnQoKXtyZXR1cm4gVCgpJiZUKCkuY2xpY2soKX12YXIgX3Q9ZnVuY3Rpb24odCxlKXtmb3IodmFyIG4gaW4gWCllLmljb24hPT1uJiZidCh0LFhbbl0pO3Z0KHQsWFtlLmljb25dKSxLdCh0LGUpLHp0KCksXyh0LGUsXCJpY29uXCIpfSx6dD1mdW5jdGlvbigpe2Zvcih2YXIgdD1BKCksZT13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0KS5nZXRQcm9wZXJ0eVZhbHVlKFwiYmFja2dyb3VuZC1jb2xvclwiKSxuPXQucXVlcnlTZWxlY3RvckFsbChcIltjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXSwgLnN3YWwyLXN1Y2Nlc3MtZml4XCIpLG89MDtvPG4ubGVuZ3RoO28rKyluW29dLnN0eWxlLmJhY2tncm91bmRDb2xvcj1lfSxXdD1mdW5jdGlvbih0LGUpe3QudGV4dENvbnRlbnQ9XCJcIixlLmljb25IdG1sP1UodCxZdChlLmljb25IdG1sKSk6XCJzdWNjZXNzXCI9PT1lLmljb24/VSh0LCdcXG4gICAgICA8ZGl2IGNsYXNzPVwic3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLWxlZnRcIj48L2Rpdj5cXG4gICAgICA8c3BhbiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtbGluZS10aXBcIj48L3NwYW4+IDxzcGFuIGNsYXNzPVwic3dhbDItc3VjY2Vzcy1saW5lLWxvbmdcIj48L3NwYW4+XFxuICAgICAgPGRpdiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtcmluZ1wiPjwvZGl2PiA8ZGl2IGNsYXNzPVwic3dhbDItc3VjY2Vzcy1maXhcIj48L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVwic3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLXJpZ2h0XCI+PC9kaXY+XFxuICAgICcpOlwiZXJyb3JcIj09PWUuaWNvbj9VKHQsJ1xcbiAgICAgIDxzcGFuIGNsYXNzPVwic3dhbDIteC1tYXJrXCI+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cInN3YWwyLXgtbWFyay1saW5lLWxlZnRcIj48L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cInN3YWwyLXgtbWFyay1saW5lLXJpZ2h0XCI+PC9zcGFuPlxcbiAgICAgIDwvc3Bhbj5cXG4gICAgJyk6VSh0LFl0KHtxdWVzdGlvbjpcIj9cIix3YXJuaW5nOlwiIVwiLGluZm86XCJpXCJ9W2UuaWNvbl0pKX0sS3Q9ZnVuY3Rpb24odCxlKXtpZihlLmljb25Db2xvcil7dC5zdHlsZS5jb2xvcj1lLmljb25Db2xvcix0LnN0eWxlLmJvcmRlckNvbG9yPWUuaWNvbkNvbG9yO2Zvcih2YXIgbj0wLG89W1wiLnN3YWwyLXN1Y2Nlc3MtbGluZS10aXBcIixcIi5zd2FsMi1zdWNjZXNzLWxpbmUtbG9uZ1wiLFwiLnN3YWwyLXgtbWFyay1saW5lLWxlZnRcIixcIi5zd2FsMi14LW1hcmstbGluZS1yaWdodFwiXTtuPG8ubGVuZ3RoO24rKylzdCh0LG9bbl0sXCJiYWNrZ3JvdW5kQ29sb3JcIixlLmljb25Db2xvcik7c3QodCxcIi5zd2FsMi1zdWNjZXNzLXJpbmdcIixcImJvcmRlckNvbG9yXCIsZS5pY29uQ29sb3IpfX0sWXQ9ZnVuY3Rpb24odCl7cmV0dXJuJzxkaXYgY2xhc3M9XCInLmNvbmNhdCgkW1wiaWNvbi1jb250ZW50XCJdLCdcIj4nKS5jb25jYXQodCxcIjwvZGl2PlwiKX0sWnQ9W10sUXQ9ZnVuY3Rpb24odCxlKXt0LmNsYXNzTmFtZT1cIlwiLmNvbmNhdCgkLnBvcHVwLFwiIFwiKS5jb25jYXQod3QodCk/ZS5zaG93Q2xhc3MucG9wdXA6XCJcIiksZS50b2FzdD8odnQoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCxkb2N1bWVudC5ib2R5XSwkW1widG9hc3Qtc2hvd25cIl0pLHZ0KHQsJC50b2FzdCkpOnZ0KHQsJC5tb2RhbCksXyh0LGUsXCJwb3B1cFwiKSxcInN0cmluZ1wiPT10eXBlb2YgZS5jdXN0b21DbGFzcyYmdnQodCxlLmN1c3RvbUNsYXNzKSxlLmljb24mJnZ0KHQsJFtcImljb24tXCIuY29uY2F0KGUuaWNvbildKX07ZnVuY3Rpb24gSnQodCl7KGU9QSgpKXx8TW4uZmlyZSgpO3ZhciBlPUEoKSxuPWooKSxvPXEoKTshdCYmd3QoVCgpKSYmKHQ9VCgpKSxydChuKSx0JiYoYXQodCksby5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJ1dHRvbi10by1yZXBsYWNlXCIsdC5jbGFzc05hbWUpKSxvLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG8sdCksdnQoW2Usbl0sJC5sb2FkaW5nKSxydChvKSxlLnNldEF0dHJpYnV0ZShcImRhdGEtbG9hZGluZ1wiLCEwKSxlLnNldEF0dHJpYnV0ZShcImFyaWEtYnVzeVwiLCEwKSxlLmZvY3VzKCl9ZnVuY3Rpb24gJHQobyl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHQpe2lmKCFvKXJldHVybiB0KCk7dmFyIGU9d2luZG93LnNjcm9sbFgsbj13aW5kb3cuc2Nyb2xsWTt0ZS5yZXN0b3JlRm9jdXNUaW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXt0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQmJnRlLnByZXZpb3VzQWN0aXZlRWxlbWVudC5mb2N1cz8odGUucHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzKCksdGUucHJldmlvdXNBY3RpdmVFbGVtZW50PW51bGwpOmRvY3VtZW50LmJvZHkmJmRvY3VtZW50LmJvZHkuZm9jdXMoKSx0KCl9LDEwMCksdm9pZCAwIT09ZSYmdm9pZCAwIT09biYmd2luZG93LnNjcm9sbFRvKGUsbil9KX1mdW5jdGlvbiBYdCgpe2lmKHRlLnRpbWVvdXQpcmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHQ9SCgpLGU9cGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodCkud2lkdGgpO3Quc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uXCIpLHQuc3R5bGUud2lkdGg9XCIxMDAlXCI7dmFyIG49cGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodCkud2lkdGgpLG49cGFyc2VJbnQoZS9uKjEwMCk7dC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb25cIiksdC5zdHlsZS53aWR0aD1cIlwiLmNvbmNhdChuLFwiJVwiKX0oKSx0ZS50aW1lb3V0LnN0b3AoKX1mdW5jdGlvbiBHdCgpe2lmKHRlLnRpbWVvdXQpe3ZhciB0PXRlLnRpbWVvdXQuc3RhcnQoKTtyZXR1cm4gZHQodCksdH19dmFyIHRlPXt9LGVlPSExLG5lPXt9O2Z1bmN0aW9uIG9lKHQpe2Zvcih2YXIgZT10LnRhcmdldDtlJiZlIT09ZG9jdW1lbnQ7ZT1lLnBhcmVudE5vZGUpZm9yKHZhciBuIGluIG5lKXt2YXIgbz1lLmdldEF0dHJpYnV0ZShuKTtpZihvKXJldHVybiB2b2lkIG5lW25dLmZpcmUoe3RlbXBsYXRlOm99KX19ZnVuY3Rpb24gaWUodCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzZSx0KX1mdW5jdGlvbiByZSh0KXtyZXR1cm4gY2VbdF19ZnVuY3Rpb24gYWUodCl7Zm9yKHZhciBlIGluIHQpaWUobj1lKXx8VygnVW5rbm93biBwYXJhbWV0ZXIgXCInLmNvbmNhdChuLCdcIicpKSx0LnRvYXN0JiYobj1lLC0xIT09bGUuaW5kZXhPZihuKSYmVygnVGhlIHBhcmFtZXRlciBcIicuY29uY2F0KG4sJ1wiIGlzIGluY29tcGF0aWJsZSB3aXRoIHRvYXN0cycpKSkscmUoZT1lKSYmdihlLHJlKGUpKTt2YXIgbn12YXIgc2U9e3RpdGxlOlwiXCIsdGl0bGVUZXh0OlwiXCIsdGV4dDpcIlwiLGh0bWw6XCJcIixmb290ZXI6XCJcIixpY29uOnZvaWQgMCxpY29uQ29sb3I6dm9pZCAwLGljb25IdG1sOnZvaWQgMCx0ZW1wbGF0ZTp2b2lkIDAsdG9hc3Q6ITEsYW5pbWF0aW9uOiEwLHNob3dDbGFzczp7cG9wdXA6XCJzd2FsMi1zaG93XCIsYmFja2Ryb3A6XCJzd2FsMi1iYWNrZHJvcC1zaG93XCIsaWNvbjpcInN3YWwyLWljb24tc2hvd1wifSxoaWRlQ2xhc3M6e3BvcHVwOlwic3dhbDItaGlkZVwiLGJhY2tkcm9wOlwic3dhbDItYmFja2Ryb3AtaGlkZVwiLGljb246XCJzd2FsMi1pY29uLWhpZGVcIn0sY3VzdG9tQ2xhc3M6e30sdGFyZ2V0OlwiYm9keVwiLGJhY2tkcm9wOiEwLGhlaWdodEF1dG86ITAsYWxsb3dPdXRzaWRlQ2xpY2s6ITAsYWxsb3dFc2NhcGVLZXk6ITAsYWxsb3dFbnRlcktleTohMCxzdG9wS2V5ZG93blByb3BhZ2F0aW9uOiEwLGtleWRvd25MaXN0ZW5lckNhcHR1cmU6ITEsc2hvd0NvbmZpcm1CdXR0b246ITAsc2hvd0RlbnlCdXR0b246ITEsc2hvd0NhbmNlbEJ1dHRvbjohMSxwcmVDb25maXJtOnZvaWQgMCxwcmVEZW55OnZvaWQgMCxjb25maXJtQnV0dG9uVGV4dDpcIk9LXCIsY29uZmlybUJ1dHRvbkFyaWFMYWJlbDpcIlwiLGNvbmZpcm1CdXR0b25Db2xvcjp2b2lkIDAsZGVueUJ1dHRvblRleHQ6XCJOb1wiLGRlbnlCdXR0b25BcmlhTGFiZWw6XCJcIixkZW55QnV0dG9uQ29sb3I6dm9pZCAwLGNhbmNlbEJ1dHRvblRleHQ6XCJDYW5jZWxcIixjYW5jZWxCdXR0b25BcmlhTGFiZWw6XCJcIixjYW5jZWxCdXR0b25Db2xvcjp2b2lkIDAsYnV0dG9uc1N0eWxpbmc6ITAscmV2ZXJzZUJ1dHRvbnM6ITEsZm9jdXNDb25maXJtOiEwLGZvY3VzRGVueTohMSxmb2N1c0NhbmNlbDohMSxyZXR1cm5Gb2N1czohMCxzaG93Q2xvc2VCdXR0b246ITEsY2xvc2VCdXR0b25IdG1sOlwiJnRpbWVzO1wiLGNsb3NlQnV0dG9uQXJpYUxhYmVsOlwiQ2xvc2UgdGhpcyBkaWFsb2dcIixsb2FkZXJIdG1sOlwiXCIsc2hvd0xvYWRlck9uQ29uZmlybTohMSxzaG93TG9hZGVyT25EZW55OiExLGltYWdlVXJsOnZvaWQgMCxpbWFnZVdpZHRoOnZvaWQgMCxpbWFnZUhlaWdodDp2b2lkIDAsaW1hZ2VBbHQ6XCJcIix0aW1lcjp2b2lkIDAsdGltZXJQcm9ncmVzc0JhcjohMSx3aWR0aDp2b2lkIDAscGFkZGluZzp2b2lkIDAsYmFja2dyb3VuZDp2b2lkIDAsaW5wdXQ6dm9pZCAwLGlucHV0UGxhY2Vob2xkZXI6XCJcIixpbnB1dExhYmVsOlwiXCIsaW5wdXRWYWx1ZTpcIlwiLGlucHV0T3B0aW9uczp7fSxpbnB1dEF1dG9UcmltOiEwLGlucHV0QXR0cmlidXRlczp7fSxpbnB1dFZhbGlkYXRvcjp2b2lkIDAscmV0dXJuSW5wdXRWYWx1ZU9uRGVueTohMSx2YWxpZGF0aW9uTWVzc2FnZTp2b2lkIDAsZ3JvdzohMSxwb3NpdGlvbjpcImNlbnRlclwiLHByb2dyZXNzU3RlcHM6W10sY3VycmVudFByb2dyZXNzU3RlcDp2b2lkIDAscHJvZ3Jlc3NTdGVwc0Rpc3RhbmNlOnZvaWQgMCxvbkJlZm9yZU9wZW46dm9pZCAwLG9uT3Blbjp2b2lkIDAsd2lsbE9wZW46dm9pZCAwLGRpZE9wZW46dm9pZCAwLG9uUmVuZGVyOnZvaWQgMCxkaWRSZW5kZXI6dm9pZCAwLG9uQ2xvc2U6dm9pZCAwLG9uQWZ0ZXJDbG9zZTp2b2lkIDAsd2lsbENsb3NlOnZvaWQgMCxkaWRDbG9zZTp2b2lkIDAsb25EZXN0cm95OnZvaWQgMCxkaWREZXN0cm95OnZvaWQgMCxzY3JvbGxiYXJQYWRkaW5nOiEwfSx1ZT1bXCJhbGxvd0VzY2FwZUtleVwiLFwiYWxsb3dPdXRzaWRlQ2xpY2tcIixcImJhY2tncm91bmRcIixcImJ1dHRvbnNTdHlsaW5nXCIsXCJjYW5jZWxCdXR0b25BcmlhTGFiZWxcIixcImNhbmNlbEJ1dHRvbkNvbG9yXCIsXCJjYW5jZWxCdXR0b25UZXh0XCIsXCJjbG9zZUJ1dHRvbkFyaWFMYWJlbFwiLFwiY2xvc2VCdXR0b25IdG1sXCIsXCJjb25maXJtQnV0dG9uQXJpYUxhYmVsXCIsXCJjb25maXJtQnV0dG9uQ29sb3JcIixcImNvbmZpcm1CdXR0b25UZXh0XCIsXCJjdXJyZW50UHJvZ3Jlc3NTdGVwXCIsXCJjdXN0b21DbGFzc1wiLFwiZGVueUJ1dHRvbkFyaWFMYWJlbFwiLFwiZGVueUJ1dHRvbkNvbG9yXCIsXCJkZW55QnV0dG9uVGV4dFwiLFwiZGlkQ2xvc2VcIixcImRpZERlc3Ryb3lcIixcImZvb3RlclwiLFwiaGlkZUNsYXNzXCIsXCJodG1sXCIsXCJpY29uXCIsXCJpY29uQ29sb3JcIixcImljb25IdG1sXCIsXCJpbWFnZUFsdFwiLFwiaW1hZ2VIZWlnaHRcIixcImltYWdlVXJsXCIsXCJpbWFnZVdpZHRoXCIsXCJvbkFmdGVyQ2xvc2VcIixcIm9uQ2xvc2VcIixcIm9uRGVzdHJveVwiLFwicHJvZ3Jlc3NTdGVwc1wiLFwicmV0dXJuRm9jdXNcIixcInJldmVyc2VCdXR0b25zXCIsXCJzaG93Q2FuY2VsQnV0dG9uXCIsXCJzaG93Q2xvc2VCdXR0b25cIixcInNob3dDb25maXJtQnV0dG9uXCIsXCJzaG93RGVueUJ1dHRvblwiLFwidGV4dFwiLFwidGl0bGVcIixcInRpdGxlVGV4dFwiLFwid2lsbENsb3NlXCJdLGNlPXthbmltYXRpb246J3Nob3dDbGFzc1wiIGFuZCBcImhpZGVDbGFzcycsb25CZWZvcmVPcGVuOlwid2lsbE9wZW5cIixvbk9wZW46XCJkaWRPcGVuXCIsb25SZW5kZXI6XCJkaWRSZW5kZXJcIixvbkNsb3NlOlwid2lsbENsb3NlXCIsb25BZnRlckNsb3NlOlwiZGlkQ2xvc2VcIixvbkRlc3Ryb3k6XCJkaWREZXN0cm95XCJ9LGxlPVtcImFsbG93T3V0c2lkZUNsaWNrXCIsXCJhbGxvd0VudGVyS2V5XCIsXCJiYWNrZHJvcFwiLFwiZm9jdXNDb25maXJtXCIsXCJmb2N1c0RlbnlcIixcImZvY3VzQ2FuY2VsXCIsXCJyZXR1cm5Gb2N1c1wiLFwiaGVpZ2h0QXV0b1wiLFwia2V5ZG93bkxpc3RlbmVyQ2FwdHVyZVwiXSxkZT1PYmplY3QuZnJlZXplKHtpc1ZhbGlkUGFyYW1ldGVyOmllLGlzVXBkYXRhYmxlUGFyYW1ldGVyOmZ1bmN0aW9uKHQpe3JldHVybi0xIT09dWUuaW5kZXhPZih0KX0saXNEZXByZWNhdGVkUGFyYW1ldGVyOnJlLGFyZ3NUb1BhcmFtczpmdW5jdGlvbihuKXt2YXIgbz17fTtyZXR1cm5cIm9iamVjdFwiIT09cihuWzBdKXx8QyhuWzBdKT9bXCJ0aXRsZVwiLFwiaHRtbFwiLFwiaWNvblwiXS5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7ZT1uW2VdO1wic3RyaW5nXCI9PXR5cGVvZiBlfHxDKGUpP29bdF09ZTp2b2lkIDAhPT1lJiZLKFwiVW5leHBlY3RlZCB0eXBlIG9mIFwiLmNvbmNhdCh0LCchIEV4cGVjdGVkIFwic3RyaW5nXCIgb3IgXCJFbGVtZW50XCIsIGdvdCAnKS5jb25jYXQocihlKSkpfSk6dShvLG5bMF0pLG99LGlzVmlzaWJsZTpmdW5jdGlvbigpe3JldHVybiB3dChBKCkpfSxjbGlja0NvbmZpcm06RnQsY2xpY2tEZW55OmZ1bmN0aW9uKCl7cmV0dXJuIEwoKSYmTCgpLmNsaWNrKCl9LGNsaWNrQ2FuY2VsOmZ1bmN0aW9uKCl7cmV0dXJuIEQoKSYmRCgpLmNsaWNrKCl9LGdldENvbnRhaW5lcjprLGdldFBvcHVwOkEsZ2V0VGl0bGU6QixnZXRDb250ZW50OlAsZ2V0SHRtbENvbnRhaW5lcjpPLGdldEltYWdlOkUsZ2V0SWNvbjp4LGdldElucHV0TGFiZWw6ZnVuY3Rpb24oKXtyZXR1cm4gdCgkW1wiaW5wdXQtbGFiZWxcIl0pfSxnZXRDbG9zZUJ1dHRvbjpWLGdldEFjdGlvbnM6aixnZXRDb25maXJtQnV0dG9uOlQsZ2V0RGVueUJ1dHRvbjpMLGdldENhbmNlbEJ1dHRvbjpELGdldExvYWRlcjpxLGdldEhlYWRlcjpNLGdldEZvb3RlcjpJLGdldFRpbWVyUHJvZ3Jlc3NCYXI6SCxnZXRGb2N1c2FibGVFbGVtZW50czpSLGdldFZhbGlkYXRpb25NZXNzYWdlOlMsaXNMb2FkaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIEEoKS5oYXNBdHRyaWJ1dGUoXCJkYXRhLWxvYWRpbmdcIil9LGZpcmU6ZnVuY3Rpb24oKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxlPW5ldyBBcnJheSh0KSxuPTA7bjx0O24rKyllW25dPWFyZ3VtZW50c1tuXTtyZXR1cm4gaSh0aGlzLGUpfSxtaXhpbjpmdW5jdGlvbihyKXtyZXR1cm4gZnVuY3Rpb24odCl7IWZ1bmN0aW9uKHQsZSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSYmbnVsbCE9PWUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO3QucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoZSYmZS5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTp0LHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSxlJiZsKHQsZSl9KGksdCk7dmFyIG4sbyxlPShuPWksbz1kKCksZnVuY3Rpb24oKXt2YXIgdCxlPWMobik7cmV0dXJuIHAodGhpcyxvPyh0PWModGhpcykuY29uc3RydWN0b3IsUmVmbGVjdC5jb25zdHJ1Y3QoZSxhcmd1bWVudHMsdCkpOmUuYXBwbHkodGhpcyxhcmd1bWVudHMpKX0pO2Z1bmN0aW9uIGkoKXtyZXR1cm4gYSh0aGlzLGkpLGUuYXBwbHkodGhpcyxhcmd1bWVudHMpfXJldHVybiBzKGksW3trZXk6XCJfbWFpblwiLHZhbHVlOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIGYoYyhpLnByb3RvdHlwZSksXCJfbWFpblwiLHRoaXMpLmNhbGwodGhpcyx0LHUoe30scixlKSl9fV0pLGl9KHRoaXMpfSxxdWV1ZTpmdW5jdGlvbih0KXt2KFwiU3dhbC5xdWV1ZSgpXCIsXCJhc3luYy9hd2FpdFwiKTt2YXIgcj10aGlzO1p0PXQ7ZnVuY3Rpb24gYSh0LGUpe1p0PVtdLHQoZSl9dmFyIHM9W107cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGkpeyFmdW5jdGlvbiBlKG4sbyl7bjxadC5sZW5ndGg/KGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKFwiZGF0YS1zd2FsMi1xdWV1ZS1zdGVwXCIsbiksci5maXJlKFp0W25dKS50aGVuKGZ1bmN0aW9uKHQpe3ZvaWQgMCE9PXQudmFsdWU/KHMucHVzaCh0LnZhbHVlKSxlKG4rMSxvKSk6YShpLHtkaXNtaXNzOnQuZGlzbWlzc30pfSkpOmEoaSx7dmFsdWU6c30pfSgwKX0pfSxnZXRRdWV1ZVN0ZXA6VnQsaW5zZXJ0UXVldWVTdGVwOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIGUmJmU8WnQubGVuZ3RoP1p0LnNwbGljZShlLDAsdCk6WnQucHVzaCh0KX0sZGVsZXRlUXVldWVTdGVwOmZ1bmN0aW9uKHQpe3ZvaWQgMCE9PVp0W3RdJiZadC5zcGxpY2UodCwxKX0sc2hvd0xvYWRpbmc6SnQsZW5hYmxlTG9hZGluZzpKdCxnZXRUaW1lckxlZnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGUudGltZW91dCYmdGUudGltZW91dC5nZXRUaW1lckxlZnQoKX0sc3RvcFRpbWVyOlh0LHJlc3VtZVRpbWVyOkd0LHRvZ2dsZVRpbWVyOmZ1bmN0aW9uKCl7dmFyIHQ9dGUudGltZW91dDtyZXR1cm4gdCYmKHQucnVubmluZz9YdDpHdCkoKX0saW5jcmVhc2VUaW1lcjpmdW5jdGlvbih0KXtpZih0ZS50aW1lb3V0KXt0PXRlLnRpbWVvdXQuaW5jcmVhc2UodCk7cmV0dXJuIGR0KHQsITApLHR9fSxpc1RpbWVyUnVubmluZzpmdW5jdGlvbigpe3JldHVybiB0ZS50aW1lb3V0JiZ0ZS50aW1lb3V0LmlzUnVubmluZygpfSxiaW5kQ2xpY2tIYW5kbGVyOmZ1bmN0aW9uKCl7bmVbMDxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOlwiZGF0YS1zd2FsLXRlbXBsYXRlXCJdPXRoaXMsZWV8fChkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLG9lKSxlZT0hMCl9fSk7ZnVuY3Rpb24gcGUoKXt2YXIgdCxlO1R0LmlubmVyUGFyYW1zLmdldCh0aGlzKSYmKHQ9VHQuZG9tQ2FjaGUuZ2V0KHRoaXMpLGF0KHQubG9hZGVyKSwoZT10LnBvcHVwLmdldEVsZW1lbnRzQnlDbGFzc05hbWUodC5sb2FkZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1idXR0b24tdG8tcmVwbGFjZVwiKSkpLmxlbmd0aD9ydChlWzBdLFwiaW5saW5lLWJsb2NrXCIpOnd0KFQoKSl8fHd0KEwoKSl8fHd0KEQoKSl8fGF0KHQuYWN0aW9ucyksYnQoW3QucG9wdXAsdC5hY3Rpb25zXSwkLmxvYWRpbmcpLHQucG9wdXAucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1idXN5XCIpLHQucG9wdXAucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1sb2FkaW5nXCIpLHQuY29uZmlybUJ1dHRvbi5kaXNhYmxlZD0hMSx0LmRlbnlCdXR0b24uZGlzYWJsZWQ9ITEsdC5jYW5jZWxCdXR0b24uZGlzYWJsZWQ9ITEpfWZ1bmN0aW9uIGZlKCl7bnVsbD09PXR0LnByZXZpb3VzQm9keVBhZGRpbmcmJmRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0PndpbmRvdy5pbm5lckhlaWdodCYmKHR0LnByZXZpb3VzQm9keVBhZGRpbmc9cGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkuZ2V0UHJvcGVydHlWYWx1ZShcInBhZGRpbmctcmlnaHRcIikpLGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0PVwiXCIuY29uY2F0KHR0LnByZXZpb3VzQm9keVBhZGRpbmcrZnVuY3Rpb24oKXt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3QuY2xhc3NOYW1lPSRbXCJzY3JvbGxiYXItbWVhc3VyZVwiXSxkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHQpO3ZhciBlPXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgtdC5jbGllbnRXaWR0aDtyZXR1cm4gZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0KSxlfSgpLFwicHhcIikpfWZ1bmN0aW9uIG1lKCl7cmV0dXJuISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQmJiEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlfWZ1bmN0aW9uIGhlKCl7dmFyIHQ9aygpLGU9QSgpO3Quc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJhbGlnbi1pdGVtc1wiKSxlLm9mZnNldFRvcDwwJiYodC5zdHlsZS5hbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiKX12YXIgZ2U9ZnVuY3Rpb24oKXtuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oQ3JpT1N8RnhpT1N8RWRnaU9TfFlhQnJvd3NlcnxVQ0Jyb3dzZXIpL2kpfHxBKCkuc2Nyb2xsSGVpZ2h0PndpbmRvdy5pbm5lckhlaWdodC00NCYmKGsoKS5zdHlsZS5wYWRkaW5nQm90dG9tPVwiXCIuY29uY2F0KDQ0LFwicHhcIikpfSx2ZT1mdW5jdGlvbigpe3ZhciBlLHQ9aygpO3Qub250b3VjaHN0YXJ0PWZ1bmN0aW9uKHQpe2U9YmUodCl9LHQub250b3VjaG1vdmU9ZnVuY3Rpb24odCl7ZSYmKHQucHJldmVudERlZmF1bHQoKSx0LnN0b3BQcm9wYWdhdGlvbigpKX19LGJlPWZ1bmN0aW9uKHQpe3ZhciBlPXQudGFyZ2V0LG49aygpO3JldHVybiF5ZSh0KSYmIXdlKHQpJiYoZT09PW58fCEoY3Qobil8fFwiSU5QVVRcIj09PWUudGFnTmFtZXx8Y3QoUCgpKSYmUCgpLmNvbnRhaW5zKGUpKSl9LHllPWZ1bmN0aW9uKHQpe3JldHVybiB0LnRvdWNoZXMmJnQudG91Y2hlcy5sZW5ndGgmJlwic3R5bHVzXCI9PT10LnRvdWNoZXNbMF0udG91Y2hUeXBlfSx3ZT1mdW5jdGlvbih0KXtyZXR1cm4gdC50b3VjaGVzJiYxPHQudG91Y2hlcy5sZW5ndGh9LENlPXtzd2FsUHJvbWlzZVJlc29sdmU6bmV3IFdlYWtNYXB9O2Z1bmN0aW9uIGtlKHQsZSxuLG8pe0coKT9FZSh0LG8pOigkdChuKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIEVlKHQsbyl9KSx0ZS5rZXlkb3duVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsdGUua2V5ZG93bkhhbmRsZXIse2NhcHR1cmU6dGUua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZX0pLHRlLmtleWRvd25IYW5kbGVyQWRkZWQ9ITEpLGUucGFyZW50Tm9kZSYmIWRvY3VtZW50LmJvZHkuZ2V0QXR0cmlidXRlKFwiZGF0YS1zd2FsMi1xdWV1ZS1zdGVwXCIpJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSksTigpJiYobnVsbCE9PXR0LnByZXZpb3VzQm9keVBhZGRpbmcmJihkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodD1cIlwiLmNvbmNhdCh0dC5wcmV2aW91c0JvZHlQYWRkaW5nLFwicHhcIiksdHQucHJldmlvdXNCb2R5UGFkZGluZz1udWxsKSxGKGRvY3VtZW50LmJvZHksJC5pb3NmaXgpJiYoZT1wYXJzZUludChkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCwxMCksYnQoZG9jdW1lbnQuYm9keSwkLmlvc2ZpeCksZG9jdW1lbnQuYm9keS5zdHlsZS50b3A9XCJcIixkb2N1bWVudC5ib2R5LnNjcm9sbFRvcD0tMSplKSxcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZtZSgpJiZ3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGhlKSxnKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24odCl7dC5oYXNBdHRyaWJ1dGUoXCJkYXRhLXByZXZpb3VzLWFyaWEtaGlkZGVuXCIpPyh0LnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByZXZpb3VzLWFyaWEtaGlkZGVuXCIpKSx0LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW5cIikpOnQucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIil9KSksYnQoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCxkb2N1bWVudC5ib2R5XSxbJC5zaG93biwkW1wiaGVpZ2h0LWF1dG9cIl0sJFtcIm5vLWJhY2tkcm9wXCJdLCRbXCJ0b2FzdC1zaG93blwiXV0pfWZ1bmN0aW9uIEFlKHQpe3ZhciBlLG4sbyxpPUEoKTtpJiYodD14ZSh0KSwoZT1UdC5pbm5lclBhcmFtcy5nZXQodGhpcykpJiYhRihpLGUuaGlkZUNsYXNzLnBvcHVwKSYmKG49Q2Uuc3dhbFByb21pc2VSZXNvbHZlLmdldCh0aGlzKSxidChpLGUuc2hvd0NsYXNzLnBvcHVwKSx2dChpLGUuaGlkZUNsYXNzLnBvcHVwKSxvPWsoKSxidChvLGUuc2hvd0NsYXNzLmJhY2tkcm9wKSx2dChvLGUuaGlkZUNsYXNzLmJhY2tkcm9wKSxCZSh0aGlzLGksZSksbih0KSkpfWZ1bmN0aW9uIHhlKHQpe3JldHVybiB2b2lkIDA9PT10P3tpc0NvbmZpcm1lZDohMSxpc0RlbmllZDohMSxpc0Rpc21pc3NlZDohMH06dSh7aXNDb25maXJtZWQ6ITEsaXNEZW5pZWQ6ITEsaXNEaXNtaXNzZWQ6ITF9LHQpfWZ1bmN0aW9uIEJlKHQsZSxuKXt2YXIgbz1rKCksaT1CdCYmbHQoZSkscj1uLm9uQ2xvc2UsYT1uLm9uQWZ0ZXJDbG9zZSxzPW4ud2lsbENsb3NlLHU9bi5kaWRDbG9zZTtQZShlLHMsciksaT9PZSh0LGUsbyxuLnJldHVybkZvY3VzLHV8fGEpOmtlKHQsbyxuLnJldHVybkZvY3VzLHV8fGEpfXZhciBQZT1mdW5jdGlvbih0LGUsbil7bnVsbCE9PWUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZSh0KTpudWxsIT09biYmXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmbih0KX0sT2U9ZnVuY3Rpb24odCxlLG4sbyxpKXt0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2s9a2UuYmluZChudWxsLHQsbixvLGkpLGUuYWRkRXZlbnRMaXN0ZW5lcihCdCxmdW5jdGlvbih0KXt0LnRhcmdldD09PWUmJih0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2soKSxkZWxldGUgdGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrKX0pfSxFZT1mdW5jdGlvbih0LGUpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksdC5fZGVzdHJveSgpfSl9O2Z1bmN0aW9uIFNlKHQsZSxuKXt2YXIgbz1UdC5kb21DYWNoZS5nZXQodCk7ZS5mb3JFYWNoKGZ1bmN0aW9uKHQpe29bdF0uZGlzYWJsZWQ9bn0pfWZ1bmN0aW9uIFRlKHQsZSl7aWYoIXQpcmV0dXJuITE7aWYoXCJyYWRpb1wiPT09dC50eXBlKWZvcih2YXIgbj10LnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIiksbz0wO288bi5sZW5ndGg7bysrKW5bb10uZGlzYWJsZWQ9ZTtlbHNlIHQuZGlzYWJsZWQ9ZX12YXIgTGU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBuKHQsZSl7YSh0aGlzLG4pLHRoaXMuY2FsbGJhY2s9dCx0aGlzLnJlbWFpbmluZz1lLHRoaXMucnVubmluZz0hMSx0aGlzLnN0YXJ0KCl9cmV0dXJuIHMobixbe2tleTpcInN0YXJ0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ydW5uaW5nfHwodGhpcy5ydW5uaW5nPSEwLHRoaXMuc3RhcnRlZD1uZXcgRGF0ZSx0aGlzLmlkPXNldFRpbWVvdXQodGhpcy5jYWxsYmFjayx0aGlzLnJlbWFpbmluZykpLHRoaXMucmVtYWluaW5nfX0se2tleTpcInN0b3BcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnJ1bm5pbmcmJih0aGlzLnJ1bm5pbmc9ITEsY2xlYXJUaW1lb3V0KHRoaXMuaWQpLHRoaXMucmVtYWluaW5nLT1uZXcgRGF0ZS10aGlzLnN0YXJ0ZWQpLHRoaXMucmVtYWluaW5nfX0se2tleTpcImluY3JlYXNlXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5ydW5uaW5nO3JldHVybiBlJiZ0aGlzLnN0b3AoKSx0aGlzLnJlbWFpbmluZys9dCxlJiZ0aGlzLnN0YXJ0KCksdGhpcy5yZW1haW5pbmd9fSx7a2V5OlwiZ2V0VGltZXJMZWZ0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ydW5uaW5nJiYodGhpcy5zdG9wKCksdGhpcy5zdGFydCgpKSx0aGlzLnJlbWFpbmluZ319LHtrZXk6XCJpc1J1bm5pbmdcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnJ1bm5pbmd9fV0pLG59KCkscWU9e2VtYWlsOmZ1bmN0aW9uKHQsZSl7cmV0dXJuL15bYS16QS1aMC05LitfLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWjAtOS1dezIsMjR9JC8udGVzdCh0KT9Qcm9taXNlLnJlc29sdmUoKTpQcm9taXNlLnJlc29sdmUoZXx8XCJJbnZhbGlkIGVtYWlsIGFkZHJlc3NcIil9LHVybDpmdW5jdGlvbih0LGUpe3JldHVybi9eaHR0cHM/OlxcL1xcLyh3d3dcXC4pP1stYS16QS1aMC05QDolLl8rfiM9XXsxLDI1Nn1cXC5bYS16XXsyLDYzfVxcYihbLWEtekEtWjAtOUA6JV8rLn4jPyYvPV0qKSQvLnRlc3QodCk/UHJvbWlzZS5yZXNvbHZlKCk6UHJvbWlzZS5yZXNvbHZlKGV8fFwiSW52YWxpZCBVUkxcIil9fTtmdW5jdGlvbiBEZSh0KXt2YXIgZSxuOyhlPXQpLmlucHV0VmFsaWRhdG9yfHxPYmplY3Qua2V5cyhxZSkuZm9yRWFjaChmdW5jdGlvbih0KXtlLmlucHV0PT09dCYmKGUuaW5wdXRWYWxpZGF0b3I9cWVbdF0pfSksdC5zaG93TG9hZGVyT25Db25maXJtJiYhdC5wcmVDb25maXJtJiZXKFwic2hvd0xvYWRlck9uQ29uZmlybSBpcyBzZXQgdG8gdHJ1ZSwgYnV0IHByZUNvbmZpcm0gaXMgbm90IGRlZmluZWQuXFxuc2hvd0xvYWRlck9uQ29uZmlybSBzaG91bGQgYmUgdXNlZCB0b2dldGhlciB3aXRoIHByZUNvbmZpcm0sIHNlZSB1c2FnZSBleGFtcGxlOlxcbmh0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvLyNhamF4LXJlcXVlc3RcIiksdC5hbmltYXRpb249Wih0LmFuaW1hdGlvbiksKG49dCkudGFyZ2V0JiYoXCJzdHJpbmdcIiE9dHlwZW9mIG4udGFyZ2V0fHxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG4udGFyZ2V0KSkmJihcInN0cmluZ1wiPT10eXBlb2Ygbi50YXJnZXR8fG4udGFyZ2V0LmFwcGVuZENoaWxkKXx8KFcoJ1RhcmdldCBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkLCBkZWZhdWx0aW5nIHRvIFwiYm9keVwiJyksbi50YXJnZXQ9XCJib2R5XCIpLFwic3RyaW5nXCI9PXR5cGVvZiB0LnRpdGxlJiYodC50aXRsZT10LnRpdGxlLnNwbGl0KFwiXFxuXCIpLmpvaW4oXCI8YnIgLz5cIikpLGt0KHQpfWZ1bmN0aW9uIGplKHQpe3ZhciBlPWsoKSxuPUEoKTtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LndpbGxPcGVuP3Qud2lsbE9wZW4obik6XCJmdW5jdGlvblwiPT10eXBlb2YgdC5vbkJlZm9yZU9wZW4mJnQub25CZWZvcmVPcGVuKG4pO3ZhciBvPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLm92ZXJmbG93WTtKZShlLG4sdCksc2V0VGltZW91dChmdW5jdGlvbigpe1plKGUsbil9LDEwKSxOKCkmJihRZShlLHQuc2Nyb2xsYmFyUGFkZGluZyxvKSxnKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24odCl7dD09PWsoKXx8ZnVuY3Rpb24odCxlKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LmNvbnRhaW5zKXJldHVybiB0LmNvbnRhaW5zKGUpfSh0LGsoKSl8fCh0Lmhhc0F0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIpJiZ0LnNldEF0dHJpYnV0ZShcImRhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW5cIix0LmdldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIpKSx0LnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpKX0pKSxHKCl8fHRlLnByZXZpb3VzQWN0aXZlRWxlbWVudHx8KHRlLnByZXZpb3VzQWN0aXZlRWxlbWVudD1kb2N1bWVudC5hY3RpdmVFbGVtZW50KSxZZShuLHQpLGJ0KGUsJFtcIm5vLXRyYW5zaXRpb25cIl0pfWZ1bmN0aW9uIE1lKHQpe3ZhciBlPUEoKTt0LnRhcmdldD09PWUmJih0PWsoKSxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoQnQsTWUpLHQuc3R5bGUub3ZlcmZsb3dZPVwiYXV0b1wiKX1mdW5jdGlvbiBJZSh0LGUpe3QuY2xvc2VQb3B1cCh7aXNDb25maXJtZWQ6ITAsdmFsdWU6ZX0pfWZ1bmN0aW9uIEhlKHQsZSxuKXt2YXIgbz1SKCk7aWYoby5sZW5ndGgpcmV0dXJuKGUrPW4pPT09by5sZW5ndGg/ZT0wOi0xPT09ZSYmKGU9by5sZW5ndGgtMSksb1tlXS5mb2N1cygpO0EoKS5mb2N1cygpfXZhciBWZT1bXCJzd2FsLXRpdGxlXCIsXCJzd2FsLWh0bWxcIixcInN3YWwtZm9vdGVyXCJdLFJlPWZ1bmN0aW9uKHQpe3ZhciBuPXt9O3JldHVybiBnKHQucXVlcnlTZWxlY3RvckFsbChcInN3YWwtcGFyYW1cIikpLmZvckVhY2goZnVuY3Rpb24odCl7S2UodCxbXCJuYW1lXCIsXCJ2YWx1ZVwiXSk7dmFyIGU9dC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpLHQ9dC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtcImJvb2xlYW5cIj09dHlwZW9mIHNlW2VdJiZcImZhbHNlXCI9PT10JiYodD0hMSksXCJvYmplY3RcIj09PXIoc2VbZV0pJiYodD1KU09OLnBhcnNlKHQpKSxuW2VdPXR9KSxufSxOZT1mdW5jdGlvbih0KXt2YXIgbj17fTtyZXR1cm4gZyh0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzd2FsLWJ1dHRvblwiKSkuZm9yRWFjaChmdW5jdGlvbih0KXtLZSh0LFtcInR5cGVcIixcImNvbG9yXCIsXCJhcmlhLWxhYmVsXCJdKTt2YXIgZT10LmdldEF0dHJpYnV0ZShcInR5cGVcIik7bltcIlwiLmNvbmNhdChlLFwiQnV0dG9uVGV4dFwiKV09dC5pbm5lckhUTUwsbltcInNob3dcIi5jb25jYXQobShlKSxcIkJ1dHRvblwiKV09ITAsdC5oYXNBdHRyaWJ1dGUoXCJjb2xvclwiKSYmKG5bXCJcIi5jb25jYXQoZSxcIkJ1dHRvbkNvbG9yXCIpXT10LmdldEF0dHJpYnV0ZShcImNvbG9yXCIpKSx0Lmhhc0F0dHJpYnV0ZShcImFyaWEtbGFiZWxcIikmJihuW1wiXCIuY29uY2F0KGUsXCJCdXR0b25BcmlhTGFiZWxcIildPXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSl9KSxufSxVZT1mdW5jdGlvbih0KXt2YXIgZT17fSx0PXQucXVlcnlTZWxlY3RvcihcInN3YWwtaW1hZ2VcIik7cmV0dXJuIHQmJihLZSh0LFtcInNyY1wiLFwid2lkdGhcIixcImhlaWdodFwiLFwiYWx0XCJdKSx0Lmhhc0F0dHJpYnV0ZShcInNyY1wiKSYmKGUuaW1hZ2VVcmw9dC5nZXRBdHRyaWJ1dGUoXCJzcmNcIikpLHQuaGFzQXR0cmlidXRlKFwid2lkdGhcIikmJihlLmltYWdlV2lkdGg9dC5nZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiKSksdC5oYXNBdHRyaWJ1dGUoXCJoZWlnaHRcIikmJihlLmltYWdlSGVpZ2h0PXQuZ2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIpKSx0Lmhhc0F0dHJpYnV0ZShcImFsdFwiKSYmKGUuaW1hZ2VBbHQ9dC5nZXRBdHRyaWJ1dGUoXCJhbHRcIikpKSxlfSxGZT1mdW5jdGlvbih0KXt2YXIgZT17fSx0PXQucXVlcnlTZWxlY3RvcihcInN3YWwtaWNvblwiKTtyZXR1cm4gdCYmKEtlKHQsW1widHlwZVwiLFwiY29sb3JcIl0pLHQuaGFzQXR0cmlidXRlKFwidHlwZVwiKSYmKGUuaWNvbj10LmdldEF0dHJpYnV0ZShcInR5cGVcIikpLHQuaGFzQXR0cmlidXRlKFwiY29sb3JcIikmJihlLmljb25Db2xvcj10LmdldEF0dHJpYnV0ZShcImNvbG9yXCIpKSxlLmljb25IdG1sPXQuaW5uZXJIVE1MKSxlfSxfZT1mdW5jdGlvbih0KXt2YXIgbj17fSxlPXQucXVlcnlTZWxlY3RvcihcInN3YWwtaW5wdXRcIik7ZSYmKEtlKGUsW1widHlwZVwiLFwibGFiZWxcIixcInBsYWNlaG9sZGVyXCIsXCJ2YWx1ZVwiXSksbi5pbnB1dD1lLmdldEF0dHJpYnV0ZShcInR5cGVcIil8fFwidGV4dFwiLGUuaGFzQXR0cmlidXRlKFwibGFiZWxcIikmJihuLmlucHV0TGFiZWw9ZS5nZXRBdHRyaWJ1dGUoXCJsYWJlbFwiKSksZS5oYXNBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiKSYmKG4uaW5wdXRQbGFjZWhvbGRlcj1lLmdldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIpKSxlLmhhc0F0dHJpYnV0ZShcInZhbHVlXCIpJiYobi5pbnB1dFZhbHVlPWUuZ2V0QXR0cmlidXRlKFwidmFsdWVcIikpKTt0PXQucXVlcnlTZWxlY3RvckFsbChcInN3YWwtaW5wdXQtb3B0aW9uXCIpO3JldHVybiB0Lmxlbmd0aCYmKG4uaW5wdXRPcHRpb25zPXt9LGcodCkuZm9yRWFjaChmdW5jdGlvbih0KXtLZSh0LFtcInZhbHVlXCJdKTt2YXIgZT10LmdldEF0dHJpYnV0ZShcInZhbHVlXCIpLHQ9dC5pbm5lckhUTUw7bi5pbnB1dE9wdGlvbnNbZV09dH0pKSxufSx6ZT1mdW5jdGlvbih0LGUpe3ZhciBuLG89e307Zm9yKG4gaW4gZSl7dmFyIGk9ZVtuXSxyPXQucXVlcnlTZWxlY3RvcihpKTtyJiYoS2UocixbXSksb1tpLnJlcGxhY2UoL15zd2FsLS8sXCJcIildPXIuaW5uZXJIVE1MLnRyaW0oKSl9cmV0dXJuIG99LFdlPWZ1bmN0aW9uKGUpe3ZhciBuPVZlLmNvbmNhdChbXCJzd2FsLXBhcmFtXCIsXCJzd2FsLWJ1dHRvblwiLFwic3dhbC1pbWFnZVwiLFwic3dhbC1pY29uXCIsXCJzd2FsLWlucHV0XCIsXCJzd2FsLWlucHV0LW9wdGlvblwiXSk7ZyhlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3QucGFyZW50Tm9kZT09PWUmJih0PXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpLC0xPT09bi5pbmRleE9mKHQpJiZXKFwiVW5yZWNvZ25pemVkIGVsZW1lbnQgPFwiLmNvbmNhdCh0LFwiPlwiKSkpfSl9LEtlPWZ1bmN0aW9uKGUsbil7ZyhlLmF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24odCl7LTE9PT1uLmluZGV4T2YodC5uYW1lKSYmVyhbJ1VucmVjb2duaXplZCBhdHRyaWJ1dGUgXCInLmNvbmNhdCh0Lm5hbWUsJ1wiIG9uIDwnKS5jb25jYXQoZS50YWdOYW1lLnRvTG93ZXJDYXNlKCksXCI+LlwiKSxcIlwiLmNvbmNhdChuLmxlbmd0aD9cIkFsbG93ZWQgYXR0cmlidXRlcyBhcmU6IFwiLmNvbmNhdChuLmpvaW4oXCIsIFwiKSk6XCJUbyBzZXQgdGhlIHZhbHVlLCB1c2UgSFRNTCB3aXRoaW4gdGhlIGVsZW1lbnQuXCIpXSl9KX0sWWU9ZnVuY3Rpb24odCxlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmRpZE9wZW4/c2V0VGltZW91dChmdW5jdGlvbigpe3JldHVybiBlLmRpZE9wZW4odCl9KTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLm9uT3BlbiYmc2V0VGltZW91dChmdW5jdGlvbigpe3JldHVybiBlLm9uT3Blbih0KX0pfSxaZT1mdW5jdGlvbih0LGUpe0J0JiZsdChlKT8odC5zdHlsZS5vdmVyZmxvd1k9XCJoaWRkZW5cIixlLmFkZEV2ZW50TGlzdGVuZXIoQnQsTWUpKTp0LnN0eWxlLm92ZXJmbG93WT1cImF1dG9cIn0sUWU9ZnVuY3Rpb24odCxlLG4pe3ZhciBvOygvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSYmIXdpbmRvdy5NU1N0cmVhbXx8XCJNYWNJbnRlbFwiPT09bmF2aWdhdG9yLnBsYXRmb3JtJiYxPG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cykmJiFGKGRvY3VtZW50LmJvZHksJC5pb3NmaXgpJiYobz1kb2N1bWVudC5ib2R5LnNjcm9sbFRvcCxkb2N1bWVudC5ib2R5LnN0eWxlLnRvcD1cIlwiLmNvbmNhdCgtMSpvLFwicHhcIiksdnQoZG9jdW1lbnQuYm9keSwkLmlvc2ZpeCksdmUoKSxnZSgpKSxcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZtZSgpJiYoaGUoKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGhlKSksZSYmXCJoaWRkZW5cIiE9PW4mJmZlKCksc2V0VGltZW91dChmdW5jdGlvbigpe3Quc2Nyb2xsVG9wPTB9KX0sSmU9ZnVuY3Rpb24odCxlLG4pe3Z0KHQsbi5zaG93Q2xhc3MuYmFja2Ryb3ApLGUuc3R5bGUuc2V0UHJvcGVydHkoXCJvcGFjaXR5XCIsXCIwXCIsXCJpbXBvcnRhbnRcIikscnQoZSksc2V0VGltZW91dChmdW5jdGlvbigpe3Z0KGUsbi5zaG93Q2xhc3MucG9wdXApLGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJvcGFjaXR5XCIpfSwxMCksdnQoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCxkb2N1bWVudC5ib2R5XSwkLnNob3duKSxuLmhlaWdodEF1dG8mJm4uYmFja2Ryb3AmJiFuLnRvYXN0JiZ2dChbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LGRvY3VtZW50LmJvZHldLCRbXCJoZWlnaHQtYXV0b1wiXSl9LCRlPWZ1bmN0aW9uKHQpe3JldHVybiB0LmNoZWNrZWQ/MTowfSxYZT1mdW5jdGlvbih0KXtyZXR1cm4gdC5jaGVja2VkP3QudmFsdWU6bnVsbH0sR2U9ZnVuY3Rpb24odCl7cmV0dXJuIHQuZmlsZXMubGVuZ3RoP251bGwhPT10LmdldEF0dHJpYnV0ZShcIm11bHRpcGxlXCIpP3QuZmlsZXM6dC5maWxlc1swXTpudWxsfSx0bj1mdW5jdGlvbihlLG4pe2Z1bmN0aW9uIG8odCl7cmV0dXJuIG5uW24uaW5wdXRdKGksb24odCksbil9dmFyIGk9UCgpO2Iobi5pbnB1dE9wdGlvbnMpfHx3KG4uaW5wdXRPcHRpb25zKT8oSnQoVCgpKSx5KG4uaW5wdXRPcHRpb25zKS50aGVuKGZ1bmN0aW9uKHQpe2UuaGlkZUxvYWRpbmcoKSxvKHQpfSkpOlwib2JqZWN0XCI9PT1yKG4uaW5wdXRPcHRpb25zKT9vKG4uaW5wdXRPcHRpb25zKTpLKFwiVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0T3B0aW9ucyEgRXhwZWN0ZWQgb2JqZWN0LCBNYXAgb3IgUHJvbWlzZSwgZ290IFwiLmNvbmNhdChyKG4uaW5wdXRPcHRpb25zKSkpfSxlbj1mdW5jdGlvbihlLG4pe3ZhciBvPWUuZ2V0SW5wdXQoKTthdChvKSx5KG4uaW5wdXRWYWx1ZSkudGhlbihmdW5jdGlvbih0KXtvLnZhbHVlPVwibnVtYmVyXCI9PT1uLmlucHV0P3BhcnNlRmxvYXQodCl8fDA6XCJcIi5jb25jYXQodCkscnQobyksby5mb2N1cygpLGUuaGlkZUxvYWRpbmcoKX0pLmNhdGNoKGZ1bmN0aW9uKHQpe0soXCJFcnJvciBpbiBpbnB1dFZhbHVlIHByb21pc2U6IFwiLmNvbmNhdCh0KSksby52YWx1ZT1cIlwiLHJ0KG8pLG8uZm9jdXMoKSxlLmhpZGVMb2FkaW5nKCl9KX0sbm49e3NlbGVjdDpmdW5jdGlvbih0LGUsaSl7ZnVuY3Rpb24gbyh0LGUsbil7dmFyIG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtvLnZhbHVlPW4sVShvLGUpLG8uc2VsZWN0ZWQ9cm4obixpLmlucHV0VmFsdWUpLHQuYXBwZW5kQ2hpbGQobyl9dmFyIHI9eXQodCwkLnNlbGVjdCk7ZS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBlLG49dFswXSx0PXRbMV07QXJyYXkuaXNBcnJheSh0KT8oKGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGdyb3VwXCIpKS5sYWJlbD1uLGUuZGlzYWJsZWQ9ITEsci5hcHBlbmRDaGlsZChlKSx0LmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIG8oZSx0WzFdLHRbMF0pfSkpOm8ocix0LG4pfSksci5mb2N1cygpfSxyYWRpbzpmdW5jdGlvbih0LGUsaSl7dmFyIHI9eXQodCwkLnJhZGlvKTtlLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIGU9dFswXSxuPXRbMV0sbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7by50eXBlPVwicmFkaW9cIixvLm5hbWU9JC5yYWRpbyxvLnZhbHVlPWUscm4oZSxpLmlucHV0VmFsdWUpJiYoby5jaGVja2VkPSEwKTtlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1UoZSxuKSxlLmNsYXNzTmFtZT0kLmxhYmVsLHQuYXBwZW5kQ2hpbGQobyksdC5hcHBlbmRDaGlsZChlKSxyLmFwcGVuZENoaWxkKHQpfSk7ZT1yLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtlLmxlbmd0aCYmZVswXS5mb2N1cygpfX0sb249ZnVuY3Rpb24gbihvKXt2YXIgaT1bXTtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgTWFwJiZvIGluc3RhbmNlb2YgTWFwP28uZm9yRWFjaChmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PT1yKHQpJiYodD1uKHQpKSxpLnB1c2goW2UsdF0pfSk6T2JqZWN0LmtleXMobykuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgZT1vW3RdO1wib2JqZWN0XCI9PT1yKGUpJiYoZT1uKGUpKSxpLnB1c2goW3QsZV0pfSksaX0scm49ZnVuY3Rpb24odCxlKXtyZXR1cm4gZSYmZS50b1N0cmluZygpPT09dC50b1N0cmluZygpfSxhbj1mdW5jdGlvbih0LGUsbil7dmFyIG89ZnVuY3Rpb24odCxlKXt2YXIgbj10LmdldElucHV0KCk7aWYoIW4pcmV0dXJuIG51bGw7c3dpdGNoKGUuaW5wdXQpe2Nhc2VcImNoZWNrYm94XCI6cmV0dXJuICRlKG4pO2Nhc2VcInJhZGlvXCI6cmV0dXJuIFhlKG4pO2Nhc2VcImZpbGVcIjpyZXR1cm4gR2Uobik7ZGVmYXVsdDpyZXR1cm4gZS5pbnB1dEF1dG9UcmltP24udmFsdWUudHJpbSgpOm4udmFsdWV9fSh0LGUpO2UuaW5wdXRWYWxpZGF0b3I/c24odCxlLG8pOnQuZ2V0SW5wdXQoKS5jaGVja1ZhbGlkaXR5KCk/KFwiZGVueVwiPT09bj91bjpjbikodCxlLG8pOih0LmVuYWJsZUJ1dHRvbnMoKSx0LnNob3dWYWxpZGF0aW9uTWVzc2FnZShlLnZhbGlkYXRpb25NZXNzYWdlKSl9LHNuPWZ1bmN0aW9uKGUsbixvKXtlLmRpc2FibGVJbnB1dCgpLFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4geShuLmlucHV0VmFsaWRhdG9yKG8sbi52YWxpZGF0aW9uTWVzc2FnZSkpfSkudGhlbihmdW5jdGlvbih0KXtlLmVuYWJsZUJ1dHRvbnMoKSxlLmVuYWJsZUlucHV0KCksdD9lLnNob3dWYWxpZGF0aW9uTWVzc2FnZSh0KTpjbihlLG4sbyl9KX0sdW49ZnVuY3Rpb24oZSx0LG4pe3Quc2hvd0xvYWRlck9uRGVueSYmSnQoTCgpKSx0LnByZURlbnk/UHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpe3JldHVybiB5KHQucHJlRGVueShuLHQudmFsaWRhdGlvbk1lc3NhZ2UpKX0pLnRoZW4oZnVuY3Rpb24odCl7ITE9PT10P2UuaGlkZUxvYWRpbmcoKTplLmNsb3NlUG9wdXAoe2lzRGVuaWVkOiEwLHZhbHVlOnZvaWQgMD09PXQ/bjp0fSl9KTplLmNsb3NlUG9wdXAoe2lzRGVuaWVkOiEwLHZhbHVlOm59KX0sY249ZnVuY3Rpb24oZSx0LG4pe3Quc2hvd0xvYWRlck9uQ29uZmlybSYmSnQoKSx0LnByZUNvbmZpcm0/KGUucmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpLFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4geSh0LnByZUNvbmZpcm0obix0LnZhbGlkYXRpb25NZXNzYWdlKSl9KS50aGVuKGZ1bmN0aW9uKHQpe3d0KFMoKSl8fCExPT09dD9lLmhpZGVMb2FkaW5nKCk6SWUoZSx2b2lkIDA9PT10P246dCl9KSk6SWUoZSxuKX0sbG49W1wiQXJyb3dSaWdodFwiLFwiQXJyb3dEb3duXCIsXCJSaWdodFwiLFwiRG93blwiXSxkbj1bXCJBcnJvd0xlZnRcIixcIkFycm93VXBcIixcIkxlZnRcIixcIlVwXCJdLHBuPVtcIkVzY2FwZVwiLFwiRXNjXCJdLGZuPWZ1bmN0aW9uKHQsZSxuKXt2YXIgbz1UdC5pbm5lclBhcmFtcy5nZXQodCk7byYmKG8uc3RvcEtleWRvd25Qcm9wYWdhdGlvbiYmZS5zdG9wUHJvcGFnYXRpb24oKSxcIkVudGVyXCI9PT1lLmtleT9tbih0LGUsbyk6XCJUYWJcIj09PWUua2V5P2huKGUsbyk6LTEhPT1bXS5jb25jYXQobG4sZG4pLmluZGV4T2YoZS5rZXkpP2duKGUua2V5KTotMSE9PXBuLmluZGV4T2YoZS5rZXkpJiZ2bihlLG8sbikpfSxtbj1mdW5jdGlvbih0LGUsbil7ZS5pc0NvbXBvc2luZ3x8ZS50YXJnZXQmJnQuZ2V0SW5wdXQoKSYmZS50YXJnZXQub3V0ZXJIVE1MPT09dC5nZXRJbnB1dCgpLm91dGVySFRNTCYmLTE9PT1bXCJ0ZXh0YXJlYVwiLFwiZmlsZVwiXS5pbmRleE9mKG4uaW5wdXQpJiYoRnQoKSxlLnByZXZlbnREZWZhdWx0KCkpfSxobj1mdW5jdGlvbih0LGUpe2Zvcih2YXIgbj10LnRhcmdldCxvPVIoKSxpPS0xLHI9MDtyPG8ubGVuZ3RoO3IrKylpZihuPT09b1tyXSl7aT1yO2JyZWFrfXQuc2hpZnRLZXk/SGUoMCxpLC0xKTpIZSgwLGksMSksdC5zdG9wUHJvcGFnYXRpb24oKSx0LnByZXZlbnREZWZhdWx0KCl9LGduPWZ1bmN0aW9uKHQpey0xIT09W1QoKSxMKCksRCgpXS5pbmRleE9mKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpJiYodD0tMSE9PWxuLmluZGV4T2YodCk/XCJuZXh0RWxlbWVudFNpYmxpbmdcIjpcInByZXZpb3VzRWxlbWVudFNpYmxpbmdcIiwodD1kb2N1bWVudC5hY3RpdmVFbGVtZW50W3RdKSYmdC5mb2N1cygpKX0sdm49ZnVuY3Rpb24odCxlLG4pe1ooZS5hbGxvd0VzY2FwZUtleSkmJih0LnByZXZlbnREZWZhdWx0KCksbihRLmVzYykpfSxibj1mdW5jdGlvbihlLHQsbil7dC5wb3B1cC5vbmNsaWNrPWZ1bmN0aW9uKCl7dmFyIHQ9VHQuaW5uZXJQYXJhbXMuZ2V0KGUpO3Quc2hvd0NvbmZpcm1CdXR0b258fHQuc2hvd0RlbnlCdXR0b258fHQuc2hvd0NhbmNlbEJ1dHRvbnx8dC5zaG93Q2xvc2VCdXR0b258fHQudGltZXJ8fHQuaW5wdXR8fG4oUS5jbG9zZSl9fSx5bj0hMSx3bj1mdW5jdGlvbihlKXtlLnBvcHVwLm9ubW91c2Vkb3duPWZ1bmN0aW9uKCl7ZS5jb250YWluZXIub25tb3VzZXVwPWZ1bmN0aW9uKHQpe2UuY29udGFpbmVyLm9ubW91c2V1cD12b2lkIDAsdC50YXJnZXQ9PT1lLmNvbnRhaW5lciYmKHluPSEwKX19fSxDbj1mdW5jdGlvbihlKXtlLmNvbnRhaW5lci5vbm1vdXNlZG93bj1mdW5jdGlvbigpe2UucG9wdXAub25tb3VzZXVwPWZ1bmN0aW9uKHQpe2UucG9wdXAub25tb3VzZXVwPXZvaWQgMCx0LnRhcmdldCE9PWUucG9wdXAmJiFlLnBvcHVwLmNvbnRhaW5zKHQudGFyZ2V0KXx8KHluPSEwKX19fSxrbj1mdW5jdGlvbihuLG8saSl7by5jb250YWluZXIub25jbGljaz1mdW5jdGlvbih0KXt2YXIgZT1UdC5pbm5lclBhcmFtcy5nZXQobik7eW4/eW49ITE6dC50YXJnZXQ9PT1vLmNvbnRhaW5lciYmWihlLmFsbG93T3V0c2lkZUNsaWNrKSYmaShRLmJhY2tkcm9wKX19O2Z1bmN0aW9uIEFuKHQsZSl7dmFyIG49ZnVuY3Rpb24odCl7dD1cInN0cmluZ1wiPT10eXBlb2YgdC50ZW1wbGF0ZT9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHQudGVtcGxhdGUpOnQudGVtcGxhdGU7aWYoIXQpcmV0dXJue307dD10LmNvbnRlbnR8fHQ7cmV0dXJuIFdlKHQpLHUoUmUodCksTmUodCksVWUodCksRmUodCksX2UodCksemUodCxWZSkpfSh0KTtyZXR1cm4obj11KHt9LHNlLGUsbix0KSkuc2hvd0NsYXNzPXUoe30sc2Uuc2hvd0NsYXNzLG4uc2hvd0NsYXNzKSxuLmhpZGVDbGFzcz11KHt9LHNlLmhpZGVDbGFzcyxuLmhpZGVDbGFzcyksITE9PT10LmFuaW1hdGlvbiYmKG4uc2hvd0NsYXNzPXtwb3B1cDpcInN3YWwyLW5vYW5pbWF0aW9uXCIsYmFja2Ryb3A6XCJzd2FsMi1ub2FuaW1hdGlvblwifSxuLmhpZGVDbGFzcz17fSksbn1mdW5jdGlvbiB4bihhLHMsdSl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUodCl7YS5jbG9zZVBvcHVwKHtpc0Rpc21pc3NlZDohMCxkaXNtaXNzOnR9KX12YXIgbixvLGkscjtDZS5zd2FsUHJvbWlzZVJlc29sdmUuc2V0KGEsdCkscy5jb25maXJtQnV0dG9uLm9uY2xpY2s9ZnVuY3Rpb24oKXtyZXR1cm4gZT11LCh0PWEpLmRpc2FibGVCdXR0b25zKCksdm9pZChlLmlucHV0P2FuKHQsZSxcImNvbmZpcm1cIik6Y24odCxlLCEwKSk7dmFyIHQsZX0scy5kZW55QnV0dG9uLm9uY2xpY2s9ZnVuY3Rpb24oKXtyZXR1cm4gZT11LCh0PWEpLmRpc2FibGVCdXR0b25zKCksdm9pZChlLnJldHVybklucHV0VmFsdWVPbkRlbnk/YW4odCxlLFwiZGVueVwiKTp1bih0LGUsITEpKTt2YXIgdCxlfSxzLmNhbmNlbEJ1dHRvbi5vbmNsaWNrPWZ1bmN0aW9uKCl7cmV0dXJuIHQ9ZSxhLmRpc2FibGVCdXR0b25zKCksdm9pZCB0KFEuY2FuY2VsKTt2YXIgdH0scy5jbG9zZUJ1dHRvbi5vbmNsaWNrPWZ1bmN0aW9uKCl7cmV0dXJuIGUoUS5jbG9zZSl9LG49YSxyPXMsdD1lLFR0LmlubmVyUGFyYW1zLmdldChuKS50b2FzdD9ibihuLHIsdCk6KHduKHIpLENuKHIpLGtuKG4scix0KSksbz1hLHI9dSxpPWUsKHQ9dGUpLmtleWRvd25UYXJnZXQmJnQua2V5ZG93bkhhbmRsZXJBZGRlZCYmKHQua2V5ZG93blRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLHQua2V5ZG93bkhhbmRsZXIse2NhcHR1cmU6dC5rZXlkb3duTGlzdGVuZXJDYXB0dXJlfSksdC5rZXlkb3duSGFuZGxlckFkZGVkPSExKSxyLnRvYXN0fHwodC5rZXlkb3duSGFuZGxlcj1mdW5jdGlvbih0KXtyZXR1cm4gZm4obyx0LGkpfSx0LmtleWRvd25UYXJnZXQ9ci5rZXlkb3duTGlzdGVuZXJDYXB0dXJlP3dpbmRvdzpBKCksdC5rZXlkb3duTGlzdGVuZXJDYXB0dXJlPXIua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZSx0LmtleWRvd25UYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIix0LmtleWRvd25IYW5kbGVyLHtjYXB0dXJlOnQua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZX0pLHQua2V5ZG93bkhhbmRsZXJBZGRlZD0hMCkscj1hLFwic2VsZWN0XCI9PT0odD11KS5pbnB1dHx8XCJyYWRpb1wiPT09dC5pbnB1dD90bihyLHQpOi0xIT09W1widGV4dFwiLFwiZW1haWxcIixcIm51bWJlclwiLFwidGVsXCIsXCJ0ZXh0YXJlYVwiXS5pbmRleE9mKHQuaW5wdXQpJiYoYih0LmlucHV0VmFsdWUpfHx3KHQuaW5wdXRWYWx1ZSkpJiZlbihyLHQpLGplKHUpLFBuKHRlLHUsZSksT24ocyx1KSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cy5jb250YWluZXIuc2Nyb2xsVG9wPTB9KX0pfWZ1bmN0aW9uIEJuKHQpe3ZhciBlPXtwb3B1cDpBKCksY29udGFpbmVyOmsoKSxjb250ZW50OlAoKSxhY3Rpb25zOmooKSxjb25maXJtQnV0dG9uOlQoKSxkZW55QnV0dG9uOkwoKSxjYW5jZWxCdXR0b246RCgpLGxvYWRlcjpxKCksY2xvc2VCdXR0b246VigpLHZhbGlkYXRpb25NZXNzYWdlOlMoKSxwcm9ncmVzc1N0ZXBzOm4oKX07cmV0dXJuIFR0LmRvbUNhY2hlLnNldCh0LGUpLGV9dmFyIFBuPWZ1bmN0aW9uKHQsZSxuKXt2YXIgbz1IKCk7YXQobyksZS50aW1lciYmKHQudGltZW91dD1uZXcgTGUoZnVuY3Rpb24oKXtuKFwidGltZXJcIiksZGVsZXRlIHQudGltZW91dH0sZS50aW1lciksZS50aW1lclByb2dyZXNzQmFyJiYocnQobyksc2V0VGltZW91dChmdW5jdGlvbigpe3QudGltZW91dCYmdC50aW1lb3V0LnJ1bm5pbmcmJmR0KGUudGltZXIpfSkpKX0sT249ZnVuY3Rpb24odCxlKXtpZighZS50b2FzdClyZXR1cm4gWihlLmFsbG93RW50ZXJLZXkpP3ZvaWQoRW4odCxlKXx8SGUoMCwtMSwxKSk6U24oKX0sRW49ZnVuY3Rpb24odCxlKXtyZXR1cm4gZS5mb2N1c0RlbnkmJnd0KHQuZGVueUJ1dHRvbik/KHQuZGVueUJ1dHRvbi5mb2N1cygpLCEwKTplLmZvY3VzQ2FuY2VsJiZ3dCh0LmNhbmNlbEJ1dHRvbik/KHQuY2FuY2VsQnV0dG9uLmZvY3VzKCksITApOiEoIWUuZm9jdXNDb25maXJtfHwhd3QodC5jb25maXJtQnV0dG9uKSkmJih0LmNvbmZpcm1CdXR0b24uZm9jdXMoKSwhMCl9LFNuPWZ1bmN0aW9uKCl7ZG9jdW1lbnQuYWN0aXZlRWxlbWVudCYmXCJmdW5jdGlvblwiPT10eXBlb2YgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyJiZkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKX07ZnVuY3Rpb24gVG4odCl7XCJmdW5jdGlvblwiPT10eXBlb2YgdC5kaWREZXN0cm95P3QuZGlkRGVzdHJveSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIHQub25EZXN0cm95JiZ0Lm9uRGVzdHJveSgpfWZ1bmN0aW9uIExuKHQpe2RlbGV0ZSB0LnBhcmFtcyxkZWxldGUgdGUua2V5ZG93bkhhbmRsZXIsZGVsZXRlIHRlLmtleWRvd25UYXJnZXQsRG4oVHQpLERuKENlKX12YXIgcW4sRG49ZnVuY3Rpb24odCl7Zm9yKHZhciBlIGluIHQpdFtlXT1uZXcgV2Vha01hcH0sSj1PYmplY3QuZnJlZXplKHtoaWRlTG9hZGluZzpwZSxkaXNhYmxlTG9hZGluZzpwZSxnZXRJbnB1dDpmdW5jdGlvbih0KXt2YXIgZT1UdC5pbm5lclBhcmFtcy5nZXQodHx8dGhpcyk7cmV0dXJuKHQ9VHQuZG9tQ2FjaGUuZ2V0KHR8fHRoaXMpKT9ldCh0LmNvbnRlbnQsZS5pbnB1dCk6bnVsbH0sY2xvc2U6QWUsY2xvc2VQb3B1cDpBZSxjbG9zZU1vZGFsOkFlLGNsb3NlVG9hc3Q6QWUsZW5hYmxlQnV0dG9uczpmdW5jdGlvbigpe1NlKHRoaXMsW1wiY29uZmlybUJ1dHRvblwiLFwiZGVueUJ1dHRvblwiLFwiY2FuY2VsQnV0dG9uXCJdLCExKX0sZGlzYWJsZUJ1dHRvbnM6ZnVuY3Rpb24oKXtTZSh0aGlzLFtcImNvbmZpcm1CdXR0b25cIixcImRlbnlCdXR0b25cIixcImNhbmNlbEJ1dHRvblwiXSwhMCl9LGVuYWJsZUlucHV0OmZ1bmN0aW9uKCl7cmV0dXJuIFRlKHRoaXMuZ2V0SW5wdXQoKSwhMSl9LGRpc2FibGVJbnB1dDpmdW5jdGlvbigpe3JldHVybiBUZSh0aGlzLmdldElucHV0KCksITApfSxzaG93VmFsaWRhdGlvbk1lc3NhZ2U6ZnVuY3Rpb24odCl7dmFyIGU9VHQuZG9tQ2FjaGUuZ2V0KHRoaXMpLG49VHQuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO1UoZS52YWxpZGF0aW9uTWVzc2FnZSx0KSxlLnZhbGlkYXRpb25NZXNzYWdlLmNsYXNzTmFtZT0kW1widmFsaWRhdGlvbi1tZXNzYWdlXCJdLG4uY3VzdG9tQ2xhc3MmJm4uY3VzdG9tQ2xhc3MudmFsaWRhdGlvbk1lc3NhZ2UmJnZ0KGUudmFsaWRhdGlvbk1lc3NhZ2Usbi5jdXN0b21DbGFzcy52YWxpZGF0aW9uTWVzc2FnZSkscnQoZS52YWxpZGF0aW9uTWVzc2FnZSksKGU9dGhpcy5nZXRJbnB1dCgpKSYmKGUuc2V0QXR0cmlidXRlKFwiYXJpYS1pbnZhbGlkXCIsITApLGUuc2V0QXR0cmlidXRlKFwiYXJpYS1kZXNjcmliZWRCeVwiLCRbXCJ2YWxpZGF0aW9uLW1lc3NhZ2VcIl0pLG50KGUpLHZ0KGUsJC5pbnB1dGVycm9yKSl9LHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2U6ZnVuY3Rpb24oKXt2YXIgdD1UdC5kb21DYWNoZS5nZXQodGhpcyk7dC52YWxpZGF0aW9uTWVzc2FnZSYmYXQodC52YWxpZGF0aW9uTWVzc2FnZSksKHQ9dGhpcy5nZXRJbnB1dCgpKSYmKHQucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1pbnZhbGlkXCIpLHQucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1kZXNjcmliZWRCeVwiKSxidCh0LCQuaW5wdXRlcnJvcikpfSxnZXRQcm9ncmVzc1N0ZXBzOmZ1bmN0aW9uKCl7cmV0dXJuIFR0LmRvbUNhY2hlLmdldCh0aGlzKS5wcm9ncmVzc1N0ZXBzfSxfbWFpbjpmdW5jdGlvbih0KXt2YXIgZT0xPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e307cmV0dXJuIGFlKHUoe30sZSx0KSksdGUuY3VycmVudEluc3RhbmNlJiZ0ZS5jdXJyZW50SW5zdGFuY2UuX2Rlc3Ryb3koKSx0ZS5jdXJyZW50SW5zdGFuY2U9dGhpcyxEZSh0PUFuKHQsZSkpLE9iamVjdC5mcmVlemUodCksdGUudGltZW91dCYmKHRlLnRpbWVvdXQuc3RvcCgpLGRlbGV0ZSB0ZS50aW1lb3V0KSxjbGVhclRpbWVvdXQodGUucmVzdG9yZUZvY3VzVGltZW91dCksZT1Cbih0aGlzKSxVdCh0aGlzLHQpLFR0LmlubmVyUGFyYW1zLnNldCh0aGlzLHQpLHhuKHRoaXMsZSx0KX0sdXBkYXRlOmZ1bmN0aW9uKGUpe3ZhciB0PUEoKSxuPVR0LmlubmVyUGFyYW1zLmdldCh0aGlzKTtpZighdHx8Rih0LG4uaGlkZUNsYXNzLnBvcHVwKSlyZXR1cm4gVyhcIllvdSdyZSB0cnlpbmcgdG8gdXBkYXRlIHRoZSBjbG9zZWQgb3IgY2xvc2luZyBwb3B1cCwgdGhhdCB3b24ndCB3b3JrLiBVc2UgdGhlIHVwZGF0ZSgpIG1ldGhvZCBpbiBwcmVDb25maXJtIHBhcmFtZXRlciBvciBzaG93IGEgbmV3IHBvcHVwLlwiKTt2YXIgbz17fTtPYmplY3Qua2V5cyhlKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe01uLmlzVXBkYXRhYmxlUGFyYW1ldGVyKHQpP29bdF09ZVt0XTpXKCdJbnZhbGlkIHBhcmFtZXRlciB0byB1cGRhdGU6IFwiJy5jb25jYXQodCwnXCIuIFVwZGF0YWJsZSBwYXJhbXMgYXJlIGxpc3RlZCBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvYmxvYi9tYXN0ZXIvc3JjL3V0aWxzL3BhcmFtcy5qc1xcblxcbklmIHlvdSB0aGluayB0aGlzIHBhcmFtZXRlciBzaG91bGQgYmUgdXBkYXRhYmxlLCByZXF1ZXN0IGl0IGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9pc3N1ZXMvbmV3P3RlbXBsYXRlPTAyX2ZlYXR1cmVfcmVxdWVzdC5tZCcpKX0pLG49dSh7fSxuLG8pLFV0KHRoaXMsbiksVHQuaW5uZXJQYXJhbXMuc2V0KHRoaXMsbiksT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcyx7cGFyYW1zOnt2YWx1ZTp1KHt9LHRoaXMucGFyYW1zLGUpLHdyaXRhYmxlOiExLGVudW1lcmFibGU6ITB9fSl9LF9kZXN0cm95OmZ1bmN0aW9uKCl7dmFyIHQ9VHQuZG9tQ2FjaGUuZ2V0KHRoaXMpLGU9VHQuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO2UmJih0LnBvcHVwJiZ0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2smJih0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2soKSxkZWxldGUgdGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrKSx0ZS5kZWZlckRpc3Bvc2FsVGltZXImJihjbGVhclRpbWVvdXQodGUuZGVmZXJEaXNwb3NhbFRpbWVyKSxkZWxldGUgdGUuZGVmZXJEaXNwb3NhbFRpbWVyKSxUbihlKSxMbih0aGlzKSl9fSksam49ZnVuY3Rpb24oKXtmdW5jdGlvbiBpKCl7aWYoYSh0aGlzLGkpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cpe1widW5kZWZpbmVkXCI9PXR5cGVvZiBQcm9taXNlJiZLKFwiVGhpcyBwYWNrYWdlIHJlcXVpcmVzIGEgUHJvbWlzZSBsaWJyYXJ5LCBwbGVhc2UgaW5jbHVkZSBhIHNoaW0gdG8gZW5hYmxlIGl0IGluIHRoaXMgYnJvd3NlciAoU2VlOiBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvd2lraS9NaWdyYXRpb24tZnJvbS1Td2VldEFsZXJ0LXRvLVN3ZWV0QWxlcnQyIzEtaWUtc3VwcG9ydClcIikscW49dGhpcztmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxlPW5ldyBBcnJheSh0KSxuPTA7bjx0O24rKyllW25dPWFyZ3VtZW50c1tuXTt2YXIgbz1PYmplY3QuZnJlZXplKHRoaXMuY29uc3RydWN0b3IuYXJnc1RvUGFyYW1zKGUpKTtPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLHtwYXJhbXM6e3ZhbHVlOm8sd3JpdGFibGU6ITEsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9fSk7bz10aGlzLl9tYWluKHRoaXMucGFyYW1zKTtUdC5wcm9taXNlLnNldCh0aGlzLG8pfX1yZXR1cm4gcyhpLFt7a2V5OlwidGhlblwiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiBUdC5wcm9taXNlLmdldCh0aGlzKS50aGVuKHQpfX0se2tleTpcImZpbmFsbHlcIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gVHQucHJvbWlzZS5nZXQodGhpcykuZmluYWxseSh0KX19XSksaX0oKTt1KGpuLnByb3RvdHlwZSxKKSx1KGpuLGRlKSxPYmplY3Qua2V5cyhKKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2puW3RdPWZ1bmN0aW9uKCl7aWYocW4pcmV0dXJuIHFuW3RdLmFwcGx5KHFuLGFyZ3VtZW50cyl9fSksam4uRGlzbWlzc1JlYXNvbj1RLGpuLnZlcnNpb249XCIxMC4xNi45XCI7dmFyIE1uPWpuO3JldHVybiBNbi5kZWZhdWx0PU1ufSksdm9pZCAwIT09dGhpcyYmdGhpcy5Td2VldGFsZXJ0MiYmKHRoaXMuc3dhbD10aGlzLnN3ZWV0QWxlcnQ9dGhpcy5Td2FsPXRoaXMuU3dlZXRBbGVydD10aGlzLlN3ZWV0YWxlcnQyKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIFJhbmRFeHBcclxud2luZG93LlJhbmRFeHAgPSByZXF1aXJlKFwibm9kZV9tb2R1bGVzL3JhbmRleHBcIik7XHJcblxyXG4vLyBVdGlsaXRpZXNcclxucmVxdWlyZShcIi4uLy4uL2pzL3V0aWwvY29weS10by1jbGlwYm9hcmQuanNcIik7XHJcblxyXG4vLyBBY3R1YWwgU2NyaXB0c1xyXG5yZXF1aXJlKCcuL2luZGV4LmpzJyk7XHJcbiJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJTd2FsIiwicmVxdWlyZSIsIiQiLCJkb2N1bWVudCIsIm9uIiwiZSIsImVsZW1lbnQiLCJjdXJyZW50VGFyZ2V0IiwidGVtcCIsImFwcGVuZCIsInRleHRUb0NvcHkiLCJhdHRyIiwidmFsIiwibGVuZ3RoIiwidGV4dCIsInRyaWdnZXIiLCJleGVjQ29tbWFuZCIsInJlbW92ZSIsImZpcmUiLCJ0aXRsZSIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0b2FzdCIsInRpbWVyIiwiYmFja2dyb3VuZCIsImN1c3RvbUNsYXNzIiwicG9wdXAiLCJ3aWR0aCIsIlN3YWxGbGFzaCIsIl9jbGFzc0NhbGxDaGVjayIsIkVycm9yIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJlcnJvciIsIm1zZyIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsImhhc19pY29uIiwicG9zIiwiaGFzX3RpbWVyIiwiZHVyYXRpb24iLCJfY2xhc3NTdGF0aWNQcml2YXRlTWV0aG9kR2V0IiwiX3NlbmRFdmVudCIsImNhbGwiLCJmbGFzaF9lcnJvciIsIm1lc3NhZ2UiLCJpc190b2FzdCIsImluZm8iLCJmbGFzaF9pbmZvIiwic3VjY2VzcyIsImZsYXNoX3N1Y2Nlc3MiLCJ0eXBlIiwicGFyYW1zIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiZGVmYXVsdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmbGFzaCIsIm9wdGlvbnMiLCJjb25jYXQiLCJjb250ZW50Iiwic2hvd0NsYXNzIiwiaGlkZUNsYXNzIiwiX19zZXRTd2FsRmxhc2hPcHRpb25zIiwiaW5pdENoYW5nZSIsIkFycmF5IiwicHJvdG90eXBlIiwidW5pcSIsInNlZW4iLCJvdXQiLCJqIiwiaSIsIml0ZW0iLCJNZXNzYWdlQmFnIiwibWVzc2FnZXMiLCJPYmplY3QiLCJjcmVhdGUiLCJfY2xhc3NQcml2YXRlRmllbGRJbml0U3BlYyIsIl9tZXNzYWdlIiwid3JpdGFibGUiLCJfY2xhc3NQcml2YXRlRmllbGRTZXQiLCJhZGQiLCJzcGxpdCIsImZpZWxkIiwiX2NsYXNzUHJpdmF0ZUZpZWxkR2V0IiwibWVyZ2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJhc3NpZ24iLCJnZXQiLCJoYXMiLCJmaWVsZHMiLCJpbmNsdWRlcyIsImtleXMiLCJmaXJzdCIsIlJ1bGUiLCJ2YWxpZGF0b3JWYWx1ZXMiLCJfZGVmaW5lUHJvcGVydHkiLCJyZXBsYWNlQWxsIiwiX2ZpZWxkIiwiX3ZhbHVlIiwiX3ZhbGlkYXRvclZhbHVlcyIsInZhbGlkYXRlIiwiUmVxdWlyZWQiLCJfUnVsZSIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl92YWxpZCIsInZhbGlkIiwicnVuT3RoZXJWYWxpZGF0aW9uIiwiUmVxdWlyZWRJZiIsIl9SZXF1aXJlZCIsIl9zdXBlcjIiLCJfdHlwZW9mIiwiX3RoaXMkX3ZhbGlkYXRvclZhbHVlIiwiX3NsaWNlZFRvQXJyYXkiLCJmaWVsZDIiLCJ2YWwyIiwidmFsMyIsIl9nZXQiLCJfZ2V0UHJvdG90eXBlT2YiLCJTb21ldGltZXMiLCJfUnVsZTIiLCJfc3VwZXIzIiwiQm9vbGVhbiIsIl9SdWxlMyIsIl9Cb29sZWFuIiwiX3N1cGVyNCIsInRvTG93ZXJDYXNlIiwiTnVtZXJpYyIsIl9SdWxlNCIsIl9zdXBlcjUiLCJpc0RlY2ltYWwiLCJjb252ZXJ0ZWQiLCJwYXJzZUZsb2F0IiwicGFyc2VJbnQiLCJpc05hTiIsIk1pbiIsIl9SdWxlNSIsIl9zdXBlcjYiLCJ0b1N0cmluZyIsIk1heCIsIl9SdWxlNiIsIl9zdXBlcjciLCJCZXR3ZWVuIiwiX1J1bGU3IiwiX3N1cGVyOCIsIl9SdWxlOCIsIl9BcnJheSIsIl9zdXBlcjkiLCJJbiIsIl9SdWxlOSIsIl9zdXBlcjEwIiwiTnVsbGFibGUiLCJfUnVsZTEwIiwiX3N1cGVyMTEiLCJTdHJpbmciLCJfUnVsZTExIiwiX1N0cmluZyIsIl9zdXBlcjEyIiwiX3Jlc3BvbnNlIiwicmVzcG9uc2UiLCJtYXRjaCIsIlVuaXF1ZUFycmF5IiwiUnVsZXMiLCJfYXJyRmllbGRzSW5kZXgiLCJXZWFrTWFwIiwiX2NoZWNrZWRGaWVsZHMiLCJfZmllbGROYW1lcyIsIl92YWx1ZUxpc3QiLCJfcnVsZUxpc3QiLCJfbWVzc2FnZUxpc3QiLCJfZXJyb3JzIiwiX3ZhbGlkYXRlZCIsIl9mYWlsZWQiLCJfdmFsaWRhdGlvbkRvbmUiLCJfcnVuVmFsaWRhdGlvbiIsIldlYWtTZXQiLCJfdmFsaWRhdGVGaWVsZCIsIl9pc0ZpZWxkQXJyYXkiLCJWYWxpZGF0b3IiLCJ2YWx1ZXMiLCJydWxlcyIsIl9jbGFzc1ByaXZhdGVNZXRob2RJbml0U3BlYyIsImZhaWxzIiwiX2NsYXNzUHJpdmF0ZU1ldGhvZEdldCIsIl9ydW5WYWxpZGF0aW9uMiIsImVycm9ycyIsImludmFsaWRGaWVsZHMiLCJ2YWxpZEZpZWxkcyIsIl90aGlzIiwiX2xvb3AiLCJrIiwiX09iamVjdCRrZXlzIiwiX2kiLCJpbmRleCIsIl9mZXRjaFJ1bGVzIiwiX2ZldGNoTWVzc2FnZXMiLCJfdmFsaWRhdGVGaWVsZDIiLCJzcGxpY2UiLCJpbmRleE9mIiwicnVsZUluZGV4IiwiZm9yRWFjaCIsInYiLCJydWxlIiwicHVzaCIsIm9iaiIsImlzQXJyYXlDb250YWluZXIiLCJzdWJzdHIiLCJsYXN0SW5kZXhPZiIsImFkZGl0aW9uYWxSdWxlcyIsImFkZGl0aW9uYWxNZXNzYWdlcyIsImlzQXJyYXkiLCJjbG9zdXJlSW5kZXgiLCJ2YWxpZGF0aW9uUmVzdWx0IiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsIm9nUnVsZSIsInJ1bGVUeXBlIiwic3BsaWNlZFJ1bGUiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwiciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJlcnIiLCJmIiwicnVsZU5hbWUiLCJjdXN0b21SdWxlIiwiY29uc29sZSIsIndhcm4iLCJzb3J0IiwidGFyZ2V0SyIsInRhcmdldFYiLCJfaXNGaWVsZEFycmF5MiIsInZhbGlkYXRpb24iLCJyYW5nZSIsImZpeGVkIiwicHJvcCIsImZpbmQiLCJyZW1vdmVDbGFzcyIsInRhcmdldCIsIm5ld01pbiIsIm5ld01heCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicmVzZXQiLCJjbG9zZXN0IiwiYnRuIiwiY29sbGFwc2VyIiwib3RoZXJzIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsInNldFRpbWVvdXQiLCJjb2xsYXBzZSIsImZvcm0iLCJub3QiLCJ2YWxpZHMiLCJpbnZhbGlkcyIsInNlcmlhbGl6ZUZvcm1KU09OIiwidmFyaWFibGVSdWxlIiwiX3ZhcmlhYmxlUnVsZSIsInRhcmdldEtleSIsInJlcGxhY2UiLCJ2YWxpZGF0b3IiLCJlYWNoIiwidmFsaWRhdGlvbk1zZ0ZpZWxkcyIsImNoYXJzIiwicmVnZXgiLCJ1c2VfcmFuZ2UiLCJyYW5nZV9taW4iLCJyYW5nZV9tYXgiLCJSYW5kRXhwIiwiZ2VuIiwicmVzdG9yZUFwcGVuZFRhcmdldCIsInJlc3RvcmUiXSwic291cmNlUm9vdCI6IiJ9
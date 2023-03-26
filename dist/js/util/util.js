/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/util/serialize-form-json/serialize-form-json.js":
/*!****************************************************************!*\
  !*** ./src/js/util/serialize-form-json/serialize-form-json.js ***!
  \****************************************************************/
/***/ (() => {

(function ($) {
  $.fn.serializeFormJSON = function () {
    var jsonForm = {};
    var a = this.serializeArray();
    var indexes = {};
    $.each(a, function () {
      if (this.name.match(/(\[\])/gi)) {
        this.name = this.name.replaceAll(/(\[\])/gi, "");
      }
      if (jsonForm[this.name]) {
        if (!jsonForm[this.name].push) {
          jsonForm[this.name] = [jsonForm[this.name]];
        }
        jsonForm[this.name].push(this.value || '');
      } else {
        jsonForm[this.name] = this.value || '';
      }
    });
    return jsonForm;
  };
})(jQuery);
// (C) gabrieleromanato @ https://jsfiddle.net/gabrieleromanato/bynaK/

/***/ }),

/***/ "./src/js/util/unique-array/unique-array.js":
/*!**************************************************!*\
  !*** ./src/js/util/unique-array/unique-array.js ***!
  \**************************************************/
/***/ (() => {

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

/***/ }),

/***/ "./src/js/util/util.js":
/*!*****************************!*\
  !*** ./src/js/util/util.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./unique-array/unique-array */ "./src/js/util/unique-array/unique-array.js");
__webpack_require__(/*! ./serialize-form-json/serialize-form-json */ "./src/js/util/serialize-form-json/serialize-form-json.js");

/***/ }),

/***/ "./src/sass/password.scss":
/*!********************************!*\
  !*** ./src/sass/password.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/js/util/util": 0,
/******/ 			"dist/css/password/password": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgenerators"] = self["webpackChunkgenerators"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/css/password/password"], () => (__webpack_require__("./src/js/util/util.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/css/password/password"], () => (__webpack_require__("./src/sass/password.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWpEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZW5lcmF0b3JzLy4vc3JjL2pzL3V0aWwvc2VyaWFsaXplLWZvcm0tanNvbi9zZXJpYWxpemUtZm9ybS1qc29uLmpzIiwid2VicGFjazovL2dlbmVyYXRvcnMvLi9zcmMvanMvdXRpbC91bmlxdWUtYXJyYXkvdW5pcXVlLWFycmF5LmpzIiwid2VicGFjazovL2dlbmVyYXRvcnMvLi9zcmMvanMvdXRpbC91dGlsLmpzIiwid2VicGFjazovL2dlbmVyYXRvcnMvLi9zcmMvc2Fzcy9wYXNzd29yZC5zY3NzPzRjYTciLCJ3ZWJwYWNrOi8vZ2VuZXJhdG9ycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nZW5lcmF0b3JzL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vZ2VuZXJhdG9ycy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dlbmVyYXRvcnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nZW5lcmF0b3JzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2dlbmVyYXRvcnMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9nZW5lcmF0b3JzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9nZW5lcmF0b3JzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCQpIHtcclxuXHQkLmZuLnNlcmlhbGl6ZUZvcm1KU09OID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyIGpzb25Gb3JtID0ge307XHJcblx0XHR2YXIgYSA9IHRoaXMuc2VyaWFsaXplQXJyYXkoKTtcclxuXHRcdHZhciBpbmRleGVzID0ge307XHJcblxyXG5cdFx0JC5lYWNoKGEsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHRoaXMubmFtZS5tYXRjaCgvKFxcW1xcXSkvZ2kpKSB7XHJcblx0XHRcdFx0dGhpcy5uYW1lID0gdGhpcy5uYW1lLnJlcGxhY2VBbGwoLyhcXFtcXF0pL2dpLCBcIlwiKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGpzb25Gb3JtW3RoaXMubmFtZV0pIHtcclxuXHRcdFx0XHRpZiAoIWpzb25Gb3JtW3RoaXMubmFtZV0ucHVzaCkge1xyXG5cdFx0XHRcdFx0anNvbkZvcm1bdGhpcy5uYW1lXSA9IFtqc29uRm9ybVt0aGlzLm5hbWVdXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0anNvbkZvcm1bdGhpcy5uYW1lXS5wdXNoKHRoaXMudmFsdWUgfHwgJycpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGpzb25Gb3JtW3RoaXMubmFtZV0gPSB0aGlzLnZhbHVlIHx8ICcnO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBqc29uRm9ybTtcclxuXHR9O1xyXG59KShqUXVlcnkpO1xyXG4vLyAoQykgZ2FicmllbGVyb21hbmF0byBAIGh0dHBzOi8vanNmaWRkbGUubmV0L2dhYnJpZWxlcm9tYW5hdG8vYnluYUsvIiwiQXJyYXkucHJvdG90eXBlLnVuaXEgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgc2VlbiA9IHt9O1xyXG5cdHZhciBvdXQgPSBbXTtcclxuXHR2YXIgaiA9IDA7XHJcblx0XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdCB2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHQgaWYoc2VlbltpdGVtXSAhPT0gMSkge1xyXG5cdFx0XHQgICBzZWVuW2l0ZW1dID0gMTtcclxuXHRcdFx0ICAgb3V0W2orK10gPSBpdGVtO1xyXG5cdFx0IH1cclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIG91dDtcclxufSIsInJlcXVpcmUoXCIuL3VuaXF1ZS1hcnJheS91bmlxdWUtYXJyYXlcIik7XHJcbnJlcXVpcmUoXCIuL3NlcmlhbGl6ZS1mb3JtLWpzb24vc2VyaWFsaXplLWZvcm0tanNvblwiKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCIvZGlzdC9qcy91dGlsL3V0aWxcIjogMCxcblx0XCJkaXN0L2Nzcy9wYXNzd29yZC9wYXNzd29yZFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtnZW5lcmF0b3JzXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2dlbmVyYXRvcnNcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJkaXN0L2Nzcy9wYXNzd29yZC9wYXNzd29yZFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy91dGlsL3V0aWwuanNcIikpKVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJkaXN0L2Nzcy9wYXNzd29yZC9wYXNzd29yZFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zYXNzL3Bhc3N3b3JkLnNjc3NcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyIkIiwiZm4iLCJzZXJpYWxpemVGb3JtSlNPTiIsImpzb25Gb3JtIiwiYSIsInNlcmlhbGl6ZUFycmF5IiwiaW5kZXhlcyIsImVhY2giLCJuYW1lIiwibWF0Y2giLCJyZXBsYWNlQWxsIiwicHVzaCIsInZhbHVlIiwialF1ZXJ5IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJ1bmlxIiwic2VlbiIsIm91dCIsImoiLCJpIiwibGVuZ3RoIiwiaXRlbSIsInJlcXVpcmUiXSwic291cmNlUm9vdCI6IiJ9
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/aside.js":
/*!*********************!*\
  !*** ./js/aside.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAsideItemsContainers: () => (/* binding */ createAsideItemsContainers),
/* harmony export */   switchAside: () => (/* binding */ switchAside)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./js/constants.js");


// 侧边栏选项创建
function createAsideItemsContainers() {
  var asideContainerElement = document.getElementsByClassName('aside-list')[0];
  _constants_js__WEBPACK_IMPORTED_MODULE_0__.asideListItems.forEach(function (items) {
    var asideListItemContainer = document.createElement('div');
    asideListItemContainer.className = 'aside-list-item-container';
    items.forEach(function (item) {
      var asideListItem = document.createElement('a');
      asideListItem.href = item.href;
      asideListItem.textContent = item.text;
      asideListItemContainer.appendChild(asideListItem);
    });
    asideContainerElement.appendChild(asideListItemContainer);
  });
}

// 侧边栏切换
function switchAside() {
  var asideButtons = document.getElementsByClassName('aside-button');
  var overlay = document.getElementsByClassName('overlay')[0];
  var asideList = document.getElementsByClassName('aside-list')[0];
  var toggleAside = function toggleAside() {
    overlay.classList.toggle('overlay-open');
    asideList.classList.toggle('aside-open');
    document.body.classList.toggle('no-scroll');
  };
  Array.from(asideButtons).forEach(function (asideButton) {
    asideButton.onclick = toggleAside;
  });
  overlay.onclick = toggleAside;
}

/***/ }),

/***/ "./js/constants.js":
/*!*************************!*\
  !*** ./js/constants.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JSONconfig: () => (/* binding */ JSONconfig),
/* harmony export */   asideListItems: () => (/* binding */ asideListItems),
/* harmony export */   filePath: () => (/* binding */ filePath),
/* harmony export */   pictureconfig: () => (/* binding */ pictureconfig),
/* harmony export */   searchconfig: () => (/* binding */ searchconfig)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// ------------constants------------

// 图片信息文件的相对路径
var filePath = '../json/image.json';
// 侧边栏列表选项
var asideListItems = [[{
  href: 'main.html',
  text: '首页'
}, {
  href: 'gallery.html',
  text: 'Pising'
}, {
  href: 'imageList.html',
  text: '插画列表'
}, {
  href: 'MiyU.html',
  text: 'MiyU专栏'
}], [{
  href: 'https://www.pixiv.net',
  text: 'Pixiv'
}, {
  href: 'https://arcwiki.mcd.blue',
  text: 'Arcaea'
}], [{
  href: 'https://dylanyu233.rbind.io',
  text: '友情链接1'
}, {
  href: 'https://github.com/MrRightXingYue',
  text: '友情链接2'
}, {
  href: 'home.html',
  text: '我的'
}]];
// ------------config------------

// JSON文件配置
var JSONconfig = {
  // 存储读取到的图片数据
  JSONFolder: fetchJSON(),
  // 图片数量
  dataNum: 60
};
// 内容加载配置
var pictureconfig = {
  // 每次需加载的内容数量
  n: 8,
  // 当前加载到的内容索引
  currentIndex: 0,
  // 内容选择判断条件
  flag: "MiyU",
  // 符合条件内容数目
  count: 0
};
// 搜索配置
var searchconfig = {
  // 搜索框输入值
  searchContest: ""
};
// ------------function------------

// 获取图片信息文件
function fetchJSON() {
  return _fetchJSON.apply(this, arguments);
}
function _fetchJSON() {
  _fetchJSON = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var response, pictureFolder;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch(filePath);
        case 3:
          response = _context.sent;
          if (response.ok) {
            _context.next = 6;
            break;
          }
          throw new Error('网络响应不正常');
        case 6:
          _context.next = 8;
          return response.json();
        case 8:
          pictureFolder = _context.sent;
          return _context.abrupt("return", pictureFolder);
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.error('Error fetching JSON:', _context.t0);
          return _context.abrupt("return", null);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 12]]);
  }));
  return _fetchJSON.apply(this, arguments);
}

/***/ }),

/***/ "./js/header.js":
/*!**********************!*\
  !*** ./js/header.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addSearchRules: () => (/* binding */ addSearchRules)
/* harmony export */ });
// 添加搜索栏规则
function addSearchRules() {
  // 搜索框默认文本切换
  var searchPlaceholder = document.getElementsByClassName('search-text')[0];
  var originalPlaceholder = searchPlaceholder.placeholder;
  // 获得焦点
  searchPlaceholder.addEventListener('focus', function () {
    searchPlaceholder.placeholder = '仅支持搜索作者';
  });
  // 失去焦点
  searchPlaceholder.addEventListener('blur', function () {
    searchPlaceholder.placeholder = originalPlaceholder;
  });

  // 搜索栏搜索跳转
  var searchText = document.getElementsByClassName('search-text')[0];
  searchText.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      var searchContest = searchText.value;
      window.location.href = "search.html?name=".concat(encodeURIComponent(searchContest));
    }
  });
}

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
/*!********************!*\
  !*** ./js/body.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aside_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aside.js */ "./js/aside.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./js/header.js");


document.addEventListener('DOMContentLoaded', function () {
  main();
});
function main() {
  // create add items containers
  (0,_aside_js__WEBPACK_IMPORTED_MODULE_0__.createAsideItemsContainers)();
  // create footer text
  createFooterText();
  // create up-to-top button
  createUpToTopButton();
  // switch aside
  (0,_aside_js__WEBPACK_IMPORTED_MODULE_0__.switchAside)();
  // add search rule
  (0,_header_js__WEBPACK_IMPORTED_MODULE_1__.addSearchRules)();
  // add global event listeners
  addGlobalEventListeners();
}

// 创建页脚信息
function createFooterText() {
  var footerElement = document.createElement('b');
  footerElement.innerHTML = '&copy; 2024 画廊';
  document.getElementById('footer').appendChild(footerElement);
}

// 创建置顶按钮
function createUpToTopButton() {
  // 创建置顶按钮容器
  var containerElement = document.createElement('div');
  containerElement.id = 'up-to-top';
  // 创建置顶按钮
  var upToTopElement = document.createElement('button');
  upToTopElement.id = 'up-to-top-button';
  upToTopElement.title = 'up-to-top-button';
  upToTopElement.type = 'button';
  upToTopElement.textContent = ' ';
  upToTopElement.disabled = true;
  containerElement.appendChild(upToTopElement);
  document.body.appendChild(containerElement);
  addupToTopButtonRules();
}

// 添加置顶按钮规则
function addupToTopButtonRules() {
  var containerElement = document.getElementById('up-to-top');
  var upToTopElement = document.getElementById('up-to-top-button');
  // 点击按钮时，平滑滚动至页面顶部
  upToTopElement.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      // 平滑滚动
      behavior: 'smooth'
    });
  });

  // 控制置顶按钮变化
  window.addEventListener('scroll', function () {
    // 如果页面向下滚动超过 300px，启用按钮；否则禁用按钮
    if (window.scrollY > 300) {
      containerElement.style.opacity = '1';
      upToTopElement.disabled = false;
    } else {
      containerElement.style.opacity = '0.5';
      upToTopElement.disabled = true;
    }
  });
}

// 添加全局事件监听器
function addGlobalEventListeners() {
  // 禁止拖动
  window.addEventListener('dragstart', function (event) {
    event.preventDefault();
  });

  // 禁止右键菜单
  window.addEventListener('contextmenu', function (event) {
    event.preventDefault();
  });

  // 禁止选中文字
  // window.addEventListener('selectstart', function (event) {
  //     event.preventDefault();
  // })
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFDaERBLEtBQUssQ0FBQ3lCLGNBQWMsQ0FBQyxDQUFDO0VBQ3hCLENBQUMsQ0FBQzs7RUFFRjtFQUNBO0VBQ0E7RUFDQTtBQUNGLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLXRlbXAvLi9qcy9hc2lkZS5qcyIsIndlYnBhY2s6Ly9ibG9nLXRlbXAvLi9qcy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vYmxvZy10ZW1wLy4vanMvaGVhZGVyLmpzIiwid2VicGFjazovL2Jsb2ctdGVtcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ibG9nLXRlbXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Jsb2ctdGVtcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Jsb2ctdGVtcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Jsb2ctdGVtcC8uL2pzL2JvZHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXNpZGVMaXN0SXRlbXMgfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XHJcblxyXG4vLyDkvqfovrnmoI/pgInpobnliJvlu7pcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFzaWRlSXRlbXNDb250YWluZXJzKCkge1xyXG4gIGNvbnN0IGFzaWRlQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FzaWRlLWxpc3QnKVswXTtcclxuICBhc2lkZUxpc3RJdGVtcy5mb3JFYWNoKChpdGVtcykgPT4ge1xyXG4gICAgY29uc3QgYXNpZGVMaXN0SXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYXNpZGVMaXN0SXRlbUNvbnRhaW5lci5jbGFzc05hbWUgPSAnYXNpZGUtbGlzdC1pdGVtLWNvbnRhaW5lcic7XHJcbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBjb25zdCBhc2lkZUxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICBhc2lkZUxpc3RJdGVtLmhyZWYgPSBpdGVtLmhyZWY7XHJcbiAgICAgIGFzaWRlTGlzdEl0ZW0udGV4dENvbnRlbnQgPSBpdGVtLnRleHQ7XHJcbiAgICAgIGFzaWRlTGlzdEl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoYXNpZGVMaXN0SXRlbSk7XHJcbiAgICB9KTtcclxuICAgIGFzaWRlQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChhc2lkZUxpc3RJdGVtQ29udGFpbmVyKTtcclxuICB9KVxyXG59XHJcblxyXG4vLyDkvqfovrnmoI/liIfmjaJcclxuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaEFzaWRlKCkge1xyXG4gIGNvbnN0IGFzaWRlQnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FzaWRlLWJ1dHRvbicpO1xyXG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvdmVybGF5JylbMF07XHJcbiAgY29uc3QgYXNpZGVMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYXNpZGUtbGlzdCcpWzBdO1xyXG4gIGNvbnN0IHRvZ2dsZUFzaWRlID0gKCkgPT4ge1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKCdvdmVybGF5LW9wZW4nKTtcclxuICAgIGFzaWRlTGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdhc2lkZS1vcGVuJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ25vLXNjcm9sbCcpO1xyXG4gIH07XHJcbiAgQXJyYXkuZnJvbShhc2lkZUJ1dHRvbnMpLmZvckVhY2goYXNpZGVCdXR0b24gPT4ge1xyXG4gICAgYXNpZGVCdXR0b24ub25jbGljayA9IHRvZ2dsZUFzaWRlO1xyXG4gIH0pO1xyXG4gIG92ZXJsYXkub25jbGljayA9IHRvZ2dsZUFzaWRlO1xyXG59XHJcbiIsIi8vIC0tLS0tLS0tLS0tLWNvbnN0YW50cy0tLS0tLS0tLS0tLVxyXG5cclxuLy8g5Zu+54mH5L+h5oGv5paH5Lu255qE55u45a+56Lev5b6EXHJcbmV4cG9ydCBjb25zdCBmaWxlUGF0aCA9ICcuLi9qc29uL2ltYWdlLmpzb24nO1xyXG4vLyDkvqfovrnmoI/liJfooajpgInpoblcclxuZXhwb3J0IGNvbnN0IGFzaWRlTGlzdEl0ZW1zID0gW1xyXG4gIFtcclxuICAgIHsgaHJlZjogJ21haW4uaHRtbCcsIHRleHQ6ICfpppbpobUnIH0sXHJcbiAgICB7IGhyZWY6ICdnYWxsZXJ5Lmh0bWwnLCB0ZXh0OiAnUGlzaW5nJyB9LFxyXG4gICAgeyBocmVmOiAnaW1hZ2VMaXN0Lmh0bWwnLCB0ZXh0OiAn5o+S55S75YiX6KGoJyB9LFxyXG4gICAgeyBocmVmOiAnTWl5VS5odG1sJywgdGV4dDogJ01peVXkuJPmoI8nIH1cclxuICBdLFxyXG4gIFtcclxuICAgIHsgaHJlZjogJ2h0dHBzOi8vd3d3LnBpeGl2Lm5ldCcsIHRleHQ6ICdQaXhpdicgfSxcclxuICAgIHsgaHJlZjogJ2h0dHBzOi8vYXJjd2lraS5tY2QuYmx1ZScsIHRleHQ6ICdBcmNhZWEnIH1cclxuICBdLFxyXG4gIFtcclxuICAgIHsgaHJlZjogJ2h0dHBzOi8vZHlsYW55dTIzMy5yYmluZC5pbycsIHRleHQ6ICflj4vmg4Xpk77mjqUxJyB9LFxyXG4gICAgeyBocmVmOiAnaHR0cHM6Ly9naXRodWIuY29tL01yUmlnaHRYaW5nWXVlJywgdGV4dDogJ+WPi+aDhemTvuaOpTInIH0sXHJcbiAgICB7IGhyZWY6ICdob21lLmh0bWwnLCB0ZXh0OiAn5oiR55qEJyB9XHJcbiAgXVxyXG5dO1xyXG4vLyAtLS0tLS0tLS0tLS1jb25maWctLS0tLS0tLS0tLS1cclxuXHJcbi8vIEpTT07mlofku7bphY3nva5cclxuZXhwb3J0IGNvbnN0IEpTT05jb25maWcgPSB7XHJcbiAgLy8g5a2Y5YKo6K+75Y+W5Yiw55qE5Zu+54mH5pWw5o2uXHJcbiAgSlNPTkZvbGRlcjogZmV0Y2hKU09OKCksXHJcbiAgLy8g5Zu+54mH5pWw6YePXHJcbiAgZGF0YU51bTogNjBcclxufTtcclxuLy8g5YaF5a655Yqg6L296YWN572uXHJcbmV4cG9ydCBjb25zdCBwaWN0dXJlY29uZmlnID0ge1xyXG4gIC8vIOavj+asoemcgOWKoOi9veeahOWGheWuueaVsOmHj1xyXG4gIG46IDgsXHJcbiAgLy8g5b2T5YmN5Yqg6L295Yiw55qE5YaF5a6557Si5byVXHJcbiAgY3VycmVudEluZGV4OiAwLFxyXG4gIC8vIOWGheWuuemAieaLqeWIpOaWreadoeS7tlxyXG4gIGZsYWc6IGBNaXlVYCxcclxuICAvLyDnrKblkIjmnaHku7blhoXlrrnmlbDnm65cclxuICBjb3VudDogMFxyXG59O1xyXG4vLyDmkJzntKLphY3nva5cclxuZXhwb3J0IGNvbnN0IHNlYXJjaGNvbmZpZyA9IHtcclxuICAvLyDmkJzntKLmoYbovpPlhaXlgLxcclxuICBzZWFyY2hDb250ZXN0OiBgYFxyXG59O1xyXG4vLyAtLS0tLS0tLS0tLS1mdW5jdGlvbi0tLS0tLS0tLS0tLVxyXG5cclxuLy8g6I635Y+W5Zu+54mH5L+h5oGv5paH5Lu2XHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoSlNPTigpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmaWxlUGF0aCk7XHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcign572R57uc5ZON5bqU5LiN5q2j5bi4Jyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwaWN0dXJlRm9sZGVyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIHBpY3R1cmVGb2xkZXI7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIEpTT046JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcbiIsIi8vIOa3u+WKoOaQnOe0ouagj+inhOWImVxyXG5leHBvcnQgZnVuY3Rpb24gYWRkU2VhcmNoUnVsZXMoKSB7XHJcbiAgLy8g5pCc57Si5qGG6buY6K6k5paH5pys5YiH5o2iXHJcbiAgY29uc3Qgc2VhcmNoUGxhY2Vob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWFyY2gtdGV4dCcpWzBdO1xyXG4gIGNvbnN0IG9yaWdpbmFsUGxhY2Vob2xkZXIgPSBzZWFyY2hQbGFjZWhvbGRlci5wbGFjZWhvbGRlcjtcclxuICAvLyDojrflvpfnhKbngrlcclxuICBzZWFyY2hQbGFjZWhvbGRlci5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcclxuICAgIHNlYXJjaFBsYWNlaG9sZGVyLnBsYWNlaG9sZGVyID0gJ+S7heaUr+aMgeaQnOe0ouS9nOiAhSc7XHJcbiAgfSk7XHJcbiAgLy8g5aSx5Y6754Sm54K5XHJcbiAgc2VhcmNoUGxhY2Vob2xkZXIuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcclxuICAgIHNlYXJjaFBsYWNlaG9sZGVyLnBsYWNlaG9sZGVyID0gb3JpZ2luYWxQbGFjZWhvbGRlcjtcclxuICB9KTtcclxuXHJcbiAgLy8g5pCc57Si5qCP5pCc57Si6Lez6L2sXHJcbiAgY29uc3Qgc2VhcmNoVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlYXJjaC10ZXh0JylbMF07XHJcbiAgc2VhcmNoVGV4dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICBjb25zdCBzZWFyY2hDb250ZXN0ID0gc2VhcmNoVGV4dC52YWx1ZTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgc2VhcmNoLmh0bWw/bmFtZT0ke2VuY29kZVVSSUNvbXBvbmVudChzZWFyY2hDb250ZXN0KX1gO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlQXNpZGVJdGVtc0NvbnRhaW5lcnMsIHN3aXRjaEFzaWRlIH0gZnJvbSAnLi9hc2lkZS5qcyc7XHJcbmltcG9ydCB7IGFkZFNlYXJjaFJ1bGVzIH0gZnJvbSAnLi9oZWFkZXIuanMnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBtYWluKCk7XHJcbn0pO1xyXG5mdW5jdGlvbiBtYWluKCkge1xyXG4gIC8vIGNyZWF0ZSBhZGQgaXRlbXMgY29udGFpbmVyc1xyXG4gIGNyZWF0ZUFzaWRlSXRlbXNDb250YWluZXJzKCk7XHJcbiAgLy8gY3JlYXRlIGZvb3RlciB0ZXh0XHJcbiAgY3JlYXRlRm9vdGVyVGV4dCgpO1xyXG4gIC8vIGNyZWF0ZSB1cC10by10b3AgYnV0dG9uXHJcbiAgY3JlYXRlVXBUb1RvcEJ1dHRvbigpO1xyXG4gIC8vIHN3aXRjaCBhc2lkZVxyXG4gIHN3aXRjaEFzaWRlKCk7XHJcbiAgLy8gYWRkIHNlYXJjaCBydWxlXHJcbiAgYWRkU2VhcmNoUnVsZXMoKTtcclxuICAvLyBhZGQgZ2xvYmFsIGV2ZW50IGxpc3RlbmVyc1xyXG4gIGFkZEdsb2JhbEV2ZW50TGlzdGVuZXJzKCk7XHJcbn1cclxuXHJcbi8vIOWIm+W7uumhteiEmuS/oeaBr1xyXG5mdW5jdGlvbiBjcmVhdGVGb290ZXJUZXh0KCkge1xyXG4gIGNvbnN0IGZvb3RlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdiJyk7XHJcbiAgZm9vdGVyRWxlbWVudC5pbm5lckhUTUwgPSAnJmNvcHk7IDIwMjQg55S75buKJztcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyJykuYXBwZW5kQ2hpbGQoZm9vdGVyRWxlbWVudCk7XHJcbn1cclxuXHJcbi8vIOWIm+W7uue9rumhtuaMiemSrlxyXG5mdW5jdGlvbiBjcmVhdGVVcFRvVG9wQnV0dG9uKCkge1xyXG4gIC8vIOWIm+W7uue9rumhtuaMiemSruWuueWZqFxyXG4gIGNvbnN0IGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWluZXJFbGVtZW50LmlkID0gJ3VwLXRvLXRvcCc7XHJcbiAgLy8g5Yib5bu6572u6aG25oyJ6ZKuXHJcbiAgY29uc3QgdXBUb1RvcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICB1cFRvVG9wRWxlbWVudC5pZCA9ICd1cC10by10b3AtYnV0dG9uJztcclxuICB1cFRvVG9wRWxlbWVudC50aXRsZSA9ICd1cC10by10b3AtYnV0dG9uJztcclxuICB1cFRvVG9wRWxlbWVudC50eXBlID0gJ2J1dHRvbic7XHJcbiAgdXBUb1RvcEVsZW1lbnQudGV4dENvbnRlbnQgPSAnICc7XHJcbiAgdXBUb1RvcEVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICBjb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHVwVG9Ub3BFbGVtZW50KTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lckVsZW1lbnQpO1xyXG5cclxuICBhZGR1cFRvVG9wQnV0dG9uUnVsZXMoKTtcclxufVxyXG5cclxuLy8g5re75Yqg572u6aG25oyJ6ZKu6KeE5YiZXHJcbmZ1bmN0aW9uIGFkZHVwVG9Ub3BCdXR0b25SdWxlcygpIHtcclxuICBjb25zdCBjb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwLXRvLXRvcCcpO1xyXG4gIGNvbnN0IHVwVG9Ub3BFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwLXRvLXRvcC1idXR0b24nKTtcclxuICAvLyDngrnlh7vmjInpkq7ml7bvvIzlubPmu5Hmu5rliqjoh7PpobXpnaLpobbpg6hcclxuICB1cFRvVG9wRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgLy8g5bmz5ruR5rua5YqoXHJcbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgfSk7XHJcbiAgfSlcclxuXHJcbiAgLy8g5o6n5Yi2572u6aG25oyJ6ZKu5Y+Y5YyWXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgIC8vIOWmguaenOmhtemdouWQkeS4i+a7muWKqOi2hei/hyAzMDBweO+8jOWQr+eUqOaMiemSru+8m+WQpuWImeemgeeUqOaMiemSrlxyXG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMzAwKSB7XHJcbiAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgdXBUb1RvcEVsZW1lbnQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG4gICAgICB1cFRvVG9wRWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOa3u+WKoOWFqOWxgOS6i+S7tuebkeWQrOWZqFxyXG5mdW5jdGlvbiBhZGRHbG9iYWxFdmVudExpc3RlbmVycygpIHtcclxuICAvLyDnpoHmraLmi5bliqhcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG5cclxuICAvLyDnpoHmraLlj7PplK7oj5zljZVcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIOemgeatoumAieS4reaWh+Wtl1xyXG4gIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3RzdGFydCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gIC8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIC8vIH0pXHJcbn1cclxuIl0sIm5hbWVzIjpbImFzaWRlTGlzdEl0ZW1zIiwiY3JlYXRlQXNpZGVJdGVtc0NvbnRhaW5lcnMiLCJhc2lkZUNvbnRhaW5lckVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJmb3JFYWNoIiwiaXRlbXMiLCJhc2lkZUxpc3RJdGVtQ29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIml0ZW0iLCJhc2lkZUxpc3RJdGVtIiwiaHJlZiIsInRleHRDb250ZW50IiwidGV4dCIsImFwcGVuZENoaWxkIiwic3dpdGNoQXNpZGUiLCJhc2lkZUJ1dHRvbnMiLCJvdmVybGF5IiwiYXNpZGVMaXN0IiwidG9nZ2xlQXNpZGUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJib2R5IiwiQXJyYXkiLCJmcm9tIiwiYXNpZGVCdXR0b24iLCJvbmNsaWNrIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiZmlsZVBhdGgiLCJKU09OY29uZmlnIiwiSlNPTkZvbGRlciIsImZldGNoSlNPTiIsImRhdGFOdW0iLCJwaWN0dXJlY29uZmlnIiwiY3VycmVudEluZGV4IiwiZmxhZyIsImNvdW50Iiwic2VhcmNoY29uZmlnIiwic2VhcmNoQ29udGVzdCIsIl9mZXRjaEpTT04iLCJfY2FsbGVlIiwicmVzcG9uc2UiLCJwaWN0dXJlRm9sZGVyIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImZldGNoIiwib2siLCJqc29uIiwidDAiLCJjb25zb2xlIiwiZXJyb3IiLCJhZGRTZWFyY2hSdWxlcyIsInNlYXJjaFBsYWNlaG9sZGVyIiwib3JpZ2luYWxQbGFjZWhvbGRlciIsInBsYWNlaG9sZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNlYXJjaFRleHQiLCJldmVudCIsImtleSIsIndpbmRvdyIsImxvY2F0aW9uIiwiY29uY2F0IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibWFpbiIsImNyZWF0ZUZvb3RlclRleHQiLCJjcmVhdGVVcFRvVG9wQnV0dG9uIiwiYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcnMiLCJmb290ZXJFbGVtZW50IiwiaW5uZXJIVE1MIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250YWluZXJFbGVtZW50IiwiaWQiLCJ1cFRvVG9wRWxlbWVudCIsInRpdGxlIiwiZGlzYWJsZWQiLCJhZGR1cFRvVG9wQnV0dG9uUnVsZXMiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwic2Nyb2xsWSIsInN0eWxlIiwib3BhY2l0eSIsInByZXZlbnREZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==
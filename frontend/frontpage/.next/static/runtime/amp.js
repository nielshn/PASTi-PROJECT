(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/runtime/amp.js"],{

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/unfetch.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/unfetch.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(JSON.parse(s.responseText))},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t}),t(a())},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null)})};
//# sourceMappingURL=unfetch.js.map


/***/ }),

/***/ "./node_modules/next/dist/client/dev/amp-dev.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/dev/amp-dev.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"));
var _eventSourcePolyfill = _interopRequireDefault(__webpack_require__(/*! ./event-source-polyfill */ "./node_modules/next/dist/client/dev/event-source-polyfill.js"));
var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");
var _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js");
var _fouc = __webpack_require__(/*! ./fouc */ "./node_modules/next/dist/client/dev/fouc.js"); /* globals __webpack_hash__ */
if (!window.EventSource) {
  window.EventSource = _eventSourcePolyfill["default"];
}
var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
var assetPrefix = data.assetPrefix,
  page = data.page;
assetPrefix = assetPrefix || '';
var mostRecentHash = null; /* eslint-disable-next-line */
var curHash = __webpack_require__.h();
var hotUpdatePath = assetPrefix + (assetPrefix.endsWith('/') ? '' : '/') + '_next/static/webpack/'; // Is there a newer version of this code available?
function isUpdateAvailable() {
  // __webpack_hash__ is the hash of the current compilation.
  // It's a global variable injected by Webpack.
  /* eslint-disable-next-line */
  return mostRecentHash !== __webpack_require__.h();
} // Webpack disallows updates in other states.
function canApplyUpdates() {
  return module.hot.status() === 'idle';
} // This function reads code updates on the fly and hard
// reloads the page when it has changed.
function tryApplyUpdates() {
  return _tryApplyUpdates.apply(this, arguments);
}
function _tryApplyUpdates() {
  _tryApplyUpdates = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var res, _data, curPage, pageUpdated;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(!isUpdateAvailable() || !canApplyUpdates())) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return");
        case 2:
          _context.prev = 2;
          _context.next = 5;
          return (0, _unfetch["default"])("".concat(hotUpdatePath).concat(curHash, ".hot-update.json"));
        case 5:
          res = _context.sent;
          _context.next = 8;
          return res.json();
        case 8:
          _data = _context.sent;
          curPage = page === '/' ? 'index' : page;
          pageUpdated = Object.keys(_data.c).some(function (mod) {
            return mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage))) !== -1 || mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage)).replace(/\//g, '\\')) !== -1;
          });
          if (pageUpdated) {
            document.location.reload(true);
          } else {
            curHash = mostRecentHash;
          }
          _context.next = 18;
          break;
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](2);
          console.error('Error occurred checking for update', _context.t0);
          document.location.reload(true);
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 14]]);
  }));
  return _tryApplyUpdates.apply(this, arguments);
}
(0, _eventsource.getEventSourceWrapper)({
  path: "".concat(assetPrefix, "/_next/webpack-hmr")
}).addMessageListener(function (event) {
  if (event.data === "\uD83D\uDC93") {
    return;
  }
  try {
    var message = JSON.parse(event.data);
    if (message.action === 'sync' || message.action === 'built') {
      if (!message.hash) {
        return;
      }
      mostRecentHash = message.hash;
      tryApplyUpdates();
    } else if (message.action === 'reloadPage') {
      document.location.reload(true);
    }
  } catch (ex) {
    console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
  }
});
(0, _onDemandEntriesUtils.setupPing)(assetPrefix, function () {
  return page;
});
(0, _fouc.displayContent)();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/eventsource.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getEventSourceWrapper = getEventSourceWrapper;
var eventCallbacks = [];
function EventSourceWrapper(options) {
  var source;
  var lastActivity = new Date();
  var listeners = [];
  if (!options.timeout) {
    options.timeout = 20 * 1000;
  }
  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);
  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }
  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }
  function handleMessage(event) {
    lastActivity = new Date();
    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }
    if (event.data.indexOf('action') !== -1) {
      eventCallbacks.forEach(function (cb) {
        return cb(event);
      });
    }
  }
  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }
  return {
    close: function close() {
      clearInterval(timer);
      source.close();
    },
    addMessageListener: function addMessageListener(fn) {
      listeners.push(fn);
    }
  };
}
_c = EventSourceWrapper;
function getEventSourceWrapper(options) {
  if (!options.ondemand) {
    return {
      addMessageListener: function addMessageListener(cb) {
        eventCallbacks.push(cb);
      }
    };
  }
  return EventSourceWrapper(options);
}
var _c;
$RefreshReg$(_c, "EventSourceWrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/event-source-polyfill.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/event-source-polyfill.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports["default"] = void 0;
var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js")); /* eslint-disable */ // Improved version of https://github.com/Yaffle/EventSource/
// Available under MIT License (MIT)
// Only tries to support IE11 and nothing below
var document = window.document;
var Response = window.Response;
var TextDecoder = window.TextDecoder;
var TextEncoder = window.TextEncoder;
var AbortController = window.AbortController;
if (AbortController == undefined) {
  AbortController = function AbortController() {
    this.signal = null;
    this.abort = function () {};
  };
}
function TextDecoderPolyfill() {
  this.bitsNeeded = 0;
  this.codePoint = 0;
}
_c = TextDecoderPolyfill;
TextDecoderPolyfill.prototype.decode = function (octets) {
  function valid(codePoint, shift, octetsCount) {
    if (octetsCount === 1) {
      return codePoint >= 0x0080 >> shift && codePoint << shift <= 0x07ff;
    }
    if (octetsCount === 2) {
      return codePoint >= 0x0800 >> shift && codePoint << shift <= 0xd7ff || codePoint >= 0xe000 >> shift && codePoint << shift <= 0xffff;
    }
    if (octetsCount === 3) {
      return codePoint >= 0x010000 >> shift && codePoint << shift <= 0x10ffff;
    }
    throw new Error();
  }
  function octetsCount(bitsNeeded, codePoint) {
    if (bitsNeeded === 6 * 1) {
      return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
    }
    if (bitsNeeded === 6 * 2) {
      return codePoint > 15 ? 3 : 2;
    }
    if (bitsNeeded === 6 * 3) {
      return 3;
    }
    throw new Error();
  }
  var REPLACER = 0xfffd;
  var string = '';
  var bitsNeeded = this.bitsNeeded;
  var codePoint = this.codePoint;
  for (var i = 0; i < octets.length; i += 1) {
    var octet = octets[i];
    if (bitsNeeded !== 0) {
      if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
        string += String.fromCharCode(codePoint);
      }
    }
    if (bitsNeeded === 0) {
      if (octet >= 0 && octet <= 127) {
        bitsNeeded = 0;
        codePoint = octet;
      } else if (octet >= 192 && octet <= 223) {
        bitsNeeded = 6 * 1;
        codePoint = octet & 31;
      } else if (octet >= 224 && octet <= 239) {
        bitsNeeded = 6 * 2;
        codePoint = octet & 15;
      } else if (octet >= 240 && octet <= 247) {
        bitsNeeded = 6 * 3;
        codePoint = octet & 7;
      } else {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
      if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
    } else {
      bitsNeeded -= 6;
      codePoint = codePoint << 6 | octet & 63;
    }
    if (bitsNeeded === 0) {
      if (codePoint <= 0xffff) {
        string += String.fromCharCode(codePoint);
      } else {
        string += String.fromCharCode(0xd800 + (codePoint - 0xffff - 1 >> 10));
        string += String.fromCharCode(0xdc00 + (codePoint - 0xffff - 1 & 0x3ff));
      }
    }
  }
  this.bitsNeeded = bitsNeeded;
  this.codePoint = codePoint;
  return string;
}; // Firefox < 38 throws an error with stream option
var supportsStreamOption = function supportsStreamOption() {
  try {
    return new TextDecoder().decode(new TextEncoder().encode('test'), {
      stream: true
    }) === 'test';
  } catch (error) {
    console.log(error);
  }
  return false;
}; // IE, Edge
if (TextDecoder == undefined || TextEncoder == undefined || !supportsStreamOption()) {
  TextDecoder = TextDecoderPolyfill;
}
var k = function k() {};
function XHRWrapper(xhr) {
  this.withCredentials = false;
  this.responseType = '';
  this.readyState = 0;
  this.status = 0;
  this.statusText = '';
  this.responseText = '';
  this.onprogress = k;
  this.onreadystatechange = k;
  this._contentType = '';
  this._xhr = xhr;
  this._sendTimeout = 0;
  this._abort = k;
}
_c2 = XHRWrapper;
XHRWrapper.prototype.open = function (method, url) {
  this._abort(true);
  var that = this;
  var xhr = this._xhr;
  var state = 1;
  var timeout = 0;
  this._abort = function (silent) {
    if (that._sendTimeout !== 0) {
      clearTimeout(that._sendTimeout);
      that._sendTimeout = 0;
    }
    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      xhr.onload = k;
      xhr.onerror = k;
      xhr.onabort = k;
      xhr.onprogress = k;
      xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event
      // Opera < 10: XMLHttpRequest#abort() does not fire any event
      xhr.abort();
      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }
      if (!silent) {
        that.readyState = 4;
        that.onreadystatechange();
      }
    }
    state = 0;
  };
  var onStart = function onStart() {
    if (state === 1) {
      // state = 2;
      var status = 0;
      var statusText = '';
      var contentType = undefined;
      if (!('contentType' in xhr)) {
        try {
          status = xhr.status;
          statusText = xhr.statusText;
          contentType = xhr.getResponseHeader('Content-Type');
        } catch (error) {
          // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
          // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
          // https://bugs.webkit.org/show_bug.cgi?id=29121
          status = 0;
          statusText = '';
          contentType = undefined; // Firefox < 14, Chrome ?, Safari ?
          // https://bugs.webkit.org/show_bug.cgi?id=29658
          // https://bugs.webkit.org/show_bug.cgi?id=77854
        }
      } else {
        status = 200;
        statusText = 'OK';
        contentType = xhr.contentType;
      }
      if (status !== 0) {
        state = 2;
        that.readyState = 2;
        that.status = status;
        that.statusText = statusText;
        that._contentType = contentType;
        that.onreadystatechange();
      }
    }
  };
  var onProgress = function onProgress() {
    onStart();
    if (state === 2 || state === 3) {
      state = 3;
      var responseText = '';
      try {
        responseText = xhr.responseText;
      } catch (error) {// IE 8 - 9 with XMLHttpRequest
      }
      that.readyState = 3;
      that.responseText = responseText;
      that.onprogress();
    }
  };
  var onFinish = function onFinish() {
    // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
    // IE 8 fires "onload" without "onprogress"
    onProgress();
    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }
      that.readyState = 4;
      that.onreadystatechange();
    }
  };
  var onReadyStateChange = function onReadyStateChange() {
    if (xhr != undefined) {
      // Opera 12
      if (xhr.readyState === 4) {
        onFinish();
      } else if (xhr.readyState === 3) {
        onProgress();
      } else if (xhr.readyState === 2) {
        onStart();
      }
    }
  };
  var onTimeout = function onTimeout() {
    timeout = setTimeout(function () {
      onTimeout();
    }, 500);
    if (xhr.readyState === 3) {
      onProgress();
    }
  }; // XDomainRequest#abort removes onprogress, onerror, onload
  xhr.onload = onFinish;
  xhr.onerror = onFinish; // improper fix to match Firefox behaviour, but it is better than just ignore abort
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
  // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
  // https://code.google.com/p/chromium/issues/detail?id=153570
  // IE 8 fires "onload" without "onprogress
  xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723
  if (!('sendAsBinary' in XMLHttpRequest.prototype) && !('mozAnon' in XMLHttpRequest.prototype)) {
    xhr.onprogress = onProgress;
  } // IE 8 - 9 (XMLHTTPRequest)
  // Opera < 12
  // Firefox < 3.5
  // Firefox 3.5 - 3.6 - ? < 9.0
  // onprogress is not fired sometimes or delayed
  // see also #64
  xhr.onreadystatechange = onReadyStateChange;
  if ('contentType' in xhr) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + 'padding=true';
  }
  xhr.open(method, url, true);
  if ('readyState' in xhr) {
    // workaround for Opera 12 issue with "progress" events
    // #91
    timeout = setTimeout(function () {
      onTimeout();
    }, 0);
  }
};
XHRWrapper.prototype.abort = function () {
  this._abort(false);
};
XHRWrapper.prototype.getResponseHeader = function (name) {
  return this._contentType;
};
XHRWrapper.prototype.setRequestHeader = function (name, value) {
  var xhr = this._xhr;
  if ('setRequestHeader' in xhr) {
    xhr.setRequestHeader(name, value);
  }
};
XHRWrapper.prototype.getAllResponseHeaders = function () {
  return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : '';
};
XHRWrapper.prototype.send = function () {
  // loading indicator in Safari < ? (6), Chrome < 14, Firefox
  if (!('ontimeout' in XMLHttpRequest.prototype) && document != undefined && document.readyState != undefined && document.readyState !== 'complete') {
    var that = this;
    that._sendTimeout = setTimeout(function () {
      that._sendTimeout = 0;
      that.send();
    }, 4);
    return;
  }
  var xhr = this._xhr; // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)
  xhr.withCredentials = this.withCredentials;
  xhr.responseType = this.responseType;
  try {
    // xhr.send(); throws "Not enough arguments" in Firefox 3.0
    xhr.send(undefined);
  } catch (error1) {
    // Safari 5.1.7, Opera 12
    throw error1;
  }
};
function toLowerCase(name) {
  return name.replace(/[A-Z]/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + 0x20);
  });
}
function HeadersPolyfill(all) {
  // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
  var map = Object.create(null);
  var array = all.split('\r\n');
  for (var i = 0; i < array.length; i += 1) {
    var line = array[i];
    var parts = line.split(': ');
    var name = parts.shift();
    var value = parts.join(': ');
    map[toLowerCase(name)] = value;
  }
  this._map = map;
}
_c3 = HeadersPolyfill;
HeadersPolyfill.prototype.get = function (name) {
  return this._map[toLowerCase(name)];
};
function XHRTransport() {}
_c4 = XHRTransport;
XHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  xhr.open('GET', url);
  var offset = 0;
  xhr.onprogress = function () {
    var responseText = xhr.responseText;
    var chunk = responseText.slice(offset);
    offset += chunk.length;
    onProgressCallback(chunk);
  };
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 2) {
      var status = xhr.status;
      var statusText = xhr.statusText;
      var contentType = xhr.getResponseHeader('Content-Type');
      var headers = xhr.getAllResponseHeaders();
      onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers), function () {
        xhr.abort();
      });
    } else if (xhr.readyState === 4) {
      onFinishCallback();
    }
  };
  xhr.withCredentials = withCredentials;
  xhr.responseType = 'text';
  for (var name in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, name)) {
      xhr.setRequestHeader(name, headers[name]);
    }
  }
  xhr.send();
};
function HeadersWrapper(headers) {
  this._headers = headers;
}
_c5 = HeadersWrapper;
HeadersWrapper.prototype.get = function (name) {
  return this._headers.get(name);
};
function FetchTransport() {}
_c6 = FetchTransport;
FetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  var controller = new AbortController();
  var signal = controller.signal; // see #120
  var textDecoder = new TextDecoder();
  (0, _unfetch["default"])(url, {
    headers: headers,
    credentials: withCredentials ? 'include' : 'same-origin',
    signal: signal,
    cache: 'no-store'
  }).then(function (response) {
    var reader = response.body.getReader();
    onStartCallback(response.status, response.statusText, response.headers.get('Content-Type'), new HeadersWrapper(response.headers), function () {
      controller.abort();
      reader.cancel();
    });
    return new Promise(function (resolve, reject) {
      var readNextChunk = function readNextChunk() {
        reader.read().then(function (result) {
          if (result.done) {
            // Note: bytes in textDecoder are ignored
            resolve(undefined);
          } else {
            var chunk = textDecoder.decode(result.value, {
              stream: true
            });
            onProgressCallback(chunk);
            readNextChunk();
          }
        })['catch'](function (error) {
          reject(error);
        });
      };
      readNextChunk();
    });
  }).then(function (result) {
    onFinishCallback();
    return result;
  }, function (error) {
    onFinishCallback();
    return Promise.reject(error);
  });
};
function EventTarget() {
  this._listeners = Object.create(null);
}
_c7 = EventTarget;
function throwError(e) {
  setTimeout(function () {
    throw e;
  }, 0);
}
EventTarget.prototype.dispatchEvent = function (event) {
  event.target = this;
  var typeListeners = this._listeners[event.type];
  if (typeListeners != undefined) {
    var length = typeListeners.length;
    for (var i = 0; i < length; i += 1) {
      var listener = typeListeners[i];
      try {
        if (typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (e) {
        throwError(e);
      }
    }
  }
};
EventTarget.prototype.addEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];
  if (typeListeners == undefined) {
    typeListeners = [];
    listeners[type] = typeListeners;
  }
  var found = false;
  for (var i = 0; i < typeListeners.length; i += 1) {
    if (typeListeners[i] === listener) {
      found = true;
    }
  }
  if (!found) {
    typeListeners.push(listener);
  }
};
EventTarget.prototype.removeEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];
  if (typeListeners != undefined) {
    var filtered = [];
    for (var i = 0; i < typeListeners.length; i += 1) {
      if (typeListeners[i] !== listener) {
        filtered.push(typeListeners[i]);
      }
    }
    if (filtered.length === 0) {
      delete listeners[type];
    } else {
      listeners[type] = filtered;
    }
  }
};
function Event(type) {
  this.type = type;
  this.target = undefined;
}
_c8 = Event;
function MessageEvent(type, options) {
  Event.call(this, type);
  this.data = options.data;
  this.lastEventId = options.lastEventId;
}
_c9 = MessageEvent;
MessageEvent.prototype = Object.create(Event.prototype);
function ConnectionEvent(type, options) {
  Event.call(this, type);
  this.status = options.status;
  this.statusText = options.statusText;
  this.headers = options.headers;
}
_c10 = ConnectionEvent;
ConnectionEvent.prototype = Object.create(Event.prototype);
var WAITING = -1;
var CONNECTING = 0;
var OPEN = 1;
var CLOSED = 2;
var AFTER_CR = -1;
var FIELD_START = 0;
var FIELD = 1;
var VALUE_START = 2;
var VALUE = 3;
var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
var MINIMUM_DURATION = 1000;
var MAXIMUM_DURATION = 18000000;
var parseDuration = function parseDuration(value, def) {
  var n = parseInt(value, 10);
  if (n !== n) {
    n = def;
  }
  return clampDuration(n);
};
var clampDuration = function clampDuration(n) {
  return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
};
var fire = function fire(that, f, event) {
  try {
    if (typeof f === 'function') {
      f.call(that, event);
    }
  } catch (e) {
    throwError(e);
  }
};
function EventSourcePolyfill(url, options) {
  EventTarget.call(this);
  this.onopen = undefined;
  this.onmessage = undefined;
  this.onerror = undefined;
  this.url = undefined;
  this.readyState = undefined;
  this.withCredentials = undefined;
  this._close = undefined;
  start(this, url, options);
}
_c11 = EventSourcePolyfill;
var isFetchSupported = _unfetch["default"] != undefined && Response != undefined && 'body' in Response.prototype;
function start(es, url, options) {
  url = String(url);
  var withCredentials = options != undefined && Boolean(options.withCredentials);
  var initialRetry = clampDuration(1000);
  var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);
  var lastEventId = '';
  var retry = initialRetry;
  var wasActivity = false;
  var headers = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;
  var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : XMLHttpRequest;
  var xhr = isFetchSupported && !(options != undefined && options.Transport != undefined) ? undefined : new XHRWrapper(new CurrentTransport());
  var transport = xhr == undefined ? new FetchTransport() : new XHRTransport();
  var cancelFunction = undefined;
  var timeout = 0;
  var currentState = WAITING;
  var dataBuffer = '';
  var lastEventIdBuffer = '';
  var eventTypeBuffer = '';
  var textBuffer = '';
  var state = FIELD_START;
  var fieldStart = 0;
  var valueStart = 0;
  var onStart = function onStart(status, statusText, contentType, headers, cancel) {
    if (currentState === CONNECTING) {
      cancelFunction = cancel;
      if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
        currentState = OPEN;
        wasActivity = true;
        retry = initialRetry;
        es.readyState = OPEN;
        var event = new ConnectionEvent('open', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onopen, event);
      } else {
        var message = '';
        if (status !== 200) {
          if (statusText) {
            statusText = statusText.replace(/\s+/g, ' ');
          }
          message = "EventSource's response has a status " + status + ' ' + statusText + ' that is not 200. Aborting the connection.';
        } else {
          message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? '-' : contentType.replace(/\s+/g, ' ')) + '. Aborting the connection.';
        }
        throwError(new Error(message));
        close();
        var event = new ConnectionEvent('error', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onerror, event);
      }
    }
  };
  var onProgress = function onProgress(textChunk) {
    if (currentState === OPEN) {
      var n = -1;
      for (var i = 0; i < textChunk.length; i += 1) {
        var c = textChunk.charCodeAt(i);
        if (c === '\n'.charCodeAt(0) || c === '\r'.charCodeAt(0)) {
          n = i;
        }
      }
      var chunk = (n !== -1 ? textBuffer : '') + textChunk.slice(0, n + 1);
      textBuffer = (n === -1 ? textBuffer : '') + textChunk.slice(n + 1);
      if (chunk !== '') {
        wasActivity = true;
      }
      for (var position = 0; position < chunk.length; position += 1) {
        var c = chunk.charCodeAt(position);
        if (state === AFTER_CR && c === '\n'.charCodeAt(0)) {
          state = FIELD_START;
        } else {
          if (state === AFTER_CR) {
            state = FIELD_START;
          }
          if (c === '\r'.charCodeAt(0) || c === '\n'.charCodeAt(0)) {
            if (state !== FIELD_START) {
              if (state === FIELD) {
                valueStart = position + 1;
              }
              var field = chunk.slice(fieldStart, valueStart - 1);
              var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === ' '.charCodeAt(0) ? 1 : 0), position);
              if (field === 'data') {
                dataBuffer += '\n';
                dataBuffer += value;
              } else if (field === 'id') {
                lastEventIdBuffer = value;
              } else if (field === 'event') {
                eventTypeBuffer = value;
              } else if (field === 'retry') {
                initialRetry = parseDuration(value, initialRetry);
                retry = initialRetry;
              } else if (field === 'heartbeatTimeout') {
                heartbeatTimeout = parseDuration(value, heartbeatTimeout);
                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout(function () {
                    onTimeout();
                  }, heartbeatTimeout);
                }
              }
            }
            if (state === FIELD_START) {
              if (dataBuffer !== '') {
                lastEventId = lastEventIdBuffer;
                if (eventTypeBuffer === '') {
                  eventTypeBuffer = 'message';
                }
                var event = new MessageEvent(eventTypeBuffer, {
                  data: dataBuffer.slice(1),
                  lastEventId: lastEventIdBuffer
                });
                es.dispatchEvent(event);
                if (eventTypeBuffer === 'message') {
                  fire(es, es.onmessage, event);
                }
                if (currentState === CLOSED) {
                  return;
                }
              }
              dataBuffer = '';
              eventTypeBuffer = '';
            }
            state = c === '\r'.charCodeAt(0) ? AFTER_CR : FIELD_START;
          } else {
            if (state === FIELD_START) {
              fieldStart = position;
              state = FIELD;
            }
            if (state === FIELD) {
              if (c === ':'.charCodeAt(0)) {
                valueStart = position + 1;
                state = VALUE_START;
              }
            } else if (state === VALUE_START) {
              state = VALUE;
            }
          }
        }
      }
    }
  };
  var onFinish = function onFinish() {
    if (currentState === OPEN || currentState === CONNECTING) {
      currentState = WAITING;
      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }
      timeout = setTimeout(function () {
        onTimeout();
      }, retry);
      retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
      es.readyState = CONNECTING;
      var event = new Event('error');
      es.dispatchEvent(event);
      fire(es, es.onerror, event);
    }
  };
  var close = function close() {
    currentState = CLOSED;
    if (cancelFunction != undefined) {
      cancelFunction();
      cancelFunction = undefined;
    }
    if (timeout !== 0) {
      clearTimeout(timeout);
      timeout = 0;
    }
    es.readyState = CLOSED;
  };
  var onTimeout = function onTimeout() {
    timeout = 0;
    if (currentState !== WAITING) {
      if (!wasActivity && cancelFunction != undefined) {
        throwError(new Error('No activity within ' + heartbeatTimeout + ' milliseconds. Reconnecting.'));
        cancelFunction();
        cancelFunction = undefined;
      } else {
        wasActivity = false;
        timeout = setTimeout(function () {
          onTimeout();
        }, heartbeatTimeout);
      }
      return;
    }
    wasActivity = false;
    timeout = setTimeout(function () {
      onTimeout();
    }, heartbeatTimeout);
    currentState = CONNECTING;
    dataBuffer = '';
    eventTypeBuffer = '';
    lastEventIdBuffer = lastEventId;
    textBuffer = '';
    fieldStart = 0;
    valueStart = 0;
    state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
    // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.
    var requestURL = url;
    if (url.slice(0, 5) !== 'data:' && url.slice(0, 5) !== 'blob:') {
      if (lastEventId !== '') {
        requestURL += (url.indexOf('?') === -1 ? '?' : '&') + 'lastEventId=' + encodeURIComponent(lastEventId);
      }
    }
    var requestHeaders = {};
    requestHeaders['Accept'] = 'text/event-stream';
    if (headers != undefined) {
      for (var name in headers) {
        if (Object.prototype.hasOwnProperty.call(headers, name)) {
          requestHeaders[name] = headers[name];
        }
      }
    }
    try {
      transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
    } catch (error) {
      close();
      throw error;
    }
  };
  es.url = url;
  es.readyState = CONNECTING;
  es.withCredentials = withCredentials;
  es._close = close;
  onTimeout();
}
EventSourcePolyfill.prototype = Object.create(EventTarget.prototype);
EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
EventSourcePolyfill.prototype.OPEN = OPEN;
EventSourcePolyfill.prototype.CLOSED = CLOSED;
EventSourcePolyfill.prototype.close = function () {
  this._close();
};
EventSourcePolyfill.CONNECTING = CONNECTING;
EventSourcePolyfill.OPEN = OPEN;
EventSourcePolyfill.CLOSED = CLOSED;
EventSourcePolyfill.prototype.withCredentials = undefined;
var _default = EventSourcePolyfill;
exports["default"] = _default;
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
$RefreshReg$(_c, "TextDecoderPolyfill");
$RefreshReg$(_c2, "XHRWrapper");
$RefreshReg$(_c3, "HeadersPolyfill");
$RefreshReg$(_c4, "XHRTransport");
$RefreshReg$(_c5, "HeadersWrapper");
$RefreshReg$(_c6, "FetchTransport");
$RefreshReg$(_c7, "EventTarget");
$RefreshReg$(_c8, "Event");
$RefreshReg$(_c9, "MessageEvent");
$RefreshReg$(_c10, "ConnectionEvent");
$RefreshReg$(_c11, "EventSourcePolyfill");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/fouc.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/dev/fouc.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.displayContent = displayContent;
function displayContent(callback) {
  // This is the fallback helper that removes Next.js' no-FOUC styles when
  // CSS mode is enabled. This only really activates if you haven't created
  // _any_ styles in your application yet.
  ;
  (window.requestAnimationFrame || setTimeout)(function () {
    for (var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;) {
      x[i].parentNode.removeChild(x[i]);
    }
    if (callback) {
      callback();
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-utils.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.closePing = closePing;
exports.setupPing = setupPing;
exports.currentPage = void 0;
var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"));
var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js"); /* global location */
var evtSource;
var currentPage;
exports.currentPage = currentPage;
function closePing() {
  if (evtSource) evtSource.close();
  evtSource = null;
}
function setupPing(assetPrefix, pathnameFn, retry) {
  var pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed
  if (pathname === currentPage && !retry) return;
  exports.currentPage = currentPage = pathname; // close current EventSource connection
  closePing();
  var url = "".concat(assetPrefix, "/_next/webpack-hmr?page=").concat(currentPage);
  evtSource = (0, _eventsource.getEventSourceWrapper)({
    path: url,
    timeout: 5000,
    ondemand: 1
  });
  evtSource.addMessageListener(function (event) {
    if (event.data.indexOf('{') === -1) return;
    try {
      var payload = JSON.parse(event.data);
      if (payload.invalid) {
        // Payload can be invalid even if the page does not exist.
        // So, we need to make sure it exists before reloading.
        (0, _unfetch["default"])(location.href, {
          credentials: 'same-origin'
        }).then(function (pageRes) {
          if (pageRes.status === 200) {
            location.reload();
          }
        });
      }
    } catch (err) {
      console.error('on-demand-entries failed to parse response', err);
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

},[["./node_modules/next/dist/client/dev/amp-dev.js","static/runtime/webpack.js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy91bmZldGNoLmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9jbGllbnQvZGV2L2FtcC1kZXYuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL2NsaWVudC9kZXYvZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vY2xpZW50L2Rldi9ldmVudC1zb3VyY2UtcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL2NsaWVudC9kZXYvZm91Yy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vY2xpZW50L2Rldi9vbi1kZW1hbmQtZW50cmllcy11dGlscy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIkV2ZW50U291cmNlIiwiRXZlbnRTb3VyY2VQb2x5ZmlsbCIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidGV4dENvbnRlbnQiLCJhc3NldFByZWZpeCIsInBhZ2UiLCJtb3N0UmVjZW50SGFzaCIsImN1ckhhc2giLCJfX3dlYnBhY2tfaGFzaF9fIiwiaG90VXBkYXRlUGF0aCIsImVuZHNXaXRoIiwiaXNVcGRhdGVBdmFpbGFibGUiLCJjYW5BcHBseVVwZGF0ZXMiLCJtb2R1bGUiLCJob3QiLCJzdGF0dXMiLCJ0cnlBcHBseVVwZGF0ZXMiLCJyZXMiLCJqc29uIiwiY3VyUGFnZSIsInBhZ2VVcGRhdGVkIiwiT2JqZWN0Iiwia2V5cyIsImMiLCJzb21lIiwibW9kIiwiaW5kZXhPZiIsInN1YnN0ciIsInJlcGxhY2UiLCJsb2NhdGlvbiIsInJlbG9hZCIsImNvbnNvbGUiLCJlcnJvciIsInBhdGgiLCJhZGRNZXNzYWdlTGlzdGVuZXIiLCJldmVudCIsIm1lc3NhZ2UiLCJhY3Rpb24iLCJoYXNoIiwiZXgiLCJ3YXJuIiwiZXZlbnRDYWxsYmFja3MiLCJFdmVudFNvdXJjZVdyYXBwZXIiLCJvcHRpb25zIiwic291cmNlIiwibGFzdEFjdGl2aXR5IiwiRGF0ZSIsImxpc3RlbmVycyIsInRpbWVvdXQiLCJpbml0IiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImhhbmRsZURpc2Nvbm5lY3QiLCJvbm9wZW4iLCJoYW5kbGVPbmxpbmUiLCJvbmVycm9yIiwib25tZXNzYWdlIiwiaGFuZGxlTWVzc2FnZSIsImxvZyIsImkiLCJsZW5ndGgiLCJmb3JFYWNoIiwiY2IiLCJjbGVhckludGVydmFsIiwiY2xvc2UiLCJzZXRUaW1lb3V0IiwiZm4iLCJwdXNoIiwiZ2V0RXZlbnRTb3VyY2VXcmFwcGVyIiwib25kZW1hbmQiLCJSZXNwb25zZSIsIlRleHREZWNvZGVyIiwiVGV4dEVuY29kZXIiLCJBYm9ydENvbnRyb2xsZXIiLCJ1bmRlZmluZWQiLCJzaWduYWwiLCJhYm9ydCIsIlRleHREZWNvZGVyUG9seWZpbGwiLCJiaXRzTmVlZGVkIiwiY29kZVBvaW50IiwicHJvdG90eXBlIiwiZGVjb2RlIiwib2N0ZXRzIiwidmFsaWQiLCJzaGlmdCIsIm9jdGV0c0NvdW50IiwiRXJyb3IiLCJSRVBMQUNFUiIsInN0cmluZyIsIm9jdGV0IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwic3VwcG9ydHNTdHJlYW1PcHRpb24iLCJlbmNvZGUiLCJzdHJlYW0iLCJrIiwiWEhSV3JhcHBlciIsInhociIsIndpdGhDcmVkZW50aWFscyIsInJlc3BvbnNlVHlwZSIsInJlYWR5U3RhdGUiLCJzdGF0dXNUZXh0IiwicmVzcG9uc2VUZXh0Iiwib25wcm9ncmVzcyIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsIl9jb250ZW50VHlwZSIsIl94aHIiLCJfc2VuZFRpbWVvdXQiLCJfYWJvcnQiLCJvcGVuIiwibWV0aG9kIiwidXJsIiwidGhhdCIsInN0YXRlIiwic2lsZW50IiwiY2xlYXJUaW1lb3V0Iiwib25sb2FkIiwib25hYm9ydCIsIm9uU3RhcnQiLCJjb250ZW50VHlwZSIsImdldFJlc3BvbnNlSGVhZGVyIiwib25Qcm9ncmVzcyIsIm9uRmluaXNoIiwib25SZWFkeVN0YXRlQ2hhbmdlIiwib25UaW1lb3V0IiwiWE1MSHR0cFJlcXVlc3QiLCJuYW1lIiwic2V0UmVxdWVzdEhlYWRlciIsInZhbHVlIiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwic2VuZCIsImVycm9yMSIsInRvTG93ZXJDYXNlIiwiY2hhckNvZGVBdCIsIkhlYWRlcnNQb2x5ZmlsbCIsImFsbCIsIm1hcCIsImNyZWF0ZSIsImFycmF5Iiwic3BsaXQiLCJsaW5lIiwicGFydHMiLCJqb2luIiwiX21hcCIsImdldCIsIlhIUlRyYW5zcG9ydCIsIm9uU3RhcnRDYWxsYmFjayIsIm9uUHJvZ3Jlc3NDYWxsYmFjayIsIm9uRmluaXNoQ2FsbGJhY2siLCJoZWFkZXJzIiwib2Zmc2V0IiwiY2h1bmsiLCJzbGljZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIkhlYWRlcnNXcmFwcGVyIiwiX2hlYWRlcnMiLCJGZXRjaFRyYW5zcG9ydCIsImNvbnRyb2xsZXIiLCJ0ZXh0RGVjb2RlciIsImNyZWRlbnRpYWxzIiwiY2FjaGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJyZWFkZXIiLCJib2R5IiwiZ2V0UmVhZGVyIiwiY2FuY2VsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkTmV4dENodW5rIiwicmVhZCIsInJlc3VsdCIsImRvbmUiLCJFdmVudFRhcmdldCIsIl9saXN0ZW5lcnMiLCJ0aHJvd0Vycm9yIiwiZSIsImRpc3BhdGNoRXZlbnQiLCJ0YXJnZXQiLCJ0eXBlTGlzdGVuZXJzIiwidHlwZSIsImxpc3RlbmVyIiwiaGFuZGxlRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZm91bmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZmlsdGVyZWQiLCJFdmVudCIsIk1lc3NhZ2VFdmVudCIsImxhc3RFdmVudElkIiwiQ29ubmVjdGlvbkV2ZW50IiwiV0FJVElORyIsIkNPTk5FQ1RJTkciLCJPUEVOIiwiQ0xPU0VEIiwiQUZURVJfQ1IiLCJGSUVMRF9TVEFSVCIsIkZJRUxEIiwiVkFMVUVfU1RBUlQiLCJWQUxVRSIsImNvbnRlbnRUeXBlUmVnRXhwIiwiTUlOSU1VTV9EVVJBVElPTiIsIk1BWElNVU1fRFVSQVRJT04iLCJwYXJzZUR1cmF0aW9uIiwiZGVmIiwibiIsInBhcnNlSW50IiwiY2xhbXBEdXJhdGlvbiIsIk1hdGgiLCJtaW4iLCJtYXgiLCJmaXJlIiwiZiIsIl9jbG9zZSIsInN0YXJ0IiwiaXNGZXRjaFN1cHBvcnRlZCIsImZldGNoIiwiZXMiLCJCb29sZWFuIiwiaW5pdGlhbFJldHJ5IiwiaGVhcnRiZWF0VGltZW91dCIsInJldHJ5Iiwid2FzQWN0aXZpdHkiLCJzdHJpbmdpZnkiLCJDdXJyZW50VHJhbnNwb3J0IiwiVHJhbnNwb3J0IiwidHJhbnNwb3J0IiwiY2FuY2VsRnVuY3Rpb24iLCJjdXJyZW50U3RhdGUiLCJkYXRhQnVmZmVyIiwibGFzdEV2ZW50SWRCdWZmZXIiLCJldmVudFR5cGVCdWZmZXIiLCJ0ZXh0QnVmZmVyIiwiZmllbGRTdGFydCIsInZhbHVlU3RhcnQiLCJ0ZXN0IiwidGV4dENodW5rIiwicG9zaXRpb24iLCJmaWVsZCIsInJlcXVlc3RVUkwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SGVhZGVycyIsImRpc3BsYXlDb250ZW50IiwiY2FsbGJhY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ4IiwicXVlcnlTZWxlY3RvckFsbCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImV2dFNvdXJjZSIsImN1cnJlbnRQYWdlIiwiY2xvc2VQaW5nIiwic2V0dXBQaW5nIiwicGF0aG5hbWVGbiIs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QUNBO1FBQ0EseUJBQU1yTyxRQUFRLENBQUNzTyxJQUFmLEVBQXFCO1VBQ25CbkcsV0FBVyxFQUFFO1FBRE0sQ0FBckIsRUFFR0UsSUFGSCxDQUVTa0csaUJBQUQsRUFBYTtVQUNuQixJQUFJQSxPQUFPLENBQUNyUCxNQUFScVAsS0FBbUIsR0FBdkIsRUFBNEI7WUFDMUJ2TyxRQUFRLENBQUNDLE1BQVREO1VBQ0Q7UUFDRixDQU5EO01BT0Q7SUFDRixDQUFDLFFBQU93TyxHQUFQLEVBQVk7TUFDWnRPLE9BQU8sQ0FBQ0MsS0FBUkQsQ0FBYyw0Q0FBZEEsRUFBNERzTyxHQUE1RHRPO0lBQ0Q7RUFDRixDQWxCRDROO0FBbUJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3J1bnRpbWUvYW1wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbihlLG4pe3JldHVybiBuPW58fHt9LG5ldyBQcm9taXNlKGZ1bmN0aW9uKHQscil7dmFyIHM9bmV3IFhNTEh0dHBSZXF1ZXN0LG89W10sdT1bXSxpPXt9LGE9ZnVuY3Rpb24oKXtyZXR1cm57b2s6Mj09KHMuc3RhdHVzLzEwMHwwKSxzdGF0dXNUZXh0OnMuc3RhdHVzVGV4dCxzdGF0dXM6cy5zdGF0dXMsdXJsOnMucmVzcG9uc2VVUkwsdGV4dDpmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUocy5yZXNwb25zZVRleHQpfSxqc29uOmZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShKU09OLnBhcnNlKHMucmVzcG9uc2VUZXh0KSl9LGJsb2I6ZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFtzLnJlc3BvbnNlXSkpfSxjbG9uZTphLGhlYWRlcnM6e2tleXM6ZnVuY3Rpb24oKXtyZXR1cm4gb30sZW50cmllczpmdW5jdGlvbigpe3JldHVybiB1fSxnZXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGlbZS50b0xvd2VyQ2FzZSgpXX0saGFzOmZ1bmN0aW9uKGUpe3JldHVybiBlLnRvTG93ZXJDYXNlKClpbiBpfX19fTtmb3IodmFyIGwgaW4gcy5vcGVuKG4ubWV0aG9kfHxcImdldFwiLGUsITApLHMub25sb2FkPWZ1bmN0aW9uKCl7cy5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKS5yZXBsYWNlKC9eKC4qPyk6W15cXFNcXG5dKihbXFxzXFxTXSo/KSQvZ20sZnVuY3Rpb24oZSxuLHQpe28ucHVzaChuPW4udG9Mb3dlckNhc2UoKSksdS5wdXNoKFtuLHRdKSxpW25dPWlbbl0/aVtuXStcIixcIit0OnR9KSx0KGEoKSl9LHMub25lcnJvcj1yLHMud2l0aENyZWRlbnRpYWxzPVwiaW5jbHVkZVwiPT1uLmNyZWRlbnRpYWxzLG4uaGVhZGVycylzLnNldFJlcXVlc3RIZWFkZXIobCxuLmhlYWRlcnNbbF0pO3Muc2VuZChuLmJvZHl8fG51bGwpfSl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dW5mZXRjaC5qcy5tYXBcbiIsIi8qIGdsb2JhbHMgX193ZWJwYWNrX2hhc2hfXyAqL1xuaW1wb3J0IGZldGNoIGZyb20gJ25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvdW5mZXRjaCdcbmltcG9ydCBFdmVudFNvdXJjZVBvbHlmaWxsIGZyb20gJy4vZXZlbnQtc291cmNlLXBvbHlmaWxsJ1xuaW1wb3J0IHsgZ2V0RXZlbnRTb3VyY2VXcmFwcGVyIH0gZnJvbSAnLi9lcnJvci1vdmVybGF5L2V2ZW50c291cmNlJ1xuaW1wb3J0IHsgc2V0dXBQaW5nIH0gZnJvbSAnLi9vbi1kZW1hbmQtZW50cmllcy11dGlscydcbmltcG9ydCB7IGRpc3BsYXlDb250ZW50IH0gZnJvbSAnLi9mb3VjJ1xuXG5pZiAoIXdpbmRvdy5FdmVudFNvdXJjZSkge1xuICB3aW5kb3cuRXZlbnRTb3VyY2UgPSBFdmVudFNvdXJjZVBvbHlmaWxsXG59XG5cbmNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX05FWFRfREFUQV9fJykudGV4dENvbnRlbnQpXG5sZXQgeyBhc3NldFByZWZpeCwgcGFnZSB9ID0gZGF0YVxuYXNzZXRQcmVmaXggPSBhc3NldFByZWZpeCB8fCAnJ1xubGV0IG1vc3RSZWNlbnRIYXNoID0gbnVsbFxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5sZXQgY3VySGFzaCA9IF9fd2VicGFja19oYXNoX19cbmNvbnN0IGhvdFVwZGF0ZVBhdGggPVxuICBhc3NldFByZWZpeCArIChhc3NldFByZWZpeC5lbmRzV2l0aCgnLycpID8gJycgOiAnLycpICsgJ19uZXh0L3N0YXRpYy93ZWJwYWNrLydcblxuLy8gSXMgdGhlcmUgYSBuZXdlciB2ZXJzaW9uIG9mIHRoaXMgY29kZSBhdmFpbGFibGU/XG5mdW5jdGlvbiBpc1VwZGF0ZUF2YWlsYWJsZSgpIHtcbiAgLy8gX193ZWJwYWNrX2hhc2hfXyBpcyB0aGUgaGFzaCBvZiB0aGUgY3VycmVudCBjb21waWxhdGlvbi5cbiAgLy8gSXQncyBhIGdsb2JhbCB2YXJpYWJsZSBpbmplY3RlZCBieSBXZWJwYWNrLlxuICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgcmV0dXJuIG1vc3RSZWNlbnRIYXNoICE9PSBfX3dlYnBhY2tfaGFzaF9fXG59XG5cbi8vIFdlYnBhY2sgZGlzYWxsb3dzIHVwZGF0ZXMgaW4gb3RoZXIgc3RhdGVzLlxuZnVuY3Rpb24gY2FuQXBwbHlVcGRhdGVzKCkge1xuICByZXR1cm4gbW9kdWxlLmhvdC5zdGF0dXMoKSA9PT0gJ2lkbGUnXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gcmVhZHMgY29kZSB1cGRhdGVzIG9uIHRoZSBmbHkgYW5kIGhhcmRcbi8vIHJlbG9hZHMgdGhlIHBhZ2Ugd2hlbiBpdCBoYXMgY2hhbmdlZC5cbmFzeW5jIGZ1bmN0aW9uIHRyeUFwcGx5VXBkYXRlcygpIHtcbiAgaWYgKCFpc1VwZGF0ZUF2YWlsYWJsZSgpIHx8ICFjYW5BcHBseVVwZGF0ZXMoKSkge1xuICAgIHJldHVyblxuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7aG90VXBkYXRlUGF0aH0ke2N1ckhhc2h9LmhvdC11cGRhdGUuanNvbmApXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICBjb25zdCBjdXJQYWdlID0gcGFnZSA9PT0gJy8nID8gJ2luZGV4JyA6IHBhZ2VcbiAgICBjb25zdCBwYWdlVXBkYXRlZCA9IE9iamVjdC5rZXlzKGRhdGEuYykuc29tZSgobW9kKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBtb2QuaW5kZXhPZihcbiAgICAgICAgICBgcGFnZXMke2N1clBhZ2Uuc3Vic3RyKDAsIDEpID09PSAnLycgPyBjdXJQYWdlIDogYC8ke2N1clBhZ2V9YH1gXG4gICAgICAgICkgIT09IC0xIHx8XG4gICAgICAgIG1vZC5pbmRleE9mKFxuICAgICAgICAgIGBwYWdlcyR7XG4gICAgICAgICAgICBjdXJQYWdlLnN1YnN0cigwLCAxKSA9PT0gJy8nID8gY3VyUGFnZSA6IGAvJHtjdXJQYWdlfWBcbiAgICAgICAgICB9YC5yZXBsYWNlKC9cXC8vZywgJ1xcXFwnKVxuICAgICAgICApICE9PSAtMVxuICAgICAgKVxuICAgIH0pXG5cbiAgICBpZiAocGFnZVVwZGF0ZWQpIHtcbiAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjdXJIYXNoID0gbW9zdFJlY2VudEhhc2hcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG9jY3VycmVkIGNoZWNraW5nIGZvciB1cGRhdGUnLCBlcnIpXG4gICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKHRydWUpXG4gIH1cbn1cblxuZ2V0RXZlbnRTb3VyY2VXcmFwcGVyKHtcbiAgcGF0aDogYCR7YXNzZXRQcmVmaXh9L19uZXh0L3dlYnBhY2staG1yYCxcbn0pLmFkZE1lc3NhZ2VMaXN0ZW5lcigoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LmRhdGEgPT09ICdcXHVEODNEXFx1REM5MycpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSlcblxuICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ3N5bmMnIHx8IG1lc3NhZ2UuYWN0aW9uID09PSAnYnVpbHQnKSB7XG4gICAgICBpZiAoIW1lc3NhZ2UuaGFzaCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIG1vc3RSZWNlbnRIYXNoID0gbWVzc2FnZS5oYXNoXG4gICAgICB0cnlBcHBseVVwZGF0ZXMoKVxuICAgIH0gZWxzZSBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdyZWxvYWRQYWdlJykge1xuICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKHRydWUpXG4gICAgfVxuICB9IGNhdGNoIChleCkge1xuICAgIGNvbnNvbGUud2FybignSW52YWxpZCBITVIgbWVzc2FnZTogJyArIGV2ZW50LmRhdGEgKyAnXFxuJyArIGV4KVxuICB9XG59KVxuXG5zZXR1cFBpbmcoYXNzZXRQcmVmaXgsICgpID0+IHBhZ2UpXG5kaXNwbGF5Q29udGVudCgpXG4iLCJjb25zdCBldmVudENhbGxiYWNrcyA9IFtdXG5cbmZ1bmN0aW9uIEV2ZW50U291cmNlV3JhcHBlcihvcHRpb25zKSB7XG4gIHZhciBzb3VyY2VcbiAgdmFyIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKClcbiAgdmFyIGxpc3RlbmVycyA9IFtdXG5cbiAgaWYgKCFvcHRpb25zLnRpbWVvdXQpIHtcbiAgICBvcHRpb25zLnRpbWVvdXQgPSAyMCAqIDEwMDBcbiAgfVxuXG4gIGluaXQoKVxuICB2YXIgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG5ldyBEYXRlKCkgLSBsYXN0QWN0aXZpdHkgPiBvcHRpb25zLnRpbWVvdXQpIHtcbiAgICAgIGhhbmRsZURpc2Nvbm5lY3QoKVxuICAgIH1cbiAgfSwgb3B0aW9ucy50aW1lb3V0IC8gMilcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHNvdXJjZSA9IG5ldyB3aW5kb3cuRXZlbnRTb3VyY2Uob3B0aW9ucy5wYXRoKVxuICAgIHNvdXJjZS5vbm9wZW4gPSBoYW5kbGVPbmxpbmVcbiAgICBzb3VyY2Uub25lcnJvciA9IGhhbmRsZURpc2Nvbm5lY3RcbiAgICBzb3VyY2Uub25tZXNzYWdlID0gaGFuZGxlTWVzc2FnZVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlT25saW5lKCkge1xuICAgIGlmIChvcHRpb25zLmxvZykgY29uc29sZS5sb2coJ1tITVJdIGNvbm5lY3RlZCcpXG4gICAgbGFzdEFjdGl2aXR5ID0gbmV3IERhdGUoKVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudCkge1xuICAgIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlzdGVuZXJzW2ldKGV2ZW50KVxuICAgIH1cbiAgICBpZiAoZXZlbnQuZGF0YS5pbmRleE9mKCdhY3Rpb24nKSAhPT0gLTEpIHtcbiAgICAgIGV2ZW50Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYihldmVudCkpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRGlzY29ubmVjdCgpIHtcbiAgICBjbGVhckludGVydmFsKHRpbWVyKVxuICAgIHNvdXJjZS5jbG9zZSgpXG4gICAgc2V0VGltZW91dChpbml0LCBvcHRpb25zLnRpbWVvdXQpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNsb3NlOiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKHRpbWVyKVxuICAgICAgc291cmNlLmNsb3NlKClcbiAgICB9LFxuICAgIGFkZE1lc3NhZ2VMaXN0ZW5lcjogZnVuY3Rpb24gKGZuKSB7XG4gICAgICBsaXN0ZW5lcnMucHVzaChmbilcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMub25kZW1hbmQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWRkTWVzc2FnZUxpc3RlbmVyOiAoY2IpID0+IHtcbiAgICAgICAgZXZlbnRDYWxsYmFja3MucHVzaChjYilcbiAgICAgIH0sXG4gICAgfVxuICB9XG4gIHJldHVybiBFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucylcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBJbXByb3ZlZCB2ZXJzaW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9ZYWZmbGUvRXZlbnRTb3VyY2UvXG4vLyBBdmFpbGFibGUgdW5kZXIgTUlUIExpY2Vuc2UgKE1JVClcbi8vIE9ubHkgdHJpZXMgdG8gc3VwcG9ydCBJRTExIGFuZCBub3RoaW5nIGJlbG93XG5pbXBvcnQgZmV0Y2ggZnJvbSAnbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy91bmZldGNoJ1xuXG52YXIgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnRcbnZhciBSZXNwb25zZSA9IHdpbmRvdy5SZXNwb25zZVxudmFyIFRleHREZWNvZGVyID0gd2luZG93LlRleHREZWNvZGVyXG52YXIgVGV4dEVuY29kZXIgPSB3aW5kb3cuVGV4dEVuY29kZXJcbnZhciBBYm9ydENvbnRyb2xsZXIgPSB3aW5kb3cuQWJvcnRDb250cm9sbGVyXG5cbmlmIChBYm9ydENvbnRyb2xsZXIgPT0gdW5kZWZpbmVkKSB7XG4gIEFib3J0Q29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNpZ25hbCA9IG51bGxcbiAgICB0aGlzLmFib3J0ID0gZnVuY3Rpb24gKCkge31cbiAgfVxufVxuXG5mdW5jdGlvbiBUZXh0RGVjb2RlclBvbHlmaWxsKCkge1xuICB0aGlzLmJpdHNOZWVkZWQgPSAwXG4gIHRoaXMuY29kZVBvaW50ID0gMFxufVxuXG5UZXh0RGVjb2RlclBvbHlmaWxsLnByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbiAob2N0ZXRzKSB7XG4gIGZ1bmN0aW9uIHZhbGlkKGNvZGVQb2ludCwgc2hpZnQsIG9jdGV0c0NvdW50KSB7XG4gICAgaWYgKG9jdGV0c0NvdW50ID09PSAxKSB7XG4gICAgICByZXR1cm4gY29kZVBvaW50ID49IDB4MDA4MCA+PiBzaGlmdCAmJiBjb2RlUG9pbnQgPDwgc2hpZnQgPD0gMHgwN2ZmXG4gICAgfVxuICAgIGlmIChvY3RldHNDb3VudCA9PT0gMikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgKGNvZGVQb2ludCA+PSAweDA4MDAgPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDB4ZDdmZikgfHxcbiAgICAgICAgKGNvZGVQb2ludCA+PSAweGUwMDAgPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDB4ZmZmZilcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKG9jdGV0c0NvdW50ID09PSAzKSB7XG4gICAgICByZXR1cm4gY29kZVBvaW50ID49IDB4MDEwMDAwID4+IHNoaWZ0ICYmIGNvZGVQb2ludCA8PCBzaGlmdCA8PSAweDEwZmZmZlxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoKVxuICB9XG4gIGZ1bmN0aW9uIG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsIGNvZGVQb2ludCkge1xuICAgIGlmIChiaXRzTmVlZGVkID09PSA2ICogMSkge1xuICAgICAgcmV0dXJuIGNvZGVQb2ludCA+PiA2ID4gMTUgPyAzIDogY29kZVBvaW50ID4gMzEgPyAyIDogMVxuICAgIH1cbiAgICBpZiAoYml0c05lZWRlZCA9PT0gNiAqIDIpIHtcbiAgICAgIHJldHVybiBjb2RlUG9pbnQgPiAxNSA/IDMgOiAyXG4gICAgfVxuICAgIGlmIChiaXRzTmVlZGVkID09PSA2ICogMykge1xuICAgICAgcmV0dXJuIDNcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKClcbiAgfVxuICB2YXIgUkVQTEFDRVIgPSAweGZmZmRcbiAgdmFyIHN0cmluZyA9ICcnXG4gIHZhciBiaXRzTmVlZGVkID0gdGhpcy5iaXRzTmVlZGVkXG4gIHZhciBjb2RlUG9pbnQgPSB0aGlzLmNvZGVQb2ludFxuICBmb3IgKHZhciBpID0gMDsgaSA8IG9jdGV0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBvY3RldCA9IG9jdGV0c1tpXVxuICAgIGlmIChiaXRzTmVlZGVkICE9PSAwKSB7XG4gICAgICBpZiAoXG4gICAgICAgIG9jdGV0IDwgMTI4IHx8XG4gICAgICAgIG9jdGV0ID4gMTkxIHx8XG4gICAgICAgICF2YWxpZChcbiAgICAgICAgICAoY29kZVBvaW50IDw8IDYpIHwgKG9jdGV0ICYgNjMpLFxuICAgICAgICAgIGJpdHNOZWVkZWQgLSA2LFxuICAgICAgICAgIG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsIGNvZGVQb2ludClcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSAwXG4gICAgICAgIGNvZGVQb2ludCA9IFJFUExBQ0VSXG4gICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVQb2ludClcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGJpdHNOZWVkZWQgPT09IDApIHtcbiAgICAgIGlmIChvY3RldCA+PSAwICYmIG9jdGV0IDw9IDEyNykge1xuICAgICAgICBiaXRzTmVlZGVkID0gMFxuICAgICAgICBjb2RlUG9pbnQgPSBvY3RldFxuICAgICAgfSBlbHNlIGlmIChvY3RldCA+PSAxOTIgJiYgb2N0ZXQgPD0gMjIzKSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSA2ICogMVxuICAgICAgICBjb2RlUG9pbnQgPSBvY3RldCAmIDMxXG4gICAgICB9IGVsc2UgaWYgKG9jdGV0ID49IDIyNCAmJiBvY3RldCA8PSAyMzkpIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDYgKiAyXG4gICAgICAgIGNvZGVQb2ludCA9IG9jdGV0ICYgMTVcbiAgICAgIH0gZWxzZSBpZiAob2N0ZXQgPj0gMjQwICYmIG9jdGV0IDw9IDI0Nykge1xuICAgICAgICBiaXRzTmVlZGVkID0gNiAqIDNcbiAgICAgICAgY29kZVBvaW50ID0gb2N0ZXQgJiA3XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiaXRzTmVlZGVkID0gMFxuICAgICAgICBjb2RlUG9pbnQgPSBSRVBMQUNFUlxuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBiaXRzTmVlZGVkICE9PSAwICYmXG4gICAgICAgICF2YWxpZChjb2RlUG9pbnQsIGJpdHNOZWVkZWQsIG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsIGNvZGVQb2ludCkpXG4gICAgICApIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDBcbiAgICAgICAgY29kZVBvaW50ID0gUkVQTEFDRVJcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYml0c05lZWRlZCAtPSA2XG4gICAgICBjb2RlUG9pbnQgPSAoY29kZVBvaW50IDw8IDYpIHwgKG9jdGV0ICYgNjMpXG4gICAgfVxuICAgIGlmIChiaXRzTmVlZGVkID09PSAwKSB7XG4gICAgICBpZiAoY29kZVBvaW50IDw9IDB4ZmZmZikge1xuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGQ4MDAgKyAoKGNvZGVQb2ludCAtIDB4ZmZmZiAtIDEpID4+IDEwKSlcbiAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoXG4gICAgICAgICAgMHhkYzAwICsgKChjb2RlUG9pbnQgLSAweGZmZmYgLSAxKSAmIDB4M2ZmKVxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHRoaXMuYml0c05lZWRlZCA9IGJpdHNOZWVkZWRcbiAgdGhpcy5jb2RlUG9pbnQgPSBjb2RlUG9pbnRcbiAgcmV0dXJuIHN0cmluZ1xufVxuXG4vLyBGaXJlZm94IDwgMzggdGhyb3dzIGFuIGVycm9yIHdpdGggc3RyZWFtIG9wdGlvblxudmFyIHN1cHBvcnRzU3RyZWFtT3B0aW9uID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIHJldHVybiAoXG4gICAgICBuZXcgVGV4dERlY29kZXIoKS5kZWNvZGUobmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKCd0ZXN0JyksIHtcbiAgICAgICAgc3RyZWFtOiB0cnVlLFxuICAgICAgfSkgPT09ICd0ZXN0J1xuICAgIClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuLy8gSUUsIEVkZ2VcbmlmIChcbiAgVGV4dERlY29kZXIgPT0gdW5kZWZpbmVkIHx8XG4gIFRleHRFbmNvZGVyID09IHVuZGVmaW5lZCB8fFxuICAhc3VwcG9ydHNTdHJlYW1PcHRpb24oKVxuKSB7XG4gIFRleHREZWNvZGVyID0gVGV4dERlY29kZXJQb2x5ZmlsbFxufVxuXG52YXIgayA9IGZ1bmN0aW9uICgpIHt9XG5cbmZ1bmN0aW9uIFhIUldyYXBwZXIoeGhyKSB7XG4gIHRoaXMud2l0aENyZWRlbnRpYWxzID0gZmFsc2VcbiAgdGhpcy5yZXNwb25zZVR5cGUgPSAnJ1xuICB0aGlzLnJlYWR5U3RhdGUgPSAwXG4gIHRoaXMuc3RhdHVzID0gMFxuICB0aGlzLnN0YXR1c1RleHQgPSAnJ1xuICB0aGlzLnJlc3BvbnNlVGV4dCA9ICcnXG4gIHRoaXMub25wcm9ncmVzcyA9IGtcbiAgdGhpcy5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBrXG4gIHRoaXMuX2NvbnRlbnRUeXBlID0gJydcbiAgdGhpcy5feGhyID0geGhyXG4gIHRoaXMuX3NlbmRUaW1lb3V0ID0gMFxuICB0aGlzLl9hYm9ydCA9IGtcbn1cblxuWEhSV3JhcHBlci5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uIChtZXRob2QsIHVybCkge1xuICB0aGlzLl9hYm9ydCh0cnVlKVxuXG4gIHZhciB0aGF0ID0gdGhpc1xuICB2YXIgeGhyID0gdGhpcy5feGhyXG4gIHZhciBzdGF0ZSA9IDFcbiAgdmFyIHRpbWVvdXQgPSAwXG5cbiAgdGhpcy5fYWJvcnQgPSBmdW5jdGlvbiAoc2lsZW50KSB7XG4gICAgaWYgKHRoYXQuX3NlbmRUaW1lb3V0ICE9PSAwKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhhdC5fc2VuZFRpbWVvdXQpXG4gICAgICB0aGF0Ll9zZW5kVGltZW91dCA9IDBcbiAgICB9XG4gICAgaWYgKHN0YXRlID09PSAxIHx8IHN0YXRlID09PSAyIHx8IHN0YXRlID09PSAzKSB7XG4gICAgICBzdGF0ZSA9IDRcbiAgICAgIHhoci5vbmxvYWQgPSBrXG4gICAgICB4aHIub25lcnJvciA9IGtcbiAgICAgIHhoci5vbmFib3J0ID0ga1xuICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSBrXG4gICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0ga1xuICAgICAgLy8gSUUgOCAtIDk6IFhEb21haW5SZXF1ZXN0I2Fib3J0KCkgZG9lcyBub3QgZmlyZSBhbnkgZXZlbnRcbiAgICAgIC8vIE9wZXJhIDwgMTA6IFhNTEh0dHBSZXF1ZXN0I2Fib3J0KCkgZG9lcyBub3QgZmlyZSBhbnkgZXZlbnRcbiAgICAgIHhoci5hYm9ydCgpXG4gICAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgICAgdGltZW91dCA9IDBcbiAgICAgIH1cbiAgICAgIGlmICghc2lsZW50KSB7XG4gICAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDRcbiAgICAgICAgdGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKVxuICAgICAgfVxuICAgIH1cbiAgICBzdGF0ZSA9IDBcbiAgfVxuXG4gIHZhciBvblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChzdGF0ZSA9PT0gMSkge1xuICAgICAgLy8gc3RhdGUgPSAyO1xuICAgICAgdmFyIHN0YXR1cyA9IDBcbiAgICAgIHZhciBzdGF0dXNUZXh0ID0gJydcbiAgICAgIHZhciBjb250ZW50VHlwZSA9IHVuZGVmaW5lZFxuICAgICAgaWYgKCEoJ2NvbnRlbnRUeXBlJyBpbiB4aHIpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgc3RhdHVzID0geGhyLnN0YXR1c1xuICAgICAgICAgIHN0YXR1c1RleHQgPSB4aHIuc3RhdHVzVGV4dFxuICAgICAgICAgIGNvbnRlbnRUeXBlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVR5cGUnKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIC8vIElFIDwgMTAgdGhyb3dzIGV4Y2VwdGlvbiBmb3IgYHhoci5zdGF0dXNgIHdoZW4geGhyLnJlYWR5U3RhdGUgPT09IDIgfHwgeGhyLnJlYWR5U3RhdGUgPT09IDNcbiAgICAgICAgICAvLyBPcGVyYSA8IDExIHRocm93cyBleGNlcHRpb24gZm9yIGB4aHIuc3RhdHVzYCB3aGVuIHhoci5yZWFkeVN0YXRlID09PSAyXG4gICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5MTIxXG4gICAgICAgICAgc3RhdHVzID0gMFxuICAgICAgICAgIHN0YXR1c1RleHQgPSAnJ1xuICAgICAgICAgIGNvbnRlbnRUeXBlID0gdW5kZWZpbmVkXG4gICAgICAgICAgLy8gRmlyZWZveCA8IDE0LCBDaHJvbWUgPywgU2FmYXJpID9cbiAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Mjk2NThcbiAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Nzc4NTRcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdHVzID0gMjAwXG4gICAgICAgIHN0YXR1c1RleHQgPSAnT0snXG4gICAgICAgIGNvbnRlbnRUeXBlID0geGhyLmNvbnRlbnRUeXBlXG4gICAgICB9XG4gICAgICBpZiAoc3RhdHVzICE9PSAwKSB7XG4gICAgICAgIHN0YXRlID0gMlxuICAgICAgICB0aGF0LnJlYWR5U3RhdGUgPSAyXG4gICAgICAgIHRoYXQuc3RhdHVzID0gc3RhdHVzXG4gICAgICAgIHRoYXQuc3RhdHVzVGV4dCA9IHN0YXR1c1RleHRcbiAgICAgICAgdGhhdC5fY29udGVudFR5cGUgPSBjb250ZW50VHlwZVxuICAgICAgICB0aGF0Lm9ucmVhZHlzdGF0ZWNoYW5nZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHZhciBvblByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuICAgIG9uU3RhcnQoKVxuICAgIGlmIChzdGF0ZSA9PT0gMiB8fCBzdGF0ZSA9PT0gMykge1xuICAgICAgc3RhdGUgPSAzXG4gICAgICB2YXIgcmVzcG9uc2VUZXh0ID0gJydcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc3BvbnNlVGV4dCA9IHhoci5yZXNwb25zZVRleHRcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIElFIDggLSA5IHdpdGggWE1MSHR0cFJlcXVlc3RcbiAgICAgIH1cbiAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDNcbiAgICAgIHRoYXQucmVzcG9uc2VUZXh0ID0gcmVzcG9uc2VUZXh0XG4gICAgICB0aGF0Lm9ucHJvZ3Jlc3MoKVxuICAgIH1cbiAgfVxuICB2YXIgb25GaW5pc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gRmlyZWZveCA1MiBmaXJlcyBcInJlYWR5c3RhdGVjaGFuZ2VcIiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHdpdGhvdXQgZmluYWwgXCJyZWFkeXN0YXRlY2hhbmdlXCIgKHhoci5yZWFkeVN0YXRlID09PSAzKVxuICAgIC8vIElFIDggZmlyZXMgXCJvbmxvYWRcIiB3aXRob3V0IFwib25wcm9ncmVzc1wiXG4gICAgb25Qcm9ncmVzcygpXG4gICAgaWYgKHN0YXRlID09PSAxIHx8IHN0YXRlID09PSAyIHx8IHN0YXRlID09PSAzKSB7XG4gICAgICBzdGF0ZSA9IDRcbiAgICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgICB0aW1lb3V0ID0gMFxuICAgICAgfVxuICAgICAgdGhhdC5yZWFkeVN0YXRlID0gNFxuICAgICAgdGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKVxuICAgIH1cbiAgfVxuICB2YXIgb25SZWFkeVN0YXRlQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh4aHIgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBPcGVyYSAxMlxuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgIG9uRmluaXNoKClcbiAgICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDMpIHtcbiAgICAgICAgb25Qcm9ncmVzcygpXG4gICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09PSAyKSB7XG4gICAgICAgIG9uU3RhcnQoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB2YXIgb25UaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIG9uVGltZW91dCgpXG4gICAgfSwgNTAwKVxuICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gMykge1xuICAgICAgb25Qcm9ncmVzcygpXG4gICAgfVxuICB9XG5cbiAgLy8gWERvbWFpblJlcXVlc3QjYWJvcnQgcmVtb3ZlcyBvbnByb2dyZXNzLCBvbmVycm9yLCBvbmxvYWRcbiAgeGhyLm9ubG9hZCA9IG9uRmluaXNoXG4gIHhoci5vbmVycm9yID0gb25GaW5pc2hcbiAgLy8gaW1wcm9wZXIgZml4IHRvIG1hdGNoIEZpcmVmb3ggYmVoYXZpb3VyLCBidXQgaXQgaXMgYmV0dGVyIHRoYW4ganVzdCBpZ25vcmUgYWJvcnRcbiAgLy8gc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTc2ODU5NlxuICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD04ODAyMDBcbiAgLy8gaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTE1MzU3MFxuICAvLyBJRSA4IGZpcmVzIFwib25sb2FkXCIgd2l0aG91dCBcIm9ucHJvZ3Jlc3NcbiAgeGhyLm9uYWJvcnQgPSBvbkZpbmlzaFxuXG4gIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTczNjcyM1xuICBpZiAoXG4gICAgISgnc2VuZEFzQmluYXJ5JyBpbiBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUpICYmXG4gICAgISgnbW96QW5vbicgaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKVxuICApIHtcbiAgICB4aHIub25wcm9ncmVzcyA9IG9uUHJvZ3Jlc3NcbiAgfVxuXG4gIC8vIElFIDggLSA5IChYTUxIVFRQUmVxdWVzdClcbiAgLy8gT3BlcmEgPCAxMlxuICAvLyBGaXJlZm94IDwgMy41XG4gIC8vIEZpcmVmb3ggMy41IC0gMy42IC0gPyA8IDkuMFxuICAvLyBvbnByb2dyZXNzIGlzIG5vdCBmaXJlZCBzb21ldGltZXMgb3IgZGVsYXllZFxuICAvLyBzZWUgYWxzbyAjNjRcbiAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG9uUmVhZHlTdGF0ZUNoYW5nZVxuXG4gIGlmICgnY29udGVudFR5cGUnIGluIHhocikge1xuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgJ3BhZGRpbmc9dHJ1ZSdcbiAgfVxuICB4aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSlcblxuICBpZiAoJ3JlYWR5U3RhdGUnIGluIHhocikge1xuICAgIC8vIHdvcmthcm91bmQgZm9yIE9wZXJhIDEyIGlzc3VlIHdpdGggXCJwcm9ncmVzc1wiIGV2ZW50c1xuICAgIC8vICM5MVxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIG9uVGltZW91dCgpXG4gICAgfSwgMClcbiAgfVxufVxuWEhSV3JhcHBlci5wcm90b3R5cGUuYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX2Fib3J0KGZhbHNlKVxufVxuWEhSV3JhcHBlci5wcm90b3R5cGUuZ2V0UmVzcG9uc2VIZWFkZXIgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gdGhpcy5fY29udGVudFR5cGVcbn1cblhIUldyYXBwZXIucHJvdG90eXBlLnNldFJlcXVlc3RIZWFkZXIgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgdmFyIHhociA9IHRoaXMuX3hoclxuICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHhocikge1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKVxuICB9XG59XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5nZXRBbGxSZXNwb25zZUhlYWRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl94aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzICE9IHVuZGVmaW5lZFxuICAgID8gdGhpcy5feGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpXG4gICAgOiAnJ1xufVxuWEhSV3JhcHBlci5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gbG9hZGluZyBpbmRpY2F0b3IgaW4gU2FmYXJpIDwgPyAoNiksIENocm9tZSA8IDE0LCBGaXJlZm94XG4gIGlmIChcbiAgICAhKCdvbnRpbWVvdXQnIGluIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSkgJiZcbiAgICBkb2N1bWVudCAhPSB1bmRlZmluZWQgJiZcbiAgICBkb2N1bWVudC5yZWFkeVN0YXRlICE9IHVuZGVmaW5lZCAmJlxuICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdjb21wbGV0ZSdcbiAgKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgdGhhdC5fc2VuZFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoYXQuX3NlbmRUaW1lb3V0ID0gMFxuICAgICAgdGhhdC5zZW5kKClcbiAgICB9LCA0KVxuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIHhociA9IHRoaXMuX3hoclxuICAvLyB3aXRoQ3JlZGVudGlhbHMgc2hvdWxkIGJlIHNldCBhZnRlciBcIm9wZW5cIiBmb3IgU2FmYXJpIGFuZCBDaHJvbWUgKDwgMTkgPylcbiAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRoaXMud2l0aENyZWRlbnRpYWxzXG4gIHhoci5yZXNwb25zZVR5cGUgPSB0aGlzLnJlc3BvbnNlVHlwZVxuICB0cnkge1xuICAgIC8vIHhoci5zZW5kKCk7IHRocm93cyBcIk5vdCBlbm91Z2ggYXJndW1lbnRzXCIgaW4gRmlyZWZveCAzLjBcbiAgICB4aHIuc2VuZCh1bmRlZmluZWQpXG4gIH0gY2F0Y2ggKGVycm9yMSkge1xuICAgIC8vIFNhZmFyaSA1LjEuNywgT3BlcmEgMTJcbiAgICB0aHJvdyBlcnJvcjFcbiAgfVxufVxuXG5mdW5jdGlvbiB0b0xvd2VyQ2FzZShuYW1lKSB7XG4gIHJldHVybiBuYW1lLnJlcGxhY2UoL1tBLVpdL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYy5jaGFyQ29kZUF0KDApICsgMHgyMClcbiAgfSlcbn1cblxuZnVuY3Rpb24gSGVhZGVyc1BvbHlmaWxsKGFsbCkge1xuICAvLyBHZXQgaGVhZGVyczogaW1wbGVtZW50ZWQgYWNjb3JkaW5nIHRvIG1vemlsbGEncyBleGFtcGxlIGNvZGU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9YTUxIdHRwUmVxdWVzdC9nZXRBbGxSZXNwb25zZUhlYWRlcnMjRXhhbXBsZVxuICB2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB2YXIgYXJyYXkgPSBhbGwuc3BsaXQoJ1xcclxcbicpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgbGluZSA9IGFycmF5W2ldXG4gICAgdmFyIHBhcnRzID0gbGluZS5zcGxpdCgnOiAnKVxuICAgIHZhciBuYW1lID0gcGFydHMuc2hpZnQoKVxuICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzogJylcbiAgICBtYXBbdG9Mb3dlckNhc2UobmFtZSldID0gdmFsdWVcbiAgfVxuICB0aGlzLl9tYXAgPSBtYXBcbn1cbkhlYWRlcnNQb2x5ZmlsbC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuX21hcFt0b0xvd2VyQ2FzZShuYW1lKV1cbn1cblxuZnVuY3Rpb24gWEhSVHJhbnNwb3J0KCkge31cblxuWEhSVHJhbnNwb3J0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKFxuICB4aHIsXG4gIG9uU3RhcnRDYWxsYmFjayxcbiAgb25Qcm9ncmVzc0NhbGxiYWNrLFxuICBvbkZpbmlzaENhbGxiYWNrLFxuICB1cmwsXG4gIHdpdGhDcmVkZW50aWFscyxcbiAgaGVhZGVyc1xuKSB7XG4gIHhoci5vcGVuKCdHRVQnLCB1cmwpXG4gIHZhciBvZmZzZXQgPSAwXG4gIHhoci5vbnByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXNwb25zZVRleHQgPSB4aHIucmVzcG9uc2VUZXh0XG4gICAgdmFyIGNodW5rID0gcmVzcG9uc2VUZXh0LnNsaWNlKG9mZnNldClcbiAgICBvZmZzZXQgKz0gY2h1bmsubGVuZ3RoXG4gICAgb25Qcm9ncmVzc0NhbGxiYWNrKGNodW5rKVxuICB9XG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSAyKSB7XG4gICAgICB2YXIgc3RhdHVzID0geGhyLnN0YXR1c1xuICAgICAgdmFyIHN0YXR1c1RleHQgPSB4aHIuc3RhdHVzVGV4dFxuICAgICAgdmFyIGNvbnRlbnRUeXBlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVR5cGUnKVxuICAgICAgdmFyIGhlYWRlcnMgPSB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKClcbiAgICAgIG9uU3RhcnRDYWxsYmFjayhcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0LFxuICAgICAgICBjb250ZW50VHlwZSxcbiAgICAgICAgbmV3IEhlYWRlcnNQb2x5ZmlsbChoZWFkZXJzKSxcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHhoci5hYm9ydCgpXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICBvbkZpbmlzaENhbGxiYWNrKClcbiAgICB9XG4gIH1cbiAgeGhyLndpdGhDcmVkZW50aWFscyA9IHdpdGhDcmVkZW50aWFsc1xuICB4aHIucmVzcG9uc2VUeXBlID0gJ3RleHQnXG4gIGZvciAodmFyIG5hbWUgaW4gaGVhZGVycykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaGVhZGVycywgbmFtZSkpIHtcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIGhlYWRlcnNbbmFtZV0pXG4gICAgfVxuICB9XG4gIHhoci5zZW5kKClcbn1cblxuZnVuY3Rpb24gSGVhZGVyc1dyYXBwZXIoaGVhZGVycykge1xuICB0aGlzLl9oZWFkZXJzID0gaGVhZGVyc1xufVxuSGVhZGVyc1dyYXBwZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiB0aGlzLl9oZWFkZXJzLmdldChuYW1lKVxufVxuXG5mdW5jdGlvbiBGZXRjaFRyYW5zcG9ydCgpIHt9XG5cbkZldGNoVHJhbnNwb3J0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKFxuICB4aHIsXG4gIG9uU3RhcnRDYWxsYmFjayxcbiAgb25Qcm9ncmVzc0NhbGxiYWNrLFxuICBvbkZpbmlzaENhbGxiYWNrLFxuICB1cmwsXG4gIHdpdGhDcmVkZW50aWFscyxcbiAgaGVhZGVyc1xuKSB7XG4gIHZhciBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG4gIHZhciBzaWduYWwgPSBjb250cm9sbGVyLnNpZ25hbCAvLyBzZWUgIzEyMFxuICB2YXIgdGV4dERlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKVxuICBmZXRjaCh1cmwsIHtcbiAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgIGNyZWRlbnRpYWxzOiB3aXRoQ3JlZGVudGlhbHMgPyAnaW5jbHVkZScgOiAnc2FtZS1vcmlnaW4nLFxuICAgIHNpZ25hbDogc2lnbmFsLFxuICAgIGNhY2hlOiAnbm8tc3RvcmUnLFxuICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgdmFyIHJlYWRlciA9IHJlc3BvbnNlLmJvZHkuZ2V0UmVhZGVyKClcbiAgICAgIG9uU3RhcnRDYWxsYmFjayhcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICByZXNwb25zZS5zdGF0dXNUZXh0LFxuICAgICAgICByZXNwb25zZS5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJyksXG4gICAgICAgIG5ldyBIZWFkZXJzV3JhcHBlcihyZXNwb25zZS5oZWFkZXJzKSxcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnRyb2xsZXIuYWJvcnQoKVxuICAgICAgICAgIHJlYWRlci5jYW5jZWwoKVxuICAgICAgICB9XG4gICAgICApXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgcmVhZE5leHRDaHVuayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZWFkZXJcbiAgICAgICAgICAgIC5yZWFkKClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdC5kb25lKSB7XG4gICAgICAgICAgICAgICAgLy8gTm90ZTogYnl0ZXMgaW4gdGV4dERlY29kZXIgYXJlIGlnbm9yZWRcbiAgICAgICAgICAgICAgICByZXNvbHZlKHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY2h1bmsgPSB0ZXh0RGVjb2Rlci5kZWNvZGUocmVzdWx0LnZhbHVlLCB7IHN0cmVhbTogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3NDYWxsYmFjayhjaHVuaylcbiAgICAgICAgICAgICAgICByZWFkTmV4dENodW5rKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFsnY2F0Y2gnXShmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZWFkTmV4dENodW5rKClcbiAgICAgIH0pXG4gICAgfSlcbiAgICAudGhlbihcbiAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgb25GaW5pc2hDYWxsYmFjaygpXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgb25GaW5pc2hDYWxsYmFjaygpXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcbiAgICAgIH1cbiAgICApXG59XG5cbmZ1bmN0aW9uIEV2ZW50VGFyZ2V0KCkge1xuICB0aGlzLl9saXN0ZW5lcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG59XG5cbmZ1bmN0aW9uIHRocm93RXJyb3IoZSkge1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICB0aHJvdyBlXG4gIH0sIDApXG59XG5cbkV2ZW50VGFyZ2V0LnByb3RvdHlwZS5kaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnRhcmdldCA9IHRoaXNcbiAgdmFyIHR5cGVMaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNbZXZlbnQudHlwZV1cbiAgaWYgKHR5cGVMaXN0ZW5lcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGxlbmd0aCA9IHR5cGVMaXN0ZW5lcnMubGVuZ3RoXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdmFyIGxpc3RlbmVyID0gdHlwZUxpc3RlbmVyc1tpXVxuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lci5oYW5kbGVFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZUV2ZW50KGV2ZW50KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhyb3dFcnJvcihlKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuRXZlbnRUYXJnZXQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIpIHtcbiAgdHlwZSA9IFN0cmluZyh0eXBlKVxuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzXG4gIHZhciB0eXBlTGlzdGVuZXJzID0gbGlzdGVuZXJzW3R5cGVdXG4gIGlmICh0eXBlTGlzdGVuZXJzID09IHVuZGVmaW5lZCkge1xuICAgIHR5cGVMaXN0ZW5lcnMgPSBbXVxuICAgIGxpc3RlbmVyc1t0eXBlXSA9IHR5cGVMaXN0ZW5lcnNcbiAgfVxuICB2YXIgZm91bmQgPSBmYWxzZVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHR5cGVMaXN0ZW5lcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodHlwZUxpc3RlbmVyc1tpXSA9PT0gbGlzdGVuZXIpIHtcbiAgICAgIGZvdW5kID0gdHJ1ZVxuICAgIH1cbiAgfVxuICBpZiAoIWZvdW5kKSB7XG4gICAgdHlwZUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKVxuICB9XG59XG5FdmVudFRhcmdldC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcikge1xuICB0eXBlID0gU3RyaW5nKHR5cGUpXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNcbiAgdmFyIHR5cGVMaXN0ZW5lcnMgPSBsaXN0ZW5lcnNbdHlwZV1cbiAgaWYgKHR5cGVMaXN0ZW5lcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGZpbHRlcmVkID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHR5cGVMaXN0ZW5lcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0eXBlTGlzdGVuZXJzW2ldICE9PSBsaXN0ZW5lcikge1xuICAgICAgICBmaWx0ZXJlZC5wdXNoKHR5cGVMaXN0ZW5lcnNbaV0pXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChmaWx0ZXJlZC5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSBsaXN0ZW5lcnNbdHlwZV1cbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdGVuZXJzW3R5cGVdID0gZmlsdGVyZWRcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gRXZlbnQodHlwZSkge1xuICB0aGlzLnR5cGUgPSB0eXBlXG4gIHRoaXMudGFyZ2V0ID0gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIE1lc3NhZ2VFdmVudCh0eXBlLCBvcHRpb25zKSB7XG4gIEV2ZW50LmNhbGwodGhpcywgdHlwZSlcbiAgdGhpcy5kYXRhID0gb3B0aW9ucy5kYXRhXG4gIHRoaXMubGFzdEV2ZW50SWQgPSBvcHRpb25zLmxhc3RFdmVudElkXG59XG5cbk1lc3NhZ2VFdmVudC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50LnByb3RvdHlwZSlcblxuZnVuY3Rpb24gQ29ubmVjdGlvbkV2ZW50KHR5cGUsIG9wdGlvbnMpIHtcbiAgRXZlbnQuY2FsbCh0aGlzLCB0eXBlKVxuICB0aGlzLnN0YXR1cyA9IG9wdGlvbnMuc3RhdHVzXG4gIHRoaXMuc3RhdHVzVGV4dCA9IG9wdGlvbnMuc3RhdHVzVGV4dFxuICB0aGlzLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnNcbn1cblxuQ29ubmVjdGlvbkV2ZW50LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnQucHJvdG90eXBlKVxuXG52YXIgV0FJVElORyA9IC0xXG52YXIgQ09OTkVDVElORyA9IDBcbnZhciBPUEVOID0gMVxudmFyIENMT1NFRCA9IDJcblxudmFyIEFGVEVSX0NSID0gLTFcbnZhciBGSUVMRF9TVEFSVCA9IDBcbnZhciBGSUVMRCA9IDFcbnZhciBWQUxVRV9TVEFSVCA9IDJcbnZhciBWQUxVRSA9IDNcblxudmFyIGNvbnRlbnRUeXBlUmVnRXhwID0gL150ZXh0XFwvZXZlbnRcXC1zdHJlYW07PyhcXHMqY2hhcnNldFxcPXV0ZlxcLTgpPyQvaVxuXG52YXIgTUlOSU1VTV9EVVJBVElPTiA9IDEwMDBcbnZhciBNQVhJTVVNX0RVUkFUSU9OID0gMTgwMDAwMDBcblxudmFyIHBhcnNlRHVyYXRpb24gPSBmdW5jdGlvbiAodmFsdWUsIGRlZikge1xuICB2YXIgbiA9IHBhcnNlSW50KHZhbHVlLCAxMClcbiAgaWYgKG4gIT09IG4pIHtcbiAgICBuID0gZGVmXG4gIH1cbiAgcmV0dXJuIGNsYW1wRHVyYXRpb24obilcbn1cbnZhciBjbGFtcER1cmF0aW9uID0gZnVuY3Rpb24gKG4pIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG4sIE1JTklNVU1fRFVSQVRJT04pLCBNQVhJTVVNX0RVUkFUSU9OKVxufVxuXG52YXIgZmlyZSA9IGZ1bmN0aW9uICh0aGF0LCBmLCBldmVudCkge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZi5jYWxsKHRoYXQsIGV2ZW50KVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIHRocm93RXJyb3IoZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBFdmVudFNvdXJjZVBvbHlmaWxsKHVybCwgb3B0aW9ucykge1xuICBFdmVudFRhcmdldC5jYWxsKHRoaXMpXG5cbiAgdGhpcy5vbm9wZW4gPSB1bmRlZmluZWRcbiAgdGhpcy5vbm1lc3NhZ2UgPSB1bmRlZmluZWRcbiAgdGhpcy5vbmVycm9yID0gdW5kZWZpbmVkXG5cbiAgdGhpcy51cmwgPSB1bmRlZmluZWRcbiAgdGhpcy5yZWFkeVN0YXRlID0gdW5kZWZpbmVkXG4gIHRoaXMud2l0aENyZWRlbnRpYWxzID0gdW5kZWZpbmVkXG5cbiAgdGhpcy5fY2xvc2UgPSB1bmRlZmluZWRcblxuICBzdGFydCh0aGlzLCB1cmwsIG9wdGlvbnMpXG59XG5cbnZhciBpc0ZldGNoU3VwcG9ydGVkID1cbiAgZmV0Y2ggIT0gdW5kZWZpbmVkICYmIFJlc3BvbnNlICE9IHVuZGVmaW5lZCAmJiAnYm9keScgaW4gUmVzcG9uc2UucHJvdG90eXBlXG5cbmZ1bmN0aW9uIHN0YXJ0KGVzLCB1cmwsIG9wdGlvbnMpIHtcbiAgdXJsID0gU3RyaW5nKHVybClcbiAgdmFyIHdpdGhDcmVkZW50aWFscyA9IG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIEJvb2xlYW4ob3B0aW9ucy53aXRoQ3JlZGVudGlhbHMpXG5cbiAgdmFyIGluaXRpYWxSZXRyeSA9IGNsYW1wRHVyYXRpb24oMTAwMClcbiAgdmFyIGhlYXJ0YmVhdFRpbWVvdXQgPVxuICAgIG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuaGVhcnRiZWF0VGltZW91dCAhPSB1bmRlZmluZWRcbiAgICAgID8gcGFyc2VEdXJhdGlvbihvcHRpb25zLmhlYXJ0YmVhdFRpbWVvdXQsIDQ1MDAwKVxuICAgICAgOiBjbGFtcER1cmF0aW9uKDQ1MDAwKVxuXG4gIHZhciBsYXN0RXZlbnRJZCA9ICcnXG4gIHZhciByZXRyeSA9IGluaXRpYWxSZXRyeVxuICB2YXIgd2FzQWN0aXZpdHkgPSBmYWxzZVxuICB2YXIgaGVhZGVycyA9XG4gICAgb3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgb3B0aW9ucy5oZWFkZXJzICE9IHVuZGVmaW5lZFxuICAgICAgPyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuaGVhZGVycykpXG4gICAgICA6IHVuZGVmaW5lZFxuICB2YXIgQ3VycmVudFRyYW5zcG9ydCA9XG4gICAgb3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgb3B0aW9ucy5UcmFuc3BvcnQgIT0gdW5kZWZpbmVkXG4gICAgICA/IG9wdGlvbnMuVHJhbnNwb3J0XG4gICAgICA6IFhNTEh0dHBSZXF1ZXN0XG4gIHZhciB4aHIgPVxuICAgIGlzRmV0Y2hTdXBwb3J0ZWQgJiZcbiAgICAhKG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuVHJhbnNwb3J0ICE9IHVuZGVmaW5lZClcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IG5ldyBYSFJXcmFwcGVyKG5ldyBDdXJyZW50VHJhbnNwb3J0KCkpXG4gIHZhciB0cmFuc3BvcnQgPSB4aHIgPT0gdW5kZWZpbmVkID8gbmV3IEZldGNoVHJhbnNwb3J0KCkgOiBuZXcgWEhSVHJhbnNwb3J0KClcbiAgdmFyIGNhbmNlbEZ1bmN0aW9uID0gdW5kZWZpbmVkXG4gIHZhciB0aW1lb3V0ID0gMFxuICB2YXIgY3VycmVudFN0YXRlID0gV0FJVElOR1xuICB2YXIgZGF0YUJ1ZmZlciA9ICcnXG4gIHZhciBsYXN0RXZlbnRJZEJ1ZmZlciA9ICcnXG4gIHZhciBldmVudFR5cGVCdWZmZXIgPSAnJ1xuXG4gIHZhciB0ZXh0QnVmZmVyID0gJydcbiAgdmFyIHN0YXRlID0gRklFTERfU1RBUlRcbiAgdmFyIGZpZWxkU3RhcnQgPSAwXG4gIHZhciB2YWx1ZVN0YXJ0ID0gMFxuXG4gIHZhciBvblN0YXJ0ID0gZnVuY3Rpb24gKHN0YXR1cywgc3RhdHVzVGV4dCwgY29udGVudFR5cGUsIGhlYWRlcnMsIGNhbmNlbCkge1xuICAgIGlmIChjdXJyZW50U3RhdGUgPT09IENPTk5FQ1RJTkcpIHtcbiAgICAgIGNhbmNlbEZ1bmN0aW9uID0gY2FuY2VsXG4gICAgICBpZiAoXG4gICAgICAgIHN0YXR1cyA9PT0gMjAwICYmXG4gICAgICAgIGNvbnRlbnRUeXBlICE9IHVuZGVmaW5lZCAmJlxuICAgICAgICBjb250ZW50VHlwZVJlZ0V4cC50ZXN0KGNvbnRlbnRUeXBlKVxuICAgICAgKSB7XG4gICAgICAgIGN1cnJlbnRTdGF0ZSA9IE9QRU5cbiAgICAgICAgd2FzQWN0aXZpdHkgPSB0cnVlXG4gICAgICAgIHJldHJ5ID0gaW5pdGlhbFJldHJ5XG4gICAgICAgIGVzLnJlYWR5U3RhdGUgPSBPUEVOXG4gICAgICAgIHZhciBldmVudCA9IG5ldyBDb25uZWN0aW9uRXZlbnQoJ29wZW4nLCB7XG4gICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgICAgc3RhdHVzVGV4dDogc3RhdHVzVGV4dCxcbiAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICB9KVxuICAgICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgICAgICBmaXJlKGVzLCBlcy5vbm9wZW4sIGV2ZW50KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSAnJ1xuICAgICAgICBpZiAoc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICBpZiAoc3RhdHVzVGV4dCkge1xuICAgICAgICAgICAgc3RhdHVzVGV4dCA9IHN0YXR1c1RleHQucmVwbGFjZSgvXFxzKy9nLCAnICcpXG4gICAgICAgICAgfVxuICAgICAgICAgIG1lc3NhZ2UgPVxuICAgICAgICAgICAgXCJFdmVudFNvdXJjZSdzIHJlc3BvbnNlIGhhcyBhIHN0YXR1cyBcIiArXG4gICAgICAgICAgICBzdGF0dXMgK1xuICAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgIHN0YXR1c1RleHQgK1xuICAgICAgICAgICAgJyB0aGF0IGlzIG5vdCAyMDAuIEFib3J0aW5nIHRoZSBjb25uZWN0aW9uLidcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZXNzYWdlID1cbiAgICAgICAgICAgIFwiRXZlbnRTb3VyY2UncyByZXNwb25zZSBoYXMgYSBDb250ZW50LVR5cGUgc3BlY2lmeWluZyBhbiB1bnN1cHBvcnRlZCB0eXBlOiBcIiArXG4gICAgICAgICAgICAoY29udGVudFR5cGUgPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgID8gJy0nXG4gICAgICAgICAgICAgIDogY29udGVudFR5cGUucmVwbGFjZSgvXFxzKy9nLCAnICcpKSArXG4gICAgICAgICAgICAnLiBBYm9ydGluZyB0aGUgY29ubmVjdGlvbi4nXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3dFcnJvcihuZXcgRXJyb3IobWVzc2FnZSkpXG4gICAgICAgIGNsb3NlKClcbiAgICAgICAgdmFyIGV2ZW50ID0gbmV3IENvbm5lY3Rpb25FdmVudCgnZXJyb3InLCB7XG4gICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgICAgc3RhdHVzVGV4dDogc3RhdHVzVGV4dCxcbiAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICB9KVxuICAgICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgICAgICBmaXJlKGVzLCBlcy5vbmVycm9yLCBldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgb25Qcm9ncmVzcyA9IGZ1bmN0aW9uICh0ZXh0Q2h1bmspIHtcbiAgICBpZiAoY3VycmVudFN0YXRlID09PSBPUEVOKSB7XG4gICAgICB2YXIgbiA9IC0xXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRleHRDaHVuay5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgYyA9IHRleHRDaHVuay5jaGFyQ29kZUF0KGkpXG4gICAgICAgIGlmIChjID09PSAnXFxuJy5jaGFyQ29kZUF0KDApIHx8IGMgPT09ICdcXHInLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgICBuID0gaVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgY2h1bmsgPSAobiAhPT0gLTEgPyB0ZXh0QnVmZmVyIDogJycpICsgdGV4dENodW5rLnNsaWNlKDAsIG4gKyAxKVxuICAgICAgdGV4dEJ1ZmZlciA9IChuID09PSAtMSA/IHRleHRCdWZmZXIgOiAnJykgKyB0ZXh0Q2h1bmsuc2xpY2UobiArIDEpXG4gICAgICBpZiAoY2h1bmsgIT09ICcnKSB7XG4gICAgICAgIHdhc0FjdGl2aXR5ID0gdHJ1ZVxuICAgICAgfVxuICAgICAgZm9yICh2YXIgcG9zaXRpb24gPSAwOyBwb3NpdGlvbiA8IGNodW5rLmxlbmd0aDsgcG9zaXRpb24gKz0gMSkge1xuICAgICAgICB2YXIgYyA9IGNodW5rLmNoYXJDb2RlQXQocG9zaXRpb24pXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gQUZURVJfQ1IgJiYgYyA9PT0gJ1xcbicuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgIHN0YXRlID0gRklFTERfU1RBUlRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEFGVEVSX0NSKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEZJRUxEX1NUQVJUXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjID09PSAnXFxyJy5jaGFyQ29kZUF0KDApIHx8IGMgPT09ICdcXG4nLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZSAhPT0gRklFTERfU1RBUlQpIHtcbiAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRCkge1xuICAgICAgICAgICAgICAgIHZhbHVlU3RhcnQgPSBwb3NpdGlvbiArIDFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXIgZmllbGQgPSBjaHVuay5zbGljZShmaWVsZFN0YXJ0LCB2YWx1ZVN0YXJ0IC0gMSlcbiAgICAgICAgICAgICAgdmFyIHZhbHVlID0gY2h1bmsuc2xpY2UoXG4gICAgICAgICAgICAgICAgdmFsdWVTdGFydCArXG4gICAgICAgICAgICAgICAgICAodmFsdWVTdGFydCA8IHBvc2l0aW9uICYmXG4gICAgICAgICAgICAgICAgICBjaHVuay5jaGFyQ29kZUF0KHZhbHVlU3RhcnQpID09PSAnICcuY2hhckNvZGVBdCgwKVxuICAgICAgICAgICAgICAgICAgICA/IDFcbiAgICAgICAgICAgICAgICAgICAgOiAwKSxcbiAgICAgICAgICAgICAgICBwb3NpdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGlmIChmaWVsZCA9PT0gJ2RhdGEnKSB7XG4gICAgICAgICAgICAgICAgZGF0YUJ1ZmZlciArPSAnXFxuJ1xuICAgICAgICAgICAgICAgIGRhdGFCdWZmZXIgKz0gdmFsdWVcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ2lkJykge1xuICAgICAgICAgICAgICAgIGxhc3RFdmVudElkQnVmZmVyID0gdmFsdWVcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ2V2ZW50Jykge1xuICAgICAgICAgICAgICAgIGV2ZW50VHlwZUJ1ZmZlciA9IHZhbHVlXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09ICdyZXRyeScpIHtcbiAgICAgICAgICAgICAgICBpbml0aWFsUmV0cnkgPSBwYXJzZUR1cmF0aW9uKHZhbHVlLCBpbml0aWFsUmV0cnkpXG4gICAgICAgICAgICAgICAgcmV0cnkgPSBpbml0aWFsUmV0cnlcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ2hlYXJ0YmVhdFRpbWVvdXQnKSB7XG4gICAgICAgICAgICAgICAgaGVhcnRiZWF0VGltZW91dCA9IHBhcnNlRHVyYXRpb24odmFsdWUsIGhlYXJ0YmVhdFRpbWVvdXQpXG4gICAgICAgICAgICAgICAgaWYgKHRpbWVvdXQgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBvblRpbWVvdXQoKVxuICAgICAgICAgICAgICAgICAgfSwgaGVhcnRiZWF0VGltZW91dClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gRklFTERfU1RBUlQpIHtcbiAgICAgICAgICAgICAgaWYgKGRhdGFCdWZmZXIgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgbGFzdEV2ZW50SWQgPSBsYXN0RXZlbnRJZEJ1ZmZlclxuICAgICAgICAgICAgICAgIGlmIChldmVudFR5cGVCdWZmZXIgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICBldmVudFR5cGVCdWZmZXIgPSAnbWVzc2FnZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IE1lc3NhZ2VFdmVudChldmVudFR5cGVCdWZmZXIsIHtcbiAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFCdWZmZXIuc2xpY2UoMSksXG4gICAgICAgICAgICAgICAgICBsYXN0RXZlbnRJZDogbGFzdEV2ZW50SWRCdWZmZXIsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgICAgICAgICAgICAgIGlmIChldmVudFR5cGVCdWZmZXIgPT09ICdtZXNzYWdlJykge1xuICAgICAgICAgICAgICAgICAgZmlyZShlcywgZXMub25tZXNzYWdlLCBldmVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGF0YUJ1ZmZlciA9ICcnXG4gICAgICAgICAgICAgIGV2ZW50VHlwZUJ1ZmZlciA9ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGF0ZSA9IGMgPT09ICdcXHInLmNoYXJDb2RlQXQoMCkgPyBBRlRFUl9DUiA6IEZJRUxEX1NUQVJUXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gRklFTERfU1RBUlQpIHtcbiAgICAgICAgICAgICAgZmllbGRTdGFydCA9IHBvc2l0aW9uXG4gICAgICAgICAgICAgIHN0YXRlID0gRklFTERcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gRklFTEQpIHtcbiAgICAgICAgICAgICAgaWYgKGMgPT09ICc6Jy5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVTdGFydCA9IHBvc2l0aW9uICsgMVxuICAgICAgICAgICAgICAgIHN0YXRlID0gVkFMVUVfU1RBUlRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gVkFMVUVfU1RBUlQpIHtcbiAgICAgICAgICAgICAgc3RhdGUgPSBWQUxVRVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBvbkZpbmlzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY3VycmVudFN0YXRlID09PSBPUEVOIHx8IGN1cnJlbnRTdGF0ZSA9PT0gQ09OTkVDVElORykge1xuICAgICAgY3VycmVudFN0YXRlID0gV0FJVElOR1xuICAgICAgaWYgKHRpbWVvdXQgIT09IDApIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICAgIHRpbWVvdXQgPSAwXG4gICAgICB9XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9uVGltZW91dCgpXG4gICAgICB9LCByZXRyeSlcbiAgICAgIHJldHJ5ID0gY2xhbXBEdXJhdGlvbihNYXRoLm1pbihpbml0aWFsUmV0cnkgKiAxNiwgcmV0cnkgKiAyKSlcblxuICAgICAgZXMucmVhZHlTdGF0ZSA9IENPTk5FQ1RJTkdcbiAgICAgIHZhciBldmVudCA9IG5ldyBFdmVudCgnZXJyb3InKVxuICAgICAgZXMuZGlzcGF0Y2hFdmVudChldmVudClcbiAgICAgIGZpcmUoZXMsIGVzLm9uZXJyb3IsIGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIHZhciBjbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjdXJyZW50U3RhdGUgPSBDTE9TRURcbiAgICBpZiAoY2FuY2VsRnVuY3Rpb24gIT0gdW5kZWZpbmVkKSB7XG4gICAgICBjYW5jZWxGdW5jdGlvbigpXG4gICAgICBjYW5jZWxGdW5jdGlvbiA9IHVuZGVmaW5lZFxuICAgIH1cbiAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICB0aW1lb3V0ID0gMFxuICAgIH1cbiAgICBlcy5yZWFkeVN0YXRlID0gQ0xPU0VEXG4gIH1cblxuICB2YXIgb25UaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRpbWVvdXQgPSAwXG5cbiAgICBpZiAoY3VycmVudFN0YXRlICE9PSBXQUlUSU5HKSB7XG4gICAgICBpZiAoIXdhc0FjdGl2aXR5ICYmIGNhbmNlbEZ1bmN0aW9uICE9IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvd0Vycm9yKFxuICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICdObyBhY3Rpdml0eSB3aXRoaW4gJyArXG4gICAgICAgICAgICAgIGhlYXJ0YmVhdFRpbWVvdXQgK1xuICAgICAgICAgICAgICAnIG1pbGxpc2Vjb25kcy4gUmVjb25uZWN0aW5nLidcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgY2FuY2VsRnVuY3Rpb24oKVxuICAgICAgICBjYW5jZWxGdW5jdGlvbiA9IHVuZGVmaW5lZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FzQWN0aXZpdHkgPSBmYWxzZVxuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgb25UaW1lb3V0KClcbiAgICAgICAgfSwgaGVhcnRiZWF0VGltZW91dClcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHdhc0FjdGl2aXR5ID0gZmFsc2VcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBvblRpbWVvdXQoKVxuICAgIH0sIGhlYXJ0YmVhdFRpbWVvdXQpXG5cbiAgICBjdXJyZW50U3RhdGUgPSBDT05ORUNUSU5HXG4gICAgZGF0YUJ1ZmZlciA9ICcnXG4gICAgZXZlbnRUeXBlQnVmZmVyID0gJydcbiAgICBsYXN0RXZlbnRJZEJ1ZmZlciA9IGxhc3RFdmVudElkXG4gICAgdGV4dEJ1ZmZlciA9ICcnXG4gICAgZmllbGRTdGFydCA9IDBcbiAgICB2YWx1ZVN0YXJ0ID0gMFxuICAgIHN0YXRlID0gRklFTERfU1RBUlRcblxuICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTQyODkxNlxuICAgIC8vIFJlcXVlc3QgaGVhZGVyIGZpZWxkIExhc3QtRXZlbnQtSUQgaXMgbm90IGFsbG93ZWQgYnkgQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycy5cbiAgICB2YXIgcmVxdWVzdFVSTCA9IHVybFxuICAgIGlmICh1cmwuc2xpY2UoMCwgNSkgIT09ICdkYXRhOicgJiYgdXJsLnNsaWNlKDAsIDUpICE9PSAnYmxvYjonKSB7XG4gICAgICBpZiAobGFzdEV2ZW50SWQgIT09ICcnKSB7XG4gICAgICAgIHJlcXVlc3RVUkwgKz1cbiAgICAgICAgICAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICtcbiAgICAgICAgICAnbGFzdEV2ZW50SWQ9JyArXG4gICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KGxhc3RFdmVudElkKVxuICAgICAgfVxuICAgIH1cbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSB7fVxuICAgIHJlcXVlc3RIZWFkZXJzWydBY2NlcHQnXSA9ICd0ZXh0L2V2ZW50LXN0cmVhbSdcbiAgICBpZiAoaGVhZGVycyAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gaGVhZGVycykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhlYWRlcnMsIG5hbWUpKSB7XG4gICAgICAgICAgcmVxdWVzdEhlYWRlcnNbbmFtZV0gPSBoZWFkZXJzW25hbWVdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHRyYW5zcG9ydC5vcGVuKFxuICAgICAgICB4aHIsXG4gICAgICAgIG9uU3RhcnQsXG4gICAgICAgIG9uUHJvZ3Jlc3MsXG4gICAgICAgIG9uRmluaXNoLFxuICAgICAgICByZXF1ZXN0VVJMLFxuICAgICAgICB3aXRoQ3JlZGVudGlhbHMsXG4gICAgICAgIHJlcXVlc3RIZWFkZXJzXG4gICAgICApXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNsb3NlKClcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuICB9XG5cbiAgZXMudXJsID0gdXJsXG4gIGVzLnJlYWR5U3RhdGUgPSBDT05ORUNUSU5HXG4gIGVzLndpdGhDcmVkZW50aWFscyA9IHdpdGhDcmVkZW50aWFsc1xuICBlcy5fY2xvc2UgPSBjbG9zZVxuXG4gIG9uVGltZW91dCgpXG59XG5cbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFdmVudFRhcmdldC5wcm90b3R5cGUpXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5DT05ORUNUSU5HID0gQ09OTkVDVElOR1xuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuT1BFTiA9IE9QRU5cbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLkNMT1NFRCA9IENMT1NFRFxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX2Nsb3NlKClcbn1cblxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5DT05ORUNUSU5HID0gQ09OTkVDVElOR1xuRXZlbnRTb3VyY2VQb2x5ZmlsbC5PUEVOID0gT1BFTlxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5DTE9TRUQgPSBDTE9TRURcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLndpdGhDcmVkZW50aWFscyA9IHVuZGVmaW5lZFxuXG5leHBvcnQgZGVmYXVsdCBFdmVudFNvdXJjZVBvbHlmaWxsXG4iLCJleHBvcnQgZnVuY3Rpb24gZGlzcGxheUNvbnRlbnQoY2FsbGJhY2spIHtcbiAgLy8gVGhpcyBpcyB0aGUgZmFsbGJhY2sgaGVscGVyIHRoYXQgcmVtb3ZlcyBOZXh0LmpzJyBuby1GT1VDIHN0eWxlcyB3aGVuXG4gIC8vIENTUyBtb2RlIGlzIGVuYWJsZWQuIFRoaXMgb25seSByZWFsbHkgYWN0aXZhdGVzIGlmIHlvdSBoYXZlbid0IGNyZWF0ZWRcbiAgLy8gX2FueV8gc3R5bGVzIGluIHlvdXIgYXBwbGljYXRpb24geWV0LlxuICA7KHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgc2V0VGltZW91dCkoZnVuY3Rpb24gKCkge1xuICAgIGZvciAoXG4gICAgICB2YXIgeCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5leHQtaGlkZS1mb3VjXScpLCBpID0geC5sZW5ndGg7XG4gICAgICBpLS07XG5cbiAgICApIHtcbiAgICAgIHhbaV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh4W2ldKVxuICAgIH1cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKClcbiAgICB9XG4gIH0pXG59XG4iLCIvKiBnbG9iYWwgbG9jYXRpb24gKi9cblxuaW1wb3J0IGZldGNoIGZyb20gJ25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvdW5mZXRjaCdcbmltcG9ydCB7IGdldEV2ZW50U291cmNlV3JhcHBlciB9IGZyb20gJy4vZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZSdcblxubGV0IGV2dFNvdXJjZVxuZXhwb3J0IGxldCBjdXJyZW50UGFnZVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VQaW5nKCkge1xuICBpZiAoZXZ0U291cmNlKSBldnRTb3VyY2UuY2xvc2UoKVxuICBldnRTb3VyY2UgPSBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cFBpbmcoYXNzZXRQcmVmaXgsIHBhdGhuYW1lRm4sIHJldHJ5KSB7XG4gIGNvbnN0IHBhdGhuYW1lID0gcGF0aG5hbWVGbigpXG5cbiAgLy8gTWFrZSBzdXJlIHRvIG9ubHkgY3JlYXRlIG5ldyBFdmVudFNvdXJjZSByZXF1ZXN0IGlmIHBhZ2UgaGFzIGNoYW5nZWRcbiAgaWYgKHBhdGhuYW1lID09PSBjdXJyZW50UGFnZSAmJiAhcmV0cnkpIHJldHVyblxuICBjdXJyZW50UGFnZSA9IHBhdGhuYW1lXG4gIC8vIGNsb3NlIGN1cnJlbnQgRXZlbnRTb3VyY2UgY29ubmVjdGlvblxuICBjbG9zZVBpbmcoKVxuXG4gIGNvbnN0IHVybCA9IGAke2Fzc2V0UHJlZml4fS9fbmV4dC93ZWJwYWNrLWhtcj9wYWdlPSR7Y3VycmVudFBhZ2V9YFxuICBldnRTb3VyY2UgPSBnZXRFdmVudFNvdXJjZVdyYXBwZXIoeyBwYXRoOiB1cmwsIHRpbWVvdXQ6IDUwMDAsIG9uZGVtYW5kOiAxIH0pXG5cbiAgZXZ0U291cmNlLmFkZE1lc3NhZ2VMaXN0ZW5lcigoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQuZGF0YS5pbmRleE9mKCd7JykgPT09IC0xKSByZXR1cm5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcGF5bG9hZCA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSlcbiAgICAgIGlmIChwYXlsb2FkLmludmFsaWQpIHtcbiAgICAgICAgLy8gUGF5bG9hZCBjYW4gYmUgaW52YWxpZCBldmVuIGlmIHRoZSBwYWdlIGRvZXMgbm90IGV4aXN0LlxuICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYWtlIHN1cmUgaXQgZXhpc3RzIGJlZm9yZSByZWxvYWRpbmcuXG4gICAgICAgIGZldGNoKGxvY2F0aW9uLmhyZWYsIHtcbiAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgfSkudGhlbigocGFnZVJlcykgPT4ge1xuICAgICAgICAgIGlmIChwYWdlUmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ29uLWRlbWFuZC1lbnRyaWVzIGZhaWxlZCB0byBwYXJzZSByZXNwb25zZScsIGVycilcbiAgICB9XG4gIH0pXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9
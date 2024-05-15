module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

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

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _url = __webpack_require__(/*! url */ "url");
var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");
var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));
var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");
function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}
function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }
    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}
function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}
let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};
function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser
  if (!IntersectionObserver) {
    return undefined;
  }
  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }
      const cb = listeners.get(entry.target);
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}
const listenToIntersections = (el, cb) => {
  const observer = getObserver();
  if (!observer) {
    return () => {};
  }
  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }
    listeners.delete(el);
  };
};
class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;
    this.cleanUpListeners = () => {};
    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });
    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;
      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }
      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);
      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }
      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs
      let {
        scroll
      } = this.props;
      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present
      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;
        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };
    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
      }
    }
    this.p = props.prefetch !== false;
  }
  componentWillUnmount() {
    this.cleanUpListeners();
  }
  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }
  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join(
      // Join on an invalid URI character
      '%')];
      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)
    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    _router.default.prefetch(paths[/* href */0], paths[/* asPath */1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });
    prefetched[paths.join(
    // Join on an invalid URI character
    '%')] = true;
  }
  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag
    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error
    const child = _react.Children.only(children);
    const props = {
      ref: el => {
        this.handleRef(el);
        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }
        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }
        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user
    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.
    if (false) {}
    return _react.default.cloneElement(child, props);
  }
}
if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin
  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");
  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.
  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];
      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }
      return null;
    }]).isRequired
  });
}
var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));
exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;
var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");
var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));
exports.withRouter = _withRouter.default; /* global window */
const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready(cb) {
    if (this.router) return cb();
    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter
const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it
Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }
});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;
      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});
function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.
var _default = singletonRouter; // Reexport the withRoute HOC
exports.default = _default;
function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.
const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance
exports.createRouter = createRouter;
function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};
  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful
      continue;
    }
    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it
  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.default = withRouter;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }
  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;
  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }
  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt; /*
                        MIT License
                        Copyright (c) Jason Miller (https://jasonformat.com/)
                        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                        */ // This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file
function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;
var _url2 = __webpack_require__(/*! url */ "url");
var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));
var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");
var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");
var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} /* global __NEXT_DATA__ */ // tslint:disable:no-console
const basePath =  false || '';
function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}
function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}
function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}
const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);
function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;
  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath(
      // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }
        throw new Error(`Failed to load static props`);
      }
      return res.json();
    });
  }
  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }
    throw err;
  });
}
class Router {
  /**
  * Map of all components loaded in `Router`
  */ // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site
      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.
      if (this._bps && !this._bps(e.state)) {
        return;
      }
      const {
        url,
        as,
        options
      } = e.state;
      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }
      this.replace(url, as, options);
    };
    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };
    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key
    this.route = toRoute(_pathname); // set up the component cache (by route keys)
    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.
    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }
    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch
    this.asPath =
    // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site
    this.isSsr = true;
    this.isFallback = isFallback;
    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.
  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }
  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];
    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }
    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated
    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }
    if (route === this.route) {
      this.notify(newData);
    }
  }
  reload() {
    window.location.reload();
  } /**
    * Go back in history
    */
  back() {
    window.history.back();
  } /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */
  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  } /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */
  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }
  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry
      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.
      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.
      if (false) {}
      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.
      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }
      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);
      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }
        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url
      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }
      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;
      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);
          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }
            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }
      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;
        if (error && error.cancelled) {
          return resolve(false);
        }
        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }
        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }
          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }
  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }
      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }
    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      },
      // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }
  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.
    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }
    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.
          err.cancelled = true; // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }
        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }
        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };
    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }
      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;
      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");
        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }
      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component,
      // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }
  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  } /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */
  beforePopState(cb) {
    this._bps = cb;
  }
  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same
    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change
    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.
    return oldHash !== newHash;
  }
  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value
    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found
    const idEl = document.getElementById(hash);
    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers
    const nameEl = document.getElementsByName(hash)[0];
    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }
  urlIsNew(asPath) {
    return this.asPath !== asPath;
  } /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */
  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);
      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }
        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries
      if (true) {
        return;
      }
      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }
  async fetchComponent(route) {
    let cancelled = false;
    const cancel = this.clc = () => {
      cancelled = true;
    };
    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);
    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }
    if (cancel === this.clc) {
      this.clc = null;
    }
    return componentResult;
  }
  _getData(fn) {
    let cancelled = false;
    const cancel = () => {
      cancelled = true;
    };
    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }
      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }
      return data;
    });
  }
  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];
    const AppTree = this._wrapApp(App);
    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }
  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }
  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }
}
exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;
function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);
    if (!routeMatch) {
      return false;
    }
    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];
      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes
function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}
function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);
    if (isOptional) {
      $1 = $1.slice(2, -2);
    }
    const isCatchAll = /^(\\\.){3}/.test($1);
    if (isCatchAll) {
      $1 = $1.slice(6);
    }
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest
  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;
var _url = __webpack_require__(/*! url */ "url"); /**
                           * Utils
                           */
function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }
    return result;
  };
}
function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}
function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
  return res.finished || res.headersSent;
}
async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;
    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`
  const res = ctx.res || ctx.ctx && ctx.ctx.res;
  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }
    return {};
  }
  const props = await App.getInitialProps(ctx);
  if (res && isResSent(res)) {
    return props;
  }
  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }
  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }
  return props;
}
const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;
function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }
  return (0, _url.format)(url, options);
}
const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/svg-react-loader/lib/loader.js!./public/images/circle-accent-1.svg":
/*!*****************************************************************************************!*\
  !*** ./node_modules/svg-react-loader/lib/loader.js!./public/images/circle-accent-1.svg ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function CircleAccent1 (props) {
    return React.createElement("svg",props,[React.createElement("circle",{"cx":"69.5","cy":"203.5","r":"203","stroke":"#4D55BC","key":0}),React.createElement("circle",{"opacity":"0.9","cx":"56.5","cy":"216.5","r":"190","stroke":"#4D55BC","key":1}),React.createElement("circle",{"opacity":"0.8","cx":"39.5","cy":"237.5","r":"181","stroke":"#4D55BC","key":2}),React.createElement("circle",{"opacity":"0.7","cx":"27","cy":"256","r":"167.5","stroke":"#4D55BC","key":3}),React.createElement("circle",{"opacity":"0.6","cx":"10","cy":"269","r":"155.5","stroke":"#4D55BC","key":4}),React.createElement("circle",{"opacity":"0.5","cx":"-7.5","cy":"286.5","r":"138","stroke":"#4D55BC","key":5}),React.createElement("circle",{"opacity":"0.4","cx":"-24","cy":"303","r":"121.5","stroke":"#4D55BC","key":6})]);
}

CircleAccent1.defaultProps = {"id":"accent-circle","width":"273","height":"283","viewBox":"0 0 273 283","fill":"none"};

module.exports = CircleAccent1;

CircleAccent1.default = CircleAccent1;


/***/ }),

/***/ "./node_modules/svg-react-loader/lib/loader.js!./public/images/default-avatar.svg":
/*!****************************************************************************************!*\
  !*** ./node_modules/svg-react-loader/lib/loader.js!./public/images/default-avatar.svg ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function DefaultAvatar (props) {
    return React.createElement("svg",props,[React.createElement("mask",{"id":"mask0","maskType":"alpha","maskUnits":"userSpaceOnUse","x":"0","y":"0","width":"90","height":"90","key":0},React.createElement("circle",{"cx":"45","cy":"45","r":"45","fill":"#7176B8"})),React.createElement("g",{"mask":"url(#mask0)","key":1},[React.createElement("circle",{"cx":"45","cy":"45","r":"45","fill":"#7176B8","key":0}),React.createElement("circle",{"cx":"45","cy":"31","r":"19","fill":"#505593","key":1}),React.createElement("circle",{"cx":"44.5","cy":"82.5","r":"34.5","fill":"#505593","key":2})])]);
}

DefaultAvatar.defaultProps = {"width":"90","height":"90","viewBox":"0 0 90 90","fill":"none"};

module.exports = DefaultAvatar;

DefaultAvatar.default = DefaultAvatar;


/***/ }),

/***/ "./node_modules/svg-react-loader/lib/loader.js!./public/images/icon-business-development.svg":
/*!***************************************************************************************************!*\
  !*** ./node_modules/svg-react-loader/lib/loader.js!./public/images/icon-business-development.svg ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function IconBusinessDevelopment (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M44.0833 21.0833H40.2117C40.227 20.7642 40.25 20.446 40.25 20.125C40.25 11.7568 34.9763 4.17163 27.1227 1.24967C27.1074 1.24392 27.0921 1.24008 27.0767 1.23529C27.0729 1.23433 27.07 1.23146 27.0662 1.2305C27.0614 1.22858 27.0566 1.22858 27.0518 1.22763C24.8256 0.414958 22.4969 0 20.125 0C18.5246 0 16.9759 0.207958 15.4828 0.562542C15.3075 0.581708 15.1359 0.627708 14.9711 0.694792C6.36717 2.97946 0 10.8119 0 20.125C0 20.2103 0.0105417 20.2946 0.0115 20.3799C0.014375 20.4298 0.0115 20.4805 0.0182083 20.5285C0.112125 25.1668 1.79592 29.6412 4.80796 33.1631C4.80892 33.1641 4.81083 33.166 4.81179 33.167C4.81371 33.1689 4.81562 33.1708 4.81754 33.1737C8.64896 37.6711 14.2274 40.25 20.125 40.25H37.5389L42.7282 45.4384C43.0943 45.8055 43.585 46 44.0833 46C44.3296 46 44.5798 45.9521 44.8165 45.8543C45.5333 45.5572 46 44.8586 46 44.0833V23C46 21.942 45.1413 21.0833 44.0833 21.0833ZM25.1064 13.1608L27.6077 5.66375C32.9427 8.43908 36.4167 14.0195 36.4167 20.125C36.4167 20.4451 36.4071 20.7652 36.3889 21.0833H31.487C30.9216 19.9851 30.0782 19.0507 29.0135 18.3808L26.3963 16.7574C25.186 15.9984 24.656 14.5178 25.1064 13.1608ZM13.9073 5.07246L14.5216 7.52962C14.836 8.78504 14.3012 10.0759 13.1905 10.7429C11.6438 11.6715 10.5503 13.1464 10.1133 14.8963L9.6945 16.5734C9.34183 17.985 8.027 18.905 6.59142 18.7728C5.72125 18.6904 4.80317 18.606 3.91575 18.5275C4.50992 12.4382 8.47071 7.32646 13.9073 5.07246ZM18.2083 36.3036C15.0305 35.927 12.052 34.6112 9.61496 32.545L10.8598 31.9968C12.5034 31.2666 14.3884 31.2532 16.0387 31.9595L17.7809 32.7022C17.918 32.7625 18.0665 32.8085 18.2083 32.8622V36.3036ZM18.2083 23V28.7184L17.5452 28.4357C14.9222 27.3115 11.9188 27.3326 9.31308 28.4903L7.80563 29.1544C7.49896 29.2895 7.17504 29.4314 6.85975 29.5694C5.33887 27.4409 4.37 24.9713 4.00679 22.3838C4.75046 22.4509 5.5085 22.5208 6.22917 22.5898C6.44863 22.61 6.66712 22.6205 6.88371 22.6205C9.96283 22.6205 12.651 20.5524 13.4128 17.503L13.8316 15.8259C14.0204 15.0698 14.4929 14.4315 15.1627 14.03C17.7292 12.49 18.9664 9.50379 18.24 6.601L17.6027 4.04992C18.4268 3.92054 19.2654 3.83333 20.125 3.83333C21.4446 3.83333 22.746 4.00296 24.0168 4.31442L21.4686 11.9504C20.4595 14.9912 21.6488 18.3032 24.3666 20.01L26.0973 21.0833H20.125C19.067 21.0833 18.2083 21.942 18.2083 23ZM42.1667 39.4555L39.6884 36.9782C39.329 36.6189 38.8412 36.4167 38.3333 36.4167H22.0417V31.4563C22.0417 31.4535 22.0417 31.4506 22.0417 31.4467V24.9167H30.1837C30.1846 24.9167 30.1856 24.9167 30.1865 24.9167C30.1875 24.9167 30.1894 24.9167 30.1904 24.9167H38.1033H42.1667V39.4555Z","key":0}),React.createElement("path",{"d":"M26.8333 28.75H25.875C24.817 28.75 23.9583 29.6087 23.9583 30.6667C23.9583 31.7247 24.817 32.5833 25.875 32.5833H26.8333C27.8913 32.5833 28.75 31.7247 28.75 30.6667C28.75 29.6087 27.8913 28.75 26.8333 28.75Z","key":1}),React.createElement("path",{"d":"M32.5833 28.75H31.625C30.567 28.75 29.7083 29.6087 29.7083 30.6667C29.7083 31.7247 30.567 32.5833 31.625 32.5833H32.5833C33.6413 32.5833 34.5 31.7247 34.5 30.6667C34.5 29.6087 33.6413 28.75 32.5833 28.75Z","key":2}),React.createElement("path",{"d":"M38.3333 28.75H37.375C36.317 28.75 35.4583 29.6087 35.4583 30.6667C35.4583 31.7247 36.317 32.5833 37.375 32.5833H38.3333C39.3913 32.5833 40.25 31.7247 40.25 30.6667C40.25 29.6087 39.3913 28.75 38.3333 28.75Z","key":3})]);
}

IconBusinessDevelopment.defaultProps = {"width":"46","height":"46","viewBox":"0 0 46 46","fill":"none"};

module.exports = IconBusinessDevelopment;

IconBusinessDevelopment.default = IconBusinessDevelopment;


/***/ }),

/***/ "./node_modules/svg-react-loader/lib/loader.js!./public/images/icon-content-writer.svg":
/*!*********************************************************************************************!*\
  !*** ./node_modules/svg-react-loader/lib/loader.js!./public/images/icon-content-writer.svg ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function IconContentWriter (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M44.0833 9.58333H38.3333V1.91667C38.3333 0.858667 37.4747 0 36.4167 0H5.75C2.57887 0 0 2.57887 0 5.75V40.25C0 43.4211 2.57887 46 5.75 46H40.25C43.4211 46 46 43.4211 46 40.25V11.5C46 10.442 45.1413 9.58333 44.0833 9.58333ZM5.75 42.1667C4.69296 42.1667 3.83333 41.307 3.83333 40.25V5.75C3.83333 4.69296 4.69296 3.83333 5.75 3.83333H34.5V11.5V40.25C34.5 40.9227 34.6227 41.5658 34.8354 42.1667H5.75ZM42.1667 40.25C42.1667 41.307 41.307 42.1667 40.25 42.1667C39.193 42.1667 38.3333 41.307 38.3333 40.25V13.4167H42.1667V40.25Z","key":0}),React.createElement("path",{"d":"M28.75 9.58337H9.58332C8.52532 9.58337 7.66666 10.442 7.66666 11.5C7.66666 12.558 8.52532 13.4167 9.58332 13.4167H28.75C29.808 13.4167 30.6667 12.558 30.6667 11.5C30.6667 10.442 29.808 9.58337 28.75 9.58337Z","key":1}),React.createElement("path",{"d":"M24.9167 21.0834H9.58332C8.52532 21.0834 7.66666 21.942 7.66666 23C7.66666 24.058 8.52532 24.9167 9.58332 24.9167H24.9167C25.9747 24.9167 26.8333 24.058 26.8333 23C26.8333 21.942 25.9747 21.0834 24.9167 21.0834Z","key":2}),React.createElement("path",{"d":"M23 26.8334H9.58332C8.52532 26.8334 7.66666 27.692 7.66666 28.75C7.66666 29.808 8.52532 30.6667 9.58332 30.6667H23C24.058 30.6667 24.9167 29.808 24.9167 28.75C24.9167 27.692 24.058 26.8334 23 26.8334Z","key":3}),React.createElement("path",{"d":"M21.0833 32.5834H9.58332C8.52532 32.5834 7.66666 33.442 7.66666 34.5C7.66666 35.558 8.52532 36.4167 9.58332 36.4167H21.0833C22.1413 36.4167 23 35.558 23 34.5C23 33.442 22.1413 32.5834 21.0833 32.5834Z","key":4})]);
}

IconContentWriter.defaultProps = {"width":"46","height":"46","viewBox":"0 0 46 46","fill":"none"};

module.exports = IconContentWriter;

IconContentWriter.default = IconContentWriter;


/***/ }),

/***/ "./node_modules/svg-react-loader/lib/loader.js!./public/images/icon-customer-relationship.svg":
/*!****************************************************************************************************!*\
  !*** ./node_modules/svg-react-loader/lib/loader.js!./public/images/icon-customer-relationship.svg ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function IconCustomerRelationship (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M36.8958 15.3333H36.4167V13.4167C36.4167 6.01833 30.3983 0 23 0C15.6017 0 9.58333 6.01833 9.58333 13.4167V15.3333H9.10417C4.08442 15.3333 0 19.4177 0 24.4375C0 29.4572 4.08442 33.5417 9.10417 33.5417H14.375C15.433 33.5417 16.2917 32.683 16.2917 31.625V17.25C16.2917 16.192 15.433 15.3333 14.375 15.3333H13.4167V13.4167C13.4167 8.13242 17.7157 3.83333 23 3.83333C28.2843 3.83333 32.5833 8.13242 32.5833 13.4167V15.3333H31.625C30.567 15.3333 29.7083 16.192 29.7083 17.25V31.625C29.7083 32.683 30.567 33.5417 31.625 33.5417H32.5833V40.25C32.5833 41.307 31.7237 42.1667 30.6667 42.1667H29.7083V41.2083C29.7083 40.1503 28.8497 39.2917 27.7917 39.2917H21.0833C20.0253 39.2917 19.1667 40.1503 19.1667 41.2083V44.0833C19.1667 45.1413 20.0253 46 21.0833 46H27.7917H30.6667C33.8378 46 36.4167 43.4211 36.4167 40.25V33.5417H36.8958C41.9156 33.5417 46 29.4572 46 24.4375C46 19.4177 41.9156 15.3333 36.8958 15.3333ZM12.4583 23H11.5C10.442 23 9.58333 23.8587 9.58333 24.9167C9.58333 25.9747 10.442 26.8333 11.5 26.8333H12.4583V29.7083H9.10417C6.1985 29.7083 3.83333 27.3441 3.83333 24.4375C3.83333 21.5309 6.1985 19.1667 9.10417 19.1667H12.4583V23ZM36.8958 29.7083H33.5417V26.8333H34.5C35.558 26.8333 36.4167 25.9747 36.4167 24.9167C36.4167 23.8587 35.558 23 34.5 23H33.5417V19.1667H36.8958C39.8015 19.1667 42.1667 21.5309 42.1667 24.4375C42.1667 27.3441 39.8015 29.7083 36.8958 29.7083Z"}));
}

IconCustomerRelationship.defaultProps = {"width":"46","height":"46","viewBox":"0 0 46 46","fill":"none"};

module.exports = IconCustomerRelationship;

IconCustomerRelationship.default = IconCustomerRelationship;


/***/ }),

/***/ "./node_modules/svg-react-loader/lib/loader.js!./public/images/icon-game-development.svg":
/*!***********************************************************************************************!*\
  !*** ./node_modules/svg-react-loader/lib/loader.js!./public/images/icon-game-development.svg ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function IconGameDevelopment (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M18.6051 10.1449C17.8574 9.39662 16.6426 9.39662 15.8949 10.1449L14.375 11.6647L12.8551 10.1449C12.1074 9.39662 10.8926 9.39662 10.1449 10.1449C9.39662 10.8935 9.39662 12.1064 10.1449 12.8551L11.6647 14.375L10.1449 15.8949C9.39662 16.6435 9.39662 17.8564 10.1449 18.6051C10.5187 18.98 11.0091 19.1667 11.5 19.1667C11.9909 19.1667 12.4813 18.98 12.8551 18.6051L14.375 17.0853L15.8949 18.6051C16.2687 18.98 16.7591 19.1667 17.25 19.1667C17.7409 19.1667 18.2313 18.98 18.6051 18.6051C19.3534 17.8564 19.3534 16.6435 18.6051 15.8949L17.0853 14.375L18.6051 12.8551C19.3534 12.1064 19.3534 10.8935 18.6051 10.1449Z","key":0}),React.createElement("path",{"d":"M31.625 24.9167C27.926 24.9167 24.9167 27.9269 24.9167 31.625C24.9167 35.3231 27.926 38.3334 31.625 38.3334C35.324 38.3334 38.3333 35.3231 38.3333 31.625C38.3333 27.9269 35.324 24.9167 31.625 24.9167ZM31.625 34.5C30.0401 34.5 28.75 33.2099 28.75 31.625C28.75 30.0401 30.0401 28.75 31.625 28.75C33.2099 28.75 34.5 30.0401 34.5 31.625C34.5 33.2099 33.2099 34.5 31.625 34.5Z","key":1}),React.createElement("path",{"d":"M45.4385 0.561523C44.6907 -0.186707 43.476 -0.186707 42.7282 0.561523L36.7643 6.52537C35.0405 5.50948 32.8402 5.51229 31.1182 6.6606L28.6419 8.31242L24.54 4.21096C24.5278 4.19832 24.5124 4.1899 24.4997 4.1782C21.7913 1.48429 18.1999 0 14.375 0C10.5332 0 6.92405 1.49693 4.21377 4.21096C1.49693 6.92405 0 10.5332 0 14.375C0 18.2168 1.49693 21.8259 4.21096 24.5362C6.9423 27.2751 10.5847 28.7608 14.3549 28.7608C15.0058 28.7608 15.6609 28.699 16.3155 28.6091L17.3792 29.6737C16.7652 34.1214 18.2504 38.5855 21.4619 41.7872C24.1741 44.5031 27.7832 46 31.625 46C35.4668 46 39.0759 44.5031 41.7862 41.789C44.5031 39.0759 46 35.4668 46 31.625C46 27.7992 44.5148 24.2054 41.819 21.4965C41.8082 21.4848 41.8007 21.4713 41.789 21.461L37.8149 17.4868L39.4873 14.8064C40.5799 13.0564 40.5373 10.9057 39.4929 9.21647L45.4385 3.27087C46.1867 2.52311 46.1867 1.31022 45.4385 0.561523ZM39.075 39.0778C37.0877 41.0694 34.4415 42.1667 31.625 42.1667C28.8085 42.1667 26.1623 41.0694 24.1712 39.075C21.6285 36.5393 20.5583 32.9301 21.3084 29.4191C21.3093 29.414 21.3093 29.4093 21.3103 29.4046C21.3285 29.3162 21.3346 29.2273 21.3402 29.137C21.3421 29.1 21.3505 29.0616 21.3505 29.0251C21.3505 28.954 21.3393 28.8834 21.3313 28.8122C21.3257 28.7594 21.3267 28.706 21.3164 28.6541C21.3075 28.6091 21.2892 28.5661 21.2771 28.5221C21.2569 28.4482 21.2406 28.3724 21.2115 28.3017C21.1938 28.2563 21.1666 28.2161 21.1446 28.1721C21.1109 28.1042 21.0805 28.035 21.0393 27.9718C21.0174 27.9381 20.9883 27.9096 20.9645 27.8778C20.9125 27.808 20.8611 27.7379 20.7998 27.6756C20.796 27.6719 20.7941 27.6672 20.7899 27.6635L18.3365 25.2091C18.3319 25.204 18.3263 25.2012 18.3225 25.1965C18.2687 25.1436 18.2074 25.0996 18.147 25.0538C18.1059 25.022 18.0684 24.9855 18.0254 24.9578C17.9762 24.926 17.922 24.9031 17.87 24.8764C17.8125 24.8455 17.7568 24.8104 17.6973 24.7861C17.5893 24.7421 17.4751 24.7098 17.359 24.6855C17.3553 24.6846 17.3515 24.6827 17.3469 24.6818C17.2584 24.6644 17.1667 24.6607 17.0755 24.656C17.0432 24.6542 17.0104 24.6476 16.9777 24.6476C16.9215 24.6476 16.8649 24.6588 16.8073 24.6635C16.7371 24.6705 16.6665 24.6733 16.5972 24.6864C16.5916 24.6878 16.5851 24.6878 16.579 24.6888C13.0657 25.4389 9.45886 24.3715 6.92031 21.8241C4.93064 19.8377 3.83333 17.1915 3.83333 14.375C3.83333 11.5585 4.93064 8.91231 6.92499 6.92218C8.91231 4.93064 11.5585 3.83333 14.375 3.83333C17.1915 3.83333 19.8377 4.93064 21.825 6.92218C21.833 6.92967 21.8423 6.93528 21.8507 6.94324L27.0219 12.1144C27.0392 12.1326 27.0575 12.1509 27.0757 12.1677L34.0283 19.1208C34.0456 19.1381 34.0629 19.1559 34.0812 19.1732L39.054 24.146C39.0628 24.1549 39.0685 24.1652 39.0769 24.175C41.0694 26.1623 42.1667 28.8085 42.1667 31.625C42.1667 34.4415 41.0694 37.0877 39.075 39.0778ZM31.4055 11.0775L33.2445 9.85052C33.829 9.4598 34.617 9.53748 35.1153 10.0349L36.0255 10.945C36.5154 11.4359 36.6015 12.1893 36.2346 12.7775L35.033 14.7049L31.4055 11.0775Z","key":2}),React.createElement("path",{"d":"M26.2718 24.3551C27.02 23.6064 27.02 22.3935 26.2718 21.6448L24.3551 19.7282C23.6074 18.9799 22.3926 18.9799 21.6449 19.7282C20.8966 20.4769 20.8966 21.6898 21.6449 22.4385L23.5615 24.3551C23.9354 24.7299 24.4258 24.9166 24.9167 24.9166C25.4075 24.9166 25.8979 24.7299 26.2718 24.3551Z","key":3})]);
}

IconGameDevelopment.defaultProps = {"width":"46","height":"46","viewBox":"0 0 46 46","fill":"none"};

module.exports = IconGameDevelopment;

IconGameDevelopment.default = IconGameDevelopment;


/***/ }),

/***/ "./node_modules/svg-react-loader/lib/loader.js!./public/images/icon-play.svg":
/*!***********************************************************************************!*\
  !*** ./node_modules/svg-react-loader/lib/loader.js!./public/images/icon-play.svg ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function IconPlay (props) {
    return React.createElement("svg",props,[React.createElement("circle",{"cx":"23","cy":"23","r":"23","key":0}),React.createElement("path",{"d":"M32 21.2679C33.3333 22.0377 33.3333 23.9623 32 24.7321L20 31.6603C18.6667 32.4301 17 31.4678 17 29.9282L17 16.0718C17 14.5322 18.6667 13.5699 20 14.3397L32 21.2679Z","fill":"white","key":1})]);
}

IconPlay.defaultProps = {"className":"icon","width":"46","height":"46","viewBox":"0 0 46 46","fill":"none"};

module.exports = IconPlay;

IconPlay.default = IconPlay;


/***/ }),

/***/ "./node_modules/svg-react-loader/lib/loader.js!./public/images/icon-product-advertisement.svg":
/*!****************************************************************************************************!*\
  !*** ./node_modules/svg-react-loader/lib/loader.js!./public/images/icon-product-advertisement.svg ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function IconProductAdvertisement (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M45.441 23.5616L43.5244 21.645L29.16 7.28056C29.158 7.27865 29.1561 7.27673 29.1533 7.27386L24.3578 2.47837L22.4411 0.561708C21.6936 -0.186748 20.4784 -0.186748 19.7309 0.561708C18.9825 1.31016 18.9825 2.52341 19.7309 3.27187L20.5695 4.11041L3.48724 31.441L3.27449 31.2283C2.52699 30.4798 1.31183 30.4798 0.564333 31.2283C-0.184123 31.9767 -0.184123 33.19 0.564333 33.9384L2.48099 35.8551L10.1476 43.5218L12.0643 45.4384C12.4381 45.8131 12.9287 46 13.4194 46C13.91 46 14.4007 45.8131 14.7745 45.4384C15.5229 44.69 15.5229 43.4767 14.7745 42.7283L14.5617 42.5155L16.8818 41.0656C17.9302 43.4048 20.2772 45.0417 23.0027 45.0417C26.7018 45.0417 29.711 42.0325 29.711 38.3334C29.711 36.7099 29.1283 35.2082 28.1384 34.0295L41.8923 25.4333L42.7309 26.2718C43.1046 26.6465 43.5953 26.8334 44.086 26.8334C44.5766 26.8334 45.0673 26.6465 45.441 26.2718C46.1895 25.5233 46.1895 24.3101 45.441 23.5616ZM23.0027 41.2083C21.6428 41.2083 20.5014 40.2596 20.2034 38.9888L24.8178 36.1052C25.4733 36.6429 25.8777 37.4613 25.8777 38.3334C25.8777 39.9184 24.5878 41.2083 23.0027 41.2083ZM23.0257 32.7041L17.2144 36.3343C17.2096 36.3372 17.2067 36.341 17.2019 36.3439L11.7797 39.7325L6.26928 34.2221L23.3515 6.89148L25.3286 8.86852L16.6164 21.9363C16.0289 22.817 16.2675 24.0073 17.1482 24.5938C17.4741 24.8132 17.844 24.9167 18.2091 24.9167C18.8282 24.9167 19.4367 24.6168 19.8057 24.0628L28.0924 11.6333L39.1103 22.6512L23.0257 32.7041Z"}));
}

IconProductAdvertisement.defaultProps = {"width":"47","height":"46","viewBox":"0 0 47 46","fill":"none"};

module.exports = IconProductAdvertisement;

IconProductAdvertisement.default = IconProductAdvertisement;


/***/ }),

/***/ "./node_modules/svg-react-loader/lib/loader.js!./public/images/icon-travel-guidance.svg":
/*!**********************************************************************************************!*\
  !*** ./node_modules/svg-react-loader/lib/loader.js!./public/images/icon-travel-guidance.svg ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function IconTravelGuidance (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M1.91667 46H44.0833C45.1413 46 46 45.1413 46 44.0833V32.6849C46 29.597 44.7927 26.699 42.6009 24.5245C40.4082 22.3482 37.5215 21.205 34.4088 21.1877C29.1304 21.2289 26.3659 21.2195 24.9167 21.1956V1.91667C24.9167 0.858663 24.058 0 23 0H1.91667C0.858663 0 0 0.858663 0 1.91667V44.0833C0 45.1413 0.858663 46 1.91667 46ZM3.83333 38.3333H7.66667V42.1667H3.83333V38.3333ZM21.0833 38.3333V42.1667H11.5V38.3333H21.0833ZM34.5 38.3333V42.1667H24.9167V38.3333H34.5ZM38.3333 42.1667V38.3333H42.1667V42.1667H38.3333ZM21.0833 3.83333V7.66667H17.25C16.192 7.66667 15.3333 8.52533 15.3333 9.58333C15.3333 10.6413 16.192 11.5 17.25 11.5H21.0833V15.3333H17.25C16.192 15.3333 15.3333 16.192 15.3333 17.25C15.3333 18.308 16.192 19.1667 17.25 19.1667H21.0833V22.9223C21.0707 23.2003 21.118 23.4829 21.2289 23.7496C21.804 25.1216 21.8068 25.1216 34.4387 25.022C36.4972 25.0355 38.4396 25.7964 39.9 27.2465C41.3618 28.6953 42.1667 30.6264 42.1667 32.6849V34.5H3.83333V3.83333H21.0833Z"}));
}

IconTravelGuidance.defaultProps = {"width":"46","height":"46","viewBox":"0 0 46 46","fill":"none"};

module.exports = IconTravelGuidance;

IconTravelGuidance.default = IconTravelGuidance;


/***/ }),

/***/ "./node_modules/svg-react-loader/lib/loader.js!./public/images/logo.svg":
/*!******************************************************************************!*\
  !*** ./node_modules/svg-react-loader/lib/loader.js!./public/images/logo.svg ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Logo (props) {
    return React.createElement("svg",props,[React.createElement("circle",{"cx":"26","cy":"27","r":"11","fill":"#FE721C","key":0}),React.createElement("path",{"d":"M28.836 14.98V40H24.696V21.244L17.46 40H13.86L6.588 21.244V40H2.484V14.98H7.452L15.732 34.96L23.868 14.98H28.836Z","fill":"white","key":1})]);
}

Logo.defaultProps = {"width":"37","height":"54","viewBox":"0 0 37 54","fill":"none"};

module.exports = Logo;

Logo.default = Logo;


/***/ }),

/***/ "./src/configs/axios/errorHandler.js":
/*!*******************************************!*\
  !*** ./src/configs/axios/errorHandler.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return errorHandler; });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_0__);

function errorHandler(error) {
  if (error) {
    let message;
    if (error.response) {
      if (error.response.status === 500) message = "Something went terribly wrong";else message = error.response.data.message;
      if (typeof message === "string") react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(message);
      return Promise.reject(error);
    }
  }
}

/***/ }),

/***/ "./src/configs/axios/index.js":
/*!************************************!*\
  !*** ./src/configs/axios/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errorHandler */ "./src/configs/axios/errorHandler.js");


const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: `${"https://api.bwamicro.com"}`
});
instance.interceptors.response.use(response => response.data, _errorHandler__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./src/constants/api/courses.js":
/*!**************************************!*\
  !*** ./src/constants/api/courses.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_configs_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/configs/axios */ "./src/configs/axios/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  all: (options = {
    params: {
      status: "published"
    }
  }) => src_configs_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/courses`, options).then(res => res.data),
  details: id => src_configs_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/courses/${id}`).then(res => res.data)
});

/***/ }),

/***/ "./src/helpers/formatThousand.js":
/*!***************************************!*\
  !*** ./src/helpers/formatThousand.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((number = 0) => {
  const thousand = new Intl.NumberFormat();
  return thousand.format(number);
});

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svg_react_loader_public_images_circle_accent_1_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!svg-react-loader!public/images/circle-accent-1.svg */ "./node_modules/svg-react-loader/lib/loader.js!./public/images/circle-accent-1.svg");
/* harmony import */ var _svg_react_loader_public_images_circle_accent_1_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_svg_react_loader_public_images_circle_accent_1_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_parts_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/parts/Header */ "./src/parts/Header.js");
/* harmony import */ var src_parts_Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/parts/Hero */ "./src/parts/Hero.js");
/* harmony import */ var src_parts_Clients__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/parts/Clients */ "./src/parts/Clients.js");
/* harmony import */ var src_parts_ListCourses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/parts/ListCourses */ "./src/parts/ListCourses/index.js");
/* harmony import */ var src_parts_ListCategories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/parts/ListCategories */ "./src/parts/ListCategories/index.js");
/* harmony import */ var src_parts_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/parts/Footer */ "./src/parts/Footer.js");
/* harmony import */ var src_constants_api_courses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/constants/api/courses */ "./src/constants/api/courses.js");
var _jsxFileName = "D:\\Backup\\Programming Courses\\PAII\\KelasOnline\\FRONTEND\\frontpage\\src\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function Home({
  data = []
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "BWAMICRO")), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("section", {
    className: "header-clipping pt-10 min-h-screen md:min-h-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "sunshine max-w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }), __jsx(_svg_react_loader_public_images_circle_accent_1_svg__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "absolute left-0 bottom-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "container mx-auto px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx(src_parts_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), __jsx(src_parts_Hero__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }))), __jsx("section", {
    className: "container px-4 mx-auto md:pt-24",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(src_parts_Clients__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  })), __jsx("section", {
    className: "container px-4 mx-auto md:pt-24",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(src_parts_ListCourses__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: data,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  })), __jsx("section", {
    className: "container px-4 mx-auto md:pt-24",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(src_parts_ListCategories__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  })), __jsx("section", {
    className: "mt-24 bg-indigo-1000 py-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(src_parts_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }))));
}
Home.getInitialProps = async () => {
  try {
    const data = await src_constants_api_courses__WEBPACK_IMPORTED_MODULE_9__["default"].all();
    return {
      data: data.data
    };
  } catch (error) {
    console.error(error);
    return {
      data: []
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/parts/Clients.js":
/*!******************************!*\
  !*** ./src/parts/Clients.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Clients; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Backup\\Programming Courses\\PAII\\KelasOnline\\FRONTEND\\frontpage\\src\\parts\\Clients.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Clients() {
  return __jsx("div", {
    className: "flex flex-wrap justify-center items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full sm:w-1/6 mb-8 md:mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/images/logo-amazon.svg",
    alt: "logo amazon",
    className: "mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "w-full sm:w-1/6 mb-8 md:mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/images/logo-microsoft.svg",
    alt: "logo microsoft",
    className: "mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "w-full sm:w-1/6 mb-8 md:mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/images/logo-tesla.svg",
    alt: "logo tesla",
    className: "mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "w-full sm:w-1/6 mb-8 md:mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/images/logo-google.svg",
    alt: "logo google",
    className: "mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "w-full sm:w-1/6 mb-8 md:mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/images/logo-facebook.svg",
    alt: "logo facebook",
    className: "mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./src/parts/Footer.js":
/*!*****************************!*\
  !*** ./src/parts/Footer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Backup\\Programming Courses\\PAII\\KelasOnline\\FRONTEND\\frontpage\\src\\parts\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Footer() {
  function submit() {}
  return __jsx("footer", {
    className: "container px-4 mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "flex flex-wrap justify-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "w-full md:w-1/6 mb-8 md:mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("h6", {
    className: "text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, "Company"), __jsx("ul", {
    className: "mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "text-indigo-500 hover:text-teal-500 hover:underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "API Developer"))), __jsx("li", {
    className: "mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "text-indigo-500 hover:text-teal-500 hover:underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, "Career"))), __jsx("li", {
    className: "mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "text-indigo-500 hover:text-teal-500 hover:underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, "Our Story"))), __jsx("li", {
    className: "mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "text-indigo-500 hover:text-teal-500 hover:underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, "New Soon"))))), __jsx("div", {
    className: "w-full md:w-1/6 mb-8 md:mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("h6", {
    className: "text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "Student"), __jsx("ul", {
    className: "mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "text-indigo-500 hover:text-teal-500 hover:underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, "Get Scholarship"))), __jsx("li", {
    className: "mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "text-indigo-500 hover:text-teal-500 hover:underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, "Our Pathskills"))), __jsx("li", {
    className: "mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "text-indigo-500 hover:text-teal-500 hover:underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, "All Features"))), __jsx("li", {
    className: "mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "text-indigo-500 hover:text-teal-500 hover:underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, "Refund Policy"))))), __jsx("div", {
    className: "w-full md:w-1/6 mb-8 md:mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx("h6", {
    className: "text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, "Touch Us"), __jsx("p", {
    className: "mt-4 text-indigo-500 leading-loose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, "Micro Centre ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 26
    }
  }), "Alleysi Block X No. 12 ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 36
    }
  }), "Jakarta Selatan, Indonesia ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 40
    }
  }), "+21 2020 5555")), __jsx("div", {
    className: "w-full md:w-2/6 mb-8 md:mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx("h6", {
    className: "text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, "Promotions"), __jsx("p", {
    className: "mt-4 text-indigo-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, "Submit your email for new updates"), __jsx("form", {
    onSubmit: submit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, __jsx("input", {
    type: "text",
    className: "bg-white focus:outline-none border-0 px-6 py-3 mt-6 md:w-1/2",
    placeholder: "Your email addres",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }), __jsx("button", {
    className: "bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-4 md:px-6 py-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, "Daftar Now")))), __jsx("div", {
    className: "border-t pt-8 mt-8 border-gray-800 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "text-indigo-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, "2020 Copyright Micro by BuildWith Angga. All Rights Reserved")));
}

/***/ }),

/***/ "./src/parts/Header.js":
/*!*****************************!*\
  !*** ./src/parts/Header.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _svg_react_loader_public_images_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!svg-react-loader!public/images/logo.svg */ "./node_modules/svg-react-loader/lib/loader.js!./public/images/logo.svg");
/* harmony import */ var _svg_react_loader_public_images_logo_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_svg_react_loader_public_images_logo_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _svg_react_loader_public_images_default_avatar_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!svg-react-loader!public/images/default-avatar.svg */ "./node_modules/svg-react-loader/lib/loader.js!./public/images/default-avatar.svg");
/* harmony import */ var _svg_react_loader_public_images_default_avatar_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_svg_react_loader_public_images_default_avatar_svg__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\Backup\\Programming Courses\\PAII\\KelasOnline\\FRONTEND\\frontpage\\src\\parts\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Header({
  onLight
}) {
  var _User$name;
  const {
    0: User,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(() => null);
  const {
    0: ToggleMenu,
    1: setToggleMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    var _decodeURIComponent$s, _decodeURIComponent, _decodeURIComponent$s2, _decodeURIComponent$s3, _decodeURIComponent$s4;
    const userCookies = (_decodeURIComponent$s = (_decodeURIComponent = decodeURIComponent(window.document.cookie)) === null || _decodeURIComponent === void 0 ? void 0 : (_decodeURIComponent$s2 = _decodeURIComponent.split(";")) === null || _decodeURIComponent$s2 === void 0 ? void 0 : (_decodeURIComponent$s3 = _decodeURIComponent$s2.find) === null || _decodeURIComponent$s3 === void 0 ? void 0 : (_decodeURIComponent$s4 = _decodeURIComponent$s3.call(_decodeURIComponent$s2, item => item.indexOf("BWAMICRO:user") > -1)) === null || _decodeURIComponent$s4 === void 0 ? void 0 : _decodeURIComponent$s4.split("=")[1]) !== null && _decodeURIComponent$s !== void 0 ? _decodeURIComponent$s : null;
    setUser(userCookies ? JSON.parse(userCookies) : null);
  }, []);
  const linkColor = onLight ? "text-gray-900" : "text-white";
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const linkCTA = router.pathname.indexOf("/login") > -1 ? `${"http://localhost:3030"}/register` : `${"http://localhost:3030"}/login`;
  const textCTA = router.pathname.indexOf("/login") > -1 ? "Daftar" : "Masuk";
  return __jsx("header", {
    className: ["flex justify-between items-center", ToggleMenu ? "fixed w-full -mx-4 px-4" : ""].join(" "),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      height: 54,
      zIndex: 50
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(_svg_react_loader_public_images_logo_svg__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: "on-dark",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "flex md:hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("button", {
    onClick: () => setToggleMenu(prev => !prev),
    className: ["toggle z-50", ToggleMenu ? "active" : ""].join(" "),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  })), __jsx("ul", {
    className: ["transition-all duration-200 items-center fixed inset-0 bg-indigo-1000 pt-24 md:pt-0 md:bg-transparent md:relative md:flex md:opacity-100 md:visible", ToggleMenu ? "opacity-100 visible z-20" : "opacity-0 invisible"].join(" "),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: "my-4 md:my-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: [linkColor, "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium"].join(" "),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "Home"))), __jsx("li", {
    className: "my-4 md:my-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: [linkColor, "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium"].join(" "),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, "Pricing"))), __jsx("li", {
    className: "my-4 md:my-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: [linkColor, "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium"].join(" "),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, "Features"))), __jsx("li", {
    className: "my-4 md:my-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: [linkColor, "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium"].join(" "),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, "Story"))), __jsx("li", {
    className: "mt-8 md:mt-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, User ? __jsx("a", {
    target: "_blank",
    rel: "noopener noereferrer",
    href: linkCTA,
    className: "hover:bg-indigo-800 transition-all duration-200 text-white hover:text-teal-500 text-lg px-6 py-3 font-medium ml-6 inline-flex items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "rounded-full overflow-hidden mr-3 border-2 border-orange-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, (User === null || User === void 0 ? void 0 : User.thumbnail) ? __jsx("img", {
    src: User === null || User === void 0 ? void 0 : User.thumbnail,
    alt: (_User$name = User === null || User === void 0 ? void 0 : User.name) !== null && _User$name !== void 0 ? _User$name : "Username",
    className: "object-cover w-8 h-8 inline-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 19
    }
  }) : __jsx(_svg_react_loader_public_images_default_avatar_svg__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "fill-indigo-500 w-8 h-8 inline-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 19
    }
  })), "Hi, ", User.name) : __jsx("a", {
    target: "_blank",
    rel: "noopener noereferrer",
    href: linkCTA,
    className: "bg-indigo-700 hover:bg-indigo-800 transition-all duration-200 text-white hover:text-teal-500 text-lg px-6 py-3 font-medium ml-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, textCTA))));
}
Header.propTypes = {
  onLight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./src/parts/Hero.js":
/*!***************************!*\
  !*** ./src/parts/Hero.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hero; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Backup\\Programming Courses\\PAII\\KelasOnline\\FRONTEND\\frontpage\\src\\parts\\Hero.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Hero() {
  const {
    0: state,
    1: setstate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(() => "");
  function submit() {
    window.open(`${"http://localhost:3030"}/register?email=${state}`);
  }
  return __jsx("div", {
    className: "flex justify-between items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full md:w-1/2 mt-8 md:mt-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "text-5xl text-white mb-5 font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "text-teal-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, "The New"), " Way to", __jsx("br", {
    className: "hidden md:block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }), " Achieve Good", " ", __jsx("span", {
    className: "text-teal-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, "Skills")), __jsx("p", {
    className: "text-white font-light text-lg mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "We provide tons of pathskill that you", " ", __jsx("br", {
    className: "hidden md:block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }), " can choose and focus on"), __jsx("form", {
    onSubmit: submit,
    className: "flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "text",
    onChange: event => setstate(event.target.value),
    className: "bg-white focus:outline-none border-0 px-4 md:px-6 py-3 w-full md:w-1/2",
    value: state,
    placeholder: "Your email addres",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }), __jsx("button", {
    className: "bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-4 md:px-6 py-3 whitespace-no-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "Daftar Now"))), __jsx("div", {
    className: "hidden w-1/2 md:flex justify-end pt-24 pr-16",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "relative",
    style: {
      width: 369,
      height: 440
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "absolute border-indigo-700 border-2 -mt-12 -mr-6 right-0",
    style: {
      width: 324,
      height: 374
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "absolute w-full h-full -mb-8 -ml-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/images/img-hero-mbak-alyssa-cakep.jpg",
    alt: "Mbak Alyssa Cakep euy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "absolute z-10 bg-white py-3 px-4 mt-24",
    style: {
      transform: "translateX(-50%)",
      width: 290
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "text-gray-900 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, "Metode belajar yang santai seperti nonton drakor di Netflix"), __jsx("span", {
    className: "text-gray-600",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "Alyssa, Apps Developer")))));
}

/***/ }),

/***/ "./src/parts/ListCategories/RenderItem.js":
/*!************************************************!*\
  !*** ./src/parts/ListCategories/RenderItem.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RenderItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_helpers_formatThousand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/helpers/formatThousand */ "./src/helpers/formatThousand.js");
var _jsxFileName = "D:\\Backup\\Programming Courses\\PAII\\KelasOnline\\FRONTEND\\frontpage\\src\\parts\\ListCategories\\RenderItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function RenderItem({
  item
}) {
  return __jsx("div", {
    className: "w-3/6 md:w-1/6 px-4 h-100 mb-8 md:mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "card relative transition-all duration-300",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, item.imageName, __jsx("div", {
    className: "card-meta mt-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("h4", {
    className: "text-lg transition-all duration-200 w-1/2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, item.name), __jsx("h5", {
    className: "text-sm transition-all mt-2 duration-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, Object(src_helpers_formatThousand__WEBPACK_IMPORTED_MODULE_2__["default"])(item.total)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "link-wrapped",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  })))));
}

/***/ }),

/***/ "./src/parts/ListCategories/index.js":
/*!*******************************************!*\
  !*** ./src/parts/ListCategories/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RenderItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RenderItem */ "./src/parts/ListCategories/RenderItem.js");
/* harmony import */ var _svg_react_loader_public_images_icon_business_development_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!svg-react-loader!public/images/icon-business-development.svg */ "./node_modules/svg-react-loader/lib/loader.js!./public/images/icon-business-development.svg");
/* harmony import */ var _svg_react_loader_public_images_icon_business_development_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_svg_react_loader_public_images_icon_business_development_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _svg_react_loader_public_images_icon_content_writer_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!svg-react-loader!public/images/icon-content-writer.svg */ "./node_modules/svg-react-loader/lib/loader.js!./public/images/icon-content-writer.svg");
/* harmony import */ var _svg_react_loader_public_images_icon_content_writer_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_svg_react_loader_public_images_icon_content_writer_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _svg_react_loader_public_images_icon_product_advertisement_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!svg-react-loader!public/images/icon-product-advertisement.svg */ "./node_modules/svg-react-loader/lib/loader.js!./public/images/icon-product-advertisement.svg");
/* harmony import */ var _svg_react_loader_public_images_icon_product_advertisement_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_svg_react_loader_public_images_icon_product_advertisement_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _svg_react_loader_public_images_icon_customer_relationship_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!svg-react-loader!public/images/icon-customer-relationship.svg */ "./node_modules/svg-react-loader/lib/loader.js!./public/images/icon-customer-relationship.svg");
/* harmony import */ var _svg_react_loader_public_images_icon_customer_relationship_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_svg_react_loader_public_images_icon_customer_relationship_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _svg_react_loader_public_images_icon_game_development_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!svg-react-loader!public/images/icon-game-development.svg */ "./node_modules/svg-react-loader/lib/loader.js!./public/images/icon-game-development.svg");
/* harmony import */ var _svg_react_loader_public_images_icon_game_development_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_svg_react_loader_public_images_icon_game_development_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _svg_react_loader_public_images_icon_travel_guidance_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! -!svg-react-loader!public/images/icon-travel-guidance.svg */ "./node_modules/svg-react-loader/lib/loader.js!./public/images/icon-travel-guidance.svg");
/* harmony import */ var _svg_react_loader_public_images_icon_travel_guidance_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_svg_react_loader_public_images_icon_travel_guidance_svg__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\Backup\\Programming Courses\\PAII\\KelasOnline\\FRONTEND\\frontpage\\src\\parts\\ListCategories\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function index() {
  const data = [{
    imageName: __jsx(_svg_react_loader_public_images_icon_business_development_svg__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 18
      }
    }),
    name: "Business Development",
    total: 12493
  }, {
    imageName: __jsx(_svg_react_loader_public_images_icon_content_writer_svg__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 18
      }
    }),
    name: "Content Writer",
    total: 839
  }, {
    imageName: __jsx(_svg_react_loader_public_images_icon_product_advertisement_svg__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 18
      }
    }),
    name: "Product Advertisement",
    total: 478
  }, {
    imageName: __jsx(_svg_react_loader_public_images_icon_customer_relationship_svg__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 18
      }
    }),
    name: "Customer Relationship",
    total: 553
  }, {
    imageName: __jsx(_svg_react_loader_public_images_icon_game_development_svg__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 18
      }
    }),
    name: "Game Development",
    total: 7309
  }, {
    imageName: __jsx(_svg_react_loader_public_images_icon_travel_guidance_svg__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 18
      }
    }),
    name: "Travel Guidance",
    total: 73
  }];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "flex justify-between items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "w-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "text-lg text-gray-600",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "Category"), __jsx("h3", {
    className: "text-xl text-gray-900",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, "Explore & ", __jsx("span", {
    className: "text-teal-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 23
    }
  }, "Learn")))), __jsx("div", {
    className: "flex flex-wrap justify-start items-center -mx-4 mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, (data === null || data === void 0 ? void 0 : data.length) > 0 ? data.map((item, index) => {
    return __jsx(_RenderItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item,
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 20
      }
    });
  }) : __jsx("div", {
    className: "w-full text-center-py-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, "No Item Found")));
}

/***/ }),

/***/ "./src/parts/ListCourses/RenderItem.js":
/*!*********************************************!*\
  !*** ./src/parts/ListCourses/RenderItem.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RenderItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svg_react_loader_public_images_icon_play_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!svg-react-loader!public/images/icon-play.svg */ "./node_modules/svg-react-loader/lib/loader.js!./public/images/icon-play.svg");
/* harmony import */ var _svg_react_loader_public_images_icon_play_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_svg_react_loader_public_images_icon_play_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Backup\\Programming Courses\\PAII\\KelasOnline\\FRONTEND\\frontpage\\src\\parts\\ListCourses\\RenderItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function RenderItem({
  item
}) {
  var _item$thumbnail, _item$name, _item$name2, _item$level;
  return __jsx("div", {
    className: "w-full md:w-1/4 px-4 mb-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "item relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("figure", {
    className: "item-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(_svg_react_loader_public_images_icon_play_svg__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: (_item$thumbnail = item === null || item === void 0 ? void 0 : item.thumbnail) !== null && _item$thumbnail !== void 0 ? _item$thumbnail : "",
    alt: (_item$name = item === null || item === void 0 ? void 0 : item.name) !== null && _item$name !== void 0 ? _item$name : "some information",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "item-meta mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("h4", {
    className: "text-lg text-gray-900",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, (_item$name2 = item === null || item === void 0 ? void 0 : item.name) !== null && _item$name2 !== void 0 ? _item$name2 : "Course name"), __jsx("h5", {
    className: "text-sm text-gray-600",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, (_item$level = item === null || item === void 0 ? void 0 : item.level) !== null && _item$level !== void 0 ? _item$level : "Course level")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/courses/[id]",
    as: `/courses/${item.id}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "link-wrapped",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./src/parts/ListCourses/index.js":
/*!****************************************!*\
  !*** ./src/parts/ListCourses/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListCourses; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RenderItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RenderItem */ "./src/parts/ListCourses/RenderItem.js");
var _jsxFileName = "D:\\Backup\\Programming Courses\\PAII\\KelasOnline\\FRONTEND\\frontpage\\src\\parts\\ListCourses\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function ListCourses({
  data
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "flex justify-between items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "w-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "text-lg text-gray-600",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, "New Classes"), __jsx("h3", {
    className: "text-xl text-gray-900",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, "Summer ", __jsx("span", {
    className: "text-teal-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 20
    }
  }, "Productive"))), __jsx("div", {
    className: "w-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/courses",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "text-gray-600 hover:underline text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 33
    }
  }, "View All Course")))), __jsx("div", {
    className: "flex flex-wrap justify-start items-center -mx-4 mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, (data === null || data === void 0 ? void 0 : data.length) > 0 ? data.map((item, index) => {
    return __jsx(_RenderItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      item: item,
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 20
      }
    });
  }) : __jsx("div", {
    className: "w-full text-center-py-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, "No Item Found")));
}

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./src/pages/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Backup\Programming Courses\PAII\KelasOnline\FRONTEND\frontpage\src\pages\index.js */"./src/pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9jaXJjbGUtYWNjZW50LTEuc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvZGVmYXVsdC1hdmF0YXIuc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvaWNvbi1idXNpbmVzcy1kZXZlbG9wbWVudC5zdmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9pY29uLWNvbnRlbnQtd3JpdGVyLnN2ZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2ljb24tY3VzdG9tZXItcmVsYXRpb25zaGlwLnN2ZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2ljb24tZ2FtZS1kZXZlbG9wbWVudC5zdmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9pY29uLXBsYXkuc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvaWNvbi1wcm9kdWN0LWFkdmVydGlzZW1lbnQuc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvaWNvbi10cmF2ZWwtZ3VpZGFuY2Uuc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvbG9nby5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZ3MvYXhpb3MvZXJyb3JIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWdzL2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMvYXBpL2NvdXJzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvZm9ybWF0VGhvdXNhbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wYXJ0cy9DbGllbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9wYXJ0cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhcnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFydHMvSGVyby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFydHMvTGlzdENhdGVnb3JpZXMvUmVuZGVySXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFydHMvTGlzdENhdGVnb3JpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhcnRzL0xpc3RDb3Vyc2VzL1JlbmRlckl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhcnRzL0xpc3RDb3Vyc2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbImlzTG9jYWwiLCJocmVmIiwidXJsIiwib3JpZ2luIiwiaG9zdCIsInByb3RvY29sIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRGdW5jIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRVcmwiLCJvYnNlcnZlciIsImxpc3RlbmVycyIsIk1hcCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImdldE9ic2VydmVyIiwidW5kZWZpbmVkIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImhhcyIsInRhcmdldCIsImNiIiwiZ2V0IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsInVub2JzZXJ2ZSIsImRlbGV0ZSIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJlbCIsIm9ic2VydmUiLCJzZXQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJMaW5rIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInAiLCJjbGVhblVwTGlzdGVuZXJzIiwiZm9ybWF0VXJscyIsImFzSHJlZiIsImxpbmtDbGlja2VkIiwiZSIsIm5vZGVOYW1lIiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwicGF0aG5hbWUiLCJsb2NhdGlvbiIsInByZXZlbnREZWZhdWx0Iiwic2Nyb2xsIiwiaW5kZXhPZiIsIlJvdXRlciIsInJlcGxhY2UiLCJzaGFsbG93IiwidGhlbiIsInN1Y2Nlc3MiLCJzY3JvbGxUbyIsImRvY3VtZW50IiwiYm9keSIsImZvY3VzIiwicHJlZmV0Y2giLCJ3YXJuIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInBhcnNlZEhyZWYiLCJwYXJzZWRBcyIsInJlc29sdmVkSHJlZiIsImhhbmRsZVJlZiIsInJlZiIsInRhZ05hbWUiLCJpc1ByZWZldGNoZWQiLCJqb2luIiwib3B0aW9ucyIsInBhdGhzIiwiY2F0Y2giLCJyZW5kZXIiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY3VycmVudCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJwYXNzSHJlZiIsInR5cGUiLCJwcm9jZXNzIiwiUmVhY3QiLCJjbG9uZUVsZW1lbnQiLCJQcm9wVHlwZXMiLCJyZXF1aXJlIiwiZXhhY3QiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImVsZW1lbnQiLCJwcm9wTmFtZSIsInZhbHVlIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJhcmdzIiwiZXZlbnQiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJFcnJvciIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJtaXR0IiwiYWxsIiwiY3JlYXRlIiwiaGFuZGxlciIsInB1c2giLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsInNsaWNlIiwibWFwIiwiYmFzZVBhdGgiLCJhZGRCYXNlUGF0aCIsInBhdGgiLCJkZWxCYXNlUGF0aCIsInN1YnN0ciIsImxlbmd0aCIsInRvUm91dGUiLCJwcmVwYXJlUm91dGUiLCJmZXRjaE5leHREYXRhIiwicXVlcnkiLCJpc1NlcnZlclJlbmRlciIsImF0dGVtcHRzIiwiZ2V0UmVzcG9uc2UiLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImNyZWRlbnRpYWxzIiwicmVzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsImNvZGUiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJyb3V0ZSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJfYnBzIiwiX3dyYXBBcHAiLCJpc1NzciIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiX2dldFN0YXRpY0RhdGEiLCJQcm9taXNlIiwiX2dldFNlcnZlckRhdGEiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnQiLCJfcmV3cml0ZVVybEZvck5leHRFeHBvcnQiLCJ1cGRhdGUiLCJtb2QiLCJkZWZhdWx0IiwibmV3RGF0YSIsIm5vdGlmeSIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5IiwiY2hhbmdlIiwibWV0aG9kIiwiX3VybCIsIl9hcyIsInJlc29sdmUiLCJyZWplY3QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwidXJsSXNOZXciLCJhc1BhdGhuYW1lIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwia2V5cyIsImdyb3VwcyIsImZpbHRlciIsInBhcmFtIiwiZ2V0Um91dGVJbmZvIiwicm91dGVJbmZvIiwiY2FuY2VsbGVkIiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwiY2FjaGVkUm91dGVJbmZvIiwiaGFuZGxlRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZmV0Y2hDb21wb25lbnQiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiX2dldERhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzcGxpdCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJoYXNoIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsInByZWZldGNoRGF0YSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiZm4iLCJjdHgiLCJBcHBUcmVlIiwiVEVTVF9ST1VURSIsImlzRHluYW1pY1JvdXRlIiwidGVzdCIsImdldFJvdXRlTWF0Y2hlciIsInJlIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIl8iLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwicmVwZWF0IiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJnZXRSb3V0ZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwiZXNjYXBlZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsIiQxIiwiaXNPcHRpb25hbCIsImlzQ2F0Y2hBbGwiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImtleSIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJleGVjT25jZSIsInVzZWQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsImhvc3RuYW1lIiwicG9ydCIsImdldFVSTCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJwcm90b3R5cGUiLCJwYWdlUHJvcHMiLCJ1cmxPYmplY3RLZXlzIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJTUCIsIm1lYXN1cmUiLCJlcnJvckhhbmRsZXIiLCJyZXNwb25zZSIsInRvYXN0IiwiYXhpb3MiLCJiYXNlVVJMIiwiaW50ZXJjZXB0b3JzIiwidXNlIiwiZGV0YWlscyIsImlkIiwibnVtYmVyIiwidGhvdXNhbmQiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwiZm9ybWF0IiwiSG9tZSIsIl9fanN4IiwiRnJhZ21lbnQiLCJIZWFkIiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJjbGFzc05hbWUiLCJDaXJjbGUiLCJIZWFkZXIiLCJIZXJvIiwiQ2xpZW50cyIsIkxpc3RDb3Vyc2VzIiwiTGlzdENhdGVnb3JpZXMiLCJGb290ZXIiLCJjb3Vyc2VzIiwic3JjIiwiYWx0Iiwic3VibWl0Iiwib25TdWJtaXQiLCJwbGFjZWhvbGRlciIsIm9uTGlnaHQiLCJfVXNlciRuYW1lIiwiVXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsIlRvZ2dsZU1lbnUiLCJzZXRUb2dnbGVNZW51IiwidXNlRWZmZWN0IiwiX2RlY29kZVVSSUNvbXBvbmVudCRzIiwiX2RlY29kZVVSSUNvbXBvbmVudCIsIl9kZWNvZGVVUklDb21wb25lbnQkczIiLCJfZGVjb2RlVVJJQ29tcG9uZW50JHMzIiwiX2RlY29kZVVSSUNvbXBvbmVudCRzNCIsInVzZXJDb29raWVzIiwiY29va2llIiwiZmluZCIsImNhbGwiLCJpdGVtIiwiSlNPTiIsInBhcnNlIiwibGlua0NvbG9yIiwibGlua0NUQSIsInRleHRDVEEiLCJzdHlsZSIsImhlaWdodCIsInpJbmRleCIsIkxvZ28iLCJwcmV2IiwicmVsIiwidGh1bWJuYWlsIiwiRGVmYXVsdEF2YXRhciIsInNldHN0YXRlIiwib3BlbiIsIm9uQ2hhbmdlIiwid2lkdGgiLCJ0cmFuc2Zvcm0iLCJSZW5kZXJJdGVtIiwiaW1hZ2VOYW1lIiwiZm9ybWF0VGhvdXNhbmQiLCJ0b3RhbCIsImluZGV4IiwiQnVzaW5lc3NEZXZlbG9wbWVudCIsIkNvbnRlbnRXcml0ZXIiLCJQcm9kdWN0QWR2ZXJ0aXNlbWVudCIsIkN1c3RvbWVyUmVsYXRpb25zaGlwIiwiR2FtZURldmVsb3BtZW50IiwiVHJhdmVsR3VpZGFuY2UiLCJfaXRlbSR0aHVtYm5haWwiLCJfaXRlbSRuYW1lIiwiX2l0ZW0kbmFtZTIiLCJfaXRlbSRsZXZlbCIsIkljb25QbGF5IiwibGV2ZWwiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEw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QUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDbEJSLEtBQUEsQ0FBQ3RTLGdEQUFJO0lBQUN4QyxJQUFJLEVBQUMsRUFBRTtJQUFBaVYsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ1hSLEtBQUE7SUFBR1MsU0FBUyxFQUFDLHFEQUFxRDtJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsV0FFL0QsQ0FDQyxDQUNKLENBQUMsRUFDTFIsS0FBQTtJQUFJUyxTQUFTLEVBQUMsTUFBTTtJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDbEJSLEtBQUEsQ0FBQ3RTLGdEQUFJO0lBQUN4QyxJQUFJLEVBQUMsRUFBRTtJQUFBaVYsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ1hSLEtBQUE7SUFBR1MsU0FBUyxFQUFDLHFEQUFxRDtJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsY0FFL0QsQ0FDQyxDQUNKLENBQUMsRUFDTFIsS0FBQTtJQUFJUyxTQUFTLEVBQUMsTUFBTTtJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDbEJSLEtBQUEsQ0FBQ3RTLGdEQUFJO0lBQUN4QyxJQUFJLEVBQUMsRUFBRTtJQUFBaVYsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ1hSLEtBQUE7SUFBR1MsU0FBUyxFQUFDLHFEQUFxRDtJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsYUFFL0QsQ0FDQyxDQUNKLENBQ0YsQ0FDRCxDQUFDLEVBQ05SLEtBQUE7SUFBS1MsU0FBUyxFQUFDLDhCQUE4QjtJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDM0NSLEtBQUE7SUFBSVMsU0FBUyxFQUFDLFlBQVk7SUFBQU4sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLFlBQVksQ0FBQyxFQUN2Q1IsS0FBQTtJQUFJUyxTQUFTLEVBQUMsTUFBTTtJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDbEJSLEtBQUE7SUFBSVMsU0FBUyxFQUFDLE1BQU07SUFBQU4sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ2xCUixLQUFBLENBQUN0UyxnREFBSTtJQUFDeEMsSUFBSSxFQUFDLEVBQUU7SUFBQWlWLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNYUixLQUFBO0lBQUdTLFNBQVMsRUFBQyxxREFBcUQ7SUFBQU4sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLG9CQUUvRCxDQUNDLENBQ0osQ0FBQyxFQUNMUixLQUFBO0lBQUlTLFNBQVMsRUFBQyxNQUFNO0lBQUFOLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNsQlIsS0FBQSxDQUFDdFMsZ0RBQUk7SUFBQ3hDLElBQUksRUFBQyxFQUFFO0lBQUFpVixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDWFIsS0FBQTtJQUFHUyxTQUFTLEVBQUMscURBQXFEO0lBQUFOLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxtQkFFL0QsQ0FDQyxDQUNKLENBQUMsRUFDTFIsS0FBQTtJQUFJUyxTQUFTLEVBQUMsTUFBTTtJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDbEJSLEtBQUEsQ0FBQ3RTLGdEQUFJO0lBQUN4QyxJQUFJLEVBQUMsRUFBRTtJQUFBaVYsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ1hSLEtBQUE7SUFBR1MsU0FBUyxFQUFDLHFEQUFxRDtJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsaUJBRS9ELENBQ0MsQ0FDSixDQUFDLEVBQ0xSLEtBQUE7SUFBSVMsU0FBUyxFQUFDLE1BQU07SUFBQU4sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ2xCUixLQUFBLENBQUN0UyxnREFBSTtJQUFDeEMsSUFBSSxFQUFDLEVBQUU7SUFBQWlWLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNYUixLQUFBO0lBQUdTLFNBQVMsRUFBQyxxREFBcUQ7SUFBQU4sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLGtCQUUvRCxDQUNDLENBQ0osQ0FDRixDQUNELENBQUMsRUFDTlIsS0FBQTtJQUFLUyxTQUFTLEVBQUMsOEJBQThCO0lBQUFOLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUMzQ1IsS0FBQTtJQUFJUyxTQUFTLEVBQUMsWUFBWTtJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsYUFBYSxDQUFDLEVBQ3hDUixLQUFBO0lBQUdTLFNBQVMsRUFBQyxvQ0FBb0M7SUFBQU4sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLG9CQUNsQ1IsS0FBQTtJQUFBRyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBSyxDQUFDLDZCQUNJUixLQUFBO0lBQUFHLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFLLENBQUMsaUNBQ0ZSLEtBQUE7SUFBQUcsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUssQ0FBQyxpQkFFaEMsQ0FDQSxDQUFDLEVBQ05SLEtBQUE7SUFBS1MsU0FBUyxFQUFDLDhCQUE4QjtJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDM0NSLEtBQUE7SUFBSVMsU0FBUyxFQUFDLFlBQVk7SUFBQU4sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLGVBQWUsQ0FBQyxFQUMxQ1IsS0FBQTtJQUFHUyxTQUFTLEVBQUMsc0JBQXNCO0lBQUFOLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxzQ0FFaEMsQ0FBQyxFQUNKUixLQUFBO0lBQU1xQixRQUFRLEVBQUVELE1BQU87SUFBQWpCLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNyQlIsS0FBQTtJQUNFN08sSUFBSSxFQUFDLE1BQU07SUFDWHNQLFNBQVMsRUFBQyw4REFBOEQ7SUFDeEVhLFdBQVcsRUFBQyxtQkFBbUI7SUFBQW5CLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUNoQyxDQUFDLEVBQ0ZSLEtBQUE7SUFBUVMsU0FBUyxFQUFDLDRIQUE0SDtJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsZUFFdEksQ0FDSixDQUNILENBQ0YsQ0FBQyxFQUNOUixLQUFBO0lBQUtTLFNBQVMsRUFBQyxnREFBZ0Q7SUFBQU4sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQzdEUixLQUFBO0lBQUdTLFNBQVMsRUFBQyxpQkFBaUI7SUFBQU4sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLGlFQUUzQixDQUNBLENBQ0MsQ0FBQztBQUViLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3R21EO0FBQ2hCO0FBRUs7QUFFWDtBQUVnQztBQUNtQjtBQUVqRSxTQUFTRyxNQUFNQSxDQUFDO0VBQUVZO0FBQVEsQ0FBQyxFQUFFO0VBQUEsSUFBQUMsVUFBQTtFQUMxQyxNQUFNO0lBQUEsR0FBQ0MsSUFBSTtJQUFBLEdBQUVDO0VBQU8sSUFBSUMsc0RBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQztFQUU1QyxNQUFNO0lBQUEsR0FBQ0MsVUFBVTtJQUFBLEdBQUVDO0VBQWEsSUFBSUYsc0RBQVEsQ0FBQyxLQUFLLENBQUM7RUFFbkRHLHVEQUFTLENBQUMsTUFBTTtJQUFBLElBQUFDLHFCQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHNCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLHNCQUFBO0lBQ2QsTUFBTUMsV0FBVyxJQUFBTCxxQkFBQSxJQUFBQyxtQkFBQSxHQUNmdEYsa0JBQWtCLENBQUN2USxNQUFNLENBQUNtRCxRQUFRLENBQUMrUyxNQUFNLENBQUMsY0FBQUwsbUJBQUEsd0JBQUFDLHNCQUFBLEdBQTFDRCxtQkFBQSxDQUNJN0csS0FBSyxDQUFDLEdBQUcsQ0FBQyxjQUFBOEcsc0JBQUEsd0JBQUFDLHNCQUFBLEdBRGRELHNCQUFBLENBRUlLLElBQUksY0FBQUosc0JBQUEsd0JBQUFDLHNCQUFBLEdBRlJELHNCQUFBLENBQUFLLElBQUEsQ0FBQU4sc0JBQUEsRUFFWU8sSUFBSSxJQUFLQSxJQUFJLENBQUN6VCxPQUFPLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsY0FBQW9ULHNCQUFBLHVCQUZ4REEsc0JBQUEsQ0FHSWhILEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBQTRHLHFCQUFBLGNBQUFBLHFCQUFBLEdBQUksSUFBSTtJQUMzQkwsT0FBTyxDQUFDVSxXQUFXLEdBQUdLLElBQUksQ0FBQ0MsS0FBSyxDQUFDTixXQUFXLENBQUMsR0FBRyxJQUFJLENBQUM7RUFDdkQsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLE1BQU1PLFNBQVMsR0FBR3BCLE9BQU8sR0FBRyxlQUFlLEdBQUcsWUFBWTtFQUUxRCxNQUFNblAsTUFBTSxHQUFHc0IsNkRBQVMsQ0FBQyxDQUFDO0VBRTFCLE1BQU1rUCxPQUFPLEdBQ1h4USxNQUFNLENBQUN6RCxRQUFRLENBQUNJLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsR0FDakMsR0FBRXFDLHVCQUF1QyxXQUFVLEdBQ25ELEdBQUVBLHVCQUF1QyxRQUFPO0VBQ3ZELE1BQU15UixPQUFPLEdBQUd6USxNQUFNLENBQUN6RCxRQUFRLENBQUNJLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLEdBQUcsT0FBTztFQUUzRSxPQUNFaVIsS0FBQTtJQUNFUyxTQUFTLEVBQUUsQ0FDVCxtQ0FBbUMsRUFDbkNtQixVQUFVLEdBQUcseUJBQXlCLEdBQUcsRUFBRSxDQUM1QyxDQUFDeFIsSUFBSSxDQUFDLEdBQUcsQ0FBRTtJQUFBK1AsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBRVpSLEtBQUE7SUFBSzhDLEtBQUssRUFBRTtNQUFFQyxNQUFNLEVBQUUsRUFBRTtNQUFFQyxNQUFNLEVBQUU7SUFBRyxDQUFFO0lBQUE3QyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDckNSLEtBQUEsQ0FBQ2lELCtFQUFJO0lBQUN4QyxTQUFTLEVBQUMsU0FBUztJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBTyxDQUM3QixDQUFDLEVBQ05SLEtBQUE7SUFBS1MsU0FBUyxFQUFDLGdCQUFnQjtJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDN0JSLEtBQUE7SUFDRWhQLE9BQU8sRUFBRUEsQ0FBQSxLQUFNNlEsYUFBYSxDQUFFcUIsSUFBSSxJQUFLLENBQUNBLElBQUksQ0FBRTtJQUM5Q3pDLFNBQVMsRUFBRSxDQUFDLGFBQWEsRUFBRW1CLFVBQVUsR0FBRyxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUN4UixJQUFJLENBQUMsR0FBRyxDQUFFO0lBQUErUCxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FDMUQsQ0FDTixDQUFDLEVBQ05SLEtBQUE7SUFDRVMsU0FBUyxFQUFFLENBQ1QscUpBQXFKLEVBQ3JKbUIsVUFBVSxHQUFHLDBCQUEwQixHQUFHLHFCQUFxQixDQUNoRSxDQUFDeFIsSUFBSSxDQUFDLEdBQUcsQ0FBRTtJQUFBK1AsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBRVpSLEtBQUE7SUFBSVMsU0FBUyxFQUFDLGNBQWM7SUFBQU4sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQzFCUixLQUFBLENBQUN0UyxnREFBSTtJQUFDeEMsSUFBSSxFQUFDLEdBQUc7SUFBQWlWLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNaUixLQUFBO0lBQ0VTLFNBQVMsRUFBRSxDQUNUa0MsU0FBUyxFQUNULDhEQUE4RCxDQUMvRCxDQUFDdlMsSUFBSSxDQUFDLEdBQUcsQ0FBRTtJQUFBK1AsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLFNBR1gsQ0FDQyxDQUNKLENBQUMsRUFDTFIsS0FBQTtJQUFJUyxTQUFTLEVBQUMsY0FBYztJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDMUJSLEtBQUEsQ0FBQ3RTLGdEQUFJO0lBQUN4QyxJQUFJLEVBQUMsR0FBRztJQUFBaVYsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ1pSLEtBQUE7SUFDRVMsU0FBUyxFQUFFLENBQ1RrQyxTQUFTLEVBQ1QsOERBQThELENBQy9ELENBQUN2UyxJQUFJLENBQUMsR0FBRyxDQUFFO0lBQUErUCxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsWUFHWCxDQUNDLENBQ0osQ0FBQyxFQUNMUixLQUFBO0lBQUlTLFNBQVMsRUFBQyxjQUFjO0lBQUFOLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUMxQlIsS0FBQSxDQUFDdFMsZ0RBQUk7SUFBQ3hDLElBQUksRUFBQyxHQUFHO0lBQUFpVixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDWlIsS0FBQTtJQUNFUyxTQUFTLEVBQUUsQ0FDVGtDLFNBQVMsRUFDVCw4REFBOEQsQ0FDL0QsQ0FBQ3ZTLElBQUksQ0FBQyxHQUFHLENBQUU7SUFBQStQLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxhQUdYLENBQ0MsQ0FDSixDQUFDLEVBQ0xSLEtBQUE7SUFBSVMsU0FBUyxFQUFDLGNBQWM7SUFBQU4sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQzFCUixLQUFBLENBQUN0UyxnREFBSTtJQUFDeEMsSUFBSSxFQUFDLEdBQUc7SUFBQWlWLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNaUixLQUFBO0lBQ0VTLFNBQVMsRUFBRSxDQUNUa0MsU0FBUyxFQUNULDhEQUE4RCxDQUMvRCxDQUFDdlMsSUFBSSxDQUFDLEdBQUcsQ0FBRTtJQUFBK1AsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLFVBR1gsQ0FDQyxDQUNKLENBQUMsRUFDTFIsS0FBQTtJQUFJUyxTQUFTLEVBQUMsY0FBYztJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDekJpQixJQUFJLEdBQ0h6QixLQUFBO0lBQ0VyVCxNQUFNLEVBQUMsUUFBUTtJQUNmd1csR0FBRyxFQUFDLHNCQUFzQjtJQUMxQmpZLElBQUksRUFBRTBYLE9BQVE7SUFDZG5DLFNBQVMsRUFBQyw0SUFBNEk7SUFBQU4sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBRXRKUixLQUFBO0lBQU1TLFNBQVMsRUFBQyw4REFBOEQ7SUFBQU4sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQzNFLENBQUFpQixJQUFJLGFBQUpBLElBQUksdUJBQUpBLElBQUksQ0FBRTJCLFNBQVMsSUFDZHBELEtBQUE7SUFDRWtCLEdBQUcsRUFBRU8sSUFBSSxhQUFKQSxJQUFJLHVCQUFKQSxJQUFJLENBQUUyQixTQUFVO0lBQ3JCakMsR0FBRyxHQUFBSyxVQUFBLEdBQUVDLElBQUksYUFBSkEsSUFBSSx1QkFBSkEsSUFBSSxDQUFFak4sSUFBSSxjQUFBZ04sVUFBQSxjQUFBQSxVQUFBLEdBQUksVUFBVztJQUM5QmYsU0FBUyxFQUFDLG1DQUFtQztJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FDOUMsQ0FBQyxHQUVGUixLQUFBLENBQUNxRCx5RkFBYTtJQUFDNUMsU0FBUyxFQUFDLHNDQUFzQztJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBZ0IsQ0FFN0UsQ0FBQyxVQUNGaUIsSUFBSSxDQUFDak4sSUFDVCxDQUFDLEdBRUp3TCxLQUFBO0lBQ0VyVCxNQUFNLEVBQUMsUUFBUTtJQUNmd1csR0FBRyxFQUFDLHNCQUFzQjtJQUMxQmpZLElBQUksRUFBRTBYLE9BQVE7SUFDZG5DLFNBQVMsRUFBQyxpSUFBaUk7SUFBQU4sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBRTFJcUMsT0FDQSxDQUVILENBQ0YsQ0FDRSxDQUFDO0FBRWI7QUFFQWxDLE1BQU0sQ0FBQ2pQLFNBQVMsR0FBRztFQUNqQjZQLE9BQU8sRUFBRTdQLGlEQUFTLENBQUNLO0FBQ3JCLENBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0l1QztBQUV6QixTQUFTNk8sSUFBSUEsQ0FBQSxFQUFHO0VBQzdCLE1BQU07SUFBQSxHQUFDakosS0FBSztJQUFBLEdBQUUyTDtFQUFRLElBQUkzQixzREFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0VBRTVDLFNBQVNQLE1BQU1BLENBQUEsRUFBRztJQUNoQmpWLE1BQU0sQ0FBQ29YLElBQUksQ0FDUixHQUFFblMsdUJBQXVDLG1CQUFrQnVHLEtBQU0sRUFDcEUsQ0FBQztFQUNIO0VBQ0EsT0FDRXFJLEtBQUE7SUFBS1MsU0FBUyxFQUFDLG1DQUFtQztJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDaERSLEtBQUE7SUFBS1MsU0FBUyxFQUFDLDhCQUE4QjtJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDM0NSLEtBQUE7SUFBSVMsU0FBUyxFQUFDLHdDQUF3QztJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDcERSLEtBQUE7SUFBTVMsU0FBUyxFQUFDLGVBQWU7SUFBQU4sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLFlBQWMsQ0FBQyxhQUM5Q1IsS0FBQTtJQUFJUyxTQUFTLEVBQUMsaUJBQWlCO0lBQUFOLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQUMsbUJBQWMsR0FBRyxFQUNuRFIsS0FBQTtJQUFNUyxTQUFTLEVBQUMsZUFBZTtJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsV0FBYSxDQUMxQyxDQUFDLEVBQ0xSLEtBQUE7SUFBR1MsU0FBUyxFQUFDLG9DQUFvQztJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsNENBQ1QsR0FBRyxFQUN6Q1IsS0FBQTtJQUFJUyxTQUFTLEVBQUMsaUJBQWlCO0lBQUFOLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQUMsNEJBQ2pDLENBQUMsRUFFSlIsS0FBQTtJQUFNcUIsUUFBUSxFQUFFRCxNQUFPO0lBQUNYLFNBQVMsRUFBQyxNQUFNO0lBQUFOLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUN0Q1IsS0FBQTtJQUNFN08sSUFBSSxFQUFDLE1BQU07SUFDWHFTLFFBQVEsRUFBR3hRLEtBQUssSUFBS3NRLFFBQVEsQ0FBQ3RRLEtBQUssQ0FBQ3JHLE1BQU0sQ0FBQ3VGLEtBQUssQ0FBRTtJQUNsRHVPLFNBQVMsRUFBQyx3RUFBd0U7SUFDbEZ2TyxLQUFLLEVBQUV5RixLQUFNO0lBQ2IySixXQUFXLEVBQUMsbUJBQW1CO0lBQUFuQixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FDaEMsQ0FBQyxFQUNGUixLQUFBO0lBQVFTLFNBQVMsRUFBQywrSUFBK0k7SUFBQU4sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLGVBRXpKLENBQ0osQ0FDSCxDQUFDLEVBQ05SLEtBQUE7SUFBS1MsU0FBUyxFQUFDLDhDQUE4QztJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDM0RSLEtBQUE7SUFBS1MsU0FBUyxFQUFDLFVBQVU7SUFBQ3FDLEtBQUssRUFBRTtNQUFFVyxLQUFLLEVBQUUsR0FBRztNQUFFVixNQUFNLEVBQUU7SUFBSSxDQUFFO0lBQUE1QyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDM0RSLEtBQUE7SUFDRVMsU0FBUyxFQUFDLDBEQUEwRDtJQUNwRXFDLEtBQUssRUFBRTtNQUFFVyxLQUFLLEVBQUUsR0FBRztNQUFFVixNQUFNLEVBQUU7SUFBSSxDQUFFO0lBQUE1QyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FDL0IsQ0FBQyxFQUNQUixLQUFBO0lBQUtTLFNBQVMsRUFBQyxvQ0FBb0M7SUFBQU4sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ2pEUixLQUFBO0lBQ0VrQixHQUFHLEVBQUMsd0NBQXdDO0lBQzVDQyxHQUFHLEVBQUMsdUJBQXVCO0lBQUFoQixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FDNUIsQ0FDRSxDQUFDLEVBQ05SLEtBQUE7SUFDRVMsU0FBUyxFQUFDLHdDQUF3QztJQUNsRHFDLEtBQUssRUFBRTtNQUFFWSxTQUFTLEVBQUUsa0JBQWtCO01BQUVELEtBQUssRUFBRTtJQUFJLENBQUU7SUFBQXRELE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUVyRFIsS0FBQTtJQUFHUyxTQUFTLEVBQUMsb0JBQW9CO0lBQUFOLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxnRUFFOUIsQ0FBQyxFQUNKUixLQUFBO0lBQU1TLFNBQVMsRUFBQyxlQUFlO0lBQUFOLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSwyQkFBNkIsQ0FDekQsQ0FDRixDQUNGLENBQ0YsQ0FBQztBQUVWLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEMEI7QUFFRztBQUUyQjtBQUV6QyxTQUFTbUQsVUFBVUEsQ0FBQztFQUFFbkI7QUFBSyxDQUFDLEVBQUU7RUFDM0MsT0FDRXhDLEtBQUE7SUFBS1MsU0FBUyxFQUFDLHdDQUF3QztJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDckRSLEtBQUE7SUFBS1MsU0FBUyxFQUFDLDJDQUEyQztJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDdkRnQyxJQUFJLENBQUNvQixTQUFTLEVBQ2Y1RCxLQUFBO0lBQUtTLFNBQVMsRUFBQyxpQkFBaUI7SUFBQU4sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQzlCUixLQUFBO0lBQUlTLFNBQVMsRUFBQywyQ0FBMkM7SUFBQU4sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ3REZ0MsSUFBSSxDQUFDaE8sSUFDSixDQUFDLEVBQ0x3TCxLQUFBO0lBQUlTLFNBQVMsRUFBQywwQ0FBMEM7SUFBQU4sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ3JEcUQsMEVBQWMsQ0FBQ3JCLElBQUksQ0FBQ3NCLEtBQUssQ0FDeEIsQ0FBQyxFQUNMOUQsS0FBQSxDQUFDdFMsZ0RBQUk7SUFBQ3hDLElBQUksRUFBQyxHQUFHO0lBQUFpVixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDWlIsS0FBQTtJQUFHUyxTQUFTLEVBQUMsY0FBYztJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBSSxDQUMzQixDQUNILENBQ0YsQ0FDRixDQUFDO0FBRVYsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCMEI7QUFFWTtBQUUyRDtBQUNaO0FBQ2M7QUFDQTtBQUNWO0FBQ0Y7QUFFeEUsU0FBU3VELEtBQUtBLENBQUEsRUFBRztFQUM5QixNQUFNdE4sSUFBSSxHQUFHLENBQ1g7SUFDRW1OLFNBQVMsRUFBRTVELEtBQUEsQ0FBQ2dFLG9HQUFtQjtNQUFBN0QsTUFBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLENBQUUsQ0FBQztJQUNsQ2hNLElBQUksRUFBRSxzQkFBc0I7SUFDNUJzUCxLQUFLLEVBQUU7RUFDVCxDQUFDLEVBQ0Q7SUFDRUYsU0FBUyxFQUFFNUQsS0FBQSxDQUFDaUUsOEZBQWE7TUFBQTlELE1BQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxDQUFFLENBQUM7SUFDNUJoTSxJQUFJLEVBQUUsZ0JBQWdCO0lBQ3RCc1AsS0FBSyxFQUFFO0VBQ1QsQ0FBQyxFQUNEO0lBQ0VGLFNBQVMsRUFBRTVELEtBQUEsQ0FBQ2tFLHFHQUFvQjtNQUFBL0QsTUFBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLENBQUUsQ0FBQztJQUNuQ2hNLElBQUksRUFBRSx1QkFBdUI7SUFDN0JzUCxLQUFLLEVBQUU7RUFDVCxDQUFDLEVBQ0Q7SUFDRUYsU0FBUyxFQUFFNUQsS0FBQSxDQUFDbUUscUdBQW9CO01BQUFoRSxNQUFBO01BQUFDLFFBQUE7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBO0lBQUEsQ0FBRSxDQUFDO0lBQ25DaE0sSUFBSSxFQUFFLHVCQUF1QjtJQUM3QnNQLEtBQUssRUFBRTtFQUNULENBQUMsRUFDRDtJQUNFRixTQUFTLEVBQUU1RCxLQUFBLENBQUNvRSxnR0FBZTtNQUFBakUsTUFBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLENBQUUsQ0FBQztJQUM5QmhNLElBQUksRUFBRSxrQkFBa0I7SUFDeEJzUCxLQUFLLEVBQUU7RUFDVCxDQUFDLEVBQ0Q7SUFDRUYsU0FBUyxFQUFFNUQsS0FBQSxDQUFDcUUsK0ZBQWM7TUFBQWxFLE1BQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxDQUFFLENBQUM7SUFDN0JoTSxJQUFJLEVBQUUsaUJBQWlCO0lBQ3ZCc1AsS0FBSyxFQUFFO0VBQ1QsQ0FBQyxDQUNGO0VBRUQsT0FDRTlELEtBQUEsQ0FBQTNPLDRDQUFBLENBQUE0TyxRQUFBLFFBQ0VELEtBQUE7SUFBS1MsU0FBUyxFQUFDLG1DQUFtQztJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDaERSLEtBQUE7SUFBS1MsU0FBUyxFQUFDLFFBQVE7SUFBQU4sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ3JCUixLQUFBO0lBQUlTLFNBQVMsRUFBQyx1QkFBdUI7SUFBQU4sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLGFBQWEsQ0FBQyxFQUNuRFIsS0FBQTtJQUFJUyxTQUFTLEVBQUMsdUJBQXVCO0lBQUFOLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxpQkFDekJSLEtBQUE7SUFBTVMsU0FBUyxFQUFDLGVBQWU7SUFBQU4sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLFVBQVksQ0FDbkQsQ0FDRCxDQUNGLENBQUMsRUFDTlIsS0FBQTtJQUFLUyxTQUFTLEVBQUMsc0RBQXNEO0lBQUFOLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNsRSxDQUFBL0osSUFBSSxhQUFKQSxJQUFJLHVCQUFKQSxJQUFJLENBQUVmLE1BQU0sSUFBRyxDQUFDLEdBQ2ZlLElBQUksQ0FBQ3JCLEdBQUcsQ0FBQyxDQUFDb04sSUFBSSxFQUFFdUIsS0FBSyxLQUFLO0lBQ3hCLE9BQU8vRCxLQUFBLENBQUMyRCxtREFBVTtNQUFDbkIsSUFBSSxFQUFFQSxJQUFLO01BQUMzRSxHQUFHLEVBQUVrRyxLQUFNO01BQUE1RCxNQUFBO01BQUFDLFFBQUE7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBO0lBQUEsQ0FBYSxDQUFDO0VBQzFELENBQUMsQ0FBQyxHQUVGUixLQUFBO0lBQUtTLFNBQVMsRUFBQywwQkFBMEI7SUFBQU4sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLGtCQUFtQixDQUUzRCxDQUNMLENBQUM7QUFFUCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEUwQjtBQUVHO0FBRXlDO0FBRXZELFNBQVNtRCxVQUFVQSxDQUFDO0VBQUVuQjtBQUFLLENBQUMsRUFBRTtFQUFBLElBQUE4QixlQUFBLEVBQUFDLFVBQUEsRUFBQUMsV0FBQSxFQUFBQyxXQUFBO0VBQzNDLE9BQ0V6RSxLQUFBO0lBQUtTLFNBQVMsRUFBQywyQkFBMkI7SUFBQU4sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ3hDUixLQUFBO0lBQUtTLFNBQVMsRUFBQyxlQUFlO0lBQUFOLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUM1QlIsS0FBQTtJQUFRUyxTQUFTLEVBQUMsWUFBWTtJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDNUJSLEtBQUEsQ0FBQzBFLG9GQUFRO0lBQUF2RSxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBVyxDQUFDLEVBQ3JCUixLQUFBO0lBQ0VrQixHQUFHLEdBQUFvRCxlQUFBLEdBQUU5QixJQUFJLGFBQUpBLElBQUksdUJBQUpBLElBQUksQ0FBRVksU0FBUyxjQUFBa0IsZUFBQSxjQUFBQSxlQUFBLEdBQUksRUFBRztJQUMzQm5ELEdBQUcsR0FBQW9ELFVBQUEsR0FBRS9CLElBQUksYUFBSkEsSUFBSSx1QkFBSkEsSUFBSSxDQUFFaE8sSUFBSSxjQUFBK1AsVUFBQSxjQUFBQSxVQUFBLEdBQUksa0JBQW1CO0lBQUFwRSxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FDdkMsQ0FDSyxDQUFDLEVBQ1RSLEtBQUE7SUFBS1MsU0FBUyxFQUFDLGdCQUFnQjtJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDN0JSLEtBQUE7SUFBSVMsU0FBUyxFQUFDLHVCQUF1QjtJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsSUFBQWdFLFdBQUEsR0FDbENoQyxJQUFJLGFBQUpBLElBQUksdUJBQUpBLElBQUksQ0FBRWhPLElBQUksY0FBQWdRLFdBQUEsY0FBQUEsV0FBQSxHQUFJLGFBQ2IsQ0FBQyxFQUNMeEUsS0FBQTtJQUFJUyxTQUFTLEVBQUMsdUJBQXVCO0lBQUFOLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxJQUFBaUUsV0FBQSxHQUNsQ2pDLElBQUksYUFBSkEsSUFBSSx1QkFBSkEsSUFBSSxDQUFFbUMsS0FBSyxjQUFBRixXQUFBLGNBQUFBLFdBQUEsR0FBSSxjQUNkLENBQ0QsQ0FBQyxFQUNOekUsS0FBQSxDQUFDdFMsZ0RBQUk7SUFBQ3hDLElBQUksRUFBQyxlQUFlO0lBQUNVLEVBQUUsRUFBRyxZQUFXNFcsSUFBSSxDQUFDL0MsRUFBRyxFQUFFO0lBQUFVLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNuRFIsS0FBQTtJQUFHUyxTQUFTLEVBQUMsY0FBYztJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBSSxDQUMzQixDQUNILENBQ0YsQ0FBQztBQUVWLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CMEI7QUFFRztBQUVTO0FBRXZCLFNBQVNNLFdBQVdBLENBQUM7RUFBRXJLO0FBQUssQ0FBQyxFQUFFO0VBQzVDLE9BQ0V1SixLQUFBLENBQUEzTyw0Q0FBQSxDQUFBNE8sUUFBQSxRQUNFRCxLQUFBO0lBQUtTLFNBQVMsRUFBQyxtQ0FBbUM7SUFBQU4sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ2hEUixLQUFBO0lBQUtTLFNBQVMsRUFBQyxRQUFRO0lBQUFOLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNyQlIsS0FBQTtJQUFJUyxTQUFTLEVBQUMsdUJBQXVCO0lBQUFOLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxnQkFBZ0IsQ0FBQyxFQUN0RFIsS0FBQTtJQUFJUyxTQUFTLEVBQUMsdUJBQXVCO0lBQUFOLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxjQUM1QlIsS0FBQTtJQUFNUyxTQUFTLEVBQUMsZUFBZTtJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsZUFBaUIsQ0FDckQsQ0FDRCxDQUFDLEVBQ05SLEtBQUE7SUFBS1MsU0FBUyxFQUFDLFFBQVE7SUFBQU4sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ3JCUixLQUFBLENBQUN0UyxnREFBSTtJQUFDeEMsSUFBSSxFQUFDLFVBQVU7SUFBQWlWLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUFDUixLQUFBO0lBQUdTLFNBQVMsRUFBQyx1Q0FBdUM7SUFBQU4sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLG9CQUV2RSxDQUNHLENBQ0gsQ0FDRixDQUFDLEVBQ05SLEtBQUE7SUFBS1MsU0FBUyxFQUFDLHNEQUFzRDtJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDbEUsQ0FBQS9KLElBQUksYUFBSkEsSUFBSSx1QkFBSkEsSUFBSSxDQUFFZixNQUFNLElBQUcsQ0FBQyxHQUNmZSxJQUFJLENBQUNyQixHQUFHLENBQUMsQ0FBQ29OLElBQUksRUFBRXVCLEtBQUssS0FBSztJQUN4QixPQUFPL0QsS0FBQSxDQUFDMkQsbURBQVU7TUFBQ25CLElBQUksRUFBRUEsSUFBSztNQUFDM0UsR0FBRyxFQUFFa0csS0FBTTtNQUFBNUQsTUFBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLENBQWEsQ0FBQztFQUMxRCxDQUFDLENBQUMsR0FFRlIsS0FBQTtJQUFLUyxTQUFTLEVBQUMsMEJBQTBCO0lBQUFOLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxrQkFBbUIsQ0FFM0QsQ0FDTCxDQUFDO0FBRVAsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0Esa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImRlY2xhcmUgY29uc3QgX19ORVhUX0RBVEFfXzogYW55XG5cbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgcmVzb2x2ZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUHJlZmV0Y2hPcHRpb25zIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgYWRkQmFzZVBhdGggfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcblxuZnVuY3Rpb24gaXNMb2NhbChocmVmOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgdXJsID0gcGFyc2UoaHJlZiwgZmFsc2UsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IHBhcnNlKGdldExvY2F0aW9uT3JpZ2luKCksIGZhbHNlLCB0cnVlKVxuXG4gIHJldHVybiAoXG4gICAgIXVybC5ob3N0IHx8ICh1cmwucHJvdG9jb2wgPT09IG9yaWdpbi5wcm90b2NvbCAmJiB1cmwuaG9zdCA9PT0gb3JpZ2luLmhvc3QpXG4gIClcbn1cblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgRm9ybWF0UmVzdWx0ID0geyBocmVmOiBzdHJpbmc7IGFzPzogc3RyaW5nIH1cblxuZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYzogKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IEZvcm1hdFJlc3VsdCkge1xuICBsZXQgbGFzdEhyZWY6IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0QXM6IHVuZGVmaW5lZCB8IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0UmVzdWx0OiBudWxsIHwgRm9ybWF0UmVzdWx0ID0gbnVsbFxuICByZXR1cm4gKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IHtcbiAgICBpZiAobGFzdFJlc3VsdCAmJiBocmVmID09PSBsYXN0SHJlZiAmJiBhcyA9PT0gbGFzdEFzKSB7XG4gICAgICByZXR1cm4gbGFzdFJlc3VsdFxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1hdEZ1bmMoaHJlZiwgYXMpXG4gICAgbGFzdEhyZWYgPSBocmVmXG4gICAgbGFzdEFzID0gYXNcbiAgICBsYXN0UmVzdWx0ID0gcmVzdWx0XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVybCh1cmw6IFVybCk6IHN0cmluZyB7XG4gIHJldHVybiB1cmwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpIDogdXJsXG59XG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxuXG5sZXQgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAob2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gb2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5jbGFzcyBMaW5rIGV4dGVuZHMgQ29tcG9uZW50PExpbmtQcm9wcz4ge1xuICBwOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3IocHJvcHM6IExpbmtQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAocHJvcHMucHJlZmV0Y2gpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcbiAgfVxuXG4gIGNsZWFuVXBMaXN0ZW5lcnMgPSAoKSA9PiB7fVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG4gIH1cblxuICBnZXRQYXRocygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgY29uc3QgeyBocmVmOiBwYXJzZWRIcmVmLCBhczogcGFyc2VkQXMgfSA9IHRoaXMuZm9ybWF0VXJscyhcbiAgICAgIHRoaXMucHJvcHMuaHJlZixcbiAgICAgIHRoaXMucHJvcHMuYXNcbiAgICApXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkSHJlZilcbiAgICByZXR1cm4gW3Jlc29sdmVkSHJlZiwgcGFyc2VkQXMgPyByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRBcykgOiByZXNvbHZlZEhyZWZdXG4gIH1cblxuICBoYW5kbGVSZWYocmVmOiBFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMucCAmJiBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJiByZWYgJiYgcmVmLnRhZ05hbWUpIHtcbiAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG5cbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICAgIHByZWZldGNoZWRbXG4gICAgICAgICAgdGhpcy5nZXRQYXRocygpLmpvaW4oXG4gICAgICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAgICAgJyUnXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMgPSBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMocmVmLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcmVmZXRjaCgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4gIC8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxuICBmb3JtYXRVcmxzID0gbWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsIGFzSHJlZikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBocmVmOiBhZGRCYXNlUGF0aChmb3JtYXRVcmwoaHJlZikpLFxuICAgICAgYXM6IGFzSHJlZiA/IGFkZEJhc2VQYXRoKGZvcm1hdFVybChhc0hyZWYpKSA6IGFzSHJlZixcbiAgICB9XG4gIH0pXG5cbiAgbGlua0NsaWNrZWQgPSAoZTogUmVhY3QuTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUsIHRhcmdldCB9ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gICAgaWYgKFxuICAgICAgbm9kZU5hbWUgPT09ICdBJyAmJlxuICAgICAgKCh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgICAgICBlLm1ldGFLZXkgfHxcbiAgICAgICAgZS5jdHJsS2V5IHx8XG4gICAgICAgIGUuc2hpZnRLZXkgfHxcbiAgICAgICAgKGUubmF0aXZlRXZlbnQgJiYgZS5uYXRpdmVFdmVudC53aGljaCA9PT0gMikpXG4gICAgKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcblxuICAgIGlmICghaXNMb2NhbChocmVmKSkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgaHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIGhyZWYpXG4gICAgYXMgPSBhcyA/IHJlc29sdmUocGF0aG5hbWUsIGFzKSA6IGhyZWZcblxuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgbGV0IHsgc2Nyb2xsIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gICAgfVxuXG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgUm91dGVyW3RoaXMucHJvcHMucmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgIHNoYWxsb3c6IHRoaXMucHJvcHMuc2hhbGxvdyxcbiAgICB9KS50aGVuKChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHByZWZldGNoKG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucCB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIGNvbnN0IHBhdGhzID0gdGhpcy5nZXRQYXRocygpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIFJvdXRlci5wcmVmZXRjaChwYXRoc1svKiBocmVmICovIDBdLCBwYXRoc1svKiBhc1BhdGggKi8gMV0sIG9wdGlvbnMpLmNhdGNoKFxuICAgICAgKGVycikgPT4ge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIClcbiAgICBwcmVmZXRjaGVkW1xuICAgICAgcGF0aHMuam9pbihcbiAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgJyUnXG4gICAgICApXG4gICAgXSA9IHRydWVcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgICB9XG5cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgICBjb25zdCBwcm9wczoge1xuICAgICAgb25Nb3VzZUVudGVyOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIGhyZWY/OiBzdHJpbmdcbiAgICAgIHJlZj86IGFueVxuICAgIH0gPSB7XG4gICAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVmKGVsKVxuXG4gICAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbk1vdXNlRW50ZXI6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVmZXRjaCh7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgICB9LFxuICAgICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgICB9XG4gICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgdGhpcy5saW5rQ2xpY2tlZChlKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH1cblxuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChcbiAgICAgIHRoaXMucHJvcHMucGFzc0hyZWYgfHxcbiAgICAgIChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKVxuICAgICkge1xuICAgICAgcHJvcHMuaHJlZiA9IGFzIHx8IGhyZWZcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgaWYgKFxuICAgICAgICBwcm9wcy5ocmVmICYmXG4gICAgICAgIHR5cGVvZiBfX05FWFRfREFUQV9fICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBfX05FWFRfREFUQV9fLm5leHRFeHBvcnRcbiAgICAgICkge1xuICAgICAgICBwcm9wcy5ocmVmID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZilcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBwcm9wcylcbiAgfVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3Qgd2FybiA9IGV4ZWNPbmNlKGNvbnNvbGUuZXJyb3IpXG5cbiAgLy8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG4gIGNvbnN0IFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKVxuICBjb25zdCBleGFjdCA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKVxuICAvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG4gIExpbmsucHJvcFR5cGVzID0gZXhhY3Qoe1xuICAgIGhyZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICAgIGFzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgcHJlZmV0Y2g6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHNoYWxsb3c6IFByb3BUeXBlcy5ib29sLFxuICAgIHBhc3NIcmVmOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgKHByb3BzOiBhbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBgV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPmBcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpID09PSAwXG4gICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgIDogcGF0aFxufVxuXG5mdW5jdGlvbiB0b1JvdXRlKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nXG59XG5cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoOiBzdHJpbmcpID0+XG4gIHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG50eXBlIENvbXBvbmVudFJlcyA9IHsgcGFnZTogQ29tcG9uZW50VHlwZTsgbW9kOiBhbnkgfVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxudHlwZSBSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IGFueVxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBSb3V0ZUluZm8sIEFwcD86IENvbXBvbmVudFR5cGUpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBhbnkpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSB8IG51bGwsXG4gIGlzU2VydmVyUmVuZGVyOiBib29sZWFuLFxuICBjYj86ICguLi5hcmdzOiBhbnkpID0+IGFueVxuKSB7XG4gIGxldCBhdHRlbXB0cyA9IGlzU2VydmVyUmVuZGVyID8gMyA6IDFcbiAgZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZmV0Y2goXG4gICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gXG4gICAgICAgICksXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgfSksXG4gICAgICB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgfVxuICAgICkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAvLyBsb29wLlxuICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICA7KGVyciBhcyBhbnkpLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJ1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IENvbXBvbmVudFR5cGVcbiAgICAgIHdyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgYXNcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG4gICAgfVxuICB9XG5cbiAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKFxuICAgICAgZS5zdGF0ZSAmJlxuICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgIHBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZVxuICAgICkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eSdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHVwZGF0ZShyb3V0ZTogc3RyaW5nLCBtb2Q6IGFueSkge1xuICAgIGNvbnN0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZSA9IG1vZC5kZWZhdWx0IHx8IG1vZFxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YClcbiAgICB9XG5cbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgQ29tcG9uZW50LFxuICAgICAgX19OX1NTRzogbW9kLl9fTl9TU0csXG4gICAgICBfX05fU1NQOiBtb2QuX19OX1NTUCxcbiAgICB9KVxuICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhXG5cbiAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSlcbiAgICB9XG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgX3VybDogVXJsLFxuICAgIF9hczogVXJsLFxuICAgIG9wdGlvbnM6IGFueVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgICAgfVxuICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgaWYgKFNUKSB7XG4gICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF91cmwpIDogX3VybFxuICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfYXMpIDogX2FzXG5cbiAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybClcbiAgICAgIGFzID0gYWRkQmFzZVBhdGgoYXMpXG5cbiAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKGFzKVxuXG4gICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShhcykpIHtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhc1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gcGFyc2UodXJsLCB0cnVlKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICBpZiAoIXRoaXMudXJsSXNOZXcoYXMpKSB7XG4gICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcbiAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2UoYXMpXG4gICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICAgIC8vIElmIHNoYWxsb3cgaXMgdHJ1ZSBhbmQgdGhlIHJvdXRlIGV4aXN0cyBpbiB0aGUgcm91dGVyIGNhY2hlIHdlIHJldXNlIHRoZSBwcmV2aW91cyByZXN1bHRcbiAgICAgIHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93KS50aGVuKFxuICAgICAgICAocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKVxuICAgICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICB9LFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoXG4gICAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgICApID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKFxuICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzXG4gICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbzogUm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICB9IGFzIGFueSkudGhlbihcbiAgICAgICAgICAgICAgICAgIChwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgKGdpcEVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLFxuICAgICAgICAgICAgICAgICAgICAgIGdpcEVyclxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKVxuICAgICAgICApXG4gICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICB9XG5cbiAgICByZXR1cm4gKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKFxuICAgICAgICAocmVzKSA9PlxuICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+KVxuICAgICAgLnRoZW4oKHJvdXRlSW5mbzogUm91dGVJbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGE8Um91dGVJbmZvPigoKSA9PlxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgICApXG4gICAgICAgICkudGhlbigocHJvcHMpID0+IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSBwYXJzZSh1cmwpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKVxuICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPENvbXBvbmVudFJlcz4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuICAgIHJvdXRlID0gZGVsQmFzZVBhdGgocm91dGUpXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhcnNlKGFzUGF0aCkucGF0aG5hbWUhKVxuXG4gICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICA6IGZldGNoTmV4dERhdGEoXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICB0aGlzLmlzU3NyLFxuICAgICAgICAgIChkYXRhKSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSlcbiAgICAgICAgKVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2UoYXNQYXRoLCB0cnVlKVxuICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lISlcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpXG4gICAgICA7KGUgYXMgYW55KS5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsIi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH1cbn0ge1xuICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gIGNvbnN0IGVzY2FwZWRSb3V0ZSA9IGVzY2FwZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgKF8sICQxKSA9PiB7XG4gICAgICBjb25zdCBpc09wdGlvbmFsID0gL15cXFxcXFxbLipcXFxcXFxdJC8udGVzdCgkMSlcbiAgICAgIGlmIChpc09wdGlvbmFsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoMiwgLTIpXG4gICAgICB9XG4gICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICBpZiAoaXNDYXRjaEFsbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDYpXG4gICAgICB9XG4gICAgICBncm91cHNbXG4gICAgICAgICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIF0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQ6IGlzQ2F0Y2hBbGwgfVxuICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGwgPyAoaXNPcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgIH1cbiAgKVxuXG4gIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZTogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgICAgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKVxuXG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYFxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLFxuICAgIGdyb3VwcyxcbiAgICBuYW1lZFJlZ2V4OiBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZVxuICAgICAgPyBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGBcbiAgICAgIDogdW5kZWZpbmVkLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmb3JtYXQsIFVSTEZvcm1hdE9wdGlvbnMsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogYW55XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgc3RhdGljTWFya3VwOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZGV2RmlsZXM6IHN0cmluZ1tdXG4gIGZpbGVzOiBzdHJpbmdbXVxuICBsb3dQcmlvcml0eUZpbGVzOiBzdHJpbmdbXVxuICBwb2x5ZmlsbEZpbGVzOiBzdHJpbmdbXVxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGh0bWxQcm9wczogYW55XG4gIGJvZHlUYWdzOiBhbnlbXVxuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2Vcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgdXJsOiBVcmxPYmplY3QsXG4gIG9wdGlvbnM/OiBVUkxGb3JtYXRPcHRpb25zXG4pOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0KHVybCBhcyBVUkwsIG9wdGlvbnMpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5mdW5jdGlvbiBDaXJjbGVBY2NlbnQxIChwcm9wcykge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIscHJvcHMsW1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIix7XCJjeFwiOlwiNjkuNVwiLFwiY3lcIjpcIjIwMy41XCIsXCJyXCI6XCIyMDNcIixcInN0cm9rZVwiOlwiIzRENTVCQ1wiLFwia2V5XCI6MH0pLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIix7XCJvcGFjaXR5XCI6XCIwLjlcIixcImN4XCI6XCI1Ni41XCIsXCJjeVwiOlwiMjE2LjVcIixcInJcIjpcIjE5MFwiLFwic3Ryb2tlXCI6XCIjNEQ1NUJDXCIsXCJrZXlcIjoxfSksUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLHtcIm9wYWNpdHlcIjpcIjAuOFwiLFwiY3hcIjpcIjM5LjVcIixcImN5XCI6XCIyMzcuNVwiLFwiclwiOlwiMTgxXCIsXCJzdHJva2VcIjpcIiM0RDU1QkNcIixcImtleVwiOjJ9KSxSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIse1wib3BhY2l0eVwiOlwiMC43XCIsXCJjeFwiOlwiMjdcIixcImN5XCI6XCIyNTZcIixcInJcIjpcIjE2Ny41XCIsXCJzdHJva2VcIjpcIiM0RDU1QkNcIixcImtleVwiOjN9KSxSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIse1wib3BhY2l0eVwiOlwiMC42XCIsXCJjeFwiOlwiMTBcIixcImN5XCI6XCIyNjlcIixcInJcIjpcIjE1NS41XCIsXCJzdHJva2VcIjpcIiM0RDU1QkNcIixcImtleVwiOjR9KSxSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIse1wib3BhY2l0eVwiOlwiMC41XCIsXCJjeFwiOlwiLTcuNVwiLFwiY3lcIjpcIjI4Ni41XCIsXCJyXCI6XCIxMzhcIixcInN0cm9rZVwiOlwiIzRENTVCQ1wiLFwia2V5XCI6NX0pLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIix7XCJvcGFjaXR5XCI6XCIwLjRcIixcImN4XCI6XCItMjRcIixcImN5XCI6XCIzMDNcIixcInJcIjpcIjEyMS41XCIsXCJzdHJva2VcIjpcIiM0RDU1QkNcIixcImtleVwiOjZ9KV0pO1xufVxuXG5DaXJjbGVBY2NlbnQxLmRlZmF1bHRQcm9wcyA9IHtcImlkXCI6XCJhY2NlbnQtY2lyY2xlXCIsXCJ3aWR0aFwiOlwiMjczXCIsXCJoZWlnaHRcIjpcIjI4M1wiLFwidmlld0JveFwiOlwiMCAwIDI3MyAyODNcIixcImZpbGxcIjpcIm5vbmVcIn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2lyY2xlQWNjZW50MTtcblxuQ2lyY2xlQWNjZW50MS5kZWZhdWx0ID0gQ2lyY2xlQWNjZW50MTtcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmZ1bmN0aW9uIERlZmF1bHRBdmF0YXIgKHByb3BzKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIixwcm9wcyxbUmVhY3QuY3JlYXRlRWxlbWVudChcIm1hc2tcIix7XCJpZFwiOlwibWFzazBcIixcIm1hc2tUeXBlXCI6XCJhbHBoYVwiLFwibWFza1VuaXRzXCI6XCJ1c2VyU3BhY2VPblVzZVwiLFwieFwiOlwiMFwiLFwieVwiOlwiMFwiLFwid2lkdGhcIjpcIjkwXCIsXCJoZWlnaHRcIjpcIjkwXCIsXCJrZXlcIjowfSxSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIse1wiY3hcIjpcIjQ1XCIsXCJjeVwiOlwiNDVcIixcInJcIjpcIjQ1XCIsXCJmaWxsXCI6XCIjNzE3NkI4XCJ9KSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJtYXNrXCI6XCJ1cmwoI21hc2swKVwiLFwia2V5XCI6MX0sW1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIix7XCJjeFwiOlwiNDVcIixcImN5XCI6XCI0NVwiLFwiclwiOlwiNDVcIixcImZpbGxcIjpcIiM3MTc2QjhcIixcImtleVwiOjB9KSxSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIse1wiY3hcIjpcIjQ1XCIsXCJjeVwiOlwiMzFcIixcInJcIjpcIjE5XCIsXCJmaWxsXCI6XCIjNTA1NTkzXCIsXCJrZXlcIjoxfSksUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLHtcImN4XCI6XCI0NC41XCIsXCJjeVwiOlwiODIuNVwiLFwiclwiOlwiMzQuNVwiLFwiZmlsbFwiOlwiIzUwNTU5M1wiLFwia2V5XCI6Mn0pXSldKTtcbn1cblxuRGVmYXVsdEF2YXRhci5kZWZhdWx0UHJvcHMgPSB7XCJ3aWR0aFwiOlwiOTBcIixcImhlaWdodFwiOlwiOTBcIixcInZpZXdCb3hcIjpcIjAgMCA5MCA5MFwiLFwiZmlsbFwiOlwibm9uZVwifTtcblxubW9kdWxlLmV4cG9ydHMgPSBEZWZhdWx0QXZhdGFyO1xuXG5EZWZhdWx0QXZhdGFyLmRlZmF1bHQgPSBEZWZhdWx0QXZhdGFyO1xuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuZnVuY3Rpb24gSWNvbkJ1c2luZXNzRGV2ZWxvcG1lbnQgKHByb3BzKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIixwcm9wcyxbUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIix7XCJkXCI6XCJNNDQuMDgzMyAyMS4wODMzSDQwLjIxMTdDNDAuMjI3IDIwLjc2NDIgNDAuMjUgMjAuNDQ2IDQwLjI1IDIwLjEyNUM0MC4yNSAxMS43NTY4IDM0Ljk3NjMgNC4xNzE2MyAyNy4xMjI3IDEuMjQ5NjdDMjcuMTA3NCAxLjI0MzkyIDI3LjA5MjEgMS4yNDAwOCAyNy4wNzY3IDEuMjM1MjlDMjcuMDcyOSAxLjIzNDMzIDI3LjA3IDEuMjMxNDYgMjcuMDY2MiAxLjIzMDVDMjcuMDYxNCAxLjIyODU4IDI3LjA1NjYgMS4yMjg1OCAyNy4wNTE4IDEuMjI3NjNDMjQuODI1NiAwLjQxNDk1OCAyMi40OTY5IDAgMjAuMTI1IDBDMTguNTI0NiAwIDE2Ljk3NTkgMC4yMDc5NTggMTUuNDgyOCAwLjU2MjU0MkMxNS4zMDc1IDAuNTgxNzA4IDE1LjEzNTkgMC42Mjc3MDggMTQuOTcxMSAwLjY5NDc5MkM2LjM2NzE3IDIuOTc5NDYgMCAxMC44MTE5IDAgMjAuMTI1QzAgMjAuMjEwMyAwLjAxMDU0MTcgMjAuMjk0NiAwLjAxMTUgMjAuMzc5OUMwLjAxNDM3NSAyMC40Mjk4IDAuMDExNSAyMC40ODA1IDAuMDE4MjA4MyAyMC41Mjg1QzAuMTEyMTI1IDI1LjE2NjggMS43OTU5MiAyOS42NDEyIDQuODA3OTYgMzMuMTYzMUM0LjgwODkyIDMzLjE2NDEgNC44MTA4MyAzMy4xNjYgNC44MTE3OSAzMy4xNjdDNC44MTM3MSAzMy4xNjg5IDQuODE1NjIgMzMuMTcwOCA0LjgxNzU0IDMzLjE3MzdDOC42NDg5NiAzNy42NzExIDE0LjIyNzQgNDAuMjUgMjAuMTI1IDQwLjI1SDM3LjUzODlMNDIuNzI4MiA0NS40Mzg0QzQzLjA5NDMgNDUuODA1NSA0My41ODUgNDYgNDQuMDgzMyA0NkM0NC4zMjk2IDQ2IDQ0LjU3OTggNDUuOTUyMSA0NC44MTY1IDQ1Ljg1NDNDNDUuNTMzMyA0NS41NTcyIDQ2IDQ0Ljg1ODYgNDYgNDQuMDgzM1YyM0M0NiAyMS45NDIgNDUuMTQxMyAyMS4wODMzIDQ0LjA4MzMgMjEuMDgzM1pNMjUuMTA2NCAxMy4xNjA4TDI3LjYwNzcgNS42NjM3NUMzMi45NDI3IDguNDM5MDggMzYuNDE2NyAxNC4wMTk1IDM2LjQxNjcgMjAuMTI1QzM2LjQxNjcgMjAuNDQ1MSAzNi40MDcxIDIwLjc2NTIgMzYuMzg4OSAyMS4wODMzSDMxLjQ4N0MzMC45MjE2IDE5Ljk4NTEgMzAuMDc4MiAxOS4wNTA3IDI5LjAxMzUgMTguMzgwOEwyNi4zOTYzIDE2Ljc1NzRDMjUuMTg2IDE1Ljk5ODQgMjQuNjU2IDE0LjUxNzggMjUuMTA2NCAxMy4xNjA4Wk0xMy45MDczIDUuMDcyNDZMMTQuNTIxNiA3LjUyOTYyQzE0LjgzNiA4Ljc4NTA0IDE0LjMwMTIgMTAuMDc1OSAxMy4xOTA1IDEwLjc0MjlDMTEuNjQzOCAxMS42NzE1IDEwLjU1MDMgMTMuMTQ2NCAxMC4xMTMzIDE0Ljg5NjNMOS42OTQ1IDE2LjU3MzRDOS4zNDE4MyAxNy45ODUgOC4wMjcgMTguOTA1IDYuNTkxNDIgMTguNzcyOEM1LjcyMTI1IDE4LjY5MDQgNC44MDMxNyAxOC42MDYgMy45MTU3NSAxOC41Mjc1QzQuNTA5OTIgMTIuNDM4MiA4LjQ3MDcxIDcuMzI2NDYgMTMuOTA3MyA1LjA3MjQ2Wk0xOC4yMDgzIDM2LjMwMzZDMTUuMDMwNSAzNS45MjcgMTIuMDUyIDM0LjYxMTIgOS42MTQ5NiAzMi41NDVMMTAuODU5OCAzMS45OTY4QzEyLjUwMzQgMzEuMjY2NiAxNC4zODg0IDMxLjI1MzIgMTYuMDM4NyAzMS45NTk1TDE3Ljc4MDkgMzIuNzAyMkMxNy45MTggMzIuNzYyNSAxOC4wNjY1IDMyLjgwODUgMTguMjA4MyAzMi44NjIyVjM2LjMwMzZaTTE4LjIwODMgMjNWMjguNzE4NEwxNy41NDUyIDI4LjQzNTdDMTQuOTIyMiAyNy4zMTE1IDExLjkxODggMjcuMzMyNiA5LjMxMzA4IDI4LjQ5MDNMNy44MDU2MyAyOS4xNTQ0QzcuNDk4OTYgMjkuMjg5NSA3LjE3NTA0IDI5LjQzMTQgNi44NTk3NSAyOS41Njk0QzUuMzM4ODcgMjcuNDQwOSA0LjM3IDI0Ljk3MTMgNC4wMDY3OSAyMi4zODM4QzQuNzUwNDYgMjIuNDUwOSA1LjUwODUgMjIuNTIwOCA2LjIyOTE3IDIyLjU4OThDNi40NDg2MyAyMi42MSA2LjY2NzEyIDIyLjYyMDUgNi44ODM3MSAyMi42MjA1QzkuOTYyODMgMjIuNjIwNSAxMi42NTEgMjAuNTUyNCAxMy40MTI4IDE3LjUwM0wxMy44MzE2IDE1LjgyNTlDMTQuMDIwNCAxNS4wNjk4IDE0LjQ5MjkgMTQuNDMxNSAxNS4xNjI3IDE0LjAzQzE3LjcyOTIgMTIuNDkgMTguOTY2NCA5LjUwMzc5IDE4LjI0IDYuNjAxTDE3LjYwMjcgNC4wNDk5MkMxOC40MjY4IDMuOTIwNTQgMTkuMjY1NCAzLjgzMzMzIDIwLjEyNSAzLjgzMzMzQzIxLjQ0NDYgMy44MzMzMyAyMi43NDYgNC4wMDI5NiAyNC4wMTY4IDQuMzE0NDJMMjEuNDY4NiAxMS45NTA0QzIwLjQ1OTUgMTQuOTkxMiAyMS42NDg4IDE4LjMwMzIgMjQuMzY2NiAyMC4wMUwyNi4wOTczIDIxLjA4MzNIMjAuMTI1QzE5LjA2NyAyMS4wODMzIDE4LjIwODMgMjEuOTQyIDE4LjIwODMgMjNaTTQyLjE2NjcgMzkuNDU1NUwzOS42ODg0IDM2Ljk3ODJDMzkuMzI5IDM2LjYxODkgMzguODQxMiAzNi40MTY3IDM4LjMzMzMgMzYuNDE2N0gyMi4wNDE3VjMxLjQ1NjNDMjIuMDQxNyAzMS40NTM1IDIyLjA0MTcgMzEuNDUwNiAyMi4wNDE3IDMxLjQ0NjdWMjQuOTE2N0gzMC4xODM3QzMwLjE4NDYgMjQuOTE2NyAzMC4xODU2IDI0LjkxNjcgMzAuMTg2NSAyNC45MTY3QzMwLjE4NzUgMjQuOTE2NyAzMC4xODk0IDI0LjkxNjcgMzAuMTkwNCAyNC45MTY3SDM4LjEwMzNINDIuMTY2N1YzOS40NTU1WlwiLFwia2V5XCI6MH0pLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse1wiZFwiOlwiTTI2LjgzMzMgMjguNzVIMjUuODc1QzI0LjgxNyAyOC43NSAyMy45NTgzIDI5LjYwODcgMjMuOTU4MyAzMC42NjY3QzIzLjk1ODMgMzEuNzI0NyAyNC44MTcgMzIuNTgzMyAyNS44NzUgMzIuNTgzM0gyNi44MzMzQzI3Ljg5MTMgMzIuNTgzMyAyOC43NSAzMS43MjQ3IDI4Ljc1IDMwLjY2NjdDMjguNzUgMjkuNjA4NyAyNy44OTEzIDI4Ljc1IDI2LjgzMzMgMjguNzVaXCIsXCJrZXlcIjoxfSksUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIix7XCJkXCI6XCJNMzIuNTgzMyAyOC43NUgzMS42MjVDMzAuNTY3IDI4Ljc1IDI5LjcwODMgMjkuNjA4NyAyOS43MDgzIDMwLjY2NjdDMjkuNzA4MyAzMS43MjQ3IDMwLjU2NyAzMi41ODMzIDMxLjYyNSAzMi41ODMzSDMyLjU4MzNDMzMuNjQxMyAzMi41ODMzIDM0LjUgMzEuNzI0NyAzNC41IDMwLjY2NjdDMzQuNSAyOS42MDg3IDMzLjY0MTMgMjguNzUgMzIuNTgzMyAyOC43NVpcIixcImtleVwiOjJ9KSxSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtcImRcIjpcIk0zOC4zMzMzIDI4Ljc1SDM3LjM3NUMzNi4zMTcgMjguNzUgMzUuNDU4MyAyOS42MDg3IDM1LjQ1ODMgMzAuNjY2N0MzNS40NTgzIDMxLjcyNDcgMzYuMzE3IDMyLjU4MzMgMzcuMzc1IDMyLjU4MzNIMzguMzMzM0MzOS4zOTEzIDMyLjU4MzMgNDAuMjUgMzEuNzI0NyA0MC4yNSAzMC42NjY3QzQwLjI1IDI5LjYwODcgMzkuMzkxMyAyOC43NSAzOC4zMzMzIDI4Ljc1WlwiLFwia2V5XCI6M30pXSk7XG59XG5cbkljb25CdXNpbmVzc0RldmVsb3BtZW50LmRlZmF1bHRQcm9wcyA9IHtcIndpZHRoXCI6XCI0NlwiLFwiaGVpZ2h0XCI6XCI0NlwiLFwidmlld0JveFwiOlwiMCAwIDQ2IDQ2XCIsXCJmaWxsXCI6XCJub25lXCJ9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEljb25CdXNpbmVzc0RldmVsb3BtZW50O1xuXG5JY29uQnVzaW5lc3NEZXZlbG9wbWVudC5kZWZhdWx0ID0gSWNvbkJ1c2luZXNzRGV2ZWxvcG1lbnQ7XG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5mdW5jdGlvbiBJY29uQ29udGVudFdyaXRlciAocHJvcHMpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLHByb3BzLFtSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtcImRcIjpcIk00NC4wODMzIDkuNTgzMzNIMzguMzMzM1YxLjkxNjY3QzM4LjMzMzMgMC44NTg2NjcgMzcuNDc0NyAwIDM2LjQxNjcgMEg1Ljc1QzIuNTc4ODcgMCAwIDIuNTc4ODcgMCA1Ljc1VjQwLjI1QzAgNDMuNDIxMSAyLjU3ODg3IDQ2IDUuNzUgNDZINDAuMjVDNDMuNDIxMSA0NiA0NiA0My40MjExIDQ2IDQwLjI1VjExLjVDNDYgMTAuNDQyIDQ1LjE0MTMgOS41ODMzMyA0NC4wODMzIDkuNTgzMzNaTTUuNzUgNDIuMTY2N0M0LjY5Mjk2IDQyLjE2NjcgMy44MzMzMyA0MS4zMDcgMy44MzMzMyA0MC4yNVY1Ljc1QzMuODMzMzMgNC42OTI5NiA0LjY5Mjk2IDMuODMzMzMgNS43NSAzLjgzMzMzSDM0LjVWMTEuNVY0MC4yNUMzNC41IDQwLjkyMjcgMzQuNjIyNyA0MS41NjU4IDM0LjgzNTQgNDIuMTY2N0g1Ljc1Wk00Mi4xNjY3IDQwLjI1QzQyLjE2NjcgNDEuMzA3IDQxLjMwNyA0Mi4xNjY3IDQwLjI1IDQyLjE2NjdDMzkuMTkzIDQyLjE2NjcgMzguMzMzMyA0MS4zMDcgMzguMzMzMyA0MC4yNVYxMy40MTY3SDQyLjE2NjdWNDAuMjVaXCIsXCJrZXlcIjowfSksUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIix7XCJkXCI6XCJNMjguNzUgOS41ODMzN0g5LjU4MzMyQzguNTI1MzIgOS41ODMzNyA3LjY2NjY2IDEwLjQ0MiA3LjY2NjY2IDExLjVDNy42NjY2NiAxMi41NTggOC41MjUzMiAxMy40MTY3IDkuNTgzMzIgMTMuNDE2N0gyOC43NUMyOS44MDggMTMuNDE2NyAzMC42NjY3IDEyLjU1OCAzMC42NjY3IDExLjVDMzAuNjY2NyAxMC40NDIgMjkuODA4IDkuNTgzMzcgMjguNzUgOS41ODMzN1pcIixcImtleVwiOjF9KSxSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtcImRcIjpcIk0yNC45MTY3IDIxLjA4MzRIOS41ODMzMkM4LjUyNTMyIDIxLjA4MzQgNy42NjY2NiAyMS45NDIgNy42NjY2NiAyM0M3LjY2NjY2IDI0LjA1OCA4LjUyNTMyIDI0LjkxNjcgOS41ODMzMiAyNC45MTY3SDI0LjkxNjdDMjUuOTc0NyAyNC45MTY3IDI2LjgzMzMgMjQuMDU4IDI2LjgzMzMgMjNDMjYuODMzMyAyMS45NDIgMjUuOTc0NyAyMS4wODM0IDI0LjkxNjcgMjEuMDgzNFpcIixcImtleVwiOjJ9KSxSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtcImRcIjpcIk0yMyAyNi44MzM0SDkuNTgzMzJDOC41MjUzMiAyNi44MzM0IDcuNjY2NjYgMjcuNjkyIDcuNjY2NjYgMjguNzVDNy42NjY2NiAyOS44MDggOC41MjUzMiAzMC42NjY3IDkuNTgzMzIgMzAuNjY2N0gyM0MyNC4wNTggMzAuNjY2NyAyNC45MTY3IDI5LjgwOCAyNC45MTY3IDI4Ljc1QzI0LjkxNjcgMjcuNjkyIDI0LjA1OCAyNi44MzM0IDIzIDI2LjgzMzRaXCIsXCJrZXlcIjozfSksUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIix7XCJkXCI6XCJNMjEuMDgzMyAzMi41ODM0SDkuNTgzMzJDOC41MjUzMiAzMi41ODM0IDcuNjY2NjYgMzMuNDQyIDcuNjY2NjYgMzQuNUM3LjY2NjY2IDM1LjU1OCA4LjUyNTMyIDM2LjQxNjcgOS41ODMzMiAzNi40MTY3SDIxLjA4MzNDMjIuMTQxMyAzNi40MTY3IDIzIDM1LjU1OCAyMyAzNC41QzIzIDMzLjQ0MiAyMi4xNDEzIDMyLjU4MzQgMjEuMDgzMyAzMi41ODM0WlwiLFwia2V5XCI6NH0pXSk7XG59XG5cbkljb25Db250ZW50V3JpdGVyLmRlZmF1bHRQcm9wcyA9IHtcIndpZHRoXCI6XCI0NlwiLFwiaGVpZ2h0XCI6XCI0NlwiLFwidmlld0JveFwiOlwiMCAwIDQ2IDQ2XCIsXCJmaWxsXCI6XCJub25lXCJ9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEljb25Db250ZW50V3JpdGVyO1xuXG5JY29uQ29udGVudFdyaXRlci5kZWZhdWx0ID0gSWNvbkNvbnRlbnRXcml0ZXI7XG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5mdW5jdGlvbiBJY29uQ3VzdG9tZXJSZWxhdGlvbnNoaXAgKHByb3BzKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIixwcm9wcyxSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtcImRcIjpcIk0zNi44OTU4IDE1LjMzMzNIMzYuNDE2N1YxMy40MTY3QzM2LjQxNjcgNi4wMTgzMyAzMC4zOTgzIDAgMjMgMEMxNS42MDE3IDAgOS41ODMzMyA2LjAxODMzIDkuNTgzMzMgMTMuNDE2N1YxNS4zMzMzSDkuMTA0MTdDNC4wODQ0MiAxNS4zMzMzIDAgMTkuNDE3NyAwIDI0LjQzNzVDMCAyOS40NTcyIDQuMDg0NDIgMzMuNTQxNyA5LjEwNDE3IDMzLjU0MTdIMTQuMzc1QzE1LjQzMyAzMy41NDE3IDE2LjI5MTcgMzIuNjgzIDE2LjI5MTcgMzEuNjI1VjE3LjI1QzE2LjI5MTcgMTYuMTkyIDE1LjQzMyAxNS4zMzMzIDE0LjM3NSAxNS4zMzMzSDEzLjQxNjdWMTMuNDE2N0MxMy40MTY3IDguMTMyNDIgMTcuNzE1NyAzLjgzMzMzIDIzIDMuODMzMzNDMjguMjg0MyAzLjgzMzMzIDMyLjU4MzMgOC4xMzI0MiAzMi41ODMzIDEzLjQxNjdWMTUuMzMzM0gzMS42MjVDMzAuNTY3IDE1LjMzMzMgMjkuNzA4MyAxNi4xOTIgMjkuNzA4MyAxNy4yNVYzMS42MjVDMjkuNzA4MyAzMi42ODMgMzAuNTY3IDMzLjU0MTcgMzEuNjI1IDMzLjU0MTdIMzIuNTgzM1Y0MC4yNUMzMi41ODMzIDQxLjMwNyAzMS43MjM3IDQyLjE2NjcgMzAuNjY2NyA0Mi4xNjY3SDI5LjcwODNWNDEuMjA4M0MyOS43MDgzIDQwLjE1MDMgMjguODQ5NyAzOS4yOTE3IDI3Ljc5MTcgMzkuMjkxN0gyMS4wODMzQzIwLjAyNTMgMzkuMjkxNyAxOS4xNjY3IDQwLjE1MDMgMTkuMTY2NyA0MS4yMDgzVjQ0LjA4MzNDMTkuMTY2NyA0NS4xNDEzIDIwLjAyNTMgNDYgMjEuMDgzMyA0NkgyNy43OTE3SDMwLjY2NjdDMzMuODM3OCA0NiAzNi40MTY3IDQzLjQyMTEgMzYuNDE2NyA0MC4yNVYzMy41NDE3SDM2Ljg5NThDNDEuOTE1NiAzMy41NDE3IDQ2IDI5LjQ1NzIgNDYgMjQuNDM3NUM0NiAxOS40MTc3IDQxLjkxNTYgMTUuMzMzMyAzNi44OTU4IDE1LjMzMzNaTTEyLjQ1ODMgMjNIMTEuNUMxMC40NDIgMjMgOS41ODMzMyAyMy44NTg3IDkuNTgzMzMgMjQuOTE2N0M5LjU4MzMzIDI1Ljk3NDcgMTAuNDQyIDI2LjgzMzMgMTEuNSAyNi44MzMzSDEyLjQ1ODNWMjkuNzA4M0g5LjEwNDE3QzYuMTk4NSAyOS43MDgzIDMuODMzMzMgMjcuMzQ0MSAzLjgzMzMzIDI0LjQzNzVDMy44MzMzMyAyMS41MzA5IDYuMTk4NSAxOS4xNjY3IDkuMTA0MTcgMTkuMTY2N0gxMi40NTgzVjIzWk0zNi44OTU4IDI5LjcwODNIMzMuNTQxN1YyNi44MzMzSDM0LjVDMzUuNTU4IDI2LjgzMzMgMzYuNDE2NyAyNS45NzQ3IDM2LjQxNjcgMjQuOTE2N0MzNi40MTY3IDIzLjg1ODcgMzUuNTU4IDIzIDM0LjUgMjNIMzMuNTQxN1YxOS4xNjY3SDM2Ljg5NThDMzkuODAxNSAxOS4xNjY3IDQyLjE2NjcgMjEuNTMwOSA0Mi4xNjY3IDI0LjQzNzVDNDIuMTY2NyAyNy4zNDQxIDM5LjgwMTUgMjkuNzA4MyAzNi44OTU4IDI5LjcwODNaXCJ9KSk7XG59XG5cbkljb25DdXN0b21lclJlbGF0aW9uc2hpcC5kZWZhdWx0UHJvcHMgPSB7XCJ3aWR0aFwiOlwiNDZcIixcImhlaWdodFwiOlwiNDZcIixcInZpZXdCb3hcIjpcIjAgMCA0NiA0NlwiLFwiZmlsbFwiOlwibm9uZVwifTtcblxubW9kdWxlLmV4cG9ydHMgPSBJY29uQ3VzdG9tZXJSZWxhdGlvbnNoaXA7XG5cbkljb25DdXN0b21lclJlbGF0aW9uc2hpcC5kZWZhdWx0ID0gSWNvbkN1c3RvbWVyUmVsYXRpb25zaGlwO1xuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuZnVuY3Rpb24gSWNvbkdhbWVEZXZlbG9wbWVudCAocHJvcHMpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLHByb3BzLFtSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtcImRcIjpcIk0xOC42MDUxIDEwLjE0NDlDMTcuODU3NCA5LjM5NjYyIDE2LjY0MjYgOS4zOTY2MiAxNS44OTQ5IDEwLjE0NDlMMTQuMzc1IDExLjY2NDdMMTIuODU1MSAxMC4xNDQ5QzEyLjEwNzQgOS4zOTY2MiAxMC44OTI2IDkuMzk2NjIgMTAuMTQ0OSAxMC4xNDQ5QzkuMzk2NjIgMTAuODkzNSA5LjM5NjYyIDEyLjEwNjQgMTAuMTQ0OSAxMi44NTUxTDExLjY2NDcgMTQuMzc1TDEwLjE0NDkgMTUuODk0OUM5LjM5NjYyIDE2LjY0MzUgOS4zOTY2MiAxNy44NTY0IDEwLjE0NDkgMTguNjA1MUMxMC41MTg3IDE4Ljk4IDExLjAwOTEgMTkuMTY2NyAxMS41IDE5LjE2NjdDMTEuOTkwOSAxOS4xNjY3IDEyLjQ4MTMgMTguOTggMTIuODU1MSAxOC42MDUxTDE0LjM3NSAxNy4wODUzTDE1Ljg5NDkgMTguNjA1MUMxNi4yNjg3IDE4Ljk4IDE2Ljc1OTEgMTkuMTY2NyAxNy4yNSAxOS4xNjY3QzE3Ljc0MDkgMTkuMTY2NyAxOC4yMzEzIDE4Ljk4IDE4LjYwNTEgMTguNjA1MUMxOS4zNTM0IDE3Ljg1NjQgMTkuMzUzNCAxNi42NDM1IDE4LjYwNTEgMTUuODk0OUwxNy4wODUzIDE0LjM3NUwxOC42MDUxIDEyLjg1NTFDMTkuMzUzNCAxMi4xMDY0IDE5LjM1MzQgMTAuODkzNSAxOC42MDUxIDEwLjE0NDlaXCIsXCJrZXlcIjowfSksUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIix7XCJkXCI6XCJNMzEuNjI1IDI0LjkxNjdDMjcuOTI2IDI0LjkxNjcgMjQuOTE2NyAyNy45MjY5IDI0LjkxNjcgMzEuNjI1QzI0LjkxNjcgMzUuMzIzMSAyNy45MjYgMzguMzMzNCAzMS42MjUgMzguMzMzNEMzNS4zMjQgMzguMzMzNCAzOC4zMzMzIDM1LjMyMzEgMzguMzMzMyAzMS42MjVDMzguMzMzMyAyNy45MjY5IDM1LjMyNCAyNC45MTY3IDMxLjYyNSAyNC45MTY3Wk0zMS42MjUgMzQuNUMzMC4wNDAxIDM0LjUgMjguNzUgMzMuMjA5OSAyOC43NSAzMS42MjVDMjguNzUgMzAuMDQwMSAzMC4wNDAxIDI4Ljc1IDMxLjYyNSAyOC43NUMzMy4yMDk5IDI4Ljc1IDM0LjUgMzAuMDQwMSAzNC41IDMxLjYyNUMzNC41IDMzLjIwOTkgMzMuMjA5OSAzNC41IDMxLjYyNSAzNC41WlwiLFwia2V5XCI6MX0pLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse1wiZFwiOlwiTTQ1LjQzODUgMC41NjE1MjNDNDQuNjkwNyAtMC4xODY3MDcgNDMuNDc2IC0wLjE4NjcwNyA0Mi43MjgyIDAuNTYxNTIzTDM2Ljc2NDMgNi41MjUzN0MzNS4wNDA1IDUuNTA5NDggMzIuODQwMiA1LjUxMjI5IDMxLjExODIgNi42NjA2TDI4LjY0MTkgOC4zMTI0MkwyNC41NCA0LjIxMDk2QzI0LjUyNzggNC4xOTgzMiAyNC41MTI0IDQuMTg5OSAyNC40OTk3IDQuMTc4MkMyMS43OTEzIDEuNDg0MjkgMTguMTk5OSAwIDE0LjM3NSAwQzEwLjUzMzIgMCA2LjkyNDA1IDEuNDk2OTMgNC4yMTM3NyA0LjIxMDk2QzEuNDk2OTMgNi45MjQwNSAwIDEwLjUzMzIgMCAxNC4zNzVDMCAxOC4yMTY4IDEuNDk2OTMgMjEuODI1OSA0LjIxMDk2IDI0LjUzNjJDNi45NDIzIDI3LjI3NTEgMTAuNTg0NyAyOC43NjA4IDE0LjM1NDkgMjguNzYwOEMxNS4wMDU4IDI4Ljc2MDggMTUuNjYwOSAyOC42OTkgMTYuMzE1NSAyOC42MDkxTDE3LjM3OTIgMjkuNjczN0MxNi43NjUyIDM0LjEyMTQgMTguMjUwNCAzOC41ODU1IDIxLjQ2MTkgNDEuNzg3MkMyNC4xNzQxIDQ0LjUwMzEgMjcuNzgzMiA0NiAzMS42MjUgNDZDMzUuNDY2OCA0NiAzOS4wNzU5IDQ0LjUwMzEgNDEuNzg2MiA0MS43ODlDNDQuNTAzMSAzOS4wNzU5IDQ2IDM1LjQ2NjggNDYgMzEuNjI1QzQ2IDI3Ljc5OTIgNDQuNTE0OCAyNC4yMDU0IDQxLjgxOSAyMS40OTY1QzQxLjgwODIgMjEuNDg0OCA0MS44MDA3IDIxLjQ3MTMgNDEuNzg5IDIxLjQ2MUwzNy44MTQ5IDE3LjQ4NjhMMzkuNDg3MyAxNC44MDY0QzQwLjU3OTkgMTMuMDU2NCA0MC41MzczIDEwLjkwNTcgMzkuNDkyOSA5LjIxNjQ3TDQ1LjQzODUgMy4yNzA4N0M0Ni4xODY3IDIuNTIzMTEgNDYuMTg2NyAxLjMxMDIyIDQ1LjQzODUgMC41NjE1MjNaTTM5LjA3NSAzOS4wNzc4QzM3LjA4NzcgNDEuMDY5NCAzNC40NDE1IDQyLjE2NjcgMzEuNjI1IDQyLjE2NjdDMjguODA4NSA0Mi4xNjY3IDI2LjE2MjMgNDEuMDY5NCAyNC4xNzEyIDM5LjA3NUMyMS42Mjg1IDM2LjUzOTMgMjAuNTU4MyAzMi45MzAxIDIxLjMwODQgMjkuNDE5MUMyMS4zMDkzIDI5LjQxNCAyMS4zMDkzIDI5LjQwOTMgMjEuMzEwMyAyOS40MDQ2QzIxLjMyODUgMjkuMzE2MiAyMS4zMzQ2IDI5LjIyNzMgMjEuMzQwMiAyOS4xMzdDMjEuMzQyMSAyOS4xIDIxLjM1MDUgMjkuMDYxNiAyMS4zNTA1IDI5LjAyNTFDMjEuMzUwNSAyOC45NTQgMjEuMzM5MyAyOC44ODM0IDIxLjMzMTMgMjguODEyMkMyMS4zMjU3IDI4Ljc1OTQgMjEuMzI2NyAyOC43MDYgMjEuMzE2NCAyOC42NTQxQzIxLjMwNzUgMjguNjA5MSAyMS4yODkyIDI4LjU2NjEgMjEuMjc3MSAyOC41MjIxQzIxLjI1NjkgMjguNDQ4MiAyMS4yNDA2IDI4LjM3MjQgMjEuMjExNSAyOC4zMDE3QzIxLjE5MzggMjguMjU2MyAyMS4xNjY2IDI4LjIxNjEgMjEuMTQ0NiAyOC4xNzIxQzIxLjExMDkgMjguMTA0MiAyMS4wODA1IDI4LjAzNSAyMS4wMzkzIDI3Ljk3MThDMjEuMDE3NCAyNy45MzgxIDIwLjk4ODMgMjcuOTA5NiAyMC45NjQ1IDI3Ljg3NzhDMjAuOTEyNSAyNy44MDggMjAuODYxMSAyNy43Mzc5IDIwLjc5OTggMjcuNjc1NkMyMC43OTYgMjcuNjcxOSAyMC43OTQxIDI3LjY2NzIgMjAuNzg5OSAyNy42NjM1TDE4LjMzNjUgMjUuMjA5MUMxOC4zMzE5IDI1LjIwNCAxOC4zMjYzIDI1LjIwMTIgMTguMzIyNSAyNS4xOTY1QzE4LjI2ODcgMjUuMTQzNiAxOC4yMDc0IDI1LjA5OTYgMTguMTQ3IDI1LjA1MzhDMTguMTA1OSAyNS4wMjIgMTguMDY4NCAyNC45ODU1IDE4LjAyNTQgMjQuOTU3OEMxNy45NzYyIDI0LjkyNiAxNy45MjIgMjQuOTAzMSAxNy44NyAyNC44NzY0QzE3LjgxMjUgMjQuODQ1NSAxNy43NTY4IDI0LjgxMDQgMTcuNjk3MyAyNC43ODYxQzE3LjU4OTMgMjQuNzQyMSAxNy40NzUxIDI0LjcwOTggMTcuMzU5IDI0LjY4NTVDMTcuMzU1MyAyNC42ODQ2IDE3LjM1MTUgMjQuNjgyNyAxNy4zNDY5IDI0LjY4MThDMTcuMjU4NCAyNC42NjQ0IDE3LjE2NjcgMjQuNjYwNyAxNy4wNzU1IDI0LjY1NkMxNy4wNDMyIDI0LjY1NDIgMTcuMDEwNCAyNC42NDc2IDE2Ljk3NzcgMjQuNjQ3NkMxNi45MjE1IDI0LjY0NzYgMTYuODY0OSAyNC42NTg4IDE2LjgwNzMgMjQuNjYzNUMxNi43MzcxIDI0LjY3MDUgMTYuNjY2NSAyNC42NzMzIDE2LjU5NzIgMjQuNjg2NEMxNi41OTE2IDI0LjY4NzggMTYuNTg1MSAyNC42ODc4IDE2LjU3OSAyNC42ODg4QzEzLjA2NTcgMjUuNDM4OSA5LjQ1ODg2IDI0LjM3MTUgNi45MjAzMSAyMS44MjQxQzQuOTMwNjQgMTkuODM3NyAzLjgzMzMzIDE3LjE5MTUgMy44MzMzMyAxNC4zNzVDMy44MzMzMyAxMS41NTg1IDQuOTMwNjQgOC45MTIzMSA2LjkyNDk5IDYuOTIyMThDOC45MTIzMSA0LjkzMDY0IDExLjU1ODUgMy44MzMzMyAxNC4zNzUgMy44MzMzM0MxNy4xOTE1IDMuODMzMzMgMTkuODM3NyA0LjkzMDY0IDIxLjgyNSA2LjkyMjE4QzIxLjgzMyA2LjkyOTY3IDIxLjg0MjMgNi45MzUyOCAyMS44NTA3IDYuOTQzMjRMMjcuMDIxOSAxMi4xMTQ0QzI3LjAzOTIgMTIuMTMyNiAyNy4wNTc1IDEyLjE1MDkgMjcuMDc1NyAxMi4xNjc3TDM0LjAyODMgMTkuMTIwOEMzNC4wNDU2IDE5LjEzODEgMzQuMDYyOSAxOS4xNTU5IDM0LjA4MTIgMTkuMTczMkwzOS4wNTQgMjQuMTQ2QzM5LjA2MjggMjQuMTU0OSAzOS4wNjg1IDI0LjE2NTIgMzkuMDc2OSAyNC4xNzVDNDEuMDY5NCAyNi4xNjIzIDQyLjE2NjcgMjguODA4NSA0Mi4xNjY3IDMxLjYyNUM0Mi4xNjY3IDM0LjQ0MTUgNDEuMDY5NCAzNy4wODc3IDM5LjA3NSAzOS4wNzc4Wk0zMS40MDU1IDExLjA3NzVMMzMuMjQ0NSA5Ljg1MDUyQzMzLjgyOSA5LjQ1OTggMzQuNjE3IDkuNTM3NDggMzUuMTE1MyAxMC4wMzQ5TDM2LjAyNTUgMTAuOTQ1QzM2LjUxNTQgMTEuNDM1OSAzNi42MDE1IDEyLjE4OTMgMzYuMjM0NiAxMi43Nzc1TDM1LjAzMyAxNC43MDQ5TDMxLjQwNTUgMTEuMDc3NVpcIixcImtleVwiOjJ9KSxSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtcImRcIjpcIk0yNi4yNzE4IDI0LjM1NTFDMjcuMDIgMjMuNjA2NCAyNy4wMiAyMi4zOTM1IDI2LjI3MTggMjEuNjQ0OEwyNC4zNTUxIDE5LjcyODJDMjMuNjA3NCAxOC45Nzk5IDIyLjM5MjYgMTguOTc5OSAyMS42NDQ5IDE5LjcyODJDMjAuODk2NiAyMC40NzY5IDIwLjg5NjYgMjEuNjg5OCAyMS42NDQ5IDIyLjQzODVMMjMuNTYxNSAyNC4zNTUxQzIzLjkzNTQgMjQuNzI5OSAyNC40MjU4IDI0LjkxNjYgMjQuOTE2NyAyNC45MTY2QzI1LjQwNzUgMjQuOTE2NiAyNS44OTc5IDI0LjcyOTkgMjYuMjcxOCAyNC4zNTUxWlwiLFwia2V5XCI6M30pXSk7XG59XG5cbkljb25HYW1lRGV2ZWxvcG1lbnQuZGVmYXVsdFByb3BzID0ge1wid2lkdGhcIjpcIjQ2XCIsXCJoZWlnaHRcIjpcIjQ2XCIsXCJ2aWV3Qm94XCI6XCIwIDAgNDYgNDZcIixcImZpbGxcIjpcIm5vbmVcIn07XG5cbm1vZHVsZS5leHBvcnRzID0gSWNvbkdhbWVEZXZlbG9wbWVudDtcblxuSWNvbkdhbWVEZXZlbG9wbWVudC5kZWZhdWx0ID0gSWNvbkdhbWVEZXZlbG9wbWVudDtcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmZ1bmN0aW9uIEljb25QbGF5IChwcm9wcykge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIscHJvcHMsW1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIix7XCJjeFwiOlwiMjNcIixcImN5XCI6XCIyM1wiLFwiclwiOlwiMjNcIixcImtleVwiOjB9KSxSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtcImRcIjpcIk0zMiAyMS4yNjc5QzMzLjMzMzMgMjIuMDM3NyAzMy4zMzMzIDIzLjk2MjMgMzIgMjQuNzMyMUwyMCAzMS42NjAzQzE4LjY2NjcgMzIuNDMwMSAxNyAzMS40Njc4IDE3IDI5LjkyODJMMTcgMTYuMDcxOEMxNyAxNC41MzIyIDE4LjY2NjcgMTMuNTY5OSAyMCAxNC4zMzk3TDMyIDIxLjI2NzlaXCIsXCJmaWxsXCI6XCJ3aGl0ZVwiLFwia2V5XCI6MX0pXSk7XG59XG5cbkljb25QbGF5LmRlZmF1bHRQcm9wcyA9IHtcImNsYXNzTmFtZVwiOlwiaWNvblwiLFwid2lkdGhcIjpcIjQ2XCIsXCJoZWlnaHRcIjpcIjQ2XCIsXCJ2aWV3Qm94XCI6XCIwIDAgNDYgNDZcIixcImZpbGxcIjpcIm5vbmVcIn07XG5cbm1vZHVsZS5leHBvcnRzID0gSWNvblBsYXk7XG5cbkljb25QbGF5LmRlZmF1bHQgPSBJY29uUGxheTtcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmZ1bmN0aW9uIEljb25Qcm9kdWN0QWR2ZXJ0aXNlbWVudCAocHJvcHMpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLHByb3BzLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse1wiZFwiOlwiTTQ1LjQ0MSAyMy41NjE2TDQzLjUyNDQgMjEuNjQ1TDI5LjE2IDcuMjgwNTZDMjkuMTU4IDcuMjc4NjUgMjkuMTU2MSA3LjI3NjczIDI5LjE1MzMgNy4yNzM4NkwyNC4zNTc4IDIuNDc4MzdMMjIuNDQxMSAwLjU2MTcwOEMyMS42OTM2IC0wLjE4Njc0OCAyMC40Nzg0IC0wLjE4Njc0OCAxOS43MzA5IDAuNTYxNzA4QzE4Ljk4MjUgMS4zMTAxNiAxOC45ODI1IDIuNTIzNDEgMTkuNzMwOSAzLjI3MTg3TDIwLjU2OTUgNC4xMTA0MUwzLjQ4NzI0IDMxLjQ0MUwzLjI3NDQ5IDMxLjIyODNDMi41MjY5OSAzMC40Nzk4IDEuMzExODMgMzAuNDc5OCAwLjU2NDMzMyAzMS4yMjgzQy0wLjE4NDEyMyAzMS45NzY3IC0wLjE4NDEyMyAzMy4xOSAwLjU2NDMzMyAzMy45Mzg0TDIuNDgwOTkgMzUuODU1MUwxMC4xNDc2IDQzLjUyMThMMTIuMDY0MyA0NS40Mzg0QzEyLjQzODEgNDUuODEzMSAxMi45Mjg3IDQ2IDEzLjQxOTQgNDZDMTMuOTEgNDYgMTQuNDAwNyA0NS44MTMxIDE0Ljc3NDUgNDUuNDM4NEMxNS41MjI5IDQ0LjY5IDE1LjUyMjkgNDMuNDc2NyAxNC43NzQ1IDQyLjcyODNMMTQuNTYxNyA0Mi41MTU1TDE2Ljg4MTggNDEuMDY1NkMxNy45MzAyIDQzLjQwNDggMjAuMjc3MiA0NS4wNDE3IDIzLjAwMjcgNDUuMDQxN0MyNi43MDE4IDQ1LjA0MTcgMjkuNzExIDQyLjAzMjUgMjkuNzExIDM4LjMzMzRDMjkuNzExIDM2LjcwOTkgMjkuMTI4MyAzNS4yMDgyIDI4LjEzODQgMzQuMDI5NUw0MS44OTIzIDI1LjQzMzNMNDIuNzMwOSAyNi4yNzE4QzQzLjEwNDYgMjYuNjQ2NSA0My41OTUzIDI2LjgzMzQgNDQuMDg2IDI2LjgzMzRDNDQuNTc2NiAyNi44MzM0IDQ1LjA2NzMgMjYuNjQ2NSA0NS40NDEgMjYuMjcxOEM0Ni4xODk1IDI1LjUyMzMgNDYuMTg5NSAyNC4zMTAxIDQ1LjQ0MSAyMy41NjE2Wk0yMy4wMDI3IDQxLjIwODNDMjEuNjQyOCA0MS4yMDgzIDIwLjUwMTQgNDAuMjU5NiAyMC4yMDM0IDM4Ljk4ODhMMjQuODE3OCAzNi4xMDUyQzI1LjQ3MzMgMzYuNjQyOSAyNS44Nzc3IDM3LjQ2MTMgMjUuODc3NyAzOC4zMzM0QzI1Ljg3NzcgMzkuOTE4NCAyNC41ODc4IDQxLjIwODMgMjMuMDAyNyA0MS4yMDgzWk0yMy4wMjU3IDMyLjcwNDFMMTcuMjE0NCAzNi4zMzQzQzE3LjIwOTYgMzYuMzM3MiAxNy4yMDY3IDM2LjM0MSAxNy4yMDE5IDM2LjM0MzlMMTEuNzc5NyAzOS43MzI1TDYuMjY5MjggMzQuMjIyMUwyMy4zNTE1IDYuODkxNDhMMjUuMzI4NiA4Ljg2ODUyTDE2LjYxNjQgMjEuOTM2M0MxNi4wMjg5IDIyLjgxNyAxNi4yNjc1IDI0LjAwNzMgMTcuMTQ4MiAyNC41OTM4QzE3LjQ3NDEgMjQuODEzMiAxNy44NDQgMjQuOTE2NyAxOC4yMDkxIDI0LjkxNjdDMTguODI4MiAyNC45MTY3IDE5LjQzNjcgMjQuNjE2OCAxOS44MDU3IDI0LjA2MjhMMjguMDkyNCAxMS42MzMzTDM5LjExMDMgMjIuNjUxMkwyMy4wMjU3IDMyLjcwNDFaXCJ9KSk7XG59XG5cbkljb25Qcm9kdWN0QWR2ZXJ0aXNlbWVudC5kZWZhdWx0UHJvcHMgPSB7XCJ3aWR0aFwiOlwiNDdcIixcImhlaWdodFwiOlwiNDZcIixcInZpZXdCb3hcIjpcIjAgMCA0NyA0NlwiLFwiZmlsbFwiOlwibm9uZVwifTtcblxubW9kdWxlLmV4cG9ydHMgPSBJY29uUHJvZHVjdEFkdmVydGlzZW1lbnQ7XG5cbkljb25Qcm9kdWN0QWR2ZXJ0aXNlbWVudC5kZWZhdWx0ID0gSWNvblByb2R1Y3RBZHZlcnRpc2VtZW50O1xuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuZnVuY3Rpb24gSWNvblRyYXZlbEd1aWRhbmNlIChwcm9wcykge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIscHJvcHMsUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIix7XCJkXCI6XCJNMS45MTY2NyA0Nkg0NC4wODMzQzQ1LjE0MTMgNDYgNDYgNDUuMTQxMyA0NiA0NC4wODMzVjMyLjY4NDlDNDYgMjkuNTk3IDQ0Ljc5MjcgMjYuNjk5IDQyLjYwMDkgMjQuNTI0NUM0MC40MDgyIDIyLjM0ODIgMzcuNTIxNSAyMS4yMDUgMzQuNDA4OCAyMS4xODc3QzI5LjEzMDQgMjEuMjI4OSAyNi4zNjU5IDIxLjIxOTUgMjQuOTE2NyAyMS4xOTU2VjEuOTE2NjdDMjQuOTE2NyAwLjg1ODY2MyAyNC4wNTggMCAyMyAwSDEuOTE2NjdDMC44NTg2NjMgMCAwIDAuODU4NjYzIDAgMS45MTY2N1Y0NC4wODMzQzAgNDUuMTQxMyAwLjg1ODY2MyA0NiAxLjkxNjY3IDQ2Wk0zLjgzMzMzIDM4LjMzMzNINy42NjY2N1Y0Mi4xNjY3SDMuODMzMzNWMzguMzMzM1pNMjEuMDgzMyAzOC4zMzMzVjQyLjE2NjdIMTEuNVYzOC4zMzMzSDIxLjA4MzNaTTM0LjUgMzguMzMzM1Y0Mi4xNjY3SDI0LjkxNjdWMzguMzMzM0gzNC41Wk0zOC4zMzMzIDQyLjE2NjdWMzguMzMzM0g0Mi4xNjY3VjQyLjE2NjdIMzguMzMzM1pNMjEuMDgzMyAzLjgzMzMzVjcuNjY2NjdIMTcuMjVDMTYuMTkyIDcuNjY2NjcgMTUuMzMzMyA4LjUyNTMzIDE1LjMzMzMgOS41ODMzM0MxNS4zMzMzIDEwLjY0MTMgMTYuMTkyIDExLjUgMTcuMjUgMTEuNUgyMS4wODMzVjE1LjMzMzNIMTcuMjVDMTYuMTkyIDE1LjMzMzMgMTUuMzMzMyAxNi4xOTIgMTUuMzMzMyAxNy4yNUMxNS4zMzMzIDE4LjMwOCAxNi4xOTIgMTkuMTY2NyAxNy4yNSAxOS4xNjY3SDIxLjA4MzNWMjIuOTIyM0MyMS4wNzA3IDIzLjIwMDMgMjEuMTE4IDIzLjQ4MjkgMjEuMjI4OSAyMy43NDk2QzIxLjgwNCAyNS4xMjE2IDIxLjgwNjggMjUuMTIxNiAzNC40Mzg3IDI1LjAyMkMzNi40OTcyIDI1LjAzNTUgMzguNDM5NiAyNS43OTY0IDM5LjkgMjcuMjQ2NUM0MS4zNjE4IDI4LjY5NTMgNDIuMTY2NyAzMC42MjY0IDQyLjE2NjcgMzIuNjg0OVYzNC41SDMuODMzMzNWMy44MzMzM0gyMS4wODMzWlwifSkpO1xufVxuXG5JY29uVHJhdmVsR3VpZGFuY2UuZGVmYXVsdFByb3BzID0ge1wid2lkdGhcIjpcIjQ2XCIsXCJoZWlnaHRcIjpcIjQ2XCIsXCJ2aWV3Qm94XCI6XCIwIDAgNDYgNDZcIixcImZpbGxcIjpcIm5vbmVcIn07XG5cbm1vZHVsZS5leHBvcnRzID0gSWNvblRyYXZlbEd1aWRhbmNlO1xuXG5JY29uVHJhdmVsR3VpZGFuY2UuZGVmYXVsdCA9IEljb25UcmF2ZWxHdWlkYW5jZTtcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmZ1bmN0aW9uIExvZ28gKHByb3BzKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIixwcm9wcyxbUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLHtcImN4XCI6XCIyNlwiLFwiY3lcIjpcIjI3XCIsXCJyXCI6XCIxMVwiLFwiZmlsbFwiOlwiI0ZFNzIxQ1wiLFwia2V5XCI6MH0pLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse1wiZFwiOlwiTTI4LjgzNiAxNC45OFY0MEgyNC42OTZWMjEuMjQ0TDE3LjQ2IDQwSDEzLjg2TDYuNTg4IDIxLjI0NFY0MEgyLjQ4NFYxNC45OEg3LjQ1MkwxNS43MzIgMzQuOTZMMjMuODY4IDE0Ljk4SDI4LjgzNlpcIixcImZpbGxcIjpcIndoaXRlXCIsXCJrZXlcIjoxfSldKTtcbn1cblxuTG9nby5kZWZhdWx0UHJvcHMgPSB7XCJ3aWR0aFwiOlwiMzdcIixcImhlaWdodFwiOlwiNTRcIixcInZpZXdCb3hcIjpcIjAgMCAzNyA1NFwiLFwiZmlsbFwiOlwibm9uZVwifTtcblxubW9kdWxlLmV4cG9ydHMgPSBMb2dvO1xuXG5Mb2dvLmRlZmF1bHQgPSBMb2dvO1xuIiwiaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXJyb3JIYW5kbGVyKGVycm9yKSB7XG4gIGlmIChlcnJvcikge1xuICAgIGxldCBtZXNzYWdlO1xuICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNTAwKVxuICAgICAgICBtZXNzYWdlID0gXCJTb21ldGhpbmcgd2VudCB0ZXJyaWJseSB3cm9uZ1wiO1xuICAgICAgZWxzZSBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlO1xuXG4gICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgPT09IFwic3RyaW5nXCIpIHRvYXN0LmVycm9yKG1lc3NhZ2UpO1xuXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCIuL2Vycm9ySGFuZGxlclwiO1xuXG5jb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9IT1NUfWAsXG59KTtcblxuaW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZSgocmVzcG9uc2UpID0+IHJlc3BvbnNlLmRhdGEsIGVycm9ySGFuZGxlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJzcmMvY29uZmlncy9heGlvc1wiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBhbGw6IChvcHRpb25zID0geyBwYXJhbXM6IHsgc3RhdHVzOiBcInB1Ymxpc2hlZFwiIH0gfSkgPT5cbiAgICBheGlvcy5nZXQoYC9jb3Vyc2VzYCwgb3B0aW9ucykudGhlbigocmVzKSA9PiByZXMuZGF0YSksXG4gIGRldGFpbHM6IChpZCkgPT4gYXhpb3MuZ2V0KGAvY291cnNlcy8ke2lkfWApLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpLFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IChudW1iZXIgPSAwKSA9PiB7XG4gIGNvbnN0IHRob3VzYW5kID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCk7XG4gIHJldHVybiB0aG91c2FuZC5mb3JtYXQobnVtYmVyKTtcbn07XG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgQ2lyY2xlIGZyb20gXCItIXN2Zy1yZWFjdC1sb2FkZXIhcHVibGljL2ltYWdlcy9jaXJjbGUtYWNjZW50LTEuc3ZnXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCJzcmMvcGFydHMvSGVhZGVyXCI7XG5pbXBvcnQgSGVybyBmcm9tIFwic3JjL3BhcnRzL0hlcm9cIjtcbmltcG9ydCBDbGllbnRzIGZyb20gXCJzcmMvcGFydHMvQ2xpZW50c1wiO1xuaW1wb3J0IExpc3RDb3Vyc2VzIGZyb20gXCJzcmMvcGFydHMvTGlzdENvdXJzZXNcIjtcbmltcG9ydCBMaXN0Q2F0ZWdvcmllcyBmcm9tIFwic3JjL3BhcnRzL0xpc3RDYXRlZ29yaWVzXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCJzcmMvcGFydHMvRm9vdGVyXCI7XG5pbXBvcnQgY291cnNlcyBmcm9tIFwic3JjL2NvbnN0YW50cy9hcGkvY291cnNlc1wiO1xuXG5mdW5jdGlvbiBIb21lKHsgZGF0YSA9IFtdIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5CV0FNSUNSTzwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVhZGVyLWNsaXBwaW5nIHB0LTEwIG1pbi1oLXNjcmVlbiBtZDptaW4taC0wXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW5zaGluZSBtYXgtdy1mdWxsXCI+PC9kaXY+XG4gICAgICAgICAgPENpcmNsZSBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgYm90dG9tLTBcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPEhlcm8gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgcHgtNCBteC1hdXRvIG1kOnB0LTI0XCI+XG4gICAgICAgICAgPENsaWVudHMgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgcHgtNCBteC1hdXRvIG1kOnB0LTI0XCI+XG4gICAgICAgICAgPExpc3RDb3Vyc2VzIGRhdGE9e2RhdGF9IC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIHB4LTQgbXgtYXV0byBtZDpwdC0yNFwiPlxuICAgICAgICAgIDxMaXN0Q2F0ZWdvcmllcyAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm10LTI0IGJnLWluZGlnby0xMDAwIHB5LTEyXCI+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjb3Vyc2VzLmFsbCgpO1xuICAgIHJldHVybiB7IGRhdGE6IGRhdGEuZGF0YSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IGRhdGE6IFtdIH07XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsaWVudHMoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctMS82IG1iLTggbWQ6bWItMFwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiL2ltYWdlcy9sb2dvLWFtYXpvbi5zdmdcIlxuICAgICAgICAgIGFsdD1cImxvZ28gYW1hem9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy0xLzYgbWItOCBtZDptYi0wXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2xvZ28tbWljcm9zb2Z0LnN2Z1wiXG4gICAgICAgICAgYWx0PVwibG9nbyBtaWNyb3NvZnRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG9cIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LTEvNiBtYi04IG1kOm1iLTBcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cIi9pbWFnZXMvbG9nby10ZXNsYS5zdmdcIlxuICAgICAgICAgIGFsdD1cImxvZ28gdGVzbGFcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG9cIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LTEvNiBtYi04IG1kOm1iLTBcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cIi9pbWFnZXMvbG9nby1nb29nbGUuc3ZnXCJcbiAgICAgICAgICBhbHQ9XCJsb2dvIGdvb2dsZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0b1wiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctMS82IG1iLTggbWQ6bWItMFwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiL2ltYWdlcy9sb2dvLWZhY2Vib29rLnN2Z1wiXG4gICAgICAgICAgYWx0PVwibG9nbyBmYWNlYm9va1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0b1wiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gIGZ1bmN0aW9uIHN1Ym1pdCgpIHt9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC00IG14LWF1dG9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMS82IG1iLTggbWQ6bWItMFwiPlxuICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+Q29tcGFueTwvaDY+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtdC0yXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWluZGlnby01MDAgaG92ZXI6dGV4dC10ZWFsLTUwMCBob3Zlcjp1bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgIEFQSSBEZXZlbG9wZXJcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNTAwIGhvdmVyOnRleHQtdGVhbC01MDAgaG92ZXI6dW5kZXJsaW5lXCI+XG4gICAgICAgICAgICAgICAgICBDYXJlZXJcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNTAwIGhvdmVyOnRleHQtdGVhbC01MDAgaG92ZXI6dW5kZXJsaW5lXCI+XG4gICAgICAgICAgICAgICAgICBPdXIgU3RvcnlcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNTAwIGhvdmVyOnRleHQtdGVhbC01MDAgaG92ZXI6dW5kZXJsaW5lXCI+XG4gICAgICAgICAgICAgICAgICBOZXcgU29vblxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0xLzYgbWItOCBtZDptYi0wXCI+XG4gICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5TdHVkZW50PC9oNj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm10LTJcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtaW5kaWdvLTUwMCBob3Zlcjp0ZXh0LXRlYWwtNTAwIGhvdmVyOnVuZGVybGluZVwiPlxuICAgICAgICAgICAgICAgICAgR2V0IFNjaG9sYXJzaGlwXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm10LTJcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtaW5kaWdvLTUwMCBob3Zlcjp0ZXh0LXRlYWwtNTAwIGhvdmVyOnVuZGVybGluZVwiPlxuICAgICAgICAgICAgICAgICAgT3VyIFBhdGhza2lsbHNcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNTAwIGhvdmVyOnRleHQtdGVhbC01MDAgaG92ZXI6dW5kZXJsaW5lXCI+XG4gICAgICAgICAgICAgICAgICBBbGwgRmVhdHVyZXNcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNTAwIGhvdmVyOnRleHQtdGVhbC01MDAgaG92ZXI6dW5kZXJsaW5lXCI+XG4gICAgICAgICAgICAgICAgICBSZWZ1bmQgUG9saWN5XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTEvNiBtYi04IG1kOm1iLTBcIj5cbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlRvdWNoIFVzPC9oNj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC00IHRleHQtaW5kaWdvLTUwMCBsZWFkaW5nLWxvb3NlXCI+XG4gICAgICAgICAgICBNaWNybyBDZW50cmUgPGJyIC8+XG4gICAgICAgICAgICBBbGxleXNpIEJsb2NrIFggTm8uIDEyIDxiciAvPlxuICAgICAgICAgICAgSmFrYXJ0YSBTZWxhdGFuLCBJbmRvbmVzaWEgPGJyIC8+XG4gICAgICAgICAgICArMjEgMjAyMCA1NTU1XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0yLzYgbWItOCBtZDptYi0wXCI+XG4gICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5Qcm9tb3Rpb25zPC9oNj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC00IHRleHQtaW5kaWdvLTUwMFwiPlxuICAgICAgICAgICAgU3VibWl0IHlvdXIgZW1haWwgZm9yIG5ldyB1cGRhdGVzXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXR9PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlci0wIHB4LTYgcHktMyBtdC02IG1kOnctMS8yXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsIGFkZHJlc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1vcmFuZ2UtNTAwIGhvdmVyOmJnLW9yYW5nZS00MDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIGZvY3VzOm91dGxpbmUtbm9uZSBzaGFkb3ctaW5uZXIgdGV4dC13aGl0ZSBweC00IG1kOnB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICBEYWZ0YXIgTm93XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci10IHB0LTggbXQtOCBib3JkZXItZ3JheS04MDAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNTAwXCI+XG4gICAgICAgICAgMjAyMCBDb3B5cmlnaHQgTWljcm8gYnkgQnVpbGRXaXRoIEFuZ2dhLiBBbGwgUmlnaHRzIFJlc2VydmVkXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IExvZ28gZnJvbSBcIi0hc3ZnLXJlYWN0LWxvYWRlciFwdWJsaWMvaW1hZ2VzL2xvZ28uc3ZnXCI7XG5pbXBvcnQgRGVmYXVsdEF2YXRhciBmcm9tIFwiLSFzdmctcmVhY3QtbG9hZGVyIXB1YmxpYy9pbWFnZXMvZGVmYXVsdC1hdmF0YXIuc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7IG9uTGlnaHQgfSkge1xuICBjb25zdCBbVXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgoKSA9PiBudWxsKTtcblxuICBjb25zdCBbVG9nZ2xlTWVudSwgc2V0VG9nZ2xlTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1c2VyQ29va2llcyA9XG4gICAgICBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmRvY3VtZW50LmNvb2tpZSlcbiAgICAgICAgPy5zcGxpdChcIjtcIilcbiAgICAgICAgPy5maW5kPy4oKGl0ZW0pID0+IGl0ZW0uaW5kZXhPZihcIkJXQU1JQ1JPOnVzZXJcIikgPiAtMSlcbiAgICAgICAgPy5zcGxpdChcIj1cIilbMV0gPz8gbnVsbDtcbiAgICBzZXRVc2VyKHVzZXJDb29raWVzID8gSlNPTi5wYXJzZSh1c2VyQ29va2llcykgOiBudWxsKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGxpbmtDb2xvciA9IG9uTGlnaHQgPyBcInRleHQtZ3JheS05MDBcIiA6IFwidGV4dC13aGl0ZVwiO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGxpbmtDVEEgPVxuICAgIHJvdXRlci5wYXRobmFtZS5pbmRleE9mKFwiL2xvZ2luXCIpID4gLTFcbiAgICAgID8gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTUVNQkVSUEFHRV9VUkx9L3JlZ2lzdGVyYFxuICAgICAgOiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NRU1CRVJQQUdFX1VSTH0vbG9naW5gO1xuICBjb25zdCB0ZXh0Q1RBID0gcm91dGVyLnBhdGhuYW1lLmluZGV4T2YoXCIvbG9naW5cIikgPiAtMSA/IFwiRGFmdGFyXCIgOiBcIk1hc3VrXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyXG4gICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgXCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIixcbiAgICAgICAgVG9nZ2xlTWVudSA/IFwiZml4ZWQgdy1mdWxsIC1teC00IHB4LTRcIiA6IFwiXCIsXG4gICAgICBdLmpvaW4oXCIgXCIpfVxuICAgID5cbiAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiA1NCwgekluZGV4OiA1MCB9fT5cbiAgICAgICAgPExvZ28gY2xhc3NOYW1lPVwib24tZGFya1wiPjwvTG9nbz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1kOmhpZGRlblwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlTWVudSgocHJldikgPT4gIXByZXYpfVxuICAgICAgICAgIGNsYXNzTmFtZT17W1widG9nZ2xlIHotNTBcIiwgVG9nZ2xlTWVudSA/IFwiYWN0aXZlXCIgOiBcIlwiXS5qb2luKFwiIFwiKX1cbiAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8dWxcbiAgICAgICAgY2xhc3NOYW1lPXtbXG4gICAgICAgICAgXCJ0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgaXRlbXMtY2VudGVyIGZpeGVkIGluc2V0LTAgYmctaW5kaWdvLTEwMDAgcHQtMjQgbWQ6cHQtMCBtZDpiZy10cmFuc3BhcmVudCBtZDpyZWxhdGl2ZSBtZDpmbGV4IG1kOm9wYWNpdHktMTAwIG1kOnZpc2libGVcIixcbiAgICAgICAgICBUb2dnbGVNZW51ID8gXCJvcGFjaXR5LTEwMCB2aXNpYmxlIHotMjBcIiA6IFwib3BhY2l0eS0wIGludmlzaWJsZVwiLFxuICAgICAgICBdLmpvaW4oXCIgXCIpfVxuICAgICAgPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXktNCBtZDpteS0wXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICAgICAgICAgIGxpbmtDb2xvcixcbiAgICAgICAgICAgICAgICBcInRleHQtd2hpdGUgaG92ZXI6dGV4dC10ZWFsLTUwMCB0ZXh0LWxnIHB4LTYgcHktMyBmb250LW1lZGl1bVwiLFxuICAgICAgICAgICAgICBdLmpvaW4oXCIgXCIpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXktNCBtZDpteS0wXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICAgICAgICAgIGxpbmtDb2xvcixcbiAgICAgICAgICAgICAgICBcInRleHQtd2hpdGUgaG92ZXI6dGV4dC10ZWFsLTUwMCB0ZXh0LWxnIHB4LTYgcHktMyBmb250LW1lZGl1bVwiLFxuICAgICAgICAgICAgICBdLmpvaW4oXCIgXCIpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQcmljaW5nXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXktNCBtZDpteS0wXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICAgICAgICAgIGxpbmtDb2xvcixcbiAgICAgICAgICAgICAgICBcInRleHQtd2hpdGUgaG92ZXI6dGV4dC10ZWFsLTUwMCB0ZXh0LWxnIHB4LTYgcHktMyBmb250LW1lZGl1bVwiLFxuICAgICAgICAgICAgICBdLmpvaW4oXCIgXCIpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBGZWF0dXJlc1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm15LTQgbWQ6bXktMFwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgICAgICAgICBsaW5rQ29sb3IsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0LXdoaXRlIGhvdmVyOnRleHQtdGVhbC01MDAgdGV4dC1sZyBweC02IHB5LTMgZm9udC1tZWRpdW1cIixcbiAgICAgICAgICAgICAgXS5qb2luKFwiIFwiKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU3RvcnlcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtdC04IG1kOm10LTBcIj5cbiAgICAgICAgICB7VXNlciA/IChcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vZXJlZmVycmVyXCJcbiAgICAgICAgICAgICAgaHJlZj17bGlua0NUQX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6YmctaW5kaWdvLTgwMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LXRlYWwtNTAwIHRleHQtbGcgcHgtNiBweS0zIGZvbnQtbWVkaXVtIG1sLTYgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIG92ZXJmbG93LWhpZGRlbiBtci0zIGJvcmRlci0yIGJvcmRlci1vcmFuZ2UtNTAwXCI+XG4gICAgICAgICAgICAgICAge1VzZXI/LnRodW1ibmFpbCA/IChcbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtVc2VyPy50aHVtYm5haWx9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17VXNlcj8ubmFtZSA/PyBcIlVzZXJuYW1lXCJ9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciB3LTggaC04IGlubGluZS1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8RGVmYXVsdEF2YXRhciBjbGFzc05hbWU9XCJmaWxsLWluZGlnby01MDAgdy04IGgtOCBpbmxpbmUtYmxvY2tcIj48L0RlZmF1bHRBdmF0YXI+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICBIaSwge1VzZXIubmFtZX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9lcmVmZXJyZXJcIlxuICAgICAgICAgICAgICBocmVmPXtsaW5rQ1RBfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1pbmRpZ28tNzAwIGhvdmVyOmJnLWluZGlnby04MDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIHRleHQtd2hpdGUgaG92ZXI6dGV4dC10ZWFsLTUwMCB0ZXh0LWxnIHB4LTYgcHktMyBmb250LW1lZGl1bSBtbC02XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RleHRDVEF9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIG9uTGlnaHQ6IHByb3BUeXBlcy5ib29sLFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZXJvKCkge1xuICBjb25zdCBbc3RhdGUsIHNldHN0YXRlXSA9IHVzZVN0YXRlKCgpID0+IFwiXCIpO1xuXG4gIGZ1bmN0aW9uIHN1Ym1pdCgpIHtcbiAgICB3aW5kb3cub3BlbihcbiAgICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01FTUJFUlBBR0VfVVJMfS9yZWdpc3Rlcj9lbWFpbD0ke3N0YXRlfWBcbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMS8yIG10LTggbWQ6bXQtMFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgdGV4dC13aGl0ZSBtYi01IGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXRlYWwtNDAwXCI+VGhlIE5ldzwvc3Bhbj4gV2F5IHRvXG4gICAgICAgICAgPGJyIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiIC8+IEFjaGlldmUgR29vZHtcIiBcIn1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXRlYWwtNDAwXCI+U2tpbGxzPC9zcGFuPlxuICAgICAgICA8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgdGV4dC1sZyBtYi04XCI+XG4gICAgICAgICAgV2UgcHJvdmlkZSB0b25zIG9mIHBhdGhza2lsbCB0aGF0IHlvdXtcIiBcIn1cbiAgICAgICAgICA8YnIgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrXCIgLz4gY2FuIGNob29zZSBhbmQgZm9jdXMgb25cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXR9IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldHN0YXRlKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmUgYm9yZGVyLTAgcHgtNCBtZDpweC02IHB5LTMgdy1mdWxsIG1kOnctMS8yXCJcbiAgICAgICAgICAgIHZhbHVlPXtzdGF0ZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbCBhZGRyZXNcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1vcmFuZ2UtNTAwIGhvdmVyOmJnLW9yYW5nZS00MDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIGZvY3VzOm91dGxpbmUtbm9uZSBzaGFkb3ctaW5uZXIgdGV4dC13aGl0ZSBweC00IG1kOnB4LTYgcHktMyB3aGl0ZXNwYWNlLW5vLXdyYXBcIj5cbiAgICAgICAgICAgIERhZnRhciBOb3dcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiB3LTEvMiBtZDpmbGV4IGp1c3RpZnktZW5kIHB0LTI0IHByLTE2XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIiBzdHlsZT17eyB3aWR0aDogMzY5LCBoZWlnaHQ6IDQ0MCB9fT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3JkZXItaW5kaWdvLTcwMCBib3JkZXItMiAtbXQtMTIgLW1yLTYgcmlnaHQtMFwiXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMzI0LCBoZWlnaHQ6IDM3NCB9fVxuICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHctZnVsbCBoLWZ1bGwgLW1iLTggLW1sLThcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9pbWctaGVyby1tYmFrLWFseXNzYS1jYWtlcC5qcGdcIlxuICAgICAgICAgICAgICBhbHQ9XCJNYmFrIEFseXNzYSBDYWtlcCBldXlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTEwIGJnLXdoaXRlIHB5LTMgcHgtNCBtdC0yNFwiXG4gICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgtNTAlKVwiLCB3aWR0aDogMjkwIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCBtYi0yXCI+XG4gICAgICAgICAgICAgIE1ldG9kZSBiZWxhamFyIHlhbmcgc2FudGFpIHNlcGVydGkgbm9udG9uIGRyYWtvciBkaSBOZXRmbGl4XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+QWx5c3NhLCBBcHBzIERldmVsb3Blcjwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgZm9ybWF0VGhvdXNhbmQgZnJvbSBcInNyYy9oZWxwZXJzL2Zvcm1hdFRob3VzYW5kXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlbmRlckl0ZW0oeyBpdGVtIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctMy82IG1kOnctMS82IHB4LTQgaC0xMDAgbWItOCBtZDptYi0wXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgcmVsYXRpdmUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgIHtpdGVtLmltYWdlTmFtZX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLW1ldGEgbXQtMTBcIj5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1sZyB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgdy0xLzJcIj5cbiAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgPC9oND5cbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1zbSB0cmFuc2l0aW9uLWFsbCBtdC0yIGR1cmF0aW9uLTUwMFwiPlxuICAgICAgICAgICAge2Zvcm1hdFRob3VzYW5kKGl0ZW0udG90YWwpfVxuICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmstd3JhcHBlZFwiPjwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBSZW5kZXJJdGVtIGZyb20gXCIuL1JlbmRlckl0ZW1cIjtcblxuaW1wb3J0IEJ1c2luZXNzRGV2ZWxvcG1lbnQgZnJvbSBcIi0hc3ZnLXJlYWN0LWxvYWRlciFwdWJsaWMvaW1hZ2VzL2ljb24tYnVzaW5lc3MtZGV2ZWxvcG1lbnQuc3ZnXCI7XG5pbXBvcnQgQ29udGVudFdyaXRlciBmcm9tIFwiLSFzdmctcmVhY3QtbG9hZGVyIXB1YmxpYy9pbWFnZXMvaWNvbi1jb250ZW50LXdyaXRlci5zdmdcIjtcbmltcG9ydCBQcm9kdWN0QWR2ZXJ0aXNlbWVudCBmcm9tIFwiLSFzdmctcmVhY3QtbG9hZGVyIXB1YmxpYy9pbWFnZXMvaWNvbi1wcm9kdWN0LWFkdmVydGlzZW1lbnQuc3ZnXCI7XG5pbXBvcnQgQ3VzdG9tZXJSZWxhdGlvbnNoaXAgZnJvbSBcIi0hc3ZnLXJlYWN0LWxvYWRlciFwdWJsaWMvaW1hZ2VzL2ljb24tY3VzdG9tZXItcmVsYXRpb25zaGlwLnN2Z1wiO1xuaW1wb3J0IEdhbWVEZXZlbG9wbWVudCBmcm9tIFwiLSFzdmctcmVhY3QtbG9hZGVyIXB1YmxpYy9pbWFnZXMvaWNvbi1nYW1lLWRldmVsb3BtZW50LnN2Z1wiO1xuaW1wb3J0IFRyYXZlbEd1aWRhbmNlIGZyb20gXCItIXN2Zy1yZWFjdC1sb2FkZXIhcHVibGljL2ltYWdlcy9pY29uLXRyYXZlbC1ndWlkYW5jZS5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoKSB7XG4gIGNvbnN0IGRhdGEgPSBbXG4gICAge1xuICAgICAgaW1hZ2VOYW1lOiA8QnVzaW5lc3NEZXZlbG9wbWVudCAvPixcbiAgICAgIG5hbWU6IFwiQnVzaW5lc3MgRGV2ZWxvcG1lbnRcIixcbiAgICAgIHRvdGFsOiAxMjQ5MyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGltYWdlTmFtZTogPENvbnRlbnRXcml0ZXIgLz4sXG4gICAgICBuYW1lOiBcIkNvbnRlbnQgV3JpdGVyXCIsXG4gICAgICB0b3RhbDogODM5LFxuICAgIH0sXG4gICAge1xuICAgICAgaW1hZ2VOYW1lOiA8UHJvZHVjdEFkdmVydGlzZW1lbnQgLz4sXG4gICAgICBuYW1lOiBcIlByb2R1Y3QgQWR2ZXJ0aXNlbWVudFwiLFxuICAgICAgdG90YWw6IDQ3OCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGltYWdlTmFtZTogPEN1c3RvbWVyUmVsYXRpb25zaGlwIC8+LFxuICAgICAgbmFtZTogXCJDdXN0b21lciBSZWxhdGlvbnNoaXBcIixcbiAgICAgIHRvdGFsOiA1NTMsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZU5hbWU6IDxHYW1lRGV2ZWxvcG1lbnQgLz4sXG4gICAgICBuYW1lOiBcIkdhbWUgRGV2ZWxvcG1lbnRcIixcbiAgICAgIHRvdGFsOiA3MzA5LFxuICAgIH0sXG4gICAge1xuICAgICAgaW1hZ2VOYW1lOiA8VHJhdmVsR3VpZGFuY2UgLz4sXG4gICAgICBuYW1lOiBcIlRyYXZlbCBHdWlkYW5jZVwiLFxuICAgICAgdG90YWw6IDczLFxuICAgIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWF1dG9cIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktNjAwXCI+Q2F0ZWdvcnk8L2gyPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgIEV4cGxvcmUgJiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXRlYWwtNDAwXCI+TGVhcm48L3NwYW4+XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgLW14LTQgbXQtNlwiPlxuICAgICAgICB7ZGF0YT8ubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICBkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8UmVuZGVySXRlbSBpdGVtPXtpdGVtfSBrZXk9e2luZGV4fT48L1JlbmRlckl0ZW0+O1xuICAgICAgICAgIH0pXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1jZW50ZXItcHktMTJcIj5ObyBJdGVtIEZvdW5kPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgSWNvblBsYXkgZnJvbSBcIi0hc3ZnLXJlYWN0LWxvYWRlciFwdWJsaWMvaW1hZ2VzL2ljb24tcGxheS5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVuZGVySXRlbSh7IGl0ZW0gfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMS80IHB4LTQgbWItNlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtIHJlbGF0aXZlXCI+XG4gICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaXRlbS1pbWFnZVwiPlxuICAgICAgICAgIDxJY29uUGxheT48L0ljb25QbGF5PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17aXRlbT8udGh1bWJuYWlsID8/IFwiXCJ9XG4gICAgICAgICAgICBhbHQ9e2l0ZW0/Lm5hbWUgPz8gXCJzb21lIGluZm9ybWF0aW9uXCJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9maWd1cmU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1tZXRhIG10LTJcIj5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICB7aXRlbT8ubmFtZSA/PyBcIkNvdXJzZSBuYW1lXCJ9XG4gICAgICAgICAgPC9oND5cbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICB7aXRlbT8ubGV2ZWwgPz8gXCJDb3Vyc2UgbGV2ZWxcIn1cbiAgICAgICAgICA8L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9jb3Vyc2VzL1tpZF1cIiBhcz17YC9jb3Vyc2VzLyR7aXRlbS5pZH1gfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rLXdyYXBwZWRcIj48L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCBSZW5kZXJJdGVtIGZyb20gXCIuL1JlbmRlckl0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdENvdXJzZXMoeyBkYXRhIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWF1dG9cIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktNjAwXCI+TmV3IENsYXNzZXM8L2gyPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgIFN1bW1lciA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXRlYWwtNDAwXCI+UHJvZHVjdGl2ZTwvc3Bhbj5cbiAgICAgICAgICA8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWF1dG9cIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2NvdXJzZXNcIj48YSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGhvdmVyOnVuZGVybGluZSB0ZXh0LXNtXCI+XG4gICAgICAgICAgICBWaWV3IEFsbCBDb3Vyc2VcbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciAtbXgtNCBtdC02XCI+XG4gICAgICAgIHtkYXRhPy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgIGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxSZW5kZXJJdGVtIGl0ZW09e2l0ZW19IGtleT17aW5kZXh9PjwvUmVuZGVySXRlbT47XG4gICAgICAgICAgfSlcbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWNlbnRlci1weS0xMlwiPk5vIEl0ZW0gRm91bmQ8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.middleware = middleware;
exports.NextScript = exports.Main = exports.Head = exports.Html = exports.default = void 0;
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));
var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");
var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");
var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");
exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;
var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");
var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
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
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
async function middleware({
  req,
  res
}) {}
function dedupe(bundles) {
  const files = new Set();
  const kept = [];
  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }
  return kept;
}
function getOptionalModernScriptVariant(path) {
  if (false) {}
  return path;
} /**
  * `Document` component handles the initial `document` markup and renders only on the server side.
  * Commonly used for implementing server side rendering for `css-in-js` libraries.
  */
class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhancers =  false ? undefined : [];
    const enhanceApp = App => {
      for (const enhancer of enhancers) {
        App = enhancer(App);
      }
      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };
    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)(), ...( false ? undefined : [])];
    return {
      html,
      head,
      styles
    };
  }
  static renderDocument(Document, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: {
        _documentProps: props,
        // In dev we invalidate the cache by appending a timestamp to the resource URL.
        // This is a workaround to fix https://github.com/vercel/next.js/issues/5860
        // TODO: remove this workaround when https://bugs.webkit.org/show_bug.cgi?id=187726 is fixed.
        _devOnlyInvalidateCacheQueryString: true ? '?ts=' + Date.now() : undefined
      }
    }, /*#__PURE__*/_react.default.createElement(Document, props));
  }
  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }
}
exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];
Document.bodyTagsMiddleware =  false ? undefined : () => [];
Document.htmlPropsMiddleware =  false ? undefined : () => [];
class Html extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }
  render() {
    const {
      inAmpMode,
      htmlProps
    } = this.context._documentProps;
    return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, htmlProps, this.props, {
      amp: inAmpMode ? '' : undefined,
      "data-ampdevmode": inAmpMode && true ? '' : undefined
    }));
  }
}
exports.Html = Html;
Html.contextType = _documentContext.DocumentContext;
Html.propTypes = {
  children: _propTypes.default.node.isRequired
};
class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }
  getCssLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const cssFiles = files && files.length ? files.filter(f => /\.css$/.test(f)) : [];
    const cssLinkElements = [];
    cssFiles.forEach(file => {
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: `${file}-preload`,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "style",
        crossOrigin: this.props.crossOrigin || undefined
      }), /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }
  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }
      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }
  getPreloadMainLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const preloadFiles = files && files.length ? files.filter(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when
      // the feature is enabled. This clause will filter down to the
      // modern variants only.
      return file.endsWith(getOptionalModernScriptVariant('.js'));
    }) : [];
    return !preloadFiles.length ? null : preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }));
  }
  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      assetPrefix,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const {
      page,
      buildId
    } = __NEXT_DATA__;
    let {
      head
    } = this.context._documentProps;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)
    if (true) {
      children = _react.default.Children.map(children, child => {
        var _child$props;
        const isReactHelmet = child === null || child === void 0 ? void 0 : (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props['data-react-helmet'];
        if ((child === null || child === void 0 ? void 0 : child.type) === 'title' && !isReactHelmet) {
          console.warn("Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title");
        }
        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }
    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags
    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;
      if (inAmpMode) {
        let badProp = '';
        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }
        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }
      return child;
    }); // try to parse styles from fragment for backwards compat
    const curStyles = Array.isArray(styles) ? styles : [];
    if (inAmpMode && styles &&
    // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props &&
    // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;
        return el === null || el === void 0 ? void 0 : (_el$props = el.props) === null || _el$props === void 0 ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) === null || _el$props$dangerously === void 0 ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement
      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }
    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context._documentProps.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }), this.getCssLinks(), !disableRuntimeJS && /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages/_app.js`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && page !== '/_error' && /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && this.getPreloadDynamicChunks(), !disableRuntimeJS && this.getPreloadMainLinks(), this.context._documentProps.isDevelopment && /*#__PURE__*/ // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), _react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }
}
exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
class Main extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }
  render() {
    const {
      inAmpMode,
      html
    } = this.context._documentProps;
    if (inAmpMode) return _constants.AMP_RENDER_TARGET;
    return /*#__PURE__*/_react.default.createElement("div", {
      id: "__next",
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
  }
}
exports.Main = Main;
Main.contextType = _documentContext.DocumentContext;
class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }
  getDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      let modernProps = {};
      if (false) {}
      if (!/\.js$/.test(bundle.file) || files.includes(bundle.file)) return null;
      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        async: true,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }
  getScripts() {
    const {
      assetPrefix,
      files,
      lowPriorityFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const normalScripts = files === null || files === void 0 ? void 0 : files.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = lowPriorityFiles === null || lowPriorityFiles === void 0 ? void 0 : lowPriorityFiles.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      let modernProps = {};
      if (false) {}
      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        async: true,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }
  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      polyfillFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !/\.module\.js$/.test(polyfill)).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${_devOnlyInvalidateCacheQueryString}`
    }));
  }
  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;
    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/vercel/next.js/circular-structure`);
      }
      throw err;
    }
  }
  render() {
    const {
      staticMarkup,
      assetPrefix,
      inAmpMode,
      devFiles,
      __NEXT_DATA__,
      bodyTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    if (inAmpMode) {
      if (false) {}
      const devFiles = [_constants.CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH, _constants.CLIENT_STATIC_FILES_RUNTIME_AMP, _constants.CLIENT_STATIC_FILES_RUNTIME_WEBPACK];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, staticMarkup || disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context._documentProps)
        },
        "data-ampdevmode": true
      }), devFiles ? devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })) : null, _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
    }
    const {
      page,
      buildId
    } = __NEXT_DATA__;
    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }
    const pageScript = [/*#__PURE__*/_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": page,
      key: page,
      src: assetPrefix + encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`) + _devOnlyInvalidateCacheQueryString,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && /*#__PURE__*/false];
    const appScript = [/*#__PURE__*/_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": "/_app",
      src: assetPrefix + `/_next/static/${buildId}/pages/_app.js` + _devOnlyInvalidateCacheQueryString,
      key: "_app",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && /*#__PURE__*/false];
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && devFiles ? devFiles.map(file => !file.match(/\.js\.map/) && /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, staticMarkup || disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context._documentProps)
      }
    }),  false ? /*#__PURE__*/undefined : null, !disableRuntimeJS && this.getPolyfillScripts(), !disableRuntimeJS && appScript, !disableRuntimeJS && page !== '/_error' && pageScript, disableRuntimeJS || staticMarkup ? null : this.getDynamicChunks(), disableRuntimeJS || staticMarkup ? null : this.getScripts(), _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
  }
}
exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';
function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}
function getPageFile(page, buildId) {
  const startingUrl = page === '/' ? '/index' : page;
  return buildId ? `${startingUrl}.${buildId}.js` : `${startingUrl}.js`;
}

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "./src/pages/_document.js":
/*!********************************!*\
  !*** ./src/pages/_document.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Backup\\Programming Courses\\PAII\\KelasOnline\\FRONTEND\\frontpage\\src\\pages\\_document.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1___default.a {
  static async getInitialProps(ctx) {
    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(ctx);
    return _objectSpread({}, initialProps);
  }
  render() {
    return __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Html"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Head"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }, __jsx("link", {
      rel: "shortcut icon",
      href: `${"http://localhost:3000"}/images/logo.png`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    })), __jsx("body", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Main"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }
    }), __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["NextScript"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }
    })));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ 1:
/*!*********************************************!*\
  !*** multi private-next-pages/_document.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_document.js */"./src/pages/_document.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiIiwid2VicGFjazovLy8uLi8uLi9wYWdlcy9fZG9jdW1lbnQudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2VydmVyL2h0bWxlc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3NlcnZlclwiIl0sIm5hbWVzIjpbIm1pZGRsZXdhcmUiLCJyZXEiLCJyZXMiLCJkZWR1cGUiLCJidW5kbGVzIiwiZmlsZXMiLCJTZXQiLCJrZXB0IiwiYnVuZGxlIiwiaGFzIiwiZmlsZSIsImFkZCIsInB1c2giLCJnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQiLCJwYXRoIiwicHJvY2VzcyIsIkRvY3VtZW50IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZW5oYW5jZXJzIiwiZW5oYW5jZUFwcCIsIkFwcCIsImVuaGFuY2VyIiwicHJvcHMiLCJodG1sIiwiaGVhZCIsInJlbmRlclBhZ2UiLCJzdHlsZXMiLCJyZW5kZXJEb2N1bWVudCIsIl9kb2N1bWVudFByb3BzIiwiX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyIsIkRhdGUiLCJub3ciLCJyZW5kZXIiLCJoZWFkVGFnc01pZGRsZXdhcmUiLCJib2R5VGFnc01pZGRsZXdhcmUiLCJodG1sUHJvcHNNaWRkbGV3YXJlIiwiSHRtbCIsImNvbnRleHQiLCJpbkFtcE1vZGUiLCJodG1sUHJvcHMiLCJ1bmRlZmluZWQiLCJjb250ZXh0VHlwZSIsIkRvY3VtZW50Q29tcG9uZW50Q29udGV4dCIsInByb3BUeXBlcyIsImNoaWxkcmVuIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJIZWFkIiwiZ2V0Q3NzTGlua3MiLCJhc3NldFByZWZpeCIsImNzc0ZpbGVzIiwibGVuZ3RoIiwiZmlsdGVyIiwiZiIsInRlc3QiLCJjc3NMaW5rRWxlbWVudHMiLCJmb3JFYWNoIiwibm9uY2UiLCJlbmNvZGVVUkkiLCJjcm9zc09yaWdpbiIsImdldFByZWxvYWREeW5hbWljQ2h1bmtzIiwiZHluYW1pY0ltcG9ydHMiLCJtYXAiLCJlbmRzV2l0aCIsIkJvb2xlYW4iLCJnZXRQcmVsb2FkTWFpbkxpbmtzIiwicHJlbG9hZEZpbGVzIiwiYW1wUGF0aCIsImh5YnJpZEFtcCIsImNhbm9uaWNhbEJhc2UiLCJfX05FWFRfREFUQV9fIiwiZGFuZ2Vyb3VzQXNQYXRoIiwiaGVhZFRhZ3MiLCJ1bnN0YWJsZV9ydW50aW1lSlMiLCJkaXNhYmxlUnVudGltZUpTIiwicGFnZSIsImJ1aWxkSWQiLCJSZWFjdCIsIkNoaWxkcmVuIiwiY2hpbGQiLCJpc1JlYWN0SGVsbWV0IiwidHlwZSIsImNvbnNvbGUiLCJ3YXJuIiwiaGFzQW1waHRtbFJlbCIsImhhc0Nhbm9uaWNhbFJlbCIsImJhZFByb3AiLCJuYW1lIiwicmVsIiwic3JjIiwiaW5kZXhPZiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiT2JqZWN0Iiwia2V5cyIsInByb3AiLCJjdXJTdHlsZXMiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNTdHlsZXMiLCJlbCIsIl9faHRtbCIsImlzRGV2ZWxvcG1lbnQiLCJjb3VudCIsInRvU3RyaW5nIiwic3R5bGUiLCJqb2luIiwicmVwbGFjZSIsImdldEFtcFBhdGgiLCJnZXRQYWdlRmlsZSIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsInN0cmluZyIsIk1haW4iLCJBTVBfUkVOREVSX1RBUkdFVCIsIk5leHRTY3JpcHQiLCJnZXREeW5hbWljQ2h1bmtzIiwibW9kZXJuUHJvcHMiLCJpbmNsdWRlcyIsImdldFNjcmlwdHMiLCJsb3dQcmlvcml0eUZpbGVzIiwibm9ybWFsU2NyaXB0cyIsImxvd1ByaW9yaXR5U2NyaXB0cyIsImdldFBvbHlmaWxsU2NyaXB0cyIsInBvbHlmaWxsRmlsZXMiLCJwb2x5ZmlsbCIsImdldElubGluZVNjcmlwdFNvdXJjZSIsImRvY3VtZW50UHJvcHMiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImVyciIsIm1lc3NhZ2UiLCJFcnJvciIsInN0YXRpY01hcmt1cCIsImRldkZpbGVzIiwiYm9keVRhZ3MiLCJDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfUkVBQ1RfUkVGUkVTSCIsIkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9BTVAiLCJDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfV0VCUEFDSyIsInBhZ2VTY3JpcHQiLCJhcHBTY3JpcHQiLCJtYXRjaCIsInNhZmFyaU5vbW9kdWxlRml4IiwiYXNQYXRoIiwic3RhcnRpbmdVcmwiLCJNeURvY3VtZW50IiwiaW5pdGlhbFByb3BzIiwiX29iamVjdFNwcmVhZCIsIl9fanN4IiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJocmVmIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2RvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiKTsiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZmx1c2ggZnJvbSAnc3R5bGVkLWpzeC9zZXJ2ZXInXG5pbXBvcnQge1xuICBBTVBfUkVOREVSX1RBUkdFVCxcbiAgQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX0FNUCxcbiAgQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1JFQUNUX1JFRlJFU0gsXG4gIENMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9XRUJQQUNLLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvY29uc3RhbnRzJ1xuaW1wb3J0IHsgRG9jdW1lbnRDb250ZXh0IGFzIERvY3VtZW50Q29tcG9uZW50Q29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0J1xuaW1wb3J0IHtcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wcyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgY2xlYW5BbXBQYXRoIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL3V0aWxzJ1xuaW1wb3J0IHsgaHRtbEVzY2FwZUpzb25TdHJpbmcgfSBmcm9tICcuLi9zZXJ2ZXIvaHRtbGVzY2FwZSdcblxuZXhwb3J0IHsgRG9jdW1lbnRDb250ZXh0LCBEb2N1bWVudEluaXRpYWxQcm9wcywgRG9jdW1lbnRQcm9wcyB9XG5cbmV4cG9ydCB0eXBlIE9yaWdpblByb3BzID0ge1xuICBub25jZT86IHN0cmluZ1xuICBjcm9zc09yaWdpbj86IHN0cmluZ1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWlkZGxld2FyZSh7IHJlcSwgcmVzIH06IERvY3VtZW50Q29udGV4dCkge31cblxuZnVuY3Rpb24gZGVkdXBlKGJ1bmRsZXM6IGFueVtdKTogYW55W10ge1xuICBjb25zdCBmaWxlcyA9IG5ldyBTZXQoKVxuICBjb25zdCBrZXB0ID0gW11cblxuICBmb3IgKGNvbnN0IGJ1bmRsZSBvZiBidW5kbGVzKSB7XG4gICAgaWYgKGZpbGVzLmhhcyhidW5kbGUuZmlsZSkpIGNvbnRpbnVlXG4gICAgZmlsZXMuYWRkKGJ1bmRsZS5maWxlKVxuICAgIGtlcHQucHVzaChidW5kbGUpXG4gIH1cbiAgcmV0dXJuIGtlcHRcbn1cblxuZnVuY3Rpb24gZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50KHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEKSB7XG4gICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwuanMkLywgJy5tb2R1bGUuanMnKVxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbi8qKlxuICogYERvY3VtZW50YCBjb21wb25lbnQgaGFuZGxlcyB0aGUgaW5pdGlhbCBgZG9jdW1lbnRgIG1hcmt1cCBhbmQgcmVuZGVycyBvbmx5IG9uIHRoZSBzZXJ2ZXIgc2lkZS5cbiAqIENvbW1vbmx5IHVzZWQgZm9yIGltcGxlbWVudGluZyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcgZm9yIGBjc3MtaW4tanNgIGxpYnJhcmllcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnQ8UCA9IHt9PiBleHRlbmRzIENvbXBvbmVudDxEb2N1bWVudFByb3BzICYgUD4ge1xuICBzdGF0aWMgaGVhZFRhZ3NNaWRkbGV3YXJlID0gcHJvY2Vzcy5lbnYuX19ORVhUX1BMVUdJTlNcbiAgICA/IGltcG9ydChcbiAgICAgICAgLy8gQHRzLWlnbm9yZSBsb2FkZXIgc3ludGF4XG4gICAgICAgICduZXh0LXBsdWdpbi1sb2FkZXI/bWlkZGxld2FyZT1kb2N1bWVudC1oZWFkLXRhZ3Mtc2VydmVyISdcbiAgICAgIClcbiAgICA6ICgpID0+IFtdXG4gIHN0YXRpYyBib2R5VGFnc01pZGRsZXdhcmUgPSBwcm9jZXNzLmVudi5fX05FWFRfUExVR0lOU1xuICAgID8gaW1wb3J0KFxuICAgICAgICAvLyBAdHMtaWdub3JlIGxvYWRlciBzeW50YXhcbiAgICAgICAgJ25leHQtcGx1Z2luLWxvYWRlcj9taWRkbGV3YXJlPWRvY3VtZW50LWJvZHktdGFncy1zZXJ2ZXIhJ1xuICAgICAgKVxuICAgIDogKCkgPT4gW11cbiAgc3RhdGljIGh0bWxQcm9wc01pZGRsZXdhcmUgPSBwcm9jZXNzLmVudi5fX05FWFRfUExVR0lOU1xuICAgID8gaW1wb3J0KFxuICAgICAgICAvLyBAdHMtaWdub3JlIGxvYWRlciBzeW50YXhcbiAgICAgICAgJ25leHQtcGx1Z2luLWxvYWRlcj9taWRkbGV3YXJlPWRvY3VtZW50LWh0bWwtcHJvcHMtc2VydmVyISdcbiAgICAgIClcbiAgICA6ICgpID0+IFtdXG5cbiAgLyoqXG4gICAqIGBnZXRJbml0aWFsUHJvcHNgIGhvb2sgcmV0dXJucyB0aGUgY29udGV4dCBvYmplY3Qgd2l0aCB0aGUgYWRkaXRpb24gb2YgYHJlbmRlclBhZ2VgLlxuICAgKiBgcmVuZGVyUGFnZWAgY2FsbGJhY2sgZXhlY3V0ZXMgYFJlYWN0YCByZW5kZXJpbmcgbG9naWMgc3luY2hyb25vdXNseSB0byBzdXBwb3J0IHNlcnZlci1yZW5kZXJpbmcgd3JhcHBlcnNcbiAgICovXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoXG4gICAgY3R4OiBEb2N1bWVudENvbnRleHRcbiAgKTogUHJvbWlzZTxEb2N1bWVudEluaXRpYWxQcm9wcz4ge1xuICAgIGNvbnN0IGVuaGFuY2VycyA9IHByb2Nlc3MuZW52Ll9fTkVYVF9QTFVHSU5TXG4gICAgICA/IGF3YWl0IGltcG9ydChcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIGxvYWRlciBzeW50YXhcbiAgICAgICAgICAnbmV4dC1wbHVnaW4tbG9hZGVyP21pZGRsZXdhcmU9dW5zdGFibGUtZW5oYW5jZS1hcHAtc2VydmVyISdcbiAgICAgICAgKS50aGVuKChtb2QpID0+IG1vZC5kZWZhdWx0KGN0eCkpXG4gICAgICA6IFtdXG5cbiAgICBjb25zdCBlbmhhbmNlQXBwID0gKEFwcDogYW55KSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGVuaGFuY2VyIG9mIGVuaGFuY2Vycykge1xuICAgICAgICBBcHAgPSBlbmhhbmNlcihBcHApXG4gICAgICB9XG4gICAgICByZXR1cm4gKHByb3BzOiBhbnkpID0+IDxBcHAgey4uLnByb3BzfSAvPlxuICAgIH1cblxuICAgIGNvbnN0IHsgaHRtbCwgaGVhZCB9ID0gYXdhaXQgY3R4LnJlbmRlclBhZ2UoeyBlbmhhbmNlQXBwIH0pXG4gICAgY29uc3Qgc3R5bGVzID0gW1xuICAgICAgLi4uZmx1c2goKSxcbiAgICAgIC4uLihwcm9jZXNzLmVudi5fX05FWFRfUExVR0lOU1xuICAgICAgICA/IGF3YWl0IGltcG9ydChcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgbG9hZGVyIHN5bnRheFxuICAgICAgICAgICAgJ25leHQtcGx1Z2luLWxvYWRlcj9taWRkbGV3YXJlPXVuc3RhYmxlLWdldC1zdHlsZXMtc2VydmVyISdcbiAgICAgICAgICApLnRoZW4oKG1vZCkgPT4gbW9kLmRlZmF1bHQoY3R4KSlcbiAgICAgICAgOiBbXSksXG4gICAgXVxuICAgIHJldHVybiB7IGh0bWwsIGhlYWQsIHN0eWxlcyB9XG4gIH1cblxuICBzdGF0aWMgcmVuZGVyRG9jdW1lbnQ8UD4oXG4gICAgRG9jdW1lbnQ6IG5ldyAoKSA9PiBEb2N1bWVudDxQPixcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wcyAmIFBcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgICByZXR1cm4gKFxuICAgICAgPERvY3VtZW50Q29tcG9uZW50Q29udGV4dC5Qcm92aWRlclxuICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgIF9kb2N1bWVudFByb3BzOiBwcm9wcyxcbiAgICAgICAgICAvLyBJbiBkZXYgd2UgaW52YWxpZGF0ZSB0aGUgY2FjaGUgYnkgYXBwZW5kaW5nIGEgdGltZXN0YW1wIHRvIHRoZSByZXNvdXJjZSBVUkwuXG4gICAgICAgICAgLy8gVGhpcyBpcyBhIHdvcmthcm91bmQgdG8gZml4IGh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy9pc3N1ZXMvNTg2MFxuICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSB0aGlzIHdvcmthcm91bmQgd2hlbiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTg3NzI2IGlzIGZpeGVkLlxuICAgICAgICAgIF9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmc6XG4gICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJz90cz0nICsgRGF0ZS5ub3coKSA6ICcnLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8RG9jdW1lbnQgey4uLnByb3BzfSAvPlxuICAgICAgPC9Eb2N1bWVudENvbXBvbmVudENvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8SHRtbD5cbiAgICAgICAgPEhlYWQgLz5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgPE1haW4gLz5cbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L0h0bWw+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBIdG1sIGV4dGVuZHMgQ29tcG9uZW50PFxuICBSZWFjdC5EZXRhaWxlZEhUTUxQcm9wczxcbiAgICBSZWFjdC5IdG1sSFRNTEF0dHJpYnV0ZXM8SFRNTEh0bWxFbGVtZW50PixcbiAgICBIVE1MSHRtbEVsZW1lbnRcbiAgPlxuPiB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IERvY3VtZW50Q29tcG9uZW50Q29udGV4dFxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIH1cblxuICBjb250ZXh0ITogUmVhY3QuQ29udGV4dFR5cGU8dHlwZW9mIERvY3VtZW50Q29tcG9uZW50Q29udGV4dD5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbkFtcE1vZGUsIGh0bWxQcm9wcyB9ID0gdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxodG1sXG4gICAgICAgIHsuLi5odG1sUHJvcHN9XG4gICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICBhbXA9e2luQW1wTW9kZSA/ICcnIDogdW5kZWZpbmVkfVxuICAgICAgICBkYXRhLWFtcGRldm1vZGU9e1xuICAgICAgICAgIGluQW1wTW9kZSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJycgOiB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEhlYWQgZXh0ZW5kcyBDb21wb25lbnQ8XG4gIE9yaWdpblByb3BzICZcbiAgICBSZWFjdC5EZXRhaWxlZEhUTUxQcm9wczxcbiAgICAgIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxIZWFkRWxlbWVudD4sXG4gICAgICBIVE1MSGVhZEVsZW1lbnRcbiAgICA+XG4+IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gRG9jdW1lbnRDb21wb25lbnRDb250ZXh0XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBub25jZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjcm9zc09yaWdpbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgfVxuXG4gIGNvbnRleHQhOiBSZWFjdC5Db250ZXh0VHlwZTx0eXBlb2YgRG9jdW1lbnRDb21wb25lbnRDb250ZXh0PlxuXG4gIGdldENzc0xpbmtzKCk6IEpTWC5FbGVtZW50W10gfCBudWxsIHtcbiAgICBjb25zdCB7IGFzc2V0UHJlZml4LCBmaWxlcyB9ID0gdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgY29uc3QgeyBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nIH0gPSB0aGlzLmNvbnRleHRcbiAgICBjb25zdCBjc3NGaWxlcyA9XG4gICAgICBmaWxlcyAmJiBmaWxlcy5sZW5ndGggPyBmaWxlcy5maWx0ZXIoKGYpID0+IC9cXC5jc3MkLy50ZXN0KGYpKSA6IFtdXG5cbiAgICBjb25zdCBjc3NMaW5rRWxlbWVudHM6IEpTWC5FbGVtZW50W10gPSBbXVxuICAgIGNzc0ZpbGVzLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgIGNzc0xpbmtFbGVtZW50cy5wdXNoKFxuICAgICAgICA8bGlua1xuICAgICAgICAgIGtleT17YCR7ZmlsZX0tcHJlbG9hZGB9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgYXM9XCJzdHlsZVwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgLz4sXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICApfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gfVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSlcblxuICAgIHJldHVybiBjc3NMaW5rRWxlbWVudHMubGVuZ3RoID09PSAwID8gbnVsbCA6IGNzc0xpbmtFbGVtZW50c1xuICB9XG5cbiAgZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKSB7XG4gICAgY29uc3QgeyBkeW5hbWljSW1wb3J0cywgYXNzZXRQcmVmaXggfSA9IHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgIGNvbnN0IHsgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyB9ID0gdGhpcy5jb250ZXh0XG5cbiAgICByZXR1cm4gKFxuICAgICAgZGVkdXBlKGR5bmFtaWNJbXBvcnRzKVxuICAgICAgICAubWFwKChidW5kbGU6IGFueSkgPT4ge1xuICAgICAgICAgIC8vIGBkeW5hbWljSW1wb3J0c2Agd2lsbCBjb250YWluIGJvdGggYC5qc2AgYW5kIGAubW9kdWxlLmpzYCB3aGVuIHRoZVxuICAgICAgICAgIC8vIGZlYXR1cmUgaXMgZW5hYmxlZC4gVGhpcyBjbGF1c2Ugd2lsbCBmaWx0ZXIgZG93biB0byB0aGUgbW9kZXJuXG4gICAgICAgICAgLy8gdmFyaWFudHMgb25seS5cbiAgICAgICAgICBpZiAoIWJ1bmRsZS5maWxlLmVuZHNXaXRoKGdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudCgnLmpzJykpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgICAga2V5PXtidW5kbGUuZmlsZX1cbiAgICAgICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICAgIGJ1bmRsZS5maWxlXG4gICAgICAgICAgICAgICl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgICAgLy8gRmlsdGVyIG91dCBudWxsZWQgc2NyaXB0c1xuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgKVxuICB9XG5cbiAgZ2V0UHJlbG9hZE1haW5MaW5rcygpOiBKU1guRWxlbWVudFtdIHwgbnVsbCB7XG4gICAgY29uc3QgeyBhc3NldFByZWZpeCwgZmlsZXMgfSA9IHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgIGNvbnN0IHsgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyB9ID0gdGhpcy5jb250ZXh0XG5cbiAgICBjb25zdCBwcmVsb2FkRmlsZXMgPVxuICAgICAgZmlsZXMgJiYgZmlsZXMubGVuZ3RoXG4gICAgICAgID8gZmlsZXMuZmlsdGVyKChmaWxlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIC8vIGBkeW5hbWljSW1wb3J0c2Agd2lsbCBjb250YWluIGJvdGggYC5qc2AgYW5kIGAubW9kdWxlLmpzYCB3aGVuXG4gICAgICAgICAgICAvLyB0aGUgZmVhdHVyZSBpcyBlbmFibGVkLiBUaGlzIGNsYXVzZSB3aWxsIGZpbHRlciBkb3duIHRvIHRoZVxuICAgICAgICAgICAgLy8gbW9kZXJuIHZhcmlhbnRzIG9ubHkuXG4gICAgICAgICAgICByZXR1cm4gZmlsZS5lbmRzV2l0aChnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQoJy5qcycpKVxuICAgICAgICAgIH0pXG4gICAgICAgIDogW11cblxuICAgIHJldHVybiAhcHJlbG9hZEZpbGVzLmxlbmd0aFxuICAgICAgPyBudWxsXG4gICAgICA6IHByZWxvYWRGaWxlcy5tYXAoKGZpbGU6IHN0cmluZykgPT4gKFxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICBmaWxlXG4gICAgICAgICAgICApfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gfVxuICAgICAgICAgICAgYXM9XCJzY3JpcHRcIlxuICAgICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICAvPlxuICAgICAgICApKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHN0eWxlcyxcbiAgICAgIGFtcFBhdGgsXG4gICAgICBpbkFtcE1vZGUsXG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGh5YnJpZEFtcCxcbiAgICAgIGNhbm9uaWNhbEJhc2UsXG4gICAgICBfX05FWFRfREFUQV9fLFxuICAgICAgZGFuZ2Vyb3VzQXNQYXRoLFxuICAgICAgaGVhZFRhZ3MsXG4gICAgICB1bnN0YWJsZV9ydW50aW1lSlMsXG4gICAgfSA9IHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgIGNvbnN0IGRpc2FibGVSdW50aW1lSlMgPSB1bnN0YWJsZV9ydW50aW1lSlMgPT09IGZhbHNlXG4gICAgY29uc3QgeyBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nIH0gPSB0aGlzLmNvbnRleHRcbiAgICBjb25zdCB7IHBhZ2UsIGJ1aWxkSWQgfSA9IF9fTkVYVF9EQVRBX19cblxuICAgIGxldCB7IGhlYWQgfSA9IHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAvLyBzaG93IGEgd2FybmluZyBpZiBIZWFkIGNvbnRhaW5zIDx0aXRsZT4gKG9ubHkgaW4gZGV2ZWxvcG1lbnQpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQ6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBpc1JlYWN0SGVsbWV0ID0gY2hpbGQ/LnByb3BzPy5bJ2RhdGEtcmVhY3QtaGVsbWV0J11cbiAgICAgICAgaWYgKGNoaWxkPy50eXBlID09PSAndGl0bGUnICYmICFpc1JlYWN0SGVsbWV0KSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgXCJXYXJuaW5nOiA8dGl0bGU+IHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vZXJyLnNoL25leHQuanMvbm8tZG9jdW1lbnQtdGl0bGVcIlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hpbGRcbiAgICAgIH0pXG4gICAgICBpZiAodGhpcy5wcm9wcy5jcm9zc09yaWdpbilcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdXYXJuaW5nOiBgSGVhZGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9kb2MtY3Jvc3NvcmlnaW4tZGVwcmVjYXRlZCdcbiAgICAgICAgKVxuICAgIH1cblxuICAgIGxldCBoYXNBbXBodG1sUmVsID0gZmFsc2VcbiAgICBsZXQgaGFzQ2Fub25pY2FsUmVsID0gZmFsc2VcblxuICAgIC8vIHNob3cgd2FybmluZyBhbmQgcmVtb3ZlIGNvbmZsaWN0aW5nIGFtcCBoZWFkIHRhZ3NcbiAgICBoZWFkID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGhlYWQgfHwgW10sIChjaGlsZCkgPT4ge1xuICAgICAgaWYgKCFjaGlsZCkgcmV0dXJuIGNoaWxkXG4gICAgICBjb25zdCB7IHR5cGUsIHByb3BzIH0gPSBjaGlsZFxuXG4gICAgICBpZiAoaW5BbXBNb2RlKSB7XG4gICAgICAgIGxldCBiYWRQcm9wOiBzdHJpbmcgPSAnJ1xuXG4gICAgICAgIGlmICh0eXBlID09PSAnbWV0YScgJiYgcHJvcHMubmFtZSA9PT0gJ3ZpZXdwb3J0Jykge1xuICAgICAgICAgIGJhZFByb3AgPSAnbmFtZT1cInZpZXdwb3J0XCInXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2xpbmsnICYmIHByb3BzLnJlbCA9PT0gJ2Nhbm9uaWNhbCcpIHtcbiAgICAgICAgICBoYXNDYW5vbmljYWxSZWwgPSB0cnVlXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3NjcmlwdCcpIHtcbiAgICAgICAgICAvLyBvbmx5IGJsb2NrIGlmXG4gICAgICAgICAgLy8gMS4gaXQgaGFzIGEgc3JjIGFuZCBpc24ndCBwb2ludGluZyB0byBhbXBwcm9qZWN0J3MgQ0ROXG4gICAgICAgICAgLy8gMi4gaXQgaXMgdXNpbmcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgd2l0aG91dCBhIHR5cGUgb3JcbiAgICAgICAgICAvLyBhIHR5cGUgb2YgdGV4dC9qYXZhc2NyaXB0XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgKHByb3BzLnNyYyAmJiBwcm9wcy5zcmMuaW5kZXhPZignYW1wcHJvamVjdCcpIDwgLTEpIHx8XG4gICAgICAgICAgICAocHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgJiZcbiAgICAgICAgICAgICAgKCFwcm9wcy50eXBlIHx8IHByb3BzLnR5cGUgPT09ICd0ZXh0L2phdmFzY3JpcHQnKSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGJhZFByb3AgPSAnPHNjcmlwdCdcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgICAgICAgICAgIGJhZFByb3AgKz0gYCAke3Byb3B9PVwiJHtwcm9wc1twcm9wXX1cImBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBiYWRQcm9wICs9ICcvPidcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmFkUHJvcCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBGb3VuZCBjb25mbGljdGluZyBhbXAgdGFnIFwiJHtjaGlsZC50eXBlfVwiIHdpdGggY29uZmxpY3RpbmcgcHJvcCAke2JhZFByb3B9IGluICR7X19ORVhUX0RBVEFfXy5wYWdlfS4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9jb25mbGljdGluZy1hbXAtdGFnYFxuICAgICAgICAgIClcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBub24tYW1wIG1vZGVcbiAgICAgICAgaWYgKHR5cGUgPT09ICdsaW5rJyAmJiBwcm9wcy5yZWwgPT09ICdhbXBodG1sJykge1xuICAgICAgICAgIGhhc0FtcGh0bWxSZWwgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGlsZFxuICAgIH0pXG5cbiAgICAvLyB0cnkgdG8gcGFyc2Ugc3R5bGVzIGZyb20gZnJhZ21lbnQgZm9yIGJhY2t3YXJkcyBjb21wYXRcbiAgICBjb25zdCBjdXJTdHlsZXM6IFJlYWN0LlJlYWN0RWxlbWVudFtdID0gQXJyYXkuaXNBcnJheShzdHlsZXMpXG4gICAgICA/IChzdHlsZXMgYXMgUmVhY3QuUmVhY3RFbGVtZW50W10pXG4gICAgICA6IFtdXG4gICAgaWYgKFxuICAgICAgaW5BbXBNb2RlICYmXG4gICAgICBzdHlsZXMgJiZcbiAgICAgIC8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuICAgICAgc3R5bGVzLnByb3BzICYmXG4gICAgICAvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbiAgICAgIEFycmF5LmlzQXJyYXkoc3R5bGVzLnByb3BzLmNoaWxkcmVuKVxuICAgICkge1xuICAgICAgY29uc3QgaGFzU3R5bGVzID0gKGVsOiBSZWFjdC5SZWFjdEVsZW1lbnQpID0+XG4gICAgICAgIGVsPy5wcm9wcz8uZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw/Ll9faHRtbFxuICAgICAgLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG4gICAgICBzdHlsZXMucHJvcHMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQ6IFJlYWN0LlJlYWN0RWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgICBjaGlsZC5mb3JFYWNoKChlbCkgPT4gaGFzU3R5bGVzKGVsKSAmJiBjdXJTdHlsZXMucHVzaChlbCkpXG4gICAgICAgIH0gZWxzZSBpZiAoaGFzU3R5bGVzKGNoaWxkKSkge1xuICAgICAgICAgIGN1clN0eWxlcy5wdXNoKGNoaWxkKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8aGVhZCB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgIHt0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHMuaXNEZXZlbG9wbWVudCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgICBkYXRhLW5leHQtaGlkZS1mb3VjXG4gICAgICAgICAgICAgIGRhdGEtYW1wZGV2bW9kZT17aW5BbXBNb2RlID8gJ3RydWUnIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7ZGlzcGxheTpub25lfWAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPG5vc2NyaXB0XG4gICAgICAgICAgICAgIGRhdGEtbmV4dC1oaWRlLWZvdWNcbiAgICAgICAgICAgICAgZGF0YS1hbXBkZXZtb2RlPXtpbkFtcE1vZGUgPyAndHJ1ZScgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5e2Rpc3BsYXk6YmxvY2t9YCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICB7aGVhZH1cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwibmV4dC1oZWFkLWNvdW50XCJcbiAgICAgICAgICBjb250ZW50PXtSZWFjdC5DaGlsZHJlbi5jb3VudChoZWFkIHx8IFtdKS50b1N0cmluZygpfVxuICAgICAgICAvPlxuICAgICAgICB7aW5BbXBNb2RlICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxtaW5pbXVtLXNjYWxlPTEsaW5pdGlhbC1zY2FsZT0xXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7IWhhc0Nhbm9uaWNhbFJlbCAmJiAoXG4gICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgcmVsPVwiY2Fub25pY2FsXCJcbiAgICAgICAgICAgICAgICBocmVmPXtjYW5vbmljYWxCYXNlICsgY2xlYW5BbXBQYXRoKGRhbmdlcm91c0FzUGF0aCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgey8qIGh0dHBzOi8vd3d3LmFtcHByb2plY3Qub3JnL2RvY3MvZnVuZGFtZW50YWxzL29wdGltaXplX2FtcCNvcHRpbWl6ZS10aGUtYW1wLXJ1bnRpbWUtbG9hZGluZyAqL31cbiAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC5qc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgey8qIEFkZCBjdXN0b20gc3R5bGVzIGJlZm9yZSBBTVAgc3R5bGVzIHRvIHByZXZlbnQgYWNjaWRlbnRhbCBvdmVycmlkZXMgKi99XG4gICAgICAgICAgICB7c3R5bGVzICYmIChcbiAgICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgICAgYW1wLWN1c3RvbT1cIlwiXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgIF9faHRtbDogY3VyU3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKHN0eWxlKSA9PiBzdHlsZS5wcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWwpXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKCcnKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvXFwqIyBzb3VyY2VNYXBwaW5nVVJMPS4qXFwqXFwvL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvXFwqQCBzb3VyY2VVUkw9Lio/XFwqXFwvL2csICcnKSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgICBhbXAtYm9pbGVycGxhdGU9XCJcIlxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7LXdlYmtpdC1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDstbW96LWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoOy1tcy1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDthbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aH1ALXdlYmtpdC1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tb3ota2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtbXMta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtby1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QGtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1gLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxub3NjcmlwdD5cbiAgICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgICAgYW1wLWJvaWxlcnBsYXRlPVwiXCJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXstd2Via2l0LWFuaW1hdGlvbjpub25lOy1tb3otYW5pbWF0aW9uOm5vbmU7LW1zLWFuaW1hdGlvbjpub25lO2FuaW1hdGlvbjpub25lfWAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbm9zY3JpcHQ+XG4gICAgICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCIgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgeyFpbkFtcE1vZGUgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7IWhhc0FtcGh0bWxSZWwgJiYgaHlicmlkQW1wICYmIChcbiAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICByZWw9XCJhbXBodG1sXCJcbiAgICAgICAgICAgICAgICBocmVmPXtjYW5vbmljYWxCYXNlICsgZ2V0QW1wUGF0aChhbXBQYXRoLCBkYW5nZXJvdXNBc1BhdGgpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHt0aGlzLmdldENzc0xpbmtzKCl9XG4gICAgICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgKFxuICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50KFxuICAgICAgICAgICAgICAgICAgICBlbmNvZGVVUkkoYC9fbmV4dC9zdGF0aWMvJHtidWlsZElkfS9wYWdlcy9fYXBwLmpzYClcbiAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgcGFnZSAhPT0gJy9fZXJyb3InICYmIChcbiAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgICAgICBocmVmPXtcbiAgICAgICAgICAgICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAgICAgICAgIGdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudChcbiAgICAgICAgICAgICAgICAgICAgZW5jb2RlVVJJKFxuICAgICAgICAgICAgICAgICAgICAgIGAvX25leHQvc3RhdGljLyR7YnVpbGRJZH0vcGFnZXMke2dldFBhZ2VGaWxlKHBhZ2UpfWBcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFByZWxvYWREeW5hbWljQ2h1bmtzKCl9XG4gICAgICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXRQcmVsb2FkTWFpbkxpbmtzKCl9XG4gICAgICAgICAgICB7dGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzLmlzRGV2ZWxvcG1lbnQgJiYgKFxuICAgICAgICAgICAgICAvLyB0aGlzIGVsZW1lbnQgaXMgdXNlZCB0byBtb3VudCBkZXZlbG9wbWVudCBzdHlsZXMgc28gdGhlXG4gICAgICAgICAgICAgIC8vIG9yZGVyaW5nIG1hdGNoZXMgcHJvZHVjdGlvblxuICAgICAgICAgICAgICAvLyAoYnkgZGVmYXVsdCwgc3R5bGUtbG9hZGVyIGluamVjdHMgYXQgdGhlIGJvdHRvbSBvZiA8aGVhZCAvPilcbiAgICAgICAgICAgICAgPG5vc2NyaXB0IGlkPVwiX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fXCIgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7c3R5bGVzIHx8IG51bGx9XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCB7fSwgLi4uKGhlYWRUYWdzIHx8IFtdKSl9XG4gICAgICA8L2hlYWQ+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gRG9jdW1lbnRDb21wb25lbnRDb250ZXh0XG5cbiAgY29udGV4dCE6IFJlYWN0LkNvbnRleHRUeXBlPHR5cGVvZiBEb2N1bWVudENvbXBvbmVudENvbnRleHQ+XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaW5BbXBNb2RlLCBodG1sIH0gPSB0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHNcbiAgICBpZiAoaW5BbXBNb2RlKSByZXR1cm4gQU1QX1JFTkRFUl9UQVJHRVRcbiAgICByZXR1cm4gPGRpdiBpZD1cIl9fbmV4dFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaHRtbCB9fSAvPlxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOZXh0U2NyaXB0IGV4dGVuZHMgQ29tcG9uZW50PE9yaWdpblByb3BzPiB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IERvY3VtZW50Q29tcG9uZW50Q29udGV4dFxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbm9uY2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY3Jvc3NPcmlnaW46IFByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBjb250ZXh0ITogUmVhY3QuQ29udGV4dFR5cGU8dHlwZW9mIERvY3VtZW50Q29tcG9uZW50Q29udGV4dD5cblxuICAvLyBTb3VyY2U6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3NhbXRob3IvNjRiMTE0ZTRhNGY1Mzk5MTVhOTViOTFmZmQzNDBhY2NcbiAgc3RhdGljIHNhZmFyaU5vbW9kdWxlRml4ID1cbiAgICAnIWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQsdD1lLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7aWYoIShcIm5vTW9kdWxlXCJpbiB0KSYmXCJvbmJlZm9yZWxvYWRcImluIHQpe3ZhciBuPSExO2UuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZWxvYWRcIixmdW5jdGlvbihlKXtpZihlLnRhcmdldD09PXQpbj0hMDtlbHNlIGlmKCFlLnRhcmdldC5oYXNBdHRyaWJ1dGUoXCJub21vZHVsZVwiKXx8IW4pcmV0dXJuO2UucHJldmVudERlZmF1bHQoKX0sITApLHQudHlwZT1cIm1vZHVsZVwiLHQuc3JjPVwiLlwiLGUuaGVhZC5hcHBlbmRDaGlsZCh0KSx0LnJlbW92ZSgpfX0oKTsnXG5cbiAgZ2V0RHluYW1pY0NodW5rcygpIHtcbiAgICBjb25zdCB7IGR5bmFtaWNJbXBvcnRzLCBhc3NldFByZWZpeCwgZmlsZXMgfSA9IHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgIGNvbnN0IHsgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyB9ID0gdGhpcy5jb250ZXh0XG5cbiAgICByZXR1cm4gZGVkdXBlKGR5bmFtaWNJbXBvcnRzKS5tYXAoKGJ1bmRsZTogYW55KSA9PiB7XG4gICAgICBsZXQgbW9kZXJuUHJvcHMgPSB7fVxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQpIHtcbiAgICAgICAgbW9kZXJuUHJvcHMgPSAvXFwubW9kdWxlXFwuanMkLy50ZXN0KGJ1bmRsZS5maWxlKVxuICAgICAgICAgID8geyB0eXBlOiAnbW9kdWxlJyB9XG4gICAgICAgICAgOiB7IG5vTW9kdWxlOiB0cnVlIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCEvXFwuanMkLy50ZXN0KGJ1bmRsZS5maWxlKSB8fCBmaWxlcy5pbmNsdWRlcyhidW5kbGUuZmlsZSkpIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBhc3luY1xuICAgICAgICAgIGtleT17YnVuZGxlLmZpbGV9XG4gICAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICBidW5kbGUuZmlsZVxuICAgICAgICAgICl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICB7Li4ubW9kZXJuUHJvcHN9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGdldFNjcmlwdHMoKSB7XG4gICAgY29uc3QgeyBhc3NldFByZWZpeCwgZmlsZXMsIGxvd1ByaW9yaXR5RmlsZXMgfSA9IHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgIGNvbnN0IHsgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyB9ID0gdGhpcy5jb250ZXh0XG5cbiAgICBjb25zdCBub3JtYWxTY3JpcHRzID0gZmlsZXM/LmZpbHRlcigoZmlsZSkgPT4gZmlsZS5lbmRzV2l0aCgnLmpzJykpXG4gICAgY29uc3QgbG93UHJpb3JpdHlTY3JpcHRzID0gbG93UHJpb3JpdHlGaWxlcz8uZmlsdGVyKChmaWxlKSA9PlxuICAgICAgZmlsZS5lbmRzV2l0aCgnLmpzJylcbiAgICApXG5cbiAgICByZXR1cm4gWy4uLm5vcm1hbFNjcmlwdHMsIC4uLmxvd1ByaW9yaXR5U2NyaXB0c10ubWFwKChmaWxlKSA9PiB7XG4gICAgICBsZXQgbW9kZXJuUHJvcHMgPSB7fVxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQpIHtcbiAgICAgICAgbW9kZXJuUHJvcHMgPSBmaWxlLmVuZHNXaXRoKCcubW9kdWxlLmpzJylcbiAgICAgICAgICA/IHsgdHlwZTogJ21vZHVsZScgfVxuICAgICAgICAgIDogeyBub01vZHVsZTogdHJ1ZSB9XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgYXN5bmNcbiAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAgIHsuLi5tb2Rlcm5Qcm9wc31cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgZ2V0UG9seWZpbGxTY3JpcHRzKCkge1xuICAgIC8vIHBvbHlmaWxscy5qcyBoYXMgdG8gYmUgcmVuZGVyZWQgYXMgbm9tb2R1bGUgd2l0aG91dCBhc3luY1xuICAgIC8vIEl0IGFsc28gaGFzIHRvIGJlIHRoZSBmaXJzdCBzY3JpcHQgdG8gbG9hZFxuICAgIGNvbnN0IHsgYXNzZXRQcmVmaXgsIHBvbHlmaWxsRmlsZXMgfSA9IHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgIGNvbnN0IHsgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyB9ID0gdGhpcy5jb250ZXh0XG5cbiAgICByZXR1cm4gcG9seWZpbGxGaWxlc1xuICAgICAgLmZpbHRlcihcbiAgICAgICAgKHBvbHlmaWxsKSA9PlxuICAgICAgICAgIHBvbHlmaWxsLmVuZHNXaXRoKCcuanMnKSAmJiAhL1xcLm1vZHVsZVxcLmpzJC8udGVzdChwb2x5ZmlsbClcbiAgICAgIClcbiAgICAgIC5tYXAoKHBvbHlmaWxsKSA9PiAoXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBrZXk9e3BvbHlmaWxsfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgbm9Nb2R1bGU9e3RydWV9XG4gICAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtwb2x5ZmlsbH0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgLz5cbiAgICAgICkpXG4gIH1cblxuICBzdGF0aWMgZ2V0SW5saW5lU2NyaXB0U291cmNlKGRvY3VtZW50UHJvcHM6IERvY3VtZW50UHJvcHMpOiBzdHJpbmcge1xuICAgIGNvbnN0IHsgX19ORVhUX0RBVEFfXyB9ID0gZG9jdW1lbnRQcm9wc1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoX19ORVhUX0RBVEFfXylcbiAgICAgIHJldHVybiBodG1sRXNjYXBlSnNvblN0cmluZyhkYXRhKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5tZXNzYWdlLmluZGV4T2YoJ2NpcmN1bGFyIHN0cnVjdHVyZScpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgQ2lyY3VsYXIgc3RydWN0dXJlIGluIFwiZ2V0SW5pdGlhbFByb3BzXCIgcmVzdWx0IG9mIHBhZ2UgXCIke19fTkVYVF9EQVRBX18ucGFnZX1cIi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvY2lyY3VsYXItc3RydWN0dXJlYFxuICAgICAgICApXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc3RhdGljTWFya3VwLFxuICAgICAgYXNzZXRQcmVmaXgsXG4gICAgICBpbkFtcE1vZGUsXG4gICAgICBkZXZGaWxlcyxcbiAgICAgIF9fTkVYVF9EQVRBX18sXG4gICAgICBib2R5VGFncyxcbiAgICAgIHVuc3RhYmxlX3J1bnRpbWVKUyxcbiAgICB9ID0gdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgY29uc3QgZGlzYWJsZVJ1bnRpbWVKUyA9IHVuc3RhYmxlX3J1bnRpbWVKUyA9PT0gZmFsc2VcblxuICAgIGNvbnN0IHsgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyB9ID0gdGhpcy5jb250ZXh0XG5cbiAgICBpZiAoaW5BbXBNb2RlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXZGaWxlcyA9IFtcbiAgICAgICAgQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1JFQUNUX1JFRlJFU0gsXG4gICAgICAgIENMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9BTVAsXG4gICAgICAgIENMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9XRUJQQUNLLFxuICAgICAgXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIHtzdGF0aWNNYXJrdXAgfHwgZGlzYWJsZVJ1bnRpbWVKUyA/IG51bGwgOiAoXG4gICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgIGlkPVwiX19ORVhUX0RBVEFfX1wiXG4gICAgICAgICAgICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBOZXh0U2NyaXB0LmdldElubGluZVNjcmlwdFNvdXJjZShcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGRhdGEtYW1wZGV2bW9kZVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtkZXZGaWxlc1xuICAgICAgICAgICAgPyBkZXZGaWxlcy5tYXAoKGZpbGUpID0+IChcbiAgICAgICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2ZpbGV9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGVcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCB7fSwgLi4uKGJvZHlUYWdzIHx8IFtdKSl9XG4gICAgICAgIDwvPlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IHsgcGFnZSwgYnVpbGRJZCB9ID0gX19ORVhUX0RBVEFfX1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNyb3NzT3JpZ2luKVxuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ1dhcm5pbmc6IGBOZXh0U2NyaXB0YCBhdHRyaWJ1dGUgYGNyb3NzT3JpZ2luYCBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC9uZXh0LmpzL2RvYy1jcm9zc29yaWdpbi1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgcGFnZVNjcmlwdCA9IFtcbiAgICAgIDxzY3JpcHRcbiAgICAgICAgYXN5bmNcbiAgICAgICAgZGF0YS1uZXh0LXBhZ2U9e3BhZ2V9XG4gICAgICAgIGtleT17cGFnZX1cbiAgICAgICAgc3JjPXtcbiAgICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgZW5jb2RlVVJJKGAvX25leHQvc3RhdGljLyR7YnVpbGRJZH0vcGFnZXMke2dldFBhZ2VGaWxlKHBhZ2UpfWApICtcbiAgICAgICAgICBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nXG4gICAgICAgIH1cbiAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgIHsuLi4ocHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCA/IHsgbm9Nb2R1bGU6IHRydWUgfSA6IHt9KX1cbiAgICAgIC8+LFxuICAgICAgcHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCAmJiAoXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBhc3luY1xuICAgICAgICAgIGRhdGEtbmV4dC1wYWdlPXtwYWdlfVxuICAgICAgICAgIGtleT17YCR7cGFnZX0tbW9kZXJuYH1cbiAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICAgZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50KFxuICAgICAgICAgICAgICBlbmNvZGVVUkkoYC9fbmV4dC9zdGF0aWMvJHtidWlsZElkfS9wYWdlcyR7Z2V0UGFnZUZpbGUocGFnZSl9YClcbiAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ1xuICAgICAgICAgIH1cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAgIHR5cGU9XCJtb2R1bGVcIlxuICAgICAgICAvPlxuICAgICAgKSxcbiAgICBdXG5cbiAgICBjb25zdCBhcHBTY3JpcHQgPSBbXG4gICAgICA8c2NyaXB0XG4gICAgICAgIGFzeW5jXG4gICAgICAgIGRhdGEtbmV4dC1wYWdlPVwiL19hcHBcIlxuICAgICAgICBzcmM9e1xuICAgICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICBgL19uZXh0L3N0YXRpYy8ke2J1aWxkSWR9L3BhZ2VzL19hcHAuanNgICtcbiAgICAgICAgICBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nXG4gICAgICAgIH1cbiAgICAgICAga2V5PVwiX2FwcFwiXG4gICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICB7Li4uKHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQgPyB7IG5vTW9kdWxlOiB0cnVlIH0gOiB7fSl9XG4gICAgICAvPixcbiAgICAgIHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQgJiYgKFxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgYXN5bmNcbiAgICAgICAgICBkYXRhLW5leHQtcGFnZT1cIi9fYXBwXCJcbiAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICAgYC9fbmV4dC9zdGF0aWMvJHtidWlsZElkfS9wYWdlcy9fYXBwLm1vZHVsZS5qc2AgK1xuICAgICAgICAgICAgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ1xuICAgICAgICAgIH1cbiAgICAgICAgICBrZXk9XCJfYXBwLW1vZGVyblwiXG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICB0eXBlPVwibW9kdWxlXCJcbiAgICAgICAgLz5cbiAgICAgICksXG4gICAgXVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiBkZXZGaWxlc1xuICAgICAgICAgID8gZGV2RmlsZXMubWFwKFxuICAgICAgICAgICAgICAoZmlsZTogc3RyaW5nKSA9PlxuICAgICAgICAgICAgICAgICFmaWxlLm1hdGNoKC9cXC5qc1xcLm1hcC8pICYmIChcbiAgICAgICAgICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlXG4gICAgICAgICAgICAgICAgICAgICl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBudWxsfVxuICAgICAgICB7c3RhdGljTWFya3VwIHx8IGRpc2FibGVSdW50aW1lSlMgPyBudWxsIDogKFxuICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgIGlkPVwiX19ORVhUX0RBVEFfX1wiXG4gICAgICAgICAgICB0eXBlPVwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICBfX2h0bWw6IE5leHRTY3JpcHQuZ2V0SW5saW5lU2NyaXB0U291cmNlKFxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7cHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCAmJiAhZGlzYWJsZVJ1bnRpbWVKUyA/IChcbiAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgICBub01vZHVsZT17dHJ1ZX1cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgIF9faHRtbDogTmV4dFNjcmlwdC5zYWZhcmlOb21vZHVsZUZpeCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFBvbHlmaWxsU2NyaXB0cygpfVxuICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgYXBwU2NyaXB0fVxuICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgcGFnZSAhPT0gJy9fZXJyb3InICYmIHBhZ2VTY3JpcHR9XG4gICAgICAgIHtkaXNhYmxlUnVudGltZUpTIHx8IHN0YXRpY01hcmt1cCA/IG51bGwgOiB0aGlzLmdldER5bmFtaWNDaHVua3MoKX1cbiAgICAgICAge2Rpc2FibGVSdW50aW1lSlMgfHwgc3RhdGljTWFya3VwID8gbnVsbCA6IHRoaXMuZ2V0U2NyaXB0cygpfVxuICAgICAgICB7UmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwge30sIC4uLihib2R5VGFncyB8fCBbXSkpfVxuICAgICAgPC8+XG4gICAgKVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEFtcFBhdGgoYW1wUGF0aDogc3RyaW5nLCBhc1BhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBhbXBQYXRoIHx8IGAke2FzUGF0aH0ke2FzUGF0aC5pbmNsdWRlcygnPycpID8gJyYnIDogJz8nfWFtcD0xYFxufVxuXG5mdW5jdGlvbiBnZXRQYWdlRmlsZShwYWdlOiBzdHJpbmcsIGJ1aWxkSWQ/OiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBzdGFydGluZ1VybCA9IHBhZ2UgPT09ICcvJyA/ICcvaW5kZXgnIDogcGFnZVxuICByZXR1cm4gYnVpbGRJZCA/IGAke3N0YXJ0aW5nVXJsfS4ke2J1aWxkSWR9LmpzYCA6IGAke3N0YXJ0aW5nVXJsfS5qc2Bcbn1cbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaHRtbEVzY2FwZUpzb25TdHJpbmc9aHRtbEVzY2FwZUpzb25TdHJpbmc7Ly8gVGhpcyB1dGlsaXR5IGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2h0bWxlc2NhcGVcbi8vIExpY2Vuc2U6IGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2h0bWxlc2NhcGUvYmxvYi8wNTI3Y2E3MTU2YTUyNGQyNTYxMDFiYjMxMGE5Zjk3MGY2MzA3OGFkL0xJQ0VOU0VcbmNvbnN0IEVTQ0FQRV9MT09LVVA9eycmJzonXFxcXHUwMDI2JywnPic6J1xcXFx1MDAzZScsJzwnOidcXFxcdTAwM2MnLCdcXHUyMDI4JzonXFxcXHUyMDI4JywnXFx1MjAyOSc6J1xcXFx1MjAyOSd9O2NvbnN0IEVTQ0FQRV9SRUdFWD0vWyY+PFxcdTIwMjhcXHUyMDI5XS9nO2Z1bmN0aW9uIGh0bWxFc2NhcGVKc29uU3RyaW5nKHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKEVTQ0FQRV9SRUdFWCxtYXRjaD0+RVNDQVBFX0xPT0tVUFttYXRjaF0pO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0bWxlc2NhcGUuanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2RvY3VtZW50JylcbiIsImltcG9ydCBEb2N1bWVudCwgeyBIdG1sLCBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSBcIm5leHQvZG9jdW1lbnRcIjtcblxuY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcbiAgICBjb25zdCBpbml0aWFsUHJvcHMgPSBhd2FpdCBEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICByZXR1cm4geyAuLi5pbml0aWFsUHJvcHMgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEh0bWw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICByZWw9XCJzaG9ydGN1dCBpY29uXCJcbiAgICAgICAgICAgIGhyZWY9e2Ake3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfS9pbWFnZXMvbG9nby5wbmdgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgPE1haW4gLz5cbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L0h0bWw+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeURvY3VtZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3NlcnZlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9
!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return D(e.substr(6));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
!function(e){function n(e,n){e=e.replace(l,"");var r=e.match(u),t=(r[1].split(",")[n]||"require").replace(s,""),i=p[t]||(p[t]=new RegExp(a+t+f,"g"));i.lastIndex=0;for(var o,c=[];o=i.exec(e);)c.push(o[2]||o[3]);return c}function r(e,n,t,o){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof n&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var l=i.get(e);return l.__useDefault?l["default"]:l}throw new TypeError("Invalid require")}for(var a=[],f=0;f<e.length;f++)a.push(i["import"](e[f],o));Promise.all(a).then(function(e){n&&n.apply(null,e)},t)}function t(t,l,a){"string"!=typeof t&&(a=l,l=t,t=null),l instanceof Array||(a=l,l=["require","exports","module"].splice(0,a.length)),"function"!=typeof a&&(a=function(e){return function(){return e}}(a)),void 0===l[l.length-1]&&l.pop();var f,u,s;-1!=(f=o.call(l,"require"))&&(l.splice(f,1),t||(l=l.concat(n(a.toString(),f)))),-1!=(u=o.call(l,"exports"))&&l.splice(u,1),-1!=(s=o.call(l,"module"))&&l.splice(s,1);var p={name:t,deps:l,execute:function(n,t,o){for(var p=[],c=0;c<l.length;c++)p.push(n(l[c]));o.uri=o.id,o.config=function(){},-1!=s&&p.splice(s,0,o),-1!=u&&p.splice(u,0,t),-1!=f&&p.splice(f,0,function(e,t,l){return"string"==typeof e&&"function"!=typeof t?n(e):r.call(i,e,t,l,o.id)});var d=a.apply(-1==u?e:t,p);return"undefined"==typeof d&&o&&(d=o.exports),"undefined"!=typeof d?d:void 0}};if(t)c.anonDefine||c.isBundle?c.anonDefine&&c.anonDefine.name&&(c.anonDefine=null):c.anonDefine=p,c.isBundle=!0,i.registerDynamic(p.name,p.deps,!1,p.execute);else{if(c.anonDefine&&!c.anonDefine.name)throw new Error("Multiple anonymous defines in module "+t);c.anonDefine=p}}var i=$__System,o=Array.prototype.indexOf||function(e){for(var n=0,r=this.length;r>n;n++)if(this[n]===e)return n;return-1},l=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,a="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",f="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",u=/\(([^\)]*)\)/,s=/^\s+|\s+$/g,p={};t.amd={};var c={isBundle:!1,anonDefine:null};i.amdDefine=t,i.amdRequire=r}("undefined"!=typeof self?self:global);
(function() {
var define = $__System.amdDefine;
(function(global) {
  'use strict';
  var iframeMessenger = (function() {
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    var REFRESH_DELAY = 200;
    var MSG_ID_PREFIX = 'iframeMessenger';
    var _postMessageCallbacks = {};
    var _currentHeight;
    var _images = [];
    var _options = {
      absoluteHeight: false,
      enableUpdateInterval: true
    };
    function _postMessage(message, callback) {
      var id = genID();
      message.id = id;
      if (callback) {
        _postMessageCallbacks[id] = callback;
      }
      window.parent.postMessage(JSON.stringify(message), '*');
    }
    function genID() {
      var rnd = Math.random().toString(36).substr(2, 5);
      return MSG_ID_PREFIX + ':' + rnd;
    }
    function _inIframe() {
      try {
        return window.self !== window.top;
      } catch (e) {
        return true;
      }
    }
    function fixBodyHeight() {
      var css = 'body::before, body::after{';
      css += 'content: ".";';
      css += 'height: 0;';
      css += 'margin: 0;';
      css += 'overflow: hidden;';
      css += 'visibility: hidden;';
      css += 'display: block;';
      css += 'clear: both;';
      css += '}';
      css += 'body{';
      css += 'margin: 0 !important;';
      css += 'display: inline-block !important;';
      css += 'float: left !important;';
      css += 'width: 100% !important;';
      css += 'box-sizing: border-box !important;';
      css += '}';
      var head = document.querySelector('head');
      var styleEl = document.createElement('style');
      styleEl.appendChild(document.createTextNode(css));
      head.appendChild(styleEl);
    }
    function navigate(url) {
      var message = {
        type: 'navigate',
        value: url
      };
      _postMessage(message);
    }
    function resize(height) {
      if (typeof height === 'undefined') {
        _handleResize();
      } else {
        _sendHeight(height);
      }
    }
    function _onLoad(fn) {
      if (document.readyState !== 'complete') {
        window.addEventListener('load', fn, false);
      } else {
        fn();
      }
    }
    function _sendHeight(height) {
      var message = {
        type: 'set-height',
        value: height
      };
      var ampMessage = {
        sentinel: 'amp',
        type: 'embed-size',
        height: height
      };
      _postMessage(message);
      _postMessage(ampMessage);
    }
    function _getHeight() {
      var height = parseInt(document.body.offsetHeight, 10);
      var styles = document.defaultView.getComputedStyle(document.body);
      height += parseInt(styles.getPropertyValue('margin-bottom'), 10);
      height += parseInt(styles.getPropertyValue('margin-top'), 10);
      return height;
    }
    function _getAbsoluteHeight() {
      var allElements = document.querySelectorAll('body *');
      var maxBottomVal = 0;
      Array.prototype.forEach.call(allElements, function(el) {
        var styles = window.getComputedStyle(el);
        var marginBottom = 0;
        if (styles.marginBottom && !isNaN(parseInt(styles.marginBottom), 10)) {
          marginBottom = parseInt(styles.marginBottom, 10);
        }
        var posBottom = el.getBoundingClientRect().bottom;
        var elBottom = marginBottom + posBottom;
        if (elBottom > maxBottomVal) {
          maxBottomVal = elBottom;
        }
      });
      return Math.ceil(maxBottomVal);
    }
    function _handleResize() {
      var newHeight;
      if (_options.absoluteHeight) {
        newHeight = _getAbsoluteHeight();
      } else {
        newHeight = _getHeight();
      }
      if (_currentHeight === newHeight) {
        return;
      }
      _sendHeight(newHeight);
      _currentHeight = newHeight;
    }
    function _setupInterval() {
      setInterval(_handleResize, REFRESH_DELAY);
    }
    function _setupMutationObserver() {
      var target = document.querySelector('body');
      var observer = new MutationObserver(function() {
        _addImageLoadListeners();
        _handleResize();
      });
      var config = {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      };
      observer.observe(target, config);
    }
    function enableAutoResize(options) {
      for (var key in options) {
        if (options.hasOwnProperty(key)) {
          _options[key] = options[key];
        }
      }
      if (typeof AdobeEdge !== 'undefined' && typeof AdobeEdge.bootstrapCallback !== 'undefined') {
        AdobeEdge.bootstrapCallback(_setupAutoResize);
      } else {
        _onLoad(_setupAutoResize);
      }
    }
    function _setupAutoResize() {
      window.addEventListener('resize', _handleResize);
      _addImageLoadListeners();
      if (MutationObserver) {
        _setupMutationObserver();
      } else if (_options.enableUpdateInterval === true) {
        _setupInterval();
      }
      _handleResize();
    }
    function _handlePostMessage(event) {
      if (event.data) {
        var data;
        try {
          data = JSON.parse(event.data);
        } catch (err) {
          return console.log('iframeMessenger: Error parsing data. ' + err.toString());
        }
        if (data.hasOwnProperty('id') && _postMessageCallbacks.hasOwnProperty(data.id)) {
          _postMessageCallbacks[data.id](data);
          if (!data.subscribe) {
            delete _postMessageCallbacks[data.id];
          }
        }
      }
    }
    function getPositionInformation(callback) {
      _postMessage({type: 'get-position'}, callback);
    }
    function getLocation(callback) {
      _postMessage({type: 'get-location'}, callback);
    }
    function scrollTo(_x, _y) {
      _postMessage({
        type: 'scroll-to',
        x: _x,
        y: _y
      });
    }
    function monitorPosition(callback) {
      _postMessage({type: 'monitor-position'}, callback);
    }
    function _setupPage() {
      _addImageLoadListeners();
      fixBodyHeight();
      if (!document.body || !getComputedStyle) {
        return;
      }
      document.documentElement.style.height = '';
      document.body.style.height = '';
      document.querySelector('html').style.overflow = 'hidden';
    }
    function _imageLoaded(event) {
      if (!event || event.type !== 'load') {
        return;
      }
      var img = event.srcElement;
      var imageIndex = _images.indexOf(img);
      if (imageIndex !== -1) {
        _images.splice(imageIndex, 1);
      }
      _handleResize();
    }
    function _addImage(img) {
      if (_images.indexOf(img) === -1) {
        img.addEventListener('load', _imageLoaded);
        _images.push(img);
      }
    }
    function _addImageLoadListeners() {
      var imgs = document.querySelectorAll('img');
      for (var i = 0; i < imgs.length; i++) {
        var image = imgs[i];
        if (image.nodeName === 'IMG' && image.src && image.complete === false && image.readyState !== 4) {
          _addImage(image);
        }
      }
    }
    if (_inIframe()) {
      _onLoad(_setupPage);
      window.addEventListener('message', _handlePostMessage, false);
    }
    return {
      resize: resize,
      navigate: navigate,
      enableAutoResize: enableAutoResize,
      scrollTo: scrollTo,
      getLocation: getLocation,
      getAbsoluteHeight: _getAbsoluteHeight,
      getPositionInformation: getPositionInformation,
      monitorPosition: monitorPosition
    };
  }());
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = iframeMessenger;
  } else if (typeof define !== 'undefined' && define.amd) {
    define("2", [], function() {
      return iframeMessenger;
    });
  } else {
    global.iframeMessenger = iframeMessenger;
  }
}((typeof window !== 'undefined') ? window : this));

})();
(function() {
var define = $__System.amdDefine;
define("3", ["2"], function(main) {
  return main;
});

})();
$__System.registerDynamic("4", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = "<header class=\"top\">\n    <div class=\"header res\">\n        <p class=\"mt-0\">\n            <!--span class=\"js-state-name\">2016 Olympic finals</span> -<-->  \n            <span class=\"js-state-text\">Loading ...</span>\n        </p>\n        <div class=\"btn-next\">\n            <span class=\"js-state-next\">Start</span>\n            <svg class=\"arrow-right\" width=\"28\" height=\"28\" viewBox=\"0 0 30 30\">\n                <path d=\"M22.8 14.6l-7.6-7.6-.7.7 5.5 6.6h-14v1.5h14l-5.5 6.6.7.7 7.6-7.6v-.9\" fill=\"#fff\"/>\n            </svg>\n            <svg class=\"replay\" width=\"16px\" height=\"16px\" viewBox=\"0 0 43 44\" opacity=\"0\">\n                <path d=\"M7.15497025,33.442558 L14.398,32.27 L14.398,29.77 L1.58,29.77 L0.606,30.74 L0.606,44 L3.106,44 L4.278,36.27 L4.28132921,36.2666837 C8.31677436,41.0007268 14.3191026,44 21.023,44 C33.173,44 43.023,34.15 43.023,22 C43.023,9.85 33.173,0 21.023,0 C13.508,0 6.876,3.77 2.908,9.52 L2.944,9.54 L3.266,10.92 L4.964,11.98 L6.311,11.66 C9.572,7.04 14.945,4 21.023,4 C30.949,4 39.023,12.08 39.023,22 C39.023,31.92 30.949,40 21.023,40 C15.4437157,40 10.4578363,37.4375695 7.15497025,33.442558 Z\" fill=\"#fff\"></path>\n            </svg>\n        </div>\n    </div>\n</header>\n\n<div class=\"graph\">\n    <svg class=\"chart js-chart\" data-state=\"final\">\n        <g class=\"axis-y\"></g>\n        <g class=\"axis-x\"></g>\n        <g class=\"mark-highlight\">\n            <line class=\"hl-lv\" y2=\"98%\"></line>            \n            <text class=\"hl-year\" x=\"101%\" fill=\"#333\" dy=\".3em\"></text> \n            <text class=\"hl-mark\" y=\"100%\" fill=\"#333\" dy=\".71em\"></text>\n            <g class=\"js-final\">\n                <line class=\"hl-lh-wr\"></line>            \n                <line class=\"hl-lh-or\"></line> \n                <text class=\"hl-txt-wr\"></text> \n                <text class=\"hl-txt-or\"></text> \n            </g>\n        </g>\n        <g class=\"dots final\"></g>\n        <g class=\"dots medal\"></g>\n        <g class=\"dots world\"></g>\n        <g class=\"dots-highlight\">\n            <circle class=\"hl-circle\"></circle>\n        </g>\n        <g class=\"dots-picker\"></g>\n    </svg>   \n    <div class=\"tooltip\">\n        <span class=\"js-title fz-14 fw-b\"></span>\n        <span class=\"js-team fz-14 fw-b c-g\"></span><br>\n        <span class=\"js-result\"></span><br> \n        <span class=\"js-record\"></span>\n    </div>\n</div>\n\n<header class=\"in\"></header>\n\n<div class=\"note res d-n\">\n    Note that the position are based on the athletes' average speed\n</div>\n";
  return module.exports;
});

$__System.register("5", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", function (func, wait, options) {
        var context, args, result;
        var timeout = null;
        var previous = 0;
        if (!options) options = {};
        var later = function later() {
          previous = options.leading === false ? 0 : Date.now();
          timeout = null;
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        };
        return function () {
          var now = Date.now();
          if (!previous && options.leading === false) previous = now;
          var remaining = wait - (now - previous);
          context = this;
          args = arguments;
          if (remaining <= 0 || remaining > wait) {
            if (timeout) {
              clearTimeout(timeout);
              timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
          } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
          }
          return result;
        };
      });

      ;
    }
  };
});
$__System.registerDynamic("6", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  (function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (factory((global.d3 = global.d3 || {})));
  }(this, function(exports) {
    'use strict';
    var slice = [].slice;
    var noabort = {};
    function Queue(size) {
      if (!(size >= 1))
        throw new Error;
      this._size = size;
      this._call = this._error = null;
      this._tasks = [];
      this._data = [];
      this._waiting = this._active = this._ended = this._start = 0;
    }
    Queue.prototype = queue.prototype = {
      constructor: Queue,
      defer: function(callback) {
        if (typeof callback !== "function" || this._call)
          throw new Error;
        if (this._error != null)
          return this;
        var t = slice.call(arguments, 1);
        t.push(callback);
        ++this._waiting, this._tasks.push(t);
        poke(this);
        return this;
      },
      abort: function() {
        if (this._error == null)
          abort(this, new Error("abort"));
        return this;
      },
      await: function(callback) {
        if (typeof callback !== "function" || this._call)
          throw new Error;
        this._call = function(error, results) {
          callback.apply(null, [error].concat(results));
        };
        maybeNotify(this);
        return this;
      },
      awaitAll: function(callback) {
        if (typeof callback !== "function" || this._call)
          throw new Error;
        this._call = callback;
        maybeNotify(this);
        return this;
      }
    };
    function poke(q) {
      if (!q._start)
        try {
          start(q);
        } catch (e) {
          if (q._tasks[q._ended + q._active - 1])
            abort(q, e);
        }
    }
    function start(q) {
      while (q._start = q._waiting && q._active < q._size) {
        var i = q._ended + q._active,
            t = q._tasks[i],
            j = t.length - 1,
            c = t[j];
        t[j] = end(q, i);
        --q._waiting, ++q._active;
        t = c.apply(null, t);
        if (!q._tasks[i])
          continue;
        q._tasks[i] = t || noabort;
      }
    }
    function end(q, i) {
      return function(e, r) {
        if (!q._tasks[i])
          return;
        --q._active, ++q._ended;
        q._tasks[i] = null;
        if (q._error != null)
          return;
        if (e != null) {
          abort(q, e);
        } else {
          q._data[i] = r;
          if (q._waiting)
            poke(q);
          else
            maybeNotify(q);
        }
      };
    }
    function abort(q, e) {
      var i = q._tasks.length,
          t;
      q._error = e;
      q._data = undefined;
      q._waiting = NaN;
      while (--i >= 0) {
        if (t = q._tasks[i]) {
          q._tasks[i] = null;
          if (t.abort)
            try {
              t.abort();
            } catch (e) {}
        }
      }
      q._active = NaN;
      maybeNotify(q);
    }
    function maybeNotify(q) {
      if (!q._active && q._call)
        q._call(q._error, q._data);
    }
    function queue(concurrency) {
      return new Queue(arguments.length ? +concurrency : Infinity);
    }
    exports.queue = queue;
    Object.defineProperty(exports, '__esModule', {value: true});
  }));
  return module.exports;
});

$__System.registerDynamic("7", ["6"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('6');
  return module.exports;
});

$__System.register('8', ['7', '9'], function (_export) {
    'use strict';

    var d3_queue, d3_json, defaultKey, keys;
    return {
        setters: [function (_) {
            d3_queue = _.queue;
        }, function (_2) {
            d3_json = _2.json;
        }],
        execute: function () {
            defaultKey = "1Qx2_oITx9455H4C_Kv8X4rPYtwnY_KwE-vxPe1cFx4M";
            keys = {
                "freestyle_100x4_relay_w": "1Qx2_oITx9455H4C_Kv8X4rPYtwnY_KwE-vxPe1cFx4M",
                "freestyle_400_w": "1POjTdD80wZg5cxaCrMsnIh2qoYGJdDqBpyL2-6EX7nA",
                "freestyle_200_m": "1rubYCASgNxcWrpWCrh1e4Y_kNfwF3jyt84L_iehxevI"
            };

            _export('default', function (event, test, cbResult) {

                var urlDocs = "https://interactive.guim.co.uk/docsdata-test/";
                var urlData = "https://interactive.guim.co.uk/2016/07/olympic-vs/data/";
                var docsKey = keys[event] ? keys[event] : defaultKey;

                //d3_json(urlData + (test ? "test/" : "") + event + "_final.json", (resp, err) => console.log(resp, err));

                d3_queue().defer(d3_json, urlData + event + ".json").defer(d3_json, urlData + (test ? "test/" : "live/") + event + "_final.json").defer(d3_json, urlDocs + docsKey + ".json").await(cbResult);
            });
        }
    };
});
$__System.register('a', ['8', 'e', 'b', 'c', 'd'], function (_export) {
    var fetchData, _Object$keys, stateHeaders, record, parseData, result;

    function displayResult(err, jsonRecord, jsonFinals, jsonStates) {
        if (err) {
            console.log(err);return;
        }

        /* state */
        stateHeaders.data = jsonStates.embed_vs;

        /* chart */
        var data = parseData(jsonRecord, jsonFinals, "Time");

        // fastest swimming time
        var best = {};
        best.medals = data.medals[data.medals.length - 1];
        best.worlds = data.worlds[data.worlds.length - 1];
        best.finals = data.finals[data.finals.length - 1];

        var timeWr = Math.min(best.medals.x, best.worlds.x, best.finals.x);
        _Object$keys(data).forEach(function (dd) {
            // time to distance
            data[dd] = data[dd].map(function (dm) {
                dm.x = 100 * timeWr / dm.x - 100;
                dm.attrs.dist = Math.round(Math.abs(dm.x) * 100) / 100;
                return dm;
            });
        });

        // set wr, or records and append data if needed
        setRecord("or", "medals", data, best);
        setRecord("wr", "worlds", data, best);

        result(data);
    }

    function setRecord(typeRecord, typeData, data, best) {
        var isNewRecord = best.finals.x > best[typeData].x;
        switch (true) {
            case typeRecord === "wr":
                if (isNewRecord) {
                    // clone obj, trick!
                    var newWr = JSON.parse(JSON.stringify(best.finals));
                    newWr.color = "wr";
                    data.worlds.push(newWr);
                }
                record.wr = data.worlds[data.worlds.length - 1];
                break;
            case typeRecord === "or":
                record.or = isNewRecord ? best.finals : best.medals;
                break;
        }

        if (isNewRecord) {
            console.log("new " + typeRecord + "!!");
        } else if (best.finals.x === best[typeData].x) {
            console.log("almost break a new " + typeRecord + "!");
        }
    }
    return {
        setters: [function (_) {
            fetchData = _['default'];
        }, function (_e) {
            _Object$keys = _e['default'];
        }, function (_b) {
            stateHeaders = _b.stateHeaders;
            record = _b.record;
        }, function (_c) {
            parseData = _c['default'];
        }, function (_d) {
            result = _d['default'];
        }],
        execute: function () {
            'use strict';

            _export('default', function (event, test) {
                if (test) {
                    console.log("this is a testing page");
                }
                fetchData(event, test, displayResult);
            });
        }
    };
});
$__System.registerDynamic("f", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "header": ["year", "name", "team", "record", "result"],
    "world_records": [[1901, "Peter O'Connor", "IRE", "wr", 7.61], [1921, "Edward Orval Gourdin", "USA", "wr", 7.69], [1924, "Robert LeGendre", "USA", "wr", 7.76], [1925, "William De Hart Hubbard", "USA", "wr", 7.89], [1928, "Edward Barton Hamm", "USA", "wr", 7.9], [1928, "Sylvio Cator", "HAI", "wr", 7.93], [1931, "Chuhei Nambu", "JPN", "wr", 7.98], [1935, "Jesse Owens", "USA", "wr", 8.13], [1960, "Ralph Boston", "USA", "wr", 8.21], [1961, "Ralph Boston", "USA", "wr", 8.24], [1961, "Ralph Boston", "USA", "wr", 8.28], [1962, "Igor Ter-Ovanesyan", "URS", "wr", 8.31], [1964, "Ralph Boston", "USA", "wr", 8.31], [1964, "Ralph Boston", "USA", "wr", 8.34], [1965, "Ralph Boston", "USA", "wr", 8.35], [1967, "Igor Ter-Ovanesyan", "URS", "wr", 8.35], [1968, "Bob Beamon", "USA", "wr", 8.9], [1991, "Mike Powell", "USA", "wr", 8.95]],
    "olympics": [[1896, "Ellery Clark", "USA", "gold", 6.35], [1896, "Robert Garrett", "USA", "silver", 6.18], [1896, "James Connolly", "USA", "bronze", 6.11], [1900, "Alvin Kraenzlein", "USA", "gold", 7.185], [1900, "Meyer Prinstein", "USA", "silver", 7.175], [1900, "Patrick Leahy", "GBR", "bronze", 6.95], [1904, "Meyer Prinstein", "USA", "gold", 7.34], [1904, "Daniel Frank", "USA", "silver", 6.89], [1904, "Robert Stangland", "USA", "bronze", 6.88], [1908, "Frank Irons", "USA", "gold", 7.48], [1908, "Daniel Kelly", "USA", "silver", 7.09], [1908, "Calvin Bricker", "CAN", "bronze", 7.08], [1912, "Albert Gutterson", "USA", "gold", 7.6], [1912, "Calvin Bricker", "CAN", "silver", 7.21], [1912, "Georg Aberg", "SWE", "bronze", 7.18], [1920, "William Petersson", "SWE", "gold", 7.15], [1920, "Carl Johnson", "USA", "silver", 7.095], [1920, "Erik Abrahamsson", "SWE", "bronze", 7.08], [1924, "William De Hart Hubbard", "USA", "gold", 7.445], [1924, "Edward Orval Gourdin", "USA", "silver", 7.275], [1924, "Sverre Hansen", "NOR", "bronze", 7.26], [1928, "Edward Barton Hamm", "USA", "gold", 7.73], [1928, "Sylvio Cator", "HAI", "silver", 7.58], [1928, "Al Bates", "USA", "bronze", 7.4], [1932, "Edward Lansing Gordon", "USA", "gold", 7.64], [1932, "Lambert Redd", "USA", "silver", 7.6], [1932, "Chuhei Nambu", "JPN", "bronze", 7.45], [1936, "Jesse Owens", "USA", "gold", 8.06], [1936, "Luz Long", "GER", "silver", 7.87], [1936, "Naoto Tajima", "JPN", "bronze", 7.74], [1948, "William Samuel Steele", "USA", "gold", 7.825], [1948, "Thomas Theodore Bruce", "AUS", "silver", 7.555], [1948, "Herbert Paul Jr. Douglas", "USA", "bronze", 7.545], [1952, "Jerome Biffle", "USA", "gold", 7.57], [1952, "Meredith Gourdine", "USA", "silver", 7.53], [1952, "Ã–dã¶n Fã–ldessy", "HUN", "bronze", 7.3], [1956, "Gregory Curtis Bell", "USA", "gold", 7.83], [1956, "John Bennett", "USA", "silver", 7.68], [1956, "Jorma Valkama", "FIN", "bronze", 7.48], [1960, "Ralph Boston", "USA", "gold", 8.12], [1960, "Irvin Roberson", "USA", "silver", 8.11], [1960, "Igor Ter-ovanesyan", "URS", "bronze", 8.04], [1964, "Lynn Davies", "GBR", "gold", 8.07], [1964, "Ralph Boston", "USA", "silver", 8.03], [1964, "Igor Ter-ovanesyan", "URS", "bronze", 7.99], [1968, "Bob Beamon", "USA", "gold", 8.9], [1968, "Klaus Beer", "GDR", "silver", 8.19], [1968, "Ralph Boston", "USA", "bronze", 8.16], [1972, "Randel Luvelle Williams", "USA", "gold", 8.24], [1972, "Hans Baumgartner", "FRG", "silver", 8.18], [1972, "Arnie Robinson", "USA", "bronze", 8.03], [1976, "Arnie Robinson", "USA", "gold", 8.35], [1976, "Randel Luvelle Williams", "USA", "silver", 8.11], [1976, "Frank Wartenberg", "GDR", "bronze", 8.02], [1980, "Lutz Dombrowski", "GDR", "gold", 8.54], [1980, "Frank Paschek", "GDR", "silver", 8.21], [1980, "Valeri Podluzhnyi", "URS", "bronze", 8.18], [1984, "Carl Lewis", "USA", "gold", 8.54], [1984, "Gary Honey", "AUS", "silver", 8.24], [1984, "Giovanni Evangelisti", "ITA", "bronze", 8.24], [1988, "Carl Lewis", "USA", "gold", 8.72], [1988, "Mike Powell", "USA", "silver", 8.49], [1988, "Larry Myricks", "USA", "bronze", 8.27], [1992, "Carl Lewis", "USA", "gold", 8.67], [1992, "Mike Powell", "USA", "silver", 8.64], [1992, "Joe Greene", "USA", "bronze", 8.34], [1996, "Carl Lewis", "USA", "gold", 8.5], [1996, "James Beckford", "JAM", "silver", 8.29], [1996, "Joe Greene", "USA", "bronze", 8.24], [2000, "Ivan Pedroso", "CUB", "gold", 8.55], [2000, "Jai Taurima", "AUS", "silver", 8.49], [2000, "Roman Schurenko", "UKR", "bronze", 8.31], [2004, "Dwight Phillips", "USA", "gold", 8.59], [2004, "John Moffitt", "USA", "silver", 8.47], [2004, "Joan Lino Martinez", "ESP", "bronze", 8.32], [2008, "Irving Saladino", "PAN", "gold", 8.34], [2008, "Godfrey Khotso Mokoena", "RSA", "silver", 8.24], [2008, "Ibrahim Camejo", "CUB", "bronze", 8.2], [2012, "Greg Rutherford", "GBR", "gold", 8.31], [2012, "Mitchell Watt", "AUS", "silver", 8.16], [2012, "Will Claye", "USA", "bronze", 8.12]]
  };
  return module.exports;
});

$__System.registerDynamic("10", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.sort = function(arr) {
    return arr.sort(function(d1, d2) {
      return d1 - d2;
    });
  };
  exports.unique = function(arr) {
    return arr.filter(function(d, i) {
      return arr.indexOf(d) === i;
    });
  };
  exports.uniqueBy = function(key, objArr) {
    return objArr.map(function(obj) {
      return obj[key];
    }).filter(function(dd, i, arr) {
      return i === arr.indexOf(dd);
    });
  };
  exports.merge = function(arrs) {
    return [].concat.apply([], arrs);
  };
  var obj2arr = function(obj) {
    return Object.keys(obj).map(function(key) {
      return obj[key];
    });
  };
  exports.groupBy = function(keys, objArr, returnObj) {
    var groupObj = {};
    objArr.forEach(function(obj) {
      var kk = keys.map(function(key) {
        return obj[key];
      }).join("_");
      groupObj[kk] = groupObj[kk] || [];
      groupObj[kk].push(obj);
    });
    var list = returnObj ? groupObj : obj2arr(groupObj);
    return list;
  };
  return module.exports;
});

$__System.register("c", ["10", "11", "b"], function (_export) {
    "use strict";

    var array, utils, record, thisYear;
    // olympic finals of this year

    /* 1. format data */

    function parseDataRecord(dataHeader, dataWorlds, type) {
        return dataWorlds.map(function (dr) {
            var data = {};
            dataHeader.forEach(function (dh, i) {
                return data[dh] = dr[i];
            });

            data.result = data.result;
            //data.resultBlur = Math.round(getParsedValue(data.result, type.result).val*10)/10;
            //data.id = teamType === "Team" ? data.team : utils.str2class(data.name);

            return data;
        });
    }

    function parseDataFinals(dataRaw, type) {
        return dataRaw.filter(function (dd) {
            // filter out disqualified
            var toClass = ({}).toString;
            return dd.rank; //toClass.call(dd.property).indexOf("Array") > -1;
        }).map(function (dd) {
            //console.log(dd);
            var data = {};
            data.year = thisYear;
            data.name = getName(dd.participant, type.team, dd.country.name);
            data.team = dd.country.identifier;
            data.record = getProperties(dd.property, dd.rank).medal;
            data.result = dd.value;
            //data.resultBlur = Math.round(getParsedValue(dd.value, type.result).val*10)/10;
            return data;
        });
    }

    function getName(participant, type, team) {
        return type === "Team" ? team : //+ " ("+participant.map(dp => dp.competitor.fullName).join(", ")+")" :  //team
        participant.competitor.fullName; //individual
    }

    function getProperties(property, rank) {
        var flag = property.length;

        var medal = undefined;
        medal = flag ? property.filter(function (dp) {
            return dp.type.indexOf("Medal") > -1;
        }).map(function (dp) {
            return dp.value.toLowerCase();
        }) : rank;
        medal = medal.length ? medal : rank; // team, again

        var record = flag ? property.filter(function (dp) {
            return dp.type.indexOf("Record") > -1;
        }).map(function (dt) {
            return dt.value.toLowerCase();
        }).join(", ") : null;

        //console.log(property);
        //console.log(medal, record, rank, flag);

        return {
            medal: medal[0],
            record: record
        };
    }

    /* 2. remap for chart usage  */

    function remapData(data, type, isOverlappingAvoid) {
        var dataRemap = undefined;
        var dataGroup = undefined;

        // remap to avoid visual overlapped
        if (isOverlappingAvoid) {
            // add count and index
            dataGroup = array.groupBy(["year", "result"], data);
            dataGroup = dataGroup.map(function (dg) {
                dg = remapDataForCharts(dg, type);
                if (dg.length > 1) {
                    (function () {
                        var len = dg.length;
                        dg.map(function (dd, index) {
                            dd.count = len;
                            dd.index = index + 1;
                        });
                    })();
                }
                return dg;
            });
            dataRemap = array.merge(dataGroup);
        } else {
            dataRemap = remapDataForCharts(data, type);
        }

        // sort
        switch (type.result) {
            case "Time":
                dataRemap.sort(function (d1, d2) {
                    return d2.attrs.time - d1.attrs.time;
                });
                break;
            case "Distance":
                dataRemap.sort(function (d1, d2) {
                    return d1.attrs.dist - d2.attrs.dist;
                });
                break;
        }

        return dataRemap;
    }

    function remapDataForCharts(data, type) {
        return data.map(function (dd) {
            var result = getParsedValue(dd.result, type.result);
            var isJump = type.dirction === "h";
            dd.year = parseInt(dd.year);
            return {
                x: isJump ? dd.year : result.val,
                y: isJump ? result.val : dd.year,
                color: dd.record,
                attrs: {
                    year: dd.year,
                    name: dd.name,
                    team: dd.team,
                    mark: result.txt,
                    time: result.val
                    // TODO: remove time if type.result is distance?
                }
            };
        });
    }

    function getParsedValue(valueInTxt, type) {
        var valueInNum = undefined;
        switch (type) {
            case "Time":
                var t = valueInTxt.split(":");
                var len = t.length;
                var h = len === 3 ? parseInt(t[0]) * 60 * 60 : 0;
                var m = len !== 1 ? parseInt(t[len - 2]) * 60 : 0;
                var s = parseFloat(t[len - 1]);
                valueInNum = Math.round((h + m + s) * 1000) / 1000;
                break;
            case "Distance":
                valueInNum = parseFloat(valueInTxt);
                break;
        }

        return {
            txt: valueInTxt,
            val: valueInNum
        };
    }
    return {
        setters: [function (_) {
            array = _["default"];
        }, function (_2) {
            utils = _2["default"];
        }, function (_b) {
            record = _b.record;
        }],
        execute: function () {
            thisYear = 2016;

            _export("default", function (jsonRecord, jsonFinals, resultType) {
                var dataFinals = jsonFinals.olympics.eventUnit.result.entrant;
                var type = {
                    team: dataFinals[0].type,
                    result: dataFinals[0].property.filter(function (dp) {
                        return dp.type === "Result Type";
                    })[0].value,
                    direction: "h" // h - horizontal or v - vertical
                };
                record.type = type.result;

                // 1. format data from PA and records to ..
                // => year, name, team, record, result
                var data = {
                    worlds: parseDataRecord(jsonRecord.header, jsonRecord.world_records, type),
                    medals: parseDataRecord(jsonRecord.header, jsonRecord.olympics, type),
                    finals: parseDataFinals(dataFinals, type)
                };
                //console.log(data);

                // 2. remap for charts
                return {
                    worlds: remapData(data.worlds, type, true), // world records
                    medals: remapData(data.medals, type, true), // olympic medalists
                    finals: remapData(data.finals, type, true) };
            });
        }
    };
});
$__System.registerDynamic("12", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    if (it == undefined)
      throw TypeError("Can't call method on  " + it);
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("13", ["12"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var defined = $__require('12');
  module.exports = function(it) {
    return Object(defined(it));
  };
  return module.exports;
});

$__System.registerDynamic("14", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number')
    __g = global;
  return module.exports;
});

$__System.registerDynamic("15", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    if (typeof it != 'function')
      throw TypeError(it + ' is not a function!');
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("16", ["15"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var aFunction = $__require('15');
  module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined)
      return fn;
    switch (length) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };
      case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function() {
      return fn.apply(that, arguments);
    };
  };
  return module.exports;
});

$__System.registerDynamic("17", ["14", "18", "16"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('14'),
      core = $__require('18'),
      ctx = $__require('16'),
      PROTOTYPE = 'prototype';
  var $export = function(type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL)
      source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports)
        continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? (function(C) {
        var F = function(param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO)
        (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
  return module.exports;
});

$__System.registerDynamic("19", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  return module.exports;
});

$__System.registerDynamic("1a", ["17", "18", "19"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('17'),
      core = $__require('18'),
      fails = $__require('19');
  module.exports = function(KEY, exec) {
    var fn = (core.Object || {})[KEY] || Object[KEY],
        exp = {};
    exp[KEY] = exec(fn);
    $export($export.S + $export.F * fails(function() {
      fn(1);
    }), 'Object', exp);
  };
  return module.exports;
});

$__System.registerDynamic("1b", ["13", "1a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toObject = $__require('13');
  $__require('1a')('keys', function($keys) {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
  return module.exports;
});

$__System.registerDynamic("18", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core = module.exports = {version: '1.2.6'};
  if (typeof __e == 'number')
    __e = core;
  return module.exports;
});

$__System.registerDynamic("1c", ["1b", "18"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('1b');
  module.exports = $__require('18').Object.keys;
  return module.exports;
});

$__System.registerDynamic("e", ["1c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('1c'),
    __esModule: true
  };
  return module.exports;
});

$__System.register('1d', ['20', '21', 'e', 'b', '1e', '1f'], function (_export) {
    var updateInfo, updatePicker, _Object$keys, stateHeaders, d3_select, calcScale;

    function getNextState(stateName) {
        var list = stateHeaders.list;
        var currIndex = list.indexOf(stateName);
        var nextIndex = (currIndex + 1) % list.length;
        return {
            index: nextIndex,
            name: list[nextIndex]
        };
    }

    function toState(els, data, stateName) {
        d3_select(".js-chart").attr("data-state", stateName);

        var scale = calcScale(data.domain);
        _Object$keys(els).forEach(function (key, i) {
            els[key].update(data, scale, data.opacity[i]);
        });

        //calcScale(data.domain);      

        d3_select(".states").selectAll(".btn").classed("btn-focus", false);
        d3_select(".btn-" + stateName).classed("btn-focus", true);

        d3_select(".tooltip").selectAll(".count").classed("count-focus", false);
        d3_select(".count-" + stateName).classed("count-focus", true);

        var headers = stateHeaders.data;
        var currInd = stateHeaders.list.indexOf(stateName);
        var nextInd = getNextState(stateName).index;
        var isReplay = nextInd === 0;

        // current
        d3_select(".js-state-name").text(headers[currInd].title);
        d3_select(".js-state-text").text(headers[currInd].description);
        // next
        d3_select(".btn-next").style("pointer-events", "none").classed("btn-disable", true);
        //window.setTimeout(()=> {
        d3_select(".js-state-next").text(isReplay ? "Replay" : "Next with " + headers[nextInd].title.toLowerCase());
        d3_select(".replay").style("opacity", isReplay ? 1 : 0);
        d3_select(".arrow-right").style("opacity", isReplay ? 0 : 1);
        //}, 2500);

        // update info
        updateInfo(stateName);
        updatePicker(scale);
    }

    return {
        setters: [function (_) {
            updateInfo = _['default'];
        }, function (_2) {
            updatePicker = _2.updatePicker;
        }, function (_e) {
            _Object$keys = _e['default'];
        }, function (_b) {
            stateHeaders = _b.stateHeaders;
        }, function (_e2) {
            d3_select = _e2.select;
        }, function (_f) {
            calcScale = _f['default'];
        }],
        execute: function () {
            'use strict';

            _export('getNextState', getNextState);

            _export('toState', toState);
        }
    };
});
$__System.registerDynamic("22", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  (function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (factory((global.d3 = global.d3 || {})));
  }(this, function(exports) {
    'use strict';
    function formatDecimal(x, p) {
      if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0)
        return null;
      var i,
          coefficient = x.slice(0, i);
      return [coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient, +x.slice(i + 1)];
    }
    function exponent(x) {
      return x = formatDecimal(Math.abs(x)), x ? x[1] : NaN;
    }
    function formatGroup(grouping, thousands) {
      return function(value, width) {
        var i = value.length,
            t = [],
            j = 0,
            g = grouping[0],
            length = 0;
        while (i > 0 && g > 0) {
          if (length + g + 1 > width)
            g = Math.max(1, width - length);
          t.push(value.substring(i -= g, i + g));
          if ((length += g + 1) > width)
            break;
          g = grouping[j = (j + 1) % grouping.length];
        }
        return t.reverse().join(thousands);
      };
    }
    function formatDefault(x, p) {
      x = x.toPrecision(p);
      out: for (var n = x.length,
          i = 1,
          i0 = -1,
          i1; i < n; ++i) {
        switch (x[i]) {
          case ".":
            i0 = i1 = i;
            break;
          case "0":
            if (i0 === 0)
              i0 = i;
            i1 = i;
            break;
          case "e":
            break out;
          default:
            if (i0 > 0)
              i0 = 0;
            break;
        }
      }
      return i0 > 0 ? x.slice(0, i0) + x.slice(i1 + 1) : x;
    }
    var prefixExponent;
    function formatPrefixAuto(x, p) {
      var d = formatDecimal(x, p);
      if (!d)
        return x + "";
      var coefficient = d[0],
          exponent = d[1],
          i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
          n = coefficient.length;
      return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimal(x, Math.max(0, p + i - 1))[0];
    }
    function formatRounded(x, p) {
      var d = formatDecimal(x, p);
      if (!d)
        return x + "";
      var coefficient = d[0],
          exponent = d[1];
      return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
    }
    var formatTypes = {
      "": formatDefault,
      "%": function(x, p) {
        return (x * 100).toFixed(p);
      },
      "b": function(x) {
        return Math.round(x).toString(2);
      },
      "c": function(x) {
        return x + "";
      },
      "d": function(x) {
        return Math.round(x).toString(10);
      },
      "e": function(x, p) {
        return x.toExponential(p);
      },
      "f": function(x, p) {
        return x.toFixed(p);
      },
      "g": function(x, p) {
        return x.toPrecision(p);
      },
      "o": function(x) {
        return Math.round(x).toString(8);
      },
      "p": function(x, p) {
        return formatRounded(x * 100, p);
      },
      "r": formatRounded,
      "s": formatPrefixAuto,
      "X": function(x) {
        return Math.round(x).toString(16).toUpperCase();
      },
      "x": function(x) {
        return Math.round(x).toString(16);
      }
    };
    var re = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
    function formatSpecifier(specifier) {
      return new FormatSpecifier(specifier);
    }
    function FormatSpecifier(specifier) {
      if (!(match = re.exec(specifier)))
        throw new Error("invalid format: " + specifier);
      var match,
          fill = match[1] || " ",
          align = match[2] || ">",
          sign = match[3] || "-",
          symbol = match[4] || "",
          zero = !!match[5],
          width = match[6] && +match[6],
          comma = !!match[7],
          precision = match[8] && +match[8].slice(1),
          type = match[9] || "";
      if (type === "n")
        comma = true, type = "g";
      else if (!formatTypes[type])
        type = "";
      if (zero || (fill === "0" && align === "="))
        zero = true, fill = "0", align = "=";
      this.fill = fill;
      this.align = align;
      this.sign = sign;
      this.symbol = symbol;
      this.zero = zero;
      this.width = width;
      this.comma = comma;
      this.precision = precision;
      this.type = type;
    }
    FormatSpecifier.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width == null ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0)) + this.type;
    };
    var prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
    function identity(x) {
      return x;
    }
    function formatLocale(locale) {
      var group = locale.grouping && locale.thousands ? formatGroup(locale.grouping, locale.thousands) : identity,
          currency = locale.currency,
          decimal = locale.decimal;
      function newFormat(specifier) {
        specifier = formatSpecifier(specifier);
        var fill = specifier.fill,
            align = specifier.align,
            sign = specifier.sign,
            symbol = specifier.symbol,
            zero = specifier.zero,
            width = specifier.width,
            comma = specifier.comma,
            precision = specifier.precision,
            type = specifier.type;
        var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
            suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? "%" : "";
        var formatType = formatTypes[type],
            maybeSuffix = !type || /[defgprs%]/.test(type);
        precision = precision == null ? (type ? 6 : 12) : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
        function format(value) {
          var valuePrefix = prefix,
              valueSuffix = suffix,
              i,
              n,
              c;
          if (type === "c") {
            valueSuffix = formatType(value) + valueSuffix;
            value = "";
          } else {
            value = +value;
            var valueNegative = (value < 0 || 1 / value < 0) && (value *= -1, true);
            value = formatType(value, precision);
            if (valueNegative) {
              i = -1, n = value.length;
              valueNegative = false;
              while (++i < n) {
                if (c = value.charCodeAt(i), (48 < c && c < 58) || (type === "x" && 96 < c && c < 103) || (type === "X" && 64 < c && c < 71)) {
                  valueNegative = true;
                  break;
                }
              }
            }
            valuePrefix = (valueNegative ? (sign === "(" ? sign : "-") : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
            valueSuffix = valueSuffix + (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + (valueNegative && sign === "(" ? ")" : "");
            if (maybeSuffix) {
              i = -1, n = value.length;
              while (++i < n) {
                if (c = value.charCodeAt(i), 48 > c || c > 57) {
                  valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                  value = value.slice(0, i);
                  break;
                }
              }
            }
          }
          if (comma && !zero)
            value = group(value, Infinity);
          var length = valuePrefix.length + value.length + valueSuffix.length,
              padding = length < width ? new Array(width - length + 1).join(fill) : "";
          if (comma && zero)
            value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
          switch (align) {
            case "<":
              return valuePrefix + value + valueSuffix + padding;
            case "=":
              return valuePrefix + padding + value + valueSuffix;
            case "^":
              return padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
          }
          return padding + valuePrefix + value + valueSuffix;
        }
        format.toString = function() {
          return specifier + "";
        };
        return format;
      }
      function formatPrefix(specifier, value) {
        var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
            e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
            k = Math.pow(10, -e),
            prefix = prefixes[8 + e / 3];
        return function(value) {
          return f(k * value) + prefix;
        };
      }
      return {
        format: newFormat,
        formatPrefix: formatPrefix
      };
    }
    var locale;
    exports.format;
    exports.formatPrefix;
    defaultLocale({
      decimal: ".",
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    });
    function defaultLocale(definition) {
      locale = formatLocale(definition);
      exports.format = locale.format;
      exports.formatPrefix = locale.formatPrefix;
      return locale;
    }
    function precisionFixed(step) {
      return Math.max(0, -exponent(Math.abs(step)));
    }
    function precisionPrefix(step, value) {
      return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
    }
    function precisionRound(step, max) {
      step = Math.abs(step), max = Math.abs(max) - step;
      return Math.max(0, exponent(max) - exponent(step)) + 1;
    }
    exports.formatDefaultLocale = defaultLocale;
    exports.formatLocale = formatLocale;
    exports.formatSpecifier = formatSpecifier;
    exports.precisionFixed = precisionFixed;
    exports.precisionPrefix = precisionPrefix;
    exports.precisionRound = precisionRound;
    Object.defineProperty(exports, '__esModule', {value: true});
  }));
  return module.exports;
});

$__System.registerDynamic("23", ["22"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('22');
  return module.exports;
});

$__System.registerDynamic("24", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  (function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (factory((global.d3 = global.d3 || {})));
  }(this, function(exports) {
    'use strict';
    var t0 = new Date;
    var t1 = new Date;
    function newInterval(floori, offseti, count, field) {
      function interval(date) {
        return floori(date = new Date(+date)), date;
      }
      interval.floor = interval;
      interval.ceil = function(date) {
        return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
      };
      interval.round = function(date) {
        var d0 = interval(date),
            d1 = interval.ceil(date);
        return date - d0 < d1 - date ? d0 : d1;
      };
      interval.offset = function(date, step) {
        return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
      };
      interval.range = function(start, stop, step) {
        var range = [];
        start = interval.ceil(start);
        step = step == null ? 1 : Math.floor(step);
        if (!(start < stop) || !(step > 0))
          return range;
        do
          range.push(new Date(+start));
 while (offseti(start, step), floori(start), start < stop);
        return range;
      };
      interval.filter = function(test) {
        return newInterval(function(date) {
          while (floori(date), !test(date))
            date.setTime(date - 1);
        }, function(date, step) {
          while (--step >= 0)
            while (offseti(date, 1), !test(date))
              ;
        });
      };
      if (count) {
        interval.count = function(start, end) {
          t0.setTime(+start), t1.setTime(+end);
          floori(t0), floori(t1);
          return Math.floor(count(t0, t1));
        };
        interval.every = function(step) {
          step = Math.floor(step);
          return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? function(d) {
            return field(d) % step === 0;
          } : function(d) {
            return interval.count(0, d) % step === 0;
          });
        };
      }
      return interval;
    }
    var millisecond = newInterval(function() {}, function(date, step) {
      date.setTime(+date + step);
    }, function(start, end) {
      return end - start;
    });
    millisecond.every = function(k) {
      k = Math.floor(k);
      if (!isFinite(k) || !(k > 0))
        return null;
      if (!(k > 1))
        return millisecond;
      return newInterval(function(date) {
        date.setTime(Math.floor(date / k) * k);
      }, function(date, step) {
        date.setTime(+date + step * k);
      }, function(start, end) {
        return (end - start) / k;
      });
    };
    var milliseconds = millisecond.range;
    var durationSecond = 1e3;
    var durationMinute = 6e4;
    var durationHour = 36e5;
    var durationDay = 864e5;
    var durationWeek = 6048e5;
    var second = newInterval(function(date) {
      date.setTime(Math.floor(date / durationSecond) * durationSecond);
    }, function(date, step) {
      date.setTime(+date + step * durationSecond);
    }, function(start, end) {
      return (end - start) / durationSecond;
    }, function(date) {
      return date.getUTCSeconds();
    });
    var seconds = second.range;
    var minute = newInterval(function(date) {
      date.setTime(Math.floor(date / durationMinute) * durationMinute);
    }, function(date, step) {
      date.setTime(+date + step * durationMinute);
    }, function(start, end) {
      return (end - start) / durationMinute;
    }, function(date) {
      return date.getMinutes();
    });
    var minutes = minute.range;
    var hour = newInterval(function(date) {
      var offset = date.getTimezoneOffset() * durationMinute % durationHour;
      if (offset < 0)
        offset += durationHour;
      date.setTime(Math.floor((+date - offset) / durationHour) * durationHour + offset);
    }, function(date, step) {
      date.setTime(+date + step * durationHour);
    }, function(start, end) {
      return (end - start) / durationHour;
    }, function(date) {
      return date.getHours();
    });
    var hours = hour.range;
    var day = newInterval(function(date) {
      date.setHours(0, 0, 0, 0);
    }, function(date, step) {
      date.setDate(date.getDate() + step);
    }, function(start, end) {
      return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay;
    }, function(date) {
      return date.getDate() - 1;
    });
    var days = day.range;
    function weekday(i) {
      return newInterval(function(date) {
        date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
        date.setHours(0, 0, 0, 0);
      }, function(date, step) {
        date.setDate(date.getDate() + step * 7);
      }, function(start, end) {
        return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
      });
    }
    var sunday = weekday(0);
    var monday = weekday(1);
    var tuesday = weekday(2);
    var wednesday = weekday(3);
    var thursday = weekday(4);
    var friday = weekday(5);
    var saturday = weekday(6);
    var sundays = sunday.range;
    var mondays = monday.range;
    var tuesdays = tuesday.range;
    var wednesdays = wednesday.range;
    var thursdays = thursday.range;
    var fridays = friday.range;
    var saturdays = saturday.range;
    var month = newInterval(function(date) {
      date.setDate(1);
      date.setHours(0, 0, 0, 0);
    }, function(date, step) {
      date.setMonth(date.getMonth() + step);
    }, function(start, end) {
      return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
    }, function(date) {
      return date.getMonth();
    });
    var months = month.range;
    var year = newInterval(function(date) {
      date.setMonth(0, 1);
      date.setHours(0, 0, 0, 0);
    }, function(date, step) {
      date.setFullYear(date.getFullYear() + step);
    }, function(start, end) {
      return end.getFullYear() - start.getFullYear();
    }, function(date) {
      return date.getFullYear();
    });
    year.every = function(k) {
      return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
        date.setFullYear(Math.floor(date.getFullYear() / k) * k);
        date.setMonth(0, 1);
        date.setHours(0, 0, 0, 0);
      }, function(date, step) {
        date.setFullYear(date.getFullYear() + step * k);
      });
    };
    var years = year.range;
    var utcMinute = newInterval(function(date) {
      date.setUTCSeconds(0, 0);
    }, function(date, step) {
      date.setTime(+date + step * durationMinute);
    }, function(start, end) {
      return (end - start) / durationMinute;
    }, function(date) {
      return date.getUTCMinutes();
    });
    var utcMinutes = utcMinute.range;
    var utcHour = newInterval(function(date) {
      date.setUTCMinutes(0, 0, 0);
    }, function(date, step) {
      date.setTime(+date + step * durationHour);
    }, function(start, end) {
      return (end - start) / durationHour;
    }, function(date) {
      return date.getUTCHours();
    });
    var utcHours = utcHour.range;
    var utcDay = newInterval(function(date) {
      date.setUTCHours(0, 0, 0, 0);
    }, function(date, step) {
      date.setUTCDate(date.getUTCDate() + step);
    }, function(start, end) {
      return (end - start) / durationDay;
    }, function(date) {
      return date.getUTCDate() - 1;
    });
    var utcDays = utcDay.range;
    function utcWeekday(i) {
      return newInterval(function(date) {
        date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
        date.setUTCHours(0, 0, 0, 0);
      }, function(date, step) {
        date.setUTCDate(date.getUTCDate() + step * 7);
      }, function(start, end) {
        return (end - start) / durationWeek;
      });
    }
    var utcSunday = utcWeekday(0);
    var utcMonday = utcWeekday(1);
    var utcTuesday = utcWeekday(2);
    var utcWednesday = utcWeekday(3);
    var utcThursday = utcWeekday(4);
    var utcFriday = utcWeekday(5);
    var utcSaturday = utcWeekday(6);
    var utcSundays = utcSunday.range;
    var utcMondays = utcMonday.range;
    var utcTuesdays = utcTuesday.range;
    var utcWednesdays = utcWednesday.range;
    var utcThursdays = utcThursday.range;
    var utcFridays = utcFriday.range;
    var utcSaturdays = utcSaturday.range;
    var utcMonth = newInterval(function(date) {
      date.setUTCDate(1);
      date.setUTCHours(0, 0, 0, 0);
    }, function(date, step) {
      date.setUTCMonth(date.getUTCMonth() + step);
    }, function(start, end) {
      return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
    }, function(date) {
      return date.getUTCMonth();
    });
    var utcMonths = utcMonth.range;
    var utcYear = newInterval(function(date) {
      date.setUTCMonth(0, 1);
      date.setUTCHours(0, 0, 0, 0);
    }, function(date, step) {
      date.setUTCFullYear(date.getUTCFullYear() + step);
    }, function(start, end) {
      return end.getUTCFullYear() - start.getUTCFullYear();
    }, function(date) {
      return date.getUTCFullYear();
    });
    utcYear.every = function(k) {
      return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
        date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
        date.setUTCMonth(0, 1);
        date.setUTCHours(0, 0, 0, 0);
      }, function(date, step) {
        date.setUTCFullYear(date.getUTCFullYear() + step * k);
      });
    };
    var utcYears = utcYear.range;
    exports.timeInterval = newInterval;
    exports.timeMillisecond = millisecond;
    exports.timeMilliseconds = milliseconds;
    exports.utcMillisecond = millisecond;
    exports.utcMilliseconds = milliseconds;
    exports.timeSecond = second;
    exports.timeSeconds = seconds;
    exports.utcSecond = second;
    exports.utcSeconds = seconds;
    exports.timeMinute = minute;
    exports.timeMinutes = minutes;
    exports.timeHour = hour;
    exports.timeHours = hours;
    exports.timeDay = day;
    exports.timeDays = days;
    exports.timeWeek = sunday;
    exports.timeWeeks = sundays;
    exports.timeSunday = sunday;
    exports.timeSundays = sundays;
    exports.timeMonday = monday;
    exports.timeMondays = mondays;
    exports.timeTuesday = tuesday;
    exports.timeTuesdays = tuesdays;
    exports.timeWednesday = wednesday;
    exports.timeWednesdays = wednesdays;
    exports.timeThursday = thursday;
    exports.timeThursdays = thursdays;
    exports.timeFriday = friday;
    exports.timeFridays = fridays;
    exports.timeSaturday = saturday;
    exports.timeSaturdays = saturdays;
    exports.timeMonth = month;
    exports.timeMonths = months;
    exports.timeYear = year;
    exports.timeYears = years;
    exports.utcMinute = utcMinute;
    exports.utcMinutes = utcMinutes;
    exports.utcHour = utcHour;
    exports.utcHours = utcHours;
    exports.utcDay = utcDay;
    exports.utcDays = utcDays;
    exports.utcWeek = utcSunday;
    exports.utcWeeks = utcSundays;
    exports.utcSunday = utcSunday;
    exports.utcSundays = utcSundays;
    exports.utcMonday = utcMonday;
    exports.utcMondays = utcMondays;
    exports.utcTuesday = utcTuesday;
    exports.utcTuesdays = utcTuesdays;
    exports.utcWednesday = utcWednesday;
    exports.utcWednesdays = utcWednesdays;
    exports.utcThursday = utcThursday;
    exports.utcThursdays = utcThursdays;
    exports.utcFriday = utcFriday;
    exports.utcFridays = utcFridays;
    exports.utcSaturday = utcSaturday;
    exports.utcSaturdays = utcSaturdays;
    exports.utcMonth = utcMonth;
    exports.utcMonths = utcMonths;
    exports.utcYear = utcYear;
    exports.utcYears = utcYears;
    Object.defineProperty(exports, '__esModule', {value: true});
  }));
  return module.exports;
});

$__System.registerDynamic("25", ["24"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('24');
  return module.exports;
});

$__System.registerDynamic("26", ["25"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  (function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, $__require('25')) : typeof define === 'function' && define.amd ? define(['exports', 'd3-time'], factory) : (factory((global.d3 = global.d3 || {}), global.d3));
  }(this, function(exports, d3Time) {
    'use strict';
    function localDate(d) {
      if (0 <= d.y && d.y < 100) {
        var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
        date.setFullYear(d.y);
        return date;
      }
      return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
    }
    function utcDate(d) {
      if (0 <= d.y && d.y < 100) {
        var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
        date.setUTCFullYear(d.y);
        return date;
      }
      return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
    }
    function newYear(y) {
      return {
        y: y,
        m: 0,
        d: 1,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      };
    }
    function formatLocale(locale) {
      var locale_dateTime = locale.dateTime,
          locale_date = locale.date,
          locale_time = locale.time,
          locale_periods = locale.periods,
          locale_weekdays = locale.days,
          locale_shortWeekdays = locale.shortDays,
          locale_months = locale.months,
          locale_shortMonths = locale.shortMonths;
      var periodRe = formatRe(locale_periods),
          periodLookup = formatLookup(locale_periods),
          weekdayRe = formatRe(locale_weekdays),
          weekdayLookup = formatLookup(locale_weekdays),
          shortWeekdayRe = formatRe(locale_shortWeekdays),
          shortWeekdayLookup = formatLookup(locale_shortWeekdays),
          monthRe = formatRe(locale_months),
          monthLookup = formatLookup(locale_months),
          shortMonthRe = formatRe(locale_shortMonths),
          shortMonthLookup = formatLookup(locale_shortMonths);
      var formats = {
        "a": formatShortWeekday,
        "A": formatWeekday,
        "b": formatShortMonth,
        "B": formatMonth,
        "c": null,
        "d": formatDayOfMonth,
        "e": formatDayOfMonth,
        "H": formatHour24,
        "I": formatHour12,
        "j": formatDayOfYear,
        "L": formatMilliseconds,
        "m": formatMonthNumber,
        "M": formatMinutes,
        "p": formatPeriod,
        "S": formatSeconds,
        "U": formatWeekNumberSunday,
        "w": formatWeekdayNumber,
        "W": formatWeekNumberMonday,
        "x": null,
        "X": null,
        "y": formatYear,
        "Y": formatFullYear,
        "Z": formatZone,
        "%": formatLiteralPercent
      };
      var utcFormats = {
        "a": formatUTCShortWeekday,
        "A": formatUTCWeekday,
        "b": formatUTCShortMonth,
        "B": formatUTCMonth,
        "c": null,
        "d": formatUTCDayOfMonth,
        "e": formatUTCDayOfMonth,
        "H": formatUTCHour24,
        "I": formatUTCHour12,
        "j": formatUTCDayOfYear,
        "L": formatUTCMilliseconds,
        "m": formatUTCMonthNumber,
        "M": formatUTCMinutes,
        "p": formatUTCPeriod,
        "S": formatUTCSeconds,
        "U": formatUTCWeekNumberSunday,
        "w": formatUTCWeekdayNumber,
        "W": formatUTCWeekNumberMonday,
        "x": null,
        "X": null,
        "y": formatUTCYear,
        "Y": formatUTCFullYear,
        "Z": formatUTCZone,
        "%": formatLiteralPercent
      };
      var parses = {
        "a": parseShortWeekday,
        "A": parseWeekday,
        "b": parseShortMonth,
        "B": parseMonth,
        "c": parseLocaleDateTime,
        "d": parseDayOfMonth,
        "e": parseDayOfMonth,
        "H": parseHour24,
        "I": parseHour24,
        "j": parseDayOfYear,
        "L": parseMilliseconds,
        "m": parseMonthNumber,
        "M": parseMinutes,
        "p": parsePeriod,
        "S": parseSeconds,
        "U": parseWeekNumberSunday,
        "w": parseWeekdayNumber,
        "W": parseWeekNumberMonday,
        "x": parseLocaleDate,
        "X": parseLocaleTime,
        "y": parseYear,
        "Y": parseFullYear,
        "Z": parseZone,
        "%": parseLiteralPercent
      };
      formats.x = newFormat(locale_date, formats);
      formats.X = newFormat(locale_time, formats);
      formats.c = newFormat(locale_dateTime, formats);
      utcFormats.x = newFormat(locale_date, utcFormats);
      utcFormats.X = newFormat(locale_time, utcFormats);
      utcFormats.c = newFormat(locale_dateTime, utcFormats);
      function newFormat(specifier, formats) {
        return function(date) {
          var string = [],
              i = -1,
              j = 0,
              n = specifier.length,
              c,
              pad,
              format;
          if (!(date instanceof Date))
            date = new Date(+date);
          while (++i < n) {
            if (specifier.charCodeAt(i) === 37) {
              string.push(specifier.slice(j, i));
              if ((pad = pads[c = specifier.charAt(++i)]) != null)
                c = specifier.charAt(++i);
              else
                pad = c === "e" ? " " : "0";
              if (format = formats[c])
                c = format(date, pad);
              string.push(c);
              j = i + 1;
            }
          }
          string.push(specifier.slice(j, i));
          return string.join("");
        };
      }
      function newParse(specifier, newDate) {
        return function(string) {
          var d = newYear(1900),
              i = parseSpecifier(d, specifier, string += "", 0);
          if (i != string.length)
            return null;
          if ("p" in d)
            d.H = d.H % 12 + d.p * 12;
          if ("W" in d || "U" in d) {
            if (!("w" in d))
              d.w = "W" in d ? 1 : 0;
            var day = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
            d.m = 0;
            d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
          }
          if ("Z" in d) {
            d.H += d.Z / 100 | 0;
            d.M += d.Z % 100;
            return utcDate(d);
          }
          return newDate(d);
        };
      }
      function parseSpecifier(d, specifier, string, j) {
        var i = 0,
            n = specifier.length,
            m = string.length,
            c,
            parse;
        while (i < n) {
          if (j >= m)
            return -1;
          c = specifier.charCodeAt(i++);
          if (c === 37) {
            c = specifier.charAt(i++);
            parse = parses[c in pads ? specifier.charAt(i++) : c];
            if (!parse || ((j = parse(d, string, j)) < 0))
              return -1;
          } else if (c != string.charCodeAt(j++)) {
            return -1;
          }
        }
        return j;
      }
      function parsePeriod(d, string, i) {
        var n = periodRe.exec(string.slice(i));
        return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
      }
      function parseShortWeekday(d, string, i) {
        var n = shortWeekdayRe.exec(string.slice(i));
        return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
      }
      function parseWeekday(d, string, i) {
        var n = weekdayRe.exec(string.slice(i));
        return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
      }
      function parseShortMonth(d, string, i) {
        var n = shortMonthRe.exec(string.slice(i));
        return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
      }
      function parseMonth(d, string, i) {
        var n = monthRe.exec(string.slice(i));
        return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
      }
      function parseLocaleDateTime(d, string, i) {
        return parseSpecifier(d, locale_dateTime, string, i);
      }
      function parseLocaleDate(d, string, i) {
        return parseSpecifier(d, locale_date, string, i);
      }
      function parseLocaleTime(d, string, i) {
        return parseSpecifier(d, locale_time, string, i);
      }
      function formatShortWeekday(d) {
        return locale_shortWeekdays[d.getDay()];
      }
      function formatWeekday(d) {
        return locale_weekdays[d.getDay()];
      }
      function formatShortMonth(d) {
        return locale_shortMonths[d.getMonth()];
      }
      function formatMonth(d) {
        return locale_months[d.getMonth()];
      }
      function formatPeriod(d) {
        return locale_periods[+(d.getHours() >= 12)];
      }
      function formatUTCShortWeekday(d) {
        return locale_shortWeekdays[d.getUTCDay()];
      }
      function formatUTCWeekday(d) {
        return locale_weekdays[d.getUTCDay()];
      }
      function formatUTCShortMonth(d) {
        return locale_shortMonths[d.getUTCMonth()];
      }
      function formatUTCMonth(d) {
        return locale_months[d.getUTCMonth()];
      }
      function formatUTCPeriod(d) {
        return locale_periods[+(d.getUTCHours() >= 12)];
      }
      return {
        format: function(specifier) {
          var f = newFormat(specifier += "", formats);
          f.toString = function() {
            return specifier;
          };
          return f;
        },
        parse: function(specifier) {
          var p = newParse(specifier += "", localDate);
          p.toString = function() {
            return specifier;
          };
          return p;
        },
        utcFormat: function(specifier) {
          var f = newFormat(specifier += "", utcFormats);
          f.toString = function() {
            return specifier;
          };
          return f;
        },
        utcParse: function(specifier) {
          var p = newParse(specifier, utcDate);
          p.toString = function() {
            return specifier;
          };
          return p;
        }
      };
    }
    var pads = {
      "-": "",
      "_": " ",
      "0": "0"
    };
    var numberRe = /^\s*\d+/;
    var percentRe = /^%/;
    var requoteRe = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
    function pad(value, fill, width) {
      var sign = value < 0 ? "-" : "",
          string = (sign ? -value : value) + "",
          length = string.length;
      return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
    }
    function requote(s) {
      return s.replace(requoteRe, "\\$&");
    }
    function formatRe(names) {
      return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
    }
    function formatLookup(names) {
      var map = {},
          i = -1,
          n = names.length;
      while (++i < n)
        map[names[i].toLowerCase()] = i;
      return map;
    }
    function parseWeekdayNumber(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 1));
      return n ? (d.w = +n[0], i + n[0].length) : -1;
    }
    function parseWeekNumberSunday(d, string, i) {
      var n = numberRe.exec(string.slice(i));
      return n ? (d.U = +n[0], i + n[0].length) : -1;
    }
    function parseWeekNumberMonday(d, string, i) {
      var n = numberRe.exec(string.slice(i));
      return n ? (d.W = +n[0], i + n[0].length) : -1;
    }
    function parseFullYear(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 4));
      return n ? (d.y = +n[0], i + n[0].length) : -1;
    }
    function parseYear(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
    }
    function parseZone(d, string, i) {
      var n = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(string.slice(i, i + 6));
      return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
    }
    function parseMonthNumber(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
    }
    function parseDayOfMonth(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.d = +n[0], i + n[0].length) : -1;
    }
    function parseDayOfYear(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 3));
      return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
    }
    function parseHour24(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.H = +n[0], i + n[0].length) : -1;
    }
    function parseMinutes(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.M = +n[0], i + n[0].length) : -1;
    }
    function parseSeconds(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.S = +n[0], i + n[0].length) : -1;
    }
    function parseMilliseconds(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 3));
      return n ? (d.L = +n[0], i + n[0].length) : -1;
    }
    function parseLiteralPercent(d, string, i) {
      var n = percentRe.exec(string.slice(i, i + 1));
      return n ? i + n[0].length : -1;
    }
    function formatDayOfMonth(d, p) {
      return pad(d.getDate(), p, 2);
    }
    function formatHour24(d, p) {
      return pad(d.getHours(), p, 2);
    }
    function formatHour12(d, p) {
      return pad(d.getHours() % 12 || 12, p, 2);
    }
    function formatDayOfYear(d, p) {
      return pad(1 + d3Time.timeDay.count(d3Time.timeYear(d), d), p, 3);
    }
    function formatMilliseconds(d, p) {
      return pad(d.getMilliseconds(), p, 3);
    }
    function formatMonthNumber(d, p) {
      return pad(d.getMonth() + 1, p, 2);
    }
    function formatMinutes(d, p) {
      return pad(d.getMinutes(), p, 2);
    }
    function formatSeconds(d, p) {
      return pad(d.getSeconds(), p, 2);
    }
    function formatWeekNumberSunday(d, p) {
      return pad(d3Time.timeSunday.count(d3Time.timeYear(d), d), p, 2);
    }
    function formatWeekdayNumber(d) {
      return d.getDay();
    }
    function formatWeekNumberMonday(d, p) {
      return pad(d3Time.timeMonday.count(d3Time.timeYear(d), d), p, 2);
    }
    function formatYear(d, p) {
      return pad(d.getFullYear() % 100, p, 2);
    }
    function formatFullYear(d, p) {
      return pad(d.getFullYear() % 10000, p, 4);
    }
    function formatZone(d) {
      var z = d.getTimezoneOffset();
      return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
    }
    function formatUTCDayOfMonth(d, p) {
      return pad(d.getUTCDate(), p, 2);
    }
    function formatUTCHour24(d, p) {
      return pad(d.getUTCHours(), p, 2);
    }
    function formatUTCHour12(d, p) {
      return pad(d.getUTCHours() % 12 || 12, p, 2);
    }
    function formatUTCDayOfYear(d, p) {
      return pad(1 + d3Time.utcDay.count(d3Time.utcYear(d), d), p, 3);
    }
    function formatUTCMilliseconds(d, p) {
      return pad(d.getUTCMilliseconds(), p, 3);
    }
    function formatUTCMonthNumber(d, p) {
      return pad(d.getUTCMonth() + 1, p, 2);
    }
    function formatUTCMinutes(d, p) {
      return pad(d.getUTCMinutes(), p, 2);
    }
    function formatUTCSeconds(d, p) {
      return pad(d.getUTCSeconds(), p, 2);
    }
    function formatUTCWeekNumberSunday(d, p) {
      return pad(d3Time.utcSunday.count(d3Time.utcYear(d), d), p, 2);
    }
    function formatUTCWeekdayNumber(d) {
      return d.getUTCDay();
    }
    function formatUTCWeekNumberMonday(d, p) {
      return pad(d3Time.utcMonday.count(d3Time.utcYear(d), d), p, 2);
    }
    function formatUTCYear(d, p) {
      return pad(d.getUTCFullYear() % 100, p, 2);
    }
    function formatUTCFullYear(d, p) {
      return pad(d.getUTCFullYear() % 10000, p, 4);
    }
    function formatUTCZone() {
      return "+0000";
    }
    function formatLiteralPercent() {
      return "%";
    }
    var locale;
    exports.timeFormat;
    exports.timeParse;
    exports.utcFormat;
    exports.utcParse;
    defaultLocale({
      dateTime: "%x, %X",
      date: "%-m/%-d/%Y",
      time: "%-I:%M:%S %p",
      periods: ["AM", "PM"],
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    function defaultLocale(definition) {
      locale = formatLocale(definition);
      exports.timeFormat = locale.format;
      exports.timeParse = locale.parse;
      exports.utcFormat = locale.utcFormat;
      exports.utcParse = locale.utcParse;
      return locale;
    }
    var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";
    function formatIsoNative(date) {
      return date.toISOString();
    }
    var formatIso = Date.prototype.toISOString ? formatIsoNative : exports.utcFormat(isoSpecifier);
    function parseIsoNative(string) {
      var date = new Date(string);
      return isNaN(date) ? null : date;
    }
    var parseIso = +new Date("2000-01-01T00:00:00.000Z") ? parseIsoNative : exports.utcParse(isoSpecifier);
    exports.timeFormatDefaultLocale = defaultLocale;
    exports.timeFormatLocale = formatLocale;
    exports.isoFormat = formatIso;
    exports.isoParse = parseIso;
    Object.defineProperty(exports, '__esModule', {value: true});
  }));
  return module.exports;
});

$__System.registerDynamic("27", ["26"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('26');
  return module.exports;
});

$__System.registerDynamic("28", ["29", "2a", "2c", "23", "25", "27", "2b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  (function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, $__require('29'), $__require('2a'), $__require('2c'), $__require('23'), $__require('25'), $__require('27'), $__require('2b')) : typeof define === 'function' && define.amd ? define(['exports', 'd3-array', 'd3-collection', 'd3-interpolate', 'd3-format', 'd3-time', 'd3-time-format', 'd3-color'], factory) : (factory((global.d3 = global.d3 || {}), global.d3, global.d3, global.d3, global.d3, global.d3, global.d3, global.d3));
  }(this, function(exports, d3Array, d3Collection, d3Interpolate, d3Format, d3Time, d3TimeFormat, d3Color) {
    'use strict';
    var array = Array.prototype;
    var map$1 = array.map;
    var slice = array.slice;
    var implicit = {name: "implicit"};
    function ordinal(range) {
      var index = d3Collection.map(),
          domain = [],
          unknown = implicit;
      range = range == null ? [] : slice.call(range);
      function scale(d) {
        var key = d + "",
            i = index.get(key);
        if (!i) {
          if (unknown !== implicit)
            return unknown;
          index.set(key, i = domain.push(d));
        }
        return range[(i - 1) % range.length];
      }
      scale.domain = function(_) {
        if (!arguments.length)
          return domain.slice();
        domain = [], index = d3Collection.map();
        var i = -1,
            n = _.length,
            d,
            key;
        while (++i < n)
          if (!index.has(key = (d = _[i]) + ""))
            index.set(key, domain.push(d));
        return scale;
      };
      scale.range = function(_) {
        return arguments.length ? (range = slice.call(_), scale) : range.slice();
      };
      scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
      };
      scale.copy = function() {
        return ordinal().domain(domain).range(range).unknown(unknown);
      };
      return scale;
    }
    function band() {
      var scale = ordinal().unknown(undefined),
          domain = scale.domain,
          ordinalRange = scale.range,
          range = [0, 1],
          step,
          bandwidth,
          round = false,
          paddingInner = 0,
          paddingOuter = 0,
          align = 0.5;
      delete scale.unknown;
      function rescale() {
        var n = domain().length,
            reverse = range[1] < range[0],
            start = range[reverse - 0],
            stop = range[1 - reverse];
        step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
        if (round)
          step = Math.floor(step);
        start += (stop - start - step * (n - paddingInner)) * align;
        bandwidth = step * (1 - paddingInner);
        if (round)
          start = Math.round(start), bandwidth = Math.round(bandwidth);
        var values = d3Array.range(n).map(function(i) {
          return start + step * i;
        });
        return ordinalRange(reverse ? values.reverse() : values);
      }
      scale.domain = function(_) {
        return arguments.length ? (domain(_), rescale()) : domain();
      };
      scale.range = function(_) {
        return arguments.length ? (range = [+_[0], +_[1]], rescale()) : range.slice();
      };
      scale.rangeRound = function(_) {
        return range = [+_[0], +_[1]], round = true, rescale();
      };
      scale.bandwidth = function() {
        return bandwidth;
      };
      scale.step = function() {
        return step;
      };
      scale.round = function(_) {
        return arguments.length ? (round = !!_, rescale()) : round;
      };
      scale.padding = function(_) {
        return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
      };
      scale.paddingInner = function(_) {
        return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
      };
      scale.paddingOuter = function(_) {
        return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
      };
      scale.align = function(_) {
        return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
      };
      scale.copy = function() {
        return band().domain(domain()).range(range).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
      };
      return rescale();
    }
    function pointish(scale) {
      var copy = scale.copy;
      scale.padding = scale.paddingOuter;
      delete scale.paddingInner;
      delete scale.paddingOuter;
      scale.copy = function() {
        return pointish(copy());
      };
      return scale;
    }
    function point() {
      return pointish(band().paddingInner(1));
    }
    function constant(x) {
      return function() {
        return x;
      };
    }
    function number(x) {
      return +x;
    }
    var unit = [0, 1];
    function deinterpolate(a, b) {
      return (b -= (a = +a)) ? function(x) {
        return (x - a) / b;
      } : constant(b);
    }
    function deinterpolateClamp(deinterpolate) {
      return function(a, b) {
        var d = deinterpolate(a = +a, b = +b);
        return function(x) {
          return x <= a ? 0 : x >= b ? 1 : d(x);
        };
      };
    }
    function reinterpolateClamp(reinterpolate) {
      return function(a, b) {
        var r = reinterpolate(a = +a, b = +b);
        return function(t) {
          return t <= 0 ? a : t >= 1 ? b : r(t);
        };
      };
    }
    function bimap(domain, range, deinterpolate, reinterpolate) {
      var d0 = domain[0],
          d1 = domain[1],
          r0 = range[0],
          r1 = range[1];
      if (d1 < d0)
        d0 = deinterpolate(d1, d0), r0 = reinterpolate(r1, r0);
      else
        d0 = deinterpolate(d0, d1), r0 = reinterpolate(r0, r1);
      return function(x) {
        return r0(d0(x));
      };
    }
    function polymap(domain, range, deinterpolate, reinterpolate) {
      var j = Math.min(domain.length, range.length) - 1,
          d = new Array(j),
          r = new Array(j),
          i = -1;
      if (domain[j] < domain[0]) {
        domain = domain.slice().reverse();
        range = range.slice().reverse();
      }
      while (++i < j) {
        d[i] = deinterpolate(domain[i], domain[i + 1]);
        r[i] = reinterpolate(range[i], range[i + 1]);
      }
      return function(x) {
        var i = d3Array.bisect(domain, x, 1, j) - 1;
        return r[i](d[i](x));
      };
    }
    function copy(source, target) {
      return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp());
    }
    function continuous(deinterpolate$$, reinterpolate) {
      var domain = unit,
          range = unit,
          interpolate = d3Interpolate.interpolate,
          clamp = false,
          piecewise,
          output,
          input;
      function rescale() {
        piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
        output = input = null;
        return scale;
      }
      function scale(x) {
        return (output || (output = piecewise(domain, range, clamp ? deinterpolateClamp(deinterpolate$$) : deinterpolate$$, interpolate)))(+x);
      }
      scale.invert = function(y) {
        return (input || (input = piecewise(range, domain, deinterpolate, clamp ? reinterpolateClamp(reinterpolate) : reinterpolate)))(+y);
      };
      scale.domain = function(_) {
        return arguments.length ? (domain = map$1.call(_, number), rescale()) : domain.slice();
      };
      scale.range = function(_) {
        return arguments.length ? (range = slice.call(_), rescale()) : range.slice();
      };
      scale.rangeRound = function(_) {
        return range = slice.call(_), interpolate = d3Interpolate.interpolateRound, rescale();
      };
      scale.clamp = function(_) {
        return arguments.length ? (clamp = !!_, rescale()) : clamp;
      };
      scale.interpolate = function(_) {
        return arguments.length ? (interpolate = _, rescale()) : interpolate;
      };
      return rescale();
    }
    function tickFormat(domain, count, specifier) {
      var start = domain[0],
          stop = domain[domain.length - 1],
          step = d3Array.tickStep(start, stop, count == null ? 10 : count),
          precision;
      specifier = d3Format.formatSpecifier(specifier == null ? ",f" : specifier);
      switch (specifier.type) {
        case "s":
          {
            var value = Math.max(Math.abs(start), Math.abs(stop));
            if (specifier.precision == null && !isNaN(precision = d3Format.precisionPrefix(step, value)))
              specifier.precision = precision;
            return d3Format.formatPrefix(specifier, value);
          }
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          {
            if (specifier.precision == null && !isNaN(precision = d3Format.precisionRound(step, Math.max(Math.abs(start), Math.abs(stop)))))
              specifier.precision = precision - (specifier.type === "e");
            break;
          }
        case "f":
        case "%":
          {
            if (specifier.precision == null && !isNaN(precision = d3Format.precisionFixed(step)))
              specifier.precision = precision - (specifier.type === "%") * 2;
            break;
          }
      }
      return d3Format.format(specifier);
    }
    function linearish(scale) {
      var domain = scale.domain;
      scale.ticks = function(count) {
        var d = domain();
        return d3Array.ticks(d[0], d[d.length - 1], count == null ? 10 : count);
      };
      scale.tickFormat = function(count, specifier) {
        return tickFormat(domain(), count, specifier);
      };
      scale.nice = function(count) {
        var d = domain(),
            i = d.length - 1,
            n = count == null ? 10 : count,
            start = d[0],
            stop = d[i],
            step = d3Array.tickStep(start, stop, n);
        if (step) {
          step = d3Array.tickStep(Math.floor(start / step) * step, Math.ceil(stop / step) * step, n);
          d[0] = Math.floor(start / step) * step;
          d[i] = Math.ceil(stop / step) * step;
          domain(d);
        }
        return scale;
      };
      return scale;
    }
    function linear() {
      var scale = continuous(deinterpolate, d3Interpolate.interpolateNumber);
      scale.copy = function() {
        return copy(scale, linear());
      };
      return linearish(scale);
    }
    function identity() {
      var domain = [0, 1];
      function scale(x) {
        return +x;
      }
      scale.invert = scale;
      scale.domain = scale.range = function(_) {
        return arguments.length ? (domain = map$1.call(_, number), scale) : domain.slice();
      };
      scale.copy = function() {
        return identity().domain(domain);
      };
      return linearish(scale);
    }
    function nice(domain, interval) {
      domain = domain.slice();
      var i0 = 0,
          i1 = domain.length - 1,
          x0 = domain[i0],
          x1 = domain[i1],
          t;
      if (x1 < x0) {
        t = i0, i0 = i1, i1 = t;
        t = x0, x0 = x1, x1 = t;
      }
      domain[i0] = interval.floor(x0);
      domain[i1] = interval.ceil(x1);
      return domain;
    }
    function deinterpolate$1(a, b) {
      return (b = Math.log(b / a)) ? function(x) {
        return Math.log(x / a) / b;
      } : constant(b);
    }
    function reinterpolate(a, b) {
      return a < 0 ? function(t) {
        return -Math.pow(-b, t) * Math.pow(-a, 1 - t);
      } : function(t) {
        return Math.pow(b, t) * Math.pow(a, 1 - t);
      };
    }
    function pow10(x) {
      return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
    }
    function powp(base) {
      return base === 10 ? pow10 : base === Math.E ? Math.exp : function(x) {
        return Math.pow(base, x);
      };
    }
    function logp(base) {
      return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), function(x) {
        return Math.log(x) / base;
      });
    }
    function reflect(f) {
      return function(x) {
        return -f(-x);
      };
    }
    function log() {
      var scale = continuous(deinterpolate$1, reinterpolate).domain([1, 10]),
          domain = scale.domain,
          base = 10,
          logs = logp(10),
          pows = powp(10);
      function rescale() {
        logs = logp(base), pows = powp(base);
        if (domain()[0] < 0)
          logs = reflect(logs), pows = reflect(pows);
        return scale;
      }
      scale.base = function(_) {
        return arguments.length ? (base = +_, rescale()) : base;
      };
      scale.domain = function(_) {
        return arguments.length ? (domain(_), rescale()) : domain();
      };
      scale.ticks = function(count) {
        var d = domain(),
            u = d[0],
            v = d[d.length - 1],
            r;
        if (r = v < u)
          i = u, u = v, v = i;
        var i = logs(u),
            j = logs(v),
            p,
            k,
            t,
            n = count == null ? 10 : +count,
            z = [];
        if (!(base % 1) && j - i < n) {
          i = Math.round(i) - 1, j = Math.round(j) + 1;
          if (u > 0)
            for (; i < j; ++i) {
              for (k = 1, p = pows(i); k < base; ++k) {
                t = p * k;
                if (t < u)
                  continue;
                if (t > v)
                  break;
                z.push(t);
              }
            }
          else
            for (; i < j; ++i) {
              for (k = base - 1, p = pows(i); k >= 1; --k) {
                t = p * k;
                if (t < u)
                  continue;
                if (t > v)
                  break;
                z.push(t);
              }
            }
        } else {
          z = d3Array.ticks(i, j, Math.min(j - i, n)).map(pows);
        }
        return r ? z.reverse() : z;
      };
      scale.tickFormat = function(count, specifier) {
        if (specifier == null)
          specifier = base === 10 ? ".0e" : ",";
        if (typeof specifier !== "function")
          specifier = d3Format.format(specifier);
        if (count === Infinity)
          return specifier;
        if (count == null)
          count = 10;
        var k = Math.max(1, base * count / scale.ticks().length);
        return function(d) {
          var i = d / pows(Math.round(logs(d)));
          if (i * base < base - 0.5)
            i *= base;
          return i <= k ? specifier(d) : "";
        };
      };
      scale.nice = function() {
        return domain(nice(domain(), {
          floor: function(x) {
            return pows(Math.floor(logs(x)));
          },
          ceil: function(x) {
            return pows(Math.ceil(logs(x)));
          }
        }));
      };
      scale.copy = function() {
        return copy(scale, log().base(base));
      };
      return scale;
    }
    function raise(x, exponent) {
      return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
    }
    function pow() {
      var exponent = 1,
          scale = continuous(deinterpolate, reinterpolate),
          domain = scale.domain;
      function deinterpolate(a, b) {
        return (b = raise(b, exponent) - (a = raise(a, exponent))) ? function(x) {
          return (raise(x, exponent) - a) / b;
        } : constant(b);
      }
      function reinterpolate(a, b) {
        b = raise(b, exponent) - (a = raise(a, exponent));
        return function(t) {
          return raise(a + b * t, 1 / exponent);
        };
      }
      scale.exponent = function(_) {
        return arguments.length ? (exponent = +_, domain(domain())) : exponent;
      };
      scale.copy = function() {
        return copy(scale, pow().exponent(exponent));
      };
      return linearish(scale);
    }
    function sqrt() {
      return pow().exponent(0.5);
    }
    function quantile$1() {
      var domain = [],
          range = [],
          thresholds = [];
      function rescale() {
        var i = 0,
            n = Math.max(1, range.length);
        thresholds = new Array(n - 1);
        while (++i < n)
          thresholds[i - 1] = d3Array.quantile(domain, i / n);
        return scale;
      }
      function scale(x) {
        if (!isNaN(x = +x))
          return range[d3Array.bisect(thresholds, x)];
      }
      scale.invertExtent = function(y) {
        var i = range.indexOf(y);
        return i < 0 ? [NaN, NaN] : [i > 0 ? thresholds[i - 1] : domain[0], i < thresholds.length ? thresholds[i] : domain[domain.length - 1]];
      };
      scale.domain = function(_) {
        if (!arguments.length)
          return domain.slice();
        domain = [];
        for (var i = 0,
            n = _.length,
            d; i < n; ++i)
          if (d = _[i], d != null && !isNaN(d = +d))
            domain.push(d);
        domain.sort(d3Array.ascending);
        return rescale();
      };
      scale.range = function(_) {
        return arguments.length ? (range = slice.call(_), rescale()) : range.slice();
      };
      scale.quantiles = function() {
        return thresholds.slice();
      };
      scale.copy = function() {
        return quantile$1().domain(domain).range(range);
      };
      return scale;
    }
    function quantize() {
      var x0 = 0,
          x1 = 1,
          n = 1,
          domain = [0.5],
          range = [0, 1];
      function scale(x) {
        if (x <= x)
          return range[d3Array.bisect(domain, x, 0, n)];
      }
      function rescale() {
        var i = -1;
        domain = new Array(n);
        while (++i < n)
          domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
        return scale;
      }
      scale.domain = function(_) {
        return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
      };
      scale.range = function(_) {
        return arguments.length ? (n = (range = slice.call(_)).length - 1, rescale()) : range.slice();
      };
      scale.invertExtent = function(y) {
        var i = range.indexOf(y);
        return i < 0 ? [NaN, NaN] : i < 1 ? [x0, domain[0]] : i >= n ? [domain[n - 1], x1] : [domain[i - 1], domain[i]];
      };
      scale.copy = function() {
        return quantize().domain([x0, x1]).range(range);
      };
      return linearish(scale);
    }
    function threshold() {
      var domain = [0.5],
          range = [0, 1],
          n = 1;
      function scale(x) {
        if (x <= x)
          return range[d3Array.bisect(domain, x, 0, n)];
      }
      scale.domain = function(_) {
        return arguments.length ? (domain = slice.call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
      };
      scale.range = function(_) {
        return arguments.length ? (range = slice.call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
      };
      scale.invertExtent = function(y) {
        var i = range.indexOf(y);
        return [domain[i - 1], domain[i]];
      };
      scale.copy = function() {
        return threshold().domain(domain).range(range);
      };
      return scale;
    }
    var durationSecond = 1000;
    var durationMinute = durationSecond * 60;
    var durationHour = durationMinute * 60;
    var durationDay = durationHour * 24;
    var durationWeek = durationDay * 7;
    var durationMonth = durationDay * 30;
    var durationYear = durationDay * 365;
    function date(t) {
      return new Date(t);
    }
    function number$1(t) {
      return t instanceof Date ? +t : +new Date(+t);
    }
    function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
      var scale = continuous(deinterpolate, d3Interpolate.interpolateNumber),
          invert = scale.invert,
          domain = scale.domain;
      var formatMillisecond = format(".%L"),
          formatSecond = format(":%S"),
          formatMinute = format("%I:%M"),
          formatHour = format("%I %p"),
          formatDay = format("%a %d"),
          formatWeek = format("%b %d"),
          formatMonth = format("%B"),
          formatYear = format("%Y");
      var tickIntervals = [[second, 1, durationSecond], [second, 5, 5 * durationSecond], [second, 15, 15 * durationSecond], [second, 30, 30 * durationSecond], [minute, 1, durationMinute], [minute, 5, 5 * durationMinute], [minute, 15, 15 * durationMinute], [minute, 30, 30 * durationMinute], [hour, 1, durationHour], [hour, 3, 3 * durationHour], [hour, 6, 6 * durationHour], [hour, 12, 12 * durationHour], [day, 1, durationDay], [day, 2, 2 * durationDay], [week, 1, durationWeek], [month, 1, durationMonth], [month, 3, 3 * durationMonth], [year, 1, durationYear]];
      function tickFormat(date) {
        return (second(date) < date ? formatMillisecond : minute(date) < date ? formatSecond : hour(date) < date ? formatMinute : day(date) < date ? formatHour : month(date) < date ? (week(date) < date ? formatDay : formatWeek) : year(date) < date ? formatMonth : formatYear)(date);
      }
      function tickInterval(interval, start, stop, step) {
        if (interval == null)
          interval = 10;
        if (typeof interval === "number") {
          var target = Math.abs(stop - start) / interval,
              i = d3Array.bisector(function(i) {
                return i[2];
              }).right(tickIntervals, target);
          if (i === tickIntervals.length) {
            step = d3Array.tickStep(start / durationYear, stop / durationYear, interval);
            interval = year;
          } else if (i) {
            i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
            step = i[1];
            interval = i[0];
          } else {
            step = d3Array.tickStep(start, stop, interval);
            interval = millisecond;
          }
        }
        return step == null ? interval : interval.every(step);
      }
      scale.invert = function(y) {
        return new Date(invert(y));
      };
      scale.domain = function(_) {
        return arguments.length ? domain(map$1.call(_, number$1)) : domain().map(date);
      };
      scale.ticks = function(interval, step) {
        var d = domain(),
            t0 = d[0],
            t1 = d[d.length - 1],
            r = t1 < t0,
            t;
        if (r)
          t = t0, t0 = t1, t1 = t;
        t = tickInterval(interval, t0, t1, step);
        t = t ? t.range(t0, t1 + 1) : [];
        return r ? t.reverse() : t;
      };
      scale.tickFormat = function(count, specifier) {
        return specifier == null ? tickFormat : format(specifier);
      };
      scale.nice = function(interval, step) {
        var d = domain();
        return (interval = tickInterval(interval, d[0], d[d.length - 1], step)) ? domain(nice(d, interval)) : scale;
      };
      scale.copy = function() {
        return copy(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
      };
      return scale;
    }
    function time() {
      return calendar(d3Time.timeYear, d3Time.timeMonth, d3Time.timeWeek, d3Time.timeDay, d3Time.timeHour, d3Time.timeMinute, d3Time.timeSecond, d3Time.timeMillisecond, d3TimeFormat.timeFormat).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]);
    }
    function utcTime() {
      return calendar(d3Time.utcYear, d3Time.utcMonth, d3Time.utcWeek, d3Time.utcDay, d3Time.utcHour, d3Time.utcMinute, d3Time.utcSecond, d3Time.utcMillisecond, d3TimeFormat.utcFormat).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]);
    }
    function colors(s) {
      return s.match(/.{6}/g).map(function(x) {
        return "#" + x;
      });
    }
    var category10 = colors("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
    var category20b = colors("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6");
    var category20c = colors("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9");
    var category20 = colors("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5");
    var cubehelix$1 = d3Interpolate.interpolateCubehelixLong(d3Color.cubehelix(300, 0.5, 0.0), d3Color.cubehelix(-240, 0.5, 1.0));
    var warm = d3Interpolate.interpolateCubehelixLong(d3Color.cubehelix(-100, 0.75, 0.35), d3Color.cubehelix(80, 1.50, 0.8));
    var cool = d3Interpolate.interpolateCubehelixLong(d3Color.cubehelix(260, 0.75, 0.35), d3Color.cubehelix(80, 1.50, 0.8));
    var rainbow = d3Color.cubehelix();
    function rainbow$1(t) {
      if (t < 0 || t > 1)
        t -= Math.floor(t);
      var ts = Math.abs(t - 0.5);
      rainbow.h = 360 * t - 100;
      rainbow.s = 1.5 - 1.5 * ts;
      rainbow.l = 0.8 - 0.9 * ts;
      return rainbow + "";
    }
    function ramp(range) {
      var n = range.length;
      return function(t) {
        return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
      };
    }
    var viridis = ramp(colors("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
    var magma = ramp(colors("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
    var inferno = ramp(colors("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
    var plasma = ramp(colors("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
    function sequential(interpolator) {
      var x0 = 0,
          x1 = 1,
          clamp = false;
      function scale(x) {
        var t = (x - x0) / (x1 - x0);
        return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
      }
      scale.domain = function(_) {
        return arguments.length ? (x0 = +_[0], x1 = +_[1], scale) : [x0, x1];
      };
      scale.clamp = function(_) {
        return arguments.length ? (clamp = !!_, scale) : clamp;
      };
      scale.interpolator = function(_) {
        return arguments.length ? (interpolator = _, scale) : interpolator;
      };
      scale.copy = function() {
        return sequential(interpolator).domain([x0, x1]).clamp(clamp);
      };
      return linearish(scale);
    }
    exports.scaleBand = band;
    exports.scalePoint = point;
    exports.scaleIdentity = identity;
    exports.scaleLinear = linear;
    exports.scaleLog = log;
    exports.scaleOrdinal = ordinal;
    exports.scaleImplicit = implicit;
    exports.scalePow = pow;
    exports.scaleSqrt = sqrt;
    exports.scaleQuantile = quantile$1;
    exports.scaleQuantize = quantize;
    exports.scaleThreshold = threshold;
    exports.scaleTime = time;
    exports.scaleUtc = utcTime;
    exports.schemeCategory10 = category10;
    exports.schemeCategory20b = category20b;
    exports.schemeCategory20c = category20c;
    exports.schemeCategory20 = category20;
    exports.interpolateCubehelixDefault = cubehelix$1;
    exports.interpolateRainbow = rainbow$1;
    exports.interpolateWarm = warm;
    exports.interpolateCool = cool;
    exports.interpolateViridis = viridis;
    exports.interpolateMagma = magma;
    exports.interpolateInferno = inferno;
    exports.interpolatePlasma = plasma;
    exports.scaleSequential = sequential;
    Object.defineProperty(exports, '__esModule', {value: true});
  }));
  return module.exports;
});

$__System.registerDynamic("2d", ["28"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('28');
  return module.exports;
});

$__System.register('1f', ['b', '2d'], function (_export) {
    'use strict';

    var sync, d3_scaleLinear;
    return {
        setters: [function (_b) {
            sync = _b.sync;
        }, function (_d) {
            d3_scaleLinear = _d.scaleLinear;
        }],
        execute: function () {
            _export('default', function (domain) {
                var min = undefined,
                    max = undefined;
                var scale = { domain: {} };
                var isRange = function isRange(dd) {
                    return dd[0] !== dd[1];
                };

                if (domain.x) {
                    scale.domain.x = domain.x;
                    scale.domainShiftX = isRange(domain.x) ? (domain.x[1] - domain.x[0]) / 20 : 1;
                    min = Math.round((domain.x[0] - scale.domainShiftX) * 100) / 100;
                    max = Math.round((domain.x[1] + scale.domainShiftX) * 100) / 100;
                    scale.x = d3_scaleLinear().domain([min, max]).range([0, 100]);
                    //console.log("x:", domain.x, min, max);
                }
                if (domain.y) {
                    scale.domain.y = domain.y;
                    scale.domainShiftY = isRange(domain.y) ? (domain.y[1] - domain.y[0]) / 20 : 1;
                    min = Math.round((domain.y[0] - scale.domainShiftY) * 100) / 100;
                    max = Math.round((domain.y[1] + scale.domainShiftY) * 100) / 100;
                    scale.y = d3_scaleLinear().domain([min, max]).range([100, 0]);
                    //console.log("y:", domain.y, min, max);
                }

                //console.log(scale);
                sync.scale = scale;
                return scale;
            });
        }
    };
});
$__System.registerDynamic("2e", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  (function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (factory((global.d3 = global.d3 || {})));
  }(this, function(exports) {
    'use strict';
    var slice = Array.prototype.slice;
    function identity(x) {
      return x;
    }
    var top = 1;
    var right = 2;
    var bottom = 3;
    var left = 4;
    var epsilon = 1e-6;
    function translateX(scale0, scale1, d) {
      var x = scale0(d);
      return "translate(" + (isFinite(x) ? x : scale1(d)) + ",0)";
    }
    function translateY(scale0, scale1, d) {
      var y = scale0(d);
      return "translate(0," + (isFinite(y) ? y : scale1(d)) + ")";
    }
    function center(scale) {
      var width = scale.bandwidth() / 2;
      return function(d) {
        return scale(d) + width;
      };
    }
    function entering() {
      return !this.__axis;
    }
    function axis(orient, scale) {
      var tickArguments = [],
          tickValues = null,
          tickFormat = null,
          tickSizeInner = 6,
          tickSizeOuter = 6,
          tickPadding = 3;
      function axis(context) {
        var values = tickValues == null ? (scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain()) : tickValues,
            format = tickFormat == null ? (scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity) : tickFormat,
            spacing = Math.max(tickSizeInner, 0) + tickPadding,
            transform = orient === top || orient === bottom ? translateX : translateY,
            range = scale.range(),
            range0 = range[0] + 0.5,
            range1 = range[range.length - 1] + 0.5,
            position = (scale.bandwidth ? center : identity)(scale.copy()),
            selection = context.selection ? context.selection() : context,
            path = selection.selectAll(".domain").data([null]),
            tick = selection.selectAll(".tick").data(values, scale).order(),
            tickExit = tick.exit(),
            tickEnter = tick.enter().append("g").attr("class", "tick"),
            line = tick.select("line"),
            text = tick.select("text"),
            k = orient === top || orient === left ? -1 : 1,
            x,
            y = orient === left || orient === right ? (x = "x", "y") : (x = "y", "x");
        path = path.merge(path.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000"));
        tick = tick.merge(tickEnter);
        line = line.merge(tickEnter.append("line").attr("stroke", "#000").attr(x + "2", k * tickSizeInner).attr(y + "1", 0.5).attr(y + "2", 0.5));
        text = text.merge(tickEnter.append("text").attr("fill", "#000").attr(x, k * spacing).attr(y, 0.5).attr("dy", orient === top ? "0em" : orient === bottom ? ".71em" : ".32em"));
        if (context !== selection) {
          path = path.transition(context);
          tick = tick.transition(context);
          line = line.transition(context);
          text = text.transition(context);
          tickExit = tickExit.transition(context).attr("opacity", epsilon).attr("transform", function(d) {
            return transform(position, this.parentNode.__axis || position, d);
          });
          tickEnter.attr("opacity", epsilon).attr("transform", function(d) {
            return transform(this.parentNode.__axis || position, position, d);
          });
        }
        tickExit.remove();
        path.attr("d", orient === left || orient == right ? "M" + k * tickSizeOuter + "," + range0 + "H0.5V" + range1 + "H" + k * tickSizeOuter : "M" + range0 + "," + k * tickSizeOuter + "V0.5H" + range1 + "V" + k * tickSizeOuter);
        tick.attr("opacity", 1).attr("transform", function(d) {
          return transform(position, position, d);
        });
        line.attr(x + "2", k * tickSizeInner);
        text.attr(x, k * spacing).text(format);
        selection.filter(entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");
        selection.each(function() {
          this.__axis = position;
        });
      }
      axis.scale = function(_) {
        return arguments.length ? (scale = _, axis) : scale;
      };
      axis.ticks = function() {
        return tickArguments = slice.call(arguments), axis;
      };
      axis.tickArguments = function(_) {
        return arguments.length ? (tickArguments = _ == null ? [] : slice.call(_), axis) : tickArguments.slice();
      };
      axis.tickValues = function(_) {
        return arguments.length ? (tickValues = _ == null ? null : slice.call(_), axis) : tickValues && tickValues.slice();
      };
      axis.tickFormat = function(_) {
        return arguments.length ? (tickFormat = _, axis) : tickFormat;
      };
      axis.tickSize = function(_) {
        return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
      };
      axis.tickSizeInner = function(_) {
        return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
      };
      axis.tickSizeOuter = function(_) {
        return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
      };
      axis.tickPadding = function(_) {
        return arguments.length ? (tickPadding = +_, axis) : tickPadding;
      };
      return axis;
    }
    function axisTop(scale) {
      return axis(top, scale);
    }
    function axisRight(scale) {
      return axis(right, scale);
    }
    function axisBottom(scale) {
      return axis(bottom, scale);
    }
    function axisLeft(scale) {
      return axis(left, scale);
    }
    exports.axisTop = axisTop;
    exports.axisRight = axisRight;
    exports.axisBottom = axisBottom;
    exports.axisLeft = axisLeft;
    Object.defineProperty(exports, '__esModule', {value: true});
  }));
  return module.exports;
});

$__System.registerDynamic("2f", ["2e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('2e');
  return module.exports;
});

$__System.register('30', ['29', '1e', '2f', 'b'], function (_export) {

    /* param: coord - x or y */
    /* param: direction - h or v, isJump? */
    'use strict';

    var d3_range, d3_extent, d3_select, d3_axisBottom, sync;
    return {
        setters: [function (_) {
            d3_range = _.range;
            d3_extent = _.extent;
        }, function (_e) {
            d3_select = _e.select;
        }, function (_f) {
            d3_axisBottom = _f.axisBottom;
        }, function (_b) {
            sync = _b.sync;
        }],
        execute: function () {
            _export('default', function (cfg) {

                var axis = undefined,
                    line = undefined,
                    text = undefined;
                var coord = cfg.coord;

                var getSteps = function getSteps(scale) {
                    cfg.state = document.querySelector(".js-chart").getAttribute("data-state");

                    switch (true) {
                        case cfg.state === "final" && cfg.value === "year":
                            return [2016];
                        case cfg.value === "year":
                            var min = scale.domain[coord][0];
                            var max = scale.domain[coord][1];
                            var range = min === max ? [min] : d3_range(max, min, -4);
                            return range[range.length - 1] - 4 === min ? range.concat([min]) : range;
                        case cfg.value === "mark":
                            var d3_axis = d3_axisBottom(scale[coord]).ticks(8);
                            return d3_axis.scale().ticks(d3_axis.ticks()[0]).reverse();
                    }
                };

                this.init = function (data, scale) {
                    axis = d3_select(".axis-" + coord).attr("class", "axis-" + cfg.value);
                };

                this.update = function (opt, scale) {
                    var steps = getSteps(scale);

                    var divHide = undefined;
                    var axisSize = document.querySelector(".js-chart").getBoundingClientRect();
                    switch (coord) {
                        case "x":
                            divHide = Math.ceil(24 * steps.length / (axisSize.width - 30));break;
                        case "y":
                            divHide = Math.ceil(12 * steps.length / (axisSize.height - 30));break;
                    }
                    //console.log(coord, steps.length, divHide);

                    line = axis.selectAll("line").data(steps);
                    text = axis.selectAll("text").data(steps);

                    // exit
                    line.exit().remove();
                    text.exit().remove();

                    // enter
                    line.enter().append("line").attr("opacity", 0).transition().duration(opt.duration * 1000).attr("opacity", function (d, i) {
                        return i % divHide === 0 ? 1 : 0.5;
                    }).attr("x1", function (d) {
                        return 0;
                    }).attr("x2", function (d) {
                        return "95.5%";
                    }).attr("y1", function (d) {
                        return 0;
                    }).attr("y2", function (d) {
                        return "99%";
                    }).attr(coord + "1", function (d) {
                        return scale[coord](d) + "%";
                    }).attr(coord + "2", function (d) {
                        return scale[coord](d) + "%";
                    });

                    text.enter().append("text").transition().duration(opt.duration * 1000).attr("x", function (d) {
                        return "101%";
                    }).attr("y", function (d) {
                        return "100%";
                    }).attr("dy", coord === "x" ? ".71em" : ".3em").attr(coord, function (d) {
                        return scale[coord](d) + "%";
                    }).attr("opacity", function (d, i) {
                        return i % divHide === 0 ? 1 : 0;
                    }).text(function (d) {
                        return Math.round(Math.abs(d) * 100) / 100;
                    });

                    // update
                    line.transition().duration(opt.duration * 1000).attr("opacity", function (d, i) {
                        return i % divHide === 0 ? 1 : 0.5;
                    }).attr(coord + "1", function (d) {
                        return scale[coord](d) + "%";
                    }).attr(coord + "2", function (d) {
                        return scale[coord](d) + "%";
                    });

                    text.transition().duration(opt.duration * 1000).attr("dy", coord === "x" ? ".71em" : ".3em").attr(coord, function (d) {
                        return scale[coord](d) + "%";
                    }).attr("opacity", function (d, i) {
                        return i % divHide === 0 ? 1 : 0;
                    }).text(function (d) {
                        return Math.round(Math.abs(d) * 100) / 100;
                    });
                };
            });
        }
    };
});
$__System.registerDynamic("31", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  (function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (factory((global.d3 = global.d3 || {})));
  }(this, function(exports) {
    'use strict';
    function constant(x) {
      return function() {
        return x;
      };
    }
    function x(d) {
      return d[0];
    }
    function y(d) {
      return d[1];
    }
    function RedBlackTree() {
      this._ = null;
    }
    function RedBlackNode(node) {
      node.U = node.C = node.L = node.R = node.P = node.N = null;
    }
    RedBlackTree.prototype = {
      constructor: RedBlackTree,
      insert: function(after, node) {
        var parent,
            grandpa,
            uncle;
        if (after) {
          node.P = after;
          node.N = after.N;
          if (after.N)
            after.N.P = node;
          after.N = node;
          if (after.R) {
            after = after.R;
            while (after.L)
              after = after.L;
            after.L = node;
          } else {
            after.R = node;
          }
          parent = after;
        } else if (this._) {
          after = RedBlackFirst(this._);
          node.P = null;
          node.N = after;
          after.P = after.L = node;
          parent = after;
        } else {
          node.P = node.N = null;
          this._ = node;
          parent = null;
        }
        node.L = node.R = null;
        node.U = parent;
        node.C = true;
        after = node;
        while (parent && parent.C) {
          grandpa = parent.U;
          if (parent === grandpa.L) {
            uncle = grandpa.R;
            if (uncle && uncle.C) {
              parent.C = uncle.C = false;
              grandpa.C = true;
              after = grandpa;
            } else {
              if (after === parent.R) {
                RedBlackRotateLeft(this, parent);
                after = parent;
                parent = after.U;
              }
              parent.C = false;
              grandpa.C = true;
              RedBlackRotateRight(this, grandpa);
            }
          } else {
            uncle = grandpa.L;
            if (uncle && uncle.C) {
              parent.C = uncle.C = false;
              grandpa.C = true;
              after = grandpa;
            } else {
              if (after === parent.L) {
                RedBlackRotateRight(this, parent);
                after = parent;
                parent = after.U;
              }
              parent.C = false;
              grandpa.C = true;
              RedBlackRotateLeft(this, grandpa);
            }
          }
          parent = after.U;
        }
        this._.C = false;
      },
      remove: function(node) {
        if (node.N)
          node.N.P = node.P;
        if (node.P)
          node.P.N = node.N;
        node.N = node.P = null;
        var parent = node.U,
            sibling,
            left = node.L,
            right = node.R,
            next,
            red;
        if (!left)
          next = right;
        else if (!right)
          next = left;
        else
          next = RedBlackFirst(right);
        if (parent) {
          if (parent.L === node)
            parent.L = next;
          else
            parent.R = next;
        } else {
          this._ = next;
        }
        if (left && right) {
          red = next.C;
          next.C = node.C;
          next.L = left;
          left.U = next;
          if (next !== right) {
            parent = next.U;
            next.U = node.U;
            node = next.R;
            parent.L = node;
            next.R = right;
            right.U = next;
          } else {
            next.U = parent;
            parent = next;
            node = next.R;
          }
        } else {
          red = node.C;
          node = next;
        }
        if (node)
          node.U = parent;
        if (red)
          return;
        if (node && node.C) {
          node.C = false;
          return;
        }
        do {
          if (node === this._)
            break;
          if (node === parent.L) {
            sibling = parent.R;
            if (sibling.C) {
              sibling.C = false;
              parent.C = true;
              RedBlackRotateLeft(this, parent);
              sibling = parent.R;
            }
            if ((sibling.L && sibling.L.C) || (sibling.R && sibling.R.C)) {
              if (!sibling.R || !sibling.R.C) {
                sibling.L.C = false;
                sibling.C = true;
                RedBlackRotateRight(this, sibling);
                sibling = parent.R;
              }
              sibling.C = parent.C;
              parent.C = sibling.R.C = false;
              RedBlackRotateLeft(this, parent);
              node = this._;
              break;
            }
          } else {
            sibling = parent.L;
            if (sibling.C) {
              sibling.C = false;
              parent.C = true;
              RedBlackRotateRight(this, parent);
              sibling = parent.L;
            }
            if ((sibling.L && sibling.L.C) || (sibling.R && sibling.R.C)) {
              if (!sibling.L || !sibling.L.C) {
                sibling.R.C = false;
                sibling.C = true;
                RedBlackRotateLeft(this, sibling);
                sibling = parent.L;
              }
              sibling.C = parent.C;
              parent.C = sibling.L.C = false;
              RedBlackRotateRight(this, parent);
              node = this._;
              break;
            }
          }
          sibling.C = true;
          node = parent;
          parent = parent.U;
        } while (!node.C);
        if (node)
          node.C = false;
      }
    };
    function RedBlackRotateLeft(tree, node) {
      var p = node,
          q = node.R,
          parent = p.U;
      if (parent) {
        if (parent.L === p)
          parent.L = q;
        else
          parent.R = q;
      } else {
        tree._ = q;
      }
      q.U = parent;
      p.U = q;
      p.R = q.L;
      if (p.R)
        p.R.U = p;
      q.L = p;
    }
    function RedBlackRotateRight(tree, node) {
      var p = node,
          q = node.L,
          parent = p.U;
      if (parent) {
        if (parent.L === p)
          parent.L = q;
        else
          parent.R = q;
      } else {
        tree._ = q;
      }
      q.U = parent;
      p.U = q;
      p.L = q.R;
      if (p.L)
        p.L.U = p;
      q.R = p;
    }
    function RedBlackFirst(node) {
      while (node.L)
        node = node.L;
      return node;
    }
    function createEdge(left, right, v0, v1) {
      var edge = [null, null],
          index = edges.push(edge) - 1;
      edge.left = left;
      edge.right = right;
      if (v0)
        setEdgeEnd(edge, left, right, v0);
      if (v1)
        setEdgeEnd(edge, right, left, v1);
      cells[left.index].halfedges.push(index);
      cells[right.index].halfedges.push(index);
      return edge;
    }
    function createBorderEdge(left, v0, v1) {
      var edge = [v0, v1];
      edge.left = left;
      return edge;
    }
    function setEdgeEnd(edge, left, right, vertex) {
      if (!edge[0] && !edge[1]) {
        edge[0] = vertex;
        edge.left = left;
        edge.right = right;
      } else if (edge.left === right) {
        edge[1] = vertex;
      } else {
        edge[0] = vertex;
      }
    }
    function clipEdge(edge, x0, y0, x1, y1) {
      var a = edge[0],
          b = edge[1],
          ax = a[0],
          ay = a[1],
          bx = b[0],
          by = b[1],
          t0 = 0,
          t1 = 1,
          dx = bx - ax,
          dy = by - ay,
          r;
      r = x0 - ax;
      if (!dx && r > 0)
        return;
      r /= dx;
      if (dx < 0) {
        if (r < t0)
          return;
        if (r < t1)
          t1 = r;
      } else if (dx > 0) {
        if (r > t1)
          return;
        if (r > t0)
          t0 = r;
      }
      r = x1 - ax;
      if (!dx && r < 0)
        return;
      r /= dx;
      if (dx < 0) {
        if (r > t1)
          return;
        if (r > t0)
          t0 = r;
      } else if (dx > 0) {
        if (r < t0)
          return;
        if (r < t1)
          t1 = r;
      }
      r = y0 - ay;
      if (!dy && r > 0)
        return;
      r /= dy;
      if (dy < 0) {
        if (r < t0)
          return;
        if (r < t1)
          t1 = r;
      } else if (dy > 0) {
        if (r > t1)
          return;
        if (r > t0)
          t0 = r;
      }
      r = y1 - ay;
      if (!dy && r < 0)
        return;
      r /= dy;
      if (dy < 0) {
        if (r > t1)
          return;
        if (r > t0)
          t0 = r;
      } else if (dy > 0) {
        if (r < t0)
          return;
        if (r < t1)
          t1 = r;
      }
      if (!(t0 > 0) && !(t1 < 1))
        return true;
      if (t0 > 0)
        edge[0] = [ax + t0 * dx, ay + t0 * dy];
      if (t1 < 1)
        edge[1] = [ax + t1 * dx, ay + t1 * dy];
      return true;
    }
    function connectEdge(edge, x0, y0, x1, y1) {
      var v1 = edge[1];
      if (v1)
        return true;
      var v0 = edge[0],
          left = edge.left,
          right = edge.right,
          lx = left[0],
          ly = left[1],
          rx = right[0],
          ry = right[1],
          fx = (lx + rx) / 2,
          fy = (ly + ry) / 2,
          fm,
          fb;
      if (ry === ly) {
        if (fx < x0 || fx >= x1)
          return;
        if (lx > rx) {
          if (!v0)
            v0 = [fx, y0];
          else if (v0[1] >= y1)
            return;
          v1 = [fx, y1];
        } else {
          if (!v0)
            v0 = [fx, y1];
          else if (v0[1] < y0)
            return;
          v1 = [fx, y0];
        }
      } else {
        fm = (lx - rx) / (ry - ly);
        fb = fy - fm * fx;
        if (fm < -1 || fm > 1) {
          if (lx > rx) {
            if (!v0)
              v0 = [(y0 - fb) / fm, y0];
            else if (v0[1] >= y1)
              return;
            v1 = [(y1 - fb) / fm, y1];
          } else {
            if (!v0)
              v0 = [(y1 - fb) / fm, y1];
            else if (v0[1] < y0)
              return;
            v1 = [(y0 - fb) / fm, y0];
          }
        } else {
          if (ly < ry) {
            if (!v0)
              v0 = [x0, fm * x0 + fb];
            else if (v0[0] >= x1)
              return;
            v1 = [x1, fm * x1 + fb];
          } else {
            if (!v0)
              v0 = [x1, fm * x1 + fb];
            else if (v0[0] < x0)
              return;
            v1 = [x0, fm * x0 + fb];
          }
        }
      }
      edge[0] = v0;
      edge[1] = v1;
      return true;
    }
    function clipEdges(x0, y0, x1, y1) {
      var i = edges.length,
          edge;
      while (i--) {
        if (!connectEdge(edge = edges[i], x0, y0, x1, y1) || !clipEdge(edge, x0, y0, x1, y1) || !(Math.abs(edge[0][0] - edge[1][0]) > epsilon || Math.abs(edge[0][1] - edge[1][1]) > epsilon)) {
          delete edges[i];
        }
      }
    }
    function createCell(site) {
      return cells[site.index] = {
        site: site,
        halfedges: []
      };
    }
    function cellHalfedgeAngle(cell, edge) {
      var site = cell.site,
          va = edge.left,
          vb = edge.right;
      if (site === vb)
        vb = va, va = site;
      if (vb)
        return Math.atan2(vb[1] - va[1], vb[0] - va[0]);
      if (site === va)
        va = edge[1], vb = edge[0];
      else
        va = edge[0], vb = edge[1];
      return Math.atan2(va[0] - vb[0], vb[1] - va[1]);
    }
    function cellHalfedgeStart(cell, edge) {
      return edge[+(edge.left !== cell.site)];
    }
    function cellHalfedgeEnd(cell, edge) {
      return edge[+(edge.left === cell.site)];
    }
    function sortCellHalfedges() {
      for (var i = 0,
          n = cells.length,
          cell,
          halfedges,
          j,
          m; i < n; ++i) {
        if ((cell = cells[i]) && (m = (halfedges = cell.halfedges).length)) {
          var index = new Array(m),
              array = new Array(m);
          for (j = 0; j < m; ++j)
            index[j] = j, array[j] = cellHalfedgeAngle(cell, edges[halfedges[j]]);
          index.sort(function(i, j) {
            return array[j] - array[i];
          });
          for (j = 0; j < m; ++j)
            array[j] = halfedges[index[j]];
          for (j = 0; j < m; ++j)
            halfedges[j] = array[j];
        }
      }
    }
    function clipCells(x0, y0, x1, y1) {
      var nCells = cells.length,
          iCell,
          cell,
          site,
          iHalfedge,
          halfedges,
          nHalfedges,
          start,
          startX,
          startY,
          end,
          endX,
          endY,
          cover = true;
      for (iCell = 0; iCell < nCells; ++iCell) {
        if (cell = cells[iCell]) {
          site = cell.site;
          halfedges = cell.halfedges;
          iHalfedge = halfedges.length;
          while (iHalfedge--) {
            if (!edges[halfedges[iHalfedge]]) {
              halfedges.splice(iHalfedge, 1);
            }
          }
          iHalfedge = 0, nHalfedges = halfedges.length;
          while (iHalfedge < nHalfedges) {
            end = cellHalfedgeEnd(cell, edges[halfedges[iHalfedge]]), endX = end[0], endY = end[1];
            start = cellHalfedgeStart(cell, edges[halfedges[++iHalfedge % nHalfedges]]), startX = start[0], startY = start[1];
            if (Math.abs(endX - startX) > epsilon || Math.abs(endY - startY) > epsilon) {
              halfedges.splice(iHalfedge, 0, edges.push(createBorderEdge(site, end, Math.abs(endX - x0) < epsilon && y1 - endY > epsilon ? [x0, Math.abs(startX - x0) < epsilon ? startY : y1] : Math.abs(endY - y1) < epsilon && x1 - endX > epsilon ? [Math.abs(startY - y1) < epsilon ? startX : x1, y1] : Math.abs(endX - x1) < epsilon && endY - y0 > epsilon ? [x1, Math.abs(startX - x1) < epsilon ? startY : y0] : Math.abs(endY - y0) < epsilon && endX - x0 > epsilon ? [Math.abs(startY - y0) < epsilon ? startX : x0, y0] : null)) - 1);
              ++nHalfedges;
            }
          }
          if (nHalfedges)
            cover = false;
        }
      }
      if (cover) {
        var dx,
            dy,
            d2,
            dc = Infinity;
        for (iCell = 0, cover = null; iCell < nCells; ++iCell) {
          if (cell = cells[iCell]) {
            site = cell.site;
            dx = site[0] - x0;
            dy = site[1] - y0;
            d2 = dx * dx + dy * dy;
            if (d2 < dc)
              dc = d2, cover = cell;
          }
        }
        if (cover) {
          var v00 = [x0, y0],
              v01 = [x0, y1],
              v11 = [x1, y1],
              v10 = [x1, y0];
          cover.halfedges.push(edges.push(createBorderEdge(site = cover.site, v00, v01)) - 1, edges.push(createBorderEdge(site, v01, v11)) - 1, edges.push(createBorderEdge(site, v11, v10)) - 1, edges.push(createBorderEdge(site, v10, v00)) - 1);
        }
      }
      for (iCell = 0; iCell < nCells; ++iCell) {
        if (cell = cells[iCell]) {
          if (!cell.halfedges.length) {
            delete cells[iCell];
          }
        }
      }
    }
    var circlePool = [];
    var firstCircle;
    function Circle() {
      RedBlackNode(this);
      this.x = this.y = this.arc = this.site = this.cy = null;
    }
    function attachCircle(arc) {
      var lArc = arc.P,
          rArc = arc.N;
      if (!lArc || !rArc)
        return;
      var lSite = lArc.site,
          cSite = arc.site,
          rSite = rArc.site;
      if (lSite === rSite)
        return;
      var bx = cSite[0],
          by = cSite[1],
          ax = lSite[0] - bx,
          ay = lSite[1] - by,
          cx = rSite[0] - bx,
          cy = rSite[1] - by;
      var d = 2 * (ax * cy - ay * cx);
      if (d >= -epsilon2)
        return;
      var ha = ax * ax + ay * ay,
          hc = cx * cx + cy * cy,
          x = (cy * ha - ay * hc) / d,
          y = (ax * hc - cx * ha) / d;
      var circle = circlePool.pop() || new Circle;
      circle.arc = arc;
      circle.site = cSite;
      circle.x = x + bx;
      circle.y = (circle.cy = y + by) + Math.sqrt(x * x + y * y);
      arc.circle = circle;
      var before = null,
          node = circles._;
      while (node) {
        if (circle.y < node.y || (circle.y === node.y && circle.x <= node.x)) {
          if (node.L)
            node = node.L;
          else {
            before = node.P;
            break;
          }
        } else {
          if (node.R)
            node = node.R;
          else {
            before = node;
            break;
          }
        }
      }
      circles.insert(before, circle);
      if (!before)
        firstCircle = circle;
    }
    function detachCircle(arc) {
      var circle = arc.circle;
      if (circle) {
        if (!circle.P)
          firstCircle = circle.N;
        circles.remove(circle);
        circlePool.push(circle);
        RedBlackNode(circle);
        arc.circle = null;
      }
    }
    var beachPool = [];
    function Beach() {
      RedBlackNode(this);
      this.edge = this.site = this.circle = null;
    }
    function createBeach(site) {
      var beach = beachPool.pop() || new Beach;
      beach.site = site;
      return beach;
    }
    function detachBeach(beach) {
      detachCircle(beach);
      beaches.remove(beach);
      beachPool.push(beach);
      RedBlackNode(beach);
    }
    function removeBeach(beach) {
      var circle = beach.circle,
          x = circle.x,
          y = circle.cy,
          vertex = [x, y],
          previous = beach.P,
          next = beach.N,
          disappearing = [beach];
      detachBeach(beach);
      var lArc = previous;
      while (lArc.circle && Math.abs(x - lArc.circle.x) < epsilon && Math.abs(y - lArc.circle.cy) < epsilon) {
        previous = lArc.P;
        disappearing.unshift(lArc);
        detachBeach(lArc);
        lArc = previous;
      }
      disappearing.unshift(lArc);
      detachCircle(lArc);
      var rArc = next;
      while (rArc.circle && Math.abs(x - rArc.circle.x) < epsilon && Math.abs(y - rArc.circle.cy) < epsilon) {
        next = rArc.N;
        disappearing.push(rArc);
        detachBeach(rArc);
        rArc = next;
      }
      disappearing.push(rArc);
      detachCircle(rArc);
      var nArcs = disappearing.length,
          iArc;
      for (iArc = 1; iArc < nArcs; ++iArc) {
        rArc = disappearing[iArc];
        lArc = disappearing[iArc - 1];
        setEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
      }
      lArc = disappearing[0];
      rArc = disappearing[nArcs - 1];
      rArc.edge = createEdge(lArc.site, rArc.site, null, vertex);
      attachCircle(lArc);
      attachCircle(rArc);
    }
    function addBeach(site) {
      var x = site[0],
          directrix = site[1],
          lArc,
          rArc,
          dxl,
          dxr,
          node = beaches._;
      while (node) {
        dxl = leftBreakPoint(node, directrix) - x;
        if (dxl > epsilon)
          node = node.L;
        else {
          dxr = x - rightBreakPoint(node, directrix);
          if (dxr > epsilon) {
            if (!node.R) {
              lArc = node;
              break;
            }
            node = node.R;
          } else {
            if (dxl > -epsilon) {
              lArc = node.P;
              rArc = node;
            } else if (dxr > -epsilon) {
              lArc = node;
              rArc = node.N;
            } else {
              lArc = rArc = node;
            }
            break;
          }
        }
      }
      createCell(site);
      var newArc = createBeach(site);
      beaches.insert(lArc, newArc);
      if (!lArc && !rArc)
        return;
      if (lArc === rArc) {
        detachCircle(lArc);
        rArc = createBeach(lArc.site);
        beaches.insert(newArc, rArc);
        newArc.edge = rArc.edge = createEdge(lArc.site, newArc.site);
        attachCircle(lArc);
        attachCircle(rArc);
        return;
      }
      if (!rArc) {
        newArc.edge = createEdge(lArc.site, newArc.site);
        return;
      }
      detachCircle(lArc);
      detachCircle(rArc);
      var lSite = lArc.site,
          ax = lSite[0],
          ay = lSite[1],
          bx = site[0] - ax,
          by = site[1] - ay,
          rSite = rArc.site,
          cx = rSite[0] - ax,
          cy = rSite[1] - ay,
          d = 2 * (bx * cy - by * cx),
          hb = bx * bx + by * by,
          hc = cx * cx + cy * cy,
          vertex = [(cy * hb - by * hc) / d + ax, (bx * hc - cx * hb) / d + ay];
      setEdgeEnd(rArc.edge, lSite, rSite, vertex);
      newArc.edge = createEdge(lSite, site, null, vertex);
      rArc.edge = createEdge(site, rSite, null, vertex);
      attachCircle(lArc);
      attachCircle(rArc);
    }
    function leftBreakPoint(arc, directrix) {
      var site = arc.site,
          rfocx = site[0],
          rfocy = site[1],
          pby2 = rfocy - directrix;
      if (!pby2)
        return rfocx;
      var lArc = arc.P;
      if (!lArc)
        return -Infinity;
      site = lArc.site;
      var lfocx = site[0],
          lfocy = site[1],
          plby2 = lfocy - directrix;
      if (!plby2)
        return lfocx;
      var hl = lfocx - rfocx,
          aby2 = 1 / pby2 - 1 / plby2,
          b = hl / plby2;
      if (aby2)
        return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
      return (rfocx + lfocx) / 2;
    }
    function rightBreakPoint(arc, directrix) {
      var rArc = arc.N;
      if (rArc)
        return leftBreakPoint(rArc, directrix);
      var site = arc.site;
      return site[1] === directrix ? site[0] : Infinity;
    }
    var epsilon = 1e-6;
    var epsilon2 = 1e-12;
    var beaches;
    var cells;
    var circles;
    var edges;
    function triangleArea(a, b, c) {
      return (a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1]);
    }
    function lexicographic(a, b) {
      return b[1] - a[1] || b[0] - a[0];
    }
    function Diagram(sites, extent) {
      var site = sites.sort(lexicographic).pop(),
          x,
          y,
          circle;
      edges = [];
      cells = new Array(sites.length);
      beaches = new RedBlackTree;
      circles = new RedBlackTree;
      while (true) {
        circle = firstCircle;
        if (site && (!circle || site[1] < circle.y || (site[1] === circle.y && site[0] < circle.x))) {
          if (site[0] !== x || site[1] !== y) {
            addBeach(site);
            x = site[0], y = site[1];
          }
          site = sites.pop();
        } else if (circle) {
          removeBeach(circle.arc);
        } else {
          break;
        }
      }
      sortCellHalfedges();
      if (extent) {
        var x0 = +extent[0][0],
            y0 = +extent[0][1],
            x1 = +extent[1][0],
            y1 = +extent[1][1];
        clipEdges(x0, y0, x1, y1);
        clipCells(x0, y0, x1, y1);
      }
      this.edges = edges;
      this.cells = cells;
      beaches = circles = edges = cells = null;
    }
    Diagram.prototype = {
      constructor: Diagram,
      polygons: function() {
        var edges = this.edges;
        return this.cells.map(function(cell) {
          var polygon = cell.halfedges.map(function(i) {
            return cellHalfedgeStart(cell, edges[i]);
          });
          polygon.data = cell.site.data;
          return polygon;
        });
      },
      triangles: function() {
        var triangles = [],
            edges = this.edges;
        this.cells.forEach(function(cell, i) {
          var site = cell.site,
              halfedges = cell.halfedges,
              j = -1,
              m = halfedges.length,
              s0,
              e1 = edges[halfedges[m - 1]],
              s1 = e1.left === site ? e1.right : e1.left;
          while (++j < m) {
            s0 = s1;
            e1 = edges[halfedges[j]];
            s1 = e1.left === site ? e1.right : e1.left;
            if (i < s0.index && i < s1.index && triangleArea(site, s0, s1) < 0) {
              triangles.push([site.data, s0.data, s1.data]);
            }
          }
        });
        return triangles;
      },
      links: function() {
        return this.edges.filter(function(edge) {
          return edge.right;
        }).map(function(edge) {
          return {
            source: edge.left.data,
            target: edge.right.data
          };
        });
      }
    };
    function voronoi() {
      var x$$ = x,
          y$$ = y,
          extent = null;
      function voronoi(data) {
        return new Diagram(data.map(function(d, i) {
          var s = [Math.round(x$$(d, i, data) / epsilon) * epsilon, Math.round(y$$(d, i, data) / epsilon) * epsilon];
          s.index = i;
          s.data = d;
          return s;
        }), extent);
      }
      voronoi.polygons = function(data) {
        return voronoi(data).polygons();
      };
      voronoi.links = function(data) {
        return voronoi(data).links();
      };
      voronoi.triangles = function(data) {
        return voronoi(data).triangles();
      };
      voronoi.x = function(_) {
        return arguments.length ? (x$$ = typeof _ === "function" ? _ : constant(+_), voronoi) : x$$;
      };
      voronoi.y = function(_) {
        return arguments.length ? (y$$ = typeof _ === "function" ? _ : constant(+_), voronoi) : y$$;
      };
      voronoi.extent = function(_) {
        return arguments.length ? (extent = _ == null ? null : [[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]], voronoi) : extent && [[extent[0][0], extent[0][1]], [extent[1][0], extent[1][1]]];
      };
      voronoi.size = function(_) {
        return arguments.length ? (extent = _ == null ? null : [[0, 0], [+_[0], +_[1]]], voronoi) : extent && [extent[1][0] - extent[0][0], extent[1][1] - extent[0][1]];
      };
      return voronoi;
    }
    exports.voronoi = voronoi;
    Object.defineProperty(exports, '__esModule', {value: true});
  }));
  return module.exports;
});

$__System.registerDynamic("32", ["31"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('31');
  return module.exports;
});

$__System.registerDynamic("33", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  (function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (factory((global.d3 = global.d3 || {})));
  }(this, function(exports) {
    'use strict';
    var frame = 0;
    var timeout = 0;
    var interval = 0;
    var pokeDelay = 1000;
    var taskHead;
    var taskTail;
    var clockLast = 0;
    var clockNow = 0;
    var clockSkew = 0;
    var clock = typeof performance === "object" && performance.now ? performance : Date;
    var setFrame = typeof requestAnimationFrame === "function" ? (clock === Date ? function(f) {
      requestAnimationFrame(function() {
        f(clock.now());
      });
    } : requestAnimationFrame) : function(f) {
      setTimeout(f, 17);
    };
    function now() {
      return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
    }
    function clearNow() {
      clockNow = 0;
    }
    function Timer() {
      this._call = this._time = this._next = null;
    }
    Timer.prototype = timer.prototype = {
      constructor: Timer,
      restart: function(callback, delay, time) {
        if (typeof callback !== "function")
          throw new TypeError("callback is not a function");
        time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
        if (!this._next && taskTail !== this) {
          if (taskTail)
            taskTail._next = this;
          else
            taskHead = this;
          taskTail = this;
        }
        this._call = callback;
        this._time = time;
        sleep();
      },
      stop: function() {
        if (this._call) {
          this._call = null;
          this._time = Infinity;
          sleep();
        }
      }
    };
    function timer(callback, delay, time) {
      var t = new Timer;
      t.restart(callback, delay, time);
      return t;
    }
    function timerFlush() {
      now();
      ++frame;
      var t = taskHead,
          e;
      while (t) {
        if ((e = clockNow - t._time) >= 0)
          t._call.call(null, e);
        t = t._next;
      }
      --frame;
    }
    function wake(time) {
      clockNow = (clockLast = time || clock.now()) + clockSkew;
      frame = timeout = 0;
      try {
        timerFlush();
      } finally {
        frame = 0;
        nap();
        clockNow = 0;
      }
    }
    function poke() {
      var now = clock.now(),
          delay = now - clockLast;
      if (delay > pokeDelay)
        clockSkew -= delay, clockLast = now;
    }
    function nap() {
      var t0,
          t1 = taskHead,
          t2,
          time = Infinity;
      while (t1) {
        if (t1._call) {
          if (time > t1._time)
            time = t1._time;
          t0 = t1, t1 = t1._next;
        } else {
          t2 = t1._next, t1._next = null;
          t1 = t0 ? t0._next = t2 : taskHead = t2;
        }
      }
      taskTail = t0;
      sleep(time);
    }
    function sleep(time) {
      if (frame)
        return;
      if (timeout)
        timeout = clearTimeout(timeout);
      var delay = time - clockNow;
      if (delay > 24) {
        if (time < Infinity)
          timeout = setTimeout(wake, delay);
        if (interval)
          interval = clearInterval(interval);
      } else {
        if (!interval)
          interval = setInterval(poke, pokeDelay);
        frame = 1, setFrame(wake);
      }
    }
    function timeout$1(callback, delay, time) {
      var t = new Timer;
      delay = delay == null ? 0 : +delay;
      t.restart(function(elapsed) {
        t.stop();
        callback(elapsed + delay);
      }, delay, time);
      return t;
    }
    function interval$1(callback, delay, time) {
      var t = new Timer,
          total = delay;
      if (delay == null)
        return t.restart(callback, delay, time), t;
      delay = +delay, time = time == null ? now() : +time;
      t.restart(function tick(elapsed) {
        elapsed += total;
        t.restart(tick, total += delay, time);
        callback(elapsed);
      }, delay, time);
      return t;
    }
    exports.now = now;
    exports.timer = timer;
    exports.timerFlush = timerFlush;
    exports.timeout = timeout$1;
    exports.interval = interval$1;
    Object.defineProperty(exports, '__esModule', {value: true});
  }));
  return module.exports;
});

$__System.registerDynamic("34", ["33"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('33');
  return module.exports;
});

$__System.registerDynamic("35", ["2b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  (function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, $__require('2b')) : typeof define === 'function' && define.amd ? define(['exports', 'd3-color'], factory) : (factory((global.d3 = global.d3 || {}), global.d3));
  }(this, function(exports, d3Color) {
    'use strict';
    function basis(t1, v0, v1, v2, v3) {
      var t2 = t1 * t1,
          t3 = t2 * t1;
      return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
    }
    function basis$1(values) {
      var n = values.length - 1;
      return function(t) {
        var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
            v1 = values[i],
            v2 = values[i + 1],
            v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
            v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
        return basis((t - i / n) * n, v0, v1, v2, v3);
      };
    }
    function basisClosed(values) {
      var n = values.length;
      return function(t) {
        var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
            v0 = values[(i + n - 1) % n],
            v1 = values[i % n],
            v2 = values[(i + 1) % n],
            v3 = values[(i + 2) % n];
        return basis((t - i / n) * n, v0, v1, v2, v3);
      };
    }
    function constant(x) {
      return function() {
        return x;
      };
    }
    function linear(a, d) {
      return function(t) {
        return a + t * d;
      };
    }
    function exponential(a, b, y) {
      return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
        return Math.pow(a + t * b, y);
      };
    }
    function hue(a, b) {
      var d = b - a;
      return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant(isNaN(a) ? b : a);
    }
    function gamma(y) {
      return (y = +y) === 1 ? nogamma : function(a, b) {
        return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
      };
    }
    function nogamma(a, b) {
      var d = b - a;
      return d ? linear(a, d) : constant(isNaN(a) ? b : a);
    }
    var rgb$1 = (function rgbGamma(y) {
      var color = gamma(y);
      function rgb(start, end) {
        var r = color((start = d3Color.rgb(start)).r, (end = d3Color.rgb(end)).r),
            g = color(start.g, end.g),
            b = color(start.b, end.b),
            opacity = color(start.opacity, end.opacity);
        return function(t) {
          start.r = r(t);
          start.g = g(t);
          start.b = b(t);
          start.opacity = opacity(t);
          return start + "";
        };
      }
      rgb.gamma = rgbGamma;
      return rgb;
    })(1);
    function rgbSpline(spline) {
      return function(colors) {
        var n = colors.length,
            r = new Array(n),
            g = new Array(n),
            b = new Array(n),
            i,
            color;
        for (i = 0; i < n; ++i) {
          color = d3Color.rgb(colors[i]);
          r[i] = color.r || 0;
          g[i] = color.g || 0;
          b[i] = color.b || 0;
        }
        r = spline(r);
        g = spline(g);
        b = spline(b);
        color.opacity = 1;
        return function(t) {
          color.r = r(t);
          color.g = g(t);
          color.b = b(t);
          return color + "";
        };
      };
    }
    var rgbBasis = rgbSpline(basis$1);
    var rgbBasisClosed = rgbSpline(basisClosed);
    function array(a, b) {
      var nb = b ? b.length : 0,
          na = a ? Math.min(nb, a.length) : 0,
          x = new Array(nb),
          c = new Array(nb),
          i;
      for (i = 0; i < na; ++i)
        x[i] = value(a[i], b[i]);
      for (; i < nb; ++i)
        c[i] = b[i];
      return function(t) {
        for (i = 0; i < na; ++i)
          c[i] = x[i](t);
        return c;
      };
    }
    function number(a, b) {
      return a = +a, b -= a, function(t) {
        return a + b * t;
      };
    }
    function object(a, b) {
      var i = {},
          c = {},
          k;
      if (a === null || typeof a !== "object")
        a = {};
      if (b === null || typeof b !== "object")
        b = {};
      for (k in b) {
        if (k in a) {
          i[k] = value(a[k], b[k]);
        } else {
          c[k] = b[k];
        }
      }
      return function(t) {
        for (k in i)
          c[k] = i[k](t);
        return c;
      };
    }
    var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
    var reB = new RegExp(reA.source, "g");
    function zero(b) {
      return function() {
        return b;
      };
    }
    function one(b) {
      return function(t) {
        return b(t) + "";
      };
    }
    function string(a, b) {
      var bi = reA.lastIndex = reB.lastIndex = 0,
          am,
          bm,
          bs,
          i = -1,
          s = [],
          q = [];
      a = a + "", b = b + "";
      while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
        if ((bs = bm.index) > bi) {
          bs = b.slice(bi, bs);
          if (s[i])
            s[i] += bs;
          else
            s[++i] = bs;
        }
        if ((am = am[0]) === (bm = bm[0])) {
          if (s[i])
            s[i] += bm;
          else
            s[++i] = bm;
        } else {
          s[++i] = null;
          q.push({
            i: i,
            x: number(am, bm)
          });
        }
        bi = reB.lastIndex;
      }
      if (bi < b.length) {
        bs = b.slice(bi);
        if (s[i])
          s[i] += bs;
        else
          s[++i] = bs;
      }
      return s.length < 2 ? (q[0] ? one(q[0].x) : zero(b)) : (b = q.length, function(t) {
        for (var i = 0,
            o; i < b; ++i)
          s[(o = q[i]).i] = o.x(t);
        return s.join("");
      });
    }
    function value(a, b) {
      var t = typeof b,
          c;
      return b == null || t === "boolean" ? constant(b) : (t === "number" ? number : t === "string" ? ((c = d3Color.color(b)) ? (b = c, rgb$1) : string) : b instanceof d3Color.color ? rgb$1 : Array.isArray(b) ? array : object)(a, b);
    }
    function round(a, b) {
      return a = +a, b -= a, function(t) {
        return Math.round(a + b * t);
      };
    }
    var degrees = 180 / Math.PI;
    var identity = {
      translateX: 0,
      translateY: 0,
      rotate: 0,
      skewX: 0,
      scaleX: 1,
      scaleY: 1
    };
    function decompose(a, b, c, d, e, f) {
      var scaleX,
          scaleY,
          skewX;
      if (scaleX = Math.sqrt(a * a + b * b))
        a /= scaleX, b /= scaleX;
      if (skewX = a * c + b * d)
        c -= a * skewX, d -= b * skewX;
      if (scaleY = Math.sqrt(c * c + d * d))
        c /= scaleY, d /= scaleY, skewX /= scaleY;
      if (a * d < b * c)
        a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
      return {
        translateX: e,
        translateY: f,
        rotate: Math.atan2(b, a) * degrees,
        skewX: Math.atan(skewX) * degrees,
        scaleX: scaleX,
        scaleY: scaleY
      };
    }
    var cssNode;
    var cssRoot;
    var cssView;
    var svgNode;
    function parseCss(value) {
      if (value === "none")
        return identity;
      if (!cssNode)
        cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
      cssNode.style.transform = value;
      value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
      cssRoot.removeChild(cssNode);
      value = value.slice(7, -1).split(",");
      return decompose(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
    }
    function parseSvg(value) {
      if (value == null)
        return identity;
      if (!svgNode)
        svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
      svgNode.setAttribute("transform", value);
      if (!(value = svgNode.transform.baseVal.consolidate()))
        return identity;
      value = value.matrix;
      return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
    }
    function interpolateTransform(parse, pxComma, pxParen, degParen) {
      function pop(s) {
        return s.length ? s.pop() + " " : "";
      }
      function translate(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
          var i = s.push("translate(", null, pxComma, null, pxParen);
          q.push({
            i: i - 4,
            x: number(xa, xb)
          }, {
            i: i - 2,
            x: number(ya, yb)
          });
        } else if (xb || yb) {
          s.push("translate(" + xb + pxComma + yb + pxParen);
        }
      }
      function rotate(a, b, s, q) {
        if (a !== b) {
          if (a - b > 180)
            b += 360;
          else if (b - a > 180)
            a += 360;
          q.push({
            i: s.push(pop(s) + "rotate(", null, degParen) - 2,
            x: number(a, b)
          });
        } else if (b) {
          s.push(pop(s) + "rotate(" + b + degParen);
        }
      }
      function skewX(a, b, s, q) {
        if (a !== b) {
          q.push({
            i: s.push(pop(s) + "skewX(", null, degParen) - 2,
            x: number(a, b)
          });
        } else if (b) {
          s.push(pop(s) + "skewX(" + b + degParen);
        }
      }
      function scale(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
          var i = s.push(pop(s) + "scale(", null, ",", null, ")");
          q.push({
            i: i - 4,
            x: number(xa, xb)
          }, {
            i: i - 2,
            x: number(ya, yb)
          });
        } else if (xb !== 1 || yb !== 1) {
          s.push(pop(s) + "scale(" + xb + "," + yb + ")");
        }
      }
      return function(a, b) {
        var s = [],
            q = [];
        a = parse(a), b = parse(b);
        translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
        rotate(a.rotate, b.rotate, s, q);
        skewX(a.skewX, b.skewX, s, q);
        scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
        a = b = null;
        return function(t) {
          var i = -1,
              n = q.length,
              o;
          while (++i < n)
            s[(o = q[i]).i] = o.x(t);
          return s.join("");
        };
      };
    }
    var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
    var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");
    var rho = Math.SQRT2;
    var rho2 = 2;
    var rho4 = 4;
    var epsilon2 = 1e-12;
    function cosh(x) {
      return ((x = Math.exp(x)) + 1 / x) / 2;
    }
    function sinh(x) {
      return ((x = Math.exp(x)) - 1 / x) / 2;
    }
    function tanh(x) {
      return ((x = Math.exp(2 * x)) - 1) / (x + 1);
    }
    function zoom(p0, p1) {
      var ux0 = p0[0],
          uy0 = p0[1],
          w0 = p0[2],
          ux1 = p1[0],
          uy1 = p1[1],
          w1 = p1[2],
          dx = ux1 - ux0,
          dy = uy1 - uy0,
          d2 = dx * dx + dy * dy,
          i,
          S;
      if (d2 < epsilon2) {
        S = Math.log(w1 / w0) / rho;
        i = function(t) {
          return [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(rho * t * S)];
        };
      } else {
        var d1 = Math.sqrt(d2),
            b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
            b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
            r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
            r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
        S = (r1 - r0) / rho;
        i = function(t) {
          var s = t * S,
              coshr0 = cosh(r0),
              u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
          return [ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / cosh(rho * s + r0)];
        };
      }
      i.duration = S * 1000;
      return i;
    }
    function hsl$1(hue) {
      return function(start, end) {
        var h = hue((start = d3Color.hsl(start)).h, (end = d3Color.hsl(end)).h),
            s = nogamma(start.s, end.s),
            l = nogamma(start.l, end.l),
            opacity = nogamma(start.opacity, end.opacity);
        return function(t) {
          start.h = h(t);
          start.s = s(t);
          start.l = l(t);
          start.opacity = opacity(t);
          return start + "";
        };
      };
    }
    var hsl$2 = hsl$1(hue);
    var hslLong = hsl$1(nogamma);
    function lab$1(start, end) {
      var l = nogamma((start = d3Color.lab(start)).l, (end = d3Color.lab(end)).l),
          a = nogamma(start.a, end.a),
          b = nogamma(start.b, end.b),
          opacity = nogamma(start.opacity, end.opacity);
      return function(t) {
        start.l = l(t);
        start.a = a(t);
        start.b = b(t);
        start.opacity = opacity(t);
        return start + "";
      };
    }
    function hcl$1(hue) {
      return function(start, end) {
        var h = hue((start = d3Color.hcl(start)).h, (end = d3Color.hcl(end)).h),
            c = nogamma(start.c, end.c),
            l = nogamma(start.l, end.l),
            opacity = nogamma(start.opacity, end.opacity);
        return function(t) {
          start.h = h(t);
          start.c = c(t);
          start.l = l(t);
          start.opacity = opacity(t);
          return start + "";
        };
      };
    }
    var hcl$2 = hcl$1(hue);
    var hclLong = hcl$1(nogamma);
    function cubehelix$1(hue) {
      return (function cubehelixGamma(y) {
        y = +y;
        function cubehelix(start, end) {
          var h = hue((start = d3Color.cubehelix(start)).h, (end = d3Color.cubehelix(end)).h),
              s = nogamma(start.s, end.s),
              l = nogamma(start.l, end.l),
              opacity = nogamma(start.opacity, end.opacity);
          return function(t) {
            start.h = h(t);
            start.s = s(t);
            start.l = l(Math.pow(t, y));
            start.opacity = opacity(t);
            return start + "";
          };
        }
        cubehelix.gamma = cubehelixGamma;
        return cubehelix;
      })(1);
    }
    var cubehelix$2 = cubehelix$1(hue);
    var cubehelixLong = cubehelix$1(nogamma);
    function quantize(interpolator, n) {
      var samples = new Array(n);
      for (var i = 0; i < n; ++i)
        samples[i] = interpolator(i / (n - 1));
      return samples;
    }
    exports.interpolate = value;
    exports.interpolateArray = array;
    exports.interpolateBasis = basis$1;
    exports.interpolateBasisClosed = basisClosed;
    exports.interpolateNumber = number;
    exports.interpolateObject = object;
    exports.interpolateRound = round;
    exports.interpolateString = string;
    exports.interpolateTransformCss = interpolateTransformCss;
    exports.interpolateTransformSvg = interpolateTransformSvg;
    exports.interpolateZoom = zoom;
    exports.interpolateRgb = rgb$1;
    exports.interpolateRgbBasis = rgbBasis;
    exports.interpolateRgbBasisClosed = rgbBasisClosed;
    exports.interpolateHsl = hsl$2;
    exports.interpolateHslLong = hslLong;
    exports.interpolateLab = lab$1;
    exports.interpolateHcl = hcl$2;
    exports.interpolateHclLong = hclLong;
    exports.interpolateCubehelix = cubehelix$2;
    exports.interpolateCubehelixLong = cubehelixLong;
    exports.quantize = quantize;
    Object.defineProperty(exports, '__esModule', {value: true});
  }));
  return module.exports;
});

$__System.registerDynamic("2c", ["35"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('35');
  return module.exports;
});

$__System.registerDynamic("36", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  (function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (factory((global.d3 = global.d3 || {})));
  }(this, function(exports) {
    'use strict';
    function define(constructor, factory, prototype) {
      constructor.prototype = factory.prototype = prototype;
      prototype.constructor = constructor;
    }
    function extend(parent, definition) {
      var prototype = Object.create(parent.prototype);
      for (var key in definition)
        prototype[key] = definition[key];
      return prototype;
    }
    function Color() {}
    var darker = 0.7;
    var brighter = 1 / darker;
    var reHex3 = /^#([0-9a-f]{3})$/;
    var reHex6 = /^#([0-9a-f]{6})$/;
    var reRgbInteger = /^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/;
    var reRgbPercent = /^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/;
    var reRgbaInteger = /^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/;
    var reRgbaPercent = /^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/;
    var reHslPercent = /^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/;
    var reHslaPercent = /^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/;
    var named = {
      aliceblue: 0xf0f8ff,
      antiquewhite: 0xfaebd7,
      aqua: 0x00ffff,
      aquamarine: 0x7fffd4,
      azure: 0xf0ffff,
      beige: 0xf5f5dc,
      bisque: 0xffe4c4,
      black: 0x000000,
      blanchedalmond: 0xffebcd,
      blue: 0x0000ff,
      blueviolet: 0x8a2be2,
      brown: 0xa52a2a,
      burlywood: 0xdeb887,
      cadetblue: 0x5f9ea0,
      chartreuse: 0x7fff00,
      chocolate: 0xd2691e,
      coral: 0xff7f50,
      cornflowerblue: 0x6495ed,
      cornsilk: 0xfff8dc,
      crimson: 0xdc143c,
      cyan: 0x00ffff,
      darkblue: 0x00008b,
      darkcyan: 0x008b8b,
      darkgoldenrod: 0xb8860b,
      darkgray: 0xa9a9a9,
      darkgreen: 0x006400,
      darkgrey: 0xa9a9a9,
      darkkhaki: 0xbdb76b,
      darkmagenta: 0x8b008b,
      darkolivegreen: 0x556b2f,
      darkorange: 0xff8c00,
      darkorchid: 0x9932cc,
      darkred: 0x8b0000,
      darksalmon: 0xe9967a,
      darkseagreen: 0x8fbc8f,
      darkslateblue: 0x483d8b,
      darkslategray: 0x2f4f4f,
      darkslategrey: 0x2f4f4f,
      darkturquoise: 0x00ced1,
      darkviolet: 0x9400d3,
      deeppink: 0xff1493,
      deepskyblue: 0x00bfff,
      dimgray: 0x696969,
      dimgrey: 0x696969,
      dodgerblue: 0x1e90ff,
      firebrick: 0xb22222,
      floralwhite: 0xfffaf0,
      forestgreen: 0x228b22,
      fuchsia: 0xff00ff,
      gainsboro: 0xdcdcdc,
      ghostwhite: 0xf8f8ff,
      gold: 0xffd700,
      goldenrod: 0xdaa520,
      gray: 0x808080,
      green: 0x008000,
      greenyellow: 0xadff2f,
      grey: 0x808080,
      honeydew: 0xf0fff0,
      hotpink: 0xff69b4,
      indianred: 0xcd5c5c,
      indigo: 0x4b0082,
      ivory: 0xfffff0,
      khaki: 0xf0e68c,
      lavender: 0xe6e6fa,
      lavenderblush: 0xfff0f5,
      lawngreen: 0x7cfc00,
      lemonchiffon: 0xfffacd,
      lightblue: 0xadd8e6,
      lightcoral: 0xf08080,
      lightcyan: 0xe0ffff,
      lightgoldenrodyellow: 0xfafad2,
      lightgray: 0xd3d3d3,
      lightgreen: 0x90ee90,
      lightgrey: 0xd3d3d3,
      lightpink: 0xffb6c1,
      lightsalmon: 0xffa07a,
      lightseagreen: 0x20b2aa,
      lightskyblue: 0x87cefa,
      lightslategray: 0x778899,
      lightslategrey: 0x778899,
      lightsteelblue: 0xb0c4de,
      lightyellow: 0xffffe0,
      lime: 0x00ff00,
      limegreen: 0x32cd32,
      linen: 0xfaf0e6,
      magenta: 0xff00ff,
      maroon: 0x800000,
      mediumaquamarine: 0x66cdaa,
      mediumblue: 0x0000cd,
      mediumorchid: 0xba55d3,
      mediumpurple: 0x9370db,
      mediumseagreen: 0x3cb371,
      mediumslateblue: 0x7b68ee,
      mediumspringgreen: 0x00fa9a,
      mediumturquoise: 0x48d1cc,
      mediumvioletred: 0xc71585,
      midnightblue: 0x191970,
      mintcream: 0xf5fffa,
      mistyrose: 0xffe4e1,
      moccasin: 0xffe4b5,
      navajowhite: 0xffdead,
      navy: 0x000080,
      oldlace: 0xfdf5e6,
      olive: 0x808000,
      olivedrab: 0x6b8e23,
      orange: 0xffa500,
      orangered: 0xff4500,
      orchid: 0xda70d6,
      palegoldenrod: 0xeee8aa,
      palegreen: 0x98fb98,
      paleturquoise: 0xafeeee,
      palevioletred: 0xdb7093,
      papayawhip: 0xffefd5,
      peachpuff: 0xffdab9,
      peru: 0xcd853f,
      pink: 0xffc0cb,
      plum: 0xdda0dd,
      powderblue: 0xb0e0e6,
      purple: 0x800080,
      rebeccapurple: 0x663399,
      red: 0xff0000,
      rosybrown: 0xbc8f8f,
      royalblue: 0x4169e1,
      saddlebrown: 0x8b4513,
      salmon: 0xfa8072,
      sandybrown: 0xf4a460,
      seagreen: 0x2e8b57,
      seashell: 0xfff5ee,
      sienna: 0xa0522d,
      silver: 0xc0c0c0,
      skyblue: 0x87ceeb,
      slateblue: 0x6a5acd,
      slategray: 0x708090,
      slategrey: 0x708090,
      snow: 0xfffafa,
      springgreen: 0x00ff7f,
      steelblue: 0x4682b4,
      tan: 0xd2b48c,
      teal: 0x008080,
      thistle: 0xd8bfd8,
      tomato: 0xff6347,
      turquoise: 0x40e0d0,
      violet: 0xee82ee,
      wheat: 0xf5deb3,
      white: 0xffffff,
      whitesmoke: 0xf5f5f5,
      yellow: 0xffff00,
      yellowgreen: 0x9acd32
    };
    define(Color, color, {
      displayable: function() {
        return this.rgb().displayable();
      },
      toString: function() {
        return this.rgb() + "";
      }
    });
    function color(format) {
      var m;
      format = (format + "").trim().toLowerCase();
      return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format) ? rgbn(named[format]) : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
    }
    function rgbn(n) {
      return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
    }
    function rgba(r, g, b, a) {
      if (a <= 0)
        r = g = b = NaN;
      return new Rgb(r, g, b, a);
    }
    function rgbConvert(o) {
      if (!(o instanceof Color))
        o = color(o);
      if (!o)
        return new Rgb;
      o = o.rgb();
      return new Rgb(o.r, o.g, o.b, o.opacity);
    }
    function rgb(r, g, b, opacity) {
      return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
    }
    function Rgb(r, g, b, opacity) {
      this.r = +r;
      this.g = +g;
      this.b = +b;
      this.opacity = +opacity;
    }
    define(Rgb, rgb, extend(Color, {
      brighter: function(k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
      },
      darker: function(k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
      },
      rgb: function() {
        return this;
      },
      displayable: function() {
        return (0 <= this.r && this.r <= 255) && (0 <= this.g && this.g <= 255) && (0 <= this.b && this.b <= 255) && (0 <= this.opacity && this.opacity <= 1);
      },
      toString: function() {
        var a = this.opacity;
        a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
        return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
      }
    }));
    function hsla(h, s, l, a) {
      if (a <= 0)
        h = s = l = NaN;
      else if (l <= 0 || l >= 1)
        h = s = NaN;
      else if (s <= 0)
        h = NaN;
      return new Hsl(h, s, l, a);
    }
    function hslConvert(o) {
      if (o instanceof Hsl)
        return new Hsl(o.h, o.s, o.l, o.opacity);
      if (!(o instanceof Color))
        o = color(o);
      if (!o)
        return new Hsl;
      if (o instanceof Hsl)
        return o;
      o = o.rgb();
      var r = o.r / 255,
          g = o.g / 255,
          b = o.b / 255,
          min = Math.min(r, g, b),
          max = Math.max(r, g, b),
          h = NaN,
          s = max - min,
          l = (max + min) / 2;
      if (s) {
        if (r === max)
          h = (g - b) / s + (g < b) * 6;
        else if (g === max)
          h = (b - r) / s + 2;
        else
          h = (r - g) / s + 4;
        s /= l < 0.5 ? max + min : 2 - max - min;
        h *= 60;
      } else {
        s = l > 0 && l < 1 ? 0 : h;
      }
      return new Hsl(h, s, l, o.opacity);
    }
    function hsl(h, s, l, opacity) {
      return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
    }
    function Hsl(h, s, l, opacity) {
      this.h = +h;
      this.s = +s;
      this.l = +l;
      this.opacity = +opacity;
    }
    define(Hsl, hsl, extend(Color, {
      brighter: function(k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
      },
      darker: function(k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
      },
      rgb: function() {
        var h = this.h % 360 + (this.h < 0) * 360,
            s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
            l = this.l,
            m2 = l + (l < 0.5 ? l : 1 - l) * s,
            m1 = 2 * l - m2;
        return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
      },
      displayable: function() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
      }
    }));
    function hsl2rgb(h, m1, m2) {
      return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
    }
    var deg2rad = Math.PI / 180;
    var rad2deg = 180 / Math.PI;
    var Kn = 18;
    var Xn = 0.950470;
    var Yn = 1;
    var Zn = 1.088830;
    var t0 = 4 / 29;
    var t1 = 6 / 29;
    var t2 = 3 * t1 * t1;
    var t3 = t1 * t1 * t1;
    function labConvert(o) {
      if (o instanceof Lab)
        return new Lab(o.l, o.a, o.b, o.opacity);
      if (o instanceof Hcl) {
        var h = o.h * deg2rad;
        return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
      }
      if (!(o instanceof Rgb))
        o = rgbConvert(o);
      var b = rgb2xyz(o.r),
          a = rgb2xyz(o.g),
          l = rgb2xyz(o.b),
          x = xyz2lab((0.4124564 * b + 0.3575761 * a + 0.1804375 * l) / Xn),
          y = xyz2lab((0.2126729 * b + 0.7151522 * a + 0.0721750 * l) / Yn),
          z = xyz2lab((0.0193339 * b + 0.1191920 * a + 0.9503041 * l) / Zn);
      return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
    }
    function lab(l, a, b, opacity) {
      return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
    }
    function Lab(l, a, b, opacity) {
      this.l = +l;
      this.a = +a;
      this.b = +b;
      this.opacity = +opacity;
    }
    define(Lab, lab, extend(Color, {
      brighter: function(k) {
        return new Lab(this.l + Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
      },
      darker: function(k) {
        return new Lab(this.l - Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
      },
      rgb: function() {
        var y = (this.l + 16) / 116,
            x = isNaN(this.a) ? y : y + this.a / 500,
            z = isNaN(this.b) ? y : y - this.b / 200;
        y = Yn * lab2xyz(y);
        x = Xn * lab2xyz(x);
        z = Zn * lab2xyz(z);
        return new Rgb(xyz2rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z), xyz2rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z), xyz2rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z), this.opacity);
      }
    }));
    function xyz2lab(t) {
      return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
    }
    function lab2xyz(t) {
      return t > t1 ? t * t * t : t2 * (t - t0);
    }
    function xyz2rgb(x) {
      return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
    }
    function rgb2xyz(x) {
      return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
    }
    function hclConvert(o) {
      if (o instanceof Hcl)
        return new Hcl(o.h, o.c, o.l, o.opacity);
      if (!(o instanceof Lab))
        o = labConvert(o);
      var h = Math.atan2(o.b, o.a) * rad2deg;
      return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
    }
    function hcl(h, c, l, opacity) {
      return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
    }
    function Hcl(h, c, l, opacity) {
      this.h = +h;
      this.c = +c;
      this.l = +l;
      this.opacity = +opacity;
    }
    define(Hcl, hcl, extend(Color, {
      brighter: function(k) {
        return new Hcl(this.h, this.c, this.l + Kn * (k == null ? 1 : k), this.opacity);
      },
      darker: function(k) {
        return new Hcl(this.h, this.c, this.l - Kn * (k == null ? 1 : k), this.opacity);
      },
      rgb: function() {
        return labConvert(this).rgb();
      }
    }));
    var A = -0.14861;
    var B = +1.78277;
    var C = -0.29227;
    var D = -0.90649;
    var E = +1.97294;
    var ED = E * D;
    var EB = E * B;
    var BC_DA = B * C - D * A;
    function cubehelixConvert(o) {
      if (o instanceof Cubehelix)
        return new Cubehelix(o.h, o.s, o.l, o.opacity);
      if (!(o instanceof Rgb))
        o = rgbConvert(o);
      var r = o.r / 255,
          g = o.g / 255,
          b = o.b / 255,
          l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
          bl = b - l,
          k = (E * (g - l) - C * bl) / D,
          s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)),
          h = s ? Math.atan2(k, bl) * rad2deg - 120 : NaN;
      return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
    }
    function cubehelix(h, s, l, opacity) {
      return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
    }
    function Cubehelix(h, s, l, opacity) {
      this.h = +h;
      this.s = +s;
      this.l = +l;
      this.opacity = +opacity;
    }
    define(Cubehelix, cubehelix, extend(Color, {
      brighter: function(k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
      },
      darker: function(k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
      },
      rgb: function() {
        var h = isNaN(this.h) ? 0 : (this.h + 120) * deg2rad,
            l = +this.l,
            a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
            cosh = Math.cos(h),
            sinh = Math.sin(h);
        return new Rgb(255 * (l + a * (A * cosh + B * sinh)), 255 * (l + a * (C * cosh + D * sinh)), 255 * (l + a * (E * cosh)), this.opacity);
      }
    }));
    exports.color = color;
    exports.rgb = rgb;
    exports.hsl = hsl;
    exports.lab = lab;
    exports.hcl = hcl;
    exports.cubehelix = cubehelix;
    Object.defineProperty(exports, '__esModule', {value: true});
  }));
  return module.exports;
});

$__System.registerDynamic("2b", ["36"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('36');
  return module.exports;
});

$__System.registerDynamic("37", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  (function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (factory((global.d3 = global.d3 || {})));
  }(this, function(exports) {
    'use strict';
    function linear(t) {
      return +t;
    }
    function quadIn(t) {
      return t * t;
    }
    function quadOut(t) {
      return t * (2 - t);
    }
    function quadInOut(t) {
      return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
    }
    function cubicIn(t) {
      return t * t * t;
    }
    function cubicOut(t) {
      return --t * t * t + 1;
    }
    function cubicInOut(t) {
      return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
    }
    var exponent = 3;
    var polyIn = (function custom(e) {
      e = +e;
      function polyIn(t) {
        return Math.pow(t, e);
      }
      polyIn.exponent = custom;
      return polyIn;
    })(exponent);
    var polyOut = (function custom(e) {
      e = +e;
      function polyOut(t) {
        return 1 - Math.pow(1 - t, e);
      }
      polyOut.exponent = custom;
      return polyOut;
    })(exponent);
    var polyInOut = (function custom(e) {
      e = +e;
      function polyInOut(t) {
        return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
      }
      polyInOut.exponent = custom;
      return polyInOut;
    })(exponent);
    var pi = Math.PI;
    var halfPi = pi / 2;
    function sinIn(t) {
      return 1 - Math.cos(t * halfPi);
    }
    function sinOut(t) {
      return Math.sin(t * halfPi);
    }
    function sinInOut(t) {
      return (1 - Math.cos(pi * t)) / 2;
    }
    function expIn(t) {
      return Math.pow(2, 10 * t - 10);
    }
    function expOut(t) {
      return 1 - Math.pow(2, -10 * t);
    }
    function expInOut(t) {
      return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
    }
    function circleIn(t) {
      return 1 - Math.sqrt(1 - t * t);
    }
    function circleOut(t) {
      return Math.sqrt(1 - --t * t);
    }
    function circleInOut(t) {
      return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
    }
    var b1 = 4 / 11;
    var b2 = 6 / 11;
    var b3 = 8 / 11;
    var b4 = 3 / 4;
    var b5 = 9 / 11;
    var b6 = 10 / 11;
    var b7 = 15 / 16;
    var b8 = 21 / 22;
    var b9 = 63 / 64;
    var b0 = 1 / b1 / b1;
    function bounceIn(t) {
      return 1 - bounceOut(1 - t);
    }
    function bounceOut(t) {
      return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
    }
    function bounceInOut(t) {
      return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
    }
    var overshoot = 1.70158;
    var backIn = (function custom(s) {
      s = +s;
      function backIn(t) {
        return t * t * ((s + 1) * t - s);
      }
      backIn.overshoot = custom;
      return backIn;
    })(overshoot);
    var backOut = (function custom(s) {
      s = +s;
      function backOut(t) {
        return --t * t * ((s + 1) * t + s) + 1;
      }
      backOut.overshoot = custom;
      return backOut;
    })(overshoot);
    var backInOut = (function custom(s) {
      s = +s;
      function backInOut(t) {
        return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
      }
      backInOut.overshoot = custom;
      return backInOut;
    })(overshoot);
    var tau = 2 * Math.PI;
    var amplitude = 1;
    var period = 0.3;
    var elasticIn = (function custom(a, p) {
      var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
      function elasticIn(t) {
        return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
      }
      elasticIn.amplitude = function(a) {
        return custom(a, p * tau);
      };
      elasticIn.period = function(p) {
        return custom(a, p);
      };
      return elasticIn;
    })(amplitude, period);
    var elasticOut = (function custom(a, p) {
      var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
      function elasticOut(t) {
        return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
      }
      elasticOut.amplitude = function(a) {
        return custom(a, p * tau);
      };
      elasticOut.period = function(p) {
        return custom(a, p);
      };
      return elasticOut;
    })(amplitude, period);
    var elasticInOut = (function custom(a, p) {
      var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
      function elasticInOut(t) {
        return ((t = t * 2 - 1) < 0 ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p) : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
      }
      elasticInOut.amplitude = function(a) {
        return custom(a, p * tau);
      };
      elasticInOut.period = function(p) {
        return custom(a, p);
      };
      return elasticInOut;
    })(amplitude, period);
    exports.easeLinear = linear;
    exports.easeQuad = quadInOut;
    exports.easeQuadIn = quadIn;
    exports.easeQuadOut = quadOut;
    exports.easeQuadInOut = quadInOut;
    exports.easeCubic = cubicInOut;
    exports.easeCubicIn = cubicIn;
    exports.easeCubicOut = cubicOut;
    exports.easeCubicInOut = cubicInOut;
    exports.easePoly = polyInOut;
    exports.easePolyIn = polyIn;
    exports.easePolyOut = polyOut;
    exports.easePolyInOut = polyInOut;
    exports.easeSin = sinInOut;
    exports.easeSinIn = sinIn;
    exports.easeSinOut = sinOut;
    exports.easeSinInOut = sinInOut;
    exports.easeExp = expInOut;
    exports.easeExpIn = expIn;
    exports.easeExpOut = expOut;
    exports.easeExpInOut = expInOut;
    exports.easeCircle = circleInOut;
    exports.easeCircleIn = circleIn;
    exports.easeCircleOut = circleOut;
    exports.easeCircleInOut = circleInOut;
    exports.easeBounce = bounceOut;
    exports.easeBounceIn = bounceIn;
    exports.easeBounceOut = bounceOut;
    exports.easeBounceInOut = bounceInOut;
    exports.easeBack = backInOut;
    exports.easeBackIn = backIn;
    exports.easeBackOut = backOut;
    exports.easeBackInOut = backInOut;
    exports.easeElastic = elasticOut;
    exports.easeElasticIn = elasticIn;
    exports.easeElasticOut = elasticOut;
    exports.easeElasticInOut = elasticInOut;
    Object.defineProperty(exports, '__esModule', {value: true});
  }));
  return module.exports;
});

$__System.registerDynamic("38", ["37"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('37');
  return module.exports;
});

$__System.registerDynamic("39", ["1e", "3a", "34", "2c", "2b", "38"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  (function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, $__require('1e'), $__require('3a'), $__require('34'), $__require('2c'), $__require('2b'), $__require('38')) : typeof define === 'function' && define.amd ? define(['exports', 'd3-selection', 'd3-dispatch', 'd3-timer', 'd3-interpolate', 'd3-color', 'd3-ease'], factory) : (factory((global.d3 = global.d3 || {}), global.d3, global.d3, global.d3, global.d3, global.d3, global.d3));
  }(this, function(exports, d3Selection, d3Dispatch, d3Timer, d3Interpolate, d3Color, d3Ease) {
    'use strict';
    var emptyOn = d3Dispatch.dispatch("start", "end", "interrupt");
    var emptyTween = [];
    var CREATED = 0;
    var SCHEDULED = 1;
    var STARTING = 2;
    var STARTED = 3;
    var ENDING = 4;
    var ENDED = 5;
    function schedule(node, name, id, index, group, timing) {
      var schedules = node.__transition;
      if (!schedules)
        node.__transition = {};
      else if (id in schedules)
        return;
      create(node, id, {
        name: name,
        index: index,
        group: group,
        on: emptyOn,
        tween: emptyTween,
        time: timing.time,
        delay: timing.delay,
        duration: timing.duration,
        ease: timing.ease,
        timer: null,
        state: CREATED
      });
    }
    function init(node, id) {
      var schedule = node.__transition;
      if (!schedule || !(schedule = schedule[id]) || schedule.state > CREATED)
        throw new Error("too late");
      return schedule;
    }
    function set(node, id) {
      var schedule = node.__transition;
      if (!schedule || !(schedule = schedule[id]) || schedule.state > STARTING)
        throw new Error("too late");
      return schedule;
    }
    function get(node, id) {
      var schedule = node.__transition;
      if (!schedule || !(schedule = schedule[id]))
        throw new Error("too late");
      return schedule;
    }
    function create(node, id, self) {
      var schedules = node.__transition,
          tween;
      schedules[id] = self;
      self.timer = d3Timer.timer(schedule, 0, self.time);
      function schedule(elapsed) {
        self.state = SCHEDULED;
        if (self.delay <= elapsed)
          start(elapsed - self.delay);
        else
          self.timer.restart(start, self.delay, self.time);
      }
      function start(elapsed) {
        var i,
            j,
            n,
            o;
        for (i in schedules) {
          o = schedules[i];
          if (o.name !== self.name)
            continue;
          if (o.state === STARTED) {
            o.state = ENDED;
            o.timer.stop();
            o.on.call("interrupt", node, node.__data__, o.index, o.group);
            delete schedules[i];
          } else if (+i < id) {
            o.state = ENDED;
            o.timer.stop();
            delete schedules[i];
          }
        }
        d3Timer.timeout(function() {
          if (self.state === STARTED) {
            self.timer.restart(tick, self.delay, self.time);
            tick(elapsed);
          }
        });
        self.state = STARTING;
        self.on.call("start", node, node.__data__, self.index, self.group);
        if (self.state !== STARTING)
          return;
        self.state = STARTED;
        tween = new Array(n = self.tween.length);
        for (i = 0, j = -1; i < n; ++i) {
          if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
            tween[++j] = o;
          }
        }
        tween.length = j + 1;
      }
      function tick(elapsed) {
        var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.state = ENDING, 1),
            i = -1,
            n = tween.length;
        while (++i < n) {
          tween[i].call(null, t);
        }
        if (self.state === ENDING) {
          self.state = ENDED;
          self.timer.stop();
          self.on.call("end", node, node.__data__, self.index, self.group);
          for (i in schedules)
            if (+i !== id)
              return void delete schedules[id];
          delete node.__transition;
        }
      }
    }
    function interrupt(node, name) {
      var schedules = node.__transition,
          schedule,
          active,
          empty = true,
          i;
      if (!schedules)
        return;
      name = name == null ? null : name + "";
      for (i in schedules) {
        if ((schedule = schedules[i]).name !== name) {
          empty = false;
          continue;
        }
        active = schedule.state === STARTED;
        schedule.state = ENDED;
        schedule.timer.stop();
        if (active)
          schedule.on.call("interrupt", node, node.__data__, schedule.index, schedule.group);
        delete schedules[i];
      }
      if (empty)
        delete node.__transition;
    }
    function selection_interrupt(name) {
      return this.each(function() {
        interrupt(this, name);
      });
    }
    function tweenRemove(id, name) {
      var tween0,
          tween1;
      return function() {
        var schedule = set(this, id),
            tween = schedule.tween;
        if (tween !== tween0) {
          tween1 = tween0 = tween;
          for (var i = 0,
              n = tween1.length; i < n; ++i) {
            if (tween1[i].name === name) {
              tween1 = tween1.slice();
              tween1.splice(i, 1);
              break;
            }
          }
        }
        schedule.tween = tween1;
      };
    }
    function tweenFunction(id, name, value) {
      var tween0,
          tween1;
      if (typeof value !== "function")
        throw new Error;
      return function() {
        var schedule = set(this, id),
            tween = schedule.tween;
        if (tween !== tween0) {
          tween1 = (tween0 = tween).slice();
          for (var t = {
            name: name,
            value: value
          },
              i = 0,
              n = tween1.length; i < n; ++i) {
            if (tween1[i].name === name) {
              tween1[i] = t;
              break;
            }
          }
          if (i === n)
            tween1.push(t);
        }
        schedule.tween = tween1;
      };
    }
    function transition_tween(name, value) {
      var id = this._id;
      name += "";
      if (arguments.length < 2) {
        var tween = get(this.node(), id).tween;
        for (var i = 0,
            n = tween.length,
            t; i < n; ++i) {
          if ((t = tween[i]).name === name) {
            return t.value;
          }
        }
        return null;
      }
      return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
    }
    function tweenValue(transition, name, value) {
      var id = transition._id;
      transition.each(function() {
        var schedule = set(this, id);
        (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
      });
      return function(node) {
        return get(node, id).value[name];
      };
    }
    function interpolate(a, b) {
      var c;
      return (typeof b === "number" ? d3Interpolate.interpolateNumber : b instanceof d3Color.color ? d3Interpolate.interpolateRgb : (c = d3Color.color(b)) ? (b = c, d3Interpolate.interpolateRgb) : d3Interpolate.interpolateString)(a, b);
    }
    function attrRemove(name) {
      return function() {
        this.removeAttribute(name);
      };
    }
    function attrRemoveNS(fullname) {
      return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
      };
    }
    function attrConstant(name, interpolate, value1) {
      var value00,
          interpolate0;
      return function() {
        var value0 = this.getAttribute(name);
        return value0 === value1 ? null : value0 === value00 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value1);
      };
    }
    function attrConstantNS(fullname, interpolate, value1) {
      var value00,
          interpolate0;
      return function() {
        var value0 = this.getAttributeNS(fullname.space, fullname.local);
        return value0 === value1 ? null : value0 === value00 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value1);
      };
    }
    function attrFunction(name, interpolate, value) {
      var value00,
          value10,
          interpolate0;
      return function() {
        var value0,
            value1 = value(this);
        if (value1 == null)
          return void this.removeAttribute(name);
        value0 = this.getAttribute(name);
        return value0 === value1 ? null : value0 === value00 && value1 === value10 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value10 = value1);
      };
    }
    function attrFunctionNS(fullname, interpolate, value) {
      var value00,
          value10,
          interpolate0;
      return function() {
        var value0,
            value1 = value(this);
        if (value1 == null)
          return void this.removeAttributeNS(fullname.space, fullname.local);
        value0 = this.getAttributeNS(fullname.space, fullname.local);
        return value0 === value1 ? null : value0 === value00 && value1 === value10 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value10 = value1);
      };
    }
    function transition_attr(name, value) {
      var fullname = d3Selection.namespace(name),
          i = fullname === "transform" ? d3Interpolate.interpolateTransformSvg : interpolate;
      return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
    }
    function attrTweenNS(fullname, value) {
      function tween() {
        var node = this,
            i = value.apply(node, arguments);
        return i && function(t) {
          node.setAttributeNS(fullname.space, fullname.local, i(t));
        };
      }
      tween._value = value;
      return tween;
    }
    function attrTween(name, value) {
      function tween() {
        var node = this,
            i = value.apply(node, arguments);
        return i && function(t) {
          node.setAttribute(name, i(t));
        };
      }
      tween._value = value;
      return tween;
    }
    function transition_attrTween(name, value) {
      var key = "attr." + name;
      if (arguments.length < 2)
        return (key = this.tween(key)) && key._value;
      if (value == null)
        return this.tween(key, null);
      if (typeof value !== "function")
        throw new Error;
      var fullname = d3Selection.namespace(name);
      return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
    }
    function delayFunction(id, value) {
      return function() {
        init(this, id).delay = +value.apply(this, arguments);
      };
    }
    function delayConstant(id, value) {
      return value = +value, function() {
        init(this, id).delay = value;
      };
    }
    function transition_delay(value) {
      var id = this._id;
      return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id, value)) : get(this.node(), id).delay;
    }
    function durationFunction(id, value) {
      return function() {
        set(this, id).duration = +value.apply(this, arguments);
      };
    }
    function durationConstant(id, value) {
      return value = +value, function() {
        set(this, id).duration = value;
      };
    }
    function transition_duration(value) {
      var id = this._id;
      return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id, value)) : get(this.node(), id).duration;
    }
    function easeConstant(id, value) {
      if (typeof value !== "function")
        throw new Error;
      return function() {
        set(this, id).ease = value;
      };
    }
    function transition_ease(value) {
      var id = this._id;
      return arguments.length ? this.each(easeConstant(id, value)) : get(this.node(), id).ease;
    }
    function transition_filter(match) {
      if (typeof match !== "function")
        match = d3Selection.matcher(match);
      for (var groups = this._groups,
          m = groups.length,
          subgroups = new Array(m),
          j = 0; j < m; ++j) {
        for (var group = groups[j],
            n = group.length,
            subgroup = subgroups[j] = [],
            node,
            i = 0; i < n; ++i) {
          if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
            subgroup.push(node);
          }
        }
      }
      return new Transition(subgroups, this._parents, this._name, this._id);
    }
    function transition_merge(transition) {
      if (transition._id !== this._id)
        throw new Error;
      for (var groups0 = this._groups,
          groups1 = transition._groups,
          m0 = groups0.length,
          m1 = groups1.length,
          m = Math.min(m0, m1),
          merges = new Array(m0),
          j = 0; j < m; ++j) {
        for (var group0 = groups0[j],
            group1 = groups1[j],
            n = group0.length,
            merge = merges[j] = new Array(n),
            node,
            i = 0; i < n; ++i) {
          if (node = group0[i] || group1[i]) {
            merge[i] = node;
          }
        }
      }
      for (; j < m0; ++j) {
        merges[j] = groups0[j];
      }
      return new Transition(merges, this._parents, this._name, this._id);
    }
    function start(name) {
      return (name + "").trim().split(/^|\s+/).every(function(t) {
        var i = t.indexOf(".");
        if (i >= 0)
          t = t.slice(0, i);
        return !t || t === "start";
      });
    }
    function onFunction(id, name, listener) {
      var on0,
          on1,
          sit = start(name) ? init : set;
      return function() {
        var schedule = sit(this, id),
            on = schedule.on;
        if (on !== on0)
          (on1 = (on0 = on).copy()).on(name, listener);
        schedule.on = on1;
      };
    }
    function transition_on(name, listener) {
      var id = this._id;
      return arguments.length < 2 ? get(this.node(), id).on.on(name) : this.each(onFunction(id, name, listener));
    }
    function removeFunction(id) {
      return function() {
        var parent = this.parentNode;
        for (var i in this.__transition)
          if (+i !== id)
            return;
        if (parent)
          parent.removeChild(this);
      };
    }
    function transition_remove() {
      return this.on("end.remove", removeFunction(this._id));
    }
    function transition_select(select) {
      var name = this._name,
          id = this._id;
      if (typeof select !== "function")
        select = d3Selection.selector(select);
      for (var groups = this._groups,
          m = groups.length,
          subgroups = new Array(m),
          j = 0; j < m; ++j) {
        for (var group = groups[j],
            n = group.length,
            subgroup = subgroups[j] = new Array(n),
            node,
            subnode,
            i = 0; i < n; ++i) {
          if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
            if ("__data__" in node)
              subnode.__data__ = node.__data__;
            subgroup[i] = subnode;
            schedule(subgroup[i], name, id, i, subgroup, get(node, id));
          }
        }
      }
      return new Transition(subgroups, this._parents, name, id);
    }
    function transition_selectAll(select) {
      var name = this._name,
          id = this._id;
      if (typeof select !== "function")
        select = d3Selection.selectorAll(select);
      for (var groups = this._groups,
          m = groups.length,
          subgroups = [],
          parents = [],
          j = 0; j < m; ++j) {
        for (var group = groups[j],
            n = group.length,
            node,
            i = 0; i < n; ++i) {
          if (node = group[i]) {
            for (var children = select.call(node, node.__data__, i, group),
                child,
                inherit = get(node, id),
                k = 0,
                l = children.length; k < l; ++k) {
              if (child = children[k]) {
                schedule(child, name, id, k, children, inherit);
              }
            }
            subgroups.push(children);
            parents.push(node);
          }
        }
      }
      return new Transition(subgroups, parents, name, id);
    }
    var Selection = d3Selection.selection.prototype.constructor;
    function transition_selection() {
      return new Selection(this._groups, this._parents);
    }
    function styleRemove(name, interpolate) {
      var value00,
          value10,
          interpolate0;
      return function() {
        var style = d3Selection.window(this).getComputedStyle(this, null),
            value0 = style.getPropertyValue(name),
            value1 = (this.style.removeProperty(name), style.getPropertyValue(name));
        return value0 === value1 ? null : value0 === value00 && value1 === value10 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value10 = value1);
      };
    }
    function styleRemoveEnd(name) {
      return function() {
        this.style.removeProperty(name);
      };
    }
    function styleConstant(name, interpolate, value1) {
      var value00,
          interpolate0;
      return function() {
        var value0 = d3Selection.window(this).getComputedStyle(this, null).getPropertyValue(name);
        return value0 === value1 ? null : value0 === value00 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value1);
      };
    }
    function styleFunction(name, interpolate, value) {
      var value00,
          value10,
          interpolate0;
      return function() {
        var style = d3Selection.window(this).getComputedStyle(this, null),
            value0 = style.getPropertyValue(name),
            value1 = value(this);
        if (value1 == null)
          value1 = (this.style.removeProperty(name), style.getPropertyValue(name));
        return value0 === value1 ? null : value0 === value00 && value1 === value10 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value10 = value1);
      };
    }
    function transition_style(name, value, priority) {
      var i = (name += "") === "transform" ? d3Interpolate.interpolateTransformCss : interpolate;
      return value == null ? this.styleTween(name, styleRemove(name, i)).on("end.style." + name, styleRemoveEnd(name)) : this.styleTween(name, typeof value === "function" ? styleFunction(name, i, tweenValue(this, "style." + name, value)) : styleConstant(name, i, value), priority);
    }
    function styleTween(name, value, priority) {
      function tween() {
        var node = this,
            i = value.apply(node, arguments);
        return i && function(t) {
          node.style.setProperty(name, i(t), priority);
        };
      }
      tween._value = value;
      return tween;
    }
    function transition_styleTween(name, value, priority) {
      var key = "style." + (name += "");
      if (arguments.length < 2)
        return (key = this.tween(key)) && key._value;
      if (value == null)
        return this.tween(key, null);
      if (typeof value !== "function")
        throw new Error;
      return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
    }
    function textConstant(value) {
      return function() {
        this.textContent = value;
      };
    }
    function textFunction(value) {
      return function() {
        var value1 = value(this);
        this.textContent = value1 == null ? "" : value1;
      };
    }
    function transition_text(value) {
      return this.tween("text", typeof value === "function" ? textFunction(tweenValue(this, "text", value)) : textConstant(value == null ? "" : value + ""));
    }
    function transition_transition() {
      var name = this._name,
          id0 = this._id,
          id1 = newId();
      for (var groups = this._groups,
          m = groups.length,
          j = 0; j < m; ++j) {
        for (var group = groups[j],
            n = group.length,
            node,
            i = 0; i < n; ++i) {
          if (node = group[i]) {
            var inherit = get(node, id0);
            schedule(node, name, id1, i, group, {
              time: inherit.time + inherit.delay + inherit.duration,
              delay: 0,
              duration: inherit.duration,
              ease: inherit.ease
            });
          }
        }
      }
      return new Transition(groups, this._parents, name, id1);
    }
    var id = 0;
    function Transition(groups, parents, name, id) {
      this._groups = groups;
      this._parents = parents;
      this._name = name;
      this._id = id;
    }
    function transition(name) {
      return d3Selection.selection().transition(name);
    }
    function newId() {
      return ++id;
    }
    var selection_prototype = d3Selection.selection.prototype;
    Transition.prototype = transition.prototype = {
      constructor: Transition,
      select: transition_select,
      selectAll: transition_selectAll,
      filter: transition_filter,
      merge: transition_merge,
      selection: transition_selection,
      transition: transition_transition,
      call: selection_prototype.call,
      nodes: selection_prototype.nodes,
      node: selection_prototype.node,
      size: selection_prototype.size,
      empty: selection_prototype.empty,
      each: selection_prototype.each,
      on: transition_on,
      attr: transition_attr,
      attrTween: transition_attrTween,
      style: transition_style,
      styleTween: transition_styleTween,
      text: transition_text,
      remove: transition_remove,
      tween: transition_tween,
      delay: transition_delay,
      duration: transition_duration,
      ease: transition_ease
    };
    var defaultTiming = {
      time: null,
      delay: 0,
      duration: 250,
      ease: d3Ease.easeCubicInOut
    };
    function inherit(node, id) {
      var timing;
      while (!(timing = node.__transition) || !(timing = timing[id])) {
        if (!(node = node.parentNode)) {
          return defaultTiming.time = d3Timer.now(), defaultTiming;
        }
      }
      return timing;
    }
    function selection_transition(name) {
      var id,
          timing;
      if (name instanceof Transition) {
        id = name._id, name = name._name;
      } else {
        id = newId(), (timing = defaultTiming).time = d3Timer.now(), name = name == null ? null : name + "";
      }
      for (var groups = this._groups,
          m = groups.length,
          j = 0; j < m; ++j) {
        for (var group = groups[j],
            n = group.length,
            node,
            i = 0; i < n; ++i) {
          if (node = group[i]) {
            schedule(node, name, id, i, group, timing || inherit(node, id));
          }
        }
      }
      return new Transition(groups, this._parents, name, id);
    }
    d3Selection.selection.prototype.interrupt = selection_interrupt;
    d3Selection.selection.prototype.transition = selection_transition;
    var root = [null];
    function active(node, name) {
      var schedules = node.__transition,
          schedule,
          i;
      if (schedules) {
        name = name == null ? null : name + "";
        for (i in schedules) {
          if ((schedule = schedules[i]).state > SCHEDULED && schedule.name === name) {
            return new Transition([[node]], root, name, +i);
          }
        }
      }
      return null;
    }
    exports.transition = transition;
    exports.active = active;
    exports.interrupt = interrupt;
    Object.defineProperty(exports, '__esModule', {value: true});
  }));
  return module.exports;
});

$__System.registerDynamic("3b", ["39"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('39');
  return module.exports;
});

$__System.register('20', ['1e', 'b'], function (_export) {
    'use strict';

    var d3_select, defaultHeaderTexts, colors, record, preData;

    _export('updateInfoPosition', updateInfoPosition);

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function cleanFields() {
        var keys = ["title", "team", "result", "record"];
        //let keys = ["headline", "team", "final", "medal", "world", "standfirst"];
        keys.forEach(function (key) {
            return d3_select(".js-" + key).text("");
        });
    }

    function getRecordHtml(records, id) {
        // TODO: double check calc
        var cf = records.filter(function (dr) {
            return isNumeric(dr.color);
        }).length;
        var cw = records.filter(function (dr) {
            return dr.color === "wr";
        }).length;
        var cm = records.length - cf - cw;
        var tw = cw > 1 ? " WRs" : " wr";
        var tm = cm > 1 ? " medals" : " medal";

        return (cm > 0 ? cm + tm : "") + (cm > 0 && cw > 0 ? " and " : "") + (cw > 0 ? cw + tw : "");
    }

    function updateInfoPosition(data) {
        if (!data && !preData) return;
        if (!data && preData) data = preData;

        var pos = getInfoPos(data);
        d3_select(".tooltip").style("opacity", 1).style("top", pos.top).style("left", pos.left);

        preData = data;
    }

    function getInfoPos(data) {
        var top = undefined,
            left = undefined;
        var alignTop = undefined,
            alignLeft = undefined;

        var state = d3_select(".js-chart").attr("data-state");
        var chart = document.querySelector(".js-chart").getBoundingClientRect();
        var select = document.querySelector("#" + data.id).getBoundingClientRect();
        var width = document.querySelector(".tooltip").offsetWidth;
        var height = document.querySelector(".tooltip").offsetHeight; // + 30;

        var testFinal = state === "final";
        var test1_4Bottom = select.top > chart.top + chart.height * 3 / 4;
        var test1_3Top = select.top < chart.top + chart.height / 3;

        /* horizontal align */
        var x = {
            l: select.left - width - 60, // left
            c: select.left - width / 2 + data.r, // center
            r: chart.width - width // right
        };
        /* vertical align */
        var y = {
            t: select.top - height - 30, // top
            m: select.top - height / 2 + data.r, // middle
            b: select.top + data.r * 2 + 30 // under
        };

        // 1. default: middleLeft, topLeft(bottom 1/4), topCenter (fianl)
        left = testFinal ? x.c : x.l;
        top = testFinal || test1_4Bottom ? y.t : y.m;

        // 2. test and adjust outside edgs: top, left, right
        var testTop = top > chart.top;
        top = testTop ? top : chart.top;

        var testLeft = left > 0;
        var testRight = left + width < chart.width;
        left = testLeft ? left : 0;
        left = testRight ? left : x.r;

        // 3. test overlay
        var testOverlay = select.left < left + width && select.top + data.r * 2 < top + height;
        if (testOverlay) {
            top = test1_3Top ? y.b : y.t;
        }

        return { top: top + "px", left: left + "px" };
    }
    return {
        setters: [function (_e) {
            d3_select = _e.select;
        }, function (_b) {
            defaultHeaderTexts = _b.defaultHeaderTexts;
            colors = _b.colors;
            record = _b.record;
        }],
        execute: function () {
            _export('default', function (data, records) {
                //console.log(data);
                if (!records) {

                    cleanFields();
                    d3_select(".tooltip").style("opacity", 0);
                } else {
                    var attrs = data.attrs;
                    var _event = window.location.search.replace("?", "");

                    d3_select(".js-title").text(attrs.name);
                    d3_select(".js-team").text(attrs.team);
                    d3_select(".js-record").html(getRecordHtml(records, data.id));
                    d3_select(".js-result").html((isNumeric(data.color) ? "rank " + data.color + " - " : "<span class='icon-medal' style='background-color:" + colors[data.color] + "'></span>") + attrs.mark + record.type + " (" + attrs.year + ")" + (data.x === record.wr.x ? " WR " : "") + (data.x === record.or.x ? " OR" : ""));

                    updateInfoPosition(data);
                }
            });

            preData = null;
        }
    };
});
$__System.register('3c', ['11', '20', '1e', '3b', 'b', '3d'], function (_export) {
    'use strict';

    var utils, updateInfo, d3_select, transition, colors, sync, record, showHighlightAxis, updateDotAnimation, hideHighlight, hideDotAnimation, cxShift, cyShift, cx, cy, select;

    _export('showBestAthlete', showBestAthlete);

    _export('hideAllAthletes', hideAllAthletes);

    function showBestAthlete(d1, state) {
        var attrs = d1.attrs;
        //let x = sync.scale.x(d1.x);
        //let y = sync.scale.y(d1.y);

        // change opacity
        select.all = d3_select(".js-chart").selectAll(".dots circle").style("transition", "0.25s").classed("o-15", function (d) {
            return d.o !== 0 ? true : false;
        });

        select.related = select.all.filter(function (d2) {
            return d2.attrs.name.indexOf(attrs.name) > -1;
        }).classed("o-1", function (d) {
            return d.o !== 0 ? true : false;
        }).attr("r", function (d) {
            return d.r * 2;
        });

        if (state !== "final") {
            ["or", "wr"].forEach(function (type) {
                d3_select("#" + record[type].id).classed("o-15", function (d2) {
                    return d2.attrs.name.indexOf(attrs.name) === -1 ? true : false;
                });
            });
        }
        // remove stroke on previous selected
        if (select.pre) {
            select.pre.attr("stroke", null);
        }
        // add stroke to current selected
        select.pre = d3_select("#" + d1.id).attr("stroke", "black");

        // update info and highlight
        updateInfo(d1, select.related._groups[0].map(function (el) {
            return el.__data__;
        }));
        hideDotAnimation();
        showHighlightAxis(d1);
    }

    function hideAllAthletes(d1) {
        var attrs = d1.attrs;

        select.all.classed("o-1", false).classed("o-15", false).style("transition", "0s");

        select.related.attr("r", function (d) {
            return d.r;
        });
    }

    return {
        setters: [function (_) {
            utils = _['default'];
        }, function (_2) {
            updateInfo = _2['default'];
        }, function (_e) {
            d3_select = _e.select;
        }, function (_b) {
            transition = _b.transition;
        }, function (_b2) {
            colors = _b2.colors;
            sync = _b2.sync;
            record = _b2.record;
        }, function (_d) {
            showHighlightAxis = _d.showHighlightAxis;
            updateDotAnimation = _d.updateDotAnimation;
            hideHighlight = _d.hideHighlight;
            hideDotAnimation = _d.hideDotAnimation;
        }],
        execute: function () {
            cxShift = function cxShift(d, r) {
                return r * ((d.index - 1) * 2 - (d.count - 1)) * 0.75;
            };

            cyShift = function cyShift(d, r) {
                return 0.5 * ((d.index - 1) * 2 - (d.count - 1)) * 0.5;
            };

            cx = function cx(d, r, x) {
                return x(d.x);
            };

            // + (d.count ? cxShift(d, cfg.radius) : 0);

            cy = function cy(d, r, y) {
                return y(d.y) - (d.count ? cyShift(d, r) : 0);
            };

            _export('default', function (cfg) {

                // TODO: depends on h or v direction
                // TODO: recalc r, temp 1%
                var dots = undefined;
                var tempColor = function tempColor(d) {
                    return colors[d.color] || cfg.color ? colors[d.color] || cfg.color : colors.others;
                };

                this.init = function (data, scale) {
                    cfg.ilast = data.length - 1;
                    data.map(function (dd, i) {
                        dd.r = cfg.radius;
                        dd.id = cfg.dataset.slice(0, 1) + i;
                        return dd;
                    });

                    dots = d3_select("." + cfg.dataset).selectAll("circle").data(data).enter().append("circle").attr("id", function (d) {
                        return d.id;
                    }).attr("data-year", function (d) {
                        return d.attrs.year;
                    }).attr("data-mark", function (d) {
                        return d.attrs.mark;
                    }).attr("data-name", function (d) {
                        return d.attrs.name;
                    }).attr("cx", function (d) {
                        return cx(d, cfg.radius, scale.x) + "%";
                    }).attr("cy", function (d) {
                        return cy(d, cfg.radius, scale.y) + "%";
                    }).attr("r", cfg.radius).attr("fill-opacity", 0).attr("fill", function (d) {
                        return tempColor(d);
                    }).attr("stroke-opacity", 0).attr("stroke", function () {
                        if (cfg.stroke) return cfg.stroke;
                    }).attr("stroke-width", 1);
                    // interaction
                    /*.on("mouseover", d => { 
                        showBestAthlete(d, cfg.dataset); 
                        hideDotAnimation(); 
                    })
                    .on("mouseout",  d => { 
                        hideAllAthletes(d);
                        updateDotAnimation(d);
                    });*/

                    // best of each state for highlight
                    cfg.best = cfg.dataset !== "medal" ? data[cfg.ilast] : record.or;

                    // TODO: add most frequent ?
                    // ...
                };

                // update
                this.update = function (opt, scale, opacity) {
                    //let delay = cfg.dataset === "world" ? 0.1:1;//cfg.ilast/(opt.duration*1000) : 0;
                    //console.log(cfg.dataset, delay, cfg.ilast);

                    dots.style("transition", "0s").each(function (d) {
                        return d.o = d.cn ? 1 : opacity;
                    }).transition()
                    //.delay((d, i) => i*delay)
                    .duration(opt.duration * 1000).attr("fill-opacity", opacity).attr("stroke-opacity", opacity !== 0 ? 0.8 : 0).attr("cx", function (d) {
                        return cx(d, cfg.radius, scale.x) + "%";
                    }).attr("cy", function (d) {
                        return cy(d, cfg.radius, scale.y) + "%";
                    });

                    // disable events on transition
                    // console.log("event lock");
                    var elParent = d3_select("." + cfg.dataset);
                    elParent.style("pointer-events", "none");
                    hideHighlight();

                    var state = undefined;
                    var delay1 = opt.duration ? opt.duration : 0.5;
                    var delay2 = opt.duration ? opt.duration + 3 : 0.5;
                    window.setTimeout(function () {
                        state = d3_select(".js-chart").attr("data-state");
                        if (state === cfg.dataset) {
                            showBestAthlete(cfg.best, state);
                        } else if (state === "mixed") {
                            d3_select(".btn-next").style("pointer-events", "all").classed("btn-disable", false);
                        }
                    }, delay1 * 1000);

                    window.setTimeout(function () {
                        hideAllAthletes(cfg.best);

                        if (state === cfg.dataset) {
                            updateDotAnimation(cfg.best);
                            d3_select(".btn-next").style("pointer-events", "all").classed("btn-disable", false);
                        }

                        //console.log("event free");
                        elParent.style("pointer-events", opacity === 0 ? "none" : "all");
                    }, delay2 * 1000);
                };
            });

            // interaction
            select = {
                all: null,
                related: null,
                pre: null
            };
        }
    };
});
$__System.registerDynamic("3e", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  (function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (factory((global.d3 = global.d3 || {})));
  }(this, function(exports) {
    'use strict';
    var xhtml = "http://www.w3.org/1999/xhtml";
    var namespaces = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: xhtml,
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/"
    };
    function namespace(name) {
      var prefix = name += "",
          i = prefix.indexOf(":");
      if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns")
        name = name.slice(i + 1);
      return namespaces.hasOwnProperty(prefix) ? {
        space: namespaces[prefix],
        local: name
      } : name;
    }
    function creatorInherit(name) {
      return function() {
        var document = this.ownerDocument,
            uri = this.namespaceURI;
        return uri === xhtml && document.documentElement.namespaceURI === xhtml ? document.createElement(name) : document.createElementNS(uri, name);
      };
    }
    function creatorFixed(fullname) {
      return function() {
        return this.ownerDocument.createElementNS(fullname.space, fullname.local);
      };
    }
    function creator(name) {
      var fullname = namespace(name);
      return (fullname.local ? creatorFixed : creatorInherit)(fullname);
    }
    var nextId = 0;
    function local() {
      return new Local;
    }
    function Local() {
      this._ = "@" + (++nextId).toString(36);
    }
    Local.prototype = local.prototype = {
      constructor: Local,
      get: function(node) {
        var id = this._;
        while (!(id in node))
          if (!(node = node.parentNode))
            return;
        return node[id];
      },
      set: function(node, value) {
        return node[this._] = value;
      },
      remove: function(node) {
        return this._ in node && delete node[this._];
      },
      toString: function() {
        return this._;
      }
    };
    var matcher = function(selector) {
      return function() {
        return this.matches(selector);
      };
    };
    if (typeof document !== "undefined") {
      var element = document.documentElement;
      if (!element.matches) {
        var vendorMatches = element.webkitMatchesSelector || element.msMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector;
        matcher = function(selector) {
          return function() {
            return vendorMatches.call(this, selector);
          };
        };
      }
    }
    var matcher$1 = matcher;
    var filterEvents = {};
    exports.event = null;
    if (typeof document !== "undefined") {
      var element$1 = document.documentElement;
      if (!("onmouseenter" in element$1)) {
        filterEvents = {
          mouseenter: "mouseover",
          mouseleave: "mouseout"
        };
      }
    }
    function filterContextListener(listener, index, group) {
      listener = contextListener(listener, index, group);
      return function(event) {
        var related = event.relatedTarget;
        if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
          listener.call(this, event);
        }
      };
    }
    function contextListener(listener, index, group) {
      return function(event1) {
        var event0 = exports.event;
        exports.event = event1;
        try {
          listener.call(this, this.__data__, index, group);
        } finally {
          exports.event = event0;
        }
      };
    }
    function parseTypenames(typenames) {
      return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "",
            i = t.indexOf(".");
        if (i >= 0)
          name = t.slice(i + 1), t = t.slice(0, i);
        return {
          type: t,
          name: name
        };
      });
    }
    function onRemove(typename) {
      return function() {
        var on = this.__on;
        if (!on)
          return;
        for (var j = 0,
            i = -1,
            m = on.length,
            o; j < m; ++j) {
          if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
            this.removeEventListener(o.type, o.listener, o.capture);
          } else {
            on[++i] = o;
          }
        }
        if (++i)
          on.length = i;
        else
          delete this.__on;
      };
    }
    function onAdd(typename, value, capture) {
      var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
      return function(d, i, group) {
        var on = this.__on,
            o,
            listener = wrap(value, i, group);
        if (on)
          for (var j = 0,
              m = on.length; j < m; ++j) {
            if ((o = on[j]).type === typename.type && o.name === typename.name) {
              this.removeEventListener(o.type, o.listener, o.capture);
              this.addEventListener(o.type, o.listener = listener, o.capture = capture);
              o.value = value;
              return;
            }
          }
        this.addEventListener(typename.type, listener, capture);
        o = {
          type: typename.type,
          name: typename.name,
          value: value,
          listener: listener,
          capture: capture
        };
        if (!on)
          this.__on = [o];
        else
          on.push(o);
      };
    }
    function selection_on(typename, value, capture) {
      var typenames = parseTypenames(typename + ""),
          i,
          n = typenames.length,
          t;
      if (arguments.length < 2) {
        var on = this.node().__on;
        if (on)
          for (var j = 0,
              m = on.length,
              o; j < m; ++j) {
            for (i = 0, o = on[j]; i < n; ++i) {
              if ((t = typenames[i]).type === o.type && t.name === o.name) {
                return o.value;
              }
            }
          }
        return;
      }
      on = value ? onAdd : onRemove;
      if (capture == null)
        capture = false;
      for (i = 0; i < n; ++i)
        this.each(on(typenames[i], value, capture));
      return this;
    }
    function customEvent(event1, listener, that, args) {
      var event0 = exports.event;
      event1.sourceEvent = exports.event;
      exports.event = event1;
      try {
        return listener.apply(that, args);
      } finally {
        exports.event = event0;
      }
    }
    function sourceEvent() {
      var current = exports.event,
          source;
      while (source = current.sourceEvent)
        current = source;
      return current;
    }
    function point(node, event) {
      var svg = node.ownerSVGElement || node;
      if (svg.createSVGPoint) {
        var point = svg.createSVGPoint();
        point.x = event.clientX, point.y = event.clientY;
        point = point.matrixTransform(node.getScreenCTM().inverse());
        return [point.x, point.y];
      }
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
    function mouse(node) {
      var event = sourceEvent();
      if (event.changedTouches)
        event = event.changedTouches[0];
      return point(node, event);
    }
    function none() {}
    function selector(selector) {
      return selector == null ? none : function() {
        return this.querySelector(selector);
      };
    }
    function selection_select(select) {
      if (typeof select !== "function")
        select = selector(select);
      for (var groups = this._groups,
          m = groups.length,
          subgroups = new Array(m),
          j = 0; j < m; ++j) {
        for (var group = groups[j],
            n = group.length,
            subgroup = subgroups[j] = new Array(n),
            node,
            subnode,
            i = 0; i < n; ++i) {
          if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
            if ("__data__" in node)
              subnode.__data__ = node.__data__;
            subgroup[i] = subnode;
          }
        }
      }
      return new Selection(subgroups, this._parents);
    }
    function empty() {
      return [];
    }
    function selectorAll(selector) {
      return selector == null ? empty : function() {
        return this.querySelectorAll(selector);
      };
    }
    function selection_selectAll(select) {
      if (typeof select !== "function")
        select = selectorAll(select);
      for (var groups = this._groups,
          m = groups.length,
          subgroups = [],
          parents = [],
          j = 0; j < m; ++j) {
        for (var group = groups[j],
            n = group.length,
            node,
            i = 0; i < n; ++i) {
          if (node = group[i]) {
            subgroups.push(select.call(node, node.__data__, i, group));
            parents.push(node);
          }
        }
      }
      return new Selection(subgroups, parents);
    }
    function selection_filter(match) {
      if (typeof match !== "function")
        match = matcher$1(match);
      for (var groups = this._groups,
          m = groups.length,
          subgroups = new Array(m),
          j = 0; j < m; ++j) {
        for (var group = groups[j],
            n = group.length,
            subgroup = subgroups[j] = [],
            node,
            i = 0; i < n; ++i) {
          if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
            subgroup.push(node);
          }
        }
      }
      return new Selection(subgroups, this._parents);
    }
    function sparse(update) {
      return new Array(update.length);
    }
    function selection_enter() {
      return new Selection(this._enter || this._groups.map(sparse), this._parents);
    }
    function EnterNode(parent, datum) {
      this.ownerDocument = parent.ownerDocument;
      this.namespaceURI = parent.namespaceURI;
      this._next = null;
      this._parent = parent;
      this.__data__ = datum;
    }
    EnterNode.prototype = {
      constructor: EnterNode,
      appendChild: function(child) {
        return this._parent.insertBefore(child, this._next);
      },
      insertBefore: function(child, next) {
        return this._parent.insertBefore(child, next);
      },
      querySelector: function(selector) {
        return this._parent.querySelector(selector);
      },
      querySelectorAll: function(selector) {
        return this._parent.querySelectorAll(selector);
      }
    };
    function constant(x) {
      return function() {
        return x;
      };
    }
    var keyPrefix = "$";
    function bindIndex(parent, group, enter, update, exit, data) {
      var i = 0,
          node,
          groupLength = group.length,
          dataLength = data.length;
      for (; i < dataLength; ++i) {
        if (node = group[i]) {
          node.__data__ = data[i];
          update[i] = node;
        } else {
          enter[i] = new EnterNode(parent, data[i]);
        }
      }
      for (; i < groupLength; ++i) {
        if (node = group[i]) {
          exit[i] = node;
        }
      }
    }
    function bindKey(parent, group, enter, update, exit, data, key) {
      var i,
          node,
          nodeByKeyValue = {},
          groupLength = group.length,
          dataLength = data.length,
          keyValues = new Array(groupLength),
          keyValue;
      for (i = 0; i < groupLength; ++i) {
        if (node = group[i]) {
          keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
          if (keyValue in nodeByKeyValue) {
            exit[i] = node;
          } else {
            nodeByKeyValue[keyValue] = node;
          }
        }
      }
      for (i = 0; i < dataLength; ++i) {
        keyValue = keyPrefix + key.call(parent, data[i], i, data);
        if (node = nodeByKeyValue[keyValue]) {
          update[i] = node;
          node.__data__ = data[i];
          nodeByKeyValue[keyValue] = null;
        } else {
          enter[i] = new EnterNode(parent, data[i]);
        }
      }
      for (i = 0; i < groupLength; ++i) {
        if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
          exit[i] = node;
        }
      }
    }
    function selection_data(value, key) {
      if (!value) {
        data = new Array(this.size()), j = -1;
        this.each(function(d) {
          data[++j] = d;
        });
        return data;
      }
      var bind = key ? bindKey : bindIndex,
          parents = this._parents,
          groups = this._groups;
      if (typeof value !== "function")
        value = constant(value);
      for (var m = groups.length,
          update = new Array(m),
          enter = new Array(m),
          exit = new Array(m),
          j = 0; j < m; ++j) {
        var parent = parents[j],
            group = groups[j],
            groupLength = group.length,
            data = value.call(parent, parent && parent.__data__, j, parents),
            dataLength = data.length,
            enterGroup = enter[j] = new Array(dataLength),
            updateGroup = update[j] = new Array(dataLength),
            exitGroup = exit[j] = new Array(groupLength);
        bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
        for (var i0 = 0,
            i1 = 0,
            previous,
            next; i0 < dataLength; ++i0) {
          if (previous = enterGroup[i0]) {
            if (i0 >= i1)
              i1 = i0 + 1;
            while (!(next = updateGroup[i1]) && ++i1 < dataLength)
              ;
            previous._next = next || null;
          }
        }
      }
      update = new Selection(update, parents);
      update._enter = enter;
      update._exit = exit;
      return update;
    }
    function selection_exit() {
      return new Selection(this._exit || this._groups.map(sparse), this._parents);
    }
    function selection_merge(selection) {
      for (var groups0 = this._groups,
          groups1 = selection._groups,
          m0 = groups0.length,
          m1 = groups1.length,
          m = Math.min(m0, m1),
          merges = new Array(m0),
          j = 0; j < m; ++j) {
        for (var group0 = groups0[j],
            group1 = groups1[j],
            n = group0.length,
            merge = merges[j] = new Array(n),
            node,
            i = 0; i < n; ++i) {
          if (node = group0[i] || group1[i]) {
            merge[i] = node;
          }
        }
      }
      for (; j < m0; ++j) {
        merges[j] = groups0[j];
      }
      return new Selection(merges, this._parents);
    }
    function selection_order() {
      for (var groups = this._groups,
          j = -1,
          m = groups.length; ++j < m; ) {
        for (var group = groups[j],
            i = group.length - 1,
            next = group[i],
            node; --i >= 0; ) {
          if (node = group[i]) {
            if (next && next !== node.nextSibling)
              next.parentNode.insertBefore(node, next);
            next = node;
          }
        }
      }
      return this;
    }
    function selection_sort(compare) {
      if (!compare)
        compare = ascending;
      function compareNode(a, b) {
        return a && b ? compare(a.__data__, b.__data__) : !a - !b;
      }
      for (var groups = this._groups,
          m = groups.length,
          sortgroups = new Array(m),
          j = 0; j < m; ++j) {
        for (var group = groups[j],
            n = group.length,
            sortgroup = sortgroups[j] = new Array(n),
            node,
            i = 0; i < n; ++i) {
          if (node = group[i]) {
            sortgroup[i] = node;
          }
        }
        sortgroup.sort(compareNode);
      }
      return new Selection(sortgroups, this._parents).order();
    }
    function ascending(a, b) {
      return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
    }
    function selection_call() {
      var callback = arguments[0];
      arguments[0] = this;
      callback.apply(null, arguments);
      return this;
    }
    function selection_nodes() {
      var nodes = new Array(this.size()),
          i = -1;
      this.each(function() {
        nodes[++i] = this;
      });
      return nodes;
    }
    function selection_node() {
      for (var groups = this._groups,
          j = 0,
          m = groups.length; j < m; ++j) {
        for (var group = groups[j],
            i = 0,
            n = group.length; i < n; ++i) {
          var node = group[i];
          if (node)
            return node;
        }
      }
      return null;
    }
    function selection_size() {
      var size = 0;
      this.each(function() {
        ++size;
      });
      return size;
    }
    function selection_empty() {
      return !this.node();
    }
    function selection_each(callback) {
      for (var groups = this._groups,
          j = 0,
          m = groups.length; j < m; ++j) {
        for (var group = groups[j],
            i = 0,
            n = group.length,
            node; i < n; ++i) {
          if (node = group[i])
            callback.call(node, node.__data__, i, group);
        }
      }
      return this;
    }
    function attrRemove(name) {
      return function() {
        this.removeAttribute(name);
      };
    }
    function attrRemoveNS(fullname) {
      return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
      };
    }
    function attrConstant(name, value) {
      return function() {
        this.setAttribute(name, value);
      };
    }
    function attrConstantNS(fullname, value) {
      return function() {
        this.setAttributeNS(fullname.space, fullname.local, value);
      };
    }
    function attrFunction(name, value) {
      return function() {
        var v = value.apply(this, arguments);
        if (v == null)
          this.removeAttribute(name);
        else
          this.setAttribute(name, v);
      };
    }
    function attrFunctionNS(fullname, value) {
      return function() {
        var v = value.apply(this, arguments);
        if (v == null)
          this.removeAttributeNS(fullname.space, fullname.local);
        else
          this.setAttributeNS(fullname.space, fullname.local, v);
      };
    }
    function selection_attr(name, value) {
      var fullname = namespace(name);
      if (arguments.length < 2) {
        var node = this.node();
        return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
      }
      return this.each((value == null ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction) : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
    }
    function defaultView(node) {
      return (node.ownerDocument && node.ownerDocument.defaultView) || (node.document && node) || node.defaultView;
    }
    function styleRemove(name) {
      return function() {
        this.style.removeProperty(name);
      };
    }
    function styleConstant(name, value, priority) {
      return function() {
        this.style.setProperty(name, value, priority);
      };
    }
    function styleFunction(name, value, priority) {
      return function() {
        var v = value.apply(this, arguments);
        if (v == null)
          this.style.removeProperty(name);
        else
          this.style.setProperty(name, v, priority);
      };
    }
    function selection_style(name, value, priority) {
      var node;
      return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : defaultView(node = this.node()).getComputedStyle(node, null).getPropertyValue(name);
    }
    function propertyRemove(name) {
      return function() {
        delete this[name];
      };
    }
    function propertyConstant(name, value) {
      return function() {
        this[name] = value;
      };
    }
    function propertyFunction(name, value) {
      return function() {
        var v = value.apply(this, arguments);
        if (v == null)
          delete this[name];
        else
          this[name] = v;
      };
    }
    function selection_property(name, value) {
      return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
    }
    function classArray(string) {
      return string.trim().split(/^|\s+/);
    }
    function classList(node) {
      return node.classList || new ClassList(node);
    }
    function ClassList(node) {
      this._node = node;
      this._names = classArray(node.getAttribute("class") || "");
    }
    ClassList.prototype = {
      add: function(name) {
        var i = this._names.indexOf(name);
        if (i < 0) {
          this._names.push(name);
          this._node.setAttribute("class", this._names.join(" "));
        }
      },
      remove: function(name) {
        var i = this._names.indexOf(name);
        if (i >= 0) {
          this._names.splice(i, 1);
          this._node.setAttribute("class", this._names.join(" "));
        }
      },
      contains: function(name) {
        return this._names.indexOf(name) >= 0;
      }
    };
    function classedAdd(node, names) {
      var list = classList(node),
          i = -1,
          n = names.length;
      while (++i < n)
        list.add(names[i]);
    }
    function classedRemove(node, names) {
      var list = classList(node),
          i = -1,
          n = names.length;
      while (++i < n)
        list.remove(names[i]);
    }
    function classedTrue(names) {
      return function() {
        classedAdd(this, names);
      };
    }
    function classedFalse(names) {
      return function() {
        classedRemove(this, names);
      };
    }
    function classedFunction(names, value) {
      return function() {
        (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
      };
    }
    function selection_classed(name, value) {
      var names = classArray(name + "");
      if (arguments.length < 2) {
        var list = classList(this.node()),
            i = -1,
            n = names.length;
        while (++i < n)
          if (!list.contains(names[i]))
            return false;
        return true;
      }
      return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
    }
    function textRemove() {
      this.textContent = "";
    }
    function textConstant(value) {
      return function() {
        this.textContent = value;
      };
    }
    function textFunction(value) {
      return function() {
        var v = value.apply(this, arguments);
        this.textContent = v == null ? "" : v;
      };
    }
    function selection_text(value) {
      return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
    }
    function htmlRemove() {
      this.innerHTML = "";
    }
    function htmlConstant(value) {
      return function() {
        this.innerHTML = value;
      };
    }
    function htmlFunction(value) {
      return function() {
        var v = value.apply(this, arguments);
        this.innerHTML = v == null ? "" : v;
      };
    }
    function selection_html(value) {
      return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
    }
    function raise() {
      if (this.nextSibling)
        this.parentNode.appendChild(this);
    }
    function selection_raise() {
      return this.each(raise);
    }
    function lower() {
      if (this.previousSibling)
        this.parentNode.insertBefore(this, this.parentNode.firstChild);
    }
    function selection_lower() {
      return this.each(lower);
    }
    function selection_append(name) {
      var create = typeof name === "function" ? name : creator(name);
      return this.select(function() {
        return this.appendChild(create.apply(this, arguments));
      });
    }
    function constantNull() {
      return null;
    }
    function selection_insert(name, before) {
      var create = typeof name === "function" ? name : creator(name),
          select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
      return this.select(function() {
        return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
      });
    }
    function remove() {
      var parent = this.parentNode;
      if (parent)
        parent.removeChild(this);
    }
    function selection_remove() {
      return this.each(remove);
    }
    function selection_datum(value) {
      return arguments.length ? this.property("__data__", value) : this.node().__data__;
    }
    function dispatchEvent(node, type, params) {
      var window = defaultView(node),
          event = window.CustomEvent;
      if (event) {
        event = new event(type, params);
      } else {
        event = window.document.createEvent("Event");
        if (params)
          event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
        else
          event.initEvent(type, false, false);
      }
      node.dispatchEvent(event);
    }
    function dispatchConstant(type, params) {
      return function() {
        return dispatchEvent(this, type, params);
      };
    }
    function dispatchFunction(type, params) {
      return function() {
        return dispatchEvent(this, type, params.apply(this, arguments));
      };
    }
    function selection_dispatch(type, params) {
      return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
    }
    var root = [null];
    function Selection(groups, parents) {
      this._groups = groups;
      this._parents = parents;
    }
    function selection() {
      return new Selection([[document.documentElement]], root);
    }
    Selection.prototype = selection.prototype = {
      constructor: Selection,
      select: selection_select,
      selectAll: selection_selectAll,
      filter: selection_filter,
      data: selection_data,
      enter: selection_enter,
      exit: selection_exit,
      merge: selection_merge,
      order: selection_order,
      sort: selection_sort,
      call: selection_call,
      nodes: selection_nodes,
      node: selection_node,
      size: selection_size,
      empty: selection_empty,
      each: selection_each,
      attr: selection_attr,
      style: selection_style,
      property: selection_property,
      classed: selection_classed,
      text: selection_text,
      html: selection_html,
      raise: selection_raise,
      lower: selection_lower,
      append: selection_append,
      insert: selection_insert,
      remove: selection_remove,
      datum: selection_datum,
      on: selection_on,
      dispatch: selection_dispatch
    };
    function select(selector) {
      return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
    }
    function selectAll(selector) {
      return typeof selector === "string" ? new Selection([document.querySelectorAll(selector)], [document.documentElement]) : new Selection([selector == null ? [] : selector], root);
    }
    function touch(node, touches, identifier) {
      if (arguments.length < 3)
        identifier = touches, touches = sourceEvent().changedTouches;
      for (var i = 0,
          n = touches ? touches.length : 0,
          touch; i < n; ++i) {
        if ((touch = touches[i]).identifier === identifier) {
          return point(node, touch);
        }
      }
      return null;
    }
    function touches(node, touches) {
      if (touches == null)
        touches = sourceEvent().touches;
      for (var i = 0,
          n = touches ? touches.length : 0,
          points = new Array(n); i < n; ++i) {
        points[i] = point(node, touches[i]);
      }
      return points;
    }
    exports.creator = creator;
    exports.local = local;
    exports.matcher = matcher$1;
    exports.mouse = mouse;
    exports.namespace = namespace;
    exports.namespaces = namespaces;
    exports.select = select;
    exports.selectAll = selectAll;
    exports.selection = selection;
    exports.selector = selector;
    exports.selectorAll = selectorAll;
    exports.touch = touch;
    exports.touches = touches;
    exports.window = defaultView;
    exports.customEvent = customEvent;
    Object.defineProperty(exports, '__esModule', {value: true});
  }));
  return module.exports;
});

$__System.registerDynamic("1e", ["3e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('3e');
  return module.exports;
});

$__System.register("3d", ["1e", "b"], function (_export) {
    "use strict";

    var d3_select, record, browser, preData, tspan;

    _export("showHighlightAxis", showHighlightAxis);

    _export("updateDotAnimation", updateDotAnimation);

    _export("hideHighlight", hideHighlight);

    _export("hideDotAnimation", hideDotAnimation);

    function showHighlightAxis(data) {
        if (!data && !preData) return;
        if (!data && preData) data = preData;

        preData = data;
        d3_select(".mark-highlight").style("opacity", 0);
        d3_select(".js-final").classed("d-n", true);
        if (data.attrs.dist === 0) {
            /*console.log("update text", data);
            d3_select(".hl-txt-wr")
            .attr("y", "50%")
            .attr("x", "100%")
            .text("WR, OR");
            d3_select(".hl-txt-or")
            .text("");
            d3_select(".js-final").classed("d-n", false);*/
            return;
        }

        // x, y axis
        var dot = d3_select("#" + data.id);
        var x = dot.attr("cx");
        var y = dot.attr("cy");

        d3_select(".mark-highlight").style("opacity", 1);

        var atpt = data.attrs;
        var atwr = record.wr.attrs;
        var ator = record.or.attrs;
        var ttwr = Math.round((atpt.time - atwr.time) * 100) / 100;

        d3_select(".hl-lv").attr("x1", x).attr("x2", x).attr("y1", y);
        d3_select(".hl-year").attr("y", y).text(data.attrs.year);
        d3_select(".hl-mark").attr("x", x).text(data.attrs.dist + " m (+" + ttwr + "s)");

        // wr, or
        if (d3_select(".js-chart").attr("data-state") !== "final") {
            return;
        }
        d3_select(".js-final").classed("d-n", false);

        var elwr = d3_select(".wr");
        var elor = d3_select(".or");
        var isNewRecord = record.wr.y === 2016;
        // dist > 0 or hide
        d3_select(".hl-lh-wr").attr("x1", x).attr("x2", elwr.attr("cx")).attr("y1", elwr.attr("cy")).attr("y2", elwr.attr("cy"));
        d3_select(".hl-lh-or").attr("x1", x).attr("x2", elor.attr("cx")).attr("y1", elor.attr("cy")).attr("y2", elor.attr("cy"));

        d3_select(".hl-txt-wr").attr("y", elwr.attr("cy")).html(addMark(x, atpt.dist, ttwr, "wr", isNewRecord));

        var ttor = Math.round((atpt.time - ator.time) * 100) / 100;
        if (ttor === 0) {
            d3_select(".hl-txt-or").text("");return;
        }
        if (ttor === ttwr) {
            d3_select(".hl-txt-wr .behind").text("behind WR and OR");return;
        }
        d3_select(".hl-txt-or").attr("x", x).attr("y", elor.attr("cy")).html(addMark(x, atpt.dist - ator.dist, ttor, "or", isNewRecord));
    }

    function updateDotAnimation(data) {
        if (!data && !preData) return;
        if (!data && preData) data = preData;

        // circle
        var dot = d3_select("#" + data.id);
        var x = dot.attr("cx");
        var y = dot.attr("cy");
        var year = data.attrs.year;
        var mark = data.attrs.mark;

        d3_select(".hl-circle").classed("animate", browser !== "ff" ? true : false).style("opacity", 1).attr("cx", x).attr("cy", y).attr("r", dot.attr("r"));

        preData = data;
    }

    function hideHighlight() {
        hideHighlightAxis();
        hideDotAnimation();
    }

    function hideHighlightAxis() {
        d3_select(".mark-highlight").style("opacity", 0);
    }

    function hideDotAnimation() {
        d3_select(".hl-circle").classed("animate", false).style("opacity", 0);
    }

    function addMark(x, dist, time, type, isNewRecord) {
        // TODO: even behind WR and OR
        var flag = isNewRecord ? "record" : "origin";

        return "<tspan x='" + x + "' dx='5' dy='" + tspan[flag].dyt + "'>" + "<tspan class='" + type + "-dist'>" + Math.round(dist * 100) / 100 + "m</tspan> " + "(+" + time + "s)" + "</tspan>" + "<tspan x='" + x + "' dx='6' dy='" + tspan[flag].dyb + "' class='behind'>" + "behind " + type.toUpperCase() + "</tspan>";
    }
    function addRecord() {}
    return {
        setters: [function (_e) {
            d3_select = _e.select;
        }, function (_b) {
            record = _b.record;
            browser = _b.browser;
        }],
        execute: function () {
            preData = null;
            tspan = {
                "origin": { dyt: -5, dyb: 20 },
                "record": { dyt: 36, dyb: 16 }
            };
        }
    };
});
$__System.register('21', ['32', '1e', 'b', '3c', '3d'], function (_export) {

    // ref: bl.ocks.org/njvack/1405439
    // ref: bl.ocks.org/mbostock/ec10387f24c1fad2acac3bc11eb218a5
    'use strict';

    var d3_voronoi, d3_select, sync, chart, showBestAthlete, hideAllAthletes, updateDotAnimation, hideDotAnimation, radius, picks, paths, cxShift, cyShift, cx, cy, w, h, dataPickAll, dataPickVisible, dataGoldX, dataPath;

    _export('initPicker', initPicker);

    _export('updatePicker', updatePicker);

    function initPicker(data) {
        var chartRect = document.querySelector(".chart").getBoundingClientRect();
        w = chartRect.width - 40;
        h = chartRect.height - 20;
        dataPickAll = data;
    }

    function updatePicker(scale) {
        dataPickVisible = dataPickAll.filter(function (d) {
            return d.o !== 0;
        });
        dataGoldX = dataPickVisible.filter(function (d) {
            return d.color !== "wr";
        }).map(function (d) {
            return d.x;
        });
        dataPickVisible = dataPickVisible.filter(function (d) {
            var isOverlapped = d.color === "wr" && dataGoldX.some(function (gx) {
                return gx === d.x;
            });
            return !isOverlapped;
        });

        var picker = d3_select(".dots-picker");
        picker.selectAll("g").remove();

        var circle = picker.selectAll("g").data(dataPickVisible).enter().append("g");

        circle.append("clipPath").attr("id", function (d, i) {
            return "clip-" + i;
        }).append("circle").attr("data-id", function (d) {
            return d.id;
        }).attr("cx", function (d) {
            return cx(d, radius, scale.x) + "%";
        }).attr("cy", function (d) {
            return cy(d, radius, scale.y) + "%";
        }).attr("r", radius);

        circle.append("path").data(dataPath(scale)).attr("d", renderCell).attr("id", function (d, i) {
            return "path-" + i;
        }).attr("clip-path", function (d, i) {
            return "url(#clip-" + i + ")";
        })
        // interaction
        .on("mouseover", function (d, i) {
            console.log(d.id);
            var state = d3_select(".js-chart").attr("data-state");
            showBestAthlete(dataPickVisible[i], state);
            hideDotAnimation();
        }).on("mouseout", function (d, i) {
            hideAllAthletes(dataPickVisible[i]);
            updateDotAnimation(dataPickVisible[i]);
        });
    }

    function renderCell(d) {
        return d === null ? null : "M" + d.join("L") + "Z";
    }
    return {
        setters: [function (_) {
            d3_voronoi = _.voronoi;
        }, function (_e) {
            d3_select = _e.select;
        }, function (_b) {
            sync = _b.sync;
            chart = _b.chart;
        }, function (_c) {
            showBestAthlete = _c.showBestAthlete;
            hideAllAthletes = _c.hideAllAthletes;
        }, function (_d) {
            updateDotAnimation = _d.updateDotAnimation;
            hideDotAnimation = _d.hideDotAnimation;
        }],
        execute: function () {
            radius = 18;
            picks = undefined;
            paths = undefined;

            cxShift = function cxShift(d, r) {
                return r * ((d.index - 1) * 2 - (d.count - 1)) * 0.75;
            };

            cyShift = function cyShift(d, r) {
                return 0.5 * ((d.index - 1) * 2 - (d.count - 1)) * 0.5;
            };

            cx = function cx(d, r, x) {
                return x(d.x);
            };

            // + (d.count ? cxShift(d, cfg.radius) : 0);

            cy = function cy(d, r, y) {
                return y(d.y) - (d.count ? cyShift(d, r) : 0);
            };

            w = undefined;
            h = undefined;
            dataPickAll = undefined;
            dataPickVisible = undefined;
            dataGoldX = undefined;

            dataPath = function dataPath(scale) {
                var voronoi = d3_voronoi().x(function (d) {
                    return cx(d, radius, scale.x) * w / 100;
                }).y(function (d) {
                    return cy(d, radius, scale.y) * h / 100;
                }).extent([[0, 0], [w, h]]);
                return voronoi.polygons(dataPickVisible);
            };
        }
    };
});
$__System.register('d', ['11', '21', '29', '30', '1e', '1d', 'b', '1f', '3c'], function (_export) {
    'use strict';

    var utils, initPicker, d3_extent, Axis, d3_select, toState, getNextState, record, calcScale, Dots;

    function getDomain(data) {
        return {
            x: d3_extent(data, function (d) {
                return d.x;
            }),
            y: d3_extent(data, function (d) {
                return d.y;
            })
        };
    }
    return {
        setters: [function (_2) {
            utils = _2['default'];
        }, function (_4) {
            initPicker = _4.initPicker;
        }, function (_) {
            d3_extent = _.extent;
        }, function (_3) {
            Axis = _3['default'];
        }, function (_e) {
            d3_select = _e.select;
        }, function (_d) {
            toState = _d.toState;
            getNextState = _d.getNextState;
        }, function (_b) {
            record = _b.record;
        }, function (_f) {
            calcScale = _f['default'];
        }, function (_c) {
            Dots = _c['default'];
        }],
        execute: function () {
            _export('default', function (data) {
                var dataCombo = data.finals.concat(data.medals, data.worlds);
                var domain = getDomain(dataCombo);

                // init, draw all
                var scale = calcScale(domain);
                var els = {};

                // circles
                els.dotsF = new Dots({
                    dataset: "final",
                    radius: 9
                });
                els.dotsF.init(data.finals, scale);

                els.dotsM = new Dots({
                    dataset: "medal",
                    radius: 6
                });
                els.dotsM.init(data.medals, scale);

                els.dotsW = new Dots({
                    dataset: "world",
                    radius: 3,
                    color: "#333",
                    stroke: "rgba(255, 255, 255, 0.25)"
                });
                els.dotsW.init(data.worlds, scale);

                // axis
                els.axisY = new Axis({ coord: "y", value: "year" });
                els.axisY.init(dataCombo.map(function (d) {
                    return d.y;
                }), scale);

                els.axisX = new Axis({ coord: "x", value: "mark" });
                els.axisX.init(dataCombo.map(function (d) {
                    return d.x;
                }), scale);

                // note and misc updates
                d3_select("#" + record.wr.id).attr("class", "wr").each(function (d) {
                    return d.cn = "wr";
                });
                d3_select("#" + record.or.id).attr("class", "or").each(function (d) {
                    return d.cn = "or";
                });
                d3_select(".note").classed("d-n", record.type !== "s" ? true : false);

                // dots pickers
                initPicker(dataCombo);

                // update with animations
                var state = {};
                var domainFinal = getDomain(data.finals.concat([record.wr, record.or]));
                var diff = 2016 - domainFinal.y[0];

                state.final = {
                    domain: {
                        x: [domainFinal.x[0], 0],
                        y: [2016 - diff * 1.5, 2016 + diff * 1.25]
                    },
                    opacity: [0.75, 0, 0]
                };

                var domainMedal = getDomain(data.finals.concat(data.medals));
                domainMedal.x[1] = 0;
                state.medal = {
                    domain: domainMedal,
                    opacity: [0.75, 0.5, 0]
                };

                state.world = {
                    domain: getDomain(data.finals.concat(data.worlds)),
                    opacity: [0.75, 0, 0.75]
                };

                state.mixed = {
                    domain: domain,
                    opacity: [0.75, 0.5, 0.75]
                };

                // default
                toState(els, state.final, "final");

                // next button
                document.querySelector(".btn-next").addEventListener("click", function () {
                    // current
                    var stateName = document.querySelector(".js-chart").getAttribute("data-state");
                    // next
                    var stateNameNext = getNextState(stateName).name;
                    var stateDataNext = state[stateNameNext];

                    toState(els, { domain: stateDataNext.domain, opacity: stateDataNext.opacity, duration: 2 }, stateNameNext);
                });
            });
        }
    };
});
$__System.registerDynamic("3f", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  (function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (factory((global.d3 = global.d3 || {})));
  }(this, function(exports) {
    'use strict';
    function ascending(a, b) {
      return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
    }
    function bisector(compare) {
      if (compare.length === 1)
        compare = ascendingComparator(compare);
      return {
        left: function(a, x, lo, hi) {
          if (lo == null)
            lo = 0;
          if (hi == null)
            hi = a.length;
          while (lo < hi) {
            var mid = lo + hi >>> 1;
            if (compare(a[mid], x) < 0)
              lo = mid + 1;
            else
              hi = mid;
          }
          return lo;
        },
        right: function(a, x, lo, hi) {
          if (lo == null)
            lo = 0;
          if (hi == null)
            hi = a.length;
          while (lo < hi) {
            var mid = lo + hi >>> 1;
            if (compare(a[mid], x) > 0)
              hi = mid;
            else
              lo = mid + 1;
          }
          return lo;
        }
      };
    }
    function ascendingComparator(f) {
      return function(d, x) {
        return ascending(f(d), x);
      };
    }
    var ascendingBisect = bisector(ascending);
    var bisectRight = ascendingBisect.right;
    var bisectLeft = ascendingBisect.left;
    function descending(a, b) {
      return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
    }
    function number(x) {
      return x === null ? NaN : +x;
    }
    function variance(array, f) {
      var n = array.length,
          m = 0,
          a,
          d,
          s = 0,
          i = -1,
          j = 0;
      if (f == null) {
        while (++i < n) {
          if (!isNaN(a = number(array[i]))) {
            d = a - m;
            m += d / ++j;
            s += d * (a - m);
          }
        }
      } else {
        while (++i < n) {
          if (!isNaN(a = number(f(array[i], i, array)))) {
            d = a - m;
            m += d / ++j;
            s += d * (a - m);
          }
        }
      }
      if (j > 1)
        return s / (j - 1);
    }
    function deviation(array, f) {
      var v = variance(array, f);
      return v ? Math.sqrt(v) : v;
    }
    function extent(array, f) {
      var i = -1,
          n = array.length,
          a,
          b,
          c;
      if (f == null) {
        while (++i < n)
          if ((b = array[i]) != null && b >= b) {
            a = c = b;
            break;
          }
        while (++i < n)
          if ((b = array[i]) != null) {
            if (a > b)
              a = b;
            if (c < b)
              c = b;
          }
      } else {
        while (++i < n)
          if ((b = f(array[i], i, array)) != null && b >= b) {
            a = c = b;
            break;
          }
        while (++i < n)
          if ((b = f(array[i], i, array)) != null) {
            if (a > b)
              a = b;
            if (c < b)
              c = b;
          }
      }
      return [a, c];
    }
    var array = Array.prototype;
    var slice = array.slice;
    var map = array.map;
    function constant(x) {
      return function() {
        return x;
      };
    }
    function identity(x) {
      return x;
    }
    function range(start, stop, step) {
      start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
      var i = -1,
          n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
          range = new Array(n);
      while (++i < n) {
        range[i] = start + i * step;
      }
      return range;
    }
    var e10 = Math.sqrt(50);
    var e5 = Math.sqrt(10);
    var e2 = Math.sqrt(2);
    function ticks(start, stop, count) {
      var step = tickStep(start, stop, count);
      return range(Math.ceil(start / step) * step, Math.floor(stop / step) * step + step / 2, step);
    }
    function tickStep(start, stop, count) {
      var step0 = Math.abs(stop - start) / Math.max(0, count),
          step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
          error = step0 / step1;
      if (error >= e10)
        step1 *= 10;
      else if (error >= e5)
        step1 *= 5;
      else if (error >= e2)
        step1 *= 2;
      return stop < start ? -step1 : step1;
    }
    function sturges(values) {
      return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
    }
    function histogram() {
      var value = identity,
          domain = extent,
          threshold = sturges;
      function histogram(data) {
        var i,
            n = data.length,
            x,
            values = new Array(n);
        for (i = 0; i < n; ++i) {
          values[i] = value(data[i], i, data);
        }
        var xz = domain(values),
            x0 = xz[0],
            x1 = xz[1],
            tz = threshold(values, x0, x1);
        if (!Array.isArray(tz))
          tz = ticks(x0, x1, tz);
        var m = tz.length;
        while (tz[0] <= x0)
          tz.shift(), --m;
        while (tz[m - 1] >= x1)
          tz.pop(), --m;
        var bins = new Array(m + 1),
            bin;
        for (i = 0; i <= m; ++i) {
          bin = bins[i] = [];
          bin.x0 = i > 0 ? tz[i - 1] : x0;
          bin.x1 = i < m ? tz[i] : x1;
        }
        for (i = 0; i < n; ++i) {
          x = values[i];
          if (x0 <= x && x <= x1) {
            bins[bisectRight(tz, x, 0, m)].push(data[i]);
          }
        }
        return bins;
      }
      histogram.value = function(_) {
        return arguments.length ? (value = typeof _ === "function" ? _ : constant(_), histogram) : value;
      };
      histogram.domain = function(_) {
        return arguments.length ? (domain = typeof _ === "function" ? _ : constant([_[0], _[1]]), histogram) : domain;
      };
      histogram.thresholds = function(_) {
        return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? constant(slice.call(_)) : constant(_), histogram) : threshold;
      };
      return histogram;
    }
    function quantile(array, p, f) {
      if (f == null)
        f = number;
      if (!(n = array.length))
        return;
      if ((p = +p) <= 0 || n < 2)
        return +f(array[0], 0, array);
      if (p >= 1)
        return +f(array[n - 1], n - 1, array);
      var n,
          h = (n - 1) * p,
          i = Math.floor(h),
          a = +f(array[i], i, array),
          b = +f(array[i + 1], i + 1, array);
      return a + (b - a) * (h - i);
    }
    function freedmanDiaconis(values, min, max) {
      values = map.call(values, number).sort(ascending);
      return Math.ceil((max - min) / (2 * (quantile(values, 0.75) - quantile(values, 0.25)) * Math.pow(values.length, -1 / 3)));
    }
    function scott(values, min, max) {
      return Math.ceil((max - min) / (3.5 * deviation(values) * Math.pow(values.length, -1 / 3)));
    }
    function max(array, f) {
      var i = -1,
          n = array.length,
          a,
          b;
      if (f == null) {
        while (++i < n)
          if ((b = array[i]) != null && b >= b) {
            a = b;
            break;
          }
        while (++i < n)
          if ((b = array[i]) != null && b > a)
            a = b;
      } else {
        while (++i < n)
          if ((b = f(array[i], i, array)) != null && b >= b) {
            a = b;
            break;
          }
        while (++i < n)
          if ((b = f(array[i], i, array)) != null && b > a)
            a = b;
      }
      return a;
    }
    function mean(array, f) {
      var s = 0,
          n = array.length,
          a,
          i = -1,
          j = n;
      if (f == null) {
        while (++i < n)
          if (!isNaN(a = number(array[i])))
            s += a;
          else
            --j;
      } else {
        while (++i < n)
          if (!isNaN(a = number(f(array[i], i, array))))
            s += a;
          else
            --j;
      }
      if (j)
        return s / j;
    }
    function median(array, f) {
      var numbers = [],
          n = array.length,
          a,
          i = -1;
      if (f == null) {
        while (++i < n)
          if (!isNaN(a = number(array[i])))
            numbers.push(a);
      } else {
        while (++i < n)
          if (!isNaN(a = number(f(array[i], i, array))))
            numbers.push(a);
      }
      return quantile(numbers.sort(ascending), 0.5);
    }
    function merge(arrays) {
      var n = arrays.length,
          m,
          i = -1,
          j = 0,
          merged,
          array;
      while (++i < n)
        j += arrays[i].length;
      merged = new Array(j);
      while (--n >= 0) {
        array = arrays[n];
        m = array.length;
        while (--m >= 0) {
          merged[--j] = array[m];
        }
      }
      return merged;
    }
    function min(array, f) {
      var i = -1,
          n = array.length,
          a,
          b;
      if (f == null) {
        while (++i < n)
          if ((b = array[i]) != null && b >= b) {
            a = b;
            break;
          }
        while (++i < n)
          if ((b = array[i]) != null && a > b)
            a = b;
      } else {
        while (++i < n)
          if ((b = f(array[i], i, array)) != null && b >= b) {
            a = b;
            break;
          }
        while (++i < n)
          if ((b = f(array[i], i, array)) != null && a > b)
            a = b;
      }
      return a;
    }
    function pairs(array) {
      var i = 0,
          n = array.length - 1,
          p = array[0],
          pairs = new Array(n < 0 ? 0 : n);
      while (i < n)
        pairs[i] = [p, p = array[++i]];
      return pairs;
    }
    function permute(array, indexes) {
      var i = indexes.length,
          permutes = new Array(i);
      while (i--)
        permutes[i] = array[indexes[i]];
      return permutes;
    }
    function scan(array, compare) {
      if (!(n = array.length))
        return;
      var i = 0,
          n,
          j = 0,
          xi,
          xj = array[j];
      if (!compare)
        compare = ascending;
      while (++i < n)
        if (compare(xi = array[i], xj) < 0 || compare(xj, xj) !== 0)
          xj = xi, j = i;
      if (compare(xj, xj) === 0)
        return j;
    }
    function shuffle(array, i0, i1) {
      var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
          t,
          i;
      while (m) {
        i = Math.random() * m-- | 0;
        t = array[m + i0];
        array[m + i0] = array[i + i0];
        array[i + i0] = t;
      }
      return array;
    }
    function sum(array, f) {
      var s = 0,
          n = array.length,
          a,
          i = -1;
      if (f == null) {
        while (++i < n)
          if (a = +array[i])
            s += a;
      } else {
        while (++i < n)
          if (a = +f(array[i], i, array))
            s += a;
      }
      return s;
    }
    function transpose(matrix) {
      if (!(n = matrix.length))
        return [];
      for (var i = -1,
          m = min(matrix, length),
          transpose = new Array(m); ++i < m; ) {
        for (var j = -1,
            n,
            row = transpose[i] = new Array(n); ++j < n; ) {
          row[j] = matrix[j][i];
        }
      }
      return transpose;
    }
    function length(d) {
      return d.length;
    }
    function zip() {
      return transpose(arguments);
    }
    exports.bisect = bisectRight;
    exports.bisectRight = bisectRight;
    exports.bisectLeft = bisectLeft;
    exports.ascending = ascending;
    exports.bisector = bisector;
    exports.descending = descending;
    exports.deviation = deviation;
    exports.extent = extent;
    exports.histogram = histogram;
    exports.thresholdFreedmanDiaconis = freedmanDiaconis;
    exports.thresholdScott = scott;
    exports.thresholdSturges = sturges;
    exports.max = max;
    exports.mean = mean;
    exports.median = median;
    exports.merge = merge;
    exports.min = min;
    exports.pairs = pairs;
    exports.permute = permute;
    exports.quantile = quantile;
    exports.range = range;
    exports.scan = scan;
    exports.shuffle = shuffle;
    exports.sum = sum;
    exports.ticks = ticks;
    exports.tickStep = tickStep;
    exports.transpose = transpose;
    exports.variance = variance;
    exports.zip = zip;
    Object.defineProperty(exports, '__esModule', {value: true});
  }));
  return module.exports;
});

$__System.registerDynamic("29", ["3f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('3f');
  return module.exports;
});

$__System.registerDynamic("40", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  return module.exports;
});

$__System.registerDynamic("41", ["40"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('40');
  module.exports = function defineProperties(T, D) {
    return $.setDescs(T, D);
  };
  return module.exports;
});

$__System.registerDynamic("42", ["41"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('41'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("11", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.getWindowSize = function() {
    var d = document;
    var e = d.documentElement;
    var g = d.getElementsByTagName('body')[0];
    var w = window.innerWidth || e.clientWidth || g.clientWidth;
    var h = window.innerHeight || e.clientHeight || g.clientHeight;
    return {
      w: w,
      h: h
    };
  };
  exports.num2class = function(num) {
    return num.toString().replace(".", "_");
  };
  exports.str2class = function(str) {
    return str.replace(/\s/g, "_");
  };
  exports.nlist2arr = function(nodelist) {
    return Array.prototype.slice.call(nodelist);
  };
  return module.exports;
});

$__System.registerDynamic("43", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  (function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (factory((global.d3 = global.d3 || {})));
  }(this, function(exports) {
    'use strict';
    var prefix = "$";
    function Map() {}
    Map.prototype = map.prototype = {
      constructor: Map,
      has: function(key) {
        return (prefix + key) in this;
      },
      get: function(key) {
        return this[prefix + key];
      },
      set: function(key, value) {
        this[prefix + key] = value;
        return this;
      },
      remove: function(key) {
        var property = prefix + key;
        return property in this && delete this[property];
      },
      clear: function() {
        for (var property in this)
          if (property[0] === prefix)
            delete this[property];
      },
      keys: function() {
        var keys = [];
        for (var property in this)
          if (property[0] === prefix)
            keys.push(property.slice(1));
        return keys;
      },
      values: function() {
        var values = [];
        for (var property in this)
          if (property[0] === prefix)
            values.push(this[property]);
        return values;
      },
      entries: function() {
        var entries = [];
        for (var property in this)
          if (property[0] === prefix)
            entries.push({
              key: property.slice(1),
              value: this[property]
            });
        return entries;
      },
      size: function() {
        var size = 0;
        for (var property in this)
          if (property[0] === prefix)
            ++size;
        return size;
      },
      empty: function() {
        for (var property in this)
          if (property[0] === prefix)
            return false;
        return true;
      },
      each: function(f) {
        for (var property in this)
          if (property[0] === prefix)
            f(this[property], property.slice(1), this);
      }
    };
    function map(object, f) {
      var map = new Map;
      if (object instanceof Map)
        object.each(function(value, key) {
          map.set(key, value);
        });
      else if (Array.isArray(object)) {
        var i = -1,
            n = object.length,
            o;
        if (f == null)
          while (++i < n)
            map.set(i, object[i]);
        else
          while (++i < n)
            map.set(f(o = object[i], i, object), o);
      } else if (object)
        for (var key in object)
          map.set(key, object[key]);
      return map;
    }
    function nest() {
      var keys = [],
          sortKeys = [],
          sortValues,
          rollup,
          nest;
      function apply(array, depth, createResult, setResult) {
        if (depth >= keys.length)
          return rollup != null ? rollup(array) : (sortValues != null ? array.sort(sortValues) : array);
        var i = -1,
            n = array.length,
            key = keys[depth++],
            keyValue,
            value,
            valuesByKey = map(),
            values,
            result = createResult();
        while (++i < n) {
          if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
            values.push(value);
          } else {
            valuesByKey.set(keyValue, [value]);
          }
        }
        valuesByKey.each(function(values, key) {
          setResult(result, key, apply(values, depth, createResult, setResult));
        });
        return result;
      }
      function entries(map, depth) {
        if (++depth > keys.length)
          return map;
        var array,
            sortKey = sortKeys[depth - 1];
        if (rollup != null && depth >= keys.length)
          array = map.entries();
        else
          array = [], map.each(function(v, k) {
            array.push({
              key: k,
              values: entries(v, depth)
            });
          });
        return sortKey != null ? array.sort(function(a, b) {
          return sortKey(a.key, b.key);
        }) : array;
      }
      return nest = {
        object: function(array) {
          return apply(array, 0, createObject, setObject);
        },
        map: function(array) {
          return apply(array, 0, createMap, setMap);
        },
        entries: function(array) {
          return entries(apply(array, 0, createMap, setMap), 0);
        },
        key: function(d) {
          keys.push(d);
          return nest;
        },
        sortKeys: function(order) {
          sortKeys[keys.length - 1] = order;
          return nest;
        },
        sortValues: function(order) {
          sortValues = order;
          return nest;
        },
        rollup: function(f) {
          rollup = f;
          return nest;
        }
      };
    }
    function createObject() {
      return {};
    }
    function setObject(object, key, value) {
      object[key] = value;
    }
    function createMap() {
      return map();
    }
    function setMap(map, key, value) {
      map.set(key, value);
    }
    function Set() {}
    var proto = map.prototype;
    Set.prototype = set.prototype = {
      constructor: Set,
      has: proto.has,
      add: function(value) {
        value += "";
        this[prefix + value] = value;
        return this;
      },
      remove: proto.remove,
      clear: proto.clear,
      values: proto.keys,
      size: proto.size,
      empty: proto.empty,
      each: proto.each
    };
    function set(object, f) {
      var set = new Set;
      if (object instanceof Set)
        object.each(function(value) {
          set.add(value);
        });
      else if (object) {
        var i = -1,
            n = object.length;
        if (f == null)
          while (++i < n)
            set.add(object[i]);
        else
          while (++i < n)
            set.add(f(object[i], i, object));
      }
      return set;
    }
    function keys(map) {
      var keys = [];
      for (var key in map)
        keys.push(key);
      return keys;
    }
    function values(map) {
      var values = [];
      for (var key in map)
        values.push(map[key]);
      return values;
    }
    function entries(map) {
      var entries = [];
      for (var key in map)
        entries.push({
          key: key,
          value: map[key]
        });
      return entries;
    }
    exports.nest = nest;
    exports.set = set;
    exports.map = map;
    exports.keys = keys;
    exports.values = values;
    exports.entries = entries;
    Object.defineProperty(exports, '__esModule', {value: true});
  }));
  return module.exports;
});

$__System.registerDynamic("2a", ["43"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('43');
  return module.exports;
});

$__System.registerDynamic("44", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  (function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (factory((global.d3 = global.d3 || {})));
  }(this, function(exports) {
    'use strict';
    var noop = {value: function() {}};
    function dispatch() {
      for (var i = 0,
          n = arguments.length,
          _ = {},
          t; i < n; ++i) {
        if (!(t = arguments[i] + "") || (t in _))
          throw new Error("illegal type: " + t);
        _[t] = [];
      }
      return new Dispatch(_);
    }
    function Dispatch(_) {
      this._ = _;
    }
    function parseTypenames(typenames, types) {
      return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "",
            i = t.indexOf(".");
        if (i >= 0)
          name = t.slice(i + 1), t = t.slice(0, i);
        if (t && !types.hasOwnProperty(t))
          throw new Error("unknown type: " + t);
        return {
          type: t,
          name: name
        };
      });
    }
    Dispatch.prototype = dispatch.prototype = {
      constructor: Dispatch,
      on: function(typename, callback) {
        var _ = this._,
            T = parseTypenames(typename + "", _),
            t,
            i = -1,
            n = T.length;
        if (arguments.length < 2) {
          while (++i < n)
            if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name)))
              return t;
          return;
        }
        if (callback != null && typeof callback !== "function")
          throw new Error("invalid callback: " + callback);
        while (++i < n) {
          if (t = (typename = T[i]).type)
            _[t] = set(_[t], typename.name, callback);
          else if (callback == null)
            for (t in _)
              _[t] = set(_[t], typename.name, null);
        }
        return this;
      },
      copy: function() {
        var copy = {},
            _ = this._;
        for (var t in _)
          copy[t] = _[t].slice();
        return new Dispatch(copy);
      },
      call: function(type, that) {
        if ((n = arguments.length - 2) > 0)
          for (var args = new Array(n),
              i = 0,
              n,
              t; i < n; ++i)
            args[i] = arguments[i + 2];
        if (!this._.hasOwnProperty(type))
          throw new Error("unknown type: " + type);
        for (t = this._[type], i = 0, n = t.length; i < n; ++i)
          t[i].value.apply(that, args);
      },
      apply: function(type, that, args) {
        if (!this._.hasOwnProperty(type))
          throw new Error("unknown type: " + type);
        for (var t = this._[type],
            i = 0,
            n = t.length; i < n; ++i)
          t[i].value.apply(that, args);
      }
    };
    function get(type, name) {
      for (var i = 0,
          n = type.length,
          c; i < n; ++i) {
        if ((c = type[i]).name === name) {
          return c.value;
        }
      }
    }
    function set(type, name, callback) {
      for (var i = 0,
          n = type.length; i < n; ++i) {
        if (type[i].name === name) {
          type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
          break;
        }
      }
      if (callback != null)
        type.push({
          name: name,
          value: callback
        });
      return type;
    }
    exports.dispatch = dispatch;
    Object.defineProperty(exports, '__esModule', {value: true});
  }));
  return module.exports;
});

$__System.registerDynamic("3a", ["44"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('44');
  return module.exports;
});

$__System.registerDynamic("45", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  (function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (factory((global.d3 = global.d3 || {})));
  }(this, function(exports) {
    'use strict';
    function objectConverter(columns) {
      return new Function("d", "return {" + columns.map(function(name, i) {
        return JSON.stringify(name) + ": d[" + i + "]";
      }).join(",") + "}");
    }
    function customConverter(columns, f) {
      var object = objectConverter(columns);
      return function(row, i) {
        return f(object(row), i, columns);
      };
    }
    function inferColumns(rows) {
      var columnSet = Object.create(null),
          columns = [];
      rows.forEach(function(row) {
        for (var column in row) {
          if (!(column in columnSet)) {
            columns.push(columnSet[column] = column);
          }
        }
      });
      return columns;
    }
    function dsv(delimiter) {
      var reFormat = new RegExp("[\"" + delimiter + "\n]"),
          delimiterCode = delimiter.charCodeAt(0);
      function parse(text, f) {
        var convert,
            columns,
            rows = parseRows(text, function(row, i) {
              if (convert)
                return convert(row, i - 1);
              columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
            });
        rows.columns = columns;
        return rows;
      }
      function parseRows(text, f) {
        var EOL = {},
            EOF = {},
            rows = [],
            N = text.length,
            I = 0,
            n = 0,
            t,
            eol;
        function token() {
          if (I >= N)
            return EOF;
          if (eol)
            return eol = false, EOL;
          var j = I,
              c;
          if (text.charCodeAt(j) === 34) {
            var i = j;
            while (i++ < N) {
              if (text.charCodeAt(i) === 34) {
                if (text.charCodeAt(i + 1) !== 34)
                  break;
                ++i;
              }
            }
            I = i + 2;
            c = text.charCodeAt(i + 1);
            if (c === 13) {
              eol = true;
              if (text.charCodeAt(i + 2) === 10)
                ++I;
            } else if (c === 10) {
              eol = true;
            }
            return text.slice(j + 1, i).replace(/""/g, "\"");
          }
          while (I < N) {
            var k = 1;
            c = text.charCodeAt(I++);
            if (c === 10)
              eol = true;
            else if (c === 13) {
              eol = true;
              if (text.charCodeAt(I) === 10)
                ++I, ++k;
            } else if (c !== delimiterCode)
              continue;
            return text.slice(j, I - k);
          }
          return text.slice(j);
        }
        while ((t = token()) !== EOF) {
          var a = [];
          while (t !== EOL && t !== EOF) {
            a.push(t);
            t = token();
          }
          if (f && (a = f(a, n++)) == null)
            continue;
          rows.push(a);
        }
        return rows;
      }
      function format(rows, columns) {
        if (columns == null)
          columns = inferColumns(rows);
        return [columns.map(formatValue).join(delimiter)].concat(rows.map(function(row) {
          return columns.map(function(column) {
            return formatValue(row[column]);
          }).join(delimiter);
        })).join("\n");
      }
      function formatRows(rows) {
        return rows.map(formatRow).join("\n");
      }
      function formatRow(row) {
        return row.map(formatValue).join(delimiter);
      }
      function formatValue(text) {
        return text == null ? "" : reFormat.test(text += "") ? "\"" + text.replace(/\"/g, "\"\"") + "\"" : text;
      }
      return {
        parse: parse,
        parseRows: parseRows,
        format: format,
        formatRows: formatRows
      };
    }
    var csv = dsv(",");
    var csvParse = csv.parse;
    var csvParseRows = csv.parseRows;
    var csvFormat = csv.format;
    var csvFormatRows = csv.formatRows;
    var tsv = dsv("\t");
    var tsvParse = tsv.parse;
    var tsvParseRows = tsv.parseRows;
    var tsvFormat = tsv.format;
    var tsvFormatRows = tsv.formatRows;
    exports.dsvFormat = dsv;
    exports.csvParse = csvParse;
    exports.csvParseRows = csvParseRows;
    exports.csvFormat = csvFormat;
    exports.csvFormatRows = csvFormatRows;
    exports.tsvParse = tsvParse;
    exports.tsvParseRows = tsvParseRows;
    exports.tsvFormat = tsvFormat;
    exports.tsvFormatRows = tsvFormatRows;
    Object.defineProperty(exports, '__esModule', {value: true});
  }));
  return module.exports;
});

$__System.registerDynamic("46", ["45"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('45');
  return module.exports;
});

$__System.registerDynamic("47", ["2a", "3a", "46"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  (function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, $__require('2a'), $__require('3a'), $__require('46')) : typeof define === 'function' && define.amd ? define(['exports', 'd3-collection', 'd3-dispatch', 'd3-dsv'], factory) : (factory((global.d3 = global.d3 || {}), global.d3, global.d3, global.d3));
  }(this, function(exports, d3Collection, d3Dispatch, d3Dsv) {
    'use strict';
    function request(url, callback) {
      var request,
          event = d3Dispatch.dispatch("beforesend", "progress", "load", "error"),
          mimeType,
          headers = d3Collection.map(),
          xhr = new XMLHttpRequest,
          user = null,
          password = null,
          response,
          responseType,
          timeout = 0;
      if (typeof XDomainRequest !== "undefined" && !("withCredentials" in xhr) && /^(http(s)?:)?\/\//.test(url))
        xhr = new XDomainRequest;
      "onload" in xhr ? xhr.onload = xhr.onerror = xhr.ontimeout = respond : xhr.onreadystatechange = function(o) {
        xhr.readyState > 3 && respond(o);
      };
      function respond(o) {
        var status = xhr.status,
            result;
        if (!status && hasResponse(xhr) || status >= 200 && status < 300 || status === 304) {
          if (response) {
            try {
              result = response.call(request, xhr);
            } catch (e) {
              event.call("error", request, e);
              return;
            }
          } else {
            result = xhr;
          }
          event.call("load", request, result);
        } else {
          event.call("error", request, o);
        }
      }
      xhr.onprogress = function(e) {
        event.call("progress", request, e);
      };
      request = {
        header: function(name, value) {
          name = (name + "").toLowerCase();
          if (arguments.length < 2)
            return headers.get(name);
          if (value == null)
            headers.remove(name);
          else
            headers.set(name, value + "");
          return request;
        },
        mimeType: function(value) {
          if (!arguments.length)
            return mimeType;
          mimeType = value == null ? null : value + "";
          return request;
        },
        responseType: function(value) {
          if (!arguments.length)
            return responseType;
          responseType = value;
          return request;
        },
        timeout: function(value) {
          if (!arguments.length)
            return timeout;
          timeout = +value;
          return request;
        },
        user: function(value) {
          return arguments.length < 1 ? user : (user = value == null ? null : value + "", request);
        },
        password: function(value) {
          return arguments.length < 1 ? password : (password = value == null ? null : value + "", request);
        },
        response: function(value) {
          response = value;
          return request;
        },
        get: function(data, callback) {
          return request.send("GET", data, callback);
        },
        post: function(data, callback) {
          return request.send("POST", data, callback);
        },
        send: function(method, data, callback) {
          xhr.open(method, url, true, user, password);
          if (mimeType != null && !headers.has("accept"))
            headers.set("accept", mimeType + ",*/*");
          if (xhr.setRequestHeader)
            headers.each(function(value, name) {
              xhr.setRequestHeader(name, value);
            });
          if (mimeType != null && xhr.overrideMimeType)
            xhr.overrideMimeType(mimeType);
          if (responseType != null)
            xhr.responseType = responseType;
          if (timeout > 0)
            xhr.timeout = timeout;
          if (callback == null && typeof data === "function")
            callback = data, data = null;
          if (callback != null && callback.length === 1)
            callback = fixCallback(callback);
          if (callback != null)
            request.on("error", callback).on("load", function(xhr) {
              callback(null, xhr);
            });
          event.call("beforesend", request, xhr);
          xhr.send(data == null ? null : data);
          return request;
        },
        abort: function() {
          xhr.abort();
          return request;
        },
        on: function() {
          var value = event.on.apply(event, arguments);
          return value === event ? request : value;
        }
      };
      if (callback != null) {
        if (typeof callback !== "function")
          throw new Error("invalid callback: " + callback);
        return request.get(callback);
      }
      return request;
    }
    function fixCallback(callback) {
      return function(error, xhr) {
        callback(error == null ? xhr : null);
      };
    }
    function hasResponse(xhr) {
      var type = xhr.responseType;
      return type && type !== "text" ? xhr.response : xhr.responseText;
    }
    function type(defaultMimeType, response) {
      return function(url, callback) {
        var r = request(url).mimeType(defaultMimeType).response(response);
        if (callback != null) {
          if (typeof callback !== "function")
            throw new Error("invalid callback: " + callback);
          return r.get(callback);
        }
        return r;
      };
    }
    var html = type("text/html", function(xhr) {
      return document.createRange().createContextualFragment(xhr.responseText);
    });
    var json = type("application/json", function(xhr) {
      return JSON.parse(xhr.responseText);
    });
    var text = type("text/plain", function(xhr) {
      return xhr.responseText;
    });
    var xml = type("application/xml", function(xhr) {
      var xml = xhr.responseXML;
      if (!xml)
        throw new Error("parse error");
      return xml;
    });
    function dsv(defaultMimeType, parse) {
      return function(url, row, callback) {
        if (arguments.length < 3)
          callback = row, row = null;
        var r = request(url).mimeType(defaultMimeType);
        r.row = function(_) {
          return arguments.length ? r.response(responseOf(parse, row = _)) : row;
        };
        r.row(row);
        return callback ? r.get(callback) : r;
      };
    }
    function responseOf(parse, row) {
      return function(request) {
        return parse(request.responseText, row);
      };
    }
    var csv = dsv("text/csv", d3Dsv.csvParse);
    var tsv = dsv("text/tab-separated-values", d3Dsv.tsvParse);
    exports.request = request;
    exports.html = html;
    exports.json = json;
    exports.text = text;
    exports.xml = xml;
    exports.csv = csv;
    exports.tsv = tsv;
    Object.defineProperty(exports, '__esModule', {value: true});
  }));
  return module.exports;
});

$__System.registerDynamic("9", ["47"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('47');
  return module.exports;
});

$__System.register('b', ['9', '11', '42'], function (_export) {
    var d3_json, utils, _Object$defineProperties, minWidth, padding, size, cols, isFirefox, browser, width, height, chart, colors, sync, stateHeaders, record;

    return {
        setters: [function (_3) {
            d3_json = _3.json;
        }, function (_2) {
            utils = _2['default'];
        }, function (_) {
            _Object$defineProperties = _['default'];
        }],
        execute: function () {
            'use strict';

            minWidth = 320;
            padding = 20;

            // window
            size = utils.getWindowSize();
            cols = Math.floor(size.w / minWidth);
            isFirefox = typeof InstallTrigger !== 'undefined';

            // browser type
            browser = isFirefox ? "ff" : null;

            _export('browser', browser);

            // chart
            width = (cols > 0 ? Math.round(size.w / cols) : minWidth) - padding * 2 - 1;
            height = Math.round(width * 0.62) - padding * 2;
            chart = {
                w: width,
                h: height,
                padding: padding
            };

            _export('chart', chart);

            // colors
            colors = {
                gold: "#fbdc00",
                silver: "#C0C0C0",
                bronze: "#CD7F32",
                others: "#aad8f1", //"#E0E0E0",
                wr: "#333"
            };

            _export('colors', colors);

            // sync scale, domain, ... ?
            sync = _Object$defineProperties({
                s: { x: null, y: null },
                d: { x: null, y: null }
            }, {
                scale: {
                    set: function set(s) {
                        this.s.x = s.x;
                        this.s.y = s.y;
                        this.d.x = s.domain.x;
                        this.d.y = s.domain.y;
                        //console.log("year:", this.d.y, "mark:", this.d.x);
                    },
                    get: function get() {
                        return this.s;
                    },
                    configurable: true,
                    enumerable: true
                },
                domain: {
                    get: function get() {
                        return this.d;
                    },
                    configurable: true,
                    enumerable: true
                }
            });

            _export('sync', sync);

            // header
            stateHeaders = _Object$defineProperties({
                dataObj: null,
                objList: null
            }, {
                data: {
                    set: function set(dataObj) {
                        this.dataObj = dataObj;
                        this.objList = dataObj.map(function (d) {
                            return d.state;
                        });
                    },
                    get: function get() {
                        return this.dataObj;
                    },
                    configurable: true,
                    enumerable: true
                },
                list: {
                    get: function get() {
                        return this.objList;
                    },
                    configurable: true,
                    enumerable: true
                }
            });

            _export('stateHeaders', stateHeaders);

            record = _Object$defineProperties({
                dataWr: null,
                dataOr: null,
                typeMark: null

            }, {
                wr: {
                    set: function set(data) {
                        this.dataWr = data;
                    },
                    get: function get() {
                        return this.dataWr;
                    },
                    configurable: true,
                    enumerable: true
                },
                or: {
                    set: function set(data) {
                        this.dataOr = data;
                    },
                    get: function get() {
                        return this.dataOr;
                    },
                    configurable: true,
                    enumerable: true
                },
                type: {
                    set: function set(data) {
                        this.typeMark = data === "Time" ? "s" : "m";
                    },
                    get: function get() {
                        return this.typeMark;
                    },
                    configurable: true,
                    enumerable: true
                }
            });

            _export('record', record);
        }
    };
});
$__System.register('48', ['29', 'e', 'f', 'c', 'd', 'b'], function (_export) {
    var d3_extent, _Object$keys, jsonRecord, parseData, result, record;

    function displayResult(err, jsonRecord, jsonFinals, jsonStates) {
        if (err) {
            console.error(err);return;
        }

        stateHeaders.data = jsonStates.embed_vs;

        var data = parseData(jsonRecord, jsonFinals, "Distance");
        var dataCombo = data.finals.concat(data.medals, data.worlds);

        // TODO: move to data/parse due to calc change
        var tempOr = data.medals[data.medals.length - 1];
        var tempWr = data.worlds[data.worlds.length - 1];
        //record.or = tempOr
        //record.wr
        console.log("gm", data.finals[data.finals.length - 1]);
        console.log("wr", tempWr);
        console.log("or", tempOr);

        // farest record
        var distWr = d3_extent(dataCombo, function (d) {
            return d.x;
        })[1];
        _Object$keys(data).forEach(function (dd) {
            // time to distance
            data[dd] = data[dd].map(function (dm) {
                dm.x = Math.round((dm.x - distWr) * 1000) / 1000;
                dm.attrs.dist = Math.abs(dm.x);
                return dm;
            });
            // sort
            data[dd].sort(function (d1, d2) {
                return d1.x - d2.x;
            });
        });
        console.log(data);

        result(data, dataCombo);
    }
    return {
        setters: [function (_) {
            d3_extent = _.extent;
        }, function (_e) {
            _Object$keys = _e['default'];
        }, function (_f) {
            jsonRecord = _f['default'];
        }, function (_c) {
            parseData = _c['default'];
        }, function (_d) {
            result = _d['default'];
        }, function (_b) {
            record = _b.record;
        }],
        execute: function () {
            'use strict';

            //import jsonFinals from '../../dataDummy/long-jump_m.json!json';

            _export('default', function (event, test) {
                if (test) {
                    console.log("this is a testing page");
                }
                fetchData(event, test, displayResult);
            });
        }
    };
});
$__System.register('1', ['3', '4', '5', '11', '20', '48', '3d', 'a'], function (_export) {
    'use strict';

    var iframeMessenger, embedHTML, throttle, utils, updateInfoPosition, longjump_m, updateDotAnimation, swimming, page;

    function setEmbedSize() {
        var size = utils.getWindowSize();
        if (size.w === page.w) return;

        // page width change
        var elEmbed = document.querySelector(".graph");
        var height = Math.round(size.w * 0.6);
        elEmbed.style.height = height + "px";

        updateDotAnimation();
        updateInfoPosition();

        // header position change
        switch (true) {
            case size.w < 980 && page.w >= 980:
                swapeChildNodes("in", "top");break;
            case page.w < 980 && size.w >= 980:
                swapeChildNodes("top", "in");break;
            default: /*console.log("no change");*/}

        page.w = size.w;
    }

    function swapeChildNodes(pre, cur) {
        //console.log(pre, "->", cur);
        var nodeCurParent = document.querySelector("." + cur);
        var nodePreParent = document.querySelector("." + pre);

        // copy from pre parent
        var nodeToBeSwapped = nodePreParent.children;

        // remove from pre add to new parent
        utils.nlist2arr(nodeToBeSwapped).forEach(function (node) {
            nodePreParent.removeChild(node);
            nodeCurParent.appendChild(node);
        });
    }
    return {
        setters: [function (_) {
            iframeMessenger = _['default'];
        }, function (_2) {
            embedHTML = _2['default'];
        }, function (_4) {
            throttle = _4['default'];
        }, function (_3) {
            utils = _3['default'];
        }, function (_5) {
            updateInfoPosition = _5.updateInfoPosition;
        }, function (_6) {
            longjump_m = _6['default'];
        }, function (_d) {
            updateDotAnimation = _d.updateDotAnimation;
        }, function (_a) {
            swimming = _a['default'];
        }],
        execute: function () {

            window.init = function init(el, config) {
                iframeMessenger.enableAutoResize();

                // get event type
                var event = window.location.search.replace("?", "");
                if (!event) {
                    console.error("param is required!");
                    return;
                }

                // set embed size
                el.innerHTML = embedHTML;
                window.addEventListener("resize", throttle(setEmbedSize, 500));
                setEmbedSize();

                // load chart   
                var data = undefined;
                switch (event) {

                    // realtime final data
                    case "freestyle_100x4_relay_w":
                        swimming(event);
                        break;

                    // testing
                    case "freestyle_400_w":
                    case "freestyle_200_m":
                    case "breaststroke_100_m":
                    case "medley_400_w":
                    case "medley_400_m":
                        swimming(event, "Test");
                        break;
                    //case "longjump_m":
                    //    longjump_m(event, "Test");
                    //    break;

                    default:
                        console.log("This event is not special!");
                }
            };

            page = { w: 0, mode: "small" };
        }
    };
});
})
(function(factory) {
  factory();
});
//# sourceMappingURL=embed.js.map
!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return D(e.substr(6));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
!function(e){function n(e,n){e=e.replace(l,"");var r=e.match(u),t=(r[1].split(",")[n]||"require").replace(s,""),i=p[t]||(p[t]=new RegExp(a+t+f,"g"));i.lastIndex=0;for(var o,c=[];o=i.exec(e);)c.push(o[2]||o[3]);return c}function r(e,n,t,o){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof n&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var l=i.get(e);return l.__useDefault?l["default"]:l}throw new TypeError("Invalid require")}for(var a=[],f=0;f<e.length;f++)a.push(i["import"](e[f],o));Promise.all(a).then(function(e){n&&n.apply(null,e)},t)}function t(t,l,a){"string"!=typeof t&&(a=l,l=t,t=null),l instanceof Array||(a=l,l=["require","exports","module"].splice(0,a.length)),"function"!=typeof a&&(a=function(e){return function(){return e}}(a)),void 0===l[l.length-1]&&l.pop();var f,u,s;-1!=(f=o.call(l,"require"))&&(l.splice(f,1),t||(l=l.concat(n(a.toString(),f)))),-1!=(u=o.call(l,"exports"))&&l.splice(u,1),-1!=(s=o.call(l,"module"))&&l.splice(s,1);var p={name:t,deps:l,execute:function(n,t,o){for(var p=[],c=0;c<l.length;c++)p.push(n(l[c]));o.uri=o.id,o.config=function(){},-1!=s&&p.splice(s,0,o),-1!=u&&p.splice(u,0,t),-1!=f&&p.splice(f,0,function(e,t,l){return"string"==typeof e&&"function"!=typeof t?n(e):r.call(i,e,t,l,o.id)});var d=a.apply(-1==u?e:t,p);return"undefined"==typeof d&&o&&(d=o.exports),"undefined"!=typeof d?d:void 0}};if(t)c.anonDefine||c.isBundle?c.anonDefine&&c.anonDefine.name&&(c.anonDefine=null):c.anonDefine=p,c.isBundle=!0,i.registerDynamic(p.name,p.deps,!1,p.execute);else{if(c.anonDefine&&!c.anonDefine.name)throw new Error("Multiple anonymous defines in module "+t);c.anonDefine=p}}var i=$__System,o=Array.prototype.indexOf||function(e){for(var n=0,r=this.length;r>n;n++)if(this[n]===e)return n;return-1},l=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,a="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",f="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",u=/\(([^\)]*)\)/,s=/^\s+|\s+$/g,p={};t.amd={};var c={isBundle:!1,anonDefine:null};i.amdDefine=t,i.amdRequire=r}("undefined"!=typeof self?self:global);
(function() {
var define = $__System.amdDefine;
!function(name, context, definition) {
  if (typeof module != 'undefined' && module.exports)
    module.exports = definition();
  else if (typeof define == 'function' && define.amd)
    define("2", [], definition);
  else
    context[name] = definition();
}('reqwest', this, function() {
  var win = window,
      doc = document,
      httpsRe = /^http/,
      protocolRe = /(^\w+):\/\//,
      twoHundo = /^(20\d|1223)$/,
      byTag = 'getElementsByTagName',
      readyState = 'readyState',
      contentType = 'Content-Type',
      requestedWith = 'X-Requested-With',
      head = doc[byTag]('head')[0],
      uniqid = 0,
      callbackPrefix = 'reqwest_' + (+new Date()),
      lastValue,
      xmlHttpRequest = 'XMLHttpRequest',
      xDomainRequest = 'XDomainRequest',
      noop = function() {},
      isArray = typeof Array.isArray == 'function' ? Array.isArray : function(a) {
        return a instanceof Array;
      },
      defaultHeaders = {
        'contentType': 'application/x-www-form-urlencoded',
        'requestedWith': xmlHttpRequest,
        'accept': {
          '*': 'text/javascript, text/html, application/xml, text/xml, */*',
          'xml': 'application/xml, text/xml',
          'html': 'text/html',
          'text': 'text/plain',
          'json': 'application/json, text/javascript',
          'js': 'application/javascript, text/javascript'
        }
      },
      xhr = function(o) {
        if (o['crossOrigin'] === true) {
          var xhr = win[xmlHttpRequest] ? new XMLHttpRequest() : null;
          if (xhr && 'withCredentials' in xhr) {
            return xhr;
          } else if (win[xDomainRequest]) {
            return new XDomainRequest();
          } else {
            throw new Error('Browser does not support cross-origin requests');
          }
        } else if (win[xmlHttpRequest]) {
          return new XMLHttpRequest();
        } else {
          return new ActiveXObject('Microsoft.XMLHTTP');
        }
      },
      globalSetupOptions = {dataFilter: function(data) {
          return data;
        }};
  function succeed(r) {
    var protocol = protocolRe.exec(r.url);
    protocol = (protocol && protocol[1]) || window.location.protocol;
    return httpsRe.test(protocol) ? twoHundo.test(r.request.status) : !!r.request.response;
  }
  function handleReadyState(r, success, error) {
    return function() {
      if (r._aborted)
        return error(r.request);
      if (r._timedOut)
        return error(r.request, 'Request is aborted: timeout');
      if (r.request && r.request[readyState] == 4) {
        r.request.onreadystatechange = noop;
        if (succeed(r))
          success(r.request);
        else
          error(r.request);
      }
    };
  }
  function setHeaders(http, o) {
    var headers = o['headers'] || {},
        h;
    headers['Accept'] = headers['Accept'] || defaultHeaders['accept'][o['type']] || defaultHeaders['accept']['*'];
    var isAFormData = typeof FormData === 'function' && (o['data'] instanceof FormData);
    if (!o['crossOrigin'] && !headers[requestedWith])
      headers[requestedWith] = defaultHeaders['requestedWith'];
    if (!headers[contentType] && !isAFormData)
      headers[contentType] = o['contentType'] || defaultHeaders['contentType'];
    for (h in headers)
      headers.hasOwnProperty(h) && 'setRequestHeader' in http && http.setRequestHeader(h, headers[h]);
  }
  function setCredentials(http, o) {
    if (typeof o['withCredentials'] !== 'undefined' && typeof http.withCredentials !== 'undefined') {
      http.withCredentials = !!o['withCredentials'];
    }
  }
  function generalCallback(data) {
    lastValue = data;
  }
  function urlappend(url, s) {
    return url + (/\?/.test(url) ? '&' : '?') + s;
  }
  function handleJsonp(o, fn, err, url) {
    var reqId = uniqid++,
        cbkey = o['jsonpCallback'] || 'callback',
        cbval = o['jsonpCallbackName'] || reqwest.getcallbackPrefix(reqId),
        cbreg = new RegExp('((^|\\?|&)' + cbkey + ')=([^&]+)'),
        match = url.match(cbreg),
        script = doc.createElement('script'),
        loaded = 0,
        isIE10 = navigator.userAgent.indexOf('MSIE 10.0') !== -1;
    if (match) {
      if (match[3] === '?') {
        url = url.replace(cbreg, '$1=' + cbval);
      } else {
        cbval = match[3];
      }
    } else {
      url = urlappend(url, cbkey + '=' + cbval);
    }
    win[cbval] = generalCallback;
    script.type = 'text/javascript';
    script.src = url;
    script.async = true;
    if (typeof script.onreadystatechange !== 'undefined' && !isIE10) {
      script.htmlFor = script.id = '_reqwest_' + reqId;
    }
    script.onload = script.onreadystatechange = function() {
      if ((script[readyState] && script[readyState] !== 'complete' && script[readyState] !== 'loaded') || loaded) {
        return false;
      }
      script.onload = script.onreadystatechange = null;
      script.onclick && script.onclick();
      fn(lastValue);
      lastValue = undefined;
      head.removeChild(script);
      loaded = 1;
    };
    head.appendChild(script);
    return {abort: function() {
        script.onload = script.onreadystatechange = null;
        err({}, 'Request is aborted: timeout', {});
        lastValue = undefined;
        head.removeChild(script);
        loaded = 1;
      }};
  }
  function getRequest(fn, err) {
    var o = this.o,
        method = (o['method'] || 'GET').toUpperCase(),
        url = typeof o === 'string' ? o : o['url'],
        data = (o['processData'] !== false && o['data'] && typeof o['data'] !== 'string') ? reqwest.toQueryString(o['data']) : (o['data'] || null),
        http,
        sendWait = false;
    if ((o['type'] == 'jsonp' || method == 'GET') && data) {
      url = urlappend(url, data);
      data = null;
    }
    if (o['type'] == 'jsonp')
      return handleJsonp(o, fn, err, url);
    http = (o.xhr && o.xhr(o)) || xhr(o);
    http.open(method, url, o['async'] === false ? false : true);
    setHeaders(http, o);
    setCredentials(http, o);
    if (win[xDomainRequest] && http instanceof win[xDomainRequest]) {
      http.onload = fn;
      http.onerror = err;
      http.onprogress = function() {};
      sendWait = true;
    } else {
      http.onreadystatechange = handleReadyState(this, fn, err);
    }
    o['before'] && o['before'](http);
    if (sendWait) {
      setTimeout(function() {
        http.send(data);
      }, 200);
    } else {
      http.send(data);
    }
    return http;
  }
  function Reqwest(o, fn) {
    this.o = o;
    this.fn = fn;
    init.apply(this, arguments);
  }
  function setType(header) {
    if (header.match('json'))
      return 'json';
    if (header.match('javascript'))
      return 'js';
    if (header.match('text'))
      return 'html';
    if (header.match('xml'))
      return 'xml';
  }
  function init(o, fn) {
    this.url = typeof o == 'string' ? o : o['url'];
    this.timeout = null;
    this._fulfilled = false;
    this._successHandler = function() {};
    this._fulfillmentHandlers = [];
    this._errorHandlers = [];
    this._completeHandlers = [];
    this._erred = false;
    this._responseArgs = {};
    var self = this;
    fn = fn || function() {};
    if (o['timeout']) {
      this.timeout = setTimeout(function() {
        timedOut();
      }, o['timeout']);
    }
    if (o['success']) {
      this._successHandler = function() {
        o['success'].apply(o, arguments);
      };
    }
    if (o['error']) {
      this._errorHandlers.push(function() {
        o['error'].apply(o, arguments);
      });
    }
    if (o['complete']) {
      this._completeHandlers.push(function() {
        o['complete'].apply(o, arguments);
      });
    }
    function complete(resp) {
      o['timeout'] && clearTimeout(self.timeout);
      self.timeout = null;
      while (self._completeHandlers.length > 0) {
        self._completeHandlers.shift()(resp);
      }
    }
    function success(resp) {
      var type = o['type'] || resp && setType(resp.getResponseHeader('Content-Type'));
      resp = (type !== 'jsonp') ? self.request : resp;
      var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type),
          r = filteredResponse;
      try {
        resp.responseText = r;
      } catch (e) {}
      if (r) {
        switch (type) {
          case 'json':
            try {
              resp = win.JSON ? win.JSON.parse(r) : eval('(' + r + ')');
            } catch (err) {
              return error(resp, 'Could not parse JSON in response', err);
            }
            break;
          case 'js':
            resp = eval(r);
            break;
          case 'html':
            resp = r;
            break;
          case 'xml':
            resp = resp.responseXML && resp.responseXML.parseError && resp.responseXML.parseError.errorCode && resp.responseXML.parseError.reason ? null : resp.responseXML;
            break;
        }
      }
      self._responseArgs.resp = resp;
      self._fulfilled = true;
      fn(resp);
      self._successHandler(resp);
      while (self._fulfillmentHandlers.length > 0) {
        resp = self._fulfillmentHandlers.shift()(resp);
      }
      complete(resp);
    }
    function timedOut() {
      self._timedOut = true;
      self.request.abort();
    }
    function error(resp, msg, t) {
      resp = self.request;
      self._responseArgs.resp = resp;
      self._responseArgs.msg = msg;
      self._responseArgs.t = t;
      self._erred = true;
      while (self._errorHandlers.length > 0) {
        self._errorHandlers.shift()(resp, msg, t);
      }
      complete(resp);
    }
    this.request = getRequest.call(this, success, error);
  }
  Reqwest.prototype = {
    abort: function() {
      this._aborted = true;
      this.request.abort();
    },
    retry: function() {
      init.call(this, this.o, this.fn);
    },
    then: function(success, fail) {
      success = success || function() {};
      fail = fail || function() {};
      if (this._fulfilled) {
        this._responseArgs.resp = success(this._responseArgs.resp);
      } else if (this._erred) {
        fail(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t);
      } else {
        this._fulfillmentHandlers.push(success);
        this._errorHandlers.push(fail);
      }
      return this;
    },
    always: function(fn) {
      if (this._fulfilled || this._erred) {
        fn(this._responseArgs.resp);
      } else {
        this._completeHandlers.push(fn);
      }
      return this;
    },
    fail: function(fn) {
      if (this._erred) {
        fn(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t);
      } else {
        this._errorHandlers.push(fn);
      }
      return this;
    },
    'catch': function(fn) {
      return this.fail(fn);
    }
  };
  function reqwest(o, fn) {
    return new Reqwest(o, fn);
  }
  function normalize(s) {
    return s ? s.replace(/\r?\n/g, '\r\n') : '';
  }
  function serial(el, cb) {
    var n = el.name,
        t = el.tagName.toLowerCase(),
        optCb = function(o) {
          if (o && !o['disabled'])
            cb(n, normalize(o['attributes']['value'] && o['attributes']['value']['specified'] ? o['value'] : o['text']));
        },
        ch,
        ra,
        val,
        i;
    if (el.disabled || !n)
      return;
    switch (t) {
      case 'input':
        if (!/reset|button|image|file/i.test(el.type)) {
          ch = /checkbox/i.test(el.type);
          ra = /radio/i.test(el.type);
          val = el.value;
          ;
          (!(ch || ra) || el.checked) && cb(n, normalize(ch && val === '' ? 'on' : val));
        }
        break;
      case 'textarea':
        cb(n, normalize(el.value));
        break;
      case 'select':
        if (el.type.toLowerCase() === 'select-one') {
          optCb(el.selectedIndex >= 0 ? el.options[el.selectedIndex] : null);
        } else {
          for (i = 0; el.length && i < el.length; i++) {
            el.options[i].selected && optCb(el.options[i]);
          }
        }
        break;
    }
  }
  function eachFormElement() {
    var cb = this,
        e,
        i,
        serializeSubtags = function(e, tags) {
          var i,
              j,
              fa;
          for (i = 0; i < tags.length; i++) {
            fa = e[byTag](tags[i]);
            for (j = 0; j < fa.length; j++)
              serial(fa[j], cb);
          }
        };
    for (i = 0; i < arguments.length; i++) {
      e = arguments[i];
      if (/input|select|textarea/i.test(e.tagName))
        serial(e, cb);
      serializeSubtags(e, ['input', 'select', 'textarea']);
    }
  }
  function serializeQueryString() {
    return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments));
  }
  function serializeHash() {
    var hash = {};
    eachFormElement.apply(function(name, value) {
      if (name in hash) {
        hash[name] && !isArray(hash[name]) && (hash[name] = [hash[name]]);
        hash[name].push(value);
      } else
        hash[name] = value;
    }, arguments);
    return hash;
  }
  reqwest.serializeArray = function() {
    var arr = [];
    eachFormElement.apply(function(name, value) {
      arr.push({
        name: name,
        value: value
      });
    }, arguments);
    return arr;
  };
  reqwest.serialize = function() {
    if (arguments.length === 0)
      return '';
    var opt,
        fn,
        args = Array.prototype.slice.call(arguments, 0);
    opt = args.pop();
    opt && opt.nodeType && args.push(opt) && (opt = null);
    opt && (opt = opt.type);
    if (opt == 'map')
      fn = serializeHash;
    else if (opt == 'array')
      fn = reqwest.serializeArray;
    else
      fn = serializeQueryString;
    return fn.apply(null, args);
  };
  reqwest.toQueryString = function(o, trad) {
    var prefix,
        i,
        traditional = trad || false,
        s = [],
        enc = encodeURIComponent,
        add = function(key, value) {
          value = ('function' === typeof value) ? value() : (value == null ? '' : value);
          s[s.length] = enc(key) + '=' + enc(value);
        };
    if (isArray(o)) {
      for (i = 0; o && i < o.length; i++)
        add(o[i]['name'], o[i]['value']);
    } else {
      for (prefix in o) {
        if (o.hasOwnProperty(prefix))
          buildParams(prefix, o[prefix], traditional, add);
      }
    }
    return s.join('&').replace(/%20/g, '+');
  };
  function buildParams(prefix, obj, traditional, add) {
    var name,
        i,
        v,
        rbracket = /\[\]$/;
    if (isArray(obj)) {
      for (i = 0; obj && i < obj.length; i++) {
        v = obj[i];
        if (traditional || rbracket.test(prefix)) {
          add(prefix, v);
        } else {
          buildParams(prefix + '[' + (typeof v === 'object' ? i : '') + ']', v, traditional, add);
        }
      }
    } else if (obj && obj.toString() === '[object Object]') {
      for (name in obj) {
        buildParams(prefix + '[' + name + ']', obj[name], traditional, add);
      }
    } else {
      add(prefix, obj);
    }
  }
  reqwest.getcallbackPrefix = function() {
    return callbackPrefix;
  };
  reqwest.compat = function(o, fn) {
    if (o) {
      o['type'] && (o['method'] = o['type']) && delete o['type'];
      o['dataType'] && (o['type'] = o['dataType']);
      o['jsonpCallback'] && (o['jsonpCallbackName'] = o['jsonpCallback']) && delete o['jsonpCallback'];
      o['jsonp'] && (o['jsonpCallback'] = o['jsonp']);
    }
    return new Reqwest(o, fn);
  };
  reqwest.ajaxSetup = function(options) {
    options = options || {};
    for (var k in options) {
      globalSetupOptions[k] = options[k];
    }
  };
  return reqwest;
});

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
  module.exports = "<div class=\"interactive-container\">\n    <h2 class=\"interactive-es6-headline\">Interactive bootstrap</h2>\n\n    <div class=\"test-msg\">Loading…</div>\n\n    <ul class=\"fonts\">\n        <li class=\"fonts__egyptian\">Egyptian</li>\n        <li class=\"fonts__text-egyptian\">Text Egyptian</li>\n        <li class=\"fonts__sans\">Sans</li>\n        <li class=\"fonts__text-sans\">Text Sans</li>\n    </ul>\n    <p>\n        <button class=\"interactive-share\" data-network=\"facebook\"></button>\n        <button class=\"interactive-share\" data-network=\"twitter\"></button>\n        <button class=\"interactive-share\" data-network=\"email\"></button>\n    </p>\n    <img src=\"%assetPath%/assets/imgs/test.png\" />\n</div>\n";
  return module.exports;
});

$__System.register('5', [], function (_export) {
    'use strict';

    var twitterBaseUrl, facebookBaseUrl, googleBaseUrl;

    _export('default', share);

    function share(title, shareURL, fbImg, twImg, hashTag) {
        var twImgText = twImg ? ' ' + twImg.trim() + ' ' : ' ';
        var fbImgQry = fbImg ? '&picture=' + encodeURIComponent(fbImg) : '';
        return function (network) {
            var extra = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

            var twitterMessage = '' + extra + title + twImgText + hashTag;
            var shareWindow;

            if (network === 'twitter') {
                shareWindow = twitterBaseUrl + encodeURIComponent(twitterMessage + ' ') + shareURL;
            } else if (network === 'facebook') {
                shareWindow = facebookBaseUrl + shareURL + fbImgQry;
            } else if (network === 'email') {
                shareWindow = 'mailto:?subject=' + encodeURIComponent(title) + '&body=' + shareURL;
            } else if (network === 'google') {
                shareWindow = googleBaseUrl + shareURL;
            }

            window.open(shareWindow, network + 'share', 'width=640,height=320');
        };
    }

    return {
        setters: [],
        execute: function () {
            twitterBaseUrl = 'https://twitter.com/intent/tweet?text=';
            facebookBaseUrl = 'https://www.facebook.com/dialog/feed?display=popup&app_id=741666719251986&redirect_uri=http://www.theguardian.com&link=';
            googleBaseUrl = 'https://plus.google.com/share?url=';
        }
    };
});
$__System.register('1', ['3', '4', '5'], function (_export) {
    'use strict';

    var reqwest, mainHTML, share, shareFn;

    _export('init', init);

    function init(el, context, config, mediator) {
        el.innerHTML = mainHTML.replace(/%assetPath%/g, config.assetPath);

        reqwest({
            url: 'http://ip.jsontest.com/',
            type: 'json',
            crossOrigin: true,
            success: function success(resp) {
                return el.querySelector('.test-msg').innerHTML = 'Your IP address is ' + resp.ip;
            }
        });

        [].slice.apply(el.querySelectorAll('.interactive-share')).forEach(function (shareEl) {
            var network = shareEl.getAttribute('data-network');
            shareEl.addEventListener('click', function () {
                return shareFn(network);
            });
        });
    }

    return {
        setters: [function (_) {
            reqwest = _['default'];
        }, function (_2) {
            mainHTML = _2['default'];
        }, function (_3) {
            share = _3['default'];
        }],
        execute: function () {
            shareFn = share('Interactive title', 'http://gu.com/p/URL', '#Interactive');
        }
    };
});
})
(function(factory) {
  define([], factory);
});
//# sourceMappingURL=main.js.map
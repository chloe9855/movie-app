(self["webpackChunkmovie_app"]=self["webpackChunkmovie_app"]||[]).push([[939],{8939:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"seBox"},[r("el-input",{staticClass:"el1",attrs:{placeholder:"請輸入關鍵字","prefix-icon":"el-icon-search"},model:{value:e.searchInput,callback:function(t){e.searchInput=t},expression:"searchInput"}})],1),e._v(" 所有電影 ")])},o=[],i=r(6166),s=r.n(i);const a=s().create({baseURL:"/",withCredentials:!0});a.interceptors.request.use((e=>e),(e=>Promise.reject(e))),a.interceptors.response.use((e=>e),(e=>Promise.reject(e)));var c=a;const u="69bf6ad26c7913068970a4e7317005af",f=()=>c.get(`/discover/movie?api_key=${u}`);var l={data(){return{searchInput:""}},mounted(){this.getDefaultData()},methods:{getDefaultData(){f().then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}}},p=l,d=r(1001),h=(0,d.Z)(p,n,o,!1,null,null,null),m=h.exports},5787:function(e,t,r){var n=r(7854),o=r(7976),i=n.TypeError;e.exports=function(e,t){if(o(t,e))return e;throw i("Incorrect invocation")}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},2801:function(e,t,r){"use strict";var n=r(2109),o=r(5005),i=r(9114),s=r(3070).f,a=r(2597),c=r(5787),u=r(9587),f=r(6277),l=r(3678),p=r(7741),d=r(1913),h="DOMException",m=o("Error"),E=o(h),v=function(){c(this,g);var e=arguments.length,t=f(e<1?void 0:arguments[0]),r=f(e<2?void 0:arguments[1],"Error"),n=new E(t,r),o=m(t);return o.name=h,s(n,"stack",i(1,p(o.stack,1))),u(n,this,v),n},g=v.prototype=E.prototype,y="stack"in m(h),R="stack"in new E(1,2),b=y&&!R;n({global:!0,forced:d||b},{DOMException:b?v:E});var w=o(h),x=w.prototype;if(x.constructor!==w)for(var O in d||s(x,"constructor",i(1,w)),l)if(a(l,O)){var S=l[O],_=S.s;a(w,_)||s(w,_,i(6,S.c))}},6166:function(e,t,r){e.exports=r(9142)},4355:function(e,t,r){"use strict";r(2801);var n=r(2175),o=r(2317),i=r(3347),s=r(8470),a=r(4107),c=r(6280),u=r(8573),f=r(168),l=r(9214),p=r(7170);e.exports=function(e){return new Promise((function(t,r){var d,h=e.data,m=e.headers,E=e.responseType;function v(){e.cancelToken&&e.cancelToken.unsubscribe(d),e.signal&&e.signal.removeEventListener("abort",d)}n.isFormData(h)&&delete m["Content-Type"];var g=new XMLHttpRequest;if(e.auth){var y=e.auth.username||"",R=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.Authorization="Basic "+btoa(y+":"+R)}var b=a(e.baseURL,e.url);function w(){if(g){var n="getAllResponseHeaders"in g?c(g.getAllResponseHeaders()):null,i=E&&"text"!==E&&"json"!==E?g.response:g.responseText,s={data:i,status:g.status,statusText:g.statusText,headers:n,config:e,request:g};o((function(e){t(e),v()}),(function(e){r(e),v()}),s),g=null}}if(g.open(e.method.toUpperCase(),s(b,e.params,e.paramsSerializer),!0),g.timeout=e.timeout,"onloadend"in g?g.onloadend=w:g.onreadystatechange=function(){g&&4===g.readyState&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))&&setTimeout(w)},g.onabort=function(){g&&(r(f("Request aborted",e,"ECONNABORTED",g)),g=null)},g.onerror=function(){r(f("Network Error",e,null,g)),g=null},g.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||l;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(f(t,e,n.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",g)),g=null},n.isStandardBrowserEnv()){var x=(e.withCredentials||u(b))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;x&&(m[e.xsrfHeaderName]=x)}"setRequestHeader"in g&&n.forEach(m,(function(e,t){"undefined"===typeof h&&"content-type"===t.toLowerCase()?delete m[t]:g.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(g.withCredentials=!!e.withCredentials),E&&"json"!==E&&(g.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&g.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&g.upload&&g.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(d=function(e){g&&(r(!e||e&&e.type?new p("canceled"):e),g.abort(),g=null)},e.cancelToken&&e.cancelToken.subscribe(d),e.signal&&(e.signal.aborted?d():e.signal.addEventListener("abort",d))),h||(h=null),g.send(h)}))}},9142:function(e,t,r){"use strict";var n=r(2175),o=r(2978),i=r(4980),s=r(740),a=r(1378);function c(e){var t=new i(e),r=o(i.prototype.request,t);return n.extend(r,i.prototype,t),n.extend(r,t),r.create=function(t){return c(s(e,t))},r}var u=c(a);u.Axios=i,u.Cancel=r(7170),u.CancelToken=r(1414),u.isCancel=r(4434),u.VERSION=r(3394).version,u.all=function(e){return Promise.all(e)},u.spread=r(8758),u.isAxiosError=r(9096),e.exports=u,e.exports["default"]=u},7170:function(e){"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},1414:function(e,t,r){"use strict";r(1703);var n=r(7170);function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;this.promise.then((function(e){if(r._listeners){var t,n=r._listeners.length;for(t=0;t<n;t++)r._listeners[t](e);r._listeners=null}})),this.promise.then=function(e){var t,n=new Promise((function(e){r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},o.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},o.source=function(){var e,t=new o((function(t){e=t}));return{token:t,cancel:e}},e.exports=o},4434:function(e){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},4980:function(e,t,r){"use strict";var n=r(2175),o=r(8470),i=r(5393),s=r(5216),a=r(740),c=r(4542),u=c.validators;function f(e){this.defaults=e,this.interceptors={request:new i,response:new i}}f.prototype.request=function(e,t){"string"===typeof e?(t=t||{},t.url=e):t=e||{},t=a(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var r=t.transitional;void 0!==r&&c.assertOptions(r,{silentJSONParsing:u.transitional(u.boolean),forcedJSONParsing:u.transitional(u.boolean),clarifyTimeoutError:u.transitional(u.boolean)},!1);var n=[],o=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,n.unshift(e.fulfilled,e.rejected))}));var i,f=[];if(this.interceptors.response.forEach((function(e){f.push(e.fulfilled,e.rejected)})),!o){var l=[s,void 0];Array.prototype.unshift.apply(l,n),l=l.concat(f),i=Promise.resolve(t);while(l.length)i=i.then(l.shift(),l.shift());return i}var p=t;while(n.length){var d=n.shift(),h=n.shift();try{p=d(p)}catch(m){h(m);break}}try{i=s(p)}catch(m){return Promise.reject(m)}while(f.length)i=i.then(f.shift(),f.shift());return i},f.prototype.getUri=function(e){return e=a(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){f.prototype[e]=function(t,r){return this.request(a(r||{},{method:e,url:t,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){f.prototype[e]=function(t,r,n){return this.request(a(n||{},{method:e,url:t,data:r}))}})),e.exports=f},5393:function(e,t,r){"use strict";var n=r(2175);function o(){this.handlers=[]}o.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},4107:function(e,t,r){"use strict";var n=r(8612),o=r(1549);e.exports=function(e,t){return e&&!n(t)?o(e,t):t}},168:function(e,t,r){"use strict";r(1703);var n=r(8848);e.exports=function(e,t,r,o,i){var s=new Error(e);return n(s,t,r,o,i)}},5216:function(e,t,r){"use strict";var n=r(2175),o=r(1618),i=r(4434),s=r(1378),a=r(7170);function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a("canceled")}e.exports=function(e){c(e),e.headers=e.headers||{},e.data=o.call(e,e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||s.adapter;return t(e).then((function(t){return c(e),t.data=o.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(c(e),t&&t.response&&(t.response.data=o.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},8848:function(e){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}},740:function(e,t,r){"use strict";var n=r(2175);e.exports=function(e,t){t=t||{};var r={};function o(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function i(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:o(void 0,e[r]):o(e[r],t[r])}function s(e){if(!n.isUndefined(t[e]))return o(void 0,t[e])}function a(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:o(void 0,e[r]):o(void 0,t[r])}function c(r){return r in t?o(e[r],t[r]):r in e?o(void 0,e[r]):void 0}var u={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return n.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||i,o=t(e);n.isUndefined(o)&&t!==c||(r[e]=o)})),r}},2317:function(e,t,r){"use strict";var n=r(168);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},1618:function(e,t,r){"use strict";var n=r(2175),o=r(1378);e.exports=function(e,t,r){var i=this||o;return n.forEach(r,(function(r){e=r.call(i,e,t)})),e}},1378:function(e,t,r){"use strict";var n=r(2175),o=r(5916),i=r(8848),s=r(9214),a={"Content-Type":"application/x-www-form-urlencoded"};function c(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function u(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(e=r(4355)),e}function f(e,t,r){if(n.isString(e))try{return(t||JSON.parse)(e),n.trim(e)}catch(o){if("SyntaxError"!==o.name)throw o}return(r||JSON.stringify)(e)}var l={transitional:s,adapter:u(),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(c(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)||t&&"application/json"===t["Content-Type"]?(c(t,"application/json"),f(e)):e}],transformResponse:[function(e){var t=this.transitional||l.transitional,r=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,s=!r&&"json"===this.responseType;if(s||o&&n.isString(e)&&e.length)try{return JSON.parse(e)}catch(a){if(s){if("SyntaxError"===a.name)throw i(a,this,"E_JSON_PARSE");throw a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){l.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){l.headers[e]=n.merge(a)})),e.exports=l},9214:function(e){"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},3394:function(e){e.exports={version:"0.26.1"}},2978:function(e){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},8470:function(e,t,r){"use strict";var n=r(2175);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(n.isURLSearchParams(t))i=t.toString();else{var s=[];n.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))})))})),i=s.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},1549:function(e){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},3347:function(e,t,r){"use strict";var n=r(2175);e.exports=n.isStandardBrowserEnv()?function(){return{write:function(e,t,r,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},8612:function(e){"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},9096:function(e,t,r){"use strict";var n=r(2175);e.exports=function(e){return n.isObject(e)&&!0===e.isAxiosError}},8573:function(e,t,r){"use strict";var n=r(2175);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return function(){return!0}}()},5916:function(e,t,r){"use strict";var n=r(2175);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},6280:function(e,t,r){"use strict";var n=r(2175),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,i,s={};return e?(n.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),r=n.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([r]):s[t]?s[t]+", "+r:r}})),s):s}},8758:function(e){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},4542:function(e,t,r){"use strict";r(1703);var n=r(3394).version,o={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){o[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));var i={};function s(e,t,r){if("object"!==typeof e)throw new TypeError("options must be an object");var n=Object.keys(e),o=n.length;while(o-- >0){var i=n[o],s=t[i];if(s){var a=e[i],c=void 0===a||s(a,i,e);if(!0!==c)throw new TypeError("option "+i+" must be "+c)}else if(!0!==r)throw Error("Unknown option "+i)}}o.transitional=function(e,t,r){function o(e,t){return"[Axios v"+n+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,n,s){if(!1===e)throw new Error(o(n," has been removed"+(t?" in "+t:"")));return t&&!i[n]&&(i[n]=!0,console.warn(o(n," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,n,s)}},e.exports={assertOptions:s,validators:o}},2175:function(e,t,r){"use strict";var n=r(2978),o=Object.prototype.toString;function i(e){return Array.isArray(e)}function s(e){return"undefined"===typeof e}function a(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function c(e){return"[object ArrayBuffer]"===o.call(e)}function u(e){return"[object FormData]"===o.call(e)}function f(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&c(e.buffer),t}function l(e){return"string"===typeof e}function p(e){return"number"===typeof e}function d(e){return null!==e&&"object"===typeof e}function h(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function m(e){return"[object Date]"===o.call(e)}function E(e){return"[object File]"===o.call(e)}function v(e){return"[object Blob]"===o.call(e)}function g(e){return"[object Function]"===o.call(e)}function y(e){return d(e)&&g(e.pipe)}function R(e){return"[object URLSearchParams]"===o.call(e)}function b(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function w(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function x(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),i(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function O(){var e={};function t(t,r){h(e[r])&&h(t)?e[r]=O(e[r],t):h(t)?e[r]=O({},t):i(t)?e[r]=t.slice():e[r]=t}for(var r=0,n=arguments.length;r<n;r++)x(arguments[r],t);return e}function S(e,t,r){return x(t,(function(t,o){e[o]=r&&"function"===typeof t?n(t,r):t})),e}function _(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}e.exports={isArray:i,isArrayBuffer:c,isBuffer:a,isFormData:u,isArrayBufferView:f,isString:l,isNumber:p,isObject:d,isPlainObject:h,isUndefined:s,isDate:m,isFile:E,isBlob:v,isFunction:g,isStream:y,isURLSearchParams:R,isStandardBrowserEnv:w,forEach:x,merge:O,extend:S,trim:b,stripBOM:_}}}]);
//# sourceMappingURL=939.86a28632.js.map
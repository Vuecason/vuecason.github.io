(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3XHS":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var r=n("9EFL"),o=n.n(r),u=(n("Wbzz"),n("izhR")),i=n("b6Qr"),l=n("VdAu");function a(){return o.a.createElement("div",null,o.a.createElement(i.BrowserView,null,o.a.createElement(l.b,{fontSize:[7],color:"accent",style:{paddingTop:"12px",paddingLeft:"12px",paddingBottom:"50px"}},"🦆 vuecason"),o.a.createElement(u.b,{sx:{paddingLeft:"10px",flex:"200px",marginLeft:"600px"}},o.a.createElement("div",{style:{width:"60%"}},"Vuecason is developing a rapid metal additive manufacturing method with minimal post processing. We use a novel induction FFF process to heat and place pure metal in one single step, eliminating the need for debinding or sintering.",o.a.createElement(u.a,null),o.a.createElement(l.c,{href:"/manifesto",style:{fontWeight:"bold",color:"inherit"}},"Read the full manifesto here"))),o.a.createElement("footer",{bg:"accent",height:"50px",style:{}},o.a.createElement(l.c,{href:"/",style:{paddingLeft:"200px",fontWeight:"bold",color:"inherit",paddingTop:"11px",position:"fixed",alignItems:"center",bottom:"0",bg:"accent"}},"Home"))),o.a.createElement(i.MobileView,null,o.a.createElement("div",{style:{margin:"auto",width:"80%",padding:"10px",textAlign:"center"}},o.a.createElement(l.b,{fontSize:[6],color:"accent",style:{paddingTop:"12px",paddingLeft:"12px",paddingBottom:"50px"}},"🦆 vuecason")),o.a.createElement(u.b,{sx:{paddingLeft:"10px",margin:"auto",width:"80%",textAlign:"center"}},o.a.createElement("div",null,"Vuecason is developing a rapid metal additive manufacturing method with minimal post processing. We use a novel induction FFF process to heat and place pure metal in one single step, eliminating the need for debinding or sintering.",o.a.createElement(u.a,null),o.a.createElement(l.c,{href:"/manifesto",style:{fontWeight:"bold",color:"inherit"}},"Read the full manifesto here"))),o.a.createElement("footer",{bg:"accent",height:"50px",style:{}},o.a.createElement(l.c,{href:"/",style:{paddingLeft:"200px",fontWeight:"bold",color:"inherit",paddingTop:"11px",position:"fixed",alignItems:"center",bottom:"0",bg:"accent"}},"Home"))))}},"9EFL":function(e,t,n){"use strict";e.exports=n("R1wR")},R1wR:function(e,t,n){"use strict";var r=n("6qGY"),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function x(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||v}function E(){}function w(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||v}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},E.prototype=x.prototype;var S=w.prototype=new E;S.constructor=w,r(S,x.prototype),S.isPureReactComponent=!0;var _={current:null},k=Object.prototype.hasOwnProperty,R={key:!0,ref:!0,__self:!0,__source:!0};function $(e,t,n){var r,o={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,r)&&!R.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){for(var c=Array(a),f=0;f<a;f++)c[f]=arguments[f+2];o.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===o[r]&&(o[r]=a[r]);return{$$typeof:u,type:e,key:i,ref:l,props:o,_owner:_.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var P=/\/+/g,L=[];function j(e,t,n,r){if(L.length){var o=L.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function F(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>L.length&&L.push(e)}function A(e,t,n){return null==e?0:function e(t,n,r,o){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var a=!1;if(null===t)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case u:case i:a=!0}}if(a)return r(o,t,""===n?"."+O(t,0):n),1;if(a=0,n=""===n?".":n+":",Array.isArray(t))for(var c=0;c<t.length;c++){var f=n+O(l=t[c],c);a+=e(l,f,r,o)}else if(null===t||"object"!=typeof t?f=null:f="function"==typeof(f=h&&t[h]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),c=0;!(l=t.next()).done;)a+=e(l=l.value,f=n+O(l,c++),r,o);else if("object"===l)throw r=""+t,Error(g(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return a}(e,"",t,n)}function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function V(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?W(e,r,n,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n)),r.push(e))}function W(e,t,n,r,o){var u="";null!=n&&(u=(""+n).replace(P,"$&/")+"/"),A(e,V,t=j(t,u,r,o)),F(t)}var z={current:null};function T(){var e=z.current;if(null===e)throw Error(g(321));return e}var U={ReactCurrentDispatcher:z,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return W(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;A(e,I,t=j(null,null,t,n)),F(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return W(e,t,null,(function(e){return e})),t},only:function(e){if(!C(e))throw Error(g(143));return e}},t.Component=x,t.Fragment=l,t.Profiler=c,t.PureComponent=w,t.StrictMode=a,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,t.cloneElement=function(e,t,n){if(null==e)throw Error(g(267,e));var o=r({},e.props),i=e.key,l=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,a=_.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(f in t)k.call(t,f)&&!R.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==c?c[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=n;else if(1<f){c=Array(f);for(var s=0;s<f;s++)c[s]=arguments[s+2];o.children=c}return{$$typeof:u,type:e.type,key:i,ref:l,props:o,_owner:a}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},t.createElement=$,t.createFactory=function(e){var t=$.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return T().useCallback(e,t)},t.useContext=function(e,t){return T().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return T().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return T().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return T().useLayoutEffect(e,t)},t.useMemo=function(e,t){return T().useMemo(e,t)},t.useReducer=function(e,t,n){return T().useReducer(e,t,n)},t.useRef=function(e){return T().useRef(e)},t.useState=function(e){return T().useState(e)},t.version="16.13.1"}}]);
//# sourceMappingURL=component---src-pages-about-js-4c6a468e6e425ffeb1b7.js.map
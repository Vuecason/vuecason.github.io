(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3XHS":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n("9EFL"),o=n.n(r),a=n("Wbzz"),u=n("izhR"),i=n("b6Qr"),l=n("VdAu");function c(){return o.a.createElement("div",null,o.a.createElement(i.BrowserView,null,o.a.createElement("header",null,o.a.createElement(l.b,{fontSize:[7],color:"accent",style:{paddingTop:"50px",paddingLeft:"212px",paddingBottom:"50px"}},"🦆 vuecason")),o.a.createElement(u.b,{sx:{paddingLeft:"10px",flex:"200px",marginLeft:"600px"}},o.a.createElement("div",{style:{width:"60%",color:"textColor"}},"Vuecason is developing a rapid metal additive manufacturing method with minimal post processing. We use a novel induction FFF process to print pure metal through a nozzle - like plastic. This allows us to heat and place pure metal in one single step, eliminating the need for debinding or sintering. Our printer will be capable of producing large, high performance parts with really short lead times.",o.a.createElement(u.a,null),o.a.createElement(l.c,{variant:"nav",href:"/manifesto"},"Read the full manifesto here"))),o.a.createElement(u.b,{style:{marginTop:"50px",paddingTop:"50px",backgroundImage:"url("+Object(a.b)("/Resources/extruder_render.jpg")+")",backgroundRepeat:"no-repeat",backgroundPositionX:"50%",backgroundPositionY:"50%",backgroundSize:"auto"}}),o.a.createElement("footer",{bg:"accent",height:"50px",style:{}},o.a.createElement(l.c,{variant:"nav",href:"/",style:{paddingLeft:"200px",paddingTop:"11px",position:"fixed",alignItems:"center",bottom:"0"}},"Home"))),o.a.createElement(i.MobileView,null,o.a.createElement("div",{style:{margin:"auto",padding:"10px",textAlign:"center"}},o.a.createElement("header",null,o.a.createElement(l.b,{fontSize:[6],color:"accent",style:{paddingTop:"12px",paddingLeft:"12px",paddingBottom:"50px",margin:"auto"}},"🦆 vuecason"))),o.a.createElement(u.b,{sx:{paddingLeft:"10px",margin:"auto",width:"80%",textAlign:"center",color:"textColor"}},o.a.createElement("div",null,"Vuecason is developing a rapid metal additive manufacturing method with minimal post processing. We use a novel induction FFF process to print pure metal through a nozzle - like plastic. This allows us to heat and place pure metal in one single step, eliminating the need for debinding or sintering. Our printer will be capable of producing large, high performance parts with really short lead times.",o.a.createElement(u.a,null),o.a.createElement(l.c,{href:"/manifesto",variant:"nav"},"Read the full manifesto here"))),o.a.createElement("footer",{bg:"accent",height:"50px",style:{}},o.a.createElement(l.c,{href:"/",variant:"nav",style:{paddingLeft:"200px",paddingTop:"11px",position:"fixed",alignItems:"center",bottom:"0"}},"Home"))))}},"9EFL":function(e,t,n){"use strict";e.exports=n("R1wR")},R1wR:function(e,t,n){"use strict";var r=n("6qGY"),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function x(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||v}function w(){}function E(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||v}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=x.prototype;var S=E.prototype=new w;S.constructor=E,r(S,x.prototype),S.isPureReactComponent=!0;var k={current:null},_=Object.prototype.hasOwnProperty,R={key:!0,ref:!0,__self:!0,__source:!0};function $(e,t,n){var r,o={},u=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(u=""+t.key),t)_.call(t,r)&&!R.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var c=Array(l),f=0;f<l;f++)c[f]=arguments[f+2];o.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:u,ref:i,props:o,_owner:k.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var P=/\/+/g,j=[];function L(e,t,n,r){if(j.length){var o=j.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function O(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>j.length&&j.push(e)}function F(e,t,n){return null==e?0:function e(t,n,r,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var l=!1;if(null===t)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case a:case u:l=!0}}if(l)return r(o,t,""===n?"."+z(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var c=0;c<t.length;c++){var f=n+z(i=t[c],c);l+=e(i,f,r,o)}else if(null===t||"object"!=typeof t?f=null:f="function"==typeof(f=h&&t[h]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),c=0;!(i=t.next()).done;)l+=e(i=i.value,f=n+z(i,c++),r,o);else if("object"===i)throw r=""+t,Error(g(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return l}(e,"",t,n)}function z(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function T(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?I(e,r,n,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n)),r.push(e))}function I(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(P,"$&/")+"/"),F(e,T,t=L(t,a,r,o)),O(t)}var V={current:null};function U(){var e=V.current;if(null===e)throw Error(g(321));return e}var q={ReactCurrentDispatcher:V,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return I(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;F(e,A,t=L(null,null,t,n)),O(t)},count:function(e){return F(e,(function(){return null}),null)},toArray:function(e){var t=[];return I(e,t,null,(function(e){return e})),t},only:function(e){if(!C(e))throw Error(g(143));return e}},t.Component=x,t.Fragment=i,t.Profiler=c,t.PureComponent=E,t.StrictMode=l,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,t.cloneElement=function(e,t,n){if(null==e)throw Error(g(267,e));var o=r({},e.props),u=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=k.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(f in t)_.call(t,f)&&!R.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==c?c[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=n;else if(1<f){c=Array(f);for(var p=0;p<f;p++)c[p]=arguments[p+2];o.children=c}return{$$typeof:a,type:e.type,key:u,ref:i,props:o,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},t.createElement=$,t.createFactory=function(e){var t=$.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return U().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,n){return U().useReducer(e,t,n)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.13.1"}}]);
//# sourceMappingURL=component---src-pages-about-js-14c6849e4afe561b1ab7.js.map
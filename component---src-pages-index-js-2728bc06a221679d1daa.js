(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2mql":function(e,t,r){"use strict";var o=r("TOwV"),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},c={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function f(e){return o.isMemo(e)?a:i[e.$$typeof]||n}i[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[o.Memo]=a;var p=Object.defineProperty,s=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,o){if("string"!=typeof r){if(m){var n=y(r);n&&n!==m&&e(t,n,o)}var a=s(r);l&&(a=a.concat(l(r)));for(var i=f(t),d=f(r),b=0;b<a.length;++b){var g=a[b];if(!(c[g]||o&&o[g]||d&&d[g]||i&&i[g])){var S=u(r,g);try{p(t,g,S)}catch(w){}}}}return t}},RXBc:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return m}));var o=r("q1tI"),n=r.n(o),c=r("Wbzz"),a=r("lSNA"),i=r.n(a),f=(r("qKvR"),r("gRFL"));r("pVnL"),r("2mql");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}var s=function(e,t){return"function"==typeof t?t(e):function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(r,!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{},t)};Object(f.a)((function(e){return Object(f.a)((function(t){return s(e,t)}))}));var l=r("izhR"),u=r("dJMH"),y=r("VdAu");function m(){return n.a.createElement(u.Flex,{style:{width:"100hw",height:"100vh",backgroundImage:"url("+Object(c.b)("/Resources/print.jpg")+")",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundPositionX:"100%",backgroundPositionY:"100%",backgroundSize:"50%"}},n.a.createElement("div",{style:{paddingLeft:"200px",paddingTop:"50px"}},n.a.createElement(y.b,{fontSize:[7],color:"accent",style:{paddingLeft:"12px",paddingBottom:"150px"}},"🦆 vuecason"),n.a.createElement("div",{style:{paddingLeft:"104px"}},n.a.createElement(y.d,{fontSize:[5],mb:5,fontWeight:"bold"},"We're developing rapid metal 3D printers."),n.a.createElement(y.d,{fontSize:[5],mb:4},"Minimal post processing required."),n.a.createElement(y.d,{color:"accent",fontSize:[4],ml:5,mb:4},"No debinding."),n.a.createElement(y.d,{color:"accent",fontSize:[4],ml:5,mb:4},"No sintering."),n.a.createElement(y.d,{color:"accent",fontSize:[4],ml:5,mb:3},"No waiting - cut 5 day lead time to 2."),n.a.createElement(l.a,null),n.a.createElement(y.a,{variant:"outline",onClick:function(){window.location.href="/manifesto/"},mt:3,sx:{fontWeight:"bold"}},"Manifesto"),n.a.createElement(y.a,{variant:"outline",onClick:function(){window.location.href="https://form.typeform.com/to/gPL8zy"},mt:3,ml:3,sx:{fontWeight:"bold"}},"Stay in touch"))))}},TOwV:function(e,t,r){"use strict";e.exports=r("qT12")},qT12:function(e,t,r){"use strict";var o="function"==typeof Symbol&&Symbol.for,n=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,f=o?Symbol.for("react.profiler"):60114,p=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,l=o?Symbol.for("react.async_mode"):60111,u=o?Symbol.for("react.concurrent_mode"):60111,y=o?Symbol.for("react.forward_ref"):60112,m=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.suspense_list"):60120,b=o?Symbol.for("react.memo"):60115,g=o?Symbol.for("react.lazy"):60116,S=o?Symbol.for("react.block"):60121,w=o?Symbol.for("react.fundamental"):60117,O=o?Symbol.for("react.responder"):60118,$=o?Symbol.for("react.scope"):60119;function v(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case l:case u:case a:case f:case i:case m:return e;default:switch(e=e&&e.$$typeof){case s:case y:case g:case b:case p:return e;default:return t}}case c:return t}}}function P(e){return v(e)===u}t.AsyncMode=l,t.ConcurrentMode=u,t.ContextConsumer=s,t.ContextProvider=p,t.Element=n,t.ForwardRef=y,t.Fragment=a,t.Lazy=g,t.Memo=b,t.Portal=c,t.Profiler=f,t.StrictMode=i,t.Suspense=m,t.isAsyncMode=function(e){return P(e)||v(e)===l},t.isConcurrentMode=P,t.isContextConsumer=function(e){return v(e)===s},t.isContextProvider=function(e){return v(e)===p},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return v(e)===y},t.isFragment=function(e){return v(e)===a},t.isLazy=function(e){return v(e)===g},t.isMemo=function(e){return v(e)===b},t.isPortal=function(e){return v(e)===c},t.isProfiler=function(e){return v(e)===f},t.isStrictMode=function(e){return v(e)===i},t.isSuspense=function(e){return v(e)===m},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===u||e===f||e===i||e===m||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===b||e.$$typeof===p||e.$$typeof===s||e.$$typeof===y||e.$$typeof===w||e.$$typeof===O||e.$$typeof===$||e.$$typeof===S)},t.typeOf=v}}]);
//# sourceMappingURL=component---src-pages-index-js-2728bc06a221679d1daa.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"A2+M":function(t,e,r){var n=r("X8hv");t.exports={MDXRenderer:n}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Gytx:function(t,e){t.exports=function(t,e,r,n){var o=r?r.call(n,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var c=Object.keys(t),a=Object.keys(e);if(c.length!==a.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(e),u=0;u<c.length;u++){var l=c[u];if(!i(l))return!1;var s=t[l],f=e[l];if(!1===(o=r?r.call(n,s,f,l):void 0)||void 0===o&&s!==f)return!1}return!0}},Ijbi:function(t,e,r){var n=r("WkPL");t.exports=function(t){if(Array.isArray(t))return n(t)}},RIqP:function(t,e,r){var n=r("Ijbi"),o=r("EbDI"),c=r("ZhPi"),a=r("Bnag");t.exports=function(t){return n(t)||o(t)||c(t)||a()}},SksO:function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},X8hv:function(t,e,r){var n=r("sXyB"),o=r("RIqP"),c=r("lSNA"),a=r("8OQS");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l=r("q1tI"),s=r("7ljp").mdx,f=r("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,r=t.children,c=a(t,["scope","children"]),i=f(e),b=l.useMemo((function(){if(!r)return null;var t=u({React:l,mdx:s},i),e=Object.keys(t),c=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(o(e),[""+r])).apply(void 0,[{}].concat(o(c)))}),[r,e]);return l.createElement(b,u({},c))}},ZhPi:function(t,e,r){var n=r("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},eXw6:function(t,e,r){"use strict";var n=r("q1tI"),o=r("A2+M"),c=r("7ljp"),a=r("wx14"),i=r("qKvR"),u=r("mRtW");function l(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=t[Symbol.iterator]()).next.bind(r)}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var f=9999,b=null,p=0,d=!1,y={root:null,rootMargin:"-90% 0px"},m=function(t){var e=t.target,r=t.boundingClientRect.y,n=Math.abs(0-r);if(n<f&&(b=e.id,f=n),t.isIntersecting?0!==t.intersectionRect.y&&(p=t.intersectionRect.y,b=e.id):0!==p&&r>p&&(d=!0),b||d){for(var o,c=l(document.querySelectorAll(".article-toc"));!(o=c()).done;){for(var a,i=o.value,u=i.querySelectorAll("a"),s=l(u);!(a=s()).done;){a.value.classList.remove("bg-gray-100")}if(d)for(var y,m=null,O=l(u);!(y=O()).done;){var j=y.value;if(j.getAttribute("data-id")===e.id&&null!==m){m.classList.add("bg-gray-100"),i.dataset.active=m.getAttribute("data-id");break}m=j}else i.querySelector('a[data-id="'+b+'"]').classList.add("bg-gray-100"),i.dataset.active=b;return b=null,void(d=!1)}b=null,d=!1}},O={name:"1xz3me4",styles:"--bg-opacity:1;background-color:#f4f5f7;background-color:rgba(244,245,247,var(--bg-opacity));border-left:4px solid #333;"},j={name:"1p3a9qh",styles:"border-bottom:2px solid #e5e7eb;&:after{background:#333;bottom:-2px;content:'';height:2px;left:0;position:absolute;width:10%;}"},v=r("wHSu"),g=r("hvxB"),h={a:function(t){return Object(i.a)("a",Object(a.a)({className:"border-dotted border-b border-pink-500 text-pink-500"},t))},h1:function(t){var e=Object(n.useRef)(null);return Object(u.useIntersection)(e,y,m),Object(i.a)("h1",Object(a.a)({ref:e,className:"text-6xl font-bold leading-12 mt-8 mb-8"},t))},h2:function(t){var e=Object(n.useRef)(null);return Object(u.useIntersection)(e,y,m),Object(i.a)("h2",Object(a.a)({ref:e,className:"text-4xl font-semibold leading-8 mt-8 mb-4"},t))},h3:function(t){var e=Object(n.useRef)(null);return Object(u.useIntersection)(e,y,m),Object(i.a)("h3",Object(a.a)({ref:e,className:"text-2xl font-bold mt-6 mb-4 px-4 py-2",css:O},t))},h4:function(t){var e=Object(n.useRef)(null);return Object(u.useIntersection)(e,y,m),Object(i.a)("h4",Object(a.a)({ref:e,className:"relative text-xl font-medium mt-4 mb-2 py-2",css:j},t))},h5:function(t){var e=Object(n.useRef)(null);return Object(u.useIntersection)(e,y,m),Object(i.a)("h5",Object(a.a)({ref:e,className:"text-xl font-medium mt-4 mb-2"},t))},h6:function(t){var e=Object(n.useRef)(null);return Object(u.useIntersection)(e,y,m),Object(i.a)("h6",Object(a.a)({ref:e,className:"text-xl font-medium mt-4 mb-2"},t))},blockquote:function(t){var e=t.children;return Object(i.a)("blockquote",{className:"relative mt-4 px-8 py-4 border border-l-2 border-gray-200"},Object(i.a)(g.a,{icon:v.p,size:"lg",style:{color:"#f4f5f7",position:"absolute",zIndex:"-1",top:"8",left:"8"}}),e)},p:function(t){return Object(i.a)("p",Object(a.a)({className:"mt-3 leading-6"},t))},ul:function(t){return Object(i.a)("ul",Object(a.a)({className:"list-disc ml-8"},t))},ol:function(t){return Object(i.a)("ol",Object(a.a)({className:"list-decimal ml-8"},t))},li:function(t){return Object(i.a)("li",Object(a.a)({className:"mt-2 mb-2"},t))},inlineCode:function(t){return Object(i.a)("code",Object(a.a)({className:"p-1 bg-cool-gray-500 text-white font-medium rounded-sm"},t))},table:function(t){return console.log(t),Object(i.a)("table",Object(a.a)({className:"table-fixed"},t))},thead:function(t){return Object(i.a)("thead",Object(a.a)({className:"font-semibold bg-gray-200 text-lg"},t))},th:function(t){return Object(i.a)("th",Object(a.a)({className:"border-gray-400 border leading-6 p-2"},t))},td:function(t){return Object(i.a)("td",Object(a.a)({className:"w-1/2 border-gray-400 border leading-6 p-2"},t))}};e.a=function(t){var e=t.children;return Object(i.a)("div",{className:"post-article break-all"},Object(i.a)(c.MDXProvider,{components:h},Object(i.a)(o.MDXRenderer,null,e)))}},lSNA:function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},mRtW:function(t,e,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=this&&this.__rest||function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r},c=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=r("q1tI"),i=c(r("Gytx"));e.useIntersection=function(t,e,r){void 0===e&&(e={});var c=e.defaultIntersecting,u=e.once,l=o(e,["defaultIntersecting","once"]),s=a.useRef(l),f=a.useState(!0===c),b=f[0],p=f[1],d=a.useRef(!1);return a.useEffect((function(){i.default(s.current,l)||(s.current=l)})),a.useEffect((function(){if(null!=t){var e=t instanceof Element?t:t.current;if(!(null==e||u&&d.current)){var o=new IntersectionObserver((function(t){var n=t[t.length-1];p(n.isIntersecting),null!=r&&r(n),n.isIntersecting&&(d.current=!0),u&&n.isIntersecting&&null!=e&&o.unobserve(e)}),n(n({},s.current),{root:null!=s.current.root?s.current.root.current:null}));return o.observe(e),function(){u&&d.current||null!=e&&o.unobserve(e)}}}}),[s.current,t]),b}},sXyB:function(t,e,r){var n=r("SksO"),o=r("b48C");function c(e,r,a){return o()?t.exports=c=Reflect.construct:t.exports=c=function(t,e,r){var o=[null];o.push.apply(o,e);var c=new(Function.bind.apply(t,o));return r&&n(c,r.prototype),c},c.apply(null,arguments)}t.exports=c}}]);
//# sourceMappingURL=4bf0203f7e28c5a1678cd558d97ccaaaecbb53f1-d84b616d7c6d8d299b04.js.map
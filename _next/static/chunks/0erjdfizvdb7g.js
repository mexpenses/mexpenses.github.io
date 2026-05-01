(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},18967,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return b},MiddlewareNotFoundError:function(){return x},MissingStaticPage:function(){return P},NormalizeError:function(){return y},PageNotFoundError:function(){return j},SP:function(){return g},ST:function(){return h},WEB_VITALS:function(){return a},execOnce:function(){return l},getDisplayName:function(){return d},getLocationOrigin:function(){return u},getURL:function(){return c},isAbsoluteUrl:function(){return i},isResSent:function(){return f},loadGetInitialProps:function(){return m},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return w}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=["CLS","FCP","FID","INP","LCP","TTFB"];function l(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,i=e=>s.test(e);function u(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function c(){let{href:e}=window.location,t=u();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function m(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await m(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&f(r))return n;if(!n)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return n}let g="u">typeof performance,h=g&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class b extends Error{}class y extends Error{}class j extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class P extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class x extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function w(e){return JSON.stringify({message:e.message,stack:e.stack})}},98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={assign:function(){return i},searchParamsToUrlQuery:function(){return a},urlQueryToSearchParams:function(){return s}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});function a(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function l(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(r,l(e));else t.set(r,l(n));return t}function i(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,n]of r.entries())e.append(t,n)}return e}},18566,(e,t,r)=>{t.exports=e.r(76562)},67585,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"BailoutToCSR",{enumerable:!0,get:function(){return o}});let n=e.r(32061);function o({reason:e,children:t}){if("u"<typeof window)throw Object.defineProperty(new n.BailoutToCSRError(e),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return t}},9885,(e,t,r)=>{"use strict";function n(e){return e.split("/").map(e=>encodeURIComponent(e)).join("/")}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"encodeURIPath",{enumerable:!0,get:function(){return n}})},52157,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"PreloadChunks",{enumerable:!0,get:function(){return i}});let n=e.r(43476),o=e.r(74080),a=e.r(63599),l=e.r(9885),s=e.r(43369);function i({moduleIds:e}){if("u">typeof window)return null;let t=a.workAsyncStorage.getStore();if(void 0===t)return null;let r=[];if(t.reactLoadableManifest&&e){let n=t.reactLoadableManifest;for(let t of e){if(!n[t])continue;let e=n[t].files;r.push(...e)}}if(0===r.length)return null;let u=(0,s.getAssetTokenQuery)();return(0,n.jsx)(n.Fragment,{children:r.map(e=>{let r=`${t.assetPrefix}/_next/${(0,l.encodeURIPath)(e)}${u}`;return e.endsWith(".css")?(0,n.jsx)("link",{precedence:"dynamic",href:r,rel:"stylesheet",as:"style",nonce:t.nonce},e):((0,o.preload)(r,{as:"script",fetchPriority:"low",nonce:t.nonce}),null)})})}},69093,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return u}});let n=e.r(43476),o=e.r(71645),a=e.r(67585),l=e.r(52157);function s(e){return{default:e&&"default"in e?e.default:e}}let i={loader:()=>Promise.resolve(s(()=>null)),loading:null,ssr:!0},u=function(e){let t={...i,...e},r=(0,o.lazy)(()=>t.loader().then(s)),u=t.loading;function c(e){let s=u?(0,n.jsx)(u,{isLoading:!0,pastDelay:!0,error:null}):null,i=!t.ssr||!!t.loading,c=i?o.Suspense:o.Fragment,d=t.ssr?(0,n.jsxs)(n.Fragment,{children:["u"<typeof window?(0,n.jsx)(l.PreloadChunks,{moduleIds:t.modules}):null,(0,n.jsx)(r,{...e})]}):(0,n.jsx)(a.BailoutToCSR,{reason:"next/dynamic",children:(0,n.jsx)(r,{...e})});return(0,n.jsx)(c,{...i?{fallback:s}:{},children:d})}return c.displayName="LoadableComponent",c}},70703,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return o}});let n=e.r(55682)._(e.r(69093));function o(e,t){let r={};"function"==typeof e&&(r.loader=e);let o={...r,...t};return(0,n.default)({...o,modules:o.loadableGenerated?.modules})}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},64232,e=>{"use strict";var t=e.i(43476),r=e.i(70703),n=e.i(71645),o=e.i(18566),a=e.i(97053);function l({children:e}){let[r]=(0,n.useState)(()=>new a.ServerStyleSheet);return(0,o.useServerInsertedHTML)(()=>{let e=r.getStyleElement();return r.instance.clearTag(),(0,t.jsx)(t.Fragment,{children:e})}),(0,t.jsx)(t.Fragment,{children:e})}let s={createGlobalStyle:a.createGlobalStyle},i=s.createGlobalStyle`
  :root {
    --Background: #070606;
    --white: #fff;
    --light-gray: #dcdcdc;
    --link-color: #bdbdbd;
    --blue: #2563eb;
    --green: #007f55;
    --green-light: #00b579;
    --blue-light: #5e91ffff;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: 'SF Pro Display', sans-serif;
    background-color: var(--Background);
    color: var(--white);
    scroll-snap-type: y mandatory;

    &::-webkit-scrollbar {
      width: 0.5rem;
      border-radius: 0.5rem;
      &-thumb {
        background: var(--link-color);
        border-radius: 0.5rem;
      }

      &-track {
        background: var(--Background);
      }
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .parallax {
    overflow: hidden;
    margin: 0;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
  }

  .parallax .scroller {
    display: flex;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
  }

  .scroller span {
    display: block;
    margin-right: 5rem;
  }

  .not_complete {
    display: none;
  }

  .complete {
  }
`,u=(0,r.default)(()=>e.A(57851).then(e=>e.ReactLenis),{loadableGenerated:{modules:[71495]},ssr:!1}),c=(0,r.default)(()=>e.A(42023),{loadableGenerated:{modules:[63004]},ssr:!1}),d=(0,r.default)(()=>e.A(37522),{loadableGenerated:{modules:[23019]},ssr:!1}),f=(0,r.default)(()=>e.A(51104),{loadableGenerated:{modules:[54820]},ssr:!1});e.s(["default",0,({children:e})=>{let[r,o]=(0,n.useState)(!1),[a,s]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{s("app"===new URLSearchParams(window.location.search).get("view_mode"))},[]),(0,t.jsx)(l,{children:(0,t.jsxs)(u,{root:!0,easing:e=>Math.min(1,1.001-Math.pow(2,-10*e)),children:[(0,t.jsx)(i,{}),(0,t.jsx)(f,{setComplete:o}),(0,t.jsx)("div",{className:r?"complete":"not_complete",children:a?e:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c,{}),e,(0,t.jsx)(d,{})]})})]})})}],64232)},57851,e=>{e.v(t=>Promise.all(["static/chunks/0yh3.ya4g7mz7.js"].map(t=>e.l(t))).then(()=>t(71495)))},42023,e=>{e.v(t=>Promise.all(["static/chunks/0gkb5lyag9g2c.js","static/chunks/0.vnx6a2f_gjb.js","static/chunks/0utlvwmmez-k9.js","static/chunks/0veq1neqwli4c.js","static/chunks/0h7hvapn4rek-.js"].map(t=>e.l(t))).then(()=>t(63004)))},37522,e=>{e.v(t=>Promise.all(["static/chunks/0r6vhmgmn33ee.js","static/chunks/0kd2dxshv2rs-.js"].map(t=>e.l(t))).then(()=>t(23019)))},51104,e=>{e.v(t=>Promise.all(["static/chunks/16uu5j9l_lzsh.js","static/chunks/0h7hvapn4rek-.js"].map(t=>e.l(t))).then(()=>t(54820)))}]);
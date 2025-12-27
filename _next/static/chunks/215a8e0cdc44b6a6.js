(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,18566,(e,t,r)=>{t.exports=e.r(76562)},67585,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"BailoutToCSR",{enumerable:!0,get:function(){return l}});let n=e.r(32061);function l({reason:e,children:t}){if("undefined"==typeof window)throw Object.defineProperty(new n.BailoutToCSRError(e),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return t}},9885,(e,t,r)=>{"use strict";function n(e){return e.split("/").map(e=>encodeURIComponent(e)).join("/")}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"encodeURIPath",{enumerable:!0,get:function(){return n}})},52157,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"PreloadChunks",{enumerable:!0,get:function(){return s}});let n=e.r(43476),l=e.r(74080),a=e.r(63599),o=e.r(9885);function s({moduleIds:e}){if("undefined"!=typeof window)return null;let t=a.workAsyncStorage.getStore();if(void 0===t)return null;let r=[];if(t.reactLoadableManifest&&e){let n=t.reactLoadableManifest;for(let t of e){if(!n[t])continue;let e=n[t].files;r.push(...e)}}return 0===r.length?null:(0,n.jsx)(n.Fragment,{children:r.map(e=>{let r=`${t.assetPrefix}/_next/${(0,o.encodeURIPath)(e)}`;return e.endsWith(".css")?(0,n.jsx)("link",{precedence:"dynamic",href:r,rel:"stylesheet",as:"style",nonce:t.nonce},e):((0,l.preload)(r,{as:"script",fetchPriority:"low",nonce:t.nonce}),null)})})}},69093,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return d}});let n=e.r(43476),l=e.r(71645),a=e.r(67585),o=e.r(52157);function s(e){return{default:e&&"default"in e?e.default:e}}let i={loader:()=>Promise.resolve(s(()=>null)),loading:null,ssr:!0},d=function(e){let t={...i,...e},r=(0,l.lazy)(()=>t.loader().then(s)),d=t.loading;function u(e){let s=d?(0,n.jsx)(d,{isLoading:!0,pastDelay:!0,error:null}):null,i=!t.ssr||!!t.loading,u=i?l.Suspense:l.Fragment,c=t.ssr?(0,n.jsxs)(n.Fragment,{children:["undefined"==typeof window?(0,n.jsx)(o.PreloadChunks,{moduleIds:t.modules}):null,(0,n.jsx)(r,{...e})]}):(0,n.jsx)(a.BailoutToCSR,{reason:"next/dynamic",children:(0,n.jsx)(r,{...e})});return(0,n.jsx)(u,{...i?{fallback:s}:{},children:c})}return u.displayName="LoadableComponent",u}},70703,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return l}});let n=e.r(55682)._(e.r(69093));function l(e,t){let r={};"function"==typeof e&&(r.loader=e);let l={...r,...t};return(0,n.default)({...l,modules:l.loadableGenerated?.modules})}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},64232,e=>{"use strict";var t=e.i(43476),r=e.i(70703),n=e.i(71645),l=e.i(18566),a=e.i(97053);function o({children:e}){let[r]=(0,n.useState)(()=>new a.ServerStyleSheet);return(0,l.useServerInsertedHTML)(()=>{let e=r.getStyleElement();return r.instance.clearTag(),(0,t.jsx)(t.Fragment,{children:e})}),(0,t.jsx)(t.Fragment,{children:e})}let s={createGlobalStyle:a.createGlobalStyle},i=s.createGlobalStyle`
  :root {
    --Background: #070606;
    --white: #fff;
    --light-gray: #dcdcdc;
    --link-color: #bdbdbd;
    --blue: #2563eb;
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
`,d=(0,r.default)(()=>e.A(57851).then(e=>e.ReactLenis),{loadableGenerated:{modules:[71495]},ssr:!1}),u=(0,r.default)(()=>e.A(42023),{loadableGenerated:{modules:[63004]},ssr:!1}),c=(0,r.default)(()=>e.A(37522),{loadableGenerated:{modules:[23019]},ssr:!1}),f=(0,r.default)(()=>e.A(51104),{loadableGenerated:{modules:[54820]},ssr:!1});e.s(["default",0,({children:e})=>{let[r,l]=(0,n.useState)(!1),[a,s]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{s("app"===new URLSearchParams(window.location.search).get("view_mode"))},[]),(0,t.jsx)(o,{children:(0,t.jsxs)(d,{root:!0,easing:e=>Math.min(1,1.001-Math.pow(2,-10*e)),children:[(0,t.jsx)(i,{}),(0,t.jsx)(f,{setComplete:l}),(0,t.jsx)("div",{className:r?"complete":"not_complete",children:a?e:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u,{}),e,(0,t.jsx)(c,{})]})})]})})}],64232)},57851,e=>{e.v(t=>Promise.all(["static/chunks/6f488803ef78f913.js"].map(t=>e.l(t))).then(()=>t(71495)))},42023,e=>{e.v(t=>Promise.all(["static/chunks/5edf2f282d5b03b6.js","static/chunks/1767b4bcfcfefe3f.js","static/chunks/03d47be3df524062.js","static/chunks/138a8e3b1abf9311.js","static/chunks/3c24f6f5c543d27f.js"].map(t=>e.l(t))).then(()=>t(63004)))},37522,e=>{e.v(t=>Promise.all(["static/chunks/f73cd37a1ac09cbd.js","static/chunks/07d02a2977f0a894.js"].map(t=>e.l(t))).then(()=>t(23019)))},51104,e=>{e.v(t=>Promise.all(["static/chunks/a9e775d7154f2ca0.js","static/chunks/138a8e3b1abf9311.js"].map(t=>e.l(t))).then(()=>t(54820)))}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[320],{8e3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var s=(0,n(2648).Z)(n(7294)).default.createContext({});t.AmpStateContext=s},9470:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,s=e.hybrid,a=void 0!==s&&s,r=e.hasQuery,l=void 0!==r&&r;return n||a&&l}},2717:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=i,t.default=void 0;var s=n(6495).Z,a=n(2648).Z,r=(0,n(1598).Z)(n(7294)),l=a(n(1585)),c=n(8e3),d=n(5850),o=n(9470);n(9475);function i(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function p(e,t){var n=t.inAmpMode;return e.reduce(u,[]).reverse().concat(i(n).reverse()).filter(function(){var e=new Set,t=new Set,n=new Set,s={};return function(a){var r=!0,l=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){l=!0;var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?r=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?r=!1:t.add(a.type);break;case"meta":for(var d=0,o=m.length;d<o;d++){var i=m[d];if(a.props.hasOwnProperty(i))if("charSet"===i)n.has(i)?r=!1:n.add(i);else{var u=a.props[i],p=s[i]||new Set;"name"===i&&l||!p.has(u)?(p.add(u),s[i]=p):r=!1}}}return r}}()).reverse().map((function(e,t){var a=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var l=s({},e.props||{});return l["data-href"]=l.href,l.href=void 0,l["data-optimized-fonts"]=!0,r.default.cloneElement(e,l)}return r.default.cloneElement(e,{key:a})}))}var f=function(e){var t=e.children,n=r.useContext(c.AmpStateContext),s=r.useContext(d.HeadManagerContext);return r.default.createElement(l.default,{reduceComponentsToState:p,headManager:s,inAmpMode:o.isInAmpMode(n)},t)};t.default=f,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1585:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.headManager,n=e.reduceComponentsToState;function c(){if(t&&t.mountedInstances){var a=s.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(a,e))}}if(a){var d;null==t||null==(d=t.mountedInstances)||d.add(e.children),c()}return r((function(){var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),function(){var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}})),r((function(){return t&&(t._pendingUpdate=c),function(){t&&(t._pendingUpdate=c)}})),l((function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}})),null};var s=(0,n(1598).Z)(n(7294));var a=!1,r=a?function(){}:s.useLayoutEffect,l=a?function(){}:s.useEffect},3606:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var s="/_next/static/media/x.0c98022e.jpg",a=n(7294),r=n(9008),l=n.n(r),c=n(5893),d=(0,a.memo)((function(){var e={1:"https://general-storage-mexpenses.s3.amazonaws.com/Eps1.0_como_eu_te_vejo.mp4.mp4",2:"https://general-storage-mexpenses.s3.amazonaws.com/Eps2.0_retrospectiva_2022-2023.mp4.mp4"},t=(0,a.useState)(null),n=t[0],r=t[1],d=(0,a.useState)(!1),o=d[0],i=d[1],u=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("button",{style:{zIndex:500},onClick:function(){return r(null)},className:"absolute font-extrabold bg-indigo-500 p-3 text-white rounded-full w-10 h-10 left-5 top-5 flex items-center justify-center",children:"\u21a9"}),(0,c.jsx)("div",{style:{height:"100vh"},className:"flex items-center justify-center bg-black",children:(0,c.jsx)("video",{autoPlay:!0,controls:!0,className:"h-full w-full",src:e[n]})})]})},m=function(){return(0,c.jsx)("div",{className:"w-full bg-no-repeat min-h-screen lg:bg-center bg-cover bg-top text-white relative flex items-center",style:{backgroundSize:"contain",backgroundRepeat:"repeat",backgroundImage:"linear-gradient(to right, #0f171e, #0f171e, #0f171eb6, #0f171e3c), url(".concat(s,")")},children:(0,c.jsxs)("div",{className:"w-full lg:w-7/12 mt-10",style:{padding:"5% 3%"},children:[(0,c.jsx)("h1",{className:"text-4xl font-medium",children:"Senhora Rob\xf4"}),(0,c.jsxs)("div",{className:"mt-2.5",children:[(0,c.jsx)("span",{className:"mr-2 pr-3 pl-2 rounded-sm font-medium bg-sky-700 text-xs py-1 inline-block relative topbox",children:"TOP 10"}),(0,c.jsx)("span",{className:"text-sm",children:"N\xfamero 1 do Planeta"})]}),(0,c.jsxs)("div",{className:"mt-5 flex text-slate-400 items-center text-md",children:[(0,c.jsx)("span",{className:"border border-slate-400 text-xs px-1 rounded-sm font-bold",children:"IMDb"}),(0,c.jsx)("span",{className:"ml-3",children:" 2 Epis\xf3dios "}),(0,c.jsx)("span",{className:"ml-3",children:" 2022-2024 "}),(0,c.jsx)("span",{className:"border border-slate-400 text-xs px-1 rounded-sm font-bold ml-3",children:"X-Ray"}),(0,c.jsx)("span",{className:"border border-slate-400 text-xs px-1 rounded-sm font-bold mx-3",children:"+18"}),(0,c.jsx)("span",{className:"border border-slate-400 text-xs px-1 rounded-sm font-bold mr-3",children:"HDR"}),(0,c.jsx)("span",{className:"border border-slate-400 text-xs px-1 rounded-sm font-bold",children:"UHD"})]}),(0,c.jsx)("p",{className:"mt-4 text-lg",children:'"Ess\xeancia \xdanica" nos leva para o mundo cativante de Ingrid Matuques, uma mulher cuja singularidade a torna um verdadeiro tesouro. A s\xe9rie desvenda as camadas da vida de Ingrid, focando em seu charme \xfanico, autocuidado excepcional e o amor especial que ela nutre por Hector Silva, um homem completamente obcecado por ela.'}),(0,c.jsxs)("div",{className:"flex flex-wrap lg:flex-nowrap items-center mt-6",children:[(0,c.jsxs)("button",{className:"bg-sky-700 py-3 flex flex-col px-5 rounded-sm shadow-sm mr-2.5 mb-3",style:{cursor:"default"},children:[(0,c.jsx)("span",{className:"truncate",children:"Assistir com Mexpenses"}),(0,c.jsx)("span",{className:"truncate",children:"Gr\xe1tis"})]}),(0,c.jsxs)("button",{onClick:function(){return r(1)},className:"bg-slate-700 py-3 flex flex-col px-5 rounded-sm shadow-sm mr-2.5 mb-3",children:[(0,c.jsx)("span",{className:"truncate",children:"Eps1.0_como_eu_te_vejo.mp4"}),(0,c.jsx)("span",{className:"truncate",children:(0,c.jsx)("b",{children:"UHD"})})]}),(0,c.jsxs)("button",{onClick:function(){return r(2)},className:"bg-slate-700 py-3 flex flex-col px-5 rounded-sm shadow-sm mr-2.5 mb-3",children:[(0,c.jsx)("span",{className:"truncate",children:"Eps2.0_retrospectiva_2022-2023.mp4"}),(0,c.jsx)("span",{className:"truncate",children:(0,c.jsx)("b",{children:"UHD"})})]})]}),(0,c.jsxs)("div",{className:"text-slate-400 mt-6 text-md",children:[(0,c.jsxs)("div",{className:"flex",children:[(0,c.jsx)("p",{className:"w-36 font-bold",children:"Directors"}),(0,c.jsx)("p",{className:"text-indigo-300 truncate",children:"Hector Silva"})]}),(0,c.jsxs)("div",{className:"flex",children:[(0,c.jsx)("p",{className:"w-36 font-bold",children:"Starring"}),(0,c.jsx)("p",{className:"text-indigo-300 truncate",children:"Hector Silva e Ingrid Matuques"})]}),(0,c.jsxs)("div",{className:"flex",children:[(0,c.jsx)("p",{className:"w-36 font-bold",children:"Genres"}),(0,c.jsx)("p",{className:"text-indigo-300 truncate",children:"Romance, Drama e Aventura"})]}),(0,c.jsxs)("div",{className:"flex",children:[(0,c.jsx)("p",{className:"w-36 font-bold",children:"Subtitles"}),(0,c.jsx)("p",{className:"text-indigo-300 truncate",children:"Portugu\xeas"})]}),(0,c.jsxs)("div",{className:"flex",children:[(0,c.jsx)("p",{className:"w-36 font-bold",children:"Audio languages"}),(0,c.jsx)("p",{className:"text-indigo-300",children:"English"})]}),(0,c.jsx)("div",{className:"flex",children:(0,c.jsxs)("p",{className:"truncate text-lg mt-2",children:["This is made by\xa0",(0,c.jsx)("span",{className:"text-indigo-300",children:"Hector Silva"}),". All rights reserved to Mexpenses."]})})]})]})})},p=function(){var e=(0,a.useState)(""),t=e[0],n=e[1],s=(0,a.useState)(""),r=s[0],d=s[1],o=function(e){var t=e.target,s=t.id,a=t.value;({secret_1:n,secret_2:d})[s](a)};return(0,a.useEffect)((function(){"d154923e-cb9b-4fd0-88ad-4b29f7a18617"===t&&"495b07d7-d05c-416d-abc6-a6049d61105e"===r&&i(!0)}),[t,r]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l(),{children:(0,c.jsx)("title",{children:"Login"})}),(0,c.jsxs)("div",{className:"container-login absolute w-full h-full overflow-hidden",children:[(0,c.jsx)("div",{className:"top-abstract"}),(0,c.jsx)("div",{className:"bottom-abstract"}),(0,c.jsxs)("div",{className:"center-form",children:[(0,c.jsx)("input",{type:"text",id:"secret_1",value:t,onChange:o,placeholder:"Secret Key 1"}),(0,c.jsx)("input",{type:"text",id:"secret_2",value:r,onChange:o,placeholder:"Secret Key 2"})]})]})]})},f=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l(),{children:(0,c.jsx)("title",{children:"Hello Senhora Rob\xf4"})}),n?(0,c.jsx)(u,{}):(0,c.jsx)(m,{})]})};return o?(0,c.jsx)(f,{}):(0,c.jsx)(p,{})}))},4903:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/c0b5bf897a11db3ecc5c532ee91a3ac6166a90b3",function(){return n(3606)}])},9008:function(e,t,n){e.exports=n(2717)}},function(e){e.O(0,[774,888,179],(function(){return t=4903,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,88143,(e,t,r)=>{"use strict";function i({widthInt:e,heightInt:t,blurWidth:r,blurHeight:n,blurDataURL:o,objectFit:a}){let l=r?40*r:e,s=n?40*n:t,u=l&&s?`viewBox='0 0 ${l} ${s}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${u}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${u?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${o}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},87690,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={VALID_LOADERS:function(){return o},imageConfigDefault:function(){return a}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let o=["default","imgix","cloudinary","akamai","custom"],a={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},8927,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return u}}),e.r(33525);let i=e.r(43369),n=e.r(88143),o=e.r(87690),a=["-moz-initial","fill","none","scale-down",void 0];function l(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u({src:e,sizes:t,unoptimized:r=!1,priority:d=!1,preload:c=!1,loading:f,className:p,quality:m,width:h,height:g,fill:y=!1,style:b,overrideSrc:x,onLoad:v,onLoadingComplete:_,placeholder:j="empty",blurDataURL:w,fetchPriority:C,decoding:P="async",layout:S,objectFit:O,objectPosition:R,lazyBoundary:E,lazyRoot:A,...M},I){var k;let z,T,L,{imgConf:D,showAltText:U,blurComplete:$,defaultLoader:F}=I,N=D||o.imageConfigDefault;if("allSizes"in N)z=N;else{let e=[...N.deviceSizes,...N.imageSizes].sort((e,t)=>e-t),t=N.deviceSizes.sort((e,t)=>e-t),r=N.qualities?.sort((e,t)=>e-t);z={...N,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===F)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let W=M.loader||F;delete M.loader,delete M.srcSet;let q="__next_img_default"in W;if(q){if("custom"===z.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=W;W=t=>{let{config:r,...i}=t;return e(i)}}if(S){"fill"===S&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[S];e&&(b={...b,...e});let r={responsive:"100vw",fill:"100vw"}[S];r&&!t&&(t=r)}let B="",G=s(h),H=s(g);if((k=e)&&"object"==typeof k&&(l(k)||void 0!==k.src)){let t=l(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(T=t.blurWidth,L=t.blurHeight,w=w||t.blurDataURL,B=t.src,!y)if(G||H){if(G&&!H){let e=G/t.width;H=Math.round(t.height*e)}else if(!G&&H){let e=H/t.height;G=Math.round(t.width*e)}}else G=t.width,H=t.height}let K=!d&&!c&&("lazy"===f||void 0===f);(!(e="string"==typeof e?e:B)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,K=!1),z.unoptimized&&(r=!0),q&&!z.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let J=s(m),V=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:R}:{},U?{}:{color:"transparent"},b),Q=$||"empty"===j?null:"blur"===j?`url("data:image/svg+xml;charset=utf-8,${(0,n.getImageBlurSvg)({widthInt:G,heightInt:H,blurWidth:T,blurHeight:L,blurDataURL:w||"",objectFit:V.objectFit})}")`:`url("${j}")`,X=a.includes(V.objectFit)?"fill"===V.objectFit?"100% 100%":"cover":V.objectFit,Y=Q?{backgroundSize:X,backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Q}:{},Z=function({config:e,src:t,unoptimized:r,width:n,quality:o,sizes:a,loader:l}){if(r){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,i.getDeploymentId)();if(e){let r=t.indexOf("?");if(-1!==r){let i=new URLSearchParams(t.slice(r+1));i.get("dpl")||(i.append("dpl",e),t=t.slice(0,r)+"?"+i.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:s,kind:u}=function({deviceSizes:e,allSizes:t},r,i){if(i){let r=/(^|\s)(1?\d?\d)vw/g,n=[];for(let e;e=r.exec(i);)n.push(parseInt(e[2]));if(n.length){let r=.01*Math.min(...n);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,n,a),d=s.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:s.map((r,i)=>`${l({config:e,src:t,quality:o,width:r})} ${"w"===u?r:i+1}${u}`).join(", "),src:l({config:e,src:t,quality:o,width:s[d]})}}({config:z,src:e,unoptimized:r,width:G,quality:J,sizes:t,loader:W}),ee=K?"lazy":f;return{props:{...M,loading:ee,fetchPriority:C,width:G,height:H,decoding:P,className:p,style:{...V,...Y},sizes:Z.sizes,srcSet:Z.srcSet,src:x||Z.src},meta:{unoptimized:r,preload:c||d,placeholder:j,fill:y}}}},98879,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return l}});let i=e.r(71645),n="u"<typeof window,o=n?()=>{}:i.useLayoutEffect,a=n?()=>{}:i.useEffect;function l(e){let{headManager:t,reduceComponentsToState:r}=e;function l(){if(t&&t.mountedInstances){let e=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return n&&(t?.mountedInstances?.add(e.children),l()),o(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),o(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},25633,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return h},defaultHead:function(){return c}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let o=e.r(55682),a=e.r(90809),l=e.r(43476),s=a._(e.r(71645)),u=o._(e.r(98879)),d=e.r(42732);function c(){return[(0,l.jsx)("meta",{charSet:"utf-8"},"charset"),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(33525);let p=["name","httpEquiv","charSet","itemProp"];function m(e){let t,r,i,n;return e.reduce(f,[]).reverse().concat(c().reverse()).filter((t=new Set,r=new Set,i=new Set,n={},e=>{let o=!0,a=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){a=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?o=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?o=!1:r.add(e.type);break;case"meta":for(let t=0,r=p.length;t<r;t++){let r=p[t];if(e.props.hasOwnProperty(r))if("charSet"===r)i.has(r)?o=!1:i.add(r);else{let t=e.props[r],i=n[r]||new Set;("name"!==r||!a)&&i.has(t)?o=!1:(i.add(t),n[r]=i)}}}return o})).reverse().map((e,t)=>{let r=e.key||t;return s.default.cloneElement(e,{key:r})})}let h=function({children:e}){let t=(0,s.useContext)(d.HeadManagerContext);return(0,l.jsx)(u.default,{reduceComponentsToState:m,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18556,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let i=e.r(55682)._(e.r(71645)),n=e.r(87690),o=i.default.createContext(n.imageConfigDefault)},65856,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return i}});let i=e.r(55682)._(e.r(71645)).default.createContext(null)},70965,(e,t,r)=>{"use strict";function i(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,t.qualities[0]):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return i}})},1948,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return a}});let i=e.r(70965),n=e.r(43369);function o({config:e,src:t,width:r,quality:a}){let l=(0,n.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")){let e=t.indexOf("?");if(-1!==e){let r=new URLSearchParams(t.slice(e+1)),i=r.get("dpl");if(i){l=i,r.delete("dpl");let n=r.toString();t=t.slice(0,e)+(n?"?"+n:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let s=(0,i.findClosestQuality)(a,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${s}${t.startsWith("/")&&l?`&dpl=${l}`:""}`}o.__next_img_default=!0;let a=o},85437,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return v}});let i=e.r(55682),n=e.r(90809),o=e.r(43476),a=n._(e.r(71645)),l=i._(e.r(74080)),s=i._(e.r(25633)),u=e.r(8927),d=e.r(87690),c=e.r(18556);e.r(33525);let f=e.r(65856),p=i._(e.r(1948)),m=e.r(18581),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,r,i,n,o,a){let l=e?.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}i?.current&&i.current(e)}}))}function y(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let b=(0,a.forwardRef)(({src:e,srcSet:t,sizes:r,height:i,width:n,decoding:l,className:s,style:u,fetchPriority:d,placeholder:c,loading:f,unoptimized:p,fill:h,onLoadRef:b,onLoadingCompleteRef:x,setBlurComplete:v,setShowAltText:_,sizesInput:j,onLoad:w,onError:C,...P},S)=>{let O=(0,a.useCallback)(e=>{e&&(C&&(e.src=e.src),e.complete&&g(e,c,b,x,v,p,j))},[e,c,b,x,v,C,p,j]),R=(0,m.useMergedRef)(S,O);return(0,o.jsx)("img",{...P,...y(d),loading:f,width:n,height:i,decoding:l,"data-nimg":h?"fill":"1",className:s,style:u,sizes:r,srcSet:t,src:e,ref:R,onLoad:e=>{g(e.currentTarget,c,b,x,v,p,j)},onError:e=>{_(!0),"empty"!==c&&v(!0),C&&C(e)}})});function x({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...y(t.fetchPriority)};return e&&l.default.preload?(l.default.preload(t.src,r),null):(0,o.jsx)(s.default,{children:(0,o.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let v=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(f.RouterContext),i=(0,a.useContext)(c.ImageConfigContext),n=(0,a.useMemo)(()=>{let e=h||i||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),n=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:n,localPatterns:"u"<typeof window?i?.localPatterns:e.localPatterns}},[i]),{onLoad:l,onLoadingComplete:s}=e,m=(0,a.useRef)(l);(0,a.useEffect)(()=>{m.current=l},[l]);let g=(0,a.useRef)(s);(0,a.useEffect)(()=>{g.current=s},[s]);let[y,v]=(0,a.useState)(!1),[_,j]=(0,a.useState)(!1),{props:w,meta:C}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:n,blurComplete:y,showAltText:_});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b,{...w,unoptimized:C.unoptimized,placeholder:C.placeholder,fill:C.fill,onLoadRef:m,onLoadingCompleteRef:g,setBlurComplete:v,setShowAltText:j,sizesInput:e.sizes,ref:t}),C.preload?(0,o.jsx)(x,{isAppRouter:!r,imgAttributes:w}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},94909,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return d},getImageProps:function(){return u}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let o=e.r(55682),a=e.r(8927),l=e.r(85437),s=o._(e.r(1948));function u(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let d=l.Image},57688,(e,t,r)=>{t.exports=e.r(94909)},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return n}});let i=e.r(71645);function n(e,t){let r=(0,i.useRef)(null),n=(0,i.useRef)(null);return(0,i.useCallback)(i=>{if(null===i){let e=r.current;e&&(r.current=null,e());let t=n.current;t&&(n.current=null,t())}else e&&(r.current=o(e,i)),t&&(n.current=o(t,i))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={formatUrl:function(){return l},formatWithValidation:function(){return u},urlObjectKeys:function(){return s}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let o=e.r(90809)._(e.r(98183)),a=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:r}=e,i=e.protocol||"",n=e.pathname||"",l=e.hash||"",s=e.query||"",u=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?u=t+e.host:r&&(u=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(u+=":"+e.port)),s&&"object"==typeof s&&(s=String(o.urlQueryToSearchParams(s)));let d=e.search||s&&`?${s}`||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||a.test(i))&&!1!==u?(u="//"+(u||""),n&&"/"!==n[0]&&(n="/"+n)):u||(u=""),l&&"#"!==l[0]&&(l="#"+l),d&&"?"!==d[0]&&(d="?"+d),n=n.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${i}${u}${n}${d}${l}`}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return l(e)}},38982,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return o}});let i=e.r(18967),n=e.r(52817);function o(e){if(!(0,i.isAbsoluteUrl)(e))return!0;try{let t=(0,i.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,n.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return y},useLinkStatus:function(){return x}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let o=e.r(90809),a=e.r(43476),l=o._(e.r(71645)),s=e.r(95057),u=e.r(8372),d=e.r(18581),c=e.r(18967),f=e.r(5550);e.r(33525);let p=e.r(88540),m=e.r(91949),h=e.r(38982),g=e.r(9396);function y(t){var r,i;let n,o,y,[x,v]=(0,l.useOptimistic)(m.IDLE_LINK_STATUS),_=(0,l.useRef)(null),{href:j,as:w,children:C,prefetch:P=null,passHref:S,replace:O,shallow:R,scroll:E,onClick:A,onMouseEnter:M,onTouchStart:I,legacyBehavior:k=!1,onNavigate:z,transitionTypes:T,ref:L,unstable_dynamicOnHover:D,...U}=t;n=C,k&&("string"==typeof n||"number"==typeof n)&&(n=(0,a.jsx)("a",{children:n}));let $=l.default.useContext(u.AppRouterContext),F=!1!==P,N=!1!==P?null===(i=P)||"auto"===i?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,W="string"==typeof(r=w||j)?r:(0,s.formatUrl)(r);if(k){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=l.default.Children.only(n)}let q=k?o&&"object"==typeof o&&o.ref:L,B=l.default.useCallback(e=>(null!==$&&(_.current=(0,m.mountLinkInstance)(e,W,$,N,F,v)),()=>{_.current&&((0,m.unmountLinkForCurrentNavigation)(_.current),_.current=null),(0,m.unmountPrefetchableInstance)(e)}),[F,W,$,N,v]),G={ref:(0,d.useMergedRef)(B,q),onClick(t){k||"function"!=typeof A||A(t),k&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!$||t.defaultPrevented||function(t,r,i,n,o,a,s){if("u">typeof window){let u,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((u=t.currentTarget.getAttribute("target"))&&"_self"!==u||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(r)){n&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),a){let e=!1;if(a({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:c}=e.r(99781);l.default.startTransition(()=>{c(r,n?"replace":"push",!1===o?p.ScrollBehavior.NoScroll:p.ScrollBehavior.Default,i.current,s)})}}(t,W,_,O,E,z,T)},onMouseEnter(e){k||"function"!=typeof M||M(e),k&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),$&&F&&(0,m.onNavigationIntent)(e.currentTarget,!0===D)},onTouchStart:function(e){k||"function"!=typeof I||I(e),k&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),$&&F&&(0,m.onNavigationIntent)(e.currentTarget,!0===D)}};return(0,c.isAbsoluteUrl)(W)?G.href=W:k&&!S&&("a"!==o.type||"href"in o.props)||(G.href=(0,f.addBasePath)(W)),y=k?l.default.cloneElement(o,G):(0,a.jsx)("a",{...U,...G,children:n}),(0,a.jsx)(b.Provider,{value:x,children:y})}e.r(84508);let b=(0,l.createContext)(m.IDLE_LINK_STATUS),x=()=>(0,l.useContext)(b);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18054,e=>{"use strict";var t=e.i(97053);let r=t.styled.footer`
  padding-bottom: 3.5rem;
`,i=t.styled.main`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.75rem;

  @media (max-width: 768px) {
    gap: 2.5rem;
  }
`,n=t.styled.div``,o=t.styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.75rem 0 3.25rem;
  border-top: 0.0625rem solid #3d3d3d;
  gap: 3.25rem;
`,a=t.styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3.5rem;
  }
`,l=t.styled.div`
  display: flex;
  gap: 0.75rem;
  padding: 1.25rem 1rem;
  gap: 0.75rem;
  border-radius: 0.5rem;
  border: 1px dashed var(--White, #fff);
`,s=t.styled.div``,u=t.styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    max-width: 19.5625rem;
    font-size: 1.25rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    p {
      font-size: 1rem;
    }
  }
`,d=t.styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,c=t.styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem 3.75rem;
  }
`,f=t.styled.div`
  display: flex;
  min-width: 12.5rem;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 768px) {
    min-width: auto;
  }
`,p=t.styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  li {
    color: #efefef;
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
    position: relative;

    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 1px;
      background-color: #efefef;
      left: 0;
      bottom: -5px;
      transform: scaleX(0);
      transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
      transform-origin: center;
    }

    &:hover {
      &::after {
        width: 100%;
        transform: scaleX(1);
      }
    }
  }
`,m=t.styled.div`
  gap: 50px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`,h=t.styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
`,g=t.styled.div`
  display: flex;
  align-items: center;
  gap: 1.12rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    gap: 0.5rem;

    h3 {
      font-size: 0.875rem;
    }
  }
`,y=t.styled.div`
  font-size: 1rem;
  font-weight: 400;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 0.875rem;
    gap: 0.25rem;
  }
`;e.s(["ColumnCompany",0,h,"CopyRight",0,y,"FooterBottom",0,m,"FooterLogo",0,n,"FooterMainContent",0,o,"FooterMiddle",0,a,"FooterNavigation",0,c,"GridColumn",0,f,"IconCtn",0,d,"InfoCompany",0,g,"Inner",0,i,"LinksContainer",0,p,"QRContainer",0,l,"QRImageCtn",0,s,"TextCtn",0,u,"Wrapper",0,r])},79303,69120,e=>{"use strict";var t=e.i(43476),r=e.i(57688);let i={src:e.i(19644).default,width:1507,height:521,blurWidth:0,blurHeight:0};e.s(["default",0,i],69120);let n={src:e.i(89579).default,width:148,height:148,blurWidth:8,blurHeight:8,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAt0lEQVR42lWPTatAYBCF399qSylJygobhHzsrJRfpVA+krKxsFTPbd66t+5iajpnzswz6n1fxnHkPE/u+2ZdV+Z51pp4ShrP84iiiKqqSNOUPM+1Jp6SRJZlhGGI7/u4rkscx7Rty3VdqG3b6Ptem47j6CqKgmEYeJ4HNU0TdV1rMUmSv0E5JUxqWRbKsqRpGrqu07cNw8CyLCT8D1JYbNsmCAJM0+Q4DtTvm/u+a0GgZaukv+/jB7f/wQxketuWAAAAAElFTkSuQmCC"},o={src:e.i(86084).default,width:24,height:24,blurWidth:0,blurHeight:0},a={src:e.i(30211).default,width:24,height:24,blurWidth:0,blurHeight:0},l={src:e.i(93552).default,width:20,height:21,blurWidth:0,blurHeight:0};var s=e.i(18054),u=e.i(22016);let d=[{title:"Sobre nós",links:[{text:"Empresa",target:null,path:"/about"},{text:"Cibersegurança",target:null,path:"/partners"},{text:"Política de privacidade",target:null,path:"/policy"}]},{title:"Pagamentos",links:[{text:"Relatos de clientes",target:"_blank",path:"https://stripe.com/br/customers"},{text:"Privacidade e Termos",target:"_blank",path:"https://stripe.com/br/privacy"}]},{title:"Contato",links:[{text:"Entrar em contato por e-mail",target:"_blank",path:"mailto:contato@mexpenses.com.br"}]},{title:"Portal do administrador",links:[{text:"Login",target:"_blank",path:"https://admin.mexpenses.com.br/#/auth/login"}]}];e.s(["default",0,()=>(0,t.jsx)(s.Wrapper,{children:(0,t.jsxs)(s.Inner,{children:[(0,t.jsx)(s.FooterLogo,{children:(0,t.jsx)(r.default,{src:i,width:150,alt:"mexpenses_logo"})}),(0,t.jsxs)(s.FooterMainContent,{children:[(0,t.jsxs)(s.FooterMiddle,{children:[(0,t.jsxs)(s.QRContainer,{children:[(0,t.jsx)(s.QRImageCtn,{children:(0,t.jsx)(r.default,{width:130,src:n,alt:"qr_code"})}),(0,t.jsxs)(s.TextCtn,{children:[(0,t.jsx)("p",{children:"Escaneie para baixar o app na Google Play ou App Store."}),(0,t.jsxs)(s.IconCtn,{children:[(0,t.jsx)(r.default,{src:o,alt:"playstore icon"}),(0,t.jsx)(r.default,{src:a,alt:"apple icon"})]})]})]}),(0,t.jsx)(s.FooterNavigation,{children:d.map((e,r)=>(0,t.jsxs)(s.GridColumn,{children:[(0,t.jsx)("h3",{children:e.title}),(0,t.jsx)(s.LinksContainer,{children:e.links.map((e,r)=>e.target?(0,t.jsx)("a",{href:e.path,target:e.target,children:(0,t.jsx)("li",{children:e.text})},r):(0,t.jsx)(u.default,{href:e.path,children:(0,t.jsx)("li",{children:e.text})},r))})]},r))})]}),(0,t.jsxs)(s.FooterBottom,{children:[(0,t.jsx)(s.InfoCompany,{children:(0,t.jsx)("h3",{children:"Inscrita no CNPJ sob o nº 55.552.018/0001-98"})}),(0,t.jsxs)(s.ColumnCompany,{children:[(0,t.jsxs)(s.CopyRight,{children:[(0,t.jsx)(r.default,{src:l,alt:"copyright svg"}),"2024-",new Date().getFullYear()," Mexpenses Soluções Financeiras LTDA"]}),(0,t.jsx)("small",{children:"R. Cel. José Eusébio, 95 - Higienópolis, São Paulo"})]})]})]})]})})],79303)}]);
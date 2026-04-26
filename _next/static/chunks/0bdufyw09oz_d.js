(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return i}});let n=e.r(71645);function i(e,t){let r=(0,n.useRef)(null),i=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(r.current=o(e,n)),t&&(i.current=o(t,n))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let o=e.r(90809)._(e.r(98183)),a=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,n=e.protocol||"",i=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(o.urlQueryToSearchParams(l)));let u=e.search||l&&`?${l}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||a.test(n))&&!1!==c?(c="//"+(c||""),i&&"/"!==i[0]&&(i="/"+i)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),u&&"?"!==u[0]&&(u="?"+u),i=i.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${n}${c}${i}${u}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},38982,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return o}});let n=e.r(18967),i=e.r(52817);function o(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,i.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return g},useLinkStatus:function(){return b}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let o=e.r(90809),a=e.r(43476),s=o._(e.r(71645)),l=e.r(95057),c=e.r(8372),u=e.r(18581),d=e.r(18967),f=e.r(5550);e.r(33525);let p=e.r(88540),h=e.r(91949),m=e.r(38982),x=e.r(9396);function g(t){var r,n;let i,o,g,[b,v]=(0,s.useOptimistic)(h.IDLE_LINK_STATUS),j=(0,s.useRef)(null),{href:w,as:_,children:k,prefetch:S=null,passHref:T,replace:M,shallow:P,scroll:C,onClick:O,onMouseEnter:R,onTouchStart:E,legacyBehavior:z=!1,onNavigate:A,transitionTypes:L,ref:I,unstable_dynamicOnHover:D,...U}=t;i=k,z&&("string"==typeof i||"number"==typeof i)&&(i=(0,a.jsx)("a",{children:i}));let B=s.default.useContext(c.AppRouterContext),F=!1!==S,K=!1!==S?null===(n=S)||"auto"===n?x.FetchStrategy.PPR:x.FetchStrategy.Full:x.FetchStrategy.PPR,$="string"==typeof(r=_||w)?r:(0,l.formatUrl)(r);if(z){if(i?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=s.default.Children.only(i)}let N=z?o&&"object"==typeof o&&o.ref:I,W=s.default.useCallback(e=>(null!==B&&(j.current=(0,h.mountLinkInstance)(e,$,B,K,F,v)),()=>{j.current&&((0,h.unmountLinkForCurrentNavigation)(j.current),j.current=null),(0,h.unmountPrefetchableInstance)(e)}),[F,$,B,K,v]),q={ref:(0,u.useMergedRef)(W,N),onClick(t){z||"function"!=typeof O||O(t),z&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!B||t.defaultPrevented||function(t,r,n,i,o,a,l){if("u">typeof window){let c,{nodeName:u}=t.currentTarget;if("A"===u.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(r)){i&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),a){let e=!1;if(a({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(99781);s.default.startTransition(()=>{d(r,i?"replace":"push",!1===o?p.ScrollBehavior.NoScroll:p.ScrollBehavior.Default,n.current,l)})}}(t,$,j,M,C,A,L)},onMouseEnter(e){z||"function"!=typeof R||R(e),z&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),B&&F&&(0,h.onNavigationIntent)(e.currentTarget,!0===D)},onTouchStart:function(e){z||"function"!=typeof E||E(e),z&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),B&&F&&(0,h.onNavigationIntent)(e.currentTarget,!0===D)}};return(0,d.isAbsoluteUrl)($)?q.href=$:z&&!T&&("a"!==o.type||"href"in o.props)||(q.href=(0,f.addBasePath)($)),g=z?s.default.cloneElement(o,q):(0,a.jsx)("a",{...U,...q,children:i}),(0,a.jsx)(y.Provider,{value:b,children:g})}e.r(84508);let y=(0,s.createContext)(h.IDLE_LINK_STATUS),b=()=>(0,s.useContext)(y);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},7670,e=>{"use strict";function t(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=function e(t){var r,n,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t)if(Array.isArray(t)){var o=t.length;for(r=0;r<o;r++)t[r]&&(n=e(t[r]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}(e))&&(n&&(n+=" "),n+=t);return n}e.s(["clsx",0,t,"default",0,t])},35001,e=>{"use strict";var t=e.i(43476),r=e.i(71645),n=e.i(22016),i=e.i(46932),o=e.i(97053);let a=o.styled.section`
  padding: 5rem 0;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`,s=o.styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`,l=o.styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  max-width: 68rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`,c=(0,o.styled)(i.motion.h1)`
    font-size: 35px;
    font-weight: 800;
    margin-bottom: 15px;
    background: linear-gradient(to right, #b4d2dd, #1485e2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: 768px) {
        font-size: 25px;
    }
`,u=(0,o.styled)(i.motion.div)`
    display: flex;
    flex-direction: column;
`,d=(0,o.styled)(i.motion.div)`
    display: flex;
    flex-direction: row;
`,f=(0,o.styled)(i.motion.div)`
    width: 100%;
    height: 1px;
    margin: 15px 0;
    background-color: #454545;
`,p=(0,o.styled)(i.motion.div)`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: 99px;
    justify-content: center;
    background-color: #252525;
`,h=(0,o.styled)(i.motion.h2)`
    color: white;
    font-size: 25px;
    font-weight: 800;
`,m=(0,o.styled)(n.default)`
    border: 0;
    width: 100%;
    display: flex;
    margin-top: 30px;
    padding: 15px 30px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    border-radius: 6.25rem;
    background: var(--blue);
    color: var(--white);
    font-size: 1rem;
    font-weight: 600;
    &:hover {
        background: var(--blue-light);
    }
`,x=(0,o.styled)(i.motion.span)`
    gap: 5px;
    font-size: 15px;
    font-weight: 400;
    color: #c0d4ff;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`,g=(0,o.styled)(i.motion.img)`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid #2563eb;
    box-shadow: 0 0 20px rgba(192, 212, 255, 0.2);
`,y=(0,o.styled)(i.motion.div)`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    text-transform: uppercase;
    background: linear-gradient(to right, #b4d2dd, #1485e2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
     @media (max-width: 1030px) {
        gap: 35px;
        flex-direction: column;
    }
`,b=(0,o.styled)(i.motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,v=(0,o.styled)(i.motion.div)`
    font-size: 40px;
    font-weight: 800;
`,j=(0,o.styled)(i.motion.h2)`
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    letter-spacing: 1px;
    text-transform: uppercase;
`,w=(0,o.styled)(i.motion.div)`
    font-size: 40px;
    font-weight: 800;
    display: flex;
    padding: 0 30px;

    @media (max-width: 1030px) {
        display: none;
    }
`,_=(0,o.styled)(i.motion.div)`
    gap: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (max-width: 1030px) {
        gap: 5px;
        flex-direction: column;
    }
`,k=(0,o.styled)(i.motion.div)`
    font-size: 60px;
    font-weight: 800;
    background: linear-gradient(to right, #d2f3ff, #2d8cff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`,S={months:0,days:0,hours:0,minutes:0,seconds:0};function T(e,t){let r=new Date,n=new Date(e),i=n.getTime()-r.getTime();if(i<=0)return S;let o=Math.floor(i/1e3)%60,a=Math.floor(i/6e4)%60,s=Math.floor(i/36e5)%24,l=new Date(r),c=0;for(;;){let e=new Date(l);if(e.setMonth(e.getMonth()+1),e>n)break;c++,l.setMonth(l.getMonth()+1)}let u=Math.floor((n.getTime()-l.getTime())/864e5);return 0===o&&0===a&&0===s&&0===u&&0===c&&setTimeout(t,1e4),{months:c,days:u,hours:s,minutes:a,seconds:o}}let M={position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"inherit",fontWeight:"inherit",background:"linear-gradient(to right, #b4d2dd, #1485e2)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"};function P({value:e}){let n=(0,r.useRef)(e),[i,o]=(0,r.useState)({current:e,prev:e}),[a,s]=(0,r.useState)("idle");(0,r.useEffect)(()=>{e!==n.current&&(o({prev:n.current,current:e}),n.current=e,requestAnimationFrame(()=>{s("animating")}))},[e]),(0,r.useEffect)(()=>{if("animating"===a){let e=setTimeout(()=>s("idle"),450);return()=>clearTimeout(e)}},[a]);let l="animating"===a;return(0,t.jsxs)("span",{style:{display:"inline-block",position:"relative",width:"1ch",height:"1.2em",overflow:"hidden"},children:[(0,t.jsx)("span",{style:{...M,transition:l?"transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease":"none",transform:l?"translateY(-100%)":"translateY(0)",opacity:+!l},children:l?i.prev:i.current}),l&&(0,t.jsx)("span",{style:{...M,animation:"flipDown 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards"},children:i.current})]})}function C({value:e}){return(0,t.jsx)("span",{style:{display:"flex",gap:10},children:e.split("").map((e,r)=>(0,t.jsx)(P,{value:e},r))})}let O=[{key:"months",label:"Mês"},{key:"days",label:"Dia"},{key:"hours",label:"Horas"},{key:"minutes",label:"Minutos"},{key:"seconds",label:"Segundos"}];function R({refresh:e,dateRaffle:n}){let[i,o]=(0,r.useState)(S);return(0,r.useEffect)(()=>{let t;return n&&(o(T(n,e)),t=setInterval(()=>o(T(n,e)),1e3)),()=>t&&clearInterval(t)},[n]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        @keyframes flipDown {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}),(0,t.jsx)(y,{children:O.map((e,n)=>(0,t.jsxs)(r.Fragment,{children:[(0,t.jsxs)(b,{children:[(0,t.jsx)(v,{children:(0,t.jsx)(C,{value:String(i[e.key]).padStart(2,"0")})}),(0,t.jsx)(j,{children:e.label})]}),n<O.length-1&&(0,t.jsx)(w,{children:":"})]},e.key))})]})}var E=e.i(7670);let z=({name:e,filled:n=!1,staticMarkup:i=!1,className:o="",...a})=>{let s=(0,r.useRef)(null);return(0,r.useEffect)(()=>{document.fonts.load("24px Material Symbols Outlined").then(()=>{s.current&&(s.current.innerText=e)})},[]),(0,t.jsx)("i",{ref:s,className:(0,E.clsx)(o,"material-symbols-outlined min-w-6 min-h-6",{"filled-icon":n}),...a,children:i?e:null})},A=({icon:e,title:r,description:n,children:i})=>(0,t.jsxs)(d,{style:{gap:10},children:[(0,t.jsx)(p,{children:(0,t.jsx)(z,{name:e,style:{fontSize:35,fontWeight:"bold",color:"#278bff"}})}),(0,t.jsx)("div",{style:{flex:1,paddingRight:10},children:(0,t.jsxs)(u,{style:{gap:15},children:[(0,t.jsx)("span",{style:{fontWeight:"bold",fontSize:16},children:r}),(0,t.jsx)("span",{style:{fontSize:14},children:n}),i]})})]});e.s(["default",0,function(){let e,[n,i]=(0,r.useState)(!0),[o,d]=(0,r.useState)({date:null,active:!1,finished:!1,total_participants:0,winner_user_name:null,winner_user_picture:null}),p=()=>{i(!0),fetch("http://localhost:8080/api/v1/user/raffle/current",{headers:{"key-platform":"bad7ec02-289a-4c54-a7f6-5b540539c1b5-1fe3050f-d6b3-49ee-8812-35b22e0f4544"}}).then(e=>e.json()).then(d).catch(console.log).finally(()=>i(!1))},y=(0,r.useRef)(!1);(0,r.useEffect)(()=>{y.current||(y.current=!0,p())},[]),(0,r.useEffect)(()=>{let e=new Audio("/assets/tick_tack.m4a"),t=()=>{let t=e.duration-e.currentTime;t<=1.5?e.volume=Math.max(0,t/1.5):e.volume=1};return o&&!o?.finished&&(e.loop=!0,e.play().catch(()=>{}),e.addEventListener("timeupdate",t)),()=>{e.removeEventListener("timeupdate",t),e.pause()}},[o]);let b=(e=navigator.userAgent,/iPad|iPhone|iPod/.test(e)?"https://apps.apple.com/br/app/mexpenses/id6757622280":/Android/.test(e)?"https://play.google.com/store/apps/details?id=com.appmexpenses":"https://app.mexpenses.com.br/#/auth/register/basic");return(0,t.jsx)(a,{children:(0,t.jsx)(s,{children:(0,t.jsxs)(l,{children:[(0,t.jsx)(c,{children:"Próximo sorteio exclusivo para assinantes fidelizados"}),(0,t.jsx)(h,{children:"🎉 Mascote Mex + Presente misterioso 🧸🎁"}),!n&&!o?.date&&(0,t.jsx)(x,{children:(0,t.jsx)("b",{children:"Muito em breve novo sorteio!"})}),o?.finished&&o?.winner_user_name&&(0,t.jsxs)(x,{children:["Vencedor do último sorteio ",o?.winner_user_picture&&(0,t.jsx)(g,{src:o?.winner_user_picture}),(0,t.jsx)("b",{children:o?.winner_user_name})]}),(0,t.jsx)(R,{refresh:p,dateRaffle:o?.date}),(0,t.jsxs)(_,{children:[(0,t.jsx)("img",{width:200,src:"/images/mex.png"}),(0,t.jsx)(k,{children:"+"}),(0,t.jsx)("img",{width:150,src:"/images/mistery_box.webp"})]}),(0,t.jsxs)(u,{style:{gap:5},children:[(0,t.jsx)(A,{icon:"task_alt",title:"Regras de participação",description:"Assine um plano, aproveite o 1º mês grátis e, ao fazer seu primeiro pagamento e manter sua assinatura ativa, você ganha 1 bilhete para concorrer a brindes a cada 3 meses."}),(0,t.jsx)(f,{}),(0,t.jsx)(A,{icon:"confirmation_number",title:"Tenha mais sorte na hora de concorrer",description:"Indique amigos para fazer uma assinatura com seu código e ganhe +1 bilhete. Sem limite de indicações, mais amigos, mais bilhetes, mais chances!"}),(0,t.jsx)(f,{}),(0,t.jsx)(A,{icon:"av_timer",title:"Meus bilhetes permanecem para sempre?",description:"Todo assinante começa cada sorteio com 1 bilhete. Indique amigos e ganhe bilhetes extras para ter mais chances! Após cada sorteio, todos voltam para 1 bilhete, justo para todo mundo. 🎉"}),(0,t.jsx)(f,{}),(0,t.jsx)(A,{icon:"delivery_truck_speed",title:"Como funciona o envio dos brindes?",description:"Mantenha seu endereço e contato atualizados no perfil. Torçemos para que você seja o próximo ganhador! Se isso acontecer, entraremos em contato pelo WhatsApp ou E-mail para confirmar a entrega."}),(0,t.jsx)(f,{}),(0,t.jsx)(A,{icon:"domino_mask",title:"Proteção contra fraudes",description:"Para os golpistas de plantão: nossos sistemas identificam atividades suspeitas ao cancelar contas forjadas, garantindo que os sorteios sejam justos e seguros para todos os participantes."})]}),(0,t.jsx)(m,{target:"_blank",href:b,children:"Quero começar participar!"})]})})})}],35001)}]);
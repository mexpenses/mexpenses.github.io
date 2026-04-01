(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,35001,e=>{"use strict";var t=e.i(43476),i=e.i(71645),n=e.i(46932),r=e.i(97053);let a=r.styled.section`
  padding: 5rem 0;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`,l=r.styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`,o=r.styled.div`
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
`,s=(0,r.styled)(n.motion.h1)`
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
`,d=(0,r.styled)(n.motion.span)`
    gap: 5px;
    font-size: 15px;
    font-weight: 400;
    color: #c0d4ff;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;(0,r.styled)(n.motion.img)`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid #2563eb;
    box-shadow: 0 0 20px rgba(192, 212, 255, 0.2);
`;let c=(0,r.styled)(n.motion.div)`
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
`,p=(0,r.styled)(n.motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,x=(0,r.styled)(n.motion.div)`
    font-size: 40px;
    font-weight: 800;
`,m=(0,r.styled)(n.motion.h2)`
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    letter-spacing: 1px;
    text-transform: uppercase;
`,f=(0,r.styled)(n.motion.div)`
    font-size: 40px;
    font-weight: 800;
    display: flex;
    padding: 0 30px;

    @media (max-width: 1030px) {
        display: none;
    }
`,u=(0,r.styled)(n.motion.div)`
    gap: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (max-width: 1030px) {
        gap: 5px;
        flex-direction: column;
    }
`,h=(0,r.styled)(n.motion.div)`
    font-size: 60px;
    font-weight: 800;
    background: linear-gradient(to right, #d2f3ff, #2d8cff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`,g={months:0,days:0,hours:0,minutes:0,seconds:0};function y(e){let t=new Date,i=new Date(e),n=i.getTime()-t.getTime();if(n<=0)return g;let r=Math.floor(n/1e3)%60,a=Math.floor(n/6e4)%60,l=Math.floor(n/36e5)%24,o=new Date(t),s=0;for(;;){let e=new Date(o);if(e.setMonth(e.getMonth()+1),e>i)break;s++,o.setMonth(o.getMonth()+1)}return{months:s,days:Math.floor((i.getTime()-o.getTime())/864e5),hours:l,minutes:a,seconds:r}}let b={position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"inherit",fontWeight:"inherit",background:"linear-gradient(to right, #b4d2dd, #1485e2)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"};function w({value:e}){let n=(0,i.useRef)(e),[r,a]=(0,i.useState)({current:e,prev:e}),[l,o]=(0,i.useState)("idle");(0,i.useEffect)(()=>{e!==n.current&&(a({prev:n.current,current:e}),n.current=e,requestAnimationFrame(()=>{o("animating")}))},[e]),(0,i.useEffect)(()=>{if("animating"===l){let e=setTimeout(()=>o("idle"),450);return()=>clearTimeout(e)}},[l]);let s="animating"===l;return(0,t.jsxs)("span",{style:{display:"inline-block",position:"relative",width:"1ch",height:"1.2em",overflow:"hidden"},children:[(0,t.jsx)("span",{style:{...b,transition:s?"transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease":"none",transform:s?"translateY(-100%)":"translateY(0)",opacity:+!s},children:s?r.prev:r.current}),s&&(0,t.jsx)("span",{style:{...b,animation:"flipDown 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards"},children:r.current})]})}function k({value:e}){return(0,t.jsx)("span",{style:{display:"flex",gap:10},children:e.split("").map((e,i)=>(0,t.jsx)(w,{value:e},i))})}let j=[{key:"months",label:"Mês"},{key:"days",label:"Dia"},{key:"hours",label:"Horas"},{key:"minutes",label:"Minutos"},{key:"seconds",label:"Segundos"}];function v({dateRaffle:e}){let[n,r]=(0,i.useState)(g);return(0,i.useEffect)(()=>{r(y(e));let t=setInterval(()=>r(y(e)),1e3);return()=>clearInterval(t)},[e]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        @keyframes flipDown {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}),(0,t.jsx)(c,{children:j.map((e,r)=>(0,t.jsxs)(i.Fragment,{children:[(0,t.jsxs)(p,{children:[(0,t.jsx)(x,{children:(0,t.jsx)(k,{value:String(n[e.key]).padStart(2,"0")})}),(0,t.jsx)(m,{children:e.label})]}),r<j.length-1&&(0,t.jsx)(f,{children:":"})]},e.key))})]})}e.s(["default",0,function(){return!function(e,t=1.5){(0,i.useEffect)(()=>{let i=new Audio(e);i.loop=!0,i.play().catch(()=>{});let n=()=>{let e=i.duration-i.currentTime;e<=t?i.volume=Math.max(0,e/t):i.volume=1};return i.addEventListener("timeupdate",n),()=>{i.removeEventListener("timeupdate",n),i.pause()}},[e,t])}("/assets/tick_tack.m4a",1.5),(0,t.jsx)(a,{children:(0,t.jsx)(l,{children:(0,t.jsxs)(o,{children:[(0,t.jsx)(s,{children:"Próximo sorteio exclusivo para assinantes fidelizados"}),(0,t.jsx)(d,{children:"__DEV__ Unavailable"}),(0,t.jsx)(v,{dateRaffle:"2026-07-03T19:30:00"}),(0,t.jsxs)(u,{children:[(0,t.jsx)("img",{width:200,src:"/images/mex.png"}),(0,t.jsx)(h,{children:"+"}),(0,t.jsx)("img",{width:150,src:"/images/mistery_box.webp"})]})]})})})}],35001)}]);
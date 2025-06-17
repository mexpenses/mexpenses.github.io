import React, { useEffect, useRef, useState } from "react";
import ButtonPrimary from "./Buttons/ButtonPrimary";

const Main = ({ viewModeApp = false, listAbout = [
  {
    name: "Tempo, estresse e dinheiro",
    info: "Aqui você economiza",
    icon: "/assets/economy.png",
  },
  {
    name: "Só para os brasileiros",
    info: "Para quem?",
    icon: "/assets/brasil.png",
  },
  {
    name: "Nuvem da Hetzner Cloud",
    info: "Segurança garantida",
    icon: "/assets/hetzner.png",
  },
] }) => {
  const stats = [
    { id: 1, name: 'Para quem quer usar o básico, tudo bem, a Mex deixa você usar sem compromisso', value: 'Simples 🥺' },
    { id: 2, name: 'Quer pequenas alterações e opções? Desenvolvemos pra você', value: 'Essencial 🤩' },
    { id: 3, name: 'Quer algo novo no App? Você que manda na gente, desenvolvemos do jeito que você quiser!', value: 'Completo 😜' },
  ];
  const refVideo = useRef(null);
  const [volume, setVolume] = useState("off");

  const isVisiblePlayVideo = () => {
    if (!viewModeApp) {
      const video = refVideo.current;
      const rect = video?.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      console.log(rect.bottom, windowHeight)
      if (rect.bottom >= windowHeight / 1.8) {
        if (video.paused) {
          video.play();
        }
      } else {
        if (!video.paused) {
          video.pause();
        }
      }
    }
  };

  const toggleVolume = () => {
    setVolume(current => current.startsWith("off") ? "on" : "off");
  };

  useEffect(() => {
    if (!viewModeApp) {
      window.addEventListener('scroll', isVisiblePlayVideo);
      return () => window.removeEventListener('scroll', isVisiblePlayVideo);
    }
  }, [viewModeApp]);

  return (
    <>
      <div
        id="about"
      >
        <div className="flex max-w-screen-xl flex-col lg:flex-row gap-8 pt-14 lg:py-16 mt-10 lg:mt-0 mx-auto">
          <div className="flex flex-col justify-center px-8">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600">
              Seu dinheiro, suas regras. Só que <strong className="text-blue-600">sem bagunça.</strong>
            </h1>
            <p className="text-black-500 my-6 text-lg">
              Não temos frases bonitas para impressionar,
              mas o que a gente entende é de simplificar.
              Assine com <strong className="text-blue-600 uppercase text-sm">primeiro mês
              grátis</strong> e peça o que faltar no nosso App!
            </p>
            <div>
              <a href="https://app.mexpenses.com.br/#/auth/register/basic">
                <ButtonPrimary>Eu quero ver agora</ButtonPrimary>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute w-full h-full bg-gradient-to-b lg:bg-gradient-to-l from-transparent to-white" />
            <div className="h-full w-full">
                <button
                  type="button"
                  onClick={toggleVolume}
                  className="w-10 h-10 bg-white flex items-center justify-center absolute m-5 z-20 rounded-full hover:bg-neutral-200 drop-shadow-lg"
                >
                  <img src={`/assets/volume_${volume}.png`} width={30} alt="Volume" />
                </button>
                <video
                  loop
                  autoPlay
                  ref={refVideo}
                  preload="auto"
                  className="rounded-3xl w-full"
                  muted={volume.startsWith("off")}
                >
                  <source src="/assets/conquistas.mp4" type="video/mp4" />
                </video>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center pt-5">
          <div className="max-w-screen-xl px-8 xl:px-5 mx-auto">
            <h1 className="mb-5 text-4xl text-center text-gray-900 font-medium">Por que usar a Mexpenses?</h1>
            <p className="text-secondary text-xl text-start">
              Aqui ninguém julga se o dinheiro foi pro iFood, pro encontro ou pro boleto.
            </p>
          </div>
          <div className="w-full pt-10 carousel-logos animate-pulse px-5 xl:px-0">
            <a href="https://www.hetzner.com/" target="_blank" className="carousel-logo">
              <img src={"/assets/hetzner_partner.png"} alt="Hetzner" />
            </a>
            <a href="https://about.meta.com/br/" target="_blank" className="carousel-logo">
              <img src={"/assets/meta_partner.png"} alt="Meta" />
            </a>
            <a href="https://about.google/" target="_blank" className="carousel-logo">
              <img src={"/assets/google_partner.png"} alt="Google" />
            </a>
            {/* <a href="https://pluggy.ai/" target="_blank" className="carousel-logo">
              <img src={"/assets/pluggy_partner.png"} alt="Pluggy" />
            </a> */}
            <a href="https://vercel.com/" target="_blank" className="carousel-logo">
              <img src={"/assets/vercel_partner.png"} alt="Vercel" />
            </a>
            {/* <a href="https://openai.com/" target="_blank" className="carousel-logo">
              <img src={"/assets/open_ai_partner.png"} alt="OpenAI" />
            </a> */}
            <a href="https://stripe.com/br" target="_blank" className="carousel-logo">
              <img src={"/assets/stripe_partner.png"} alt="Stripe" />
            </a>
            <a href="https://github.com/" target="_blank" className="carousel-logo">
              <img src={"/assets/github_partner.png"} alt="GitHub" />
            </a>
            <a href="https://br.tradingview.com/" target="_blank" className="carousel-logo">
              <img src={"/assets/tradingview_partner.png"} alt="TradingView" />
            </a>
          </div>
        </div>
        <div className="relative w-full flex pb-14 max-w-screen-xl px-8 xl:px-5 mx-auto">
          <div
            className="rounded-lg w-full grid grid-flow-row lg:grid-flow-row grid-cols-1 lg:grid-cols-3 py-9 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-gray-100 bg-white z-10">
            {listAbout.map((listAbouts, index) => (
              <div
                key={index}
                className="flex items-center justify-start sm:justify-center py-10 sm:py-6 w-full px-4 sm:w-auto mx-auto sm:mx-0"
              >
                <div className="flex w-full">
                  <div className="flex items-center justify-center bg-blue-100 w-12 h-12 mr-6 rounded-full">
                    <img src={listAbouts.icon} width={30} alt={listAbouts.name} />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xl text-black-600 font-medium">
                      {listAbouts.info}
                    </p>
                    <p className="text-lg text-black-500">{listAbouts.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
            style={{ filter: "blur(114px)" }}
          ></div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
          className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-left lg:mx-0 lg:flex-auto lg:py-32">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Para todas as pessoas
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Mude para a <span className="font-bold">Mexpenses</span> e faça acontecer sem aquele lenga-lenga e
              telas difíceis de lidar.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                target="_blank"
                href="https://app.mexpenses.com.br/#/auth/register/basic"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Assinar <span className="font-bold uppercase">agora</span>
              </a>
              <a
                target="_blank"
                className="text-sm font-semibold leading-6 text-white"
                href="https://app.mexpenses.com.br/#/auth/register/free"
              >
                Teste gratuitamente&nbsp;<span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              width={1824}
              height={1080}
              alt="App screenshot"
              src={"/assets/app.png"}
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
      <div className="bg-white pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="flex lg:max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-start">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl text-start">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      {/* <div className="relative overflow-hidden bg-white px-5 md:px-0" id="feature">
        <div className="py-20">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="lg:max-w-lg mb-10">
              <h1 className="text-4xl font-medium tracking-tight text-gray-900 sm:text-6xl">
                <span className="text-black">Veja sem medo</span><br />
                <span className="text-blue-950">Investimentos</span><br />
                <span className="text-blue-800">Transações</span><br />
                <span className="text-blue-600">Saldos</span><br />
              </h1>
              <div className="mt-4 text-xl text-gray-600 flex flex-col">
                <span>Compramos sua dor de ficar saindo de banco em banco para olhar seus extratos financeiros.</span>
                <small className="mt-5">
                  Saiba mais sobre nossa parceira&nbsp;
                  <a href="https://www.pluggy.ai/" target="_blank"
                    className="font-bold hover:opacity-80 text-blue-950 underline">Pluggy</a> que
                  disponibiliza o Open Finance de forma segura.
                </small>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
            >
              <div
                className="lg:absolute transform sm:left-1/2 sm:top-0 sm:translate-x-0 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="absolute w-screen h-full" />
                <div className="flex items-center justify-center space-x-6 lg:space-x-8">
                  <div className="relative grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-32 w-32 lg:h-44 lg:w-44 overflow-hidden rounded-lg">
                      <img
                        alt="Nubank"
                        src={"/assets/nubank.png"}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-32 w-32 lg:h-44 lg:w-44 overflow-hidden rounded-lg">
                      <img
                        alt="Wise"
                        src={"/assets/wise.webp"}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-32 w-32 lg:h-44 lg:w-44 overflow-hidden rounded-lg">
                      <img
                        alt="Mercado Pago"
                        src={"/assets/mercado_pago.jpg"}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-32 w-32 lg:h-44 lg:w-44 overflow-hidden rounded-lg">
                      <img
                        alt="Itaú"
                        src={"/assets/itau.png"}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-32 w-32 lg:h-44 lg:w-44 overflow-hidden rounded-lg">
                      <img
                        alt="Santander"
                        className="h-full w-full object-cover object-center"
                        src={"/assets/santander.png"}
                      />
                    </div>
                    <div className="h-32 w-32 lg:h-44 lg:w-44 overflow-hidden rounded-lg">
                      <img
                        alt="XP Investimentos"
                        src={"/assets/xp.png"}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-32 w-32 lg:h-44 lg:w-44 overflow-hidden rounded-lg">
                      <img
                        alt="Inter"
                        src={"/assets/inter.jpg"}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-32 w-32 lg:h-44 lg:w-44 overflow-hidden rounded-lg">
                      <img
                        alt="Bradesco"
                        src={"/assets/bradesco.png"}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-32 w-32 lg:h-44 lg:w-44 overflow-hidden rounded-lg">
                      <img
                        alt="Rico"
                        className="h-full w-full object-cover object-center"
                        src={"/assets/rico.jpg"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Main;
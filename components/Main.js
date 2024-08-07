import React from "react";
import ButtonPrimary from "./Buttons/ButtonPrimary";

const Main = ({ listAbout = [
  {
    name: "+15 Bancos disponíveis",
    info: "Open Finance",
    icon: "/assets/bank.png",
  },
  {
    name: "Exclusivo para brasileiros",
    info: "Para quem?",
    icon: "/assets/brasil.png",
  },
  {
    name: "Servidores na Amazon",
    info: "Segurança garantida",
    icon: "/assets/aws.png",
  },
] }) => {
  const stats = [
    { id: 1, name: 'Sem educação financeira no Brasil', cls: 'text-dark-900', value: '+150 milhões' },
    { id: 2, name: 'Saia dos 150 milhões e mude agora!',  cls: 'text-dark-900', value: 'Seja diferente' },
    { id: 3, name: 'Evolua cada vez mais e saia do comodismo', cls: 'text-gray-900', value: 'Não desista...' },
  ];
  const stats_assistant = [
    { name: 'Geração de relatórios', value: 'Peça no Chat' },
    { name: '98% aplicáveis', value: 'Dicas financeiras' },
    { name: '24h por dia', value: 'Disponibilidade' },
    { name: '+4.000', value: 'Dicas geradas' },
  ];
  return (
      <>
        <div
            id="about"
            className="max-w-screen-xl mt-24 lg:mt-16 px-8 xl:px-5 mx-auto"
        >
          <div className="grid grid-flow-row lg:grid-flow-col grid-rows-1 md:grid-rows-1 lg:grid-cols-2 gap-8 py-6 lg:py-16">
            <div className="flex flex-col justify-center items-start row-start-2 lg:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600">
                Troque suas planilhas com <strong className="text-green-900">complexidades</strong><br/>
                <span className="text-indigo-600 font-normal leading-normal">por simplicidade</span>
              </h1>
              <p className="text-black-500 mt-4 mb-6 text-lg">
                Não temos frases bonitas para impressionar,
                mas o que a gente entende é de simplificar.
                Sua primeira assinatura com <strong className="text-green-700 uppercase text-sm">primeiro mês grátis</strong>
              </p>
              <a href="https://app.mexpenses.com.br/#/auth/register/basic">
              <ButtonPrimary>Experimente agora</ButtonPrimary>
              </a>
            </div>
            <div className="flex w-full">
              <div className="h-full w-full">
                <img
                    width={700}
                    alt="Mexpenses Illustration"
                    src={"/assets/sad_and_happy.jpg"}
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full flex flex-col items-center justify-center">
              <h1 className="mb-5 text-4xl text-start text-gray-900 font-medium">Por que usar a Mexpenses?</h1>
              <p className="text-secondary text-xl text-start">
                Dê uma olhada para ver por que a Mexpenses é um app de finanças pessoais simples, completo e seguro
              </p>
              <div className="w-full pt-10 carousel-logos animate-pulse">
                <a href="https://aws.amazon.com/pt/?nc2=h_lg" target="_blank" className="carousel-logo">
                  <img src={"/assets/amazon_partner.png"} alt="Amazon"/>
                </a>
                <a href="https://about.google/" target="_blank" className="carousel-logo">
                  <img src={"/assets/google_partner.png"} alt="Google"/>
                </a>
                <a href="https://about.meta.com/br/" target="_blank" className="carousel-logo">
                  <img src={"/assets/meta_partner.png"} alt="Meta"/>
                </a>
                <a href="https://stripe.com/br" target="_blank" className="carousel-logo">
                  <img src={"/assets/stripe_partner.png"} alt="Stripe"/>
                </a>
                <a href="https://pluggy.ai/" target="_blank" className="carousel-logo">
                  <img src={"/assets/pluggy_partner.png"} alt="Pluggy"/>
                </a>
                <a href="https://vercel.com/" target="_blank" className="carousel-logo">
                  <img src={"/assets/vercel_partner.png"} alt="Vercel"/>
                </a>
                <a href="https://openai.com/" target="_blank" className="carousel-logo">
                  <img src={"/assets/open_ai_partner.png"} alt="OpenAI"/>
                </a>
                <a href="https://github.com/" target="_blank" className="carousel-logo">
                  <img src={"/assets/github_partner.png"} alt="GitHub"/>
                </a>
                <a href="https://br.tradingview.com/" target="_blank" className="carousel-logo">
                  <img src={"/assets/tradingview_partner.png"} alt="TradingView"/>
                </a>
              </div>
            </div>
          </div>
          <div className="relative w-full flex">
            <div className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white z-10">
              {listAbout.map((listAbouts, index) => (
                  <div
                      key={index}
                      className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-full px-4 sm:w-auto mx-auto sm:mx-0"
                  >
                    <div className="flex w-full">
                      <div className="flex items-center justify-center bg-indigo-100 w-12 h-12 mr-6 rounded-full">
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
        <div className="relative overflow-hidden bg-white px-5 md:px-0" id="feature">
          <div className="pb-20 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="lg:max-w-lg mb-10">
                <h1 className="text-4xl font-medium tracking-tight text-gray-900 sm:text-6xl">
                  <span className="text-black">Veja sem medo</span><br/>
                  <span className="text-indigo-950">Investimentos</span><br/>
                  <span className="text-indigo-800">Transações</span><br/>
                  <span className="text-indigo-600">Saldos</span><br/>
                </h1>
                <div className="mt-4 text-xl text-gray-600 flex flex-col">
                  <span>Compramos sua dor de ficar saindo de banco em banco para olhar seus extratos financeiros.</span>
                  <small className="mt-5">
                    Saiba mais sobre nossa parceira&nbsp;
                    <a href="https://www.pluggy.ai/" target="_blank" className="font-bold hover:opacity-80 text-indigo-950 underline">Pluggy</a> que
                    disponibiliza o Open Finance de forma segura.
                  </small>
                </div>
              </div>
              {/* Decorative image grid */}
              <div
                  aria-hidden="true"
                  className="pointer-events-none lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="lg:absolute transform sm:left-1/2 sm:top-0 sm:translate-x-0 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="absolute w-screen h-full"/>
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
        </div>
        <div className="bg-white pb-24 sm:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              {stats.map((stat) => (
                  <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7">{stat.name}</dt>
                    <dd className={"order-first text-3xl font-semibold tracking-tight sm:text-5xl ${stat.cls}"}>
                      {stat.value}
                    </dd>
                  </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="relative isolate bg-gradient-to-l from-indigo-900 overflow-hidden bg-gray-900 py-24 sm:py-32">
          <div
              className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
              aria-hidden="true"
          >
            <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                style={{
                  clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
          </div>
          <div
              className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
              aria-hidden="true"
          >
            <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                style={{
                  clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Inteligência Artificial para te auxiliar nas economias!
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                <img
                    alt="AI Ingrid"
                    src={"/assets/ai_ingrid.png"}
                    className="w-24 h-24 object-cover object-center float-right ml-3"
                />
                <b>Assinatura Premium</b> apresenta a Inteligência Artificial <b>Ingrid</b>, que irá lhe ajudar a
                tomar as melhores decisões financeiras de acordo com seus gastos do dia a dia.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <a
                  target="_blank"
                  href="https://app.mexpenses.com.br/#/auth/register/premium"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Assinar <span className="font-bold uppercase">agora</span>
              </a>
              <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                {stats_assistant.map((stat) => (
                    <div key={stat.name} className="flex flex-col-reverse">
                      <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                      <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                    </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </>
  );
};

export default Main;

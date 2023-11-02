import React from "react";
import ButtonPrimary from "./misc/ButtonPrimary";
import {useRouter} from "next/router";
import {Store} from "./storeApp";

const PluggyIA = ({
                    listAbout = [
                      {
                        name: "Para conectar com a Pluggy",
                        info: "15+ Bancos",
                        icon: "/assets/Icon/heroicons_sm-user.svg",
                      },
                      {
                        name: "Exclusivo para os brasileiros",
                        info: "Brasil",
                        icon: "/assets/Icon/gridicons_location.svg",
                      },
                      {
                        name: "Servidores na AWS",
                        info: "Segurança e privacidade",
                        icon: "/assets/Icon/bx_bxs-server.svg",
                      },
                    ],
                  }) => {
  const router = useRouter();
  return (
      <>
        <div
            className="max-w-screen-xl mt-40 px-8 xl:px-5 mx-auto"
            id="about"
        >
          <div className="flex flex-row items-center justify-center flex-wrap w-full" style={{ gap: 15 }}>
            <Store/>
          </div>
          <div className="grid grid-flow-row sm:grid-flow-col grid-rows-1 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
            <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                Saia das planilhas e venha ter um <strong className="text-green-600">brilho financeiro!</strong>
              </h1>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-600 leading-normal mt-5">
                +Inteligência Artificial
              </h2>
              <p className="text-black-500 mt-4 mb-6">
                Veja nossas ferramentas e crie uma conta de forma <b className="text-green-600">Gratuita</b> ou assine nossos planos para ganhar <b className="text-green-600">1 mês grátis</b>.
              </p>
              <a href="https://app.mexpenses.com.br/#/auth/register/basic">
                <ButtonPrimary>Quero criar uma conta</ButtonPrimary>
              </a>
            </div>
            <div className="flex w-full">
              <div className="h-full w-full">
                <img
                    width={700}
                    alt="Mexpenses Illustration"
                    src={`${router.basePath}/assets/Illustration1.webp`}
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full flex flex-col items-center justify-center">
              <h1 className="mb-5 text-4xl text-start text-gray-900 font-medium">Segurança e serviços proporcionados por algumas empresas</h1>
              <p className="text-secondary text-xl text-start">
                Veja algumas das maiores empresas do mundo que estão integradas na <b>Mexpenses</b>.
              </p>
              <div className="w-full pt-10 carousel-logos">
                <a href="https://aws.amazon.com/pt/?nc2=h_lg" target="_blank" className="carousel-logo">
                  <img src={`${router.basePath}/assets/amazon_partner.png`} width={100} alt="Amazon"/>
                </a>
                <a href="https://about.google/" target="_blank" className="carousel-logo">
                  <img src={`${router.basePath}/assets/google_partner.png`} width={100} alt="Google"/>
                </a>
                <a href="https://about.meta.com/br/" target="_blank" className="carousel-logo">
                  <img src={`${router.basePath}/assets/meta_partner.png`} width={100} alt="Meta"/>
                </a>
                <a href="https://stripe.com/br" target="_blank" className="carousel-logo">
                  <img src={`${router.basePath}/assets/stripe_partner.png`} width={50} alt="Stripe"/>
                </a>
                <a href="https://pluggy.ai/" target="_blank" className="carousel-logo">
                  <img src={`${router.basePath}/assets/pluggy_partner.png`} width={100} alt="Pluggy"/>
                </a>
                <a href="https://vercel.com/" target="_blank" className="carousel-logo">
                  <img src={`${router.basePath}/assets/vercel_partner.png`} width={100} alt="Vercel"/>
                </a>
                <a href="https://openai.com/" target="_blank" className="carousel-logo">
                  <img src={`${router.basePath}/assets/open_ai_partner.png`} width={200} alt="OpenAI"/>
                </a>
                <a href="https://github.com/" target="_blank" className="carousel-logo">
                  <img src={`${router.basePath}/assets/github_partner.png`} width={60} alt="GitHub"/>
                </a>
                <a href="https://br.tradingview.com/" target="_blank" className="carousel-logo">
                  <img src={`${router.basePath}/assets/tradingview_partner.png`} width={40} alt="TradingView"/>
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
                      <div className="flex items-center justify-center bg-blue-100 w-12 h-12 mr-6 rounded-full">
                        <img src={listAbouts.icon} className="h-6 w-6" alt="User" />
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
        <div className="relative overflow-hidden bg-white px-5 md:px-0">
          <div className="pb-20 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg mb-10">
                <h1 className="text-4xl font-medium tracking-tight text-gray-900 sm:text-6xl">
                  Em tempo real <span className="text-purple-600">Transações</span><br/>
                  <span className="text-green-700">Saldos</span><br/>
                  <span className="text-orange-500">Investimentos</span>
                </h1>
                <p className="mt-4 text-xl text-gray-600">
                  Junte-se ao <span className="font-medium">Open Finance</span> e
                  conecte suas contas de forma segura com a <span className='text-pink-600'>Pluggy</span>.
                  Compramos sua dor de ficar saindo de banco em banco para olhar suas finanças, tenha suas contas e despesas <span className="font-semibold">em um único lugar aqui!</span>
                </p>
              </div>
              <div>
                {/* Decorative image grid */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="lg:absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-44 w-44 overflow-hidden rounded-lg">
                          <img
                              alt="Nubank"
                              src={`${router.basePath}/assets/nubank.png`}
                              className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-44 w-44 overflow-hidden rounded-lg">
                          <img
                              alt="Wise"
                              src={`${router.basePath}/assets/wise.webp`}
                              className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-44 w-44 overflow-hidden rounded-lg">
                          <img
                              alt="BB"
                              src={`${router.basePath}/assets/bb.png`}
                              className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-44 w-44 overflow-hidden rounded-lg">
                          <img
                              alt="Itaú"
                              src={`${router.basePath}/assets/itau.png`}
                              className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-44 w-44 overflow-hidden rounded-lg">
                          <img
                              alt="Santander"
                              className="h-full w-full object-cover object-center"
                              src={`${router.basePath}/assets/santander.png`}
                          />
                        </div>
                        <div className="h-44 w-44 overflow-hidden rounded-lg">
                          <img
                              alt="XP Investimentos"
                              src={`${router.basePath}/assets/xp.png`}
                              className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-44 w-44 overflow-hidden rounded-lg">
                          <img
                              alt="Inter"
                              src={`${router.basePath}/assets/inter.png`}
                              className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-44 w-44 overflow-hidden rounded-lg">
                          <img
                              alt="Bradesco"
                              src={`${router.basePath}/assets/bradesco.png`}
                              className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-44 w-44 overflow-hidden rounded-lg">
                          <img
                              alt="Rico"
                              className="h-full w-full object-cover object-center"
                              src={`${router.basePath}/assets/rico.jpg`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                    target="_blank"
                    href="https://pluggy.ai"
                    className="inline-block rounded-md border border-transparent bg-pink-600 px-8 py-3 text-center font-medium text-white hover:bg-pink-700 mt-5"
                >
                  Conhecer a Pluggy
                </a>
              </div>
            </div>
          </div>
        </div>
        <video
            loop
            muted
            autoPlay
            width="100%"
            src={`${router.basePath}/assets/publicity.mp4`}
        />
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
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
              <h2 className="text-4xl font-medium tracking-tight text-white sm:text-6xl">
                <span className="float-left">Experimente uma Inteligência Artificial aprimorada</span>
                <img src={`${router.basePath}/assets/ai_ingrid.png`} className="w-24 h-24 object-cover object-center float-right" alt="AI Ingrid"/>
              </h2>
              <p className="mt-6 text-lg leading-8 text-white">
                Estamos empolgados em apresentar a Inteligência Artificial <b>Ingrid</b>, que está na <b>Mexpenses</b> para ajudar os usuários com suas finanças e aprender sobre vários pontos de acordo com seus dados. Experimente agora criando uma conta <b>Premium</b>.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                <a
                    href="https://app.mexpenses.com.br/#/auth/register/premium"
                    className="inline-block rounded-md border border-transparent bg-pink-600 px-8 py-3 text-center font-medium text-white hover:bg-pink-700 mt-5"
                >
                  Criar uma conta
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default PluggyIA;

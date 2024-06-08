import React from "react";

const Feature = () => {
  return (
      <>
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="text-indigo-500">Novas tendências</span> de mãos dadas
            </h2>
            <p className="mt-4 text-gray-500">
              Estamos revolucionando o modo de como você cuida dos seus gastos com as novas tendências do mercado financeiro.
            </p>
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  <div className="bg-indigo-100 mb-3 text-indigo-500 flex items-center justify-center h-8 w-8 rounded-lg font-bold">
                    1
                  </div>
                  &nbsp;Sem anúncios
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Não há anúncios, nem distrações na sua tela, nem rastreamento bizarro na Mex. Faça o que tem que fazer
                  sem atrasos.
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  <div className="bg-indigo-100 mb-3 text-indigo-500 flex items-center justify-center h-8 w-8 rounded-lg font-bold">
                    2
                  </div>
                  Open Finance
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Conecte contas reais para visualizar transações, por meio de nossa conciliação bancária
                  com a <a href="https://www.pluggy.ai/" target="_blank" className="font-bold hover:opacity-80 text-indigo-950 underline">Pluggy</a>.
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  <div className="bg-indigo-100 mb-3 text-indigo-500 flex items-center justify-center h-8 w-8 rounded-lg font-bold">
                    3
                  </div>
                  Inteligência Artificial
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Tenha dicas semanais e individuais com a Ingrid, por meio de nossa integração em tempo real com seus
                  dados.
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  <div className="bg-indigo-100 mb-3 text-indigo-500 flex items-center justify-center h-8 w-8 rounded-lg font-bold">
                    4
                  </div>
                  Criptomoedas
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Acompanhe as criptomoedas mais negociadas pelas principais instituições financeiras.
                </dd>
              </div>
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
                alt="Sem anúncios"
                src={"/assets/topic_1.jpg"}
                className="rounded-lg bg-gray-100 h-full w-full object-cover object-center"
            />
            <img
                alt="Open Finance"
                src={"/assets/topic_2.jpg"}
                className="rounded-lg bg-gray-100 h-full w-full object-cover object-center"
            />
            <img
                alt="Inteligência Artificial"
                src={"/assets/topic_4.jpg"}
                className="rounded-lg bg-gray-100 h-full w-full object-cover object-center"
            />
            <img
                alt="Cripto"
                src={"/assets/topic_3.jpg"}
                className="rounded-lg bg-gray-100 h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="bg-white">
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
                  Mude para a <span className="font-bold">Mexpenses</span> e faça acontecer sem aquele lenga-lenga e telas difíceis de lidar.
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
        </div>
      </>
  );
};

export default Feature;

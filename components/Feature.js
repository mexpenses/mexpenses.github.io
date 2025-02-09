import React from "react";

// const stats_assistant = [
//   { name: 'Geração de relatórios', value: 'Peça no Chat' },
//   { name: '98% aplicáveis', value: 'Dicas financeiras' },
//   { name: '24h por dia', value: 'Disponibilidade' },
//   { name: '+4.000', value: 'Dicas geradas' },
// ];

const Feature = () => {
  return (
      <>
        <div
            id="feature"
            className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="text-blue-500">Novas tendências</span> de mãos dadas
            </h2>
            <p className="mt-4 text-gray-500">
              Estamos revolucionando o modo de como você cuida dos seus gastos com as novas tendências do mercado
              financeiro.
            </p>
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  <div
                      className="bg-blue-100 mb-3 text-blue-500 flex items-center justify-center h-8 w-8 rounded-lg font-bold">
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
                  <div
                      className="bg-blue-100 mb-3 text-blue-500 flex items-center justify-center h-8 w-8 rounded-lg font-bold">
                    2
                  </div>
                  Cofrinhos
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Crie metas para suas conquistas e acompanhe os rendimentos com base no CDI, Taxa Selic ou IPCA.
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  <div
                      className="bg-blue-100 mb-3 text-blue-500 flex items-center justify-center h-8 w-8 rounded-lg font-bold">
                    3
                  </div>
                  Inteligência Artificial
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Tenha dicas semanais com a Ingrid e economize seu tempo para tomar as decisões.
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  <div
                      className="bg-blue-100 mb-3 text-blue-500 flex items-center justify-center h-8 w-8 rounded-lg font-bold">
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
        {/*<div className="relative isolate bg-gradient-to-l from-blue-900 overflow-hidden bg-gray-900 py-24 sm:py-32">*/}
        {/*  <div*/}
        {/*      className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"*/}
        {/*      aria-hidden="true"*/}
        {/*  >*/}
        {/*    <div*/}
        {/*        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"*/}
        {/*        style={{*/}
        {/*          clipPath:*/}
        {/*              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',*/}
        {/*        }}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*  <div*/}
        {/*      className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"*/}
        {/*      aria-hidden="true"*/}
        {/*  >*/}
        {/*    <div*/}
        {/*        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"*/}
        {/*        style={{*/}
        {/*          clipPath:*/}
        {/*              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',*/}
        {/*        }}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*  <div className="mx-auto max-w-7xl px-6 lg:px-8">*/}
        {/*    <div className="mx-auto max-w-2xl lg:mx-0">*/}
        {/*      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">*/}
        {/*        Inteligência Artificial para te auxiliar nas economias!*/}
        {/*      </h2>*/}
        {/*      <p className="mt-6 text-lg leading-8 text-gray-300">*/}
        {/*        <img*/}
        {/*            alt="AI Ingrid"*/}
        {/*            src={"/assets/ai_ingrid.png"}*/}
        {/*            className="w-24 h-24 object-cover object-center float-right ml-3"*/}
        {/*        />*/}
        {/*        <b>Assinatura Premium</b> apresenta a Inteligência Artificial <b>Ingrid</b>, que irá lhe ajudar a*/}
        {/*        tomar as melhores decisões financeiras de acordo com seus gastos do dia a dia.*/}
        {/*      </p>*/}
        {/*    </div>*/}
        {/*    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">*/}
        {/*      <a*/}
        {/*          target="_blank"*/}
        {/*          href="https://app.mexpenses.com.br/#/auth/register/premium"*/}
        {/*          className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"*/}
        {/*      >*/}
        {/*        Assinar <span className="font-bold uppercase">agora</span>*/}
        {/*      </a>*/}
        {/*      <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">*/}
        {/*        {stats_assistant.map((stat) => (*/}
        {/*            <div key={stat.name} className="flex flex-col-reverse">*/}
        {/*              <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>*/}
        {/*              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>*/}
        {/*            </div>*/}
        {/*        ))}*/}
        {/*      </dl>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </>
  );
};

export default Feature;

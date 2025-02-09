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
                  Tenha dicas semanais com a Mex e economize seu tempo para tomar as decisões.
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
      </>
  );
};

export default Feature;

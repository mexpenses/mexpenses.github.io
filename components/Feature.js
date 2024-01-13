import React from "react";
import Image from "next/image";
import {useRouter} from "next/router";
import CTO from '../public/assets/cto.png';
import Logo from '../public/assets/mexpenses-black.svg';

const features = [
  "Criptomoedas",
  "Taxas de juros",
  "Mercado de Ações",
  "Entradas e saídas",
  "Controle de Bancos",
  "Controle de Cartões",
  "Controle de Faturas",
  "Controle de Despesas",
  "Análises financeiras",
  "Suporte via WhatsApp",
  "Calculadora de impostos",
  "Exportar dados para Excel",
  "Open Finance com a Pluggy",
  "Bancos mais próximos da sua localização",
  "Inteligência Artificial para geração de relatórios<br/><span class='font-bold text-blue-600'>E MUITO MAIS...</span>"
];

const Feature = () => {
  const router = useRouter();

  return (
      <>
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <Logo className="w-auto mx-auto h-12"/>
            <figure className="mt-10">
              <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>
                  “Acreditamos que é possível mudar a realidade financeira das pessoas, através das
                  ferramentas e Inteligência Artificial do nosso Software.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center justify-center flex-col">
                <Image src={CTO} width={50} height={50} className="mx-auto rounded-full" alt="Logo"/>
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-gray-900">Ingrid Matuques</div>
                  <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="text-gray-600">CTO da Mexpenses</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
        <div className="bg-white">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                NÃO somos só mais um app!
              </h2>
              <p className="mt-4 text-gray-500">
                Estamos aqui para te proporcionar algo além do controle financeiro.
                Estamos revolucionando o modo de como você cuida dos seus gastos, através de nossa Inteligência Artificial, onde ela irá realizar análises,
                apontar erros e soluções para que você possa estar tendo evoluções notáveis na sua saúde financeira.&nbsp;
                <span className="font-bold text-blue-600">Invista em você e sinta-se abraçado com a gente!</span>
              </p>
              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Controle Financeiro e Open Finance</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    Além de fazer o controle de seus gastos, tenha contas reais conectadas para visualização de forma segura
                    e simples, através de nossa integração com a <span className="font-bold">Pluggy</span>.
                  </dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Acesso multiplataforma</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    Você irá acessar a mesma conta tanto na web como no nosso futuro aplicativo sem cobranças.
                  </dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Criptomoedas</dt>
                  <dd className="mt-2 text-sm text-gray-500">Acompanhe as criptomoedas mais negociadas pelos principais bancos digitais.</dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Inteligência Artificial</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    Tenha de forma automática dicas diárias e individuais com a Ingrid, por meio de nossa integração em tempo real com seus dados.
                  </dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Mercado de Ações</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    Acompanhe grandes e médias empresas no mercado da Ibovespa e Nasdaq em tempo real.
                  </dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Imposto de Renda</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    <span className="font-bold">Está com dúvidas sobre os descontos da sua folha de pagamento?</span> Calcule de forma exata
                    os valores do <span className="font-bold">INSS e IRRF</span> com base no seu salário bruto e dependentes.
                  </dd>
                </div>
              </dl>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
              <img
                  alt="Sinta-se abraçado"
                  src={`${router.basePath}/assets/topic_1.jpg`}
                  className="rounded-lg bg-gray-100 h-full w-full object-cover object-center"
              />
              <img
                  alt="Luxo"
                  src={`${router.basePath}/assets/topic_2.jpg`}
                  className="rounded-lg bg-gray-100 h-full w-full object-cover object-center"
              />
              <img
                  alt="Sonhos"
                  src={`${router.basePath}/assets/topic_3.jpg`}
                  className="rounded-lg bg-gray-100 h-full w-full object-cover object-center"
              />
              <img
                  alt="Carreira e negócios"
                  src={`${router.basePath}/assets/topic_4.jpg`}
                  className="rounded-lg bg-gray-100 h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="mx-auto max-w-7xl pb-24 sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
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
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Interface simples e sem baboseira
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Para todas as pessoas. Mude para a <span className="font-bold">Mexpenses</span> e faça acontecer.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <a
                      target="_blank"
                      href="https://app.mexpenses.com.br/#/auth/register/free"
                      className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Teste <span className="font-bold uppercase">Grátis</span>
                  </a>
                  <a
                      target="_blank"
                      className="text-sm font-semibold leading-6 text-white"
                      href="https://app.mexpenses.com.br/#/auth/register/basic"
                  >
                    Quero mais benefícios&nbsp;<span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <div className="relative mt-16 h-80 lg:mt-8">
                <img
                    width={1824}
                    height={1080}
                    alt="App screenshot"
                    src={`${router.basePath}/assets/app.png`}
                    className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
              <h2 className="text-2xl font-bold text-gray-900">A plataforma ideal?</h2>
              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                <div className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                        src={`${router.basePath}/assets/description_1.jpg`}
                        alt="Simplicidade"
                        className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <span className="absolute inset-0" />
                    Simplicidade
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    Controle e foque somente no necessário
                  </p>
                </div>
                <div className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                        alt="IA Ingrid"
                        src={`${router.basePath}/assets/description_2.jpg`}
                        className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <span className="absolute inset-0" />
                    Confusões em ideias
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    Aplique as dicas da Ingrid em tempo real
                  </p>
                </div>
                <div className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                        alt="Sem complicações"
                        src={`${router.basePath}/assets/description_3.jpg`}
                        className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <span className="absolute inset-0" />
                    Dificuldades não existem
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    Rápido aprendizado no uso da plataforma
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
            className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
            id="feature"
        >
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
            <div className="flex w-full justify-end">
              <div className="h-full w-full p-4">
                <img
                    width={700}
                    alt="Mexpenses Illustration"
                    src={`${router.basePath}/assets/Illustration2.webp`}
                />
              </div>
            </div>
            <div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12">
              <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
                Tudo que você precisa para sua gestão financeira
              </h3>
              <b className="my-2 text-black-500">
                A Mex te entrega
              </b>
              <ul className="text-black-500 self-start list-inside ml-8">
                {features.map((feature, i) =>
                    <li
                        key={i}
                        className="relative circle-check custom-list py-1"
                        dangerouslySetInnerHTML={{ __html: feature }}
                    />
                )}
              </ul>
            </div>
          </div>
          <div className="xl:px-32">
            <div className="flex flex-row flex-wrap md:flex-nowrap items-center justify-between visible gap-10">
              <img src={`${router.basePath}/assets/mobile.png`} width={560} alt="App"/>
              <div className="w-full mb-10 text-start">
                <h1 className="text-3xl font-medium text-black">
                  <span className="font-medium text-blue-600">Em breve</span> conheça nosso aplicativo
                </h1>
                <div className="mt-6 text-xl leading-9">
                  Estamos trabalhando para que você tenha em seu bolso mais facilidade
                  e controle de suas finanças em qualquer lugar. Seja após sair de um mercado, loja, lanchonete e etc.
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default Feature;

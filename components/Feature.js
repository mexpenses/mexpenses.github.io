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
  "Histórico de pagamentos",
  "Calculadora de impostos",
  "Exportar dados para Excel",
  "Conciliação bancária com a Pluggy",
  "Bancos mais próximos da sua localização",
  "Inteligência Artificial para geração de relatórios..."
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
              <blockquote className="text-left text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
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
        <div className="bg-white border-t-8 border-gray-200">
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
                  <dt className="font-medium text-gray-900">Sem anúncios</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    Não há anúncios, nem distrações na sua tela, nem rastreamento bizarro na Mex. Faça o que tem que fazer sem atrasos.
                  </dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Open Finance</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    Conecte contas reais para visualizar transações, por meio de nossa conciliação bancária com a <span className="font-bold">Pluggy</span>.
                  </dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Criptomoedas</dt>
                  <dd className="mt-2 text-sm text-gray-500">Acompanhe as criptomoedas mais negociadas pelos principais bancos digitais.</dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Inteligência Artificial</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    Tenha dicas diárias e individuais com a Ingrid, por meio de nossa integração em tempo real com seus dados.
                  </dd>
                </div>
              </dl>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
              <img
                  alt="Sem anúncios"
                  src={`${router.basePath}/assets/topic_1.jpg`}
                  className="rounded-lg bg-gray-100 h-full w-full object-cover object-center"
              />
              <img
                  alt="Open Finance"
                  src={`${router.basePath}/assets/topic_2.jpg`}
                  className="rounded-lg bg-gray-100 h-full w-full object-cover object-center"
              />
              <img
                  alt="Cripto"
                  src={`${router.basePath}/assets/topic_3.jpg`}
                  className="rounded-lg bg-gray-100 h-full w-full object-cover object-center"
              />
              <img
                  alt="Inteligência Artificial"
                  src={`${router.basePath}/assets/topic_4.jpg`}
                  className="rounded-lg bg-gray-100 h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
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
              <div className="mx-auto max-w-md text-left lg:mx-0 lg:flex-auto lg:py-32">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Interface simples e sem baboseira
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Para todas as pessoas. Mude para a <span className="font-bold">Mexpenses</span> e faça acontecer.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <a
                      target="_blank"
                      href="https://app.mexpenses.com.br/auth/register/free"
                      className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Teste <span className="font-bold uppercase">gratuitamente</span>
                  </a>
                  <a
                      target="_blank"
                      className="text-sm font-semibold leading-6 text-white"
                      href="https://app.mexpenses.com.br/auth/register/basic"
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
        <div
            className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-10 mx-auto"
            id="feature"
        >
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
            <div className="flex w-full justify-end">
              <div className="h-full w-full p-4">
                <img
                    width={700}
                    alt="Mexpenses Illustration"
                    src={`${router.basePath}/assets/Illustration2.webp`}
                />
              </div>
            </div>
            <div className="flex flex-col ml-auto w-full lg:w-9/12">
              <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
                Tudo que você precisa
              </h3>
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
          <div className="bg-black py-20 px-6 lg:px-24 mx-auto max-w-5xl rounded-lg flex flex-col justify-start text-left mt-14 mb-24">
            <h2 className="text-white text-4xl md:text-6xl tracking-tight">
              Mas eu devo confiar?
            </h2>
            <p className="text-slate-400 mt-4 text-lg md:text-xl">
              Você não é obrigado a registrar qualquer informação que seja "sensível".
            </p>
            <div className="flex mt-5">
              <a
                  href="https://app.mexpenses.com.br/auth/register/free"
                  className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-white text-black border-2 border-transparent"
              >
                Teste <span className="font-bold uppercase">gratuitamente</span>
              </a>
            </div>
          </div>
          <div className="mb-24 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
            <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png" className="w-12" width={512} height={512} alt="burger illustration" />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                    Planejamento
                  </h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    Aqui você está organizando seus gastos na plataforma.
                  </p>
                </div>
                <a className="flex items-center justify-between group-hover:text-secondary">
                  <span className="text-sm">Etapa 1</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img src="https://cdn-icons-png.flaticon.com/512/4341/4341134.png" className="w-12" width={512} height={512} alt="burger illustration" />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                    Música para seus ouvidos
                  </h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    Você está notando uma grande diferença na visão das suas finanças.
                  </p>
                </div>
                <a className="flex items-center justify-between group-hover:text-secondary">
                  <span className="text-sm">Etapa 2</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img src="https://cdn-icons-png.flaticon.com/512/4341/4341160.png" className="w-12" width={512} height={512} alt="burger illustration" />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                    Especialista
                  </h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    Acabou de se tornar um especialista nas economias e controle do seu dinheiro.
                  </p>
                </div>
                <a className="flex items-center justify-between group-hover:text-secondary">
                  <span className="text-sm">Etapa 3</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="group relative bg-gray-50 dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
                <img src="https://cdn-icons-png.flaticon.com/512/4341/4341025.png" className="w-12" width={512} height={512} alt="burger illustration" />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                    O tempo é um luxo
                  </h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    Os 30 minutos que você gastava para organizar suas finanças se torna apenas 5 minutos.
                  </p>
                </div>
                <a href="#" className="flex items-center justify-between group-hover:text-secondary">
                  <span className="text-sm">Última etapa</span>
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-7xl">
            <div className="mb-12 space-y-2">
              <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white text-left">Nossas futuras ideias</h2>
              <p className="lg:w-6/12 text-gray-600 dark:text-gray-300 text-left">
                Estamos trabalhando constantemente para simplificar tudo.
              </p>
            </div>
            <div className="flex flex-row flex-wrap md:flex-nowrap items-center justify-between visible gap-10 mb-14">
              <img src={`${router.basePath}/assets/mobile.png`} width={560} alt="App"/>
              <div className="w-full mb-10 text-start">
                <h1 className="text-3xl font-medium text-black">
                  <span className="font-medium text-indigo-600">Em breve</span> conheça nosso aplicativo
                </h1>
                <div className="mt-6 text-xl leading-9">
                  Estamos trabalhando para que você tenha em seu bolso mais facilidade
                  e controle de suas finanças em qualquer lugar. Seja após sair de um mercado, loja, lanchonete e etc.
                </div>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
                <div className="relative overflow-hidden rounded-xl">
                  <img src={`${router.basePath}/assets/ia_love_realtime_1.jpg`} alt="Casal" loading="lazy" width={1000} height={667} className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
                </div>
                <div className="mt-6 relative">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    Já imaginou compartilhar os gastos em tempo real com seu parceiro? ❤️
                  </h3>
                  <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                    Para cada transação, despesa ou fatura que ele(a) registrar na Mex, será enviado automaticamente para você na mesma hora.
                  </p>
                  <a className="inline-block">
                    <span className="text-indigo-500 dark:text-blue-300">Em breve</span>
                  </a>
                </div>
              </div>
              <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
                <div className="relative overflow-hidden rounded-xl">
                  <img src={`${router.basePath}/assets/description_1.jpg`} alt="Metas financeiras" loading="lazy" width={1000} height={667} className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
                </div>
                <div className="mt-6 relative">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    Defina metas financeiras para alcançar seus objetivos
                  </h3>
                  <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                    Quais seus planos para o futuro? Um carro, um imóvel ou celular? Acompanhe de perto cada etapa das suas economias.
                  </p>
                  <a className="inline-block">
                    <span className="text-indigo-500 dark:text-blue-300">Em breve</span>
                  </a>
                </div>
              </div>
              <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
                <div className="relative overflow-hidden rounded-xl">
                  <img src={`${router.basePath}/assets/perfil_consumo.jpg`} alt="Perfil de consumo" loading="lazy" width={1000} height={667} className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
                </div>
                <div className="mt-6 relative">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    Perfil de consumo
                  </h3>
                  <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                    Está com dúvidas aonde você mais está gastando? Vamos separar de forma simples e visual para você identificar aonde está saindo seu dinheiro.
                  </p>
                  <a className="inline-block">
                    <span className="text-indigo-500 dark:text-blue-300">Em breve</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default Feature;

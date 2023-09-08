import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import {useRouter} from "next/router";

const features = [
  "Faturas",
  "Cartões",
  "Criptomoedas",
  "Taxas de juros",
  "Suporte WhatsApp",
  "Cálculadora de impostos",
  "Bolsa de valores Ibovespa",
  "Entradas e saídas bancárias",
  "Notificações de vencimentos",
  "Bancos mais próximos de você",
  "Exportar dados em arquivo CSV para Excel",
  "Análises de receitas, investimentos e despesas",
  "Despesas fixas mensais, parceladas e na data de sua escolha",
  "Conectar suas contas bancárias com a Pluggy para visualização",
  "Converse e receba dicas diárias com a Inteligência Artificial Ingrid",
  "Em breve perfil de consumo",
  "Em breve definir metas financeiras",
  "Em breve histórico com filtro de pesquisa sobre entradas, saídas e muito mais",
  "Veja mais nas tabelas de assinaturas..."
];

const Feature = () => {
  const router = useRouter();
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <img
                width={700}
                alt="Mexpenses Illustration"
                src={`${router.basePath}/assets/Illustration2.png`}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
        <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            Tudo que você precisa para sua gestão financeira
          </h3>
          <b className="my-2 text-black-500">
            A Mex te entrega
          </b>
          <ul className="text-black-500 self-start list-inside ml-8">
            {features.map((feature, _i) => (
              <motion.li
                className="relative circle-check custom-list py-1"
                custom={{duration: 2}}
                variants={scrollAnimation}
                key={feature}
                whileHover={{
                scale : 1.1,
                transition: {
                  duration: .2
                }
                }}>
                  {feature}
              </motion.li>
              )
            )}
          </ul>
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <ScrollAnimationWrapper>
        <motion.div className="xl:px-32" variants={scrollAnimation}>
          <div className="flex flex-row flex-wrap md:flex-nowrap items-center justify-between visible gap-10">
            <img src={`${router.basePath}/assets/mobile.png`} width={560} alt="App"/>
            <div className="w-full mb-10 text-start">
              <h1 className="text-3xl font-bold text-black">
                <span className="font-bold text-blue-600">Em breve</span> conheça nosso aplicativo
              </h1>
              <div className="mt-6 text-xl leading-9">
                Estamos trabalhando para que você tenha em seu bolso mais facilidade
                e controle de suas finanças em qualquer lugar. Seja após sair de um mercado, loja, lanchonete e etc.
              </div>
            </div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Feature;

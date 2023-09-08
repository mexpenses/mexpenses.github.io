import React, { useMemo } from "react";
import Contributors from "./Contributors";
import ButtonPrimary from "./misc/ButtonPrimary";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import { Subscriptions } from "./Subscriptions";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
      <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
                variants={scrollAnimation}
                className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed text-center"
            >
              Antes de começar veja nossas assinaturas
            </motion.h3>
            <motion.p
                variants={scrollAnimation}
                className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Comece com uma conta e viva uma nova experiência <b>Mex</b>
            </motion.p>
          </ScrollAnimationWrapper>
          <Subscriptions/>
        </div>
        <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
          <div className="flex flex-col w-full my-16">
            <ScrollAnimationWrapper>
              <motion.h3
                  variants={scrollAnimation}
                  className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
                Seus dados estão seguros
              </motion.h3>
              <motion.p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12" variants={scrollAnimation}>
                Garantimos a segurança dos seus dados por estar hospedado em um dos maiores players de servidores do mundo,
                veja abaixo algumas das milhares de empresas que utilizam serviços da Amazon Web Services no mundo todo.
              </motion.p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <motion.div className="py-12 w-full px-8 mt-16" variants={scrollAnimation}>
                <Maps className="w-full h-auto" />
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <motion.div className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap" variants={scrollAnimation}>
                {/* <Netflix className="h-18 w-auto" /> */}
                <img
                    src="/assets/Icon/amazon.png"
                    className="h-14 w-auto mt-4 lg:mt-2"
                    alt=""
                />
                <img
                    src="/assets/Icon/netflix.png"
                    className="h-14 w-auto mt-2 lg:mt-0"
                    alt=""
                />
                <img
                    src="/assets/Icon/reddit.png"
                    className="h-12 w-auto mt-2 lg:mt-0"
                    alt=""
                />
                <img
                    src="/assets/Icon/discord.png"
                    className="h-14 w-auto mt-2 lg:mt-0"
                    alt=""
                />
                <img
                    src="/assets/Icon/spotify.png"
                    className="h-12 w-auto mt-2 lg:mt-0"
                    alt=""
                />
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
          <div className="flex flex-col w-full my-16" id="testimoni">
            <ScrollAnimationWrapper>
              <motion.h3
                  variants={scrollAnimation}
                  className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
                Conheça as pessoas que estão fazendo a <b>Mexpenses</b> virar realidade
              </motion.h3>
              <motion.p
                  variants={scrollAnimation}
                  className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
              >
                Você tem o interesse de levar a simplicidade das finanças para todas pessoas? Veja mais informações logo abaixo para entrar em contato conosco.
              </motion.p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="w-full flex flex-col py-12">
              <motion.div variants={scrollAnimation}>
                <Contributors />
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="relative w-full mt-16">
              <motion.div variants={scrollAnimation} custom={{duration: 3}}>
                <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white">
                  <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                    <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                      Quer participar da nossa ideia?
                    </h5>
                    <p>Fale conosco e seja um de nossos parceiros nos mandando um e-mail.</p>
                  </div>
                  <a target="_blank" href="mailto:mexpenses.app@gmail.com">
                    <ButtonPrimary>Manda e-mail</ButtonPrimary>
                  </a>
                </div>
                <div
                    className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                    style={{ filter: "blur(114px)" }}
                ></div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
  );
};

export default Pricing;

import React from "react";
import Contributors from "./Contributors";
import ButtonPrimary from "./misc/ButtonPrimary";
import Maps from "../public/assets/HugeGlobal.svg";
import { Subscriptions } from "./Subscriptions";

const Pricing = () => {

    return (
        <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14">
            <div className="flex flex-col w-full" id="pricing">
                <h3
                    className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed text-center"
                >
                    Antes de começar veja nossas assinaturas
                </h3>
                <p
                    className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
                >
                    Comece com uma conta e viva uma nova experiência <b>Mex</b>
                </p>
                <Subscriptions/>
            </div>
            <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
                <div className="flex flex-col w-full my-16">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
                        Seus dados estão seguros
                    </h3>
                    <p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12">
                        Garantimos a segurança dos seus dados por estar hospedado em um dos maiores players de servidores do mundo,
                        veja abaixo algumas das milhares de empresas que utilizam serviços da Amazon Web Services no mundo todo.
                    </p>
                    <div className="py-12 w-full px-8 mt-16">
                        <Maps className="w-full h-auto" />
                    </div>
                    <div className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap">
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
                    </div>
                </div>
                <div className="flex flex-col w-full my-16" id="contributors">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-full">
                        Conheça as pessoas que fizeram a <b>Mexpenses</b> virar realidade
                    </h3>
                    <p
                        className="leading-normal mx-auto mb-2 mt-4 w-full sm:w-7/12 lg:w-6/12"
                    >
                        Você tem o interesse de levar a simplicidade das finanças para todas pessoas? Veja mais informações logo abaixo para entrar em contato conosco.
                    </p>
                    <div className="w-full flex flex-col py-12">
                        <Contributors />
                    </div>
                    <div className="relative w-full mt-16">
                        <div>
                            <div className="absolute rounded-xl py-8 sm:py-14 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white">
                                <div className="flex flex-col text-left w-full sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;

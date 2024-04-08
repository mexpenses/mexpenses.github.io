import React from "react";
import ButtonPrimary from "./misc/ButtonPrimary";
import Maps from "../public/assets/HugeGlobal.svg";
import { Subscriptions } from "./Subscriptions";

const Pricing = () => {
    return (
        <div className="bg-gradient-to-b from-white-300 to-white-500 w-full pt-14">
            <div className="flex flex-col w-full" id="pricing">
                <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed text-left">
                        Antes de começar veja nossas assinaturas
                    </h3>
                    <p className="leading-normal text-left my-2 w-10/12 sm:w-7/12 lg:w-6/12">
                        Comece com uma conta e viva uma nova experiência <b>Mex</b>
                    </p>
                </div>
                <Subscriptions/>
            </div>
            <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
                <div className="flex flex-col w-full my-16">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed text-left">
                        Seus dados estão seguros
                    </h3>
                    <p className="leading-normal text-left my-2 w-full">
                        Garantimos a sua segurança por não te obrigar a registrar qualquer informação que seja sensível. Todos os dados estão armazenados em um dos maiores players de servidores do mundo,
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
            </div>
        </div>
    );
};

export default Pricing;

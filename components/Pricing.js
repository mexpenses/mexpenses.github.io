import React from "react";
import { Subscriptions } from "./Subscriptions";

const Pricing = () => {
    return (
        <div className="bg-gradient-to-b from-white-300 to-white-500 w-full pt-20">
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
            <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center" id="company">
                <div className="flex flex-col w-full my-10">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed text-left">
                        Seus dados estão seguros
                    </h3>
                    <p className="leading-normal text-left my-10 w-full">
                        Garantimos a sua segurança por não te obrigar a registrar qualquer informação que seja sensível.
                        Todos os dados estão armazenados em um dos maiores players de servidores do mundo,
                        veja abaixo algumas das milhares de empresas que utilizam serviços da <strong className="font-medium">AWS (Amazon Web Services)</strong> no
                        mundo todo.
                    </p>
                    <div className="w-full flex justify-center items-center">
                        <div className="flex justify-start items-center gap-10 lg:gap-20 flex-wrap">
                            <img
                                src="/assets/itau_aws.png"
                                className="h-12"
                                alt="Itaú"
                            />
                            <img
                                src="/assets/inter_aws.png"
                                className="h-10"
                                alt="Inter"
                            />
                            <img
                                src="/assets/c6_bank_aws.png"
                                className="h-7"
                                alt="C6 Bank"
                            />
                            <img
                                src="/assets/logo.png"
                                className="h-10"
                                alt="Mexpenses"
                            />
                            <img
                                src="/assets/picpay_aws.png"
                                className="h-9"
                                alt="PicPay"
                            />
                            <img
                                src="/assets/nu_aws.png"
                                className="h-8"
                                alt="Nubank"
                            />
                        </div>
                    </div>
                    <div className="my-10 w-full">
                        <img src="/assets/aws_locations.png" className="w-full h-auto rounded-xl" alt="AWS Locations"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;

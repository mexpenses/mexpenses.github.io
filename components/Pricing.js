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
                <div className="flex flex-col w-full my-16">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed text-left">
                        Seus dados estão seguros
                    </h3>
                    <p className="leading-normal text-left my-2 w-full">
                        Garantimos a sua segurança por não te obrigar a registrar qualquer informação que seja sensível. Todos os dados estão armazenados em um dos maiores players de servidores do mundo,
                        veja abaixo algumas das milhares de empresas que utilizam serviços da Amazon Web Services no mundo todo.
                    </p>
                    <div className="py-10 w-full">
                        <img src="/assets/aws_locations.jpg" className="w-full h-auto rounded-xl" alt="AWS Locations" />
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <div className="flex justify-start items-center gap-5 lg:gap-20 mt-4 flex-wrap lg:flex-nowrap">
                            <img
                                src="/assets/c6_bank.png"
                                className="h-10"
                                alt="C6 Bank"
                            />
                            <img
                                src="/assets/pag_seguro.png"
                                className="h-10"
                                alt="PagSeguro"
                            />
                            <img
                                src="/assets/picpay.png"
                                className="h-10"
                                alt="PicPay"
                            />
                            <img
                                src="/assets/nu.png"
                                className="h-10"
                                alt="PicPay"
                            />
                            <img
                                src="/assets/bank_inter.png"
                                className="h-10"
                                alt="Inter"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;

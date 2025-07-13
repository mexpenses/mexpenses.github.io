import React, { useContext, useState } from "react";
import Lottie from 'react-lottie';
import * as AnimationRecommended from '../public/assets/animation_recommended.json';
import { Switcher } from "./Buttons/Switch";
import { Context } from "../context";

const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};


export const Subscriptions = () => {
    const [isYear, setIsYear] = useState(false);
    const { viewModeApp } = useContext(Context);
    const period = isYear ? 'Ano' : 'Mês';
    const urlParamsApp = `?period=${isYear ? 'year' : 'month'}`;
    const plans = {
        free: { price: 'Grátis', period },
        basic: { price: !isYear ? '9,90' : '117,90', period },
        premium: { price: !isYear ? '14,90' : '170,90', period }
    };
    return (
        <div className="py-8 px-4 mx-auto lg:py-16 lg:px-6">
            <div className="mb-3 flex items-center justify-center">
                <Switcher checked={isYear} onChange={() => setIsYear(!isYear)} textLeft="Mensal" textRight="Anual" />
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 lg:space-y-0 gap-3">
                {/* Pricing Card */}
                <div className="flex flex-col p-6 text-center text-gray-900 bg-white rounded-lg border-2 border-gray-200 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <div id="free" className="absolute" style={{ top: -150 }} />
                    <h3 className="mb-4 text-2xl font-semibold flex items-center flex-row flex-wrap justify-center">
                        Free
                    </h3>
                    <p className="text-gray-700 sm:text-lg dark:text-gray-400">
                        Você usa as ferramentas básicas sem ajustes
                    </p>
                    <div className="flex justify-center items-baseline my-8">
                        <span className="mr-2 text-5xl font-extrabold text-green-600">
                            {plans.free.price}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 font-medium">
                            /&nbsp;{plans.free.period}
                        </span>
                    </div>
                    <span className="mb-5 font-extrabold text-green-600">Não fique aqui para sempre amigo(a)</span>
                    {/* List */}
                    <ul role="list" className="mb-8 space-y-4 text-left">
                        <div className="w-full flex flex-row items-center flex-wrap gap-2">
                            <span className="py-1 px-3 bg-green-600 text-lg font-bold text-white rounded-xl">
                                Grátis
                            </span>
                        </div>
                        <li className="flex items-center space-x-3 text-sm">
                            <img
                                src={"/assets/checklist.svg"}
                                className="w-5"
                                alt="Badge"
                            />
                            <span className="font-semibold dark:text-white">
                                Entradas e saídas
                            </span>
                        </li>
                        <li className="flex items-center space-x-3 text-sm">
                            <img
                                src={"/assets/checklist.svg"}
                                className="w-5"
                                alt="Badge"
                            />
                            <span className="font-semibold dark:text-white">
                                Suporte WhatsApp
                            </span>
                        </li>
                        <li className="flex items-center space-x-3 text-sm">
                            <img
                                src={"/assets/checklist.svg"}
                                className="w-5"
                                alt="Badge"
                            />
                            <span className="font-semibold dark:text-white">
                                Registro de contas
                            </span>
                        </li>
                        <li className="flex items-center space-x-3 text-sm">
                            <img
                                src={"/assets/checklist.svg"}
                                className="w-5"
                                alt="Badge"
                            />
                            <span className="font-semibold dark:text-white">
                                Categorias de despesas
                            </span>
                        </li>
                        <li className="flex items-center space-x-3 text-sm">
                            <img
                                src={"/assets/checklist.svg"}
                                className="w-5"
                                alt="Badge"
                            />
                            <span className="font-semibold dark:text-white">
                                Calculadora de Impostos
                            </span>
                        </li>
                        <li className="flex items-center space-x-3 text-sm">
                            <img
                                src={"/assets/checklist.svg"}
                                className="w-5"
                                alt="Badge"
                            />
                            <span className="font-semibold dark:text-white">
                                Visualização de taxas de juros
                            </span>
                        </li>
                        <li className="flex items-center space-x-3 text-sm">
                            <img
                                src={"/assets/checklist.svg"}
                                className="w-5"
                                alt="Badge"
                            />
                            <span className="font-semibold dark:text-white">
                                Visualização de criptomoedas
                            </span>
                        </li>
                        <li className="flex items-center space-x-3 text-sm">
                            <img
                                src={"/assets/checklist.svg"}
                                className="w-5"
                                alt="Badge"
                            />
                            <span className="font-semibold dark:text-white">
                                Faturas dos cartões de crédito
                            </span>
                        </li>
                        <li className="flex items-center space-x-3 text-sm">
                            <img
                                src={"/assets/checklist.svg"}
                                className="w-5"
                                alt="Badge"
                            />
                            <span className="font-semibold dark:text-white">
                                Avisos sobre vencimentos das faturas
                            </span>
                        </li>
                    </ul>
                    {!viewModeApp &&
                        <a
                            target="_blank"
                            href={`https://app.mexpenses.com.br/#/auth/register/free${urlParamsApp}`}
                            className="mt-auto text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
                        >
                            Começar Grátis
                        </a>
                    }
                </div>
                {/* Pricing Card */}
                <div className="relative flex flex-col p-6 text-center text-gray-900 bg-white rounded-lg border border-2 border-gray-200 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <div id="basic" className="absolute" style={{ top: -150 }} />
                    <div className="absolute right-0" style={{ top: -40 }}>
                        <Lottie
                            width={100}
                            height={100}
                            isClickToPauseDisabled
                            options={{ ...defaultOptions, animationData: AnimationRecommended }}
                        />
                    </div>
                    <h3 className="mb-4 text-2xl font-semibold flex items-center flex-row flex-wrap justify-center">
                        Basic&nbsp;
                        <span className="py-1 px-3 bg-blue-500 text-white rounded-xl">
                            Flexível
                        </span>
                    </h3>
                    <p className="text-gray-700 sm:text-lg dark:text-gray-400">
                        Peça pequenos ajustes, nós faremos!
                    </p>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400 my-5">
                        <span className="bg-green-600 text-white rounded-3xl font-medium py-1.5 px-3 uppercase">
                            1 mês é grátis!
                        </span>
                    </p>
                    <div className="flex justify-center items-baseline mb-5">
                        <span className="mr-2 text-5xl font-extrabold text-blue-500">
                            R$&nbsp;{plans.basic.price}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 font-medium">
                            /&nbsp;{plans.basic.period}
                        </span>
                    </div>
                    <span className="mb-5 font-extrabold text-blue-500">É baratinho, preço de um pastélzinho</span>
                    {/* List */}
                    <ul role="list" className="mb-8 space-y-4 text-left">
                        <div className="w-full flex flex-row items-center flex-wrap gap-2">
                            <span className="py-1 px-3 bg-green-600 text-lg font-bold text-white rounded-xl">
                                Grátis
                            </span>
                            <span className="py-1 px-3 bg-blue-500 text-lg font-bold text-white rounded-xl">
                                +&nbsp;Basic
                            </span>
                        </div>
                        <li className="flex items-center space-x-3 text-sm">
                            <img
                                src={"/assets/badge-check.png"}
                                className="w-5"
                                alt="Badge"
                            />
                            <span className="font-semibold dark:text-white">
                                Simulação de cofrinhos
                            </span>
                        </li>
                        <li className="flex items-center space-x-3 text-sm">
                            <img
                                src={"/assets/badge-check.png"}
                                className="w-5"
                                alt="Badge"
                            />
                            <span className="font-semibold dark:text-white">
                                Análise de faturas com a Mex
                            </span>
                        </li>
                        <li className="flex items-center space-x-3 text-sm">
                            <img
                                src={"/assets/badge-check.png"}
                                className="w-5"
                                alt="Badge"
                            />
                            <span className="font-semibold dark:text-white">
                                Registre despesas em parcelas
                            </span>
                        </li>
                        <li className="flex items-center space-x-3 text-sm">
                            <img
                                src={"/assets/badge-check.png"}
                                className="w-5"
                                alt="Badge"
                            />
                            <span className="font-semibold dark:text-white">
                                Bancos físicos mais próximos de você
                            </span>
                        </li>
                        <li className="flex items-center space-x-3 text-sm">
                            <img
                                src={"/assets/badge-check.png"}
                                className="w-5"
                                alt="Badge"
                            />
                            <span className="font-semibold dark:text-white">
                                Filtrar por datas suas despesas, receitas e saídas
                            </span>
                        </li>
                        <li className="flex items-center space-x-3 text-sm">
                            <img
                                src={"/assets/badge-check.png"}
                                className="w-5"
                                alt="Badge"
                            />
                            <span className="font-semibold dark:text-white">
                                Histórico de pagamentos das despesas recorrentes
                            </span>
                        </li>
                        <li className="flex items-center space-x-3 text-sm">
                            <img
                                src={"/assets/badge-check.png"}
                                className="w-5"
                                alt="Badge"
                            />
                            <span className="font-semibold dark:text-white">
                                Veja despesas pendentes e pagas apenas com um clique 
                            </span>
                        </li>
                    </ul>
                    {!viewModeApp &&
                        <a
                            target="_blank"
                            href={`https://app.mexpenses.com.br/#/auth/register/basic${urlParamsApp}`}
                            className="mt-auto text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-primary-200 rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900 font-bold"
                        >
                            Assinar
                        </a>
                    }
                </div>
                {/* Pricing Card */}
                <div
                    className="relative flex flex-col p-6 text-center text-gray-900 bg-white rounded-lg border-2 border-gray-200 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <div id="premium" className="absolute" style={{ top: -150 }} />
                    <h3 className="mb-4 text-2xl font-semibold flex items-center flex-row flex-wrap justify-center">
                        Premium&nbsp;
                        <span className="py-1 px-3 bg-black text-white rounded-xl">
                            Poderoso
                        </span>
                    </h3>
                    <p className="text-gray-700 sm:text-lg dark:text-gray-400">
                        Necessidade de novas opções? Você é prioridade aqui!
                    </p>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400 my-5">
                        <span className="bg-green-600 text-white rounded-3xl font-medium py-1.5 px-3 uppercase">
                            1 mês é grátis!
                        </span>
                    </p>
                    <div className="flex justify-center items-baseline mb-5">
                        <span className="mr-2 text-5xl font-extrabold text-black">
                            R$&nbsp;{plans.premium.price}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 font-medium">
                            /&nbsp;{plans.premium.period}
                        </span>
                    </div>
                    <span className="mb-5 font-extrabold text-black">Preço de um lanchinho não faz falta</span>
                    {/* List */}
                    <ul role="list" className="mb-8 space-y-4 text-left">
                        <div className="w-full flex flex-row items-center flex-wrap gap-2">
                            <span className="py-1 px-3 bg-green-600 text-lg font-bold text-white rounded-xl">
                                Grátis
                            </span>
                            <span className="py-1 px-3 bg-blue-500 text-lg font-bold text-white rounded-xl">
                                +&nbsp;Basic
                            </span>
                            <span className="py-1 px-3 bg-black text-lg font-bold text-white rounded-xl">
                                +&nbsp;Premium
                            </span>
                        </div>
                        <li className="flex items-center space-x-3 text-sm">
                            <img
                                src={"/assets/badge-check-gold.png"}
                                className="w-5"
                                alt="Badge"
                            />
                            <span className="font-semibold opacity-70">
                                (Em breve) Perfil de consumo
                            </span>
                        </li>
                        <li className="flex items-center space-x-3 text-sm">
                            <img
                                src={"/assets/badge-check-gold.png"}
                                className="w-5"
                                alt="Badge"
                            />
                            <span className="font-semibold dark:text-white">
                                Suporte WhatsApp 24h
                            </span>
                        </li>
                        <li className="flex items-center space-x-3 text-sm">
                            <img
                                src={"/assets/badge-check-gold.png"}
                                className="w-5"
                                alt="Badge"
                            />
                            <span className="font-semibold dark:text-white">
                                Veja a B3 (Bolsa do Brasil)
                            </span>
                        </li>
                        <li className="flex items-center space-x-3 text-sm">
                            <img
                                src={"/assets/badge-check-gold.png"}
                                className="w-5"
                                alt="Badge"
                            />
                            <span className="font-semibold dark:text-white">
                                Conselhos semanais da Mex
                            </span>
                        </li>
                        <li className="flex items-center space-x-3 text-sm">
                            <img
                                src={"/assets/badge-check-gold.png"}
                                className="w-5"
                                alt="Badge"
                            />
                            <span className="font-semibold dark:text-white">
                                Exporte dados financeiros em CSV
                            </span>
                        </li>
                        <li className="flex items-center space-x-3 text-sm">
                            <img
                                src={"/assets/badge-check-gold.png"}
                                className="w-5"
                                alt="Badge"
                            />
                            <span className="font-semibold dark:text-white">
                                Veja o Mercados de ações dos EUA e Brasil
                            </span>
                        </li>
                    </ul>
                    {!viewModeApp &&
                        <a
                            target="_blank"
                            href={`https://app.mexpenses.com.br/#/auth/register/premium${urlParamsApp}`}
                            className="mt-auto text-white bg-black hover:bg-neutral-900 focus:ring-4 focus:ring-primary-200 rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900 font-bold"
                        >
                            Assinar
                        </a>
                    }
                </div>
            </div>
        </div>
    );
};
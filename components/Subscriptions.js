import { CheckIcon } from "./misc/checkIcon";
import { useRouter } from "next/router";

export const Subscriptions = () => {
    const router = useRouter();
    return (
        <div className="py-8 px-4 mx-auto lg:py-16 lg:px-6" id="pricing">
            <div className="space-y-8 lg:grid lg:grid-cols-3 lg:space-y-0 gap-3">
                {/* Pricing Card */}
                <div className="flex flex-col p-6 text-center text-gray-900 bg-white rounded-lg border border-gray-100 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 className="mb-4 text-2xl font-semibold flex items-center flex-row flex-wrap justify-center">
                        Free
                    </h3>
                    <p className="text-gray-700 sm:text-lg dark:text-gray-400">
                        Crie uma conta para conhecer a plataforma
                    </p>
                    <div className="flex justify-center items-baseline my-8">
                        <span className="mr-2 text-5xl font-extrabold text-green-500">
                            Grátis
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 font-medium">
                            /Mês
                        </span>
                    </div>
                    {/* List */}
                    <ul role="list" className="mb-8 space-y-4 text-left">
                        <li className="flex items-center space-x-3">
                            <CheckIcon />
                            <span>Calculadora de Impostos</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <CheckIcon />
                            <span>Cadastro de despesas fixas, variáveis e categorias</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <CheckIcon />
                            <span>Cadastro de bancos</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <CheckIcon />
                            <span>Gerenciar entradas e saídas dos saldos</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <CheckIcon />
                            <span>Cadastro de cartões</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <CheckIcon />
                            <span>
                                Cadastro de fatura{" "}
                                <span className="font-semibold">
                                    vinculada no cartão
                                </span>
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <CheckIcon />
                            <span>
                                Analise de forma intuitiva gráficos de despesas,
                                saldos bancários, faturas de cartão de crédito e
                                muito mais...
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <CheckIcon />
                            <span>
                                Alertas sobre faturas que irão vencer ou que
                                ultrapassaram sua renda e data de vencimento
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <CheckIcon />
                            <span>
                                Visualização de taxas de juros{" "}
                                <span className="font-semibold">
                                    SELIC / CDI / IPCA
                                </span>
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <CheckIcon />
                            <span>
                                Visualização de criptomoedas mais negociadas do{" "}
                                <span className="font-semibold">
                                    Nubank e PicPay
                                </span>
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <CheckIcon />
                            <span>
                                Suporte <b>WhatsApp</b> horário de expediente
                            </span>
                        </li>
                    </ul>
                    <a
                        href="https://app.mexpenses.com.br/#/auth/register/free"
                        className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
                    >
                        Assinar
                    </a>
                </div>
                {/* Pricing Card */}
                <div className="flex flex-col p-6 text-center text-gray-900 bg-white rounded-lg border border-gray-100 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 className="mb-4 text-2xl font-semibold flex items-center flex-row flex-wrap justify-center">
                        Basic&nbsp;
                        <span className="py-1 px-3 bg-blue-500 text-white rounded-xl">
                            Recomendado
                        </span>
                    </h3>
                    <p className="text-gray-700 sm:text-lg dark:text-gray-400">
                        Evolua financeiramente e conecte seus bancos
                    </p>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400 my-3">
                        <span className="bg-green-600 text-white rounded-3xl font-medium py-1.5 px-3">
                            1 mês grátis
                        </span>
                    </p>
                    <div className="flex justify-center items-baseline mb-5">
                        <span className="mr-2 text-5xl font-extrabold text-blue-400">
                            R$ 9,90
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 font-medium">
                            /Mês
                        </span>
                    </div>
                    {/* List */}
                    <ul role="list" className="mb-8 space-y-4 text-left">
                        <li className="flex items-center space-x-3">
                            <CheckIcon />
                            <span>Calculadora de Impostos</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <CheckIcon />
                            <span>Cadastro de despesas fixas, variáveis e categorias</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <CheckIcon />
                            <span>Cadastro de bancos</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <CheckIcon />
                            <span>Gerenciar entradas e saídas dos saldos</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <CheckIcon />
                            <span>Cadastro de cartões</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <CheckIcon />
                            <span>
                                Cadastro de fatura{" "}
                                <span className="font-semibold">
                                    vinculada no cartão
                                </span>
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <CheckIcon />
                            <span>
                                Analise de forma intuitiva gráficos de despesas,
                                saldos bancários, faturas de cartão de crédito e
                                muito mais...
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <CheckIcon />
                            <span>
                                Alertas sobre faturas que irão vencer ou que
                                ultrapassaram sua renda e data de vencimento
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <CheckIcon />
                            <span>
                                Visualização de taxas de juros{" "}
                                <span className="font-semibold">
                                    SELIC / CDI / IPCA
                                </span>
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <CheckIcon />
                            <span>
                                Visualização de criptomoedas mais negociadas do{" "}
                                <span className="font-semibold">
                                    Nubank e PicPay
                                </span>
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <CheckIcon />
                            <span>
                                Suporte <b>WhatsApp</b> horário de expediente
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <img
                                src={`${router.basePath}/assets/badge-check.svg`}
                                className="w-5"
                                alt="Subscription"
                            />
                            <span>Visualização detalhada das faturas</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <img
                                src={`${router.basePath}/assets/badge-check.svg`}
                                className="w-5"
                                alt="Subscription"
                            />
                            <span>
                                Veja no mapa bancos mais próximos de você
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <img
                                src={`${router.basePath}/assets/badge-check.svg`}
                                className="w-5"
                                alt="Subscription"
                            />
                            <span>
                                Cadastro de parcelas nas despesas
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <img
                                src={`${router.basePath}/assets/badge-check.svg`}
                                className="w-5"
                                alt="Subscription"
                            />
                            <span className="dark:text-white">
                                Seus bancos em um único lugar{" "}
                                <span className="font-medium text-primary-600 dark:text-primary-400">
                                    Insira 2 contas
                                </span>
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <img
                                src={`${router.basePath}/assets/badge-check.svg`}
                                className="w-5"
                                alt="Subscription"
                            />
                            <span className="opacity-70">
                                <b>Em breve</b> Definir metas financeiras
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <img
                                src={`${router.basePath}/assets/badge-check.svg`}
                                className="w-5"
                                alt="Subscription"
                            />
                            <span className="opacity-70">
                                <b>Em breve</b> Histórico com filtro de pesquisa
                                sobre Entradas, Saídas e muito mais
                            </span>
                        </li>
                    </ul>
                    <a
                        href="https://app.mexpenses.com.br/#/auth/register/basic"
                        className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                    >
                        Assinar
                    </a>
                </div>
                {/* Pricing Card */}
                <div className="flex flex-col p-6 text-center text-gray-900 bg-white rounded-lg border border-gray-100 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 className="mb-4 text-2xl font-semibold flex items-center flex-row flex-wrap justify-center">
                        Premium&nbsp;
                        <span className="py-1 px-3 bg-yellow-500 text-white rounded-xl">
                            Super poderes
                        </span>
                    </h3>
                    <p className="text-gray-700 sm:text-lg dark:text-gray-400">
                        Para uma pessoa de negócios e que deseja ter sucesso
                    </p>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400 my-3">
                        <span className="bg-green-600 text-white rounded-3xl font-medium py-1.5 px-3">
                            1 mês grátis
                        </span>
                    </p>
                    <div className="flex justify-center items-baseline mb-5">
                        <span className="mr-2 text-5xl font-extrabold text-yellow-500">
                            R$ 14,90
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 font-medium">
                            /Mês
                        </span>
                    </div>
                    {/* List */}
                    <ul role="list" className="mb-8 space-y-4 text-left">
                        <li className="flex items-center space-x-3">
                            <CheckIcon />
                            <span>Calculadora de Impostos</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <CheckIcon />
                            <span>Cadastro de despesas fixas, variáveis e categorias</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <CheckIcon />
                            <span>Cadastro de bancos</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <CheckIcon />
                            <span>Gerenciar entradas e saídas dos saldos</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <CheckIcon />
                            <span>Cadastro de cartões</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <CheckIcon />
                            <span>
                                Cadastro de fatura{" "}
                                <span className="font-semibold">
                                    vinculada no cartão
                                </span>
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <CheckIcon />
                            <span>
                                Analise de forma intuitiva gráficos de despesas,
                                saldos bancários, faturas de cartão de crédito e
                                muito mais...
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <CheckIcon />
                            <span>
                                Alertas sobre faturas que irão vencer ou que
                                ultrapassaram sua renda e data de vencimento
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <CheckIcon />
                            <span>
                                Visualização de taxas de juros{" "}
                                <span className="font-semibold">
                                    SELIC / CDI / IPCA
                                </span>
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <CheckIcon />
                            <span>
                                Visualização de criptomoedas mais negociadas do{" "}
                                <span className="font-semibold">
                                    Nubank e PicPay
                                </span>
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <img
                                src={`${router.basePath}/assets/badge-check.svg`}
                                className="w-5"
                                alt="Subscription"
                            />
                            <span>Visualização detalhada das faturas</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <img
                                src={`${router.basePath}/assets/badge-check.svg`}
                                className="w-5"
                                alt="Subscription"
                            />
                            <span>
                                Veja no mapa bancos mais próximos de você
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <img
                                src={`${router.basePath}/assets/badge-check.svg`}
                                className="w-5"
                                alt="Subscription"
                            />
                            <span>
                                Cadastro de parcelas nas despesas
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <img
                                src={`${router.basePath}/assets/badge-check.svg`}
                                className="w-5"
                                alt="Subscription"
                            />
                            <span className="opacity-70">
                                <b>Em breve</b> Definir metas financeiras
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <img
                                src={`${router.basePath}/assets/badge-check.svg`}
                                className="w-5"
                                alt="Subscription"
                            />
                            <span className="opacity-70">
                                <b>Em breve</b> Histórico com filtro de pesquisa
                                sobre Entradas, Saídas e muito mais
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <img
                                src={`${router.basePath}/assets/badge-check-gold.png`}
                                className="w-5"
                                alt="Subscription"
                            />
                            <span className="dark:text-white">
                                Seus bancos em um único lugar{" "}
                                <span className="font-medium text-yellow-600 dark:text-yellow-400">
                                    Insira 4 contas
                                </span>
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <img
                                src={`${router.basePath}/assets/badge-check-gold.png`}
                                className="w-5"
                                alt="Subscription"
                            />
                            <span>
                                Suporte <b>WhatsApp</b>{" "}
                                <b className="text-yellow-600 dark:text-yellow-400">
                                    24 horas
                                </b>{" "}
                                por dia
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <img
                                src={`${router.basePath}/assets/badge-check-gold.png`}
                                className="w-5"
                                alt="Subscription"
                            />
                            <span>
                                Visualização <b>Mercados de Ações dos EUA e BRASIL</b>{" "}
                                Real-Time
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <img
                                src={`${router.basePath}/assets/badge-check-gold.png`}
                                className="w-5"
                                alt="Subscription"
                            />
                            <span>
                                Exportar dados em arquivo <b>CSV para Excel</b>
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <img
                                src={`${router.basePath}/assets/badge-check-gold.png`}
                                className="w-5"
                                alt="Subscription"
                            />
                            <span>
                                Visualização <b>B3: A Bolsa do Brasil</b>{" "}
                                Real-Time
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <img
                                src={`${router.basePath}/assets/badge-check-gold.png`}
                                className="w-5"
                                alt="Subscription"
                            />
                            <span>
                                Converse com a{" "}
                                <b>Inteligência Artificial Ingrid</b> e receba
                                dicas diárias de acordo com seus dados
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <img
                                src={`${router.basePath}/assets/badge-check-gold.png`}
                                className="w-5"
                                alt="Subscription"
                            />
                            <span className="opacity-70">
                                <b>Em breve</b> Perfil de consumo
                            </span>
                        </li>
                    </ul>
                    <a
                        href="https://app.mexpenses.com.br/#/auth/register/premium"
                        className="text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
                    >
                        Assinar
                    </a>
                </div>
            </div>
        </div>
    );
};

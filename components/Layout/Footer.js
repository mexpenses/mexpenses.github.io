import React from "react";
import Link from "next/link";
import ButtonPrimary from "../Buttons/ButtonPrimary";

const Footer = () => {
  return (
      <div className="bg-white-300 pb-24">
        <div className="relative max-w-screen-xl px-6 sm:px-8 lg:px-10 mt-14 mx-auto">
          <div className="rounded-xl w-full flex flex-col sm:flex-row justify-start sm:justify-between z-10 bg-white">
            <div className="flex flex-col text-left w-full sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
              <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                Quer entrar em contato?
              </h5>
              <p className="mt-2">Fale conosco nos enviando um e-mail.</p>
            </div>
            <a target="_blank" href="mailto:mexpenses.app@gmail.com">
              <ButtonPrimary>Enviar e-mail</ButtonPrimary>
            </a>
          </div>
        </div>
        <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-10 flex flex-row flex-wrap lg:flex-nowrap justify-between gap-4 mt-20">
          <div className="flex flex-col items-start">
            <img src="/assets/mexpenses-black.svg" className="hidden lg:block" width={90} alt="Mexpenses"/>
            <p className="my-4">
              <strong className="font-medium">Mexpenses</strong> Troque suas planilhas com complexidades por
              simplicidade.
            </p>
            <div className="flex flex-row flex-wrap justify-center mb-3" style={{gap: 20}}>
              <li className="flex items-center justify-center m-0 cursor-pointer">
                <Link href="https://www.youtube.com/@Mexpenses">
                  <img src="/assets/youtube.png"
                       className="hover:scale-110 transition-all rounded-full" width={35} alt="YouTube"/>
                </Link>
              </li>
              <li className="flex items-center justify-center m-0 cursor-pointer">
                <Link href="https://www.instagram.com/mexpenses">
                  <img src="/assets/instagram.png"
                       className="hover:scale-110 transition-all rounded-full" width={35} alt="Instagram"/>
                </Link>
              </li>
              <li className="flex items-center justify-center m-0 cursor-pointer">
                <Link href="https://www.threads.net/@mexpenses">
                  <img src="/assets/threads.webp"
                       className="hover:scale-110 transition-all rounded-full" width={35} alt="Threads"/>
                </Link>
              </li>
              <li className="flex items-center justify-center m-0 cursor-pointer">
                <Link href="https://www.tiktok.com/@mexpenses">
                  <img src="/assets/tiktok.webp"
                       className="hover:scale-110 transition-all rounded-full" width={35} alt="TikTok"/>
                </Link>
              </li>
              <li className="flex items-center justify-center m-0 cursor-pointer">
                <Link href="https://www.facebook.com/profile.php?id=100090266616695">
                  <img src="/assets/facebook.png"
                       className="hover:scale-110 transition-all rounded-full" width={35} alt="Facebook"/>
                </Link>
              </li>
              <li className="flex items-center justify-center m-0 cursor-pointer">
                <Link href="https://www.linkedin.com/company/mexpenses">
                  <img src="/assets/in.png" className="hover:scale-110 transition-all rounded-full"
                       width={35} alt="LinkedIn"/>
                </Link>
              </li>
            </div>
            <p className="text-gray-600">© 2023-{new Date().getFullYear()} Mexpenses Soluções Financeiras Ltda.</p>
            <p className="text-gray-400 mt-1">Inscrita no CNPJ sob o nº 55.552.018/0001-98</p>
            <p className="mt-2">
              <span className="text-gray-800 font-semibold">Endereço comercial</span>&nbsp;
              <Link target="_blank" className="cursor-pointer text-gray-700 hover:text-indigo-500"
                    href="https://maps.app.goo.gl/CtuL2636NDZwDY2x7">
                R. Cel. José Eusébio, 95 - Higienópolis, São Paulo
              </Link>
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-black-600 mb-4 font-medium text-lg">Mexpenses</p>
            <ul className="text-black-500">
              <a target="_blank" href="https://www.pluggy.ai/blog/open-finance-vale-a-pena">
                <li className="my-2 hover:text-indigo-500 cursor-pointer transition-all">
                  Open Finance
                </li>
              </a>
              <Link href="/pages/policy">
                <li className="my-2 hover:text-indigo-500 cursor-pointer transition-all">
                  Política de privacidade
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col">
            <p className="text-black-600 mb-4 font-medium text-lg">Pagamentos</p>
            <ul className="text-black-500">
              <a target="_blank" href="https://stripe.com/br/customers">
                <li className="my-2 hover:text-indigo-500 cursor-pointer transition-all">
                  Relatos de clientes
                </li>
              </a>
              <a target="_blank" href="https://stripe.com/br/privacy">
                <li className="my-2 hover:text-indigo-500 cursor-pointer transition-all">
                  Privacidade e Termos
                </li>
              </a>
            </ul>
          </div>
          <div className="flex flex-col">
            <p className="text-black-600 mb-4 font-medium text-lg">Produtos</p>
            <ul className="text-black-500 ">
              <a target="_blank" href="https://app.mexpenses.com.br/#/auth/register/basic">
                <li className="my-2 hover:text-indigo-500 cursor-pointer transition-all">
                  Conta digital
                </li>
              </a>
              <li className="my-2 hover:text-indigo-500 cursor-pointer transition-al">
                <b className="text-indigo-600">Em breve</b> Blog
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <p className="text-black-600 mb-4 font-medium text-lg">Contato</p>
            <ul className="text-black-500">
              {/*<a target="_blank" href="https://wa.link/71kl40">*/}
              {/*  <li className="my-2 hover:text-indigo-500 cursor-pointer transition-all">*/}
              {/*    Atendimento WhatsApp" "*/}
              {/*  </li>*/}
              {/*</a>*/}
              <a target="_blank" href="mailto:mexpenses.app@gmail.com">
                <li className="my-2 hover:text-indigo-500 cursor-pointer transition-all">
                  Entrar em contato por <span className="inline-block">e-mail</span>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Footer;

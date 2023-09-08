import React from "react";
import LogoMexpenses from "../../public/assets/mexpenses-black.svg";
import {useRouter} from "next/router";
import Link from "next/link";

const STYLE_LINK = {
  margin: 0,
  display: 'flex',
  cursor: 'pointer',
  alignItems: 'center',
  justifyContent: 'center'
};

const Footer = () => {
  const router = useRouter();
  return (
      <div className="bg-white-300 pt-44 pb-24">
        <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
          <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
            <LogoMexpenses className="h-8 w-auto mb-6" />
            <p className="mb-4">
              <strong className="font-medium">Mexpenses</strong> Faça a gestão de todas as suas contas de qualquer instituição bancária.
            </p>
            <div className="flex flex-row flex-wrap justify-center mb-3" style={{ gap: 20 }}>
              <li style={STYLE_LINK}>
                <Link href="https://www.youtube.com/@Mexpenses">
                  <img src={`${router.basePath}/assets/youtube.png`} className="hover:scale-110 transition-all rounded-full" width={35} alt="YouTube"/>
                </Link>
              </li>
              <li style={STYLE_LINK}>
                <Link href="https://www.instagram.com/mexpenses">
                  <img src={`${router.basePath}/assets/instagram.png`} className="hover:scale-110 transition-all rounded-full" width={35} alt="Instagram"/>
                </Link>
              </li>
              <li style={STYLE_LINK}>
                <Link href="https://www.threads.net/@mexpenses">
                  <img src={`${router.basePath}/assets/threads.webp`} className="hover:scale-110 transition-all rounded-full" width={35} alt="Threads"/>
                </Link>
              </li>
              <li style={STYLE_LINK}>
                <Link href="https://www.tiktok.com/@mexpenses">
                  <img src={`${router.basePath}/assets/tiktok.webp`} className="hover:scale-110 transition-all rounded-full" width={35} alt="TikTok"/>
                </Link>
              </li>
              <li style={STYLE_LINK}>
                <Link href="https://www.facebook.com/profile.php?id=100090266616695">
                  <img src={`${router.basePath}/assets/facebook.png`} className="hover:scale-110 transition-all rounded-full" width={35} alt="Facebook"/>
                </Link>
              </li>
              <li style={STYLE_LINK}>
                <Link href="https://www.linkedin.com/company/mexpenses">
                  <img src={`${router.basePath}/assets/in.png`} className="hover:scale-110 transition-all rounded-full" width={35} alt="LinkedIn"/>
                </Link>
              </li>
            </div>
            <p className="text-gray-400">© {new Date().getFullYear()} Mexpenses Soluções Financeiras Ltda.</p>
          </div>
          <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
            <p className="text-black-600 mb-4 font-medium text-lg">Produtos</p>
            <ul className="text-black-500 ">
              <a target="_blank" href="https://app.mexpenses.com.br/#/auth/login">
                <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
                  Conta digital Login{" "}
                </li>
              </a>
              <a target="_blank" href="https://app.mexpenses.com.br/#/auth/register/basic">
                <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
                  Conta digital Cadastro{" "}
                </li>
              </a>
              <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
                <b className="text-blue-600">Em breve</b> Blog{" "}
              </li>
            </ul>
          </div>
          <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
            <p className="text-black-600 mb-4 font-medium text-lg">Transparência</p>
            <ul className="text-black-500">
              <a target="_blank" href="https://stripe.com/br/customers">
                <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
                  Stripe Relatos de clientes{" "}
                </li>
              </a>
              <a target="_blank" href="https://stripe.com/br/privacy">
                <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
                  Stripe Privacidade e Termos{" "}
                </li>
              </a>
              <Link href="/policy">
                <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
                  Nossa Política de privacidade{" "}
                </li>
              </Link>
            </ul>
          </div>
          <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
            <p className="text-black-600 mb-4 font-medium text-lg">Contato</p>
            <ul className="text-black-500">
              <a target="_blank" href="https://wa.link/71kl40">
                <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
                  Atendimento WhatsApp{" "}
                </li>
              </a>
              <a target="_blank" href="mailto:mexpenses.app@gmail.com">
                <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
                  Contato por e-mail{" "}
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Footer;

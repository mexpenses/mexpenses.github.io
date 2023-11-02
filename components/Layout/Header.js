import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../misc/ButtonOutline.";
import LogoMexpenses from "../../public/assets/mexpenses-black.svg";

const Header = () => {
  const [activeLink, setActiveLink] = useState("about");
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
      <>
        <header
            className={
                "fixed top-0 w-full  z-30 bg-white transition-all " +
                (scrollActive ? " shadow-md pt-0" : " pt-4")
            }
        >
          <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
            <div className="col-start-1 col-end-2 flex items-center">
              <LogoMexpenses className="h-8 w-auto" />
            </div>
            <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
              <LinkScroll
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink("about");
                  }}
                  className={
                      "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                      (activeLink === "about"
                          ? " text-blue-500 animation-active "
                          : " text-black-500 hover:text-blue-500 a")
                  }
              >
                Início
              </LinkScroll>
              <LinkScroll
                  activeClass="active"
                  to="feature"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink("feature");
                  }}
                  className={
                      "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                      (activeLink === "feature"
                          ? " text-blue-500 animation-active "
                          : " text-black-500 hover:text-blue-500 ")
                  }
              >
                Ferramentas
              </LinkScroll>
              <LinkScroll
                  activeClass="active"
                  to="pricing"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink("pricing");
                  }}
                  className={
                      "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                      (activeLink === "pricing"
                          ? " text-blue-500 animation-active "
                          : " text-black-500 hover:text-blue-500 ")
                  }
              >
                Assinaturas
              </LinkScroll>
              <LinkScroll
                  activeClass="active"
                  to="contributors"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink("contributors");
                  }}
                  className={
                      "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                      (activeLink === "contributors"
                          ? " text-blue-500 animation-active "
                          : " text-black-500 hover:text-blue-500 ")
                  }
              >
                  Empresa
              </LinkScroll>
            </ul>
            <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
              <a
                  href="https://app.mexpenses.com.br/#/auth/login"
                  className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-blue-500 transition-all"
              >
                Login
              </a>
              <a href="https://app.mexpenses.com.br/#/auth/register/basic">
                <ButtonOutline>Criar conta</ButtonOutline>
              </a>
            </div>
          </nav>
            <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
                <div
                    aria-hidden="true"
                    className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                >
                    <div
                        className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
                        style={{
                            clipPath:
                                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"
                        }}
                    />
                </div>
                <div
                    className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
                        style={{
                            clipPath:
                                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"
                        }}
                    />
                </div>
                <div className="flex flex-wrap items-center justify-center w-full gap-x-4 gap-y-2">
                    <p className="text-sm leading-6 text-gray-900">
                        <strong className="font-semibold">Em pleno {new Date().getFullYear()}</strong>
                        <svg
                            viewBox="0 0 2 2"
                            className="mx-2 inline h-0.5 w-0.5 fill-current"
                            aria-hidden="true"
                        >
                            <circle cx={1} cy={1} r={1} />
                        </svg>
                        E você ainda não utiliza a Mexpenses para controlar seus gastos?
                    </p>
                </div>
            </div>
        </header>
        {/* Mobile Navigation */}

        <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
          <div className="bg-white sm:px-3">
            <ul className="flex w-full justify-between items-center text-black-500">
              <LinkScroll
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink("about");
                  }}
                  className={
                      "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                      (activeLink === "about"
                          ? "  border-blue-500 text-blue-500"
                          : " border-transparent")
                  }
              >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Início
              </LinkScroll>
              <LinkScroll
                  activeClass="active"
                  to="feature"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink("feature");
                  }}
                  className={
                      "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                      (activeLink === "feature"
                          ? "  border-blue-500 text-blue-500"
                          : " border-transparent ")
                  }
              >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                Ferramentas
              </LinkScroll>
              <LinkScroll
                  activeClass="active"
                  to="pricing"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink("pricing");
                  }}
                  className={
                      "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                      (activeLink === "pricing"
                          ? "  border-blue-500 text-blue-500"
                          : " border-transparent ")
                  }
              >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Assinaturas
              </LinkScroll>
              <LinkScroll
                  activeClass="active"
                  to="contributors"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink("contributors");
                  }}
                  className={
                      "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                      (activeLink === "contributors"
                          ? "  border-blue-500 text-blue-500"
                          : " border-transparent ")
                  }
              >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Empresa
              </LinkScroll>
            </ul>
          </div>
        </nav>
        {/* End Mobile Navigation */}
      </>
  );
};

export default Header;

import React, {Fragment, useContext} from "react";
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../Buttons/ButtonOutline.";
import Link from "next/link";
import Lottie from 'react-lottie';
import {useRouter} from "next/router";
import {Context} from "../../context";
import {usePathname} from "next/navigation";
import * as AnimationLogo from '../../public/assets/animation_mexpenses-black.json';

const defaultOptions = {
    loop: false,
    autoplay: true,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const Header = () => {
    const { showBanner, activeLinkNavbar, setActiveLinkNavbar, setShowBanner } = useContext(Context);
    const router = useRouter();
    const pathname = usePathname();
    return (
        <>
            <header className="fixed top-0 w-full  z-30 bg-white transition-all shadow-md pt-0">
                <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
                    <div className="col-start-1 col-end-2 flex items-center">
                        <div className="hidden lg:block">
                            <Lottie
                                height={40}
                                isClickToPauseDisabled
                                options={{...defaultOptions, animationData: AnimationLogo }}
                            />
                        </div>
                        <img src="/assets/mexpenses-icon.png" className="h-8 w-auto block lg:hidden" alt="Mexpenses"/>
                    </div>
                    <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500 items-center">
                        <LinkScroll
                            activeClass="active"
                            to="about"
                            spy
                            smooth
                            offset={-100}
                            duration={1000}
                            onSetActive={() => setActiveLinkNavbar("about")}
                            onClick={() => router.push('/')}
                            className={
                                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                                (activeLinkNavbar === "about"
                                    ? " text-indigo-500 animation-active "
                                    : " text-black-500 hover:text-indigo-500 a")
                            }
                        >
                            Início
                        </LinkScroll>
                        <LinkScroll
                            activeClass="active"
                            to="feature"
                            spy
                            smooth
                            duration={1000}
                            onClick={() => router.push('/#feature')}
                            onSetActive={() => setActiveLinkNavbar("feature")}
                            className={
                                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                                (activeLinkNavbar === "feature"
                                    ? " text-indigo-500 animation-active "
                                    : " text-black-500 hover:text-indigo-500 ")
                            }
                        >
                            Possibilidades
                        </LinkScroll>
                        <LinkScroll
                            activeClass="active"
                            to="pricing"
                            spy
                            smooth
                            duration={1000}
                            onClick={() => router.push('/#pricing')}
                            onSetActive={() => setActiveLinkNavbar("pricing")}
                            className={
                                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                                (activeLinkNavbar === "pricing"
                                    ? " text-indigo-500 animation-active "
                                    : " text-black-500 hover:text-indigo-500 ")
                            }
                        >
                            Assinaturas
                        </LinkScroll>
                        <Link
                            href="/about"
                            onClick={() => setActiveLinkNavbar("contributors")}
                            className={
                                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                                ((activeLinkNavbar === "contributors") || (pathname === '/about')
                                    ? " text-indigo-500 animation-active "
                                    : " text-black-500 hover:text-indigo-500 ")
                            }
                        >
                            Sobre nós
                        </Link>
                    </ul>
                    <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
                        <a
                            href="https://app.mexpenses.com.br/#/auth/login"
                            className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-indigo-500 transition-all"
                        >
                            Login
                        </a>
                        <a href="https://app.mexpenses.com.br/#/auth/register/basic">
                            <ButtonOutline>Criar conta</ButtonOutline>
                        </a>
                    </div>
                </nav>
                <div className={`relative bg-black hover:bg-indigo-500 ${!showBanner ? 'hidden' : 'flex'} items-center overflow-hidden sm:before:flex-1 cursor-pointer select-none`}>
                    <LinkScroll
                        spy
                        smooth
                        to="basic"
                        duration={1000}
                        className="w-full"
                    >
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
                        <div className="flex flex-row w-full gap-x-4 gap-y-2 px-6 py-2.5 sm:px-3.5">
                            <p className="text-xs leading-6 text-white w-full flex items-center justify-center">
                                <strong className="font-semibold whitespace-nowrap">Assine Basic</strong>
                                <svg
                                    viewBox="0 0 2 2"
                                    aria-hidden="true"
                                    className="mx-2 inline h-0.5 w-0.5 fill-current"
                                >
                                    <circle cx={1} cy={1} r={1} />
                                </svg>
                                <span className="truncate">Inteligência Artificial que economiza tempo</span>
                            </p>
                        </div>
                    </LinkScroll>
                    <div className="absolute right-0">
                        <button type="button" className="p-3 focus-visible:outline-offset-[-4px]" onClick={() => setShowBanner(false)}>
                            <span className="sr-only">Dismiss</span>
                            <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor"
                                 aria-hidden="true">
                                <path
                                    d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                {/*<div className={`relative bg-green-700 hover:bg-green-800 ${!showBanner ? 'hidden' : 'flex'} items-center overflow-hidden sm:before:flex-1 cursor-pointer select-none`}>*/}
                {/*    <div className="relative w-full" onClick={() => window.open("https://www.vakinha.com.br/4712837")}>*/}
                {/*        <div*/}
                {/*            aria-hidden="true"*/}
                {/*            className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"*/}
                {/*        >*/}
                {/*            <div*/}
                {/*                className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"*/}
                {/*                style={{*/}
                {/*                    clipPath:*/}
                {/*                        "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"*/}
                {/*                }}*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*        <div*/}
                {/*            className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"*/}
                {/*            aria-hidden="true"*/}
                {/*        >*/}
                {/*            <div*/}
                {/*                className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"*/}
                {/*                style={{*/}
                {/*                    clipPath:*/}
                {/*                        "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"*/}
                {/*                }}*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*        <div className="flex flex-row w-full gap-x-4 gap-y-2 px-6 py-2.5 sm:px-3.5">*/}
                {/*            <p className="text-xs leading-6 text-white w-full flex items-center justify-center">*/}
                {/*                <strong className="font-semibold">SOS</strong>*/}
                {/*                <svg*/}
                {/*                    viewBox="0 0 2 2"*/}
                {/*                    aria-hidden="true"*/}
                {/*                    className="mx-2 inline h-0.5 w-0.5 fill-current"*/}
                {/*                >*/}
                {/*                    <circle cx={1} cy={1} r={1}/>*/}
                {/*                </svg>*/}
                {/*                Ajude o Rio Grande do Sul: Doe agora mesmo*/}
                {/*            </p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="absolute right-0">*/}
                {/*        <button type="button" className="p-3 focus-visible:outline-offset-[-4px]" onClick={() => setShowBanner(false)}>*/}
                {/*            <span className="sr-only">Dismiss</span>*/}
                {/*            <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor"*/}
                {/*                 aria-hidden="true">*/}
                {/*                <path*/}
                {/*                    d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"/>*/}
                {/*            </svg>*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </header>
            {/* Mobile Navigation */}
            <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 shadow-t">
                <div className="bg-white sm:px-3">
                    <ul className="flex w-full justify-between items-center text-black-500">
                        <LinkScroll
                            activeClass="active"
                            to="about"
                            spy
                            smooth
                            offset={-100}
                            duration={1000}
                            onClick={() => router.push('/')}
                            onSetActive={() => setActiveLinkNavbar("about")}
                            className={
                                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                                (activeLinkNavbar === "about"
                                    ? "  border-indigo-500 text-indigo-500"
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
                            spy
                            smooth
                            duration={1000}
                            onClick={() => router.push('/#feature')}
                            onSetActive={() => setActiveLinkNavbar("feature")}
                            className={
                                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                                (activeLinkNavbar === "feature"
                                    ? "  border-indigo-500 text-indigo-500"
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
                            Possibilidades
                        </LinkScroll>
                        <LinkScroll
                            activeClass="active"
                            to="pricing"
                            spy
                            smooth
                            duration={1000}
                            onClick={() => router.push('/#pricing')}
                            onSetActive={() => setActiveLinkNavbar("pricing")}
                            className={
                                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                                (activeLinkNavbar === "pricing"
                                    ? "  border-indigo-500 text-indigo-500"
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
                        <Link
                            href="/about"
                            onClick={() => setActiveLinkNavbar("contributors")}
                            className={
                                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                                ((activeLinkNavbar === "contributors") || (pathname === '/about')
                                    ? "  border-indigo-500 text-indigo-500"
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
                            Sobre nós
                        </Link>
                    </ul>
                </div>
            </nav>
            {/* End Mobile Navigation */}
        </>
    );
};

export default Header;

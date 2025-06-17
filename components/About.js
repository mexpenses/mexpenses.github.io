import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function AboutCompany({ viewModeApp = false }) {
    const refVideo = useRef(null);
    const [volume, setVolume] = useState("off");

    const isVisiblePlayVideo = () => {
        if (!viewModeApp) {
            const video = refVideo.current;
            const rect = video?.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            console.log(rect.bottom, windowHeight)
            if (rect.bottom >= windowHeight / 1.8) {
                if (video.paused) {
                    video.play();
                }
            } else {
                if (!video.paused) {
                    video.pause();
                }
            }
        }
    };

    const toggleVolume = () => {
        setVolume(current => current.startsWith("off") ? "on" : "off");
    };

    useEffect(() => {
        if (!viewModeApp) {
            window.addEventListener('scroll', isVisiblePlayVideo);
            return () => window.removeEventListener('scroll', isVisiblePlayVideo);
        }
    }, [viewModeApp]);

    return (
        <main className="min-h-screen flex-col mt-16" id="contributors">
            <div className="flex flex-col item-start py-20 px-8 xl:px-5">
                <span className="uppercase text-center tracking-widest">Nossa missão</span>
                <h1 className="font-light text-center text-4xl lg:w-5/12 mx-auto leading-normal">
                    Possibilitar qualquer pessoa ter facilidade financeira <span className="text-blue-500 font-bold">sem planilhas</span>
                </h1>
            </div>
            <div className="relative">
                <button
                    type="button"
                    onClick={toggleVolume}
                    className="w-10 h-10 bg-white flex items-center justify-center absolute m-5 z-20 rounded-full hover:bg-neutral-200 drop-shadow-lg"
                >
                    <img src={`/assets/volume_${volume}.png`} width={30} alt="Volume" />
                </button>
                <video
                    loop
                    autoPlay
                    ref={refVideo}
                    preload="auto"
                    className="w-full"
                    muted={volume.startsWith("off")}
                >
                    <source src="/assets/publicity.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="flex flex-col items-center justify-center py-52 bg-[linear-gradient(to_bottom,rgba(255,235,222,.5),white),url('/assets/friends.png')] bg-cover bg-center px-8 xl:px-5">
                <h1 className="font-light text-5xl text-gray-800">
                    Nossa história
                </h1>
                <p className="lg:w-6/12 xl:w-4/12 mt-4 text-lg text-gray-800">
                    A Mexpenses surgiu em 2023 pra acabar com aquele drama de "pra onde foi meu dinheiro?".
                    Aqui você não vem só pra controlar gasto — vem pra domar o cartão de crédito, fazer o boleto te respeitar e ainda receber dicas da IA que não fica te julgando.
                    Liberdade financeira, sem terrorismo, sem corte no iFood e sem culpa.
                </p>
            </div>
            <hr className="border-blue-200 my-10" />
            <div className="flex flex-col item-start pt-32 px-8 xl:px-5">
                <h1 className="font-light text-center text-5xl lg:w-7/12 mx-auto">
                    Trabalhar na Mexpenses
                </h1>
                <p className="lg:w-7/12 mx-auto mt-4 text-lg">
                    Na Mex, estamos construindo novas maneiras inovadoras de ajudar as pessoas se sentirem mais
                    confortáveis com as finanças pessoais e novas tecnologias.
                </p>
                <div className="lg:w-7/12 mx-auto mt-5">
                    <span className="text-gray-800 font-semibold">Endereço comercial</span>&nbsp;
                    <Link target="_blank" className="cursor-pointer text-gray-700 hover:text-blue-500" href="https://maps.app.goo.gl/CtuL2636NDZwDY2x7">
                        R. Cel. José Eusébio, 95 - Higienópolis, São Paulo
                    </Link>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-14">
                    <div>
                        <img
                            alt=""
                            src="/assets/local/1.coworking.jpg"
                            className="h-auto max-w-full rounded-lg"
                        />
                    </div>
                    <div>
                        <img
                            alt=""
                            className="h-auto max-w-full rounded-lg"
                            src="/assets/local/1.jardim_entrada.jpg"
                        />
                    </div>
                    <div>
                        <img
                            alt=""
                            className="h-auto max-w-full rounded-lg"
                            src="/assets/local/1.jardim_vertical.jpg"
                        />
                    </div>
                    <div>
                        <img
                            alt=""
                            className="h-auto max-w-full rounded-lg"
                            src="/assets/local/1.jardim_vertical2.jpg"
                        />
                    </div>
                    <div>
                        <img
                            alt=""
                            className="h-auto max-w-full rounded-lg"
                            src="/assets/local/1.jardim_vertical3.jpg"
                        />
                    </div>
                    <div>
                        <img
                            alt=""
                            className="h-auto max-w-full rounded-lg"
                            src="/assets/local/2.sala_reuniao1.jpg"
                        />
                    </div>
                    <div>
                        <img
                            alt=""
                            className="h-auto max-w-full rounded-lg"
                            src="/assets/local/2.sala_reuniao2.jpg"
                        />
                    </div>
                    <div>
                        <img
                            alt=""
                            className="h-auto max-w-full rounded-lg"
                            src="/assets/local/3.escada_andar1.jpg"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
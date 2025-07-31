import { useEffect, useRef, useState } from "react";
import { Subscriptions } from "./Subscriptions";

const URL_SHORTS_TkkBits_YOUTUBE = "https://www.youtube.com/@HetznerOnline/shorts";
const URL_ABOUT_HETZNER_CLOUD = "https://www.hetzner.com";

const Pricing = ({ viewModeApp = false }) => {
    const refVideo = useRef(null);
    const [volume, setVolume] = useState("off");

    const isVisiblePlayVideo = () => {
        if (!viewModeApp) {
            const video = refVideo.current;
            const rect = video?.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            if (rect.top <= windowHeight / 1.5) {
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
        <div className={`bg-gradient-to-b from-white-300 to-white-500 w-full ${viewModeApp ? "pt-5" : ""}`}>
            <div className="flex flex-col w-full" id="pricing">
                {!viewModeApp &&
                    <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed text-left">
                            Calma lá! Antes de começar, dá uma olhadinha nos planos.
                        </h3>
                        <p className="leading-normal text-left my-2 w-10/12 sm:w-7/12 lg:w-6/12">
                            Escolhe um, ativa e bora pro modo vida financeira sem perrengue.
                        </p>
                    </div>
                }
                <Subscriptions />
            </div>
            {!viewModeApp &&
                <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center" id="hetzner">
                    <div className="flex flex-col w-full my-10">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed text-left">
                            Aqui, seus dados não vira mercadoria.
                        </h3>
                        <p className="leading-normal text-left my-10 w-full">
                            Na Mex, você não precisa sair espalhando seus dados sensíveis por aí. Tudo que você escolhe salvar fica protegido em servidores
                            da <strong onClick={() => window.open(URL_ABOUT_HETZNER_CLOUD)} className="cursor-pointer font-medium text-red-600 hover:text-red-700">Hetzner Cloud</strong>, uma gigante global da infraestrutura.
                        </p>
                        <div className="w-full flex justify-center items-center">
                            <div className="flex justify-start items-center gap-10 lg:gap-20 flex-wrap">
                                <img
                                    alt="Twipla"
                                    className="h-6"
                                    src="/assets/twipla_hetzner.png"
                                />
                                <img
                                    alt="Mexpenses"
                                    className="h-10"
                                    src="/assets/mexpenses-black.svg"
                                />
                                <img
                                    className="h-12"
                                    alt="chop solutions"
                                    src="/assets/chop_solutions_hetzner.png"
                                />
                                <img
                                    alt="Mastodon"
                                    className="h-10"
                                    src="/assets/mastodon_hetzner.png"
                                />
                                <img
                                    alt="Maria DB"
                                    className="h-14"
                                    src="/assets/mariadb_hetzner.png"
                                />
                                <img
                                    alt="TutKit"
                                    className="h-14"
                                    src="/assets/tutkit_hetzner.png"
                                />
                            </div>
                        </div>
                        {/* <div className="w-full text-start flex flex-col gap-2 mt-5">
                            <div className="flex flex-row flex-wrap font-medium">
                                <span>Sobre a Hetzner:&nbsp;</span>
                                <a target="_blank" href="https://www.hetzner.com" className="text-red-600 hover:text-red-700 truncate">https://www.hetzner.com</a>
                            </div>
                            <div className="flex flex-row flex-wrap font-medium">
                                <span>Vídeo retirado do YouTube Shorts:&nbsp;</span>
                                <a target="_blank" href="https://www.youtube.com/@HetznerOnline/shorts" className="text-red-600 hover:text-red-700 truncate">https://www.youtube.com/@HetznerOnline/shorts</a>
                            </div>
                        </div> */}
                        <div className="my-5 w-full flex flex-row flex-wrap overflow-hidden justify-start gap-5 relative">
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
                                muted={volume.startsWith("off")}
                                title={URL_SHORTS_TkkBits_YOUTUBE}
                                onClick={() => window.open(URL_SHORTS_TkkBits_YOUTUBE)}
                                className="h-full rounded-xl sm:rounded-tl-xl sm:rounded-bl-xl sm:rounded-tr-none sm:rounded-br-none sm:absolute cursor-pointer hover:border-4 hover:border-red-700 hover:rounded-xl transition-all"
                            >
                                <source src="/assets/datacenter_hetzner.mp4" type="video/mp4" />
                            </video>
                            <a href={URL_ABOUT_HETZNER_CLOUD} target="_blank">
                                <img
                                    alt="Hetzner (Data center)"
                                    src="/assets/hetzner_locations.png"
                                    className="w-full rounded-xl object-cover"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Pricing;
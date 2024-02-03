import X from "../public/assets/x.jpg";
import {memo, useEffect, useState} from "react";
import Head from "next/head";

const C0b5bf897a11db3ecc5c532ee91a3ac6166a90b3 = memo(() => {
    const S3_STORAGE = {
        1: "https://general-storage-mexpenses.s3.amazonaws.com/Eps1.0_como_eu_te_vejo.mp4.mp4",
        2: "https://general-storage-mexpenses.s3.amazonaws.com/Eps2.0_retrospectiva_2022-2023.mp4.mp4",
    };
    const [playing, setPlaying] = useState(null);
    const [isLogged, setIsLogged] = useState(false);

    const Player = () => {
        return (
            <>
                <button
                    style={{ zIndex: 500 }}
                    onClick={() => setPlaying(null)}
                    className="absolute font-extrabold bg-indigo-500 p-3 text-white rounded-full w-10 h-10 left-5 top-5 flex items-center justify-center"
                >
                    ↩
                </button>
                <div
                    style={{ height: "100vh" }}
                    className="flex items-center justify-center bg-black"
                >
                    <video autoPlay controls className="h-full w-full" src={S3_STORAGE[playing]}/>
                </div>
            </>
        );
    };

    const Content = () => {
        return (
            <div
                className="w-full bg-no-repeat min-h-screen lg:bg-center bg-cover bg-top text-white relative flex items-center"
                style={{
                    backgroundSize: "contain",
                    backgroundRepeat: "repeat",
                    backgroundImage: `linear-gradient(to right, #0f171e, #0f171e, #0f171eb6, #0f171e3c), url(${X.src})`,
                }}
            >
                <div
                    className="w-full lg:w-7/12 mt-10"
                    style={{ padding: "5% 3%" }}
                >
                    <h1 className="text-4xl font-medium">Senhora Robô</h1>
                    <div className="mt-2.5">
                            <span className="mr-2 pr-3 pl-2 rounded-sm font-medium bg-sky-700 text-xs py-1 inline-block relative topbox">
                                TOP 10
                            </span>
                        <span className="text-sm">Número 1 do Planeta</span>
                    </div>
                    <div className="mt-5 flex text-slate-400 items-center text-md">
                            <span className="border border-slate-400 text-xs px-1 rounded-sm font-bold">
                                IMDb
                            </span>
                        <span className="ml-3"> 2 Episódios </span>
                        <span className="ml-3"> 2022-2024 </span>
                        <span className="border border-slate-400 text-xs px-1 rounded-sm font-bold ml-3">
                                X-Ray
                            </span>
                        <span className="border border-slate-400 text-xs px-1 rounded-sm font-bold mx-3">
                                +18
                            </span>
                        <span className="border border-slate-400 text-xs px-1 rounded-sm font-bold mr-3">
                                HDR
                            </span>
                        <span className="border border-slate-400 text-xs px-1 rounded-sm font-bold">
                                UHD
                            </span>
                    </div>
                    <p className="mt-4 text-lg">
                        "Essência Única" nos leva para o mundo cativante de
                        Ingrid Matuques, uma mulher cuja singularidade a
                        torna um verdadeiro tesouro. A série desvenda as
                        camadas da vida de Ingrid, focando em seu charme
                        único, autocuidado excepcional e o amor especial que
                        ela nutre por Hector Silva, um homem completamente
                        obcecado por ela.
                    </p>
                    <div className="flex flex-wrap lg:flex-nowrap items-center mt-6">
                        <button
                            className="bg-sky-700 py-3 flex flex-col px-5 rounded-sm shadow-sm mr-2.5 mb-3"
                            style={{ cursor: "default" }}
                        >
                                <span className="truncate">
                                    Assistir com Mexpenses
                                </span>
                            <span className="truncate">Grátis</span>
                        </button>
                        <button
                            onClick={() => setPlaying(1)}
                            className="bg-slate-700 py-3 flex flex-col px-5 rounded-sm shadow-sm mr-2.5 mb-3"
                        >
                                <span className="truncate">
                                    Eps1.0_como_eu_te_vejo.mp4
                                </span>
                            <span className="truncate">
                                    <b>UHD</b>
                                </span>
                        </button>
                        <button
                            onClick={() => setPlaying(2)}
                            className="bg-slate-700 py-3 flex flex-col px-5 rounded-sm shadow-sm mr-2.5 mb-3"
                        >
                                <span className="truncate">
                                    Eps2.0_retrospectiva_2022-2023.mp4
                                </span>
                            <span className="truncate">
                                    <b>UHD</b>
                                </span>
                        </button>
                    </div>
                    <div className="text-slate-400 mt-6 text-md">
                        <div className="flex">
                            <p className="w-36 font-bold">Directors</p>
                            <p className="text-indigo-300 truncate">
                                Hector Silva
                            </p>
                        </div>
                        <div className="flex">
                            <p className="w-36 font-bold">Starring</p>
                            <p className="text-indigo-300 truncate">
                                Hector Silva e Ingrid Matuques
                            </p>
                        </div>
                        <div className="flex">
                            <p className="w-36 font-bold">Genres</p>
                            <p className="text-indigo-300 truncate">
                                Romance, Drama e Aventura
                            </p>
                        </div>
                        <div className="flex">
                            <p className="w-36 font-bold">Subtitles</p>
                            <p className="text-indigo-300 truncate">
                                Português
                            </p>
                        </div>
                        <div className="flex">
                            <p className="w-36 font-bold">
                                Audio languages
                            </p>
                            <p className="text-indigo-300">English</p>
                        </div>
                        <div className="flex">
                            <p className="truncate text-lg mt-2">
                                This is made by&nbsp;
                                <span className="text-indigo-300">
                                        Hector Silva
                                    </span>
                                . All rights reserved to Mexpenses.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    const Login = () => {
        const [secretFirst, setSecretFrist] = useState('');
        const [secretSecond, setSecretSecond] = useState('');

        const validateLogin = () => {
            if (secretFirst === 'd154923e-cb9b-4fd0-88ad-4b29f7a18617' && secretSecond === '495b07d7-d05c-416d-abc6-a6049d61105e') {
                setIsLogged(true);
            }
        };

        const onChangeInput = ({ target: { id, value }}) => {
            const handleInput = { secret_1: setSecretFrist, secret_2: setSecretSecond };
            handleInput[id](value);
        };

        useEffect(() => {
            validateLogin();
        },[secretFirst, secretSecond]);

        return (
            <>
                <Head>
                    <title>Login</title>
                </Head>
                <div className="container-login absolute w-full h-full overflow-hidden">
                    <div className="top-abstract"/>
                    <div className="bottom-abstract"/>
                    <div className="center-form">
                        <input
                            type="text"
                            id="secret_1"
                            value={secretFirst}
                            onChange={onChangeInput}
                            placeholder="Secret Key 1"
                        />
                        <input
                            type="text"
                            id="secret_2"
                            value={secretSecond}
                            onChange={onChangeInput}
                            placeholder="Secret Key 2"
                        />
                    </div>
                </div>
            </>
        );
    }

    const Main = () => {
        return (
            <>
                <Head>
                    <title>Hello Senhora Robô</title>
                </Head>
                {playing ? <Player/> : <Content/>}
            </>
        );
    };

    return isLogged ? <Main/> : <Login/>;
});

export default C0b5bf897a11db3ecc5c532ee91a3ac6166a90b3;

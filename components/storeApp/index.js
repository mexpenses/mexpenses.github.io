import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";

export const Store = () => {
    const router = useRouter();
    const [isPC, setIsPC] = useState(false);
    const [isIOS, setIsIOS] = useState(false);
    const [isAndroid, setIsAndroid] = useState(false);

    useEffect(() => {
        const userAgent = window.navigator.userAgent
        const android = /Android/i.test(userAgent);
        const ios = /iPhone|iPad|iPod/i.test(userAgent);
        if(ios) setIsIOS(ios);
        if(android) setIsAndroid(android)
        if(!android && !ios) setIsPC(true);
    }, []);

    if (isAndroid) {
        return (
            <>
                <img key="GooglePlay" src={`${router.basePath}/assets/google_play.png`} width={150} alt="Google Play"/>
                <Link href="https://app.mexpenses.com.br/#/auth/register/basic" target="_blank">
                    <img src={`${router.basePath}/assets/web_app.png`} width={135} alt="Web App" className="cursor-pointer"/>
                </Link>
            </>
        )
    } else if (isIOS) {
        return (
            <>
                <img key="AppStore" src={`${router.basePath}/assets/app_store.png`} style={{ border: '1px solid #80807f', borderRadius: 5 }} width={135} alt="App Store"/>
                <Link href="https://app.mexpenses.com.br/#/auth/register/basic" target="_blank">
                    <img src={`${router.basePath}/assets/web_app.png`} width={135} alt="Web App" className="cursor-pointer"/>
                </Link>
            </>
        )
    } else if(isPC){
        return (
            <>
                <img key="GooglePlay" src={`${router.basePath}/assets/google_play.png`} width={150} alt="Google Play"/>
                <img key="AppStore" src={`${router.basePath}/assets/app_store.png`} style={{ border: '1px solid #80807f', borderRadius: 5 }} width={135} alt="App Store"/>
                <Link href="https://app.mexpenses.com.br/#/auth/register/basic" target="_blank">
                    <img src={`${router.basePath}/assets/web_app.png`} width={135} alt="Web App" className="cursor-pointer"/>
                </Link>
            </>
        )
    } else {
        return null;
    }
};
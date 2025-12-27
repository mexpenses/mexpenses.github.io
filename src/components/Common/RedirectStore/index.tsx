"use client";

const STORE_URL = {
    "ios": "https://apps.apple.com/br/app/mexpenses/id6757622280",
    "android": "https://play.google.com/store/apps/details?id=com.appmexpenses",
    "desktop": "https://app.mexpenses.com.br/"
}

export default function RedirectStore() {
    if (typeof window !== 'undefined') {
        const userAgent = navigator.userAgent;
        if (/iPad|iPhone|iPod/.test(userAgent)) {
            window.location.href = STORE_URL.ios;
        } else if (/Android/.test(userAgent)) {
            window.location.href = STORE_URL.android;
        } else {
            window.location.href = STORE_URL.desktop;
        }
    }
    return <span>Redirecionando...</span>;
}
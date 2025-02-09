import { createContext, useLayoutEffect, useState } from "react";

export const Context = createContext({
    showBanner: true,
    viewModeApp: false,
    activeLinkNavbar: null,
    setShowBanner: () => { },
    setActiveLinkNavbar: () => { }
});

export const ContextProvider = ({ children }) => {
    const [showBanner, setShowBanner] = useState(true);
    const [viewModeApp, setViewModeApp] = useState(true);
    const [activeLinkNavbar, setActiveLinkNavbar] = useState(null);

    useLayoutEffect(() => {
        const urlSearchParams = new URLSearchParams(new URL(window.location.href).search);
        if (urlSearchParams.get("view_mode") === "app") {
            console.log("[view_mode: App] => true")
            setViewModeApp(true);
        } else {
            setViewModeApp(false);
        }
    }, []);

    return (
        <Context.Provider value={{ showBanner, viewModeApp, activeLinkNavbar, setActiveLinkNavbar, setShowBanner }}>
            {children}
        </Context.Provider>
    )
}
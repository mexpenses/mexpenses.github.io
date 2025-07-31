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
    const [viewModeApp, setViewModeApp] = useState(() => {
        if (typeof window !== "undefined") {
            const urlSearchParams = new URLSearchParams(window.location.search);
            return urlSearchParams.get("view_mode") === "app";
        }
        return false;
    });
    const [activeLinkNavbar, setActiveLinkNavbar] = useState(null);

    return (
        <Context.Provider value={{ showBanner, viewModeApp, activeLinkNavbar, setActiveLinkNavbar, setShowBanner }}>
            {children}
        </Context.Provider>
    )
}
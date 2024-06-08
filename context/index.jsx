import {createContext, useState} from "react";

export const Context = createContext({
    showBanner: true,
    activeLinkNavbar: null,
    setShowBanner: () => {},
    setActiveLinkNavbar: () => {}
});

export const ContextProvider = ({ children }) => {
    const [showBanner, setShowBanner] = useState(true);
    const [activeLinkNavbar, setActiveLinkNavbar] = useState(null);
    return (
        <Context.Provider value={{ showBanner, activeLinkNavbar, setActiveLinkNavbar, setShowBanner }}>
            {children}
        </Context.Provider>
    )
}
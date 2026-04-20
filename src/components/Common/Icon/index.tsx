import {HTMLAttributes, useEffect, useRef} from "react";
import {clsx} from "clsx";

interface IconRootProps extends HTMLAttributes<HTMLElement> {
    name: string;
    staticMarkup?: boolean;
    filled?: boolean;
    className?: string;
    [index: string]: any;
}

export const Icon = ({ name, filled = false, staticMarkup = false, className = '', ...restProps }: IconRootProps) => {
    const refIcon: { current: HTMLElement | null } = useRef(null);
    function checkFontLoaded() {
        document.fonts.load("24px Material Symbols Outlined").then(() => {
            if (refIcon.current) {
                refIcon.current.innerText = name;
            }
        });
    }
    useEffect(() => {
        checkFontLoaded();
    }, []);
    return (
        <i
            ref={refIcon}
            className={clsx(className, 'material-symbols-outlined min-w-6 min-h-6', { "filled-icon": filled })}
            {...restProps}
        >
            {staticMarkup ? name : null}
        </i>
    );
}
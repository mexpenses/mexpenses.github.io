import { Html, Main, NextScript } from 'next/document';
import SeoHead from "../components/SeoHead";

export default function Document() {
    return (
        <Html lang="en">
            <SeoHead/>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
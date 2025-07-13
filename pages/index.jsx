import Head from "next/head";
import Main from "../components/Main";
import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Template from "../components/Layout/Template";
import { useContext } from "react";
import { Context } from "../context";

export default function Home() {
    const { viewModeApp } = useContext(Context);
    return (
        <Template viewModeApp={viewModeApp}>
            <Head>
                <title>Mexpenses - Menos planilha. Mais vida!</title>
            </Head>
            {!viewModeApp &&
                <>
                    <Main />
                    <Feature />
                </>
            }
            <Pricing viewModeApp={viewModeApp}/>
        </Template>
    );
}
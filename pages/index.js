import Head from "next/head";
import Main from "../components/Main";
import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Template from "../components/Layout/Template";

export default function Home() {
    return (
        <Template>
            <Head>
                <title>Mexpenses - Troque suas planilhas com complexidades por simplicidade.</title>
            </Head>
            <Main />
            <Feature />
            <Pricing />
        </Template>
    );
}
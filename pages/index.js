import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Main from "../components/Main";
import Template from "../components/Layout/Template";
import Head from "next/head";

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
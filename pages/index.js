import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Main from "../components/Main";
import Layout from "../components/Layout/Layout";
import Head from "next/head";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Mexpenses - Troque suas planilhas com complexidades por simplicidade.</title>
            </Head>
            <Main />
            <Feature />
            <Pricing />
        </Layout>
    );
}
import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import PluggyIA from "../components/Pluggy&IA";
import Layout from "../components/Layout/Layout";
import Head from "next/head";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Mexpenses - Suas contas & Poder financeiro em um único lugar!</title>
            </Head>
            <PluggyIA />
            <Feature />
            <Pricing />
        </Layout>
    );
}

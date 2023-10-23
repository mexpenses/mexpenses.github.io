import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import PluggyIA from "../components/Pluggy&IA";
import Layout from "../components/Layout/Layout";
import Head from "next/head";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Mexpenses - Saia das planilhas e venha ter um brilho financeiro!</title>
            </Head>
            <PluggyIA />
            <Feature />
            <Pricing />
        </Layout>
    );
}

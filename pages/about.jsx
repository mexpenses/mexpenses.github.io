import Template from "../components/Layout/Template";
import Head from "next/head";
import AboutCompany from '../components/About';

export default function AboutPage() {
    return (
        <Template>
            <Head>
                <title>Mexpenses - Sobre nós</title>
                <link rel="canonical" href="https://www.mexpenses.com.br" />
            </Head>
            <AboutCompany/>
        </Template>
    );
}
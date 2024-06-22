import Template from "../components/Layout/Template";
import Head from "next/head";
import AboutCompany from '../components/About';

export default function AboutPage() {
    return (
        <Template>
            <Head>
                <title>Mexpenses - Sobre nós</title>
            </Head>
            <AboutCompany/>
        </Template>
    );
}
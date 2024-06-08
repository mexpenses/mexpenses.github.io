import Template from "../components/Layout/Template";
import Head from "next/head";
import About from '../components/About';

export default function AboutPage() {
    return (
        <Template>
            <Head>
                <title>Mexpenses - Sobre nós</title>
            </Head>
            <About/>
        </Template>
    );
}
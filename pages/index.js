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
            <div className="w-full flex justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500 p-5 flex-row flex-wrap gap-5">
                <iframe
                    width={500}
                    height={650}
                    frameBorder="0"
                    allowFullScreen=""
                    title="Publicação incorporada"
                    src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7117153490774204416"
                />
            </div>
            <Pricing />
        </Layout>
    );
}

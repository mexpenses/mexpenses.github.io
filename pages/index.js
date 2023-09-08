import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import PluggyIA from "../components/Pluggy&IA";
import Layout from "../components/Layout/Layout";

export default function Home() {
    return (
        <Layout>
            <PluggyIA />
            <Feature />
            <Pricing />
        </Layout>
    );
}

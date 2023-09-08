import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import PluggyIA from "../components/Pluggy&IA";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead/>
      <Layout>
        <PluggyIA />
        <Feature />
        <Pricing />
      </Layout>
    </>
  );
}

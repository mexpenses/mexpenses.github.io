import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { memo } from 'react';
import { useRouter } from 'next/router';

import { AppConfig } from '../../utils/AppConfig';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string | undefined;
};

const Meta = memo((props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/favicon.ico`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon.ico`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon.ico`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
        <meta name="robots" content="all"/>
        <meta name="generator" content="N/A"/>
        <meta name="revisit-after" content="1 day"/>
        <meta name="language" content="Portuguese"/>
        <meta name="theme-color" content="#000000"/>
        <meta httpEquiv="pragma" content="no-cache"/>
        <meta httpEquiv="cache-control" content="no-cache"/>
        <link rel="manifest" href={`${router.basePath}/manifest.json`}/>
        <link rel="apple-touch-icon" href={`${router.basePath}/favicon.ico`}/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta httpEquiv="content-language" content="pt-br, en-US, es-AR, es-MX, es-CL"/>
        <meta name="author" content="Hector Rodrigues da Silva, Maycon Moreira de Sá and Yara Leodoro"/>
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"/>
        <link rel="search" type="application/opensearchdescription+xml" title="Mexpenses" href={`${router.basePath}/opensearch.xml`}/>
        <meta name="description" content="Mexpenses - Com a gente você tem o melhor controle financeiro em suas mãos."/>
        <meta name="keywords" content="mexpenses,mexpenses controle financeiro,mexpenses website,site mexpenses,aplicação mexpenses,controle financeiro,controlar dinheiro,fatec garça,fatec,tcc controle financeiro,tcc fatec garça,tcc mexpenses,hector mexpenses,maycon mexpenses,yara mexpenses"/>
        <meta name="twitter:site" content="@mexpenses"/>
        <meta name="twitter:app:country" content="BR"/>
        <meta name="twitter:domain" content="mexpenses.github.io"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:app:name:ipad" content="Mexpenses iOS"/>
        <meta name="twitter:app:name:iphone" content="Mexpenses iOS"/>
        <meta name="twitter:app:id:googleplay" content="com.Mexpenses"/>
        <meta name="twitter:app:name:googleplay" content="Mexpenses Android"/>
        <meta name="twitter:image" content="https://mexpenses.github.io/assets/images/mexpenses.jpg"/>
        <meta name="twitter:title" content="Mexpenses - Controle financeiro."/>
        <meta name="twitter:description" content="Mexpenses - Com a gente você tem o melhor controle financeiro em suas mãos."/>
        <meta property="og:locale" content="pt-BR"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="600"/>
        <meta property="og:image:type" content="image/png"/>
        <meta property="og:url" content="https://mexpenses.github.io"/>
        <meta property="og:image" content="https://mexpenses.github.io/assets/images/mexpenses.jpg"/>
        <meta property="og:title" content="Mexpenses - Controle financeiro."/>
        <meta property="og:site_name" content="Mexpenses - Controle financeiro."/>
        <meta property="og:image:secure_url" content="https://mexpenses.github.io/assets/images/mexpenses.jpg"/>
        <meta property="og:description" content="Mexpenses - Com a gente você tem o melhor controle financeiro em suas mãos."/>
        <script type="application/ld+json">
          {'{"@context":"http://schema.org","@type":"Organization","name":"Mexpenses","url":"https://mexpenses.github.io","address":"Av.Pres.Vargas,2331-JoséRibeiro,Garça-SP,17400-000","sameAs":["https://www.facebook.com/fatecgarca/","https://www.linkedin.com/company/cps-fatecgarca/","https://www.instagram.com/fatecgarca/"]}'}
        </script>
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
      />
    </>
  );
});

export { Meta };

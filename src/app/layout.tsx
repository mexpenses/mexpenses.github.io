import Layout from '@/components/Layout';
import './globals.css';

const favicons = [
  {
    rel: 'apple-touch-icon',
    sizes: '57x57',
    href: '/favicon.ico',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '60x60',
    href: '/favicon.ico',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '72x72',
    href: '/favicon.ico',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '76x76',
    href: '/favicon.ico',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '114x114',
    href: '/favicon.ico',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '120x120',
    href: '/favicon.ico',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '144x144',
    href: '/favicon.ico',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '152x152',
    href: '/favicon.ico',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon.ico',
  },
  {
    rel: 'mask-icon',
    href: '/favicon.ico',
    color: '#fff',
  },
  {
    rel: 'icon',
    href: '/favicon.ico',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon.ico',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon.ico',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    href: '/favicon.ico',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/favicon.ico',
  },
  {
    rel: 'manifest',
    href: '/site.webmanifest',
  },
];

export const metadata = {
  title: 'Mexpenses - Menos planilha. Mais vida!',
  siteName: 'Mexpenses',
  description: 'Estamos aqui para te proporcionar algo além do controle financeiro. Estamos revolucionando o modo de como você cuida dos seus gastos, através de nossa Inteligência Artificial.',
  url: 'https://www.mexpenses.com.br',
  type: 'website',
  robots: 'follow, index',
  image: 'https://www.mexpenses.com.br/assets/thumbnail_link.png',
  author: 'Mexpenses Soluções Financeiras Ltda.'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" key="charset" />
        <meta name='robots' content={metadata.robots} />
        <meta name="generator" content="N/A" />
        <meta name="revisit-after" content="1 day" />
        <meta name="language" content="Portuguese" />
        <meta httpEquiv="pragma" content="no-cache" />
        <meta httpEquiv="cache-control" content="no-cache" />
        <meta content={metadata.description} name='description' />
        <link rel="manifest" href="/manifest.json" />
        <meta property='og:url' content={metadata.url} />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="content-language" content="pt-br, en-US, es-AR, es-MX, es-CL" />
        <meta name="author" content={metadata.author} />
        <link rel="search" type="application/opensearchdescription+xml" title="Mexpenses" href="/opensearch.xml" />
        <meta name="title" content={metadata.title} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap" />
        <meta name="description" content="Estamos aqui para te proporcionar algo além do controle financeiro. Estamos revolucionando o modo de como você cuida dos seus gastos, através de nossa Inteligência Artificial." />
        <meta name="keywords" content="gestão financeira com chatgpt,chatgpt,mexpenses com chat chatgpt,chatgpt no mexpenses,login chatgpt,gestão financeira gratuita,controle financeiro gratuito,finanças grátis,site de finanças grátis,finanças brasileiras,gestão financeira dos brasileiros,mexpenses,mexpenses controle financeiro,mexpenses website,site mexpenses,aplicação mexpenses,controle financeiro,controlar dinheiro,fatec garça,fatec,tcc controle financeiro,tcc fatec garça,tcc mexpenses,hector mexpenses,maycon mexpenses,yara mexpenses" />
        {/* Twitter */}
        <meta name="twitter:site" content="@mexpenses" />
        <meta name="twitter:app:country" content="BR" />
        <meta name="twitter:domain" content="www.mexpenses.com.br" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:app:name:ipad" content="Mexpenses iOS" />
        <meta name="twitter:app:name:iphone" content="Mexpenses iOS" />
        <meta name="twitter:app:id:googleplay" content="com.Mexpenses" />
        <meta name="twitter:app:name:googleplay" content="Mexpenses Android" />
        <meta name="twitter:image" content="https://www.mexpenses.com.br/assets/thumbnail_link.png" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content="Estamos aqui para te proporcionar algo além do controle financeiro. Estamos revolucionando o modo de como você cuida dos seus gastos, através de nossa Inteligência Artificial." />
        {/* Open Graph */}
        <meta property='og:type' content={metadata.type} />
        <meta property='og:site_name' content={metadata.siteName} />
        <meta property='og:description' content={metadata.description} />
        <meta property='og:title' content={metadata.title} />
        <meta name='image' property='og:image' content={metadata.image} />
        <meta property="og:locale" content="pt-BR" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content="https://www.mexpenses.com.br" />
        <meta property="og:image" content="https://www.mexpenses.com.br/assets/thumbnail_link.png" />
        <meta property="og:image:secure_url" content="https://www.mexpenses.com.br/assets/thumbnail_link.png" />
        <meta name="google-site-verification" content="lCNhAmQk9rLMDjhjfyxWtD39ERSRRAKVhB2OwMmPcsw" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: '{"@context": "https://schema.org", "@type": "Organization", "name": "Mexpenses", "url": "https://www.mexpenses.com.br", "address": "Garça/SP, CEP 17400-000", "sameAs": ["https://www.facebook.com/profile.php?id=100090266616695", "https://www.linkedin.com/company/mexpenses", "https://www.instagram.com/mexpenses", "https://www.youtube.com/@Mexpenses", "https://www.threads.net/@mexpenses", "https://www.tiktok.com/@mexpenses"] }' }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7473LM1VVQ"></script>
        {/*Meta Pixel Code*/}
        <script dangerouslySetInnerHTML={{ __html: '!function(e,t,n,a,c,o,s){e.fbq||(c=e.fbq=function(){c.callMethod?c.callMethod.apply(c,arguments):c.queue.push(arguments)},e._fbq||(e._fbq=c),c.push=c,c.loaded=!0,c.version="2.0",c.queue=[],(o=t.createElement(n)).async=!0,o.src=a,(s=t.getElementsByTagName(n)[0]).parentNode.insertBefore(o,s))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js"),fbq("init","1473665733161490"),fbq("track","PageView");' }} />
        <noscript><img height="1" alt="Facebook" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=1473665733161490&ev=PageView&noscript=1"
        /></noscript>
        {/*End Meta Pixel Code*/}
        <script dangerouslySetInnerHTML={{ __html: 'window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag(\'js\', new Date());gtag(\'config\', \'G-7473LM1VVQ\');' }} />

        {/* Favicons */}
        {favicons.map((linkProps) => (
          <link key={linkProps.href} {...linkProps} />
        ))}
        <meta name='msapplication-TileColor' content='#070606' />
        <meta
          name='msapplication-TileImage'
          content='favicon.ico'
        />
        <meta name='theme-color' content='#070606' />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
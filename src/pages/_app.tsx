import { memo } from 'react';
import { AppProps } from 'next/app';

import '../styles/global.css';

const MyApp = memo(({ Component, pageProps }: AppProps) =>
  <Component {...pageProps} />
);

export default MyApp;

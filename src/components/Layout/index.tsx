'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState, type ReactNode, ReactElement } from 'react';
import StyledComponentsRegistry from '../../../libs/registry';
import { GlobalStyles } from './GlobalStyles';

type ReactLenisProps = {
  children: ReactNode;
  root?: boolean;
  easing?: (t: number) => number;
};

const ReactLenis = dynamic(
  () =>
    import('@studio-freight/react-lenis').then(
      m => m.ReactLenis as unknown as (props: ReactLenisProps) => ReactElement
    ),
  { ssr: false }
);

const Header = dynamic(() => import('../UI/Header'), { ssr: false });
const Footer = dynamic(() => import('../UI/Footer'), { ssr: false });
const Preloader = dynamic(() => import('../UI/Preloader'), { ssr: false });

const Layout = ({ children }: { children: ReactNode }) => {
  const [complete, setComplete] = useState(false);
  const [isViewModeApp, setIsViewModeApp] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setIsViewModeApp(params.get('view_mode') === 'app');
  }, []);

  return (
    <StyledComponentsRegistry>
      <ReactLenis
        root
        easing={(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))}
      >
        <GlobalStyles />
        <Preloader setComplete={setComplete} />

        <div className={complete ? 'complete' : 'not_complete'}>
          {isViewModeApp ? (
            children
          ) : (
            <>
              <Header />
              {children}
              <Footer />
            </>
          )}
        </div>
      </ReactLenis>
    </StyledComponentsRegistry>
  );
};

export default Layout;
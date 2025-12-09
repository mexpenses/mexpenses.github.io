'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import StyledComponentsRegistry from '../../../libs/registry';
import { GlobalStyles } from './GlobalStyles';
import { Footer, Header, Preloader } from '..';
import { useState } from 'react';

const _window: Window | null = window !== undefined ? window : null;
const IS_VIEW_MODE_APP = new URLSearchParams(_window?.location.search).get("view_mode") === "app";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [complete, setComplete] = useState(false);
  return (
    <StyledComponentsRegistry>
      <ReactLenis
        root
        easing={(t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))}
      >
        <GlobalStyles />
        <Preloader setComplete={setComplete} />
        <div className={complete ? 'complete' : 'not_complete'}>
          {IS_VIEW_MODE_APP 
            ? children 
            : 
            <>
              <Header />
              {children}
              <Footer />
            </>
          }
        </div>
      </ReactLenis>
    </StyledComponentsRegistry>
  );
};

export default Layout;
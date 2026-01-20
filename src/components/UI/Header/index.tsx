'use client';

import Image from 'next/image';
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  BurgerMenu,
} from './styles';
import mexpenses_logo from '../../../../public/svgs/mexpenses_logo.svg';
import ic_bars from '../../../../public/svgs/ic_bars.svg';
import { GetStartedButton } from '@/components';
import AnimatedLink from '@/components/Common/AnimatedLink';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { links, menu } from './constants';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const STORE_URL = {
    "ios": "https://apps.apple.com/br/app/mexpenses/id6757622280",
    "android": "https://play.google.com/store/apps/details?id=com.appmexpenses",
    "desktop": "https://app.mexpenses.com.br/#/auth"
  }

    function redirectLogin () {
      if (typeof window !== 'undefined') {
          const userAgent = navigator.userAgent;
          if (/iPad|iPhone|iPod/.test(userAgent)) {
              return STORE_URL.ios;
          } else if (/Android/.test(userAgent)) {
              return STORE_URL.android;
          } else {
              return STORE_URL.desktop;
          }
      }
      return "https://app.mexpenses.com.br/#/auth";
  }

  const redirectLoginHref = redirectLogin();
  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <Image src={mexpenses_logo} width={100} alt="mexpenses_logo" priority />
          <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
            <motion.div
              variants={menu}
              animate={isOpen ? 'open' : 'closed'}
              initial="closed"
            ></motion.div>
            <Image src={ic_bars} alt="bars" />
          </BurgerMenu>
        </LogoContainer>
        <Nav className={isOpen ? 'active' : ''}>
          {links.map((link, i) => (
            <Link key={i} href={link.url}>
              <AnimatedLink title={link.linkTo} />
            </Link>
          ))}
        </Nav>
        <CallToActions className={isOpen ? 'active' : ''}>
          <Link target='_blank' href={redirectLoginHref}>
            <AnimatedLink title="Login" />
          </Link>
          <GetStartedButton padding="0.5rem 0.75rem" />
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;

'use client';
import { useRef } from 'react';
import { useInView, motion, Variants } from 'framer-motion';
import { 
  Wrapper, 
  Inner, 
  Content, 
  LogoContainer, 
  TextContent,
  Description,
  HighlightBox,
  HighlightText
} from './styles';

const SecurityPartner = () => {
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  const animateLogo: Variants = {
    initial: { y: '50px', opacity: 0 },
    open: {
      y: '0px',
      opacity: 1,
      transition: {
        duration: isMobile ? 0.5 : 0.8,
        delay: isMobile ? 0.1 : 0.2,
        ease: "easeOut"
      },
    },
  };

  const animateText: Variants = {
    initial: { y: '50px', opacity: 0 },
    open: {
      y: '0px',
      opacity: 1,
      transition: {
        duration: isMobile ? 0.5 : 0.8,
        delay: isMobile ? 0.2 : 0.4,
        ease: "easeOut"
      },
    },
  };

  const body = useRef(null);
  const isInView = useInView(body, {
    once: true,
    amount: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.1 : 0.4,
    margin: "-50px 0px -50px 0px"
  });

  return (
    <Wrapper ref={body}>
      <Inner>
        <Content>
          <motion.div
            variants={animateLogo}
            initial="initial"
            animate={isInView ? 'open' : 'initial'}
          >
            <LogoContainer>
              <img
                width="100%"
                height="100%"
                src="/assets/redbyte.png"
                alt="Redbyte Security Logo"
                style={{ borderRadius: 10 }}
              />
            </LogoContainer>
          </motion.div>
          <motion.div
            variants={animateText}
            initial="initial"
            animate={isInView ? 'open' : 'initial'}
          >
            <TextContent>
              <h1>Cibersegurança com Redbyte Security</h1>
              <a href='https://redbytesecurity.com.br' target='_blank'>
                <span style={{ color: "#ff6c68" }}>⇢ redbytesecurity.com.br</span>
              </a>
              <Description>
                Parceira especializada em cibersegurança, a Redbyte Security protege organizações 
                contra ameaças digitais e vulnerabilidades. Com expertise em pentest e análise de 
                vulnerabilidades, garantem que os dados estejam seguros.
              </Description>
              <HighlightBox>
                <HighlightText>
                  A Mexpenses já participou de um Bug Bounty com a Redbyte Security, que realiza 
                  auditorias contínuas em nossa plataforma. Priorizamos a segurança e levamos 
                  a sério a privacidade dos nossos usuários.
                </HighlightText>
              </HighlightBox>
            </TextContent>
          </motion.div>
        </Content>
      </Inner>
    </Wrapper>
  );
};

export default SecurityPartner;

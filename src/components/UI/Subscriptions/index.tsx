'use client';
import {
  Section,
  Header,
  Title,
  PricingGrid,
  IncludedWrapper,
  IncludedTitle,
  IncludedList,
  IncludedItem,
  PriceCol,
  PriceWrapper,
  Price,
  PriceSub,
  ButtonWrapper,
  Button,
  ButtonText
} from "./styles";
import Lottie from 'react-lottie';
import { useInView, motion, Variants } from 'framer-motion';
import AnimationRecommended from '../../../../public/animations/animation_recommended.json';
import { useRef, useState } from "react";

const _window: Window | null = window !== undefined ? window : null;
const IS_VIEW_MODE_APP = new URLSearchParams(_window?.location.search).get("view_mode") === "app";

const defaultOptionsAnimation = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const PRICE_MONTH = {
  free: "Grátis",
  basic: "R$ 9,90",
  premium: "R$ 14,90"
};

const PRICE_YEAR = {
  free: "Grátis",
  basic: "R$ 117,90",
  premium: "R$ 170,90"
};

const FEATURES_FREE = [
  "Entradas e saídas",
  "Suporte WhatsApp",
  "Registro de contas",
  "Categorias de despesas",
  "Calculadora de Impostos",
  "Visualização de taxas de juros",
  "Visualização de criptomoedas",
  "Faturas dos cartões de crédito",
  "Avisos sobre vencimentos das faturas"
];

const FEATURES_BASIC = [
  "Simulação de cofrinhos",
  "Análise de faturas com a Mex",
  "Registre despesas em parcelas",
  "Bancos físicos mais próximos de você",
  "Filtrar por datas suas despesas, receitas e saídas",
  "Histórico de pagamentos das despesas recorrentes",
  "Veja despesas pendentes e pagas apenas com um clique"
];

const FEATURES_PREMIUM = [
  "Suporte WhatsApp 24h",
  "Veja a B3 (Bolsa do Brasil)",
  "Conselhos semanais da Mex",
  "Exporte dados financeiros em CSV",
  "Veja o Mercado de ações dos EUA e Brasil"
];

const Subscriptions = () => {
  const [isYearly, setIsYearly] = useState(false);
  const prices = isYearly ? PRICE_YEAR : PRICE_MONTH;

  const redirectSubscription = (type: string) => {
    const baseURL = "https://app.mexpenses.com.br/#/auth/register"
    if (type === "free") {
      window.open(`${baseURL}/free?period=${isYearly ? "year" : "month"}`);
    }
    if (type === "basic") {
      window.open(`${baseURL}/basic?period=${isYearly ? "year" : "month"}`);
    }
    if (type === "premium") {
      window.open(`${baseURL}/premium?period=${isYearly ? "year" : "month"}`);
    }
  }
  
  const animateTitle: Variants = {
    initial: {
      y: '100%',
    },
    open: (i: number) => ({
      y: '0%',
      transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
    }),
  };
  const animateFree: Variants = {
    initial: {
      y: '100%',
    },
    open: (i: number) => ({
      y: '0%',
      transition: { duration: 1.5, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
    }),
  };
  const animateBasic: Variants = {
    initial: {
      y: '100%',
    },
    open: (i: number) => ({
      y: '0%',
      transition: { duration: 2, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
    }),
  };
  const animatePremium: Variants = {
    initial: {
      y: '100%',
    },
    open: (i: number) => ({
      y: '0%',
      transition: { duration: 2.5, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
    }),
  };
  const body = useRef(null);
  const isInView = useInView(body, { once: true, amount: 0.4 });
  return (
    <Section ref={body}>
      <Header>
        {!IS_VIEW_MODE_APP && 
          <Title>
            <motion.div
              variants={animateTitle}
              initial="initial"
              animate={isInView ? 'open' : ''}
              custom={'title'}
            >
              Planos populares e transparentes
            </motion.div>
          </Title>
        }
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <div style={{ 
            display: 'flex', 
            backgroundColor: '#1a1a1a', 
            borderRadius: '50px', 
            padding: '4px',
            border: '1px solid #3d3d3d'
          }}>
            <button
              onClick={() => setIsYearly(false)}
              style={{
                padding: '8px 24px',
                borderRadius: '50px',
                border: 'none',
                backgroundColor: !isYearly ? '#fff' : 'transparent',
                color: !isYearly ? '#000' : '#fff',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'all 0.2s ease'
              }}
            >
              Mensal
            </button>
            <button
              onClick={() => setIsYearly(true)}
              style={{
                padding: '8px 24px',
                borderRadius: '50px',
                border: 'none',
                backgroundColor: isYearly ? '#fff' : 'transparent',
                color: isYearly ? '#000' : '#fff',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'all 0.2s ease'
              }}
            >
              Anual
            </button>
          </div>
        </div>
      </Header>
      <motion.div
        variants={animateFree}
        initial="initial"
        animate={isInView ? 'open' : ''}
        custom={'card-free'}
      >
        <PricingGrid>
          <IncludedWrapper>
            <IncludedTitle>Gratuito</IncludedTitle>
            <IncludedList>
              {FEATURES_FREE.map((item) => (
                <IncludedItem key={item}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  {item}
                </IncludedItem>
              ))}
            </IncludedList>
          </IncludedWrapper>
          <PriceCol>
            <PriceWrapper>
              <Price>{prices.free}</Price>
            </PriceWrapper>
            {!IS_VIEW_MODE_APP &&
              <ButtonWrapper onClick={() => redirectSubscription("free")}>
                <Button>
                  <ButtonText>Começar Grátis</ButtonText>
                </Button>
              </ButtonWrapper>
            }
          </PriceCol>
        </PricingGrid>
      </motion.div>
      <motion.div
        variants={animateBasic}
        initial="initial"
        animate={isInView ? 'open' : ''}
        custom={'card-basic'}
      >
        <PricingGrid>
          <div style={{ position: "absolute", right: -40, top: -30 }}>
            <Lottie
              width={100}
              height={100}
              isClickToPauseDisabled
              options={{ ...defaultOptionsAnimation, animationData: AnimationRecommended }}
            />
          </div>
          <IncludedWrapper>
            <IncludedTitle>Flexível (Recomendado)</IncludedTitle>
            <IncludedList>
              {FEATURES_BASIC.map((item) => (
                <IncludedItem key={item}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  {item}
                </IncludedItem>
              ))}
            </IncludedList>
          </IncludedWrapper>
          <PriceCol>
            <PriceWrapper>
              <Price>{prices.basic} <span style={{fontSize: '1rem', fontWeight: 'normal'}}>{isYearly ? '/ ano' : '/ mês'}</span></Price>
              <PriceSub>Ganha seu 1° mês grátis</PriceSub>
            </PriceWrapper>
            {!IS_VIEW_MODE_APP &&
              <ButtonWrapper onClick={() => redirectSubscription("basic")}>
                <Button>
                  <ButtonText>Começar Basic</ButtonText>
                </Button>
              </ButtonWrapper>
            }
          </PriceCol>
        </PricingGrid>
      </motion.div>
      <motion.div
        variants={animatePremium}
        initial="initial"
        animate={isInView ? 'open' : ''}
        custom={'card-premium'}
      >
        <PricingGrid>
          <IncludedWrapper>
            <IncludedTitle>Poderoso</IncludedTitle>
            <IncludedList>
              {FEATURES_PREMIUM.map((item) => (
                <IncludedItem key={item}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  {item}
                </IncludedItem>
              ))}
            </IncludedList>
          </IncludedWrapper>
          <PriceCol>
            <PriceWrapper>
              <Price>{prices.premium} <span style={{fontSize: '1rem', fontWeight: 'normal'}}>{isYearly ? '/ ano' : '/ mês'}</span></Price>
              <PriceSub>Ganha seu 1° mês grátis</PriceSub>
            </PriceWrapper>
            {!IS_VIEW_MODE_APP &&
              <ButtonWrapper onClick={() => redirectSubscription("premium")}>
                <Button>
                  <ButtonText>Começar Premium</ButtonText>
                </Button>
              </ButtonWrapper>
          }
          </PriceCol>
        </PricingGrid>
      </motion.div>
    </Section>
  );
}

export default Subscriptions;
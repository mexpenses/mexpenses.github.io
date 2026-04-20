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
  ButtonText,
  ButtonGreen,
  CinemaOverlay,
  RailTrack,
  RailText
} from "./styles";
import Lottie from 'react-lottie';
import { useInView, motion, Variants } from 'framer-motion';
import AnimationRecommended from '../../../../public/animations/animation_recommended.json';
import { useEffect, useRef, useState } from "react";

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
  "Visualização de taxas de juros ",
  "Visualização de criptomoedas",
  "Faturas dos cartões de crédito",
  "Avisos sobre vencimentos das faturas"
];

const FEATURES_BASIC = [
  "Simulação de cofrinhos",
  "Registre despesas em parcelas",
  "Análise de faturas com a Mex (Web)",
  "Bancos físicos mais próximos de você",
  "Histórico de pagamentos das despesas recorrentes",
  "Filtrar por datas suas despesas, receitas e saídas",
  "Progresso em tempo real com base na sua Renda (App)",
  "Veja despesas pendentes e pagas apenas com um clique",
  "🎉 Sorteio de Brindes a cada 3 meses após o primeiro pagamento"
];

const FEATURES_PREMIUM = [
  "Suporte WhatsApp 24h",
  "Veja a B3 (Bolsa do Brasil)",
  "Conselhos semanais da Mex",
  "Exporte dados financeiros em CSV",
  "Veja o Mercado de ações dos EUA e Brasil",
];

const STORE_URL = {
  "ios": "https://apps.apple.com/br/app/mexpenses/id6757622280",
  "android": "https://play.google.com/store/apps/details?id=com.appmexpenses",
  "desktop": "https://app.mexpenses.com.br/"
}

const Subscriptions = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [specialCode, setSpecialCode] = useState('');
  const [secretResult, setSecretResult] = useState<{ title: string; text: string } | null>(null);
  const [isLoadingCode, setIsLoadingCode] = useState(false);

  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    const onEnd = () => setSecretResult(null);
    el.addEventListener('animationend', onEnd);
    return () => el.removeEventListener('animationend', onEnd);
  }, [secretResult]);

  const handleSendCode = async () => {
    if (!specialCode.trim() || isLoadingCode) return;
    setIsLoadingCode(true);
    try {
      const res = await fetch('https://web.mexpenses.com.br/api/v1/user/code.secret', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'key-platform': 'bad7ec02-289a-4c54-a7f6-5b540539c1b5-1fe3050f-d6b3-49ee-8812-35b22e0f4544',
        },
        body: JSON.stringify({ code: specialCode }),
      });
      if (res.ok) {
        const data = await res.json();
        setSecretResult(data);
      }
    } catch (_) {}
    setIsLoadingCode(false);
  };
  const prices = isYearly ? PRICE_YEAR : PRICE_MONTH;

  const redirectSubscription = (type: string) => {
    const baseURL = "https://app.mexpenses.com.br/#/auth/register";
    if (typeof window !== 'undefined') {
      const userAgent = navigator.userAgent;
      if (/iPad|iPhone|iPod/.test(userAgent)) {
        window.location.href = STORE_URL.ios;
      } else if (/Android/.test(userAgent)) {
        window.location.href = STORE_URL.android;
      } else {
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
    }
  }

  const isMobile = window.innerWidth < 768;

  const animateTitle: Variants = {
    initial: {
      y: '100%',
      opacity: 0
    },
    open: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: isMobile ? 0.6 : 1,
        ease: "easeOut"
      },
    },
  };
  const animateFree: Variants = {
    initial: {
      y: '50px',
      opacity: 0
    },
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
  const animateBasic: Variants = {
    initial: {
      y: '50px',
      opacity: 0
    },
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
  const animatePremium: Variants = {
    initial: {
      y: '50px',
      opacity: 0
    },
    open: {
      y: '0px',
      opacity: 1,
      transition: {
        duration: isMobile ? 0.5 : 0.8,
        delay: isMobile ? 0.3 : 0.6,
        ease: "easeOut"
      },
    },
  };
  const body = useRef(null);
  const isInView = useInView(body, {
    once: true,
    amount: window.innerWidth < 768 ? 0.1 : 0.4,
    margin: "-50px 0px -50px 0px"
  });
  return (
    <Section ref={body}>
      <Header>
        {!IS_VIEW_MODE_APP &&
          <Title>
            <motion.div
              variants={animateTitle}
              initial="initial"
              animate={isInView ? 'open' : 'initial'}
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
        animate={isInView ? 'open' : 'initial'}
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
        animate={isInView ? 'open' : 'initial'}
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
            <IncludedTitle>Flexível <small style={{ fontWeight: "normal" }}># Pacote Basic</small></IncludedTitle>
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
              <Price>{prices.basic} <span style={{ fontSize: '1rem', fontWeight: 'normal' }}>{isYearly ? '/ ano' : '/ mês'}</span></Price>
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
        animate={isInView ? 'open' : 'initial'}
      >
        <PricingGrid>
          <IncludedWrapper>
            <IncludedTitle>Poderoso <small style={{ fontWeight: "normal" }}># Pacote Basic + Premium</small></IncludedTitle>
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
              <Price>{prices.premium} <span style={{ fontSize: '1rem', fontWeight: 'normal' }}>{isYearly ? '/ ano' : '/ mês'}</span></Price>
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
      {/* <motion.div
        variants={animatePremium}
        initial="initial"
        animate={isInView ? 'open' : 'initial'}
      >
        <PricingGrid>
          <IncludedWrapper>
            <IncludedTitle>Apenas para pessoas especiais? 💚</IncludedTitle>
          </IncludedWrapper>
          <PriceCol>
            <input
              value={specialCode}
              onChange={(e) => setSpecialCode(e.target.value)}
              placeholder="Digite seu código"
              style={{
                padding: '10px 16px',
                borderRadius: '8px',
                border: '1px solid #3d3d3d',
                backgroundColor: '#1a1a1a',
                color: '#fff',
                fontSize: '0.875rem',
                outline: 'none',
                width: '100%',
              }}
            />
            <ButtonWrapper onClick={handleSendCode}>
              <ButtonGreen disabled={isLoadingCode}>
                <ButtonText>{isLoadingCode ? 'Enviando...' : 'Enviar código'}</ButtonText>
              </ButtonGreen>
            </ButtonWrapper>
          </PriceCol>
        </PricingGrid>
      </motion.div>
      {secretResult && (
        <CinemaOverlay key={secretResult.title}>
          <RailTrack ref={railRef} $duration={Math.max((secretResult.title.length + secretResult.text.length) * 0.12, 8)}>
            <RailText className="title">{secretResult.title}</RailText>
            <RailText className="description">{secretResult.text}</RailText>
          </RailTrack>
        </CinemaOverlay>
      )} */}
    </Section>
  );
}

export default Subscriptions;
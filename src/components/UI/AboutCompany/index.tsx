'use client';
import { useRef } from "react";
import { useInView, motion, Variants } from 'framer-motion';
import { Description, Header, Section, Title } from "./styles";

const AboutCompany = () => {
    const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

    const animateTitle: Variants = {
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

    const animateDescription: Variants = {
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

    const animateVideo: Variants = {
        initial: { y: '50px', opacity: 0 },
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
        amount: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.1 : 0.4,
        margin: "-50px 0px -50px 0px"
    });

    return (
        <Section ref={body}>
            <Header>
                <motion.div
                    variants={animateTitle}
                    initial="initial"
                    animate={isInView ? 'open' : 'initial'}
                >
                    <Title>Nossa história</Title>
                </motion.div>
                <motion.div
                    variants={animateDescription}
                    initial="initial"
                    animate={isInView ? 'open' : 'initial'}
                >
                    <Description>
                        A Mexpenses nasceu em 2024 com a missão de apoiar o brasileiro na superação dos desafios e da
                        realidade financeira do país. Nosso propósito é promover a evolução financeira dos nossos
                        clientes por meio de uma gestão consciente, especialmente no uso do cartão de crédito,
                        incentivando decisões responsáveis e afastando expectativas irreais. Com base na análise do
                        cotidiano financeiro de cada usuário, oferecemos insights práticos e aplicáveis, contribuindo
                        para uma relação mais saudável com o dinheiro, a satisfação do cliente e o cumprimento efetivo
                        da nossa missão.
                    </Description>
                </motion.div>
            </Header>
            <motion.div
                variants={animateVideo}
                initial="initial"
                animate={isInView ? 'open' : 'initial'}
                style={{ aspectRatio: "16 / 9", padding: 20 }}
            >
                <iframe
                    width="100%"
                    height="100%"
                    frameBorder={0}
                    allowFullScreen
                    title="YouTube video player"
                    referrerPolicy="strict-origin-when-cross-origin"
                    src="https://www.youtube.com/embed/Hy_29og0n9g?si=XjMjIGNBPL45KolJ"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
            </motion.div>
        </Section>
    )
}

export default AboutCompany;
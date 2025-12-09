'use client';
import { useRef } from "react";
import { Description, Header, Section, Title } from "./styles";

const AboutCompany = () => {
    const refVideo = useRef(null);
    return (
        <Section>
            <Header>
                <Title>Nossa história</Title>
                <Description>
                    A Mexpenses surgiu em 2024 pra acabar com aquele drama de "pra onde foi meu dinheiro?". 
                    Aqui você não vem só pra controlar gasto — vem pra domar o cartão de crédito, fazer o
                    boleto te respeitar e ainda receber dicas da IA que não fica te julgando.
                    Liberdade financeira, sem terrorismo, sem corte no iFood e sem culpa.
                </Description>
            </Header>
            <video
                loop
                muted
                autoPlay
                ref={refVideo}
                preload="auto"
            >
                <source src="/assets/publicity.mp4" type="video/mp4" />
            </video>
        </Section>
    )
}

export default AboutCompany;
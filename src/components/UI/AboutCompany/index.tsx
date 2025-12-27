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
                    A Mexpenses nasceu em 2024 com a missão de apoiar o brasileiro na superação dos desafios e da
                    realidade financeira do país. Nosso propósito é promover a evolução financeira dos nossos
                    clientes por meio de uma gestão consciente, especialmente no uso do cartão de crédito,
                    incentivando decisões responsáveis e afastando expectativas irreais. Com base na análise do
                    cotidiano financeiro de cada usuário, oferecemos insights práticos e aplicáveis, contribuindo
                    para uma relação mais saudável com o dinheiro, a satisfação do cliente e o cumprimento efetivo
                    da nossa missão.
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
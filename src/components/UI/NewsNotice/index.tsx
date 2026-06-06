import {
  Wrapper,
  Header,
  HeaderMeta,
  ProtocolLine,
  Seal,
  SealText,
  Title,
  Subtitle,
  Body,
  BodyParagraph,
  Divider,
  Footer,
  FooterLeft,
  FooterRight,
} from './styles';

export default function NewsNotice() {
  return (
    <Wrapper>
      <Header>
        <HeaderMeta>
          <ProtocolLine>Comunicado oficial Nº 001/2026</ProtocolLine>
          <ProtocolLine>Publicado em: 21 de agosto de 2026</ProtocolLine>
        </HeaderMeta>
        <Seal>
          <SealText>Serviços indisponíveis</SealText>
        </Seal>
      </Header>
      <Divider />
      <Title>Encerramento definitivo das atividades</Title>
      <Subtitle>Mexpenses Soluções Financeiras LTDA</Subtitle>
      <Body>
        <BodyParagraph>
          Em <strong>21 de agosto de 2026</strong>, a Mexpenses Soluções
          Financeiras LTDA encerrou definitivamente suas atividades, incluindo
          a operação do sistema web e do aplicativo móvel.
        </BodyParagraph>
        <BodyParagraph>
          O serviço encontra-se descontinuado em caráter permanente, sem
          previsão de retomada, em razão do cenário econômico adverso
          enfrentado pelas empresas no Brasil.
        </BodyParagraph>
        <BodyParagraph>
          Agradecemos a todos os usuários e parceiros que depositaram sua
          confiança na Mexpenses ao longo desta jornada.
        </BodyParagraph>
      </Body>

      <Divider />

      <Footer>
        <FooterLeft>
          <strong>Direção Executiva</strong>
          <span>Mexpenses Soluções Financeiras LTDA</span>
          <span>CNPJ: 55.552.018/0001-98</span>
        </FooterLeft>
        <FooterRight>
          <span>Data de vigência</span>
          <strong>21 ago. 2026</strong>
        </FooterRight>
      </Footer>
    </Wrapper>
  );
}

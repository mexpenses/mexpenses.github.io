import Image from 'next/image';
import mexpenses_logo from '../../../../public/svgs/mexpenses_logo.svg';
import qr_code from '../../../../public/images/qrcode_app.png';
import ic_google_playstore from '../../../../public/svgs/ic_google_playstore.svg';
import ic_baseline_apple from '../../../../public/svgs/ic_baseline_apple.svg';
import ic_copyright from '../../../../public/svgs/ic_copyright.svg';

const linksArr = [
  {
    title: 'Sobre nós',
    links: [{ text: "Empresa", target: null, path: "/about" }, { text: 'Política de privacidade', target: null, path: "/policy" }],
  },
  {
    title: 'Pagamentos',
    links: [{ text: 'Relatos de clientes', target: "_blank", path: "https://stripe.com/br/customers" }, { text: 'Privacidade e Termos', target: "_blank", path: "https://stripe.com/br/privacy" }],
  },
  {
    title: 'Contato',
    links: [{ text: 'Entrar em contato por e-mail', target: "_blank", path: "mailto:mexpenses.app@gmail.com" }],
  },
];

import {
  Wrapper,
  Inner,
  FooterLogo,
  FooterMainContent,
  FooterMiddle,
  QRContainer,
  QRImageCtn,
  TextCtn,
  IconCtn,
  FooterNavigation,
  GridColumn,
  LinksContainer,
  FooterBottom,
  InfoCompany,
  CopyRight,
  ColumnCompany,
} from './styles';
import Link from 'next/link';

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <FooterLogo>
          <Image src={mexpenses_logo} width={150} alt="mexpenses_logo" />
        </FooterLogo>
        <FooterMainContent>
          <FooterMiddle>
            <QRContainer>
              <QRImageCtn>
                <Image width={130} src={qr_code} alt="qr_code" />
              </QRImageCtn>
              <TextCtn>
                <p>Escaneie para baixar o app na Google Play ou App Store.</p>
                <IconCtn>
                  <Image src={ic_google_playstore} alt="playstore icon" />
                  <Image src={ic_baseline_apple} alt="apple icon" />
                </IconCtn>
              </TextCtn>
            </QRContainer>
            <FooterNavigation>
              {linksArr.map((l, i) => (
                <GridColumn key={i}>
                  <h3>{l.title}</h3>
                  <LinksContainer>
                    {l.links.map((link, i) => {
                      if (link.target) {
                        return (
                          <a key={i} href={link.path} target={link.target}>
                            <li>{link.text}</li>
                          </a>
                        )
                      } else {
                        return (
                          <Link key={i} href={link.path}>
                            <li>{link.text}</li>
                          </Link>
                        )
                      }
                    })}
                  </LinksContainer>
                </GridColumn>
              ))}
            </FooterNavigation>
          </FooterMiddle>
          <FooterBottom>
            <InfoCompany>
              <h3>Inscrita no CNPJ sob o nº 55.552.018/0001-98</h3>
            </InfoCompany>
            <ColumnCompany>
              <CopyRight>
                <Image src={ic_copyright} alt="copyright svg" />
                2024-{new Date().getFullYear()} Mexpenses Soluções Financeiras LTDA
              </CopyRight>
              <small>R. Cel. José Eusébio, 95 - Higienópolis, São Paulo</small>
            </ColumnCompany>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;

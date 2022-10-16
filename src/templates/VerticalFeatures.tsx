import { VerticalFeatureRow } from '../components/feature/VerticalFeatureRow';
import { Section } from '../components/layout/Section';

const VerticalFeatures: Function = (): JSX.Element => (
  <Section
    title="Sobre nossos recursos"
    description="Antes de começar veja um pouco mais das informações logo abaixo para ter uma melhor experiência durante o uso da plataforma."
  >
    <VerticalFeatureRow
      title="Faturas e despesas"
      description="Faça a gestão de todas as suas contas de qualquer instituição bancária."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Veja sua evolução"
      description="Acompanhe análises de despesas mensais para melhor controle financeiro."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Vença suas Dívidas"
      description="O Mexpenses unifica suas contas e cartões em um só lugar, fazendo você economizar e a lidar com suas dívidas da melhor maneira possível."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };

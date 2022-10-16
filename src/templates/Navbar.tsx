import Link from 'next/link';

import { Background } from '../components/background/Background';
import { Button } from '../components/button/Button';
import { HeaderAboutKnow } from '../components/header/HeaderAboutKnow';
import { Section } from '../components/layout/Section';
import { NavbarTwoColumns } from '../components/navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Navbar: Function = (): JSX.Element => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo/>}>
        <li>
          <Link href="#">
            <a>Login</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Registrar-se</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
    <Section yPadding="pt-20 pb-32">
      <HeaderAboutKnow
        title={
          <>
            <span>Com a gente você tem</span><br/>
            <span className="text-primary-500">O melhor controle financeiro em suas mãos.</span>
          </>
        }
        description="Fique ciente com as faturas de seus cartões, compras e despesas fixas."
        button={
          <Link href="#">
            <a>
              <Button xl>Quero conhecer</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Navbar };

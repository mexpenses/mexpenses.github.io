import Link from 'next/link';

import { Button } from '../components/button/Button';
import { BlockBanner } from '../components/blockBanner/BlockBanner';
import { Section } from '../components/layout/Section';

const Banner: Function = (): JSX.Element => (
  <Section>
    <BlockBanner
      title="Quer fazer parte do nosso time e contribuir com a plataforma?"
      subtitle="Somos uma plataforma Open-source"
      button={
        <Link href="https://github.com/HectorFront/Mexpenses">
          <a>
            <Button>Quero contribuir</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };

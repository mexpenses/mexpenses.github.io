import { memo } from 'react';
import Link from 'next/link';

import { Button } from '../components/button/Button';
import { BlockBanner } from '../components/blockBanner/BlockBanner';
import { Section } from '../components/layout/Section';

const Banner: Function = memo((): JSX.Element =>
  <Section>
    <BlockBanner
      title="Quer fazer parte do nosso time e contribuir com a plataforma?"
      subtitle="Somos uma plataforma Open-source"
      button={
        <Link target="_blank" href="mailto:mexpenses.app@gmail.com">
          <a>
            <Button>Quero contribuir</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };

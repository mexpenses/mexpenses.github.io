import {
  FAQ,
  Featured,
  FinancialFuture,
  FinancilaFreedom,
  HeroSection,
  IntroSection,
  JoinSection,
  OffersSection
} from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mexpenses - Finanças inteligentes + Sorteios excelentes'
};

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <Featured />
        <OffersSection />
        <FinancilaFreedom />
        <FinancialFuture />
        <IntroSection />
        <JoinSection />
        <FAQ />
      </main>
    </>
  );
}

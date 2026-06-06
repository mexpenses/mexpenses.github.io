import {
  FAQ,
  Featured,
  FinancialFuture,
  FinancialFreedom,
  HeroSection,
  IntroSection,
  JoinSection,
  NewsNotice,
  OffersSection
} from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mexpenses está com encerramento definitivo das atividades',
};

export default function Home() {
  return (
    <>
      <main>
        <NewsNotice />
        <HeroSection />
        <Featured />
        <OffersSection />
        <FinancialFreedom />
        <FinancialFuture />
        <IntroSection />
        <JoinSection />
        <FAQ />
      </main>
    </>
  );
}

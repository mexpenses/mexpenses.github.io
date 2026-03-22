import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mexpenses - Sorteios em tempo real'
};

export default function RaffleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

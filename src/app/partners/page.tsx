import { SecurityPartner } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mexpenses - Parceiros'
};

export default function Partners() {
  return (
    <main>
      <SecurityPartner />
    </main>
  );
}

import { RedirectStore } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Redirecionando...'
};

export default function QRCode () {
    return <RedirectStore/>
}
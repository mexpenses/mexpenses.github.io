import { Policy } from "@/components";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mexpenses - Política de privacidade'
};

export default function PagePolicy () {
    return (
        <Policy/>
    )
}
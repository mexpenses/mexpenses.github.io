import { AboutCompany } from "@/components";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mexpenses - Sobre nós'
};

export default function PageAbout () {
    return (
        <AboutCompany/>
    )
}
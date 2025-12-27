import ic_document_duplicate from '../../../../public/svgs/ic_document_duplicate.svg';
import ic_identification from '../../../../public/svgs/ic_identification.svg';
import ic_lock_closed from '../../../../public/svgs/ic_lock_closed.svg';

// For desktop
export const desktopHeaderPhrase = ["Veja suas faturas", 'num lugar só'];
export const desktopParagraphPhrase = [
  "Você é o tipo de pessoa que tem vários cartões?",
  "Identifique várias faturas de diferentes",
  "cartões de uma vez."
];

// For mobile
export const mobileHeaderPhrase = ["Veja suas faturas", 'num lugar só'];
export const mobileParagraphPhrase = [
  "Você é o tipo de pessoa que tem vários cartões?",
  "Identifique várias faturas de diferentes",
  "cartões de uma vez."
];

export const edges = [
  {
    point: 'Faturas do seu jeito',
    details: 'Cadastre suas compras em cada fatura e tenha o controle com flexibilidade.',
    icon: ic_document_duplicate,
  },
  {
    point: 'Acompanhe seu limite',
    details: 'Use bem seu cartão, acompanhe o total das faturas e veja se sempre está compatível com sua renda.',
    icon: ic_identification,
  },
  {
    point: 'Segurança',
    details: 'Processos e melhorias contínuas voltados à segurança da informação.',
    icon: ic_lock_closed,
  },
];
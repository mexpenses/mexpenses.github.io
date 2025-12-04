type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Perguntas', 'frequentes'];
export const mobileHeaderPhrase = ['Perguntas', 'frequentes'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'Somos um banco?',
    answer: 'Não. A Mexpenses é um Fintech voltada para gestão financeira pessoal com tecnologias de ponta.',
  },
  {
    question: 'Mexpenses é Gratuito?',
    answer: 'Temos o plano Gratuito e assinaturas a partir de R$ 9,90 para mais vantagens dentro do app.',
  },
  {
    question: 'Onde posso usar?',
    answer: 'A Mexpenses tem disponível a plataforma Web para desktops e também nosso aplicativo na App Store e Google Play.',
  },
  {
    question: 'Como faço para cancelar?',
    answer: 'A Mexpenses é flexível. Não há contratos nem compromissos. Você pode cancelar a sua assinatura ou deletar sua conta na internet com apenas dois cliques.',
  },
  {
    question: 'Mexpenses possui Open Finance?',
    answer: 'Infelizmente ainda não temos integração direta com os bancos, no momento priorizamos dados orgânicos para sua maior segurança.',
  },
  {
    question: 'Posso indicar a Mexpenses aos meus amigos e familiares?',
    answer: 'Sim. Se você indicar e comprovar essa indicação, vamos te presentear com 2 meses de assinatura Premium gratuitamente.',
  },
  {
    question: 'Meus dados vão ser vendidos e compartilhados com alguma instituição?',
    answer: 'Não! Aqui seus dados não vira mercadoria, eles estão dentro de nossos servidores privados com segurança auditada.',
  }
];

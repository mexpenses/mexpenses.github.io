
import ic_banknotes from '../../../../public/svgs/ic_banknotes.svg';
import ic_marker from '../../../../public/svgs/ic_marker.svg';
import ic_route from '../../../../public/svgs/ic_route.svg';

// For desktop
export const desktopHeaderPhrase = ['Sacar dinheiro urgente?', 'Mostramos o caminho'];
export const desktopParagraphPhrase = [
  'Literalmente um clique e mostramos no mapa',
  "os bancos mais próximos de você.",
];
export const desktopBriefNotePhrase = [
  'Economize',
  'Tempo',
  'Estresse',
  'Dinheiro.',
];

// For mobile
export const mobileHeaderPhrase = ['Sacar dinheiro urgente?', 'Mostramos o caminho'];
export const mobileParagraphPhrase = [
  'Literalmente um clique e mostramos no mapa',
  "os bancos mais próximos de você."
];

export const mobileBriefNotePhrase = [
  'Economize',
  'Tempo',
  'Estresse',
  'Dinheiro.'
];

export const edges = [
  {
    point: '1. Quero sacar dinheiro',
    details: 'Entre na opção Bancos próximos.',
    icon: ic_banknotes
  },
  {
    point: '2. Vejo bancos no mapa',
    details: 'Filtre por instituição e selecione a mais próxima.',
    icon: ic_marker
  },
  {
    point: '3. Já estou indo para o destino',
    details: 'Criamos a rota na mesma hora, rápido e fácil.',
    icon: ic_route
  },
];
'use client';

import { useEffect } from 'react';
import { AvatarLastUpdate, Wrapper, LastUpdate, Title, Inner, Content, ContainerFreebies, MoreFreebies } from './styles';
import CountdownTimer from './CountdownTimer';

function useAudioFadeOut(src: string, fadeSeconds = 1.5) {
  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.play().catch(() => {});

    const onTimeUpdate = () => {
      const remaining = audio.duration - audio.currentTime;
      if (remaining <= fadeSeconds) {
        audio.volume = Math.max(0, remaining / fadeSeconds);
      } else {
        audio.volume = 1;
      }
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.pause();
    };
  }, [src, fadeSeconds]);
}

const FEEDBACK_TITLE_RAFFLE = {
  pending: 'Próximo sorteio exclusivo para assinantes fidelizados',
  processing: 'Sorteando os melhores clientes do mundo',
  drawn: '🎉 Você foi o premiado parabéns desta vez! 🧸🎁',
  canceled: '😭 Infelizmente o sorteio foi cancelado temporariamente por problemas técnicos.'
}

export default function PageRaffle () {
    const dateRaffle = "2026-07-03T19:30:00";
    useAudioFadeOut('/assets/tick_tack.m4a', 1.5);
    return (
      <Wrapper>
        <Inner>
          <Content>
            <Title>{FEEDBACK_TITLE_RAFFLE.pending}</Title>
            <LastUpdate>
                Vencedor do último sorteio<AvatarLastUpdate src="https://lh3.googleusercontent.com/a/AGNmyxbjCw399oY9X-Ot0ewbqh_mDoKQ1jgvXAv0PjUx_g=s96-c"/><b>Hector Silva</b>
            </LastUpdate>

            <CountdownTimer dateRaffle={dateRaffle} />
            <ContainerFreebies>
              <img
                width={200}
                src={'/images/mex.png'}
              />
              <MoreFreebies>+</MoreFreebies>
              <img
                width={150}
                src={'/images/mistery_box.webp'}
              />
            </ContainerFreebies>
          </Content>
        </Inner>
      </Wrapper>
    );
}

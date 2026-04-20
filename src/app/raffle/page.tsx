'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Column,
  Line, Subtitle,
  Wrapper, LastUpdate,
  Title, Inner,
  Content, ContainerFreebies,
  MoreFreebies,
  ButtonParticipate,
  BackgroundPhoto
} from './styles';
import CountdownTimer from './CountdownTimer';
import { ItemList } from './itemList';

const KEY_PLATFORM = 'bad7ec02-289a-4c54-a7f6-5b540539c1b5-1fe3050f-d6b3-49ee-8812-35b22e0f4544';


const audio = new Audio('/assets/tick_tack.m4a');

export default function PageRaffle() {

  type RaffleInfo = {
    date: string | null;
    active: boolean;
    finished: boolean;
    total_participants: number;
    winner_user_name: string | null;
    winner_user_picture: string | null;
  };

  const INITIAL_RAFFLE_INFO: RaffleInfo = {
      date: null,
      active: false,
      finished: false,
      total_participants: 0,
      winner_user_name: null,
      winner_user_picture: null
  };

  const [loading, setLoading] = useState(true);
  const [finallyRaffle, setFinallyRaffle] = useState(false);
  const [raffleInfo, setRaffleInfo] = useState<RaffleInfo>(INITIAL_RAFFLE_INFO);

  const dataRaffleInfo = () => {
    setLoading(true);
    fetch('https://web.mexpenses.com.br/api/v1/user/raffle/current', {
      headers: {
        'key-platform': KEY_PLATFORM,
      },
    })
      .then(res => res.json())
      .then((data: RaffleInfo) => {
          const finished = data.date ? new Date(data.date).getTime() <= new Date().getTime() : false;
          if (finished) {
              setFinallyRaffle(true);
          }
          if (finished && !data.winner_user_name) {
              setTimeout(() => dataRaffleInfo(), 5000);
          }
          setRaffleInfo(data);
      })
      .catch(console.log)
      .finally(() => setLoading(false));
  };

  const fetched = useRef(false);
  useEffect(() => {
    if (fetched.current) return;
    fetched.current = true;
    dataRaffleInfo();
  }, []);

  useEffect(() => {
    
    const onTimeUpdate = () => {
      const remaining = audio.duration - audio.currentTime;
      if (remaining <= 1.5) {
        audio.volume = Math.max(0, remaining / 1.5);
      } else {
        audio.volume = 1;
      }
    };
    if (raffleInfo && raffleInfo?.active && !raffleInfo?.finished) {
      audio.loop = true;
      audio.play().catch(() => { });
      audio.addEventListener('timeupdate', onTimeUpdate);
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.pause();
    };
  }, [raffleInfo]);

  const STORE_URL = {
    "ios": "https://apps.apple.com/br/app/mexpenses/id6757622280",
    "android": "https://play.google.com/store/apps/details?id=com.appmexpenses",
    "desktop": "https://app.mexpenses.com.br/#/auth/register/basic"
  }

  function redirectCreateAccount () {
      if (typeof window !== 'undefined') {
          const userAgent = navigator.userAgent;
          if (/iPad|iPhone|iPod/.test(userAgent)) {
              return STORE_URL.ios;
          } else if (/Android/.test(userAgent)) {
              return STORE_URL.android;
          } else {
              return STORE_URL.desktop;
          }
      }
      return "https://app.mexpenses.com.br/#/auth/register/basic";
  }

  const redirectHref = redirectCreateAccount();
  return (
    <Wrapper>
      <Inner>
        <Content>
          <Title>Próximo sorteio exclusivo para assinantes fidelizados</Title>
          <Subtitle>
            🎉 Mascote Mex + Presente misterioso 🧸🎁
          </Subtitle>
          {(finallyRaffle && !raffleInfo?.winner_user_name) && (
            <LastUpdate>
              <b>Algoritmo sorteando o vencedor ...🎲</b>
            </LastUpdate>
          )}
          {(!loading && !raffleInfo?.date) && (
            <LastUpdate>
              <b>Muito em breve novo sorteio!</b>
            </LastUpdate>
          )}
          {raffleInfo?.finished && raffleInfo?.winner_user_name && (
            <LastUpdate>
              Vencedor do último sorteio&nbsp;
              {
                <BackgroundPhoto>
                  {raffleInfo?.winner_user_picture 
                  ? <img src={raffleInfo?.winner_user_picture} width={25} height={25} style={{ borderRadius: 50 }}/> 
                  : <span style={{ fontSize: 14 }}>ツ</span>}
                </BackgroundPhoto>
              }
              <b>{raffleInfo?.winner_user_name}</b>
            </LastUpdate>
          )}
          <CountdownTimer refresh={dataRaffleInfo} setFinallyRaffle={setFinallyRaffle} dateRaffle={raffleInfo?.date} />
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
          <Column style={{ gap: 5 }}>
            <ItemList
              icon='task_alt'
              title="Regras de participação"
              description="Assine um plano, aproveite o 1º mês grátis e, ao fazer seu primeiro pagamento e manter sua assinatura ativa, você ganha 1 bilhete para concorrer a brindes a cada 3 meses."
            />
            <Line />
            <ItemList
              icon='confirmation_number'
              title="Tenha mais sorte na hora de concorrer"
              description="Indique amigos para fazer uma assinatura com seu código e ganhe +1 bilhete. Sem limite de indicações, mais amigos, mais bilhetes, mais chances!"
            />
            <Line />
            <ItemList
              icon='av_timer'
              title="Meus bilhetes permanecem para sempre?"
              description="Todo assinante começa cada sorteio com 1 bilhete. Indique amigos e ganhe bilhetes extras para ter mais chances! Após cada sorteio, todos voltam para 1 bilhete, justo para todo mundo. 🎉"
            />
            <Line />
            <ItemList
              icon='delivery_truck_speed'
              title="Como funciona o envio dos brindes?"
              description="Mantenha seu endereço e contato atualizados no perfil. Torçemos para que você seja o próximo ganhador! Se isso acontecer, entraremos em contato pelo WhatsApp ou E-mail para confirmar a entrega."
            />
            <Line />
            <ItemList
              icon='domino_mask'
              title="Proteção contra fraudes"
              description="Para os golpistas de plantão: nossos sistemas identificam atividades suspeitas ao cancelar contas forjadas, garantindo que os sorteios sejam justos e seguros para todos os participantes."
          />
          </Column>
          <ButtonParticipate target="_blank" href={redirectHref}>Quero começar participar!</ButtonParticipate>
        </Content>
      </Inner>
    </Wrapper>
  );
}
'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import { ContainerTimer, GroupTimer, Timer, TimerSeparator, DescriptionTimer } from './styles';

interface TimeLeft {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ZERO: TimeLeft = { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };

function calcTimeLeft(dateRaffle: string, refresh: () => void, setFinallyRaffle: (val: boolean) => void): TimeLeft {
  const now = new Date();
  const target = new Date(dateRaffle);
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) return ZERO;

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;

  const nowCopy = new Date(now);
  let months = 0;
  while (true) {
    const next = new Date(nowCopy);
    next.setMonth(next.getMonth() + 1);
    if (next > target) break;
    months++;
    nowCopy.setMonth(nowCopy.getMonth() + 1);
  }

  const days = Math.floor((target.getTime() - nowCopy.getTime()) / (1000 * 60 * 60 * 24));
  if (seconds === 0 && minutes === 0 && hours === 0 && days === 0 && months === 0) {
    setFinallyRaffle(true);
    setTimeout(() => refresh(), 5000);
  }
  return { months, days, hours, minutes, seconds };
}

const digitStyle: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'inherit',
  fontWeight: 'inherit',
  background: 'linear-gradient(to right, #b4d2dd, #1485e2)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

function FlipDigit({ value }: { value: string }) {
  const prevRef = useRef(value);
  const [display, setDisplay] = useState({ current: value, prev: value });
  const [phase, setPhase] = useState<'idle' | 'animating'>('idle');

  useEffect(() => {
    if (value !== prevRef.current) {
      setDisplay({ prev: prevRef.current, current: value });
      prevRef.current = value;
      // Force browser to paint the "start" position before animating
      requestAnimationFrame(() => {
        setPhase('animating');
      });
    }
  }, [value]);

  useEffect(() => {
    if (phase === 'animating') {
      const t = setTimeout(() => setPhase('idle'), 450);
      return () => clearTimeout(t);
    }
  }, [phase]);

  const isAnimating = phase === 'animating';

  return (
    <span style={{
      display: 'inline-block',
      position: 'relative',
      width: '1ch',
      height: '1.2em',
      overflow: 'hidden',
    }}>
      <span style={{
        ...digitStyle,
        transition: isAnimating ? 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease' : 'none',
        transform: isAnimating ? 'translateY(-100%)' : 'translateY(0)',
        opacity: isAnimating ? 0 : 1,
      }}>
        {isAnimating ? display.prev : display.current}
      </span>
      {isAnimating && (
        <span style={{
          ...digitStyle,
          animation: 'flipDown 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        }}>
          {display.current}
        </span>
      )}
    </span>
  );
}

function FlipUnit({ value }: { value: string }) {
  return (
    <span style={{ display: 'flex', gap: 10 }}>
      {value.split('').map((digit, i) => (
        <FlipDigit key={i} value={digit} />
      ))}
    </span>
  );
}

const UNITS: { key: keyof TimeLeft; label: string }[] = [
  { key: 'months', label: 'Mês' },
  { key: 'days', label: 'Dia' },
  { key: 'hours', label: 'Horas' },
  { key: 'minutes', label: 'Minutos' },
  { key: 'seconds', label: 'Segundos' },
];

export default function CountdownTimer({ setFinallyRaffle, refresh, dateRaffle }: { setFinallyRaffle: (val: boolean) => void; refresh: () => void; dateRaffle: string | null }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(ZERO);

  useEffect(() => {
    let id: NodeJS.Timeout | undefined;
    if (dateRaffle) {
      setTimeLeft(calcTimeLeft(dateRaffle, refresh, setFinallyRaffle));
      id = setInterval(() => setTimeLeft(calcTimeLeft(dateRaffle, refresh, setFinallyRaffle)), 1000);
    }
    return () => id && clearInterval(id);
  }, [dateRaffle]);

  return (
    <>
      <style>{`
        @keyframes flipDown {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
      <ContainerTimer>
        {UNITS.map((unit, i) => (
          <Fragment key={unit.key}>
            <GroupTimer>
              <Timer>
                <FlipUnit value={String(timeLeft[unit.key]).padStart(2, '0')} />
              </Timer>
              <DescriptionTimer>{unit.label}</DescriptionTimer>
            </GroupTimer>
            {i < UNITS.length - 1 && <TimerSeparator>:</TimerSeparator>}
          </Fragment>
        ))}
      </ContainerTimer>
    </>
  );
}

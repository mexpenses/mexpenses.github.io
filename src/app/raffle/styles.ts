'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  padding: 5rem 0;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  max-width: 68rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Title = styled(motion.h1)`
    font-size: 35px;
    font-weight: 800;
    margin-bottom: 15px;
    background: linear-gradient(to right, #b4d2dd, #1485e2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: 768px) {
        font-size: 25px;
    }
`;

export const Column = styled(motion.div)`
    display: flex;
    flex-direction: column;
`;

export const Row = styled(motion.div)`
    display: flex;
    flex-direction: row;
`;

export const Line = styled(motion.div)`
    width: 100%;
    height: 1px;
    margin: 15px 0;
    background-color: #454545;
`;

export const BackgroundSymbol = styled(motion.div)`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: 99px;
    justify-content: center;
    background-color: #252525;
`;

export const Subtitle = styled(motion.h2)`
    color: white;
    font-size: 25px;
    font-weight: 800;
`;

export const ButtonParticipate = styled(Link)`
    border: 0;
    width: 100%;
    display: flex;
    margin-top: 30px;
    padding: 15px 30px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    border-radius: 6.25rem;
    background: var(--blue);
    color: var(--white);
    font-size: 1rem;
    font-weight: 600;
    &:hover {
        background: var(--blue-light);
    }
`;

export const LastUpdate = styled(motion.span)`
    gap: 5px;
    font-size: 15px;
    font-weight: 400;
    color: #c0d4ff;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BackgroundPhoto = styled(motion.div)`
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    border-radius: 99px;
    justify-content: center;
    background-color: #0568e0;
`;

export const ContainerTimer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    text-transform: uppercase;
    background: linear-gradient(to right, #b4d2dd, #1485e2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
     @media (max-width: 1030px) {
        gap: 35px;
        flex-direction: column;
    }
`;

export const GroupTimer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Timer = styled(motion.div)`
    font-size: 40px;
    font-weight: 800;
`;

export const DescriptionTimer = styled(motion.h2)`
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    letter-spacing: 1px;
    text-transform: uppercase;
`;

export const TimerSeparator = styled(motion.div)`
    font-size: 40px;
    font-weight: 800;
    display: flex;
    padding: 0 30px;

    @media (max-width: 1030px) {
        display: none;
    }
`;

export const ContainerFreebies = styled(motion.div)`
    gap: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (max-width: 1030px) {
        gap: 5px;
        flex-direction: column;
    }
`;

export const MoreFreebies = styled(motion.div)`
    font-size: 60px;
    font-weight: 800;
    background: linear-gradient(to right, #d2f3ff, #2d8cff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;
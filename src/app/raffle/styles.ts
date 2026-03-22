'use client';
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

export const AvatarLastUpdate = styled(motion.img)`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid #2563eb;
    box-shadow: 0 0 20px rgba(192, 212, 255, 0.2);
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
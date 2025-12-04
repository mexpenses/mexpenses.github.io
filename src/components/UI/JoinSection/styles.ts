'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 8.56rem;
  background: var(--blue-light);
`;

export const Inner = styled.div`
  display: flex;
  padding: 6.25rem 0;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  text-align: center;
  max-width: 48.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: var(--Background, #070606);
    font-size: 4.75rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3.75rem;
    }
  }
`;
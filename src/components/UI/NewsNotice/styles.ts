'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2.5rem 2.75rem;
  width: 100%;
  margin: 0 auto;
  background: #f7f8fa;
  border: 1px solid #c8cdd6;
  border-top: 4px solid #1a3a5c;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.18);
  font-family: 'Source Sans 3', 'Source Sans Pro', sans-serif;

  @media (max-width: 600px) {
    padding: 1.75rem 1.25rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const HeaderMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const ProtocolLine = styled.span`
  font-family: 'Source Sans 3', sans-serif;
  font-size: 0.80rem;
  color: #4a5568;
`;

export const Seal = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: #dfe2e7;
  color: #fff;
  padding: 0.35rem 0.85rem;
  flex-shrink: 0;
`;

export const SealText = styled.span`
  font-family: 'Source Sans 3', sans-serif;
  font-size: 0.85rem;
  color: black;
`;

export const Title = styled.h1`
  font-family: 'Source Serif 4', 'Source Serif Pro', serif;
  font-size: 1.55rem;
  font-weight: 600;
  color: #1a3a5c;
  line-height: 1.3;
  margin: 0;
  letter-spacing: -0.01em;

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Source Serif 4', serif;
  font-size: 0.9rem;
  color: #4a5568;
  margin: -0.75rem 0 0;
  font-style: italic;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

export const BodyParagraph = styled.p`
  font-family: 'Source Sans 3', sans-serif;
  font-size: 0.97rem;
  color: #2d3748;
  line-height: 1.8;
  margin: 0;
  text-align: justify;

  strong {
    color: #1a3a5c;
    font-weight: 700;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #c8cdd6;
  margin: 0;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;

  strong {
    font-size: 0.9rem;
    color: #1a3a5c;
  }

  span {
    font-size: 0.78rem;
    color: #718096;
    font-family: 'Source Sans 3', sans-serif;
  }
`;

export const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.1rem;

  span {
    font-size: 0.72rem;
    color: #718096;
    font-family: 'Source Sans 3', sans-serif;
  }

  strong {
    font-size: 0.9rem;
    color: #1a3a5c;
  }
`;

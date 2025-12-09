import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 0 auto;
  padding: 2rem 0;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 58rem;
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 2rem !important;
  overflow: hidden;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem !important;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  overflow: hidden;
  line-height: 1.7rem;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 16px !important;
  }
`;
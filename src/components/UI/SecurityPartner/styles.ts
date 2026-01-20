import styled from 'styled-components';

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
  gap: 3rem;
  max-width: 68rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const LogoContainer = styled.div`
  flex-shrink: 0;
  width: 200px;
  display: flex;
  padding: 15px;
  align-items: center;
  border-radius: 20px;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);

  img {
    object-fit: cover;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  h3 {
    font-size: 1.75rem;
    font-weight: 500;
    color: var(--blue-light);

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

export const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--link-color);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const HighlightBox = styled.div`
  background: linear-gradient(135deg, #f63b3b17 0%, #2563eb63 100%);
  border-left: 3px solid red;
  padding: 1.25rem;
  margin-top: 0.5rem;
`;

export const HighlightText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--link-color);
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 0.9375rem;
  }
`;
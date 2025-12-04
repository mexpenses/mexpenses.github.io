import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  max-width: 64rem;
  margin: 0 auto;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 58rem;
  width: 100%;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 4rem !important;
  line-height: 1.1;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 3rem !important;
  }
`;

export const PricingGrid = styled.div`
  width: 100%;
  display: grid;
  position: relative;
  align-items: flex-start;
  gap: 2.5rem;
  border: 1px solid #3d3d3d;
  border-radius: 0.5rem;
  padding: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 250px;
  }
`;

export const IncludedWrapper = styled.div`
  display: grid;
  gap: 1.5rem;
`;

export const IncludedTitle = styled.h3`
  font-size: 2rem !important;
`;

export const IncludedList = styled.ul`
  display: grid;
  gap: 0.75rem;
  font-size: 0.875rem !important;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const IncludedItem = styled.li`
  display: flex;
  color: #a1a1aa;
  align-items: center;

  svg {
    margin-right: 0.5rem;
    width: 1rem;
    height: 1rem;
  }
`;

export const PriceCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
`;

export const PriceWrapper = styled.div``;

export const Price = styled.h4`
  font-size: 3rem !important;
  text-wrap: nowrap;
`;

export const PriceSub = styled.p`
  font-size: 0.875rem !important;
  font-weight: 500;
  text-transform: uppercase;
  color: transparent;
  background: rgb(255, 0, 0);
  background: linear-gradient(
          90deg,
          rgba(255, 0, 0, 1) 0%,
          rgba(255, 149, 0, 1) 10%,
          rgba(255, 212, 0, 1) 20%,
          rgba(0, 181, 204, 1) 30%,
          rgba(0, 120, 255, 1) 40%,
          rgba(128, 0, 255, 1) 50%,
          rgba(255, 0, 234, 1) 60%,
          rgba(255, 0, 128, 1) 70%,
          rgba(255, 106, 0, 1) 80%,
          rgba(255, 0, 0, 1) 90%,
          rgba(255, 0, 0, 1) 100%
  );
  background-size: 500%;
  background-clip: text;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  animation: color-change 10s infinite ease-in-out;

  @keyframes color-change {
    0% {
        background-position: 0 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    to {
        background-position: 0 50%;
    }
  }
`;

export const ButtonWrapper = styled.a``;

export const Button = styled.button`
  width: 100%;
  cursor: pointer;
  padding: 10px 20px;
  font-weight: 600;
  position: relative;
  border-radius: 50px;
  background-color: black;
  border: 1px solid #3d3d3d;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    border-color: var(--blue);
    background-color: var(--blue);
  }
`;

export const ButtonText = styled.span`
  position: relative;
  display: block;
  font-size: 0.875rem !important;
  color: white;
`;
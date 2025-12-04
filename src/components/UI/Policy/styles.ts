import styled from 'styled-components';

interface StyledProps {
  mt?: string;
  mb?: string;
  size?: string;
  color?: string;
}

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  max-width: 64rem;
  margin: 0 auto;
  overflow: hidden;
`;

export const Container = styled.div`
  position: relative;
  background: #070606;
  color: #fff;
`;

export const BlueTextSmall = styled.p`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.75rem;
  color: #5f92ff;
`;

export const Title = styled.h1`
  margin-top: 0.5rem;
  font-size: 1.875rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #fff;

  @media (min-width: 640px) {
    font-size: 2.25rem;
  }
`;

export const Paragraph = styled.p<StyledProps>`
  margin-top: ${(props) => props.mt || '0'};
  font-size: ${(props) => props.size || '1rem'};
  line-height: 1.75rem;
  color: ${(props) => props.color || '#dcdcdc'};
`;

export const List = styled.ul`
  margin-top: 2rem;
  color: #bdbdbd;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 0.75rem;
`;

export const Strong = styled.strong`
  font-weight: 600;
  color: #fff;
`;

export const Heading2 = styled.h2<StyledProps>`
  margin-top: ${(props) => props.mt || '4rem'};
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #fff;
  margin-bottom: ${(props) => props.mb || '0'};
`;

export const OrderedList = styled.ol`
  list-style: decimal;
  padding-left: 1.25rem;
  color: #bdbdbd;
`;

export const ContactLink = styled.b`
  display: flex;
  align-items: center;
  margin: 0;
  color: #5f92ff;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: #79a3ff;
  }
`;

export const Icon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
`;
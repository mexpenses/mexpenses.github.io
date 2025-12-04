'use client';
import {
  Wrapper,
  Inner,
  Header
} from './styles';
import { MaskText } from '@/components';
import { desktopHeaderPhrase } from './constants';

const JoinSection = () => {

  return (
    <Wrapper>
      <Inner>
        <Header>
          <MaskText phrases={desktopHeaderPhrase} tag="h1" />
        </Header>
      </Inner>
    </Wrapper>
  );
};

export default JoinSection;

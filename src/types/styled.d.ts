import 'styled-components';
import { ReactNode } from 'react';

interface StyledProps {
  mt?: string;
  mb?: string;
  size?: string;
  color?: string;
  as?: keyof JSX.IntrinsicElements;
  children?: ReactNode;
}

declare module 'styled-components' {
  export interface DefaultTheme {}
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
declare module 'react-lottie' {
  import { Component } from 'react';

  export interface LottieProps {
    options: {
      loop?: boolean;
      autoplay?: boolean;
      animationData?: any;
      rendererSettings?: {
        preserveAspectRatio?: string;
      };
    };
    height?: number;
    width?: number;
    isClickToPauseDisabled?: boolean;
  }

  export default class Lottie extends Component<LottieProps> {}
}
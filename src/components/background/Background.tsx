import { ReactNode, memo } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
};

const Background = memo((props: IBackgroundProps) =>
  <div className={props.color}>{props.children}</div>
);

export { Background };

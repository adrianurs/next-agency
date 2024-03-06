import { FC } from 'react';

export type DividerProps = {
  text?: string | number;
  width?: number;
  className?: string;
};

export type DividerFC = FC<DividerProps>;

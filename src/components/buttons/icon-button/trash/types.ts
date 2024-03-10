import { FC } from 'react';

export type TrashButtonProps = {
  onClick?: () => void;
  tooltip?: string;
  size?: number;
};

export type TrashButtonFC = FC<TrashButtonProps>;

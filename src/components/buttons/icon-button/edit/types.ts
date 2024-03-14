import { FC } from 'react';

export type EditButtonProps = {
  onClick?: () => void;
  tooltip?: string;
  size?: number;
};

export type TrashButtonFC = FC<EditButtonProps>;

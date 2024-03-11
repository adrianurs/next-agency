import { FC } from 'react';

export type CloseButtonProps = {
  onClick?: () => void;
  tooltip?: string;
  size?: number;
};

export type CloseButtonFC = FC<CloseButtonProps>;

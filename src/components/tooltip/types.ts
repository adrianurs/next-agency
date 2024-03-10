import { FC, ReactNode } from 'react';

export type TooltipProps = {
  children?: ReactNode;
  tooltip?: string;
};

export type TooltipFC = FC<TooltipProps>;

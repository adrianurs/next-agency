import { FC, ReactNode } from 'react';

export interface IViewContainerProps {
  children?: ReactNode;
  flex?: boolean;
}

export type ViewContainerFC = FC<IViewContainerProps>;

import { FC, ReactNode } from 'react';

export interface IViewContainerProps {
  children: ReactNode;
}

export type ViewContainerFC = FC<IViewContainerProps>;

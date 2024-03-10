import { FC, ReactNode } from 'react';

export type LoaderWrapperProps = {
  isLoading?: boolean;
  /**
   * Max 10
   */
  loaderSize?: number;
  children?: ReactNode;
};

export type LoaderWrapperFC = FC<LoaderWrapperProps>;

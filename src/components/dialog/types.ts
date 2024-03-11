import { FC, ReactNode } from 'react';

export type DialogProps = {
  title?: string;
  onClose?: () => void;
  withButton?: boolean;
  buttonTitle?: string;
  children?: ReactNode;
  isOpen?: boolean;
};

export type DialogFC = FC<DialogProps>;

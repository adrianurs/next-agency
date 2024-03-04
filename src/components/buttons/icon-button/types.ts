import { FC, ReactNode } from 'react';
import { ButtonProps } from '../types';

interface IconButtonProps extends ButtonProps {
  icon: ReactNode;
}

export type IconButtonFC = FC<IconButtonProps>;

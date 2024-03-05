import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

export interface InputPasswordProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: string | boolean;
}

export type InputPasswordFC = FC<InputPasswordProps>;

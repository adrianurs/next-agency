import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

export interface InputBaseProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: string | boolean;
}

export type InputBaseFC = FC<InputBaseProps>;

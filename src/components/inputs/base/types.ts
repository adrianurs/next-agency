import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

export type InputBaseProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
export type InputBaseFC = FC<InputBaseProps>;

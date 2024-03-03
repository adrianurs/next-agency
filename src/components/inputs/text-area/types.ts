import { DetailedHTMLProps, FC, TextareaHTMLAttributes } from 'react';

export type TextAreaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;
export type TextAreaFC = FC<TextAreaProps>;

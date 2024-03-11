import { DetailedHTMLProps, FC, TextareaHTMLAttributes } from 'react';

export interface TextAreaProps
  extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  error?: string | boolean;
}
export type TextAreaFC = FC<TextAreaProps>;

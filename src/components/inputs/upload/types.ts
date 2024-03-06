import { FC, HTMLProps } from 'react';

export type InputUploadProps = {
  onChange?: (file: File) => void;
  accept?: HTMLProps<HTMLInputElement>['accept'];
  label?: string;
  name?: string;
};

export type InputUploadFC = FC<InputUploadProps>;

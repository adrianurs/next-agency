import { FC } from 'react';

export type FormProps = {
  action: (formData: FormData) => void;
};

export type FormFC = FC<FormProps>;

import { FC } from 'react';

export type FormProps<T> = {
  action: (formData: T) => void;
};

export type FormFC<T> = FC<FormProps<T>>;

import { FC } from 'react';

export type FormState = { message?: string; error?: string; success?: string };

export type FormProps = {
  action: (previousState: FormState, formData: FormData, ...others: any) => Promise<FormState>;
};

export type FormFC = FC<FormProps>;

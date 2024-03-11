import { password_regex } from '@/lib';
import * as Yup from 'yup';
import { SignInUser } from './types';

export const validationSchema = Yup.object({
  username: Yup.string().min(3, 'Email or username should contain at least 3 chars.').required(),
  password: Yup.string()
    .matches(
      password_regex,
      'Password must contain 8 chars: minimum a camel case, a camel case and a number.'
    )
    .required('Password is required.')
});

export const initialValues: SignInUser = {
  password: '',
  username: ''
};

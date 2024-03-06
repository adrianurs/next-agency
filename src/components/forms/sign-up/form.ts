import { email_regex, password_regex } from '@/lib';
import * as Yup from 'yup';
import { CreateUser } from './types';
import { FormState } from '../types';

export const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, 'Username must contain minimum 3 chars')
    .max(15, 'Username must contain maximum 15 chars')
    .required('Username is required'),
  email: Yup.string()
    .matches(email_regex, 'Must enter a valid email.')
    .required('Email is required'),
  password: Yup.string()
    .matches(
      password_regex,
      'Password must contain 8 chars: minimum a lower case, an upper case and a number.'
    )
    .required('Password is required.'),
  passwordAgain: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Password must be confirmed.')
});

export const initialValues: CreateUser = {
  avatar: '',
  email: '',
  password: '',
  passwordAgain: '',
  username: ''
};

export async function parseAvatar(
  _: FormState,
  formData: FormData,
  action: (_: FormState, formData: FormData, avatar?: string) => Promise<FormState>
): Promise<FormState> {
  try {
    const avatar = Object.fromEntries(formData).avatar;
    let base64: string | undefined;

    if (avatar) {
      const blob = await fetch(avatar as string)
        .then((r) => r.blob())
        .catch((e) => {
          throw e;
        });
      base64 = await new Promise((res, rej) => {
        var reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          res(reader.result as string);
        };
        reader.onerror = () => {
          rej('Failed reading file!');
        };
      });
    }

    return await action(_, formData, base64);
  } catch (e) {
    return { error: 'Failed parsing avatar' };
  }
}

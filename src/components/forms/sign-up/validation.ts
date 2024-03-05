import { email_regex, password_regex } from '@/lib';
import zod from 'zod';

export const validationSchema = zod
  .object({
    email: zod
      .string()
      .min(3, 'Username must contain minimum 3 chars')
      .max(15, 'Username must contain maximum 15 chars'),
    username: zod.string().regex(email_regex, 'Must enter a valid email.'),
    password: zod
      .string()
      .regex(
        password_regex,
        'Password must contain 8 chars: minimum a camel case, a camel case and a number.'
      ),
    passwordAgain: zod
      .string()
      .regex(
        password_regex,
        'Password must contain 8 chars: minimum a camel case, a camel case and a number.'
      )
  })
  .refine((schema) => schema.password === schema.passwordAgain, 'Password must match.');

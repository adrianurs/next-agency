'use client';
import Link from 'next/link';
import { PrimaryButton, InputBase, InputPassword } from '@/components';
import { FormFC } from '../types';
import { validationSchema, initialValues } from './form';
import { useFormik } from 'formik';
import styles from './styled.module.css';
import { CreateUser } from './types';

export const SignUpForm: FormFC<CreateUser> = ({ action }) => {
  const { dirty, errors, isValid, touched, values, handleChange, handleBlur, handleSubmit } =
    useFormik<CreateUser>({
      validationSchema,
      onSubmit: action,
      initialValues
    });

  return (
    <form className={styles.form_wrapper} onSubmit={handleSubmit}>
      <InputBase
        type='email'
        name='email'
        placeholder='Email'
        className={styles.form_input}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && errors.email}
      />
      <InputBase
        name='username'
        placeholder='Username'
        className={styles.form_input}
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.username && errors.username}
      />
      <InputPassword
        type='password'
        name='password'
        placeholder='Password'
        className={styles.form_input}
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && errors.password}
      />
      <InputPassword
        type='password'
        name='passwordAgain'
        placeholder='Confirm password'
        className={styles.form_input}
        value={values.passwordAgain}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.passwordAgain && errors.passwordAgain}
      />
      <div className={`${styles.action_container}`}>
        <PrimaryButton
          disabled={!dirty || !isValid}
          type='submit'
          className={`${styles.form_submit}`}
        >
          Submit
        </PrimaryButton>
      </div>
      <div className={`${styles.action_container}`}>
        <Link href='/sign-in' className={`${styles.link}`}>
          Already have an account? Sign In instead
        </Link>
      </div>
    </form>
  );
};

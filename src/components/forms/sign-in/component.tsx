'use client';
import Link from 'next/link';
import { FormFC } from '../types';
import { InputBase, InputPassword, PrimaryButton } from '@/components';
import styles from './styled.module.css';
import { SignInUser } from './types';
import { useFormik } from 'formik';
import { validationSchema, initialValues } from './form';
import { useFormState } from 'react-dom';

export const SignInForm: FormFC<SignInUser> = ({ action }) => {
  const { dirty, errors, isValid, touched, values, handleChange, handleBlur, handleSubmit } =
    useFormik({
      validationSchema,
      initialValues,
      onSubmit: action
    });

  return (
    <form className={styles.form_wrapper} onSubmit={handleSubmit}>
      <InputBase
        name='username'
        placeholder='Username or email'
        className={styles.form_input}
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.username && errors.username}
      />
      <InputPassword
        name='password'
        placeholder='Password'
        className={styles.form_input}
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && errors.password}
      />
      <div className={`${styles.action_container}`}>
        <PrimaryButton disabled={!dirty && !isValid} className={`${styles.form_submit}`}>
          Submit
        </PrimaryButton>
      </div>
      <div className={`${styles.action_container}`}>
        <Link href='/sign-up' className={`${styles.link}`}>
          Don&apos;t have an account? Sign Up instead.
        </Link>
      </div>
    </form>
  );
};

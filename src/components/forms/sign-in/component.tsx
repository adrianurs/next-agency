'use client';
import Link from 'next/link';
import { FormFC, FormState } from '../types';
import { InputBase, InputPassword, PrimaryButton } from '@/components';
import { useFormik } from 'formik';
import { validationSchema, initialValues } from './form';
import { useFormState } from 'react-dom';
import styles from './styled.module.css';

export const SignInForm: FormFC = ({ action }) => {
  const [formState, actionFormState] = useFormState<FormState, FormData>(action, {});
  const { dirty, errors, isValid, touched, values, handleChange, handleBlur } = useFormik({
    validationSchema,
    initialValues,
    onSubmit: () => {}
  });

  return (
    <form className={styles.form_wrapper} action={actionFormState}>
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
        {formState?.error && <p className={styles.submission_error}>{formState?.error}</p>}
        <PrimaryButton
          type='submit'
          disabled={!dirty && !isValid}
          className={`${styles.form_submit}`}
        >
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

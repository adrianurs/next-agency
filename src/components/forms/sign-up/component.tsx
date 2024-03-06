'use client';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { PrimaryButton, InputBase, InputPassword, InputUpload, Avatar } from '@/components';
import { validationSchema, initialValues } from './form';
import { FormFC, FormState } from '../types';
import { CreateUser } from './types';
import { useFormik } from 'formik';
import styles from './styled.module.css';

export const SignUpForm: FormFC = ({ action }) => {
  const [formState, actionFormState] = useFormState<FormState, FormData>(action, {});
  const { dirty, errors, isValid, touched, values, handleChange, handleBlur, setFieldValue } =
    useFormik<CreateUser>({
      validationSchema,
      initialValues,
      onSubmit: () => {}
    });

  useEffect(() => {
    if (formState.success) redirect('/sign-in');
  }, [formState.success]);

  return (
    <form className={styles.form_wrapper} action={actionFormState}>
      <div className={styles.avatar_row}>
        <Avatar image={values.avatar} size={100} />
        <InputUpload
          label='Upload avatar'
          onChange={(file: File) => setFieldValue('avatar', URL.createObjectURL(file))}
        />
      </div>
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
      {formState.error && <p className={styles.submission_error}>{formState.error}</p>}
      <div className={`${styles.action_container}`}>
        <PrimaryButton disabled={!dirty || !isValid} className={`${styles.form_submit}`}>
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

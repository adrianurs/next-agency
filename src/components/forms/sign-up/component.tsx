'use client';
import Link from 'next/link';
import { PrimaryButton, InputBase } from '@/components';
import { FormFC } from '../types';
import { validationSchema } from './validation';
import { useFormik } from 'formik';
import styles from './styled.module.css';

export const SignUpForm: FormFC = ({ action }) => {
  const { dirty, errors } = useFormik({
    validationSchema,
    onSubmit: action,
    initialValues: new FormData()
  });

  return (
    <form className={styles.form_wrapper} action={action}>
      <InputBase name='username' placeholder='Username' className={styles.form_input} />
      <InputBase type='email' name='email' placeholder='Email' className={styles.form_input} />
      <InputBase
        type='password'
        name='password'
        placeholder='Password'
        className={styles.form_input}
      />
      <InputBase
        type='password'
        name='passwordAgain'
        placeholder='Password again'
        className={styles.form_input}
      />
      <div className={`${styles.action_container}`}>
        <PrimaryButton className={`${styles.form_submit}`}>Submit</PrimaryButton>
      </div>
      <div className={`${styles.action_container}`}>
        <Link href='/sign-in' className={`${styles.link}`}>
          Already have an account? Sign In instead
        </Link>
      </div>
    </form>
  );
};

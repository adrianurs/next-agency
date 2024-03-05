'use client';
import Link from 'next/link';
import { FormFC } from '../types';
import { InputBase, PrimaryButton } from '@/components';
import styles from './styled.module.css';

export const SignInForm: FormFC = ({ action }) => {
  return (
    <form className={styles.form_wrapper} action={action}>
      <InputBase name='username' placeholder='Username or email' className={styles.form_input} />
      <InputBase
        type='password'
        name='password'
        placeholder='Password'
        className={styles.form_input}
      />
      <div className={`${styles.action_container}`}>
        <PrimaryButton className={`${styles.form_submit}`}>Submit</PrimaryButton>
      </div>
      <div className={`${styles.action_container}`}>
        <Link href='/sign-up' className={`${styles.link}`}>
          Don&apos;t have an account? Sign Up instead.
        </Link>
      </div>
    </form>
  );
};

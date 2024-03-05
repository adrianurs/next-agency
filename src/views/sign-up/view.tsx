import { SignUpForm } from '@/components';
import styles from './styled.module.css';
import { auth, signUp } from '@/lib';
import { redirect } from 'next/navigation';

export async function SignUpView() {
  const session = await auth();

  if (session) {
    console.log({ session });
    redirect('/');
  }

  return (
    <>
      <h1 className={styles.title}>Sign Up</h1>
      <SignUpForm action={signUp} />
    </>
  );
}

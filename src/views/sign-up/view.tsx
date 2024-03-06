import { Divider, GithubButton, GitlabButton, SignUpForm } from '@/components';
import { auth, signInWithGithub, signInWithGitlab, signUp } from '@/lib';
import { redirect } from 'next/navigation';
import styles from './styled.module.css';

export async function SignUpView() {
  const session = await auth();

  console.log({ session });

  return (
    <>
      <h1 className={styles.title}>Sign Up</h1>
      <SignUpForm action={signUp} />
      <div className={styles.bottom_section}>
        <Divider text='OR' />
        <form action={signInWithGithub}>
          <GithubButton>Sign up with Github</GithubButton>
        </form>
        <form action={signInWithGitlab}>
          <GitlabButton>Sign up with Gitlab</GitlabButton>
        </form>
      </div>
    </>
  );
}

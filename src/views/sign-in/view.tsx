import { Divider, GithubButton, GitlabButton, SignInForm } from '@/components';
import { auth, signIn, signInWithGithub, signInWithGitlab } from '@/lib';
import styles from './styled.module.css';

export async function SignInView() {
  const session = await auth();
  console.log(session);

  return (
    <>
      <h1 className={styles.title}>Sign In</h1>
      <SignInForm action={signIn} />
      <div className={styles.bottom_section}>
        <Divider text='OR' />
        <form action={signInWithGithub}>
          <GithubButton>Sign in with Github</GithubButton>
        </form>
        <form action={signInWithGitlab}>
          <GitlabButton>Sign in with Gitlab</GitlabButton>
        </form>
      </div>
    </>
  );
}

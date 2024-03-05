import { GithubButton, GitlabButton } from '@/components';
import { auth, signInWithGithub, signInWithGitlab } from '@/lib';
import { redirect } from 'next/navigation';

export async function SignInView() {
  const session = await auth();

  if (session) {
    redirect('/');
  }

  return (
    <>
      <form action={signInWithGithub}>
        <GithubButton>Sign in with Github</GithubButton>
      </form>
      <form action={signInWithGitlab}>
        <GitlabButton>Sign in with Gitlab</GitlabButton>
      </form>
    </>
  );
}

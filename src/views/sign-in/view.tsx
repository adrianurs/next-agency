import { GithubButton, GitlabButton } from '@/components';
import { auth, signInWithGithub, signInWithGitlab } from '@/lib';

export async function SignInView() {
  const session = await auth();

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

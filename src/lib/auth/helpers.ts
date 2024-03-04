'use server';
import { signIn } from './auth.config';

export async function signInWithGithub() {
  'use server';
  await signIn('github');
}

export async function signInWithGitlab() {
  'use server';
  await signIn('gitlab');
}

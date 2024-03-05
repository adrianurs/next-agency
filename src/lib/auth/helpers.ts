'use server';
import { authSignOut, signIn } from './auth.config';

export async function signInWithGithub() {
  'use server';
  return await signIn('github');
}

export async function signInWithGitlab() {
  'use server';
  return await signIn('gitlab');
}

export async function signOut() {
  'use server';
  return authSignOut();
}

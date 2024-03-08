'use server';
import { FormState } from '@/components';
import { User, connectToMongo } from '../db';
import { authSignOut, authSignIn } from './auth.config';
import bcrypt from 'bcryptjs';
import { uploadToCloud } from '../cloud';
import { isRedirectError } from 'next/dist/client/components/redirect';

export async function signInWithGithub() {
  'use server';
  return await authSignIn('github');
}

export async function signInWithGitlab() {
  'use server';
  return await authSignIn('gitlab');
}

export async function signOut() {
  'use server';
  return authSignOut();
}

export async function signUp(
  _: FormState,
  formData: FormData,
  avatar?: string
): Promise<FormState> {
  const { username, email, password, passwordAgain } = Object.fromEntries(formData);

  if (password !== passwordAgain) return { error: 'Password must be the same!' };

  try {
    await connectToMongo();

    const [emailExists, usernameExists] = await Promise.all([
      User.findOne({ email }),
      User.findOne({ username })
    ]);

    if (emailExists) return { error: 'Email already signed up!' };

    if (usernameExists) return { error: 'Username already signed up!' };

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password as string, salt);

    let avatarStoredUrl: string | undefined;
    if (avatar) avatarStoredUrl = await uploadToCloud(avatar);

    const newUser = new User({
      username,
      email,
      password: hashed,
      avatar: avatarStoredUrl
    });

    await newUser.save();

    return { success: 'User signed up successfully!' };
  } catch (e) {
    return { error: 'Failed to sign up!' };
  }
}

export async function signIn(_: FormState, formData: FormData): Promise<FormState> {
  const { username, password } = Object.fromEntries(formData);

  try {
    await authSignIn('credentials', { username, password });
    return { success: 'Signed in.' };
  } catch (e) {
    if (!isRedirectError(e) && e instanceof Error) {
      return { error: 'Failed to sign in, are credentials correct?' };
    }
    throw e;
  }
}

'use server';
import { CreateUser, SignInUser } from '@/components';
import { User, connectToMongo } from '../db';
import { authSignOut, authSignIn } from './auth.config';
import bcrypt from 'bcryptjs';

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

export async function signUp(formData: CreateUser) {
  const { username, email, password, passwordAgain, avatar } = formData;

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

    const newUser = new User({
      username,
      email,
      password: hashed,
      avatar
    });

    await newUser.save();

    return { success: 'User signed up successfully!' };
  } catch (e) {
    return { error: 'Failed to sign in!' };
  }
}

export async function signIn(formData: SignInUser) {
  const { username, password } = formData;

  try {
    return await authSignIn('credentials', { username, password });
  } catch (e) {
    if (e instanceof Error) return { error: e.message };
  }
}

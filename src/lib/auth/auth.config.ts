import NextAuth from 'next-auth';
import Github from 'next-auth/providers/github';
import Gitlab from 'next-auth/providers/gitlab';
import Credentials, { CredentialsConfig } from 'next-auth/providers/credentials';
import { callbacks } from './callbacks';
import { authorize } from './authorize';
import { _env } from '../env';

export const {
  auth,
  handlers: { GET: AUTH_GET, POST: AUTH_POST },
  signIn: authSignIn,
  signOut: authSignOut
} = NextAuth({
  trustHost: true,
  providers: [
    Github({ clientId: _env.github_client_id, clientSecret: _env.github_secret }),
    Gitlab({ clientId: _env.gitlab_client_id, clientSecret: _env.gitlab_secret }),
    Credentials({
      authorize: authorize as unknown as CredentialsConfig['authorize']
    })
  ],
  callbacks
});

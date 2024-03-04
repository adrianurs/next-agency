import NextAuth from 'next-auth';
import Github from 'next-auth/providers/github';
import Gitlab from 'next-auth/providers/gitlab';
import { _env } from '../env';

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Github({ clientId: _env.github_client_id, clientSecret: _env.github_secret }),
    Gitlab({ clientId: _env.gitlab_client_id, clientSecret: _env.gitlab_secret })
  ]
});

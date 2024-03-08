import { NextAuthConfig } from 'next-auth';
import { User, connectToMongo } from '../db';
import providers_map from './providers_map.json';

export const callbacks: NextAuthConfig['callbacks'] = {
  async signIn({ user, account, profile }) {
    try {
      if (account?.provider && Object.keys(providers_map).includes(account.provider)) {
        await connectToMongo();
        const dbUser = await User.findOne({ email: user.email });
        if (!dbUser) {
          type KeyOfProfile = keyof typeof profile;
          type KeyOfProviders = keyof typeof providers_map;

          const newUser = new User({
            username:
              profile?.[
                providers_map[account.provider as KeyOfProviders]['username'] as KeyOfProfile
              ],
            email:
              profile?.[providers_map[account.provider as KeyOfProviders]['email'] as KeyOfProfile],
            avatar:
              profile?.[providers_map[account.provider as KeyOfProviders]['avatar'] as KeyOfProfile]
          });

          await newUser.save();
        }

        return true;
      }

      if (account?.provider && account.provider === 'credentials') return true;

      return false;
    } catch (e) {
      console.error(e);
      return false;
    }
  },

  async jwt({ token, user }) {
    return { ...token, ...(user && user) };
  },

  async session({ session, token }) {
    if (token) {
      session.user = { ...(token && token) };
    }
    return session;
  }
};

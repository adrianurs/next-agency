import { NextAuthConfig } from 'next-auth';
import { User, UserType, connectToMongo } from '../db';
import providers_map from './providers_map.json';

export const callbacks: NextAuthConfig['callbacks'] = {
  async signIn({ user, account, profile }) {
    try {
      if (account?.provider && Object.keys(providers_map).includes(account.provider)) {
        await connectToMongo();
        const dbUser = await User.findOne<UserType>({ email: user.email });
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
    if (user) {
      token.id = user.id;
      token._id = user._id;
      token.isAdmin = user.isAdmin;
      token.username = user.username;
      token.email = user.email;
      token.avatar = user.avatar;
    }
    return token;
  },

  async session({ session, token }) {
    if (token) {
      session.user.id = token.id as string;
      session.user._id = token._id;
      session.user.isAdmin = token.isAdmin;
      session.user.username = token.username;
      session.user.email = token.email;
      session.user.avatar = token.avatar;
    }
    return session;
  },

  async authorized({ auth, request }) {
    console.log({ auth, request });
    // Should redirect the user
    return true;
  }
};

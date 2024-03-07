import { UserType } from '@/lib';
import { DefaultUser } from 'next-auth';

interface Updated extends UserType {
  id: strings;
}

declare module 'next-auth' {
  interface User extends Updated {}

  interface Session {
    user?: DefaultUser & Updated;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends UserType {}
}

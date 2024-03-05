import { UserType } from '@/lib';
import { DefaultUser } from 'next-auth';

interface Updated extends UserType {
  id: strings;
}

declare module 'next-auth' {
  interface Session {
    user?: DefaultUser & Updated;
  }
  interface User extends Updated {}
}

declare module 'next-auth/jwt' {
  interface JWT extends UserType {}
}

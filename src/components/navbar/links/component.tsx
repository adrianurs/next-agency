import links from './links.json';
import { NavLink } from './nav-link';
import { SessionControlButton } from '@/components';
import { UserType, auth, signOut } from '@/lib';

export async function Links() {
  const session = await auth();

  return (
    <>
      {links.map(({ path, label }) => (
        <NavLink key={`navbar-link-${path}`} item={{ path, label }} />
      ))}
      {session ? (
        <>
          {(session?.user as UserType)?.isAdmin && (
            <NavLink item={{ path: '/admin/users', label: 'Admin' }} />
          )}
          <form action={signOut}>
            <SessionControlButton>Sign out</SessionControlButton>
          </form>
        </>
      ) : (
        <NavLink item={{ path: '/sign-in', label: 'Sign In' }} />
      )}
    </>
  );
}

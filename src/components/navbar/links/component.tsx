import links from './links.json';
import admin_links from './admin-links.json';
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
            <NavLink dropdownButtonLabel='Admin' isDropdown items={admin_links} />
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

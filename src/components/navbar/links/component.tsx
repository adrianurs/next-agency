import { FC } from 'react';
import links from './links.json';
import { NavLink } from './nav-link';
import { SessionControlButton } from '@/components';
import { signOut } from '@/lib';

export const Links: FC = () => {
  const isAdmin = true;
  const session = true;

  return (
    <>
      {links.map(({ path, label }) => (
        <NavLink key={`navbar-link-${path}`} item={{ path, label }} />
      ))}
      {session ? (
        <>
          {isAdmin && <NavLink item={{ path: '/admin', label: 'Admin' }} />}
          <form action={signOut}>
            <SessionControlButton>Sign out</SessionControlButton>
          </form>
        </>
      ) : (
        <NavLink item={{ path: '/sign-in', label: 'Sign In' }} />
      )}
    </>
  );
};

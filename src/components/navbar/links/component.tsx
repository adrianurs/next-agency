'use client';
import { FC } from 'react';
import links from './links.json';
import { NavLink } from './nav-link';
import { SessionControlButton } from '@/components';

export const Links: FC = () => {
	const isAdmin = true;
	const session = true;

	return (
		<>
			{links.map(({ path, label }) => (
				<NavLink key={`navbar-link-${path}`} item={{ path, label }} />
			))}
			{
				session ? (
					<>
						{isAdmin && <NavLink item={{ path: '/admin', label: 'Admin' }} />}
						<SessionControlButton onClick={() => console.log('Sign out!')}>Sign out</SessionControlButton>
					</>
				): (
						<NavLink item={{path: '/sign-in', label: 'Sign In'}} />
				)
			}
		</>
	);
};

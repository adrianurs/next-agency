'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLinkFC } from './types';
import styles from './styled.module.css';

export const NavLink: NavLinkFC = ({ item: { path, label } }) => {
	const pathName = usePathname();

	return (
		<Link href={path} className={`${styles.nav_link_wrapper} ${pathName === path && styles.active}`}>
			{label}
		</Link>
	);
};

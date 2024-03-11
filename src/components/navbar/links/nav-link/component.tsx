'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLinkFC } from './types';
import styles from './styled.module.css';
import { DropdownNavLink } from './dropdown-nav-link';

export const NavLink: NavLinkFC = ({ item, items, isDropdown, dropdownButtonLabel }) => {
  const pathName = usePathname();

  return !isDropdown
    ? item && (
        <Link
          href={item.path}
          className={`${styles.nav_link_wrapper} ${pathName === item.path && styles.active}`}
          prefetch={false}
        >
          {item.label}
        </Link>
      )
    : items && (
        <DropdownNavLink
          dropdownButtonLabel={dropdownButtonLabel || 'Dropdown'}
          items={items}
          active={pathName.includes('admin')}
          currentPath={pathName}
        />
      );
};

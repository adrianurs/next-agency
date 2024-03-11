'use client';
import { useEffect, useId, useRef, useState } from 'react';
import { DropdownNavLinkFC } from './types';
import { useClickAwayListener } from '@/lib';
import styles from './styled.module.css';
import Link from 'next/link';

export const DropdownNavLink: DropdownNavLinkFC = ({
  dropdownButtonLabel,
  items,
  active,
  currentPath
}) => {
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  useClickAwayListener(containerRef, () => setIsOpen(false));

  useEffect(() => {
    isOpen && setIsOpen(false);
    //eslint-disable-next-line
  }, [currentPath]);

  return (
    <div ref={containerRef} className='relative'>
      <button
        className={`${styles.dropdown_button} ${active && styles.active}`}
        onClick={() => setIsOpen((prev) => !prev)}
        type='button'
      >
        {dropdownButtonLabel}
      </button>
      <div
        className={`${styles.dropdown_container} ${isOpen ? 'opacity-1 ' : 'opacity-0 pointer-events-none'}`}
      >
        <ul className={styles.list_container}>
          {items.map((link, index) => (
            <li key={`${id}-${link.path}-${link.label}-${index}`}>
              <Link
                href={link.path}
                className={`${styles.list_item} ${currentPath === link.path && styles.active_list_item}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

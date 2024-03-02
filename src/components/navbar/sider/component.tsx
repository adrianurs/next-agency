'use client';
import { FC, useState } from 'react';
import { Links } from '../links';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import styles from './styled.module.css';

export const Sider: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Bars3Icon
        onClick={() => setIsOpen((prev) => !prev)}
        className={styles.menu_button}
        height={30}
        width={30}
      />
      <div className={`${styles.sider_container} ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <XMarkIcon
          onClick={() => setIsOpen((prev) => !prev)}
          className={styles.close_menu_button}
          height={30}
          width={30}
        />
        <Links />
      </div>
    </>
  );
};

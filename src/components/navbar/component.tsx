import { FC } from 'react';
import { Links } from './links';
import { Logo } from '@/components';
import { Sider } from './sider';
import styles from './styled.module.css';
import Link from 'next/link';

export const Navbar: FC = () => {
  return (
    <div className={styles.nav_container}>
      <Link href='/'>
        <Logo />
      </Link>
      <div className={styles.nav_wrapper}>
        <Links />
      </div>
      <Sider links={<Links />} />
    </div>
  );
};

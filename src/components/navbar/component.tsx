import { FC } from 'react';
import { Links } from './links';
import { Logo } from '@/components';
import styles from './styled.module.css';

export const Navbar: FC = () => {
	return (
		<div className={styles.nav_container}>
			<Logo />
			<div className={styles.nav_wrapper}>
				<Links />
			</div>
		</div>
	);
}

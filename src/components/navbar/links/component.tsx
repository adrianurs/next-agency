import { FC } from 'react';
import Link from 'next/link';
import links from './links.json';

export const Links: FC = () => {
	return (
		<>
			{links.map(({path, label}) => (
				<Link key={`navbar-link-${path}`} href={path}>{label}</Link>
			))}
		</>
	);
};

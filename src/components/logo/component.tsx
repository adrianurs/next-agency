import { LogoSrc } from '@/assets';
import { LogoFC } from './types';
import Image from 'next/image';

export const Logo: LogoFC = ({ width, height }) => {
	return <Image src={LogoSrc} alt='Next agency logo' width={width || 70} height={height || 70} priority />;
};

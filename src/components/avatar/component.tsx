import { NoAvatarSrc } from '@/assets';
import { AvatarFC } from './types';
import Image from 'next/image';
import styles from './styled.module.css';

export const Avatar: AvatarFC = ({ image, size = 40, className }) => {
  return (
    <Image
      className={`${styles.avatar} ${className}`}
      height={size}
      width={size}
      style={{
        height: `${size}px`,
        width: `${size}px`
      }}
      src={image || NoAvatarSrc}
      alt={``}
    />
  );
};

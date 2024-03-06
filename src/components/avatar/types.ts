import { FC } from 'react';

export type AvatarProps = {
  image?: string;
  size?: number;
  className?: string;
};

export type AvatarFC = FC<AvatarProps>;

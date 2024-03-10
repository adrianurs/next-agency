import { UserType } from '@/lib';
import { FC } from 'react';

export type UserCardProps = {
  user: UserType;
};

export type UserCardFC = FC<UserCardProps>;

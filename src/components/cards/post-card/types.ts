import { PostType } from '@/lib';
import { FC } from 'react';

export interface IPostCardProps {
  item: PostType;
}

export type PostCardFC = FC<IPostCardProps>;

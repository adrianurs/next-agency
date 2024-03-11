import { PostType } from '@/lib';
import { FC } from 'react';

export type SimplePostCardProps = {
  post: PostType;
};

export type SimplePostCardFC = FC<SimplePostCardProps>;

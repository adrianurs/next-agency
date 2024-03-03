import { FC } from 'react';

export type BlogItem = {
  _id: string;
  image: string;
  title: string;
  description: string;
  date: string;
};

export interface IPostCardProps {
  item: BlogItem;
}

export type PostCardFC = FC<IPostCardProps>;

import { BlogItem } from '@/components/cards/post-card/types';

export type Author = {
  avatar: string;
  name: string;
};

export interface IPost extends BlogItem {
  author: Author;
}

import { unstable_noStore as noStore } from 'next/cache';
import { connectToMongo } from '../connect';
import { Post } from '../models';
import { PostType } from '../types';

export async function getPosts(): Promise<PostType[]> {
  try {
    connectToMongo();
    return await Post.find<PostType>();
  } catch {
    throw new Error('@/lib/db/actions/post.ts -> getPosts: failed to fetch posts.');
  }
}

export async function getPost(id: string): Promise<PostType> {
  noStore();
  try {
    connectToMongo();
    const post = await Post.findById<PostType>(id);
    if (post) return post;
    else throw new Error(`@/lib/db/actions/post.ts -> getPost: post ${id} not found`);
  } catch {
    throw new Error('@/lib/db/actions/post.ts -> getPost: failed to fetch post.');
  }
}

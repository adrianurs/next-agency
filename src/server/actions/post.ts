import { unstable_noStore as noStore } from 'next/cache';
import { connectToMongo, Post, PostType } from '@/lib';
import { NextRequest, NextResponse } from 'next/server';
import { errorResponse } from './utils';
import { ErrorType } from './types';
import { isValidObjectId } from 'mongoose';

export async function getPosts(): Promise<NextResponse<PostType[]>> {
  try {
    connectToMongo();
    return NextResponse.json(await Post.find<PostType>());
  } catch {
    throw new Error('@/server/actions/post.ts -> getPosts: failed to fetch posts.');
  }
}

export async function getPost(
  _: NextRequest,
  { params }: { params: { post: string } }
): Promise<NextResponse<PostType | ErrorType>> {
  noStore();
  try {
    connectToMongo();

    if (!isValidObjectId(params.post)) return errorResponse('Invalid post search.', 400);

    const post = await Post.findById<PostType>(params.post);

    if (post) return NextResponse.json(post);
    else return errorResponse('Post not found', 400);
  } catch {
    throw new Error('@/server/actions/post.ts -> getPost: failed to fetch post.');
  }
}

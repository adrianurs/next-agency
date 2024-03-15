import { unstable_noStore as noStore } from 'next/cache';
import { connectToMongo, Post, PostType, uploadToCloud } from '@/lib';
import { NextRequest, NextResponse } from 'next/server';
import { errorResponse } from '../utils';
import { ErrorType } from '../types';
import { isValidObjectId } from 'mongoose';

export async function getPosts(): Promise<NextResponse<PostType[]>> {
  try {
    await connectToMongo();
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
    await connectToMongo();

    if (!isValidObjectId(params.post)) return errorResponse('Invalid post search.', 400);

    const post = await Post.findById<PostType>(params.post);

    if (post) return NextResponse.json(post);
    else return errorResponse('Post not found', 400);
  } catch {
    throw new Error('@/server/actions/post.ts -> getPost: failed to fetch post.');
  }
}

export async function createPost(req: NextRequest): Promise<NextResponse<PostType | ErrorType>> {
  try {
    await connectToMongo();

    const body = await req.json();
    const { title, description, image, author } = body as PostType;

    if (!title) return errorResponse('Post title is missing.', 400);
    if (!description) return errorResponse('Post description is missing.', 400);

    let imageUrl: string | undefined;
    if (image) {
      imageUrl = await uploadToCloud(image);
    }

    const post = new Post({
      title,
      description,
      image: imageUrl ?? '',
      author
    });

    await post.save();
    if (post) return NextResponse.json(post);
    else return errorResponse('Post not found', 400);
  } catch {
    throw new Error('@/server/actions/post.ts -> getPost: failed to fetch post.');
  }
}

export async function updatePost(
  req: NextRequest,
  { params }: { params: { post: string } }
): Promise<NextResponse<PostType | ErrorType>> {
  try {
    await connectToMongo();

    const body = await req.json();
    const { title, description, image, author } = body as PostType;

    if (!title) return errorResponse('Post title is missing.', 400);
    if (!description) return errorResponse('Post description is missing.', 400);

    let imageUrl: string | undefined;
    if (image) {
      imageUrl = await uploadToCloud(image);
    }

    const post = await Post.findByIdAndUpdate(params.post, {
      title,
      description,
      image: imageUrl ?? '',
      author
    });

    if (post) return NextResponse.json(post);
    else return errorResponse('Post not found', 400);
  } catch (e) {
    throw new Error('@/server/actions/post.ts -> updatePost: failed to update post.');
  }
}

export async function deletePost(
  _: NextRequest,
  { params }: { params: { post: string } }
): Promise<NextResponse<true>> {
  noStore();
  try {
    await connectToMongo();
    await Post.findByIdAndDelete<PostType>(params.post);
    return NextResponse.json(true);
  } catch {
    throw new Error('@/server/actions/user.ts -> deleteUser: failed to delete user.');
  }
}

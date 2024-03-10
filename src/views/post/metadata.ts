import { PostType, request } from '@/lib';

export async function postViewMetadata({ params }: { params: { post: string } }) {
  const post = await request.get<PostType>(`/posts/${params.post}`);
  return {
    title: post.title,
    description: post.description
  };
}

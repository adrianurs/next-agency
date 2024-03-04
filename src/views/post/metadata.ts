import { request } from '@/lib';

export async function postViewMetadata({ params }: { params: { post: string } }) {
  const post = (await request.get(`/posts/${params.post}`)).data;
  return {
    title: post.title,
    description: post.description
  };
}

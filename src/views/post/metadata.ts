import { getPost } from '@/lib';

export async function postViewMetadata({ params }: { params: { post: string } }) {
  const post = await getPost(params.post);
  return {
    title: post.title,
    description: post.description
  };
}

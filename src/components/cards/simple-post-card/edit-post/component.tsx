import { Dialog, EditButton, FormState, LoaderWrapper, PostForm } from '@/components';
import { PostType, request } from '@/lib';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const EditPost = ({ post }: { post: PostType }) => {
  const [open, setOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const router = useRouter();

  const updatePost = async (_: FormState, data: FormData) => {
    try {
      setIsUpdating(true);
      const formData = Object.fromEntries(data);

      await request.patch<FormState>(`/posts/${post._id}`, {
        body: { ...formData }
      });

      router.refresh();
      setOpen(false);
      return { success: 'Post was updated' };
    } catch (e) {
      return { error: 'Failed to update post.' };
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <>
      <LoaderWrapper isLoading={isUpdating}>
        <EditButton onClick={() => setOpen(true)} />
      </LoaderWrapper>
      <Dialog title='Update post' isOpen={open} onClose={() => setOpen(false)}>
        <PostForm type='update' initial={post} action={updatePost} />
      </Dialog>
    </>
  );
};

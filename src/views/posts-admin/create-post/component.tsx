'use client';
import { Dialog, FormState, PostForm, PrimaryButton } from '@/components';
import { request } from '@/lib';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const CreatePost = ({ userId }: { userId: string }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const createPost = async (_: FormState, data: FormData) => {
    try {
      const formData = Object.fromEntries(data);

      await request.post<FormState>('/posts', {
        body: { ...formData, author: userId }
      });

      router.refresh();
      setOpen(false);
      return { success: 'Post was created' };
    } catch (e) {
      return { error: 'Failed to create post.' };
    }
  };

  return (
    <>
      <PrimaryButton onClick={() => setOpen(true)}>Create new post</PrimaryButton>
      <Dialog title='Create new post' isOpen={open} onClose={() => setOpen(false)}>
        <PostForm action={createPost} />
      </Dialog>
    </>
  );
};

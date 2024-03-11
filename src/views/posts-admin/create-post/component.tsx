'use client';

import { Dialog, FormState, PostForm, PrimaryButton } from '@/components';
import { useState } from 'react';

export const CreatePost = () => {
  const [open, setOpen] = useState(false);

  const createPost = async (_: FormState, data: FormData) => {
    console.log(Object.fromEntries(data));
    return { success: 'post added' };
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

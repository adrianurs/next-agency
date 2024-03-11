'use client';
import { SimplePostCardFC } from './types';
import styles from './styled.module.css';
import { TrashButton, LoaderWrapper } from '@/components';
import { formatDate, request } from '@/lib';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const SimplePostCard: SimplePostCardFC = ({ post }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const deletePost = async () => {
    setIsDeleting(true);
    try {
      await request.delete(`/posts/${post._id}`);
      router.refresh();
    } catch {
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className={styles.container}>
      <h5>{post.title}</h5>
      <p>Author: {post.author}</p>
      <p>{formatDate(post.createdAt)}</p>
      <div>
        <LoaderWrapper loaderSize={5} isLoading={isDeleting}>
          <TrashButton onClick={deletePost} />
        </LoaderWrapper>
      </div>
    </div>
  );
};

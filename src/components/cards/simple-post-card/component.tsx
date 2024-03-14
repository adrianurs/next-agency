'use client';
import { SimplePostCardFC } from './types';
import styles from './styled.module.css';
import { TrashButton, LoaderWrapper } from '@/components';
import { UserType, formatDate, request } from '@/lib';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { EditPost } from './edit-post';

export const SimplePostCard: SimplePostCardFC = ({ post }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [postAuthor, setPostAuthor] = useState<UserType>();
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

  useEffect(() => {
    (async () => {
      const author = await request.get<UserType>(`/users/${post.author}`);
      setPostAuthor(author);
    })();
  }, [post.author]);

  return (
    <div className={styles.container}>
      <h5>{post.title}</h5>
      <p>{postAuthor?.username}</p>
      <p suppressHydrationWarning>{formatDate(post.createdAt)}</p>
      <div className={styles.actions_container}>
        <LoaderWrapper loaderSize={5} isLoading={isDeleting}>
          <TrashButton onClick={deletePost} />
        </LoaderWrapper>
        <EditPost post={post} />
      </div>
    </div>
  );
};

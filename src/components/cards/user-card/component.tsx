'use client';
import { UserCardFC } from './types';
import styles from './styled.module.css';
import { TrashButton, Avatar, LoaderWrapper } from '@/components';
import { request } from '@/lib';
import { useState } from 'react';
import { revalidateTag } from 'next/cache';

export const UserCard: UserCardFC = ({ user }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteUser = async () => {
    setIsDeleting(true);
    try {
      await request.delete(`/users/${user._id}`);
      revalidateTag('users');
    } catch {
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className={styles.container}>
      <Avatar image={user.avatar} />
      <h5>{user.username}</h5>
      <p>Admin: {String(user.isAdmin)}</p>
      <div>
        <LoaderWrapper loaderSize={5} isLoading={isDeleting}>
          <TrashButton onClick={deleteUser} />
        </LoaderWrapper>
      </div>
    </div>
  );
};

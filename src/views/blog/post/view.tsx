'use client';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { ViewContainer } from '@/components';
import { IPost } from './types';
import posts from './posts.json';
import styles from './styled.module.css';
import Image from 'next/image';
import { NoAvatarSrc } from '@/assets';

export const PostView: FC = () => {
  const params = useParams();
  const [post, setPost] = useState<IPost>();

  useEffect(() => {
    const postFound = posts.find((post) => post._id === params.post);
    postFound && setPost(postFound);
  }, [params.post]);

  if (!post) return null;

  return (
    <ViewContainer flex>
      <div className={styles.image_container}>
        <Image
          alt={`${post.title} image`}
          src={post.image}
          className='object-cover'
          fill
          sizes='(max-width: 300px)'
          fetchPriority='auto'
        />
      </div>
      <div className={styles.details_container}>
        <h1 className={styles.title}>{post.title}</h1>
        <p>{post.description}</p>
        <div className={styles.author_section}>
          <Image
            className={styles.avatar}
            alt={`${post.author.name} avatar`}
            width={30}
            height={30}
            src={post.author.avatar || NoAvatarSrc}
          />
          <div className={styles.other_details}>
            <span className={styles.label}>Author</span>
            <p>{post.author.name}</p>
          </div>
          <div className={styles.other_details}>
            <span className={styles.label}>Published on</span>
            <p>{post.date}</p>
          </div>
        </div>
      </div>
    </ViewContainer>
  );
};

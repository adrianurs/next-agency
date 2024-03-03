import { PostCard, ViewContainer } from '@/components';
import { FC } from 'react';
import posts from './posts.json';
import styles from './styled.module.css';

export const BlogView: FC = () => {
  return (
    <ViewContainer>
      <h5 className={styles.page_name}>Our blog</h5>
      <div className={styles.posts_container}>
        {posts.map((post) => (
          <PostCard key={`${post._id}-card`} item={post} />
        ))}
      </div>
    </ViewContainer>
  );
};

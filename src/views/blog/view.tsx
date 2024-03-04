import { PostCard, ViewContainer } from '@/components';
import styles from './styled.module.css';
import { getPosts } from '@/lib';

export async function BlogView() {
  const posts = await getPosts();

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
}

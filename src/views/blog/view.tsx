import { PostCard, ViewContainer } from '@/components';
import { PostType, request } from '@/lib';
import styles from './styled.module.css';

export async function BlogView() {
  const posts = (await request.get<PostType[]>('/posts')).data;

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

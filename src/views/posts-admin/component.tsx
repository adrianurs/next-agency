import { SimplePostCard, ViewContainer } from '@/components';
import { PostType, request } from '@/lib';
import styles from './styled.module.css';

export async function PostsAdminView() {
  const posts = await request.get<PostType[]>('/posts');

  return (
    <ViewContainer>
      <div className={styles.cards_container}>
        {Array.isArray(posts) && posts.map((post) => <SimplePostCard key={post._id} post={post} />)}
      </div>
    </ViewContainer>
  );
}

import { SimplePostCard, ViewContainer } from '@/components';
import { PostType, request } from '@/lib';
import styles from './styled.module.css';
import { CreatePost } from './create-post';

export async function PostsAdminView() {
  const posts = await request.get<PostType[]>('/posts');

  return (
    <ViewContainer>
      <CreatePost />
      <div className={styles.cards_container}>
        {Array.isArray(posts) && posts.map((post) => <SimplePostCard key={post._id} post={post} />)}
      </div>
    </ViewContainer>
  );
}

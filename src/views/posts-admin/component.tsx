import { SimplePostCard, ViewContainer } from '@/components';
import { PostType, auth, request } from '@/lib';
import styles from './styled.module.css';
import { CreatePost } from './create-post';

export async function PostsAdminView() {
  const posts = await request.get<PostType[]>('/posts');
  const session = await auth();

  return (
    <ViewContainer>
      <div className={styles.post_button_container}>
        <CreatePost userId={session?.user._id ?? session?.user.id} />
      </div>
      <div className={styles.cards_container}>
        {Array.isArray(posts) && posts.map((post) => <SimplePostCard key={post._id} post={post} />)}
      </div>
    </ViewContainer>
  );
}

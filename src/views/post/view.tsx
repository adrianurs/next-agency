import { ViewContainer } from '@/components';
import styles from './styled.module.css';
import Image from 'next/image';
import { formatDate, getPost } from '@/lib';
import { UserSection } from './user-section/component';

export async function PostView({ params }: { params: { post: string } }) {
  const post = await getPost(params.post);

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
        <UserSection authorId={post.author} publishedOn={formatDate(post.createdAt)} />
      </div>
    </ViewContainer>
  );
}

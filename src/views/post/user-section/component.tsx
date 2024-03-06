import { UserSectionProps } from './types';
import { UserType, request } from '@/lib';
import { Avatar } from '@/components';
import styles from './styled.module.css';

export async function UserSection({ publishedOn, authorId }: UserSectionProps) {
  const author = (await request.get<UserType>(`/users/${authorId}`)).data;

  return (
    <div className={styles.author_section}>
      <Avatar className={styles.avatar} image={author.avatar} size={40} />
      <div className={styles.other_details}>
        <span className={styles.label}>Author</span>
        <p>{author.username}</p>
      </div>
      <div className={styles.other_details}>
        <span className={styles.label}>Published on</span>
        <p>{publishedOn}</p>
      </div>
    </div>
  );
}

import { UserSectionProps } from './types';
import styles from './styled.module.css';
import Image from 'next/image';
import { getUser } from '@/lib';
import { NoAvatarSrc } from '@/assets';

export async function UserSection({ publishedOn, authorId }: UserSectionProps) {
  const author = await getUser(authorId);
  return (
    <div className={styles.author_section}>
      <Image
        className={styles.avatar}
        alt={`${author.username} avatar`}
        width={40}
        height={40}
        src={author.avatar || NoAvatarSrc}
      />
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

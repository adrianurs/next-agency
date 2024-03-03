import { PostCardFC } from './types';
import styles from './styled.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const PostCard: PostCardFC = ({ item: { _id, date, description, image, title } }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.image_col}>
          <Image
            alt={`${title} image`}
            src={image}
            className='object-cover'
            fill
            sizes='(max-height: 300px)'
            fetchPriority='auto'
          />
        </div>
        <div className={styles.date_col}>
          <p className={styles.date}>{date}</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <Link className='underline' href={`/blog/${_id}`}>
          Read more
        </Link>
      </div>
    </div>
  );
};

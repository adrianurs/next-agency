import { DividerFC } from './types';
import styles from './styled.module.css';

export const Divider: DividerFC = ({ text, width }) => {
  return (
    <div className={`${styles.container} ${width ? `w-[${width}px]` : 'w-full'}`}>
      <hr className={styles.line} />
      {text && <span className={styles.text}>{text}</span>}
      <hr className={styles.line} />
    </div>
  );
};

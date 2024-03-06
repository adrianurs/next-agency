import { DividerFC } from './types';
import styles from './styled.module.css';

export const Divider: DividerFC = ({ text, width, className }) => {
  return (
    <div className={`${styles.container} ${width ? `w-[${width}px]` : 'w-full'} ${className}`}>
      <hr className={styles.line} />
      {text && <span className={styles.text}>{text}</span>}
      <hr className={styles.line} />
    </div>
  );
};

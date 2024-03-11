import { TextAreaFC } from './types';
import styles from './styled.module.css';

export const TextArea: TextAreaFC = ({ error, ...props }) => (
  <div>
    <textarea
      {...props}
      className={`${styles.text_area} ${error && styles.text_area_error} ${props.className}`}
    />
    {error && <span className={styles.error_span}>{error}</span>}
    {props.children}
  </div>
);

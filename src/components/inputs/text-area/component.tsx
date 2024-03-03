import { TextAreaFC } from './types';
import styles from './styled.module.css';

export const TextArea: TextAreaFC = (props) => (
  <textarea {...props} className={`${styles.text_area} ${props.className}`} />
);

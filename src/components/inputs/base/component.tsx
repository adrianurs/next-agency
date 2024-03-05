import { InputBaseFC } from './types';
import styles from './styled.module.css';

export const InputBase: InputBaseFC = ({ error, ...props }) => (
  <div>
    <input
      {...props}
      className={`${styles.input_base} ${error && styles.input_error} ${props.className}`}
    />
    {error && <span className={styles.error_span}>{error}</span>}
    {props.children}
  </div>
);

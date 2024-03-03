import { InputBaseFC } from './types';
import styles from './styled.module.css';

export const InputBase: InputBaseFC = (props) => (
  <input {...props} className={`${styles.input_base} ${props.className}`} />
);

import { SecondaryButtonFC } from './types';
import styles from './styled.module.css';

export const SecondaryButton: SecondaryButtonFC = (props) => (
  <button {...props} className={styles.secondary_button} />
);

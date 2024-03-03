import { PrimaryButtonFC } from './types';
import styles from './styled.module.css';

export const PrimaryButton: PrimaryButtonFC = (props) => (
  <button {...props} className={styles.primary_button} />
);

import { SessionControlButtonFC } from './types';
import styles from './styled.module.css';

export const SessionControlButton: SessionControlButtonFC = (props) => (
  <button {...props} className={styles.session_control_btn} />
);

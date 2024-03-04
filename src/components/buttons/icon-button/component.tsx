import { IconButtonFC } from './types';
import styles from './styled.module.css';

export const IconButton: IconButtonFC = ({ icon, children, ...others }) => (
  <button {...others} className={`${styles.icon_button} ${others.className}`}>
    {icon}
    {children}
  </button>
);

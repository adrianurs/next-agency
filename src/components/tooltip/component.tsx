import { TooltipFC } from './types';
import styles from './styled.module.css';

export const Tooltip: TooltipFC = ({ tooltip, children }) => {
  return (
    <div className={`${styles.container} group`}>
      {children}
      <span className={`${styles.tooltip} group-hover:visible group-hover:opacity-100`}>
        {tooltip}
      </span>
    </div>
  );
};

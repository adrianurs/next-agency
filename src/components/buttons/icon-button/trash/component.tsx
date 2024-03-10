import { TrashIcon } from '@heroicons/react/20/solid';
import { TrashButtonFC } from './types';
import { Tooltip } from '@/components';
import styles from './styled.module.css';

export const TrashButton: TrashButtonFC = ({ size = 25, onClick, tooltip = 'Delete' }) => {
  return (
    <>
      <Tooltip tooltip={tooltip}>
        <TrashIcon className={styles.icon} height={size} width={size} onClick={onClick} />
      </Tooltip>
    </>
  );
};

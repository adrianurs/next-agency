import { PencilIcon, TrashIcon } from '@heroicons/react/20/solid';
import { TrashButtonFC } from './types';
import { Tooltip } from '@/components';
import styles from './styled.module.css';

export const EditButton: TrashButtonFC = ({ size = 25, onClick, tooltip = 'Edit' }) => {
  return (
    <>
      <Tooltip tooltip={tooltip}>
        <PencilIcon className={styles.icon} height={size} width={size} onClick={onClick} />
      </Tooltip>
    </>
  );
};

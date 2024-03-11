import { XMarkIcon } from '@heroicons/react/20/solid';
import { CloseButtonFC } from './types';
import { Tooltip } from '@/components';
import styles from './styled.module.css';

export const CloseButton: CloseButtonFC = ({ size = 25, onClick, tooltip = 'Close' }) => {
  return (
    <>
      <Tooltip tooltip={tooltip}>
        <XMarkIcon className={styles.icon} height={size} width={size} onClick={onClick} />
      </Tooltip>
    </>
  );
};

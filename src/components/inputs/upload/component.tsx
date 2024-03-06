import { UploadSvg } from '@/assets';
import { InputUploadFC } from './types';
import styles from './style.module.css';
import { v4 as unique } from 'uuid';

export const InputUpload: InputUploadFC = ({ label, accept, onChange, name }) => {
  const id = unique();

  return (
    <div className={styles.wrapper}>
      <label suppressHydrationWarning htmlFor={`input-upload-${id}`} className={styles.label}>
        <UploadSvg height={30} width={30} />
        <span className={styles.text}>{label || 'Upload file'}</span>
      </label>
      <input
        name={name}
        suppressHydrationWarning
        id={`input-upload-${id}`}
        type='file'
        className='hidden'
        accept={accept}
        onChange={(e) => e.target.files?.[0] && onChange?.(e.target.files?.[0])}
      />
    </div>
  );
};

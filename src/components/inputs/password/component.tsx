'use client';
import { useId, useState } from 'react';
import { InputPasswordFC } from './types';
import { InputBase } from '../base';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid';
import styles from './styled.module.css';

export const InputPassword: InputPasswordFC = (props) => {
  const id = useId();
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <label htmlFor={id} className='relative'>
      <InputBase {...props} id={id} type={showPassword ? 'text' : 'password'}>
        {props.children}
      </InputBase>
      {!showPassword ? (
        <EyeIcon className={styles.eye_icon} onClick={toggleShowPassword} />
      ) : (
        <EyeSlashIcon onClick={toggleShowPassword} className={styles.eye_icon} />
      )}
    </label>
  );
};

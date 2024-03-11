'use client';
import { useEffect, useRef, useState } from 'react';
import { DialogFC } from './types';
import { CloseButton, PrimaryButton } from '../buttons';
import { useClickAwayListener } from '@/lib';
import styles from './styled.module.css';

export const Dialog: DialogFC = ({ title, onClose, withButton, isOpen, buttonTitle, children }) => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    onClose ? onClose() : setShowModal(false);
  };

  useClickAwayListener(modalRef, handleClose);

  useEffect(() => {
    !withButton && setShowModal(!!isOpen);
  }, [isOpen, withButton]);

  return (
    <>
      {withButton && (
        <PrimaryButton onClick={() => setShowModal(true)}>{buttonTitle}</PrimaryButton>
      )}
      {showModal && (
        <>
          <div className={styles.container}>
            <div ref={modalRef} className={styles.wrapper}>
              {/*content*/}
              <div className={styles.paper}>
                {/*header*/}
                <div className={styles.title_container}>
                  <h3 className={styles.title}>{title}</h3>
                  <CloseButton onClick={handleClose} />
                </div>
                {/*body*/}
                <div className={styles.body_container}>{children}</div>
              </div>
            </div>
          </div>
          <div className={styles.backdrop} />
        </>
      )}
    </>
  );
};

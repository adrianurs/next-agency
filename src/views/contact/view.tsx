import { FC } from 'react';
import { InputBase, PrimaryButton, TextArea, ViewContainer } from '@/components';
import styles from './styled.module.css';
import Image from 'next/image';
import { ContactSrc } from '@/assets';

export const ContactView: FC = () => {
  return (
    <ViewContainer>
      <div className={styles.grid_container}>
        <div className={styles.hero_container}>
          <Image alt='contact image' src={ContactSrc} height={500} width={500} priority />
        </div>
        <div className={styles.items_container}>
          <h5 className={styles.page_name}>Contact us</h5>
          <form className={styles.form_container}>
            <InputBase className='w-full' type='text' placeholder='Name and Surname' />
            <InputBase className='w-full' type='email' placeholder='Email Address' />
            <InputBase className='w-full' type='text' placeholder='Phone Number (Optional)' />
            <TextArea name='' id='' className='w-full' cols={30} rows={10} placeholder='Message' />
            <PrimaryButton className='w-full'>Submit</PrimaryButton>
          </form>
        </div>
      </div>
    </ViewContainer>
  );
};

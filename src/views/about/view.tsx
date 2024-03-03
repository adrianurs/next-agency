import { FC } from 'react';
import styles from './styled.module.css';
import { ViewContainer } from '@/components';
import Image from 'next/image';
import { AboutSrc } from '@/assets';

export const AboutView: FC = () => {
  return (
    <ViewContainer>
      <div className={styles.grid_container}>
        <div className={styles.items_container}>
          <h5 className={styles.page_name}>About us</h5>
          <h1 className={styles.title}>
            We create digital ideas that are bigger, bolder, braver and better.
          </h1>
          <p>
            We create digital ideas that are bigger, bolder, braver and better. We believe in good
            ideas flexibility and precission We’re world’s Our Special Team best consulting &
            finance solution provider. Wide range of web and software development services.
          </p>
        </div>
        <div className={styles.hero_container}>
          <Image alt='about us image' src={AboutSrc} height={500} width={500} priority />
        </div>
      </div>
    </ViewContainer>
  );
};

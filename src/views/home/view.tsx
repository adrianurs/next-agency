'use client';
import { FC } from 'react';
import { Hero, PrimaryButton, SecondaryButton, ViewContainer } from '@/components';
import styles from './styled.module.css';
import Image from 'next/image';
import { BrandsSrc } from '@/assets';
import { useRouter } from 'next/navigation';

export const HomeView: FC = () => {
  const router = useRouter();

  return (
    <ViewContainer>
      <div className={styles.grid_container}>
        <div className={styles.items_container}>
          <h1 className={styles.title}>Creative thoughts agency.</h1>
          <p>
            In the bustling cityscape of creativity, where imagination dances freely and ideas are
            born to break boundaries, there exists a hero whose prowess with pen and paper knows no
            bounds.
          </p>
          <div className={styles.buttons_container}>
            <PrimaryButton onClick={() => router.push('/about')}>Learn more</PrimaryButton>
            <SecondaryButton onClick={() => router.push('/contact')}>Contact</SecondaryButton>
          </div>
          <Image alt='brands image' src={BrandsSrc} priority />
        </div>
        <div className={styles.hero_container}>
          <Hero />
        </div>
      </div>
    </ViewContainer>
  );
};

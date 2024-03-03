'use client';
import { HeroAnimation } from '@/assets';
import { FC, useEffect, useRef } from 'react';
import Lottie from 'lottie-web';

export const Hero: FC = () => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const animationLoaded = useRef(false);

  useEffect(() => {
    // !animationLoaded.current - avoiding to render animation twice
    if (animationContainer.current && !animationLoaded.current) {
      Lottie.loadAnimation({
        container: animationContainer.current,
        loop: true,
        autoplay: true,
        rendererSettings: {
          viewBoxOnly: true,
          preserveAspectRatio: 'xMidYMid'
        },
        animationData: HeroAnimation
      });
      animationLoaded.current = true;
    }
  }, []);

  return (
    <div className='h-full w-full flex items-center justify-center' ref={animationContainer} />
  );
};

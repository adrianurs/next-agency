'use client';
import { FC, useEffect, useRef } from 'react';
import { LoaderJSON } from '@/assets';
import lottie from 'lottie-web';

export const Loader: FC = () => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const animationLoaded = useRef(false);

  useEffect(() => {
    // !animationLoaded.current - avoiding to render animation twice
    if (animationContainer.current && !animationLoaded.current) {
      lottie.loadAnimation({
        container: animationContainer.current,
        loop: true,
        autoplay: true,
        rendererSettings: {
          viewBoxOnly: true,
          preserveAspectRatio: 'xMidYMid',
          className: 'h-[300px]'
        },
        animationData: LoaderJSON
      });
      animationLoaded.current = true;
    }
  }, []);

  return <div className='h-full w-full flex justify-center' ref={animationContainer} />;
};

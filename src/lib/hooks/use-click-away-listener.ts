'use client';
import { useEffect, RefObject } from 'react';

/**
 * Hook that triggers a parsed callback when user clicks outside from ref passed
 */
export function useClickAwayListener(ref: RefObject<HTMLElement>, callback: () => void) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref?.current && !ref?.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line
  }, [ref]);
}

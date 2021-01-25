import { useEffect } from 'react';

export default function useTimeout(callback: () => void, delay: number) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      callback();
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
}

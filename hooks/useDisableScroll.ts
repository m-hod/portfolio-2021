import React, { useEffect } from 'react';

export default function useDisableScroll(isOpen: boolean) {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (isOpen) {
        document.body.style.height = '100%';
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.height = 'auto';
        document.body.style.overflow = 'auto';
        document.body.style.overflowX = 'hidden';
      }
    }
    return () => {
      document.body.style.height = 'auto';
      document.body.style.overflow = 'auto';
      document.body.style.overflowX = 'hidden';
    };
  }, [isOpen]);
}
